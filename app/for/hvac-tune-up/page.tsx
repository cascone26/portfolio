import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for HVAC Tune-Up Companies in Kansas City",
  description:
    "Custom websites for HVAC tune-up, AC maintenance, and furnace inspection companies in the Kansas City area. Show your KC climate zone 5 seasonal timing, refrigerant charge check for KC summers, and heat exchanger crack inspection as the CO safety check to win HVAC tune-up contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hvac-tune-up",
  },
};

export default function HvacTuneUpPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for HVAC Tune-Up Companies in Kansas City",
    description: "Custom websites for HVAC tune-up and seasonal AC and furnace maintenance companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for HVAC Tune-Up Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know when to schedule a tune-up, whether refrigerant needs to be checked every year, and what a cracked heat exchanger actually means for their family. A website that explains the KC seasonal timing earns the call before the first hot week in May. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For HVAC Tune-Up in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">HVAC Tune-Up</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              HVAC tune-up
              customers are KC
              homeowners who
              have not had
              their system
              serviced in
              two or more
              years and are
              approaching
              the first week
              in May when
              Kansas City
              temperatures
              climb into the
              upper eighties
              and the AC runs
              continuously
              for the first
              time since October;
              homeowners whose
              energy bills
              increased last
              summer without
              a change in
              usage habits;
              homeowners who
              noticed the
              system is running
              longer cycles
              to reach setpoint
              or that the
              upstairs of
              a two-story
              KC home is
              five to eight
              degrees warmer
              than the thermostat
              target on a
              ninety-five-degree
              afternoon; or
              homeowners who
              are scheduling
              fall furnace
              service before
              the first cold
              snap in October
              when KC temperatures
              drop forty degrees
              in forty-eight
              hours and every
              HVAC contractor
              in the metro
              is booked two
              weeks out. The
              central education
              is KC climate
              zone 5 as the
              reason seasonal
              timing matters —
              spring AC tune-up
              in March or
              April before
              the cooling
              season starts
              gives the technician
              time to identify
              low refrigerant
              charge, a dirty
              blower wheel,
              or a failing
              capacitor before
              the ninety-degree
              week that pushes
              the system past
              its limits;
              fall furnace
              tune-up in
              September or
              October before
              the heating
              season starts
              allows heat
              exchanger inspection
              before the
              furnace runs
              continuously
              for the first
              time; a cracked
              heat exchanger
              is the critical
              safety finding —
              the heat exchanger
              separates combustion
              gases from the
              air distribution
              system; a crack
              allows carbon
              monoxide from
              the combustion
              side to enter
              the return air
              stream and circulate
              through the
              house; CO is
              colorless and
              odorless and
              accumulates
              to dangerous
              concentration
              before the
              occupants are
              aware; the
              annual furnace
              tune-up heat
              exchanger inspection
              is the primary
              residential
              CO safety check
              in KC homes
              with gas furnaces.
              KC-specific
              tune-up tasks:
              refrigerant
              charge check
              for KC summer
              — a system
              that is two
              pounds low
              on refrigerant
              runs at thirty
              percent higher
              amperage to
              move the same
              heat, shortening
              compressor
              life; refrigerant
              charge is not
              consumed — if
              the system is
              low, there
              is a leak that
              must be found
              and repaired
              before recharging;
              blower wheel
              cleaning for
              KC spring allergen
              season — a
              blower wheel
              coated with
              dust and allergen
              debris reduces
              airflow by
              fifteen to
              twenty-five
              percent, raises
              static pressure,
              and recirculates
              mold spores
              and pollen
              through the
              duct system
              from April
              through June;
              filter MERV
              rating for
              KC allergen
              months — MERV
              8 is the minimum
              for KC spring
              allergen capture;
              a MERV 13
              filter captures
              bacteria and
              fine particles
              but must be
              paired with
              a blower that
              can overcome
              the increased
              static pressure;
              static pressure
              measurement
              as the system
              health diagnostic —
              total external
              static pressure
              above half
              an inch of
              water column
              indicates a
              restriction
              in the duct
              system, undersized
              return, or
              dirty coil
              that reduces
              comfort and
              shortens equipment
              life in KC
              summer peak
              conditions.
              An HVAC tune-up
              website that
              explains KC
              spring and
              fall timing,
              heat exchanger
              crack inspection
              as the CO
              safety finding,
              and refrigerant
              leak diagnosis
              as the correct
              approach when
              charge is low
              earns the KC
              homeowner who
              wants to avoid
              a breakdown
              on the hottest
              day in July.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before HVAC tune-up
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC seasonal timing — spring AC service in March–April, fall furnace service in September–October before first cold snap",
                  "Heat exchanger inspection — CO safety check, crack allows combustion gas into air stream, colorless and odorless hazard",
                  "Refrigerant charge — low charge means leak, not normal depletion; must find and repair leak before recharging",
                  "Blower wheel cleaning — dust buildup reduces airflow 15–25%, recirculates allergens through KC spring season",
                  "Static pressure measurement — TESP above 0.5 in w.c. indicates restriction, undersized return, or dirty coil",
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
                What your HVAC tune-up website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC timing section — climate zone 5 reasoning, March–April vs. September–October windows, why last-minute service costs more",
                  "Heat exchanger section — CO risk, visual and pressure-test inspection process, when replacement is required",
                  "Refrigerant section — charge check process, leak-first diagnosis, why topping off without leak repair fails within a season",
                  "Airflow section — blower wheel cleaning, static pressure measurement, MERV filter selection for KC allergen season",
                  "Efficiency section — how dirty coil, low charge, and high static pressure combine to raise summer energy bills",
                  "Quote form with system age, last service date, current problem (high bills, long cycles, hot upstairs), fuel type",
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
                section changed
                how our calls
                go. KC homeowners
                who scheduled
                a tune-up used
                to push back
                on the furnace
                inspection price —
                they thought
                it was just
                a filter change
                and belt check.
                After the section
                went up explaining
                that the heat
                exchanger is
                the only barrier
                between combustion
                gas and the
                air their family
                breathes, and
                that a cracked
                exchanger on
                a fifteen-year-old
                KC furnace is
                a CO hazard
                they cannot
                see or smell,
                customers stopped
                declining the
                inspection.
                The refrigerant
                section also
                helps — KC
                homeowners who
                had a contractor
                just add refrigerant
                every summer
                without finding
                the leak now
                understand why
                the charge keeps
                dropping and
                what the correct
                repair sequence
                is.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Nguyen, HVAC service and tune-up, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An HVAC tune-up site with KC timing section, heat exchanger guide,
                and quote form starts at $200. A full site with refrigerant leak
                diagnosis, static pressure content, and efficiency section is
                $425–$750. One spring AC tune-up call covers the cost. No contracts, no monthly fees.
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
