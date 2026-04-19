import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Stucco Repair Companies in Kansas City",
  description:
    "Custom websites for stucco repair, stucco crack repair, and exterior stucco patching companies in the Kansas City area. Show your KC freeze-thaw stucco delamination, three-coat vs. EIFS stucco system differences, and water entry behind cracked stucco to win stucco repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/stucco-repair",
  },
};

export default function StuccoRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Stucco Repair Companies in Kansas City",
    description: "Custom websites for stucco repair and exterior stucco patching companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Stucco Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the cracks in their stucco are normal hairlines or signs of a bigger problem, whether a patch will match the existing texture and color, and what happens to the framing behind the stucco when a crack allows water in. A website that explains stucco repair earns the eave-to-foundation call before a surface crack becomes a rotted sheathing replacement. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Stucco Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Stucco Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Stucco repair customers
              are KC homeowners
              who see cracks, spalling,
              or areas of hollow-sounding
              stucco on their exterior —
              typically on homes
              built between 1920
              and 1960 with traditional
              three-coat portland
              cement stucco over
              wood or metal lath,
              or on homes built
              between 1980 and
              2005 with EIFS (exterior
              insulation and finish
              system) that has
              a synthetic stucco
              finish coat; homeowners
              who see water staining
              on interior walls
              or ceiling surfaces
              adjacent to exterior
              stucco sections after
              rain events — staining
              that indicates water
              is entering through
              cracked or delaminated
              stucco and reaching
              the framing or sheathing
              behind; or homeowners
              whose home inspection
              identified stucco
              cracks or delamination
              requiring repair
              before the sale closes.
              The central education
              is KC freeze-thaw
              stucco delamination
              mechanism, three-coat
              versus EIFS system
              differences in water
              management, and the
              path water takes
              from a surface stucco
              crack to the framing
              behind — three things
              that determine whether
              a homeowner understands
              why a visual surface
              crack that looks
              minor may have significant
              water damage behind
              it. KC freeze-thaw
              delamination: traditional
              portland cement stucco
              is a rigid material
              applied in three
              coats — scratch coat,
              brown coat, and finish
              coat — bonded to
              the substrate through
              a lath base; the
              assembly expands
              and contracts with
              temperature and moisture;
              KC experiences approximately
              one-hundred-degree
              annual temperature
              swing — the stucco
              system undergoes
              the full thermal
              range; where the
              bond between the
              finish coat and the
              brown coat — or
              between the stucco
              assembly and the
              lath — weakens from
              age or moisture infiltration,
              freeze-thaw cycling
              accelerates delamination;
              a delaminated section
              sounds hollow when
              tapped — the finish
              coat is no longer
              bonded to the layer
              below; water enters
              at cracks or at the
              delaminated edges
              and sits between
              the stucco layers
              or between the stucco
              and the sheathing,
              where it freezes
              and expands the gap
              further each winter.
              Three-coat versus
              EIFS: traditional
              three-coat stucco
              over lath is a barrier
              system — it relies
              on the stucco mass
              to resist water penetration;
              cracks in the stucco
              are the primary water
              entry point and must
              be sealed; EIFS is
              a drainage-plane
              system — it has a
              drainage layer between
              the foam board insulation
              and the sheathing
              that allows water
              that penetrates the
              finish coat to exit
              at the base of the
              wall; failed EIFS
              systems in KC homes
              built in the 1990s
              often failed at window
              and door penetrations
              where the drainage
              plane was not properly
              terminated and water
              accumulated at the
              rough opening framing
              — producing significant
              rot behind a finish
              coat that looked
              intact; EIFS repair
              is a different scope
              than three-coat repair
              because the drainage
              plane must be restored
              at any repaired section.
              Water path to framing:
              a stucco crack allows
              water to enter the
              assembly — the water
              moves laterally and
              downward behind the
              stucco rather than
              straight through;
              a crack at a window
              head that is one
              inch wide and two
              inches tall may have
              wetted an area of
              sheathing and framing
              four feet wide and
              two feet deep around
              the window rough
              opening; by the time
              the interior wall
              stains, the framing
              has been wet through
              multiple rain events;
              a stucco repair that
              only seals the visible
              crack without assessing
              the sheathing and
              framing behind the
              affected section
              addresses the symptom
              and leaves the consequence.
              A stucco repair website
              that explains KC
              freeze-thaw delamination,
              the three-coat versus
              EIFS system and drainage
              plane difference,
              and how water moves
              laterally behind
              a surface crack earns
              the homeowner who
              wants to understand
              whether the crack
              they are looking
              at is a paint-and-patch
              job or a sheathing
              replacement.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before stucco repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC freeze-thaw delamination — 100°F annual swing, hollow-sound test, water between layers accelerates separation each winter",
                  "Three-coat vs. EIFS — barrier system vs. drainage plane, EIFS window termination failure, drainage plane restoration at repairs",
                  "Water path behind crack — lateral spread behind stucco, window head crack wets 4-foot-wide framing area",
                  "Sheathing assessment — by the time interior stains, framing has been wet through multiple events",
                  "Texture and color match — integral color vs. painted finish coat, batch variation, blending technique for KC sun-exposed stucco",
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
                What your stucco repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Delamination section — hollow-sound test, freeze-thaw gap expansion, three-coat bond failure timeline in KC climate",
                  "System section — three-coat barrier vs. EIFS drainage plane, why EIFS repair restores drainage layer not just finish",
                  "Water path section — lateral spread behind crack, window and door penetration risk areas, sheathing assessment scope",
                  "Repair scope section — crack seal only vs. cut-out and re-lath vs. sheathing replacement decision tree",
                  "Match section — integral vs. painted finish, texture replication, how sun exposure affects color match on KC south faces",
                  "Quote form with system type (traditional/EIFS), crack location, interior staining, window proximity, hollow sound present",
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
                &ldquo;The water path section
                changed how customers
                understood the scope.
                KC homeowners with
                a crack near a window
                would call expecting
                a quick surface patch.
                After the section
                went up explaining
                that water enters
                at the crack and
                moves laterally to
                wet the framing around
                the window opening,
                customers arrived
                at the site visit
                asking whether we
                needed to open the
                wall to check the
                framing. That is
                the right question —
                and the answer is
                usually yes at cracks
                within six inches
                of a window. The
                EIFS section also
                saved a lot of back-and-forth
                on scope — KC homeowners
                with 1990s EIFS who
                were told the drainage
                plane needed to be
                restored understood
                why a surface patch
                was not the right
                repair and approved
                the full scope without
                looking for a cheaper
                alternative.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Whitaker, stucco repair and exterior restoration, Weston, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A stucco repair site with freeze-thaw delamination section, three-coat
                vs. EIFS guide, and quote form starts at $200. A full site with water
                path to framing, sheathing assessment scope, and texture match content
                is $425–$750. One stucco repair job covers the cost. No contracts, no
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
