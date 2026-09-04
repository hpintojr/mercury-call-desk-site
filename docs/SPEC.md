# Mercury Call Desk — Website Redesign Spec

**Status:** v0.1 scaffold · 2026-09-03
**Owner:** Hamilton Pinto Jr. · Charter Oaks Assets, Inc. d/b/a Mercury Call Desk
**Reference site:** https://sulus.ai (authorized-reseller source; same information, MCD brand + MCD pricing)

## 1. Goal

Rebuild the public marketing site as a mobile-first, responsive Next.js app deployed on Vercel from GitHub. Mirror sulus.ai's page structure, sections and copy, with every `sulus.ai` reference replaced by **Mercury Call Desk**, MCD brand assets, and MCD's own (reseller) pricing.

## 2. Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router, TypeScript) | Zero-config on Vercel, file-based routes, `next/font`, metadata API |
| Styling | Tailwind CSS v4 (`@theme` tokens) | Mobile-first breakpoints by default; brand tokens in one place |
| Fonts | Montserrat via `next/font/google` | Matches the logo wordmark stand-in font |
| Forms | Route Handler `POST /api/contact` → **Sulus CRM** (crm.sulus.ai, location `6R986ILIQydGAU4T1l74`) via LeadConnector API upsert; webhook fallback | Sulus CRM is the system of record (Stripe already connected there); no third-party form vendor |
| Hosting | Vercel (Production = `main`, Preview = PRs) | — |
| Analytics | TODO (Vercel Analytics or GA4) | — |

## 3. Routes (1:1 with sulus.ai)

| Route | Source page | Notes |
|---|---|---|
| `/` | Home | Rotating-word hero, benefits marquee, 3 front-line cards, 3 alternating feature rows, 4 integration cards, pricing cards (Monthly/Annual toggle), insights, 12 testimonials, CTA band |
| `/features` | Features | Capabilities (6), outcomes (6), platform grid (15) |
| `/integrations` | Integrations | 30 integration cards, "Connect Now" → `/pricing` |
| `/pricing` | Pricing | Cards (+ Enterprise), 8-group comparison table, why-choose (6), 6 FAQs |
| `/faq` | Help / FAQ | 6 sections, 25 Q&As, jump-nav chips (mobile) / sticky sidebar (desktop) |
| `/contact` | Contact | Form (First, Last, Company, Phone, Email, Message, SMS consent), founder quote, 3 help cards, US-based block |
| `/terms`, `/privacy` | — | **TODO** — footer links exist; pages not yet created |

## 4. Content rules

- All `sulus.ai` → `Mercury Call Desk` (done; `grep -ri sulus src` returns nothing).
- Copy is otherwise verbatim from sulus.ai so the reseller offer is identical.
- Content lives in `src/content/*.ts` (typed). Edit copy there, not in components.
- Brand/links live in `src/config/site.ts`. Every `TODO` there must be filled before launch.

### Content decisions to confirm (Hamilton)

1. **Languages:** sulus.ai says *40+*; MCD's Product Catalog and the current live site say *140+*. Site currently says **40+** (verbatim). Change in `src/content/*` if desired.
2. **"No setup fees" / "cancel anytime" / "no long-term contracts"** copy is verbatim from sulus.ai. MCD's approved Partner terms mention setup-fee economics and cancellation rules — align before launch (see Overview "Remaining launch gates" #4).
3. **Founder quote** on `/contact` is a placeholder attributed to Hamilton — replace with approved wording.
4. **Testimonials** are sulus.ai's customer quotes with the brand swapped. Confirm you are permitted to reuse them as a reseller, or replace with MCD customers.
5. **Integration logos:** all 29 official logos are mapped in `scripts/logos.manifest.json`. Run `node scripts/fetch-logos.mjs` once, review `public/integrations/`, and commit the SVGs.
6. **Compliance line on Features:** sulus lists "HIPAA, PCI" — kept. Confirm MCD can make the same claim.

## 5. Pricing (LOCKED 2026-06-25 — Standard/Site set)

| Tier | Monthly | Annual (billed upfront, ~25% off) | Shown as |
|---|---:|---:|---|
| Starter | $1,595 | $14,355/yr | $1,196/mo when Annual toggle is on |
| Growth (Most Popular) | $1,995 | $17,955/yr | $1,496/mo |
| Pro | $3,995 | $35,955/yr | $2,996/mo |
| Enterprise | Custom | — | "Talk with Us" (Pricing page only) |

Feature bullets, minutes, overage rates and the comparison table are verbatim from sulus.ai (Starter 100 min / Growth 300 / Pro 1,000; overage $.60/$.50/$.45). Enterprise pricing set ($5,295/$7,595/$9,995) is **not** shown publicly — quote-only.

