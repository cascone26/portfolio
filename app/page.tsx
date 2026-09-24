import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "./components/fade-in";
import BrowserFrame from "./components/browser-frame";
import Typewriter from "./components/typewriter";
import SiteAudit from "./components/site-audit";
import ParticleField from "./components/particle-field";
import Magnetic from "./components/magnetic";
import TiltCard from "./components/tilt-card";

export const metadata: Metadata = {
  title: "BuiltSimple | Web & AI Solutions for Small Businesses",
  description:
    "We build websites and AI tools for small businesses in the Kansas City area. Fast, affordable, no tech jargon.",
  alternates: {
    canonical: "https://builtsimple.dev",
  },
};

const steps = [
  {
    n: "01",
    title: "Free audit & call",
    description: "Run the live audit above or just tell me about your business. I'll point out exactly what's costing you customers — no pitch, no pressure.",
  },
  {
    n: "02",
    title: "I build, you watch it happen",
    description: "You get a real staging link within days, not a mockup PDF. Changes happen live while we talk — no 6-week agency black box.",
  },
  {
    n: "03",
    title: "Ship it and move on",
    description: "Site goes live, connected to Google Business, fast and mobile-ready. No retainer required — I'm here when you need something changed.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="signal-grid absolute inset-x-0 top-0 h-[520px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-blue-500/[0.08] blur-[120px] pointer-events-none" />
        <ParticleField className="absolute inset-0 pointer-events-none opacity-70" />

        <div className="max-w-3xl mx-auto relative text-center">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent-light text-sm px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Available for projects — Mission, KS
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4 tracking-tight">
              Websites & AI tools{" "}
              <span className="gradient-text glow-serif">for small businesses.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-mono text-sm text-accent-light/60 mb-6 tracking-wide">
              <span className="text-accent-light/30">{">"}</span>{" "}
              <Typewriter />
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-muted max-w-lg mx-auto mb-10 leading-relaxed">
              I build fast, affordable websites and set up AI automation for
              local businesses in KC. No tech jargon. No agencies. Just
              results.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Magnetic>
                <a
                  href="#audit"
                  className="btn-gradient text-white font-semibold px-6 py-2.5 rounded-lg text-sm"
                >
                  Run a free site audit
                </a>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/services"
                  className="btn-outline text-foreground font-semibold px-6 py-2.5 rounded-lg text-sm inline-flex"
                >
                  See pricing
                </Link>
              </Magnetic>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Live Site Audit — the real feature, right below the fold */}
      <section id="audit" className="py-10 px-6 relative scroll-mt-24">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <SiteAudit />
          </FadeIn>
        </div>
      </section>

      {/* Trust bar */}
      <FadeIn>
        <section className="relative py-8 px-6">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--tint-02)] to-transparent" />
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-3 text-muted text-sm relative">
            {[
              "24-hour response time",
              "Websites delivered in 1-2 weeks",
              "No contracts — pay per project",
              "100% custom — no templates",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent/60 rounded-full" />
                {item}
              </span>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Featured project — LessonDraft */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="eyebrow mb-4">Featured Project</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-3xl font-bold mb-4 tracking-tight">
                  LessonDraft
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  An AI-powered lesson plan generator for teachers. Full SaaS
                  with authentication, subscriptions, and AI generation — built
                  from scratch and serving real users.
                </p>
                <ul className="space-y-3 text-muted text-sm mb-8">
                  {[
                    "AI lesson plan generation via Anthropic API",
                    "Stripe subscriptions with free & paid tiers",
                    "User auth, saved history, export to PDF",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-accent-light mt-0.5 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://lessondraft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient gap-2 text-white font-semibold px-5 py-2 rounded-lg text-sm"
                  >
                    Visit site
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </a>
                  <Link
                    href="/work/lessondraft"
                    className="btn-outline text-foreground font-medium px-5 py-2 rounded-lg text-sm"
                  >
                    Case study
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <TiltCard max={5} className="rounded-2xl hud-corners">
                <BrowserFrame url="lessondraft.com" className="pulse-glow">
                  <Image
                    src="/screenshots/lessondraft.jpg"
                    alt="LessonDraft — AI-powered lesson plan generator for teachers"
                    width={1376}
                    height={860}
                    className="w-full h-auto"
                    priority={false}
                  />
                </BrowserFrame>
              </TiltCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="eyebrow justify-center mb-4">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                Three steps.{" "}
                <span className="gradient-text">No surprises.</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-6 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            {steps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.12}>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center font-mono text-accent-light font-bold mb-5 relative z-10 bg-[var(--background)]">
                    {s.n}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof — What I've Built */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="eyebrow justify-center mb-4">What I&apos;ve Built</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                Real projects.{" "}
                <span className="gradient-text">Real results.</span>
              </h2>
              <p className="text-muted text-sm">
                Trusted by KC businesses &middot; 10+ projects completed &middot; 5+ sites shipped and live
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <FadeIn delay={0.1}>
              <TiltCard className="glass rounded-2xl p-7 text-center">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Restaurant Demo</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Menu, hours, location, mobile-friendly. Everything a
                  restaurant customer needs in seconds.
                </p>
                <a
                  href="https://restaurant-beta-roan.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light text-sm mt-3 inline-block hover:underline"
                >
                  View demo
                </a>
              </TiltCard>
            </FadeIn>
            <FadeIn delay={0.3}>
              <TiltCard className="glass rounded-2xl p-7 text-center">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Contractor Demo</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Services, quote requests, reviews. Clean layout built to
                  convert visitors into calls.
                </p>
                <a
                  href="https://contractor-pearl.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light text-sm mt-3 inline-block hover:underline"
                >
                  View demo
                </a>
              </TiltCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gradient CTA banner */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]" />
        <div className="scan-line" />

        {/* Decorative floating shapes */}
        <div className="absolute top-1/4 left-[10%] w-20 h-20 border border-accent/10 rounded-2xl rotate-12 float-shape" />
        <div className="absolute bottom-1/4 right-[12%] w-14 h-14 border border-cyan-400/15 rounded-full float-shape-reverse" />
        <div className="absolute top-1/3 right-[25%] w-10 h-10 border border-purple-500/[0.1] rounded-lg rotate-45 float-shape-slow" />

        <div className="max-w-3xl mx-auto text-center relative">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Let&apos;s build something{" "}
              <span className="gradient-text">your customers love.</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              No long contracts. No jargon. Just a fast, good-looking site that
              works for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Magnetic>
                <Link
                  href="/contact"
                  className="btn-gradient text-white font-semibold px-6 py-2.5 rounded-lg text-sm inline-flex"
                >
                  Start a project
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/services"
                  className="btn-outline text-foreground font-semibold px-6 py-2.5 rounded-lg text-sm inline-flex"
                >
                  View pricing
                </Link>
              </Magnetic>
            </div>
          </FadeIn>
        </div>
      </section>

    </>
  );
}
