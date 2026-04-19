import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Caulking Companies in Kansas City",
  description:
    "Custom websites for window caulking, exterior window seal, and window weatherproofing companies in the Kansas City area. Show your KC freeze-thaw caulk failure patterns, elastomeric vs. silicone caulk for KC temperature swings, and window flashing integration with caulk to win window caulking contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-caulking",
  },
};

export default function WindowCaulkingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Caulking Companies in Kansas City",
    description: "Custom websites for window caulking and exterior window seal companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Caulking Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why the caulk around their windows keeps cracking, whether they need to remove the old caulk before adding new, and what caulk type actually holds in KC's extreme temperature range. A website that explains the caulk failure pattern earns the call before a failed seal becomes water damage. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Caulking in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Caulking</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window caulking
              customers are KC
              homeowners who see
              cracked, shrunken,
              or missing caulk
              at the junction
              between a window
              frame and the
              exterior wall
              siding or brick
              — the result of
              Kansas City's
              annual temperature
              swing of one
              hundred ten degrees
              Fahrenheit from
              January lows
              of negative ten
              to July highs
              of one hundred
              degrees, which
              cycles exterior
              caulk joints
              through expansion
              and contraction
              fifty or more
              times per year;
              homeowners who
              applied caulk
              themselves using
              a standard acrylic
              latex paintable
              caulk and saw
              it crack and
              pull away from
              the window frame
              within one to
              two winters;
              or homeowners
              who noticed condensation
              on the interior
              of window frames
              in winter or
              felt cold air
              drafts at window
              corners and want
              to understand
              whether failed
              caulk is the
              cause. The central
              education is
              KC temperature
              swing as the
              reason standard
              acrylic caulk
              fails in one
              to three years
              at exterior
              window joints —
              acrylic latex
              caulk has approximately
              twenty-five percent
              elongation before
              failure; a one-quarter-inch
              wide joint between
              a vinyl window
              frame and a
              wood-sided house
              in KC experiences
              thermal movement
              of approximately
              one-sixteenth
              inch annually
              as the vinyl
              frame expands
              and contracts;
              over fifty cycles,
              standard acrylic
              yields and cracks;
              elastomeric acrylic
              caulk with fifty
              percent elongation
              and silicone
              caulk with over
              five hundred
              percent elongation
              are the correct
              materials for
              KC exterior window
              joints that
              experience this
              movement; silicone
              caulk is not
              paintable — it
              cannot be topcoated
              after application —
              making it unsuitable
              for painted wood
              or fiber cement
              window trim where
              a color match
              is required;
              paintable elastomeric
              acrylic caulk
              is the correct
              KC exterior window
              caulk for painted
              surfaces; preparation
              as the step
              that determines
              whether new caulk
              lasts —
              caulking over
              existing failed
              caulk without
              removing the
              old material
              creates a bond
              to a failed
              substrate; all
              old caulk must
              be removed with
              a caulk removal
              tool or oscillating
              tool to bare
              substrate before
              new caulk is
              applied; the
              joint must be
              dry — applying
              caulk to a
              damp surface
              prevents adhesion;
              backer rod in
              joints wider
              than one-quarter
              inch limits
              caulk depth
              and prevents
              three-point
              bond failure.
              KC window caulking
              details: brick
              veneer-to-window
              frame joints
              in KC homes require
              a siliconized
              acrylic or urethane
              caulk compatible
              with masonry;
              the joint above
              the window head
              flashing must
              not be caulked —
              this joint allows
              water that gets
              behind the casing
              to drain out;
              caulking the
              head joint traps
              water against
              the window frame
              and creates rot
              conditions; a
              professional window
              caulking job
              that includes
              correct material
              selection, complete
              old caulk removal,
              and knowledge
              of which joints
              to leave open
              for drainage
              will last eight
              to twelve years
              in KC climate.
              A window caulking
              website that
              explains KC temperature
              swing as the
              caulk failure
              mechanism, elastomeric
              vs. silicone
              selection for
              different siding
              types, and why
              the head flashing
              joint must remain
              open earns the
              KC homeowner
              whose window
              caulk failed
              again after
              a DIY attempt.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before window caulking
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC temperature swing — 110°F annual range, 50+ expansion/contraction cycles, why standard acrylic fails in 1-3 years",
                  "Caulk type selection — elastomeric acrylic (paintable, 50% elongation) vs. silicone (non-paintable, 500%+)",
                  "Old caulk removal — caulk-over-caulk failure mechanism, bare substrate required for adhesion",
                  "Head flashing joint — must stay open for drainage, caulking it traps water and causes rot",
                  "Joint width and backer rod — when to use backer rod, depth control, three-point bond prevention",
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
                What your window caulking website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC failure section — temperature swing mechanism, elongation requirement, why elastomeric outperforms acrylic",
                  "Material selection — elastomeric vs. silicone by siding type, paintable requirement, masonry-compatible options",
                  "Prep section — full old caulk removal process, dry substrate requirement, backer rod use",
                  "Drainage section — which joints stay open, head flashing rule, what happens when head joint is caulked",
                  "Longevity section — 8-12 year lifespan with correct prep and material, what shortens it",
                  "Quote form with window count, siding type, brick or wood, head caulk present, interior draft or condensation",
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
                &ldquo;The temperature
                swing section
                closes the &apos;I
                already did it
                myself&apos; conversation.
                KC homeowners
                who tried DAP
                Alex Plus acrylic
                and watched it
                crack in one
                winter call back
                confused — they
                used a good caulk,
                they did it right.
                After the section
                went up explaining
                that standard
                acrylic has twenty-five
                percent elongation
                and a KC window
                joint moves
                more than that
                across fifty
                winter cycles,
                customers understood
                why a professional
                with elastomeric
                material gets
                a different result.
                The head flashing
                section also
                prevents a common
                problem — KC
                homeowners who
                tried to seal
                every joint around
                the window and
                caulked the
                head joint created
                a water trap
                that rotted the
                header before
                anyone noticed.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Okonkwo, window caulking and exterior weatherproofing, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window caulking site with KC failure explanation, material guide,
                and quote form starts at $200. A full site with prep requirements,
                drainage joint rules, and longevity section is $425–$750. One whole-house
                caulking job covers the cost. No contracts, no monthly fees.
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
