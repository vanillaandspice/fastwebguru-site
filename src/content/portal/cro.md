---
title: "Making Your Pages Convert"
category: "website"
skill: "cro"
sourceFile: "../assets/cro-report.md"
lastUpdated: "2026-06-07"
---
# Fast Web Guru — CRO Report
## Homepage + Pricing Page
*Created: 2026-06-07*
*Source copy: website-copy-v2.md*
*Framework: Value prop clarity → Headline → CTA hierarchy → Trust signals → Friction → Objection handling*

---

## CRO Summary

The v2 copy is strong. The research is applied, the VOC is real, and the pricing page is better than 90% of managed service pages in this category. The issues below are not copy quality problems — they're structural and sequencing gaps that will silently kill conversions from visitors who arrive skeptical (which, given the betrayal-dominant emotional trigger in this market, is most of them).

**Priority overview:**

| Severity | Count | Category |
|----------|-------|----------|
| 🔴 Critical | 3 | Structural issues causing lost conversions now |
| 🟠 High | 5 | Significant conversion drag, fixable before launch |
| 🟡 Medium | 5 | Worth fixing, won't block launch |
| 🟢 Test | 4 | A/B hypotheses, lower risk |

---

# HOMEPAGE CRO

---

## 5-Second Value Prop Test

**The test:** A cold visitor with no context lands on the page. Within 5 seconds, can they answer:
1. What is this?
2. Who is it for?
3. Why should I care?
4. What do I do next?

**Result: PASS on 1-3, PARTIAL on 4**

- **What is it?** ✅ "AI-powered hosting, same-day updates from a real person, one fixed monthly price"
- **Who is it for?** ✅ "Australian small businesses" — specific enough
- **Why care?** ✅ "Done for you. Today." — the core differentiator is immediately clear
- **What next?** ⚠️ "Get Your Free AI Assessment" — clear action, but the value exchange is abstract. What exactly do they get from this assessment? The hero doesn't say.

**Recommendation:** Add one line below the CTA that explains the assessment in concrete terms:
> *Takes 30 seconds. We look at your site. You get a personalised report — specific to your type of business — in your inbox within 24 hours.*

---

## Issue 1: No Price in the Hero
**Severity: 🔴 Critical**

The hero subheadline says "from $40/month" — but this appears in the feature list, not in the hero itself. For this audience, price is not something to hide or save for the pricing page. It's a differentiator. "From $40/month" is the counter-argument to "agencies cost too much" — it should be in the first sentence the visitor reads.

**Current subheadline:**
> Fast Web Guru gives Australian small businesses AI-powered hosting, same-day updates from a real person, and one fixed monthly price — from $40/month.

**The problem:** "$40/month" appears at the end of a long subheadline. Scanning visitors miss it.

**Fix:** Restructure so the price is prominent, not buried:

*Option A — Move price to hero badge:*
Add a badge/chip element above the H1: `From $40/month · No invoice per change · No lock-in`

*Option B — Restructure subheadline:*
> From $40/month: AI-powered hosting, same-day updates from a real person, and one fixed price — for Australian small businesses ready to stop chasing their web developer.

---

## Issue 2: All Testimonials Are Placeholder
**Severity: 🔴 Critical**

Every testimonial slot on the page is marked `[PLACEHOLDER]`. This is the most damaging conversion gap in the entire document. The copy is built on research that confirms betrayal as the dominant emotional trigger for this audience — and the cure for betrayal anxiety is peer proof. Without it, the page is asking a skeptical audience to trust a brand with no evidence.

**Impact:** Trust signal absence is felt most acutely on a first visit from cold traffic. This is exactly the audience who most needs to see a named quote from a real Australian business owner.

**Minimum viable fix before launch:**
- Source 1 quote from existing 20 clients (any quote, with a name and business)
- Prioritise phrases: "I don't have to worry about it," "they sorted it same-day," "the phone started ringing"
- Even a rough email quote from a client conversation is better than a placeholder
- If no named quote is available: use operational proof ("Serving 20+ Australian businesses since [year]") as a temporary social proof bar

**Placement priority:**
1. Above the fold (trust bar or quote before hero fold)
2. After the problem section (immediately after "Sound familiar?" — highest-trust placement)
3. Before the final CTA (last objection before click)

---

