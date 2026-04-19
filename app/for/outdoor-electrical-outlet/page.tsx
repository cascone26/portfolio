import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Outdoor Electrical Outlet Companies in Kansas City",
  description:
    "Custom websites for outdoor electrical outlet installation, GFCI weatherproof outlet, and exterior circuit addition companies in the Kansas City area. Show your KC in-use cover requirements, GFCI protection rules, and conduit burial depth to win outdoor outlet contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/outdoor-electrical-outlet",
  },
};

export default function OutdoorElectricalOutletPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Outdoor Electrical Outlet Companies in Kansas City",
    description: "Custom websites for outdoor electrical outlet installation and exterior circuit addition companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Outdoor Electrical Outlet Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what kind of outlet cover is required for outdoor use, whether an outdoor outlet needs its own circuit, and how deep the conduit has to be buried in their KC yard. A website that explains in-use cover requirements and GFCI rules earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Outdoor Electrical Outlet Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Outdoor Electrical Outlet</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Outdoor electrical outlet
              installation customers
              are KC homeowners
              who want power for
              string lights, power
              tools, a holiday
              display, a landscape
              pump, or an outdoor
              kitchen and currently
              have no exterior
              outlet — or only
              one outlet on the
              front of the house
              that requires a
              hundred-foot extension
              cord to reach the
              back yard; or homeowners
              who added a deck
              or patio and need
              outlets at the structure
              rather than running
              cords from the house.
              The central education
              is what the NEC
              requires for outdoor
              outlets in Kansas
              City: all outdoor
              outlets must be
              GFCI-protected —
              either by a GFCI
              outlet at the location
              or by a GFCI breaker
              on the circuit;
              the NEC requires
              in-use covers on
              outdoor outlets —
              a standard flip-lid
              weatherproof cover
              is only rated for
              use when nothing
              is plugged in;
              an in-use cover
              (also called a
              bubble cover or
              extra-duty weatherproof
              cover) allows the
              cover to close
              over a cord that
              is plugged in and
              protects the connection
              from rain and moisture;
              the current NEC
              requires in-use
              covers on all outdoor
              outlets in new
              installation —
              it is the most
              commonly missed
              code requirement
              when homeowners
              or handymen add
              an outdoor outlet
              without a permit.
              Conduit burial depth:
              when an outdoor
              outlet requires
              running wire underground
              in a KC yard —
              from the house
              to a detached garage,
              a rear yard post,
              or a deck structure —
              the required burial
              depth depends on
              the wiring method:
              UF (underground
              feeder) cable direct-buried
              requires twelve
              inches of cover;
              rigid metal conduit
              or intermediate
              metal conduit requires
              six inches; schedule-80
              PVC conduit requires
              eighteen inches;
              KC clay soil is
              dense enough that
              burial depth requirements
              protect against
              damage from typical
              yard maintenance;
              the most common
              installation error
              in KC backyards
              is using the wrong
              burial method (NM
              cable instead of
              UF cable) or insufficient
              depth for the wire
              type used. Dedicated
              circuit vs. shared:
              an outdoor outlet
              added to an existing
              interior circuit
              is code-compliant
              in most configurations
              if the circuit
              has capacity —
              a dedicated circuit
              is required only
              when the outlet
              will serve a fixed
              appliance, an outdoor
              kitchen, or a load
              that would regularly
              trip the breaker
              serving the shared
              circuit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before outdoor outlet installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "GFCI requirement — all outdoor outlets require GFCI, outlet vs. breaker protection, what voids the protection",
                  "In-use cover requirement — why flip-lid covers fail code, bubble cover for plugged-in cords, KC inspection",
                  "Underground wiring — UF cable depth, conduit types and burial depths, KC clay soil considerations",
                  "Deck and patio outlets — structure mounting, weatherproof box requirements, distance from water sources",
                  "Dedicated circuit need — shared circuit capacity, when separate breaker is required, load calculation",
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
                What your outdoor outlet installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "GFCI section — why outdoor outlets require GFCI, outlet vs. breaker protection, downstream GFCI chain",
                  "In-use cover section — what in-use means, bubble cover vs. flip-lid, KC code for new installation",
                  "Underground wiring section — UF cable direct burial depth, conduit options, KC yard trench requirements",
                  "Location options section — back yard post, deck structure, detached garage, driveway reach",
                  "Permit section — KC electrical permit for new outlet and underground work, inspection requirements",
                  "Quote form with outlet locations wanted, underground run needed, deck or structure, dedicated circuit load",
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
                &ldquo;The in-use cover section
                is the one that catches
                KC homeowners who added
                an outdoor outlet themselves
                or had a handyman do it.
                They call for inspection
                prep and I find a standard
                flip-lid cover over a
                code-required in-use location.
                The website section explaining
                what in-use means — and
                that the standard covers
                fail the moment a cord
                is plugged in because
                rain can enter where the
                cord exits — converts
                homeowners who argue the
                point. The underground
                wiring section also prevents
                the most expensive call
                I get in KC — someone
                who ran regular NM-B cable
                in a PVC conduit buried
                four inches under their
                backyard, discovers it
                when a landscaper&apos;s
                edger cuts through it,
                and needs everything replaced
                to code.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Fitzpatrick, residential electrical, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An outdoor outlet installation site with GFCI section,
                in-use cover guide, and quote form starts at $200. A full site
                with underground wiring guide, deck mounting section, and KC
                permit information is $425–$750. One underground run to the
                back yard covers the cost. No contracts, no monthly fees.
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
