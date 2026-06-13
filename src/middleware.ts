import { defineMiddleware } from 'astro:middleware';
import { createSupabaseServer, createSupabaseAdmin } from './lib/supabase';

// Portal paths reachable without being signed in.
const PUBLIC_PATHS = new Set(['/portal/login', '/portal/no-access']);

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Only the portal is gated; the marketing site is untouched.
  if (!pathname.startsWith('/portal')) return next();
  if (PUBLIC_PATHS.has(pathname) || pathname.startsWith('/portal/auth/')) return next();

  const supabase = createSupabaseServer(context);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.email) return context.redirect('/portal/login');

  // The signed-in email decides which client's data they may see.
  const admin = createSupabaseAdmin();
  const { data: membership } = await admin
    .from('client_users')
    .select('client_id, clients ( id, name, slug, git_path )')
    .eq('email', user.email)
    .maybeSingle();

  if (!membership) return context.redirect('/portal/no-access');

  context.locals.user = { email: user.email, name: (user.user_metadata as any)?.name ?? null };
  context.locals.client = (membership as any).clients ?? null;
  return next();
});
