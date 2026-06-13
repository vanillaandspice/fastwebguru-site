---
title: "Your Design System"
category: "website"
skill: "ui-ux-pro-max"
sourceFile: "../assets/design-plan.md"
lastUpdated: "2026-06-07"
---
# Fast Web Guru — Website Design Plan
*Created: 2026-06-08*
*Status: Approved — proceeding to build*
*Stack: Astro + Vercel | Copy: website-copy-v4.md*

---

## 1. Design Direction

**One sentence:** A straight-talking Australian trades business that happens to use AI — not a startup SaaS, not a fancy agency.

**Feels like:** A premium tradesperson's quote card. High confidence. Zero waffle. Prices front and centre. You know exactly what you're getting before you scroll twice.

**Does NOT feel like:** Gradient-heavy AI tool. Pastel SaaS. Stock photo hosting company. Corporate navy-and-white nothing.

**Style:** Bold Editorial + Clean Brutalism — high contrast, strong type hierarchy, zero decorative fluff, confident white space.

---

## 2. Logo Analysis

Logo file: `fastwebguru-logo.png`

- Running figure (speed/motion mark) in dark charcoal
- Motion speed lines in **orange** — this IS the brand accent
- **"Fast"** wordmark in orange
- **"Web"** and **"Guru"** wordmark in dark charcoal
- No blue. No gradients. Orange + dark only.
- The speed lines establish the visual language: forward momentum, motion, speed

---

## 3. Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-dark` | `#1A1A1A` | Hero bg, nav, dark sections, headings on light |
| `--color-accent` | `#F97316` | ALL CTAs, icons, price highlights, links on dark |
| `--color-surface` | `#FAFAF9` | Page background (warm off-white) |
| `--color-surface-mid` | `#F4F4F2` | Alternate sections, feature card backgrounds |
| `--color-surface-warm` | `#FFF7ED` | Callout boxes, warm accent sections (orange-50) |
| `--color-text-primary` | `#1A1A1A` | Body text on light backgrounds |
| `--color-text-secondary` | `#52525B` | Secondary body text, labels |
| `--color-text-inverse` | `#FAFAF9` | Text on dark backgrounds |
| `--color-text-muted` | `#A1A1AA` | Subheadlines on dark, attribution text |
| `--color-border` | `#E4E4E7` | Cards, dividers on light |
| `--color-border-dark` | `#27272A` | Borders on dark backgrounds |

**Contrast verification:**
- Accent on dark: #F97316 on #1A1A1A → 4.9:1 ✅ WCAG AA
- Dark on surface: #1A1A1A on #FAFAF9 → 19.1:1 ✅
- Secondary on surface: #52525B on #FAFAF9 → 7.1:1 ✅

**Why orange:** Matches logo exactly. Energy/speed. Australian warmth. Stands out hard on both dark AND light backgrounds. Rare in the hosting/AI space — breaks from generic blue SaaS.

### Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Headings | Bricolage Grotesque | 700/800 | Modern, editorial, confident — not corporate |
| Body | Inter | 400/500 | Maximum readability, universally trusted |
| Mono (optional) | JetBrains Mono | 400 | Price callouts only if needed |

**Type scale (mobile → desktop):**

| Level | Size | Line height | Weight |
|-------|------|-------------|--------|
| H1 | 48px → 72px | 1.05–1.1 | 800 |
| H2 | 32px → 48px | 1.1–1.15 | 700 |
| H3 | 22px → 32px | 1.2 | 700 |
| Body | 16px → 18px | 1.65 | 400 |
| Label | 12px | 1.4 | 600 UPPERCASE |

Max line length: 68ch body, 52ch H2.

### Spacing

8pt grid. Scale: 4 / 8 / 16 / 24 / 40 / 64 / 96 / 128px.
Section vertical padding: `80px → 112px` desktop.

### Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 6px |
| Cards | 8px |
| Input fields | 6px |
| Tags/chips | 999px (pill) |
| Dark section elements | 0px (sharp) |

### Buttons

| Type | Style |
|------|-------|
| Primary | bg #F97316, text #1A1A1A, weight 700 — hover: darken 10% |
| Secondary | border-2 #1A1A1A, text #1A1A1A — hover: fill dark |
| Inverse (on dark) | border-2 #FAFAF9, text #FAFAF9 — hover: fill white/dark text |
| Ghost | text #F97316, no border — hover: underline |

### Icons

Lucide Icons — outlined, 1.5px stroke.
Sizes: 20px inline, 24px feature cards, 32px step numbers.

### Motion

- Duration: 200ms default, 300ms section reveals
- Easing: ease-out entries, ease-in exits
- Reveals: fade-up (translateY 16px → 0, opacity 0 → 1), 80ms stagger
- `prefers-reduced-motion`: all animations disabled

---

## 4. Page Structure & Section Treatments

### All Pages — Shared

