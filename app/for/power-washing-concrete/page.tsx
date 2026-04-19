import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Power Washing Concrete Companies in Kansas City",
  description:
    "Custom websites for power washing concrete, pressure washing driveways, and concrete cleaning companies in the Kansas City area. Show your KC efflorescence removal, PSI selection for concrete, and surface prep before sealing to win power washing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/power-washing-concrete",
  },
};

export default function PowerWashingConcretePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Power Washing Concrete Companies in Kansas City",
    description: "Custom websites for power washing concrete and pressure washing driveways in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Power Washing Concrete Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their concrete driveway turns black after one KC summer, whether pressure washing will damage their concrete surface, and what PSI is safe for aged versus new concrete. A website that explains efflorescence and surface prep before sealing earns the annual maintenance call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Power Washing Concrete in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Power Washing Concrete</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Power washing concrete
              customers are KC homeowners
              whose driveway, sidewalk,
              patio, or garage apron
              has accumulated black
              algae, green moss,
              oil stains, or the
              chalky white mineral
              deposit called efflorescence —
              and who want the surface
              cleaned before they
              apply a concrete sealer
              or simply restored
              to a presentable condition;
              or homeowners who tried
              a consumer pressure
              washer at fifteen
              hundred PSI and left
              uneven streaks or
              etched the surface
              on softer decorative
              concrete. The central
              education is PSI
              selection for concrete:
              concrete surfaces
              require different
              pressure depending
              on their age and
              condition — new
              concrete cured less
              than thirty days
              should not be pressure
              washed at all because
              the surface is still
              gaining compressive
              strength and can
              be eroded by high-pressure
              water; cured residential
              concrete in good condition
              tolerates three thousand
              to thirty-five hundred
              PSI with a twenty-five-degree
              tip at a consistent
              six-to-twelve-inch
              standoff; weathered
              or spalled concrete
              should be cleaned
              at two thousand to
              twenty-five hundred
              PSI to avoid lifting
              aggregate or widening
              surface cracks. Surface
              tip selection matters
              as much as PSI: a
              zero-degree pencil
              tip concentrates
              all force on one
              point and will etch
              concrete at any
              practical working
              distance — it should
              never be used on
              concrete surfaces;
              a fifteen-degree
              tip is used for
              heavy staining in
              isolated spots;
              a twenty-five-degree
              tip is the standard
              concrete tip for
              general surface
              cleaning; a forty-degree
              tip is appropriate
              for painted or
              decorative concrete
              where surface preservation
              matters more than
              aggressive cleaning.
              Efflorescence: the
              chalky white mineral
              deposit that appears
              on KC concrete driveways,
              retaining walls,
              and basement walls
              is efflorescence —
              water-soluble calcium
              salts carried through
              the concrete pore
              structure to the
              surface by moisture
              migration; pressure
              washing alone removes
              the surface deposit
              temporarily but
              does not address
              the soluble salt
              reservoir inside
              the concrete; the
              correct treatment
              is a dilute muriatic
              acid or proprietary
              efflorescence cleaner
              applied after pressure
              washing to dissolve
              the salt deposits
              before sealing —
              sealing over active
              efflorescence traps
              moisture and causes
              the sealer to blister
              and peel within
              one KC freeze-thaw
              season. Concrete
              cleaning before
              sealing: the most
              common reason a
              concrete sealer
              fails in the first
              year is that the
              surface was not
              adequately cleaned
              before application;
              oil, algae, and
              efflorescence all
              prevent sealer
              adhesion; hot water
              pressure washing
              (one hundred sixty
              to one hundred eighty
              degrees Fahrenheit)
              emulsifies oil-based
              contamination that
              cold water does
              not lift; after
              washing, the surface
              must dry to below
              four percent moisture
              before sealer application —
              in KC summer humidity
              this typically requires
              twenty-four to forty-eight
              hours of dry weather.
              A power washing
              concrete website
              that explains PSI
              selection, why efflorescence
              requires more than
              rinsing, and how
              surface prep determines
              sealer longevity
              earns the KC homeowner
              who wants their
              driveway cleaned
              correctly before
              they pay for a sealer
              coat.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before power washing concrete
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "PSI for concrete — safe pressure range for residential driveways, why too much PSI damages aged concrete",
                  "Tip selection — zero vs. fifteen vs. twenty-five degree tip, what each does to a concrete surface",
                  "Efflorescence — what the white chalky deposit is, why pressure washing alone doesn't fix it, acid wash requirement",
                  "Hot water vs. cold — when hot water is needed for oil contamination, temperature range for emulsification",
                  "Surface prep before sealing — why clean concrete accepts sealer better, dry time requirement in KC humidity",
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
                What your power washing concrete website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "PSI section — pressure selection by concrete age and condition, tip guide, standoff distance for consistent results",
                  "Efflorescence section — what it is, why it forms in KC, acid wash treatment before sealing, sealer failure cause",
                  "Hot water section — oil and grease emulsification, when hot water is required vs. optional, temperature range",
                  "Surface prep section — clean concrete vs. contaminated, dry time in KC humidity, what failed adhesion looks like",
                  "Driveway cleaning guide — before/after sealer prep, algae and moss causes in KC shade and humidity",
                  "Quote form with surface type, square footage, current condition (staining, efflorescence, oil), sealing planned",
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
                &ldquo;The efflorescence section
                changed how KC homeowners
                talk to me before they
                schedule. Before the
                site, I showed up to
                driveways that had been
                sealed over white mineral
                deposits and had blistered
                sealer all over them —
                the homeowner thought
                I did the previous seal
                coat wrong. After the
                section explaining that
                efflorescence has to be
                treated with acid wash
                before sealing, customers
                started mentioning it
                in the quote call. The
                prep section also justifies
                why I charge more than
                a rinse-and-go company
                — homeowners understand
                that hot water and surface
                prep are what make the
                sealer stick through
                a KC winter.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Connelly, concrete cleaning and sealing, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A power washing concrete site with PSI guide, efflorescence section,
                and quote form starts at $200. A full site with hot water cleaning
                explanation, surface prep guide, and before/after gallery is
                $425–$750. One driveway cleaning and seal prep job covers the cost.
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
