import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Attic Ventilation Installation Companies in Kansas City",
  description:
    "Custom websites for attic ventilation installation, ridge vent installation, and soffit vent installation companies in the Kansas City area. Show your KC summer heat load, FHA 1:150 ratio, and ridge vent plus soffit intake as balanced system to win attic ventilation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/attic-ventilation-installation",
  },
};

export default function AtticVentilationInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Attic Ventilation Installation Companies in Kansas City",
    description: "Custom websites for attic ventilation installation and ridge vent installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Attic Ventilation Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether adding a power attic fan will lower their cooling bill, whether ridge vents and soffit vents actually work together or whether they need both, and why their shingles are failing early when the roof is only twelve years old. A website that explains attic ventilation earns the call from the homeowner whose AC runs all day and whose attic hits 160 degrees. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Attic Ventilation Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Attic Ventilation Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Attic ventilation installation
              customers are KC homeowners
              whose upper-floor
              rooms are significantly
              warmer than lower
              floors during summer —
              a pattern that indicates
              the attic is accumulating
              heat and radiating
              it through the ceiling
              insulation into
              the living space;
              homeowners whose
              shingle manufacturer
              warranty was voided
              or whose shingles
              are granule-shedding
              and curling after
              ten to twelve years
              on a roof that should
              last twenty-five
              to thirty years —
              an early-failure
              pattern that correlates
              with inadequate
              attic ventilation
              and elevated deck
              temperature accelerating
              shingle oxidation;
              or homeowners who
              had a home energy
              audit and were told
              their attic ventilation
              is below the FHA
              1:150 ratio. The
              central education
              is KC summer heat
              load in the attic,
              the FHA ventilation
              ratio requirement,
              and ridge vent
              plus soffit intake
              as a balanced passive
              system — three things
              that determine whether
              a homeowner understands
              why a power attic
              fan added to an
              unbalanced system
              makes the problem
              worse before it
              makes it better.
              KC summer heat load:
              Kansas City summer
              attic temperatures
              on a south-facing
              roof pitch with
              dark shingles reach
              160 degrees Fahrenheit
              or higher on peak
              summer days; ambient
              outdoor temperature
              in KC reaches 95
              to 100 degrees in
              July and August;
              the attic amplifies
              this to 150-160
              degrees through
              solar gain — the
              roof surface absorbs
              radiant heat and
              transfers it through
              the deck into the
              attic air; an attic
              at 160 degrees while
              the living space
              is conditioned to
              72 degrees creates
              an 88-degree delta
              that drives heat
              through ceiling
              insulation — every
              R-value unit of
              ceiling insulation
              slows but does not
              stop this transfer;
              ventilation removes
              the super-heated
              attic air and replaces
              it with outdoor
              air — even 95-degree
              outdoor air replacing
              160-degree attic
              air cuts the attic
              temperature by
              over sixty degrees.
              FHA 1:150 ratio:
              the Federal Housing
              Administration requires
              1 square foot of
              net free vent area
              for every 150 square
              feet of attic floor
              area — a 1,500-square-foot
              attic requires
              10 square feet of
              net free vent area,
              split equally between
              high exhaust vents
              (ridge, gable) and
              low intake vents
              (soffit); net free
              vent area is the
              actual opening area
              after screen mesh
              and louver reductions —
              a 16x8-inch soffit
              vent has a gross
              area of 0.89 square
              feet but a net free
              area of 0.4 to 0.6
              square feet depending
              on the mesh rating;
              many KC homes built
              before 1990 were
              built with gable
              vents only — no
              ridge, no soffit —
              and are at one-third
              to one-half of
              the minimum FHA
              ratio; adding a
              ridge vent without
              balancing soffit
              intake creates
              negative pressure
              in the attic that
              draws conditioned
              air from the living
              space through attic
              floor bypasses.
              Balanced system
              requirement: attic
              ventilation requires
              a balanced intake
              and exhaust; ridge
              vent provides continuous
              exhaust along the
              peak of the roof —
              the highest point
              in the attic where
              hot air accumulates;
              soffit vents provide
              continuous low-level
              intake — cool outside
              air enters at the
              eave and rises through
              the attic space
              as it warms, exiting
              at the ridge; for
              this system to work,
              the soffit intake
              net free area must
              equal the ridge
              exhaust net free
              area — or the ridge
              vent draws from
              gable vents and
              the attic does not
              ventilate correctly;
              insulation baffles
              — channels installed
              from the soffit
              intake opening up
              to the attic air
              space above the
              insulation layer —
              are required to
              keep blown-in or
              batt insulation
              from blocking the
              soffit intake flow
              path. An attic ventilation
              installation website
              that explains KC
              summer heat load
              numbers, the FHA
              1:150 ratio calculation,
              and why ridge plus
              soffit is a system
              rather than two
              independent products
              earns the homeowner
              who wants to fix
              the hot upstairs
              before replacing
              the HVAC unit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before attic ventilation installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC heat load — 160°F attic on dark shingles, 88-degree delta to conditioned space, ventilation replaces with 95°F outdoor air",
                  "FHA 1:150 ratio — 10 sq ft net free vent per 1,500 sq ft attic, 50/50 intake/exhaust split requirement",
                  "Net free area calculation — gross vent area vs. net free after mesh/louver reduction, how to calculate actual coverage",
                  "Balanced system requirement — ridge requires matching soffit intake, negative pressure draws conditioned air through bypasses without it",
                  "Insulation baffles — intake path protection from blown-in insulation, required for soffit-to-attic airflow continuity",
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
                What your attic ventilation installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Heat load section — KC summer attic temperature, solar gain mechanism, 160°F vs. conditioned space delta",
                  "FHA ratio section — 1:150 calculation, net free vs. gross area, how to estimate current coverage",
                  "Balanced system section — ridge + soffit as paired requirement, negative pressure failure without intake balance",
                  "Insulation baffles — why baffles are required with blown-in insulation at soffit, installation sequence",
                  "Shingle warranty section — elevated deck temperature as early-failure mechanism, ventilation as warranty requirement",
                  "Quote form with attic sq footage, current vent types, upper floor temperature complaint, shingle age, insulation type",
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
                &ldquo;The balanced system
                section changed the
                conversation before
                the site visit. KC
                homeowners who called
                about a hot upstairs
                or early shingle
                failure almost always
                wanted a power attic
                fan — it&apos;s what their
                neighbor suggested
                or what they read
                on a home improvement
                forum. After the
                section went up
                explaining that
                a power fan on an
                unbalanced attic
                draws conditioned
                air from the living
                space through bypasses
                and actually increases
                cooling load, customers
                arrived understanding
                why I was recommending
                ridge and soffit
                instead. The FHA
                ratio calculation
                section also helped
                — KC homeowners
                with gable-only
                attics understood
                immediately that
                they were at a fraction
                of minimum ventilation
                once they saw the
                number.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Nakamura, roofing and attic ventilation installation, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An attic ventilation site with KC heat load section, FHA ratio guide,
                and quote form starts at $200. A full site with balanced system
                requirement, insulation baffle content, and shingle warranty
                connection is $425–$750. One ventilation job covers the cost. No
                contracts, no monthly fees.
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
