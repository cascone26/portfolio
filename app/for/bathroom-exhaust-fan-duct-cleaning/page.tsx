import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Bathroom Exhaust Fan Duct Cleaning Companies in Kansas City",
  description:
    "Custom websites for bathroom exhaust fan duct cleaning, bathroom fan lint removal, and bathroom vent duct service companies in the Kansas City area. Show your lint accumulation rate, KC humidity venting requirement, and backdraft damper failure pattern to win bathroom fan duct cleaning contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/bathroom-exhaust-fan-duct-cleaning",
  },
};

export default function BathroomExhaustFanDuctCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Bathroom Exhaust Fan Duct Cleaning Companies in Kansas City",
    description: "Custom websites for bathroom exhaust fan duct cleaning and bathroom vent service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Bathroom Exhaust Fan Duct Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why the bathroom fan runs but moisture still fogs the mirror, whether the duct going to the attic is making mold worse, and why the fan is louder than it used to be. A website that explains bathroom exhaust fan duct cleaning earns the bathroom ventilation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Bathroom Exhaust Fan Duct Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Bathroom Exhaust Fan Duct Cleaning</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Bathroom exhaust fan duct
              cleaning customers are
              KC homeowners whose bathroom
              fan has stopped moving
              enough air to clear steam
              after a shower even though
              the fan motor is running —
              the duct is partially
              or fully blocked with
              lint, dust, and condensed
              debris — homeowners who
              discover during an attic
              inspection that the bathroom
              duct terminates loosely
              in the attic space instead
              of through the roof or
              soffit, or homeowners
              whose fan grille has
              a heavy lint coating
              and the fan sounds labored
              when running, indicating
              the duct restriction
              is making the motor
              work against resistance.
              The central education
              is lint accumulation
              rate by duct length,
              the KC attic condensation
              problem from improper
              termination, and backdraft
              damper failure pattern —
              three things that explain
              why a bathroom fan that
              sounds fine can still
              be venting almost nothing.
              Lint accumulation: bathroom
              exhaust ducts accumulate
              a combination of lint
              from towels and clothing
              fibers, hair, dust, and
              condensed soap vapor
              that coats the duct
              interior; the accumulation
              rate is higher in flexible
              duct (the corrugated
              metallic or foil type
              common in KC homes because
              it is cheap and easy
              to route) than in smooth
              rigid metal duct — lint
              catches on the corrugations
              and builds up layer
              by layer; a 10-foot
              flexible duct can lose
              60–70% of its effective
              airflow to lint accumulation
              within five to eight
              years of regular use;
              the first sign is usually
              slower steam clearance,
              then visible lint at
              the grille, then audible
              motor strain as the
              restriction increases;
              cleaning the duct restores
              airflow and extends
              fan motor life — a motor
              running against restriction
              overheats and fails
              faster. Attic termination:
              KC homes built before
              1990 frequently have
              bathroom exhaust ducts
              that terminate into
              the attic space rather
              than through the roof
              or soffit — the original
              installer ran the duct
              to the attic because
              it was faster and easier;
              in summer, warm moist
              bathroom air venting
              into a KC attic at 130–150°F
              condenses on the cooler
              attic sheathing and
              framing; over time this
              causes sheathing staining,
              mold growth, and framing
              moisture damage; the
              attic condensation problem
              is often discovered
              during a roof replacement
              or attic insulation
              inspection; rerouting
              the duct to terminate
              properly through the
              roof or soffit is required
              before duct cleaning
              is meaningful — cleaning
              a duct that vents into
              the attic just distributes
              the moisture differently.
              Backdraft damper: every
              bathroom exhaust duct
              must have a backdraft
              damper at the exterior
              termination cap to prevent
              cold outside air from
              flowing back into the
              bathroom through the
              duct when the fan is
              off; in KC winter, a
              failed or stuck-open
              backdraft damper allows
              freezing air to enter
              the duct, condense against
              the warm interior surfaces,
              and produce ice buildup
              that partially blocks
              the duct; the backdraft
              damper is also a lint
              trap — the flap accumulates
              lint on both faces over
              time and eventually
              sticks closed, which
              restricts airflow even
              when the damper is supposed
              to open. A bathroom
              exhaust fan duct cleaning
              website that explains
              lint accumulation by
              duct type, why attic
              termination causes mold,
              and the backdraft damper
              failure mode earns the
              homeowner who knows
              the fan is not working
              but doesn&apos;t know why.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before bathroom exhaust fan duct cleaning
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Lint accumulation — flexible vs. rigid duct buildup rate, airflow loss percentage, 5-8 year cleaning interval",
                  "Attic termination — why venting to attic causes mold, condensation on sheathing, rerouting requirement",
                  "Backdraft damper — flap failure, lint buildup on flap faces, winter ice formation from outside air",
                  "Airflow testing — how to tell if fan is moving enough air, CFM measurement, mirror fog test limit",
                  "Motor strain — fan running against restriction, overheating, why cleaning extends motor life",
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
                What your bathroom exhaust fan duct cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Lint accumulation section — flexible vs. rigid duct buildup, airflow loss over time, cleaning interval guide",
                  "Attic termination section — pre-1990 KC improper routing, condensation damage, rerouting + cleaning package",
                  "Backdraft damper guide — failure modes, lint on flap, KC winter ice, inspection and replacement method",
                  "Airflow testing section — how to check CFM, signs of restriction, motor strain indicators",
                  "Duct material section — flexible foil vs. rigid metal, why flex duct accumulates lint faster",
                  "Quote form with duct length estimate, termination location, fan age, steam clearance problem, timeline",
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
                &ldquo;The attic termination section
                changed my business. I used
                to just clean ducts, and
                then during a job in a 1978
                house in Overland Park I
                opened the attic and found
                mold on three rafters from
                a bathroom duct that had
                been venting into the attic
                for forty years. After the
                section went up explaining
                why bathroom ducts that
                terminate in the attic cause
                mold and why cleaning alone
                doesn&apos;t fix it, homeowners
                started calling me to check
                the termination before cleaning —
                and about half of them in
                pre-1990 homes needed a
                reroute. The backdraft damper
                section also brought in
                calls from homeowners who
                had never heard of the damper.
                They had a full lint blockage
                on the flap and thought
                the fan was broken.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Voss, HVAC cleaning and bathroom ventilation, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A bathroom fan duct cleaning site with lint accumulation section,
                attic termination guide, and quote form starts at $200. A full
                site with KC mold context, backdraft damper content, and rerouting
                guide is $425–$750. One attic-termination reroute job covers
                the cost. No contracts, no monthly fees.
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
