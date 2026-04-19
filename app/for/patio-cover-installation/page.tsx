import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Patio Cover Installation Companies in Kansas City",
  description:
    "Custom websites for patio cover installation, pergola cover, attached patio roof, and shade structure companies in the Kansas City area. Show your ledger attachment process, KC frost line footing depth, and material options to win patio cover contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/patio-cover-installation",
  },
};

export default function PatioCoverInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Patio Cover Installation Companies in Kansas City",
    description: "Custom websites for patio cover installation and outdoor shade structure companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Patio Cover Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether an attached patio cover requires a ledger board connection to the house, how deep footings need to go for Kansas City's frost line, and whether aluminum or wood holds up better in KC's weather. A website that explains the structural requirements earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Patio Cover Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Patio Cover Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Patio cover installation
              customers are KC homeowners
              with an exposed concrete
              or paver patio who
              want shade and weather
              protection, homeowners
              extending an existing
              deck with a covered
              section, or homeowners
              who want a permanent
              structure rather
              than a retractable
              awning. KC's climate
              makes patio cover
              durability a real
              consideration —
              105°F summers, ice
              storms, and 100+
              mph straight-line
              wind events all
              affect material
              and fastener choices.
              The central education
              is attached vs.
              freestanding structure,
              footing requirements,
              and material durability
              in KC conditions.
              Attached vs. freestanding:
              an attached patio
              cover connects
              to the house at
              a ledger board
              mounted to the
              rim joist or wall
              framing — the ledger
              carries half the
              roof load; proper
              ledger connection
              uses 1/2-inch lag
              screws or through-bolts
              at 16-inch OC staggered,
              Z-flashing over
              the top, and a
              gap between the
              ledger and siding
              to prevent water
              trapping; a freestanding
              patio cover has
              no house connection —
              all load goes to
              posts and footings,
              which must be sized
              accordingly; freestanding
              structures can
              be positioned anywhere
              on the patio without
              concern for ledger
              flashing but require
              more footing work.
              Frost line footing
              depth: KC frost
              depth is 30 inches
              (Johnson County,
              KS) to 36 inches
              (north KC suburbs
              in Missouri) —
              footings must extend
              below frost depth
              or frost heave
              will lift and tilt
              the structure over
              winter cycles;
              a 12-inch diameter
              concrete pier to
              36 inches is standard
              for a 4x4 or 6x6
              post; post bases
              (Simpson ABA, CB)
              elevate the post
              above the concrete
              pier, preventing
              ground contact
              rot; permit-required
              structures must
              pass footings inspection
              before concrete
              is poured. Material
              comparison: pressure-treated
              lumber (southern
              yellow pine, Hem-Fir)
              is lowest cost
              and structurally
              proven but requires
              staining or painting
              every 2–3 years
              in KC's sun and
              rain cycle, and
              end cuts and fastener
              holes must be treated
              with preservative;
              cedar and redwood
              resist rot naturally
              but cost 2–3x
              pressure-treated
              and are not readily
              available in KC;
              aluminum patio
              covers (Palram,
              Genova, aluminum
              extrusion systems)
              require no maintenance,
              resist KC hail
              better than wood,
              and are available
              in flat, corrugated,
              and louvered panel
              configurations;
              polycarbonate panels
              (twinwall or corrugated)
              allow light transmission
              while blocking
              UV and rain —
              popular for greenhouse-adjacent
              patios. Roofing
              options for attached
              covers: a solid
              roof over an attached
              patio cover must
              manage water runoff —
              the slope must
              direct water away
              from the house
              (minimum 1/4 inch
              per foot slope)
              and gutters or
              drip edge must
              direct water off
              the structure;
              metal roofing panels
              (corrugated steel,
              standing seam)
              are durable and
              commonly used in
              KC; flat or low-slope
              covers require
              a continuous membrane
              (TPO, EPDM) to
              prevent pooling.
              A patio cover website
              that explains the
              ledger connection
              requirement, what
              frost line depth
              means for post
              footings, and how
              aluminum vs. wood
              holds up in KC
              weather earns the
              homeowner who wants
              a structure that
              won't need replacement
              in five years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before patio cover installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Attached vs. freestanding — ledger connection to house, flashing requirement, load distribution to footings",
                  "Frost line footing depth — KC frost depth by county, pier diameter and depth, post base elevation",
                  "Material comparison — pressure-treated vs. aluminum, maintenance schedule, KC hail and weather resistance",
                  "Roofing options — slope requirement away from house, metal panel vs. polycarbonate, gutter and drainage",
                  "Permits — when a patio cover requires a permit, footing inspection, KC suburban jurisdiction requirements",
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
                What your patio cover installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Attached vs. freestanding section — ledger bolting and flashing, freestanding footing load, tradeoffs",
                  "Footing guide — KC frost line depth by area, pier diameter, post base systems, permit inspection sequence",
                  "Material section — pressure-treated, cedar, aluminum, polycarbonate — maintenance, cost, KC climate performance",
                  "Roof options — slope direction, metal panels vs. membrane, gutter integration, polycarbonate light transmission",
                  "Permit section — KC and suburban jurisdiction requirements, footing inspection, what triggers a permit",
                  "Quote form with patio dimensions, attached or freestanding preference, material preference, timeline",
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
                &ldquo;The frost line section was
                the thing customers cited most
                often when they called. People
                who'd gotten quotes from other
                contractors were surprised those
                contractors hadn't mentioned
                footing depth — they'd assumed
                post holes were post holes.
                After I published the section
                explaining that a 16-inch hole
                instead of a 36-inch hole would
                heave in the first hard winter,
                customers started asking every
                contractor about frost depth
                before signing. I won three
                jobs in a row where the competing
                quote didn't include proper
                footings and customers came
                back to me after realizing
                the difference. The ledger
                flashing section did the same
                thing for attached covers:
                customers arrived asking about
                Z-flashing because they'd read
                what happens when water gets
                behind the ledger.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Okonkwo, outdoor structures and patio covers, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A patio cover site with attached vs. freestanding guide,
                footing section, and quote form starts at $200. A full
                site with material comparison, roofing options, and
                permit content is $425–$750. One patio cover installation
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
