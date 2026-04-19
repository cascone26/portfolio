import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Well Installation Companies in Kansas City",
  description:
    "Custom websites for window well installation, basement window well replacement, and egress window well companies in the Kansas City area. Show your KC frost heave on window well flanges, window well drainage to prevent flooding, and well cover selection for KC hail to win window well contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-well-installation",
  },
};

export default function WindowWellInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Well Installation Companies in Kansas City",
    description: "Custom websites for window well installation and basement egress window well companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Well Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why water pools in their window well during KC rainstorms, whether a window well cover is worth installing, and what the gravel drainage layer at the bottom of a window well is supposed to do. A website that explains window well installation earns the call before a flooded well becomes a flooded basement. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Well Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Well Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window well installation
              customers are KC homeowners
              who see water pooling
              in the well during
              and after KC rain
              events — water that
              rises against the
              basement window and
              creates hydrostatic
              pressure against
              the window frame
              and sill, eventually
              entering the basement
              at the frame-to-masonry
              joint or through
              a failed window seal;
              homeowners adding
              a bedroom to a basement
              and required by IRC
              egress code to have
              a window that meets
              net clear opening
              requirements — twenty
              inches wide, twenty-four
              inches high, and
              five-point-seven square
              feet net clear opening —
              which typically requires
              a window well to
              allow egress from
              below-grade level;
              or homeowners whose
              existing window well
              has shifted, heaved,
              or pulled away from
              the foundation wall —
              leaving a gap between
              the well flange and
              the wall that allows
              surface water to
              enter behind the
              well and directly
              against the foundation.
              The central education
              is KC frost heave
              and the window well
              flange-to-foundation
              seal, window well
              drainage design to
              prevent flooding,
              and window well cover
              selection for KC
              hail and debris load —
              three things that
              determine whether
              a homeowner understands
              why a window well
              that drains correctly
              and seals to the
              foundation wall does
              not flood. KC frost
              heave at the flange:
              KC has a thirty-inch
              frost line depth —
              soil freezes to that
              depth in a hard KC
              winter; a window
              well is a semicircular
              steel or plastic
              retaining structure
              fastened to the foundation
              wall; the well sits
              in disturbed backfill
              soil at the perimeter
              of the foundation —
              disturbed soil has
              less structural support
              than undisturbed soil
              and is more subject
              to frost heave movement;
              KC freeze-thaw cycles
              fifty to fifty-five
              times per winter —
              each cycle expands
              and contracts the
              soil at the well
              base; over three
              to five years, the
              well moves vertically
              relative to the foundation
              wall and the flange
              seal cracks or separates;
              the gap between the
              well flange and the
              wall is the primary
              water entry point —
              water runs down the
              foundation wall behind
              the well and accumulates
              at the window frame.
              Drainage design: a
              properly installed
              window well has a
              minimum twelve inches
              of washed gravel
              or crushed stone
              at the bottom of
              the well — the gravel
              bed creates a reservoir
              that holds precipitation
              from a typical KC
              rain event and allows
              it to percolate into
              the surrounding soil
              rather than rising
              to the window sill;
              the gravel bed connects
              to the foundation
              drainage tile at
              the footing in a
              properly waterproofed
              installation — the
              window well acts
              as an extension of
              the drainage system
              rather than a collection
              point; KC clay soil
              percolation is slow —
              a two-inch-per-hour
              KC rain event fills
              the gravel reservoir
              faster than clay
              allows drainage; a
              well cover is required
              to keep precipitation
              out of the well in
              high-intensity KC
              storms and prevent
              the gravel reservoir
              from overflowing.
              Well cover selection:
              KC experiences hail
              events up to golf-ball
              size annually — polycarbonate
              dome covers rated
              for hail impact are
              the correct selection
              for KC; flat galvanized
              covers sit lower
              and are more resistant
              to high-wind events
              but allow rain pooling
              on the cover surface;
              the cover must allow
              egress from inside
              without tools or
              keys per the IRC
              egress requirement —
              dome covers with
              a hinge and release
              latch are the most
              common KC residential
              installation. A window
              well installation
              website that explains
              KC frost heave at
              the flange seal,
              the gravel drainage
              reservoir and its
              connection to foundation
              drainage, and KC
              hail-rated cover
              selection earns the
              homeowner whose well
              floods during every
              major spring storm.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before window well installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Frost heave at flange — KC 30-inch frost line, disturbed backfill movement, flange-to-wall seal separation over 3-5 years",
                  "Drainage design — 12-inch gravel reservoir, percolation into drainage tile, why KC clay soil requires well cover in heavy storms",
                  "IRC egress requirements — 20-inch width, 24-inch height, 5.7 sq ft net opening, 44-inch max sill for bedroom egress",
                  "Well cover — KC hail size, polycarbonate dome vs. galvanized flat, egress release latch requirement",
                  "Water entry path — gap behind well flange channels water to window frame, hydrostatic pressure on failed window seal",
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
                What your window well installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Frost heave section — KC frost line depth, disturbed backfill movement, flange seal failure timeline",
                  "Drainage section — gravel reservoir depth, drainage tile connection, clay soil percolation rate and cover requirement",
                  "Egress section — IRC net opening dimensions, sill height limit, bedroom egress requirement trigger",
                  "Cover section — KC hail rating, dome vs. flat, egress release requirement, wind attachment",
                  "Flange seal section — butyl seal at foundation contact, weep hole at well base, reseal vs. full replacement",
                  "Quote form with well flooding frequency, storm size, basement bedroom, current cover, well material and age",
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
                &ldquo;The frost heave section
                explained the problem
                customers had been
                told was a waterproofing
                issue. KC homeowners
                who had paid a waterproofing
                company to seal the
                interior of the basement
                were still getting
                water at the window
                — because the well
                flange had moved
                away from the foundation
                wall and water was
                entering behind the
                well, not through
                the wall. After the
                section went up explaining
                that KC freeze-thaw
                cycles move the well
                relative to the foundation
                and the flange seal
                cracks at the gap,
                customers called
                for the well replacement
                and resealing before
                investing in more
                interior waterproofing.
                The drainage section
                also helped with
                the cover upgrade
                sell — once customers
                understood that
                the gravel reservoir
                can overflow in KC
                two-inch storms,
                they approved the
                polycarbonate dome
                without price pushback.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Parrish, window well installation and basement waterproofing, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window well site with frost heave section, drainage design guide,
                and quote form starts at $200. A full site with egress code
                requirements, KC hail cover selection, and flange seal failure
                content is $425–$750. One window well installation covers the cost.
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
