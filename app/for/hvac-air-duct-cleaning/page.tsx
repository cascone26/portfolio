import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for HVAC Air Duct Cleaning Companies in Kansas City",
  description:
    "Custom websites for HVAC air duct cleaning, dryer vent cleaning, and air quality companies in the Kansas City area. Show your source removal standard, duct contamination types, and when cleaning is actually warranted to win duct cleaning contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hvac-air-duct-cleaning",
  },
};

export default function HvacAirDuctCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for HVAC Air Duct Cleaning Companies in Kansas City",
    description: "Custom websites for HVAC air duct cleaning and air quality companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for HVAC Air Duct Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether duct cleaning actually improves air quality, what the NADCA source removal standard means, and how to tell if their ducts genuinely need cleaning versus a contractor selling an unnecessary service. A website that explains contamination indicators and the cleaning process earns the legitimate call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Duct Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">HVAC Air Duct Cleaning</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              HVAC air duct cleaning
              customers are homeowners
              who just moved
              into a house
              with unknown duct
              history, are
              dealing with
              visible mold
              growth on supply
              registers, had
              a rodent infestation
              in the home,
              completed a renovation
              that generated
              significant dust,
              or have household
              members with
              allergies or
              asthma and are
              evaluating every
              possible air
              quality improvement.
              The central education
              is what duct
              cleaning can
              and cannot do —
              and the NADCA
              (National Air
              Duct Cleaners
              Association) source
              removal standard:
              NADCA ACR 2021
              defines acceptable
              duct cleaning
              as the removal
              of visible contamination
              from all system
              components including
              supply and return
              plenums, all
              duct branches,
              coil surfaces,
              drain pans, and
              blower compartments —
              not just blowing
              air through
              the main trunk.
              The EPA does
              not recommend
              routine duct
              cleaning for
              dust accumulation
              alone — normal
              dust in ducts
              does not enter
              the airstream
              in significant
              quantity because
              it adheres to
              duct surfaces.
              When cleaning
              is warranted:
              visible mold
              growth inside
              the ductwork
              or on HVAC components;
              ducts infested
              with rodents
              or insects (nesting
              material, droppings,
              carcasses); ducts
              substantially
              clogged with
              debris after
              renovation or
              construction;
              and after flooding
              events where
              ductwork was
              submerged. Equipment
              required for
              legitimate source
              removal: truck-mounted
              or portable negative
              air machine
              (minimum 6,000
              CFM) that places
              the system under
              negative pressure
              so dislodged
              debris is pulled
              to the vacuum
              rather than
              into the living
              space; contact
              vacuum cleaning
              tools for supply
              and return branches;
              rotary brushes
              for heavy debris.
              Flex duct: flexible
              duct with inner
              liner folds
              traps debris
              and is difficult
              to clean without
              damaging the
              liner — if flex
              duct is heavily
              contaminated,
              replacement is
              often better
              than cleaning.
              Duct sealing
              opportunity: during
              cleaning, duct
              leakage at joints
              and connections
              is visible —
              mastic or metallic
              tape sealing
              of leaks found
              during cleaning
              improves system
              efficiency and
              prevents future
              contamination
              entry at the
              leakage point.
              A duct cleaning
              website that
              explains when
              cleaning is
              genuinely warranted,
              what the NADCA
              source removal
              standard requires,
              and why a $99
              special does
              not accomplish
              what a proper
              cleaning does
              earns the homeowner
              who wants honest
              guidance rather
              than a sales
              call.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a duct cleaning company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "When cleaning is warranted — mold, rodents, renovation debris, flooding vs. normal dust accumulation",
                  "NADCA source removal standard — what complete system cleaning includes, not just trunk blowout",
                  "Equipment requirements — negative air machine CFM, contact vacuum tools, why truck mount matters",
                  "Flex duct cleaning limits — inner liner damage risk, when replacement is better than cleaning",
                  "Duct sealing — finding and sealing leaks during cleaning, efficiency improvement, future contamination prevention",
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
                What your duct cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "When to clean section — mold, rodents, renovation, flooding — with what normal dust does and doesn't do",
                  "NADCA standard explainer — full system component list, negative pressure requirement, contact cleaning tools",
                  "Equipment section — negative air machine spec, why low-bid companies skip contact cleaning tools",
                  "Flex duct section — liner damage risk, cleaning vs. replacement decision, how to identify problematic flex",
                  "Duct sealing add-on — mastic vs. metallic tape, leakage cost, combining sealing with cleaning visit",
                  "Quote form with home age, recent renovation or infestation, visible mold or odor issues, flex or rigid duct",
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
                &ldquo;The hardest thing about
                this industry is that $99
                specials have trained customers
                to think duct cleaning is
                cheap and all the same.
                The website section on what
                the NADCA source removal
                standard actually requires
                — the negative air machine,
                every branch, every component —
                changed the kind of customers
                who called. The ones who
                read it arrived understanding
                why a legitimate cleaning
                costs what it costs. The
                section on when cleaning
                is not even warranted also
                built trust — customers
                appreciated that I was honest
                about what dust alone does
                not require.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Koonce, HVAC duct cleaning, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A duct cleaning site with when-to-clean guide,
                NADCA standard explainer, and quote form starts
                at $200. A full site with equipment section,
                flex duct guide, and duct sealing content is
                $425–$750. One full system cleaning covers the
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
