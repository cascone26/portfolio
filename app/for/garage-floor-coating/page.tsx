import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Garage Floor Coating Companies in Kansas City",
  description:
    "Custom websites for garage floor coating, epoxy floor coating, and polyurea floor coating companies in the Kansas City area. Show your KC moisture vapor transmission from clay subgrade, epoxy vs. polyurea/polyaspartic coating comparison for KC humidity cycling, and proper surface prep to win garage floor coating contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/garage-floor-coating",
  },
};

export default function GarageFloorCoatingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Garage Floor Coating Companies in Kansas City",
    description: "Custom websites for garage floor coating and epoxy floor coating companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garage Floor Coating Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their last garage floor epoxy peeled within two years, whether polyurea or epoxy holds up better in a Kansas City garage that hits 100°F in July and 0°F in January, and whether their floor needs to be tested for moisture before coating. A website that explains garage floor coating earns the call from the homeowner whose floor is peeling and who wants to understand what was done wrong. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garage Floor Coating in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Garage Floor Coating</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Garage floor coating
              customers are KC
              homeowners whose
              previous epoxy
              coating has delaminated —
              the peeling and
              bubbling that
              develops when
              a coating is
              applied over
              a floor with
              active moisture
              vapor transmission
              from the KC
              clay subgrade
              below the slab,
              or applied without
              adequate surface
              preparation of
              the concrete
              profile; homeowners
              who want to
              coat a new or
              existing garage
              floor and want
              to understand
              why the big-box
              epoxy kit they
              applied three
              years ago did
              not last while
              professionally
              applied coatings
              on neighboring
              garages still
              look new; or
              homeowners comparing
              epoxy, polyurea,
              and polyaspartic
              coating systems
              and wanting to
              understand the
              performance difference
              in a KC garage
              that sees a
              one-hundred-ten
              degree annual
              temperature range
              and humidity
              that swings
              from ten percent
              in January to
              eighty percent
              in August. The
              central education
              is KC clay subgrade
              moisture vapor
              transmission
              as the primary
              delamination
              driver — the
              phenomenon where
              water vapor
              migrates upward
              through the
              concrete slab
              from the clay
              soil below
              and pushes the
              coating off
              the surface
              from underneath —
              the mechanical
              surface profile
              that determines
              whether a coating
              bonds or fails
              regardless of
              product quality,
              and the coating
              type comparison
              between standard
              epoxy and polyurea
              or polyaspartic
              systems for
              KC garage conditions —
              three things
              that determine
              whether a homeowner
              understands
              why a professional
              application
              with a tested
              slab and proper
              diamond grind
              produces a
              result that
              lasts a decade
              while a roller-applied
              kit fails in
              two seasons.
              KC clay moisture
              vapor transmission:
              Kansas City
              sits on expansive
              clay soil with
              a plasticity
              index of thirty
              to fifty — a
              soil that holds
              and releases
              moisture slowly;
              a concrete garage
              slab poured
              over KC clay
              subgrade without
              an adequate
              vapor barrier
              will transmit
              moisture vapor
              upward through
              the slab as
              the seasonal
              moisture cycle
              drives the
              clay from wet
              spring to dry
              fall; moisture
              vapor transmission
              rate is measured
              in pounds of
              water per one
              thousand square
              feet per twenty-four
              hours — standard
              epoxy coatings
              require a reading
              below three
              to five pounds
              per MVER test;
              KC garage slabs
              on clay frequently
              test above this
              threshold in
              spring and
              early summer;
              applying epoxy
              to a slab above
              the MVER threshold
              traps vapor
              beneath the
              coating film
              where it creates
              pressure that
              breaks the coating
              bond — the
              bubbles and
              delamination
              that appear
              within one to
              two KC seasons;
              a professional
              installer tests
              the slab with
              a calcium chloride
              or relative
              humidity probe
              before committing
              to a coating
              system and selects
              a moisture-tolerant
              polyurea or
              polyaspartic
              system if the
              slab tests high.
              Surface profile
              and prep: standard
              epoxy requires
              a concrete surface
              profile of CSP
              three or greater —
              achieved with
              diamond grinding
              or shot blasting,
              not acid etching
              alone; acid
              etching opens
              the pores of
              the concrete
              but does not
              create the mechanical
              tooth that allows
              the epoxy to
              grip the aggregate
              below the surface;
              a diamond grinder
              removes the
              top layer of
              concrete and
              exposes the
              aggregate surface —
              the physical
              texture allows
              the coating
              to mechanically
              interlock with
              the concrete
              rather than
              relying on
              chemical adhesion
              alone; existing
              oil stains or
              contamination
              in the concrete
              must be addressed
              before coating —
              oil penetrates
              the concrete
              matrix and
              prevents any
              coating from
              bonding to
              contaminated
              areas; cracks
              must be routed
              and filled before
              coating. Epoxy
              vs. polyurea
              vs. polyaspartic:
              standard water-based
              epoxy has a
              lower material
              cost and is
              the most common
              DIY product —
              it is also the
              most sensitive
              to application
              temperature
              and humidity,
              the least UV
              stable, and
              the most likely
              to yellow and
              chalk in a
              KC garage with
              south-facing
              doors; solvent-based
              and one-hundred-percent-solids
              epoxy outperforms
              water-based
              but still has
              a three-hour
              pot life and
              temperature
              sensitivity
              in a KC garage
              in summer; polyurea
              and polyaspartic
              coatings cure
              in thirty to
              sixty minutes,
              are UV stable,
              tolerate higher
              moisture vapor
              transmission
              than epoxy,
              and maintain
              adhesion across
              the full KC
              temperature
              range; the
              material cost
              premium for
              polyaspartic
              over standard
              epoxy is thirty
              to fifty percent —
              offset by longer
              service life
              and fewer recoat
              cycles over
              a KC garage
              floor that
              sees vehicle
              traffic, road
              salt, and temperature
              extremes. A
              garage floor
              coating website
              that explains
              KC clay moisture
              vapor as the
              delamination
              driver, diamond
              grind surface
              profile as
              the prep requirement,
              and polyurea
              and polyaspartic
              systems as
              the KC-appropriate
              coating type
              earns the homeowner
              whose previous
              coating peeled
              and who wants
              to understand
              what a professional
              installer does
              differently.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before garage floor coating
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay moisture vapor — MVER test, 3-5 lb threshold, spring/early summer transmission peak, bubble and delamination failure",
                  "Diamond grind vs. acid etch — CSP 3 profile requirement, mechanical tooth vs. chemical adhesion, aggregate exposure",
                  "Epoxy vs. polyurea/polyaspartic — UV stability, 110°F KC temp range, moisture tolerance, pot life in summer heat",
                  "Oil stain treatment — penetrating contamination, concrete degreaser, whether stained areas can be coated",
                  "Flake and topcoat system — vinyl chip broadcast, clear polyaspartic topcoat, slip resistance, maintenance cleaning",
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
                What your garage floor coating website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Moisture vapor section — KC clay subgrade cycle, MVER testing, what happens when coating is applied over threshold",
                  "Surface prep section — diamond grind vs. acid etch, CSP 3 requirement, oil stain and crack treatment",
                  "Coating system section — epoxy vs. polyurea vs. polyaspartic, UV stability, temperature range, moisture tolerance",
                  "Failure analysis section — why big-box kits peel, what DIY missed, what professional installation does differently",
                  "System options section — solid color vs. flake broadcast, slip resistance topcoat, sheen level options",
                  "Quote form with floor sq ft, vehicle count, current floor condition, previous coating type/date, oil stains present",
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
                &ldquo;The moisture section
                is what converts
                the peeling floor
                callback into
                a full redo
                with an upgrade.
                KC homeowners
                who had a big-box
                epoxy kit fail
                in two years
                don&apos;t understand
                that the clay
                under their
                slab was pushing
                the coating
                off from underneath —
                they think they
                applied it wrong.
                After the section
                went up explaining
                that KC clay
                subgrade transmits
                moisture vapor
                through the
                slab and that
                standard epoxy
                fails above
                a certain MVER
                reading, customers
                stopped asking
                for the same
                epoxy and started
                asking whether
                their floor
                needed to be
                tested first.
                The diamond
                grind section
                also changes
                the conversation —
                homeowners who
                understand that
                acid etch alone
                does not produce
                the surface
                profile stop
                questioning
                why professional
                prep costs more
                than rolling
                product on
                themselves.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Holbrook, garage floor coating and polyurea systems, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garage floor coating site with KC moisture vapor section, diamond
                grind prep explanation, and quote form starts at $200. A full site
                with coating system comparison, failure analysis, and flake system
                options is $425–$750. One two-car garage coating covers the cost.
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
