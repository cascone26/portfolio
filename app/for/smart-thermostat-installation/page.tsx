import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Smart Thermostat Installation Companies in Kansas City",
  description:
    "Custom websites for smart thermostat installation, Ecobee and Nest setup, and HVAC control upgrade companies in the Kansas City area. Show your C-wire requirements, zoning compatibility, and energy savings to win thermostat installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/smart-thermostat-installation",
  },
};

export default function SmartThermostatInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Smart Thermostat Installation Companies in Kansas City",
    description: "Custom websites for smart thermostat installation and HVAC control upgrade companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Smart Thermostat Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their system has a C-wire, whether a smart thermostat works with a heat pump or multi-stage system, and whether the energy savings are real. A website that explains C-wire requirements and compatibility earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Smart Thermostat Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Smart Thermostat Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Smart thermostat installation
              customers are homeowners
              who purchased an Ecobee,
              Nest, or Honeywell T6
              and discovered their
              existing wiring has
              no C-wire, homeowners
              with a heat pump who
              want to know whether
              the smart thermostat
              they bought at Home
              Depot is compatible
              with their dual-fuel
              or 2-stage heat pump
              system, or homeowners
              who want a professional
              installation with
              proper configuration
              rather than a DIY
              attempt on a complex
              system. The central
              education is C-wire
              function and the
              compatibility gaps
              that create problems:
              the C-wire (common
              wire) provides 24VAC
              power to the thermostat
              continuously — smart
              thermostats with
              WiFi, touchscreen,
              and sensors draw
              significantly more
              power than a mercury-bulb
              thermostat and cannot
              run reliably on power-stealing
              from the control
              wires alone. Older
              KC homes (pre-1990)
              typically have 4-wire
              thermostat runs (R,
              G, Y, W) with no
              C conductor pulled —
              running a C-wire
              requires either
              pulling new wire,
              using a 5-wire converter
              kit (Ecobee PEK,
              Nest Power Connector
              — repurposes the
              G fan wire and uses
              a relay at the furnace),
              or installing a
              common-maker module
              at the air handler.
              Heat pump compatibility:
              a heat pump thermostat
              requires separate
              Aux heat and emergency
              heat terminals (AUX/E)
              in addition to the
              standard cooling (Y)
              and reversing valve
              (O/B) — a standard
              cooling thermostat
              or single-stage furnace
              thermostat connected
              to a heat pump causes
              the reversing valve
              to behave incorrectly;
              multi-stage heat
              pumps add Y2 for
              second-stage compressor.
              Dual-fuel compatibility:
              a dual-fuel system
              (heat pump + gas
              furnace) requires
              a thermostat that
              supports both an
              O/B reversing valve
              wire and a separate
              W wire for gas heat —
              the thermostat must
              allow configuring
              the switchover (balance)
              point; Ecobee supports
              this natively; Nest
              Thermostat E does
              not. Geofencing and
              scheduling: smart
              thermostats use
              geofencing (home/away
              based on phone GPS)
              to avoid heating
              or cooling an empty
              house — Ecobee
              uses remote sensors
              to average temperature
              across multiple
              rooms during occupied
              periods, solving
              the hot/cold room
              problem without
              zoning. A smart
              thermostat website
              that explains C-wire
              solutions, heat pump
              compatibility wiring,
              and how dual-fuel
              switchover is configured
              earns the homeowner
              who bought a thermostat
              and is now staring
              at a wiring diagram.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a smart thermostat
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "C-wire requirement — what it does, why smart thermostats need it, solutions for homes without one",
                  "Heat pump compatibility — O/B wire, AUX/E terminals, multi-stage wiring, why standard thermostats fail",
                  "Dual-fuel setup — balance point configuration, which thermostats support it, W vs. O/B wiring",
                  "Remote sensor use — Ecobee sensor averaging, how it addresses hot/cold rooms without zoning",
                  "Professional vs. DIY — when complex systems require a pro, what can go wrong with incorrect config",
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
                What your smart thermostat installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "C-wire section — function, how to check existing wiring, three solutions for homes without a C conductor",
                  "Heat pump wiring section — O/B terminal function, AUX/E heat, multi-stage Y2, common wiring errors",
                  "Dual-fuel configuration section — balance point setup, Ecobee vs. Nest compatibility, what to verify",
                  "Brand comparison — Ecobee vs. Nest vs. Honeywell T6 for KC common system types (heat pump, gas forced air)",
                  "Geofencing and sensor section — how location-based scheduling and remote sensors work, energy savings estimate",
                  "Install form with system type (gas/HP/dual-fuel), stages, existing wire count, thermostat purchased",
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
                &ldquo;Most of my smart thermostat
                calls came from homeowners
                who tried to install it
                themselves and hit a wall:
                no C-wire, or they have
                a heat pump and the thermostat
                kept running emergency heat
                all winter. The C-wire solutions
                section — the PEK kit, the
                common-maker module, pulling
                new wire — turned that wall
                into a reason to call me
                instead of returning the
                thermostat. The dual-fuel
                section was specific enough
                that contractors on the
                other end of my referral
                chain started calling to
                ask where I found that
                information, then sending
                their own customers to me
                for installs.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — E. Santos, HVAC controls and thermostat service, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A smart thermostat site with C-wire section, heat
                pump compatibility guide, and install form starts
                at $200. A full site with dual-fuel config section,
                brand comparison, and geofencing explainer is
                $425–$750. One professional thermostat install
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
