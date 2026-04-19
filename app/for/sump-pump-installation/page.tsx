import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Sump Pump Installation Companies in Kansas City",
  description:
    "Custom websites for sump pump installation, sump pump replacement, and battery backup sump pump companies in the Kansas City area. Show your KC spring water table rise, primary pump sizing for clay soil infiltration, and battery backup for KC storm power outages to win sump pump installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/sump-pump-installation",
  },
};

export default function SumpPumpInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Sump Pump Installation Companies in Kansas City",
    description: "Custom websites for sump pump installation and battery backup sump pump companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Sump Pump Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a sump pump will actually prevent basement flooding or just remove water after it enters, what horsepower they need for their size basement, and whether the battery backup their neighbor recommended is worth the cost. A website that explains sump pump installation earns the call from the homeowner whose basement flooded during the last spring storm when the power went out. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Sump Pump Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Sump Pump Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Sump pump installation
              customers are KC homeowners
              who experienced basement
              flooding during a
              spring storm event
              and want a permanent
              drainage solution;
              homeowners whose
              existing sump pump
              is ten or more years
              old and has never
              been replaced —
              the recommended
              service interval
              is seven to ten
              years for a pump
              that runs regularly
              through KC spring
              seasons; or homeowners
              who had a basement
              flood specifically
              during a power
              outage that coincided
              with a severe storm —
              a KC pattern where
              the heaviest spring
              rain events also
              produce the most
              power outages, and
              the primary pump
              becomes unavailable
              exactly when the
              water table is rising
              fastest. The central
              education is KC
              spring water table
              behavior, primary
              pump sizing for
              the basement footprint
              and water table
              conditions, and
              battery backup
              necessity in KC
              storm patterns —
              three things that
              determine whether
              a homeowner understands
              why pump horsepower
              and backup power
              are not optional
              upgrades but the
              two specifications
              that determine
              whether the system
              holds during the
              worst-case KC event.
              KC spring water
              table: Kansas City
              receives its highest
              precipitation in
              April, May, and
              June — the spring
              season delivers
              concentrated rainfall
              on clay soil that
              cannot absorb quickly;
              the shallow water
              table in KC clay
              soil rises during
              extended spring
              rain periods and
              can reach basement
              floor level in
              homes with basements
              in low-lying areas
              or with drainage
              running toward the
              foundation; footing
              drain tile installed
              around the foundation
              perimeter during
              original construction
              collects this water
              and routes it to
              the sump pit; the
              sump pit fills from
              the footing tile
              and the pump cycles
              to remove the water
              before it overtops
              the pit and floods
              the floor; a spring
              rain event in KC
              that drops two
              to three inches
              over six hours
              can cause sump
              pits to cycle continuously
              for twelve to twenty-four
              hours — pump motor
              rating and duty
              cycle determine
              whether it survives
              the run duration.
              Primary pump sizing:
              a one-third horsepower
              submersible sump
              pump — the most
              common residential
              installation — moves
              approximately 1,800
              to 2,200 gallons
              per hour at a ten-foot
              head height; a
              one-half horsepower
              pump moves 2,800
              to 3,000 gallons
              per hour at the
              same head; for
              most KC residential
              basements up to
              1,500 square feet,
              a one-third horsepower
              pump is adequate
              under normal spring
              conditions; homes
              on low-lying lots,
              with finished basements
              containing significant
              contents value,
              or with documented
              high water table
              history should
              use one-half horsepower
              minimum; cast iron
              impeller pumps
              last longer in
              continuous-run
              conditions than
              thermoplastic impeller
              pumps — the difference
              matters in a twelve-hour
              KC spring run.
              Battery backup necessity:
              severe thunderstorms
              in KC that produce
              the heaviest rainfall
              also produce the
              highest probability
              of grid outages —
              downed trees and
              lightning strikes
              cut power during
              peak water table
              rise; a battery
              backup sump pump
              installed in the
              same pit activates
              automatically when
              the primary pump
              loses power; it
              runs on a sealed
              lead-acid or AGM
              battery that provides
              six to twelve hours
              of pumping capacity
              depending on cycling
              rate; a water-powered
              backup pump uses
              municipal water
              pressure rather
              than battery —
              it runs without
              limitation while
              city water pressure
              holds but discharges
              two gallons of
              city water per
              gallon of sump
              water pumped; for
              KC homes where
              power outages during
              storms are the
              documented flood
              cause, battery
              backup is the primary
              risk management
              tool. A sump pump
              installation website
              that explains KC
              spring water table
              rise, pump sizing
              for continuous-run
              spring events,
              and battery backup
              as the storm outage
              solution earns
              the homeowner who
              lost a finished
              basement to a two-hour
              power outage last
              April.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before sump pump installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC spring water table — April-June concentrated rainfall, shallow water table rise, footing tile to sump pit pathway",
                  "Pump horsepower sizing — 1/3 vs. 1/2 HP flow rates, head height effect, 12-hour continuous run duty cycle",
                  "Cast iron vs. thermoplastic — impeller material longevity in continuous-run spring events",
                  "Battery backup necessity — storm outage correlation with peak water table, 6-12 hour battery capacity, water-powered alternative",
                  "Replacement interval — 7-10 year service life for regular-cycling pump, failure during peak demand risk",
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
                What your sump pump installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC spring section — peak precipitation months, water table rise timeline, footing tile to pit fill rate",
                  "Sizing section — 1/3 vs. 1/2 HP gallons per hour, head height chart, when to upsize",
                  "Material section — cast iron vs. thermoplastic impeller, continuous-run longevity, brand comparison",
                  "Battery backup section — storm outage correlation, battery vs. water-powered options, capacity and runtime",
                  "Maintenance section — 7-10 year replacement interval, annual test procedure, alarm and float inspection",
                  "Quote form with basement size, prior flooding, outage history, current pump age, backup system present",
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
                &ldquo;The battery backup
                section sells the
                backup unit on almost
                every new install
                now. KC homeowners
                who come in after
                a flood almost always
                lost their basement
                during a power outage —
                the pump was fine,
                the power went out
                for two hours during
                the storm and the
                pit overtopped. After
                the section went
                up explaining that
                KC severe storms
                produce both the
                heaviest rainfall
                and the highest
                outage probability
                simultaneously,
                customers stopped
                treating the backup
                as an optional add-on.
                The continuous-run
                sizing section
                also helped — KC
                homeowners in low-lying
                Brookside and Waldo
                neighborhoods understood
                why I was recommending
                half-horsepower
                cast iron instead
                of the basic unit
                once they read
                about twelve-hour
                spring run cycles.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Sorensen, basement waterproofing and sump pump installation, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A sump pump installation site with KC spring water table section,
                pump sizing guide, and quote form starts at $200. A full site with
                battery backup rationale, cast iron vs. thermoplastic comparison,
                and maintenance schedule content is $425–$750. One pump installation
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
