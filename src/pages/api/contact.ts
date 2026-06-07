// TODO: Wire to Resend or SendGrid — set CONTACT_EMAIL in Vercel env vars

export const prerender = false;

export async function POST({ request }: { request: Request }) {
  try {
    const formData    = await request.formData();
    const name        = formData.get('name')?.toString().trim();
    const business    = formData.get('business')?.toString().trim();
    const email       = formData.get('email')?.toString().trim();
    const siteUrl     = formData.get('url')?.toString().trim();
    const topic       = formData.get('topic')?.toString().trim();
    const message     = formData.get('message')?.toString().trim();

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // TODO: Send email via Resend API to process.env.CONTACT_EMAIL
    console.log('[Contact form]', { name, business, email, siteUrl, topic, message });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[Contact error]', err);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
