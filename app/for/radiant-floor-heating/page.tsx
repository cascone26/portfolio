import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Radiant Floor Heating Companies in Kansas City",
  description:
    "Custom websites for radiant floor heating, hydronic radiant, and electric radiant companies in the Kansas City area. Show your hydronic vs. electric comparison, slab embedding, and thermostat programming to win radiant heating contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/radiant-floor-heating",
  },
};

export default function RadiantFloorHeatingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Radiant Floor Heating Companies in Kansas City",
    description: "Custom websites for radiant floor heating installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Radiant Floor Heating Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether hydronic or electric radiant is better for a bathroom remodel, how slab thermal mass affects comfort and response time, and whether radiant can serve as the primary heat source. A website that explains heat delivery physics and system selection earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Radiant Floor Heating in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Radiant Floor Heating</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Radiant floor heating
              customers are homeowners
              planning a bathroom
              tile remodel and
              wanting warm floors
              underfoot, homeowners
              adding a room
              addition who
              want to heat
              it without extending
              ductwork, or
              homeowners building
              new construction
              in KC who are
              evaluating whether
              a whole-house
              hydronic radiant
              system is the
              right heating
              choice. The
              central education
              is why radiant
              heat feels different
              from forced
              air and what
              the two systems
              actually require:
              radiant heat
              delivers energy
              via infrared
              radiation and
              conduction from
              a warm floor
              surface (typically
              85–90°F for
              hydronic, up
              to 104°F for
              electric) to
              objects and
              people in the
              room — it does
              not heat the
              air directly.
              This creates
              comfort at lower
              air temperatures:
              a radiant-heated
              room at 68°F
              air temperature
              feels as warm
              as a forced-air
              room at 72–74°F
              because mean
              radiant temperature
              adds to perceived
              comfort. Hydronic
              radiant: PEX
              tubing (Uponor,
              Rehau, Watts)
              embedded in
              the slab or
              in a thin topping
              slab — circulates
              low-temperature
              hot water (90–120°F)
              from a boiler
              or heat pump
              water heater;
              appropriate
              for whole-house
              primary heat
              in new construction
              or major renovation;
              thermal mass
              of the slab
              creates slow
              response (2–4
              hours to reach
              equilibrium
              from cold) but
              also stores
              heat, reducing
              cycling; not
              suitable for
              heating a single
              room because
              the boiler/heat
              pump infrastructure
              investment requires
              scale. Electric
              radiant: heating
              cable (NuHeat,
              Warmup, Nuheat
              Home) or electric
              mat embedded
              in tile mortar
              or thin-set —
              correct for
              bathroom and
              kitchen tile
              floor comfort
              heating; 240V
              dedicated circuit
              required; typically
              not used as
              primary heat
              source due to
              electric resistance
              heating cost
              vs. gas; 12-15
              watts per square
              foot for tile
              over slab, 15-20
              watts for tile
              over subfloor
              with insulation
              board. Flooring
              compatibility:
              tile (highest
              thermal conductivity,
              best with radiant);
              engineered hardwood
              (acceptable at
              controlled temps,
              must be rated
              for radiant
              by manufacturer);
              solid hardwood
              (high moisture
              sensitivity —
              keep water temp
              below 80°F,
              acclimatize carefully);
              carpet (low
              thermal conductivity
              —adds R-value
              in path, reduces
              efficiency, not
              recommended over
              radiant). Thermostat
              programming: radiant
              requires a floor-sensing
              thermostat with
              a floor probe
              to prevent overheating
              tile adhesive
              and flooring —
              air-sensing only
              thermostats allow
              the floor to
              overheat if
              the room cools
              slowly. A radiant
              heating website
              that explains
              hydronic vs.
              electric selection,
              why tile is
              the right flooring
              pairing, and
              what thermal
              mass means for
              a whole-house
              system earns
              the homeowner
              planning a bathroom
              remodel or new
              addition.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing radiant floor heating
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Hydronic vs. electric — which system is appropriate for single-room vs. whole-house, cost comparison",
                  "Thermal mass — why slab radiant responds slowly, how stored heat reduces cycling, programming implications",
                  "Flooring compatibility — tile vs. engineered vs. solid wood vs. carpet, thermal conductivity differences",
                  "Watt density selection — 12-15 vs. 15-20 W/sq ft, subfloor vs. slab installation requirements",
                  "Thermostat requirements — floor probe vs. air sensing, why floor probe prevents overheating",
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
                What your radiant floor heating website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Heat delivery physics — why radiant comfort differs from forced air, mean radiant temperature concept",
                  "Hydronic system section — PEX tubing, slab embedding, water temperature range, when it makes sense",
                  "Electric mat section — watt density, tile mortar embedding, 240V circuit, comfort vs. primary heat use",
                  "Flooring guide — tile, engineered wood, solid wood, carpet conductivity and compatibility rules",
                  "Thermostat section — floor probe importance, air+floor dual sensing, programming for thermal mass lag",
                  "Quote form with room type, existing floor covering, slab or subfloor, single room or whole-house goal",
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
                &ldquo;My bathroom remodel customers
                always asked the same two
                questions: will it keep
                up with a cold KC morning,
                and can I put it under
                hardwood instead of tile?
                The website section on
                thermal conductivity — why
                tile outperforms wood, and
                what the manufacturer restrictions
                are for engineered wood —
                reduced those questions
                to a specification choice
                rather than a surprise.
                The thermostat section
                also prevented a callback:
                two customers who read
                it installed floor-sensing
                thermostats themselves
                before I arrived for the
                mat installation.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Flores, tile and radiant heating, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A radiant floor heating site with hydronic vs.
                electric guide, flooring compatibility section,
                and quote form starts at $200. A full site with
                heat delivery physics, thermostat section, and
                thermal mass explainer is $425–$750. One bathroom
                radiant installation covers the cost. No contracts,
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
