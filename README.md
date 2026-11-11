# BuiltSimple

Web and AI solutions for small businesses — a freelance dev-services site, built and run solo.
Normally at [builtsimple.dev](https://builtsimple.dev).

## What it is

A full business site, not just a landing page:

- **Free live audit** on the homepage — point it at a business and it flags what's costing them customers
- **Client-facing pitch**: real staging link within days instead of a mockup PDF, changes made live during the call
- **`/admin`** — a working internal dashboard: clients, contracts, email tracking, status badges
- **Blog + RSS feed**, FAQ, services/products pages, referral program

## Stack

Next.js (App Router), TypeScript, deployed via Vercel with an Olympus/Tailscale-Funnel self-host
fallback for when Vercel's account-wide fair-use pauses hit.

## Setup

```bash
npm install
npm run dev
```
