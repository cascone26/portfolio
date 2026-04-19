import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Geothermal HVAC Companies in Kansas City",
  description:
    "Custom websites for geothermal heat pump, ground source heat pump, and geothermal loop installation companies in the Kansas City area. Show your COP ratings, loop field design, and IRA tax credit eligibility to win geothermal contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/geothermal-hvac",
  },
};

export default function GeothermalHvacPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Geothermal HVAC Companies in Kansas City",
    description: "Custom websites for geothermal heat pump and ground source HVAC companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Geothermal HVAC Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether geothermal makes sense in KC, what a loop field actually costs, and how the IRA 30% tax credit changes the payback math. A website that explains COP ratings and loop design earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Geothermal HVAC in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Geothermal HVAC</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Geothermal HVAC customers
              are homeowners replacing
              an aging gas furnace
              and central AC and
              evaluating whether
              to go all-electric
              with a ground source
              heat pump, homeowners
              with acreage in
              Johnson or Jackson
              County who have land
              for a horizontal
              loop field, or homeowners
              who heard about the
              IRA 30% geothermal
              tax credit and want
              to understand the
              real installed cost
              after the credit.
              The central education
              is why ground source
              differs from air
              source and what the
              KC ground temperature
              advantage means in
              practice: ground
              temperatures in KC
              stabilize at 55–58°F
              at 6–8 feet depth —
              the same temperature
              year-round regardless
              of whether it is
              January or July.
              A geothermal heat
              pump exchanges heat
              with this stable
              ground temperature
              rather than outdoor
              air — giving it
              a significant COP
              (coefficient of performance)
              advantage over air-source
              equipment in both
              extreme cold and
              extreme heat. COP
              ratings: a geothermal
              unit (Climatemaster
              Tranquility, WaterFurnace
              Series 7) achieves
              COP 4.0–5.0 in heating
              mode — each unit
              of electricity delivers
              4–5 units of heat;
              EER 20–30 in cooling
              mode vs. a standard
              central AC at SEER2
              15–18 equivalent.
              Loop types: horizontal
              closed loop — trenches
              4–6 feet deep, 400–600
              feet of pipe per
              ton of capacity,
              requires 1/4 to 1/2
              acre of land; vertical
              closed loop — boreholes
              150–300 feet deep,
              150–200 feet per
              ton, used on small
              lots where horizontal
              is not possible (more
              expensive: $15–25/ft
              drilling cost); open
              loop (standing column
              or lake) — uses groundwater
              directly, requires
              adequate well yield
              or body of water,
              highest efficiency
              but regulatory requirements
              vary by county.
              IRA Section 25D credit:
              30% of installed cost
              (equipment plus loop
              field plus ductwork
              modifications) through
              2032, no cap on residential
              installation — a
              $30,000 system becomes
              $21,000 after the
              credit; the unit
              must meet Energy Star
              certification for
              geothermal heat pumps.
              Desuperheater: a
              geothermal system
              can include a desuperheater
              that uses waste heat
              from the refrigerant
              circuit to preheat
              domestic hot water —
              reduces water heating
              cost by 40–60% during
              heating and cooling
              seasons. A geothermal
              website that explains
              COP advantage over
              air-source in KC's
              climate, loop field
              sizing, and what
              the IRA credit does
              to the payback period
              earns the homeowner
              with land who is
              doing serious cost
              analysis.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing geothermal HVAC
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "COP advantage — why KC ground temps give geothermal consistent performance vs. air-source in extremes",
                  "Loop type selection — horizontal vs. vertical vs. open loop, land requirements, cost per ton",
                  "IRA 25D credit — 30% no-cap credit, what qualifies, how to apply to full installed cost",
                  "Desuperheater — free hot water preheat from waste refrigerant heat, annual savings estimate",
                  "Payback period — installed cost range, utility savings at KC gas and electric rates, credit impact",
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
                What your geothermal HVAC website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Ground temperature explainer — KC 55–58°F stable ground temp, COP comparison to air-source at design conditions",
                  "Loop field guide — horizontal vs. vertical sizing rules, land requirements, KC soil conditions",
                  "IRA tax credit section — 25D credit details, what qualifies, how it reduces effective installed cost",
                  "Desuperheater section — free domestic hot water preheat, energy savings during peak seasons",
                  "Cost and payback section — installed cost range, utility savings, 10-year vs. 20-year comparison",
                  "Quote form with lot size, existing system type, desired loop type, hot water heating interest",
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
                &ldquo;Geothermal is a hard
                sell because the upfront
                cost is real and most homeowners
                don't understand why it's
                better than a good air-source
                heat pump. The website section
                on KC ground temperatures
                and what COP 4.5 actually
                means in January — not a
                number, but 'four and a half
                units of heat for every unit
                of electricity even at 5°F'
                — changed how customers
                entered the conversation.
                The IRA credit section was
                just as important: customers
                who understood the 30%
                credit arrived with their
                own payback math already
                done and were ready to
                compare loop types, not
                question whether geothermal
                made sense.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Hendricks, geothermal HVAC, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A geothermal site with COP explainer, loop field
                guide, and quote form starts at $200. A full site
                with IRA credit section, desuperheater content,
                and payback comparison is $425–$750. One geothermal
                installation covers the cost many times over. No
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
