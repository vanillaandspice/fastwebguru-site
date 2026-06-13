---
title: "Your Sign-Up Journey"
category: "website"
skill: "signup"
sourceFile: "../assets/signup-flow.md"
lastUpdated: "2026-06-07"
---
# Fast Web Guru — Signup & Assessment Flow Design
## Corey Haines Signup Framework

*Created: 2026-06-07 | Source: product-marketing.md + signup skill*

---

## Two Distinct Flows

FWG has two conversion paths, each with its own flow:

1. **Assessment flow** — "Get Your Free AI Assessment" → lead capture → nurture to $40/mo
2. **Direct signup flow** — "Get Started" on pricing/service pages → $40 or $240 sign-up

This document covers both.

---

## FLOW 1: AI Assessment Form

### Entry points (all pages)
Every page has "Get Your Free AI Assessment" as the primary CTA. Clicking it opens either:
- **Inline modal** (recommended for homepage and service pages — keeps user in context)
- **Dedicated page** at `/get-assessment` (for direct links, ads, social)

### Form design

**Single-step form (4 fields):**

```
Your name          [text field]
Your email         [email field]
Your website URL   [url field — pre-validate format]
Type of business   [dropdown]
  → Retail / ecommerce
  → Hospitality / food & drink
  → Trade / services
  → Professional services
  → Creative / agency
  → Something else

[Send me my assessment]

No sales call. No lock-in. In your inbox within 24 hours.
```

**Design principles applied:**
- 4 fields only — every extra field cuts conversion 5-10%
- Business type dropdown: one qualifying question, no friction, enables personalisation
- No phone number — ever
- No "how did you hear about us" — collect this in the follow-up sequence if needed
- Inline validation on email field (flag typos like gmial.com → gmail.com)
- URL field: pre-fill with "https://" to signal format expected

**Button copy:**
- Primary: `Send me my assessment`
- Alternative to A/B test: `Check my website →`

**Trust microcopy under button:**
> No sales call. No lock-in. Your assessment lands in your inbox within 24 hours.

---

### Post-submission: Thank you state

**If modal:** Modal swaps to a confirmation state (don't redirect away from the page they were on).

**If dedicated page `/get-assessment`:** Redirect to `/thank-you`

**Copy:**

**Headline:** You're in. We're on it.

**Body:**
> We've got your details and we're looking at [website URL] now.
>
> Your FWG AI Snapshot will be in your inbox within 24 hours — usually faster. It'll include your AI readiness score, three specific things we spotted, and the single biggest opportunity for your type of business.
>
> No generic advice. Actual findings from your actual website.

**Secondary action:**
> While you wait — [see how Fast Web Guru works →]

**What NOT to do on this page:**
- Don't upsell immediately (too early; destroys trust)
- Don't ask for more information
- Don't make them feel like they just signed up for a sales funnel

---

## FLOW 2: Direct Plan Signup ($40/mo or $240/mo)

### Entry points
- "Get Started" buttons on Pricing page (per plan)
- "Get Started" buttons on Core and Advanced service pages
- Email sequence — Email 4 (direct offer)

### Flow design (B2B hybrid — owner-operator audience)

**Step 1 of 2 — Account creation:**
```
Create your Fast Web Guru account

Email address     [email]
Password          [password with show/hide toggle]

[Continue →]

─── or ───

[Continue with Google]

Already have an account? [Sign in]
```

**Step 2 of 2 — About your business:**
```
Tell us about your business

Your name              [text]
Business name          [text]
Your website URL       [url — optional, pre-fill if from assessment]
Which plan?            [radio: ● Core $40/mo  ○ Advanced $240/mo]
                       [pre-select based on which CTA they clicked]

[Complete setup →]

No lock-in. Cancel anytime.
```

**Design principles:**
- 2 steps keeps it from feeling overwhelming
- Google auth option first — AU SMBs heavily use Google Workspace
- Business URL pre-filled from assessment data if they came through that funnel
- Plan pre-selected based on which button they clicked
- Password has show/hide toggle; no confirmation field needed
- No credit card at signup (if on monthly trial; confirm with Steve — not specified in Brand DNA)

**Post-signup redirect:** `/welcome` (onboarding page — see onboarding-flow.md)

---

## FLOW 3: Partner/Advocate Inquiry

### Entry point
"Get in touch about the partner program" on /partners

### Form design (simple contact, no barrier)
```
Your name           [text]
Email address       [email]
What you do         [text — e.g. "freelance copywriter with 15 clients"]
Website or LinkedIn [url — optional]

[Let's talk →]

We'll reply within 24 hours. No scripts, just a real conversation.
```

---

## Mobile Optimisation Notes

All forms must be tested on mobile — the primary audience (owner-operators) often submit on their phone:
- Minimum touch target: 48px height on all inputs and buttons
- `type="email"` on email field → triggers right keyboard
- `type="url"` on website field → triggers right keyboard
- `autocomplete` attributes on name/email for autofill
- Single column layout (no side-by-side fields on mobile)
- Sticky submit button at bottom of viewport on longer forms

---

## Error States

**Email already exists (signup flow):**
> Looks like you already have an account. [Sign in instead →]
> *(Don't say "email already registered" — sounds corporate)*

**Invalid URL format (assessment form):**
> That doesn't look quite right — make sure it starts with https:// or www.

**Invalid email format:**
> Double-check your email — we want to make sure we can reach you.

**All error messages:** Inline (not modal), specific (not "please fill in this field"), written in FWG voice.

---

## Tracking Requirements

Before launch, confirm these events are firing:
- `assessment_form_start` — first field interaction
- `assessment_form_submit` — successful submission
- `signup_step1_complete` — account created
- `signup_step2_complete` — business info added
- `signup_complete` — full signup done
- Track by traffic source (UTM params on all CTAs)
