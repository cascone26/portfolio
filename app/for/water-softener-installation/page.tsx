import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Water Softener Installation Companies in Kansas City",
  description:
    "Custom websites for water softener installation, water treatment, and reverse osmosis companies in the Kansas City area. Show your system brands, water hardness expertise, and installation process to win residential and commercial water treatment contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/water-softener-installation",
  },
};

export default function WaterSoftenerInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Water Softener Installation Companies in Kansas City",
    description: "Custom websites for water softener installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Water Softener Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Kansas City homeowners dealing with scale buildup, stiff laundry, or spotted dishes know they have hard water — they want to understand GPG ratings, system brands, and what softened water actually changes. A website that answers those questions earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Water Softeners in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Water Softener Installation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Kansas City has notably hard water —
              municipal water in the metro area
              typically runs 15 to 25 grains
              per gallon, which is in the very
              hard to extremely hard range.
              Homeowners with scale buildup
              on faucets and showerheads, dingy
              laundry, spotted dishes, and
              appliances failing early from
              mineral deposits are the natural
              market. The questions they ask
              when researching water softeners
              are: what does grain per gallon
              mean and what is the GPG of
              KC water, how do salt-based
              ion exchange softeners work
              versus salt-free conditioners
              and which is better for their
              situation, what brands do you
              carry — Kinetico, EcoWater,
              Culligan, Fleck, WaterBoss —
              and what are the differences
              in regeneration efficiency
              and salt use, whether a
              reverse osmosis system for
              drinking water makes sense
              alongside the softener, and
              what the installation involves
              (bypass valve, drain line,
              brine tank, electrical for
              metered systems). Water
              testing is a natural first
              step that many homeowners
              do not know to ask for —
              a free water test that shows
              the actual hardness, iron
              content, and pH of their
              specific water builds trust
              and sizes the equipment
              correctly. Whole-house
              iron filters are a common
              add-on for well water
              customers. A water softener
              website that explains KC
              water hardness with actual
              data, compares system types
              honestly, names the brands
              you carry, and offers
              a free water test earns
              the homeowner who is
              tired of scrubbing scale.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before buying a water softener
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Water hardness — what GPG means, what KC municipal water typically tests, what is considered hard",
                  "System type — salt-based ion exchange vs. salt-free conditioner — differences, pros, cons",
                  "Brand comparison — Kinetico, EcoWater, Culligan, Fleck, WaterBoss — efficiency and salt consumption",
                  "Reverse osmosis — whether a drinking water RO system makes sense alongside the softener",
                  "Installation — bypass valve, drain line, brine tank, space requirements, professional vs. DIY",
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
                What your water softener website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC water hardness — actual GPG data for Kansas City municipal water, what it means for your home",
                  "System types — salt-based softeners vs. salt-free conditioners — honest comparison for different needs",
                  "Brand lineup — Kinetico, EcoWater, Fleck, WaterBoss — models, regeneration efficiency, warranty",
                  "Free water test — what we test, what the results mean, how it sizes your equipment correctly",
                  "Reverse osmosis — drinking water RO systems, under-sink installation, what it removes vs. softening",
                  "Quote form with home size, water source (city or well), current problems, interest in RO system",
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
                &ldquo;Water softeners are a research
                purchase — customers compare
                systems for weeks before they
                call anyone. Before I had a
                website, I was losing those
                customers to the national
                brands because they showed
                up in every search and had
                all the information online.
                The new site with our KC
                water hardness data, our
                honest brand comparison,
                and our free water test offer
                brought in customers who
                had already decided they
                wanted a local installer
                and just needed to find one.
                We also started closing
                RO add-ons on almost every
                job after adding that section.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Andersen, water treatment installer, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A water softener site with
                system types, brands, and quote
                form starts at $225. A full site
                with KC hardness data, RO section,
                and water test offer is $425–$850.
                One softener installation covers
                the cost. No contracts, no monthly fees.
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
