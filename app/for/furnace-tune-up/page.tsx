import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Furnace Tune-Up Companies in Kansas City",
  description:
    "Custom websites for furnace tune-up, annual furnace maintenance, and heating system inspection companies in the Kansas City area. Show your heat exchanger inspection, combustion analysis, and what a tune-up actually includes to win maintenance contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/furnace-tune-up",
  },
};

export default function FurnaceTuneUpPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Furnace Tune-Up Companies in Kansas City",
    description: "Custom websites for furnace tune-up and heating maintenance companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Furnace Tune-Up Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what a furnace tune-up actually checks, why heat exchanger inspection matters for carbon monoxide safety, and what separates a $49 special from a real maintenance visit. A website that explains combustion analysis and what gets inspected earns the annual maintenance call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Furnace Tune-Ups in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Furnace Tune-Up</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Furnace tune-up
              customers are homeowners
              scheduling fall
              maintenance before
              the KC heating
              season, homeowners
              who received
              a mailer from
              an HVAC company
              offering a $49
              tune-up and
              want to know
              if it is worth
              doing, or homeowners
              whose furnace
              is over 10 years
              old and who
              heard that heat
              exchanger cracking
              is a carbon
              monoxide risk.
              The central education
              is what a proper
              furnace tune-up
              includes and
              why cheap specials
              often skip the
              most critical
              inspection items:
              heat exchanger
              inspection is
              the safety-critical
              component of
              a furnace tune-up —
              a cracked heat
              exchanger allows
              combustion gases
              (including carbon
              monoxide) to
              enter the air
              supply and distribute
              through the
              home; cracks
              form at stress
              points from
              repeated thermal
              expansion and
              contraction,
              typically after
              15–20 years
              but accelerated
              by oversized
              furnaces, dirty
              filters reducing
              airflow, and
              short-cycling.
              Visual inspection
              vs. camera inspection:
              a visual heat
              exchanger inspection
              can miss hairline
              cracks not visible
              without removing
              the blower —
              a thorough inspection
              includes inserting
              an inspection
              camera into
              the heat exchanger
              cells or performing
              a combustion
              analysis that
              reveals combustion
              gas presence
              in the supply
              air. Combustion
              analysis: a
              combustion analyzer
              (Bacharach, Testo)
              measures flue
              gas composition —
              CO, CO2, O2,
              excess air, stack
              temperature —
              and calculates
              combustion efficiency;
              an over-fired
              or under-fired
              burner, dirty
              burner ports,
              or partially
              blocked heat
              exchanger changes
              the combustion
              reading. What
              a tune-up includes
              beyond safety:
              inducer motor
              amp draw (failing
              inductors draw
              high before
              failure), igniter
              resistance check
              (hot surface
              ignitors have
              a resistance
              range; high
              resistance predicts
              imminent failure
              before a no-heat
              call on a January
              night), flame
              sensor cleaning
              (oxidized sensor
              causes nuisance
              lockouts), flue
              pipe and draft
              inspection, gas
              pressure at
              the manifold,
              and filter replacement
              or inspection.
              Efficiency decay:
              a high-efficiency
              condensing furnace
              (95–98% AFUE)
              drops efficiency
              as the secondary
              heat exchanger
              (condensate side)
              accumulates
              mineral deposits
              from the condensate —
              annual cleaning
              of the secondary
              exchanger maintains
              rated efficiency.
              A furnace tune-up
              website that
              explains the
              heat exchanger
              CO risk, what
              combustion analysis
              actually measures,
              and what separates
              a complete maintenance
              visit from a
              filter change
              with a sales
              call earns the
              homeowner who
              wants annual
              maintenance
              done right.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before scheduling a furnace tune-up
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Heat exchanger risk — how cracks form, why they are a CO hazard, when visual inspection is insufficient",
                  "Combustion analysis — what the analyzer measures, how it reveals efficiency and safety problems",
                  "Igniter inspection — hot surface igniter resistance range, how high resistance predicts failure",
                  "What's included — inducer amp draw, flame sensor, flue inspection, manifold pressure vs. filter change only",
                  "Tune-up timing — fall before heating season, after 10 years, after major filter neglect",
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
                What your furnace tune-up website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Heat exchanger section — crack formation mechanism, CO pathway into supply air, inspection methods",
                  "Combustion analysis explainer — what is measured, how efficiency and safety readings connect",
                  "Complete inspection checklist — inducer motor, igniter, flame sensor, flue, gas pressure, filter",
                  "High-efficiency maintenance — secondary heat exchanger mineral deposit buildup, annual cleaning value",
                  "Cheap tune-up comparison — what $49 specials typically include vs. skip, why the heat exchanger matters",
                  "Maintenance form with furnace age, brand, last service date, recent short-cycling or CO alarm events",
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
                &ldquo;Customers kept asking
                why my tune-up costs more
                than the $49 specials in
                their mailbox. The website
                section on what a combustion
                analysis actually measures
                — and why a visual heat
                exchanger check misses
                hairline cracks — answered
                that before they called.
                The customers who read
                it arrived asking whether
                I use an analyzer, not
                whether I could match a
                cheap competitor. I also
                started finding cracked
                heat exchangers on older
                KC furnaces that the previous
                company had inspected and
                cleared — the camera inspection
                section set a higher bar
                that customers now expect.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Whitfield, HVAC maintenance, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A furnace tune-up site with heat exchanger section,
                combustion analysis explainer, and maintenance
                form starts at $200. A full site with complete
                inspection checklist, high-efficiency maintenance
                content, and cheap tune-up comparison is $425–$750.
                One annual maintenance contract covers the cost.
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
