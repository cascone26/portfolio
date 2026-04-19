import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Commercial HVAC Companies in Kansas City",
  description:
    "Custom websites for commercial HVAC installation, service, and maintenance companies in the Kansas City area. Show your commercial capabilities, service contracts, and build relationships with facility managers.",
  alternates: {
    canonical: "https://builtsimple.dev/for/commercial-hvac",
  },
};

export default function CommercialHvacPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Commercial HVAC Companies in Kansas City",
    description: "Custom websites for commercial HVAC installation, service, and maintenance companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Commercial HVAC Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Facility managers and building owners researching commercial HVAC contractors want proof of commercial experience — not residential work. A site built for commercial clients earns the service contract before the first call. Free mockup, no commitment.
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
              Commercial HVAC buyers — facility managers, property managers,
              building owners — do serious due diligence before awarding a
              service contract. They need to know that you handle their
              building type and system size, that you have licensed commercial
              technicians, and that you can respond quickly when something
              fails. A commercial-focused website that speaks their language
              and demonstrates your capabilities earns the RFP and the contract.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What facility managers look for in a commercial HVAC contractor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Building types served — office, retail, warehouse, restaurant, medical, industrial",
                  "System types — rooftop units, chillers, cooling towers, VRF/VRV, building automation",
                  "Preventive maintenance contracts — what is included, inspection frequency, reporting",
                  "Emergency response — 24/7 availability, guaranteed response time, on-call technician",
                  "Certifications — EPA 608, NATE, manufacturer certifications, insurance and bonding",
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
                  "Building types — office, retail, restaurant, medical, warehouse, industrial — with examples",
                  "Systems page — rooftop units, chillers, VRF, split systems, controls and automation",
                  "Preventive maintenance — contract tiers, what each includes, reporting and documentation",
                  "Emergency service — 24/7 response commitment, dispatch process, response time guarantee",
                  "Certifications and insurance — EPA, NATE, manufacturer certs, bonding, liability coverage",
                  "Service quote form with building type, square footage, system type, current issues",
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
                &ldquo;We were doing commercial work but our site looked
                like a residential HVAC company. The new site built around
                commercial buildings and our PM contract structure completely
                changed who was calling us — facility managers and property
                management companies who specifically needed a commercial
                contractor and found us because we clearly were one.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Erickson, commercial HVAC, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A commercial HVAC site with building types, services, and
                quote form starts at $300. A full site with systems pages,
                PM contract tiers, emergency service info, and certifications
                is $575–$1,150. One annual service contract covers the cost.
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
