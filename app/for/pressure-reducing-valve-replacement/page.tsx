import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pressure Reducing Valve Replacement Companies in Kansas City",
  description:
    "Custom websites for pressure reducing valve replacement, PRV installation, and water pressure regulation companies in the Kansas City area. Show your KC municipal supply pressure, PRV setting range, and high pressure damage to appliances to win PRV replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pressure-reducing-valve-replacement",
  },
};

export default function PressureReducingValveReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pressure Reducing Valve Replacement Companies in Kansas City",
    description: "Custom websites for pressure reducing valve replacement and PRV installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pressure Reducing Valve Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their water pressure has gotten too strong, whether high pressure actually damages appliances, and what a pressure reducing valve does differently than adjusting at the meter. A website that explains KC municipal pressure and PRV setting ranges earns the replacement call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For PRV Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pressure Reducing Valve Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pressure reducing valve
              replacement customers
              are KC homeowners
              who notice water
              hammer — the loud
              banging or knocking
              sound in pipes when
              a faucet or washing
              machine valve closes
              quickly — or homeowners
              who notice their
              pressure-relief valve
              on the water heater
              weeping or discharging
              intermittently, or
              homeowners whose
              plumber measured
              water pressure above
              eighty PSI during
              a service call and
              recommended PRV
              replacement. The
              central education
              is why high water
              pressure matters:
              Kansas City Water
              maintains municipal
              supply pressure
              between forty and
              one hundred fifteen
              PSI depending on
              the elevation of
              the service area
              and the distance
              from the pumping
              station; homes in
              lower elevation
              neighborhoods or
              near a pumping
              station may receive
              eighty to one hundred
              PSI at the meter;
              the plumbing code
              maximum for residential
              systems is eighty
              PSI; above that
              level, water hammer
              becomes severe,
              appliance solenoid
              valves — dishwashers,
              washing machines,
              ice makers — experience
              shortened service
              life as the valve
              seats erode under
              repeated high-pressure
              water hammer; the
              water heater&apos;s
              temperature and
              pressure relief
              valve (T&P valve)
              may open intermittently
              because the thermal
              expansion of the
              water heater with
              a closed system
              — common in KC
              homes on city water
              with a PRV installed —
              raises pressure
              inside the tank
              above the T&P
              valve&apos;s setpoint;
              a failing or incorrectly
              set PRV is also
              common in KC homes
              as original brass
              PRVs corrode and
              lose their regulation
              ability after
              fifteen to twenty-five
              years. PRV function
              and setting: a
              pressure reducing
              valve is a spring-loaded
              valve installed
              on the main water
              supply line inside
              the house, typically
              near the water
              meter entry point;
              it reduces the
              incoming municipal
              pressure to a
              set residential
              pressure — the
              recommended KC
              residential setting
              is fifty to sixty
              PSI; an adjusting
              screw on the top
              of the valve allows
              the set pressure
              to be changed
              without replacement;
              a PRV that is
              working correctly
              but set too high
              can be adjusted;
              a PRV whose diaphragm
              has failed passes
              full line pressure
              to the house
              regardless of
              the adjustment
              setting and must
              be replaced. A
              KC PRV website
              that explains
              why high pressure
              damages appliances,
              how to identify
              a failed PRV,
              and what the correct
              residential pressure
              setting is earns
              the homeowner
              whose washing
              machine has been
              banging pipes
              for two years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before PRV replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC municipal supply pressure — pressure variation by neighborhood elevation, what to expect at the meter",
                  "High pressure damage — appliance solenoid valve wear, water hammer mechanism, T&P valve discharge cause",
                  "PRV function — how spring-loaded valve regulates pressure, adjustment range, when adjustment vs. replacement",
                  "Closed system and thermal expansion — why PRV installation creates thermal expansion risk, expansion tank requirement",
                  "How to measure pressure — pressure gauge at hose bib, what readings indicate PRV failure vs. incorrect setting",
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
                What your PRV replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Municipal pressure section — KC supply pressure range, why elevation affects residential pressure",
                  "High pressure damage section — water hammer explained, appliance solenoid failure timeline, T&P valve discharge",
                  "PRV function section — spring valve mechanism, adjustment vs. replacement decision, 50-60 PSI KC target",
                  "Closed system section — thermal expansion in KC homes with PRV, expansion tank installation alongside PRV",
                  "PRV lifespan section — 15-25 year brass PRV failure pattern, diaphragm failure signs, KC corrosion factors",
                  "Quote form with current symptoms (hammer, T&P weeping, pressure), home age, PRV location known or unknown",
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
                &ldquo;The T&P valve section
                is what brings in the
                right customers. KC homeowners
                see their water heater
                relief valve dripping
                and immediately think
                the heater is failing —
                they call me expecting
                a water heater quote.
                After the section explaining
                that thermal expansion
                in a closed system causes
                T&P discharge and that
                the fix is a PRV plus
                expansion tank, not
                a new water heater,
                customers come in understanding
                the actual diagnosis.
                The closed system section
                also adds an expansion
                tank to almost every
                PRV job because KC homes
                on city water without
                one are technically
                violating current code —
                homeowners don&apos;t
                know that until the
                site explains it.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Hartman, plumbing and pressure regulation, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A PRV replacement site with municipal pressure section, high-pressure
                damage guide, and quote form starts at $200. A full site with
                closed system explanation, expansion tank section, and PRV lifespan
                guide is $425–$750. One PRV replacement job covers the cost.
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
