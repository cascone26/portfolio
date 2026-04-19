import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Deck Board Replacement Companies in Kansas City",
  description:
    "Custom websites for deck board replacement, deck decking repair, and composite deck repair companies in the Kansas City area. Show your KC freeze-thaw splintering timeline on pressure-treated boards, composite vs. pressure-treated for KC humidity, and ledger-to-house connection inspection to win deck board replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/deck-board-replacement",
  },
};

export default function DeckBoardReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Deck Board Replacement Companies in Kansas City",
    description: "Custom websites for deck board replacement and deck repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Deck Board Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their splintering deck boards can be sanded and sealed or whether they need to be replaced, what composite decking actually costs versus pressure-treated, and whether replacing boards means the frame underneath also needs work. A website that explains deck board replacement earns the call before a splinter deck becomes a structural problem. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Deck Board Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Deck Board Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Deck board replacement
              customers are KC homeowners
              whose pressure-treated
              deck boards are splintering,
              checking, cupping,
              or showing surface
              rot — deterioration
              that makes the deck
              unsafe for bare feet,
              requires annual sanding
              that is no longer
              recovering the surface,
              or has progressed
              to boards that flex
              underfoot and may
              be compromised through
              their full depth;
              homeowners who are
              replacing worn pressure-treated
              boards and want to
              understand whether
              composite decking
              is worth the higher
              upfront cost for
              KC conditions; or
              homeowners who are
              having boards replaced
              and want to know
              whether the joists
              and ledger underneath
              should be inspected
              at the same time
              the boards are off.
              The central education
              is KC freeze-thaw
              splintering timeline
              on pressure-treated
              boards, composite
              versus pressure-treated
              performance in KC
              humidity and temperature
              range, and what a
              board replacement
              inspection should
              include — three things
              that determine whether
              a homeowner understands
              why their fifteen-year-old
              deck looks the way
              it does and what
              the right next step
              is. KC freeze-thaw
              splintering: pressure-treated
              lumber for decking
              is kiln-dried after
              treatment (KDAT) or
              supplied wet; wet
              pressure-treated boards
              shrink as they dry
              on the deck, producing
              checking — surface
              cracks that run with
              the grain; KC freeze-thaw
              cycling — fifty to
              fifty-five cycles
              per winter — drives
              water into the checks
              and expands them;
              the surface fibers
              of the board lift
              and separate from
              the body of the board,
              producing the splinter
              condition that makes
              the surface unusable;
              a KC deck built
              with wet pressure-treated
              southern yellow pine
              typically shows significant
              checking within three
              to five years and
              surface splintering
              within seven to ten
              years regardless
              of sealing history;
              once the surface
              fiber has separated,
              sanding removes the
              lifted fiber temporarily
              but does not close
              the underlying check —
              the cycle repeats
              faster on the exposed
              lower fiber. Composite
              versus pressure-treated:
              composite decking —
              PVC or wood-plastic
              composite — does
              not check, splinter,
              or require sealing;
              in KC summer humidity
              at seventy to eighty
              percent outdoor relative
              humidity, wood-plastic
              composite expands
              slightly but does
              not absorb moisture
              the way wood does;
              KC summer surface
              temperatures on south-facing
              composite decking
              can reach one hundred
              forty to one hundred
              sixty Fahrenheit —
              comparable to wood —
              requiring heat-resistant
              material selection
              and proper gapping
              for thermal expansion;
              composite material
              cost is two to three
              times pressure-treated
              per square foot installed,
              but the total cost
              over twenty years
              including sealing,
              sanding, and board
              replacement cycles
              is often comparable;
              composite boards
              are also heavier
              than wood — the joist
              span and attachment
              method must accommodate
              the increased dead
              load. Board replacement
              inspection: when deck
              boards are removed
              for replacement,
              the joists, beam,
              posts, and ledger
              are exposed — the
              only opportunity
              to inspect them without
              demo; ledger attachment
              to the house is the
              highest-risk deck
              assembly — improper
              original installation
              without flashing,
              or flashing that
              has failed, allows
              water behind the
              ledger into the rim
              joist and band joist
              of the house; a
              ledger with rot or
              fastener failure
              is a deck collapse
              risk; a board replacement
              job that does not
              include ledger inspection
              is a missed safety
              check. A deck board
              replacement website
              that explains KC
              freeze-thaw splintering
              timeline on pressure-treated
              pine, composite upgrade
              decision criteria,
              and what a full board-off
              inspection should
              cover earns the homeowner
              who wants the repair
              done right the first
              time.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before deck board replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC freeze-thaw splintering — wet PT pine checking timeline, freeze-thaw fiber separation, why sanding is temporary",
                  "Composite vs. pressure-treated — moisture resistance, KC summer heat, 20-year total cost comparison, thermal expansion gapping",
                  "Board replacement inspection — ledger condition, joist inspection while boards are off, fastener evaluation",
                  "Sand-and-seal vs. replace — when surface fiber separation makes the board unrepairable regardless of sealing",
                  "Joist span for composite — heavier material, dead load, why span tables change from wood to composite",
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
                What your deck board replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Splintering section — KC freeze-thaw cycle count, checking mechanism in wet PT pine, fiber separation and why sanding fails",
                  "Composite section — PVC vs. wood-plastic composite, KC humidity and heat performance, thermal expansion gap requirements",
                  "Cost comparison — pressure-treated 20-year lifecycle cost including maintenance vs. composite upfront and no-maintenance",
                  "Inspection section — ledger condition check while boards are off, joist rot at fastener holes, beam and post base assessment",
                  "Material guide — SYP vs. cedar vs. composite, KC Climate Zone 4A exposure ratings, fastener selection for each material",
                  "Quote form with deck age, board material, surface condition, composite interest, ledger accessible, joist concern",
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
                &ldquo;The ledger inspection
                section is what gets
                customers to approve
                the full safety check
                when the boards come
                off. KC homeowners
                replacing twelve-year-old
                pressure-treated boards
                assume the frame
                is fine because it
                doesn&apos;t feel soft
                from above. After
                the section went
                up explaining that
                ledger inspection
                is only possible
                while the boards
                are off and that
                ledger failure is
                the number-one cause
                of deck collapse
                in residential construction,
                customers started
                approving the full
                inspection as part
                of the board replacement
                scope. I found two
                ledgers last season
                with significant
                rot that would not
                have been caught
                for another five
                or ten years. The
                composite section
                also helps — once
                KC homeowners understand
                the twenty-year total
                cost is comparable,
                half of them upgrade
                on the board replacement
                rather than installing
                PT again.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Petrov, deck repair and replacement, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A deck board replacement site with freeze-thaw splintering section,
                composite comparison, and quote form starts at $200. A full site
                with ledger inspection guide, material comparison, and lifecycle
                cost content is $425–$750. One board replacement job covers the
                cost. No contracts, no monthly fees.
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
