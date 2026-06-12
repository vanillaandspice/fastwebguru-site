---
title: "Website Action Plan"
category: "build"
skill: "site-architecture"
sourceFile: "../assets/8jun4am-fwg-website-action-plan.md"
lastUpdated: "2026-06-07"
---
# Fast Web Guru — New Website Action Plan
## Corey Haines Framework Sequence (Revised)

*Created: 2026-06-07 | Revised: 2026-06-08 — status reconciled, all pre-code planning complete*
*Source: NEW branddna.md (Google Doc 1CgIH3GC_PynsTaMOpYOzYAhW2YVXAt5bWsX9GqfGL5w)*

---

## Status Overview

| Phase | Status |
|-------|--------|
| Phase 1: Foundation | ✅ Done |
| Phase 2: Site Architecture | ✅ Done |
| Phase 3: Core Page Copy | ✅ Done (v1 + v2 + v3) |
| Phase 3b: Pre-Copy Research | ✅ Done |
| Phase 4: Brand Backbone | ✅ Done |
| Phase 5: Launch Prep | ✅ Done — ready to build |
| Phase 6: Post-Launch | ⏳ After launch |

---

## How the Framework Works

The Corey Haines skills build in sequence. Each step feeds the next. The foundation is `product-marketing`, which creates a master context file all downstream skills read automatically.

**Full chain:**
`product-marketing` → `customer-research` → `competitor-profiling` → `pricing` → `site-architecture` → `copywriting` + `cro` → `free-tools` → `lead-magnets` → `signup` → `emails` → `onboarding` → `copy-editing` → `launch` → `content-strategy` → `seo-audit`

Skills invoke in Claude Code with `/skill-name`.

---

## PHASE 1: Foundation ✅ DONE

### Step 1 — Product Marketing Context
**Skill:** `/product-marketing`
**Output:** `clients/fast-web-guru/.agents/product-marketing.md`
**Status:** ✅ Complete — rebuilt from new Brand DNA, all 4 gaps filled (CTA, audience, voice, geography)

### Step 2 — Brand Voice Definition
**Skill:** Part of `/product-marketing`
**Output:** Brand voice section of `product-marketing.md`
**Status:** ✅ Complete — Australian, conversational, "wise mate over a coffee," not corporate

---

## PHASE 2: Site Architecture ✅ DONE

### Step 3 — Site Architecture & Page Map
**Skill:** `/site-architecture`
**Output:** `clients/fast-web-guru/assets/site-architecture.md`
**Status:** ✅ Complete — 11-page structure, URL map, nav spec, Mermaid sitemap

---

## PHASE 3b: Pre-Copy Research ✅ DONE

### Step 3b-1 — Customer Research & Voice of Customer
**Skill:** `/customer-research`
**Output:** `clients/fast-web-guru/assets/customer-research.md`
**Status:** ✅ Complete — 10 verbatim VOC phrases, 6 emotional triggers, Australian language notes, tradie register documented

### Step 3b-2 — Competitor Profiling
**Skill:** `/competitor-profiling`
**Output:** `clients/fast-web-guru/assets/competitor-profiles.md`
**Status:** ✅ Complete — WP Engine, Kinsta, Rocketspark, Hostinger AU profiled; 8 positioning gaps identified

### Step 3b-3 — Pricing Strategy
**Skill:** `/pricing`
**Output:** `clients/fast-web-guru/assets/pricing-strategy.md`
**Status:** ✅ Complete — anchoring analysis, charm pricing, annual discount structure, pricing page CRO notes

---

## PHASE 3: Core Page Copy ✅ DONE (v1 draft — pending polish)

All 9 pages written. See `clients/fast-web-guru/assets/website-copy-v1.md`.

### Step 4 — Homepage copy ✅
### Step 5 — Pricing page copy ✅
### Step 6 — How It Works ✅
### Step 7 — Service pages (Core, Advanced, Builds, Add-ons) ✅
### Step 8 — About / Our Mission ✅
### Step 9 — Partners & Advocates ✅
### Step 10 — Contact / Get Started ✅

