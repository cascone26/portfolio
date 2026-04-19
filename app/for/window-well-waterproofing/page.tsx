import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Well Waterproofing Companies in Kansas City",
  description:
    "Custom websites for window well waterproofing, window well flooding, and egress window well drainage companies in the Kansas City area. Show your KC clay soil drainage failure, window well drain pipe clogging, and wall seal vs. drainage correction to win window well waterproofing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-well-waterproofing",
  },
};

export default function WindowWellWaterproofingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Well Waterproofing Companies in Kansas City",
    description: "Custom websites for window well waterproofing and egress window well drainage companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Well Waterproofing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why water collects in their window well after every rain, whether the water is coming through the window itself or through the foundation wall, and whether they need a drain or a cover or both. A website that explains window well waterproofing earns the drainage correction call before the next heavy KC rain fills the well again. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Well Waterproofing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Well Waterproofing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window well waterproofing
              customers are KC homeowners
              who find standing water
              in their basement window
              wells after moderate
              to heavy rain events —
              water that either holds
              in the well for hours
              or days without draining
              or that overtops the
              well flange and enters
              the basement through
              the window frame or
              frame-to-foundation
              gap; homeowners who
              installed a window well
              cover and still find
              water collecting because
              the cover slows but
              does not eliminate
              water entry from soil
              saturation or blocked
              drain; or homeowners
              in KC homes built before
              1990 whose window wells
              have no gravel layer
              and no drain pipe —
              original installation
              that sat against the
              foundation wall with
              only the native clay
              soil below, which holds
              water rather than draining
              it. The central education
              is KC clay soil drainage
              failure in window well
              installations, the
              window well drain pipe
              and its failure modes,
              and the distinction
              between a wall sealing
              approach and a drainage
              correction approach —
              three things that determine
              whether a window well
              waterproofing job addresses
              the actual water source
              or just delays the
              next wet basement event.
              KC clay soil drainage
              failure: most KC residential
              lots have clay or heavy-clay
              loam soil in the top
              four to six feet of
              the excavation backfill
              around the foundation;
              clay soil has extremely
              low hydraulic conductivity —
              water moves through
              it very slowly; a window
              well excavation that
              was backfilled with
              native clay has no
              drainage capacity —
              rainwater that enters
              the well collects on
              top of the clay and
              has nowhere to go except
              to evaporate or to
              sit against the foundation
              wall; the correct drainage
              material in a window
              well is clean washed
              gravel — at minimum
              six to eight inches
              deep below the window
              well bottom — which
              allows water to move
              through and either
              disperse into surrounding
              soil or reach a drain
              pipe; in many KC homes,
              the gravel layer that
              was present at original
              installation has been
              infiltrated by fine
              soil particles over
              years of water movement
              and no longer drains
              effectively. Window
              well drain pipe: some
              KC window wells have
              a perforated drain
              pipe at the bottom
              that connects to the
              foundation drain system
              or daylight at grade;
              these pipes fail when
              they become clogged
              with fine soil particles,
              root infiltration from
              nearby plantings, or
              sediment accumulation;
              a window well drain
              that worked for ten
              years may have lost
              function without any
              visible change — the
              pipe is full of sediment
              and water now sits
              in the well until it
              overflows; testing a
              window well drain requires
              running water into
              the well and observing
              whether the level drops
              within a few minutes —
              a functioning drain
              clears quickly, a clogged
              drain shows no movement.
              Wall sealing vs. drainage
              correction: applying
              hydraulic cement or
              elastomeric coating
              to the interior foundation
              wall visible inside
              the window well addresses
              the wall surface but
              not the water source —
              hydrostatic pressure
              from saturated soil
              outside the wall will
              find another path or
              push through the coating
              over time; drainage
              correction — replacing
              the well fill material
              with clean gravel, clearing
              or replacing the drain
              pipe, and addressing
              grade slope toward
              the foundation — eliminates
              the standing water
              condition rather than
              creating a barrier
              against it; for window
              wells that repeatedly
              fill despite covers
              and coatings, drainage
              correction is the
              only durable solution.
              A window well waterproofing
              website that explains
              KC clay soil drainage
              failure, the drain
              pipe clogging failure
              mode, and the drainage
              correction approach
              earns the homeowner
              who is tired of pumping
              out their window well
              after every KC storm.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before window well waterproofing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay drainage — low hydraulic conductivity, native clay backfill, why gravel layer is required",
                  "Drain pipe failure — sediment clogging, root infiltration, drain test method (fill and time)",
                  "Gravel replacement — clean washed gravel specification, depth requirement, soil infiltration over time",
                  "Cover limits — cover slows but doesn't stop soil saturation drainage into well",
                  "Wall sealing vs. drainage correction — hydraulic cement failure under hydrostatic pressure, permanent fix requires drainage",
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
                What your window well waterproofing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Clay soil section — KC backfill drainage failure, hydraulic conductivity, why the original installation causes problems",
                  "Drain pipe section — clogging causes, test method, replacement vs. cleaning decision",
                  "Gravel section — clean gravel spec, depth, how fine soil infiltrates and clogs gravel over time",
                  "Drainage correction section — full process: remove fill, inspect drain, install gravel, address grade slope",
                  "Wall sealing limits — when hydraulic cement is appropriate vs. when it delays the real fix",
                  "Quote form with well age, water depth after rain, drain pipe presence, cover installed, window type, timeline",
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
                &ldquo;The clay soil section
                stopped the cover sales
                calls that were going
                nowhere. KC homeowners
                would call after buying
                a bubble cover and
                still finding a foot
                of water in the well
                after a heavy rain.
                After the section went
                up explaining that
                a cover reduces splash-in
                but the water in KC
                clay soil drains straight
                into the well from
                below the cover, customers
                understood why the
                cover didn&apos;t fix it.
                The drain test section
                also helped — homeowners
                started calling with
                useful information.
                They&apos;d already poured
                a bucket of water into
                the well and timed
                it. If it didn&apos;t drop
                in five minutes, they
                knew the drain was
                clogged before I even
                got there. That made
                the diagnosis call
                faster and the gravel
                replacement conversation
                easy.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Thornton, basement waterproofing and window well service, Raytown, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window well waterproofing site with clay soil drainage section,
                drain test guide, and quote form starts at $200. A full site with
                gravel replacement content, drain pipe repair guide, and wall sealing
                limits is $425–$750. One drainage correction job covers the cost.
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
