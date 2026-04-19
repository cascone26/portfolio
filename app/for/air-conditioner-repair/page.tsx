import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Air Conditioner Repair Companies in Kansas City",
  description:
    "Custom websites for AC repair, central air conditioner service, and cooling system repair companies in the Kansas City area. Show your refrigerant diagnostics, capacitor testing, and what causes an AC to stop cooling to win repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/air-conditioner-repair",
  },
};

export default function AirConditionerRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Air Conditioner Repair Companies in Kansas City",
    description: "Custom websites for air conditioner repair and central AC service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Air Conditioner Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their AC stopped cooling on the hottest KC day of the year, whether a capacitor replacement is a fair price, and what low refrigerant actually means for their system. A website that explains AC diagnostics and common failure parts earns the repair call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For AC Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Air Conditioner Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Air conditioner repair
              customers are homeowners
              whose AC stopped
              cooling on a 95°F
              KC July day, homeowners
              whose system is
              running continuously
              but cannot keep
              the house below
              80°F, or homeowners
              who noticed the
              outdoor unit not
              running while the
              air handler is
              blowing warm air.
              The central education
              is the most common
              failure parts and
              what each failure
              looks like from
              inside the house:
              capacitor failure
              is the most common
              single-component
              AC repair in KC —
              capacitors provide
              the starting torque
              for the compressor
              and condenser fan
              motor; a failed
              run capacitor causes
              the compressor or
              fan to hum without
              starting, then the
              system trips on
              high pressure or
              thermal overload;
              start capacitor
              failure causes the
              compressor to fail
              to start under load.
              Capacitor testing:
              a capacitor tester
              or multimeter in
              capacitance mode
              measures microfarads —
              a capacitor rated
              40/5 µF is failed
              when it measures
              below 90% of rated
              value (below 36 µF
              on the 40 µF side);
              this is a straightforward
              repair ($80–$200
              parts and labor)
              that honest technicians
              can complete in
              20 minutes. Refrigerant
              low charge: R-410A
              systems operate
              at 235–300 PSI
              on the high side
              and 100–130 PSI
              suction side at
              KC summer conditions;
              low suction pressure
              with normal supply
              air temperature
              indicates undercharge
              or restriction; low
              refrigerant requires
              leak detection —
              topping off without
              finding the leak
              is a band-aid that
              fails EPA 608 requirements
              for systems over
              50 lbs. Condenser
              coil restriction:
              a condenser coil
              caked with cottonwood
              seeds (peak in KC:
              May–June) or grass
              clippings blocks
              airflow, raises
              condensing temperature,
              and causes high-pressure
              lockout — straightforward
              coil cleaning resolves
              this; KC cottonwood
              season is a predictable
              annual service
              driver. Contactor
              pitting: the contactor
              controls power
              to the compressor
              and condenser fan —
              pitted or burned
              contacts cause
              intermittent no-start
              or chattering; replacement
              cost $60–$150 parts
              and labor. TXV
              (thermostatic expansion
              valve) failure:
              a stuck-closed TXV
              starves the evaporator,
              causes high superheat
              and low suction
              pressure mimicking
              refrigerant undercharge —
              a stuck-open TXV
              floods the evaporator
              and compressor with
              liquid refrigerant.
              An AC repair website
              that explains the
              most common failure
              parts, what they
              cost, and how a
              technician diagnoses
              each one earns the
              homeowner who wants
              to understand the
              bill before they
              approve it.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before calling an AC repair company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Capacitor failure — symptoms (hum without start), how it is tested, typical repair cost range",
                  "Low refrigerant — what suction pressure indicates, why topping off without leak detection is wrong",
                  "Condenser coil cleaning — cottonwood season in KC, high-pressure lockout symptoms, cleaning process",
                  "Contactor wear — pitting symptoms, intermittent no-start, replacement cost and complexity",
                  "TXV vs. refrigerant diagnosis — how a stuck TXV mimics low charge, why correct diagnosis matters",
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
                What your AC repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Capacitor section — run vs. start capacitor, testing method, failure symptoms, fair repair cost range",
                  "Refrigerant section — R-410A operating pressures, low charge symptoms, leak detection requirement",
                  "Condenser coil section — KC cottonwood season, restriction symptoms, cleaning process and frequency",
                  "Contactor section — pitting and chattering symptoms, how contactors are inspected, replacement cost",
                  "TXV section — expansion valve function, stuck-closed vs. stuck-open symptoms, diagnosis vs. refrigerant issue",
                  "Service form with system age, brand, symptom description, outdoor unit behavior, time without cooling",
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
                &ldquo;Every summer I got
                the same skeptical customers:
                they called three companies
                and everyone said 'low refrigerant'
                but nobody explained what
                that meant or why it happened.
                The website section on capacitors —
                the most common repair I
                do — gave customers a reference
                point: they knew what it
                was, how it gets tested,
                and what it should cost.
                I stopped getting pushback
                on capacitor replacements
                once customers had read
                that section. The cottonwood
                coil cleaning section also
                drove a predictable wave
                of calls every June — people
                recognized the symptom
                and called before the system
                tripped.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Mosely, AC repair and service, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An AC repair site with capacitor and refrigerant
                sections and a service form starts at $200. A full
                site with condenser coil, contactor, TXV, and KC
                seasonal content is $425–$750. One AC repair call
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
