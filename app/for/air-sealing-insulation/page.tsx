import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Air Sealing and Insulation Companies in Kansas City",
  description:
    "Custom websites for air sealing, attic insulation, and building envelope companies in the Kansas City area. Show your blower door testing, air barrier locations, and R-value recommendations to win insulation and air sealing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/air-sealing-insulation",
  },
};

export default function AirSealingInsulationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Air Sealing and Insulation Companies in Kansas City",
    description: "Custom websites for air sealing and insulation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Air Sealing and Insulation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why adding insulation didn't fix their cold rooms, what a blower door test actually reveals, and where air is actually leaking in a KC home. A website that explains the air barrier concept and where sealing matters most earns the contract. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Air Sealing and Insulation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Air Sealing and Insulation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Air sealing and insulation
              customers are homeowners
              who added blown-in
              insulation to their
              attic and still have
              cold rooms, homeowners
              getting high utility
              bills and suspecting
              the house is drafty,
              or homeowners preparing
              for a heat pump or
              other equipment upgrade
              who want to reduce
              the heating and cooling
              load first. The central
              education is why insulation
              without air sealing
              fails: insulation
              slows conductive heat
              transfer — but air
              infiltration carries
              heat by convection,
              which insulation
              alone cannot stop.
              A loose-fill attic
              with R-38 insulation
              and an unsealed top
              plate still allows
              stack effect air
              movement: in winter,
              warm house air rises
              and exits through
              attic bypasses (top
              plates, ceiling light
              cans, HVAC penetrations)
              while cold outside
              air infiltrates
              at the basement and
              lower levels. Blower
              door testing: a calibrated
              fan mounted in an
              exterior door depressurizes
              the house to 50
              Pascals — at this
              pressure, air leakage
              paths are measurable;
              result is expressed
              in ACH50 (air changes
              per hour at 50 Pascals);
              KC code for new construction
              is 3.0 ACH50; existing
              homes commonly test
              at 8–15 ACH50. Primary
              air sealing locations:
              attic top plates
              (between ceiling
              drywall and attic
              floor — where interior
              walls meet the ceiling
              plane), recessed
              light cans (older
              non-IC-rated cans
              are open to attic),
              HVAC chase penetrations
              (supply and return
              plenums passing through
              floors and ceilings),
              chimney chases (large
              bypasses with no
              firestop air barrier),
              attic hatch (unsealed
              hatches are equivalent
              to a 30-square-inch
              hole). Insulation
              types: blown cellulose
              (R-3.5/inch, settles
              ~20%, treated for
              fire resistance,
              good for existing
              attics); blown fiberglass
              (R-2.5/inch, no settle,
              less effective air
              barrier than cellulose);
              open-cell spray foam
              (R-3.8/inch, excellent
              air barrier at the
              application surface,
              used at rim joists
              and attic knee walls);
              closed-cell spray
              foam (R-6.5/inch,
              vapor barrier,
              structural contribution,
              used at crawl space
              walls and unvented
              roof assemblies). IRA
              25C weatherization credit:
              30% of cost for
              insulation and air
              sealing materials
              up to $1,200 annually —
              a combined insulation
              and blower door
              project that shows
              measurable infiltration
              reduction qualifies.
              An air sealing website
              that explains why
              insulation alone
              doesn't fix cold
              rooms and where
              the actual bypasses
              are in a KC home
              earns the homeowner
              who is done guessing.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring an air sealing company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insulation vs. air sealing — why R-value alone doesn't fix cold rooms, conduction vs. convection heat loss",
                  "Blower door test — what ACH50 means, how the test reveals leak locations, KC code vs. typical existing homes",
                  "Top plate sealing — where interior walls meet the attic floor, why this is the highest-priority bypass location",
                  "Recessed light cans — why older non-IC cans are major leakage points, cover vs. replacement options",
                  "IRA 25C credit — 30% up to $1,200 for insulation and air sealing materials, qualification requirements",
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
                What your air sealing and insulation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Air barrier concept — how stack effect moves air, why insulation without air sealing underperforms",
                  "Blower door section — test procedure, ACH50 interpretation, what good KC home improvement looks like",
                  "Top bypass locations — top plates, recessed lights, HVAC penetrations, chimney chases, attic hatch",
                  "Insulation type guide — cellulose vs. fiberglass vs. open-cell vs. closed-cell, when each is appropriate",
                  "IRA credit section — 25C weatherization credit amount, qualifying work, annual cap, how to document",
                  "Assessment form with home age, square footage, current attic insulation depth, comfort complaint location",
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
                &ldquo;Every customer who called
                me had already added insulation
                and it hadn't worked. The
                website section on top plate
                bypasses and recessed light
                cans — with the explanation
                of how stack effect pulls
                air through those gaps regardless
                of how much blown-in you
                add on top — was the single
                piece of content that converted
                skeptical homeowners. They
                arrived understanding why
                air sealing had to happen
                before or alongside the
                insulation, not after. The
                blower door section also
                differentiated me from
                every insulation company
                that just adds inches without
                measuring before and after.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Patel, home performance and insulation, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An air sealing site with bypass location guide,
                blower door section, and assessment form starts
                at $200. A full site with insulation type guide,
                IRA credit section, and stack effect explainer
                is $425–$750. One attic air sealing and insulation
                project covers the cost. No contracts, no monthly fees.
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
