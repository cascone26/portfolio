import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Boiler Repair Companies in Kansas City",
  description:
    "Custom websites for boiler repair, steam boiler, and hydronic heating companies in the Kansas City area. Show your boiler types, pressure relief safety, and zone valve diagnostics to win boiler repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/boiler-repair",
  },
};

export default function BoilerRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Boiler Repair Companies in Kansas City",
    description: "Custom websites for boiler repair and hydronic heating companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Boiler Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with older boiler systems want to know why one zone is cold while others heat fine, what a banging steam radiator means, and whether to repair an aging boiler or replace it. A website that explains boiler diagnostics and zone valve failures earns the repair call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Boiler Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Boiler Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Boiler repair customers
              are homeowners
              with an older
              home heated by
              a steam or hot
              water (hydronic)
              system — one
              zone is not
              heating, a radiator
              is banging or
              not getting hot,
              the boiler is
              short-cycling,
              pressure is
              dropping, or
              the system leaked
              over the winter
              while the house
              was vacant. KC
              has a significant
              stock of pre-1960
              homes with original
              steam and early
              hot water systems.
              The central education
              is the two boiler
              types and what
              causes each
              failure: steam
              boilers: generate
              steam that rises
              through supply
              risers to radiators,
              condensate returns
              by gravity or
              pump — the water
              level in a steam
              boiler must be
              maintained at
              the gauge glass
              midpoint; low
              water causes
              the low-water
              cutoff (LWCO)
              to shut down
              the burner —
              a common nuisance
              fault is a
              waterlogged LWCO
              float that sticks
              open, causing
              false lockout
              without a real
              low-water condition.
              Steam radiator
              banging: water
              hammer — condensate
              pooling in a
              supply pipe that
              has lost its
              proper pitch
              toward the boiler
              gets hit by
              incoming steam
              and creates
              the knock; pipe
              sag over decades
              or improper
              previous work
              causes this.
              Air vents on
              one-pipe steam
              radiators: the
              vent opens to
              allow air to
              escape as steam
              enters — a failed
              vent (stuck closed)
              prevents steam
              from entering
              the radiator;
              a vent stuck
              open allows
              steam to escape
              continuously,
              wasting fuel.
              Hot water (hydronic)
              boilers: circulate
              hot water through
              pipes and baseboards
              or radiators
              using a circulator
              pump — zone
              valves (Taco,
              Honeywell) open
              when a thermostat
              calls; a failed
              zone valve is
              the most common
              single-zone
              heating problem
              in KC multi-zone
              hydronic systems.
              Zone valve failure
              modes: valve
              head motor fails
              (valve stays
              closed — zone
              gets no heat);
              valve body sticks
              open (zone runs
              when not calling —
              overheating one
              area, robbing
              heat from others);
              end switch failure
              (valve opens
              but does not
              signal the boiler
              to fire). Expansion
              tank waterlogging:
              a bladder-type
              expansion tank
              that has lost
              its air charge
              causes pressure
              spikes on firing
              and relief valve
              weeping — a
              waterlogged tank
              must be recharged
              or replaced.
              Repair vs. replace:
              a cast iron
              sectional boiler
              in good section
              condition can
              last 30–40 years;
              the repair threshold
              is roughly when
              repair cost
              exceeds 50%
              of replacement
              cost at current
              age. A boiler
              repair website
              that explains
              steam vs. hydronic
              failure modes,
              why one cold
              zone points to
              the zone valve,
              and what banging
              radiators indicate
              earns the homeowner
              with a 1940s
              house who cannot
              find anyone
              who still works
              on steam systems.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before calling a boiler repair company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Steam vs. hot water — what distinguishes the two systems, how failure modes differ",
                  "Zone valve failures — stuck closed (no heat), stuck open (overheating), end switch failure",
                  "Steam radiator banging — water hammer cause, pipe pitch loss, what actually fixes it",
                  "Air vent diagnosis — stuck closed vs. stuck open, how to identify a failed vent",
                  "Repair vs. replace threshold — cast iron lifespan, at what cost ratio replacement makes more sense",
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
                What your boiler repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Steam system guide — how one-pipe steam works, LWCO function, gauge glass water level, common faults",
                  "Air vent section — role in one-pipe steam, failure modes, venting rate matching for balanced heating",
                  "Water hammer explainer — condensate pooling, pipe pitch loss over time, remediation options",
                  "Zone valve section — how motorized zone valves work, three failure modes and symptoms, Taco vs. Honeywell",
                  "Expansion tank section — bladder tank waterlogging, pressure spike symptoms, recharge vs. replace",
                  "Assessment form with system type (steam/HW), symptom description, boiler brand, number of zones",
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
                &ldquo;Steam systems are a
                specialty — most HVAC companies
                won't touch them. My customers
                in older KC neighborhoods
                had been turned away by
                three contractors before
                they found me. The website
                section on one-pipe steam,
                air vent function, and
                water hammer cut the diagnostic
                time on every call: customers
                arrived with a clear symptom
                description instead of
                just saying &lsquo;the upstairs
                is cold.&rsquo; The zone valve
                section for my hot water
                customers had the same
                effect — they checked whether
                the valve was opening before
                calling, which led to cleaner,
                faster service calls.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Poole, boiler and hydronic heating, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A boiler repair site with steam system guide,
                zone valve section, and assessment form starts
                at $200. A full site with air vent section,
                water hammer explainer, and expansion tank content
                is $425–$750. One boiler repair call covers the
                cost. No contracts, no monthly fees.
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
