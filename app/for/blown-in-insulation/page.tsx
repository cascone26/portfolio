import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Blown-In Insulation Companies in Kansas City",
  description:
    "Custom websites for blown-in insulation, attic insulation, and loose-fill insulation companies in the Kansas City area. Show your R-value recommendations, fiberglass vs. cellulose comparison, and air sealing process to win insulation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/blown-in-insulation",
  },
};

export default function BlownInInsulationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Blown-In Insulation Companies in Kansas City",
    description: "Custom websites for blown-in insulation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Blown-In Insulation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what R-value their attic actually needs in Kansas City, whether fiberglass or cellulose is better, and whether air sealing is included or a separate charge. A website that answers the R-value question upfront earns the energy audit call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Blown-In Insulation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Blown-In Insulation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Blown-in insulation customers
              are homeowners with
              high energy bills,
              rooms that are hard
              to heat or cool,
              or an attic they
              know is underinsulated —
              often after an energy
              audit flags it or
              after a new HVAC
              installation reveals
              how much conditioned
              air is being lost
              through the ceiling.
              The central education
              is R-value targeting:
              DOE Zone 4 (Kansas
              City falls in climate
              zone 4A) recommends
              R-49 to R-60 for
              attic insulation
              in existing homes.
              Most KC homes built
              before 1990 have
              R-11 to R-19 of
              original batt insulation —
              significantly below
              target. Adding blown-in
              over existing batts
              is standard practice
              and does not require
              removing what is
              there. Material comparison:
              fiberglass blown-in
              (Owens Corning AttiCat,
              Johns Manville Spider)
              is moisture-resistant,
              does not settle
              as much, and does
              not encourage mold
              if it gets wet.
              Cellulose blown-in
              (GreenFiber, Nu-Wool)
              is made from recycled
              paper treated with
              borate as a fire
              retardant and pest
              deterrent — it has
              a slightly higher
              R-value per inch
              (R-3.2–3.8 vs.
              R-2.2–2.9 for fiberglass)
              and better air resistance
              due to its denser
              pack. Both require
              proper depth: R-49
              requires approximately
              15" of fiberglass
              or 13" of cellulose.
              Air sealing before
              blowing is the
              most important step
              most contractors
              skip: bypasses (recessed
              lights, plumbing
              chases, top plates,
              attic hatches) are
              the primary path
              for conditioned
              air loss — sealing
              them with fire-rated
              caulk or spray foam
              before adding insulation
              provides 30–40%
              more energy savings
              than insulation alone.
              A blown-in insulation
              website that addresses
              KC R-value targets,
              fiberglass vs. cellulose,
              and includes air
              sealing in the process
              earns the homeowner
              who just opened their
              first winter gas
              bill after moving
              in.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before adding blown-in insulation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "R-value for KC — DOE Zone 4A recommendation, what R-49 to R-60 means in actual inches of material",
                  "Fiberglass vs. cellulose — R-value per inch, moisture behavior, settling, fire and pest treatment",
                  "Air sealing — what bypasses are, why sealing before insulating is as important as the insulation itself",
                  "Adding to existing — whether blown-in goes over old batts or requires removal first",
                  "Energy savings — realistic bill reduction from attic insulation improvement in a KC climate",
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
                What your blown-in insulation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC R-value guide — Zone 4A target (R-49 to R-60), what existing homes typically have, depth calculator",
                  "Material comparison — fiberglass vs. cellulose R-value per inch, moisture resistance, settling comparison",
                  "Air sealing section — what we seal before blowing, why bypasses matter more than added inches alone",
                  "Process walkthrough — inspection, bypass sealing, depth measurement, blowing, final R-value verification",
                  "Existing insulation — when we blow over batts vs. when removal is necessary",
                  "Quote form with attic access, approximate square footage, current insulation type if known, energy concerns",
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
                &ldquo;The most common question
                before the site was
                &apos;what R-value do I
                need&apos; — every single
                call. The website
                answering that upfront
                with the DOE Zone
                4 recommendation and
                what it means in
                inches saved me that
                explanation on every
                job. The air sealing
                section also changed
                the economics conversation —
                customers who read
                it stopped treating
                the air sealing charge
                as an add-on and
                started treating it
                as the point. I close
                more complete jobs
                instead of customers
                asking me to just
                blow without sealing
                first.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Alvarez, insulation contractor, Raytown, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A blown-in insulation site with KC
                R-value guide, material comparison,
                and quote form starts at $200. A full
                site with air sealing section, process
                walkthrough, and energy savings guide
                is $425–$750. One attic insulation
                job covers the cost. No contracts,
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
