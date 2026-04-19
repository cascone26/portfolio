import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Insulation Contractors in Kansas City",
  description:
    "Custom websites for insulation installation companies in the Kansas City area. Explain insulation types, energy savings, and rebates to get more attic and wall insulation quotes.",
  alternates: {
    canonical: "https://builtsimple.dev/for/insulation-contractors",
  },
};

export default function InsulationContractorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Insulation Contractors in Kansas City",
    description: "Custom websites for insulation installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Insulation Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners researching insulation want to understand what they have, what they need, and what they will save on energy bills. A website that explains R-values, insulation types, and available rebates converts curious visitors into quote requests. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Insulation Contractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Insulation Contractors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Insulation is one of the highest-ROI home improvements a
              Kansas City homeowner can make — but most people don&apos;t know
              what they have, what they need, or how much they could
              save. The insulation contractor whose website explains the
              difference between blown-in, spray foam, and batt insulation,
              shows what R-values are right for KC climate zones, and
              mentions available utility rebates and federal tax credits
              earns the quote request before the homeowner calls anyone else.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners want to know before getting insulation quotes
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insulation types — blown-in fiberglass, blown-in cellulose, spray foam (open vs. closed cell), batt",
                  "R-values — what R-value is recommended for attics, walls, and crawl spaces in KC climate zone",
                  "Where to insulate — attic, knee walls, crawl space, rim joists, basement walls, garage ceiling",
                  "Energy savings — typical heating/cooling reduction, payback period in KC",
                  "Rebates and incentives — Evergy and Spire rebates, federal 25C energy efficiency tax credit",
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
                What your insulation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insulation types page — blown-in, spray foam, batt with best use case for each",
                  "R-value guide — KC zone recommendation for attic (R-49-60), walls, crawl spaces, rim joists",
                  "Services — attic, walls, crawl space encapsulation, air sealing, vapor barriers",
                  "Energy savings — example bills before/after, payback timeline for KC homeowners",
                  "Rebates page — Evergy rebate amounts, Spire natural gas rebates, 25C federal tax credit",
                  "Quote form with home age, current insulation condition, location (attic/crawl/walls), sq footage",
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
                &ldquo;Homeowners would call and ask me to explain
                the difference between blown-in and spray foam, what
                R-value they needed, and whether the Evergy rebate applied.
                The new site answers all of that before they call. I went
                from spending 20 minutes educating on every quote call to
                mostly talking about scheduling and pricing. My close
                rate on quotes went way up.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Harrington, insulation contractor, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An insulation site with services, insulation types, and
                quote form starts at $225. A full site with R-value guide,
                rebates page, and energy savings examples is $425–$875.
                One mid-size attic job covers the cost. No contracts, no monthly fees.
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
