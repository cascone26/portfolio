import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Garage Door Weatherstripping Companies in Kansas City",
  description:
    "Custom websites for garage door weatherstripping replacement, garage door seal companies, and garage door bottom seal installation in the Kansas City area. Show your bottom seal vs. threshold seal comparison, KC temperature swing rubber hardening, and side and top seal installation method to win garage door weatherstripping contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/garage-door-weatherstripping",
  },
};

export default function GarageDoorWeatherstrippingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Garage Door Weatherstripping Companies in Kansas City",
    description: "Custom websites for garage door weatherstripping and garage door seal replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garage Door Weatherstripping Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why light comes in at the bottom of their garage door even after replacing the bottom seal, whether a threshold seal or bottom seal does the same job, and why the rubber on their seven-year-old KC garage door has cracked and curled at the corners. A website that explains garage door weatherstripping earns the seal replacement call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garage Door Weatherstripping in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Garage Door Weatherstripping</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Garage door weatherstripping
              customers are KC homeowners
              who see daylight at
              the bottom corners
              of their garage door
              when closed, whose
              garage floods from
              rain and snowmelt running
              under the door, or
              whose attached garage
              allows cold air into
              the house through the
              door-to-frame gap —
              homeowners who replaced
              the bottom seal and
              still have light gaps
              because the concrete
              floor is uneven and
              the bottom seal alone
              does not compensate
              for floor irregularities
              greater than three-eighths
              of an inch, or homeowners
              whose side and top
              stop molding seals
              have cracked and separated
              from the door frame
              after years of UV
              exposure and KC temperature
              cycling. The central
              education is the four-seal
              system on a garage
              door, rubber compound
              degradation from KC
              temperature swings,
              and the bottom seal
              versus threshold seal
              choice — three things
              that determine whether
              the garage stays dry,
              pest-free, and energy-efficient
              through a KC winter.
              The four seals: a properly
              sealed garage door
              has four distinct seal
              components — the bottom
              seal (the rubber or
              vinyl wiper attached
              to the bottom panel
              that contacts the floor),
              the threshold seal
              (a raised rubber strip
              bonded to the floor
              that the bottom of
              the door closes against —
              the alternative to
              the bottom seal for
              uneven floors), and
              the stop molding seals
              on the two vertical
              sides and the horizontal
              top of the door frame;
              homeowners who replace
              only the bottom seal
              and still have light
              gaps at the sides and
              top have three intact
              failure points they
              have not addressed;
              the side seals are
              typically vinyl or
              rubber flaps attached
              to the stop molding
              that press against
              the door panel face
              when closed — they
              degrade from UV exposure
              and become brittle
              and lose contact with
              the panel face. KC
              temperature degradation:
              KC has an annual temperature
              swing of approximately
              one hundred degrees —
              from below zero in
              January polar vortex
              events to above one
              hundred degrees in
              July and August; standard
              rubber compounds become
              brittle and crack at
              sustained temperatures
              below minus twenty
              Fahrenheit and soften
              and deform at sustained
              temperatures above
              one hundred forty;
              a KC garage door bottom
              seal installed in standard
              EPDM rubber in a south-facing
              or west-facing garage
              door opening sees direct
              solar heating in summer
              that exceeds air temperature
              — the seal surface
              can reach one hundred
              sixty degrees, causing
              compression set where
              the seal contacts the
              floor; after five to
              seven KC seasons, standard
              EPDM bottom seals crack
              at the corners and
              lose the contact pressure
              against the floor;
              vinyl bottom seals
              fail faster than EPDM
              in KC cold — they become
              rigid and split at
              low temperatures. Bottom
              seal vs. threshold:
              a bottom seal mounted
              to the door compensates
              for up to three-eighths
              of an inch of floor
              variation; a threshold
              seal mounted to the
              floor compensates for
              floor variation by
              creating a raised profile
              that the door closes
              against — threshold
              seals accommodate uneven
              KC floors that slope
              toward the door opening
              for drainage; the two
              systems can be combined —
              a threshold seal plus
              a bottom seal provides
              redundant sealing for
              KC homes where snow
              melt flooding is a
              recurring problem.
              A garage door weatherstripping
              website that explains
              the four-seal system,
              KC temperature degradation
              by compound, and bottom
              seal versus threshold
              comparison earns the
              homeowner whose garage
              floor flooding recurs
              every spring.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before garage door weatherstripping
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Four-seal system — bottom seal, threshold seal, side stop seals, top seal — why one replacement misses three",
                  "KC temperature degradation — 100°F annual swing, EPDM vs. vinyl compound failure, solar heating on south-facing doors",
                  "Bottom seal vs. threshold — floor gap tolerance, uneven floor accommodation, combined system for flood prevention",
                  "Side seal failure — stop molding flap UV hardening, loss of face contact, when molding replacement is needed",
                  "Bottom seal retainer — T-slot vs. nail-on vs. flush mount, which door brands use which retainer type",
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
                What your garage door weatherstripping website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Four-seal section — diagram of bottom, threshold, side, and top seals, what each one does, failure signs",
                  "KC degradation section — temperature swing impact, EPDM lifespan, south-facing door solar loading",
                  "Bottom vs. threshold guide — floor tolerance comparison, combined system for sloped KC garage floors",
                  "Side seal section — stop molding flap types, UV hardening signs, replacement vs. adjustment",
                  "Retainer guide — T-slot, nail-on, and flush mount bottom seal retainer types by door brand",
                  "Quote form with door brand, seal age, gap location (bottom/sides/top), floor slope, timeline",
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
                &ldquo;The four-seal section
                is what turned a twenty-dollar
                job into a two-hundred-dollar
                job — in a good way
                for the customer. They&apos;d
                call about the bottom
                seal and I&apos;d show up
                to find the side seals
                completely hardened
                and cracked away from
                the stop molding. After
                the section went up
                explaining all four
                seal locations and
                why replacing just
                one still leaves the
                other three leaking,
                customers started
                asking me to check
                all four during the
                call. The KC temperature
                section also helped —
                homeowners in Lenexa
                with west-facing garage
                doors were confused
                why their five-year-old
                bottom seals were
                already cracked. Explaining
                that the rubber hits
                one-sixty on a summer
                afternoon before the
                air temperature even
                reaches one hundred
                made the material
                degradation make sense.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — H. Caldwell, garage door service and weatherstripping, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garage door weatherstripping site with four-seal section,
                KC degradation guide, and quote form starts at $200. A full
                site with bottom vs. threshold comparison, side seal guide,
                and retainer type chart is $425–$750. One full seal replacement
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
