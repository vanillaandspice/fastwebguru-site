import { createServerClient, parseCookieHeader } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import type { AstroCookies } from 'astro';

const URL = import.meta.env.PUBLIC_SUPABASE_URL;
const PUBLISHABLE_KEY = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const SECRET_KEY = import.meta.env.SUPABASE_SECRET_KEY;

type CookieCtx = { request: Request; cookies: AstroCookies };

/**
 * Per-request Supabase client bound to the request/response cookies.
 * Handles the user's auth session (Google sign-in). Uses the publishable key.
 */
export function createSupabaseServer({ request, cookies }: CookieCtx) {
  return createServerClient(URL, PUBLISHABLE_KEY, {
    cookies: {
      getAll() {
        return parseCookieHeader(request.headers.get('Cookie') ?? '').map(
          ({ name, value }) => ({ name, value: value ?? '' })
        );
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          cookies.set(name, value, options as any)
        );
      },
    },
  });
}

/**
 * Service-role admin client (server-only, bypasses RLS) — used for the
 * email → client registry lookup. Never import this into client code.
 */
export function createSupabaseAdmin() {
  return createClient(URL, SECRET_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
