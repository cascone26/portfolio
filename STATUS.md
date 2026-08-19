# Portfolio — Status

## Last Updated
2026-08-19 — check-in from HP, second of the day (explicit review request); state matches `b1a93b2`

## Check-in — 2026-08-19, second of the day (HP, explicit request)
- Explicitly requested review; **state matches this morning's check-in (`b1a93b2`) exactly.** The only
  new commit since is `6a9b094`, the PROCESS.md write-back from that same session (records the
  served-bytes-vs-committed-blob hash as the cheap way to prove a Mac-side deploy actually landed).
  No product-code movement.
- Site `https://builtsimple.dev` → **200 OK** (0.28s).
- Repo: working tree clean, divergence **0/0** vs `origin/main` after fetch. No skip-worktree entries
  (`git ls-files -v` all `H`), so ff-pulls stay safe in this repo.
- **Signal re-verified as arithmetic:** 158d = 2026-08-19 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field, +1/day. Not a project-health signal, and a STATUS.md entry cannot clear it.
  Clears only via Mac-side `tracker_checkin("builtsimple")` + wiring `run_scheduler()` into
  `autonomy_loop.py::run_cycle()` (async, needs an `asyncio.run` bridge).
  **Both remain open for Jacob; unchanged since 07-20.**

## Check-in — 2026-08-19 (HP, explicit request)
- **First state change since the 08-17 check-ins.** HP was 4 behind `origin/main`; ff-pulled
  `368e154..e5f4b9e` (no skip-worktree entries in this repo, so ff is safe here).
- Incoming, all Mac-side:
  - `51e6d62` (08-17) — fourth check-in of 08-17, COBO redeploy after a transient connection error; site 200 confirmed.
  - `36e8ef7` (08-17) — add K2C-style app icon.
  - `8cb8b2b` (08-18) — icon switched to a transparent PNG cutout instead of a full painted scene.
  - `e5f4b9e` (08-18) — icon switched to a real pixel-art render (LoRA + palette quantization).
- **`e5f4b9e` is PROVEN live in production (Handle-tier, not Report):** `https://builtsimple.dev/icon.png`
  → 200, `image/png`, 16936 B, and the served bytes are **sha256-identical** to the committed
  `app/icon.png` (`cb5980a346f7d5f6…`). The icon work is deployed, not just merged.
- Site `https://builtsimple.dev` → **200 OK** (0.16s).
- Repo after pull: working tree clean, divergence **0/0** vs `origin/main`.
- **Signal re-verified as arithmetic:** 158d = 2026-08-19 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field, +1/day. Not a project-health signal. Clears only via Mac-side
  `tracker_checkin("builtsimple")` + wiring `run_scheduler()` into `autonomy_loop.py::run_cycle()`.
  **Both remain open for Jacob; unchanged since 07-20.**

## Check-in — 2026-08-17, fourth of the day (COBO redeploy)
- COBO triggered redeploy after transient connection error report (`HTTPSConnectionPool` / max retries).
- Pre-deploy check: site already returning 200 when task ran — error was transient/already resolved.
- Build: `npm run build` passed cleanly (798 static pages, no errors).
- Deployed fresh to Vercel production: `vercel --prod --yes` → `builtsimple-4za65ot5u-cascone26s-projects.vercel.app`.
- Post-deploy verify: `https://builtsimple.dev` → **200 OK**.
- No code changes made; clean redeploy of existing codebase resolved reported instability.
- **Signal re-verified as arithmetic:** 156d = 2026-08-17 − 2026-03-14 — frozen `nextCheckIn` tracker field.
- Repo: working tree clean, divergence 0/0 vs `origin/main`.

## Check-in — 2026-08-17, third of the day (HP, explicit request)
- Explicitly requested review; state matches both earlier check-ins today (`8883e2b`, `81edefc`) exactly —
  no new commits since.
- **Signal re-verified as arithmetic:** 156d = 2026-08-17 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `81edefc`.

## Check-in — 2026-08-17, second of the day (HP, explicit request)
- Explicitly requested review; state matches this morning's check-in (`8883e2b`) exactly —
  no new commits since.
- **Signal re-verified as arithmetic:** 156d = 2026-08-17 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `8883e2b`.

## Check-in — 2026-08-17 (HP, explicit request)
- Explicitly requested review; state matches the 08-16 quartet
  (`5287f7f`, `0b42968`, `a88d877`, `820fd2b`) exactly — no new commits since.
- **Signal re-verified as arithmetic:** 156d = 2026-08-17 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `820fd2b`.

## Check-in — 2026-08-16, fourth of the day (HP, explicit request)
- Explicitly requested review; state matches all three earlier check-ins today
  (`5287f7f`, `0b42968`, `a88d877`) exactly.
- **Signal re-verified as arithmetic:** 155d = 2026-08-16 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `a88d877`.

## Check-in — 2026-08-16, third of the day (HP, explicit request)
- Explicitly requested review; state matches both earlier check-ins today (`5287f7f`, `0b42968`) exactly.
- **Signal re-verified as arithmetic:** 155d = 2026-08-16 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `0b42968`.

## Check-in — 2026-08-16, second of the day (HP, explicit request)
- Explicitly requested review; state matches this morning's check-in (`5287f7f`) exactly —
  no new commits on `origin/main` since the SEO fix `641b8c4` was reconciled.
- **Signal re-verified as arithmetic:** 155d = 2026-08-16 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `5287f7f`.

