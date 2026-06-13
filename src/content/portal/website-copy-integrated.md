---
title: "Website Copy — Integrated Draft"
category: "messaging"
skill: "copywriting"
sourceFile: "../assets/website-copy-integrated-v1.md"
lastUpdated: "2026-06-10"
---
# Fast Web Guru — Integrated Website Copy
## Development Document v1
### Combines: website-copy-v6.md (primary) + historic-fast-web-guru-website-content.md (K pages updated)

*Prepared: 2026-06-11*
*Based on: website-copy-v6.md + historic-fast-web-guru-website-content.md*
*Platform: Vercel*

---

## CRITICAL ALERTS — READ BEFORE IMPLEMENTATION

The following items require a decision or information from you before the relevant pages can be finalised. Each is flagged inline in the relevant page section and collected here for convenience.

| # | Alert | Location | Status |
|---|-------|----------|--------|
| A1 | **Cortex Host Systems landing page** — `/hosting/professional-hosting/` is now the Cortex Host Systems landing page. Highlights: included free with Full Code websites; part of the $30 Cortex AI package on all other plans. Copy updated below. | Professional Hosting page | ✅ RESOLVED |
| A2 | **Friends & Family invite-only tier at $4–$5/month** — hidden page, noindex. Leads with features not price. "Invite Only — Friends & Family Offer" banner at top. Copy updated below. | One Page Website page | ✅ RESOLVED |
| A3 | **Mail server settings confirmed** — standard settings applied: IMAP 993, POP3 995, SMTP 465, mail.yourdomain.com for both incoming and outgoing. Copy updated below. | Webmail Access page | ✅ RESOLVED |
| A4 | **Renamed to "Fast Web Guru Specialist Rates"** — old package references removed; now references Core, Ecommerce, and Advanced plans. Copy updated below. | Specialist Rates page | ✅ RESOLVED |
| A5 | **Richard Lloyd — do not publish. Michael Toome approved.** | Testimonials | ✅ RESOLVED |
| A6 | **Join Our Team — approved as-is.** | Join Our Team page | ✅ RESOLVED |
| A7 | **Google Maps/GBP page updated** — refreshed with 2026 Google Business Profile info: Gemini AI integration, emoji review reactions, Story format for photos/reviews. Copy updated below. | Google Maps page | ✅ RESOLVED |
| A8 | **T&Cs — legal review still required before publishing.** Philippines registration removed; IP/ownership clause revised. Needs legal sign-off. | Terms & Conditions | 🚨 OPEN |
| A9 | **Google Workspace pricing updated** — current 2026 AUD rates: Starter $8.40/user/mo, Standard $16.80, Plus $30.90 (all ex-GST). Copy updated below. | Emails page | ✅ RESOLVED |
| A10 | **Asia Pacific / overseas team** — no preference stated; neutral language retained throughout. Update if wording is confirmed. | About / Our Story | ❓ OPEN |

---

---

# PART 1: SITE ARCHITECTURE & REDIRECT MAP

---

## 1.1 Full Site Map

### Primary Pages (v6 — full copy in website-copy-v6.md)

```
/                           Homepage
/pricing                    Pricing
/how-it-works               How It Works
/services/core              Core Plan ($40/mo)
/services/ecommerce         Ecommerce Plan ($95/mo, Cortex included)
/services/advanced          Advanced Plan ($240/mo, Cortex included)
/services/website-builds    Website Builds
/about                      About
/about/human-in-the-loop    Human in the Loop
/partners                   Partners & Advocates
/contact                    Contact
/cortex                     Cortex (AI Add-on)
/cortex/host-systems        Cortex Host Systems
/cortex/team-stack          Cortex Team Stack
/cortex/ops-grid            Cortex Ops Grid
```

### Keep Pages (historic — updated copy in Part 3 below)

```
/our-story/                      Our Story [updated — distinct from /about]
/website-tips/                   Website Tips [updated — blog/resource hub]
/google-maps/                    Google Maps [updated — SEO education page]
/google-maps-pdf-download/       Google Maps Guide [updated — lead magnet]
/emails/                         Business Email [updated — email education]
/domains/                        Domains [updated — domain education]
/hosting-marketing-existing-websites/  Existing Site Hosting [updated]
/mobile-responsive-websites/     Mobile Responsive [updated]
/reseller/                       → 301 redirect to /partners
/referrals/                      Referrals [updated — referral partner page]
/contact/                        → 301 redirect to /contact (v6 page)
/terms-conditions/               Terms & Conditions [updated]
/fast-easy-website/one-page-website-design/  MVP Package [hidden — see Alert A2]
/content-marketing-specialist/fast-content-builder-top-up/  Top Up [updated]
/hosting/smart-web-hosting/      Legacy WordPress Hosting [updated]
/hosting/professional-hosting/   Corehost [updated — see Alert A1]
/join-our-team/                  Join Our Team [updated]
/contact/call-back-request/      Call Back [updated → may redirect to /contact]
/webmail-access/                 Webmail Access [updated — see Alert A3]
```

---

## 1.2 Redirect Map (Archive Pages → 301 Permanent)

Implement in `vercel.json` under the `redirects` array.

```json
{
  "redirects": [
    {
      "source": "/thrive-plugins/",
      "destination": "/services/core",
      "permanent": true
    },
    {
      "source": "/secure-certificate/",
      "destination": "/services/core",
      "permanent": true
    },
    {
      "source": "/website-templates/",
      "destination": "/services/website-builds",
      "permanent": true
    },
    {
      "source": "/web-design-packages/",
      "destination": "/pricing",
      "permanent": true
    },
    {
      "source": "/fast-easy-website/small-business-website/",
      "destination": "/pricing",
      "permanent": true
    },
    {
      "source": "/fast-easy-website/online-marketing-and-website/",
      "destination": "/pricing",
      "permanent": true
    },
    {
      "source": "/content-marketing-specialist/content-booster-starter/",
      "destination": "/services/advanced",
      "permanent": true
    },
    {
      "source": "/content-marketing-specialist/content-creator-professional/",
      "destination": "/services/advanced",
      "permanent": true
    },
    {
      "source": "/content-marketing-specialist/content-pro-marketer/",
      "destination": "/services/advanced",
      "permanent": true
    },
    {
      "source": "/hosting/marketing-adwords-support/",
      "destination": "/pricing",
      "permanent": true
    },
    {
      "source": "/reseller/",
      "destination": "/partners",
      "permanent": true
    }
  ]
}
```

### Redirect rationale

