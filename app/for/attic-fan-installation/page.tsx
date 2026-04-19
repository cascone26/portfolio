import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Attic Fan Installation Companies in Kansas City",
  description:
    "Custom websites for attic fan installation, attic ventilation fan, and power attic ventilator companies in the Kansas City area. Show your KC 160°F south-facing attic heat load, solar vs. electric powered attic ventilator for KC conditions, and ridge vent plus soffit vent passive system as the alternative to win attic fan installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/attic-fan-installation",
  },
};

export default function AtticFanInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Attic Fan Installation Companies in Kansas City",
    description: "Custom websites for attic fan installation and power attic ventilator companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Attic Fan Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether an attic fan will actually lower their cooling bill, whether a solar attic fan is worth the extra cost, and whether their attic already has enough passive ventilation that a power fan would just pull conditioned air from the house. A website that explains attic fan installation earns the call from the homeowner whose upstairs is 10 degrees hotter than the rest of the house in July. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Attic Fan Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Attic Fan Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Attic fan installation
              customers are KC homeowners
              whose second floor
              or top floor
              rooms are significantly
              hotter than the
              rest of the
              house during
              KC summer —
              a temperature
              differential that
              typically indicates
              the attic is
              not moving hot
              air fast enough
              for the installed
              passive ventilation
              to keep pace
              with the solar
              heat load on
              the roof; homeowners
              who had a home
              energy audit
              or HVAC service
              call that identified
              the attic temperature
              as a contributing
              factor to high
              cooling loads —
              an attic at
              one hundred sixty
              degrees Fahrenheit
              radiates heat
              into the conditioned
              space below through
              the ceiling insulation;
              or homeowners
              who have a finished
              attic or bonus
              room above the
              garage whose
              HVAC system cannot
              adequately condition
              the space in
              summer because
              the surrounding
              attic or roof
              deck temperature
              is too high.
              The central education
              is KC south-facing
              roof deck temperature
              as the heat source
              that attic ventilation
              is managing, the
              difference between
              solar and electric
              powered attic
              ventilators and
              what makes each
              appropriate, and
              the conditioned
              air depressurization
              risk when a
              power attic ventilator
              is installed
              without adequate
              intake ventilation —
              three things that
              determine whether
              a homeowner understands
              that an attic
              fan that pulls
              conditioned house
              air into the
              attic is counterproductive.
              KC south-facing
              roof deck temperature:
              a KC home with
              a dark asphalt
              shingle roof
              on a south-facing
              slope receives
              the maximum solar
              radiation load
              from June through
              August; under
              direct KC summer
              sun, the south-facing
              roof deck surface
              reaches one hundred
              fifty to one
              hundred sixty
              degrees Fahrenheit
              by early afternoon;
              the underside
              of the deck
              radiates heat
              into the attic
              air space; attic
              air temperatures
              of one hundred
              twenty to one
              hundred forty
              degrees are
              typical in a
              KC attic with
              inadequate ventilation
              during peak summer
              afternoons; the
              ceiling insulation
              below the attic
              floor reduces
              the heat transfer
              into the conditioned
              space but does
              not eliminate
              it — an attic
              at one hundred
              forty degrees
              radiates significantly
              more heat into
              the house than
              an attic at
              ninety degrees;
              ventilation reduces
              attic temperature
              by moving the
              hot attic air
              out and replacing
              it with outdoor
              air — which in
              KC summer is
              ninety-five to
              one hundred degrees,
              still hot but
              substantially
              cooler than the
              one hundred forty
              degree attic.
              Solar versus
              electric powered
              ventilator: an
              electric power
              attic ventilator
              moves six hundred
              to fifteen hundred
              CFM — more than
              a typical passive
              ridge-and-soffit
              system can match —
              and runs on
              a thermostat
              set to activate
              when the attic
              reaches a threshold
              temperature; it
              consumes forty
              to one hundred
              fifty watts while
              running, which
              partially offsets
              the cooling savings;
              a solar-powered
              attic ventilator
              generates its
              own power from
              the roof panel
              and runs at
              no electrical
              cost — but only
              when the sun
              is shining, which
              coincides with
              the peak heat
              load periods
              when it is
              most needed;
              solar units
              are appropriate
              for KC conditions
              because the
              heat problem
              and the solar
              generation peak
              align during
              the same afternoon
              hours. Depressurization
              risk: a power
              attic ventilator
              requires adequate
              intake ventilation —
              typically one
              square foot of
              net free area
              soffit intake
              per three hundred
              CFM of fan flow;
              when intake area
              is insufficient,
              the fan depressurizes
              the attic and
              begins pulling
              conditioned air
              from the house
              through ceiling
              penetrations —
              recessed lights,
              plumbing chases,
              attic access
              hatches; the
              conditioned air
              drawn into the
              attic increases
              the cooling load
              more than the
              ventilation reduces
              it; a power
              attic ventilator
              installation
              should always
              begin with a
              soffit intake
              area calculation.
              An attic fan
              installation website
              that explains
              KC south-facing
              roof deck temperature,
              solar versus
              electric ventilator
              selection, and
              depressurization
              risk from inadequate
              intake area earns
              the homeowner
              who wants to
              know whether
              an attic fan
              will actually
              help their cooling
              bill.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before attic fan installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC attic heat load — 150-160°F south-facing deck, 120-140°F attic air, heat radiation through ceiling insulation",
                  "Solar vs. electric ventilator — CFM comparison, electrical cost offset, solar peak alignment with KC heat load",
                  "Depressurization risk — inadequate soffit intake, conditioned air drawn into attic, when fan hurts more than it helps",
                  "Passive vs. powered system — ridge-soffit stack effect, when passive is sufficient, when power ventilation is warranted",
                  "Second floor heat — ceiling radiant heat from attic, why insulation reduces but doesn't eliminate the problem",
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
                What your attic fan installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC heat load section — south-facing deck temperature data, attic air temperature range, ceiling heat radiation mechanism",
                  "Solar ventilator section — no electrical cost, peak alignment with KC summer afternoon heat, panel sizing",
                  "Electric ventilator section — CFM output, thermostat activation, wattage vs. cooling savings comparison",
                  "Intake area section — soffit intake calculation, depressurization symptom identification, intake upgrade options",
                  "Passive vs. powered section — when ridge-soffit system is sufficient, when power ventilation adds value",
                  "Quote form with roof pitch, south-facing slope present, soffit type, second floor heat complaint, current ventilation",
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
                &ldquo;The depressurization
                section is what
                explains my value
                over a roofer
                who just installs
                the fan. KC homeowners
                who had an attic
                fan installed
                by someone who
                didn&apos;t check
                the soffit intake
                area sometimes
                have higher cooling
                bills after —
                the fan is pulling
                conditioned air
                through every
                ceiling penetration
                into the attic.
                After the section
                went up explaining
                that a power
                attic ventilator
                requires a soffit
                intake calculation
                before installation,
                customers understood
                why the assessment
                is part of the
                job and not
                an upsell. The
                solar section
                also works well
                for KC — customers
                understand immediately
                that the hottest
                afternoons are
                also the sunniest
                and that a solar
                unit runs hardest
                exactly when
                it&apos;s needed most.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Langley, attic ventilation and energy efficiency, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An attic fan installation site with KC heat load section, solar vs.
                electric ventilator guide, and quote form starts at $200. A full site
                with depressurization risk, intake area calculation, and passive vs.
                powered comparison is $425–$750. One attic fan job covers the cost.
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
