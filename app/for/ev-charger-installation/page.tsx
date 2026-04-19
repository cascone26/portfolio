import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for EV Charger Installation Companies in Kansas City",
  description:
    "Custom websites for EV charger installation, Level 2 home charging, and commercial EV charging companies in the Kansas City area. Show your charger brands, panel upgrade capability, and installation process to win residential and commercial EV charging jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/ev-charger-installation",
  },
};

export default function EvChargerInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for EV Charger Installation Companies in Kansas City",
    description: "Custom websites for EV charger installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for EV Charger Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          New EV owners often do not realize they need a licensed electrician to install a Level 2 charger and that their panel may need an upgrade. A website that explains the process, the rebates available, and your charger brands earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For EV Charger Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">EV Charger Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              EV charger installation customers
              are typically new electric vehicle
              owners who just brought home a
              Tesla, Ford F-150 Lightning, Chevy
              Equinox EV, or Rivian and are
              realizing that plugging into a
              standard 120V outlet gives them
              three to five miles of range per
              hour — not enough for overnight
              charging. They need a Level 2
              240V charger that charges 25–30
              miles per hour, and they need
              to understand what that installation
              involves: whether their panel has
              capacity for a 50A circuit, whether
              the charger mounts in the garage
              or on an exterior wall, which
              charger brands you install (ChargePoint,
              Wallbox, JuiceBox, Emporia, Tesla
              Wall Connector), and whether you
              handle the permit and inspection.
              Many do not know that federal
              tax credits (30C) and utility
              rebates from Evergy can offset
              $300 to $1,000 of the cost —
              that information on your website
              removes price objections before
              they arise. Commercial customers —
              apartment complexes, office buildings,
              retail centers, and employers
              adding fleet charging — need
              Level 2 multi-port stations,
              network management software,
              and utility demand management.
              A well-built EV charging website
              that explains the residential
              installation process, mentions
              available rebates, shows your
              charger brands, and has a
              commercial section earns both
              the homeowner and the property
              manager looking to add charging
              as an amenity.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What EV owners research before hiring a charger installer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Level 1 vs Level 2 — speed difference, why Level 2 is necessary for most EV owners",
                  "Panel capacity — whether their electrical panel can handle a 50A circuit or needs an upgrade",
                  "Charger brands — ChargePoint, Wallbox, JuiceBox, Emporia, Tesla Wall Connector — differences",
                  "Permits and inspection — whether a permit is required in their city, whether you pull it",
                  "Rebates — federal 30C tax credit, Evergy utility rebates, how to claim them",
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
                What your EV charger installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Installation overview — Level 2 charger, 240V 50A circuit, panel assessment, permit, inspection",
                  "Charger brands — ChargePoint, Wallbox, JuiceBox, Emporia, Tesla Wall Connector — what you install",
                  "Panel upgrade — when it is needed, what it costs, combined EV charger and panel upgrade service",
                  "Rebates guide — federal 30C tax credit, Evergy rebate, how to document installation for claims",
                  "Commercial EV charging — multi-port Level 2, networked stations, fleet charging, amenity installs",
                  "Quote form with vehicle type, garage location, panel age, charger preference, timeline",
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
                &ldquo;Every new EV owner goes
                through the same discovery process
                — they find out their standard
                outlet is too slow, they look
                up Level 2 chargers, and they
                realize they need an electrician.
                Without a website, I was missing
                those searches entirely. The
                new site with the Level 1 vs.
                Level 2 comparison, the charger
                brands I install, the rebate
                information, and a commercial
                section for apartment properties
                changed everything. Customers
                come in already knowing the
                process. The rebate guide
                alone closes jobs because
                people didn&apos;t know the
                federal credit existed.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Reyes, licensed electrician, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An EV charger site with installation
                overview, charger brands, and quote
                form starts at $225. A full site with
                rebate guide, panel upgrade section,
                and commercial EV charging is $425–$850.
                One commercial multi-port install
                covers the cost. No contracts,
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
