import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Electrical Panel Upgrade Companies in Kansas City",
  description:
    "Custom websites for electrical panel upgrade, main service panel replacement, and load center companies in the Kansas City area. Show your amperage requirements, Federal Pacific and Zinsco hazards, and permit process to win panel upgrade contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/electrical-panel-upgrade",
  },
};

export default function ElectricalPanelUpgradePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Electrical Panel Upgrade Companies in Kansas City",
    description: "Custom websites for electrical panel upgrade and main service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Electrical Panel Upgrade Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their 100-amp panel is enough for an EV charger, what the problem is with their Federal Pacific or Zinsco panel, and what a panel upgrade actually involves from permit to inspection. A website that explains amperage requirements and panel hazards earns the upgrade call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Panel Upgrades in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Electrical Panel Upgrade</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Electrical panel upgrade
              customers are homeowners
              with a 60 or
              100-amp panel
              in a house adding
              an EV charger,
              heat pump, or
              whole-house generator,
              homeowners with
              a Federal Pacific
              Electric (FPE)
              Stab-Lok or
              Zinsco panel
              that a home
              inspector flagged
              as a fire hazard,
              or homeowners
              whose panel is
              full with no
              available breaker
              spaces for additional
              circuits. The
              central education
              is amperage capacity
              and why modern
              electrical loads
              have exceeded
              what 100-amp
              service was
              designed to
              support: a 100-amp
              service provides
              24,000 watts
              at 240V —
              a 40-amp EV
              charger draws
              9,600 watts,
              a 3-ton heat
              pump draws 3,600
              watts at the
              compressor, and
              a 10kW whole-house
              generator transfer
              switch requires
              a dedicated circuit
              — stacking these
              loads on existing
              100-amp service
              creates capacity
              shortfalls. 200-amp
              service: provides
              48,000 watts,
              the current standard
              for new construction
              and the minimum
              recommended for
              homes with EV
              charging plus
              heat pump plus
              electric appliances.
              400-amp service:
              two 200-amp
              meters and panels,
              used for large
              homes or homes
              with significant
              EV fleets; requires
              utility upgrade
              at the meter
              socket. Federal
              Pacific Stab-Lok
              panels: manufactured
              1950s–1980s;
              breakers documented
              to fail to trip
              on overcurrent —
              the breaker
              stays closed
              when a circuit
              draws more than
              rated amperage,
              allowing the
              wiring to overheat
              and ignite insulation.
              CPSC and independent
              testing (Schneider
              Electric study)
              found significant
              failure rates.
              Insurance carriers
              routinely deny
              coverage or
              require replacement.
              Zinsco/GTE Sylvania
              panels: similar
              documented breaker-to-bus
              bonding failure —
              breakers can
              arc when attempting
              to trip, or
              fuse to the
              bus bar and
              cannot be reset.
              Permit and inspection:
              a panel upgrade
              in Kansas City
              and Johnson/Jackson
              counties requires
              a permit from
              the local authority
              having jurisdiction
              (AHJ) — unpermitted
              panel work creates
              insurance and
              resale problems.
              The utility
              (Evergy) coordinates
              service disconnect
              for the work
              day and reconnect
              after inspection
              approval. An
              electrical panel
              upgrade website
              that explains
              the FPE/Zinsco
              failure mechanisms,
              what 200-amp
              vs. 100-amp
              service actually
              allows, and
              what the permit
              and inspection
              process involves
              earns the homeowner
              who has been
              putting off
              the upgrade
              because they
              do not understand
              the risk or
              the process.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before upgrading an electrical panel
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Amperage requirements — 100A vs. 200A capacity, EV charger + heat pump + generator load calculation",
                  "Federal Pacific hazard — Stab-Lok breaker failure mode, CPSC documentation, insurance implications",
                  "Zinsco hazard — bus bar bonding failure, arc risk, inability to reset, insurer position",
                  "200A vs. 400A service — when 400A is required, utility meter socket upgrade, two-panel setup",
                  "Permit process — KC AHJ permit requirement, Evergy disconnect/reconnect, inspection approval",
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
                What your panel upgrade website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Amperage guide — 100A watt capacity, modern load examples, why EV + heat pump + generator exceeds 100A",
                  "FPE Stab-Lok section — breaker failure mechanism, CPSC documentation, insurer denial risk",
                  "Zinsco section — bus bar bonding failure, arc hazard, insurance implications, replacement urgency",
                  "200A vs. 400A section — capacity comparison, when 400A is required, utility meter upgrade process",
                  "Permit and inspection section — KC AHJ process, Evergy coordination, why unpermitted work creates problems",
                  "Quote form with panel brand and size, planned new loads, insurance request, full address for permit jurisdiction",
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
                &ldquo;Most of my FPE calls
                started the same way —
                a home inspector flagged
                it and the customer wanted
                to know if it was really
                a problem or just an inspector
                being cautious. The website
                section on the Stab-Lok
                breaker failure mechanism
                — actual test data, CPSC
                documentation, why insurance
                carriers deny coverage —
                meant customers arrived
                already understanding it
                was a real hazard and not
                a scare tactic. The permit
                section also helped: explaining
                the Evergy disconnect and
                inspection process upfront
                reduced the number of customers
                who were surprised the job
                takes a full day.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Tran, licensed electrician, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A panel upgrade site with amperage guide, FPE/Zinsco
                hazard section, and quote form starts at $200. A
                full site with 200A vs. 400A comparison, permit
                process section, and load calculator is $425–$750.
                One panel upgrade covers the cost. No contracts,
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
