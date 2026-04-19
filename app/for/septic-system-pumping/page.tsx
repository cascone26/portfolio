import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Septic System Pumping Companies in Kansas City",
  description:
    "Custom websites for septic system pumping, septic tank maintenance, and drain field service companies in the Kansas City area. Show your pumping intervals, tank capacity, and warning signs to win septic contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/septic-system-pumping",
  },
};

export default function SepticSystemPumpingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Septic System Pumping Companies in Kansas City",
    description: "Custom websites for septic system pumping and maintenance companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Septic Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how often a septic tank needs pumping, what the signs of a failing drain field are, and what happens if they wait too long. A website that explains the tank-drain field relationship earns the pumping call before the emergency. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Septic in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Septic System Pumping</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Septic pumping customers
              are homeowners on
              rural or semi-rural
              properties who
              have never pumped
              their tank, noticed
              slow drains across
              multiple fixtures,
              detected sewage
              odor in the yard
              or house, or observed
              wet or unusually
              green patches over
              the drain field
              area. The central
              education is how
              the two-stage system
              works: wastewater
              flows from the
              house into a septic
              tank (typically
              1,000–1,500 gallons
              for a 3-bedroom
              home) where solids
              settle to the bottom
              as sludge and grease
              floats to the top
              as scum — the
              clarified effluent
              in the middle zone
              flows out to the
              drain field (leach
              field), where it
              percolates through
              aggregate and soil
              for final treatment.
              Pumping removes
              accumulated sludge
              and scum — the
              standard interval
              is every 3–5 years
              for a 1,000-gallon
              tank serving 4
              people, but the
              actual interval
              depends on tank
              size and household
              size: a 1,500-gallon
              tank with 2 occupants
              may go 7–10 years;
              a 1,000-gallon tank
              with 6 occupants
              may need annual
              service. When sludge
              accumulates to
              more than 1/3 of
              tank volume, solids
              begin flowing to
              the drain field —
              once biomat (a
              clogging layer
              of organic material)
              forms in the drain
              field pipes and
              aggregate, the
              field begins to
              fail. Drain field
              failure signs:
              sewage surfacing
              over the field,
              slow drains in
              the house, sewage
              odor near the
              field, or bright
              green grass over
              the field lines
              in dry weather.
              Drain field restoration
              is possible in
              early failure stages
              (Aero-Stream, Bio-Dyne
              treatment, or resting
              the field by redirecting
              flow) but late-stage
              failure requires
              field replacement
              ($10,000–$25,000
              depending on soil
              and site). A septic
              website that explains
              the tank-to-field
              flow, when sludge
              levels cause field
              damage, and the
              cost difference
              between timely
              pumping and drain
              field replacement
              earns the homeowner
              who has never
              pumped and does
              not know why it
              matters.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before pumping their septic tank
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pumping intervals — tank size and household size relationship, why 3–5 years is an average not a rule",
                  "How the system works — tank settling zones, effluent flow to drain field, what pumping removes",
                  "Drain field warning signs — surfacing sewage, slow drains, odor, green grass over field lines",
                  "What causes field failure — biomat formation, sludge overflow, what recovery looks like vs. replacement",
                  "What to avoid — garbage disposals, grease, non-degradable wipes, chemicals that kill tank bacteria",
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
                What your septic pumping website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "System overview — tank settling zones, effluent to drain field, what the pump truck removes",
                  "Pumping interval guide — tank size and occupant count table, what accelerates sludge buildup",
                  "Drain field section — how it works, early vs. late failure signs, restoration vs. replacement costs",
                  "What to avoid — garbage disposal impact, grease, antibacterial products, wipes",
                  "Inspection during pumping — what we check at the outlet baffle, distribution box, and field access",
                  "Service form with tank size if known, last pump date, household size, symptoms observed",
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
                &ldquo;My biggest problem was
                customers calling after
                the drain field was already
                showing signs of failure —
                too late for a simple pump.
                The website section explaining
                that sludge overflow causes
                biomat and field damage
                changed when people called
                me. Customers started scheduling
                routine pumping instead
                of waiting for an emergency,
                and I stopped having to
                quote $18,000 drain field
                replacements to people
                who could have avoided
                it with a $350 pump four
                years earlier.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Harmon, septic service, Peculiar, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A septic site with system overview,
                pumping interval guide, and service
                form starts at $200. A full site with
                drain field section, what to avoid guide,
                and inspection walkthrough is $425–$750.
                One drain field call covers the cost.
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
