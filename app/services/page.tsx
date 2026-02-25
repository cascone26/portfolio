import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/fade-in";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Websites, AI chatbots, Google Business profiles, and more for small businesses in Kansas City. Transparent pricing, no surprises.",
};

const services = [
  {
    title: "Website Refresh",
    price: "$100-250",
    timeline: "2-3 days",
    priceNote: "Depends on how much needs fixing",
    description:
      "Your site exists but looks outdated or broken. I'll clean it up, speed it up, and make it work on phones.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
    ),
  },
  {
    title: "Starter Site",
    price: "$250-400",
    timeline: "3-5 days",
    priceNote: "Depends on content and design complexity",
    description:
      "A clean one-page site with everything you need: your business name, services, hours, location, and a contact form. Perfect if you just need to show up online.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
    ),
  },
  {
    title: "Full Business Website",
    price: "$600-1,200",
    timeline: "1-2 weeks",
    priceNote: "Depends on number of pages and custom features",
    description:
      "A multi-page site built for growth — with multiple pages, custom features, booking, e-commerce, or whatever your business needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
  },
  {
    title: "AI Chatbot",
    price: "$250-500",
    timeline: "3-5 days",
    priceNote: "Depends on how many topics it needs to handle",
    description:
      "A chatbot on your website that answers customer questions 24/7, captures leads, and saves you time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
  },
  {
    title: "Email Automation",
    price: "$200-350",
    timeline: "2-4 days",
    priceNote: "Depends on number of automations",
    description:
      "Automatic follow-ups, appointment reminders, lead responses — set it up once and let it run.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
  },
  {
    title: "Monthly Tech Retainer",
    price: "$50-75/mo",
    timeline: "Ongoing",
    priceNote: "Depends on how much support you need",
    description:
      "Your personal tech person. I handle updates, fixes, questions, and changes so you never have to worry about it.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
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
      <section className="relative pt-12 pb-12 px-6">
        <div className="absolute top-0 right-0 w-[500px] h-[300px] rounded-full bg-blue-500/[0.05] blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Services & <span className="gradient-text-blue">Pricing</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted text-lg max-w-2xl leading-relaxed">
              Something for every budget. Pick what makes sense for your
              business right now and add on later. No hidden fees.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light mb-5">
                  {s.icon}
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h2 className="font-semibold text-lg">{s.title}</h2>
                  <span className="gradient-text-blue text-sm font-semibold font-mono ml-2 shrink-0">
                    {s.price}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-3">
                  {s.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted/70 pt-2 border-t border-white/[0.04]">
                  <span className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {s.timeline}
                  </span>
                  <span className="w-px h-3 bg-white/[0.08]" />
                  <span>{s.priceNote}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] via-white/[0.03] to-white/[0.01]" />
        <div className="max-w-5xl mx-auto relative">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-14 tracking-tight">
              How it works
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.1}>
                <div>
                  <div className="text-5xl font-bold gradient-text-blue opacity-40 mb-4">
                    {s.num}
                  </div>
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-accent/[0.06] blur-[80px] pointer-events-none" />
            <h2 className="text-3xl font-bold mb-4 tracking-tight relative">
              Ready to get started?
            </h2>
            <p className="text-muted mb-8 relative">
              Tell me about your business and I&apos;ll give you a free honest
              assessment — no pitch, no pressure.
            </p>
            <Link
              href="/contact"
              className="btn-gradient inline-block text-white font-semibold px-8 py-3.5 rounded-xl relative"
            >
              Get a free audit
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
