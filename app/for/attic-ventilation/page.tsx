import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Attic Ventilation Companies in Kansas City",
  description:
    "Custom websites for attic ventilation, ridge vent installation, and attic fan companies in the Kansas City area. Show your net free area calculation, ice dam connection, and summer heat load reduction to win attic ventilation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/attic-ventilation",
  },
};

export default function AtticVentilationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Attic Ventilation Companies in Kansas City",
    description: "Custom websites for attic ventilation and ridge vent companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Attic Ventilation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether an attic fan or ridge vent is the better solution, why poor attic ventilation causes ice dams and high cooling bills, and how to calculate whether their attic has enough net free area. A website that explains balanced ventilation and ice dam formation earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Attic Ventilation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Attic Ventilation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Attic ventilation
              customers are homeowners
              with ice dams
              forming at the
              eaves in winter,
              high air conditioning
              bills despite
              adequate attic
              insulation, moisture
              or condensation
              on the underside
              of the roof deck
              in winter, or
              a roofing contractor
              who found deteriorated
              sheathing during
              a re-roof and
              attributed it
              to inadequate
              ventilation. The
              central education
              is how attic
              ventilation works
              as a system and
              why imbalanced
              or inadequate
              ventilation causes
              problems in both
              summer and winter:
              the FHA/HUD minimum
              is 1 square foot
              of net free area
              (NFA) per 150
              square feet of
              attic floor area
              (1:150 ratio),
              reducible to
              1:300 if a vapor
              barrier is present
              and at least
              50% of the ventilation
              is high (at or
              near the ridge).
              Balanced ventilation:
              equal intake (low,
              at the soffits)
              and exhaust (high,
              at the ridge
              or near the
              top of the roof)
              creates convective
              flow — hot air
              exits at the
              ridge, cool outside
              air enters at
              the soffit. Blocked
              soffit vents
              (insulation pushed
              against the
              rafter bays from
              inside) are the
              most common ventilation
              failure in KC
              homes — the
              intake is cut
              off and the
              convective system
              cannot function.
              Ridge vents (ShingleVent
              II, Cobra by
              GAF, Air Vent
              Externally Baffled):
              continuous ridge
              vent provides
              uniform exhaust
              along the full
              ridge length —
              externally baffled
              models perform
              significantly
              better in wind-driven
              rain and snow
              conditions. Power
              attic ventilators
              (PAV): electric
              or solar-powered
              fans can depressurize
              the attic and
              draw conditioned
              air from the
              living space
              through gaps
              if the home
              is not well-sealed —
              increasing cooling
              bills rather
              than reducing
              them; best suited
              for attics with
              inadequate passive
              ventilation after
              passive options
              are exhausted.
              Ice dam mechanism:
              heat from the
              living space
              warms the attic,
              melts snow on
              the warm roof
              deck — meltwater
              flows to the
              cold eave overhang
              (not heated from
              below) and refreezes,
              backing up under
              shingles. A cold
              roof (attic temperature
              close to outside
              temperature) prevents
              the melt-refreeze
              cycle — adequate
              ventilation combined
              with air sealing
              and insulation
              at the attic
              floor produces
              a cold roof.
              A ventilation
              website that
              explains the
              1:150 NFA calculation,
              why blocked soffit
              vents defeat
              ridge vents,
              and why ice
              dams indicate
              a warm roof
              earns the homeowner
              who replaced
              the roof but
              still gets ice
              dams every winter.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before improving attic ventilation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Net free area calculation — 1:150 ratio, how to measure existing NFA, what the minimum means",
                  "Balanced ventilation — why intake and exhaust must be balanced, what blocked soffits do to the system",
                  "Ridge vent vs. power attic fan — when each is appropriate, why PAVs can backfire in tight homes",
                  "Ice dam mechanism — warm roof deck, melt-refreeze cycle at eave, ventilation and insulation role",
                  "Soffit vent blocking — how insulation pushed to eaves cuts off intake, how to check",
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
                What your attic ventilation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "NFA calculation guide — 1:150 formula, how to measure attic square footage, current vent NFA ratings",
                  "Balanced system section — intake vs. exhaust role, why blocked soffit vents defeat the ridge vent",
                  "Ridge vent comparison — ShingleVent II vs. Cobra, external baffle importance for KC weather",
                  "Ice dam section — warm roof cause, how ventilation + insulation together produce a cold roof",
                  "Power attic fan section — when PAVs help vs. when they depressurize the living space",
                  "Assessment form with attic square footage, existing vent types, ice dam history, summer temperature issues",
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
                &ldquo;The hardest part of
                my job was explaining
                why a new roof did not
                fix the ice dams. The
                website section on warm
                roof deck, the melt-refreeze
                cycle, and what actually
                produces a cold roof changed
                those conversations completely.
                Customers who had ice dams
                after a re-roof arrived
                understanding it was a
                ventilation and insulation
                system problem, not a
                shingle problem. The blocked
                soffit section also led
                to customers checking their
                own baffles before calling
                me — the ones with obvious
                blockage came in ready
                to act.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Holt, roofing and ventilation, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An attic ventilation site with NFA calculation
                guide, balanced system section, and assessment
                form starts at $200. A full site with ice
                dam mechanism, ridge vent comparison, and
                power fan section is $425–$750. One ridge
                vent installation covers the cost. No
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
