import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Exterior Wood Staining Companies in Kansas City",
  description:
    "Custom websites for exterior wood staining, deck staining, and fence staining companies in the Kansas City area. Show your KC UV and moisture stain failure timeline, oil-based vs. water-based stain for KC sun exposure, and wood prep as the determining factor in stain longevity to win exterior wood staining contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/exterior-wood-staining",
  },
};

export default function ExteriorWoodStainingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Exterior Wood Staining Companies in Kansas City",
    description: "Custom websites for exterior wood staining and deck staining companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Exterior Wood Staining Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether they can apply new stain over the old stain that is peeling, how long deck stain actually lasts in Kansas City before it needs to be redone, and whether oil-based or water-based stain is better for a south-facing deck. A website that explains exterior wood staining earns the call from the homeowner who is done watching deck stain fail after one season. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Exterior Wood Staining in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Exterior Wood Staining</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Exterior wood staining
              customers are KC homeowners
              whose deck, fence,
              or pergola stain
              has grayed, peeled,
              cracked, or failed
              to repel water —
              visible as water
              droplets no longer
              beading on the surface
              but absorbing into
              the wood grain within
              seconds of contact;
              homeowners who applied
              a store-brand deck
              stain the previous
              spring and are already
              seeing gray weathering
              or peeling before
              the second KC summer;
              or homeowners who
              want to understand
              the difference between
              the solid color stain
              that looks good at
              application but
              peels, the semi-transparent
              that penetrates but
              shows gray faster,
              and what product
              and prep sequence
              actually extends
              stain life on a
              KC south-facing
              deck. The central
              education is KC
              UV and moisture
              stain failure timeline,
              oil-based versus
              water-based penetrating
              stain for KC conditions,
              and wood prep as
              the determining
              factor in stain
              adhesion — three
              things that determine
              whether a homeowner
              understands why
              the stain they paid
              for failed and what
              a staining job with
              a three-to-five-year
              outcome looks like.
              KC stain failure
              timeline: KC receives
              approximately two
              thousand three hundred
              hours of annual
              sunlight; a south-facing
              KC deck surface
              receives direct
              UV radiation for
              six to eight hours
              daily in summer
              and reaches surface
              temperatures of
              one hundred forty
              to one hundred sixty
              Fahrenheit; UV degrades
              the binder in film-forming
              stains — solid colors
              and solid-body formulas —
              causing the film
              to become brittle,
              crack, and peel
              from the wood substrate;
              KC summer humidity
              cycles between forty
              and eighty percent
              relative humidity
              — the wood expands
              and contracts with
              each cycle, and
              a brittle film layer
              cannot flex with
              the wood; a solid
              color deck stain
              on a KC south-facing
              deck typically requires
              stripping and reapplication
              within three to
              four years — it
              does not simply
              wear down, it peels
              and must be fully
              removed before recoating.
              Oil versus water-based
              penetrating stain:
              penetrating stains —
              semi-transparent
              and transparent formulas —
              do not form a surface
              film; they absorb
              into the wood grain
              and protect from
              within; oil-based
              penetrating stains
              penetrate more deeply
              into dry wood than
              water-based formulas
              due to lower surface
              tension; in KC sun
              exposure conditions,
              a high-quality oil-based
              penetrating stain
              on a properly prepared
              dry wood surface
              typically performs
              for two to three
              years before reapplication
              is needed — no stripping,
              just cleaning and
              a fresh coat; water-based
              penetrating stains
              have improved significantly
              and some formulas
              perform comparably
              to oil in controlled
              conditions, but
              field performance
              in KC high-heat
              direct-sun conditions
              still favors oil-based
              penetrating formulas
              for south and west
              exposures. Wood prep:
              the single factor
              that determines
              stain longevity
              more than product
              selection is wood
              moisture content
              at application;
              wood above nineteen
              percent moisture
              content cannot accept
              penetrating stain —
              the surface pores
              are already filled
              with water; a KC
              deck that was rained
              on within forty-eight
              hours, is in shade
              and still damp,
              or is green pressure-treated
              lumber that has
              not fully dried
              will reject the
              stain regardless
              of product quality;
              old failed stain
              must be stripped
              completely before
              recoating — applying
              over chalked or
              peeling stain produces
              adhesion at the
              old stain layer,
              not the wood, and
              the new coat lifts
              with the old within
              one season. An exterior
              wood staining website
              that explains KC
              UV and temperature
              failure mechanics,
              penetrating versus
              film-forming stain
              for KC conditions,
              and wood moisture
              and prep as the
              prerequisite for
              any stain life earns
              the homeowner who
              has applied stain
              twice and wants
              to understand why
              it kept failing.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before exterior wood staining
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC stain failure timeline — 2,300 sun hours, south-facing 140-160°F surface temp, solid color 3-4 year peel cycle",
                  "Oil vs. water-based penetrating — penetration depth in dry wood, KC high-heat field performance, no-strip reapplication",
                  "Film-forming vs. penetrating — solid color peel mechanism, semi-transparent gray-out, what doesn't require stripping",
                  "Wood prep requirement — 19% moisture threshold, damp wood stain rejection, old stain stripping before recoat",
                  "Maintenance cycle — what a KC deck actually needs every 2-3 years vs. every 5-7 years depending on product and exposure",
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
                What your exterior wood staining website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Failure timeline section — KC UV hours, surface temperature, solid stain brittleness and peel mechanism",
                  "Product guide — penetrating vs. film-forming, oil vs. water-based penetrating, KC exposure recommendation by direction",
                  "Prep section — moisture requirement, drying time after rain, stripping requirement for failed solid stain",
                  "Maintenance schedule — 2-3 year penetrating coat cycle, what it looks like, annual water bead test",
                  "Species section — pressure-treated pine vs. cedar vs. composite, how each accepts stain differently",
                  "Quote form with deck age, current stain condition, stain type last used, exposure direction, fence or deck or both",
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
                &ldquo;The prep section is
                what gets the full
                job approved. KC
                homeowners who want
                a quote for deck
                staining often expect
                clean and stain.
                After the section
                went up explaining
                that applying over
                failed solid stain
                produces adhesion
                at the old coating,
                not the wood, and
                that stripping is
                required for any
                stain life beyond
                one season, customers
                stopped comparing
                my quote to the
                cheaper painter
                who skipped the
                strip. The product
                section also helps —
                once KC homeowners
                understand that
                solid color stains
                on a south-facing
                deck will peel
                regardless of brand,
                they stop chasing
                products and start
                asking about penetrating
                formulas.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Molina, deck staining and exterior wood finishing, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An exterior wood staining site with UV failure section, product
                selection guide, and quote form starts at $200. A full site with
                prep requirement, species guide, and maintenance schedule content
                is $425–$750. One deck staining job covers the cost. No contracts,
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
