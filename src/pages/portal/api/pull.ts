export const prerender = false;
import type { APIRoute } from 'astro';
import crypto from 'node:crypto';
import { createSupabaseAdmin } from '../../../lib/supabase';
import { getClientManifest, getClientFile, putClientFile } from '../../../lib/github';
import { getAccessToken, exportDoc } from '../../../lib/google';

const sha = (s: string) => crypto.createHash('sha256').update(s).digest('hex');
// Normalise away the trivial whitespace differences Google's export introduces,
// so only *real* content edits register as a change vs the stored baseline.
const norm = (s: string) => s.replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n').trim();

// --- Lossy round-trip handling -------------------------------------------------
// Google Docs' markdown export reformats the whole file every round-trip (table
// separators, backslash escapes, auto-linked URLs, list markers, line joins).
// Two defences:
//   1. contentSig() reduces text to an ordered stream of content words, ignoring
//      all of those cosmetics. If the export's signature equals the current git
//      file's, the human changed nothing real -> we DON'T commit (just re-baseline).
//      Ordered (not set/multiset) so a genuine word change is never missed.
//   2. deMangle() strips the reversible cosmetics from whatever we do commit, so a
//      real edit lands as a smaller, cleaner diff.
function contentSig(s: string): string {
  const words = s
    .replace(/\r\n/g, '\n')
    .replace(/\\([-_*#.>`\[\]()+!~|=])/g, '$1')   // unescape Google's backslash escapes
    .toLowerCase()
    .replace(/\[([^\]]*?)\]\(([^)]*?)\)/g, '$1')  // [text](url) -> text
    .replace(/[|>#*`]/g, ' ')                      // strip md punctuation
    .replace(/[^a-z0-9$@./:%\-]+/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter((w) => !/^[-:]+$/.test(w));           // drop table-separator tokens (---, :----)
  return sha(words.join(' '));
}

function deMangle(s: string): string {
  return s
    .replace(/\r\n/g, '\n')
    .replace(/\\([-_*#.>`\[\]()+!~|=])/g, '$1')                              // backslash escapes
    .replace(/\[([^\]]+?)\]\((https?:\/\/[^)]+?)\)/g, (m, t, u) => (t === u ? u : m)) // [url](url) -> url
    .replace(/[ \t]+$/gm, '')                                                 // trailing whitespace
    .replace(/\n{3,}/g, '\n\n');                                              // collapse blank runs
}

// Drive -> Git write-back for the signed-in client.
// First run on a doc establishes a baseline (no commit). After that, any change
// from the baseline = a user edit -> committed back to the source .md.
export const POST: APIRoute = async (context) => {
  const client = context.locals.client;
  if (!client) return json({ error: 'unauthorized' }, 401);
  const admin = createSupabaseAdmin();

  const { data: tok } = await admin
    .from('drive_tokens').select('refresh_token').eq('client_id', client.id).maybeSingle();
  if (!tok?.refresh_token) return json({ error: 'no_drive_token', message: 'Sign out and back in to grant Drive access.' }, 400);

  let token: string;
  try { token = await getAccessToken(tok.refresh_token); }
  catch (e: any) { return json({ error: 'token_refresh_failed', message: String(e?.message ?? e) }, 502); }

  const manifest = await getClientManifest(client);
  const srcBySlug = new Map((manifest.assets ?? []).map((a: any) => [a.slug, { sourceFile: a.sourceFile, title: a.displayTitle ?? a.slug }]));
  const LIMIT = 6; // cap Drive work per request so we stay under the function timeout
  const offset = Math.max(0, Number(context.url.searchParams.get('offset') ?? '0') || 0);
  const { data: allRows } = await admin
    .from('client_assets').select('slug, drive_doc_id, doc_hash').eq('client_id', client.id)
    .order('slug', { ascending: true });
  const total = allRows?.length ?? 0;
  const rows = (allRows ?? []).slice(offset, offset + LIMIT);
  const done = offset + LIMIT >= total;

  let committed = 0, baselined = 0, skipped = 0, cosmetic = 0, failed = 0;
  const changed: string[] = [];
  for (const r of rows) {
    const src = srcBySlug.get(r.slug);
    if (!r.drive_doc_id || !src) { skipped++; continue; }
    try {
      const exported = await exportDoc(token, r.drive_doc_id);
      const nh = sha(norm(exported));
      if (!r.doc_hash) {
        // No baseline yet — establish one now without committing. Baselines are
        // normally set at sync time, so this is just a safety net.
        await admin.from('client_assets').update({ doc_hash: nh }).eq('client_id', client.id).eq('slug', r.slug);
        baselined++;
        continue;
      }
      if (nh === r.doc_hash) { skipped++; continue; }

      // The Doc differs from its baseline — but is it a *real* content edit, or
      // just Google's lossy reformat? Compare content words against what git holds.
      const current = (await getClientFile(client, src.sourceFile)) ?? '';
      if (contentSig(exported) === contentSig(current)) {
        // Cosmetic only — no human content change. Don't pollute git; re-baseline
        // so this Doc stops flagging on every pull.
        await admin.from('client_assets').update({ doc_hash: nh }).eq('client_id', client.id).eq('slug', r.slug);
        cosmetic++;
        continue;
      }

      // Genuine edit -> commit a de-mangled version (smaller, cleaner diff).
      const out = deMangle(exported);
      await putClientFile(client, src.sourceFile, out, `portal: sync "${src.title}" from Google Docs edit`);
      await admin.from('client_assets')
        .update({ doc_hash: nh, content_hash: sha(out), updated_at: new Date().toISOString() })
        .eq('client_id', client.id).eq('slug', r.slug);
      committed++; changed.push(r.slug);
    } catch (e) {
      console.error('[portal] pull asset failed:', r.slug, e);
      failed++;
    }
  }
  return json({ ok: true, done, nextOffset: done ? null : offset + LIMIT, committed, baselined, skipped, cosmetic, failed, changed });
};

function json(obj: unknown, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
}
