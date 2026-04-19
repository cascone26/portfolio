import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Smoke Detector Wiring Companies in Kansas City",
  description:
    "Custom websites for smoke detector wiring, hardwired smoke alarm installation, and interconnected smoke detector companies in the Kansas City area. Show your KC bedroom-level placement requirements, ionization vs. photoelectric detector selection, and interconnected alarm wiring to win smoke detector contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/smoke-detector-wiring",
  },
};

export default function SmokeDetectorWiringPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Smoke Detector Wiring Companies in Kansas City",
    description: "Custom websites for smoke detector wiring and hardwired smoke alarm installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Smoke Detector Wiring Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether ionization or photoelectric smoke detectors are better, why all the alarms go off when one senses smoke in the kitchen, and what the KC code requirement is for placement outside each bedroom. A website that explains detector technology and interconnected wiring earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Smoke Detector Wiring in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Smoke Detector Wiring</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Smoke detector wiring
              customers are KC homeowners
              replacing chirping
              battery-powered smoke
              alarms with hardwired
              units that have battery
              backup — hardwired
              alarms do not require
              battery replacement
              and cannot be disabled
              by removing a battery;
              homeowners whose
              hardwired alarms
              are ten years old
              or older and need
              replacement — smoke
              detectors have a
              ten-year rated service
              life; homeowners
              who want interconnected
              alarms so that a
              smoke detection
              in the basement
              triggers alarms
              on all floors including
              the bedrooms; or
              homeowners selling
              a home and needing
              alarms to meet
              current KC code
              for the inspection.
              The central education
              is ionization vs.
              photoelectric detector
              technology: an ionization
              smoke detector uses
              a small radioactive
              source to ionize
              air between two
              charged plates —
              smoke particles
              disrupt the ionization
              current and trigger
              the alarm; ionization
              detectors respond
              more quickly to
              flaming, fast-burning
              fires that produce
              small smoke particles;
              a photoelectric
              smoke detector
              uses a light beam
              and sensor — when
              smoke particles
              scatter the light
              into the sensor,
              the alarm triggers;
              photoelectric detectors
              respond more quickly
              to slow, smoldering
              fires that produce
              larger particles
              before flames develop;
              the NFPA and the
              International Association
              of Fire Chiefs
              recommend either
              dual-sensor (both
              technologies in
              one unit) or a
              combination of
              ionization and
              photoelectric detectors
              in different locations
              because residential
              fires can develop
              as either type.
              Kitchen placement:
              smoke detectors
              should not be installed
              within ten feet
              of a cooking appliance
              because cooking
              smoke and steam
              cause nuisance alarms;
              a photoelectric
              detector is preferred
              over ionization
              in this location
              because it is less
              sensitive to combustion
              byproducts from
              normal cooking;
              a heat detector —
              not a smoke detector —
              is an alternative
              for the kitchen
              zone in homes where
              cooking alarms
              are a persistent
              problem. Interconnected
              wiring: the 2021
              IRC requires hardwired,
              interconnected
              smoke alarms in
              all new KC construction
              — when any alarm
              activates, all
              alarms in the
              interconnected
              system sound; retrofit
              interconnected
              systems can be
              wired on a dedicated
              circuit or use
              wireless interconnect
              technology in
              homes where running
              new wire through
              finished walls
              is not practical.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before smoke detector wiring
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Ionization vs. photoelectric — fire type each responds to, NFPA dual-sensor recommendation, KC home fire risk",
                  "Smoke detector lifespan — 10-year replacement requirement, why old alarms may not detect smoke reliably",
                  "KC code placement — bedroom and each-level requirements, 10-foot kitchen exclusion zone, ceiling vs. wall",
                  "Interconnected alarms — why all alarms sound when one detects smoke, hardwired vs. wireless interconnect",
                  "Hardwired vs. battery — why hardwired with battery backup is preferred for reliability, KC code for new work",
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
                What your smoke detector wiring website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Detector technology section — ionization vs. photoelectric fire type comparison, dual-sensor recommendation",
                  "Lifespan section — 10-year replacement rule, how to find manufacture date, failure modes of aged detectors",
                  "Placement section — KC IRC bedroom and each-level requirements, kitchen exclusion, ceiling vs. wall mounting",
                  "Kitchen section — why cooking alarms happen, photoelectric vs. ionization in kitchen zone, heat detector option",
                  "Interconnected wiring section — hardwired interconnect, wireless interconnect for retrofit, all-sound-when-one-alarms",
                  "Quote form with number of floors, bedrooms, current alarm age and type, kitchen alarm issues, hardwired interest",
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
                &ldquo;The ionization vs. photoelectric
                section is what stops
                the homeowner from buying
                the cheapest detector
                at the hardware store.
                KC customers hear &apos;dual-sensor&apos;
                and assume it&apos;s
                a marketing upsell until
                the section explains
                that ionization and photoelectric
                respond to genuinely different
                fire types — most residential
                fire deaths come from
                slow smoldering fires
                at night, and ionization-only
                detectors are slower
                to respond to those.
                The kitchen section also
                converts every customer
                who disabled their kitchen
                alarm because it kept
                going off while cooking
                — they need a photoelectric
                or heat detector in that
                zone, not a disabled alarm.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Finley, electrical safety and alarm installation, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A smoke detector wiring site with detector technology section,
                placement requirements guide, and quote form starts at $200.
                A full site with lifespan replacement section, kitchen zone guide,
                and interconnected wiring explanation is $425–$750. One
                whole-house hardwired installation covers the cost. No contracts,
                no monthly fees.
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
