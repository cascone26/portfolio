import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Flooring Contractors in Kansas City",
  description:
    "Custom websites for flooring installation and refinishing companies in the Kansas City area. Showcase your flooring types, project gallery, and service area to win residential and commercial estimates.",
  alternates: {
    canonical: "https://builtsimple.dev/for/flooring-contractors",
  },
};

export default function FlooringContractorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Flooring Contractors in Kansas City",
    description: "Custom websites for flooring installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Flooring Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners planning a flooring project compare contractor galleries and material knowledge before requesting a quote. A website that shows your best installs and explains each flooring type wins more estimates. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Flooring Contractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Flooring Contractors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Flooring is one of the most visible investments in a
              home. Homeowners take it seriously, and they compare
              contractor photos and material explanations carefully
              before requesting a quote. They want to see what
              your hardwood refinishing looks like, whether you
              install the LVP brand they are considering, and
              whether your portfolio matches their style. A
              flooring website with a strong project gallery,
              material knowledge, and a clear estimate process
              turns more browsers into quote requests.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research when choosing a flooring contractor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project gallery — completed installs by material type: hardwood, LVP, tile, carpet",
                  "Material knowledge — which brands they carry, subfloor prep requirements, durability by room",
                  "Services offered — installation, hardwood refinishing, subfloor repair, stair treads",
                  "Process — how long install takes, who moves furniture, cleanup, drying time",
                  "Estimate process — how to get a quote, whether it is free, what measurements are needed",
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
                What your flooring website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project gallery — completed jobs by flooring type, showing room context and finish quality",
                  "Flooring types — hardwood, engineered, LVP, tile, carpet — what each offers and where it works best",
                  "Services — installation, sanding and refinishing, stair work, subfloor prep",
                  "Material guide — what to choose for kitchens, basements, living areas — honest recommendations",
                  "Installation process — timeline, furniture moving, drying time, cleanup included",
                  "Estimate form with flooring type, room size, current floor condition, timeline",
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
                &ldquo;Homeowners were calling with vague questions
                and wasting everyone&apos;s time. The new site
                with a material guide explaining the difference
                between engineered and solid hardwood, a project
                gallery by room type, and a quote form that asked
                for the right details upfront changed the quality
                of every inquiry. Clients came in knowing what they
                wanted and we spent less time educating and more
                time booking.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — V. Marchetti, flooring contractor, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A flooring site with services, project gallery, and
                estimate form starts at $250. A full site with
                flooring type pages, material guide, and refinishing
                services is $475–$950. One full-floor
                install covers the cost. No contracts, no monthly fees.
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
