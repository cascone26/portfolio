import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Outdoor Fire Pit Installation Companies in Kansas City",
  description:
    "Custom websites for outdoor fire pit installation, gas fire pit, wood-burning fire pit, and fire feature companies in the Kansas City area. Show your KC permit requirements, gas line sizing, and clearance rules to win fire pit installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/outdoor-fire-pit-installation",
  },
};

export default function OutdoorFirePitInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Outdoor Fire Pit Installation Companies in Kansas City",
    description: "Custom websites for outdoor fire pit and gas fire feature installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Outdoor Fire Pit Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a gas fire pit requires a permit in KC, how far it needs to be from the house and fence, and whether their existing gas line can supply it. A website that explains the installation requirements earns the fire pit call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Outdoor Fire Pit Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Outdoor Fire Pit Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Outdoor fire pit installation
              customers are KC homeowners
              who want a gathering
              point in the backyard
              that works in the
              spring and fall
              when KC evenings
              are cool but not
              cold, homeowners
              upgrading from
              a portable fire
              ring to a permanent
              built-in feature,
              or homeowners completing
              an outdoor kitchen
              or patio project
              with a fire element.
              The central education
              is the difference
              between gas and
              wood-burning, the
              code requirements
              that differ by
              fuel type, and
              what the gas supply
              side actually involves.
              Gas vs. wood-burning:
              gas fire pits (natural
              gas or propane)
              use a burner ring
              (round, linear,
              or H-burner) with
              fire glass or
              lava rock media —
              they light with
              a push-button igniter,
              have no ash or
              ember, and can
              be turned off instantly;
              wood-burning fire
              pits produce more
              radiant heat and
              the wood smoke
              experience many
              homeowners want,
              but require ash
              management and
              many KC suburbs
              restrict or seasonally
              ban open burning —
              check the local
              ordinance before
              specifying wood-burning.
              Clearance requirements:
              gas fire pits:
              most manufacturers
              specify 10 feet
              from combustible
              structures (wood
              fences, overhangs,
              siding) and 3 feet
              from non-combustible
              surfaces (concrete,
              brick); the Kansas
              City MO fire code
              requires 15 feet
              from structures
              for open-flame
              outdoor appliances
              in residential
              areas; wood-burning:
              25 feet from structures
              is the typical
              local code requirement;
              overhead clearance:
              30 feet clear
              above a wood fire,
              10 feet above a
              gas fire feature.
              Gas line sizing:
              a gas fire pit
              burner typically
              requires 60,000–100,000
              BTU/hr; an existing
              3/4-inch black
              iron gas line at
              the house may not
              have the capacity
              to run a fire pit
              plus other appliances
              simultaneously —
              a licensed plumber
              must size the branch
              line and verify
              meter capacity;
              the branch line
              from the house
              to the pit is typically
              3/4-inch corrugated
              stainless steel
              (CSST, TracPipe,
              CounterStrike) or
              black iron — CSST
              must be bonded
              to the grounding
              system; the line
              terminates at a
              manual shutoff
              valve within 6
              feet of the burner
              before the flexible
              connector; propane
              alternative: a
              dedicated 20–40
              lb tank can supply
              a fire pit without
              running a gas line,
              but requires a
              tank enclosure
              (stone or metal
              cabinet) that meets
              1-hour fire rating
              and allows ventilation.
              Foundation requirements:
              a built-in gas
              fire pit sits on
              a concrete or stone
              pad — concrete
              block or natural
              stone surround
              with a steel fire
              bowl insert is
              the most common
              residential approach;
              the burner pan
              must drain or
              have weep holes
              for rainwater —
              standing water
              in a burner causes
              corrosion; tempered
              glass wind guards
              require a structural
              lip or channel
              around the pit
              opening.
              A fire pit website
              that explains gas
              vs. wood burning
              code rules, what
              clearances apply
              in KC suburbs,
              and what the gas
              line side of the
              project requires
              earns the homeowner
              who wants to do
              it right and pass
              inspection the
              first time.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before outdoor fire pit installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Gas vs. wood-burning — KC open burning ordinances, BTU output, ash management vs. instant-off convenience",
                  "Clearance requirements — distance from combustible structures, KC fire code, overhead clearance by fuel type",
                  "Gas line sizing — BTU load, 3/4-inch capacity, licensed plumber requirement, CSST bonding",
                  "Propane alternative — tank sizing, tank enclosure fire rating and ventilation, flexible connector requirements",
                  "Foundation and drainage — concrete or stone pad, burner pan weep holes, wind guard structural requirement",
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
                What your fire pit installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fuel type section — gas vs. wood burning, KC suburb open burning rules, pros and cons by use case",
                  "Clearance guide — KC fire code distances, combustible vs. non-combustible surfaces, overhead clearance",
                  "Gas line section — BTU load, branch line sizing, CSST vs. black iron, manual shutoff valve placement",
                  "Propane section — tank sizing, enclosure fire rating, ventilation requirements, flexible connector specs",
                  "Foundation section — pad material, burner pan drainage, wind guard structural mounting",
                  "Quote form with patio dimensions, fuel preference, existing gas line yes/no, desired burner shape",
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
                &ldquo;The clearance section saved
                two jobs from being rejected
                at permit inspection. Customers
                had planned their fire pit
                in a corner of the patio that
                was 8 feet from a wood fence —
                they read the section, moved
                the location, and the permits
                went through clean. The gas
                line sizing section changed
                the conversation with homeowners
                who thought they could just
                connect to the outdoor grill
                line — they understood why
                that line wasn&apos;t sized for
                a 100,000 BTU burner before
                I arrived. No surprises at
                the job site. The propane
                section also opened up jobs
                I would have otherwise passed
                on — customers with no gas
                to the back yard who didn&apos;t
                know an enclosed tank was
                an option.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Thornton, outdoor living and fire feature installation, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A fire pit site with fuel type section, clearance guide,
                and quote form starts at $200. A full site with gas
                line sizing, propane alternative, and foundation content
                is $425–$750. One fire pit installation covers the cost.
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
