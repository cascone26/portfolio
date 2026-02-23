import Link from "next/link";

const highlights = [
  {
    title: "Services & Pricing",
    description:
      "Websites, AI chatbots, Google profiles, and more — with transparent pricing.",
    href: "/services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
  },
  {
    title: "My Work",
    description:
      "Real products I've shipped — including a live AI-powered SaaS platform.",
    href: "/work",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
    ),
  },
  {
    title: "About Me",
    description: "Who I am, what I know, and why I do this.",
    href: "/about",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
  },
  {
    title: "Get in Touch",
    description:
      "Free audit, no pressure — tell me about your business and I'll give you honest advice.",
    href: "/contact",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-32 px-6">
        {/* Hero-specific glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-blue-500/[0.07] blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent-light text-sm px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Available for projects — Kansas City, KS
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Websites & AI tools
            <br />
            <span className="gradient-text">for small businesses.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
            I build fast, affordable websites and set up AI automation for local
            businesses in KC. No tech jargon. No agencies. Just results.
          </p>

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
        </div>
      </section>

      {/* Trust bar */}
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

      {/* Highlight cards */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="group glass rounded-2xl p-7 transition-all duration-300"
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
