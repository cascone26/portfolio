import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Basement Finishing Companies in Kansas City",
  description:
    "Custom websites for basement finishing, finished basement, and basement remodeling companies in the Kansas City area. Show your KC egress window IRC requirements for habitable space, moisture control before framing for KC clay hydrostatic pressure, and permit and inspection sequence for KC basement finishing to win basement finishing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/basement-finishing",
  },
};

export default function BasementFinishingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Basement Finishing Companies in Kansas City",
    description: "Custom websites for basement finishing and basement remodeling companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Basement Finishing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their basement needs an egress window before it can be permitted as habitable space, whether they need to waterproof before framing, and what a finished basement adds to resale value. A website that explains basement finishing earns the call from the homeowner with an unfinished basement they want to use as a bedroom or family room and who wants to understand the code and moisture requirements before requesting a bid. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Basement Finishing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Basement Finishing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Basement finishing
              customers are
              KC homeowners
              with an unfinished
              basement they
              want to convert
              into habitable
              living space —
              a bedroom, family
              room, home office,
              or exercise
              room — and who
              want to understand
              the Kansas City
              code requirements
              for egress windows,
              ceiling height,
              and smoke and
              CO detection
              before committing
              to a design;
              homeowners who
              have had water
              in their basement
              and want to
              know whether
              the space can
              be finished
              after moisture
              control work
              and what steps
              must be completed
              before framing;
              or homeowners
              comparing DIY
              finishing versus
              contracted work
              and wanting
              to understand
              what the permit
              and inspection
              sequence requires
              in Kansas City
              and whether
              an unpermitted
              basement finish
              creates problems
              at resale. The
              central education
              is IRC habitable
              space requirements
              as the code
              framework that
              determines
              what a Kansas
              City finished
              basement must
              include — egress
              window opening
              dimensions,
              ceiling height
              minimums, and
              smoke and CO
              detector placement —
              moisture assessment
              and control
              as the prerequisite
              that must be
              completed before
              framing in
              a KC basement
              with clay subgrade
              hydrostatic
              pressure, and
              the Kansas City
              permit process
              that makes
              the finished
              space insurable,
              financeable,
              and appraised
              as conditioned
              square footage —
              three things
              that determine
              whether a homeowner
              understands
              why the permit
              and the egress
              window are
              not optional
              extras. IRC
              habitable space
              requirements:
              the International
              Residential
              Code requires
              that a basement
              room classified
              as habitable
              space — a bedroom,
              family room,
              or office —
              have a minimum
              ceiling height
              of seven feet
              in at least
              one half of
              the room; a
              bedroom requires
              an egress window
              with a minimum
              net clear opening
              of five point
              seven square
              feet, a minimum
              opening height
              of twenty-four
              inches, a minimum
              opening width
              of twenty inches,
              and a maximum
              sill height
              of forty-four
              inches above
              the floor; Kansas
              City and Johnson
              County jurisdictions
              require a building
              permit for
              basement finishing
              that includes
              electrical,
              HVAC, plumbing,
              or framing;
              the permit
              triggers a
              rough-in inspection
              before drywall
              and a final
              inspection before
              occupancy; an
              unpermitted
              basement finish
              is classified
              as unfinished
              or storage
              by the appraiser
              and does not
              contribute
              square footage
              to the home
              value calculation
              at resale.
              Moisture assessment
              and control:
              a KC basement
              slab sits above
              clay soil with
              a plasticity
              index of thirty
              to fifty; in
              a wet spring
              following a
              dry fall, the
              clay rehydrates
              and exerts
              hydrostatic
              pressure against
              the foundation
              wall and slab;
              a basement that
              has experienced
              water intrusion —
              wall seepage,
              floor wetness,
              or sump pump
              activity — requires
              assessment of
              the moisture
              source before
              any framing,
              insulation,
              or drywall
              is installed;
              framing wood
              against a wet
              KC foundation
              wall traps
              moisture behind
              the framing
              and creates
              mold growth
              within twelve
              to twenty-four
              months; the
              correct sequence
              is: assess and
              address moisture
              source, verify
              dry conditions
              through a full
              seasonal cycle,
              install dimple
              mat or closed-cell
              spray foam
              against the
              foundation wall,
              then frame.
              KC homeowners
              who finish
              over a moisture
              problem face
              mold remediation
              and full re-do
              within two
              to three years.
              A basement finishing
              website that
              explains IRC
              egress window
              requirements
              for KC bedroom
              classification,
              moisture assessment
              and dimple mat
              or spray foam
              wall treatment
              before framing,
              and the Kansas
              City permit
              sequence that
              makes the space
              insurable and
              appraised earns
              the homeowner
              who wants to
              understand the
              code and moisture
              requirements
              before requesting
              a finish bid.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before basement finishing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC egress requirements — 5.7 sq ft net clear, 24-inch height, 20-inch width, 44-inch sill, bedroom classification",
                  "Moisture control before framing — KC clay hydrostatic pressure, dimple mat vs. spray foam, dry-season verification",
                  "KC permit process — building permit triggers, rough-in inspection, final inspection, unpermitted finish appraisal impact",
                  "Ceiling height — IRC 7-foot minimum, soffit and duct obstruction planning, drop ceiling vs. drywall trade-off",
                  "HVAC for basement — extend existing supply and return, separate zone option, radon mitigation system accommodation",
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
                What your basement finishing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "IRC requirements section — ceiling height, egress dimensions, smoke/CO detector placement, habitable space definition",
                  "Moisture section — KC clay hydrostatic cycle, assessment before framing, dimple mat vs. spray foam wall treatment",
                  "Permit section — KC/Johnson County process, rough-in and final inspection, appraised value difference with permit",
                  "Egress section — window dimensions, window well requirements, foundation cut process, permit requirement",
                  "Framing and insulation section — wall assembly away from foundation, vapor barrier placement, floor insulation",
                  "Quote form with basement sq ft, ceiling height, current moisture history, egress windows present, desired room types",
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
                &ldquo;The moisture section
                prevents the
                most expensive
                call-back we
                get. KC homeowners
                who want to
                finish their
                basement sometimes
                push back on
                doing any waterproofing
                work first —
                they had one
                wet spring
                two years ago
                and the basement
                has been dry
                since. After
                the section
                went up explaining
                that KC clay
                rehydrates
                in wet years
                and framing
                against a wall
                that has ever
                had moisture
                creates mold
                within two
                years, customers
                stopped arguing
                about the moisture
                step and started
                asking which
                wall treatment
                was right for
                their situation.
                The permit
                section also
                closes a lot
                of objections —
                KC homeowners
                who understand
                that an unpermitted
                basement bedroom
                does not count
                as a bedroom
                in an appraisal
                stop asking
                to skip the
                permit to save
                money.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Ruiz, basement finishing and basement remodeling, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A basement finishing site with KC egress requirements, moisture
                assessment section, and quote form starts at $200. A full site with
                permit process, framing and insulation assembly, and HVAC extension
                content is $425–$750. One finished basement project covers the cost.
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
