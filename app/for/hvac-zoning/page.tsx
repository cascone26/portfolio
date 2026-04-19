import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for HVAC Zoning Companies in Kansas City",
  description:
    "Custom websites for HVAC zoning, zone damper installation, and multi-zone heating and cooling companies in the Kansas City area. Show your bypass damper design, zone board wiring, and how zoning fixes hot and cold room problems to win zoning contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hvac-zoning",
  },
};

export default function HvacZoningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for HVAC Zoning Companies in Kansas City",
    description: "Custom websites for HVAC zoning and zone damper installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for HVAC Zoning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why the upstairs is always 5–8 degrees hotter than the main floor and whether zoning actually fixes it or just moves the problem. A website that explains bypass damper design and zone control logic earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For HVAC Zoning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">HVAC Zoning</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              HVAC zoning customers
              are homeowners with
              a two-story KC home
              where the upstairs
              bedrooms are 6–10°F
              hotter than the
              main floor in summer
              (heat rises, roof
              load on upper floor),
              homeowners who added
              a room addition
              that cannot be
              kept comfortable
              without overcooling
              the rest of the
              house, or homeowners
              with a finished
              basement that stays
              too cold in winter
              while the main
              floor overheats.
              The central education
              is how zone dampers
              work and why bypass
              design matters:
              a zoned system
              divides the duct
              system into independently
              controlled sections
              using motorized
              zone dampers (Honeywell,
              Carrier, EWC Controls)
              — each zone has
              its own thermostat
              and calls the system
              independently. The
              critical design
              challenge is managing
              static pressure:
              when only one zone
              calls, all airflow
              is forced through
              a fraction of the
              duct system — without
              a bypass, static
              pressure spikes,
              the blower over-works,
              airflow velocity
              increases noise
              and reduces comfort.
              Bypass damper design:
              a bypass duct connects
              the main supply
              plenum to the return
              plenum and opens
              when system static
              pressure exceeds
              the set point —
              correctly sized
              bypass is 50–75%
              of the largest
              zone capacity;
              an undersized bypass
              causes high static
              pressure damage
              to the blower;
              an oversized bypass
              causes short-cycling
              by returning conditioned
              air to the unit
              without delivering
              it to any zone.
              Zone control board:
              the zone control
              board (Honeywell
              TrueZone, EWC
              ZC-SYSII) coordinates
              thermostat calls,
              opens and closes
              dampers, and signals
              the equipment to
              run — it also
              manages the bypass
              damper based on
              pressure differential.
              Two-story vs. one-story
              zoning: a two-story
              home can achieve
              true comfort with
              upper/lower zoning
              if the duct system
              has adequate supply
              in each zone and
              returns are properly
              balanced — if the
              existing duct system
              was undersized for
              the upper floor,
              zoning redistributes
              rather than fixes
              the underlying
              duct problem. Mini-split
              alternative: for
              a single problem
              room (sun-facing
              bedroom, room addition),
              a single-zone mini-split
              may be more cost-effective
              than a full zoning
              retrofit — the
              website should
              explain when each
              approach is appropriate.
              An HVAC zoning website
              that explains bypass
              damper design, why
              static pressure
              management is the
              critical variable,
              and when zoning
              solves the problem
              vs. when duct work
              is the real fix
              earns the homeowner
              who has already
              heard that zoning
              will fix their
              upstairs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing HVAC zoning
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "How zone dampers work — motorized damper operation, thermostat-to-damper-to-equipment control sequence",
                  "Bypass damper design — why static pressure management is critical, bypass sizing rules",
                  "Two-story zoning — whether upper/lower zoning fixes roof load issues or just redistributes duct problems",
                  "Zone control board — how the board coordinates dampers and equipment, Honeywell vs. EWC",
                  "Zoning vs. mini-split — when each approach makes more sense for a single hot or cold room",
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
                  "Zone damper section — motorized damper types, how zone call sequences work from thermostat to equipment",
                  "Bypass damper explainer — static pressure problem, bypass sizing, undersized vs. oversized bypass symptoms",
                  "Two-story home section — roof load impact, upper/lower zone design, duct balance requirements",
                  "Zone control board section — board function, brand comparison, how to diagnose a failed board",
                  "Zoning vs. mini-split comparison — cost comparison, when each approach is right, hybrid solutions",
                  "Quote form with home floors, number of zones desired, current comfort complaints, existing duct type",
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
                &ldquo;The upstairs-hot problem
                is the most common comfort
                complaint in two-story KC
                homes, and every customer
                comes in thinking zoning
                is the answer. The website
                section on bypass damper
                design — and what happens
                to static pressure when
                you close half the duct
                system without one — turned
                the conversation from 'will
                this fix it' to 'what does
                the bypass need to be sized
                at.' I also stopped losing
                jobs to competitors who
                proposed zoning when the
                real problem was undersized
                upstairs supply runs: the
                website set the expectation
                that I would evaluate the
                duct system first, not
                just install dampers and
                call it done.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Allard, HVAC zoning and duct design, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An HVAC zoning site with zone damper section,
                bypass explainer, and quote form starts at $200.
                A full site with two-story design section, zone
                board content, and zoning vs. mini-split comparison
                is $425–$750. One zoning installation covers the
                cost. No contracts, no monthly fees.
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