| Old URL | New URL | Reason |
|---------|---------|--------|
| `/thrive-plugins/` | `/services/core` | Thrive replaced by click-and-comment + modern stack; Core plan is the equivalent |
| `/secure-certificate/` | `/services/core` | SSL included in all hosting plans |
| `/website-templates/` | `/services/website-builds` | Template gallery replaced by bespoke build service |
| `/web-design-packages/` | `/pricing` | Pricing hub replaced |
| `/fast-easy-website/small-business-website/` | `/pricing` | Legacy website package replaced by new tiers |
| `/fast-easy-website/online-marketing-and-website/` | `/pricing` | Legacy package replaced |
| `/content-marketing-specialist/content-booster-starter/` | `/services/advanced` | Closest equivalent is Advanced plan |
| `/content-marketing-specialist/content-creator-professional/` | `/services/advanced` | Closest equivalent is Advanced plan |
| `/content-marketing-specialist/content-pro-marketer/` | `/services/advanced` | Closest equivalent is Advanced plan |
| `/hosting/marketing-adwords-support/` | `/pricing` | Adwords/ads management not a current standalone product |
| `/reseller/` | `/partners` | Directly superseded by Partners & Advocates page |

---

## 1.3 Navigation Structure (Updated)

### Primary Nav
```
Services ▾    Pricing    How It Works    About ▾    Partners    Contact
```

### Services Dropdown
```
Core — $40/mo (any platform)
Ecommerce — $95/mo (Cortex included)
Advanced — $240/mo
Website Builds (any framework)
─────────────────────────────
Cortex AI (/cortex)
  ├── Host Systems
  ├── Team Stack
  └── Ops Grid
─────────────────────────────
Add-Ons
```

### About Dropdown
```
About Fast Web Guru
Human in the Loop
Our Story (historic)
Join Our Team
```

### Footer Nav (full)
Primary: Home · Pricing · How It Works · Services · Cortex · About · Partners · Contact  
Resources: Our Story · Website Tips · Google Maps Guide · Domains · Business Email · Mobile Websites  
Legal: Terms & Conditions · Privacy Policy  
Support: Webmail Access · Call Back Request  

---

---

# PART 2: PRIMARY PAGES (v6)

The following pages are complete as documented in `website-copy-v6.md`. No changes required beyond the notes below.

| Page | URL | v6 Status | Notes |
|------|-----|-----------|-------|
| Homepage | `/` | Complete | SEO meta updated; Ecommerce plan added |
| Pricing | `/pricing` | Complete | Platforms section + Ecommerce plan added |
| How It Works | `/how-it-works` | Complete | Unchanged from v4 |
| Core Plan | `/services/core` | Complete | — |
| Advanced Plan | `/services/advanced` | Complete | — |
| Website Builds | `/services/website-builds` | Complete | Any-framework messaging added |
| About | `/about` | Complete | Unchanged from v4 |
| HITL | `/about/human-in-the-loop` | Complete | Unchanged from v4 |
| Partners | `/partners` | Complete | Supersedes old /reseller/ — 301 redirect in place |
| Contact | `/contact` | Complete | Unchanged from v4 |
| Cortex | `/cortex` | Complete | — |
| Cortex Host Systems | `/cortex/host-systems` | Complete | — |
| Cortex Team Stack | `/cortex/team-stack` | Complete | — |
| Cortex Ops Grid | `/cortex/ops-grid` | Complete | — |

**Note:** The Ecommerce Plan page (`/services/ecommerce`) is referenced throughout v6 but full copy was not included in v6. A stub is provided in Part 3 below.

---

---

# PART 3: INTEGRATED KEEP PAGES — UPDATED COPY

All pages below are sourced from the historic site, updated to:
- Remove Philippines business registration and Philippines-as-HQ references
- Update team narrative to Australian-owned with specialist team
- Replace Thrive/legacy platform references with current platform language
- Update pricing references to new structure or remove specific prices
- Add CTAs aligned with v6 offer
- Retain educational/SEO value

---

## PAGE: ECOMMERCE PLAN (/services/ecommerce)
*[v6 stub — this plan is referenced throughout v6 but needs a full page]*

---

### HERO

**H1:**
Your online store. Handled. $95/month.

**Subheadline:**
Ecommerce hosting on any platform — WooCommerce or full-code — with Cortex AI included, same-day product and order updates, and one fixed monthly price. No invoice per change. No surprises.

**CTA:** Get Your Free AI Assessment

---

### WHO THIS IS FOR

**H2:**
This plan is for you if...

You run an online store and you're tired of managing the tech when you should be managing the business. Product updates that take days. Stock changes that require a developer. An inconsistent checkout experience that's costing you sales.

Ecommerce hosting is Core, rebuilt for stores — with Cortex AI included so your product descriptions, marketing copy, and store pages actually stay sharp.

---

### WHAT'S INCLUDED

**Everything in Core ($40/mo), plus:**

**Ecommerce-ready hosting**
Tuned for store traffic and checkout reliability — not a generic shared server that slows down on busy days.

**Cortex AI included — no extra charge**
All three pillars: AI-native infrastructure with Talk-to-Edit, a Business DNA workshop that trains an AI brain on your brand, and 20 bespoke growth workflows. For a store, this means product descriptions that sound like you, email sequences that convert, and marketing blueprints built for your specific audience.

**Product, stock, and order support**
Part of your same-day updates. Need a new product listed, a price changed, stock updated, or an order question sorted? Flag it, it's done same-day.

**Your support person**
Not a generic helpdesk. A real Australian who knows your store and your customers — with a full team behind them.

---

### PRICING

**Ecommerce — $95/month** · or $950/year (2 months free)

Cortex AI included. Cancel any month. No lock-in. No setup fee.

[Get Started — $95/month]
[Get Started — $950/year]

*Need a full team managing the store every week? See Advanced ($240/mo, 16 hrs/month) →*

---

**PAGE META:**
- Title: Ecommerce Hosting — Fast Web Guru | $95/month, Cortex AI Included
- Description: Ecommerce hosting for Australian online stores — WooCommerce or full-code. $95/mo with Cortex AI included, same-day product updates, dedicated Australian support. No invoice per change. No lock-in.

---
---

## PAGE: OUR STORY (/our-story/)
*[K — updated from historic. Distinct from /about — retained for SEO and narrative value.]*

---

**PAGE META:**
- Title: Our Story — Fast Web Guru | Australian Web Support for Small Business
- Description: How Fast Web Guru started — and why Australian small businesses deserve better than what the web industry has given them. Our story, our values, our team.

---

### HEADLINE

Many Australian small businesses are missing out on what the internet can do for them.

Big business is getting better online every year — but the tools, support, and expertise are hard to access if you're running a small or medium operation without a dedicated IT team.

---

### THE CHALLENGE

Running your business is already a full-time job.

- Most small business owners don't have time to manage online marketing
- Domains, hosting, emails, websites, and search visibility are all connected — and all confusing when you're doing it yourself
- Web developers deliver the site, disappear, and come back only when there's an invoice

