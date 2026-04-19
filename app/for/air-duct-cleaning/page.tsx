import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Air Duct Cleaning Companies in Kansas City",
  description:
    "Custom websites for air duct cleaning, HVAC duct cleaning, and dryer vent cleaning companies in the Kansas City area. Show your NADCA certification, negative pressure process, and before-and-after results to win residential and commercial duct cleaning contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/air-duct-cleaning",
  },
};

export default function AirDuctCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Air Duct Cleaning Companies in Kansas City",
    description: "Custom websites for air duct cleaning companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Air Duct Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners who have never had their ducts cleaned — or who bought a home and don&apos;t know the history — want NADCA certification, a negative pressure process they can verify, and before-and-after photos. A website that builds that trust earns the appointment. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Air Duct Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Air Duct Cleaning</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Air duct cleaning is a service
              with a significant trust problem:
              the industry has enough low-quality
              operators running bait-and-switch
              schemes that informed homeowners
              are skeptical of any provider
              who cannot demonstrate credentials.
              The gold standard credential is
              NADCA — National Air Duct Cleaners
              Association — certification, which
              requires technicians to pass the
              ASCS exam and use the proper
              negative air pressure method.
              The NADCA method: a high-powered
              vacuum creates negative pressure
              in the duct system, and agitation
              tools dislodge debris that gets
              captured in the vacuum rather
              than blown into the living space.
              Homeowners want to know the
              difference between this and
              a $99 shop-vac job, whether
              the blower motor and coil are
              cleaned as part of the service,
              and whether antimicrobial
              treatment is included or upsold.
              New construction cleaning is
              a strong market — drywall dust
              and construction debris
              accumulate in duct systems
              before the first occupant
              moves in. Post-renovation
              cleaning is similar. Dryer vent
              cleaning is a natural add-on
              that reduces fire risk and
              most homeowners have never
              had done. Commercial properties —
              offices, restaurants, apartment
              buildings — need duct cleaning
              on a regular schedule and
              want documentation. A duct
              cleaning website that leads
              with NADCA certification,
              explains the negative pressure
              method, and shows what comes
              out of real duct systems
              earns the homeowner who
              has been looking for
              someone legitimate.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a duct cleaning company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "NADCA certification — what it means, why it matters, how to verify a contractor's credential",
                  "Cleaning method — negative pressure vacuum, agitation tools, why $99 specials are not real cleaning",
                  "What is included — supply and return vents, blower motor, coil, plenum — full system vs. vents only",
                  "Before and after — photos or video of what comes out, production comparison, visual proof of results",
                  "Dryer vent — whether dryer vent cleaning is included or add-on, fire risk reduction, how often needed",
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
                What your air duct cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "NADCA certification — credential display, what the exam covers, why it separates real cleaners",
                  "Cleaning process — negative pressure method, agitation tools, blower and coil service, step-by-step",
                  "Before and after gallery — debris photos, video of extraction, duct comparison shots",
                  "Service scope — supply vents, returns, blower motor, coil, plenum — what is included in your pricing",
                  "Dryer vent cleaning — fire risk stats, how often, what the cleaning involves, add-on pricing",
                  "Estimate form with home size, number of vents, last cleaning if known, new construction or renovation",
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
                &ldquo;Duct cleaning is a hard
                sell because there are so
                many companies running the
                $79 special scam that customers
                do not trust anyone. Our
                NADCA certification is what
                separates us but I could
                not explain it in a thirty-second
                phone call. The website with
                our NADCA number displayed,
                our process explained, and
                real photos of what we pull
                out of duct systems completely
                changed the quality of our
                leads. Customers who call
                now already know the difference
                between what we do and
                the $79 van that shows up
                with a shop vac.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — V. Petersen, NADCA-certified duct cleaning, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A duct cleaning site with NADCA
                credential, process, and estimate
                form starts at $200. A full site
                with gallery, dryer vent section,
                and commercial program is $425–$850.
                One whole-house cleaning job covers
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
