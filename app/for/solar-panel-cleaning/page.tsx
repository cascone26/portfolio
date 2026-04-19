import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Solar Panel Cleaning Companies in Kansas City",
  description:
    "Custom websites for solar panel cleaning and maintenance companies in the Kansas City area. Show your safety certifications, cleaning process, and efficiency restoration results to win residential and commercial solar maintenance contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/solar-panel-cleaning",
  },
};

export default function SolarPanelCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Solar Panel Cleaning Companies in Kansas City",
    description: "Custom websites for solar panel cleaning companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Solar Panel Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Solar panel owners know dirty panels lose output — they want a cleaner who is insured for roof work, uses deionized water, and can show before-and-after production readings. A website that answers those questions earns the annual service contract. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Solar Panel Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Solar Panel Cleaning</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Solar panel owners in Kansas City
              invested fifteen to thirty thousand
              dollars in a system that only produces
              what sunlight reaches the cells.
              Dust, pollen, bird droppings, and
              environmental film reduce output by
              fifteen to twenty-five percent over
              a season — the homeowner sees it
              in their monitoring app but may not
              know cleaning is the fix. The
              questions they ask when searching
              for a cleaner are: are you insured
              for roof work and what is the
              liability coverage, do you use
              deionized or purified water so there
              is no mineral spotting after drying,
              do you use soft brushes and avoid
              harsh chemicals that void the panel
              warranty, and can you show the
              production improvement after the
              cleaning — most monitoring systems
              like SolarEdge, Enphase, or Sense
              let you compare pre- and post-clean
              output directly. Commercial customers
              — warehouses, churches, schools,
              farms with large ground-mount systems —
              want a vendor who can service
              multiple arrays, has commercial
              liability coverage, and can provide
              documentation for their maintenance
              records. Seasonal service plans
              that include one or two cleanings
              per year plus an inspection sell
              well because panel owners want
              a set-it-and-forget-it relationship.
              A solar cleaning website that
              shows your safety certifications,
              explains deionized water vs.
              tap water, and includes
              production comparison results
              earns the homeowner who just
              checked their monitoring app
              and noticed the drop.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What solar panel owners check before hiring a cleaning company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance — roof work liability coverage, what happens if a panel is damaged during service",
                  "Water type — deionized or purified water vs. tap water — mineral spotting and panel warranty implications",
                  "Cleaning method — soft brush, no pressure washing, no harsh chemicals — what is safe for panels",
                  "Production results — before-and-after output data, percentage recovery, monitoring system compatibility",
                  "Service plans — annual or twice-yearly cleaning contracts, inspection included, discount for recurring",
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
                What your solar panel cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Safety and insurance — roof work coverage, bonded and insured, panel damage policy",
                  "Cleaning process — deionized water system, soft brush method, no chemicals, no pressure washing",
                  "Production results — before-and-after output comparisons, SolarEdge and Enphase monitoring data",
                  "Service plans — annual, twice-yearly, one-time — what each includes, pricing structure",
                  "Commercial service — warehouses, churches, schools, ground-mount systems, multi-array contracts",
                  "Booking form with system size, panel brand, last cleaning date, monitoring system, service preference",
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
                &ldquo;Solar customers are tech-savvy —
                they check their monitoring app
                every week and they can see exactly
                what the panels are producing.
                When they search for a cleaner,
                they want someone who understands
                their system and will not void
                the warranty. Before I had a
                website, every lead was skeptical
                because they could not verify
                anything about us. The new site
                with our deionized water system
                explained, our insurance listed,
                and actual production before-and-after
                screenshots built the credibility
                that closed jobs immediately.
                We also started selling annual
                service plans on almost every
                residential job.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Nakamura, solar panel cleaning, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A solar cleaning site with process,
                insurance, and booking form starts
                at $200. A full site with production
                results, service plans, and commercial
                section is $425–$850. One commercial
                array contract covers the cost.
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
