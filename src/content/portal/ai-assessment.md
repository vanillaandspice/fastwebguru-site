---
title: "Your AI Assessment Tool"
category: "website"
skill: "free-tools"
sourceFile: "../assets/ai-assessment-tool-design.md"
lastUpdated: "2026-06-07"
---
# Fast Web Guru — AI Assessment Tool Design
## Free Tools Framework

*Created: 2026-06-07 | Source: product-marketing.md + free-tools skill*

---

## What This Tool Is

**"Your Free AI Website Assessment"**

A visitor enters their name, email, and website URL. Fast Web Guru analyses their online presence and emails them a personalised snapshot — specific gaps, quick wins, and what the AI era means for their particular business. No sales call. No commitment. Genuine value delivered.

This is the primary CTA on every page of the FWG website. Currently the CTA exists everywhere; the tool behind it does not. This document defines what it delivers and how to build it.

---

## Tool Type

**Analyzer** — evaluates an existing thing (their website) and returns a structured assessment with recommendations.

This is more valuable than a calculator or generator for FWG's purposes because:
- It requires their website URL → creates a qualified, specific lead
- The output is personalised → high perceived value, high open rate
- It surfaces the exact problems FWG solves → natural conversion path
- A business owner who submits their website is actively interested, not browsing

---

## Evaluation Scorecard

| Factor | Score | Notes |
|--------|-------|-------|
| Search demand exists | 4/5 | "Free website assessment Australia," "AI website check" — real volume |
| Audience match to buyers | 5/5 | Someone who submits their URL is a qualified SMB lead |
| Uniqueness vs. existing | 4/5 | Website graders exist (SEMrush, Wix); "AI era" framing is genuinely new |
| Natural path to product | 5/5 | Assessment literally shows why they need FWG |
| Build feasibility | 5/5 | MVP buildable in a day with no-code tools |
| Maintenance burden (inverse) | 4/5 | Low once templated; Claude does the heavy lifting |
| Link-building potential | 3/5 | Moderate — "AI readiness check" has niche link value |
| Share-worthiness | 4/5 | People share personalised results, especially if score-based |
| **Total** | **34/40** | **Strong candidate — build it** |

---

## What the Assessment Delivers

The output is called **"Your FWG AI Snapshot."** It arrives by email within 24 hours (MVP) and eventually becomes instant (V2+).

### Report Structure (4 sections)

---

**Section 1: Your AI Readiness Score**

A simple score — Low / Getting There / Ready / Leading — based on observable website signals. Not a number out of 100 (too gameable, feels arbitrary). A label feels more like a human assessment.

*What it measures:*
- Page speed (mobile and desktop)
- Mobile optimisation
- Content freshness (last updated / blog present)
- Basic conversion setup (email capture, clear CTA, contact form)
- Presence of AI-generated or AI-enhanced content signals
- Social proof elements (testimonials, reviews)
- HTTPS / basic security

*How it's assessed (MVP):* Team member checks these manually using free tools (PageSpeed Insights, manual review) + Claude generates the write-up from a structured template.

*How it's assessed (V2):* Automated scraping via Puppeteer or similar → Claude analyses → instant report.

---

**Section 2: Your 3 Quick Wins**

Three specific, actionable improvements for this business that could happen in the next 30 days. Written in plain Australian English. Specific to their actual website — not generic advice.

Examples:
- *"Your website took 8.4 seconds to load on mobile. That's likely costing you 40%+ of your mobile visitors before they even see your content. This is fixable in a day."*
- *"You don't have an email capture anywhere on your site. You're getting traffic but keeping none of it. A single opt-in field above the fold would change that."*
- *"Your last news/blog post appears to be from 2023. Google treats content freshness as a relevance signal. Publishing once a month — even short posts — would help."*

---

**Section 3: Your Biggest AI Opportunity**

One high-leverage AI opportunity specific to their business type. This section is the most personalised and the most valuable — it tells them something they couldn't have Googled.

Segmented by the qualifying question in the intake form (see below). Examples by business type:

| Business type | AI opportunity |
|--------------|----------------|
| Retail / ecommerce | "You have [X] products with no AI-generated descriptions or meta titles. This is leaving organic traffic on the table and hurting your conversion rate at the same time. AI can generate these in bulk, reviewed and approved by a human, in days — not weeks." |
| Hospitality / food | "AI can write menu descriptions, automate review responses, and generate social posts from a single photo. For a business that lives and dies on reputation and repeat visits, this is the highest-leverage place to start." |
| Trade / service business | "You have no structured way to capture and follow up on enquiries. An AI-powered contact and follow-up system — connected to your website — would recover the leads that currently fall through the cracks." |
| Professional services | "Your website has no clear social proof above the fold. AI can help you gather, edit, and deploy testimonials systematically — the kind of thing that typically requires a dedicated person." |

*How to collect business type:* One qualifying question in the intake form (dropdown — see below).

---

**Section 4: What Fast Web Guru Would Do**

A brief, specific, non-salesy statement about what FWG's service would deliver for this business. Written as honest advice from a knowledgeable person — not a pitch.

*Template:*
"Based on what we can see, the three things your website needs most right now are [X], [Y], and [Z]. Fast Web Guru's Core plan at $40/month covers all three — [X] via same-day BugHerd updates, [Y] via your Workflow Hub, and [Z] via your AI content tools. If you want to talk through any of this before committing to anything, [book a 15-minute call] — no agenda, just a straight conversation."

