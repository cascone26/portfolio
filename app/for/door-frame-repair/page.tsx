import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Door Frame Repair Companies in Kansas City",
  description:
    "Custom websites for door frame repair, wood rot door frame, and exterior door repair companies in the Kansas City area. Show your KC wood rot in door frames from moisture cycling, door frame plumb and level requirements for weatherstripping seal, and rotted sill replacement for KC exterior doors to win door frame repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/door-frame-repair",
  },
};

export default function DoorFrameRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Door Frame Repair Companies in Kansas City",
    description: "Custom websites for door frame repair and exterior door wood rot companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Door Frame Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their exterior door frame is soft and spongy at the bottom, whether the rot goes into the structural framing, and whether the door needs to be replaced along with the frame. A website that explains door frame repair earns the call from the KC homeowner who found rot at the sill and wants to understand what a proper repair involves. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Door Frame Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Door Frame Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Door frame repair
              customers are
              KC homeowners
              who discovered
              soft, spongy,
              or discolored
              wood at the
              bottom of an
              exterior door
              frame — the
              result of water
              infiltrating
              behind the
              door casing,
              under the
              door sill,
              or through
              failed caulk
              at the frame-to-siding
              junction and
              remaining in
              contact with
              the untreated
              pine or fir
              lumber used
              in most KC
              wood-frame
              home door rough
              openings; the
              wood rot organism
              Serpula lacrymans
              and related
              brown rot fungi
              require sustained
              moisture above
              twenty percent
              wood moisture
              content to
              colonize, which
              occurs in a
              KC exterior
              door frame
              where caulk
              has failed,
              where a door
              sill lacks
              a drip edge,
              or where grade
              is too close
              to the threshold
              and splash-back
              from KC rain
              events continuously
              wets the bottom
              frame; homeowners
              whose door
              is difficult
              to latch, sticks
              in summer humidity,
              or has a gap
              at the top
              corner and
              who want to
              understand
              whether the
              frame has moved
              out of plumb
              and level and
              what that means
              for weatherstripping
              performance;
              or homeowners
              who found rot
              at the sill
              and want to
              understand
              whether the
              rot has progressed
              into the structural
              king stud,
              jack stud,
              or sill plate
              that forms
              the rough opening
              framing in
              their KC home.
              The central
              education is
              door frame
              rot as a moisture
              infiltration
              diagnostic —
              the rot location
              identifies
              the entry point:
              rot at the
              door sill and
              bottom jamb
              indicates either
              a failed sill
              pan that allowed
              water to pool
              under the threshold,
              grade too close
              to the door
              allowing splash-back,
              or a missing
              door sill drip
              edge that directed
              rainwater into
              the frame joint
              rather than
              away from it;
              rot at the
              top corners
              of the frame
              indicates a
              failed head
              flashing or
              flashing-to-casing
              caulk that
              allowed water
              to track down
              behind the
              casing; identifying
              and correcting
              the water entry
              point is as
              important as
              the wood replacement
              itself — installing
              new frame lumber
              without correcting
              the moisture
              source will
              result in rot
              returning in
              the same location
              within three
              to five years;
              structural
              framing assessment
              as the second
              critical step —
              the door casing
              and jamb are
              finish carpentry
              elements that
              can be replaced
              with exterior-rated
              cellular PVC
              or finger-jointed
              pine treated
              with water-repellent
              primer; the
              king stud,
              jack stud,
              and rough sill
              plate that
              frame the opening
              are structural
              and if rot
              has progressed
              into these
              members, a
              sistered replacement
              stud or new
              sill plate
              is required
              before the
              door can be
              re-hung level
              and plumb.
              KC door frame
              rot patterns
              and repair
              scope: Kansas
              City thirty-eight
              to forty-two
              inches of annual
              rainfall and
              the freeze-thaw
              cycling that
              causes caulk
              to crack and
              peel at exterior
              joints creates
              conditions
              where exterior
              door frame
              wood rot is
              common in
              homes more
              than twenty
              years old where
              the original
              caulk and flashing
              have not been
              maintained;
              a door sill
              drip edge —
              a metal or
              vinyl cap that
              directs water
              away from the
              threshold and
              frame joint —
              is the most
              important water
              management
              detail for
              a KC exterior
              door; exterior-grade
              cellular PVC
              door casing
              and jamb material
              does not absorb
              water and is
              the correct
              replacement
              material for
              KC exterior
              door frames
              in locations
              where wood
              rot has occurred;
              door plumb
              and level after
              repair determines
              whether the
              weatherstripping
              compresses evenly
              around the
              full perimeter —
              a door that
              is racked
              out of square
              will have a
              gap at one
              corner where
              the weatherstrip
              does not contact
              the frame and
              the door will
              be difficult
              to lock. A
              door frame
              repair website
              that explains
              KC moisture
              infiltration
              patterns and
              rot location
              as a diagnostic
              tool, structural
              vs. finish
              carpentry scope
              assessment,
              and cellular
              PVC as the
              replacement
              material that
              does not rot
              in KC climate
              earns the homeowner
              who found soft
              wood at the
              sill and wants
              to understand
              what a proper
              repair involves.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before door frame repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rot location diagnosis — sill rot = sill pan failure or grade splash-back, top corner rot = head flashing failure",
                  "Structural vs. finish scope — king stud/jack stud/sill plate vs. jamb/casing, sistering requirement for structural rot",
                  "Water source correction — drip edge, caulk recaulking, grade adjustment, flashing repair before lumber replacement",
                  "Cellular PVC material — no water absorption, correct KC exterior replacement vs. untreated pine, rot resistance",
                  "Door plumb and level — weatherstripping contact, gap at corners, latch engagement, how rot-caused movement is measured",
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
                What your door frame repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rot diagnosis section — location-to-source mapping, moisture meter assessment, structural framing probe test",
                  "Water source section — sill pan, drip edge, head flashing, grade height — fix source before replacing lumber",
                  "Material section — cellular PVC vs. wood jamb/casing, exterior primer importance, KC climate durability comparison",
                  "Structural scope section — finish carpentry vs. rough framing, sistering process, inspection without full frame removal",
                  "Door alignment section — plumb, level, square checks, weatherstripping gap correction, latch strike adjustment",
                  "Quote form with door location, rot extent, door age, current symptom (sticking/gap/soft wood), siding type",
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
                &ldquo;The water source
                section eliminates
                the repeat customer
                problem. KC homeowners
                who had a door
                frame replaced
                by someone else
                five years ago
                call us because
                the rot is
                back — the
                previous repair
                replaced the
                lumber without
                fixing the
                missing drip
                edge or the
                failed flashing
                that caused
                the rot in
                the first place.
                After the section
                went up explaining
                that replacing
                rotted wood
                without correcting
                the moisture
                source is a
                temporary fix,
                customers started
                asking what
                the source
                was before
                they approved
                the repair.
                The structural
                scope section
                also handles
                the cost shock —
                KC homeowners
                who see a
                quote that
                includes sistered
                studs don&apos;t
                understand
                why until
                the section
                explains what
                the king stud
                does in a
                door rough
                opening.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Chambers, door frame repair and exterior carpentry, Mission, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A door frame repair site with rot diagnosis section, water source
                guide, and quote form starts at $200. A full site with structural
                scope, PVC material comparison, and door alignment content is
                $425–$750. One door repair job covers the cost. No contracts, no monthly fees.
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
