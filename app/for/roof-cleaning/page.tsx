import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Roof Cleaning Companies in Kansas City",
  description:
    "Custom websites for roof cleaning, algae removal, and soft wash roofing companies in the Kansas City area. Show your Gloeocapsa magma treatment, soft wash vs. pressure wash distinction, and shingle warranty considerations to win roof cleaning contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/roof-cleaning",
  },
};

export default function RoofCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Roof Cleaning Companies in Kansas City",
    description: "Custom websites for roof cleaning and algae removal companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Roof Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what the black streaks on their shingles are, whether pressure washing removes them or destroys the shingles, and whether roof cleaning actually extends the roof's life. A website that explains Gloeocapsa magma and soft wash earns the cleaning call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Roof Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Roof Cleaning</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Roof cleaning customers
              are homeowners with
              black or dark brown
              streaks running
              down the north-facing
              or shaded slopes
              of their asphalt
              shingle roof —
              the streaks typically
              appear 8–15 years
              into the roof's
              life and homeowners
              often assume the
              shingles are failing
              or the roof is
              stained from tree
              sap. The central
              education is what
              the streaks actually
              are and why soft
              wash is the correct
              removal method:
              the black streaks
              are Gloeocapsa
              magma, a cyanobacterium
              (blue-green algae)
              that feeds on
              the limestone
              filler in modern
              asphalt shingles.
              GAF and CertainTeed
              began adding limestone
              to shingle asphalt
              in the 1990s to
              reduce cost —
              the limestone is
              a direct food
              source for the
              organism. Left
              untreated, Gloeocapsa
              magma degrades
              the limestone
              filler and reduces
              the granule adhesion
              in the affected
              areas, shortening
              shingle life. The
              ARMA (Asphalt Roofing
              Manufacturers Association)
              and GAF both recommend
              soft wash (low-pressure
              application of
              diluted sodium
              hypochlorite —
              typically 1.5–3%
              bleach solution
              with a surfactant
              such as Roof Snot
              or similar) as
              the correct treatment.
              Pressure washing
              asphalt shingles
              (above 500 PSI
              at the surface)
              dislodges granules
              that protect the
              asphalt mat from
              UV degradation —
              granule loss accelerates
              shingle aging and
              can void the manufacturer
              warranty. Post-treatment
              appearance: the
              algae dies and
              washes away over
              several rain events —
              the roof does not
              look clean immediately
              after treatment
              the way a pressure-washed
              surface would.
              Preventive copper
              or zinc strips
              (installed at
              the ridge under
              the cap shingles,
              exposing a 2–4"
              face) leach ions
              that inhibit algae
              growth downslope —
              they extend clean
              appearance for
              3–5 years after
              treatment. Algae-resistant
              shingles (Scotchgard
              by GAF, TechShield
              by CertainTeed)
              embed copper granules
              in the shingle —
              effective for
              10–15 years before
              the copper granules
              deplete. A roof
              cleaning website
              that explains
              Gloeocapsa magma,
              why pressure washing
              damages shingles,
              and how soft wash
              actually works
              earns the homeowner
              whose neighbor
              had their streaked
              roof pressure washed
              and needed a replacement
              two years later.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before cleaning a roof
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "What the black streaks are — Gloeocapsa magma identification, why modern shingles are susceptible",
                  "Soft wash vs. pressure wash — why pressure washing removes granules, what ARMA recommends",
                  "How soft wash works — sodium hypochlorite concentration, surfactant, why results take several rain events",
                  "Preventive treatments — copper/zinc ridge strips, algae-resistant shingles, how long protection lasts",
                  "Shingle warranty — how pressure washing affects warranty, what manufacturer guidelines say",
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
                What your roof cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Gloeocapsa magma section — what it is, why limestone shingle filler feeds it, shingle lifespan impact",
                  "Soft wash guide — solution concentration, surfactant role, why results appear over rain events not immediately",
                  "Why pressure washing harms shingles — granule loss mechanism, UV mat exposure, warranty impact",
                  "Preventive treatment section — copper/zinc ridge strips, algae-resistant shingles, maintenance timeline",
                  "North-facing slope context — why shaded areas develop streaks faster, what roof orientation means for KC homes",
                  "Quote form with roof age, shingle type if known, streak coverage, previous cleaning or treatment",
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
                &ldquo;My biggest problem was
                homeowners who had been
                quoted pressure washing
                from a general exterior
                cleaning company that
                did not know the difference.
                The website explaining
                granule loss and what
                ARMA says about pressure
                washing brought in customers
                who were already skeptical
                of the pressure wash quote
                and looking for the right
                method. The post-treatment
                appearance section also
                helped — I stopped getting
                calls two days after service
                asking why the roof still
                looked the same. Customers
                knew the timeline before
                I finished the job.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Krueger, roof and exterior cleaning, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A roof cleaning site with Gloeocapsa
                magma section, soft wash vs. pressure
                wash guide, and quote form starts
                at $200. A full site with preventive
                treatment guide, warranty section,
                and north-slope context is $425–$750.
                One roof cleaning covers the cost.
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
