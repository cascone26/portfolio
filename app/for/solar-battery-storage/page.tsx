import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Solar Battery Storage Companies in Kansas City",
  description:
    "Custom websites for solar battery storage, home energy storage, and backup power installation companies in the Kansas City area. Show your battery brands, backup capacity, and grid integration to win residential solar battery contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/solar-battery-storage",
  },
};

export default function SolarBatteryStoragePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Solar Battery Storage Companies in Kansas City",
    description: "Custom websites for solar battery storage companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Solar Battery Storage Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners adding battery storage want to understand how many days of backup they get, what the difference is between a Tesla Powerwall and Franklin WH, and whether they need solar to install a battery. A website that answers those questions earns the energy assessment. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Solar Battery Storage in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Solar Battery Storage</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Solar battery storage customers
              in Kansas City are primarily
              existing solar homeowners
              who want backup power when
              the grid goes down, homeowners
              who want to install battery
              storage without solar to
              protect against outages,
              and new solar customers
              who are sizing a system
              with storage from the start.
              The dominant brand in the
              residential battery market
              is the Tesla Powerwall —
              at 13.5 kWh usable capacity,
              it is what most customers
              have researched before
              they call anyone. The
              Franklin WH (aPower series)
              offers higher capacity
              per unit and a different
              stackable design. Enphase
              IQ Battery and LG Chem
              RESU are other established
              options. The capacity
              question is what requires
              the most education: a
              single Powerwall keeps
              lights, refrigerator,
              and phone charging for
              roughly one day in a
              whole-home outage scenario,
              but running a well pump,
              HVAC, and full home
              loads requires multiple
              units or a larger battery.
              Most customers install
              one to two units and
              configure them for
              whole-home backup
              of essential circuits
              only. Kansas City&apos;s
              spring storm season
              with ice storms and
              tornado-season outages
              creates real demand
              for backup power that
              is not generator-dependent.
              The federal ITC (Investment
              Tax Credit) at 30%
              applies to battery
              storage systems whether
              paired with solar or
              installed standalone
              as of the Inflation
              Reduction Act provisions —
              this is a key buying
              point that many customers
              do not know. A solar
              battery website that
              explains capacity
              honestly, compares
              the major battery brands,
              addresses the solar-required
              question, and covers
              the tax credit earns
              the homeowner who
              is researching backup
              power options after
              the last outage.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before adding battery storage
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Battery brands — Tesla Powerwall, Franklin WH, Enphase IQ — capacity, round-trip efficiency, warranty",
                  "Backup duration — how long one battery lasts on whole-home vs. essential circuits, how to calculate needs",
                  "Solar requirement — whether battery storage requires existing solar, grid-charging only operation",
                  "Federal tax credit — 30% ITC for standalone battery storage, how to claim, income limits",
                  "Installation — how batteries connect to the electrical panel, transfer switch, smart panel options",
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
                What your solar battery website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Battery comparison — Tesla Powerwall, Franklin WH, Enphase — capacity, efficiency, cost, warranty",
                  "Capacity guide — what loads one battery handles, when to stack multiple units, essential vs. whole-home backup",
                  "Solar pairing — how batteries work with existing solar, solar-optional standalone installation, grid charging",
                  "Tax credit explanation — federal 30% ITC for storage, how to claim, paired vs. standalone eligibility",
                  "Installation overview — panel connection, transfer switch, smart panel upgrades, monitoring app",
                  "Assessment form with home size, current solar (yes/no), critical loads, outage history, budget range",
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
                &ldquo;Battery storage customers have
                usually just sat through a
                three-day KC ice storm outage
                and they are motivated. But
                they are also confused —
                they think they need solar
                first, they do not know
                about the tax credit, and
                they cannot figure out
                how long one Powerwall
                actually lasts. Without
                a website answering those
                questions I was losing
                half my leads before
                the first conversation.
                The new site with our
                honest capacity guide
                and the tax credit
                section converted those
                leads into calls where
                customers already
                understood what they
                were buying.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Park, solar battery installer, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A solar battery site with brand
                comparison, capacity guide, and
                assessment form starts at $225.
                A full site with tax credit section,
                solar pairing guide, and installation
                overview is $425–$850. One battery
                installation covers the cost many
                times over. No contracts, no monthly fees.
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
