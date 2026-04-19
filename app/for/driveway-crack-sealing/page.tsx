import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Driveway Crack Sealing Companies in Kansas City",
  description:
    "Custom websites for driveway crack sealing, crack repair, and asphalt maintenance companies in the Kansas City area. Show your KC freeze-thaw crack routing, cold-pour vs. hot-pour filler selection, and base failure assessment to win driveway crack sealing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/driveway-crack-sealing",
  },
};

export default function DrivewayCrackSealingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Driveway Crack Sealing Companies in Kansas City",
    description: "Custom websites for driveway crack sealing and asphalt maintenance companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Driveway Crack Sealing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their driveway cracks are surface cracks or base failure, why cold-pour crack filler from a home center fails after one KC winter, and whether sealing over existing cracks will hold. A website that explains crack routing and hot-pour filler earns the annual maintenance call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Driveway Crack Sealing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Driveway Crack Sealing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Driveway crack sealing
              customers are KC homeowners
              with asphalt driveways
              that have developed
              cracks ranging from
              hairline surface fractures
              to half-inch or wider
              working cracks that
              open and close with
              KC freeze-thaw cycles;
              homeowners who tried
              a cold-pour crack
              filler from a home
              center and watched
              it shrink, crack,
              and fall out of the
              joint in the first
              KC winter; or homeowners
              preparing for a seal
              coat and discovering
              that the sealer company
              requires cracks to
              be filled first.
              The central education
              is crack routing
              and why it matters:
              most asphalt cracks
              in KC residential
              driveways are working
              cracks — they have
              a width that changes
              seasonally as the
              asphalt expands in
              summer heat and
              contracts in winter
              cold; a working crack
              in a Kansas City
              driveway can open
              and close by an
              eighth of an inch
              across the annual
              temperature range;
              crack routing —
              cutting the crack
              wider and deeper
              with a crack router
              or saw to create
              a uniform channel
              with clean vertical
              faces — prepares
              the crack for a
              flexible filler
              that can accommodate
              this movement; without
              routing, the crack
              faces are irregular,
              contaminated with
              loose asphalt and
              oxidized material,
              and the filler
              bonds to a jagged
              surface that breaks
              free under the
              first freeze-thaw
              cycle. Hot-pour
              crack filler: the
              correct material
              for a routed working
              crack in KC is
              a hot-applied
              rubberized crack
              filler — CRAFCO
              SS1 or equivalent —
              heated to three
              hundred fifty to
              four hundred degrees
              and poured into
              the routed channel;
              as the filler
              cools it bonds
              to the clean routed
              faces and forms
              a flexible rubber
              plug that stretches
              and compresses
              with the working
              crack through
              KC temperature
              cycles without
              breaking adhesion;
              service life of
              a properly routed
              and hot-poured
              crack is five
              to eight years
              before the filler
              degrades enough
              to require replacement.
              Cold-pour crack
              filler: the squeeze-bottle
              crack fillers sold
              at home centers
              are cold-applied
              emulsion or water-based
              products that do
              not achieve the
              same bond strength
              as hot-pour and
              do not have the
              elasticity to
              accommodate a
              working crack —
              they are suitable
              for hairline cracks
              less than one-eighth
              inch wide that
              are not actively
              cycling; applied
              in a working crack
              they fail within
              one to two KC
              freeze-thaw seasons.
              Base failure vs.
              surface cracking:
              alligator cracking —
              interconnected
              crack pattern resembling
              alligator skin —
              indicates base
              failure from moisture
              infiltration, freeze-thaw
              heaving of the
              KC clay subgrade,
              or traffic loading
              beyond the base
              design; alligator
              cracking cannot
              be corrected with
              crack sealing —
              the asphalt section
              must be removed
              and the base repaired
              or replaced; a
              driveway crack
              sealing website
              that explains this
              distinction prevents
              a homeowner from
              spending money
              on crack sealing
              a base-failure
              section and then
              being disappointed
              when it fails
              again in the
              same season.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before driveway crack sealing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Working cracks vs. hairline — KC seasonal movement, how much cracks open and close annually, routing need",
                  "Crack routing — why routing before filling matters, what clean crack faces do for filler adhesion",
                  "Hot-pour vs. cold-pour filler — elasticity difference, why cold-pour fails in KC winters, service life comparison",
                  "Alligator cracking — what it indicates about base condition, why sealing alligator cracking doesn't hold",
                  "Crack sealing before seal coat — why filled cracks accept sealer better, recommended prep sequence",
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
                What your driveway crack sealing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Crack routing section — why routing is required for working cracks, what a routed channel looks like, KC movement range",
                  "Hot-pour filler section — CRAFCO SS1 or equivalent, application temperature, elasticity, service life in KC climate",
                  "Cold-pour context — what it's suitable for, why working cracks require hot-pour, failure timeline",
                  "Alligator crack assessment — base failure signs, what repair actually requires, honest conversation on cost",
                  "Seal coat prep section — crack fill timing before sealer, dry time, full driveway maintenance sequence",
                  "Quote form with driveway age, crack width and pattern, previous sealing history, seal coat planned",
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
                &ldquo;The hot-pour section
                is what stops the
                price comparison to
                a home-center squeeze
                bottle. KC homeowners
                with a working crack
                were quoting me against
                a $6 tube they picked
                up at the hardware store.
                After the section went
                up explaining that cold-pour
                products don&apos;t have
                the elasticity to survive
                KC freeze-thaw movement,
                customers started asking
                whether I was using hot-pour
                before I even mentioned
                it. The alligator crack
                section also saves me
                from losing a customer
                — homeowners with base
                failure need to know
                before I quote that
                crack sealing won&apos;t
                fix the underlying issue,
                not after I do the work
                and it fails again.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Haverford, driveway sealing and crack repair, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A driveway crack sealing site with crack routing section, hot-pour
                filler guide, and quote form starts at $200. A full site with
                base failure assessment, alligator crack explanation, and seal
                coat prep guide is $425–$750. One driveway maintenance job covers
                the cost. No contracts, no monthly fees.
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
