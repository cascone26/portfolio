import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pool Builders in Kansas City",
  description:
    "Custom websites for inground pool construction and installation companies in the Kansas City area. Show your pool designs, explain the build process, and get more backyard consultation requests.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pool-construction",
  },
};

export default function PoolConstructionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pool Builders in Kansas City",
    description: "Custom websites for inground pool construction and installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pool Builders",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners planning an inground pool spend months researching before calling a single builder. A pool company website with real project photos, pool types, and process walk-throughs earns the design consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pool Builders in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pool Builders</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              An inground pool is a $50,000+ decision. Homeowners spend months
              looking at pool designs, comparing concrete vs. fiberglass,
              researching what features are possible, and trying to understand
              what the construction process actually involves. The pool builder
              with a website that answers all of those questions with real
              project photos and honest process information gets the design
              consultation — and the contract.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research when planning a pool
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pool types — concrete/gunite, fiberglass, vinyl liner — durability, cost, maintenance",
                  "Design options — freeform, geometric, lap pool, plunge pool, attached spa",
                  "Features — water features, LED lighting, tanning ledges, sun shelves, automation systems",
                  "Build timeline — how long from contract to swim-ready in KC climate",
                  "Maintenance requirements — what it takes to keep a pool, monthly costs, seasonal closing",
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
                What your pool builder website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pool gallery — organized by type and style, real KC backyard builds with details",
                  "Pool types comparison — concrete vs. fiberglass vs. vinyl with honest pros/cons",
                  "Design features — water features, spa, lighting, automation, tanning ledge options",
                  "Build process — site assessment, design, permitting, excavation, plumbing, decking, fill",
                  "Maintenance and service — what you offer for opening, closing, and ongoing care",
                  "Consultation request with yard size, pool type interest, features, timeline, budget range",
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
                &ldquo;People plan pools for years before they call anyone.
                The new site with our project gallery organized by pool
                type and our concrete vs. fiberglass comparison page brought
                in customers who had been researching us for months before
                they ever made contact. They arrive at consultations knowing
                exactly what they want because our site educated them.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — H. Wilder, pool construction company, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pool builder site with gallery, pool types, and consultation
                form starts at $350. A full site with pool type comparison,
                features, build process, and maintenance pages is $650–$1,350.
                One pool contract covers the cost many times over. No
                contracts, no monthly fees.
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
