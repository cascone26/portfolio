import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for EV Charging Installation Companies in Kansas City",
  description:
    "Custom websites for EV charger installation contractors in the Kansas City area. Explain Level 2 vs. DC fast charging, incentives, and commercial vs. residential installation to get more quotes.",
  alternates: {
    canonical: "https://builtsimple.dev/for/ev-charging",
  },
};

export default function EvChargingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for EV Charging Installation Companies in Kansas City",
    description: "Custom websites for EV charger installation contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for EV Charging Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          EV owners and fleet managers searching for charger installation have a lot of questions: Level 1 vs. Level 2 vs. DCFC, panel upgrades, available rebates. The electrician whose website answers those questions clearly earns the install. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For EV Charging Installers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">EV Charging Installation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              EV adoption in Kansas City is accelerating, and most new
              EV owners immediately search for a licensed electrician
              to install a Level 2 home charger. Businesses and apartment
              complexes are also adding charging stations for tenants and
              customers. The electrical contractor who has a dedicated
              EV charging page — explaining the difference between charger
              levels, what a panel upgrade involves, and what federal and
              utility rebates are available — earns far more installs than
              a generic electrician website.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What EV owners and fleet managers need to know
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Charger levels — Level 1 (120V slow), Level 2 (240V home/commercial), DC fast charging",
                  "What installation involves — panel capacity check, dedicated circuit, outlet or hardwired",
                  "Brands installed — ChargePoint, Eaton, Siemens, Tesla Wall Connector, Grizzl-E, JuiceBox",
                  "Commercial charging — multi-unit residential, retail, fleet, office parking — networked chargers",
                  "Incentives — federal 30C tax credit (up to $1,000 residential), utility rebates, fleet grants",
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
                What your EV charging installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Residential installation — Level 2 charger install, panel upgrade if needed, permit and inspection",
                  "Commercial installation — networked chargers, multi-unit, fleet, load management systems",
                  "Charger brands — compatible brands installed, Tesla adapter, smart home integration",
                  "Incentives page — 30C federal tax credit, Evergy EV rebates, fleet and commercial grants",
                  "Process — site assessment, permit, installation day, inspection, activation",
                  "Quote form with property type (home/commercial), panel amperage, preferred charger brand, timeline",
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
                &ldquo;We added EV charger installation to our electrical
                business a year ago. Our general electrician site was
                getting us nothing in EV search. The dedicated EV page
                with the Level 2 explanation, the rebate details, and
                the charger brands we install brought in homeowners who
                had just bought an EV and were ready to book. It became
                one of our highest-converting pages almost immediately.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Osei, electrical contractor, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An EV charging site with residential and commercial services,
                charger brands, and quote form starts at $250. A full site
                with incentives page, commercial charging info, and process
                walkthrough is $475–$950. Two to three installs cover the cost.
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
