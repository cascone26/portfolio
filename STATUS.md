# Portfolio — Status

## Last Updated
2026-03-04

## Current State
- Deployed at `https://builtsimple.dev`
- GitHub: `https://github.com/cascone26/portfolio`
- Vercel project: `cascone26s-projects/builtsimple`
- Custom domain: `builtsimple.dev` (live)

## Site Structure (31 routes)
- `/` — Home (hero with code mockup, featured LessonDraft section, highlight cards)
- `/services` — Services & pricing (6 services + how it works)
- `/work` — Portfolio grid (LessonDraft, Social Autoposter, placeholder)
- `/work/lessondraft` — LessonDraft case study with screenshot
- `/work/lessondraft-social` — Autoposter case study
- `/about` — About me (bio, skills, tech stack)
- `/faq` — FAQ (10 questions)
- `/contact` — Contact form (Formspree) + phone/email/location
- `/blog` — Blog listing (8 posts)
- `/blog/[slug]` — 8 individual blog posts with prev/next nav
- `/admin` — Private dashboard (password-gated, not in public nav)
- `/admin/login` — Password login
- `/admin/clients` — Client tracker with status filtering
- `/admin/leads` — Links to Formspree/Gmail
- `/admin/pricing` — Service pricing quick reference
- `/admin/contracts` — Contract/proposal/retainer/onboarding templates (tabbed markdown)
- `/admin/scripts` — Sales talking points
- `/admin/revenue` — Revenue computed from clients data
- `/admin/notes` — To-do list

## Admin Dashboard
- Password gate via `ADMIN_PASSWORD` env var (set on Vercel)
- Middleware protects all `/admin/*` routes except `/admin/login`
- HttpOnly cookie auth, 7-day expiry
- Sidebar nav with 8 sections
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

## Recent Changes (Feb 24 UI polish)
- FAQ page: click-to-expand accordion (one open at a time, animated)
- Hero: replaced code snippet with visual mockup of a small business website
- Contact form: JS handling with success/loading/error states (Formspree + fetch)
- Trust bar: rewritten with concrete SMB claims (24hr response, 1-2 weeks, no contracts, custom)
- Services: added delivery timelines and price-driver notes to each card

## Known Issues
- None currently

## Next Up
- Connect builtsimple.dev domain in Vercel (if not already done)
- Consider adding more project screenshots to work page
- Testimonials (once clients exist)
- Headshot/photo (needs Jacob to provide one)