## 6. Brand

- Source: `My Workspace/02 Projects/MCD - Mercury Call Desk/04-brand-assets/03-vector-svg/Mercury Call Desk.svg` (4.8 MB — contained two embedded PNG glow layers).
- Cleaned to pure vector (8 KB): `public/brand/mcd-logo-dark.svg` (white wordmark), `mcd-logo-light.svg` (navy wordmark), `mcd-icon.svg` (emblem only; also `src/app/icon.svg` favicon).
- Tokens (`src/app/globals.css` `@theme`): Blue `#2587FF`, Sky `#12C3F1`, Cyan `#16E8DE`, Navy `#071426`, plus surface/line/muted neutrals.
- Primary CTA = blue→cyan gradient pill on navy; light sections use `mcd-surface` (#F6F9FC).

## 7. Mobile-first rules (priority: phone → tablet → desktop)

- Base styles target 375 px. `sm:` 640, `md:` 768 (tablet), `lg:` 1024 (desktop), `xl:` 1280 — enhancements only, never mobile fixes.
- Touch targets ≥ 44 px (`.tap` utility). Full-width buttons on mobile, inline on `sm+`.
- Header: sticky navy bar; mobile shows Call icon + hamburger → full-screen drawer with nav + 2 CTAs. Desktop shows inline nav + Dashboard/Demo.
- Pricing cards stack (1-col) → 2-col `md` → 3/4-col `lg`. Comparison table scrolls horizontally *inside its container* with a sticky first column; page never scrolls sideways.
- Testimonials: horizontal snap-scroll carousel on mobile/tablet → 3-col grid on `lg`.
- FAQ: native `<details>` accordions (no JS), section chips scroll horizontally on mobile, sticky sidebar on `lg`.
- Type scale: h1 2.1rem → 3rem `sm` → 3.75rem `lg`. Body 16 px minimum.
- `prefers-reduced-motion` disables marquee/float/word animations. No layout shift: logo/img have intrinsic width/height.
- Images: brand SVGs inline-sized; no hero raster yet (sulus's hero photo replaced by a "live call" card).

## 8. Performance / SEO targets

- Lighthouse mobile ≥ 90 across the board. No client JS except Header, RotatingWords, PricingCards toggle, ContactForm.
- Metadata API: per-page `title`/`description`, OG defaults, `sitemap.xml`, `robots.txt`. **TODO:** `public/og.png` (1200×630).
- Skip-link, landmarks, `aria-current`, `aria-expanded`, labelled form fields, focus rings.

## 9. Deploy — GitHub + Vercel

```bash
# 1. Local
cd mercury-call-desk-site
npm install
npm run dev        # http://localhost:3000
npm run build      # must pass before pushing

# 2. GitHub (repo already initialised locally with first commit)
gh repo create hpintojr/mercury-call-desk-site --private --source=. --remote=origin --push
#   — or create an empty repo at github.com/new, then:
git remote add origin git@github.com:hpintojr/mercury-call-desk-site.git
git push -u origin main

# 3. Vercel
#   vercel.com → Add New → Project → Import "mercury-call-desk-site"
#   Framework preset: Next.js (auto). Root: ./  Build: next build (defaults)
#   Environment variables: NEXT_PUBLIC_SITE_URL, CRM_LOCATION_ID, CRM_API_TOKEN (see .env.example)
#   Domains: add mercurycalldesk.com + www → follow the DNS instructions (A 76.76.21.21 / CNAME cname.vercel-dns.com)
```

Branch flow: `main` = production; feature branches → PR → Vercel Preview URL → merge.

## 10. Launch checklist

- [ ] Fill every `TODO` in `src/config/site.ts` (demo link, login, partner signup, checkout links, email, socials)
- [ ] Create `/terms` and `/privacy` (currently link to non-existent routes)
- [ ] Resolve content decisions in §4
- [ ] Add OG image
- [ ] Create a Private Integration token in Sulus CRM; set `CRM_API_TOKEN` in Vercel; test a contact-form submission lands in crm.sulus.ai
- [ ] Create the 3 products/payment links in Sulus CRM (Stripe is connected) and paste them into `links.checkout` in `src/config/site.ts`
- [ ] `node scripts/fetch-logos.mjs` → commit `public/integrations/*.svg`
- [ ] `npm run build` + Lighthouse mobile pass
- [ ] Point DNS; verify redirects (www → apex, http → https)
- [ ] Retire the old mercurycalldesk.com deployment

## 11. Not in scope (v0.1)

News/blog, "Become a Partner" landing page (links to CRM signup for now), customer dashboard, website voice-widget embed, cookie banner (add if analytics is added).
