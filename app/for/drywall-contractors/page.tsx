import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Drywall Contractors in Kansas City",
  description:
    "Custom websites for drywall installation and finishing companies in the Kansas City area. Show your finish level capabilities, new construction and remodel experience, and get more bids from homeowners and general contractors.",
  alternates: {
    canonical: "https://builtsimple.dev/for/drywall-contractors",
  },
};

export default function DrywallContractorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Drywall Contractors in Kansas City",
    description: "Custom websites for drywall installation and finishing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Drywall Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          General contractors and homeowners hiring drywall companies need proof of finish quality before they award a job. A website that shows Level 4 and Level 5 finishes, your new construction volume, and your repair capabilities earns the bid. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Drywall Contractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Drywall Contractors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Drywall is one of the trades where finish quality is
              everything — and where homeowners and general contractors
              can&apos;t tell the difference between a Level 3 and Level 5
              finish from a description alone. A drywall contractor
              website that shows finished walls and ceilings, explains
              finish levels with examples, and demonstrates new
              construction volume alongside repair work earns bids
              from GCs looking for a reliable drywall sub and
              homeowners who want quality over the cheapest quote.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What general contractors and homeowners look for in a drywall company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Finish levels — Level 1 through Level 5 — what each means and when each is specified",
                  "New construction vs. remodel — whether the company does both and at what volume",
                  "Specialty finishes — smooth, skip trowel, orange peel, knockdown, venetian plaster",
                  "Repair work — patch and texture matching for water damage, holes, and renovation transitions",
                  "Crew size and capacity — number of crews, how many boards per day, typical project timeline",
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
                What your drywall company website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project gallery — new construction interiors, remodel finishes, custom ceilings, repair work",
                  "Finish levels guide — Level 1-5 with photos showing what each looks like when complete",
                  "Services — new construction framing and hang, remodel, ceiling textures, repairs, soundproofing",
                  "Specialty textures — skip trowel, knockdown, smooth, orange peel with photos of each",
                  "Commercial capabilities — tenant improvement, multi-unit, office buildout, fire-rated assemblies",
                  "Bid form with project type, square footage, finish level required, start date",
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
                &ldquo;GCs would call us without seeing our work and
                then get sticker shock on Level 5 pricing. The new
                site with the finish level photos and a clear explanation
                of what each requires set the right expectations before
                the bid. We started attracting GCs building higher-end
                homes who specifically wanted Level 5 work and understood
                what they were paying for.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — I. Patel, drywall contractor, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A drywall site with services, finish levels, and bid
                form starts at $225. A full site with texture gallery,
                commercial capabilities, and crew capacity info
                is $425–$875. One new construction contract covers the cost.
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
