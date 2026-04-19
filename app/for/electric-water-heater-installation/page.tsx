import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Electric Water Heater Installation Companies in Kansas City",
  description:
    "Custom websites for electric water heater installation, water heater replacement, and electric water heater wiring companies in the Kansas City area. Show your KC 240V circuit requirements, first-hour rating vs. recovery rate, and expansion tank rules to win electric water heater contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/electric-water-heater-installation",
  },
};

export default function ElectricWaterHeaterInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Electric Water Heater Installation Companies in Kansas City",
    description: "Custom websites for electric water heater installation and water heater replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Electric Water Heater Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether switching from gas to electric water heater saves money in KC, what size electric water heater their household actually needs, and why the existing circuit may not work with a new electric unit. A website that explains first-hour rating and circuit requirements earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Electric Water Heater Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Electric Water Heater Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Electric water heater
              installation customers
              are KC homeowners whose
              electric water heater
              failed — electric
              water heaters have
              a ten-to-fifteen-year
              lifespan and the
              most common failure
              mode is a corroded
              tank that leaks,
              usually discovered
              when the homeowner
              finds water on the
              utility room floor —
              or homeowners converting
              from gas to electric
              as part of a home
              electrification project;
              or homeowners replacing
              a failed water heater
              who discover the
              new unit requires
              a different circuit
              than what is in
              place. The central
              education is sizing:
              electric water heater
              capacity is measured
              in first-hour rating
              (FHR) — the gallons
              of hot water the
              unit can deliver
              starting from a
              full tank in the
              first hour — not
              just tank volume;
              a forty-gallon electric
              water heater with
              a fifty-gallon-per-hour
              FHR is a better
              match for a four-person
              KC household than
              a fifty-gallon unit
              with a forty-gallon
              FHR; the typical
              sizing guide for
              KC residential water
              heaters: one to
              two people require
              a thirty-to-forty-gallon
              FHR unit; three
              to four people
              require a fifty-to-sixty-gallon
              FHR; five or more
              people require
              a sixty-to-eighty-gallon
              FHR or a heat pump
              water heater. Circuit
              requirements: a
              standard residential
              electric water heater
              requires a dedicated
              240V circuit —
              most thirty-to-fifty-gallon
              units require a
              thirty-amp circuit
              with ten-gauge
              wire; some larger
              units and heat pump
              water heaters require
              a thirty-amp or
              twenty-amp circuit
              with different wire
              gauge requirements;
              the circuit must
              have a disconnect
              within sight of
              the water heater
              or be a circuit
              breaker that is
              lockable — this
              is frequently missed
              in KC utility room
              water heater installations
              where the breaker
              at the panel is
              not within sight.
              Expansion tank:
              Kansas City residential
              water service with
              a PRV (pressure
              reducing valve)
              creates a closed
              system — when the
              water heater heats
              water, thermal
              expansion has nowhere
              to go; the KC plumbing
              code requires an
              expansion tank
              on any water heater
              installation where
              a PRV is present;
              failure to install
              an expansion tank
              causes the T&P
              relief valve to
              discharge regularly
              and accelerates
              tank corrosion.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before electric water heater installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "First-hour rating vs. tank size — FHR for household size, why FHR matters more than gallons for KC families",
                  "Circuit requirements — 30-amp 240V dedicated, 10-gauge wire, disconnect within sight rule",
                  "Heat pump water heater option — efficiency advantage, space requirements, KC climate performance",
                  "Expansion tank requirement — KC PRV closed system, T&P valve cycling, code requirement with PRV",
                  "Gas-to-electric conversion — eliminating gas line, new 240V circuit requirement, KC permit process",
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
                What your electric water heater installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Sizing section — FHR by household size, KC household guide, tank volume vs. FHR distinction",
                  "Circuit section — 30-amp 240V dedicated circuit, within-sight disconnect, 10-gauge wire requirement",
                  "Heat pump section — KC climate suitability, efficiency gain, space temperature draw-down consideration",
                  "Expansion tank section — KC PRV closed system rule, T&P relief valve cycling, code requirement",
                  "Failure signs section — tank age indicator, rust-colored water, pooling on floor, relief valve discharge",
                  "Quote form with household size, current unit age and type, utility room or basement, circuit present",
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
                &ldquo;The expansion tank section
                is what prevents the
                callback. In Kansas City,
                most utility rooms have
                a PRV on the main line
                and the plumbing inspector
                always asks about expansion
                tank compliance at water
                heater permit inspections.
                Before the website section
                explaining the closed
                system and why the T&P
                valve cycles when expansion
                tank is missing, I would
                get calls from homeowners
                saying their new water
                heater &apos;keeps dripping
                from the safety valve.&apos;
                Now customers understand
                when they schedule what
                expansion tank means and
                why it&apos;s included in
                the quote. The FHR section
                also stops homeowners
                from downsizing to save
                money — three hundred
                dollars less upfront for
                a smaller FHR unit turns
                into cold showers for
                the second person in the
                morning, and a service
                call asking why the new
                heater doesn&apos;t keep
                up.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Kimball, water heater installation, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An electric water heater installation site with FHR sizing
                section, circuit requirements guide, and quote form starts at
                $200. A full site with expansion tank section, heat pump option
                guide, and KC permit information is $425–$750. One water heater
                replacement covers the cost. No contracts, no monthly fees.
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
