import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pressure Relief Valve Replacement Companies in Kansas City",
  description:
    "Custom websites for water heater pressure relief valve replacement, TPR valve replacement, and water heater safety valve companies in the Kansas City area. Show your TPR valve drip diagnosis, KC water pressure and thermal expansion interaction, and discharge pipe requirement to win pressure relief valve contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pressure-relief-valve-replacement",
  },
};

export default function PressureReliefValveReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pressure Relief Valve Replacement Companies in Kansas City",
    description: "Custom websites for water heater TPR valve replacement and pressure relief valve service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pressure Relief Valve Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why water is dripping from the pipe on the side of their water heater, whether a dripping TPR valve means the water heater needs to be replaced, and whether they can just plug the drip pipe. A website that explains pressure relief valve replacement earns the call before they ignore a safety device that needs to work. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pressure Relief Valve Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pressure Relief Valve Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pressure relief valve
              replacement customers
              are KC homeowners who
              notice water dripping
              from the discharge
              pipe on the side of
              their water heater —
              a pipe that runs from
              the temperature and
              pressure relief (TPR)
              valve down to the floor
              or into a floor drain
              — and want to know
              whether the drip means
              the valve itself is
              faulty or whether the
              system pressure or
              temperature has exceeded
              the valve&apos;s set point
              and the valve is functioning
              correctly; homeowners
              who were told the TPR
              valve needs replacement
              and do not understand
              why it is a safety
              device and not just
              a plumbing fitting,
              or homeowners in KC
              homes with a closed
              water supply system
              (a pressure-reducing
              valve or check valve
              at the meter) where
              thermal expansion of
              heated water causes
              the system pressure
              to rise above the TPR
              valve set point and
              trigger regular small
              drips. The central
              education is TPR valve
              function and failure
              modes, KC thermal expansion
              and closed system pressure,
              and the discharge pipe
              requirement — three
              things that determine
              whether a dripping
              TPR valve needs valve
              replacement, expansion
              tank installation, or
              pressure reduction.
              TPR valve function:
              the temperature and
              pressure relief valve
              is a safety device
              mounted on the water
              heater tank — it opens
              automatically if the
              water temperature exceeds
              210 degrees Fahrenheit
              or the tank pressure
              exceeds 150 psi; these
              thresholds represent
              dangerous operating
              conditions where the
              tank could rupture;
              the valve discharges
              hot water through the
              discharge pipe to relieve
              the dangerous condition;
              a TPR valve that drips
              continuously at normal
              operating conditions
              has either a faulty
              valve seat that no
              longer seals completely
              or is responding to
              a genuine overpressure
              condition; a TPR valve
              should never be tested
              by manually lifting
              the lever on a valve
              that has never been
              tested — the valve
              may not reseat completely
              after manual opening
              on a valve with mineral
              deposits on the seat;
              a TPR valve that has
              been dripping for a
              long time has mineral
              buildup on the seat
              from KC hard water
              deposits that prevents
              full reseating and
              requires replacement.
              KC thermal expansion:
              KC Water Services installs
              pressure-reducing valves
              at the meter connection —
              these create a closed
              system where the expansion
              of heated water cannot
              return to the main;
              when a water heater
              heats water from sixty
              to one hundred twenty
              degrees, the water
              volume increases by
              approximately two percent —
              in a fifty-gallon tank,
              that is one gallon of
              volume increase; in
              a closed system, this
              expansion raises system
              pressure significantly;
              if the system pressure
              rises above 150 psi,
              the TPR valve opens;
              the correct solution
              for thermal expansion
              dripping is installation
              of a thermal expansion
              tank — a small pressurized
              tank that absorbs the
              expansion volume and
              prevents the pressure
              rise. Discharge pipe:
              the TPR valve discharge
              pipe must run to within
              six inches of the floor
              or to a floor drain —
              it cannot be plugged,
              capped, or connected
              to a drain trap; a
              plugged discharge pipe
              is a code violation
              and a safety hazard
              because the valve cannot
              discharge during a
              dangerous pressure event;
              replacement TPR valves
              must match the BTU
              rating of the water
              heater and the working
              pressure of the system.
              A pressure relief valve
              website that explains
              TPR function and failure,
              KC closed system thermal
              expansion, and discharge
              pipe requirements earns
              the homeowner who found
              a puddle under their
              water heater and wants
              to understand it before
              calling anyone.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before pressure relief valve replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "TPR valve function — temperature and pressure thresholds, what the valve does during a dangerous event",
                  "Drip cause — faulty valve seat vs. genuine overpressure, KC hard water mineral buildup on seat",
                  "Thermal expansion — closed KC water system, 2% volume increase on heating, expansion tank solution",
                  "Discharge pipe — code requirement, why it can't be plugged, floor drain vs. air gap spec",
                  "Valve replacement — BTU rating match, pressure rating, why manual testing old valves is risky",
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
                What your pressure relief valve replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "TPR function section — temperature/pressure set points, what happens at dangerous conditions, why it matters",
                  "Drip diagnosis section — faulty seat vs. overpressure drip, KC hard water seat deposit failure mode",
                  "Thermal expansion section — KC closed water system, pressure rise mechanics, expansion tank as the real fix",
                  "Discharge pipe section — code requirement, never-plug rule, correct termination location",
                  "Replacement guide — BTU rating match, pressure rating selection, what a new valve service includes",
                  "Quote form with water heater age, drip frequency, system pressure if known, closed system question, timeline",
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
                &ldquo;The thermal expansion
                section is what stopped
                the repeat valve replacements.
                KC has a lot of homes
                where I&apos;d replace a TPR
                valve, it&apos;d drip again
                in eighteen months,
                and the customer would
                call frustrated. After
                the section went up
                explaining that KC
                Water Services installs
                PRVs at the meter and
                creates a closed system
                where thermal expansion
                has nowhere to go,
                customers started asking
                about the expansion
                tank at the first call.
                The discharge pipe section
                also stopped some dangerous
                situations — I&apos;ve shown
                up to homes where
                a previous handyman
                had capped the discharge
                pipe to stop the drip.
                Explaining that a capped
                discharge pipe is a
                safety hazard that
                prevents the valve
                from working during
                an actual emergency
                made the repair urgent
                rather than optional.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Petersen, plumbing and water heater service, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pressure relief valve site with TPR function section, drip
                diagnosis guide, and quote form starts at $200. A full site with
                KC thermal expansion content, discharge pipe guide, and expansion
                tank section is $425–$750. One valve replacement and expansion
                tank call covers the cost. No contracts, no monthly fees.
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
