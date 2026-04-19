import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Outdoor Spigot Replacement Companies in Kansas City",
  description:
    "Custom websites for outdoor spigot replacement, hose bib replacement, and frost-free sillcock companies in the Kansas City area. Show your frost-free extension length, KC freeze damage pattern, and anti-siphon requirement to win hose bib replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/outdoor-spigot-replacement",
  },
};

export default function OutdoorSpigotReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Outdoor Spigot Replacement Companies in Kansas City",
    description: "Custom websites for outdoor spigot replacement and frost-free hose bib companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Outdoor Spigot Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why a frost-free spigot still froze and split the pipe inside the wall, what extension length is correct for their wall thickness, and whether a new hose bib needs a backflow preventer. A website that explains outdoor spigot replacement earns the hose bib call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Outdoor Spigot Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Outdoor Spigot Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Outdoor spigot replacement
              customers are KC homeowners
              whose hose bib cracked
              or split after a hard
              freeze — often discovered
              in spring when the water
              is turned back on and
              water runs into the
              wall instead of out
              the spigot — homeowners
              whose spigot drips continuously
              from the stem even when
              fully closed because
              the washer or seat has
              worn, or homeowners
              replacing a standard
              hose bib with a frost-free
              sillcock in an exterior
              wall where pipes freeze
              routinely during KC
              winters. The central
              education is frost-free
              sillcock extension length,
              why frost-free spigots
              still freeze when a
              hose is left attached,
              and anti-siphon code
              requirement — three
              things that determine
              whether a replacement
              spigot survives a KC
              winter and passes inspection.
              Extension length: a
              frost-free sillcock
              (also called an anti-freeze
              hose bib) has a long
              stem that positions
              the actual valve seat
              and shutoff washer
              6 to 12 inches inside
              the wall, behind the
              insulation plane —
              when the handle is turned
              off, the water drains
              out of the pipe section
              between the valve seat
              and the spigot face,
              leaving no standing
              water to freeze; the
              extension length must
              match the wall thickness —
              a 4-inch frost-free
              in a 6-inch-thick insulated
              wall leaves the valve
              seat in the insulation,
              not behind it, and the
              pipe between the seat
              and the wall face will
              still freeze in a KC
              hard freeze; KC homes
              with 2x4 framing (pre-1980)
              have approximately 3.5-inch
              wall cavities and typically
              use 6-inch frost-free
              sillcocks; KC homes
              with 2x6 framing (post-1980)
              have approximately 5.5-inch
              cavities with insulation
              and typically require
              8-inch or 12-inch extensions
              to position the seat
              in conditioned space.
              Hose attached in winter:
              the frost-free design
              drains when the handle
              is closed — but only
              if the hose is removed;
              a hose left attached
              to the spigot creates
              back pressure that prevents
              the drain hole from
              emptying the pipe section;
              the pipe fills with
              standing water, the
              KC overnight freeze
              splits the stem inside
              the wall, and the damage
              is not visible until
              the spigot is used in
              spring; this is the
              most common cause of
              frost-free spigot failure
              in KC and the one homeowners
              never suspect. Anti-siphon:
              the Kansas City Plumbing
              Code requires an anti-siphon
              device (vacuum breaker)
              on all outdoor hose
              connections — a hose
              left in a bucket of
              pesticide or fertilizer
              can siphon into the
              supply line if the main
              pressure drops; most
              modern frost-free sillcocks
              have a built-in vacuum
              breaker; older spigots
              without one require
              a separate hose-end
              vacuum breaker; the
              code requires the vacuum
              breaker to be at least
              6 inches above the highest
              point of use. An outdoor
              spigot website that
              explains extension length
              by wall thickness, why
              hose-left-attached causes
              frost-free failure,
              and the vacuum breaker
              requirement earns the
              homeowner who wants
              the replacement done
              right before the next
              KC winter.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before outdoor spigot replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Extension length — 6/8/12-inch options, wall thickness measurement, where valve seat must sit",
                  "Frost-free failure — how hose-attached in winter defeats the drain mechanism, pipe split location",
                  "KC wall thickness — pre-1980 2x4 framing vs. post-1980 2x6, insulation thickness, correct extension",
                  "Anti-siphon requirement — vacuum breaker code, built-in vs. hose-end, 6-inch height requirement",
                  "Washer vs. sillcock — when a worn washer can be replaced vs. when full replacement is better",
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
                What your outdoor spigot replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Extension length section — how frost-free drains, wall thickness measurement, KC framing era guide",
                  "Hose-attached failure section — drain hole mechanics, why hose creates back pressure, spring discovery pattern",
                  "KC framing guide — 2x4 pre-1980 vs. 2x6 post-1980, insulation addition depth, correct extension selection",
                  "Anti-siphon section — vacuum breaker code requirement, built-in vs. add-on, height above use point",
                  "Repair vs. replace — washer and seat replacement viability, when age and corrosion favor full replacement",
                  "Quote form with wall thickness, current spigot age, freeze damage description, framing era, timeline",
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
                &ldquo;The hose-attached section
                is the one that surprises
                customers the most. A homeowner
                in Independence calls me
                in March because their frost-free
                spigot split over winter
                and they can&apos;t figure out
                why — they turned it off
                every fall. Then I ask if
                they left the hose on and
                they realize they left it
                connected all winter. After
                that section went up, homeowners
                started calling in October
                asking whether they needed
                a longer frost-free before
                winter, not in March after
                the pipe split. The extension
                length section also helped —
                I was installing 6-inch
                frost-frees in 2x6 houses
                because that was what the
                hardware store stocked, and
                the valve seat was sitting
                in the insulation, not behind
                it. The section explaining
                why 2x6 framing needs an
                8 or 12-inch stopped that
                mistake.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Ramsey, plumbing repair and hose bib service, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An outdoor spigot site with extension length section, frost-free
                failure guide, and quote form starts at $200. A full site with
                KC framing era guide, anti-siphon content, and repair vs. replace
                section is $425–$750. One hose bib replacement covers the cost.
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
