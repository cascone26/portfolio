import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Indoor Air Quality Companies in Kansas City",
  description:
    "Custom websites for indoor air quality testing, air purification, ERV/HRV ventilation, and IAQ assessment companies in the Kansas City area. Show your MERV ratings, VOC testing, and fresh air ventilation solutions to win IAQ contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/indoor-air-quality",
  },
};

export default function IndoorAirQualityPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Indoor Air Quality Companies in Kansas City",
    description: "Custom websites for indoor air quality testing and improvement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Indoor Air Quality Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a HEPA filter or UV light actually improves their air, what MERV ratings mean for their furnace filter, and whether their home needs fresh air ventilation or just better filtration. A website that explains the difference earns the IAQ call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Indoor Air Quality in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Indoor Air Quality</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Indoor air quality customers
              are KC homeowners who
              have a family member
              with allergies or asthma
              and suspect the home
              air is contributing,
              homeowners who smell
              musty or chemical odors
              and don't know the
              source, or homeowners
              in tightly sealed
              newer homes who want
              to understand whether
              they need fresh air
              ventilation. The central
              education is the difference
              between filtration,
              purification, and
              ventilation — three
              separate problems
              with different solutions.
              Filtration: furnace
              filters rated by MERV
              (Minimum Efficiency
              Reporting Value) —
              MERV 8 captures pollen
              and dust mite debris
              but passes most bacteria
              and smoke particles;
              MERV 13 captures fine
              particles including
              most bacteria and
              smoke; MERV 16 approaches
              HEPA performance but
              adds static pressure
              that can starve a
              residential blower —
              high-MERV media filters
              (Aprilaire 213/413,
              Lennox PureAir) use
              4-inch-deep media
              to maintain airflow
              at MERV 11–13. HEPA
              filtration: true HEPA
              removes 99.97% of
              particles at 0.3 microns;
              installed as standalone
              unit with its own
              blower (IQAir, Austin
              Air) because residential
              HVAC blowers cannot
              overcome HEPA pressure
              drop. VOC and combustion
              byproducts: volatile
              organic compounds
              from building materials,
              cleaning products,
              and furnishings are
              not captured by particle
              filters — activated
              carbon adsorption
              media is required;
              combustion byproducts
              (CO, NO2) from attached
              garages and gas appliances
              require source control
              and CO monitoring,
              not filtration. UV-C
              germicidal irradiation:
              UV-C lamps installed
              at the coil or in
              the supply plenum
              kill mold and bacteria
              on surfaces and in
              air passing through
              — coil irradiation
              prevents mold growth
              on the wet coil surface,
              in-duct air purifiers
              (Honeywell UV100,
              RGF REME HALO) use
              UV-C plus ionization
              or photocatalytic
              oxidation to treat
              air volume. ERV/HRV
              ventilation: Energy
              Recovery Ventilators
              and Heat Recovery
              Ventilators bring
              fresh outdoor air
              into the house while
              recovering 70–85%
              of the heat energy
              from exhaust air —
              required in new construction
              at KC's tight leakage
              standards; in existing
              homes, ERV addresses
              high CO2 (occupant
              stuffiness), high
              humidity in summer
              (ERV transfers moisture
              as well as heat),
              and VOC dilution.
              IAQ monitors: consumer
              monitors (Awair Element,
              IQAir AirVisual)
              measure PM2.5, CO2,
              VOC, temperature,
              and humidity — useful
              for identifying when
              and where problems
              occur; radon testing
              requires separate
              long-term alpha track
              detector or continuous
              monitor (KC area
              has moderate radon
              potential, 2–4 pCi/L
              typical basement).
              An IAQ website that
              explains filtration
              vs. purification
              vs. ventilation —
              and which solution
              addresses which problem —
              earns the homeowner
              who knows something
              is wrong but doesn't
              know where to start.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before calling an IAQ company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "MERV ratings — what the number means, MERV 8 vs. 13 vs. 16, why high-MERV filters can hurt airflow",
                  "HEPA vs. media filter — why true HEPA requires its own blower, what a 4-inch media filter actually captures",
                  "VOC sources — building materials, cleaning products, why particle filters don't address chemical contaminants",
                  "UV-C germicidal lamps — coil irradiation vs. in-duct air purifiers, what UV-C does and doesn't kill",
                  "ERV vs. HRV — fresh air ventilation, energy recovery, when tight homes need mechanical ventilation",
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
                What your indoor air quality website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Filtration guide — MERV scale explained, media filter vs. standard filter, airflow and static pressure tradeoffs",
                  "Purification section — UV-C germicidal irradiation, activated carbon for VOCs, ionization and PCO technology",
                  "Ventilation section — ERV vs. HRV, when tight homes need fresh air, CO2 and humidity as indicators",
                  "IAQ monitor guide — what consumer monitors measure, radon testing, when to call a professional",
                  "Allergy and asthma section — which improvements address triggers, source control vs. filtration",
                  "Assessment form with current filter type, allergy/asthma history, home age, recent remodel or new materials",
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
                &ldquo;The hardest conversation
                was with customers who
                had already bought a box
                fan HEPA filter and a UV
                light and still had symptoms.
                The website section explaining
                why a particle filter doesn't
                address VOCs, and why UV-C
                at the coil addresses a
                different problem than in-duct
                air purification, was the
                thing that made the conversation
                productive instead of defensive.
                Customers arrived with a
                framework for what each product
                does, which meant I spent
                the appointment actually
                assessing their home instead
                of re-explaining the product
                category from scratch. The
                ERV section also opened
                conversations I never had
                before — homeowners in newer
                homes who had never heard
                of mechanical ventilation
                but whose CO2 levels explained
                everything about their
                headaches and fatigue.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Walters, indoor air quality and HVAC, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An IAQ site with filtration guide, MERV explainer,
                and assessment form starts at $200. A full site
                with purification section, ERV/HRV ventilation
                guide, and VOC content is $425–$750. One whole-home
                media filter and UV-C installation covers the cost.
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
