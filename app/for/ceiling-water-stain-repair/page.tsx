import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Ceiling Water Stain Repair Companies in Kansas City",
  description:
    "Custom websites for ceiling water stain repair, ceiling stain painting, and drywall water damage repair companies in the Kansas City area. Show your stain blocking primer selection, KC roof leak vs. condensation stain pattern, and texture matching after water damage to win ceiling repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/ceiling-water-stain-repair",
  },
};

export default function CeilingWaterStainRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Ceiling Water Stain Repair Companies in Kansas City",
    description: "Custom websites for ceiling water stain repair and drywall water damage companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Ceiling Water Stain Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a ceiling stain means the leak is still active, why painting over it with regular paint leaves a brown ring within a month, and whether the drywall needs to be replaced or just treated and painted. A website that explains ceiling water stain repair earns the call before they try to DIY it wrong. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Ceiling Water Stain Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Ceiling Water Stain Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Ceiling water stain repair
              customers are KC homeowners
              who discovered a brown
              ring or spreading tan
              stain on a drywall
              ceiling after a KC
              spring storm, a plumbing
              leak from the bathroom
              above, or a slow roof
              leak that has been
              wicking through insulation
              for months before appearing
              at the ceiling surface —
              homeowners who painted
              over the stain with
              ceiling white latex
              paint and watched the
              brown ring bleed through
              within three to four
              weeks, or homeowners
              who want to know whether
              the drywall is structurally
              compromised and needs
              replacement before
              painting. The central
              education is stain
              source identification,
              stain-blocking primer
              selection, and the
              drywall replacement
              threshold — three things
              that determine whether
              a ceiling repair holds
              permanently or fails
              within a season. Stain
              source: a ceiling stain
              pattern identifies
              the source — a clean
              brown ring with a dry
              center indicates a
              resolved leak that
              has fully dried; a
              spreading or growing
              stain indicates an
              active moisture source;
              a stain directly below
              a bathroom indicates
              a supply line or drain
              leak above — supply
              line leaks appear as
              a wet stain that grows
              during use; drain leaks
              appear after showering
              or bathing and may
              have a slightly gray
              or dark center from
              drain water; a stain
              in the center of a
              ceiling below an attic
              in KC spring is typically
              a roof leak that has
              traveled along a rafter
              from the actual entry
              point — the stain location
              does not always correspond
              to the leak entry point;
              any active source must
              be resolved before
              stain repair — painting
              over an active moisture
              source causes the paint
              to bubble, peel, and
              blister within weeks.
              Stain-blocking primer:
              the brown ring that
              bleeds through standard
              ceiling paint is tannin
              and mineral salts left
              by the evaporated water —
              these are oil-soluble
              compounds that dissolve
              into latex paint and
              migrate to the surface
              as the paint dries;
              shellac-based primer
              (Zinsser BIN or equivalent)
              seals tannin bleed
              completely — it dries
              in forty-five minutes
              and the solvent base
              prevents tannin migration
              into the topcoat; oil-based
              stain-blocking primer
              (Zinsser Cover Stain)
              is the second option —
              slower drying, stronger
              odor, but effective;
              water-based stain blockers
              (Zinsser Bulls Eye 1-2-3)
              work on light stains
              but may require two
              coats on heavy tannin
              staining; no standard
              ceiling latex primer
              seals tannin — this
              is why painting over
              a ceiling stain with
              regular paint fails
              every time. Drywall
              replacement threshold:
              drywall that has been
              wet absorbs water into
              the gypsum core —
              the paper face and
              back maintain their
              integrity if dried
              quickly; drywall that
              was wet for more than
              forty-eight to seventy-two
              hours or that shows
              sagging, soft spots,
              crumbling at the edges,
              or visible mold growth
              must be replaced before
              painting; drywall that
              dried completely and
              shows only surface
              staining without soft
              spots can be primed
              and painted without
              replacement; a moisture
              meter reading above
              seventeen percent at
              the stained area indicates
              the drywall has not
              fully dried and is
              not ready for primer.
              A ceiling water stain
              website that explains
              stain source identification,
              why latex paint bleeds
              back through, and the
              drywall moisture threshold
              earns the homeowner
              who wants the ceiling
              repaired once rather
              than three times.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before ceiling water stain repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Stain source — active vs. resolved leak test, bathroom above leak patterns, KC roof leak travel path",
                  "Bleed-through cause — tannin and mineral salts, why latex paint fails on water stains every time",
                  "Stain-blocking primer — shellac-based vs. oil-based vs. water-based, when each is needed",
                  "Drywall replacement — wet drywall threshold, soft spot test, moisture meter reading cutoff",
                  "Texture matching — ceiling texture after drywall patch, matching existing knockdown or orange peel",
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
                What your ceiling water stain repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Stain source section — active vs. resolved diagnosis, KC roof leak travel, bathroom leak pattern identification",
                  "Bleed-through section — tannin chemistry, why standard primer fails, why the ring returns in 3-4 weeks",
                  "Primer selection guide — shellac vs. oil vs. water-based stain blocker, when each applies",
                  "Drywall threshold section — 48-72 hour saturation rule, soft spot test, moisture meter threshold",
                  "Texture matching guide — ceiling texture types, patch blending technique, spray vs. brush application",
                  "Quote form with stain size, location, source status (active or resolved), ceiling texture type, timeline",
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
                &ldquo;The bleed-through section
                alone stopped the &apos;why
                did it come back&apos; calls.
                Half the calls I was
                getting were callbacks —
                homeowners had painted
                over the stain themselves
                with ceiling white,
                it bled through in
                a month, and now they
                were calling me. After
                the section went up
                explaining that tannin
                migrates through any
                latex paint and shellac
                primer is the only
                thing that seals it
                permanently, customers
                stopped trying to DIY
                it first and called
                me from the start.
                The drywall moisture
                section also helped
                a lot — I used to
                show up to paint and
                find the drywall still
                soft from a slow active
                leak. Now customers
                know to test the area
                before booking and
                understand that painting
                wet drywall guarantees
                a callback.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Griffith, interior painting and ceiling repair, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A ceiling water stain repair site with bleed-through section,
                primer guide, and quote form starts at $200. A full site with
                stain source identification, drywall threshold, and texture
                matching guide is $425–$750. One ceiling repair call covers
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
