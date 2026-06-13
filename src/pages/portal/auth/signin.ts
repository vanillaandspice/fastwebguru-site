export const prerender = false;
import type { APIRoute } from 'astro';
import { createSupabaseServer } from '../../../lib/supabase';

// Kicks off Google OAuth. Supabase returns the provider URL; we redirect to it.
export const POST: APIRoute = async (context) => {
  const supabase = createSupabaseServer(context);
  const redirectTo = new URL('/portal/auth/callback', context.url.origin).toString();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo },
  });

  if (error || !data?.url) {
    return context.redirect('/portal/login?error=oauth');
  }
  return context.redirect(data.url);
};
