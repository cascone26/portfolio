import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Commercial HVAC Companies in Kansas City",
  description:
    "Custom websites for commercial HVAC contractors in the Kansas City area. Showcase your equipment brands, service agreements, and emergency response to win facility and property management contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hvac-commercial",
  },
};

export default function HvacCommercialPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Commercial HVAC Companies in Kansas City",
    description: "Custom websites for commercial HVAC contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Commercial HVAC Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Facility managers and property owners comparing commercial HVAC contractors want to know your service agreement terms, equipment brands, and emergency response time. A website that delivers this wins the bid. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Commercial HVAC in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Commercial HVAC</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Commercial HVAC contracts are long-term relationships
              — a property manager or facility director is choosing
              a partner who will be responsible for their building
              systems for years. Before they call for a bid, they
              are evaluating your service agreement terms, your
              equipment certifications and brand partnerships,
              and your emergency response capability. A commercial
              HVAC website that communicates these clearly wins
              the first call and the relationship that follows.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What facility managers look for in a commercial HVAC company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service agreement terms — what is covered, inspection frequency, response time guarantee",
                  "Equipment brands — Trane, Carrier, York, Lennox — factory authorization and warranty service",
                  "Emergency response — 24/7 availability, how quickly a tech arrives, after-hours protocol",
                  "Facility types — office, retail, warehouse, medical, multi-family, industrial",
                  "Energy efficiency — recommissioning, controls upgrades, efficiency certifications",
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
                What your commercial HVAC website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service agreements — what preventive maintenance plans include, coverage and response",
                  "Equipment expertise — brands serviced, factory authorizations, warranty work",
                  "Facility specialties — office, medical, retail, industrial — systems experience per type",
                  "Emergency service — 24/7 coverage, response time guarantee, how to reach dispatch",
                  "Project work — new installations, system replacements, controls upgrades",
                  "Bid request form with facility type, square footage, equipment brands, service history",
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
                &ldquo;Property managers were giving our bids
                serious consideration but then going with
                larger firms because our old site looked
                like we were residential. The new site with
                our commercial project history, our Trane
                factory authorization, and our service agreement
                details upfront repositioned us as the commercial
                specialist. We landed our first three multi-building
                property management contracts within ninety
                days.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Kowalski, commercial HVAC, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A commercial HVAC site with services, equipment
                brands, and bid form starts at $275. A full site
                with service agreement detail, facility specialty
                pages, and emergency service section is $525–$1,050.
                One new service agreement covers the cost.
                No contracts, no monthly fees.
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
