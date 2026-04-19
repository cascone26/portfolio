import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Stair Railing Installation Companies in Kansas City",
  description:
    "Custom websites for interior stair railing installation, stair baluster replacement, and staircase handrail companies in the Kansas City area. Show your IRC R311.7.8 handrail height requirements, baluster spacing code for KC stair permits, and wood vs. metal railing options for KC homes to win stair railing installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/interior-stair-railing-installation",
  },
};

export default function InteriorStairRailingInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Stair Railing Installation Companies in Kansas City",
    description: "Custom websites for interior stair railing installation and baluster replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Stair Railing Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their existing railing meets KC building code, what baluster spacing is required, and whether they need a permit to replace a railing. A website that explains the code requirements earns the call from the KC homeowner updating an original nineteen-seventies wrought iron railing. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Stair Railing Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Stair Railing Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Interior stair railing
              installation customers
              are KC homeowners
              whose existing
              railing is original
              to a home built
              in the nineteen-sixties,
              nineteen-seventies,
              or nineteen-eighties —
              wrought iron balusters
              with spacing wider
              than four inches
              that does not meet
              current IRC Section
              R311.7.8 baluster
              spacing requirements,
              or a wood railing
              with loose newel
              posts and split
              balusters that
              wiggle; homeowners
              finishing a basement
              stairway who need
              a railing installed
              to pass the KC
              building permit
              inspection; homeowners
              who want to update
              from traditional
              wrought iron to
              open cable railing,
              horizontal metal,
              or painted wood
              for a contemporary
              look; or homeowners
              who are selling
              a KC home and
              received an inspection
              report identifying
              the stair railing
              as a deficiency
              because baluster
              spacing exceeds
              four inches or
              the handrail height
              is outside the
              code range. The
              central education
              is IRC stair railing
              code as the compliance
              framework that
              determines what
              a railing must
              achieve —
              IRC Section R311.7.8
              requires handrails
              on at least one
              side of a stairway
              with four or more
              risers; the handrail
              must be between
              thirty-four and
              thirty-eight inches
              above the stair
              nosing measured
              vertically; baluster
              spacing must not
              allow passage
              of a four-inch
              sphere — a four-inch
              maximum clear
              opening between
              balusters; guard
              height on open
              sides of stairways
              or landings more
              than thirty inches
              above the floor
              must be at least
              thirty-six inches;
              a railing that
              does not meet
              these dimensions
              does not pass
              KC building inspection
              on a new permit
              and will appear
              in a home sale
              inspection report
              as a code deficiency;
              graspability as
              the functional
              requirement —
              a handrail must
              be graspable:
              circular cross-sections
              between one and
              one-quarter and
              two inches in
              diameter, or
              non-circular cross-sections
              with a perimeter
              of four to six
              and one-quarter
              inches; wide
              decorative top
              rails do not
              qualify as graspable
              handrails and
              must have a
              separate continuous
              graspable rail
              below. KC stair
              railing material
              options: painted
              wood box newel
              posts with square
              tapered balusters
              are the traditional
              KC colonial and
              craftsman match;
              wrought iron
              balusters with
              a wood handrail
              remain common
              in KC colonial
              and ranch homes
              built between
              nineteen-fifty
              and nineteen-eighty;
              horizontal cable
              railing with
              steel posts requires
              cable tensioning
              hardware and
              a cable spacing
              check — horizontal
              cable must not
              form a climbing
              surface in applications
              with children
              under five; steel
              box tube and
              flat bar horizontal
              railing provides
              a contemporary
              look without
              the ladder concern;
              a newel post
              must be structurally
              anchored to the
              framing below
              the floor —
              a newel that
              is simply screwed
              to the tread
              or stringer will
              fail the wobble
              test that code
              inspectors apply.
              A stair railing
              installation
              website that
              explains IRC
              handrail height
              and baluster
              spacing requirements,
              graspability
              as the functional
              code standard,
              and the structural
              anchoring requirement
              for newel posts
              earns the KC
              homeowner who
              needs a new
              railing that
              passes inspection
              and wants to
              understand what
              compliant looks
              like.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before stair railing installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "IRC R311.7.8 code — 34–38 in handrail height, 4-in max baluster spacing, 36-in guard height at 30-in drop",
                  "Graspability requirement — 1.25–2 in circular diameter or 4–6.25 in perimeter, wide decorative rails fail",
                  "Newel post anchoring — structural connection to framing required, wobble test, surface-mount failure",
                  "Permit requirement — when railing replacement requires KC building permit and inspection",
                  "Material options — painted wood, wrought iron, cable, horizontal steel — code compliance check for each",
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
                What your stair railing installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "IRC code section — handrail height range, baluster spacing rule, guard height, graspability standards",
                  "Newel post section — structural anchoring to framing, bolt-through vs. surface mount, KC inspection test",
                  "Material section — wood, iron, cable, horizontal steel — style options with code compliance notes for each",
                  "Permit section — when KC building permit is required for railing replacement or new installation",
                  "Home sale section — railing deficiencies in KC inspection reports, what needs to change to pass",
                  "Quote form with stair count, existing railing type, permit needed, style preference, home age",
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
                &ldquo;The baluster spacing
                section eliminates
                the &apos;it looks
                fine&apos; argument.
                KC homeowners
                who call about
                a railing that
                failed an inspection
                report often
                insist the spacing
                is only a little
                over four inches —
                they don&apos;t
                understand why
                it matters or
                that the four-inch
                sphere rule is
                a non-negotiable
                code dimension.
                After the section
                went up explaining
                the reason behind
                the dimension
                and what the
                inspection will
                check, customers
                stopped trying
                to negotiate
                around it. The
                newel post anchoring
                section also
                helps — KC homes
                from the seventies
                have newel posts
                that are surface-mounted
                with a few screws
                and wiggle noticeably,
                and the section
                explaining why
                a loose newel
                fails the structural
                requirement gets
                customers to
                approve the
                full correct
                installation.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Merritt, stair railing installation and carpentry, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A stair railing installation site with IRC code section, material
                options, and quote form starts at $200. A full site with newel
                post anchoring, permit guide, and home sale inspection content
                is $425–$750. One railing installation covers the cost. No contracts, no monthly fees.
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
