# Portfolio — Status

## Last Updated
2026-02-23

## Current State
- Deployed at `https://portfolio-nine-sable-45.vercel.app`
- GitHub: `https://github.com/cascone26/portfolio`
- Vercel project: `cascone26s-projects/portfolio`
- No custom domain yet

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

## Known Issues
- Contact form uses Formspree legacy email endpoint — may need a proper Formspree form ID for reliable delivery
- No custom domain yet
- No OpenGraph image for social media previews

## Next Up
- Set up Formspree account and get proper form ID for contact page
- Get custom domain when ready
- Add OpenGraph image for social sharing
- Consider adding more project screenshots to work page
