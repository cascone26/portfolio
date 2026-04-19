import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Deck Staining and Sealing Companies in Kansas City",
  description:
    "Custom websites for deck staining, sealing, and restoration companies in the Kansas City area. Show your product lines, prep process, and color options to win residential deck refinishing and new construction staining jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/deck-staining-sealing",
  },
};

export default function DeckStainingSealingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Deck Staining and Sealing Companies in Kansas City",
    description: "Custom websites for deck staining and sealing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Deck Staining Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with a graying, peeling, or weathered deck want to know what the finish will look like and how long it will last before they commit. A website with color samples, product specs, and before-and-afters earns the quote call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Deck Staining in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Deck Staining &amp; Sealing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Deck staining customers are making
              an aesthetic decision with a durability
              component — they want the deck to
              look good and they want it to last
              three to five years before the next
              coat. The primary decision is stain
              type: transparent or semi-transparent
              stains that show the wood grain are
              popular on new or recently cleaned
              cedar and pressure-treated lumber,
              while solid stains that hide the
              grain are typically the choice for
              weathered, gray, or checked wood
              that is not attractive enough to
              show. The prep process matters more
              than the product: a stain applied
              to wood that was not properly cleaned,
              brightened, and stripped of old
              failed product will peel within
              a season. Customers want to know
              whether you power wash, use a
              deck brightener or stripper, sand
              checked areas, and apply by brush
              and back-roll versus spray only.
              Product brand matters to the
              informed homeowner — Armstrong
              Clark, Defy, TWP, Cabot,
              and Ready Seal all have different
              reputations for longevity. Fence
              and pergola staining is a natural
              extension of deck work and customers
              want to know if you do those too.
              A deck staining website that shows
              your prep process, shows color
              options with real deck photos,
              and explains the product you use
              and why earns the customer who
              wants a professional result
              that actually holds.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a deck staining company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Prep process — cleaning, brightening, stripping old stain, sanding — what is done before any product goes on",
                  "Stain type — transparent, semi-transparent, solid — when each is appropriate, grain visibility",
                  "Product brand — Armstrong Clark, Defy, TWP, Cabot, Ready Seal — longevity reputation",
                  "Application method — spray only vs. brush and back-roll — what ensures better penetration",
                  "Longevity — how long the finish lasts, what affects it, what the recoat cycle looks like",
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
                What your deck staining website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Prep process — power wash, brighten, strip, sand — step-by-step what you do before staining",
                  "Color gallery — transparent, semi-transparent, solid — real deck photos in each finish category",
                  "Products used — brand name, why you chose it, longevity expectations, maintenance schedule",
                  "New vs. restoration — new wood staining vs. stripping and restoring weathered or previously stained decks",
                  "Fences and pergolas — other wood structures you stain, pricing structure for add-ons",
                  "Quote form with deck size, wood type, current condition, stain type preference, timeline",
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
                &ldquo;The hardest part of selling
                deck staining is that customers
                have been burned by bad jobs —
                someone who sprayed a cheap
                product without cleaning the
                wood first and it peeled in
                six months. Our prep process
                is what separates us and we
                had no way to show it before
                someone hired us. The new site
                with our prep steps explained,
                our product brand named with
                the reason we use it, and
                our before and after gallery
                showing real restorations
                changed the quality of customers
                who called. They hired us
                knowing what they were
                getting. We also started
                getting fence and pergola
                add-ons on almost every
                deck job.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Petrov, deck staining contractor, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A deck staining site with gallery,
                prep process, and quote form starts
                at $200. A full site with product
                guide, color samples, and fence and
                pergola section is $425–$750.
                One whole-yard staining job covers
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
