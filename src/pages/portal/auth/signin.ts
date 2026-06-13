export const prerender = false;
import type { APIRoute } from 'astro';
import { createSupabaseServer } from '../../../lib/supabase';

// Kicks off Google OAuth. Supabase returns the provider URL; we redirect to it.
export const POST: APIRoute = async (context) => {
  const supabase = createSupabaseServer(context);
  const redirectTo = new URL('/portal/auth/callback', context.url.origin).toString();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo,
      // Request Drive (file-scoped) + offline access so we receive a refresh
      // token to sync the client's documents into their own Drive.
      scopes: 'https://www.googleapis.com/auth/drive.file',
      queryParams: { access_type: 'offline', prompt: 'consent' },
    },
  });

  if (error || !data?.url) {
    return context.redirect('/portal/login?error=oauth');
  }
  return context.redirect(data.url);
};
