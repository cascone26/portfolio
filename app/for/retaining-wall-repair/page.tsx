import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Retaining Wall Repair Companies in Kansas City",
  description:
    "Custom websites for retaining wall repair, retaining wall replacement, and segmental block retaining wall companies in the Kansas City area. Show your drainage requirements, batter calculation, and block vs. timber options to win retaining wall contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/retaining-wall-repair",
  },
};

export default function RetainingWallRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Retaining Wall Repair Companies in Kansas City",
    description: "Custom websites for retaining wall repair and replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Retaining Wall Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their retaining wall is leaning forward, whether it can be rebuilt in place or needs full teardown, and what drainage behind the wall would have prevented it. A website that explains hydrostatic pressure earns the assessment call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Retaining Walls in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Retaining Wall Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Retaining wall customers
              are homeowners with
              a leaning or bulging
              timber or block
              wall, a wall that
              has cracked and
              separated at multiple
              courses, or a slope
              that has shifted
              enough that the
              original wall no
              longer contains
              it. The central
              education is why
              retaining walls
              fail: the primary
              cause is hydrostatic
              pressure — water
              saturating the
              soil behind the
              wall creates lateral
              pressure that
              the wall was not
              designed to resist
              without drainage.
              A properly built
              retaining wall
              has a gravel backfill
              zone (minimum 12"
              of 3/4" clean crushed
              stone) directly
              behind the blocks
              or timbers, drainage
              pipe at the base
              (4" perforated
              pipe in the gravel
              zone sloping to
              daylight or a
              collection point),
              and weep holes
              every 6–8 ft on
              walls over 24"
              high. KC clay
              soil holds water
              exceptionally well —
              walls built directly
              against clay backfill
              without a drainage
              layer typically
              fail within 5–10
              years. Segmental
              retaining wall
              blocks (Allan Block,
              Versa-Lok, Anchor
              Diamond): interlocking
              blocks with a
              built-in batter
              (backward lean
              of approximately
              6° per foot of
              height) resist
              soil pressure through
              gravity and setback —
              walls over 4 ft
              require geogrid
              reinforcement layers
              extending 6 ft
              into the hillside.
              Timber walls: pressure-treated
              6x6 or 8x8 timbers
              have a typical
              lifespan of 15–20
              years before the
              wood deteriorates
              at the soil line —
              repair is usually
              not economical
              at this stage.
              Deadman anchors
              (timber walls)
              and geogrid (block
              walls) are the
              structural elements
              homeowners most
              often omit on
              DIY installs —
              their absence
              is the most common
              reason walls fail
              within 5 years
              of construction.
              A retaining wall
              website that explains
              hydrostatic pressure,
              drainage requirements,
              and when timber
              should simply be
              replaced with block
              earns the homeowner
              standing in front
              of a 20-year-old
              leaning timber
              wall.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before repairing a retaining wall
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why walls lean — hydrostatic pressure explanation, drainage layer requirement, KC clay soil behavior",
                  "Repair vs. rebuild — when straightening is possible vs. when the wall needs full teardown",
                  "Block vs. timber — lifespan comparison, why old timber walls are typically replaced rather than repaired",
                  "Drainage requirements — gravel backfill zone, drainage pipe at the base, weep holes",
                  "Geogrid reinforcement — what it is, when it is required, why walls without it fail over 4 ft",
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
                What your retaining wall website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why walls fail section — hydrostatic pressure, drainage layer omission, KC clay amplifier",
                  "Drainage system guide — gravel backfill zone, perforated pipe at the base, weep hole spacing",
                  "Block vs. timber comparison — batter and geogrid for block, lifespan and repair economics for timber",
                  "Repair vs. rebuild assessment — what indicators require teardown vs. what can be stabilized",
                  "Geogrid section — what it does, when height triggers requirement, how it extends into the hillside",
                  "Assessment form with wall type, height, lean measurement, drainage problems observed",
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
                &ldquo;Homeowners always wanted
                to repair instead of replace —
                push the timber back upright,
                fill the gaps, call it done.
                The website explaining that
                a leaning wall means the
                drainage failed and the
                soil pressure won changed
                that conversation before
                I got to the job. Customers
                called already knowing the
                wall probably needed to
                come down and be rebuilt
                with drainage. I stopped
                losing jobs to the handyman
                who would push it back
                for $300 and let it lean
                again in two years — the
                customers who read the site
                already knew why that would
                happen.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Buckner, hardscape contractor, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A retaining wall site with failure
                explanation, drainage guide, and assessment
                form starts at $200. A full site with
                block vs. timber comparison, geogrid
                section, and repair vs. rebuild guide
                is $425–$750. One wall replacement
                covers the cost. No contracts,
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
