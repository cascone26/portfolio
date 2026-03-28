# Portfolio — Status

## Last Updated
2026-03-27 (early morning)

## Current State
- Deployed at `https://builtsimple.dev`
- GitHub: `https://github.com/cascone26/portfolio`
- Vercel project: `cascone26s-projects/builtsimple`
- Custom domain: `builtsimple.dev` (live)
- Next.js 16.1.6 + Tailwind CSS v4 + Framer Motion

## Site Structure (91+ routes)

### Public Pages
- `/` — Home (hero with code mockup, featured LessonDraft section, highlight cards, trust bar)
- `/services` — Services & pricing (6 services + how it works + delivery timelines)
- `/work` — Portfolio grid (LessonDraft, Social Autoposter)
- `/work/lessondraft` — LessonDraft case study with screenshot
- `/work/lessondraft-social` — Autoposter case study
- `/about` — About me (bio, skills, tech stack)
- `/faq` — FAQ (10 questions, click-to-expand accordion)
- `/contact` — Contact form (Formspree) + phone/email/location
- `/products` — 28 digital products with Stripe payment integration
- `/thank-you` — Post-purchase confirmation page
- `/referral-program` — Refer a business, earn $200 (Formspree form, source tracking, footer + nav linked)

### Industry Landing Pages
- `/for/contractors` — Contractor-specific landing page
- `/for/fitness` — Fitness business landing page
- `/for/restaurants` — Restaurant landing page
- `/for/salons` — Salon/beauty landing page

### Blog (27 posts)
- `/blog` — Blog listing with tag filtering
- `/blog/[slug]` — 27 individual blog posts with prev/next nav, related posts, JSON-LD
- `/blog/tag/[tag]` — 38 tag pages (auto-generated from post tags)
- Dynamic OG images per blog post (`opengraph-image.tsx`)

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

## Recent Changes
- **2026-03-28**: 4 vertical-specific SEO blog posts (accounting firm website design, photography business website, realtor website design/neighborhood SEO, dental office new patient acquisition) — 47 total posts
- **2026-03-27**: Fixed deployment timeout issue with fresh git push (deployment now stable)
- **2026-03-27**: Blog content updates (now 29+ posts)
- **2026-03-27**: 3 industry-specific SEO blog posts (plumbers/HVAC, landscapers, personal trainers) — 24 total
- **2026-03-26**: 3 more industry SEO posts (dentists, auto repair shops, real estate agents) — 27 total
- **2026-03-26**: Dynamic OG images for all blog posts (per-post title/read time)
- **2026-03-26**: STATUS.md updated to reflect actual site structure (91+ routes)
- **2026-03-22**: OneSignal push notification integration (needs env var)
- **2026-03-22**: Node >=20 engines field added
- **2026-02-24**: FAQ accordion, hero mockup, contact form handling, trust bar, service timelines

## Known Issues
- Next.js 16 middleware deprecation warning (Clerk-independent, no migration path yet)
- OneSignal push notifications configured but `NEXT_PUBLIC_ONESIGNAL_APP_ID` not set in Vercel env

## Next Up
- Testimonials (once clients exist)
- Headshot/photo (needs Jacob to provide one)
- More project screenshots on work page
