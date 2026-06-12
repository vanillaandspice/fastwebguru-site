---
title: "Pre-Build Checklist"
category: "build"
skill: "developer-handoff"
sourceFile: "../assets/8-jun-4am-fwg-pre-coding-checklist.md"
lastUpdated: "2026-06-10"
---
# Fast Web Guru — Pre-Coding Build Checklist
*Created: 2026-06-08*
*Purpose: Complete checklist of decisions, assets, and infrastructure needed before the first line of Astro code is written*

---

## Confirmed Decisions

| Decision | Answer | Notes |
|----------|--------|-------|
| Domain | **fastwebguru.com** | No .com.au |
| Platform | **Astro + Vercel** | Full code, no WordPress |
| Builder | **Steve + Claude Code** | MCP + GitHub already linked |
| Signup | **Card required at $40/mo** | No free trial |
| Assessment delivery | **Instant automated** | Claude API + PageSpeed API — build as part of site |
| Deployment | **Vercel** | Already linked to GitHub |

---

## Decisions Still Needed

These must be resolved before or during the build. Items marked 🚨 are blocking specific pages or components.

| Decision | Status | Impact |
|----------|--------|--------|
| **Testimonials** — which of the 20 existing clients to approach first | 🚨 Blocking | Every page has a placeholder; the site will launch without social proof unless this is resolved |
| **Hard launch deadline** | ❓ Unknown | Determines build sprint length |
| **Annual billing confirmed** | ❓ Unknown | $400/yr Core, $2,400/yr Advanced — needs to be confirmed before payment integration |
| **Contact form email** | 🚨 Blocking | The contact form (Page 9) needs an actual email destination |
| **Blog at launch** | ❓ Unknown | Option A: empty Astro content collection as placeholder; Option B: no blog section until post-launch |
| **Design assets ready** | 🚨 Blocking | Cannot start UI build without logo and brand colours (see Design Assets section below) |
| **BugHerd account** | ❓ Unknown | Already set up or needs creating? Required before any client demo |
| **Assessment serverless function** | ❓ Unknown | Include in Astro repo as a Vercel serverless function, or build as a separate project? |
| **Legal pages** | 🚨 Required before launch | Privacy Policy + Terms of Service — Australian Privacy Act 1988 compliance |
| **WHMCS integration** | ❓ Unknown | `/support` link — redirect to existing WHMCS URL, or build an intermediate page? |

### Historic Site Integration — Decisions Needed
*From `website-copy-integrated-v1.md`. These affect specific pages inherited from the old site.*

| Alert | Status | Affects |
|-------|--------|---------|
| ~~A1 — "Corehost" brand name~~ | ✅ Resolved — Cortex Host Systems landing page. Included free with Full Code; part of $30 Cortex package otherwise. | `/hosting/professional-hosting/` |
| ~~A2 — $4/month MVP tier~~ | ✅ Resolved — $4–$5/month Friends & Family invite-only hidden page. Noindex. Leads with features, not price. | `/fast-easy-website/one-page-website-design/` |
| ~~A3 — WPX webmail/email server details~~ | ✅ Resolved — mail.yourdomain.com, IMAP 993, POP3 995, SMTP 465, auth required. | `/webmail-access/` |
| ~~A4 — Content Builder Top Up~~ | ✅ Resolved — renamed "Fast Web Guru Specialist Rates." Old package refs removed; references Core/Ecommerce/Advanced. Live page. | `/content-marketing-specialist/fast-content-builder-top-up/` |
| ~~A5 — Testimonials~~ | ✅ Resolved — Richard Lloyd: do not publish. Michael Toome: approved. | Advanced/Ecommerce pages |
| ~~A6 — Join Our Team~~ | ✅ Resolved — copy approved. | `/join-our-team/` |
| ~~A7 — Google Maps PDF guide~~ | ✅ Resolved — GBP page updated with 2026 features. Update PDF content to match. | `/google-maps/`, `/google-maps-pdf-download/` |
| ~~A9 — Google Workspace pricing~~ | ✅ Resolved — Starter $8.40, Standard $16.80, Plus $30.90/user/mo (ex-GST). | `/emails/` |
| **A8 — T&Cs legal review** | 🚨 OPEN — needs legal sign-off before publishing. | `/terms-conditions/` |
| **A10 — Asia Pacific / overseas team language** | ❓ OPEN — neutral language retained. Confirm if explicit overseas team mention wanted. | `/our-story/`, `/about/` |