> **Note:** Copy v1 was written before customer research and competitor profiling. After Steps 3b-1 and 3b-2 are run, revisit the homepage hero, problem section, and pricing page headline with the real VOC findings. That's where the biggest gains will be.

---

## PHASE 4: Brand Backbone ✅ DONE

### Step 11 — Copy Pillars Document
**Skill:** `/copywriting`
**Output:** `clients/fast-web-guru/assets/copy-pillars.md`
**Status:** ✅ Complete — 5 pillars × (3 headlines + body paragraph + CTA line); usage guide included

### Step 12 — Tagline Shortlist
**Skill:** `/copywriting`
**Output:** `clients/fast-web-guru/assets/taglines.md`
**Status:** ✅ Complete — 13 options across 4 directions, scored 1-5 on clarity/differentiation/memorability; recommended: "Your website. Done for you. Today." (15/15)

### Step 13 — Brand Voice Examples
**Skill:** `/copy-editing`
**Output:** `clients/fast-web-guru/assets/brand-voice-examples.md`
**Status:** ✅ Complete — 5 statements × 3 versions (too corporate / too casual / FWG-right); quick-reference table included

---

## PHASE 5: Launch Prep ✅ DONE (pre-code planning complete)

### Step 14 — AI Assessment Tool Design ✅ DONE
**Skill:** `/free-tools`
**Output:** `clients/fast-web-guru/assets/ai-assessment-tool-design.md`
**Status:** ✅ Complete — full tool design, report structure, intake form, build approach (MVP + V2 + V3), SEO opportunity, conversion path

**Key decisions made:**
- Tool type: Analyzer (website assessment)
- Output: "Your FWG AI Snapshot" — 4 sections: AI Readiness Score, 3 Quick Wins, Biggest AI Opportunity, What Fast Web Guru Would Do
- MVP build: Tally form → Notion → Claude generates report → team sends within 24hrs. No code required. Build in 2–3 hours.
- V2: Automated (Claude API + PageSpeed API) after 20 manual assessments

### Step 15 — Assessment as Lead Magnet
**Status:** ✅ Complete — `clients/fast-web-guru/assets/lead-magnet-strategy.md`

### Step 16 — Copy Revision (post-research)
**Status:** ✅ Complete — v2 applied VOC + competitor research; v3 applied CRO report + copy-editing pass
- `clients/fast-web-guru/assets/website-copy-v2.md` — post-research revision
- `clients/fast-web-guru/assets/website-copy-v3.md` — development-ready master copy (all CRO changes applied)

### Step 17 — Signup Flow
**Status:** ✅ Complete — `clients/fast-web-guru/assets/signup-flow.md`

### Step 18 — Email Nurture Sequence
**Status:** ✅ Complete — `clients/fast-web-guru/assets/email-nurture-sequence.md`

### Step 19 — Client Onboarding Experience
**Status:** ✅ Complete — `clients/fast-web-guru/assets/onboarding-flow.md`

### Step 20 — CRO Pass (homepage + pricing)
**Status:** ✅ Complete — `clients/fast-web-guru/assets/cro-report.md`
- 3 critical issues, 5 high, 5 medium, 4 test ideas
- All recommendations applied in website-copy-v3.md

### Step 21 — Launch Plan
**Status:** ✅ Complete — `clients/fast-web-guru/assets/launch-plan.md`

---

## PHASE 6: Post-Launch ⏳ PENDING

### Step 22 — Content Strategy
**Skill:** `/content-strategy`
**Output:** `clients/fast-web-guru/assets/content-strategy.md`
**When:** After launch; sets up organic traffic growth
**Content territory:** AI for small business, ecommerce for food/retail, hosting guides for agencies, done-for-you examples

