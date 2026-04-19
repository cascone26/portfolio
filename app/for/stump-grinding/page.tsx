import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Stump Grinding Companies in Kansas City",
  description:
    "Custom websites for stump grinding and stump removal companies in the Kansas City area. Show your equipment capabilities, pricing transparency, and booking process to win residential and commercial stump removal jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/stump-grinding",
  },
};

export default function StumpGrindingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Stump Grinding Companies in Kansas City",
    description: "Custom websites for stump grinding companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Stump Grinding Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners searching for stump grinding want a clear answer on price, how deep you grind, what happens to the chips, and whether you can access a tight side yard. A website that answers those questions and makes requesting a quote simple gets you the call before they move on. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Stump Grinding in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Stump Grinding</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Homeowners with a stump to remove are
              often in one of two situations: they
              just had a tree removed and the stump
              is sitting there, or they have had
              a stump in their yard for years and
              finally decided to deal with it. In
              both cases, their research is focused
              on a handful of practical questions:
              how much does it cost per stump, how
              deep do you grind below grade, what
              happens to the wood chips, whether
              your equipment can fit through a
              fence or gate to reach a backyard
              stump, and whether you can handle
              multiple stumps in one visit. Customers
              who want the area lawn-ready afterward
              want to know if you offer soil backfill
              and leveling. Commercial properties
              and contractors want to know whether
              you handle large-diameter stumps and
              can quote multi-site work. A stump
              grinding website that is transparent
              about your equipment, your grinding
              depth, and your cleanup process —
              and that makes getting a quote fast —
              captures homeowners who have already
              decided to act and are just looking
              for the right company to call.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners want to know before booking stump grinding
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pricing — per stump, per inch of diameter, or flat rate — what determines the cost",
                  "Grinding depth — how many inches below grade, whether roots are addressed",
                  "Access — whether equipment fits through a standard fence gate or narrow side yard",
                  "Cleanup — what happens to the chips, whether you haul them or leave them for mulch",
                  "Multi-stump — pricing for multiple stumps on one property, volume discount",
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
                What your stump grinding website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Equipment — grinder size and type, access width, large-diameter capability, tracked vs. wheeled",
                  "Process — grinding depth, root handling, chip disposal options, soil backfill availability",
                  "Pricing guide — per inch of diameter, minimum charge, multi-stump pricing, what affects cost",
                  "Access capability — gate width requirements, slope and terrain handling, tight yard examples",
                  "Before and after photos — stumps of different sizes and locations showing finished result",
                  "Quote form with stump count, estimated diameter, location on property, access details",
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
                &ldquo;I was losing jobs to larger
                tree services that bundled stump
                grinding with removal. Without a
                website, homeowners who just needed
                a standalone stump done had no way
                to find me — I was invisible online.
                The new site with my equipment
                explained, my pricing transparent,
                and the before-and-after photos
                showing tight backyard access
                brought in exactly the kind of
                calls I wanted: two or three
                stumps at a time, easy access,
                done in an hour. My schedule
                filled faster than it ever had
                from word of mouth alone.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Whitmore, stump grinding operator, Raytown, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A stump grinding site with equipment,
                pricing guide, and quote form starts
                at $200. A full site with before-and-after
                gallery, access detail, and multi-stump
                pricing is $375–$750. Three stumps in
                one yard covers the cost. No contracts,
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
