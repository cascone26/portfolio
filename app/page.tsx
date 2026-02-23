import Link from "next/link";

const highlights = [
  {
    title: "Services & Pricing",
    description: "Websites, AI chatbots, Google profiles, and more — with transparent pricing.",
    href: "/services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
  },
  {
    title: "My Work",
    description: "Real products I've shipped — including a live AI-powered SaaS platform.",
    href: "/work",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
    ),
  },
  {
    title: "About Me",
    description: "Who I am, what I know, and why I do this.",
    href: "/about",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
  },
  {
    title: "Get in Touch",
    description: "Free audit, no pressure — tell me about your business and I'll give you honest advice.",
    href: "/contact",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-accent/10 text-accent text-sm px-3 py-1 rounded-full mb-6">
            Kansas City, KS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Websites & AI tools
            <br />
            <span className="text-muted">for small businesses.</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mb-10">
            I build fast, affordable websites and set up AI automation for local
            businesses in KC. No tech jargon. No agencies. Just results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get a free audit
            </Link>
            <Link
              href="/services"
              className="border border-border text-foreground px-6 py-3 rounded-lg hover:bg-card transition-colors"
            >
              See services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-8 text-muted text-sm">
          <span>Live SaaS products shipped</span>
          <span>Fast turnaround — no agency delays</span>
          <span>Small business focused</span>
          <span>Plain English, no fluff</span>
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
                className="group bg-card border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-all"
              >
                <div className="text-accent mb-4">{h.icon}</div>
                <h2 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
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
