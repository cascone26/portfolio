import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Carbon Monoxide Detector Installation Companies in Kansas City",
  description:
    "Custom websites for carbon monoxide detector installation, CO alarm placement, and carbon monoxide safety companies in the Kansas City area. Show your KC combustion appliance sources, detector placement height requirements, and interconnected alarm requirements to win CO detector contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/carbon-monoxide-detector-installation",
  },
};

export default function CarbonMonoxideDetectorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Carbon Monoxide Detector Installation Companies in Kansas City",
    description: "Custom websites for carbon monoxide detector installation and CO alarm placement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Carbon Monoxide Detector Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know where carbon monoxide detectors are required in KC, whether a CO alarm should be installed near the floor or ceiling, and what happens when the detector alarm goes off. A website that explains combustion appliance sources and placement requirements earns the safety installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For CO Detector Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Carbon Monoxide Detector Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Carbon monoxide detector
              installation customers
              are KC homeowners
              who just had a gas
              furnace, gas water
              heater, gas range,
              or attached garage
              installed or inspected
              and were told by
              the inspector or
              contractor that
              CO detectors are
              required; homeowners
              whose battery-powered
              CO alarm chirped
              and they want hardwired
              units with battery
              backup installed;
              or homeowners in
              a recently purchased
              house who do not
              know how old the
              existing CO alarms
              are — CO alarms
              have a seven-to-ten-year
              service life and
              must be replaced
              even if they appear
              to be functioning.
              The central education
              is why carbon monoxide
              is a specific risk
              in KC homes: natural
              gas appliances
              in Kansas City —
              furnaces, water
              heaters, ranges,
              fireplaces, and
              attached garage
              vehicles — all
              produce carbon
              monoxide when
              they combust; a
              properly functioning
              appliance vents
              CO to the exterior;
              a cracked heat
              exchanger in a
              furnace, a blocked
              flue, a backdrafting
              water heater, or
              an idling vehicle
              in an attached
              garage can allow
              CO to enter the
              living space; CO
              is odorless, colorless,
              and causes symptoms
              that mimic flu —
              headache, nausea,
              dizziness — at
              concentrations
              below the alarm
              threshold of most
              residential CO
              detectors (seventy
              parts per million
              for a sustained
              period). Placement
              requirements: the
              2021 International
              Residential Code
              requires a CO
              alarm outside
              each sleeping
              area and on each
              level of the home
              containing a fuel-burning
              appliance; Kansas
              City follows IRC
              requirements; CO
              is approximately
              the same density
              as air and distributes
              relatively uniformly
              in a room — detectors
              should be installed
              at approximately
              breathing height
              (five feet) or
              as specified by
              the manufacturer;
              the common myth
              that CO detectors
              should be placed
              at floor level
              (because CO is
              heavy like propane)
              is incorrect —
              CO is slightly
              lighter than air
              and does not settle.
              Interconnected
              alarms: hardwired
              interconnected
              CO alarms — where
              if one alarms,
              all alarms — are
              required in new
              construction in
              KC and are recommended
              for retrofit installations
              so that occupants
              in bedrooms are
              alerted regardless
              of where the source
              is detected first.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before CO detector installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "CO sources in KC homes — gas furnace heat exchanger cracks, backdrafting water heaters, attached garage risk",
                  "Where CO detectors are required — IRC sleeping area and each-level requirement, KC adoption",
                  "Placement height — why CO detectors should not be at floor level, breathing height recommendation",
                  "CO detector lifespan — 7-10 year replacement requirement, why end-of-life chirping differs from alarm",
                  "Hardwired vs. battery — interconnected alarm benefit, hardwired with battery backup for power outages",
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
                What your CO detector installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC combustion risk section — gas appliance inventory, heat exchanger failure, backdraft risk in older KC homes",
                  "Placement requirements section — IRC sleeping area rule, each-level requirement, breathing height vs. floor myth",
                  "Alarm lifespan section — 7-10 year replacement rule, how to identify end-of-life alarms in older KC homes",
                  "Interconnected alarm section — why all-alarm when one alarms matters, hardwired vs. wireless interconnect",
                  "What to do when alarm sounds — evacuation, 911 call, CO source inspection before re-entry",
                  "Quote form with number of bedrooms, fuel-burning appliances present, current alarm age, hardwired or battery preferred",
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
                &ldquo;The lifespan section is
                what gets me into KC
                homes that already have
                CO detectors. Homeowners
                assume that if the detector
                isn&apos;t beeping, it
                works — they don&apos;t
                know the sensor degrades
                over seven to ten years
                and the device can stop
                detecting CO entirely
                while showing a green
                light. After the section
                explaining that alarms
                have a printed manufacture
                date and a required replacement
                interval, customers started
                checking their alarm dates
                before calling and already
                knowing they were overdue.
                The placement section
                also stops the floor-level
                installation mistake —
                I still see detectors
                installed near the baseboard
                by prior contractors who
                confused CO with propane.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Bergman, electrical safety and alarm installation, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A CO detector installation site with combustion risk section,
                placement requirements guide, and quote form starts at $200.
                A full site with lifespan replacement section, interconnected
                alarm guide, and emergency response section is $425–$750. One
                hardwired installation covers the cost. No contracts, no monthly fees.
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