---

## Intake Form Design

**Fields (in order):**

1. Your name *(text)*
2. Business name *(text)*
3. Your email *(email — required for delivery)*
4. Your website URL *(URL — required for assessment)*
5. What type of business do you run? *(dropdown — for personalisation)*
   - Retail / ecommerce
   - Hospitality / food & drink
   - Trade / services
   - Professional services
   - Creative / agency
   - Something else

**Submit button:** Send me my assessment

**Below the button (microcopy):**
You'll receive your AI Snapshot within 24 hours. No sales call. No lock-in.

**What NOT to ask:**
- Phone number (friction, feels salesy)
- Company size (irrelevant at this stage)
- "How did you hear about us" (save for onboarding)
- Anything about budget

---

## Delivery: Email Design

**Subject line options (A/B test):**
- A: `Your FWG AI Snapshot is here, [First Name]`
- B: `We looked at [website URL] — here's what we found`
- C: `[First Name], your website's AI readiness score`

**Recommended structure:**

```
Hi [First Name],

We took a look at [website URL]. Here's your honest assessment.

---

YOUR AI READINESS SCORE: [Label]

[One sentence explaining what this means for them specifically]

---

YOUR 3 QUICK WINS

1. [Specific finding + plain-English explanation]
2. [Specific finding + plain-English explanation]
3. [Specific finding + plain-English explanation]

---

YOUR BIGGEST AI OPPORTUNITY

[Business-type-specific paragraph]

---

WHAT WE'D DO

[Personalised honest summary + CTA]

---

If any of this is useful and you want to talk about it — no sales pitch, just a
conversation — reply to this email or book a 15-minute call: [link]

Or if you want to get started: Fast Web Guru Core is $40/month, no lock-in.
[Get Started →]

Cheers,
[Name]
Fast Web Guru
[fastwebguru.com.au]
```

---

## Build Approach

### MVP (Build this week — no code required)

**Tools:** Tally or Typeform for intake → Zapier/Make webhook → Notion database → Claude generates report → team sends email manually

**Process:**
1. Visitor submits form → entry appears in Notion
2. Team member runs PageSpeed Insights on the URL + quick manual review (10 mins)
3. Pastes findings into Claude with the report template
4. Claude generates the personalised email
5. Team reviews and sends from FWG email address within 24 hours

**Cost:** Free (Tally free tier, Notion free, Claude subscription already in use)
**Time to build:** 2–3 hours
**Team time per assessment:** ~15 minutes

This is the right starting point. It keeps the human in the loop (which is on-brand for FWG), allows quality control, and builds the template library needed to automate V2.

---

### V2 (Automated — build after 20+ assessments manually)

**Tools:** Custom form → serverless function → PageSpeed API + Puppeteer scrape → Claude API → instant email via Resend/Postmark

**Process:**
- Visitor submits → instant automated analysis → personalised report emailed within 2 minutes
- Team gets a copy for quality review + follow-up

**When to build V2:** After the manual process has produced 20+ reports and the template is stable. Use the manual reports to train the automation.

---

### V3 (Web report — post-launch)

Interactive web page at `/assessment/results/[unique-id]` that:
- Shows results visually (score gauge, checklist, opportunity callout)
- Is shareable (business owners share their score on social)
- Has inline CTAs
- Feeds a dashboard for the FWG team

---

## Landing Page Copy

**URL:** `/get-assessment` or use inline modal on the primary CTA

**H1:** Find out how AI-ready your website is. Free.

**Subheadline:** Enter your website URL and we'll send you a personalised snapshot — specific gaps, quick wins, and what the AI era means for your business. Takes 30 seconds. Results in your inbox within 24 hours.

**Trust signals under the form:**
- No sales call
- No lock-in
- Results specific to your website, not generic advice

---

## SEO Opportunity

**Primary keyword target:** `free website assessment australia`
**Secondary:** `AI website audit`, `website health check small business`
**Supporting content to write:** "Is your website ready for the AI era?" (blog post targeting "AI readiness small business")

The assessment landing page itself earns links because it's genuinely useful and specific to Australian small business — a niche most global graders ignore.

---

## Conversion Path: Assessment → $40/mo

The funnel from assessment to paid customer:

```
Website visit
    ↓
"Get Your Free AI Assessment" CTA (every page)
    ↓
Intake form (name, email, URL, business type)
    ↓
[24hr] Personalised AI Snapshot email delivered
    ↓
[Email sequence — 3 emails over 7 days] ← needs /emails skill
    ↓
$40/mo Core sign-up OR book a call
    ↓
[Onboarding] ← needs /onboarding skill
    ↓
Active client
```

---

## What to Build Next (in order)

1. **This week:** Build MVP intake form in Tally. Create the report template in Notion. Run 3 test assessments on known websites. Refine the template.

2. **Before launch:** `/emails` skill — design the 3-email nurture sequence that follows the assessment delivery.

3. **Before launch:** `/signup` skill — design what happens immediately after form submission (confirmation page copy, expectation-setting).

4. **After 20 manual assessments:** Automate with V2 (Claude API + PageSpeed API).

5. **Post-launch:** Build V3 web report with shareable URL for virality.
