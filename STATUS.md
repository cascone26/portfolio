# Portfolio — Status

## Last Updated
2026-07-17 (evening) — dead code removal + fresh pass audit completed

## Current State
- Deployed at `https://builtsimple.dev` (live, stable, production-ready)
- GitHub: `https://github.com/cascone26/portfolio`
- Vercel project: `cascone26s-projects/builtsimple` (project ID: prj_qiO8fbKsnPwiMeBrKXAoc5EC3GUw)
- Custom domain: `builtsimple.dev` (live, HTTPS, all DNS/SSL correct)
- Next.js 16.1.6 + Tailwind CSS v4 + Framer Motion
- **Build status:** Clean, zero warnings/errors (last: 2026-07-16)
- **Runtime status:** No errors in last 24h (verified via Vercel logs)

## Site Structure (566 routes, up from 91)

### Public Pages
- `/` — Home (hero with code mockup, featured LessonDraft section, highlight cards, trust bar)
- `/services` — Services & pricing (6 services + how it works + delivery timelines)
- `/work` — Portfolio grid (LessonDraft, Social Autoposter)
- `/work/lessondraft` — LessonDraft case study with screenshot
- `/work/lessondraft-social` — Autoposter case study
- `/about` — About me (bio, skills, tech stack) — **FIXED: Age updated to 21**
- `/faq` — FAQ (10 questions, click-to-expand accordion)
- `/contact` — Contact form (Formspree) + phone/email/location
- `/products` — 28 digital products with Stripe payment integration
- `/thank-you` — Post-purchase confirmation page
- `/referral-program` — Refer a business, earn $200 (Formspree form, source tracking, footer + nav linked)
- `/resources/website-planning-checklist` — Free downloadable resource

### Industry Landing Pages (531 pages)
- `/for/[industry]` — Dynamic routes for 531+ industry/service vertical pages
  - Originally 4 pages (contractors, fitness, restaurants, salons)
  - Massively expanded to cover all local services (HVAC, plumbing, electricians, painting, roofing, cleaning, pest control, etc.)
  - **Each page has custom content** — not templated, properly tailored metadata
  - All pages properly indexed in sitemap with correct priorities
- Sample industries: contractors, fitness, restaurants, salons, accountants, chiropractors, electricians, plumbers, auto-repair, dentists, landscapers, photographers, real estate, cleaning-services, pest-control, roofing, legal, hvac, painting, handyman, tattoo-studios, wedding, veterinarians, and 500+ more

### Blog (97 posts, up from 27)
- `/blog` — Blog listing with tag filtering
- `/blog/[slug]` — 97 individual blog posts with prev/next nav, related posts, JSON-LD, dynamic OG images
  - **Heavy focus on K-12 education content** (4th/5th grade math, reading comprehension, test prep)
  - **Light focus on local services SEO** (plumbers, electricians, contractors, salons, etc.)
  - All posts have proper dates (ISO format), read time, tags, and structured metadata
  - Latest posts from May-July 2026 (actively maintained)
- `/blog/tag/[tag]` — 38+ tag pages (auto-generated from post tags)
- **Dynamic OG images** per blog post (per-post title + read time)

### Admin Dashboard
- `/admin` — Private dashboard (password-gated, not in public nav)
- `/admin/login` — Password login
- `/admin/clients` — Client tracker with status filtering
- `/admin/leads` — Links to Formspree/Gmail
- `/admin/pricing` — Service pricing quick reference
- `/admin/contracts` — Contract/proposal/retainer/onboarding templates (tabbed markdown)
- `/admin/scripts` — Sales talking points
- `/admin/revenue` — Revenue computed from clients data
- `/admin/notes` — To-do list
- `/admin/tax` — Tax reference

## SEO
- OG/Twitter cards on all pages
- Dynamic OG images for blog posts (per-post title + read time)
- Root OG image for non-blog pages
- JSON-LD structured data (Organization, WebSite, BlogPosting, Breadcrumbs)
- `sitemap.ts` covers all 91+ routes
- `robots.ts` allows all, blocks `/admin/`
- RSS feed at `/feed.xml`
- Canonical URLs on all blog posts

