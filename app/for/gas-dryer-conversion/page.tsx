import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Gas Dryer Conversion Companies in Kansas City",
  description:
    "Custom websites for gas dryer conversion, electric to gas appliance conversion, and gas line extension companies in the Kansas City area. Show your KC gas line sizing, dryer BTU requirements, and 110V vs. 240V outlet differences to win gas dryer conversion contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/gas-dryer-conversion",
  },
};

export default function GasDryerConversionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Gas Dryer Conversion Companies in Kansas City",
    description: "Custom websites for gas dryer conversion and gas line extension companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Gas Dryer Conversion Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether converting their electric dryer hookup to gas actually saves money on utility bills in KC, what adding a gas line to the laundry room involves, and whether they need a permit for a gas dryer hookup. A website that explains BTU requirements and gas line sizing earns the conversion call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Gas Dryer Conversion in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Gas Dryer Conversion</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Gas dryer conversion
              customers are KC homeowners
              who currently have
              an electric dryer
              and want to switch
              to gas — either because
              they are replacing
              a worn-out electric
              dryer and the new
              dryer they want
              is gas-only, because
              a plumber or HVAC
              contractor mentioned
              the gas line could
              be extended while
              doing other work,
              or because a neighbor
              told them gas dryers
              dry faster and cost
              less per load in
              Kansas City where
              natural gas rates
              are lower than electricity
              on a BTU-equivalent
              basis. The central
              education is what
              a gas dryer conversion
              actually requires:
              a gas dryer needs
              a gas supply line
              terminated with
              a shutoff valve
              and flexible appliance
              connector within
              six feet of the
              dryer location —
              if the laundry room
              does not already
              have a gas line,
              a new branch must
              be run from the
              nearest gas supply
              line in the house,
              which may be the
              furnace or water
              heater line; the
              gas dryer also
              requires a standard
              one-hundred-ten-volt
              outlet (which is
              almost always present
              since all dryer
              locations have
              power) for the
              igniter and controls —
              the two-hundred-forty-volt
              outlet used by
              an electric dryer
              is not needed
              for a gas model
              but does not hurt
              to leave in place.
              BTU requirements:
              a residential gas
              dryer uses approximately
              twenty thousand
              to twenty-two thousand
              BTU input; a
              three-quarter-inch
              gas branch line
              at typical KC
              residential pressure
              (seven inches water
              column) can supply
              a dryer load with
              sufficient capacity —
              the branch does
              not require upgrading
              the main gas meter
              or service line
              in most KC homes
              because the dryer
              BTU demand is
              small relative
              to a furnace or
              tankless water
              heater. Permit
              requirement: adding
              a new gas line
              or extending an
              existing gas branch
              in Kansas City
              requires a mechanical
              permit; the work
              must be performed
              by a licensed
              plumber or licensed
              mechanical contractor;
              the gas company
              inspects the connection
              before the line
              is put into service;
              connecting the
              flexible appliance
              connector to an
              existing capped
              gas outlet does
              not typically
              require a permit
              — but installing
              the new outlet
              does. A KC gas
              dryer conversion
              website that explains
              what the gas line
              work involves,
              what the outlet
              situation requires,
              and whether the
              conversion saves
              money earns the
              homeowner ready
              to upgrade their
              laundry room.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before gas dryer conversion
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Gas vs. electric dryer cost in KC — BTU equivalence, natural gas rate vs. electricity rate, cost per load comparison",
                  "What the conversion requires — gas line extension, shutoff valve, flexible connector, 110V outlet confirmation",
                  "Gas line sizing — BTU demand for dryer, three-quarter-inch branch capacity, meter upgrade need assessment",
                  "Permit requirement — KC mechanical permit for new gas branch, licensed contractor requirement, inspection process",
                  "Dryer vent requirement — gas dryers require the same venting as electric, no exception for shorter run",
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
                What your gas dryer conversion website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cost comparison section — KC natural gas vs. electricity rates, BTU equivalent, realistic per-load savings",
                  "Conversion requirements section — gas line branch, shutoff valve placement, flexible connector, 110V outlet",
                  "Gas line section — BTU demand, branch sizing, distance from nearest supply, when main line work is needed",
                  "Permit section — KC mechanical permit for new gas work, licensed contractor requirement, inspection timeline",
                  "Dryer vent section — why gas dryers need the same venting, rigid duct requirement, permit if vent is rerouted",
                  "Quote form with laundry room location, nearest gas appliance, current electric outlet type, dryer already purchased",
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
                &ldquo;The cost section is
                what converts the
                &apos;maybe someday&apos;
                into a call. KC homeowners
                are skeptical that
                gas dryers save money
                — they assume the price
                of running a new gas
                line offsets the savings.
                After the section showing
                that a dryer branch
                line from the nearby
                water heater costs one
                to three hundred dollars
                and pays back in twelve
                to eighteen months on
                utility savings, customers
                start asking when I can
                come out instead of
                whether it makes sense.
                The permit section also
                matters — KC homeowners
                who don&apos;t know they
                need a licensed plumber
                for the gas line sometimes
                try to buy the parts
                and DIY it. Having it
                explained up front
                sets the right expectation.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — V. Okonkwo, gas line and appliance hookup, Kansas City, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A gas dryer conversion site with cost comparison, conversion
                requirements section, and quote form starts at $200. A full site
                with gas line sizing guide, permit section, and dryer vent guide
                is $425–$750. One gas line run covers the cost. No contracts,
                no monthly fees.
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
