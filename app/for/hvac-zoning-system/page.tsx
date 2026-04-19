import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for HVAC Zoning System Companies in Kansas City",
  description:
    "Custom websites for HVAC zoning, multi-zone heating and cooling, and damper control companies in the Kansas City area. Show your KC temperature differential calculations, damper sizing, and bypass duct requirements to win zoning installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hvac-zoning-system",
  },
};

export default function HvacZoningSystemPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for HVAC Zoning System Companies in Kansas City",
    description: "Custom websites for HVAC zoning and multi-zone heating and cooling companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for HVAC Zoning System Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why the upstairs is fifteen degrees hotter than the main floor in a KC summer, whether a zoning system works with their existing single-stage furnace, and what a bypass duct does. A website that explains damper sizing and zone control earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For HVAC Zoning System Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">HVAC Zoning System</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              HVAC zoning customers
              are KC homeowners
              with a two-story
              house where the
              upstairs bedrooms
              are ten to fifteen
              degrees hotter than
              the main floor in
              July — a result of
              solar gain through
              the roof and upper
              windows combined
              with heat stratification —
              or homeowners with
              a finished basement
              that is always colder
              than the rest of
              the house because
              it receives the same
              conditioned air
              supply as rooms
              with full solar
              exposure; or homeowners
              whose thermostat
              is on the main floor
              and shuts off the
              system before the
              upstairs ever reaches
              the setpoint. The
              central education
              is how zoning works:
              a zoning system
              adds motorized dampers
              inside the ductwork
              at the branch takeoffs
              for each zone —
              typically one zone
              per floor or one
              zone per wing —
              and a zone control
              panel that receives
              thermostat signals
              from each zone and
              opens or closes
              the dampers to
              direct airflow to
              where the call for
              heating or cooling
              is active; when
              only one zone calls,
              the system delivers
              full airflow to
              that zone while
              the other zone
              dampers are closed.
              The bypass duct
              problem: most residential
              furnaces and air
              handlers are single-stage —
              they run at full
              capacity whenever
              they run; when
              a zoning system
              closes dampers
              on all but one
              small zone, the
              static pressure
              in the supply plenum
              rises above the
              design limit of
              the blower —
              typically zero-point-one
              to zero-point-two
              inches of static
              pressure — which
              can cause the heat
              exchanger to overheat,
              the coil to freeze,
              and the blower
              motor to overwork;
              a bypass duct from
              the supply plenum
              to the return plenum
              — sized for approximately
              twenty to thirty
              percent of system
              airflow — relieves
              the excess pressure
              when zones close;
              zoning a furnace
              without a bypass
              duct or without
              a variable-speed
              blower that can
              modulate down to
              match the active
              zone demand is
              the most common
              zoning installation
              error in KC. Damper
              sizing: dampers
              must match the
              duct size they
              are installed in;
              a correctly sized
              damper for a
              twelve-inch round
              duct closes completely
              when the zone
              is inactive and
              opens fully without
              restricting airflow
              when the zone
              is active; undersized
              dampers create
              turbulence and
              noise; oversized
              dampers rattle
              and do not fully
              close. A KC zoning
              website that explains
              the temperature
              differential problem,
              how dampers and
              bypass ducts work
              together, and
              why a single-stage
              furnace requires
              specific design
              attention earns
              the homeowner who
              has lived with
              a hot upstairs
              for years and
              wants a real solution.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before HVAC zoning installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Temperature differential causes — why KC two-story homes have 10-15°F floor-to-floor difference in summer",
                  "How zoning works — motorized dampers, zone control panels, multiple thermostats, zone-by-zone airflow",
                  "Bypass duct requirement — why single-stage furnaces need pressure relief, bypass duct sizing",
                  "Variable-speed blower option — how two-stage or variable-speed equipment eliminates bypass duct need",
                  "Zoning vs. mini-split comparison — when a mini-split is better for an isolated room vs. a full zone system",
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
                What your HVAC zoning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Temperature differential section — KC solar gain, heat stratification, why single thermostat fails two-story homes",
                  "Zoning system explanation — damper types, zone control panels, thermostat placement per zone",
                  "Bypass duct section — static pressure limits, bypass sizing rule, why single-stage requires it",
                  "Equipment compatibility — what existing furnace types support zoning, when variable-speed is recommended",
                  "Zoning vs. mini-split guide — cost comparison, installation disruption, performance for each scenario",
                  "Quote form with home size, number of floors, existing equipment age, problem zones described",
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
                &ldquo;The bypass duct section
                is what separates me
                from installers who
                just throw dampers in
                and call it done. KC
                homeowners with a single-stage
                furnace need to understand
                that zoning without
                pressure relief shorts
                the equipment life —
                I had a customer show
                me a quote from another
                company that had no
                bypass duct in the plan.
                After the section explaining
                why bypass ducts are
                required for single-stage
                equipment, customers
                started asking about
                it specifically before
                accepting a quote.
                The temperature differential
                section also converts
                the &apos;can&apos;t you
                just adjust the vents&apos;
                homeowners into real
                zoning customers by
                explaining why closing
                supply registers manually
                creates the same static
                pressure problem without
                any of the control.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Kowalski, HVAC zoning and controls installation, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An HVAC zoning site with temperature differential explanation,
                bypass duct section, and quote form starts at $200. A full site
                with equipment compatibility guide, variable-speed blower comparison,
                and zone layout section is $425–$750. One two-zone installation
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
