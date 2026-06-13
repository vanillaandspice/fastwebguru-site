// Minimal Google Drive helpers for the portal's Git -> Drive sync.
// Uses a client's stored OAuth refresh token (drive.file scope) to create and
// update Google Docs in their own Drive. drive.file means we can only touch
// files this app created — so the sync creates its own folder + docs.

const CLIENT_ID = import.meta.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.GOOGLE_CLIENT_SECRET;

export async function getAccessToken(refreshToken: string): Promise<string> {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  });
  if (!res.ok) throw new Error(`token refresh failed (${res.status}): ${await res.text()}`);
  return (await res.json()).access_token as string;
}

export async function createFolder(token: string, name: string): Promise<string> {
  const res = await fetch('https://www.googleapis.com/drive/v3/files?fields=id', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, mimeType: 'application/vnd.google-apps.folder' }),
  });
  if (!res.ok) throw new Error(`createFolder failed (${res.status}): ${await res.text()}`);
  return (await res.json()).id as string;
}

// Create a Google Doc by uploading markdown and letting Drive convert it.
export async function createDoc(token: string, folderId: string, title: string, markdown: string): Promise<string> {
  const boundary = 'fwg' + Math.random().toString(36).slice(2);
  const metadata = { name: title, mimeType: 'application/vnd.google-apps.document', parents: [folderId] };
  const body =
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(metadata)}\r\n` +
    `--${boundary}\r\nContent-Type: text/markdown\r\n\r\n${markdown}\r\n--${boundary}--`;
  const res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': `multipart/related; boundary=${boundary}` },
    body,
  });
  if (!res.ok) throw new Error(`createDoc failed (${res.status}): ${await res.text()}`);
  return (await res.json()).id as string;
}

// Overwrite an existing Doc's content with new markdown (re-converted).
export async function updateDoc(token: string, fileId: string, markdown: string): Promise<void> {
  const res = await fetch(
    `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`,
    {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'text/markdown' },
      body: markdown,
    }
  );
  if (!res.ok) throw new Error(`updateDoc failed (${res.status}): ${await res.text()}`);
}

export const docUrl = (id: string) => `https://docs.google.com/document/d/${id}/edit`;
