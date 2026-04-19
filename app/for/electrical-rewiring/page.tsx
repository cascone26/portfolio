import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Electrical Rewiring Companies in Kansas City",
  description:
    "Custom websites for electrical rewiring, knob-and-tube removal, aluminum wiring remediation, and AFCI upgrade companies in the Kansas City area. Show your safety assessment process, wiring hazard guide, and permit experience to win rewiring contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/electrical-rewiring",
  },
};

export default function ElectricalRewiringPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Electrical Rewiring Companies in Kansas City",
    description: "Custom websites for electrical rewiring and wiring hazard remediation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Electrical Rewiring Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their knob-and-tube wiring is actually dangerous, what aluminum wiring remediation involves, and whether AFCI breakers require full rewiring or just a panel swap. A website that explains the real hazard and the real fix earns the assessment call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Electrical Rewiring in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Electrical Rewiring</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Electrical rewiring
              customers are KC homeowners
              in older homes who
              discovered knob-and-tube
              or aluminum wiring
              during a renovation,
              homeowners whose
              insurance company
              flagged the wiring
              as a condition of
              coverage, or homeowners
              adding circuits for
              a kitchen remodel
              or EV charger who
              learned their existing
              wiring cannot support
              the load. KC has
              a significant stock
              of pre-1950 homes
              in neighborhoods like
              Westport, Brookside,
              and Waldo where
              knob-and-tube wiring
              is still active.
              The central education
              is what each wiring
              type means, what
              the actual hazard
              is, and what the
              remediation involves.
              Knob-and-tube wiring:
              installed in homes
              built before 1940,
              knob-and-tube uses
              individual insulated
              conductors routed
              through ceramic
              knobs and tubes —
              it has no ground
              conductor, cannot
              support three-prong
              outlets without
              a GFCI workaround,
              and the original
              rubber insulation
              degrades and cracks
              over decades; the
              primary hazard is
              insulation failure
              at connections and
              where wire runs
              through structural
              members — not the
              wire itself if
              undisturbed; knob-and-tube
              that has been covered
              with insulation
              is a documented
              fire risk because
              it cannot dissipate
              heat; full replacement
              involves running
              new NM-B (Romex)
              cable through walls,
              fishing finished
              walls, and new panel
              circuits. Aluminum
              wiring: used from
              approximately 1965–1973
              when copper prices
              spiked, aluminum
              branch circuit wiring
              (15A and 20A circuits)
              expands and contracts
              more than copper
              under thermal cycling,
              causing connections
              to loosen at outlets,
              switches, and panel
              terminations — loose
              connections arc
              and overheat; CO/ALR-rated
              devices (receptacles
              and switches rated
              for aluminum) accept
              aluminum at their
              terminals correctly;
              AlumiConn or Ideal
              In-Sure connectors
              (listed aluminum-to-copper
              splice connectors)
              allow pigtailing
              copper tails at
              each device — this
              is the CPSC-accepted
              remediation short
              of full rewiring;
              full rewiring replaces
              all aluminum branch
              circuits with copper.
              Arc fault circuit
              interrupters: AFCI
              breakers detect
              the electrical signature
              of arcing faults —
              parallel arc (wire-to-wire)
              and series arc (loose
              connection) — that
              a standard breaker
              does not trip on;
              NEC 2020 (adopted
              in Kansas and Missouri
              jurisdictions) requires
              AFCI protection
              in all bedroom, living
              room, kitchen, laundry,
              and hallway circuits;
              AFCI protection
              can be added to
              existing circuits
              by replacing the
              panel breaker (no
              rewiring required
              if wiring is sound);
              combination AFCI/GFCI
              breakers protect
              against both arc
              faults and ground
              faults on a single
              circuit. Permitting:
              rewiring work in
              KC requires an
              electrical permit
              and inspection —
              the inspection verifies
              conductor sizing,
              box fill, stapling
              intervals, and AFCI/GFCI
              compliance; insurance
              companies increasingly
              require permitted
              and inspected work
              to process claims;
              a licensed electrician
              can pull the permit;
              homeowner permits
              are available but
              require owner-occupancy.
              An electrical rewiring
              website that explains
              the difference between
              a knob-and-tube
              hazard and a nuisance,
              what aluminum wiring
              remediation actually
              involves, and what
              AFCI protection
              adds without full
              rewiring earns the
              homeowner who got
              a flagged inspection
              report and doesn't
              know what it means.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring an electrical rewiring company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Knob-and-tube wiring — insulation degradation, no-ground hazard, why insulation coverage is a fire risk",
                  "Aluminum wiring remediation — CO/ALR devices, AlumiConn pigtailing vs. full rewiring, CPSC-accepted methods",
                  "AFCI breakers — what arcing faults are, NEC 2020 requirements, panel swap vs. full circuit rewiring",
                  "Insurance flagging — why insurers require remediation, permitted work documentation, what satisfies underwriters",
                  "Permitting process — KC electrical permit requirement, inspection scope, licensed vs. homeowner permit",
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
                What your electrical rewiring website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Knob-and-tube guide — how to identify it, actual vs. perceived hazard, insulation coverage risk, replacement scope",
                  "Aluminum wiring section — thermal cycling problem, CO/ALR devices, pigtailing method, when full rewiring is needed",
                  "AFCI section — arc fault detection, NEC 2020 requirements, breaker replacement without rewiring",
                  "Insurance section — what flagged wiring means for coverage, permitted work documentation, underwriter requirements",
                  "Permitting guide — KC permit process, what the inspection covers, timeline for permitted rewiring work",
                  "Assessment form with home age, wiring type if known, insurance flag details, circuits or areas of concern",
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
                &ldquo;The aluminum wiring section
                changed how I quote those
                jobs. Before, every aluminum
                wiring call turned into an
                hour of me explaining the
                pigtailing method vs. full
                rewiring to a skeptical homeowner
                who thought I was overselling.
                After I added the section
                explaining the CPSC-accepted
                remediation options and what
                each involves, customers came
                in already knowing the difference
                between a $1,200 pigtail job
                and a $6,000 rewire — and
                they arrived trusting the
                recommendation because they'd
                read the reasoning. The insurance
                section also brought in a
                completely new customer type:
                people who just got a flagged
                inspection and don't know
                what to do next. Those calls
                convert almost every time.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Kowalski, licensed electrician, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An electrical rewiring site with knob-and-tube guide,
                AFCI section, and assessment form starts at $200.
                A full site with aluminum wiring remediation guide,
                insurance section, and permitting content is $425–$750.
                One rewiring job covers the cost. No contracts, no
                monthly fees.
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
