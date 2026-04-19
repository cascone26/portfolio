import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Irrigation System Installation Companies in Kansas City",
  description:
    "Custom websites for sprinkler system, drip irrigation, and lawn irrigation companies in the Kansas City area. Show your zone design, smart controller options, and KC watering schedules to win residential irrigation installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/irrigation-system-installation",
  },
};

export default function IrrigationSystemInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Irrigation System Installation Companies in Kansas City",
    description: "Custom websites for irrigation system installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Irrigation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners considering a sprinkler system want to know how zones work, what a smart controller actually saves on the water bill, and whether their lawn can be properly covered given the water pressure available. A website that explains the design process and shows real system layouts earns the estimate call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Irrigation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Irrigation System Installation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Irrigation installation customers
              are homeowners tired of
              dragging hoses or running
              oscillating sprinklers
              who want a permanent,
              automated solution that
              keeps the lawn and
              landscape watered efficiently
              without constant attention.
              The zone design concept
              is the first education:
              a residential lawn is
              divided into zones based
              on water pressure and
              flow rate — each zone
              runs independently and
              covers a section of
              lawn where the total
              gallons-per-minute demand
              of all heads stays
              within the available
              flow. Rotary heads
              (for large turf areas),
              fixed spray heads (for
              small areas and tight
              coverage), and drip
              zones (for landscape
              beds, shrubs, and
              trees) serve different
              purposes and should
              not be mixed in the
              same zone. Smart
              controllers (Rachio,
              Rain Bird, Hunter)
              connect to local
              weather data and
              skip watering when
              rain is forecast or
              soil moisture is adequate —
              customers who have
              heard about smart
              controllers need
              to understand that
              the water savings
              are real: studies
              consistently show
              20-50% reduction
              in irrigation water
              use compared to
              timer-only controllers.
              Backflow preventer
              installation is
              required by KC
              code — the vacuum
              breaker or reduced-pressure
              backflow assembly
              prevents irrigation
              water from contaminating
              the potable water
              supply. Winterization
              (blowing out all
              water from lines
              before freeze) is
              an annual service
              in KC that the
              same company typically
              handles. A irrigation
              installation website
              that explains zone
              design, smart controller
              savings, and the
              spring activation /
              fall winterization
              service cycle earns
              the homeowner who
              is ready to stop
              managing watering
              manually.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing an irrigation system
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Zone design — how zones work, what determines zone count, rotary vs. spray vs. drip head types",
                  "Smart controllers — Rachio vs. Rain Bird vs. Hunter, how weather-based watering saves water and money",
                  "Backflow preventer — KC code requirement, what it does, why it is necessary for potable water safety",
                  "Winterization — how the system is blown out before freeze, annual service cost, what happens if skipped",
                  "Water pressure — how available GPM determines how many heads per zone, what low pressure means for design",
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
                What your irrigation installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Zone design explained — how we map a property, head types, zone count, what full coverage looks like",
                  "Smart controller guide — Rachio and Rain Bird options, weather integration, estimated water savings",
                  "Head type comparison — rotary, fixed spray, and drip — what each is used for, why mixing zones is a mistake",
                  "Backflow preventer — KC code requirement explained, installation included in every new system",
                  "Annual services — spring startup, summer check, fall winterization — service plan and pricing",
                  "Quote form with property size, lawn and bed areas, water source, existing system, smart controller interest",
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
                &ldquo;Irrigation customers want
                to understand what they are
                getting before they commit —
                zones, heads, controller,
                backflow, winterization.
                Without a website I was
                explaining the whole system
                on every first call.
                The site with our zone
                design explanation, the
                smart controller comparison,
                and our annual service
                plan meant customers arrived
                to estimates already
                knowing the full picture.
                We started selling more
                Rachio upgrades on new
                installs because customers
                came in already sold
                on the water savings.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Hendricks, irrigation specialist, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An irrigation site with zone design
                guide, smart controller options, and
                quote form starts at $225. A full
                site with head type comparison,
                backflow section, and annual service
                plan is $425–$850. One new system
                installation covers the cost.
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