---

### OUR ANSWER

Fast Web Guru was built to fix this.

We pair AI tools with real human support to give Australian small businesses the kind of website management that used to be reserved for companies with in-house marketing teams. One fixed monthly price. A real support person. No invoice every time something needs changing.

We call it Business in a Box — and it's been running in real Australian businesses for over a decade.

[See how it works →](/how-it-works)

---

### OUR PROMISE

- Building and running websites that help Australian businesses get found online and generate real enquiries
- Keeping content current and marketing active, not just keeping the lights on
- Bringing AI capability to businesses that would otherwise be left behind in the AI era

---

### WHO WE ARE

Fast Web Guru is an Australian-owned web hosting and AI services team with over a decade of experience building and supporting websites for businesses across Australia.

We have specialists across multiple disciplines — web development, design, content, marketing, and AI implementation — operating as a cooperative team where every member is invested in client outcomes.

Our initial focus is on the communities we know best: Hunter Valley, Newcastle, Sydney, Melbourne, and the Yarra Valley. But our clients are across Australia, and our team has deep experience in the Asia Pacific digital market.

**A five-minute conversation is all it takes to get started.**

[Book a Call Back →](/contact/call-back-request/)

---

### YOUR SUPPORT TEAM

You will have access to a dedicated support person — someone who knows your business, responds within the hour, and has a full team and AI toolkit behind them to get things done without you having to re-explain yourself.

Supporting you on your side. Not billing you for it.

---

### WHAT WE OFFER

**Hosting + AI + Support**
AI-enhanced hosting on any platform, same-day updates, and a dedicated Australian support person. One fixed monthly price.
[See Core Plan → $40/month](/services/core)

**Managed Ecommerce**
Hosting, Cortex AI, and same-day product and order support — built for online stores.
[See Ecommerce Plan → $95/month](/services/ecommerce)

**Full Management**
16 hours of dedicated team time per month, plus Cortex AI included — for businesses that need consistent, weekly attention on their website and marketing.
[See Advanced Plan → $240/month](/services/advanced)

---

**Lead magnet strip:**
Not sure where to start?
[Get a free AI assessment of your website →](/contact)
*30 seconds. Personalised findings in your inbox within 24 hours.*

---
---

## PAGE: WEBSITE TIPS (/website-tips/)
*[K — updated from historic. SEO hub page.]*

---

**PAGE META:**
- Title: Website Tips — Fast Web Guru | Hosting, Domains, Email & Marketing Guides
- Description: Practical guides on website hosting, domains, business email, Google Maps, and online marketing for Australian small businesses. From the Fast Web Guru team.

---

### INTRO

Practical guides on everything your online business needs — from the basics of domains and hosting to Google Maps optimisation and website marketing strategy.

Whether you're just getting started or looking to improve what you've already got, these resources are written to give you clear, honest guidance without the jargon.

---

### THREE SECTIONS

**Support & How-To Guides**
Guidance for Fast Web Guru clients and anyone managing their own website — editing, email setup, understanding your reports, and common questions answered plainly.
[→ Browse guides]

**Website Infrastructure**
Everything you need to know about domains, hosting, business email, and SSL before you spend a dollar. Understanding the foundations stops expensive mistakes.
[→ Browse infrastructure guides]

**Website Marketing**
What actually moves the needle — Google Maps visibility, local SEO, content updates, email newsletters, and the marketing actions that turn website visitors into enquiries.
[→ Browse marketing guides]

---

**CTA:**
Want a free assessment of your own site?
[Get a free AI assessment →](/contact)
*We'll look at your website and send you specific findings — no generic advice, no commitment.*

---
---

## PAGE: GOOGLE MAPS (/google-maps/)
*[K — updated from historic. Strong SEO value for local business searches. Updated with 2026 Google Business Profile info.]*

---

**PAGE META:**
- Title: Google Business Profile for Small Business — Why It Matters in 2026 | Fast Web Guru
- Description: Why Google Business Profile is essential for every local Australian business — free, generates enquiries, builds reviews, and now includes AI-powered insights. Fast Web Guru includes Google Business Profile setup and support in all hosting plans.

---

### HEADLINE

Why Your Google Business Profile Is One of the Most Valuable Things You Can Set Up

Google Maps isn't just for navigation. For local businesses, it's often the first — and only — place a potential customer looks before deciding who to call. Your Google Business Profile is what controls how your business appears there.

A Google Business Profile listing is free to claim and manage. Done properly, it puts your business in front of people searching for what you do, in your area, right now. Done poorly — or not done at all — it hands those customers to your competitors.

---

### FOUR REASONS IT MATTERS IN 2026

**It's completely free — and it works harder than ever**
Unlike paid advertising, Google Business Profile visibility costs nothing to set up. A properly optimised listing means potential customers can find your phone number, address, website, and opening hours before they've even clicked to your site. For businesses with a tight marketing budget, this is consistently one of the highest-return actions you can take.

**It generates real enquiries and foot traffic**
Your Google Business Profile is often the first impression a local customer gets. One-click calling, directions, website link, photos, and reviews all live there. Businesses with complete, regularly updated profiles consistently outperform those with bare-bones or unclaimed listings in local search results.

**It now includes AI-powered business insights**
In 2026, Google Business Profile integrates with Gemini AI — giving business owners a conversational assistant that can analyse your reviews, search impressions, call data, and customer engagement. You can ask "How did my business perform this month?" and get a plain-English answer drawn from your actual profile data. This turns your listing from a static directory entry into an active business intelligence tool.

**It builds trust through reviews — with new engagement tools**
Google Maps now lets businesses react to reviews with emoji responses (heart, fire, etc.) and displays customer photos and reviews in a Story format — similar to Instagram. Actively managing your listing, responding to reviews, and keeping your profile current builds social proof that converts browsers into real customers.

---

### INCLUDED IN ALL FAST WEB GURU PLANS

Google Business Profile setup, updates, and ongoing management are included in every Fast Web Guru hosting plan. You don't have to manage it yourself — and with the AI-powered features now available, having someone who knows what to do with your profile data matters more than ever.

[See plans and pricing →](/pricing)

---

**Lead magnet:**
Want to understand how to set up and optimise your Google Business Profile yourself?
[Download our free Google Maps guide →](/google-maps-pdf-download/)
*A step-by-step guide to getting your business found online — free.*

---
---

## PAGE: GOOGLE MAPS PDF DOWNLOAD (/google-maps-pdf-download/)
*[K — updated from historic. Lead magnet landing page.]*

---

**PAGE META:**
- Title: Free Guide: Get Your Business on Google Maps | Fast Web Guru
- Description: Download our free 9-step guide to getting your local business onto Google Maps and appearing in local search results. Free from Fast Web Guru.

