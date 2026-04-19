import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Hot Water Recirculation Companies in Kansas City",
  description:
    "Custom websites for hot water recirculation, on-demand hot water, and recirculation pump installation companies in the Kansas City area. Show your KC pipe run length calculations, comfort system vs. dedicated return line, and timer vs. sensor control to win recirculation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hot-water-recirculation",
  },
};

export default function HotWaterRecirculationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Hot Water Recirculation Companies in Kansas City",
    description: "Custom websites for hot water recirculation pump installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Hot Water Recirculation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why they wait two minutes for hot water at a bathroom far from the water heater, whether a recirculation pump wastes energy, and what the difference is between a comfort system and a dedicated return line. A website that explains pipe run length and pump control earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Hot Water Recirculation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Hot Water Recirculation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Hot water recirculation
              customers are KC homeowners
              in larger homes —
              typically over two
              thousand square feet —
              where the master
              bathroom or kitchen
              is located far from
              the water heater;
              the hot water pipe
              run from the water
              heater to a distant
              fixture may be forty
              to sixty feet or
              longer; that pipe
              holds a volume of
              water — approximately
              half a gallon per
              thirty feet of
              three-quarter-inch
              pipe — that cools
              to room temperature
              between uses; when
              the homeowner turns
              on the fixture,
              all of that cooled
              water must be purged
              before hot water
              arrives, which
              takes one to two
              minutes and wastes
              both water and
              the homeowner&apos;s
              patience. The central
              education is the
              difference between
              a comfort system
              and a dedicated
              return line: a
              dedicated return
              line recirculation
              system installs
              a separate small-diameter
              pipe from the
              farthest fixture
              back to the water
              heater — the pump
              pushes hot water
              from the heater
              out through the
              supply line and
              back through the
              return line in
              a continuous loop,
              keeping hot water
              ready at all fixtures
              at all times; a
              comfort system
              (also called a
              crossover system)
              uses the cold
              water line as
              the return path —
              a thermostatic
              bypass valve installed
              under the sink
              at the farthest
              point connects
              the hot and cold
              supply lines; when
              the hot water
              cools below a
              threshold (typically
              ninety-five degrees),
              the valve opens
              and the pump pulls
              the cooled water
              back through the
              cold supply line
              to the water heater;
              the comfort system
              does not require
              new piping because
              it uses existing
              cold lines as
              a return, making
              it the retrofit
              option for KC homes
              without a dedicated
              return line. The
              energy concern:
              a continuously
              running recirculation
              pump on a dedicated
              return line circulates
              hot water twenty-four
              hours a day, which
              increases standby
              heat loss from
              the water heater
              and the entire
              pipe loop; modern
              recirculation
              systems address
              this with demand-activated
              control — a push
              button or motion
              sensor at the
              fixture triggers
              the pump only
              when hot water
              is needed, running
              the pump for
              one to two minutes
              until hot water
              reaches the sensor
              under the sink,
              then shutting off;
              timer control
              activates the
              pump only during
              peak use hours
              (morning and evening)
              instead of continuously.
              A KC recirculation
              website that explains
              how pipe volume
              determines wait
              time, why a comfort
              system works without
              new piping, and
              how demand control
              reduces the energy
              penalty earns
              the homeowner
              who wastes water
              every morning
              waiting for their
              shower to warm.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hot water recirculation installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why hot water takes so long — pipe run length, pipe volume calculation, heat loss in uninsulated pipes",
                  "Comfort system vs. dedicated return — no new piping required, bypass valve under sink, cold line as return path",
                  "Demand activation vs. timer vs. continuous — energy use comparison, motion sensor vs. push button options",
                  "Pump sizing — flow rate for recirculation, head pressure for longer runs, pump location at water heater",
                  "Tankless water heater compatibility — why some tankless units require specific recirculation configuration",
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
                What your hot water recirculation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pipe run and wait time section — volume per foot of pipe, typical KC home run length, two-minute wait explained",
                  "Comfort system section — bypass valve, cold line return path, why no new piping is needed for most KC retrofits",
                  "Dedicated return section — when new piping makes sense, whole-house loop, new construction advantage",
                  "Control options section — demand activation, timer control, continuous circulation, energy penalty comparison",
                  "Tankless compatibility section — minimum flow rate, recirculation mode, compatible pump models",
                  "Quote form with home size, water heater location, farthest fixture distance, tankless or tank, control preference",
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
                &ldquo;The comfort system section
                converts every KC homeowner
                who assumed they needed
                new piping. Most two-thousand-plus
                square foot homes have
                a sixty-foot run from
                the water heater to
                the master bath —
                that&apos;s a real wait,
                and homeowners assume
                fixing it means opening
                walls. After the section
                explaining that a comfort
                system uses the existing
                cold line as a return
                with just a bypass valve
                under the sink, the
                first question changed
                from &apos;is this going
                to be a huge project&apos;
                to &apos;can you do it
                in one day.&apos; The demand
                activation section also
                matters — the energy
                concern is real, and
                homeowners don&apos;t
                want to run a pump
                all day to save two
                minutes in the morning.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Bauer, plumbing and recirculation installation, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A hot water recirculation site with comfort system explanation,
                demand activation section, and quote form starts at $200. A full
                site with dedicated return comparison, tankless compatibility guide,
                and control options section is $425–$750. One recirculation
                installation covers the cost. No contracts, no monthly fees.
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
