import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Attic Insulation Companies in Kansas City",
  description:
    "Custom websites for attic insulation installation, blown-in insulation, and air sealing companies in the Kansas City area. Show your R-value options, utility rebate expertise, and before-and-after energy savings to win residential and commercial insulation jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/attic-insulation",
  },
};

export default function AtticInsulationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Attic Insulation Companies in Kansas City",
    description: "Custom websites for attic insulation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Attic Insulation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with high utility bills or rooms that never get comfortable want to know their current R-value, what the DOE recommends for Kansas City, and what the Evergy or Spire rebates will cover. A website that answers those questions earns the estimate call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Attic Insulation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Attic Insulation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Attic insulation customers are
              typically motivated by one of
              three things: high utility bills
              in summer and winter, uncomfortable
              rooms on the top floor of their
              home, or a contractor or home
              inspector who told them their
              existing insulation is insufficient.
              They want to understand the R-value
              system — DOE recommends R-49 to
              R-60 for attics in Kansas City&apos;s
              climate zone — and they want to know
              what their home likely has now
              (older homes often have R-11 to R-19
              of batts or settled blown-in) compared
              to what they need. Insulation type
              choice — blown-in fiberglass,
              blown-in cellulose, or spray foam
              for the attic deck — affects
              cost, air sealing effectiveness,
              and whether existing batts should
              be removed or left in place.
              The rebate question is important:
              Evergy offers rebates for added
              insulation, and the federal
              25C tax credit covers 30%
              of the installed cost up to
              $1,200 per year — customers
              who know about these credits
              make much faster decisions.
              Crawl space insulation and
              air sealing are natural extensions
              that homeowners with attic insulation
              projects often add. A well-built
              insulation website that explains
              current vs. recommended R-values,
              walks through the material choice,
              mentions utility rebates, and
              makes scheduling a free energy
              assessment easy earns the
              homeowner who has been putting
              this off.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring an insulation contractor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "R-value explained — what it means, what DOE recommends for KC, what their home likely has now",
                  "Insulation types — blown-in fiberglass, blown-in cellulose, spray foam — differences and when each is used",
                  "Air sealing — why it matters alongside insulation, top plates, penetrations, recessed lights",
                  "Utility rebates — Evergy and Spire rebates, federal 25C tax credit, how to document and claim them",
                  "Old insulation — whether to remove or add on top, asbestos testing for older batts",
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
                What your attic insulation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "R-value guide — current KC recommendations, how to check what your home has, what the upgrade achieves",
                  "Insulation types — blown-in fiberglass vs. cellulose vs. spray foam — pros, cons, best use cases",
                  "Air sealing — what gets sealed, why it matters, how it works with insulation to reduce energy loss",
                  "Rebates and credits — Evergy rebate program, federal 25C tax credit, documentation requirements",
                  "Crawl space and walls — other insulation services beyond attic, whole-house assessment option",
                  "Free estimate form with home age, current R-value if known, utility bill concern, square footage",
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
                &ldquo;Insulation is one of those
                things homeowners know they
                should do but keep putting
                off because they do not
                understand it. Without a
                website, I was explaining
                R-values, material choices,
                and the Evergy rebate from
                scratch on every estimate
                call. The new site with
                our R-value guide, our
                material comparison, and
                our rebate section clearly
                written changed everything.
                Customers came to the estimate
                already knowing what they
                needed and asking about the
                tax credit. Jobs that used
                to take three callbacks to
                close now close in one visit.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Eriksen, insulation contractor, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An insulation site with R-value guide,
                services, and estimate form starts at
                $225. A full site with material comparison,
                rebate section, and crawl space page
                is $425–$850. One whole-house insulation
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
