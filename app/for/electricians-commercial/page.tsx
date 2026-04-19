import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Commercial Electricians in Kansas City",
  description:
    "Custom websites for commercial electrical contractors in the Kansas City area. Show your credentials, win more commercial bids, and build the reputation that brings in repeat business clients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/electricians-commercial",
  },
};

export default function CommercialElectriciansPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Commercial Electricians in Kansas City",
    description: "Custom websites for commercial electrical contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Commercial Electricians",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Commercial property managers and general contractors vet their electrical subs online before they call. Make sure what they find builds confidence. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Commercial Electricians in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Commercial Electricians</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Commercial electrical work runs on relationships and reputation.
              But when a new property manager or general contractor is vetting
              vendors, they search online first. A commercial electrical
              contractor with a professional website that shows their licensing,
              their project types, and their service area gets shortlisted.
              One without one gets skipped for whoever does.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What commercial clients check before hiring an electrician
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "MO/KS master electrician license and contractor license number",
                  "Commercial project experience — tenant improvements, new construction, industrial, retail",
                  "Bonding and insurance certificates — general liability and workers compensation",
                  "Service capacity — crew size, can you handle multi-phase and high-voltage work",
                  "Emergency availability — 24/7 response for critical facility issues",
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
                What your commercial electrical website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "License number and insurance certificates prominently displayed",
                  "Project type pages — office TI, retail buildout, industrial, new construction, service upgrades",
                  "Service list — panel upgrades, lighting retrofits, EV charging, generators, data/AV rough-in",
                  "About page with years in business, crew size, and commercial specialization",
                  "Bid request form with project type, square footage, timeline, and scope description",
                  "Testimonials from GCs, property managers, and facility directors",
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
                &ldquo;We do mostly GC subcontract work and everything came
                through relationships. We built the site primarily to have
                something to point new GC contacts to. Within a few months
                we were getting direct inquiries from property managers who
                found us searching for commercial electricians in the south
                KC suburbs. That has been pure additional business.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Coleman, commercial electrician, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A commercial electrical site with services, credentials, and bid
                form starts at $275. A full site with project-type pages, license
                display, and testimonials from GC clients is $550–1,050. One
                tenant improvement contract covers the cost. No contracts, no
                monthly fees.
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
