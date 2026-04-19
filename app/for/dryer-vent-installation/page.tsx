import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Dryer Vent Installation Companies in Kansas City",
  description:
    "Custom websites for dryer vent installation, dryer vent replacement, and dryer vent cleaning companies in the Kansas City area. Show your KC lint accumulation fire risk, rigid metal vs. flexible foil duct material comparison for KC code requirements, and vent run length limits to win dryer vent installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/dryer-vent-installation",
  },
};

export default function DryerVentInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Dryer Vent Installation Companies in Kansas City",
    description: "Custom websites for dryer vent installation and dryer vent replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Dryer Vent Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their dryer vent is safe, whether flexible foil duct is allowed behind the wall, and why their dryer is taking two cycles to dry a load. A website that explains dryer vent installation earns the call from the homeowner whose dryer is hot to the touch and whose laundry room smells like burnt lint. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Dryer Vent Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Dryer Vent Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Dryer vent installation
              customers are KC
              homeowners whose
              dryer is taking
              two or more
              cycles to dry
              a normal load —
              the most common
              symptom of a
              restricted or
              blocked vent
              that is not
              moving exhaust
              air efficiently;
              homeowners whose
              dryer is hot
              on the outside,
              whose laundry
              room is warm
              after a drying
              cycle, or who
              notice a burning
              lint smell —
              all indicators
              that the vent
              is partially
              blocked and
              that the exhaust
              heat is being
              retained in
              the appliance
              or the room;
              or homeowners
              who are remodeling
              a laundry room,
              moving a dryer
              to a different
              wall, or finishing
              a basement and
              need a new
              vent run routed
              to the exterior.
              The central
              education is
              dryer vent
              lint accumulation
              as the primary
              fire risk mechanism,
              the IRC and
              IMC code requirements
              for duct material
              and run length
              that determine
              what is and
              is not compliant,
              and the vent
              run length calculation
              that includes
              each elbow as
              an equivalent
              length deduction —
              three things
              that determine
              whether a homeowner
              understands why
              flexible foil
              duct in the
              wall is not
              just suboptimal
              but code-prohibited.
              Lint accumulation
              fire risk: the
              U.S. Fire Administration
              reports that
              residential clothes
              dryers cause
              approximately
              2,900 fires annually
              — lint is the
              leading factor;
              lint accumulates
              in the duct
              at each elbow,
              at transitions
              from flexible
              to rigid duct,
              and in any
              horizontal run
              where the exhaust
              velocity is
              insufficient
              to carry the
              lint to the
              exterior; a
              vent run with
              multiple elbows
              or excessive
              length reduces
              exhaust velocity
              and allows lint
              to deposit in
              the duct over
              time; annual
              professional
              cleaning is
              recommended
              for runs longer
              than eight feet
              or those with
              more than one
              elbow; a fully
              blocked vent
              causes the
              thermal limiter
              in the dryer
              to trip as
              a fire prevention
              measure —
              the dryer stops
              heating but
              still tumbles,
              which is why
              the symptom
              is a load that
              stays damp.
              Duct material
              code requirements:
              the International
              Residential Code
              and International
              Mechanical Code
              require clothes
              dryer exhaust
              ducts to be
              rigid or semi-rigid
              metal — smooth
              interior, four-inch
              diameter; flexible
              foil duct is
              prohibited in
              concealed locations
              — inside walls,
              floors, or
              ceilings — because
              the corrugated
              interior surface
              traps lint at
              every corrugation
              and because
              the foil material
              can sag and
              kink; flexible
              foil duct is
              only permitted
              for the connector
              section — the
              short run from
              the dryer to
              the wall connection
              — and even
              there should
              be semi-rigid
              aluminum, not
              thin foil.
              Run length calculation:
              the IRC allows
              a maximum dryer
              vent run of
              thirty-five feet
              from the dryer
              outlet to the
              exterior termination;
              each ninety-degree
              elbow deducts
              five feet from
              the allowable
              run; each forty-five
              degree elbow
              deducts two
              point five feet;
              a run with
              three ninety-degree
              elbows has
              an allowable
              run of only
              twenty feet
              — fifteen feet
              deducted for
              elbows; many
              KC homes have
              dryer vent runs
              that exceed
              the allowable
              equivalent length
              because the
              washer and dryer
              are in an interior
              room or a basement
              far from an
              exterior wall.
              A dryer vent
              installation
              website that
              explains lint
              fire risk and
              annual cleaning
              interval, rigid
              metal code
              requirement
              for concealed
              locations, and
              run length calculation
              including elbow
              deduction earns
              the homeowner
              who wants to
              know whether
              their existing
              vent is safe
              and compliant.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before dryer vent installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Lint fire risk — 2,900 dryer fires/year, lint deposit at elbows and low-velocity sections, thermal limiter trip pattern",
                  "Flexible foil prohibition — IRC/IMC concealed location code, corrugated interior lint trap, foil vs. semi-rigid aluminum",
                  "Run length calculation — 35-foot max, 5-foot deduction per 90° elbow, 2.5-foot per 45° elbow, equivalent length total",
                  "Drying performance symptoms — two-cycle loads, hot exterior cabinet, laundry room heat, burnt lint smell",
                  "Cleaning interval — annual for runs over 8 feet or more than one elbow, professional cleaning vs. DIY brush kit",
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
                What your dryer vent installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fire risk section — lint accumulation mechanism, annual fire statistics, thermal limiter failure pattern, cleaning intervals",
                  "Code material section — rigid metal requirement, flexible foil prohibition in concealed locations, semi-rigid connector",
                  "Run length section — 35-foot max, elbow deduction calculation, how to calculate equivalent length for your layout",
                  "Symptom diagnosis section — two-cycle loads, hot cabinet, burnt smell, thermal limiter trip — when cleaning vs. replacement is needed",
                  "Termination section — exterior cap type, bird guard, louvered vs. box cap, no screen requirement for lint blockage prevention",
                  "Quote form with dryer location, distance to exterior wall, number of elbows, current duct material, last cleaning date",
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
                &ldquo;The flexible foil
                section is what
                wins the inspection
                findings. KC homeowners
                who just bought
                an older home
                often have foil
                accordion duct
                run through
                the wall — it
                was common before
                the code tightened.
                After the section
                went up explaining
                that foil in
                a concealed location
                is not just
                a performance
                issue but a
                code violation
                and a fire
                risk, homeowners
                stopped arguing
                about whether
                the existing
                duct needed
                to be replaced.
                The run length
                calculator also
                works well —
                KC homeowners
                with a basement
                laundry room
                in the center
                of the house
                often have runs
                that exceed
                the equivalent
                length limit
                with three or
                four elbows,
                and understanding
                that the current
                run is out
                of compliance
                makes the reroute
                straightforward
                to approve.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Chambers, dryer vent installation and cleaning, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A dryer vent installation site with lint fire risk section, code material
                guide, and quote form starts at $200. A full site with run length
                calculation, flexible foil prohibition, and symptom diagnosis content
                is $425–$750. One dryer vent reroute covers the cost. No contracts,
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