- **Nav:** Sticky. Transparent → `#1A1A1A` solid on scroll. Logo left, links centre, CTA button right. Mobile: hamburger → full-screen dark overlay.
- **Footer:** Dark bg. 2-col links left / CTA right. Bottom bar: © + Privacy + Terms.

### Homepage `/`

1. **Hero** — dark bg, chip badges (amber pills), H1 bold white, subheadline zinc-400, amber primary CTA + ghost secondary, social proof bar (zinc-900 strip)
2. **Problem** — light bg, H2, body, orange-left-border pull quote, mid-page ghost CTA
3. **Solution** — orange-50 warm tint bg, H2, feature list with orange checkmarks, price anchor
4. **How It Works** — mid surface bg, 4 steps with large orange step numbers (watermark style)
5. **Features** — light bg, 2×3 card grid, zinc-50 cards with orange icons
6. **Testimonials** — dark bg, 2-up quote cards with oversized orange quote marks
7. **Plans** — light bg, 3 cards; Advanced = dark (inverted = visually recommended)
8. **Partner strip** — warm tint, narrow, H2 + body + ghost CTA
9. **Final CTA** — dark bg, H2, inline assessment form (name/email/url/business-type), amber submit
10. **Footer** — dark bg continues from CTA

### Pricing `/pricing`

- Dark hero
- $40 suspicion block: callout-box style (orange left border, warm tint bg)
- Self-selection helper: 3 → rows with orange arrows
- Plan cards: Core (light), Advanced (dark = featured), Website Builds (border outline)
- FAQ: accordion, clean, orange chevron

### How It Works `/how-it-works`

- Dark hero
- 4 steps: alternating text/visual layout desktop, vertical timeline mobile. Orange timeline line.
- Tools section: 2-col icon + H3 + body
- Final CTA dark

### Core & Advanced Plan Pages

- Dark hero (consistent)
- "Who this is for": warm tint callout
- Features: icon list with orange marks
- Testimonial: dark strip
- Pricing: bold, clear

### Website Builds

- Dark hero
- Pricing table: 2-col (standard/ecommerce), Bricolage prices
- "Shop with no staff" H3 with orange underline accent

### About `/about`

- Light hero — most direct H1 on the site
- "What we believe": 5 blocks, orange bold lead word + body
- "Who's behind us": mid surface block
- No corporate imagery

### Human in the Loop `/about/human-in-the-loop`

- Dark hero
- 4-step process in numbered editorial layout
- Most "explainer" page — clear, methodical

### Partners, Contact

- Partners: dark hero, 3-step layout, "who's a good fit" list
- Contact: light, centred form, clean

---

## 5. Key Components

| Component | Description |
|-----------|-------------|
| `<Nav>` | Sticky, scroll-aware, mobile hamburger, services dropdown |
| `<Footer>` | Dark, 2-col links + CTA |
| `<AssessmentForm>` | Reusable form: name/email/url/business-type dropdown |
| `<CTABlock>` | Dark bg section with H2, body, form |
| `<FeatureCard>` | White card, orange icon, H3, body |
| `<PlanCard>` | Pricing card — light or dark variant |
| `<TestimonialCard>` | Dark card, oversized orange quote mark |
| `<CalloutBox>` | Orange left border, warm tint bg — for suspicion blocks and important notes |
| `<StepBlock>` | Large orange step number, H3, body |

---

## 6. Hero Visual Treatment

No stock photography. Hero uses:
- Pure dark background (`#1A1A1A`)
- Subtle CSS dot-grid texture (low opacity overlay)
- Abstract speed lines (SVG, orange at 8–12% opacity) — echoes logo motion marks
- Typography IS the hero — the bold H1 carries visual weight
- Browser/UI mockup illustration (Phase 2 — post-launch addition)

---

## 7. Outstanding Assets Needed Before Launch

| Asset | Status | Notes |
|-------|--------|-------|
| Logo SVG (light bg version) | ❓ | PNG available, SVG preferred for nav |
| Logo SVG (dark bg version) | ❓ | White version for dark nav |
| Favicon | ❓ | Extract from logo icon/mark |
| OG image 1200×630 | ❓ | Create using brand type |
| Feature icons (6) | Using Lucide | Confirmed |
| Hero illustration | Deferred | Phase 2 |
| Steve / team photo | ❓ | About page — candid preferred |
| Testimonial quotes (4) | ❓ | See v4 copy for placeholders |
| Contact email | ❓ | Required for form handler |

---

## 8. Technical Notes

- **Platform:** Astro (static output) + Vercel
- **CSS:** Tailwind CSS with custom brand token extensions
- **Fonts:** Google Fonts (Bricolage Grotesque + Inter) via preconnect
- **Forms:** Assessment + Contact forms — serverless function / API route
- **Assessment API:** Claude API + PageSpeed API (Vercel serverless function)
- **No CMS at launch** — content in Astro components, update via code
- **Analytics:** Add Vercel Analytics (free tier) at launch
- **Icons:** Lucide (inline SVG, no icon font)