## Issue 3: "What if your website just... worked?" Headline
**Severity: 🟠 High**

The ellipsis in "What if your website just... worked?" adds hesitation to a confident positioning moment. This is the pivot from problem to solution — it should be decisive, not wistful.

**The ellipsis signals:**
- Dreaming rather than promising
- Hedging rather than delivering
- "What if" as a rhetorical frame rather than a confident offer

**Fix options:**

*Option A — Remove the ellipsis:*
> What if your website just worked?

*Option B — Replace with a confident assertion (stronger):*
> Your website. Working. Today.

*Option C — Name the promise directly:*
> Here's what a website that actually works looks like.

---

## Issue 4: Assessment CTA Value Exchange Is Vague
**Severity: 🟠 High**

"Get Your Free AI Assessment" appears 3+ times across the homepage as the primary CTA. The button copy is correct — it communicates value (Free AI Assessment) rather than just action (Sign Up). But the value of the assessment is never explained directly in the hero where it first appears. Visitors who don't scroll to How It Works don't know what they're getting.

**Fix:** Add assessment description inline near the first CTA appearance:

> Get Your Free AI Assessment
>
> *30 seconds to fill in. Personalised findings in your inbox. Specific to your business — not a generic checklist.*

This is especially important because "instant automated" delivery is confirmed — the assessment result delivery should be updated throughout the copy from "24 hours" to "instant" or "within minutes."

---

## Issue 5: Plans Section Appears Before Features and Proof
**Severity: 🟠 High**

On the homepage, the Plans section appears immediately after the Solution section — before How It Works, before the Features section, and before Testimonials. This sequence asks the visitor to consider pricing before they've understood what they're buying or why they should trust FWG.

**Recommended sequence:**

| Current | Recommended |
|---------|------------|
| Hero | Hero |
| Social Proof Bar | Social Proof Bar |
| Problem | Problem |
| Solution | Solution |
| **Plans (pricing)** | **How It Works** |
| How It Works | Features |
| Features | Testimonials (when available) |
| Partner Callout | Plans (pricing) |
| Testimonials (placeholder) | Partner Callout |
| Final CTA | Final CTA |

Moving Plans after Features and Testimonials follows the classic "earn the conversion" sequence: establish the problem → demonstrate the solution → build trust → offer pricing.

---

## CTA Hierarchy Audit

**Primary CTA:** "Get Your Free AI Assessment" — correct. Low friction, high value, no commitment signal.

**Secondary CTA:** "See how it works →" — correct as a secondary. Gives non-ready visitors a path.

**Issues:**

**Gap 1 — No mid-page CTA:**
After the problem section and before the features section, there is no CTA. This is a decision point for visitors who are already sold by the problem framing — they don't need to keep reading. Add a mid-page CTA after the problem section:
> Recognised any of that? Get a free look at your own site →

**Gap 2 — Partner CTA competes with primary:**
"Find out about the partner program →" appears mid-page. For the primary audience (SMB owner-operators), this is a distraction. Move it below the fold (after features) or use a visual treatment that clearly marks it as secondary content.

---

## Trust Signal Placement Audit

| Signal | Status | Placement | Recommendation |
|--------|--------|-----------|----------------|
| Named testimonials | ❌ Missing | Above fold, post-problem | Source before launch — critical |
| Operational metrics | ✅ Present (social proof bar) | Below hero | Good placement; verify all figures |
| 10+ years history | ✅ Mentioned | Social proof bar | Good |
| City names (Hunter Valley, etc.) | ✅ Present | Social proof bar | Good — Australian specificity is differentiating |
| "1-hour response SLA" | ✅ Present | Social proof bar | Good |
| Ownership reassurance | ✅ Present | Solution section, final CTA | Good — consider also in hero |
| QA panel / human review | ✅ Present | Features section | Correct placement |

---

## Friction Audit — Homepage

| Friction point | Severity | Fix |
|----------------|----------|-----|
| No price visible at first glance | 🔴 | Restructure hero (see Issue 1) |
| Testimonial placeholders | 🔴 | Source minimum 1 real quote |
| Assessment description vague at first CTA | 🟠 | Add inline description near first CTA |
| Plans section too early in sequence | 🟠 | Reorder (see Issue 5) |
| "24 hours" delivery claim vs. confirmed instant delivery | 🟠 | Update all references to reflect instant assessment |
| "What if your website just... worked?" hesitancy | 🟠 | Remove ellipsis or rewrite |
| Partner callout competing mid-page | 🟡 | Move below features |
| No mid-page CTA | 🟡 | Add post-problem CTA |