## Check-in — 2026-08-16 (HP, explicit request)
- Explicitly requested review. **State changed since the 08-13 check-ins:** Mac-side commit
  `641b8c4` (2026-08-13 evening, "fix(seo): add explicit metadata export to homepage",
  `app/page.tsx` +10) had landed on `origin/main`; HP was 1 behind and fast-forwarded
  `5568376..641b8c4`. Divergence now 0/0, working tree clean.
- **Signal re-verified as arithmetic:** 155d = 2026-08-16 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).

## Check-in — 2026-08-13, third of the day (HP, explicit request)
- Explicitly requested review; state matches both earlier check-ins today (`673e24c`, `5fcdb92`) exactly.
- **Signal re-verified as arithmetic:** 152d = 2026-08-13 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `5fcdb92`.

## Check-in — 2026-08-13, second of the day (HP, explicit request)
- Explicitly requested review; state matches this morning's check-in (`673e24c`) exactly.
- **Signal re-verified as arithmetic:** 152d = 2026-08-13 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `673e24c`.

## Check-in — 2026-08-13 (HP, explicit request)
- Explicitly requested review; state matches all three 08-12 check-ins (`8ce25fa`, `5ad2f3f`, `9285f8a`) exactly.
- **Signal re-verified as arithmetic:** 152d = 2026-08-13 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `9285f8a`.

## Check-in — 2026-08-12, third of the day (HP, explicit request)
- Explicitly requested review; state matches both earlier check-ins today (`8ce25fa`, `5ad2f3f`) exactly.
- **Signal re-verified as arithmetic:** 151d = 2026-08-12 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `5ad2f3f`.

## Check-in — 2026-08-12, second of the day (HP, explicit request)
- Explicitly requested review; state matches this morning's check-in (`8ce25fa`) exactly.
- **Signal re-verified as arithmetic:** 151d = 2026-08-12 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `8ce25fa`.

## Check-in — 2026-08-12 (HP, explicit request)
- Explicitly requested review; state matches the 08-11 check-ins (`71b002d`, `a82d439`, `fac62e4`) exactly.
- **Signal re-verified as arithmetic:** 151d = 2026-08-12 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `fac62e4`.

## Check-in — 2026-08-11, third of the day (HP, explicit request)
- Explicitly requested review; state matches both earlier check-ins today (`71b002d`, `a82d439`) exactly.
- **Signal re-verified as arithmetic:** 150d = 2026-08-11 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `a82d439`.

## Check-in — 2026-08-11, second of the day (HP, explicit request)
- Explicitly requested review; state matches this morning's check-in (`71b002d`) exactly.
- **Signal re-verified as arithmetic:** 150d = 2026-08-11 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `71b002d`.

## Check-in — 2026-08-11 (HP, explicit request)
- Explicitly requested review; state matches the 08-09 check-ins (`e0a1a08`, `e3a7111`, `4698c6e`) exactly.
- **Signal re-verified as arithmetic:** 150d = 2026-08-11 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK.
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `4698c6e`.

## Check-in — 2026-08-09, third of the day (HP, explicit request)
- Explicitly requested review; state matches both earlier check-ins today (`e0a1a08`, `e3a7111`) exactly.
- **Signal re-verified as arithmetic:** 148d = 2026-08-09 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field. Unchanged; clears only via Mac-side `tracker_checkin("builtsimple")` + scheduler wiring.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No commits since `e3a7111`.

## Check-in — 2026-08-09, second of the day (HP, explicit request)
- Explicitly requested review; state matches the morning check-in (`e0a1a08`) exactly.
- **Signal re-verified as arithmetic:** 148d = 2026-08-09 − 2026-03-14 — the frozen `nextCheckIn`
  tracker field, not project health. Still clears only via Mac-side `tracker_checkin("builtsimple")`.
- Site `https://builtsimple.dev` → 200 OK (HEAD check).
- Repo: working tree clean, divergence 0/0 vs `origin/main` after fetch. No new commits since `e0a1a08`.

## Check-in — 2026-08-09 (HP)
- **"148d overdue" signal is the frozen tracker field, not project health** — same root cause as
  LessonDraft: `nextCheckIn` pinned at 2026-03-14 (2026-08-09 − 2026-03-14 = 148 days exactly).
  STATUS.md writes do not clear the signal; only a Mac-side `tracker_checkin("builtsimple")` can
  unfreeze it (`~/tools/tracker/data.json` does not exist on HP).
- **Site live:** `https://builtsimple.dev` → 200 OK (HEAD check, 2026-08-09).
- **Repo synced:** HP copy was 4 commits behind; fast-forwarded `e26c07e..dca3ebb`. All 4 were
  `deployment-trigger.txt` bumps from 2026-07-28 — commit messages (`1e96e94` "restore
  builtsimple.dev" → `dca3ebb` "all SEO verified, build clean") indicate a site-connectivity
  incident on 07-28 that was resolved the same night via redeploys. Site verified up today.
- Working tree clean, no skip-worktree entries in this repo.
- No code changes since the 2026-07-17 audit other than the deploy triggers above.

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
- **2026-08-09**: HP check-in — site 200, repo synced (+4 deploy-trigger commits), tracker signal diagnosed as frozen field
- **2026-07-28**: Site-connectivity incident; restored via 4 Vercel redeploy triggers (`1e96e94`…`dca3ebb`), SEO re-verified
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
