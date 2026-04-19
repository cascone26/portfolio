import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Water Heater Replacement Companies in Kansas City",
  description:
    "Custom websites for water heater replacement, tankless water heater installation, and water heater repair companies in the Kansas City area. Show your tank vs. tankless comparison, energy factor ratings, and same-day service to win water heater contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hot-water-heater-replacement",
  },
};

export default function HotWaterHeaterReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Water Heater Replacement Companies in Kansas City",
    description: "Custom websites for water heater replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Water Heater Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners replacing a water heater need to decide between tank and tankless quickly — often because theirs is leaking or dead. A website that explains the decision clearly, shows energy savings, and makes same-day scheduling easy earns the call before they call a competitor. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Water Heaters in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Water Heater Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Water heater replacement customers
              are homeowners who woke
              up to cold water,
              noticed a puddle around
              their tank, or got
              a heads-up from a
              plumber that a unit
              near or past its
              8–12 year lifespan
              is showing early
              failure signs (rust-colored
              water, popping sounds
              from sediment buildup,
              reduced recovery rate).
              The decision between
              tank and tankless
              is the central question:
              a conventional tank
              water heater (gas
              or electric, 40–80
              gallon) is lower
              upfront cost ($800–$1,500
              installed), simpler
              to replace same-day,
              and familiar — but
              standby heat loss
              means it heats water
              continuously even
              when not in use.
              A tankless water
              heater (condensing
              gas: Navien, Rinnai,
              Noritz; electric:
              Stiebel Eltron, Rheem)
              heats water only
              on demand — 24–34%
              more efficient for
              homes that use under
              41 gallons per day,
              15–14% for higher
              usage. They require
              a larger gas line
              in most cases (3/4"
              vs. 1/2"), adequate
              venting (direct vent
              through the wall
              or power vent), and
              a dedicated circuit
              for the control
              electronics. The
              upfront cost is
              higher ($1,800–$3,500
              installed) but the
              unit lasts 20+ years
              vs. 10–12 for tank.
              Hard water (very
              common in KC) is
              the primary cause
              of premature tankless
              failure — a scale
              filter or water
              softener extends
              tankless unit life
              significantly. Heat
              pump water heaters
              (hybrid electric)
              are the most efficient
              option for homes
              with existing 240V
              service in a space
              with ambient air —
              they qualify for
              federal tax credits.
              A water heater website
              that explains the
              tank vs. tankless
              decision, addresses
              KC hard water, and
              makes same-day scheduling
              obvious earns the
              homeowner in cold-shower
              mode.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research when replacing a water heater
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Tank vs. tankless — efficiency comparison, upfront vs. lifetime cost, lifespan difference",
                  "Tankless requirements — gas line sizing, venting type, whether their home is tankless-ready",
                  "KC hard water — how mineral buildup affects tankless units, whether a filter or softener is needed",
                  "Heat pump water heater — what a hybrid electric unit is, tax credit eligibility, where it works",
                  "Same-day availability — whether they can get hot water back today without waiting for a special order",
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
                What your water heater website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Tank vs. tankless guide — efficiency, cost, lifespan, requirements — helping homeowners choose quickly",
                  "Tankless brands — Navien, Rinnai, Noritz — what we install, efficiency ratings, warranty terms",
                  "KC hard water section — how it affects tankless units, what scale filter or softener prevents",
                  "Heat pump water heater — what it is, federal tax credit, where it is and is not a good fit",
                  "Same-day service — which units we stock, how fast emergency replacement works in KC",
                  "Request form with current unit type, age, problem description, fuel type, urgency, timeline",
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
                &ldquo;Water heater customers are
                usually in emergency mode —
                they do not have time
                to read a long explanation.
                But the website still
                helped because the
                tank versus tankless
                comparison was right
                there when they searched
                at 6am with no hot
                water. They landed on
                the page, picked tank
                or tankless in two
                minutes, called me,
                and we booked the
                same-day job. The
                KC hard water section
                also converted several
                customers to a tankless
                plus filter package
                they would not have
                considered if they
                had not read about
                scale buildup before
                calling.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Reyes, plumber and water heater specialist, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A water heater site with tank vs.
                tankless guide, same-day service
                section, and request form starts at
                $200. A full site with brand comparison,
                KC hard water section, and heat pump
                guide is $425–$750. One tankless
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
