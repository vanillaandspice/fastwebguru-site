// TODO: Replace with live Claude API + PageSpeed API integration
// See: clients/fast-web-guru/assets/8-jun-4am-fwg-pre-coding-checklist.md

export const prerender = false;

export async function POST({ request }: { request: Request }) {
  try {
    const formData = await request.formData();
    const name          = formData.get('name')?.toString().trim();
    const email         = formData.get('email')?.toString().trim();
    const url           = formData.get('url')?.toString().trim();
    const businessType  = formData.get('business_type')?.toString().trim();

    if (!name || !email || !url || !businessType) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // TODO: Trigger assessment workflow:
    // 1. Run PageSpeed API against `url`
    // 2. Send site data + business type to Claude API for personalised analysis
    // 3. Email result to `email` via Resend / SendGrid
    // 4. Log submission to Notion / database

    console.log('[Assessment request]', { name, email, url, businessType });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[Assessment error]', err);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