---

### HEADLINE

How to get your business found on Google — for free

### SUBHEADLINE

A nine-step guide to setting up your Google Business Profile and appearing on the first page of local search results.

### BODY

Google Maps is one of the most powerful free marketing tools available to a small business — and most businesses either haven't claimed their listing or haven't set it up properly.

This guide walks you through nine clear steps to:
- Claim and verify your Google Business Profile
- Make sure all your information is correct and complete
- Optimise your listing to appear ahead of competitors
- Start building reviews and keeping your listing active

No technical knowledge required. Follow the steps and your business will be visible to local customers searching for what you offer.

**[Download Free Guide]**

---

*Already on Google Maps but want better results? All Fast Web Guru hosting plans include Google Business Profile management — so we handle the setup, updates, and ongoing optimisation for you.*

[See plans and pricing →](/pricing)

---
---

## PAGE: BUSINESS EMAIL (/emails/)
*[K — updated from historic. Updated to reflect WPX/Gmail recommendation. Original URL /emails/ retained for SEO.]*

---

**PAGE META:**
- Title: Business Email — Why a Branded Email Address Matters | Fast Web Guru
- Description: Why using a branded email address (you@yourbusiness.com.au) matters for professional credibility — and the best way to set it up. Fast Web Guru guide.

---

### HEADLINE

Why your email address matters more than you think

**The difference:**
`info@yourplumbingbusiness.com.au` vs `plumber99@gmail.com`

Both get email delivered. Only one says "professional business."

---

### THE CREDIBILITY GAP

A generic email address — Gmail, Hotmail, Yahoo — signals to potential customers that your business may be new, informal, or not established. It's a small thing that makes a surprisingly large impression, especially when customers are comparing you to competitors.

Setting up a branded email address — using your own domain name — is straightforward and inexpensive. And it applies to every business, regardless of size.

---

### YOUR EMAIL OPTIONS

**Option 1 — Gmail (Google Workspace) — Recommended**
Google Workspace gives you a professional email address at your domain (`you@yourbusiness.com.au`) using the familiar Gmail interface. Current 2026 AUD pricing (ex-GST, billed annually):

| Plan | Price/user/month | Best for |
|------|-----------------|----------|
| Business Starter | $8.40 | Most small businesses — custom email, 30GB pooled storage |
| Business Standard | $16.80 | Growing teams — shared drives, video meetings, more storage |
| Business Plus | $30.90 | Advanced security and compliance needs |

*Add 10% GST to the above. Monthly billing is available at a slightly higher rate.*

You get the familiar Gmail experience on your own domain, reliable delivery and spam filtering, no ads, seamless device sync, and Microsoft Outlook compatibility.

We recommend this approach for most clients — it separates your email infrastructure from your website hosting, which means email keeps working even if there's ever a hosting issue.

**Option 2 — Server email (via your hosting provider)**
Your hosting plan includes email mailboxes on the same server as your website. This is the simpler setup, but we generally recommend against relying on it as your primary email for a few reasons:
- Email and website are on the same infrastructure — an issue with one can affect the other
- Mailbox storage limits apply (typically 500MB per mailbox, though aliases are unlimited)
- Deliverability and spam handling isn't as strong as Google Workspace

If you just need a simple email address for contact forms or support routing, server email works fine. For your main business communications, Gmail on your domain is more reliable.

---

### WHICH DO WE RECOMMEND?

**Keep your email separate from your web hosting.** Gmail (Google Workspace) is the cleaner setup — it's more reliable, more flexible, and what your staff will already know how to use. If you're currently on server email and experiencing issues, this is usually why.

Fast Web Guru can help you set up Google Workspace on your domain as part of any hosting plan.

**CTAs:**
[Talk to us about business email setup →](/contact)
[See plans and pricing →](/pricing)

---
---

## PAGE: DOMAINS (/domains/)
*[K — updated from historic. Education page — strong SEO value.]*

---

**PAGE META:**
- Title: Why Your Business Needs a Domain Name | Fast Web Guru
- Description: Why every Australian business needs its own domain name — and what to look for when registering one. A practical guide from Fast Web Guru.

---

### HEADLINE

Why every business needs its own domain name

If your business doesn't have a domain name — a web address that's specifically yours — you're making it harder for customers to find you, trust you, and do business with you.

---

### FOUR REASONS A DOMAIN NAME MATTERS

**You become findable anywhere, any time**
A domain name gives you a home on the internet — a consistent address where customers can reach you whether they're searching on Google, seeing your card, or hearing about you from someone else. Without one, you're invisible to anyone who goes online to look for what you offer.

**It opens the door to online sales**
Your domain is the foundation of any website — and a website means you can take enquiries, bookings, and purchases 24 hours a day, seven days a week, without you having to be there.

**It protects your brand**
Registering your business name as a domain means no competitor or opportunist can register it instead. Once it's yours, it's yours — and the earlier you register, the more options you'll have for the exact name you want.

**It makes your marketing work harder**
Every email you send, every card you hand over, every social media profile — they all point back to your domain. A consistent, professional address across all your marketing channels builds familiarity and trust faster than anything else.

---

**CTA:** [Register your domain through Fast Web Guru →](/contact)

*Domain registration is included in all Fast Web Guru hosting plans.*

Need help? [Contact us →](/contact)

---
---

## PAGE: HOSTING & MARKETING FOR EXISTING WEBSITES (/hosting-marketing-existing-websites/)
*[K — updated from historic. Strong SEO value for "existing site" searches. Updated to bridge to v6 offering.]*

---

**PAGE META:**
- Title: Hosting & Support for Your Existing Website | Fast Web Guru
- Description: Already have a website but need better hosting, updates, and marketing support? Fast Web Guru takes over any existing site — WordPress or any platform — and runs it properly.

---

### HEADLINE

Got an existing website — but it's not doing what it should?

You built the site (or paid someone to). It launched with good intentions. And then... nothing much happened. Updates are slow. Support is expensive. The site sits there, and so does your phone.

---

### THE PATTERN WE SEE

Your developer built something, handed it over, and went quiet. Now every change comes with an invoice. Your site isn't being updated, so it's falling in search rankings. You know it should be working harder for your business, but you don't know where to start.

We hear this constantly from Australian small businesses. It's not your fault — this is how most of the web industry works.

---

### WHAT FAST WEB GURU DOES DIFFERENTLY

When you bring your existing site to Fast Web Guru, we:

