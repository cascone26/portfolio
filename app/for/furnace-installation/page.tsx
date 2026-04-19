import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Furnace Installation Companies in Kansas City",
  description:
    "Custom websites for furnace installation, gas furnace replacement, and heating system companies in the Kansas City area. Show your AFUE ratings, Manual J load calculations, and variable-speed technology to win furnace installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/furnace-installation",
  },
};

export default function FurnaceInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Furnace Installation Companies in Kansas City",
    description: "Custom websites for furnace installation and gas heating companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Furnace Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a 96% AFUE furnace is worth the premium over an 80%, what variable-speed actually means for comfort, and how furnace sizing is determined. A website that explains the real differences earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Furnace Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Furnace Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Furnace installation
              customers are KC homeowners
              whose furnace is 15–25
              years old and getting
              expensive to repair,
              homeowners who were
              told their heat exchanger
              is cracked, or homeowners
              replacing a complete
              HVAC system and wanting
              to understand the
              difference between
              equipment tiers.
              The central education
              is what distinguishes
              furnace categories
              and why the right
              answer depends on
              the specific home.
              AFUE rating: Annual
              Fuel Utilization Efficiency —
              percentage of gas
              energy converted to
              heat delivered to
              the living space;
              an 80 AFUE furnace
              loses 20% of fuel
              energy up the flue;
              a 96 AFUE furnace
              loses only 4%; KC
              climate zone 4/5
              heating hours justify
              the payback — with
              gas at $1.20/therm
              and 1,200 heating
              hours/year, a 96
              AFUE vs. 80 AFUE
              on a 100,000 BTU
              furnace saves approximately
              $200/year. Venting:
              80 AFUE furnaces
              use B-vent (double-wall
              metal) and draft
              naturally or with
              an induced draft
              motor — flue gases
              exit above 300°F
              and must be vented
              vertically; 90+
              AFUE condensing furnaces
              extract so much heat
              that flue gas exits
              below 140°F and
              can be vented with
              2-inch or 3-inch
              PVC out the side
              of the house —
              condensate forms
              in the heat exchanger
              and drains to a
              floor drain or condensate
              pump. Staging and
              blower types: single-stage
              furnaces run at
              100% capacity whenever
              they fire — short
              cycles in mild weather,
              temperature swings;
              two-stage furnaces
              have a first stage
              at 65% capacity
              for mild weather,
              run longer at lower
              capacity, improved
              humidity removal
              and comfort; variable-speed
              blowers (ECM motors)
              ramp airflow up
              gradually and run
              continuously at
              low speed to circulate
              air — significantly
              quieter, better
              temperature distribution,
              lower blower electricity
              use (350W vs. 500–600W
              for PSC motors at
              full speed). Manual
              J load calculation:
              furnace BTU output
              should match the
              design heating load —
              ACCA Manual J uses
              insulation levels,
              window area, infiltration,
              and KC design temperature
              (2°F, 99% design
              condition) to determine
              the correct size;
              oversized furnaces
              short-cycle, create
              temperature swings,
              and reduce humidity
              control; rule-of-thumb
              sizing (BTU per square
              foot) is not accurate
              for homes with significant
              insulation or air
              sealing improvements.
              Heat exchanger inspection:
              a cracked primary
              heat exchanger allows
              combustion gases
              (CO) to mix with
              supply air — any
              furnace with a confirmed
              cracked heat exchanger
              should be replaced
              immediately; visual
              inspection with
              a probe camera and
              combustion analysis
              before and after
              a blower-on test
              are the standard
              diagnostic approach.
              IRA Section 25C:
              $600 credit for
              a qualifying 96+
              AFUE natural gas
              furnace (Energy Star
              certified, Northern
              climate specification).
              A furnace installation
              website that explains
              AFUE payback in
              real KC utility
              numbers, what variable-speed
              means for actual
              comfort, and why
              Manual J sizing
              matters earns the
              homeowner who doesn't
              want to make a
              $7,000 decision
              on contractor reputation
              alone.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before replacing a furnace
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "AFUE payback — 80 vs. 96 AFUE at KC gas prices, annual savings calculation, payback period",
                  "Venting differences — B-vent vertical exhaust vs. PVC sidewall, condensate drain requirement for 90+",
                  "Single-stage vs. two-stage vs. variable-speed — comfort differences, humidity control, noise, electricity use",
                  "Manual J sizing — why BTU-per-square-foot rules are inaccurate, short-cycling consequences of oversizing",
                  "IRA 25C credit — $600 for qualifying 96+ AFUE furnaces, Energy Star Northern specification",
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
                What your furnace installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "AFUE explainer — what efficiency means in annual dollar savings at KC gas prices and heating hours",
                  "Venting section — B-vent vs. PVC, why condensing furnaces vent differently, installation implications",
                  "Staging guide — single vs. two-stage vs. variable-speed, comfort differences, ECM blower benefits",
                  "Manual J section — design temperature, load calculation, why oversizing hurts comfort and efficiency",
                  "IRA credit section — 25C credit for high-efficiency furnaces, Energy Star Northern spec, documentation",
                  "Quote form with current furnace age, BTU size if known, venting type, comfort complaints, priority (efficiency vs. budget)",
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
                &ldquo;The AFUE payback section
                changed my close rate more
                than anything else I've tried.
                I used to quote the 96 AFUE
                and get pushback on price
                without context. Once the
                website showed the KC heating
                hour calculation and the actual
                dollar savings at current
                gas prices, customers arrived
                already understanding why
                the premium was worth it —
                or arrived knowing they wanted
                the 80 AFUE, which is also
                fine. The Manual J section
                also generated the best conversations:
                customers who had gotten
                quotes from other contractors
                at 120,000 BTU for a 1,600
                sq ft house arrived asking
                why, and I could explain
                why I was quoting 80,000.
                That conversation built
                more trust than any amount
                of brand marketing.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Harmon, furnace installation and HVAC, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A furnace installation site with AFUE explainer,
                staging guide, and quote form starts at $200. A
                full site with Manual J section, venting comparison,
                and IRA credit content is $425–$750. One high-efficiency
                furnace installation covers the cost. No contracts,
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
