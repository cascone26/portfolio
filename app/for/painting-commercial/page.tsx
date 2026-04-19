import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Commercial Painting Companies in Kansas City",
  description:
    "Custom websites for commercial and industrial painting contractors in the Kansas City area. Show your commercial project portfolio, explain your coatings capabilities, and get more bids from property managers and general contractors.",
  alternates: {
    canonical: "https://builtsimple.dev/for/painting-commercial",
  },
};

export default function PaintingCommercialPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Commercial Painting Companies in Kansas City",
    description: "Custom websites for commercial and industrial painting contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Commercial Painting Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Property managers and GCs looking for commercial painters need proof of commercial-scale work before they invite a bid. A website that shows your project history, crew size, and coating capabilities earns the RFP. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Commercial Painters in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Commercial Painting</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Commercial painting contracts go to painters who can prove
              they have done it before at scale. A property manager
              or general contractor evaluating painters for a multi-unit
              complex, office building, or warehouse needs to see
              comparable completed projects, crew capacity, and
              coating system knowledge. A commercial-focused website
              that shows your work and speaks the language of
              commercial clients earns the bid invitation over
              residential painters who stretch into commercial.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What property managers and GCs look for in a commercial painter
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Building types served — office, retail, multifamily, warehouse, industrial, healthcare, schools",
                  "Interior vs. exterior commercial — different prep, coating systems, and crew requirements",
                  "Coating systems — elastomeric, epoxy, urethane, anti-graffiti, parking deck coatings",
                  "Crew size and capacity — how many painters, how quickly they can complete large-scale work",
                  "Insurance and compliance — general liability, workers comp, OSHA compliance, bonding",
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
                What your commercial painting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project portfolio — office buildings, warehouses, multifamily, retail, healthcare with sq footage shown",
                  "Services — interior commercial, exterior, industrial coatings, parking structures, line striping",
                  "Coating systems — elastomeric, epoxy floor coatings, urethane, anti-graffiti with use cases",
                  "Crew and capacity — number of crews, daily sq footage capability, typical project timeline",
                  "Certifications — insurance certificates, lead paint certifications, OSHA compliance, bonding",
                  "Bid request form with building type, square footage, interior/exterior, preferred timeline",
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
                &ldquo;We do mostly commercial work but our website showed
                house painting photos. Property managers looking for a
                commercial crew thought we were residential painters
                stretching. The new site built around our warehouse and
                office project history, our coating systems, and our crew
                capacity completely changed who reached out. We started
                getting invited to bid on contracts we never would have
                seen before.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Brockman, commercial painting, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A commercial painting site with project portfolio, services,
                and bid form starts at $275. A full site with coating system
                pages, capacity details, and certifications
                is $525–$1,050. One commercial contract covers the cost.
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
