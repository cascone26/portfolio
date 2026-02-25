import Link from "next/link";
import Image from "next/image";
import FadeIn from "./components/fade-in";
import BrowserFrame from "./components/browser-frame";
import Typewriter from "./components/typewriter";

const highlights = [
  {
    title: "Services & Pricing",
    description:
      "Websites, AI chatbots, automation, and more — something for every budget.",
    href: "/services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
  },
  {
    title: "My Work",
    description:
      "Real products I've shipped — including a live AI-powered SaaS platform.",
    href: "/work",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
    ),
  },
  {
    title: "About Me",
    description: "Who I am, what I know, and why I do this.",
    href: "/about",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
  },
  {
    title: "Get in Touch",
    description:
      "Free audit, no pressure — tell me about your business and I'll give you honest advice.",
    href: "/contact",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-blue-500/[0.07] blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              <FadeIn delay={0}>
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent-light text-sm px-4 py-1.5 rounded-full mb-8">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Available for projects — Mission, KS
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-4 tracking-tight">
                  Websites & AI tools{" "}
                  <span className="gradient-text">for small businesses.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="font-mono text-sm text-accent-light/60 mb-6 tracking-wide">
                  <span className="text-accent-light/30">{">"}</span>{" "}
                  <Typewriter />
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg text-muted max-w-lg mb-10 leading-relaxed">
                  I build fast, affordable websites and set up AI automation for
                  local businesses in KC. No tech jargon. No agencies. Just
                  results.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="btn-gradient text-white font-semibold px-9 py-4 rounded-xl text-lg"
                  >
                    Get a free audit
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center font-semibold px-9 py-4 rounded-xl text-lg text-white border border-accent/40 bg-accent/10 hover:bg-accent/20 hover:border-accent/60 transition-all"
                  >
                    See pricing
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right — site mockup */}
            <FadeIn delay={0.3} direction="left">
              <div className="hidden md:block">
                <BrowserFrame url="joes-plumbing.com">
                  <div className="bg-white text-gray-900">
                    {/* Mock nav */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                      <span className="font-bold text-sm text-blue-700">
                        Joe&apos;s Plumbing
                      </span>
                      <div className="flex gap-4 text-[11px] text-gray-500 font-medium">
                        <span>Services</span>
                        <span>About</span>
                        <span>Contact</span>
                      </div>
                    </div>
                    {/* Mock hero */}
                    <div className="px-5 py-6 bg-gradient-to-br from-blue-50 to-white">
                      <p className="text-[10px] uppercase tracking-widest text-blue-600 font-semibold mb-1">
                        Kansas City&apos;s trusted plumber
                      </p>
                      <p className="text-lg font-bold leading-tight mb-1.5">
                        Fast, honest plumbing <br />
                        you can count on.
                      </p>
                      <p className="text-[11px] text-gray-500 mb-3 leading-relaxed">
                        Serving KC homes for 15 years. Licensed &amp; insured.
                      </p>
                      <div className="flex gap-2">
                        <span className="bg-blue-600 text-white text-[10px] font-semibold px-3 py-1.5 rounded-md">
                          Book Now
                        </span>
                        <span className="border border-blue-200 text-blue-700 text-[10px] font-semibold px-3 py-1.5 rounded-md">
                          (816) 555-0123
                        </span>
                      </div>
                    </div>
                    {/* Mock services */}
                    <div className="px-5 py-4 grid grid-cols-3 gap-2">
                      {["Repairs", "Installations", "Drain Cleaning"].map(
                        (s) => (
                          <div
                            key={s}
                            className="bg-gray-50 rounded-lg p-2.5 text-center"
                          >
                            <p className="text-[10px] font-semibold text-gray-700">
                              {s}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </BrowserFrame>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <FadeIn>
        <section className="relative py-8 px-6">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
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
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              Featured Project
            </p>
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
                    className="btn-gradient gap-2 text-white font-semibold px-7 py-3 rounded-xl text-sm"
                  >
                    Visit site
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </a>
                  <Link
                    href="/work/lessondraft"
                    className="btn-outline text-foreground font-medium px-7 py-3 rounded-xl text-sm"
                  >
                    Case study
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <BrowserFrame url="lessondraft.com" className="pulse-glow">
                <Image
                  src="/screenshots/lessondraft.png"
                  alt="LessonDraft — AI-powered lesson plan generator for teachers"
                  width={1376}
                  height={860}
                  className="w-full h-auto"
                  priority={false}
                />
              </BrowserFrame>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gradient CTA banner */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1121] via-transparent to-[#0b1121]" />

        {/* Decorative floating shapes */}
        <div className="absolute top-1/4 left-[10%] w-20 h-20 border border-accent/10 rounded-2xl rotate-12 float-shape" />
        <div className="absolute bottom-1/4 right-[12%] w-14 h-14 border border-indigo-400/10 rounded-full float-shape-reverse" />
        <div className="absolute top-1/3 right-[25%] w-10 h-10 border border-accent/[0.07] rounded-lg rotate-45 float-shape-slow" />

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
              <Link
                href="/contact"
                className="btn-gradient text-white font-semibold px-9 py-4 rounded-xl text-lg"
              >
                Start a project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center font-semibold px-9 py-4 rounded-xl text-lg text-white border border-accent/40 bg-accent/10 hover:bg-accent/20 hover:border-accent/60 transition-all"
              >
                View pricing
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Highlight cards */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <FadeIn key={h.href} delay={i * 0.1}>
                <Link
                  href={h.href}
                  className="group glass rounded-2xl p-7 block"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light mb-5 group-hover:bg-accent/20 transition-colors">
                    {h.icon}
                  </div>
                  <h2 className="font-semibold text-lg mb-2 group-hover:text-accent-light transition-colors">
                    {h.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed">
                    {h.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
