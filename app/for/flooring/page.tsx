import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Flooring Companies in Kansas City",
  description:
    "Custom websites for flooring installation and refinishing companies in the Kansas City area. Show your materials and past work, explain your process, and get more quote requests.",
  alternates: {
    canonical: "https://builtsimple.dev/for/flooring",
  },
};

export default function FlooringPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Flooring Companies in Kansas City",
    description: "Custom websites for flooring installation and refinishing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Flooring Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners replacing or refinishing floors spend weeks comparing companies and materials. Make sure yours is the one they find — with the photos and expertise that close the estimate. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Flooring Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Flooring Companies</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Flooring is a highly visual purchase — homeowners want to see
              what hardwood, LVP, tile, or carpet looks like installed in a
              real home before committing. A flooring company with a website
              that shows actual finished jobs, explains material options
              honestly, and makes it easy to request an in-home estimate wins
              the comparison every time over a company with just a phone number.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before hiring a flooring company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Materials offered — hardwood, LVP/LVT, tile, carpet, laminate, bamboo, cork",
                  "Installation photos — real finished jobs in real homes, not stock photos",
                  "Whether they do hardwood refinishing and restoration, not just new installation",
                  "Pricing guidance — cost per square foot by material, what affects total cost",
                  "How estimates work — in-home vs. online, turnaround time on quotes",
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
                What your flooring company website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Materials gallery — hardwood, LVP, tile, carpet, laminate — each with finished project photos",
                  "Services page — installation, refinishing, restoration, subfloor repair, stair treads",
                  "Material comparison guide — durability, maintenance, cost, best use by room",
                  "Pricing guide — cost ranges by material type with factors that affect total",
                  "Brands carried — Shaw, Mohawk, Armstrong, Bruce, Pergo, LifeProof",
                  "Estimate request form — rooms, material interest, square footage estimate, timeline",
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
                &ldquo;Homeowners kept choosing the big-box store flooring
                departments because they could see samples. The new site with
                our actual job photos by material type changed the dynamic —
                customers see real hardwood refinishes and LVP installs we
                did in KC neighborhoods, and they call us because they can
                see the quality.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Nakamura, flooring company, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A flooring company site with materials gallery, services, and
                estimate form starts at $250. A full site with material-type
                pages, comparison guide, and brand info is $450–$950. One
                whole-home LVP install covers the cost. No contracts, no
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