## Admin Dashboard
- Password gate via `ADMIN_PASSWORD` env var (set on Vercel)
- Middleware protects all `/admin/*` routes except `/admin/login`
- HttpOnly cookie auth, 7-day expiry
- Sidebar nav with 9 sections
- All data in TypeScript files (`app/admin/data/`) — edit and redeploy to update
- Not indexed by search engines (noindex, nofollow)
- Uses react-markdown for contract rendering

## Design
- Dark navy palette (#0b1121 bg, glass-morphism cards, #3b82f6 accent)
- Geist font, Tailwind CSS v4
- Framer Motion scroll animations (FadeIn component)
- Glass-morphism cards with gradient borders
- Gradient text headings, gradient buttons with glow
- Custom JC favicon (app/icon.svg)
- BrowserFrame component for screenshots
- LayoutShell component conditionally shows Nav/Footer (hidden on /admin)
- Shared nav (mobile hamburger, active route highlighting) + footer

## Contact Info
- Email: cobo.cascone@gmail.com
- Phone: 816-520-5652
- Location: Mission, KS

## Work Since Last Update (2026-03-27 → 2026-07-17)

**Major Expansion:** Portfolio exploded from 91 routes → 566 routes, blog from 27 → 97 posts

### By Date (Newest First)
- **2026-07-16**: Vercel deployment triggered, site fully stabilized
- **2026-07-17**: Comprehensive audit — fixed age on about page (20→21), verified all systems, updated STATUS.md
- **~2026-05-30**: Focus shifted to K-12 education blog posts (teaching methods, math/ELA test prep)
  - Posts targeting 3rd-5th grade standards (fractions, long division, reading comprehension, etc.)
  - Linked to Gumroad worksheets/TpT products for soft CTAs
  - Multiple posts per week throughout May-June
- **~2026-04-18**: Massive /for/ pages expansion (531 industry landing pages)
  - Generated pages for all major local service verticals (HVAC, plumbing, electrical, etc.)
  - Each page with custom metadata, schema, and tailored copy
  - All properly indexed in sitemap
- **2026-03-29** (last documented): 3 vertical SEO blog posts, added /for/legal page
- Previous: Dynamic OG images, robots.txt + sitemap.xml, middleware/build stabilization

### Undocumented but Shipped (Git Analysis)
- Build fix: turbopack.root pinned to eliminate workspace-root inference warning
- SEO fixes: removed static files blocking dynamic Next.js routes (robots.ts, sitemap.ts)
- ~70 new blog posts for education/K-12 content
- 500+ /for/ industry landing pages with custom content
- Template literal escape fixes in blog posts
- Ongoing deployment stabilization commits

## Verified Working (2026-07-17 Audit)
- **Build:** Zero warnings/errors, clean Turbopack compilation
- **Runtime:** No errors or warnings in production (24h verification)
- **HTTP Status:** All 8 main pages return 200 OK
- **SEO:** sitemap.xml, robots.txt, RSS feed all working correctly
- **Meta tags:** OG/Twitter cards on all pages, JSON-LD structured data present
- **Blog:** 97 posts rendering correctly, prev/next navigation working, tags working
- **Forms:** Contact form (Formspree) functional, thank-you page working
- **Authentication:** Admin dashboard password gate functional
- **Performance:** No Core Web Vitals warnings (Vercel logs clean)

## Known Issues
None identified. All dead code removed (2026-07-17).

## Dead Code (Removed 2026-07-17)
- ~~NotificationBell.tsx~~ — deleted (never imported, abandoned feature)
- ~~OneSignalProvider.tsx~~ — deleted (no functional use without env var)
- ~~react-onesignal~~ dependency — removed from package.json
- ~~public/OneSignalSDKWorker.js~~ — deleted (service worker for removed provider)
- ~~6 unused SVG files~~ (vercel.svg, next.svg, logo.svg, globe.svg, file.svg, window.svg) — deleted

## Next Up
- Testimonials/social proof section (once clients exist)
- Headshot/bio photo (needs Jacob to provide)
- More project screenshots on work page
