---
title: "Developer Handoff"
category: "build"
skill: "developer-handoff"
sourceFile: "../assets/cortex/developer-handoff.md"
lastUpdated: "2026-06-09"
---
# Fast Web Guru — Cortex Developer Handoff
*Created: 2026-06-09*
*Prepared for: Developer implementing Cortex on the FWG marketing site*

---

## What This Document Is

A complete, ordered instruction set for implementing the Cortex sub-brand on the Fast Web Guru website. Follow it top to bottom. Every piece of copy you need is in the reference files listed below.

**Do not edit copy.** All copy is finalised. Your job is to implement it as written.

---

## Reference Files

All files are in the repository at `clients/fast-web-guru/assets/`.

| File | What it contains |
|------|-----------------|
| `website-copy-v5.md` | **Master copy document.** All 14 pages. Use this as your single source of truth. |
| `site-architecture.md` | Updated URL map, nav spec, and footer spec (Cortex added). |
| `cortex/cro-report.md` | Layout and UX implementation notes for the Cortex pages. Read before building /cortex. |

**Do not reference v4 or earlier copy files.** v5 is the current version.

---

## Scope of Changes

| Type | Count | Details |
|------|-------|---------|
| Global find-and-replace | 5 strings | Prices and product name throughout |
| Existing pages to update | 7 pages | Homepage, Pricing, Core plan, Advanced plan, HITL, Contact form, Services nav |
| New pages to build | 4 pages | /cortex, /cortex/host-systems, /cortex/team-stack, /cortex/ops-grid |
| Architecture changes | 3 areas | Header nav, footer, URL map |

**Unchanged:** How It Works, Website Builds, About, Partners, Global CTA component.

---

## Step 1 — Global Find and Replace

Run these across the entire codebase before touching individual pages. These are exact string replacements.

| Find | Replace with | Notes |
|------|-------------|-------|
| `AI Add-on` | `Cortex` | Covers all text instances (page copy, nav labels, alt text, aria labels) |
| `$20/month` *(AI add-on price only)* | `$30/month` | **Caution:** Only replace where this refers to the AI add-on / Cortex add-on. Do not change $20/month if it appears in any other context. |
| `$60/month` | `$70/month` | This was Core + AI Add-on. Now Core + Cortex. |
| `$600/year` | `$700/year` | Annual Core + Cortex pricing. |
| `AI Add-on included — no extra charge` | `Cortex included — no extra charge` | Appears on the Advanced plan card. |

After running find-and-replace, also check for:
- `the AI Add-on` → `Cortex`
- `the $20 AI Add-on` → `Cortex`
- `Get Started with AI` *(CTA button label)* → `Get Started with Cortex`
- `Includes the AI Add-on` *(in AI Extender description)* → `Includes Cortex`

---

## Step 2 — Update Existing Pages

Work through these pages in order. For each, the exact updated copy is in `website-copy-v5.md` at the page number listed.

---

### 2.1 — Homepage (/) | v5 Page 1

**Section: PLANS SECTION**

Change the Core plan summary line:
- Old: `+ Add full AI enablement for $20/mo more`
- New: `+ Add Cortex AI for $30/mo more`

Change the Advanced plan summary line:
- Old: `Everything in Core, plus 16 hrs/month, full ecommerce management, and AI included`
- New: `Everything in Core, plus 16 hrs/month, full ecommerce management, and Cortex AI included`

**Section: NEW — CORTEX CALLOUT SECTION**

Add a new section between the PLANS SECTION and the WHOLESALE/PARTNER CALLOUT section.

Full copy: see `website-copy-v5.md` → Page 1 → `## CORTEX CALLOUT SECTION`

Layout notes:
- H2: "Add AI that actually knows your business. $30/month."
- Three-bullet feature list (one per pillar)
- CTA link (not a button): "See Cortex — $30/Month →" linking to `/cortex`
- One line below: "Or add it to any FWG plan from your account dashboard."
- Background: Use a light differentiated treatment (subtle tint or border) to visually separate this section from the Plans section above and the Partner callout below.

**Page meta description:** Update to include Cortex reference. See v5 Page 1 → PAGE META.

---

### 2.2 — Pricing (/pricing) | v5 Page 2

**Section: SELF-SELECTION HELPER**

Replace all 5 existing options with the new 6-option version. Exact copy: v5 Page 2 → `## SELF-SELECTION HELPER`

