import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tankless Water Heater Companies in Kansas City",
  description:
    "Custom websites for tankless water heater installation, on-demand water heater, and condensing tankless companies in the Kansas City area. Show your flow rate sizing, gas line requirements, and condensing vs. non-condensing options to win tankless contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tankless-water-heater",
  },
};

export default function TanklessWaterHeaterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tankless Water Heater Companies in Kansas City",
    description: "Custom websites for tankless water heater installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tankless Water Heater Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a tankless water heater can keep up with simultaneous showers, what flow rate they actually need, and why some installs require a new gas line or larger venting. A website that explains flow rate sizing and condensing efficiency earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tankless Water Heaters in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tankless Water Heater</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tankless water heater
              customers are homeowners
              replacing a failed
              tank-style heater
              and evaluating
              whether to upgrade,
              homeowners who
              ran out of hot
              water with a
              growing family,
              or homeowners
              who read about
              energy savings
              and want to
              understand whether
              the efficiency
              gain justifies
              the higher installation
              cost. The central
              education is
              flow rate sizing
              and temperature
              rise — not just
              BTU output:
              a tankless heater's
              capacity is measured
              in gallons per
              minute (GPM)
              at a given temperature
              rise. KC groundwater
              temperature averages
              52–55°F in winter —
              to deliver 110°F
              hot water, the
              heater must raise
              incoming water
              55–58°F. A standard
              shower uses 2.0–2.5
              GPM; a typical
              family running
              two simultaneous
              showers plus
              a dishwasher
              needs 5.5–7 GPM
              at that temperature
              rise. Undersizing
              is the most common
              installation
              error: a heater
              rated at 7 GPM
              at a 35°F rise
              may only produce
              4.5 GPM at
              KC's 58°F winter
              rise — sizing
              must account
              for incoming
              water temperature,
              not just the
              manufacturer's
              maximum flow
              rating at optimal
              conditions. Condensing
              vs. non-condensing:
              non-condensing
              tankless (Rinnai
              V-Series, Noritz
              NRC) — exhaust
              temps 300–400°F,
              requires Category
              III stainless
              steel vent or
              PVC-lined stainless —
              90%+ efficiency;
              condensing tankless
              (Rinnai RUR,
              Navien NPE,
              Noritz NRCB) —
              extracts additional
              heat from flue
              gas, exhaust
              temps 100–120°F,
              can use schedule
              40 PVC venting
              (cheaper, easier
              to install),
              96–98% efficiency.
              Gas supply requirement:
              a whole-house
              tankless draws
              199,000–199,000+
              BTU/hr at full
              fire — most homes
              have a 3/4"
              gas line feeding
              the existing
              water heater;
              at the run lengths
              typical in KC
              homes, 3/4"
              gas line can
              support up to
              approximately
              200,000 BTU
              at 40' run —
              longer runs
              or lower pressure
              headers may
              require upsizing
              to 1" line to
              avoid firing
              limitation. Recirculation:
              condensing units
              with built-in
              recirculation
              pump (Navien NPE-A,
              Rinnai RUR)
              can be programmed
              to maintain
              hot water in
              the distribution
              loop — eliminating
              the cold water
              sandwich problem
              (cold slug of
              water that
              arrives before
              hot) but using
              a small amount
              of energy to
              maintain loop
              temperature.
              A tankless website
              that explains
              flow rate sizing
              at KC groundwater
              temperatures,
              condensing vs.
              non-condensing
              venting tradeoffs,
              and gas line
              capacity earns
              the homeowner
              who read about
              tankless but
              cannot figure
              out which model
              actually fits
              their house.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a tankless water heater
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Flow rate sizing — GPM at KC groundwater temperature, simultaneous fixture calculation, undersizing risk",
                  "Condensing vs. non-condensing — efficiency difference, venting material difference, installation cost impact",
                  "Gas line capacity — BTU demand at full fire, 3/4\" vs. 1\" line capacity at typical KC run lengths",
                  "Cold water sandwich — what causes it, recirculation pump solution, built-in vs. add-on recirculation",
                  "Tank vs. tankless ROI — efficiency savings vs. installation premium, payback period at KC gas rates",
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
                  "Flow rate sizing guide — KC groundwater temperature, temperature rise calculation, fixture GPM chart",
                  "Condensing explainer — efficiency comparison, PVC vs. stainless vent, cost difference, brand examples",
                  "Gas line section — BTU requirement at full fire, pipe size capacity chart at KC typical run lengths",
                  "Recirculation section — cold water sandwich problem, pump options, programming for demand vs. scheduled",
                  "Tank vs. tankless comparison — energy factor difference, installation cost premium, 10-year cost comparison",
                  "Quote form with household size, simultaneous fixture count, existing gas line size, venting access",
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
                &ldquo;Customers always came
                in with the same question:
                will it keep up when two
                showers are running? The
                website section on KC groundwater
                temperature and what flow
                rate that actually means
                for a family of four —
                not the manufacturer's optimal
                rating — made that conversation
                easy. The gas line section
                also prevented a surprise
                on two jobs where I found
                undersized headers: customers
                who had read it arrived
                knowing the gas supply
                was a variable in the quote,
                not a hidden add-on.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Hester, plumbing and water heater installation, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tankless water heater site with flow rate guide,
                condensing explainer, and quote form starts at
                $200. A full site with gas line section, recirculation
                content, and tank vs. tankless comparison is
                $425–$750. One tankless installation covers the
                cost. No contracts, no monthly fees.
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
