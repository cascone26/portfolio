import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Ice Dam Removal Companies in Kansas City",
  description:
    "Custom websites for ice dam removal, ice dam prevention, and roof ice dam service companies in the Kansas City area. Show your KC freeze-thaw ice dam formation cycle, interior heat loss as root cause, and steaming vs. chipping ice dam removal to win ice dam removal contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/ice-dam-removal",
  },
};

export default function IceDamRemovalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Ice Dam Removal Companies in Kansas City",
    description: "Custom websites for ice dam removal and roof ice dam prevention companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Ice Dam Removal Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the icicles hanging from their gutters mean they have an ice dam, whether chipping the ice off will damage their shingles, and whether heat cables actually prevent the problem or just move it. A website that explains ice dam removal earns the call when water is already coming through the ceiling. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Ice Dam Removal in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Ice Dam Removal</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Ice dam removal customers
              are KC homeowners who
              see a thick ridge of
              ice at the eave edge
              of the roof during
              or after a KC winter
              storm — ice that has
              accumulated at the
              gutter line while
              snow melts higher
              on the roof and refreezes
              at the cold eave;
              homeowners who see
              water staining on
              the ceiling at the
              exterior wall line,
              water dripping from
              light fixtures or
              around window frames
              on the top floor,
              or water pooling
              in the attic — signs
              that water backed
              up behind the ice
              dam has penetrated
              under the shingles
              and through the
              roof deck; or homeowners
              who want to prevent
              recurrence after
              experiencing an
              ice dam water intrusion
              event and want to
              understand whether
              heat cables, additional
              insulation, or improved
              attic ventilation
              is the correct fix.
              The central education
              is KC freeze-thaw
              ice dam formation
              conditions, interior
              heat loss as the
              root cause, and
              steaming versus
              chipping as removal
              methods — three
              things that determine
              whether a homeowner
              understands that
              ice dam removal
              is emergency remediation
              and not a permanent
              solution without
              addressing the heat
              loss that created
              the dam. KC ice
              dam formation: KC
              experiences periodic
              significant snowfall
              events — eight to
              twelve inches or
              more — followed
              by daytime temperatures
              that rise above
              freezing; when a
              house has inadequate
              attic insulation
              or air sealing,
              heat escapes through
              the attic floor
              and warms the underside
              of the roof deck —
              the roof surface
              temperature above
              the living space
              rises above 32°F
              even when the outdoor
              temperature is below
              freezing; snow on
              this warmed section
              of the roof melts
              and runs down the
              slope to the eave;
              the eave overhangs
              beyond the exterior
              wall and has no
              heat source below
              it — the eave surface
              stays at or below
              freezing; the meltwater
              refreezes at the
              eave, forming an
              ice ridge; subsequent
              meltwater pools
              behind this ridge
              and backs up under
              the shingles — shingles
              lap over each other
              and shed water flowing
              down the slope,
              but water pooled
              behind an ice dam
              flows uphill under
              the shingle laps
              and through the
              nail holes into
              the roof deck. Interior
              heat loss as root
              cause: the ice dam
              forms because heat
              from the conditioned
              living space is
              escaping into the
              attic — not because
              of the weather;
              two houses in the
              same KC neighborhood
              under the same storm
              conditions will
              have different ice
              dam behavior based
              entirely on attic
              insulation and air
              sealing; homes built
              before 1980 typically
              have R-11 to R-19
              attic insulation
              where Energy Star
              recommends R-49
              to R-60 for KC&apos;s
              Climate Zone 4A;
              the attic bypasses —
              open top plates,
              can light penetrations,
              attic hatch gaps —
              allow warm air to
              rise into the attic
              space and heat the
              roof deck directly;
              removing the ice
              dam without addressing
              the heat loss produces
              the same ice dam
              in the next storm.
              Steaming versus
              chipping: steaming
              uses low-pressure
              hot water steam
              to melt a channel
              through the ice
              dam and allow the
              backed-up water
              to drain — it does
              not damage the shingles;
              chipping with a
              hammer or ice pick
              is the method that
              damages shingles,
              breaks granules
              loose, and cracks
              or shatters brittle
              winter shingles —
              which voids most
              shingle warranties;
              calcium chloride
              ice melt placed
              in pantyhose or
              fabric tubes across
              the ice dam creates
              a drainage channel
              without removing
              the ice mass —
              it is the DIY method
              that reduces immediate
              water entry risk
              until professional
              removal can be scheduled.
              An ice dam removal
              website that explains
              KC freeze-thaw ice
              dam formation from
              interior heat loss,
              steaming as the
              non-destructive
              removal method,
              and the insulation
              and air sealing
              fix that prevents
              recurrence earns
              the homeowner watching
              water come through
              their ceiling during
              a KC polar vortex
              event.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before ice dam removal
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Ice dam formation — warmed roof deck from heat loss, eave stays cold, meltwater refreezes, water backs under shingles",
                  "Interior heat loss cause — attic insulation (R-11 to R-19 actual vs. R-49-60 recommended), attic bypass penetrations",
                  "Steaming vs. chipping — steam melts channel without shingle damage, chipping breaks granules and voids warranty",
                  "Calcium chloride DIY — fabric tube drainage channel method, reduces immediate water entry until professional removal",
                  "Prevention vs. removal — insulation upgrade and air sealing as permanent fix, heat cables as managed workaround",
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
                What your ice dam removal website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Formation section — roof deck warming from heat loss, eave refreezing, water backup mechanism under shingles",
                  "Root cause section — KC Climate Zone 4A R-49-60 standard, common pre-1980 KC insulation deficit, bypass penetrations",
                  "Removal method section — steaming vs. chipping shingle damage, warranty implications, calcium chloride DIY interim step",
                  "Water intrusion signs — ceiling staining at exterior wall, top floor light fixture drips, attic pooling",
                  "Prevention section — insulation upgrade cost vs. repeat damage cost, heat cable as managed workaround",
                  "Quote form with roof pitch, attic insulation age/level, water entry location, storm date, access availability",
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
                &ldquo;The root cause section
                is what separated
                my calls from the
                guy who shows up
                with a hammer. KC
                homeowners know icicles
                are bad but they
                don&apos;t know why their
                house gets ice dams
                and their neighbor&apos;s
                doesn&apos;t. After the
                section went up explaining
                that ice dams come
                from inside the house —
                that heat leaking
                through the attic
                warms the roof and
                melts the snow —
                customers started
                calling for the steam
                removal and then
                asking about insulation.
                The chipping section
                also stopped the
                price complaints:
                customers who had
                seen YouTube videos
                of people chipping
                dams off understood
                why steaming costs
                more and why the
                cheap method voids
                their shingle warranty.
                Two customers booked
                attic insulation
                work after the removal
                call. That&apos;s where
                the real money is.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Stenberg, ice dam removal and attic insulation, North KC, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An ice dam removal site with formation mechanism section, steaming
                vs. chipping guide, and quote form starts at $200. A full site with
                interior heat loss root cause, prevention options, and KC climate
                zone insulation standards is $425–$750. One ice dam removal call
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
