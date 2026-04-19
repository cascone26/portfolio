import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Hardwood Floor Repair Companies in Kansas City",
  description:
    "Custom websites for hardwood floor repair, wood floor repair, and floor board replacement companies in the Kansas City area. Show your KC humidity expansion and cupping in hardwood floors, board replacement vs. refinishing for damaged KC hardwood, and stain matching for partial repairs to win hardwood floor repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hardwood-floor-repair",
  },
};

export default function HardwoodFloorRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Hardwood Floor Repair Companies in Kansas City",
    description: "Custom websites for hardwood floor repair and wood floor restoration companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Hardwood Floor Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their cupped or gapped hardwood floor can be repaired without full replacement, whether a few damaged boards can be replaced and matched to the existing floor, and whether squeaking or bouncing subfloor boards are a structural problem. A website that explains hardwood floor repair earns the call from the homeowner with water-damaged boards or cupping from a KC humidity problem. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Hardwood Floor Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Hardwood Floor Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Hardwood floor
              repair customers
              are KC homeowners
              whose solid
              hardwood floor
              has developed
              cupping — the
              concave-down
              distortion
              where board
              edges are higher
              than the center —
              caused by moisture
              absorption from
              below or differential
              humidity across
              the floor thickness
              in a KC home
              that cycles
              from dry winter
              to humid summer;
              homeowners with
              water-damaged
              boards from
              a leak, appliance
              failure, or
              pet damage
              who want to
              understand whether
              the damaged
              section can
              be replaced
              and matched
              to the existing
              floor without
              full replacement;
              or homeowners
              with squeaking
              floors who
              want to understand
              whether the
              squeak is from
              the hardwood
              surface boards
              moving against
              each other
              or from the
              subfloor underneath —
              and whether
              the repair
              is a surface
              fix or a subfloor
              problem. The
              central education
              is KC humidity
              cycling as
              the primary
              cause of cupping
              and gapping
              in hardwood
              floors — the
              mechanism where
              wood gains
              and loses moisture
              across a KC
              seasonal cycle
              and changes
              dimension — the
              difference between
              cupping from
              moisture and
              buckling from
              expansion without
              room to move,
              and the assessment
              criteria that
              determine whether
              a floor is
              a sand-and-refinish
              candidate, a
              board replacement
              candidate, or
              a full replacement —
              three things
              that determine
              whether a homeowner
              understands
              why their floor
              looks the way
              it does and
              what the correct
              repair is.
              KC humidity
              and hardwood
              floor movement:
              solid hardwood
              expands when
              it absorbs
              moisture and
              contracts when
              it dries —
              a two-and-one-quarter-inch
              strip of red
              oak with a
              five percent
              seasonal moisture
              content change
              moves approximately
              one-eighth
              to three-sixteenth
              inch across
              the grain;
              in a KC floor
              with fifty
              to eighty boards
              across the
              width of a
              room, that
              movement accumulates;
              cupping — edges
              higher than
              center — means
              the bottom
              face of the
              board is wetter
              than the top,
              typically from
              moisture entering
              from the subfloor
              side through
              a crawl space
              or basement
              humidity problem;
              crowning — center
              higher than
              edges — means
              the top face
              was wetted
              after the floor
              was sanded
              to correct
              cupping before
              the moisture
              fully equalized;
              gapping in
              KC winter is
              normal dimensional
              response to
              low indoor
              humidity — not
              a defect —
              and closes
              in spring;
              persistent or
              wide gaps in
              summer indicate
              boards that
              have lost moisture
              content permanently
              due to a past
              flooding or
              humidification
              problem. Board
              replacement
              and stain matching:
              replacing individual
              boards in an
              existing hardwood
              floor requires
              removing the
              damaged boards
              without damaging
              adjacent boards,
              sourcing replacement
              material that
              matches the
              species, width,
              thickness, and
              grade of the
              existing floor,
              face-nailing
              or gluing the
              new boards
              in place, and
              matching the
              stain, sealer,
              and finish
              system to the
              existing floor;
              stain matching
              on an existing
              floor that
              has aged is
              the primary
              challenge in
              a partial repair —
              UV oxidation
              and foot traffic
              change the
              floor color
              over years
              and a new
              board finished
              to the original
              specification
              will read lighter
              than the surrounding
              floor; a professional
              floor repair
              technician blends
              stain until
              the new boards
              read within
              an acceptable
              tolerance of
              the surrounding
              aged floor —
              a match that
              is visible
              up close but
              not from standing
              height is
              the realistic
              outcome of
              a partial repair
              on a well-aged
              KC floor. A
              hardwood floor
              repair website
              that explains
              KC humidity
              cycling as
              the cupping
              and gapping
              mechanism, the
              cupping vs.
              crowning vs.
              buckling distinction,
              and the stain
              matching process
              for partial
              board replacement
              earns the homeowner
              with a damaged
              floor who wants
              to understand
              whether repair
              or replacement
              is the right
              decision before
              requesting a
              bid.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hardwood floor repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC humidity and cupping — bottom-wet vs. top-dry cupping, moisture source identification, humidity equalization timeline",
                  "Cupping vs. crowning vs. buckling — diagnostic criteria, when sanding is appropriate vs. premature",
                  "Board replacement — species/width/grade matching, face nail vs. glue down, repair vs. full replacement threshold",
                  "Stain matching — UV oxidation of aged floor, blending technique, standing-height acceptable tolerance",
                  "Subfloor squeak repair — surface board vs. subfloor diagnosis, screw-from-above method, structural vs. cosmetic",
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
                What your hardwood floor repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC humidity section — seasonal wood movement, cupping mechanism from below, normal winter gapping vs. permanent damage",
                  "Damage assessment section — cupping vs. crowning vs. buckling, repair vs. full replacement criteria",
                  "Board replacement section — material sourcing, grain matching, face nail vs. blind nail vs. glue, finish system",
                  "Stain matching section — UV aging, blend technique, realistic outcome expectation for partial repairs",
                  "Squeak repair section — surface board vs. subfloor diagnosis, repair method by source location",
                  "Quote form with floor species, age, damage type/extent, previous repairs, subfloor type (slab vs. joist)",
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
                &ldquo;The cupping section
                is what stops
                the homeowner
                from sanding
                the floor before
                the moisture
                problem is
                fixed. KC homeowners
                whose floor
                is cupped from
                a crawl space
                or basement
                humidity issue
                sometimes call
                a floor company
                to sand it
                flat before
                the moisture
                source is addressed —
                and then it
                cups again
                in one season.
                After the section
                went up explaining
                that cupping
                is a moisture-source
                problem and
                sanding before
                equalization
                causes crowning,
                customers started
                asking about
                the humidity
                source before
                asking about
                the sanding
                schedule. The
                stain matching
                section also
                sets the right
                expectation —
                KC homeowners
                who understand
                that an aged
                floor won&apos;t
                be a perfect
                match after
                a partial repair
                stop asking
                for invisible
                results and
                start asking
                for standing-height
                acceptable.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Engel, hardwood floor repair and wood floor restoration, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A hardwood floor repair site with KC humidity cupping section, damage
                assessment guide, and quote form starts at $200. A full site with
                board replacement process, stain matching, and squeak repair content
                is $425–$750. One board replacement job covers the cost.
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
