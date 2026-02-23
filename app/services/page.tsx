import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Websites, AI chatbots, Google Business profiles, and more for small businesses in Kansas City. Transparent pricing, no surprises.",
};

const services = [
  {
    title: "Business Website",
    price: "$500-800",
    description:
      "A clean, fast, mobile-ready site that actually gets you customers. 3-5 pages, contact form, SEO basics included.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
  },
  {
    title: "Website Refresh",
    price: "$150-400",
    description:
      "Your site exists but looks outdated or broken. I'll clean it up, speed it up, and make it work on phones.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
    ),
  },
  {
    title: "Google Business Profile",
    price: "$150",
    description:
      "Show up when people search for your business. Setup, optimization, and I'll show you how to collect reviews.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
  },
  {
    title: "AI Chatbot",
    price: "$400-700",
    description:
      "A chatbot on your website that answers customer questions 24/7, captures leads, and saves you time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
  },
  {
    title: "Email Automation",
    price: "$300-500",
    description:
      "Automatic follow-ups, appointment reminders, lead responses — set it up once and let it run.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
  },
  {
    title: "Monthly Tech Retainer",
    price: "$150-250/mo",
    description:
      "Your personal tech person. I handle updates, fixes, questions, and changes so you never have to worry about it.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "Free audit",
    desc: "Tell me what you need. I review your current situation and tell you exactly what would help.",
  },
  {
    num: "02",
    title: "Simple plan",
    desc: "One clear proposal. One price. No surprises, no upsells you didn't ask for.",
  },
  {
    num: "03",
    title: "I build it",
    desc: "You stay focused on your business. I handle everything technical.",
  },
  {
    num: "04",
    title: "You own it",
    desc: "You get full ownership of everything I build. No ongoing dependency on me unless you want it.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services & Pricing</h1>
          <p className="text-muted text-lg max-w-2xl">
            Pick one or stack them. Most clients start with a website, then add
            on. All prices are transparent — no hidden fees.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-all"
            >
              <div className="text-accent mb-4">{s.icon}</div>
              <div className="flex justify-between items-start mb-3">
                <h2 className="font-semibold text-lg">{s.title}</h2>
                <span className="text-accent text-sm font-mono ml-2 shrink-0">
                  {s.price}
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">How it works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num}>
                <div className="text-5xl font-bold text-accent/20 mb-4">
                  {s.num}
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted mb-8">
            Tell me about your business and I&apos;ll give you a free honest
            assessment — no pitch, no pressure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get a free audit
          </Link>
        </div>
      </section>
    </>
  );
}