Key changes:
- Option 2: "$60/mo" → "$70/mo", "AI Add-on" → "Cortex"
- Option 3: "AI included" → "Cortex included"
- Option 4: "(AI included)" → "(Cortex included)"
- NEW Option 6: `→ I just want the AI layer — keeping my existing host — **Cortex only ($30/mo)** → [See Cortex →](/cortex)`

**Section: PLAN CARDS — Core**

Change the upsell line at the bottom of the Core card:
- Old: `**Want AI tools connected to your business?** Add the AI Add-on for $20/month more. See below.`
- New: `**Want AI actively working for your business?** Add Cortex for $30/month — three AI pillars, brand-trained brain, 20 monthly workflows. See below.`

Change CTA buttons:
- Old: `[Get Started — $40/month]` / `[Get Started with AI — $60/month]`
- New: `[Get Started — $40/month]` / `[Get Started with Cortex AI — $70/month]`

**Section: PLAN CARDS — Advanced**

Change the badge/label:
- Old: `**AI Add-on included — no extra charge**`
- New: `**Cortex included — no extra charge**`

Change the bullet point:
- Old: `Full AI enablement suite included (the $20 AI Add-on, at no extra cost)`
- New: `Cortex included — AI-native infrastructure, Brand DNA + AI Specialist, 20 monthly growth workflows (no extra charge)`

**Section: ADD-ONS — Replace AI Add-on block entirely**

Delete the entire `**AI Add-on — +$20/month**` block (from the heading through `*Included automatically with every Advanced plan and every Full Code website build.*`).

Replace with the full Cortex add-on block. Full copy: v5 Page 2 → `## ADD-ONS` → `**Cortex — +$30/month**` block.

Layout notes for the Cortex add-on block:
- Show each of the three pillars as a mini sub-block with the pillar name, price badge ($10/mo), and 2-line description
- The `$10 + $10 + $10 = $30/month` line should be visually distinct — slightly larger or bold
- Two CTAs: primary button "Add Cortex to Your Plan — $30/month" + secondary text link "Or see the full Cortex page →" linking to `/cortex`

**Section: ADD-ONS — AI Extender block**

Change one line only:
- Old: `*(Available on Advanced. Includes the AI Add-on — no double-up.)*`
- New: `*(Available on Advanced. Includes Cortex — no double-up.)*`

Also update the final line:
- Old: `Everything in the AI Add-on included (no extra charge)`
- New: `Cortex fully included (no extra charge)`

**Section: PRICING FAQ**

Replace the existing Q about AI Add-on:
- Old: `**Q: What's the difference between Core ($40/mo) and Core + AI ($60/mo)?**`
- New: Full updated Q&A. See v5 Page 2 → `## PRICING FAQ` → first question.

Add two new Cortex questions after that first question. Full text: v5 Page 2 → FAQ sections 2 and 3 (Q: "What exactly is Cortex?" and Q: "Can I get Cortex without being on FWG hosting?").

**Page meta:** Update description. See v5 Page 2 → PAGE META.

---

### 2.3 — Core Plan (/services/core) | v5 Page 4

**Subheadline:** Update to reference Cortex instead of AI Add-on. See v5 Page 4 → HERO → Subheadline.

**Section: ADD AI TO YOUR PLAN — replace entirely**

Delete the entire `## ADD AI TO YOUR PLAN — +$20/MONTH` section (from heading through `[Get Started — $60/month]`).

Replace with the new `## ADD CORTEX — THE AI ECOSYSTEM — +$30/MONTH` section.
Full copy: v5 Page 4 → `## ADD CORTEX — THE AI ECOSYSTEM — +$30/MONTH`

Layout notes:
- The three Cortex pillars (Host Systems, Team Stack, Ops Grid) should display as three compact sub-blocks, each with name, price ($10/mo), and 2-line description
- "$10 + $10 + $10 = $30/month." — display as a standalone highlighted line
- Link: `[See the full Cortex page →](/cortex)`

**CTA buttons — update prices:**
- Old: `[Get Started — $40/month]` / `[Get Started with AI — $60/month]`
- New: `[Get Started — $40/month]` / `[Get Started with Cortex — $70/month]`

Also update the annual pricing block:
- Old: `**Core + AI Add-on — $60/month** (or $600/year — 2 months free)`
- New: `**Core + Cortex — $70/month** (or $700/year — 2 months free)`

