import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Duct Sealing Companies in Kansas City",
  description:
    "Custom websites for duct sealing, Aeroseal, mastic sealing, and duct leakage testing companies in the Kansas City area. Show your duct blaster testing, leakage-to-outside percentages, and Aeroseal process to win duct sealing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/duct-sealing",
  },
};

export default function DuctSealingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Duct Sealing Companies in Kansas City",
    description: "Custom websites for duct sealing and duct leakage testing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Duct Sealing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why some rooms are always hot or cold even after a new HVAC system, what duct leakage actually costs in wasted energy, and whether Aeroseal works in their home. A website that explains duct leakage testing and the sealing process earns the contract. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Duct Sealing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Duct Sealing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Duct sealing customers
              are KC homeowners who
              have rooms that never
              reach setpoint despite
              a new HVAC system,
              homeowners with high
              utility bills and
              an otherwise efficient
              system, or homeowners
              who were told by a
              home energy auditor
              that their duct system
              is losing conditioned
              air to the attic or
              crawl space. The
              central education
              is what duct leakage
              to unconditioned space
              means and why it's
              different from leakage
              between rooms. Duct
              leakage to outside
              (Qn,out): conditioned
              air escaping from
              supply ducts into
              the attic, crawl
              space, or garage —
              this air is lost
              entirely from the
              living space; typical
              existing homes lose
              15–30% of system
              airflow this way;
              DOE studies show
              duct leakage is
              responsible for 25–40%
              of heating and cooling
              energy waste in homes
              with ducts in unconditioned
              space. Duct blaster
              test: a calibrated
              fan seals to the
              duct system (registers
              taped) and pressurizes
              to 25 Pascals —
              result expressed
              in CFM25 (cubic feet
              per minute at 25
              Pascals); leakage
              to outside is measured
              by comparing total
              leakage with house
              pressurized and
              unpressurized; Energy
              Star new construction
              target is 4 CFM25
              per 100 sq ft of
              floor area; existing
              KC homes commonly
              test at 15–30 CFM25
              per 100 sq ft. Manual
              sealing methods:
              mastic sealant (water-based,
              fiberglass mesh for
              gaps over 1/4 inch,
              paintbrush applied,
              remains flexible)
              is the preferred
              method at accessible
              joints and connections;
              UL 181-rated foil
              tape is code-compliant
              for metal ducts
              but requires clean
              surfaces and may
              peel under thermal
              cycling; duct tape
              (cloth) is not code-compliant
              for HVAC ducts and
              fails within 5–10
              years. Aeroseal duct
              sealing: pressurizes
              the duct system
              with a mist of acrylate
              polymer particles
              (similar to Elmer's
              Glue) — particles
              travel to leakage
              sites and accumulate
              at edges, sealing
              gaps from the inside
              out; effective on
              leaks up to approximately
              5/8-inch diameter;
              computer-controlled
              process measures
              and documents leakage
              before and after;
              typical results:
              reduce duct leakage
              by 90% in 4–6 hours
              without accessing
              inaccessible ducts
              in finished walls
              and ceilings. Duct
              insulation: leakage
              sealing addresses
              airflow loss but
              not conduction loss
              through duct walls —
              ducts in attics
              should be insulated
              to R-8 (KC code),
              existing flex duct
              at R-4 to R-6 should
              be replaced or supplemented;
              thermal bridging
              at metal duct connections
              in unconditioned
              space reduces effective
              insulation by 25–50%.
              A duct sealing website
              that explains what
              leakage to outside
              means in dollars,
              how duct blaster
              testing quantifies
              the problem before
              and after, and what
              Aeroseal does that
              manual sealing cannot
              earns the homeowner
              who knows something
              is wrong but has
              been told the equipment
              is fine.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a duct sealing company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Duct leakage to outside — what it means, how much conditioned air is typically lost, energy cost impact",
                  "Duct blaster test — how it works, what CFM25 means, Energy Star target vs. typical existing homes",
                  "Mastic vs. tape vs. duct tape — which materials are code-compliant, which fail under thermal cycling",
                  "Aeroseal process — how acrylate particles seal from inside, what size leaks it addresses, before/after documentation",
                  "Duct insulation — why sealing and insulating are separate problems, R-8 requirement for attic ducts",
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
                What your duct sealing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Leakage-to-outside section — unconditioned space ducts, airflow loss percentage, energy waste estimate",
                  "Duct blaster testing guide — test procedure, CFM25 measurement, existing home benchmarks vs. targets",
                  "Sealing method comparison — mastic vs. UL 181 tape vs. duct tape, code compliance, longevity",
                  "Aeroseal section — how the process works, what it seals and what it doesn't, before/after documentation",
                  "Duct insulation section — R-value requirements, flex duct insulation levels, conduction vs. leakage loss",
                  "Assessment form with home age, HVAC system age, rooms with comfort complaints, existing duct access",
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
                &ldquo;The single biggest sales
                problem I had was that customers
                didn't believe duct leakage
                could be the issue after
                they'd just spent $12,000
                on a new HVAC system. The
                website section showing a
                duct blaster test result —
                with an existing home at
                22 CFM25 vs. the Energy Star
                target of 4 — made the problem
                visible in a way that a verbal
                explanation never could.
                After I added the section
                on how Aeroseal documents
                leakage before and after
                with printed reports, I stopped
                getting pushback entirely.
                Customers arrived expecting
                to see data, and the data
                either confirmed the problem
                or told us the ducts weren't
                the issue. Either outcome
                was worth the appointment.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Kim, duct sealing and home performance, Kansas City, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A duct sealing site with leakage-to-outside section,
                duct blaster guide, and assessment form starts at
                $200. A full site with Aeroseal section, sealing
                method comparison, and duct insulation content is
                $425–$750. One Aeroseal job covers the cost. No
                contracts, no monthly fees.
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