- **Migrate or connect your site** with no downtime — we run the new setup in parallel, so your live site stays up throughout
- **Set up same-day updates** via click-and-comment — no more chasing anyone for a simple change
- **Take over hosting** on fast, secure infrastructure with triple-redundant backup
- **Assign you a dedicated support person** — a real Australian who knows your business and replies within the hour
- **Connect AI tools** if you want them — marketing content, workflows, and your Business DNA ingested into a personalised AI brain

We work with any platform: WordPress (the most common), WooCommerce for ecommerce, or any existing site you want to migrate to a faster, more modern stack.

---

### WHAT'S INCLUDED

Every Fast Web Guru hosting plan includes:
- Same-day website updates (no quote, no invoice per change)
- Triple-redundant backup hosting
- 24/7 monitoring, replies within an hour
- Workflow Hub — email, social, tasks, all connected
- Full ownership: your site, your domain, all logins — always

Optional upgrades:
- **Cortex AI ($30/mo)** — AI-native infrastructure, Business DNA brain, and 20 monthly growth workflows
- **Advanced ($240/mo)** — 16 hours of dedicated team time per month, Cortex included

---

**CTA:** [Get a free AI assessment of your current site →](/contact)
*We'll look at what you've got and tell you exactly what we'd do with it. 30 seconds. No commitment.*

[See plans and pricing →](/pricing)

---
---

## PAGE: MOBILE RESPONSIVE WEBSITES (/mobile-responsive-websites/)
*[K — updated from historic. SEO value for mobile website searches.]*

---

**PAGE META:**
- Title: Mobile-Responsive Websites for Australian Small Business | Fast Web Guru
- Description: Most visitors are on mobile. Fast Web Guru builds and hosts mobile-first websites that work on every device — with same-day update capability from day one.

---

### HEADLINE

Is your website working for mobile visitors?

More than half of all website traffic comes from mobile devices. If your site isn't giving those visitors a good experience — fast loading, easy to read, simple to navigate — you're losing enquiries before they even have a chance to contact you.

---

### THE MOBILE PROBLEM

Many websites that look fine on a desktop are still genuinely difficult to use on a phone. Text is too small. Buttons are too close together. Forms are frustrating to fill in. The result: visitors leave. The phone doesn't ring.

This isn't just about appearances — Google uses mobile experience as a significant factor in search rankings. A site that's hard to use on mobile is also harder to find.

---

### HOW FAST WEB GURU HANDLES MOBILE

Every website we build is mobile-first — meaning we design for the phone experience first and scale up to desktop, not the other way around.

For existing sites that aren't mobile-optimised, we assess what needs to change and provide clear options — from targeted improvements on your current site to a fresh build on modern infrastructure.

**All Fast Web Guru websites include:**
- Mobile, tablet, and desktop responsive design
- Speed optimisation for mobile connections
- Click-and-comment update system — works on any device, so you can flag changes from your phone
- Regular performance monitoring

---

**CTA:** [Talk to us about your mobile website →](/contact)
*Or get a free AI assessment — we'll tell you exactly how your current site performs on mobile.*

[See website build pricing →](/services/website-builds)

---
---

## PAGE: REFERRALS (/referrals/)
*[K — updated from historic. Distinct from /partners (which covers wholesale/agency model). Referrals = individual referral partner.]*

---

**PAGE META:**
- Title: Referral Partner Program — Fast Web Guru | Earn Passive Monthly Income
- Description: Earn passive monthly income by referring Australian businesses to Fast Web Guru. Our referral program pays you for every active client you refer — every month.

---

### HEADLINE

Earn passive monthly income by referring clients

Know a business that's struggling with their website? Send them to Fast Web Guru. We'll take excellent care of them — and pay you a monthly commission for every client you refer, for as long as they stay active.

---

### HOW IT WORKS

**You refer. We handle everything.**
Once you make a referral, our team takes over — a consultation with your client, getting them set up on the right plan, and delivering the ongoing service. You don't have to manage anything.

**You can also check availability and place orders yourself** through our partner portal, if you prefer a more hands-on approach.

---

### WHAT YOU EARN

You earn passive monthly income from every active client you refer — not a one-off finder's fee, but a cut of their ongoing subscription for as long as they're with us.

We'll also provide free marketing material — email templates, social posts, articles — if you want to actively promote your new income stream to your network.

---

### OUR APPROACH IS DIFFERENT

We lead with education, not just sales.

Our referral materials help your clients understand what they actually need — not just what to buy. We cover the basics of websites, hosting, domains, email, and online marketing in a way that builds trust with your network rather than burning it.

Clients who understand what they're buying make better decisions — and stay longer.

---

### KEEPING YOU IN THE LOOP

You'll have access to your own partner portal where you can see:
- Which clients you've referred
- What services they're using
- Your accrued commissions
- Request commission payouts at any time

---

**CTA:** [Become a referral partner →](/contact)
*Fill in the contact form and let us know you're interested in the referral program. We'll be in touch to get you sorted.*

---

*Looking for a wholesale/agency partnership? [See our Partners & Advocates program →](/partners)*

---
---

## PAGE: TERMS & CONDITIONS (/terms-conditions/)
*[K — updated. Philippines registration removed. IP ownership clause revised to align with v6 "full ownership" promise. Legal review recommended — see Alert A8.]*

*⚠️ Alert A8: This page requires legal review. The IP/ownership clause below has been revised to align with FWG's "full ownership" value proposition, but the final wording should be confirmed with a legal adviser before publishing.*

---

**PAGE META:**
- Title: Terms & Conditions — Fast Web Guru
- Description: Fast Web Guru terms and conditions — payment, cancellation, IP ownership, privacy, and service delivery.

---

Fast Web Guru is committed to transparency, integrity, and fairness. These terms are designed to be clearly understood — if anything is unclear, please ask before signing up.

---

**1. PAYMENT TERMS**
Monthly subscriptions are charged via autopayment (credit/debit card or bank transfer). Invoices are sent 14 days before the due date. Service commences immediately after the first payment is confirmed. Annual plans are charged in full upfront with a two-month discount applied.

**2. MINIMUM TERM**
Monthly plans have no minimum term — you can cancel at the end of any billing month. Annual plans run for 12 months from the start date. If you cancel an annual plan before the end of the term, the remaining balance is forfeited (no refund on unused months).

**3. SUSPENSION & TERMINATION**
If payment is not received within 15 days of the due date, services may be suspended. We will notify you by email before any suspension. If an account is terminated for non-payment, your website files and domain transfer credentials will be provided to you so you can move to another provider.

**4. OWNERSHIP**
Your website, your domain name, and all login credentials are yours. These are provided to you in full at the start of your service — not held back or used as leverage. If you cancel, you take everything with you. Fast Web Guru does not claim ownership of content you provide.

**5. CLIENT MODIFICATIONS**
Once a website is live, any modifications you make to the site yourself are your responsibility. We provide training resources and support for client-made changes. Significant redesigns (structural or design-level changes beyond content updates) fall outside the scope of standard plans and will be quoted separately.

