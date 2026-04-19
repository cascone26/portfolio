import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Deck Staining Companies in Kansas City",
  description:
    "Custom websites for deck staining, deck sealing, and deck restoration companies in the Kansas City area. Show your KC moisture cycling wood movement, penetrating vs. film-forming stain selection, and deck prep requirements to win deck staining contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/deck-staining",
  },
};

export default function DeckStainingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Deck Staining Companies in Kansas City",
    description: "Custom websites for deck staining and deck restoration companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Deck Staining Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their solid stain is peeling while a neighbor's semi-transparent stain still looks good, whether their deck wood needs to be stripped before restaining, and how long a professional deck stain job lasts in KC weather. A website that explains penetrating vs. film-forming stain earns the restoration call. Free mockup, no commitment.
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
              <span className="gradient-text">Deck Staining</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Deck staining customers
              are KC homeowners
              whose deck was stained
              with a solid or
              semi-solid film-forming
              product two to four
              years ago and is
              now peeling, bubbling,
              or flaking — the
              predictable failure
              mode of a film-forming
              stain on a deck
              surface that moves
              with KC seasonal
              moisture cycling;
              homeowners with
              a weathered gray
              deck that has never
              been stained or
              was last stained
              five or more years
              ago and has visible
              surface checking,
              UV graying, and
              raised grain; or
              homeowners who
              stained their deck
              themselves with
              a product purchased
              from a home center
              and want a professional
              restoration after
              the product failed
              in one KC season.
              The central education
              is penetrating versus
              film-forming stain:
              a penetrating stain
              — also called a
              semi-transparent
              or transparent stain —
              absorbs into the
              wood fiber and
              does not build
              a film layer on
              the surface; because
              it is inside the
              wood rather than
              on top of it,
              it moves with
              the wood as KC
              moisture cycling
              causes the deck
              boards to expand
              and contract through
              the humidity range
              from ten percent
              in January to
              eighty percent
              in August; a penetrating
              stain does not
              peel — it fades
              and weathers, but
              it does not fail
              catastrophically
              by peeling in sheets;
              the service life
              of a quality penetrating
              stain (Armstrong
              Clark, TWP, Defy
              Extreme) on a
              properly prepped
              KC deck surface
              is two to four
              years. A film-forming
              stain — solid stain,
              deck paint — builds
              a continuous surface
              film over the wood;
              as KC moisture
              cycling causes
              the wood to move,
              the film stretches
              and compresses
              with the wood
              cycles; over one
              to two seasons
              the film develops
              micro-cracks where
              water can enter
              but cannot leave —
              trapped moisture
              forces the film
              off the wood surface
              in the peeling
              pattern KC homeowners
              recognize; once
              a film-forming
              stain has peeled,
              the only correct
              path to a stable
              surface is full
              stripping of the
              remaining film —
              applying a new
              stain over a
              partially stripped
              surface produces
              a new failure in
              the same locations
              within one season.
              Deck prep: the
              most important
              step in a deck
              staining project
              is surface preparation —
              pressure washing
              to remove loose
              material, a deck
              brightener (oxalic
              acid solution)
              to neutralize
              the gray UV oxidation
              layer and open
              the wood grain,
              and drying to
              below fifteen
              percent moisture
              content before
              application; applying
              stain over wood
              above fifteen
              percent moisture
              traps the moisture
              under the stain
              and accelerates
              failure; sanding
              of raised grain
              after washing
              and drying before
              application produces
              a better result
              on pressure-treated
              or weathered wood.
              A deck staining
              website that explains
              why film-forming
              products peel
              on KC decks, what
              penetrating stains
              do differently,
              and why prep is
              more important
              than product brand
              earns the homeowner
              with a peeling
              solid-stain deck
              who wants a professional
              restoration that
              lasts.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before deck staining
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Penetrating vs. film-forming — why solid stain peels in KC humidity cycling, how semi-transparent moves with wood",
                  "Stripping requirement — when existing stain must be fully removed before restaining, how to tell",
                  "Deck prep — pressure washing, brightener/oxalic acid, moisture content requirement before application",
                  "Service life — how long a quality penetrating stain lasts on a KC deck, KC weather factors",
                  "Product selection — Armstrong Clark, TWP, Defy Extreme vs. big-box products, oil vs. water base",
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
                  "Stain type section — penetrating vs. film-forming, KC moisture cycling failure mode, peeling cause explained",
                  "Stripping section — when stripping is required, what stripping involves, cost context for heavily failed decks",
                  "Prep section — pressure washing, brightener application, moisture testing before stain application",
                  "Product section — product lines we use, why oil-based penetrating stains outperform water-based in KC",
                  "Before/after gallery — gray weathered deck vs. restored, peeling deck vs. smooth stained result",
                  "Quote form with deck size, current stain type/condition, last treatment date, desired color or finish",
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
                &ldquo;The penetrating versus
                film-forming section is
                what converts the solid-stain
                customer into a long-term
                client. KC homeowners
                whose solid stain is peeling
                want to apply another
                solid stain and get five
                years out of it — once
                they understand that a
                film-forming product
                on a deck that moves
                with humidity will peel
                again in the same locations,
                they switch to a semi-transparent
                penetrating stain willingly.
                The prep section also
                stops the price objection —
                homeowners who understand
                that brightener and moisture
                testing are not extras
                but what makes the stain
                last stop asking if we
                can skip the prep to
                lower the cost.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Burkhart, deck staining and restoration, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A deck staining site with penetrating vs. film-forming section,
                prep guide, and quote form starts at $200. A full site with
                stripping section, product comparison, and before/after gallery
                is $425–$750. One deck restoration covers the cost. No contracts,
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
