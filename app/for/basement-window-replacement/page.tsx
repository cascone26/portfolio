import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Basement Window Replacement Companies in Kansas City",
  description:
    "Custom websites for basement window replacement, egress window installation, and basement window waterproofing companies in the Kansas City area. Show your KC frost heave window damage, egress code requirement, and glass block vs. single-hung replacement to win basement window replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/basement-window-replacement",
  },
};

export default function BasementWindowReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Basement Window Replacement Companies in Kansas City",
    description: "Custom websites for basement window replacement and egress window installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Basement Window Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their leaking basement window is a waterproofing problem or a window problem, whether a basement bedroom window has to meet egress size requirements, and whether glass block is better than a standard window for a basement that has had water issues. A website that explains basement window replacement earns the call before water gets in again. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Basement Window Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Basement Window Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Basement window replacement
              customers are KC homeowners
              who see water on the
              basement floor below
              a window after rain
              events — water that
              enters through a failed
              window frame seal,
              a cracked glass pane,
              or through the gap
              between the window
              frame and the foundation
              rough opening where
              the original caulk
              has failed; homeowners
              who notice that a
              basement window no
              longer opens, closes,
              or latches — a common
              failure in older steel
              casement basement
              windows that have
              rusted at the hinge
              and frame; or homeowners
              who have converted
              or want to convert
              a basement room to
              a legal bedroom and
              need to know whether
              the existing window
              meets the IRC egress
              requirement for emergency
              exit. The central
              education is KC frost
              heave and window frame
              movement in below-grade
              openings, the egress
              code requirement for
              basement sleeping
              rooms, and the glass
              block versus single-hung
              replacement decision —
              three things that determine
              whether a basement
              window replacement
              solves the water problem
              or just replaces one
              inadequate window
              with another. KC frost
              heave and frame movement:
              KC frost line depth
              is approximately thirty
              inches — the zone
              of soil that cycles
              between frozen and
              thawed each winter;
              basement window openings
              cut through the foundation
              wall sit at or near
              grade level — the
              soil immediately outside
              the foundation around
              the window frame is
              in the frost zone;
              during freeze events,
              the soil expands upward
              and laterally, applying
              pressure to the window
              buck and frame; over
              multiple KC winters,
              this heave movement
              shifts the window
              frame out of square
              and breaks the seal
              between the window
              frame and the masonry
              opening — this is
              the primary mechanism
              for the gap at the
              window frame perimeter
              that allows water
              entry separate from
              any failure of the
              window unit itself;
              a window replacement
              that installs the
              new unit and reseals
              the frame-to-masonry
              joint with hydraulic
              cement and flexible
              sealant addresses
              this water entry path
              directly. Egress code
              requirement: the IRC
              requires basement
              sleeping rooms to
              have at least one
              window that meets
              all four of these
              minimums — minimum
              opening width of twenty
              inches, minimum opening
              height of twenty-four
              inches, minimum net
              clear opening area
              of 5.7 square feet,
              and maximum sill height
              of forty-four inches
              above the finished
              floor; a standard
              builder basement window
              — typically sixteen
              by twenty-four inches
              rough opening — does
              not meet the egress
              width or area requirement;
              converting a basement
              room to a legal bedroom
              requires expanding
              the rough opening
              to accommodate a compliant
              egress window — which
              means cutting foundation
              wall, installing a
              lintel if required,
              and building a window
              well if the expanded
              window opening would
              be below grade. Glass
              block versus single-hung:
              glass block mortar-set
              basement windows are
              waterproof at the
              block-to-mortar joint
              and provide no entry
              point for water; they
              are the correct choice
              for a basement window
              that has a history
              of water entry and
              that does not need
              to open for egress
              or ventilation; a
              single-hung or casement
              vinyl replacement
              window installed in
              the same rough opening
              provides ventilation
              and light but requires
              continuous caulk maintenance
              at the frame-to-masonry
              joint — in a below-grade
              application, this
              joint is under hydrostatic
              pressure during rain
              events and fails faster
              than above-grade window
              perimeter joints.
              A basement window
              replacement website
              that explains KC frost
              heave frame movement
              and water entry, the
              IRC egress code requirement
              for basement bedrooms,
              and the glass block
              versus vinyl single-hung
              decision earns the
              homeowner who has
              water on their basement
              floor after every
              KC rain.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before basement window replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Frost heave frame movement — 30-inch KC frost line, frame-to-masonry gap from soil pressure, primary water entry path",
                  "Egress code — IRC 20-inch width, 24-inch height, 5.7 sq ft net opening, 44-inch max sill height for legal bedroom",
                  "Glass block vs. vinyl — waterproof mortar joint vs. maintenance caulk under hydrostatic pressure, ventilation trade-off",
                  "Rusted steel casement failure — hinge and frame corrosion, window no longer operable, full frame replacement",
                  "Window well requirement — when egress window expansion means the opening goes below grade, well sizing",
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
                What your basement window replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Frost heave section — KC frost line depth, frame movement over multiple winters, frame-to-masonry seal failure",
                  "Egress section — IRC four minimums for bedroom compliance, standard builder window shortfall, rough opening expansion required",
                  "Glass block section — mortar joint waterproofing, no maintenance, correct choice for water-entry windows without ventilation need",
                  "Vinyl replacement section — single-hung/casement options, ventilation and light, caulk maintenance expectation at below-grade joint",
                  "Window well section — when egress expansion requires well, drainage requirement, well sizing and cover options",
                  "Quote form with window location, water entry history, bedroom use, current window type, egress need, timeline",
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
                &ldquo;The glass block section
                converted the jobs
                with water history.
                Before, KC homeowners
                who had water coming
                in around a basement
                window would push
                back on glass block
                because they wanted
                something that opened.
                After the section
                went up explaining
                that a below-grade
                vinyl window joint
                is under hydrostatic
                pressure during every
                KC rain event and
                that the caulk will
                fail again, customers
                with wet basements
                stopped asking for
                the operable window.
                The egress section
                also opened up a
                whole category of
                jobs I wasn&apos;t getting
                before — homeowners
                finishing basements
                in Olathe and Lenexa
                found the page looking
                for egress window
                requirements and called
                for the rough opening
                expansion. Those jobs
                pay significantly
                more than a straight
                window swap.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Vanlith, basement window and egress installation, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A basement window replacement site with frost heave section,
                glass block vs. vinyl guide, and quote form starts at $200. A
                full site with egress code requirements, window well content, and
                rough opening expansion scope is $425–$750. One egress window job
                covers the cost. No contracts, no monthly fees.
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
