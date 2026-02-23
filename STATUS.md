# Portfolio — Status

## Last Updated
2026-02-23

## Current State
- Deployed at `https://portfolio-nine-sable-45.vercel.app`
- GitHub: `https://github.com/cascone26/portfolio`
- Vercel project: `cascone26s-projects/portfolio`
- No custom domain yet

## Site Structure (20 routes)
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

## Design
- Dark navy palette (#0b1121 bg, glass-morphism cards, #3b82f6 accent)
- Geist font, Tailwind CSS v4
- Framer Motion scroll animations (FadeIn component)
- Glass-morphism cards with gradient borders
- Gradient text headings, gradient buttons with glow
- Custom JC favicon (app/icon.svg)
- BrowserFrame component for screenshots
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
