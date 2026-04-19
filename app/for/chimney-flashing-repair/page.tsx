import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Chimney Flashing Repair Companies in Kansas City",
  description:
    "Custom websites for chimney flashing repair, chimney leak repair, and chimney step flashing companies in the Kansas City area. Show your KC freeze-thaw mortar joint failure, step flashing vs. counter flashing system, and caulk-only repair failure to win chimney flashing repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/chimney-flashing-repair",
  },
};

export default function ChimneyFlashingRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Chimney Flashing Repair Companies in Kansas City",
    description: "Custom websites for chimney flashing repair and chimney leak repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Chimney Flashing Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the water stain on the ceiling near the fireplace is from the chimney flashing or the chimney crown, why the roofer who patched it last year didn't fix it, and what the difference is between a caulk repair and a flashing replacement. A website that explains chimney flashing repair earns the call before a homeowner pays for a third caulk job that won't last. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Chimney Flashing Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Chimney Flashing Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Chimney flashing repair
              customers are KC homeowners
              who see water staining
              on the ceiling below
              the roofline near
              the fireplace or on
              the attic framing
              at the chimney penetration —
              staining that appears
              or worsens after
              rain events and indicates
              that water is entering
              at the joint between
              the chimney masonry
              and the roof surface;
              homeowners who have
              had a roofer caulk
              the chimney flashing
              once or more but
              continue to see water
              entry after KC storm
              events — a pattern
              that indicates the
              flashing system itself
              has failed and requires
              replacement rather
              than additional caulk;
              or homeowners whose
              home inspection identified
              chimney flashing
              as missing, improperly
              installed, or allowing
              water entry. The
              central education
              is KC freeze-thaw
              mortar joint failure
              at counter flashing,
              the step flashing
              and counter flashing
              system and how it
              works, and caulk-only
              repair failure —
              three things that
              determine whether
              a homeowner understands
              why the chimney
              has leaked through
              three roofer visits
              and why the correct
              repair is a flashing
              replacement. KC
              freeze-thaw mortar
              failure: chimney
              counter flashing
              — the upper piece
              of flashing that
              is bent ninety degrees
              and inserted into
              a horizontal mortar
              joint in the chimney
              brick — is locked
              in the mortar joint
              and sealed with
              the mortar itself;
              KC freeze-thaw cycles
              expand and contract
              the chimney masonry
              annually; the mortar
              joint that holds
              the counter flashing
              is subject to the
              same freeze-thaw
              deterioration as
              all chimney mortar;
              after fifteen to
              twenty-five years,
              the mortar at the
              counter flashing
              chase — the horizontal
              cut — cracks and
              opens, allowing
              the counter flashing
              to pull away from
              the masonry at
              the top; water
              then enters through
              the opening between
              the flashing and
              the chimney face
              and runs down behind
              the step flashing
              into the roof deck.
              Step and counter
              flashing system:
              chimney flashing
              is a two-piece system —
              step flashing and
              counter flashing;
              step flashing consists
              of individual L-shaped
              metal pieces woven
              into the shingle
              courses at the
              sides of the chimney —
              each piece overlaps
              the one below by
              two inches and directs
              water away from
              the chimney-to-roof
              joint; counter flashing
              is the continuous
              piece that covers
              the top of the
              step flashing run
              and is embedded
              in the mortar joint
              to seal the top
              edge; a caulk-only
              repair applies
              sealant over the
              existing visible
              gap without correcting
              the underlying counter
              flashing separation
              from the mortar
              chase — in KC,
              the caulk is subject
              to the same one-hundred-degree
              temperature swing
              and typically fails
              within two to four
              years; a proper
              flashing replacement
              removes the old
              counter flashing,
              recuts or repairs
              the mortar chase,
              installs new counter
              flashing embedded
              in fresh mortar
              or lead wedge,
              and overlaps new
              step flashing into
              the existing shingle
              courses where step
              flashing is sound.
              Caulk-only repair
              failure: the pattern
              that homeowners
              experience — repeated
              roofer caulk jobs
              that hold for one
              or two seasons and
              then leak again —
              is predictable from
              the caulk service
              life in KC exposure
              conditions; a chimney
              flashing caulk joint
              on the south or
              west exposure is
              in direct sunlight
              for six to eight
              hours per day and
              experiences the
              full temperature
              swing from summer
              high to winter low;
              the service life
              of caulk in this
              location is two
              to four years —
              shorter than the
              useful life the
              homeowner expects;
              a roofer who offers
              only caulk at a
              chimney flashing
              call is offering
              maintenance, not
              repair; a homeowner
              who has paid for
              three caulk jobs
              has paid more than
              a flashing replacement
              would have cost
              at the first visit.
              A chimney flashing
              repair website
              that explains KC
              mortar joint freeze-thaw
              failure at the
              counter flashing
              chase, the two-piece
              flashing system
              and why caulk does
              not replace it,
              and the caulk service
              life in KC sun
              exposure earns
              the homeowner who
              is done paying for
              patches that don&apos;t
              last.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before chimney flashing repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Mortar joint failure — KC freeze-thaw cracking at counter flashing chase, counter flashing pulls away from masonry",
                  "Step vs. counter flashing — two-piece system function, each piece role, what caulk repairs vs. what it doesn't",
                  "Caulk failure timeline — 2-4 year service life in KC sun exposure, why repeated caulk jobs don't fix the system",
                  "Water entry location — staining near fireplace ceiling, attic framing at chimney, staining worsens after rain",
                  "Flashing replacement scope — mortar chase recut, new counter flashing embedded in mortar, step flashing woven into shingles",
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
                What your chimney flashing repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Mortar joint section — freeze-thaw failure at counter flashing chase, 15-25 year timeline, separation from masonry",
                  "Two-piece system section — step and counter flashing function, how they work together, what each does",
                  "Caulk failure section — 2-4 year service life, why caulk is maintenance not repair, cost of repeated caulk vs. replacement",
                  "Replacement scope — mortar chase repair, counter flashing installation method, step flashing assessment",
                  "Water source diagnosis — crown vs. flashing vs. mortar joint — what each leak pattern indicates",
                  "Quote form with chimney location/exposure, leak history, prior repairs attempted, water stain location, timeline",
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
                &ldquo;The caulk failure section
                converted the frustrated
                customers. KC homeowners
                who had paid two
                or three roofers
                to caulk their chimney
                over five years
                would call angry
                and suspicious before
                they even told me
                the problem. After
                the section went
                up explaining that
                caulk at a chimney
                flashing chase on
                a south-facing KC
                roof has a two-to-four-year
                service life and
                that repeated caulk
                jobs are not addressing
                the counter flashing
                pull-away from the
                mortar chase, customers
                arrived at the site
                visit understanding
                why every previous
                repair failed and
                what the actual
                fix was. Those are
                the customers who
                approve the flashing
                replacement without
                price objection
                because they&apos;ve
                already paid more
                than the replacement
                costs.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Kowalczyk, roofing and chimney flashing repair, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A chimney flashing repair site with mortar joint failure section,
                step and counter flashing guide, and quote form starts at $200. A
                full site with caulk failure timeline, replacement scope, and water
                source diagnosis content is $425–$750. One flashing replacement job
                covers the cost. No contracts, no monthly fees.
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