**WANT TO GO DEEPER section:** Update the AI Extender reference line:
- Old: `[See Advanced plan →](/services/advanced)` *(no change to link, just surrounding copy)*
- Update surrounding sentence to reference Cortex. Full copy: v5 Page 4 → `## WANT TO GO DEEPER?`

**WHAT'S NOT INCLUDED section:** Update final sentence:
- Old: `Advanced at $240/month gives you 16 hours — with AI included.`
- New: `Advanced at $240/month gives you 16 hours — with Cortex included.`

**Page meta:** Update title and description. See v5 Page 4 → PAGE META.

---

### 2.4 — Advanced Plan (/services/advanced) | v5 Page 5

**Subheadline:** Update "AI Add-on" reference to "Cortex AI". See v5 Page 5 → HERO → Subheadline.

**Value anchor paragraph:** Update "AI tools included" reference to "Cortex AI included". See v5 Page 5 → THE VALUE ANCHOR.

**Section: WHAT'S INCLUDED — Cortex bullet**

Replace the AI Add-on bullet:
- Old: `Full AI enablement suite included (the $20 AI Add-on, at no extra charge)`
- New: Full updated bullet. See v5 Page 5 → WHAT'S INCLUDED → "Cortex included — no extra charge" bullet.

Add inline link: `[How Cortex works →](/cortex)` at end of that bullet.

**Section: OPTIONAL ADD-ON — AI Extender**

Update the section header bracket note:
- Old: `*(Advanced plan only — AI Add-on included)*`
- New: `*(Advanced plan only — Cortex included)*`

Update the last bullet:
- Old: `The AI Add-on fully included (no extra $20/month charge)`
- New: `Cortex fully included (no extra charge)`

**Pricing block:** Update label:
- Old: `**Advanced — $240/month** (AI included)`
- New: `**Advanced — $240/month** (Cortex included)`

**Page meta:** Update title and description. See v5 Page 5 → PAGE META.

---

### 2.5 — HITL Page (/about/human-in-the-loop) | v5 Page 10

**Section: WHERE HITL APPLIES**

Add a new bullet block between "Website builds" and "Ongoing AI marketing production":

```
**Cortex Team Stack and Ops Grid**
Your AI Specialist reviews every Brand DNA output and growth workflow before it reaches you.
The AI generates; the specialist validates. Every month.
```

Full copy: v5 Page 10 → `## WHERE HITL APPLIES AT FAST WEB GURU` → Cortex bullet.

No other changes to this page.

---

### 2.6 — Contact Form (/contact) | v5 Page 9

**Form field: "What can we help with?"**

Update the dropdown options. Add "Cortex AI" between "New website build" and "Partner program":

- Website hosting
- New website build
- **Cortex AI** *(new option)*
- Partner program
- Something else

No other changes to this page.

---

### 2.7 — Services Nav and Site Architecture

**Header nav — Services dropdown**

Add "Cortex AI" as a new item with sub-menu. Position: after "Website Builds", before "Add-Ons".

```
Services dropdown:
  Core — $40/mo          → /services/core
  Advanced — $240/mo     → /services/advanced
  Website Builds         → /services/website-builds
  Cortex AI              → /cortex
    ├── Host Systems     → /cortex/host-systems
    ├── Team Stack       → /cortex/team-stack
    └── Ops Grid         → /cortex/ops-grid
  Add-Ons                → /services/add-ons
```

Dropdown descriptor for "Cortex AI": *"Add AI to your website — $30/month. Three pillars. Any host."*

**Footer — Services column**

Add "Cortex AI → /cortex" after "Website Builds":

```
Column 1 — Services:
  Core ($40/mo)          → /services/core
  Advanced ($240/mo)     → /services/advanced
  Website Builds         → /services/website-builds
  Cortex AI              → /cortex          ← NEW
  Pricing                → /pricing
```

---

## Step 3 — Build New Pages

Four new pages. All copy is in `website-copy-v5.md` at the page numbers below.

---

### 3.1 — /cortex | v5 Page 11

