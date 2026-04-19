import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Deck Repair Companies in Kansas City",
  description:
    "Custom websites for deck repair, deck board replacement, joist sistering, and ledger repair companies in the Kansas City area. Show your structural assessment process, wood vs. composite repair options, and KC freeze-thaw context to win deck repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/deck-repair",
  },
};

export default function DeckRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Deck Repair Companies in Kansas City",
    description: "Custom websites for deck repair and structural assessment companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Deck Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their deck needs boards replaced or full joists sistered, how to tell if the ledger is pulling away from the house, and whether composite boards can replace rotted wood. A website that explains structural assessment earns the repair call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Deck Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Deck Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Deck repair customers
              are KC homeowners who
              noticed soft or spongy
              boards after a wet
              spring, homeowners
              whose deck has loose
              railings or posts
              that have moved over
              winter, or homeowners
              preparing to sell
              and who were flagged
              by a home inspector
              for deck structural
              issues. KC's climate
              is hard on decks:
              freeze-thaw cycles
              work water into
              end-grain cuts and
              fastener holes, joists
              in contact with
              the ground or with
              inadequate drainage
              develop rot at the
              top surface where
              water pools, and
              UV exposure degrades
              wood fiber that
              holds fasteners.
              The central education
              is how to distinguish
              surface wear from
              structural decay
              and what each type
              of repair involves.
              Decking boards vs.
              structural members:
              surface board replacement
              (decking) is cosmetic
              and straightforward —
              individual boards
              can be replaced
              without disturbing
              the structure; joist
              and beam decay is
              structural — a joist
              that fails underfoot
              represents a fall
              hazard, and sistering
              (adding a new joist
              alongside the compromised
              one) or full replacement
              is required; the
              probe test (pushing
              a screwdriver into
              suspect wood — sound
              wood resists, decayed
              wood accepts the
              probe easily) distinguishes
              surface weathering
              from structural
              decay. Ledger connection:
              the ledger board
              bolts the deck to
              the house rim joist —
              the most critical
              structural connection
              and the most common
              failure point in
              older KC decks;
              water intrusion behind
              the ledger rots
              both the ledger
              and the house rim
              joist; a properly
              flashed ledger uses
              Z-flashing and a
              standoff between
              ledger and siding
              to prevent water
              trapping; ledger
              bolts (1/2-inch
              lag screws or through
              bolts at 16-inch
              OC) should be checked
              for rust and proper
              engagement; a ledger
              pulling away from
              the house is a
              structural emergency.
              Post and footing
              decay: pressure-treated
              posts in direct
              contact with soil
              decay at the groundline
              over 15–20 years
              even with treatment —
              KC code requires
              4x4 posts minimum
              for decks under
              6 feet, 6x6 posts
              for taller decks;
              post bases (Simpson
              ABA, CB) mounted
              on concrete piers
              elevate the post
              above soil contact
              and significantly
              extend service life;
              replacing a post
              requires temporary
              shoring of the
              beam while the
              post is removed.
              Composite vs. wood
              repair: composite
              decking (Trex, TimberTech,
              Fiberon) does not
              rot, resist insect
              damage, and holds
              color better than
              wood — but requires
              specific fastener
              systems (hidden
              clips or composite-specific
              screws) and cannot
              be painted; mixing
              composite decking
              with existing wood
              structure is common
              in partial-replacement
              repairs if the
              wood structure is
              sound; composite
              boards require
              proper joist spacing
              (16 inches OC for
              most products) and
              cannot span more
              without intermediate
              support. A deck
              repair website that
              explains how to
              distinguish decking
              replacement from
              structural repair,
              what a ledger inspection
              involves, and what
              the options are
              for surface material
              earns the homeowner
              who found soft
              boards and doesn't
              know how far the
              problem goes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a deck repair company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Decking vs. structural repair — probe test for rot, when sistering is needed vs. board replacement",
                  "Ledger connection — flashing requirement, standoff from siding, lag bolt inspection, failure signs",
                  "Post and footing decay — groundline rot timeline, post base elevation, temporary shoring for replacement",
                  "Composite repair — Trex and TimberTech on existing wood structure, fastener systems, joist spacing requirements",
                  "KC freeze-thaw damage — water in end grain and fastener holes, drainage above joists, what accelerates decay",
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
                What your deck repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Structural assessment section — probe test, decking vs. joist vs. beam decay, what the inspection covers",
                  "Ledger guide — flashing and standoff, bolt inspection, rim joist decay behind ledger, failure risk",
                  "Post repair section — groundline decay, post base systems, shoring and replacement process",
                  "Composite options — repair with composite decking on wood structure, fastener and spacing requirements",
                  "KC climate section — freeze-thaw cycle damage, drainage and ventilation under deck, what extends deck life",
                  "Assessment form with deck age, soft board location, railing looseness, whether selling soon",
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
                &ldquo;Every deck call I got started
                with a homeowner who thought
                they needed a few boards
                replaced. Half the time it
                was joists. The website section
                on the probe test — how to
                push a screwdriver into a
                suspect board and feel the
                difference between weathered
                wood and structural rot —
                meant customers arrived with
                an honest expectation of
                what we might find. The ledger
                section was the most important
                one though: two customers
                who read it sent me photos
                of their ledger flashing
                before the appointment, and
                both had the standoff problem
                that hides rot for years.
                I caught both before they
                became structural failures.
                That's the kind of trust
                that gets referrals.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Nkemelu, deck repair and carpentry, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A deck repair site with structural assessment section,
                ledger guide, and assessment form starts at $200.
                A full site with composite options, post repair section,
                and KC climate content is $425–$750. One partial
                deck repair covers the cost. No contracts, no monthly fees.
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
