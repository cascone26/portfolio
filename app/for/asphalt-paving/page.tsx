import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Asphalt Paving Companies in Kansas City",
  description:
    "Custom websites for asphalt paving, asphalt driveway installation, and asphalt repair companies in the Kansas City area. Show your KC clay subgrade preparation for asphalt longevity, hot mix asphalt thickness for KC residential driveways, and proper compaction requirements to win asphalt paving contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/asphalt-paving",
  },
};

export default function AsphaltPavingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Asphalt Paving Companies in Kansas City",
    description: "Custom websites for asphalt paving and asphalt driveway installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Asphalt Paving Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their asphalt driveway cracked after five years, what thickness is correct for a Kansas City residential driveway, and whether the price difference between low bids and high bids comes down to the base or the asphalt itself. A website that explains asphalt paving earns the call from the homeowner who wants a driveway that doesn't crack before their truck payment is done. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Asphalt Paving in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Asphalt Paving</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Asphalt paving
              customers are KC
              homeowners who
              are replacing
              a failed driveway —
              one with longitudinal
              or alligator
              cracking that
              indicates subgrade
              failure from
              KC clay movement
              beneath an
              undersized base
              — or who are
              adding a new
              asphalt driveway
              to a home that
              currently has
              a gravel or
              no defined surface;
              homeowners who
              received multiple
              paving bids
              and cannot
              reconcile the
              price difference —
              the difference
              between a three-inch
              asphalt installation
              with six inches
              of aggregate
              base and a
              two-inch installation
              with no base
              preparation is
              the difference
              between a driveway
              that lasts
              twenty years
              and one that
              cracks in five;
              or homeowners
              who want to
              understand the
              maintenance
              sequence — sealing,
              crack filling,
              and eventual
              overlay or
              removal and
              replacement —
              that extends
              asphalt service
              life in KC
              conditions.
              The central
              education is
              KC clay subgrade
              as the primary
              failure driver
              beneath asphalt,
              hot mix asphalt
              thickness and
              aggregate base
              depth for a
              KC residential
              driveway, and
              compaction as
              the installation
              variable that
              determines whether
              the layers
              perform as
              specified —
              three things
              that determine
              whether a homeowner
              understands
              why a correctly
              installed KC
              asphalt driveway
              costs more
              and lasts significantly
              longer. KC clay
              subgrade failure:
              Kansas City
              clay soils —
              Kansas City
              and Grundy
              series — have
              a California
              Bearing Ratio
              of approximately
              three to six
              percent in
              their natural
              state, which
              is classified
              as a poor
              to fair subgrade
              for paving;
              the same shrink-swell
              behavior that
              moves paver
              patios moves
              asphalt — the
              clay absorbs
              moisture in
              spring and
              expands upward,
              then dries and
              contracts in
              summer; asphalt
              over a thin
              or non-existent
              aggregate base
              follows the
              clay movement
              and develops
              longitudinal
              cracks at the
              surface within
              three to seven
              KC seasonal
              cycles; alligator
              cracking —
              the interconnected
              crack pattern
              that resembles
              alligator skin —
              is the signature
              of subgrade
              failure, not
              asphalt surface
              fatigue, and
              indicates that
              overlay will
              not solve the
              problem; the
              only repair
              for alligator
              cracking from
              subgrade failure
              is removal
              and replacement
              with correct
              base preparation.
              Thickness and
              base requirements:
              a KC residential
              driveway requires
              a minimum of
              six inches
              of compacted
              aggregate base —
              typically crushed
              limestone —
              over prepared
              subgrade; the
              aggregate base
              provides drainage,
              distributes
              load, and creates
              a stable platform
              that is not
              subject to
              the frost heave
              and clay movement
              of the native
              soil; the hot
              mix asphalt
              layer for a
              residential
              KC driveway
              should be
              a minimum of
              two and one-half
              to three inches
              compacted depth;
              a two-inch
              asphalt layer
              over inadequate
              base is the
              primary cause
              of early driveway
              failure in
              KC; the difference
              in material
              cost between
              a two-inch
              and a three-inch
              asphalt layer
              is approximately
              fifty percent
              of the asphalt
              material cost —
              a difference
              that extends
              service life
              by five to
              ten years.
              Compaction requirement:
              asphalt must
              be compacted
              to at least
              ninety-two
              to ninety-five
              percent density
              immediately
              after installation —
              the mat cools
              quickly and
              the compaction
              window in
              KC summer temperatures
              is approximately
              fifteen to
              twenty minutes
              from placement;
              a crew that
              paves a large
              area without
              adequate roller
              coverage cannot
              achieve proper
              compaction;
              under-compacted
              asphalt has
              a higher void
              content that
              allows water
              infiltration,
              frost damage,
              and premature
              raveling; an
              asphalt project
              bid that does
              not specify
              a roller pass
              count or compaction
              target is
              not specifying
              the most important
              installation
              variable. An
              asphalt paving
              website that
              explains KC
              clay subgrade
              as the failure
              driver, aggregate
              base depth
              and asphalt
              thickness requirements,
              and compaction
              as the installation
              variable earns
              the homeowner
              comparing bids
              who wants to
              understand what
              the price difference
              actually represents.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before asphalt paving
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay subgrade — CBR 3-6%, shrink-swell failure under thin base, alligator cracking as subgrade failure signature",
                  "Base depth requirement — 6-inch compacted aggregate limestone, drainage and load distribution function",
                  "Asphalt thickness — 2.5-3 inch minimum compacted depth, 50% material cost difference for extra inch",
                  "Compaction window — 15-20 minute KC summer placement window, 92-95% density target, under-compaction void content",
                  "Alligator cracking diagnosis — subgrade failure vs. surface fatigue, why overlay fails on alligator pattern",
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
                What your asphalt paving website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay section — CBR classification, shrink-swell mechanism, how clay movement transfers to asphalt surface",
                  "Base preparation section — 6-inch aggregate requirement, compacted limestone lifts, subgrade stabilization option",
                  "Asphalt thickness section — 3-inch specification, cost vs. service life tradeoff, bid specification checklist",
                  "Compaction section — density target, KC placement window, roller coverage requirement, raveling from under-compaction",
                  "Failure diagnosis section — alligator vs. linear cracking, when overlay is appropriate vs. when removal is required",
                  "Quote form with driveway dimensions, existing surface condition, crack pattern, drainage slope, bid comparison",
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
                &ldquo;The base section
                wins the bid
                comparison the
                same way it
                does for paver
                patios. KC homeowners
                get a three-thousand-dollar
                bid and a
                five-thousand-dollar
                bid and think
                the difference
                is profit margin.
                After the section
                went up explaining
                that the low
                bid is two
                inches of asphalt
                over native
                clay and the
                higher bid
                is three inches
                over six inches
                of crushed
                limestone, customers
                started asking
                every bidder
                what base depth
                they were specifying.
                Once they ask
                that question,
                the contractor
                who can&apos;t answer
                it loses the
                bid. The alligator
                cracking section
                also converts
                repair inquiries
                into replacement
                jobs — KC homeowners
                who see their
                driveway cracking
                and think they
                need a patch
                understand after
                reading the
                page that what
                they have is
                a subgrade failure
                that can&apos;t be
                patched.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Galloway, asphalt paving and driveway installation, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An asphalt paving site with KC clay subgrade section, base depth and
                thickness guide, and quote form starts at $200. A full site with
                compaction requirements, alligator crack diagnosis, and bid comparison
                content is $425–$750. One driveway installation covers the cost.
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
