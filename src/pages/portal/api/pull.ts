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
// Aggressive whitespace collapse — used only to compare a doc to git when no
// baseline exists yet, so Google's blank-line reformatting isn't mistaken for an edit.
const collapse = (s: string) => s.replace(/\s+/g, ' ').trim();

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
  const { data: rows } = await admin
    .from('client_assets').select('slug, drive_doc_id, doc_hash').eq('client_id', client.id);

  let committed = 0, baselined = 0, skipped = 0, failed = 0;
  const changed: string[] = [];
  for (const r of rows ?? []) {
    const src = srcBySlug.get(r.slug);
    if (!r.drive_doc_id || !src) { skipped++; continue; }
    try {
      const exported = await exportDoc(token, r.drive_doc_id);
      const nh = sha(norm(exported));
      if (!r.doc_hash) {
        // First time we've seen this doc: honour any edit made before a baseline
        // existed by comparing (whitespace-insensitively) to the git source.
        const git = await getClientFile(client, src.sourceFile);
        if (collapse(exported) === collapse(git)) {
          await admin.from('client_assets').update({ doc_hash: nh }).eq('client_id', client.id).eq('slug', r.slug);
          baselined++;
          continue;
        }
        await putClientFile(client, src.sourceFile, exported, `portal: sync "${src.title}" from Google Docs edit`);
        await admin.from('client_assets')
          .update({ doc_hash: nh, content_hash: sha(exported), updated_at: new Date().toISOString() })
          .eq('client_id', client.id).eq('slug', r.slug);
        committed++; changed.push(r.slug);
        continue;
      }
      if (nh === r.doc_hash) { skipped++; continue; }
      // Real edit -> commit the Doc's markdown back to the source file.
      await putClientFile(client, src.sourceFile, exported, `portal: sync "${src.title}" from Google Docs edit`);
      await admin.from('client_assets')
        .update({ doc_hash: nh, content_hash: sha(exported), updated_at: new Date().toISOString() })
        .eq('client_id', client.id).eq('slug', r.slug);
      committed++; changed.push(r.slug);
    } catch (e) {
      console.error('[portal] pull asset failed:', r.slug, e);
      failed++;
    }
  }
  return json({ ok: true, committed, baselined, skipped, failed, changed });
};

function json(obj: unknown, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
}
