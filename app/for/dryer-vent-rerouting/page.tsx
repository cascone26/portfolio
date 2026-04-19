import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Dryer Vent Rerouting Companies in Kansas City",
  description:
    "Custom websites for dryer vent rerouting, dryer vent relocation, and dryer vent exterior termination companies in the Kansas City area. Show your duct length calculation, elbow count limit, and KC code-compliant exterior cap selection to win dryer vent rerouting contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/dryer-vent-rerouting",
  },
};

export default function DryerVentReroutingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Dryer Vent Rerouting Companies in Kansas City",
    description: "Custom websites for dryer vent rerouting and exterior termination companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Dryer Vent Rerouting Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their dryer vent can be rerouted to a shorter exterior path, how many elbows are allowed before the run is too long, and why a vent terminating under the deck or into the crawl space is a code violation and a fire risk. A website that explains dryer vent rerouting earns the relocation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Dryer Vent Rerouting in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Dryer Vent Rerouting</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Dryer vent rerouting
              customers are KC homeowners
              who moved the washer
              and dryer to a new location
              during a laundry room
              remodel and the original
              vent path no longer
              reaches the exterior,
              homeowners who discovered
              that the existing vent
              terminates into an attic,
              crawl space, or garage
              rather than through
              the exterior wall —
              a common finding in
              KC homes built before
              1990 where the builder
              routed the vent to the
              nearest interior space —
              or homeowners whose
              vent run exceeds the
              allowable length and
              the dryer takes two
              cycles to dry a normal
              load. The central education
              is maximum run length
              with elbow deductions,
              prohibited termination
              locations, and duct
              material requirements —
              three things that determine
              whether a rerouted vent
              is code-compliant and
              will not accumulate
              lint into a fire hazard.
              Run length: the International
              Residential Code maximum
              for a dryer vent is
              35 feet of straight
              4-inch rigid metal duct
              from the dryer outlet
              to the exterior cap;
              each 90-degree elbow
              reduces this by 5 feet,
              each 45-degree elbow
              by 2.5 feet; a vent
              with three 90-degree
              elbows has a maximum
              allowable straight run
              of 20 feet; many KC
              home rerouting jobs
              fail at this calculation —
              the homeowner wants
              to run the vent around
              three corners of a finished
              basement to reach a
              side wall, and the elbow
              count reduces the remaining
              straight-run allowance
              below zero; smooth-wall
              rigid metal duct increases
              effective length because
              it has lower friction
              than flexible metallic
              duct — the code allows
              flexible metallic between
              the dryer and the first
              elbow (typically 6 feet
              max) but prohibits flexible
              duct in wall cavities
              and attic spaces. Termination:
              the IRC prohibits dryer
              vent termination into
              any occupied space,
              attic, crawl space,
              or garage; termination
              into the soffit (underside
              of roof overhang) is
              prohibited because lint
              re-enters the attic
              through the soffit vent;
              the correct termination
              is through the exterior
              wall or roof with a
              code-compliant cap that
              has a backdraft damper
              and a minimum 12-inch
              clearance above grade;
              in KC, the vent cap
              must also clear the
              gas meter setback and
              the AC condenser air
              intake — both are clearance
              violations that inspectors
              cite. Duct material:
              the only IRC-compliant
              duct material for in-wall
              and in-ceiling runs
              is 4-inch rigid or semi-rigid
              aluminum — flexible
              vinyl duct (the white
              accordion style frequently
              found in older KC homes)
              is prohibited in concealed
              spaces; it crimps, accumulates
              lint at the corrugations,
              and is combustible; a
              rerouting job that leaves
              vinyl duct in the wall
              cavity is not compliant
              regardless of where
              the exterior cap terminates.
              A dryer vent rerouting
              website that explains
              run length calculation,
              prohibited terminations,
              and why duct material
              matters earns the homeowner
              who wants the job inspected
              and passed.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before dryer vent rerouting
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Run length — 35-foot IRC maximum, 5-foot per 90-degree elbow deduction, how to calculate your run",
                  "Prohibited terminations — attic, crawl space, garage, soffit — why each is a violation",
                  "Exterior cap — backdraft damper requirement, clearance above grade, KC setback from gas meter and AC",
                  "Duct material — rigid vs. semi-rigid aluminum, why vinyl accordion duct fails code in concealed spaces",
                  "Flexible duct limits — 6-foot maximum from dryer to first elbow, no flexible in wall cavities",
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
                What your dryer vent rerouting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Run length section — 35-foot base, elbow deduction table, how to measure your proposed path",
                  "Termination section — prohibited locations list, exterior wall vs. roof, clearance requirements",
                  "Exterior cap guide — backdraft damper, grade clearance, KC-specific gas meter and AC setbacks",
                  "Duct material section — rigid aluminum spec, why vinyl is prohibited, semi-rigid for tight spaces",
                  "Flex duct section — 6-foot limit from dryer, in-wall prohibition, lint accumulation at corrugations",
                  "Quote form with current vent location, proposed path, wall material, elbow count estimate, timeline",
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
                &ldquo;The run length section
                saves me from the jobs
                that can&apos;t be done the
                way the customer imagines.
                I used to drive to an estimate
                in Prairie Village, the
                homeowner has a finished
                basement and wants the
                vent run 40 feet around
                three corners to a back
                wall, and I have to explain
                on-site why it won&apos;t pass
                inspection. After the section
                went up with the elbow
                deduction table, customers
                do the math before they
                call and come to the estimate
                with realistic expectations.
                The prohibited terminations
                section also brought in
                calls I wasn&apos;t getting before —
                homeowners who found out
                during a home inspection
                that their vent terminated
                in the crawl space. That&apos;s
                a real fire risk and a motivated
                customer.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Forsythe, HVAC and duct work, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A dryer vent rerouting site with run length section, termination
                guide, and quote form starts at $200. A full site with duct material
                content, exterior cap selection, and KC code context is $425–$750.
                One dryer vent rerouting job covers the cost.
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
