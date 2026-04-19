import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Concrete Sidewalk Repair Companies in Kansas City",
  description:
    "Custom websites for concrete sidewalk repair, sidewalk leveling, and concrete lifting companies in the Kansas City area. Show your KC clay soil heave under sidewalk panels, mudjacking vs. polyurethane foam lifting for KC conditions, and trip hazard municipal liability to win concrete sidewalk repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/concrete-sidewalk-repair",
  },
};

export default function ConcreteSidewalkRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Concrete Sidewalk Repair Companies in Kansas City",
    description: "Custom websites for concrete sidewalk repair and sidewalk leveling companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Concrete Sidewalk Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners and property owners want to know whether a raised sidewalk panel needs full replacement or can be leveled, what the city requires when a panel is a trip hazard, and whether mudjacking or foam lifting is the right method for their situation. A website that explains concrete sidewalk repair earns the call from the property owner whose panel lifted two inches after the last frost cycle. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Concrete Sidewalk Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Concrete Sidewalk Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Concrete sidewalk
              repair customers
              are KC homeowners
              and commercial
              property owners
              who have one
              or more sidewalk
              panels that
              lifted, settled,
              or cracked over
              the KC freeze-thaw
              cycle — a panel
              displacement
              that creates
              a lip or trip
              hazard at the
              joint between
              adjacent panels;
              property owners
              who received
              a notice from
              their KC metro
              municipality
              requiring repair
              of a sidewalk
              trip hazard
              within a set
              time period
              — Kansas City,
              Overland Park,
              and Lenexa
              all have ordinances
              placing repair
              responsibility
              on the adjacent
              property owner
              for public sidewalk
              sections fronting
              their property;
              or property
              owners who
              want to understand
              whether a raised
              panel requires
              full removal
              and replacement
              or can be
              cost-effectively
              lifted back
              to grade using
              mudjacking or
              polyurethane
              foam injection.
              The central
              education is
              KC clay soil
              as the primary
              cause of sidewalk
              panel heave
              and settlement,
              the difference
              between mudjacking
              and polyurethane
              foam lifting
              as the two
              repair methods,
              and the municipal
              notice and
              liability framework
              that makes
              trip hazard
              repair urgent —
              three things
              that determine
              whether a property
              owner understands
              why the panel
              heaved, what
              method is appropriate,
              and what their
              exposure is
              if they delay.
              KC clay and
              sidewalk heave:
              sidewalk panels
              in KC are typically
              installed on
              a compacted
              base over native
              clay soil —
              the same high-shrink-swell
              Kansas City
              and Grundy
              clay that affects
              patio pavers,
              driveways, and
              foundations;
              the clay beneath
              sidewalk panels
              absorbs moisture
              from rain and
              surface drainage
              and expands
              upward against
              the underside
              of the panel;
              the expansion
              is uneven across
              a panel when
              tree roots,
              soil pockets,
              or drainage
              variations create
              differential
              moisture levels —
              one corner
              of a panel
              lifts more
              than the opposite
              corner and
              the panel tilts;
              the fifty to
              fifty-five KC
              freeze-thaw
              cycles per
              winter compound
              the movement
              — the clay
              freezes and
              expands, then
              thaws and contracts,
              repeating the
              heave cycle
              over multiple
              winters until
              the panel lip
              exceeds the
              municipal trip
              hazard threshold
              of three-quarters
              inch to one
              inch panel-to-panel
              differential.
              Mudjacking versus
              polyurethane:
              mudjacking injects
              a slurry of
              portland cement,
              soil, and water
              through holes
              drilled in
              the panel to
              fill voids
              beneath the
              concrete and
              lift it back
              to grade; the
              mudjacking slurry
              is heavy —
              approximately
              one hundred
              pounds per
              cubic foot —
              and does not
              compress the
              underlying clay;
              mudjacking is
              the lower-cost
              method per
              square foot
              and is appropriate
              for panels
              that have settled
              into voids
              rather than
              heaved from
              clay expansion;
              polyurethane
              foam injection
              uses two-component
              expanding foam
              injected through
              smaller holes
              to fill voids
              and lift the
              panel; the
              foam weighs
              approximately
              two to four
              pounds per
              cubic foot —
              substantially
              lighter than
              mudjacking material —
              and is appropriate
              where the goal
              is to avoid
              adding load
              to already-soft
              soil; both
              methods can
              achieve precise
              panel height
              adjustment
              and are faster
              and less expensive
              than full panel
              replacement
              when the panel
              concrete is
              structurally
              intact. Municipal
              trip hazard
              framework: Kansas
              City and most
              KC metro municipalities
              define a trip
              hazard as a
              vertical panel
              displacement
              of three-quarters
              inch or greater
              at a joint;
              adjacent property
              owners are
              responsible
              for the repair
              cost for public
              sidewalks fronting
              their property
              in most KC
              jurisdictions;
              a property
              owner who receives
              a notice has
              a defined repair
              window —
              typically thirty
              to ninety days —
              before the
              city repairs
              the sidewalk
              and bills the
              property owner
              at a higher
              than market
              rate; a property
              owner with
              an unrepaired
              trip hazard
              is also exposed
              to slip and
              fall liability.
              A concrete
              sidewalk repair
              website that
              explains KC
              clay soil heave
              mechanism, mudjacking
              versus foam
              as the two
              lifting methods,
              and municipal
              notice and
              liability framework
              earns the property
              owner with
              a heaved panel
              who wants to
              know what
              caused it,
              how to fix
              it, and how
              quickly they
              need to act.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What property owners research before concrete sidewalk repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay heave mechanism — shrink-swell clay, differential moisture, 50-55 freeze-thaw cycles compounding panel lift",
                  "Mudjacking vs. foam — slurry weight vs. foam weight, void fill vs. clay load difference, cost per square foot",
                  "Trip hazard threshold — 3/4-inch displacement, municipal notice trigger, property owner repair responsibility",
                  "Replacement vs. lifting — when panel is intact vs. cracked, when lifting is appropriate, cost differential",
                  "Municipal liability — notice window (30-90 days), city repair billing rate, slip and fall exposure",
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
                What your concrete sidewalk repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay section — shrink-swell cycle, freeze-thaw compounding, why panels heave instead of sink uniformly",
                  "Mudjacking section — injection process, slurry weight, appropriate conditions, cost vs. replacement",
                  "Foam injection section — two-component process, lightweight advantage, small hole diameter, precision lifting",
                  "Trip hazard section — 3/4-inch threshold, KC ordinance for adjacent property owners, notice window details",
                  "Replacement vs. lifting decision — panel cracking pattern, when lifting extends service life vs. when replacement is required",
                  "Quote form with panel count, displacement measurement, municipal notice received, tree roots present, panel cracking description",
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
                &ldquo;The municipal
                notice section
                is what converts
                the call immediately.
                KC property
                owners who get
                a city notice
                about their
                sidewalk are
                already motivated —
                they just don&apos;t
                know what their
                options are
                or how much
                time they have.
                After the section
                went up explaining
                the thirty-to-ninety-day
                repair window
                and that the
                city bills at
                a premium rate
                if they do
                it themselves,
                calls from
                notice recipients
                converted at
                a much higher
                rate — they
                knew the urgency
                and they knew
                lifting was
                cheaper than
                replacement.
                The clay heave
                explanation
                also wins the
                comparison bid —
                once customers
                understand that
                the panel heaved
                from clay movement
                and not a base
                failure, they
                understand why
                foam lifting
                holds and full
                replacement
                doesn&apos;t solve
                the underlying
                problem.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Albrecht, concrete lifting and sidewalk repair, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A concrete sidewalk repair site with KC clay heave section, mudjacking
                vs. foam guide, and quote form starts at $200. A full site with
                municipal notice framework, trip hazard liability, and replacement vs.
                lifting decision content is $425–$750. One sidewalk lifting job covers
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
