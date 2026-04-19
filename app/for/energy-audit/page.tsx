import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Home Energy Audit Companies in Kansas City",
  description:
    "Custom websites for home energy audit, BPI building analyst, and energy efficiency assessment companies in the Kansas City area. Show your blower door, thermal imaging, and Manual J load calculations to win energy audit contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/energy-audit",
  },
};

export default function EnergyAuditPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Home Energy Audit Companies in Kansas City",
    description: "Custom websites for home energy audit and building performance assessment companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Home Energy Audit Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what a real energy audit includes, how thermal imaging finds problems that a visual inspection misses, and whether the audit report tells them what to fix first. A website that explains the diagnostic process earns the audit call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Energy Audits in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Home Energy Audit</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Energy audit customers
              are homeowners who
              had a contractor tell
              them their insulation
              is fine but bills
              are still high, homeowners
              preparing for a heat
              pump or major HVAC
              upgrade and wanting
              to know the actual
              load before sizing
              new equipment, or
              homeowners applying
              for utility rebates
              or IRA credits that
              require a documented
              energy assessment.
              The central education
              is what a professional
              energy audit includes
              vs. a utility company
              walkthrough: a BPI
              Building Analyst
              audit includes blower
              door test (measures
              whole-house infiltration
              at 50 Pascals), thermal
              imaging (IR camera
              finds missing insulation
              and air bypasses
              not visible to the
              eye), combustion
              safety testing (checks
              for backdrafting
              of gas appliances
              under depressurization),
              duct leakage testing
              (duct blaster — measures
              how much conditioned
              air leaks to unconditioned
              spaces), and utility
              bill analysis to
              calculate baseline
              energy use intensity.
              Thermal imaging interpretation:
              a FLIR or similar
              IR camera shows temperature
              differences in the
              building envelope —
              in winter, dark spots
              on the interior ceiling
              indicate missing or
              thin insulation; bright
              spots on the exterior
              indicate heat escaping;
              air infiltration shows
              as cold streaks entering
              at penetrations and
              gaps; the camera must
              be used with a minimum
              10°F delta between
              inside and outside
              to produce interpretable
              images. Manual J
              load calculation:
              a proper HVAC sizing
              calculation (ACCA
              Manual J, 8th edition)
              uses the audited
              building characteristics —
              actual insulation
              levels, measured
              infiltration rate,
              window area and U-value,
              occupancy — to determine
              the design heating
              and cooling loads;
              equipment sized to
              the actual load rather
              than rule-of-thumb
              prevents oversizing
              (short-cycling, humidity
              problems, reduced
              efficiency) and undersizing
              (failure to meet
              setpoint on design
              days). Utility rebates:
              Evergy (KC's utility)
              offers rebates for
              insulation, air sealing,
              and HVAC upgrades —
              some require a pre-existing
              energy assessment
              to qualify. IRA
              Section 25C home
              energy audit credit:
              $150 credit for a
              qualified energy
              audit performed by
              a certified auditor —
              audit must meet ASHRAE
              Level II requirements
              or be performed by
              a BPI-certified analyst.
              An energy audit website
              that explains what
              a full audit includes,
              how thermal imaging
              works, and how the
              results connect to
              equipment sizing
              and rebate qualification
              earns the homeowner
              who is ready to
              stop guessing and
              start measuring.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before scheduling an energy audit
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "What a real audit includes — blower door, thermal imaging, combustion safety, duct blaster vs. utility walkthrough",
                  "Thermal imaging — how IR cameras find missing insulation and air leaks, temperature delta requirement",
                  "Manual J load calculation — what it is, why it matters for equipment sizing, how audit data feeds it",
                  "Utility rebates — Evergy rebates that require energy assessment, qualification process",
                  "IRA 25C audit credit — $150 credit for qualified auditors, BPI certification requirement",
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
                What your energy audit website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Audit scope section — blower door, thermal imaging, combustion test, duct blaster, utility bill analysis",
                  "Thermal imaging explainer — how IR cameras work, what temperature delta is required, example findings",
                  "Manual J section — why equipment sizing from actual building data matters, short-cycling and humidity risk",
                  "Rebate and credit guide — Evergy rebate programs, IRA 25C audit credit, documentation needed",
                  "Certification section — BPI Building Analyst credential, ASHRAE Level II standard, what certification means",
                  "Audit booking form with home age, square footage, current comfort problems, upcoming equipment plans",
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
                &ldquo;The hardest part of selling
                an energy audit is that
                homeowners don't understand
                what they are paying for.
                The website section on what
                a BPI audit includes — versus
                the utility company's checklist
                walkthrough that gives you
                a pamphlet — set a clear
                expectation before the first
                call. The thermal imaging
                section with the explanation
                of the temperature delta
                requirement also helped:
                customers stopped calling
                in summer asking for an
                IR inspection that would
                show nothing, and started
                scheduling fall audits
                when the imaging would
                actually reveal something
                worth fixing.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Marsh, BPI Building Analyst, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An energy audit site with audit scope section,
                thermal imaging explainer, and booking form starts
                at $200. A full site with Manual J section, rebate
                guide, and IRA credit content is $425–$750. One
                full energy audit covers the cost. No contracts,
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