---

# PRICING PAGE CRO

---

## 5-Second Value Prop Test

**Result: STRONG PASS**

- H1 "One fixed price. Everything included. No surprises." — directly answers the top 3 pricing anxieties
- The $40 suspicion pre-emption block is the best piece of copy on the page — it answers "is this bait?" before visitors can form the objection
- Plan comparison is clear on what's different (support hours), not just what's included

---

## Issue 6: "$40 Suspicion Block" Should Be Part of the Hero
**Severity: 🟠 High**

The $40 suspicion pre-emption block ("Hang on — is $40 really the price?") is excellent copy but positioned below the hero. The problem: for the target audience, this suspicion fires immediately on seeing the price — potentially before they scroll.

**Fix:** Integrate the block into the hero section as a toggle/callout immediately adjacent to the H1, or move it above the plan cards with a visual treatment that makes it impossible to miss:

> **H1:** One fixed price. Everything included. No surprises.
>
> **Suspicion block (directly below H1):**
> Yes, $40/month is the real price. Month-to-month. No 48-month lock-in that triples after the intro period. No per-change fees. No upsells to make it work. We say this upfront because we know how many times Australian small businesses have seen this promise go sideways. That's not us.

---

## Issue 7: "Most Requested" Badge Needs Evidence
**Severity: 🟠 High**

The Advanced plan is labelled `*(Most requested for ecommerce)*` — a good instinct (signals recommended plan without using the generic "Most Popular" phrasing), but "most requested" can read as aspirational or unverified for a skeptical audience.

**Fix options:**

*Option A — Anchor to actual client mix:*
If ecommerce clients genuinely dominate the Advanced plan, say so: `"Chosen by our ecommerce clients"`

*Option B — Use a more neutral recommendation badge:*
`"Recommended for growing businesses"` — makes no claim that needs verification

*Option C — Use the labour anchor as the badge:*
`"Replaces $1,200–$2,400/month of freelance dev time"` — the most compelling version because it's specific and verifiable

---

## Issue 8: AI Extender Placement Breaks Plan Comparison Flow
**Severity: 🟡 Medium**

The AI Extender add-on appears between the Advanced plan and the Website Builds section. This interrupts the natural plan-to-plan scanning flow that pricing pages depend on. Visitors comparing Core vs. Advanced will encounter the add-on mid-comparison and either:
- Confuse it with a plan option
- Feel overwhelmed by a third cost option appearing unexpectedly

**Fix:** Move AI Extender to a separate section below all plans, clearly labelled "Add-ons" with an intro line: `*Available after you're up and running. Not required to make the most of your plan.*`

---

## Plan Comparison Clarity

**Strengths:**
- "Same features. Different levels of support." framing is correct and differentiating
- Explicit itemised feature list per plan (not a comparison table with tick boxes)
- Annual pricing included with clear savings calculation
- The freelance rate anchor ("$75–$150/hr × 16 hrs = $1,200–$2,400/mo") is the strongest pricing justification in the document

**Gap:** No visual "recommended" indicator on the pricing page. The Advanced plan label references ecommerce but doesn't tell a non-ecommerce business which plan suits them.

**Fix:** Add a self-selection helper above the plan cards:

> **Which plan is right for me?**
> — *I just want my website handled without invoices* → Core ($40/mo)
> — *I need updates, content, and ecommerce management weekly* → Advanced ($240/mo)
> — *I don't have a website yet, or mine needs replacing* → Website Build

---

## Pricing FAQ Assessment

**Strong questions present:**
- "Is $40/month the real price?" ✅
- "What if I need more than 1 hour?" ✅
- "Unused hours?" ✅
- "Do I own my site?" ✅
- "What does same-day mean?" ✅
- "WordPress migration?" ✅
- "Free trial?" ✅

**Missing questions to add:**

**Q: Is the AI content generated by bots, or does a real person check it?**
> Every AI output is reviewed by a human specialist before it reaches you. The AI does the production; a person makes sure it's right for your brand. That's what we call "human in the loop" — it's not a feature name, it's how we actually work.

