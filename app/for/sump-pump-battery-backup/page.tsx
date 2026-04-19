import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Sump Pump Battery Backup Companies in Kansas City",
  description:
    "Custom websites for sump pump battery backup installation, battery backup sump pump replacement, and basement flood prevention companies in the Kansas City area. Show your battery type comparison, KC power outage pattern, and runtime calculation to win battery backup contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/sump-pump-battery-backup",
  },
};

export default function SumpPumpBatteryBackupPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Sump Pump Battery Backup Companies in Kansas City",
    description: "Custom websites for sump pump battery backup installation and basement flood prevention companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Sump Pump Battery Backup Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their primary sump pump failed during the exact storm that knocked out power, whether a battery backup can actually keep up with KC spring flood flow rates, and how long a battery lasts before it needs to be replaced. A website that explains battery backup sump pumps earns the pre-storm installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Sump Pump Battery Backup in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Sump Pump Battery Backup</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Sump pump battery backup
              customers are KC homeowners
              who flooded during a spring
              storm when the power went
              out and the primary sump
              pump stopped — the exact
              scenario where high water
              table and heavy rain combine
              with a power outage to
              flood a finished basement
              in four to six hours —
              homeowners who already
              have a primary pump but
              discovered it has no backup
              when their neighbor flooded
              during the last Overland
              Park storm event, or
              homeowners replacing a
              failed battery backup
              unit whose battery no
              longer holds a charge
              after three to five years.
              The central education
              is battery type comparison,
              KC storm power outage
              duration pattern, and
              gallons-per-hour capacity
              matching — three things
              that determine whether
              a battery backup keeps
              the basement dry through
              an eight-hour outage
              or runs out in two hours
              at peak inflow. Battery
              type: the two main battery
              technologies used in
              backup sump systems are
              sealed lead-acid (also
              called SLA or AGM) and
              lithium-ion; standard
              AGM batteries in backup
              sump systems are 40–75
              amp-hour units that cost
              $80–$150 and last three
              to five years before
              capacity drops below
              80%; lithium-ion backup
              systems cost two to three
              times more but last eight
              to twelve years and hold
              capacity better across
              a wider temperature range —
              relevant in a KC basement
              that reaches 50°F in
              January; the battery
              capacity determines runtime
              at a given pump draw —
              a typical 1/3 HP backup
              pump draws 4–6 amps at
              12 volts; a 75 amp-hour
              battery at 50% usable
              depth of discharge provides
              37.5 amp-hours; at 5 amps
              draw, that is 7.5 hours
              of runtime — but only
              at the rated pump cycle
              frequency; a KC spring
              storm with high inflow
              can force continuous
              pumping rather than intermittent
              cycling, which cuts runtime
              by 60–70%. Power outage
              duration: KC storms that
              produce the highest sump
              pump inflow — the spring
              severe weather events
              in April and May — are
              also the storms that
              knock out power longest;
              the typical KC utility
              outage from a severe
              thunderstorm is two to
              six hours; a derecho
              event can cause outages
              lasting twelve to thirty-six
              hours in parts of Johnson
              County and eastern Jackson
              County; the battery backup
              system must be sized for
              the worst-case combination
              of high inflow and long
              outage, not the average
              event. Capacity matching:
              a backup pump rated at
              1,500–2,000 gallons per
              hour at 10-foot head
              is sufficient for most
              KC basement configurations
              with a single sump pit;
              homes with a finished
              basement on a high-water-table
              lot in areas like the
              flood plains near the
              Blue River or the Brush
              Creek corridor need a
              backup pump rated at
              2,500–3,600 GPH or a
              dual-pump configuration;
              the backup pump capacity
              must match the inflow
              rate, not the primary
              pump capacity — a primary
              rated at 5,000 GPH means
              the primary was oversized
              for the inflow, not that
              the backup needs to match
              that rating. A battery
              backup website that explains
              battery type tradeoffs,
              why KC outages happen
              during peak inflow events,
              and how to size the backup
              to the actual inflow
              earns the homeowner who
              wants to be ready before
              the next storm season.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before sump pump battery backup
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Battery type — AGM vs. lithium-ion, amp-hour capacity, 3-5 year AGM vs. 8-12 year lithium lifespan",
                  "Runtime calculation — amp-hour capacity, pump draw, depth of discharge, continuous vs. intermittent cycling",
                  "KC power outage length — 2-6 hours typical, 12-36 hours for derecho events in Johnson/Jackson County",
                  "Capacity matching — GPH at 10-foot head, high-water-table lots, when dual-pump configuration is needed",
                  "Battery replacement — when capacity drops, how to test, AGM replacement interval for KC basements",
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
                What your sump pump battery backup website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Battery type section — AGM vs. lithium comparison, cost vs. lifespan tradeoff, temperature in KC basements",
                  "Runtime calculator — amp-hour formula, depth of discharge, continuous pumping runtime penalty",
                  "KC outage pattern section — spring storm outage duration data, derecho risk in Johnson/Jackson County",
                  "Capacity matching guide — GPH rating at 10-foot head, high-water-table lots, dual-pump threshold",
                  "Battery maintenance section — how to test charge capacity, annual check, replacement signs",
                  "Quote form with primary pump GPH rating, basement finish, lot drainage, power outage history, timeline",
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
                &ldquo;The runtime calculator section
                is what closes the job.
                A homeowner in Leawood
                calls and says they want
                a battery backup but the
                unit at the hardware store
                says it lasts twelve hours
                and that sounds fine. I
                have to explain that twelve
                hours assumes light cycling
                — if the storm is the kind
                that knocked out power in
                the first place, the inflow
                is high and the pump runs
                almost continuously, and
                the real runtime is two
                to three hours. After the
                section went up explaining
                how continuous pumping
                cuts rated runtime by sixty
                percent, homeowners stopped
                buying undersized units
                from the hardware store
                and started calling me
                to get the right capacity
                for their lot. The KC outage
                duration section also helped —
                customers started understanding
                why a six-hour battery isn&apos;t
                enough for a derecho.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Harrington, sump pump installation and waterproofing, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A battery backup sump site with battery type section, runtime
                guide, and quote form starts at $200. A full site with KC outage
                pattern content, capacity matching, and battery maintenance guide
                is $425–$750. One prevented basement flood covers the cost.
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