**Template:** Use the Core plan page as the closest layout reference (hero + who it's for + feature sections + pricing + FAQ).

**Sections in order:**
1. Hero (badges, H1, subheadline, primary + secondary CTA)
2. Problem section (H2 + 3-paragraph body)
3. Three pillar cards (H2 intro + 3-card grid — see layout notes below)
4. $30 Equation callout block
5. "Works with your existing setup" section + capability table
6. "Who this is for" section (two lists: for you / not for you)
7. Testimonials (2 slots — placeholders at launch)
8. Pricing block (pillar table + CTA + annual option)
9. FAQ (accordion)
10. Final CTA

**Pillar card layout (Step 3 above):**
- 3-column grid on desktop, single column stack on mobile
- Each card: badge `$10/month` at top-right, pillar name as H3, italicised layer label, H4 hook line, 2–3 sentence description, bulleted "what you get" list (3–4 items), `[Learn more →]` link to the pillar's sub-page
- Cards should have a light border or card surface to visually separate from surrounding page

**$30 Equation block:**
- Visually distinct — contrasting background (dark or brand-accent colour)
- `$10 + $10 + $10 = $30/month.` — large, centred
- Two supporting lines below (infrastructure/intelligence/execution + streaming comparison)

**Capability table ("Works with your existing setup"):**
- 3 columns: Feature | Any host | FWG hosting
- Use checkmarks (✓) and dashes (—) for clarity
- FWG column should have a subtle highlight

**Pricing block:**
- Table: Pillar | What it does | Price
- Annual toggle above the table: Monthly ($30/mo) / Annual ($300/yr — 2 months free)
- Primary CTA button: "Add Cortex to Your Website — $30/Month"
- Secondary text link: "Or: Get Your Free AI Assessment First — No Commitment"
- Trust signals below button: "Month-to-month · No setup fee · Cancel anytime · Works on your existing host"

**Sticky CTA (mobile):**
- Appears after 300px scroll
- Label: "Add Cortex — $30/mo"
- Hidden when primary CTA button is visible in viewport
- Tap: scrolls to pricing block

**Page meta:** See v5 Page 11 → PAGE META.
**Breadcrumb:** Home > Services > Cortex AI

---

### 3.2 — /cortex/host-systems | v5 Page 12

**Template:** Similar to /cortex but shorter — no pillar cards, no capability table comparison. Use a lean 6-section structure.

**Sections in order:**
1. Hero (badges, H1, subheadline, two CTAs)
2. Problem section
3. Solution section (Talk-to-Edit explained)
4. What's included (4 feature blocks)
5. "Works with your existing host" (abbreviated table — 4 rows, 2 columns: Any host / FWG hosting)
6. "This is part of Cortex" cross-link section
7. Testimonial (1 slot)
8. Pricing (simple: Cortex $30/mo, add to FWG Core $70/mo — no table needed)
9. Short CTA

**Cross-link section ("This is part of Cortex"):**
Display the three pillars as small horizontal cards:
- Host Systems (current page — visually highlighted/active)
- Team Stack → link `/cortex/team-stack`
- Ops Grid → link `/cortex/ops-grid`
- Plus a "See the full Cortex page →" link

**Page meta:** See v5 Page 12 → PAGE META.
**Breadcrumb:** Home > Services > Cortex AI > Host Systems

---

### 3.3 — /cortex/team-stack | v5 Page 13

**Sections in order:**
1. Hero
2. Problem section
3. Solution section (Business DNA Workshop explained)
4. "The AI Specialist" section
5. What's included (4 feature blocks)
6. "This is part of Cortex" cross-link section (same as above, Team Stack highlighted)
7. Testimonial (1 slot)
8. Pricing
9. Short CTA

**Page meta:** See v5 Page 13 → PAGE META.
**Breadcrumb:** Home > Services > Cortex AI > Team Stack

---

### 3.4 — /cortex/ops-grid | v5 Page 14

**Sections in order:**
1. Hero
2. Problem section
3. Solution section (what a workflow actually is, with the email sequence example)
4. "The three ways to run a workflow" section (3 options)
5. "Types of workflows" section (3 categories, bulleted)
6. What's included (4 feature blocks)
7. "This is part of Cortex" cross-link section (same as above, Ops Grid highlighted)
8. Testimonial (1 slot)
9. Pricing
10. Short CTA

**Layout note — "What a workflow looks like" example:**
Display the email sequence example as a mini code-block or structured card — indented, visually distinct from surrounding body text. This is the most concrete proof point on the page; it should stand out.

**Page meta:** See v5 Page 14 → PAGE META.
**Breadcrumb:** Home > Services > Cortex AI > Ops Grid

---

## Step 4 — Internal Linking

After all pages are built, verify these internal links are wired correctly:

| From | Link text | To |
|------|-----------|----|
| /cortex pillar card 1 | "Learn more about Cortex Host Systems →" | /cortex/host-systems |
| /cortex pillar card 2 | "Learn more about Cortex Team Stack →" | /cortex/team-stack |
| /cortex pillar card 3 | "Learn more about Cortex Ops Grid →" | /cortex/ops-grid |
| /cortex/host-systems | "How Cortex works →" | /cortex |
| /cortex/host-systems | "Cortex Team Stack" | /cortex/team-stack |
| /cortex/host-systems | "Cortex Ops Grid" | /cortex/ops-grid |
| /cortex/team-stack | "Cortex Host Systems" | /cortex/host-systems |
| /cortex/team-stack | "Cortex Ops Grid" | /cortex/ops-grid |
| /cortex/ops-grid | "Cortex Host Systems" | /cortex/host-systems |
| /cortex/ops-grid | "Cortex Team Stack" | /cortex/team-stack |
| /pricing add-ons | "Or see the full Cortex page →" | /cortex |
| /services/core | "See the full Cortex page →" | /cortex |
| /services/advanced | "How Cortex works →" | /cortex |
| /about/human-in-the-loop | (existing HITL links, no new ones needed) | — |
| Homepage Cortex section | "See Cortex — $30/Month →" | /cortex |
| Pricing self-selection | "[See Cortex →]" | /cortex |

---

## Step 5 — SEO and Meta

Apply these meta tags to each new page. Exact title and description are at the bottom of each page in v5.

| Page | Title | Description |
|------|-------|-------------|
| /cortex | Cortex by Fast Web Guru — AI Add-On for Any Website \| $30/Month | Cortex adds AI-native site editing, a brand-trained digital brain, and 20 bespoke growth workflows to any website. Work through them with your team — more added regularly, plus workshops to build capability. Three pillars at $10 each. |
| /cortex/host-systems | Cortex Host Systems — AI-Native Hosting with Talk-to-Edit \| Fast Web Guru | Update your website by describing what you want. Cortex Host Systems is AI-native infrastructure with Talk-to-Edit built in. Part of Cortex ($30/mo). Works best on FWG hosting. |
| /cortex/team-stack | Cortex Team Stack — AI Trained on Your Brand DNA \| Fast Web Guru | Cortex Team Stack builds your Business DNA and trains a personalised AI brain on your brand. Plus 1 hr/mo real AI Specialist review. Part of Cortex ($30/mo). Works on any website. |
| /cortex/ops-grid | Cortex Ops Grid — 20 Bespoke Growth Workflows to Scale Your Business \| Fast Web Guru | Cortex Ops Grid gives you 20 bespoke, step-by-step growth workflows built from your Business DNA — work through them with your team over the coming months. More workflows and team workshops added regularly. Part of Cortex, $30/mo. |

**Canonical URLs:** All four Cortex pages are canonical to themselves. No redirects needed from old URLs (the "AI Add-on" had no dedicated page previously).

**H1 tags:** One H1 per page, matching the copy exactly. Do not add your own H1s.

---

## Step 6 — What NOT to Change

The following pages have no copy changes. Do not touch their content:

- `/how-it-works`
- `/services/website-builds`
- `/about`
- `/about/values`
- `/partners`
- `/blog`
- `/support`
- Global CTA component (content unchanged — wiring to /cortex sign-up flow may be needed depending on backend)

The only change to `/contact` is a single dropdown option added to the form (Step 2.6 above).

---

## Launch Checklist

Work through this in order before marking the implementation complete.

### Global changes
- [ ] Find-and-replace: "AI Add-on" → "Cortex" (all pages, nav, footer, alt text, aria labels)
- [ ] Find-and-replace: "$20/month" → "$30/month" (AI add-on context only)
- [ ] Find-and-replace: "$60/month" → "$70/month"
- [ ] Find-and-replace: "$600/year" → "$700/year"
- [ ] Find-and-replace: "AI Add-on included — no extra charge" → "Cortex included — no extra charge"
- [ ] "Get Started with AI" CTA buttons → "Get Started with Cortex"
- [ ] "Includes the AI Add-on" → "Includes Cortex" (AI Extender description)

### Existing page updates
- [ ] Homepage: Plans section updated (Core + Advanced lines)
- [ ] Homepage: Cortex callout section added (between Plans and Partner sections)
- [ ] Homepage: Page meta updated
- [ ] Pricing: Self-selection helper updated (6 options)
- [ ] Pricing: Core plan card updated (upsell line + CTAs)
- [ ] Pricing: Advanced plan card updated (badge + bullet)
- [ ] Pricing: AI Add-on block replaced with Cortex block
- [ ] Pricing: AI Extender block updated (Cortex reference)
- [ ] Pricing: FAQ updated (new Q1 + 2 new Cortex questions)
- [ ] Pricing: Page meta updated
- [ ] Core plan: Subheadline updated
- [ ] Core plan: AI Add-on section replaced with Cortex section
- [ ] Core plan: CTA buttons updated ($60→$70)
- [ ] Core plan: Annual pricing updated ($600→$700)
- [ ] Core plan: "Want to go deeper?" updated
- [ ] Core plan: "What's not included" updated
- [ ] Core plan: Page meta updated
- [ ] Advanced plan: Subheadline updated
- [ ] Advanced plan: Value anchor updated
- [ ] Advanced plan: Cortex included bullet updated
- [ ] Advanced plan: AI Extender block updated
- [ ] Advanced plan: Pricing label updated (AI included → Cortex included)
- [ ] Advanced plan: Page meta updated
- [ ] HITL page: Cortex bullet added to "Where HITL applies"
- [ ] Contact form: "Cortex AI" option added to dropdown

### Navigation
- [ ] Header nav: "Cortex AI" added to Services dropdown with sub-menu (3 items)
- [ ] Footer: "Cortex AI" added to Services column

### New pages
- [ ] /cortex built and live
- [ ] /cortex/host-systems built and live
- [ ] /cortex/team-stack built and live
- [ ] /cortex/ops-grid built and live
- [ ] Breadcrumbs wired on all 4 new pages

### Linking
- [ ] All internal links from the linking table (Step 4) verified working
- [ ] Pricing page "See Cortex →" link active
- [ ] Homepage Cortex callout section link active

### Technical
- [ ] Sticky mobile CTA on /cortex (appears at 300px scroll, hides when primary CTA visible)
- [ ] Annual pricing toggle on /cortex (Monthly $30 / Annual $300)
- [ ] Annual pricing toggle consistent with /pricing page toggle behaviour
- [ ] All 4 Cortex pages: meta title + description applied
- [ ] All 4 Cortex pages: canonical URL set
- [ ] All 4 Cortex pages: H1 tag correct (one per page, matches copy)
- [ ] Pillar cards on /cortex: $10/mo badge visible without scrolling on desktop
- [ ] Capability table on /cortex: renders correctly on mobile (consider horizontal scroll or stacked)
- [ ] Contact form dropdown: updated option saves to CRM/notification correctly

### Robots / Indexing — ⚠️ Must Do Before Go-Live

The site was built with a full robots block in place during development. Before launching:

- [ ] **Replace `public/robots.txt`** — swap the development block for the production version:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://fastwebguru.com/sitemap.xml
  ```
- [ ] **Remove noindex meta tag** — delete `<meta name="robots" content="noindex, nofollow">` from the base layout (`src/layouts/Base.astro` or equivalent `<Head>` component)
- [ ] **Verify with a robots.txt checker** before marking complete (e.g. Google Search Console → robots.txt tester, or https://www.robotstxt.org/robotstxt.html)
- [ ] **Submit sitemap to Google Search Console** post-launch

### Final QA
- [ ] All old "$20" AI add-on references resolved — zero remaining
- [ ] All "AI Add-on" text instances resolved — zero remaining
- [ ] "$60/month" (old Core + AI Add-on) — zero remaining
- [ ] Cortex pages load correctly on mobile, tablet, desktop
- [ ] All cross-links between /cortex and pillar pages navigate correctly
- [ ] Services dropdown displays correctly on mobile (sub-menu accessible)

---

## Questions?

Any ambiguity about copy intent or layout — refer to `cortex/cro-report.md` for the reasoning behind specific layout decisions on the Cortex pages. For anything that's unclear after reading that, ask before implementing.

**Do not change copy without approval.** If something looks wrong, flag it — don't fix it unilaterally.
