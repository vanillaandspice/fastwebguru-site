export const prerender = false;
import type { APIRoute } from 'astro';
import { createSupabaseServer } from '../../../lib/supabase';

// Google → Supabase redirects back here with a code; exchange it for a session.
export const GET: APIRoute = async (context) => {
  const code = context.url.searchParams.get('code');
  if (!code) return context.redirect('/portal/login?error=missing_code');

  const supabase = createSupabaseServer(context);
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) return context.redirect('/portal/login?error=exchange');

  return context.redirect('/portal');
};
