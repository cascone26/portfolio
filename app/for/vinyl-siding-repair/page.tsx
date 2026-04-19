import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Vinyl Siding Repair Companies in Kansas City",
  description:
    "Custom websites for vinyl siding repair, siding panel replacement, and vinyl siding restoration companies in the Kansas City area. Show your KC hail impact crack patterns, vinyl siding thermal expansion buckling in KC summer heat, and color match age fading to win vinyl siding repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/vinyl-siding-repair",
  },
};

export default function VinylSidingRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Vinyl Siding Repair Companies in Kansas City",
    description: "Custom websites for vinyl siding repair and siding panel replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Vinyl Siding Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether cracked siding panels can be replaced individually or whether the whole wall has to come off, why new replacement panels don't match the existing color, and whether the buckling on the south wall is a defect or an installation error. A website that explains vinyl siding repair earns the call from the KC homeowner who had hail last spring and is now seeing cracks they didn't notice before. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Vinyl Siding Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Vinyl Siding Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Vinyl siding repair
              customers are KC
              homeowners who had
              a hail event and
              are seeing impact
              cracks — small
              star-shaped fractures
              at the midpoint
              of panels where
              a hailstone struck
              the panel and
              the vinyl cracked
              rather than denting
              like metal; homeowners
              who notice siding
              panels buckling
              or rippling on
              the south and
              west walls during
              KC summer — panels
              that were installed
              without adequate
              expansion clearance
              at the nail hem
              and buckle as
              the vinyl expands
              in direct sun
              at surface temperatures
              exceeding one
              hundred and sixty
              degrees Fahrenheit
              on a dark-color
              panel; or homeowners
              who had a few
              panels replaced
              after an impact
              and discovered
              that the new
              panels are noticeably
              lighter or more
              saturated in
              color than the
              original panels
              — a result of
              UV chalking and
              color fade on
              the original
              panels over ten
              to twenty years
              that no in-stock
              replacement panel
              can match. The
              central education
              is KC hail impact
              crack pattern
              identification,
              thermal expansion
              buckling as
              an installation
              defect rather
              than a product
              defect, and
              color match age
              fading — three
              things that
              determine whether
              a homeowner understands
              what kind of
              repair their
              siding actually
              needs and whether
              individual panel
              replacement or
              a full wall
              approach is
              the right solution
              for their situation.
              KC hail crack
              pattern: KC
              receives some
              of the highest
              annual hail
              frequency in
              the continental
              United States —
              Kansas City is
              in the secondary
              hail belt extending
              northeast from
              the primary
              Oklahoma-Kansas
              corridor; vinyl
              siding becomes
              brittle below
              forty degrees
              Fahrenheit —
              late-fall and
              early-spring
              KC hail events
              in the thirty-five
              to fifty degree
              temperature range
              produce more
              cracking damage
              than summer
              hail at the
              same size because
              the vinyl is
              already in
              the brittle
              zone; impact
              cracks are
              typically circular
              or star-shaped,
              three-quarters
              to two inches
              in diameter,
              at random locations
              on the panel
              face — not
              at joints or
              nailing slots;
              insurance adjusters
              document hail
              damage by checking
              for consistent
              impact density
              across all
              exposures — random
              vs. directional
              impact pattern
              indicates wind-driven
              hail direction.
              Thermal expansion
              buckling: vinyl
              siding expands
              approximately
              one-half inch
              per twenty-foot
              run for every
              fifty-degree
              temperature
              change; a dark-color
              south-facing
              panel in KC
              summer can
              reach one hundred
              and sixty to
              one hundred
              and eighty
              degrees Fahrenheit
              surface temperature —
              a one-hundred-thirty-degree
              rise above
              install temperature
              in winter; the
              nail hem slot
              is elongated
              to allow this
              movement — the
              panel is nailed
              at the center
              of the slot,
              loose, so it
              can slide left
              and right; panels
              nailed tight
              against the
              slot end have
              no room to
              expand and
              buckle outward
              at the midpoint;
              buckling is
              an installation
              defect, not
              a material defect —
              it cannot be
              fixed by replacing
              the panel unless
              the replacement
              is installed
              with correct
              nail clearance.
              Color match
              and age fade:
              vinyl siding
              color fades
              through UV
              chalking —
              titanium dioxide
              pigment in
              the surface
              layer breaks
              down under
              UV exposure
              and the panel
              develops a
              lighter, chalky
              appearance;
              on a south
              or west wall
              in KC, visible
              fading begins
              in eight to
              twelve years
              and is significant
              by fifteen
              to twenty
              years; no
              replacement
              panel from
              any manufacturer
              matches the
              faded color
              of aged original
              panels — the
              replacement
              is factory-fresh
              and the original
              is UV-weathered;
              for a hail
              damage repair
              on an older
              KC home, the
              realistic outcome
              is a visible
              patch unless
              the entire
              wall is replaced
              — a fact that
              insurance adjusters
              evaluate under
              matching provisions
              in the homeowner
              policy. A vinyl
              siding repair
              website that
              explains KC
              hail crack pattern
              and temperature
              effects on
              brittle vinyl,
              thermal expansion
              buckling as
              an installation
              defect, and
              the color match
              limitation on
              aged panels
              earns the homeowner
              making a hail
              claim who wants
              to understand
              what they&apos;re
              actually getting.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before vinyl siding repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC hail crack pattern — star fractures vs. dents, brittle-zone temperature effect, impact density for insurance documentation",
                  "Thermal expansion buckling — nail hem slot function, correct nailing clearance, installation defect vs. material defect",
                  "Color match age fading — UV chalking mechanism, why new panels don't match, full wall vs. patch on aged siding",
                  "Panel replacement process — zip tool panel removal, snap-in replacement, when J-channel must come off",
                  "Insurance claim process — adjuster documentation, matching provisions, cosmetic vs. functional damage distinctions",
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
                What your vinyl siding repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Hail damage section — KC hail frequency, brittle-zone temperature, crack vs. dent identification, impact density pattern",
                  "Thermal expansion section — nail hem slot function, one-half inch per 20 feet, south/west wall buckling cause",
                  "Color match section — UV chalking timeline in KC, why aged panels won't match, insurance matching provision",
                  "Repair vs. replace — individual panel ZIP tool replacement, J-channel removal, full wall replacement criteria",
                  "Insurance claim guide — what adjusters look for, cosmetic damage provisions, documentation KC homeowners need",
                  "Quote form with siding age, damage type (hail/impact/buckling), wall exposure, color fading, prior repair attempts",
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
                &ldquo;The color match section
                is what set the
                expectation before
                I even arrived
                on the job. KC
                homeowners with
                a fifteen-year-old
                house and hail
                damage would call
                expecting new panels
                to match perfectly —
                they saw pictures
                of fresh vinyl
                installations online
                and assumed that&apos;s
                what they&apos;d get.
                After the section
                went up explaining
                UV chalking and
                why factory-fresh
                panels can&apos;t match
                aged panels, customers
                arrived at the
                estimate understanding
                that a full wall
                replacement was
                the way to get
                a uniform appearance
                and that individual
                panel patches on
                an older house
                would always show.
                The thermal expansion
                buckling section
                also generated
                calls I wasn&apos;t
                getting before —
                KC homeowners with
                south-wall buckling
                had been told
                by the original
                contractor it was
                a product defect.
                Understanding it
                was an installation
                defect changed
                who they called.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Nguyen, siding repair and replacement, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A vinyl siding repair site with hail crack section, thermal expansion
                guide, and quote form starts at $200. A full site with color match
                age fading, insurance claim guidance, and repair vs. replace criteria
                is $425–$750. One hail repair job covers the cost. No contracts, no
                monthly fees.
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