---

## Design Assets Needed

Cannot start the UI build without these. All are blocking.

| Asset | Format | Status |
|-------|--------|--------|
| Logo — primary (dark background) | SVG | ❓ |
| Logo — primary (light background) | SVG | ❓ |
| Logo — icon/mark only (for favicon) | SVG | ❓ |
| Brand colour palette | Hex values (primary, secondary, accent, neutrals) | ❓ |
| Typography — heading font | Google Font name or font files | ❓ |
| Typography — body font | Google Font name or font files | ❓ |
| Favicon | 32×32 PNG + 180×180 PNG (Apple touch) | ❓ |
| OG image | 1200×630 PNG (for social sharing / link previews) | ❓ |
| Hero image or illustration | SVG or high-res PNG | ❓ |
| Feature icons (6 minimum) | SVG | ❓ |
| About page photo | PNG/JPG — Steve or team | ❓ |

---

## Content Status Per Page

Use `website-copy-v3.md` as the source for all page copy.

| Page | URL | Copy | Testimonial | Images | Blockers |
|------|-----|------|------------|--------|----------|
| Homepage | `/` | ✅ v3 ready | 🚨 2 placeholders | 🚨 Hero image | Testimonials, hero image |
| Pricing | `/pricing` | ✅ v3 ready | 🚨 1 placeholder | — | Testimonial, annual billing confirmation |
| How It Works | `/how-it-works` | ✅ v3 ready | — | ❓ Process illustrations | — |
| Core Plan | `/services/core` | ✅ v3 ready | 🚨 1 placeholder | — | Testimonial |
| Advanced Plan | `/services/advanced` | ✅ v3 ready | 🚨 1 placeholder | — | Testimonial |
| Website Builds | `/services/website-builds` | ✅ v3 ready | — | — | — |
| About | `/about` | ✅ v3 ready | — | 🚨 Team/Steve photo | Photo |
| Partners | `/partners` | ✅ v3 ready | — | — | — |
| Contact | `/contact` | ✅ v3 ready | — | — | 🚨 Actual email address |
| Privacy Policy | `/privacy` | ❌ Not written | — | — | 🚨 Legal — required before launch |
| Terms of Service | `/terms` | ❌ Not written | — | — | 🚨 Legal — required before launch |

---

## Technical Setup — Astro + Vercel

### Astro Project

- [ ] Scaffold Astro project (`npm create astro@latest`) — confirm: blank starter or specific template?
- [ ] Choose rendering mode: static (SSG) for most pages; SSR for assessment tool endpoint
- [ ] Set up content collections for blog (even if blog launches empty — better to scaffold now)
- [ ] Configure `astro.config.mjs` with Vercel adapter
- [ ] Set up component library strategy: custom CSS or Tailwind?
- [ ] Confirm TypeScript: yes (recommended for Astro 4+) or plain JS?

### Robots / Indexing Block (Development)

Block all search engine indexing during development. **Remove before go-live** (see Pre-Launch QA Checklist below).

**Step 1 — robots.txt** (`public/robots.txt`):
```
User-agent: *
Disallow: /
```

**Step 2 — Meta tag** (base layout `src/layouts/Base.astro` or equivalent `<Head>` component):
```html
<meta name="robots" content="noindex, nofollow">
```

Both together ensure Google, Bing, and other crawlers cannot index the site. robots.txt blocks crawling; the meta tag blocks indexing even if a crawler reaches a page via a direct link.

### Vercel

- [ ] Confirm GitHub repo is connected to Vercel project
- [ ] Confirm branch strategy: `main` → production, `dev` → preview deployments
- [ ] Set up Vercel environment variables (list below)
- [ ] Enable Vercel Analytics (free tier — useful from day one)
- [ ] Configure custom domain: fastwebguru.com → Vercel DNS

### Environment Variables (to configure in Vercel dashboard)

