import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Well Pump Replacement Companies in Kansas City",
  description:
    "Custom websites for well pump replacement, submersible pump installation, and water well service companies in the Kansas City area. Show your pump sizing, pressure tank interaction, and signs of pump failure to win well pump contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/well-pump-replacement",
  },
};

export default function WellPumpReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Well Pump Replacement Companies in Kansas City",
    description: "Custom websites for well pump replacement and water well service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Well Pump Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the pump or the pressure tank is causing low water pressure, what the signs of a failing submersible pump are, and what the cost difference is between replacing the pump vs. the full system. A website that explains the pump-tank relationship earns the diagnostic call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Well Pumps in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Well Pump Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Well pump customers
              are homeowners who
              have lost water
              pressure, have
              no water at all,
              hear the pump
              cycling rapidly
              (short cycling),
              or noticed air
              spitting from
              the faucets. The
              central education
              is the pump-pressure
              tank relationship:
              a submersible pump
              (Franklin Electric,
              Goulds, Grundfos —
              4" diameter typical
              for residential
              wells) pushes water
              up from the well
              to a pressure tank
              in the basement
              or utility room.
              The pressure tank
              contains an air
              bladder pre-charged
              to 2 PSI below
              the pump cut-in
              pressure (typically
              28 PSI for a 30/50
              system) — the
              bladder stores
              pressurized water
              so the pump does
              not cycle every
              time a faucet
              opens. When the
              bladder fails
              (waterlogged tank),
              the pump short
              cycles — turning
              on and off every
              few seconds —
              which burns the
              motor windings
              within weeks to
              months. Short
              cycling symptom
              diagnosis: if
              the pressure gauge
              swings from 30
              to 50 and back
              in under 30 seconds
              while running
              a faucet, the
              tank bladder is
              likely failed —
              this is a $300–$600
              pressure tank
              replacement rather
              than a $1,500+
              pump pull. Pump
              failure signs:
              slow pressure
              drop across the
              system when running
              multiple fixtures,
              no pressure buildup
              despite the pump
              running, or brown
              sediment (scale
              and sand in the
              pump intake) —
              these indicate
              the pump impellers
              or motor have
              failed. Pump sizing:
              GPM rating must
              match the well
              yield — over-pumping
              a low-yield well
              with an oversized
              pump draws air
              and runs dry.
              Pump depth and
              drop pipe length
              determine what
              horsepower is
              needed (0.5 HP
              for wells under
              100 ft, 1–1.5 HP
              for 150–300 ft).
              Wire sizing: 10
              AWG minimum for
              1 HP submersible
              at typical residential
              depths, direct
              burial wire from
              the pump controller
              to the wellhead.
              A well pump website
              that explains
              the tank vs. pump
              diagnostic, short
              cycling as a tank
              symptom, and what
              the pump pull
              actually involves
              earns the homeowner
              with no water
              at midnight who
              searches before
              calling.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before replacing a well pump
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pump vs. pressure tank — how to tell which is failing, short cycling as a tank symptom not a pump symptom",
                  "Submersible pump lifespan — what causes early failure, sediment and dry-running damage",
                  "Pump sizing — GPM, well yield, and depth relationship, how over-sizing damages the well",
                  "Pump pull process — what pulling a submersible pump involves, why it requires a truck and crane for deep wells",
                  "Emergency service — what no water means vs. low pressure means, what can wait vs. what cannot",
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
                What your well pump website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pump-tank relationship section — how the system works together, what each component does",
                  "Diagnostic guide — short cycling = tank, slow pressure drop = pump, no water = pump or well",
                  "Pressure tank section — waterlogged tank signs, replacement cost, bladder pre-charge requirement",
                  "Pump sizing guide — GPM and depth relationship, what we measure before selecting replacement pump",
                  "Pump pull process — what the service involves, wire and pipe replacement during pull",
                  "Service form with well depth if known, pump age, symptoms, pressure gauge behavior",
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
                &ldquo;The most expensive misdiagnosis
                in my trade is homeowners
                who pull the pump when
                the pressure tank is the
                problem. The website explaining
                short cycling as a tank
                symptom not a pump symptom
                changed my calls — customers
                who would have asked for
                a full pump pull instead
                called with the specific
                symptom and I could diagnose
                over the phone before driving
                out. I also stopped having
                the conversation where
                I had to explain why a
                tank replacement is $400
                and a pump pull is $1,500 —
                the website explained both
                and customers arrived already
                knowing why the numbers
                were different.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Hollis, well pump service, Grain Valley, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A well pump site with pump-tank explanation,
                diagnostic guide, and service form starts
                at $200. A full site with pressure tank
                section, pump sizing guide, and pull
                process walkthrough is $425–$750. One
                pump replacement covers the cost. No
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
