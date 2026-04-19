import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Smoke Detector Installation Companies in Kansas City",
  description:
    "Custom websites for smoke detector installation, hardwired smoke alarm replacement, and carbon monoxide detector installation companies in the Kansas City area. Show your KC building code smoke detector placement requirements, interconnected hardwired smoke alarm installation, and CO detector placement for KC gas appliance homes to win smoke detector installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/smoke-detector-installation",
  },
};

export default function SmokeDetectorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Smoke Detector Installation Companies in Kansas City",
    description: "Custom websites for smoke detector installation and carbon monoxide detector installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Smoke Detector Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how many smoke detectors are required, whether they need to be hardwired or battery, and where carbon monoxide detectors are required by KC code. A website that explains current NFPA 72 placement requirements earns the call from the KC homeowner updating a home with nine-volt battery-only detectors from the nineties. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Smoke Detector Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Smoke Detector Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Smoke detector installation
              customers are KC homeowners
              whose home sale
              inspection report
              identified missing
              smoke detectors,
              battery-only detectors
              where hardwired
              interconnected detectors
              are required, or
              absence of carbon
              monoxide detectors
              in a home with
              gas appliances
              or an attached
              garage; homeowners
              replacing chirping
              detectors throughout
              a KC home built
              in the nineteen-nineties
              who want to understand
              whether they should
              replace with battery
              units or upgrade
              to hardwired; or
              homeowners who
              had a KC building
              permit inspection
              flag their existing
              system as non-compliant
              and need to understand
              what current NFPA
              72 and Kansas City
              code requires.
              The central education
              is NFPA 72 smoke
              detector placement
              requirements as
              the code framework
              that determines
              where alarms are
              required — NFPA
              72 requires a
              smoke alarm on
              every level of
              the dwelling including
              basement, in every
              sleeping room,
              and outside each
              sleeping area in
              the immediate vicinity
              of the bedrooms;
              a KC home with
              three bedrooms
              on one level,
              a basement, and
              a main living
              floor requires
              a minimum of
              six smoke alarms
              to meet NFPA
              72: one in each
              bedroom, one
              in the hallway
              outside the bedroom
              cluster, one
              on the main
              level, and one
              in the basement;
              hardwired interconnected
              versus battery-only —
              Kansas City building
              code for new
              construction and
              substantial renovation
              requires hardwired
              interconnected
              smoke alarms;
              interconnected
              means all alarms
              sound when any
              one detects smoke —
              a smoke event
              in the basement
              sounds every
              alarm in the
              house, including
              bedroom alarms
              that wake sleeping
              occupants; battery-only
              alarms in a KC
              home that had
              a permit are
              a code deficiency
              on a home sale
              inspection; ten-year
              sealed battery
              alarms with a
              lithium cell
              are acceptable
              as a hardwired
              replacement in
              remodels where
              running wire
              to existing locations
              is not feasible;
              sealed battery
              interconnected
              alarms using
              RF wireless interconnect
              provide the alarm
              interconnection
              requirement without
              a wired home
              run; CO detector
              placement in
              KC gas appliance
              homes — Missouri
              requires carbon
              monoxide alarms
              in all new residential
              construction;
              CO alarms must
              be installed
              outside each
              sleeping area
              and on every
              level of the
              home; in KC
              homes with a
              gas furnace,
              gas water heater,
              gas range, or
              attached garage,
              CO detectors
              are required
              regardless of
              home age under
              current KC fire
              code; CO alarms
              must not be installed
              directly in a
              kitchen — cooking
              appliances produce
              CO in normal
              operation and
              trigger false
              alarms; placement
              should be in
              the hallway adjacent
              to the kitchen,
              not in the kitchen
              itself; combination
              smoke and CO
              alarm units —
              available as
              hardwired or
              ten-year sealed
              battery — reduce
              unit count and
              cover both requirements
              in a single
              installation.
              A smoke detector
              installation website
              that explains
              NFPA 72 per-level
              and per-bedroom
              placement requirements,
              hardwired interconnected
              versus sealed
              battery RF wireless
              as the current
              KC compliant
              options, and
              CO detector placement
              rules for KC
              gas appliance
              homes earns the
              homeowner who
              needs a compliant
              system installed
              before their
              home sale closes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before smoke detector installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "NFPA 72 placement — every level, every sleeping room, outside bedroom cluster, basement — minimum unit count",
                  "Hardwired vs. battery — KC code requirement for interconnected alarms, ten-year sealed battery as compliant alternative",
                  "Interconnected alarms — all alarms sound when one detects, why basement smoke must wake bedroom occupants",
                  "CO detector placement — outside sleeping areas, every level, gas appliance homes, not in kitchen, combo units",
                  "Home sale compliance — what inspection reports flag, battery-only in wired home as deficiency",
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
                What your smoke detector installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "NFPA 72 section — placement grid by level and room type, minimum unit count formula for KC home layouts",
                  "Hardwired vs. battery section — KC code distinction, sealed lithium 10-year battery as compliant option, RF wireless interconnect",
                  "CO section — Missouri requirement, gas appliance homes, placement rules, combo unit advantage",
                  "Home sale section — what KC home inspectors flag, how to produce a compliant system before closing",
                  "Interconnection section — why all alarms must sound together, wired vs. RF wireless interconnect methods",
                  "Quote form with floor count, bedroom count, current detector type, gas appliances present, home sale timeline",
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
                &ldquo;The NFPA 72 section
                closes the home
                sale jobs. KC
                homeowners who
                get an inspection
                report flagging
                smoke detectors
                call three companies
                and pick whoever
                explains the
                situation clearly.
                After the section
                went up explaining
                per-level, per-bedroom,
                and outside-sleeping-area
                requirements with
                an actual unit
                count example
                for a three-bedroom
                KC ranch, customers
                showed up to
                the call already
                knowing what
                they needed and
                ready to schedule.
                The CO section
                also generates
                add-on work —
                KC homeowners
                often don&apos;t know
                Missouri requires
                CO alarms, and
                once they read
                that a gas furnace
                home without
                CO detectors
                is a code deficiency
                on a home sale
                inspection, they
                add them to
                the smoke alarm
                scope every time.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Castillo, smoke detector and CO alarm installation, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A smoke detector installation site with NFPA 72 placement section,
                hardwired vs. battery guide, and quote form starts at $200. A full
                site with CO detector requirements, home sale compliance, and
                interconnection content is $425–$750. One whole-home detector
                installation covers the cost. No contracts, no monthly fees.
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
