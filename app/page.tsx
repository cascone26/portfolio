import Image from "next/image";
import Link from "next/link";
import FadeIn from "./components/fade-in";
import BrowserFrame from "./components/browser-frame";

const highlights = [
  {
    title: "Services & Pricing",
    description:
      "Websites, AI chatbots, Google profiles, and more — with transparent pricing.",
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
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-blue-500/[0.07] blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              <FadeIn delay={0}>
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent-light text-sm px-4 py-1.5 rounded-full mb-8">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Available for projects — Kansas City, KS
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 tracking-tight">
                  Websites &<br />AI tools
                  <br />
                  <span className="gradient-text">for small businesses.</span>
                </h1>
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
                    className="btn-gradient text-white font-semibold px-7 py-3.5 rounded-xl"
                  >
                    Get a free audit
                  </Link>
                  <Link
                    href="/services"
                    className="btn-outline text-foreground font-medium px-7 py-3.5 rounded-xl"
                  >
                    See services
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right — code mockup */}
            <FadeIn delay={0.3} direction="left">
              <div className="hidden md:block">
                <BrowserFrame url="your-business.com">
                  <div className="p-5 text-[13px] leading-relaxed space-y-1">
                    <p>
                      <span className="code-keyword">const</span>{" "}
                      <span className="code-function">website</span>{" "}
                      <span className="code-plain">=</span>{" "}
                      <span className="code-function">build</span>
                      <span className="code-plain">({"{"}</span>
                    </p>
                    <p className="pl-5">
                      <span className="code-plain">client:</span>{" "}
                      <span className="code-string">
                        &quot;your business&quot;
                      </span>
                      <span className="code-plain">,</span>
                    </p>
                    <p className="pl-5">
                      <span className="code-plain">fast:</span>{" "}
                      <span className="code-keyword">true</span>
                      <span className="code-plain">,</span>
                    </p>
                    <p className="pl-5">
                      <span className="code-plain">mobile:</span>{" "}
                      <span className="code-keyword">true</span>
                      <span className="code-plain">,</span>
                    </p>
                    <p className="pl-5">
                      <span className="code-plain">seo:</span>{" "}
                      <span className="code-keyword">true</span>
                      <span className="code-plain">,</span>
                    </p>
                    <p className="pl-5">
                      <span className="code-plain">budget:</span>{" "}
                      <span className="code-string">
                        &quot;affordable&quot;
                      </span>
                      <span className="code-plain">,</span>
                    </p>
                    <p className="pl-5">
                      <span className="code-plain">jargon:</span>{" "}
                      <span className="code-keyword">false</span>
                      <span className="code-plain">,</span>
                    </p>
                    <p>
                      <span className="code-plain">{"}"});</span>
                    </p>
                    <p className="mt-3">
                      <span className="code-comment">
                        {"// "}Ready in 1-2 weeks
                      </span>
                    </p>
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
              "Live SaaS products shipped",
              "Fast turnaround — no agency delays",
              "Small business focused",
              "Plain English, no fluff",
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
                <div className="flex gap-4">
                  <a
                    href="https://lessondraft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient text-white font-semibold px-6 py-3 rounded-xl text-sm"
                  >
                    Visit site ↗
                  </a>
                  <Link
                    href="/work/lessondraft"
                    className="btn-outline text-foreground font-medium px-6 py-3 rounded-xl text-sm"
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
