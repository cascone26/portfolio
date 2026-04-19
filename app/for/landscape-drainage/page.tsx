import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Landscape Drainage Companies in Kansas City",
  description:
    "Custom websites for landscape drainage, yard grading, French drain installation, and swale construction companies in the Kansas City area. Show your KC clay soil grading approach, French drain sizing, and outlet placement to win landscape drainage contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/landscape-drainage",
  },
};

export default function LandscapeDrainagePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Landscape Drainage Companies in Kansas City",
    description: "Custom websites for landscape drainage installation and yard grading companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Landscape Drainage Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their yard needs regrading or a French drain, how deep a drain needs to go in KC clay soil, and where the water can actually go when it leaves the yard. A website that explains the drainage options earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Landscape Drainage in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Landscape Drainage</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Landscape drainage
              customers are KC homeowners
              with standing water
              in the backyard
              after every rain,
              homeowners watching
              water pool against
              the foundation,
              or homeowners with
              a low spot in the
              yard that never
              fully dries out.
              KC&apos;s clay-dominant
              soil does not absorb
              water quickly —
              rainfall that would
              percolate in sandy
              soil sits on the
              surface or flows
              slowly across the
              yard until it finds
              somewhere to go.
              The central education
              is diagnosing the
              drainage problem
              correctly — surface
              grading, subsurface
              French drain, swale
              construction, or
              catch basin — before
              recommending a
              solution. Surface
              grading: the first
              check is whether
              the yard slope
              directs water toward
              or away from the
              house — the IRC
              requires a minimum
              6-inch drop in
              the first 10 feet
              from the foundation
              for proper drainage;
              many KC yards have
              settled soil against
              the foundation
              that has reversed
              this slope; regrading
              with topsoil fill
              to restore the
              positive slope
              away from the foundation
              is the simplest
              fix for foundation-adjacent
              pooling; regraded
              areas need turf
              or groundcover
              established within
              one growing season
              to prevent erosion.
              French drain sizing:
              a French drain
              carries subsurface
              water laterally
              to an outlet —
              a 4-inch perforated
              pipe in a gravel
              trench is standard
              for residential
              yard drainage; the
              trench must be
              deep enough that
              the pipe sits below
              the problem area
              (typically 18–24
              inches for a yard
              that pools at the
              surface); filter
              fabric (nonwoven
              geotextile) wraps
              the gravel to prevent
              KC clay from migrating
              into the gravel
              voids over time;
              pipe must slope
              toward the outlet
              at 1/8 inch per
              foot minimum —
              a 50-foot run needs
              6 inches of total
              fall; outlets:
              daylight to a slope,
              a pop-up emitter
              at grade, or connection
              to a storm drain
              (requires municipal
              approval in most
              KC suburbs). Swale
              construction: a
              swale is a shallow
              channel graded
              to direct surface
              water across the
              yard to an outlet —
              the bottom width
              should be at least
              2 feet; side slopes
              no steeper than
              3:1 (3 feet horizontal
              for every 1 foot
              of depth) for mowing
              access; swale depth
              is typically 6–12
              inches; KC clay
              swales erode without
              turf or rock armoring —
              seeding or sodding
              the swale base
              is essential before
              the first heavy
              rain. Catch basins:
              a catch basin (NDS,
              Nyloplast) is a
              box drain installed
              at a low spot that
              collects surface
              water and routes
              it through buried
              pipe to an outlet —
              the grate must
              be at grade or
              slightly below
              to collect sheet
              flow; basin size
              must match the
              drainage area (a
              9x9 basin handles
              approximately 1,500
              square feet of
              contributing area
              in a 2-inch/hour
              rainfall event).
              A landscape drainage
              website that explains
              when regrading
              is sufficient, what
              French drain depth
              KC clay requires,
              and where the outlet
              can go earns the
              homeowner who has
              been watching water
              pool in the same
              corner for four
              years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before landscape drainage installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Surface grading — IRC slope requirement from foundation, topsoil fill to restore positive slope, turf establishment",
                  "French drain sizing — 4-inch perforated pipe, trench depth in KC clay, filter fabric, slope and outlet types",
                  "Swale construction — bottom width, side slope for mowing, KC clay erosion protection, seeding or sod",
                  "Catch basins — low spot collection, grate at grade, basin size relative to drainage area",
                  "Outlet options — daylight to slope, pop-up emitter, storm drain connection and municipal approval",
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
                What your landscape drainage website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Grading section — IRC slope requirement, how to identify reversed slope, topsoil fill and turf establishment",
                  "French drain guide — pipe sizing, trench depth for KC clay, filter fabric, minimum slope, outlet options",
                  "Swale section — grading dimensions, side slope, armoring options for clay soil, seeding timeline",
                  "Catch basin section — when to use vs. French drain, grate placement, sizing by drainage area",
                  "Diagnosis section — how to identify the cause (surface vs. subsurface), simple slope test, when to call",
                  "Quote form with yard dimensions, problem area description, photos, existing outlet if any",
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
                &ldquo;The diagnosis section was
                the most important thing I
                added. Before, every customer
                called asking for a French
                drain because they&apos;d seen
                them on YouTube. Half of them
                actually needed regrading —
                the water was pooling at
                the foundation because the
                soil had settled, not because
                they needed a pipe. The section
                that explained how to do
                the slope test with a level
                and a 10-foot board saved
                multiple customers from a
                $2,000 French drain they
                didn&apos;t need. The ones who
                did need a drain already
                understood filter fabric
                and outlet options before
                I arrived, which meant no
                time explaining from scratch
                at the estimate.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Czarnecki, landscape drainage and grading, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A landscape drainage site with grading section, French
                drain guide, and quote form starts at $200. A full
                site with swale construction, catch basin, and outlet
                content is $425–$750. One drainage installation covers
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
