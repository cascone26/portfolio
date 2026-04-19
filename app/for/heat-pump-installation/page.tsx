import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Heat Pump Installation Companies in Kansas City",
  description:
    "Custom websites for heat pump installation, cold climate heat pump, and dual-fuel heat pump companies in the Kansas City area. Show your HSPF ratings, balance point temperature, and IRA tax credit eligibility to win heat pump contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/heat-pump-installation",
  },
};

export default function HeatPumpInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Heat Pump Installation Companies in Kansas City",
    description: "Custom websites for heat pump installation and dual-fuel HVAC companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Heat Pump Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a heat pump can actually heat a home in KC winters, what the balance point temperature means for a dual-fuel system, and how much they can save with IRA tax credits. A website that explains HSPF ratings and cold climate operation earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Heat Pump Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Heat Pump Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Heat pump installation
              customers are homeowners
              replacing an aging
              central air conditioner
              and evaluating
              whether to add
              heat pump heating,
              homeowners interested
              in the IRA
              (Inflation Reduction
              Act) 25C tax
              credit for high-efficiency
              heat pumps, or
              homeowners who
              heard heat pumps
              are efficient
              but are skeptical
              they can heat
              a KC home in
              January. The
              central education
              is how heat
              pumps work in
              cold weather
              and what changed
              with cold climate
              models: a heat
              pump moves heat
              rather than
              generating it —
              even at 0°F,
              there is thermal
              energy in outdoor
              air that a
              heat pump can
              extract; older
              heat pump models
              lost efficiency
              below 35°F and
              were not suitable
              for KC's cold
              snaps. Cold
              climate heat
              pumps (Bosch
              IDS, Mitsubishi
              Hyper Heat, Carrier
              Infinity 20):
              rated to maintain
              heating capacity
              to -13°F to
              -22°F; HSPF2
              (Heating Seasonal
              Performance Factor
              version 2) of
              8.0–10.0+ — each
              unit of electricity
              delivers 2–3
              units of heat
              at moderate
              temperatures.
              Balance point
              temperature: the
              outdoor temperature
              at which the
              heat pump output
              equals the building
              heat loss — below
              the balance point,
              a supplemental
              heat source is
              needed. Dual-fuel
              system: a heat
              pump paired
              with a gas furnace —
              the heat pump
              handles heating
              above the balance
              point (typically
              25–35°F for
              modern units
              in KC), the
              gas furnace
              takes over below
              it; this is
              often the most
              cost-effective
              configuration
              for KC Climate
              Zone 4A because
              it optimizes
              electric-heat-pump
              efficiency during
              the shoulder
              seasons while
              using inexpensive
              natural gas
              for deep cold
              events. IRA
              25C tax credit:
              through 2032,
              30% of equipment
              and installation
              cost for an
              Energy Star-certified
              heat pump, up
              to $2,000 annually —
              the unit must
              meet the SEER2
              and HSPF2 thresholds
              set annually
              by IRS Notice;
              for 2024, a
              split heat pump
              must have HSPF2
              ≥7.8 and SEER2
              ≥15.2 to qualify.
              Ductwork compatibility:
              heat pumps deliver
              supply air at
              90–100°F vs.
              a gas furnace's
              120–140°F —
              existing ductwork
              sized for a
              furnace may
              cause comfort
              issues if undersized
              for the higher
              CFM needed to
              deliver equivalent
              BTU at lower
              supply temperature.
              A heat pump
              website that
              explains cold
              climate performance,
              the dual-fuel
              balance point
              for KC winters,
              and IRA credit
              eligibility
              earns the homeowner
              who is ready
              to upgrade but
              needs confidence
              that a heat
              pump actually
              works in KC's
              climate.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a heat pump
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cold climate operation — how modern heat pumps work below 20°F, HSPF2 efficiency rating",
                  "Balance point temperature — what it is, where KC homes typically land, below-balance supplemental heat",
                  "Dual-fuel configuration — heat pump + gas furnace setup, when each runs, cost optimization for KC climate",
                  "IRA 25C tax credit — 30% up to $2,000, SEER2 and HSPF2 eligibility thresholds, annual limits",
                  "Ductwork compatibility — lower supply air temperature, higher CFM requirement, comfort with existing ducts",
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
                What your heat pump installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cold climate heat pump section — how heat pumps extract heat below freezing, HSPF2 comparison, brand examples",
                  "Dual-fuel explainer — balance point concept, KC balance point range, cost comparison to heat pump only",
                  "IRA tax credit guide — 25C credit amount, qualifying equipment thresholds, how to claim",
                  "KC climate context — Zone 4A heating degree days, cold snap frequency, why dual-fuel optimizes for KC",
                  "Ductwork section — supply air temperature difference, when duct assessment is needed before installation",
                  "Quote form with existing system type, home size, duct condition, dual-fuel interest, tax credit question",
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
                &ldquo;The objection I heard
                every week was: does a
                heat pump actually work
                in Kansas City winters?
                The website section on
                cold climate performance —
                rated to -13°F, HSPF2
                ratings, how the dual-fuel
                balance point handles our
                cold snaps — turned that
                objection into the first
                question customers asked
                instead of the last. The
                IRA credit section also
                changed close rates significantly:
                customers who understood
                the $2,000 credit potential
                before the estimate arrived
                ready to move on qualifying
                equipment rather than
                shopping on price alone.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Garza, HVAC installation, Lee's Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A heat pump site with cold climate explainer,
                dual-fuel guide, and quote form starts at $200.
                A full site with IRA credit section, KC climate
                context, and ductwork compatibility content is
                $425–$750. One heat pump installation covers
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