**6. PRIVACY & CONFIDENTIALITY**
Fast Web Guru treats all client information with strict confidentiality. We do not share client data with third parties except as required to deliver services (e.g., hosting infrastructure providers). Clients agree not to share Fast Web Guru's proprietary systems, materials, or processes with third parties.

**7. HOSTING INFRASTRUCTURE**
Fast Web Guru uses third-party infrastructure providers to deliver hosting services. We maintain standards aligned with our providers' service levels. We are not liable for outages or downtime caused by infrastructure-level events beyond our control, but we maintain triple-redundant backup systems to minimise disruption.

**8. SUPPORT SCOPE**
Support is provided as described in your plan. Responses to support requests are handled within the timeframes specified in your plan. For urgent issues outside business hours, emergency contact details are provided to all active clients.

---
---

## PAGE: FRIENDS & FAMILY — INVITE ONLY
**URL:** `/fast-easy-website/one-page-website-design/`
*[K — Hidden package page. Noindex. Invite only. Leads with features, not price.]*

---

**PAGE META:**
- Title: Fast Web Guru — Invite Only Offer
- Meta robots: noindex, nofollow *(hidden — do not index, do not link from public nav)*

---

> **Invite Only — Friends & Family Offer**
> *This page is for people who've received a personal invitation. It's not advertised publicly.*

---

### HEADLINE

Your website. Done for you. Today.

Everything that makes Fast Web Guru different — same-day updates, a real support person, AI-powered hosting, full ownership of your site and domain — at a special rate available only to people we know personally.

---

### WHAT YOU GET

Everything included in our standard plans:

- **AI-enhanced hosting** on fast, secure infrastructure
- **Same-day updates** via click-and-comment — flag a change, it's done same-day, no invoice
- **Your dedicated support person** — a real Australian who knows your business, replies within the hour
- **Triple-redundant backup hosting** — three copies of your site, automatic failover
- **Full ownership** — your site, your domain, all logins. Yours from day one
- **Workflow Hub** — email, social, tasks, all connected
- **Domain name** included
- **Email setup** (3 addresses)
- Live within 72 hours of setup information received

---

### THIS IS A PERSONAL OFFER

This pricing is available by invitation only — it's not something we advertise publicly, and it won't appear on our pricing page. If someone you trust passed on this link, this is our way of saying thanks to the people who've been with us from the start.

When you're ready to add AI tools — a brand-trained digital brain, 20 monthly growth workflows, and AI site-editing — you can upgrade to Cortex at any time for $30/month more.

**[Get Started — Invite Only]**
**[Request a Call Back →](/contact/call-back-request/)**

---
---

## PAGE: FAST WEB GURU SPECIALIST RATES
**URL:** `/content-marketing-specialist/fast-content-builder-top-up/`
*[K — renamed to "Fast Web Guru Specialist Rates." Old package references removed; references Core, Ecommerce, and Advanced plans.]*

---

**PAGE META:**
- Title: Fast Web Guru Specialist Rates | Add-On Hours for Hosting Clients
- Description: Fast Web Guru specialist rates — add web, content, design, SEO, or marketing hours to any active hosting plan. Monthly contracts and pay-as-you-go options available.

---

### HEADLINE

Fast Web Guru Specialist Rates

Additional specialist time for clients on any Fast Web Guru hosting plan — Core, Ecommerce, or Advanced.

Need more than your plan's included support hours? Whether you're running a campaign, pushing out a content refresh, rebuilding a section, or need specialist skills for a specific project, you can add hours at any time.

---

### WHAT SPECIALIST HOURS COVER

Our specialist team handles:
- Graphic design and basic video editing
- Search optimisation and technical SEO
- Social media preparation and scheduling
- Email newsletter creation and automation setup
- Website development — themes, navigation, plugins, custom features
- AI content production and workflow implementation
- Any other web, marketing, or content work

---

### MONTHLY ADD-ON (6-month contracts)

- **10 hours/month — $250/month** *(save $100 vs pay-as-you-go)*
- **20 hours/month — $420/month** *(save $150 vs pay-as-you-go)*

Unused hours carry over for up to 3 months, then expire. You can draw up to 10 hours from the following month if needed.

---

### PAY AS YOU GO

- 10 hours — **$350**
- 20 hours — **$570**
- 50 hours — **$1,250**

Hours expire 6 months from purchase.

---

*Available as an add-on to any active Fast Web Guru hosting plan (Core, Ecommerce, or Advanced). Not a standalone product.*

[Talk to us about adding specialist hours →](/contact)
[See hosting plans →](/pricing)

---
---

## PAGE: LEGACY WORDPRESS HOSTING — SMALL BUSINESS STARTER
**URL:** `/hosting/smart-web-hosting/`
*[K — TRADITIONAL (LEGACY) WORDPRESS HOSTING CORE PACKAGE. Retained for clients on this plan and for SEO.]*

---

**PAGE META:**
- Title: WordPress Hosting — Small Business Starter | Fast Web Guru Legacy Plan
- Description: Fast Web Guru's legacy WordPress hosting plan — Google Maps support, daily backups, WordPress maintenance, and marketing plugins. Existing clients on this plan can find support details here.

---

### WORDPRESS HOSTING — SMALL BUSINESS STARTER

**$47/month** · *Legacy plan — existing clients*

This is our legacy Small Business Starter WordPress hosting plan. If you're currently on this plan, your service continues unchanged. This page is provided as a reference for existing clients.

---

### WHAT'S INCLUDED

**Marketing Support:**
- Google Maps Support — initial setup and unlimited updates
- Website listed in 5 key directories
- Smart website reports (search rankings, traffic analytics, inbound links)

**Hosting & Support:**
- Unlimited bandwidth and disk space
- Daily off-site backups with rollback capability
- Email accounts (hosted or Google Workspace setup)
- Annual website management training session
- Daily WordPress software and security updates
- Help ticket support + phone for urgent issues

**WordPress Plugins:**
- Gallery system
- Ninja Forms
- Wordfence security
- Thrive Themes (Content Builder, Landing Pages, Lightbox, Widgets)

---

### LOOKING TO UPGRADE?

The legacy WordPress hosting plan covers the essentials. If you want same-day updates via click-and-comment, a dedicated support person who knows your business, and AI tools connected to your brand, see our current plans:

[Core Plan — $40/month →](/services/core)
[Core + Cortex AI — $70/month →](/services/core)
[Advanced — $240/month (16 hrs/mo, Cortex included) →](/services/advanced)

---
---

