import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Water Heater Repair Companies in Kansas City",
  description:
    "Custom websites for water heater repair, thermocouple replacement, anode rod service, and T&P valve testing companies in the Kansas City area. Show your diagnostic process, repair vs. replace decision guide, and KC hard water context to win water heater service contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/water-heater-repair",
  },
};

export default function WaterHeaterRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Water Heater Repair Companies in Kansas City",
    description: "Custom websites for water heater repair and service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Water Heater Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a water heater symptom is a cheap fix or a sign the unit needs replacement, how to tell if the thermocouple or thermostat is the problem, and whether KC hard water shortened their water heater's life. A website that explains the diagnostic earns the service call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Water Heater Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Water Heater Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Water heater repair
              customers are KC homeowners
              who have no hot water
              or inconsistent hot
              water and don't know
              whether the fix is
              a $30 part or a
              new unit, homeowners
              who hear rumbling
              or popping from the
              tank and want to
              know what it means,
              or homeowners who
              have a pilot that
              won't stay lit and
              want to understand
              whether thermocouple
              replacement solves
              it. The central education
              is how to read water
              heater symptoms and
              what each typically
              indicates. Pilot
              won't stay lit:
              the thermocouple
              is a safety device
              that senses the
              pilot flame and
              holds the gas valve
              open — a faulty
              thermocouple causes
              the pilot to go
              out within seconds
              of releasing the
              igniter button;
              thermocouple replacement
              costs $20–$40 in
              parts and 30 minutes
              of labor — one of
              the lowest-cost
              water heater repairs;
              if the thermocouple
              tests good (0.5–0.8
              mV open circuit)
              but the pilot still
              won't hold, the
              gas valve itself
              may be faulty (less
              common, higher cost).
              No hot water or
              runs out quickly:
              on a gas water heater,
              the upper thermostat
              is responsible for
              the majority of
              heating — a failed
              upper thermostat
              leaves only the
              lower element active,
              producing lukewarm
              water that runs
              out quickly; thermostat
              replacement is $15–$40;
              for electric water
              heaters, element
              failure is the most
              common cause — testing
              with a multimeter
              (OL on continuity
              test = open element,
              needs replacement);
              element replacement
              costs $20–$60 plus
              labor. Rumbling and
              popping noises: mineral
              scale (calcium carbonate
              and magnesium) from
              KC's moderately hard
              water (8–12 grains
              per gallon in Johnson
              and Wyandotte counties)
              accumulates on the
              bottom of the tank
              and on heating elements —
              water trapped beneath
              scale overheats
              and vaporizes, causing
              rumbling; a sediment
              flush (connect hose
              to drain valve,
              flush until clear)
              reduces scale if
              done annually; scale
              at the bottom of
              a 10+ year-old tank
              typically cannot
              be fully removed
              and indicates the
              unit is approaching
              end of life. Anode
              rod: a magnesium
              or aluminum sacrificial
              rod screws into
              the top of the
              tank and corrodes
              preferentially to
              protect the steel
              tank from rust —
              anode rods should
              be inspected every
              3–5 years and replaced
              when less than 1/2
              inch of core wire
              remains; KC water
              is not particularly
              aggressive, but
              softened water (from
              water softeners)
              accelerates anode
              rod consumption
              significantly; replacing
              a depleted anode
              rod on a 5–8 year-old
              tank can add 5+
              years of service
              life. T&P valve:
              the temperature and
              pressure relief
              valve is a safety
              device that opens
              if tank pressure
              exceeds 150 PSI
              or temperature
              exceeds 210°F —
              a T&P that is dripping
              or has never been
              tested may be stuck;
              T&P valves should
              be replaced every
              3–5 years as a
              preventive measure
              (cost: $15–$30 plus
              labor); a T&P that
              discharges continuously
              indicates excess
              pressure in the
              system (expansion
              tank may be required
              in closed systems
              with a check valve
              on the cold supply).
              Repair vs. replace
              guide: water heaters
              under 8 years old
              with a repairable
              component (thermocouple,
              thermostat, element,
              T&P) are typically
              worth repairing;
              units over 10–12
              years old with
              sediment buildup,
              rust-colored water,
              or evidence of tank
              corrosion are candidates
              for replacement
              regardless of the
              presenting symptom.
              A water heater repair
              website that explains
              what each symptom
              indicates, how to
              distinguish a $30
              thermocouple from
              a replacement situation,
              and how KC's water
              hardness affects
              tank life earns
              the homeowner in
              the middle of a
              no-hot-water morning.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before calling a water heater repair company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pilot won't stay lit — thermocouple test and replacement, when the gas valve itself is the problem",
                  "Runs out of hot water — thermostat vs. element failure on gas and electric, diagnostic approach",
                  "Rumbling and popping — sediment scale from KC hard water, annual flush, when scale indicates replacement",
                  "Anode rod — sacrificial protection, inspection schedule, why softened water depletes it faster",
                  "Repair vs. replace guide — age and symptom combination, when repair is worth it vs. replacement",
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
                What your water heater repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Symptom guide — pilot won't hold, no hot water, rumbling, rust water, T&P discharge — what each indicates",
                  "Thermocouple section — how it works, test procedure, replacement cost, when gas valve is the issue",
                  "Sediment section — KC water hardness, scale buildup, flush procedure, when scale ends tank life",
                  "Anode rod guide — function, inspection interval, softened water effect, replacement cost vs. benefit",
                  "Repair vs. replace decision — age and symptom matrix, when to stop repairing and budget for replacement",
                  "Service form with water heater age, fuel type (gas/electric), symptom description, whether water is softened",
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
                &ldquo;The repair vs. replace
                section eliminated most of
                my awkward conversations.
                Before, I'd arrive at a
                10-year-old unit with sediment
                buildup and a bad thermocouple
                and have to explain on-site
                why I was recommending a
                new heater instead of a
                $30 part. Customers felt
                like I was upselling. After
                the website explained the
                age-and-symptom matrix —
                that scale buildup at 10+
                years means the tank is
                near end-of-life regardless
                of what part is presenting —
                customers arrived already
                understanding the recommendation.
                The anode rod section also
                generated a new revenue stream:
                customers with 5–8 year-old
                units started calling for
                anode rod inspections proactively
                after reading about what
                a depleted rod means for
                tank life.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Adeola, plumbing and water heater service, Raytown, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A water heater repair site with symptom guide,
                repair vs. replace section, and service form starts
                at $200. A full site with thermocouple guide, sediment
                section, and anode rod content is $425–$750. One
                thermostat or element repair covers the cost. No
                contracts, no monthly fees.
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