| Variable | Purpose | Source |
|----------|---------|--------|
| `ANTHROPIC_API_KEY` | Claude API for instant assessment generation | Anthropic console |
| `PAGESPEED_API_KEY` | Google PageSpeed API for assessment data | Google Cloud Console |
| `CONTACT_FORM_EMAIL` | Destination for contact form submissions | Steve to confirm |
| `STRIPE_SECRET_KEY` | Payment processing for $40/mo signup | Stripe dashboard |
| `STRIPE_PUBLISHABLE_KEY` | Client-side Stripe for payment form | Stripe dashboard |
| `WHMCS_URL` | WHMCS portal URL for `/support` redirect | Existing WHMCS setup |

### Domain DNS

- [ ] Confirm who currently holds fastwebguru.com DNS
- [ ] Point domain to Vercel nameservers (or add Vercel A/CNAME records)
- [ ] Set up `www` redirect → `fastwebguru.com` (no www preferred for this brand)
- [ ] SSL certificate: Vercel handles automatically — confirm after DNS propagation

---

## Assessment Tool — Technical Scope

Assessment delivery is confirmed as **instant automated** (Claude API + PageSpeed API). This needs to be built as part of the Astro site.

### Recommended architecture

- **Astro API route** (`src/pages/api/assessment.ts`) — receives form POST, calls PageSpeed + Claude APIs, returns JSON
- **Vercel serverless function** — Astro API routes deploy as Vercel functions automatically
- **No separate project needed** — keep it in the Astro repo

### Assessment flow

1. User fills in assessment form (name, email, website URL, business type)
2. Form POSTs to `/api/assessment`
3. Server calls Google PageSpeed API with the website URL
4. Server calls Claude API with PageSpeed results + business type → generates personalised report
5. Report stored (Notion or Vercel KV for MVP, database for V2)
6. User redirected to `/assessment/results?id=[unique-id]` or report emailed instantly
7. Follow-up email sequence triggered (via email platform)

### Email platform (choose before build)

- **Resend** — developer-friendly, free tier 3,000 emails/mo, simple API — recommended for Astro
- **Mailchimp** — more marketing features, harder API — better if sequences are complex
- Confirm before building the assessment API route

---

## Infrastructure to Set Up Before Launch

| Item | Status | Notes |
|------|--------|-------|
| BugHerd account | ❓ | For client website change requests — the core UX differentiator |
| Stripe account | ❓ | For $40/mo card-at-signup — needs to be live before launch |
| Email platform | ❓ | Resend or Mailchimp — for assessment delivery + nurture sequence |
| Google Analytics 4 | ❓ | Track: form start, form submit, signup steps, traffic source |
| Google PageSpeed API | ❓ | Enable in Google Cloud Console, generate API key |
| Anthropic API key | ❓ | Production key for Claude API (assessment generation) |
| Notion (optional) | ❓ | Assessment result storage for MVP logging |

---

## Build Sequence (Recommended)

Build in this order to have something testable at each stage:

1. **Scaffold + deploy** — Astro project on Vercel, blank pages, domain pointing correctly
2. **Design system** — colours, fonts, spacing, button styles, component library
3. **Homepage** — highest priority; most traffic; hero + copy only (no assessment form yet)
4. **Assessment form + API** — the primary CTA; needs to work before anything else converts
5. **Pricing page** — second most important conversion page
6. **How It Works** — reduces friction for undecided visitors
7. **Service pages** (Core, Advanced, Builds) — supporting conversion pages
8. **About + Partners + Contact** — supporting trust pages
9. **Legal pages** (Privacy, Terms) — required before launch
10. **Email nurture sequence** — set up in email platform, wire to assessment API
11. **WHMCS integration** — `/support` link
12. **Analytics + tracking** — GA4 events wired to form interactions
13. **QA pass** — all pages across mobile, tablet, desktop
14. **Soft launch** — existing 20 clients first
15. **Full launch**

---

## Astro-Specific Build Notes

- **No WordPress** — all content in `.md` files or Astro component props
- **Blog**: scaffold as Astro content collection (`src/content/blog/`) even if empty at launch — avoids a refactor later
- **Schema markup**: LocalBusiness, FAQPage, BreadcrumbList — can be added post-launch but build the Astro `<Head>` component to accept structured data props from day one
- **Vercel preview deployments**: every PR gets a preview URL — use for design/copy review before merging to main
- **Claude MCP**: already connected — use for content generation, copy refinement, and assessment tool development throughout the build
- **Assessment page** (`/assessment/results/[id]`): build with dynamic routing in Astro SSR mode; this page renders the personalised report for each user

