export const prerender = false;
import type { APIRoute } from 'astro';
import crypto from 'node:crypto';
import { createSupabaseAdmin } from '../../../lib/supabase';
import { getClientManifest, getClientFile } from '../../../lib/github';
import { getAccessToken, createFolder, createDoc, updateDoc, exportDoc, docUrl } from '../../../lib/google';

const sha = (s: string) => crypto.createHash('sha256').update(s).digest('hex');
const norm = (s: string) => s.replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n').trim();

// Git -> Drive sync for the signed-in client. Creates/updates a Google Doc per
// asset in the client's own Drive, skipping unchanged content (hash guard).
export const POST: APIRoute = async (context) => {
  const client = context.locals.client;
  if (!client) return json({ error: 'unauthorized' }, 401);

  const admin = createSupabaseAdmin();

  const { data: tok } = await admin
    .from('drive_tokens').select('refresh_token').eq('client_id', client.id).maybeSingle();
  if (!tok?.refresh_token) return json({ error: 'no_drive_token', message: 'Sign out and back in to grant Google Drive access.' }, 400);

  let token: string;
  try {
    token = await getAccessToken(tok.refresh_token);
  } catch (e: any) {
    return json({ error: 'token_refresh_failed', message: String(e?.message ?? e) }, 502);
  }

  // Ensure the client has a Drive folder (created by this app).
  let folderId = (await admin.from('clients').select('drive_folder_id').eq('id', client.id).maybeSingle()).data?.drive_folder_id as string | null;
  if (!folderId) {
    folderId = await createFolder(token, `${client.name} — Client Portal`);
    await admin.from('clients').update({ drive_folder_id: folderId }).eq('id', client.id);
  }

  const manifest = await getClientManifest(client);
  const { data: rows } = await admin
    .from('client_assets').select('slug, drive_doc_id, content_hash').eq('client_id', client.id);
  const bySlug = new Map((rows ?? []).map((r: any) => [r.slug, r]));

  const LIMIT = 6; // cap Drive work per request so we stay under the function timeout
  let created = 0, updated = 0, skipped = 0, failed = 0, work = 0, done = true;
  for (const asset of manifest.assets ?? []) {
    try {
      const md = await getClientFile(client, asset.sourceFile);
      if (!md) { failed++; continue; }
      const hash = sha(md);
      const ex: any = bySlug.get(asset.slug);

      if (ex?.drive_doc_id && ex.content_hash === hash) { skipped++; continue; }
      if (work >= LIMIT) { done = false; break; }
      work++;

      let docId: string;
      if (ex?.drive_doc_id) { await updateDoc(token, ex.drive_doc_id, md); docId = ex.drive_doc_id; updated++; }
      else { docId = await createDoc(token, folderId, asset.displayTitle ?? asset.slug, md); created++; }

      // Capture the Doc's exported markdown as the baseline, so a later edit is
      // detected against Google's own rendering — not the original markdown
      // (the round-trip reformats, so comparing to git would flag everything).
      let docHash: string | null = null;
      try { docHash = sha(norm(await exportDoc(token, docId))); } catch {}

      await admin.from('client_assets').upsert({
        client_id: client.id, slug: asset.slug, drive_doc_id: docId, drive_doc_url: docUrl(docId),
        content_hash: hash, doc_hash: docHash, updated_at: new Date().toISOString(),
      }, { onConflict: 'client_id,slug' });
    } catch (e) {
      console.error('[portal] sync asset failed:', asset.slug, e);
      failed++;
    }
  }

  return json({ ok: true, done, folderId, created, updated, skipped, failed });
};

function json(obj: unknown, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
}
