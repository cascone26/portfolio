import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Exterior Basement Waterproofing Companies in Kansas City",
  description:
    "Custom websites for exterior basement waterproofing, foundation drainage, and negative-side waterproofing companies in the Kansas City area. Show your membrane types, footing drain systems, and when exterior vs. interior waterproofing is appropriate to win contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/basement-waterproofing-exterior",
  },
};

export default function BasementWaterproofingExteriorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Exterior Basement Waterproofing Companies in Kansas City",
    description: "Custom websites for exterior basement waterproofing and foundation drainage companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Exterior Basement Waterproofing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why interior drain tile systems don't stop water from entering the wall, when exterior excavation is worth the cost, and what membrane and drainage board actually do against hydrostatic pressure. A website that explains positive-side waterproofing and KC clay soil earns the excavation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Exterior Waterproofing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Exterior Basement Waterproofing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Exterior basement waterproofing
              customers are homeowners
              with active water
              intrusion through
              the foundation
              wall — not just
              dampness at the
              floor-wall joint —
              who have already
              tried an interior
              drain tile system
              and are still
              getting water
              through the wall
              itself, or homeowners
              with significant
              foundation cracks
              that cannot be
              sealed from inside
              under sustained
              hydrostatic pressure.
              The central education
              is the difference
              between positive-side
              and negative-side
              waterproofing:
              negative-side (interior)
              systems intercept
              water that has
              already entered
              the wall and
              redirect it to
              a sump — they
              manage intrusion
              but do not stop
              water from contacting
              the foundation.
              Positive-side (exterior)
              waterproofing
              prevents water
              from ever reaching
              the foundation
              by applying a
              membrane to the
              exterior face
              of the wall,
              stopping hydrostatic
              pressure at
              the source. Membrane
              types: crystalline
              waterproofing
              compounds (Xypex,
              Krystol) penetrate
              into the concrete
              matrix and block
              water movement
              through capillary
              action — effective
              on sound concrete
              walls; asphalt
              emulsion (heavy-body
              damp-proofing,
              commonly used
              on new construction)
              bridges minor
              cracks but is
              not a true waterproofing
              membrane and
              cracks with
              foundation movement;
              sheet-applied
              waterproofing
              membranes (Tremco
              TREMproof, Carlisle
              CCW-705) are
              flexible rubberized
              asphalt or HDPE
              membranes that
              bridge cracks
              and resist KC's
              freeze-thaw cycling.
              Drainage board
              (dimple mat):
              a HDPE drainage
              board installed
              over the membrane
              creates a drainage
              plane between
              the membrane
              and the backfill —
              it intercepts
              water moving
              through the
              soil before it
              contacts the
              membrane, reducing
              hydrostatic pressure
              against the
              wall. KC clay
              soil: expansive
              clay retains
              water and can
              exert 500–2,000
              PSF lateral
              pressure against
              foundation walls —
              the combination
              of water pressure
              and clay expansion
              in KC's wet
              springs exceeds
              what interior
              systems alone
              can manage at
              heavily saturated
              sites. Footing
              drain (perimeter
              drain): a 4"
              perforated pipe
              installed at
              the footing
              elevation in
              washed stone,
              wrapped in filter
              fabric — channels
              groundwater away
              from the foundation
              and connects
              to a daylight
              outlet or sump.
              An exterior waterproofing
              website that
              explains positive-side
              vs. negative-side
              logic, when
              KC clay pressure
              exceeds interior
              system capacity,
              and what the
              membrane + drainage
              board system
              actually does
              earns the homeowner
              whose interior
              system has failed
              or who wants
              to solve the
              problem at its
              source.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before exterior basement waterproofing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Positive vs. negative side — why interior systems manage intrusion but don't stop water at the wall",
                  "Membrane types — crystalline vs. asphalt emulsion vs. sheet membrane, crack bridging, KC freeze-thaw",
                  "Drainage board — how dimple mat reduces hydrostatic pressure before it reaches the membrane",
                  "KC clay soil pressure — lateral pressure range, why wet springs overwhelm interior systems at saturated sites",
                  "Footing drain — perforated pipe at footing, filter fabric, daylight outlet vs. sump connection",
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
                What your exterior waterproofing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Positive vs. negative side explainer — what each approach does, when exterior is the correct solution",
                  "Membrane comparison — crystalline vs. sheet membrane, which performs in KC climate and clay soil movement",
                  "Drainage board section — how dimple mat works, pressure reduction, filter fabric and backfill requirements",
                  "KC clay soil section — expansion and water retention, lateral pressure numbers, wet spring failure mode",
                  "Footing drain section — installation depth, pipe spec, outlet options, connection to existing sump",
                  "Assessment form with water entry location, interior system history, foundation crack description, grade slope",
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
                &ldquo;My biggest problem was
                explaining to homeowners
                why their interior drain
                tile wasn't enough. They
                had already spent $8,000
                on interior work and were
                still getting water through
                the wall cracks. The website
                section on positive-side
                vs. negative-side — that
                interior systems manage
                intrusion but don't stop
                it — framed the conversation
                before I arrived. The KC
                clay soil pressure section
                also helped: customers
                understood why their wet
                spring was different from
                a dry summer leak pattern
                and why the membrane plus
                drainage board system
                is the complete solution.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — V. Castillo, exterior waterproofing, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An exterior waterproofing site with positive-side
                explainer, membrane comparison, and assessment
                form starts at $200. A full site with drainage
                board section, KC clay soil content, and footing
                drain guide is $425–$750. One exterior excavation
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
