import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Retaining Wall Building Companies in Kansas City",
  description:
    "Custom websites for retaining wall installation, segmental block, and natural stone wall companies in the Kansas City area. Show your wall materials, drainage systems, and engineering capabilities to win residential and commercial retaining wall contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/retaining-wall-building",
  },
};

export default function RetainingWallBuildingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Retaining Wall Building Companies in Kansas City",
    description: "Custom websites for retaining wall building companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Retaining Wall Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners dealing with erosion, sloped yards, or a failing existing wall want to understand material options, drainage requirements, and what walls over four feet need for engineering. A website with real portfolio photos and honest material comparisons earns the site visit. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Retaining Walls in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Retaining Wall Building</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Retaining wall customers in Kansas
              City are typically dealing with
              a sloped yard that is losing
              usable space to erosion, a
              failing existing wall that
              is leaning or crumbling,
              or a new build where a
              grade change needs to be
              managed for a driveway,
              patio, or landscaping plan.
              Kansas City&apos;s clay-heavy
              soil and significant grade
              changes in many neighborhoods —
              particularly in older KC
              neighborhoods, Brookside,
              Waldo, and the Johnson
              County suburbs built on
              rolling terrain —
              create regular demand
              for both new wall
              installation and
              wall failure repairs.
              Material options are
              the first research point:
              segmental concrete block
              (Belgard, Allan Block,
              Versa-Lok) is the most
              common residential choice
              because it is engineered
              for retaining applications,
              comes in many color and
              texture options, and
              can be installed without
              mortar. Natural stone —
              limestone, fieldstone,
              dry-stacked — is a
              premium choice that
              fits older KC aesthetics
              well. Poured concrete
              and concrete block with
              a stucco or stone veneer
              finish are used for
              taller or more structural
              applications. Timber
              walls (railroad tie or
              landscape timber) are
              the budget option but
              have a 15-20 year
              lifespan and are not
              recommended for anything
              over three feet. Drainage
              is critical — a retaining
              wall without proper drainage
              aggregate and a drain
              pipe at the base will
              fail from hydrostatic
              pressure regardless
              of material. Walls over
              four feet typically
              require a permit and
              sometimes a structural
              engineer stamp in
              KC municipalities.
              A retaining wall website
              with real portfolio
              photos, material comparison,
              and an explanation
              of drainage and
              engineering requirements
              earns the homeowner
              who needs to do
              this right the first time.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before building a retaining wall
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material options — segmental block, natural stone, timber, poured concrete — cost, appearance, longevity",
                  "Drainage requirements — why drainage matters, aggregate base, drain pipe, what happens without it",
                  "Wall height and permits — when a permit is required in KC, engineering requirements over four feet",
                  "Tiered walls — how multiple shorter tiers compare to one tall wall, cost and aesthetics of terracing",
                  "Failing wall repair — whether existing wall can be repaired or needs full demolition and rebuild",
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
                What your retaining wall website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material guide — segmental block (Belgard, Versa-Lok), natural stone, timber — pros, cons, cost ranges",
                  "Portfolio — sloped yard transformations, tiered wall systems, natural stone walls in KC neighborhoods",
                  "Drainage explained — aggregate base, perforated drain pipe, why it is not optional for wall longevity",
                  "Permits and engineering — what KC municipalities require over four feet, engineer stamp process",
                  "Tiered wall systems — how terracing works for steep yards, usable space created, plant-bed integration",
                  "Quote form with approximate wall length, height, material preference, slope direction, timeline",
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
                &ldquo;Retaining wall jobs in KC
                are almost always complex —
                the grade changes, the clay
                soil, the drainage issues.
                Customers who just want
                the cheapest wall get a
                wall that fails in five
                years. The website helped
                me attract customers who
                understood the difference
                between doing it right
                and just getting it done.
                The drainage explanation,
                the permit guide, and
                the portfolio of tiered
                systems brought in
                homeowners who cared
                about the quality —
                and those jobs have
                much better margins
                than competing on price.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Mercer, retaining wall contractor, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A retaining wall site with portfolio,
                material guide, and quote form
                starts at $225. A full site with
                drainage explanation, tiered
                systems section, and permit guide
                is $425–$850. One mid-size wall
                project covers the cost.
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
