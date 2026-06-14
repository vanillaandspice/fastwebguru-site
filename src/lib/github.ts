// Fetches a client's portal data live from the PRIVATE source repo at request
// time. Nothing client-specific is committed to this (public) site.

const REPO = import.meta.env.DATA_REPO ?? 'vanillaandspice/claudeskills';
const REF = import.meta.env.DATA_REF ?? 'main';
const TOKEN = import.meta.env.GITHUB_TOKEN;
// Write-scoped token (Contents: read+write) used only for Drive -> Git write-back.
const WRITE_TOKEN = import.meta.env.GITHUB_WRITE_TOKEN;

export interface PortalClient { git_path: string }

// Encode each path segment but keep the slashes (handles spaces, dots, etc.).
function ghPath(p: string) {
  return p.split('/').filter(Boolean).map(encodeURIComponent).join('/');
}

async function ghRaw(repoPath: string): Promise<string | null> {
  const url = `https://api.github.com/repos/${REPO}/contents/${ghPath(repoPath)}?ref=${encodeURIComponent(REF)}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github.raw+json',
      'User-Agent': 'fwg-portal',
    },
  });
  if (!res.ok) return null;
  return res.text();
}

// Best-effort per-instance cache, keyed by client path, to avoid hammering the
// GitHub API. Short TTL; never shared across clients.
const cache = new Map<string, { at: number; data: any }>();
const TTL = 60_000;

export async function getClientManifest(client: PortalClient) {
  const key = `m:${client.git_path}`;
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < TTL) return hit.data;
  const raw = await ghRaw(`${client.git_path}/portal-manifest.json`);
  const data = raw ? JSON.parse(raw) : { site: {}, categories: [], assets: [] };
  cache.set(key, { at: Date.now(), data });
  return data;
}

export async function getClientFile(client: PortalClient, sourceFile: string): Promise<string> {
  const rel = sourceFile.replace(/^(\.\.\/)+/, ''); // tolerate legacy ../ prefixes
  const raw = await ghRaw(`${client.git_path}/${rel}`);
  return raw ?? '';
}

// --- Write-back (Drive -> Git) ---------------------------------------------

async function ghFileSha(repoPath: string): Promise<string | null> {
  const url = `https://api.github.com/repos/${REPO}/contents/${ghPath(repoPath)}?ref=${encodeURIComponent(REF)}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${WRITE_TOKEN}`, Accept: 'application/vnd.github+json', 'User-Agent': 'fwg-portal' },
  });
  if (!res.ok) return null;
  return (await res.json()).sha ?? null;
}

// Commit new content to a file in the client's folder. Returns the commit URL.
export async function putClientFile(
  client: PortalClient, sourceFile: string, content: string, message: string
): Promise<string> {
  const rel = sourceFile.replace(/^(\.\.\/)+/, '');
  const repoPath = `${client.git_path}/${rel}`;
  const sha = await ghFileSha(repoPath);
  const url = `https://api.github.com/repos/${REPO}/contents/${ghPath(repoPath)}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${WRITE_TOKEN}`, Accept: 'application/vnd.github+json', 'User-Agent': 'fwg-portal' },
    body: JSON.stringify({
      message,
      content: Buffer.from(content, 'utf8').toString('base64'),
      branch: REF,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) throw new Error(`putClientFile failed (${res.status}): ${await res.text()}`);
  return (await res.json())?.commit?.html_url ?? '';
}
