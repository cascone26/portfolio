import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tankless Water Heater Installation Companies in Kansas City",
  description:
    "Custom websites for tankless water heater installation, on-demand water heater, and water heater replacement companies in the Kansas City area. Show your KC flow rate sizing, gas line BTU requirements, and hard water scale prevention to win tankless installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tankless-water-heater-installation",
  },
};

export default function TanklessWaterHeaterInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tankless Water Heater Installation Companies in Kansas City",
    description: "Custom websites for tankless water heater installation and on-demand water heater companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tankless Water Heater Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a tankless water heater can keep up when the shower and dishwasher run simultaneously, what BTU rating their gas line can support, and why KC hard water destroys tankless units without a filter. A website that explains GPM sizing and scale prevention earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tankless Water Heater Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tankless Water Heater Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tankless water heater
              installation customers
              are KC homeowners
              replacing a forty-
              or fifty-gallon
              tank water heater
              that has reached
              the end of its
              service life —
              typically eight
              to twelve years —
              and who want to
              evaluate whether
              a tankless unit
              is worth the higher
              upfront cost; or
              homeowners who
              run out of hot
              water during back-to-back
              showers and want
              to eliminate the
              tank recovery
              wait. The central
              education is flow
              rate sizing: a
              tankless water
              heater is rated
              in gallons per
              minute (GPM) at
              a given temperature
              rise — the temperature
              rise is the difference
              between the incoming
              groundwater temperature
              and the desired
              output temperature;
              KC groundwater
              temperature in
              winter is approximately
              fifty to fifty-two
              degrees Fahrenheit —
              to deliver one
              hundred ten degree
              shower water,
              the unit must
              raise the temperature
              fifty-eight to
              sixty degrees;
              a unit rated at
              seven GPM at a
              thirty-five-degree
              rise may only
              deliver four GPM
              at a sixty-degree
              rise — not enough
              to supply a shower
              at two-point-five
              GPM and a dishwasher
              at one GPM simultaneously
              without the mixed
              output dropping
              below one hundred
              degrees; properly
              sizing a KC installation
              requires knowing
              the simultaneous
              fixture demand
              and the actual
              groundwater temperature
              in January — not
              the September
              temperature that
              makes the unit
              spec sheet look
              better. Gas line
              sizing: a whole-house
              gas tankless water
              heater requires
              one hundred fifty
              thousand to two
              hundred thousand
              BTU input; a standard
              KC residential
              gas line serving
              a furnace, range,
              and dryer is typically
              sized for the
              existing appliance
              BTU load — adding
              a high-demand
              tankless unit
              may require upsizing
              the gas meter,
              the service line,
              or both; the
              gas company must
              approve increased
              capacity and
              the installation
              requires a permit
              in Kansas City;
              an installer who
              does not assess
              the existing gas
              line capacity
              before quoting
              will discover
              the undersized
              line on installation
              day — adding cost
              and delay. Hard
              water and scale:
              KC water hardness
              is typically fifteen
              to twenty grains
              per gallon from
              municipal sources;
              at this hardness
              level, calcium
              carbonate scale
              accumulates on
              the heat exchanger
              surfaces at a
              rate that can
              reduce heat transfer
              efficiency by
              twenty to thirty
              percent within
              three to five
              years without
              treatment; the
              manufacturer warranty
              on most tankless
              units requires
              annual descaling
              or installation
              with a water
              softener or scale
              inhibitor; a
              tankless installation
              website that
              explains the
              KC water hardness
              problem and what
              protection is
              needed earns
              the homeowner
              who does not
              want to void
              their warranty
              in the first
              year.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before tankless water heater installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "GPM sizing — KC groundwater temperature in winter, temperature rise impact on rated flow, simultaneous fixture math",
                  "Gas line requirements — BTU input for whole-house tankless, when gas line upsizing is required in KC",
                  "Hard water scale — KC water hardness in GPG, heat exchanger scaling, descaling requirement and warranty terms",
                  "Permit requirements — tankless installation permit process in KC, gas line work licensing requirements",
                  "Tank vs. tankless ROI — upfront cost difference, energy savings from eliminating standby loss, payback timeline",
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
                What your tankless water heater website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "GPM sizing section — KC groundwater temp, temperature rise calculator, simultaneous demand table for KC homes",
                  "Gas line assessment — BTU demand for whole-house units, how we assess existing line capacity before quoting",
                  "Hard water section — KC hardness data, scale mechanism on heat exchangers, descaling service and softener options",
                  "Permit and code section — KC permit requirement, licensed contractor requirement for gas work",
                  "Tank vs. tankless guide — honest cost comparison, standby loss savings, typical KC payback period",
                  "Quote form with home size, current water heater type, gas or electric, hard water experience, simultaneous use pattern",
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
                &ldquo;The GPM section stops
                the homeowner from
                buying an undersized
                unit online and calling
                me to install it. KC
                groundwater in January
                is fifty degrees — that
                sixty-degree temperature
                rise cuts the rated
                flow in half, and homeowners
                comparing spec sheets
                in July don&apos;t know
                that. After the sizing
                section went up explaining
                winter groundwater temperature
                and simultaneous demand,
                customers started giving
                me their fixture list
                in the first call instead
                of arguing about whether
                a seven GPM unit was
                enough for a four-bathroom
                house. The hard water
                section also adds a
                descaling service to
                every install — KC water
                at fifteen grains is
                hard enough that the
                heat exchanger needs
                attention every year
                or two.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Ecklund, plumbing and tankless installation, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tankless water heater site with GPM sizing section, hard water
                guide, and quote form starts at $200. A full site with gas line
                assessment section, tank vs. tankless comparison, and permit
                guide is $425–$750. One tankless installation covers the cost.
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
