import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Furnace Repair Companies in Kansas City",
  description:
    "Custom websites for furnace repair, gas furnace repair, and HVAC repair companies in the Kansas City area. Show your KC heat exchanger crack diagnosis, furnace age and efficiency considerations for KC winters, and gas valve and ignitor failure symptoms to win furnace repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/furnace-repair",
  },
};

export default function FurnaceRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Furnace Repair Companies in Kansas City",
    description: "Custom websites for furnace repair and gas furnace service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Furnace Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their furnace is short-cycling, what a cracked heat exchanger means for their family, and whether a fifteen-year-old furnace is worth repairing. A website that explains furnace repair earns the call from the KC homeowner whose furnace stopped heating on the coldest night of January. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Furnace Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Furnace Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Furnace repair
              customers are
              KC homeowners
              whose gas furnace
              is not producing
              heat — either
              not starting,
              short-cycling
              on and off
              without reaching
              the set temperature,
              producing a
              burning smell
              when it runs,
              or whose carbon
              monoxide detector
              alarmed and
              who were told
              by a technician
              that their
              heat exchanger
              is cracked;
              homeowners
              whose furnace
              is fifteen
              to twenty years
              old and are
              facing a repair
              estimate and
              want to understand
              whether the
              repair cost
              makes sense
              relative to
              the remaining
              service life
              of the furnace
              and the efficiency
              improvement
              of replacing
              a sixty to
              seventy percent
              AFUE unit with
              a ninety-plus
              AFUE condensing
              furnace in
              a KC climate
              that demands
              four to five
              months of heating
              per year;
              or homeowners
              who had a
              service call
              and were told
              the diagnosis
              but do not
              understand
              what a failed
              inducer motor,
              a dirty flame
              sensor, or
              a failed hot
              surface ignitor
              means or why
              these components
              fail. The central
              education is
              heat exchanger
              integrity as
              the safety
              issue that
              makes furnace
              diagnosis a
              life-safety
              matter — a
              cracked heat
              exchanger
              allows combustion
              gases including
              carbon monoxide
              to mix with
              the supply
              air delivered
              to living spaces;
              the heat exchanger
              is a sealed
              metal chamber
              that separates
              the combustion
              side from
              the air distribution
              side — cracks
              develop from
              thermal stress
              over fifteen
              to twenty years
              of heating
              cycles; in
              Kansas City
              where furnaces
              run from November
              through March
              and cycle
              multiple times
              per hour on
              the coldest
              days, thermal
              fatigue accumulates
              faster than
              in milder climates;
              a cracked heat
              exchanger
              cannot be
              patched or
              welded and
              requires furnace
              replacement —
              the repair
              vs. replace
              decision framework
              as the structured
              way homeowners
              should think
              about whether
              a repair makes
              sense — the
              rule of thumb
              is that a
              repair costing
              more than fifty
              percent of
              furnace replacement
              cost on a
              unit over
              fifteen years
              old favors
              replacement,
              particularly
              given the
              efficiency
              improvement
              from modern
              ninety-six
              percent AFUE
              condensing
              furnaces — and
              common failure
              components
              as the diagnosis
              framework that
              lets a homeowner
              evaluate whether
              a quoted repair
              is reasonable —
              a failed hot
              surface ignitor
              (the ceramic
              element that
              glows to ignite
              the burner)
              is a one-to-two-hundred-dollar
              repair; a
              failed inducer
              motor (the
              blower that
              draws combustion
              gases through
              the heat exchanger)
              is a three-to-five-hundred-dollar
              repair; a
              failed control
              board on an
              older unit
              often triggers
              the replacement
              conversation.
              KC furnace
              failure patterns:
              Kansas City
              winters average
              thirty to thirty-five
              days per year
              below freezing,
              with sustained
              periods in
              January where
              overnight lows
              reach single
              digits; a
              furnace failure
              in these conditions
              creates urgent
              need that
              homeowners
              want answered
              the same day;
              dirty flame
              sensors are
              the most common
              cause of furnace
              short-cycling —
              the flame sensor
              is a metal
              rod that sits
              in the burner
              flame and proves
              ignition to
              the control
              board; carbon
              buildup from
              combustion
              insulates the
              rod and the
              control board
              reads no flame
              and shuts
              the burner
              off — cleaning
              the flame
              sensor with
              fine steel
              wool is a
              thirty-minute
              repair; a
              clogged filter
              that restricts
              airflow causes
              the heat exchanger
              to overheat
              and the high-limit
              switch to
              trip, shutting
              the furnace
              down — replacing
              a clogged filter
              and resetting
              the limit switch
              resolves this;
              annual furnace
              tune-up including
              flame sensor
              cleaning, heat
              exchanger visual
              inspection,
              and filter
              replacement
              prevents the
              January emergency
              call. A furnace
              repair website
              that explains
              KC heating
              season demands
              and why furnace
              failures concentrate
              in January
              cold snaps,
              heat exchanger
              integrity as
              the safety
              issue that
              determines
              whether a
              furnace can
              continue to
              operate, and
              the repair-vs-replace
              decision framework
              for older KC
              furnaces earns
              the homeowner
              whose heat
              went out and
              who wants
              to understand
              what the diagnosis
              means.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before furnace repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Heat exchanger — cracked exchanger = CO mixing with supply air, cannot be repaired, requires furnace replacement",
                  "Short-cycling causes — dirty flame sensor (most common), high-limit trip from clogged filter, failed inducer motor",
                  "Hot surface ignitor — ceramic glow element, $100-$200 repair, most common no-heat call in KC January",
                  "Repair vs. replace — 50% of replacement cost threshold, furnace age, 60-70% vs. 96% AFUE efficiency difference",
                  "Annual tune-up — flame sensor cleaning, heat exchanger inspection, filter replacement, prevents emergency calls",
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
                What your furnace repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Heat exchanger section — what it is, crack mechanism, CO risk, why it requires replacement not repair",
                  "Diagnosis guide — short-cycling causes, flame sensor cleaning, limit switch reset, inducer motor symptoms",
                  "Repair vs. replace section — age + cost threshold framework, 96% AFUE condensing upgrade ROI in KC climate",
                  "Tune-up section — what annual service includes, KC fall timing, January call prevention",
                  "Emergency section — what to do when heat stops in January, CO detector response, same-day call priority",
                  "Quote form with furnace age, symptom description, brand/model, last service date, CO detector alarm history",
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
                &ldquo;The heat exchanger
                section converts
                the replacement
                conversation
                from a hard
                sell into a
                homeowner-led
                decision. KC
                homeowners who
                get told &apos;your
                heat exchanger
                is cracked&apos;
                on a February
                service call
                think we&apos;re
                upselling them
                on a new furnace
                — they don&apos;t
                know what a
                heat exchanger
                does or why
                a crack means
                the furnace
                cannot run.
                After the section
                went up explaining
                the CO separation
                mechanism and
                why a crack
                can&apos;t be repaired,
                customers stopped
                arguing about
                replacement
                and started
                asking what
                their options
                were. The repair-vs-replace
                section also
                closes the
                borderline calls —
                KC homeowners
                facing a four-hundred-dollar
                repair on a
                seventeen-year-old
                furnace do
                the math themselves
                after reading
                the efficiency
                upgrade ROI
                section.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Reyes, furnace repair and HVAC services, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A furnace repair site with heat exchanger section, diagnosis guide,
                and quote form starts at $200. A full site with repair-vs-replace
                framework, tune-up content, and emergency call section is $425–$750.
                One repair or replacement job covers the cost. No contracts, no monthly fees.
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
