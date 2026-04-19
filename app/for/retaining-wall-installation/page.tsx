import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Retaining Wall Installation Companies in Kansas City",
  description:
    "Custom websites for retaining wall installation, boulder wall, and segmental block wall companies in the Kansas City area. Show your KC clay hydrostatic pressure as the primary retaining wall failure driver, batter and drainage backer requirements for KC conditions, and block vs. boulder vs. timber wall selection to win retaining wall installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/retaining-wall-installation",
  },
};

export default function RetainingWallInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Retaining Wall Installation Companies in Kansas City",
    description: "Custom websites for retaining wall installation and segmental block wall companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Retaining Wall Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their retaining wall is leaning, whether a timber wall can be repaired or needs full replacement, and whether segmental block or poured concrete is more appropriate for a Kansas City slope. A website that explains retaining wall installation earns the call from the homeowner whose wall is bowing outward after a wet spring. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Retaining Wall Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Retaining Wall Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Retaining wall
              installation customers
              are KC homeowners
              whose existing
              timber, block,
              or boulder wall
              is leaning, bowing,
              or showing sections
              that have separated —
              failure patterns
              that indicate
              hydrostatic pressure
              from saturated
              KC clay behind
              the wall is
              exceeding the
              wall's design
              capacity, typically
              because drainage
              gravel and weep
              holes were absent
              from the original
              installation;
              homeowners who
              are building
              a new terrace
              or level yard
              area on a
              sloped KC property
              and need to
              understand the
              height and material
              options appropriate
              for the retained
              soil depth;
              or homeowners
              whose timber
              retaining wall
              is rotting at
              the soil line
              after ten to
              fifteen years —
              the expected
              service life
              of pressure-treated
              timber in
              KC conditions —
              and are evaluating
              whether timber
              replacement
              or upgrade to
              segmental block
              is the better
              long-term choice.
              The central
              education is
              KC clay hydrostatic
              pressure as
              the primary
              retaining wall
              failure driver,
              drainage aggregate
              backer and weep
              holes as the
              installation
              requirement
              that prevents
              hydrostatic
              failure, and
              wall batter —
              the rearward
              lean built
              into segmental
              block walls —
              as the structural
              design element
              that resists
              overturning —
              three things
              that determine
              whether a homeowner
              understands
              why a correctly
              designed KC
              retaining wall
              does not lean
              after the first
              wet spring.
              KC clay hydrostatic
              pressure: Kansas
              City clay soils
              have very low
              permeability —
              less than one
              inch per hour —
              which means
              water from
              KC spring rainfall
              does not drain
              downward quickly;
              rainwater that
              falls on the
              slope behind
              a retaining
              wall saturates
              the clay and
              creates hydrostatic
              pressure against
              the back of
              the wall — a
              pressure that
              increases with
              retained height;
              a three-foot
              wall retaining
              saturated clay
              without drainage
              has significantly
              more lateral
              force against
              it than the
              same wall against
              dry clay — the
              difference explains
              why KC retaining
              walls that
              stood for years
              begin to lean
              in a wet spring
              after a drought
              year that dried
              and cracked
              the clay, then
              allowed rapid
              moisture penetration;
              the correct
              installation
              places a minimum
              twelve-inch
              layer of drainage
              aggregate —
              typically clean
              crushed stone —
              between the
              wall and the
              native clay,
              and includes
              weep holes
              at the base
              course to allow
              water to exit
              the drainage
              layer rather
              than accumulate
              behind the wall.
              Batter requirement:
              segmental retaining
              wall block systems
              are designed
              to be installed
              with a rearward
              batter of approximately
              one inch per
              foot of wall
              height — a
              ten-degree
              backward lean
              that uses the
              wall's own
              weight and the
              captured soil
              above each
              batter course
              as a counterweight
              to the hydrostatic
              and soil pressure;
              a wall installed
              plumb or with
              forward lean
              has no counterweight
              and depends
              entirely on
              its base footing
              for stability;
              for walls over
              four feet in
              height, most
              segmental block
              manufacturers
              require geogrid
              reinforcement —
              a polymer mesh
              embedded in
              the soil behind
              the wall at
              intervals of
              every third
              or fourth course
              that ties the
              wall face to
              the retained
              soil mass.
              Wall material
              selection: timber
              retaining walls
              in KC have
              a service life
              of twelve to
              fifteen years
              before the
              wood at the
              soil line begins
              to rot; segmental
              concrete block —
              Allan Block, Versa-Lok,
              or equivalent —
              has an indefinite
              service life
              if installed
              with correct
              drainage and
              batter; natural
              boulder walls
              are appropriate
              for naturalized
              slopes and
              can exceed
              thirty years
              without maintenance;
              poured concrete
              walls require
              engineering
              for walls over
              four feet and
              are typically
              specified for
              walls adjacent
              to structures
              or where precise
              setback is
              required. A
              retaining wall
              installation
              website that
              explains KC
              clay hydrostatic
              pressure as
              the failure
              driver, drainage
              aggregate and
              weep holes
              as the prevention,
              and batter
              plus geogrid
              as the structural
              design elements
              earns the homeowner
              whose leaning
              wall needs
              replacement
              and who wants
              to understand
              what the rebuild
              specification
              needs to include.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before retaining wall installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay hydrostatic pressure — <1 in/hr permeability, saturated clay pressure vs. dry clay, wet spring failure mechanism",
                  "Drainage backer requirement — 12-inch clean crushed stone, weep holes at base course, drainage without aggregate vs. with",
                  "Wall batter — 1 inch per foot rearward lean, counterweight mechanism, plumb wall failure risk",
                  "Geogrid reinforcement — walls over 4 feet, polymer mesh intervals, soil mass tie-back vs. wall face only",
                  "Material comparison — timber 12-15 year service, segmental block indefinite, boulder naturalized slope, poured concrete for structures",
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
                What your retaining wall installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Hydrostatic pressure section — KC clay permeability, saturation pressure calculation, drought-then-wet-spring failure cycle",
                  "Drainage section — 12-inch aggregate backer, weep hole spacing, filter fabric separation from native clay",
                  "Batter section — 1-inch per foot standard, rearward lean counterweight, block manufacturer spec for each system",
                  "Geogrid section — 4-foot height trigger, grid spacing by retained height, soil mass calculation vs. wall face stability",
                  "Material section — timber service life in KC, segmental block indefinite life, boulder naturalistic option, permit thresholds",
                  "Quote form with wall height, retained soil depth, existing wall material, wet spring movement observed, slope above wall",
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
                &ldquo;The drainage section
                is what separates
                a bid that will
                last from one
                that won&apos;t. KC
                homeowners who
                get three retaining
                wall bids don&apos;t
                know that one
                bid includes
                twelve inches
                of drainage
                stone with weep
                holes and two
                don&apos;t — they
                just see the
                price difference.
                After the section
                went up explaining
                that hydrostatic
                pressure from
                saturated KC
                clay is what
                pushes walls
                over, and that
                drainage aggregate
                is what dissipates
                that pressure
                before it builds,
                customers started
                asking every
                bidder what
                was going behind
                the wall. The
                geogrid section
                also wins the
                tall wall jobs —
                KC homeowners
                replacing a
                failed six-foot
                timber wall
                understand after
                reading the
                page that the
                rebuild needs
                geogrid at multiple
                courses, and
                they stop accepting
                bids that don&apos;t
                mention it.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Stokes, retaining wall installation and landscape grading, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A retaining wall installation site with KC clay hydrostatic section,
                drainage backer guide, and quote form starts at $200. A full site with
                batter requirement, geogrid specification, and material comparison
                content is $425–$750. One wall installation job covers the cost.
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
