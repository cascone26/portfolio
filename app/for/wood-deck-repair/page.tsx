import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Wood Deck Repair Companies in Kansas City",
  description:
    "Custom websites for wood deck repair, deck board replacement, and deck restoration companies in the Kansas City area. Show your KC 110°F temperature swing wood deck movement and fastener loosening, ledger board moisture failure as the structural failure point, and composite vs. pressure-treated deck board comparison for KC conditions to win wood deck repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/wood-deck-repair",
  },
};

export default function WoodDeckRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Wood Deck Repair Companies in Kansas City",
    description: "Custom websites for wood deck repair and deck board replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Wood Deck Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their deck boards need replacement or just sanding and sealing, whether the ledger board is safe, and whether composite decking is actually worth the premium over pressure-treated pine for a Kansas City deck. A website that explains wood deck repair earns the call from the homeowner whose deck has splintering boards and loose fasteners after a few KC winters. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Wood Deck Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Wood Deck Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Wood deck repair
              customers are KC
              homeowners whose
              pressure-treated
              deck boards are
              splitting, cupping,
              checking, or
              pulling loose
              at the fasteners —
              surface deterioration
              patterns that
              develop over
              seven to twelve
              years in KC
              conditions and
              indicate that
              the decking
              boards need
              replacement while
              the structural
              framing may
              still be sound;
              homeowners who
              notice soft
              spots in the
              deck surface
              near the ledger
              board or post
              bases — the
              structural failure
              pattern in
              KC wood decks
              that indicates
              moisture penetration
              at the framing
              connection points;
              or homeowners
              who have a
              deck that is
              structurally
              sound but whose
              surface is
              too rough and
              deteriorated
              to stain and
              would benefit
              from board-level
              replacement
              before the
              framing reaches
              the same condition.
              The central
              education is
              KC's one-hundred-ten
              degree Fahrenheit
              annual temperature
              swing as the
              primary deck
              board deterioration
              driver, ledger
              board moisture
              failure as
              the structural
              failure mechanism
              that distinguishes
              cosmetic from
              structural repair,
              and composite
              versus pressure-treated
              decking as
              the material
              decision that
              determines long-term
              maintenance load —
              three things
              that determine
              whether a homeowner
              understands
              the difference
              between cosmetic
              board replacement
              and structural
              repair. KC temperature
              swing and board
              movement: KC
              experiences
              an annual temperature
              range from
              approximately
              negative ten
              degrees Fahrenheit
              to one hundred
              degrees Fahrenheit —
              a swing of
              one hundred
              ten degrees
              that causes
              wood to expand
              and contract
              significantly
              with temperature
              and moisture
              change; a pressure-treated
              two-by-six deck
              board can change
              dimension by
              three to five
              percent across
              the grain through
              a KC annual
              cycle; this
              dimensional
              movement works
              fasteners loose
              over multiple
              cycles — a
              board that
              is tight at
              installation
              has a loose
              fastener within
              five to eight
              years on a
              KC deck; the
              board surface
              checks and
              splits along
              the grain as
              the wood dries
              and wets repeatedly
              — a process
              that accelerates
              on surfaces
              that receive
              direct afternoon
              sun from a
              west-facing
              orientation.
              Ledger board
              failure: the
              ledger board
              is the horizontal
              structural member
              that attaches
              the deck frame
              to the house
              — it is typically
              bolted through
              the exterior
              sheathing and
              rim joist of
              the house;
              moisture accumulates
              between the
              ledger and
              the house wall
              at the flashing
              connection —
              a location
              that is difficult
              to seal completely
              and that holds
              moisture after
              rain events;
              KC moisture
              cycling accelerates
              rot at the
              ledger end grain
              and at the
              joist hanger
              attachment points;
              a ledger that
              has soft spots,
              visible discoloration,
              or joist hangers
              that move under
              load is a
              structural failure
              that requires
              replacement
              before decking
              boards; a
              structurally
              failed ledger
              connection is
              the primary
              cause of deck
              collapse incidents.
              Composite versus
              pressure-treated:
              pressure-treated
              pine decking
              in KC will
              surface-check,
              gray, and require
              sealing within
              three to five
              years; composite
              decking — a
              wood-plastic
              composite or
              PVC cellular
              board — does
              not check,
              gray, or require
              sealing and
              has a twenty-five
              to thirty-year
              warranty; composite
              boards are
              more expensive
              per linear
              foot but eliminate
              the biennial
              sealing cost
              and the seven-to-twelve-year
              board replacement
              cycle; composite
              boards on
              a well-maintained
              frame often
              outlast a second
              set of pressure-treated
              boards on
              the same frame.
              A wood deck
              repair website
              that explains
              KC temperature
              swing and fastener
              loosening, ledger
              board moisture
              failure as
              the structural
              checkpoint, and
              composite versus
              PT board service
              life comparison
              earns the homeowner
              who wants to
              understand whether
              repair, board
              replacement,
              or full rebuild
              is the right
              decision.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before wood deck repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC temperature swing — 110°F annual range, board dimensional movement 3-5%, fastener working loose over 5-8 years",
                  "Ledger board moisture — flashing gap water accumulation, end grain rot, joist hanger softening, structural failure risk",
                  "Board replacement vs. structural repair — surface vs. structural failure, how to identify which is present",
                  "Composite vs. PT comparison — checking and graying timeline, 25-30 year composite warranty vs. 7-12 year PT service",
                  "Fastener types — ring-shank vs. smooth nail holding, deck screw vs. nail, hidden fastener clip systems for composite",
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
                What your wood deck repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC climate section — 110°F swing, board movement, fastener cycle loosening, surface checking and splitting timeline",
                  "Ledger inspection section — moisture accumulation location, end grain rot pattern, joist hanger assessment, structural vs. cosmetic",
                  "Board replacement section — surface failure indicators, replacement process, opportunity to upgrade to composite boards",
                  "Composite section — no sealing, checking, or graying, hidden fastener option, 25-30 year warranty comparison to PT",
                  "Structural repair section — ledger replacement process, post base rot assessment, footings re-inspection for older decks",
                  "Quote form with deck age, board condition, ledger access, soft spots present, railing condition, desired material upgrade",
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
                &ldquo;The ledger section
                is what prevents
                the cosmetic
                repair that
                falls apart
                in two years.
                KC homeowners
                who want to
                replace deck
                boards don&apos;t
                always know
                that the ledger
                behind the
                boards might
                be the actual
                problem. After
                the section
                went up explaining
                that the ledger
                board holds
                the deck to
                the house and
                that moisture
                at that connection
                is the structural
                failure pattern
                in KC, customers
                started asking
                specifically
                about the ledger
                during the
                estimate visit.
                When I find
                a soft ledger
                during a board
                replacement
                estimate, the
                homeowner already
                understands
                why it has
                to be addressed
                first. The
                composite comparison
                also converts
                board replacement
                calls into
                higher-value
                material upgrade
                projects — KC
                homeowners who
                understand they
                won&apos;t be doing
                this again in
                seven years
                are willing
                to pay the
                difference.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — H. Novak, deck repair and composite decking installation, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A wood deck repair site with KC temperature swing section, ledger
                inspection guide, and quote form starts at $200. A full site with
                structural vs. cosmetic failure diagnosis, composite upgrade comparison,
                and fastener assessment content is $425–$750. One deck board replacement
                job covers the cost. No contracts, no monthly fees.
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
