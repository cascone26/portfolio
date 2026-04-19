import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Commercial Pressure Washing Companies in Kansas City",
  description:
    "Custom websites for commercial pressure washing and soft washing companies in the Kansas City area. Show your equipment capabilities, surface experience, and service contracts to win property management and commercial accounts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pressure-washing-commercial",
  },
};

export default function PressureWashingCommercialPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Commercial Pressure Washing Companies in Kansas City",
    description: "Custom websites for commercial pressure washing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Commercial Pressure Washing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Property managers and facility directors hiring a commercial pressure washing company want to see your equipment capacity, insurance coverage, and experience with their surface type before they put you on an approved vendor list. A website that shows your commercial portfolio and makes requesting a service agreement easy gets you the contract. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Commercial Pressure Washing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Commercial Pressure Washing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Commercial pressure washing companies
              serve two markets with different buying
              processes. Property managers at apartment
              complexes, retail centers, and office
              parks are looking for a reliable vendor
              they can put on an annual service
              agreement — they care about your insurance
              certificate, your ability to work around
              tenant schedules, and whether you have
              experience with their surface types
              (concrete drives, brick facades, EIFS,
              parking structures). Homeowners and
              small business owners are looking for
              someone to clean their driveway, siding,
              deck, or storefront before a specific
              date. Pressure washing companies that
              want the lucrative commercial accounts
              need a website that speaks to facility
              professionals — showing before-and-after
              results on commercial surfaces, demonstrating
              insurance and liability coverage, and
              offering a simple way to request a
              service agreement quote for recurring
              maintenance.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What property managers look for in a commercial pressure washing vendor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance — general liability and workers comp certificates, coverage amounts",
                  "Surface experience — concrete, brick, EIFS, metal, wood, painted surfaces — what you can and cannot clean",
                  "Equipment capacity — hot vs. cold water, PSI range, GPM flow, soft wash capability",
                  "Commercial portfolio — apartment complexes, retail centers, parking structures, drive-throughs",
                  "Service agreements — annual or semi-annual contracts, scheduling flexibility, priority response",
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
                What your pressure washing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Commercial portfolio — before and after on commercial surfaces organized by property type",
                  "Insurance and credentials — coverage levels, bonded, any relevant surface or equipment certifications",
                  "Services — soft wash, hot water pressure washing, surface types: concrete, siding, roofs, decks, fleets",
                  "Equipment — trailer setup, hot water capability, PSI range, surface protection process",
                  "Service agreements — how annual contracts work, scheduling options, priority customer benefits",
                  "Quote form with property type, surface type, square footage, frequency needed, contact info",
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
                &ldquo;We were doing mostly residential
                work but wanted to break into property
                management accounts — that&apos;s where
                the real recurring revenue is. Without
                a professional website showing our
                commercial portfolio and our insurance,
                we couldn&apos;t get on approved vendor
                lists. The new site with our commercial
                work front and center, our insurance
                detail, and a clear service agreement
                section changed our credibility with
                facility managers completely. We signed
                two apartment complex agreements in
                the first six weeks — that&apos;s more
                than we made in residential all quarter.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Kimura, pressure washing company owner, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pressure washing site with portfolio,
                services, and quote form starts at $225.
                A full site with commercial focus, service
                agreement detail, and insurance section
                is $425–$850. One commercial contract
                covers the cost in the first visit.
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
