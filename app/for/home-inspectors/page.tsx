import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Home Inspectors in Kansas City",
  description:
    "Custom websites for home inspectors in the Kansas City area. Get found by buyers and agents, showcase your credentials, and make scheduling an inspection effortless.",
  alternates: {
    canonical: "https://builtsimple.dev/for/home-inspectors",
  },
};

export default function HomeInspectorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Home Inspectors in Kansas City",
    description: "Custom websites for home inspectors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Home Inspectors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Buyers and agents Google inspectors before they call. Credentials, availability, and fast scheduling win the job. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Home Inspectors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Home Inspectors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Home inspectors get business two ways: agent referrals and direct
              searches from buyers. A professional website that ranks for local
              search, clearly shows your credentials, and lets buyers schedule
              online in 60 seconds is how you grow both channels — and stop
              depending entirely on which agents happen to recommend you.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What buyers and agents check before booking an inspector
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "License number and state certification (required in Missouri and Kansas)",
                  "Certifications — InterNACHI, ASHI, radon, mold, sewer scope",
                  "Turnaround time for the report — buyers are often under contract deadlines",
                  "Pricing — square footage-based or flat rate, and what's included",
                  "Online scheduling — can they book same-day or next-day without calling?",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent-light mt-0.5 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What your home inspection website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "License number, certifications, and years of experience front and center",
                  "Services list — buyer inspection, pre-listing, new construction, radon, sewer scope, mold",
                  "Pricing by home size or a simple fee calculator",
                  "Online booking or scheduling request with address, square footage, and preferred time",
                  "Sample report or report delivery method — 24-hour turnaround is a selling point",
                  "Agent referral page — dedicated info for real estate agents who want to recommend you",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent-light mt-0.5 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">What clients say</h2>
              <blockquote className="text-muted text-sm leading-relaxed italic border-l-2 border-accent/40 pl-4">
                &ldquo;I was getting all my business through three agents. When one
                of them retired, my volume dropped noticeably. The new website
                changed that — buyers started finding me directly, and I added an
                agent referral page that helped me get into two new agent networks
                within the first quarter.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Garrett, InterNACHI-certified inspector, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A home inspection site with credentials, services, and scheduling
                starts at $250. A full site with service-specific pages, pricing
                calculator, and agent referral section is $500–900. One additional
                inspection per week covers the cost in under a month. No contracts,
                no monthly fees.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Ready to get started?</h2>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Get a free mockup — no obligation. Fill out the form below, or
                give me a call.
              </p>
              <p className="mb-6">
                <a href="tel:8165205652" className="text-accent-light text-lg font-semibold hover:underline">
                  (816) 520-5652
                </a>
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
