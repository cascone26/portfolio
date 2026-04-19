import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pressure Washing Companies in Kansas City",
  description:
    "Custom websites for pressure washing, soft washing, and exterior cleaning companies in the Kansas City area. Show your KC algae and oxidation on north-facing surfaces, soft wash vs. pressure wash surface selection for KC siding and roofing materials, and proper downstream chemical application to win pressure washing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pressure-washing-service",
  },
};

export default function PressureWashingServicePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pressure Washing Companies in Kansas City",
    description: "Custom websites for pressure washing and exterior cleaning companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pressure Washing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their siding needs pressure washing or soft washing, why the north side of their house has green algae every spring, and whether a pressure washer will damage their vinyl siding or composite deck. A website that explains pressure washing earns the call from the homeowner prepping for a home sale or whose driveway has turned green. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pressure Washing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pressure Washing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pressure washing
              customers are
              KC homeowners
              whose north-facing
              siding, driveway,
              or deck has
              developed the
              green or black
              organic growth —
              algae, mildew,
              and lichen —
              that accumulates
              on Kansas City
              exteriors because
              of the combination
              of KC humidity
              from May through
              September, the
              tree canopy
              coverage that
              keeps north-facing
              surfaces shaded
              and slow-drying
              after rain,
              and the concrete,
              vinyl, and wood
              substrates that
              hold moisture
              long enough
              for biological
              growth to establish;
              homeowners preparing
              to sell their
              home who want
              curb appeal
              restored before
              listing photographs;
              or homeowners
              who washed their
              own siding with
              a rented pressure
              washer and damaged
              the vinyl or
              wood surface
              by using high
              pressure incorrectly
              and who want
              a professional
              result without
              the risk. The
              central education
              is soft washing
              as the correct
              method for
              siding, roofing,
              and other surfaces
              that are damaged
              by high-pressure
              impact — low
              pressure with
              downstream surfactant
              and sodium hypochlorite
              that kills the
              biological growth
              at the root
              rather than
              blasting the
              surface symptom —
              surface selection
              between pressure
              washing and
              soft washing
              for KC exterior
              materials, and
              the downstream
              chemical application
              method that
              distinguishes
              professional
              results from
              rental equipment —
              three things
              that determine
              whether a homeowner
              understands
              why a professional
              with the right
              chemical mix
              produces a
              result that
              stays clean
              longer than
              high-pressure
              water alone.
              KC algae and
              organic growth:
              Kansas City
              receives thirty-eight
              to forty-two
              inches of annual
              rainfall with
              peak moisture
              from April
              through September;
              the combination
              of warm humid
              air and shaded
              north and east
              faces creates
              conditions where
              gloeocapsa magma —
              the blue-green
              algae that
              produces the
              black streaks
              on KC roofing —
              and chlorophyta
              — the green
              algae on KC
              concrete and
              siding — establish
              and recolonize
              surfaces within
              one to two
              growing seasons
              after mechanical
              cleaning without
              biocide treatment;
              pressure washing
              without biocide
              application
              removes the
              visible growth
              but does not
              kill the root
              system in the
              substrate pores —
              the surface
              regreens within
              three to six
              months; a soft
              wash application
              with a sodium
              hypochlorite
              mix at one
              to three percent
              active concentration
              kills the organism
              at the root
              and leaves
              a surface that
              stays clean
              for twelve to
              twenty-four
              months in KC
              conditions. Soft
              wash vs. pressure
              wash surface
              selection: high-pressure
              washing — three
              thousand to
              four thousand
              PSI — is appropriate
              for concrete
              driveways, sidewalks,
              and masonry
              where the surface
              is hard enough
              to withstand
              direct impact;
              soft washing —
              sixty to five
              hundred PSI —
              is required
              for vinyl siding,
              painted wood,
              composite decking,
              roof shingles,
              stucco, and
              EIFS surfaces
              where high
              pressure causes
              water intrusion
              behind siding
              panels, lifting
              of asphalt
              shingles, or
              surface damage
              to composite
              materials; incorrect
              pressure selection
              on KC vinyl
              siding — which
              is a thin thermoplastic
              that warps and
              cracks when
              water is forced
              behind panels
              under pressure —
              is the most
              common cause
              of homeowner
              callback after
              DIY pressure
              washing; soft
              washing uses
              a downstream
              injector or
              soap nozzle
              to apply diluted
              surfactant and
              sodium hypochlorite
              mix to the
              surface, dwell
              for five to
              ten minutes,
              and rinse at
              low pressure —
              the biocide
              does the work
              that high pressure
              cannot without
              risking the
              substrate. Downstream
              chemical application:
              downstream injection
              is the method
              where cleaning
              chemical is
              introduced into
              the water stream
              on the downstream
              side of the
              pump — after
              the pump, where
              pressure is
              low enough
              for chemical
              contact without
              degrading pump
              seals; the
              soap nozzle
              reduces outlet
              pressure to
              allow chemical
              to draw from
              a downstream
              injector; professional
              soft wash mixes
              use surfactant
              to break down
              organic matter,
              sodium hypochlorite
              as the biocide,
              and water at
              a ratio calibrated
              for the surface
              type and dwell
              time; the mix
              concentration
              that is safe
              for KC vinyl
              siding is different
              from the concentration
              used on a
              concrete driveway
              or a shingle
              roof — a professional
              who knows the
              right mix for
              each surface
              produces a
              result that
              lasts. A pressure
              washing website
              that explains
              KC algae growth
              as a root-system
              problem requiring
              biocide treatment,
              soft wash vs.
              pressure wash
              surface selection,
              and downstream
              chemical method
              earns the homeowner
              whose north
              siding is green
              and who wants
              to understand
              why the result
              lasts longer
              than a rental
              machine could
              produce.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before pressure washing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC algae and mildew — north-facing shade accumulation, gloeocapsa magma black streaks, recolonization without biocide",
                  "Soft wash vs. pressure wash — vinyl siding damage from high PSI, shingle lifting risk, surface selection by material",
                  "Downstream chemical mix — sodium hypochlorite concentration by surface type, dwell time, surfactant role",
                  "Roof washing — black streak removal without pressure, shingle warranty and manufacturer soft wash guidance",
                  "Concrete cleaning — oil stain treatment, mold and algae removal, sealer compatibility after washing",
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
                What your pressure washing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC organic growth section — humidity cycle, north-face shade accumulation, why growth returns without biocide",
                  "Surface selection section — vinyl siding, composite deck, roof, concrete — correct method for each",
                  "Soft wash section — downstream injection, sodium hypochlorite mix, dwell time, low-pressure rinse",
                  "Roof washing section — black streak identification, soft wash manufacturer compliance, shingle warranty",
                  "Concrete section — high-pressure appropriate surfaces, pre-treatment for oil, post-wash sealer timing",
                  "Quote form with surfaces to clean (siding/roof/concrete/deck), sq ft estimate, last cleaning date, growth type",
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
                &ldquo;The biocide section
                is what upgrades
                every siding
                wash from one
                season to two
                years. KC homeowners
                who rent a
                pressure washer
                in May, clean
                the green off
                their north
                siding, and
                call back the
                following spring
                with the same
                green don&apos;t
                understand that
                high-pressure
                water removes
                the surface
                but doesn&apos;t
                kill the root
                system. After
                the section
                went up explaining
                that algae recolonizes
                from the root
                system left
                in the siding
                texture and
                that sodium
                hypochlorite
                at the right
                concentration
                with dwell
                time is what
                produces a
                result that
                stays clean
                for two KC
                growing seasons,
                customers stopped
                arguing over
                whether soft
                wash was worth
                it and started
                asking about
                the chemical
                mix. The surface
                selection section
                also stops
                the damage
                complaint — KC
                homeowners who
                understand why
                a vinyl siding
                panel can&apos;t
                be pressure-washed
                at three thousand
                PSI stop asking
                for the same
                thing that
                warped their
                siding last
                time.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Flores, pressure washing and soft wash exterior cleaning, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pressure washing site with KC organic growth section, soft wash
                vs. pressure wash surface guide, and quote form starts at $200. A
                full site with roof washing, concrete treatment, and chemical method
                content is $425–$750. One house wash covers the cost.
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