## PAGE: CORTEX HOST SYSTEMS LANDING PAGE
**URL:** `/hosting/professional-hosting/`
*[K — Now the main landing page for Cortex Host Systems. Included free with Full Code websites; part of the $30 Cortex AI package on all other plans.]*

---

**PAGE META:**
- Title: Cortex Host Systems — AI-Native Hosting | Included Free with Full Code | Fast Web Guru
- Description: Cortex Host Systems is AI-native hosting with Talk-to-Edit built in. Update your website by describing what you want — no code, no developer. Included free with Full Code websites. Part of the $30 Cortex AI package.

---

### HEADLINE

AI-native hosting that updates your website when you talk to it.

### SUBHEADLINE

Cortex Host Systems is the infrastructure layer of Fast Web Guru's AI ecosystem — fast, secure hosting with Talk-to-Edit built in. Point at any part of your site, describe what you want, and Cortex handles it. No developer. No login. No waiting.

---

### INCLUDED FREE WITH FULL CODE WEBSITES

If you're on a Full Code website with Fast Web Guru, **Cortex Host Systems is included at no extra charge.** Full Code is our AI-native flagship build — the fastest, most secure site we make, and the platform where Cortex runs at full power.

[What is Full Code? See how platforms compare →](/pricing#platforms)

---

### PART OF THE CORTEX AI PACKAGE — $30/MONTH

On any other Fast Web Guru plan — Core, Ecommerce, or Advanced — Cortex Host Systems is one of three pillars in the **$30/month Cortex AI package.** All three pillars together:

- **Cortex Host Systems** — this pillar. AI-native infrastructure + Talk-to-Edit
- **Cortex Team Stack** — Business DNA workshop, personalised AI brain, 1 hr/mo AI Specialist
- **Cortex Ops Grid** — 20 bespoke growth workflows built from your Business DNA monthly

Three pillars. One bundle. $30/month. [See the full Cortex page →](/cortex)

---

### WHAT CORTEX HOST SYSTEMS GIVES YOU

**Talk-to-Edit**
See something that needs changing on your website? Point at it, describe what you want, and Cortex handles it. No code. No builders. No waiting for a developer to fit it in their schedule. Fix a typo at 9pm on a Saturday — done in 30 seconds.

**AI-native infrastructure**
Fast, secure, cognitive hosting designed to run AI operations. Better performance under traffic. Faster load times. Built from the ground up for the AI layer running on top of it.

**Server-level security and performance**
Security and performance hardened at the infrastructure level — particularly suited to image-heavy and media-rich sites. Not an afterthought; engineered in from the start.

**FWG support team integration**
Use Talk-to-Edit yourself, or flag it for your support person to handle. Your choice, every time.

---

### HOW TALK-TO-EDIT SCALES WITH YOUR PLATFORM

Talk-to-Edit reaches full power on our Full Code AI-native build. It runs strongly on a headless front end and works partially on standard WordPress. The other two Cortex pillars — Team Stack and Ops Grid — run fully on every platform.

| Platform | Talk-to-Edit | Team Stack + Ops Grid |
|----------|-------------|----------------------|
| Full Code (FWG-native) | **Full power** | Full |
| Headless WordPress | Strong | Full |
| WordPress (standard) | Partial | Full |
| External host | Partial | Full |

[See how platforms compare →](/pricing#platforms)

---

**CTA:**
[Add Cortex to Your Plan — $30/Month →](/cortex)
[Or: Get Your Free AI Assessment →](/contact)

*Already on a Full Code website? Cortex Host Systems is included — nothing extra to pay.*

---
---

## PAGE: JOIN OUR TEAM (/join-our-team/)
*[K — updated. Philippines references removed. Roles updated to reflect current Australian/remote context.]*

---

**PAGE META:**
- Title: Join the Fast Web Guru Team | Roles in Web, Marketing & AI
- Description: Fast Web Guru is growing. We're looking for Technology Advocates, referral partners, interns, and specialist contractors. See current opportunities.

---

### HEADLINE

Make a Difference. Join Our Team.

Fast Web Guru is an Australian-owned web hosting and AI services company built around one idea: small businesses deserve proper support. We're growing, and we're looking for people who believe that too.

---

### ROLE 1 — TECHNOLOGY ADVOCATE

Help Australian small businesses understand and use digital tools to grow their business. Technology Advocates work within their local community or network, helping businesses get online, stay visible, and take advantage of the AI era.

This is a flexible, self-employed role — you build your income by helping the businesses around you.

[Apply as a Technology Advocate →](/contact)

---

### ROLE 2 — REFERRAL & RESELLER PARTNER

Already working with small businesses — as a marketer, designer, bookkeeper, or consultant? Add Fast Web Guru to your offering and earn monthly passive income by referring clients.

[Apply as a Referral/Reseller Partner →](/referrals/)

---

### ROLE 3 — INTERNSHIP PROGRAM

We occasionally take on interns with strong interest in web development, digital marketing, or AI implementation. Ideal for recent graduates or students in IT or marketing who want real-world experience in a fast-moving environment.

[Apply for an internship →](/contact)

---

### ROLE 4 — SPECIALIST CONTRACTOR

We work with specialist contractors across web development, graphic design, video editing, SEO, and marketing. If you have strong skills in any of these areas and want to work with a focused, collaborative team — we'd like to hear from you.

[Apply for specialist contractor roles →](/contact)

---

**Questions?** Email us at support@fastwebguru.com

---
---

## PAGE: CALL BACK REQUEST (/contact/call-back-request/)
*[K — updated. Kept as a separate URL for campaigns and existing links.]*

---

**PAGE META:**
- Title: Request a Call Back — Fast Web Guru
- Description: Leave your details and a Fast Web Guru team member will call you back to discuss your website, hosting, or marketing needs.

---

### HOW CAN WE HELP?

Leave your details below and we'll call you back at a time that suits — to talk through your current website, your hosting situation, your marketing goals, or how to get started.

No scripts. No sales pitch. Just a straight conversation about your business.

**[Call Back Request Form]**
- Name
- Business name
- Phone number
- Best time to call
- What can we help with? (short text field)

---

*Prefer to start with something in writing?*
[Get a free AI assessment of your website →](/contact)
*30 seconds. We'll review your site and send you personalised findings within 24 hours.*

---

support@fastwebguru.com
Fast & professional support for your online business.

---
---

## PAGE: WEBMAIL ACCESS (/webmail-access/)
*[K — updated with WPX server email details and Gmail recommendation. See Alert A3 — WPX server specifics needed.]*

*Settings confirmed and applied below.*

---

**PAGE META:**
- Title: Webmail Access & Email Setup — Fast Web Guru Client Support
- Description: Access your Fast Web Guru email account via webmail, or set up your business email on iPhone, Android, or Outlook. WPX hosting email guide.

---

### HEADLINE

Webmail Access & Email Setup

This page is for Fast Web Guru clients using email hosted on our WPX infrastructure. If you're experiencing email issues, start with the webmail access below — it will quickly confirm whether the issue is with your email account or just your device setup.

---

### OUR RECOMMENDATION — USE GMAIL INSTEAD

**Before going further: we recommend Google Workspace (Gmail on your domain) for all primary business email.**

Here's why we suggest keeping email separate from your web hosting:

- If there's ever a hosting issue, your email is unaffected (they're on different infrastructure)
- Gmail's spam filtering, reliability, and support are significantly better than server email
- Most people already know how to use Gmail — no new tools to learn
- Your email works the same way whether you're on a phone, tablet, laptop, or desktop

**WPX server email is still available** — with unlimited mailboxes, unlimited aliases, and 500MB per mailbox — but for your main business communications, Google Workspace is the more reliable choice.

[Talk to us about setting up Google Workspace →](/contact)

---

### WEBMAIL ACCESS (WPX SERVER EMAIL)

If you need to access your server-based email via a web browser — to check it's working, to reset a password, or as a backup access method:

**Webmail URL:** `[WPX WEBMAIL URL — REQUIRED]`

1. Open in your browser (Safari, Chrome, or Firefox)
2. Enter your full email address and password
3. Click "Open Mailbox"

*If you've forgotten your password: email support@fastwebguru.com from a different email address. Include your best phone number.*

---

### EMAIL SETUP — MANUAL DEVICE SETTINGS

Use these settings to configure your email on any device, email app, or client.

**Secure SSL/TLS Settings (Recommended):**
- Username: YOUR-EMAIL@YOURDOMAIN.COM
- Password: Your email account password
- Incoming Server: `mail.yourdomain.com`
- IMAP Port: **993** &nbsp;·&nbsp; POP3 Port: **995**
- Outgoing Server: `mail.yourdomain.com`
- SMTP Port: **465**
- Authentication: **Required** for IMAP, POP3, and SMTP
- SSL/TLS: YES

*Replace `yourdomain.com` with your actual domain name.*

---

### IPHONE / IPAD SETUP

1. Go to Settings → Mail → Accounts → Add Account
2. Choose "Other" → "Add Mail Account"
3. Enter your name, email address, password, and a description
4. Choose IMAP
5. Enter the incoming and outgoing server settings above
6. Tap Save

*If you receive a verification error: double-check your password by logging into webmail first.*

---

### ANDROID SETUP

1. Open your email app and add a new account
2. Choose "Other" or "IMAP"
3. Enter your email address and password
4. Enter the server settings above when prompted

---

### OUTLOOK SETUP

1. Open Outlook → File → Add Account
2. Enter your email address → Advanced Setup → IMAP
3. Enter the server settings above

---

**Still having issues?** Email support@fastwebguru.com with your full email address, the device you're using, and a description of the problem. Please include a phone number — we'll call you if it's faster to talk through.

---
---

# PART 4: GLOBAL COPY UPDATES — FIND AND REPLACE

The following strings appear across the historic site content and must be removed or replaced wherever they appear, including in any meta tags, footer content, or structured data:

| Remove / Change | Replace With | Notes |
|----------------|--------------|-------|
| "Philippines Business registration 05009190" | Remove entirely | From footer, About, Join Our Team, T&Cs |
| "Philippines" (in context of HQ/ownership) | Remove or reframe as "our Asia Pacific specialist team" | Keep where contextually neutral (e.g., Asia Pacific experience) |
| "Philippine team" | "our specialist team" | |
| "local communities" as primary mission | "Australian small businesses" | Broader positioning |
| "qh-t1pump.turboservers.com.au" and related Turboservers URLs | `[WPX SERVER URL]` | On webmail page |
| "Thrive Architect" / "Thrive editor" / "Thrive Plugins" | "our website platform" or "click-and-comment editing" | When referring to site-editing capability |
| "Thrive" pricing/value references ($230+ value etc.) | Remove | Product no longer offered |
| "Tech Advocates" (as Philippines staff) | "Technology Advocates" or "our team" | Neutral reframe |
| "support@fastwebguru.com" | Confirm this is still the active support email | Currently retained throughout |
| @fastwebguru (Twitter) | Update social handles in footer if changed | Confirm current social presence |

---

---

# PART 5: SEO NOTES

## Page-Level SEO Strategy for Historic K Pages

The Keep pages serve a dual purpose: capturing long-tail informational search traffic ("why does my business need a domain name", "how to set up Google Maps for small business", "what is business email") while routing those visitors into the v6 conversion flow.

**Best practice applied throughout:**
- Each K page has a distinct meta title and description targeting its specific search intent
- Each K page includes at least one CTA linking to the free AI assessment or appropriate plan page
- K pages do not duplicate v6 page content — they target different search queries
- Archive pages use 301 redirects (link equity passes to the destination)

## Redirect SEO Notes

- All archived pages use 301 (permanent) redirects — correct for SEO
- Destination pages are the closest semantic match, not just the homepage
- Internal links from K pages now point to v6 URLs — update any remaining `/hosting/` or `/fast-easy-website/` internal links found in blog posts or existing K page content

## Structured Data Recommendations

For the Vercel site, add the following structured data:
- **LocalBusiness** schema on homepage and contact page (Australian address, phone, region coverage)
- **FAQPage** schema on the Pricing page FAQ section
- **BreadcrumbList** schema on Cortex sub-pages and service plan pages
- **Organization** schema in site head (replaces Philippines registration with Australian ownership)

---

---

# PART 6: TESTIMONIALS — VERIFIED HISTORIC + SOURCING NOTES

## Verified Historic Testimonials (approved for use — confirm with clients)

**Michael Toome — HS Motors & eBay auto parts store:**
> "Last year eBay hit our successful store with a bombshell, over 1000 listings needed to be manually updated ASAP or risk no longer being seen by people searching for the products we sell online.
>
> [...]
>
> They set up solid systems for the updating processes showing me smart techniques to cut the time it previously took me to add new products by 75%, we now add 100+ new products a month, when previously struggled to do 5-10, and they showed me a few tricks to beat out my competitors so actual sales are growing steadily now every month.
>
> I am already seeing more sales every month and I know with their ongoing help and marketing guidance I can take my business to a new level and be a leader in my Industry."

**Best fit for:** Ecommerce plan page, Advanced plan page (full quote), Homepage testimonials

---

*The Michael Toome quote about eBay and HS Motors is particularly strong for the Ecommerce and Advanced plan pages — review with Michael before republishing given the rebrand.*

---

*End of document — Fast Web Guru Integrated Website Copy v1*
*Next step: Resolve Alerts A1–A10, then proceed to development build on Vercel.*
