import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Gas Line Installation Companies in Kansas City",
  description:
    "Custom websites for gas line installation, natural gas piping, and gas appliance connection companies in the Kansas City area. Show your pipe sizing, pressure testing, and permit process to win gas line contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/gas-line-installation",
  },
};

export default function GasLineInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Gas Line Installation Companies in Kansas City",
    description: "Custom websites for gas line installation and natural gas piping companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Gas Line Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their existing gas line can support a new appliance, what the permit process involves, and whether CSST or black iron pipe is appropriate for their project. A website that explains pipe sizing and pressure testing earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Gas Line Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Gas Line Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Gas line installation
              customers are homeowners
              adding a gas range,
              outdoor grill, fire
              pit, generator, or
              gas dryer where
              no gas currently
              exists, homeowners
              upgrading from
              a 60,000 BTU furnace
              to a 100,000 BTU
              unit who need to
              know if the existing
              meter and service
              line can supply
              the new load, or
              homeowners installing
              a tankless water
              heater and worried
              their existing gas
              line cannot supply
              199,000 BTU/hr
              at full fire. The
              central education
              is pipe sizing and
              pressure: gas pipe
              sizing is determined
              by total connected
              load in BTU/hr,
              the pipe material
              (steel has lower
              flow resistance
              per foot than CSST),
              the operating pressure
              (most residential
              systems: 0.25–0.5
              PSI at the meter,
              then reduced to
              household pressure
              through the regulator),
              and the total pipe
              length from meter
              to appliance. Pipe
              materials: black
              iron (schedule 40
              steel) — threaded
              and coupled, labor-intensive
              to route through
              walls and floors,
              maximum BTU per
              diameter, the traditional
              standard; CSST
              (corrugated stainless
              steel tubing —
              TracPipe, CounterStrike,
              Gastite) — flexible,
              faster to route,
              requires bonding
              wire to the electrical
              ground system to
              dissipate lightning-induced
              surge current that
              can perforate the
              corrugated wall;
              KCP&L territory in
              KC requires CSST
              bonding per NFPA
              54 and local amendments.
              Pressure testing:
              new gas piping must
              be pressure-tested
              at 1.5 times working
              pressure (typically
              1.5 PSI) and hold
              for 10–15 minutes
              before connection
              to appliances and
              inspection; KC/Johnson
              County building
              departments require
              permit and inspection
              before backfill
              and before gas
              is turned on. Meter
              capacity: the KCP&L
              residential meter
              is rated in CFH
              (cubic feet per
              hour) — most homes
              have a 175 CFH
              or 250 CFH meter;
              adding a 199,000
              BTU/hr tankless
              heater consumes
              approximately 193
              CFH alone; if existing
              furnace, water heater,
              and range are also
              on the meter, a
              175 CFH meter may
              require upgrade —
              meter upgrade is
              a utility function
              and requires a
              service call from
              Evergy/Spire. TPRV
              and drip leg: every
              appliance connection
              should have a shutoff
              valve and a drip
              leg (sediment trap)
              to catch pipe scale
              and condensate before
              it reaches the
              appliance valve.
              A gas line website
              that explains pipe
              sizing, CSST bonding
              requirements, and
              the permit process
              earns the homeowner
              who knows they
              need a new line
              but has no idea
              who does this work
              or what it involves.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a gas line installer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pipe sizing — BTU load, pipe diameter, length, and pressure drop — whether existing line can support new appliance",
                  "CSST vs. black iron — flexibility vs. flow, bonding requirement, when each is appropriate",
                  "Meter capacity — CFH rating, how to calculate total load, when a meter upgrade is needed",
                  "Pressure testing — 1.5x working pressure, hold time, why it must happen before inspection",
                  "Permit requirement — KC and Johnson/Jackson County process, what triggers permit requirement",
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
                What your gas line installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pipe sizing explainer — BTU to CFH conversion, pipe diameter chart, total load calculation",
                  "CSST section — bonding requirement, why bonding is required, black iron comparison for each application",
                  "Meter capacity section — how to read CFH rating, total load calculation, when to call Spire/Evergy",
                  "Pressure testing section — test procedure, what it confirms, why it is required before inspection",
                  "Permit section — KC area AHJ requirements, what the inspection covers, timeline to turn on gas",
                  "Quote form with appliance to connect, BTU requirement if known, distance from meter, existing pipe size",
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
                &ldquo;Gas line work is one
                of those trades where customers
                have no idea what's involved
                until they see a quote and
                think the number is too high.
                The website section on CSST
                bonding — why it's required,
                what happens if lightning
                hits an unbonded line —
                legitimized that line item
                immediately. The meter capacity
                section was just as important:
                two customers who were adding
                tankless heaters realized
                their 175 CFH meters were
                already at capacity and came
                in knowing they needed a
                meter upgrade before I even
                mentioned it. That's a
                much better conversation.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Burgess, plumbing and gas piping, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A gas line site with pipe sizing explainer, CSST
                section, and quote form starts at $200. A full
                site with meter capacity section, pressure testing
                content, and permit guide is $425–$750. One gas
                line installation covers the cost. No contracts,
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
