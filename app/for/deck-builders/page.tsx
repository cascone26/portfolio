import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Deck Builders in Kansas City",
  description:
    "Custom websites for deck building and patio construction companies in the Kansas City area. Show your finished projects, get more estimate requests, and win the jobs that make your spring.",
  alternates: {
    canonical: "https://builtsimple.dev/for/deck-builders",
  },
};

export default function DeckBuildersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Deck Builders in Kansas City",
    description: "Custom websites for deck building and patio construction companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Deck Builders",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners planning a deck spend weeks comparing builders before they call anyone. Be the company they find first and trust most. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Deck Builders in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Deck Builders</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Deck projects are big decisions. Homeowners spend real time
              researching materials, looking at finished projects, and comparing
              multiple builders before they make a single call. The companies
              that win those jobs are the ones with a gallery full of real work,
              a clear explanation of their materials and process, and an estimate
              form that makes it easy to take the next step.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before hiring a deck builder
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio of completed decks — material types, sizes, and design complexity",
                  "Materials offered — pressure-treated, cedar, composite (Trex/TimberTech), hardwood, Ipe",
                  "Whether you build patios, pergolas, and covered structures in addition to decks",
                  "Licensing and insurance — contractor license and general liability",
                  "Timeline and process — how long from estimate to completion, permit handling",
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
                What your deck builder website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project gallery organized by material and size — composite, wood, multi-level, covered",
                  "Materials comparison page — treated lumber vs cedar vs composite with pros, cons, cost ranges",
                  "Services page — decks, patios, pergolas, screened porches, outdoor kitchens",
                  "Free estimate form with property address, approximate size, and material preference",
                  "Process section — design consultation, permit, build, and final walkthrough",
                  "Testimonials with project type, size, and specific comments on craftsmanship",
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
                &ldquo;We were getting most of our leads from Angi and paying
                for every single one. Once our site had a real project gallery
                with our composite deck work, leads started coming in organic
                without any ad spend. The quality is completely different —
                people calling us had already picked their material and were
                just looking for a builder they trusted.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Walcott, deck builder, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A deck builder site with portfolio, services, and estimate form
                starts at $250. A full site with material-specific pages,
                comparison guide, and service area coverage is $500–950. One
                composite deck job covers the cost. No contracts, no monthly fees.
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
