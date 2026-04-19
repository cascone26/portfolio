import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for AC Installation Companies in Kansas City",
  description:
    "Custom websites for central air conditioner installation, AC replacement, and cooling system companies in the Kansas City area. Show your SEER2 ratings, Manual J load calculations, and R-454B refrigerant transition to win AC installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/ac-installation",
  },
};

export default function AcInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for AC Installation Companies in Kansas City",
    description: "Custom websites for central air conditioner installation and cooling system companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for AC Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what SEER2 means in actual energy cost, whether variable-speed is worth the premium, and what the R-410A phase-out means for future repair costs. A website that explains the real differences earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For AC Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">AC Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              AC installation customers
              are KC homeowners whose
              central air conditioner
              is 12–18 years old
              and having refrigerant
              leaks or compressor
              failures, homeowners
              replacing a complete
              HVAC system and wanting
              to understand the
              difference between
              equipment tiers, or
              homeowners who've
              heard about the R-410A
              refrigerant phase-out
              and want to understand
              how it affects their
              options. The central
              education is what
              the rating numbers
              mean in real dollars
              and what the refrigerant
              transition means
              for equipment decisions.
              SEER2 rating: Seasonal
              Energy Efficiency
              Ratio 2 — updated
              test standard effective
              January 2023, measures
              cooling output (BTU)
              divided by electrical
              input (watt-hours)
              over a typical cooling
              season; SEER2 ratings
              are approximately
              5% lower than the
              old SEER ratings
              for the same equipment;
              KC minimum code
              is 14.3 SEER2 (equivalent
              to old 15 SEER);
              a 18 SEER2 unit
              vs. 14.3 SEER2 on
              a 3-ton system at
              KC's 1,200 cooling
              hours uses approximately
              21% less electricity —
              at $0.12/kWh, saves
              roughly $120–$150/year.
              Single-stage vs.
              two-stage vs. variable-speed:
              single-stage compressor
              runs at 100% capacity
              whenever cooling —
              short cycles in
              mild weather, temperature
              swings, less effective
              dehumidification
              (cold coil contact
              time too short);
              two-stage runs at
              65% first stage in
              mild weather, longer
              run times, better
              dehumidification;
              variable-speed (inverter-driven)
              compressors modulate
              from 30–100% capacity —
              highest comfort and
              dehumidification,
              significant premium
              but appropriate for
              KC's humid summers
              where latent load
              matters as much
              as sensible cooling.
              Refrigerant transition:
              R-410A production
              and import caps began
              in 2024 under AIM
              Act regulations;
              new residential AC
              equipment must use
              lower-GWP refrigerants
              by 2025 — R-454B
              (Puron Advance, Carrier)
              and R-32 are the
              primary replacements;
              R-410A systems being
              installed today
              can still be serviced
              with recovered/reclaimed
              R-410A for the life
              of the equipment,
              but new refrigerant
              will become increasingly
              expensive; R-454B
              equipment is mildly
              flammable (A2L classification) —
              requires arc flash
              protection at the
              disconnect, cannot
              be retrofitted from
              R-410A. Manual J
              load calculation:
              AC tonnage should
              match the design
              cooling load — ACCA
              Manual J uses insulation,
              window area, solar
              orientation, and
              KC design temperature
              (95°F, 50% RH, 1%
              design condition)
              to determine correct
              size; oversized
              AC short-cycles,
              leaving humidity
              high and creating
              mold risk in KC's
              humid summers; the
              old rule of 500
              sq ft/ton is not
              accurate for energy-efficient
              homes. Line set and
              refrigerant charge:
              the line set (copper
              suction and liquid
              lines) connects
              the indoor coil
              to the outdoor condenser;
              refrigerant is charged
              to the manufacturer's
              subcooling or superheat
              specification, not
              by the "feels right"
              method; line sets
              over 50 feet require
              a refrigerant charge
              adjustment per manufacturer
              table; existing line
              sets can often be
              reused if clean
              and properly sized.
              IRA Section 25C:
              $600 credit for
              a qualifying 16+
              SEER2 central AC
              or heat pump (Energy
              Star certified).
              An AC installation
              website that explains
              SEER2 in real dollars,
              what variable-speed
              means for KC's humid
              summer comfort, and
              what the refrigerant
              transition means
              for equipment decisions
              earns the homeowner
              who wants to make
              an informed choice
              and not just the
              cheapest one.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before replacing a central AC
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "SEER2 vs. old SEER — what changed in 2023, how to compare ratings, annual savings calculation at KC utility rates",
                  "Variable-speed for humidity — why KC summers make latent load matter, dehumidification difference vs. single-stage",
                  "R-410A phase-out — what the AIM Act means, R-454B transition, whether to buy now or wait",
                  "Manual J sizing — why tonnage-per-square-foot is wrong, oversizing and humidity risk in KC summers",
                  "IRA 25C credit — $600 for qualifying 16+ SEER2 equipment, Energy Star certification requirement",
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
                What your AC installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "SEER2 explainer — efficiency rating in actual kWh and dollars, KC cooling hours, comparison by tier",
                  "Variable-speed section — latent vs. sensible load, dehumidification performance, KC humidity context",
                  "Refrigerant transition guide — R-410A phase-out timeline, R-454B equipment, what existing owners should know",
                  "Manual J section — KC design conditions, oversizing consequences, humidity and comfort tradeoffs",
                  "IRA credit section — 25C credit for high-efficiency AC, qualifying SEER2 threshold, documentation",
                  "Quote form with current system age and size if known, comfort complaints (temperature vs. humidity), budget priority",
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
                &ldquo;Every customer who called
                me had been quoted a 4-ton
                unit by three other contractors
                on a 1,900 sq ft house. The
                Manual J section explaining
                why we don't size by square
                footage — and why 3 tons was
                actually correct for this
                house — was the thing that
                earned the trust. I also
                added the KC humidity section
                after two summers of callbacks
                from customers who said their
                house felt clammy even when
                the temperature was right.
                The variable-speed dehumidification
                explanation converted a
                significant number of those
                customers to the premium
                tier, which more than covered
                what the site cost me in
                the first three months.
                The refrigerant section
                also stopped the 'I heard
                R-410A is going away, should
                I wait?' calls cold — customers
                arrived with that question
                already answered.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Lindberg, AC installation and HVAC, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An AC installation site with SEER2 explainer, Manual
                J section, and quote form starts at $200. A full
                site with variable-speed humidity section, refrigerant
                transition guide, and IRA credit content is $425–$750.
                One variable-speed installation covers the cost.
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
