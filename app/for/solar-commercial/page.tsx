import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Commercial Solar Companies in Kansas City",
  description:
    "Custom websites for commercial solar installation companies in the Kansas City area. Show your commercial project portfolio, explain ROI and incentives, and get more RFPs from facility managers and business owners.",
  alternates: {
    canonical: "https://builtsimple.dev/for/solar-commercial",
  },
};

export default function SolarCommercialPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Commercial Solar Companies in Kansas City",
    description: "Custom websites for commercial solar installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Commercial Solar Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Commercial solar decisions involve CFOs, facility managers, and board approval. Your website needs to show ROI math, completed commercial projects, and financing options before they will request a proposal. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Commercial Solar in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Commercial Solar</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Commercial solar is a financial decision as much as an energy
              one. The business owner or facility manager evaluating solar
              wants to see the payback period, understand current federal
              incentives, and know that your company has successfully
              installed systems on buildings like theirs. A commercial
              solar website that leads with ROI, shows real project data,
              and explains financing options earns the RFP from decision-makers
              who are ready to move.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What business owners and facility managers need to see
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "ROI and payback period — typical kWh savings, payback in years, 25-year return on investment",
                  "Federal and state incentives — ITC (Investment Tax Credit), bonus depreciation, USDA grants",
                  "Commercial project portfolio — warehouses, office buildings, schools, retail, manufacturing",
                  "System types — rooftop, carport/canopy, ground-mount, battery storage, EV charging integration",
                  "Financing options — purchase, solar loan, PPA (power purchase agreement), lease",
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
                What your commercial solar website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "ROI calculator or example savings — real numbers from completed KC commercial projects",
                  "Incentives page — ITC percentage, bonus depreciation, Missouri and Kansas state programs",
                  "Project portfolio — by building type with system size, kWh output, payback period shown",
                  "System types — rooftop flat/pitched, parking canopy, ground-mount, battery + EV integration",
                  "Financing breakdown — PPA vs. loan vs. cash purchase — what each means for cash flow",
                  "Proposal request form with building type, square footage, monthly utility spend, timeline",
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
                &ldquo;We were doing $500K+ commercial installs but our site
                looked like a residential solar company. The new site with
                our warehouse and school project portfolio, the ITC explainer,
                and the PPA vs. purchase breakdown completely changed the
                conversations we were having. We started getting RFPs from
                businesses who had already done the research and were
                ready to move forward.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Adeyemi, commercial solar, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A commercial solar site with project portfolio, incentives,
                and proposal form starts at $325. A full site with ROI
                examples, financing breakdown, and system type pages
                is $600–$1,200. One commercial installation covers the cost
                many times over. No contracts, no monthly fees.
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