---

## Pre-Launch QA Checklist

Before going live, verify:

- [ ] **REMOVE ROBOTS BLOCK** — Update `public/robots.txt` to allow all crawlers (see below) and remove `<meta name="robots" content="noindex, nofollow">` from the base layout. Confirm with a robots.txt checker tool before launch.
  ```
  # Production robots.txt — replace the development block with this:
  User-agent: *
  Allow: /
  Sitemap: https://fastwebguru.com/sitemap.xml
  ```
- [ ] Sitemap generated and referenced in robots.txt (`/sitemap.xml` — Astro's `@astrojs/sitemap` integration handles this automatically if configured)

- [ ] All 11 pages render correctly on mobile (375px), tablet (768px), desktop (1280px)
- [ ] Assessment form submits successfully and returns instant results
- [ ] Email nurture sequence fires correctly after assessment submission
- [ ] Stripe payment flow completes for $40/mo Core and $240/mo Advanced
- [ ] Contact form submits and email is received at the correct address
- [ ] All `[TESTIMONIAL NEEDED]` markers removed (real quotes in place or sections suppressed)
- [x] ~~**A5 — Richard Lloyd testimonial**~~ — do not publish. Michael Toome approved.
- [x] ~~**A6 — Join Our Team**~~ — copy approved.
- [x] ~~**A9 — Google Workspace pricing**~~ — updated to 2026 AUD rates (Starter $8.40, Standard $16.80, Plus $30.90/user/mo ex-GST).
- [x] ~~**A3 — Email server details**~~ — mail.yourdomain.com, IMAP 993, POP3 995, SMTP 465 confirmed.
- [ ] **A8 — Terms & Conditions legal review** — IP/ownership clause revised; get legal sign-off before publishing (Australian Privacy Act 1988 compliance also required)
- [ ] Privacy Policy and Terms of Service pages are live
- [ ] GA4 events firing: form_start, form_submit, assessment_complete, signup_start, signup_complete
- [ ] Favicon appears correctly in browser tab
- [ ] OG image renders correctly when URL is shared on LinkedIn/Facebook
- [ ] fastwebguru.com loads over HTTPS with valid certificate
- [ ] `www.fastwebguru.com` redirects to `fastwebguru.com`
- [ ] All internal links work (no 404s)
- [ ] BugHerd is installed and functional on the live site (meta for FWG to dogfood their own product)
- [ ] WHMCS portal link (`/support` or direct) is working

---

## Reference Documents

All planning documents in `clients/fast-web-guru/assets/`:

| Document | Purpose |
|----------|---------|
| `website-copy-integrated-v1.md` | **Master copy — use this for all pages** (combines v6 dev copy + updated historic K pages + redirect map) |
| `website-copy-v6.md` | v6 primary pages (referenced by integrated-v1) |
| `website-copy-v3.md` | Legacy copy — superseded by v6 and integrated-v1 |
| `site-architecture.md` | Page structure, URL map, nav spec |
| `cro-report.md` | CRO recommendations (all applied in v3) |
| `copy-pillars.md` | 5 messaging pillars for consistent copy |
| `taglines.md` | Tagline shortlist — recommended: "Your website. Done for you. Today." |
| `brand-voice-examples.md` | Voice guide — use when writing any new copy |
| `ai-assessment-tool-design.md` | Assessment tool spec (intake form, report structure, build approach) |
| `signup-flow.md` | Signup UX flow (form fields, confirmation, error states) |
| `email-nurture-sequence.md` | 5-email sequence from assessment → $40/mo conversion |
| `onboarding-flow.md` | Client onboarding: Week 1 checklist, email sequence |
| `launch-plan.md` | 5-phase GTM plan post-launch |
| `customer-research.md` | VOC research — use for any new copy |
| `competitor-profiles.md` | Competitor analysis — use to maintain differentiation |
| `pricing-strategy.md` | Pricing framework — anchoring, charm pricing, annual structure |