### Step 23 — SEO Foundation
**Skill:** `/seo-audit` (after go-live), `/ai-seo`
**When:** First 30 days post-launch
**Primary keyword targets:** AI website hosting Australia, AI web support small business, WordPress hosting with support Australia, business website management service

### Step 24 — Social Presence
**Skill:** `/social`
**When:** Before or at launch (even a basic presence)
**Priority channels:** LinkedIn (for agency/wholesale audience), Instagram (for SMB/local audience), Facebook (Australian SMB groups)

### Step 25 — Schema Markup
**Skill:** `/schema`
**When:** Post-launch technical SEO
**Priority schemas:** LocalBusiness (geographic targeting), FAQPage (pricing and How It Works pages), BreadcrumbList

---

## Full Priority Order (Revised)

| # | Step | Skill | Phase | Status |
|---|------|-------|-------|--------|
| 1 | Product marketing context | `/product-marketing` | Foundation | ✅ Done |
| 2 | Brand voice | `/product-marketing` | Foundation | ✅ Done |
| 3 | Site architecture | `/site-architecture` | Structure | ✅ Done |
| 3b-1 | Customer research + VOC | `/customer-research` | Pre-copy research | ✅ Done |
| 3b-2 | Competitor profiling | `/competitor-profiling` | Pre-copy research | ✅ Done |
| 3b-3 | Pricing strategy | `/pricing` | Pre-copy research | ✅ Done |
| 4–10 | All 9 pages copy (v1→v3) | `/copywriting` | Page copy | ✅ Done (v3 dev-ready) |
| 11 | Copy pillars | `/copywriting` | Brand backbone | ✅ Done |
| 12 | Tagline shortlist | `/copywriting` | Brand backbone | ✅ Done |
| 13 | Brand voice examples | `/copy-editing` | Brand backbone | ✅ Done |
| 14 | AI assessment tool design | `/free-tools` | Launch prep | ✅ Done |
| 15 | Assessment as lead magnet | `/lead-magnets` | Launch prep | ✅ Done |
| 16 | Copy revision + edit pass | `/copy-editing` | Launch prep | ✅ Done (v3) |
| 17 | Signup flow | `/signup` | Launch prep | ✅ Done |
| 18 | Email nurture sequence | `/emails` | Launch prep | ✅ Done |
| 19 | Client onboarding | `/onboarding` | Launch prep | ✅ Done |
| 20 | CRO pass (home + pricing) | `/cro` | Launch prep | ✅ Done |
| 21 | Launch plan | `/launch` | Launch prep | ✅ Done |
| 22 | Content strategy | `/content-strategy` | Post-launch | ⏳ After launch |
| 23 | SEO + AI SEO | `/seo-audit`, `/ai-seo` | Post-launch | ⏳ After launch |
| 24 | Social presence | `/social` | Post-launch | ⏳ After launch |
| 25 | Schema markup | `/schema` | Post-launch | ⏳ After launch |

---

## Next: Build Phase

All pre-code planning is complete. The next step is starting the Astro/Vercel site build.

**Confirmed decisions:**
- Domain: fastwebguru.com
- Signup: Card required at $40/mo from day 1
- Assessment: Instant automated (Claude API + PageSpeed API — build as part of the site)
- Builder: Steve + Claude Code (AI-assisted, MCP + GitHub already linked)

**See:** `clients/fast-web-guru/assets/fwg-pre-coding-checklist.md` for the complete pre-build checklist.

---

## Open Questions (Still Needed Before Build Starts)

- Which of the existing 20 hosting clients would give a named testimonial? (One real quote changes every page — this is the highest-priority blocker.)
- Hard launch deadline?
- Annual billing confirmed: $400/yr Core, $2,400/yr Advanced?
- Actual email address for the contact form?
- Blog at launch: placeholder section or exclude entirely?
- Design assets ready: logo (SVG), brand colours, fonts?
- BugHerd account: already set up or needs creating?
- Assessment automation: include in Astro build as a serverless function, or as a separate API?
