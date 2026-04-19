import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Chimney Relining Companies in Kansas City",
  description:
    "Custom websites for chimney relining, chimney liner installation, and chimney flue repair companies in the Kansas City area. Show your KC clay tile liner cracking from temperature cycling, stainless steel liner for gas appliance conversions, and carbon monoxide risk from unlined flues to win chimney relining contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/chimney-relining",
  },
};

export default function ChimneyReliningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Chimney Relining Companies in Kansas City",
    description: "Custom websites for chimney relining and chimney liner installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Chimney Relining Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the crack in their chimney liner is actually dangerous, what a stainless steel liner costs compared to repairing clay tiles, and whether they need a liner at all if they converted from wood-burning to gas. A website that explains chimney relining earns the call from the homeowner whose chimney sweep found a cracked liner on the annual inspection. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Chimney Relining in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Chimney Relining</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Chimney relining
              customers are KC homeowners
              whose annual chimney
              inspection identified
              cracked, spalled,
              or missing clay
              tile liner sections
              in the flue —
              the condition
              that the National
              Fire Protection
              Association NFPA
              211 standard identifies
              as requiring repair
              before the appliance
              is used; homeowners
              who converted
              from a wood-burning
              fireplace to a
              gas insert or
              gas log set
              and whose chimney
              sweep indicated
              that the original
              clay tile liner
              is the wrong
              size or material
              for the lower-temperature
              gas exhaust and
              condensation it
              produces; or
              homeowners who
              installed a new
              high-efficiency
              gas furnace or
              boiler and whose
              HVAC contractor
              indicated that
              the existing
              masonry chimney
              is not appropriate
              for the condensing
              appliance exhaust
              and needs a
              dedicated liner.
              The central education
              is KC temperature
              cycling as the
              mechanism for
              clay tile liner
              failure, stainless
              steel liner as
              the correct relining
              product for gas
              and oil appliances,
              and carbon monoxide
              bypass as the
              safety consequence
              of a cracked
              liner — three
              things that determine
              whether a homeowner
              understands that
              a liner finding
              is a safety issue,
              not a maintenance
              upsell. KC clay
              tile liner failure:
              clay tile chimney
              liners installed
              in KC homes
              from the 1920s
              through the 1990s
              are composed
              of rectangular
              or round fired
              clay sections
              mortared together
              end to end;
              the liner is
              exposed to combustion
              temperatures of
              one thousand to
              two thousand
              degrees Fahrenheit
              for wood burning
              and four hundred
              to seven hundred
              degrees for gas —
              each firing cycle
              expands the tile
              and the mortar
              joints; KC winter
              temperatures mean
              the liner cools
              to below freezing
              between firing
              cycles; the differential
              expansion and
              contraction of
              clay tile and
              mortar over decades
              of KC temperature
              cycling loosens
              mortar joints
              and cracks tiles;
              a cracked tile
              allows combustion
              gases — including
              carbon monoxide —
              to escape the
              flue into the
              masonry chase
              and potentially
              into the living
              space through
              any opening in
              the chase; the
              risk is highest
              when the home
              is sealed in
              winter, combustion
              appliances are
              in heavy use,
              and the crack
              provides a bypass
              path for flue
              gases. Stainless
              steel liner for
              gas appliances:
              when a homeowner
              converts a wood-burning
              fireplace to a
              gas insert, the
              gas appliance
              produces exhaust
              at four hundred
              to six hundred
              degrees — low
              enough to allow
              condensation inside
              the original
              clay liner;
              the condensation
              is acidic — from
              carbonic acid
              in the combustion
              moisture — and
              attacks the mortar
              joints of a
              clay liner that
              was designed
              for the dry
              high-temperature
              exhaust of wood;
              a flexible stainless
              steel liner —
              typically type
              316L alloy rated
              for gas and oil
              appliances —
              is inserted into
              the existing
              masonry chase
              and sized for
              the BTU output
              of the new appliance;
              the stainless
              liner accommodates
              the condensing
              exhaust without
              acid attack and
              is rated for
              the lower temperature
              range of the
              gas appliance;
              for high-efficiency
              condensing furnaces
              and boilers that
              exhaust at one
              hundred to one
              hundred forty
              degrees, PVC
              direct vent through
              the side wall
              is the correct
              solution — the
              masonry chimney
              is too large
              and cold to
              drain condensate
              properly. An
              chimney relining
              website that
              explains KC temperature
              cycling clay tile
              failure, stainless
              steel liner selection
              for gas appliance
              conversions, and
              carbon monoxide
              bypass from cracked
              liners earns
              the homeowner
              whose sweep found
              a cracked tile
              and wants to
              understand whether
              the finding is
              serious.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before chimney relining
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay tile failure — mortar joint loosening from freeze-thaw cycling, tile crack mechanism, decades of cumulative damage",
                  "Carbon monoxide bypass — cracked liner escape path into masonry chase, living space entry risk, winter sealed-home scenario",
                  "Gas appliance conversion relining — condensing exhaust acid attack on clay, 316L stainless liner sizing for BTU output",
                  "High-efficiency furnace venting — condensing exhaust at 100-140°F, PVC direct vent vs. masonry chimney for modern appliances",
                  "NFPA 211 liner standard — what the standard requires, when a finding mandates repair before use",
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
                What your chimney relining website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Clay tile failure section — KC freeze-thaw cycling mechanism, mortar joint deterioration, camera inspection findings",
                  "Safety section — carbon monoxide bypass path, why winter sealed-home increases risk, CO detector limitations",
                  "Gas conversion section — condensing exhaust condensation, acid attack on clay, stainless liner selection process",
                  "High-efficiency appliance section — when chimney is wrong for modern appliances, direct vent as correct alternative",
                  "Liner material section — 316L stainless vs. aluminum vs. cast-in-place, temperature rating and application matching",
                  "Quote form with appliance type, fuel type, home age, inspection finding, conversion history",
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
                &ldquo;The carbon monoxide
                section is what
                converts a sweep
                finding into a
                relining call.
                KC homeowners
                who get a cracked
                liner finding
                on the inspection
                report sometimes
                treat it like
                a suggestion —
                they plan to
                get to it eventually.
                After the section
                went up explaining
                that a cracked
                liner provides
                a bypass path
                for CO directly
                into the masonry
                chase and that
                the risk is
                highest in winter
                when the house
                is sealed and
                the appliance
                is running continuously,
                customers started
                calling within
                the week. The
                gas conversion
                section also
                helped — a lot
                of KC homes
                in Brookside
                and Waldo converted
                from wood to
                gas in the
                nineties and
                the clay liner
                is actively
                being attacked
                by the acidic
                condensate. Those
                customers need
                a liner urgently
                and don&apos;t know
                it.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Mallory, chimney relining and inspection, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A chimney relining site with KC liner failure section, carbon monoxide
                risk guide, and quote form starts at $200. A full site with gas
                conversion relining, high-efficiency appliance venting, and liner
                material selection content is $425–$750. One relining job covers the
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