**Q: Who is my "dedicated support person" — is this overseas?**
> Your support person is Australian. They're based in [region/state] and available until 10pm on weekdays and all day on weekends. You'll get their name and a direct way to reach them when you start.

**Q: What if I need to pause my plan?**
> Month-to-month plans can be cancelled any time. If you're going through a quiet period and want to pause, let us know — we'd rather find a way to make it work than lose you.

---

## Risk Reversal Audit — Pricing Page

| Risk | Currently addressed? | Fix |
|------|---------------------|-----|
| "Is $40 bait?" | ✅ Pre-emption block | Strong — move earlier |
| "What if I hate it?" | ⚠️ Partial ("cancel any time") | Add explicit exit language: "Cancel any month, no questions, no fee" |
| "What if something breaks during migration?" | ✅ FAQ question | Good |
| "Do I get locked in?" | ✅ "Month-to-month" | Good — but not in hero |
| "Will I own my data/site?" | ✅ Featured in plan card | Good |
| "Is there a minimum commitment?" | ❌ Not addressed | Add to FAQ: "No minimum. Month one is month one." |

**Missing risk reversal near CTA buttons:**

Both plan card CTAs (Get Started — $40/month and Get Started — $240/month) have no trust signal adjacent. Add one line beneath each CTA:

> *Cancel any month. No lock-in. No setup fee.*

---

## Website Builds Section — CRO Notes

**Issue:** The price grid (6 tiers: $240/$1,200/$2,400 and $4,800/$7,600/$9,000) is visually dense. For a cold visitor, this reads like a long quote form rather than a product.

**Fix:** Lead with a positioning line that sets expectations before the price grid:

> Every build is quoted individually. The prices below are our typical ranges — the final number depends on what you need. We'll give you a straight answer after a 15-minute conversation.

Then add a single CTA that bypasses the price grid: `Talk to us about your site →`

---

# TEST IDEAS

## Homepage Tests

**Test A — Price in hero vs. not**
*Hypothesis:* Adding "$40/mo" to the hero badge increases CTA clicks from cold traffic by reducing "is this expensive?" anxiety.
*Measure:* CTA click rate from organic/cold sessions.

**Test B — Testimonial placement**
*Hypothesis:* A single named testimonial immediately after the problem section ("Sound familiar?") lifts scroll depth and CTA rate.
*Measure:* Scroll-to-features rate and overall CTA conversion.

## Pricing Page Tests

**Test C — Plan recommendation helper**
*Hypothesis:* The self-selection helper ("which plan is right for me?") reduces bounce rate on pricing page and increases Core plan conversions.
*Measure:* Pricing page bounce rate and Core plan CTA clicks.

**Test D — "Cancel any month" near CTA**
*Hypothesis:* Adding "Cancel any month. No lock-in." directly beneath plan card CTAs increases click-to-signup rate.
*Measure:* CTA click rate per plan.

---

# LAUNCH READINESS CHECKLIST

Based on this CRO pass, the following items should be resolved before launch:

| Item | Priority | Owner |
|------|----------|-------|
| Source at least 1 real named testimonial | 🔴 Critical | Steve (client outreach) |
| Update assessment delivery copy from "24 hours" to "instant/within minutes" | 🔴 Critical | Copy update |
| Add price to hero (badge or subheadline restructure) | 🔴 Critical | Copy + design |
| Add inline assessment description near first CTA | 🟠 High | Copy update |
| Move Plans section after Features on homepage | 🟠 High | Design/layout |
| Move $40 suspicion block into/adjacent to pricing hero | 🟠 High | Copy + design |
| Replace "Most requested" badge with evidence-backed label | 🟠 High | Copy update |
| Move AI Extender to add-ons section below plans | 🟡 Medium | Design/layout |
| Add self-selection helper above pricing plan cards | 🟡 Medium | Copy + design |
| Add 2 FAQ questions (AI oversight, support person location) | 🟡 Medium | Copy update |
| Add "Cancel any month" trust line beneath plan CTAs | 🟡 Medium | Copy update |
| Add mid-page CTA after problem section | 🟡 Medium | Copy + design |
| Add "No minimum" to FAQ | 🟡 Medium | Copy update |
| Fix ellipsis in "What if your website just... worked?" | 🟡 Medium | Copy update |
