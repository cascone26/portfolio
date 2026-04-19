import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pipe Insulation Companies in Kansas City",
  description:
    "Custom websites for pipe insulation, freeze protection insulation, and crawl space pipe wrapping companies in the Kansas City area. Show your R-value by pipe location, KC freeze depth calculation, and foam vs. fiberglass selection to win pipe insulation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pipe-insulation",
  },
};

export default function PipeInsulationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pipe Insulation Companies in Kansas City",
    description: "Custom websites for pipe insulation and freeze protection companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pipe Insulation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know which pipes actually need insulation in a KC winter, whether foam pipe wrap is enough or if heat tape is needed, and why pipes in a crawl space freeze when the rest of the house is heated. A website that explains pipe insulation earns the freeze prevention call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pipe Insulation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pipe Insulation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pipe insulation customers
              are KC homeowners who
              discovered a burst pipe
              in the crawl space or
              exterior wall cavity
              after a hard freeze —
              the pipe thawed, split,
              and flooded the floor
              cavity or wall — homeowners
              whose water supply pipes
              run through an unheated
              garage, attached structure,
              or unconditioned basement
              section where temperatures
              drop below freezing during
              KC cold snaps, or homeowners
              who moved into a house
              built before 1975 with
              galvanized supply pipes
              in the crawl space that
              have no insulation and
              freeze every January.
              The central education
              is pipe location risk
              by zone, insulation
              material selection,
              and when insulation
              alone is insufficient
              and heat tape is required —
              three things that determine
              whether a pipe survives
              a KC polar vortex event
              without splitting. Location
              risk: pipes freeze based
              on their proximity to
              exterior temperatures,
              not just air temperature
              inside the structure;
              pipes in a vented crawl
              space are exposed to
              near-outdoor temperatures
              during KC hard freezes
              because crawl space
              vents allow cold air
              circulation — the pipe
              temperature approaches
              the outdoor ambient
              temperature within one
              to two hours of a hard
              freeze; pipes in an
              exterior wall cavity
              with no insulation between
              the pipe and the sheathing
              freeze faster than pipes
              in an interior wall;
              the most vulnerable
              pipe locations in KC
              homes are supply lines
              running along the rim
              joist (the perimeter
              framing at the top of
              the foundation wall),
              where the rim joist
              is exposed to outdoor
              temperature on one face
              and the supply line
              is directly adjacent;
              pipes in an attached
              garage are not freeze-protected
              by house heating because
              the garage is typically
              unheated and has a much
              larger thermal mass
              exposed to the exterior.
              Insulation selection:
              foam polyethylene pipe
              insulation (the split-tube
              foam wrap sold at hardware
              stores) is effective
              for pipes in semi-conditioned
              spaces — attached garages
              that rarely drop below
              20°F, basement supply
              runs that are close
              to the heated space,
              and crawl spaces with
              active vents that are
              closed during winter;
              foam wrap is rated by
              wall thickness — 3/8-inch
              wall for temperatures
              down to about 10°F with
              1-2 hour exposure; 1/2-inch
              wall for sustained cold;
              for vented crawl spaces
              in KC that can see temperatures
              of -5°F to -15°F during
              a polar vortex, foam
              wrap alone is often
              insufficient — the insulation
              slows the rate of freezing
              but does not prevent
              it during sustained
              below-zero periods.
              Heat tape: self-regulating
              heat cable (also called
              pipe heat tape or heat
              trace) is the correct
              specification for pipes
              in vented crawl spaces
              and exterior wall runs
              in KC where the pipe
              cannot be relocated
              to a conditioned space —
              self-regulating cable
              increases output as
              ambient temperature
              drops and decreases
              output as temperature
              rises, preventing overheating;
              it must be combined
              with foam insulation
              over the cable to prevent
              the generated heat from
              dissipating into the
              crawl space air rather
              than staying at the
              pipe surface; the cable
              must be plugged in before
              the first hard freeze —
              it cannot thaw a frozen
              pipe, only prevent freezing
              in the first place.
              A pipe insulation website
              that explains location
              risk by zone, foam vs.
              heat tape selection,
              and why KC polar vortex
              events exceed foam-only
              protection earns the
              homeowner who wants
              it done before November.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before pipe insulation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Location risk — rim joist pipes, exterior wall runs, vented crawl space temperature during KC hard freeze",
                  "Foam wrap selection — wall thickness rating, temperature exposure limit, 3/8 vs. 1/2 inch for KC winters",
                  "Heat tape — self-regulating cable, when foam alone is insufficient, install-before-freeze requirement",
                  "Crawl space vents — whether to close in winter, impact on pipe temperature, open vs. closed debate",
                  "Polar vortex exposure — KC -5 to -15°F events, why sustained cold defeats single-layer foam",
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
                What your pipe insulation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Location risk section — rim joist, exterior wall, vented crawl space risk ranking with KC temperature context",
                  "Foam selection guide — wall thickness chart, temperature exposure rating, application limits",
                  "Heat tape section — self-regulating cable spec, foam-over-cable requirement, plug-in-before-freeze rule",
                  "Crawl space section — vent closure in winter, temperature during KC hard freeze, pipe exposure hours",
                  "Polar vortex section — KC event frequency, -15°F pipe exposure duration, combined foam+heat tape spec",
                  "Quote form with pipe location, crawl space vs. wall, access description, previous freeze history, timeline",
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
                &ldquo;The heat tape section changed
                my close rate on crawl space
                jobs. Customers would call
                after a burst pipe, I&apos;d
                recommend heat tape, and
                they&apos;d go to the hardware
                store and buy foam wrap
                because it was cheaper.
                After the section went up
                explaining that foam wrap
                alone doesn&apos;t protect against
                a sustained polar vortex
                below zero — just slows
                the freezing — homeowners
                stopped arguing about the
                heat tape cost. The rim
                joist section also brought
                in calls I wasn&apos;t getting
                before. Homeowners in Independence
                with homes built in the
                1960s didn&apos;t know the rim
                joist pipe run was their
                most vulnerable spot. That&apos;s
                a quick half-day job and
                it prevents a $4,000 water
                damage call.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Tillman, plumbing and pipe insulation service, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pipe insulation site with location risk section, foam selection
                guide, and quote form starts at $200. A full site with heat tape
                content, KC polar vortex context, and crawl space vent guide
                is $425–$750. One burst pipe prevention covers the cost.
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
