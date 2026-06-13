export const prerender = false;
import type { APIRoute } from 'astro';
import { createSupabaseServer, createSupabaseAdmin } from '../../../lib/supabase';

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// Invite-gated auto-provisioning: if a newly signed-in email isn't a client yet
// but has a pending invite, create their client + membership automatically.
async function provisionIfInvited(email: string) {
  const admin = createSupabaseAdmin();

  const { data: existing } = await admin
    .from('client_users').select('email').eq('email', email).maybeSingle();
  if (existing) return; // already a client user

  const { data: invite } = await admin
    .from('client_invites')
    .select('email, client_name, slug, status')
    .eq('email', email).eq('status', 'pending').maybeSingle();
  if (!invite) return; // not invited -> middleware will route to /portal/no-access

  const slug = (invite.slug && invite.slug.length ? invite.slug : slugify(invite.client_name));
  const { data: client } = await admin
    .from('clients')
    .upsert({ name: invite.client_name, slug, git_path: `clients/${slug}` }, { onConflict: 'slug' })
    .select('id').single();
  if (!client) return;

  await admin.from('client_users').insert({ email, client_id: client.id, role: 'owner' });
  await admin.from('client_invites')
    .update({ status: 'consumed', consumed_at: new Date().toISOString() })
    .eq('email', email);
}

// Google -> Supabase redirects back here with a code; exchange it for a session.
export const GET: APIRoute = async (context) => {
  const code = context.url.searchParams.get('code');
  if (!code) return context.redirect('/portal/login?error=missing_code');

  const supabase = createSupabaseServer(context);
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);
  if (error || !data?.user?.email) return context.redirect('/portal/login?error=exchange');

  try {
    await provisionIfInvited(data.user.email.toLowerCase());
  } catch (e) {
    // Provisioning failure shouldn't block login; the user will see no-access
    // and we can fix the invite/registry. Log for diagnostics.
    console.error('[portal] auto-provision failed:', e);
  }

  return context.redirect('/portal');
};
