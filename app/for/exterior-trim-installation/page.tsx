import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Exterior Trim Installation Companies in Kansas City",
  description:
    "Custom websites for exterior trim installation, fascia board, rake board, and corner board companies in the Kansas City area. Show your nail spacing for KC wind, composite vs. wood material selection, and moisture barrier process to win exterior trim contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/exterior-trim-installation",
  },
};

export default function ExteriorTrimInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Exterior Trim Installation Companies in Kansas City",
    description: "Custom websites for exterior trim installation, fascia board, and corner board companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Exterior Trim Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether rotted fascia boards have to be replaced before new gutters go on, what composite trim is and whether it holds up better than wood in KC weather, and how corner boards are joined at the roofline. A website that explains exterior trim earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Exterior Trim Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Exterior Trim Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Exterior trim installation
              customers are KC homeowners
              replacing rotted fascia
              boards before new gutters
              are hung, homeowners
              doing a full re-siding
              and needing new corner
              boards and rake boards
              installed as part of
              the siding package,
              or homeowners painting
              the exterior and finding
              that the wood trim
              is too far gone to
              paint over without
              replacement. The central
              education is fascia
              board installation,
              material selection
              between wood and composite,
              and nail spacing for
              KC wind load — three
              things that determine
              whether exterior trim
              lasts 5 years or
              25 years in KC&apos;s
              weather cycle.
              Fascia board: the
              fascia is the horizontal
              trim board that caps
              the rafter tails
              at the eave —
              gutters mount to
              it; standard fascia
              in KC residential
              construction is
              1x6 or 1x8 pine,
              which rots from
              behind when gutters
              are clogged and
              water backs up
              between the gutter
              and the fascia face;
              fascia replacement
              requires removing
              the gutters, pulling
              the old fascia,
              checking the rafter
              tails for rot (if
              the rafter tails
              are rotted the
              scope expands significantly),
              installing new fascia
              with the face flush
              to the rafter tail
              ends, and re-mounting
              the gutters; in
              KC homes where
              fascia boards are
              over-wide relative
              to the rafter depth,
              a sub-fascia (structural
              backing board) is
              installed first
              and the finish
              fascia covers it;
              PVC composite fascia
              does not rot and
              does not require
              paint — it is the
              preferred material
              for replacement
              in KC where gutter
              clog risk is high
              from spring tree
              debris. Rake boards:
              the rake board
              is the trim that
              runs along the
              sloped gable end
              of the roof following
              the pitch; it covers
              the gable end framing
              and returns to
              the fascia at the
              eave; rake boards
              in KC take the
              most weather exposure
              of any exterior
              trim — south and
              west faces receive
              KC&apos;s prevailing storm
              wind and rain; composite
              or cellular PVC
              rake boards outlast
              wood by 10+ years
              on south-facing
              gable ends. Corner
              boards and material:
              corner boards are
              the vertical trim
              pieces at the building
              corners where siding
              terminates — they
              provide a clean
              edge return and
              hide the siding
              butt ends; 5/4x4
              fiber cement corner
              boards (James Hardie,
              LP SmartSide) are
              the standard in
              KC new construction
              and re-siding projects
              because they do
              not absorb moisture,
              do not rot, and
              hold paint through
              KC&apos;s freeze-thaw
              cycles; wood corner
              boards primed and
              painted will last
              7–12 years in KC
              if paint is maintained;
              unpainted or poorly
              primed wood corner
              boards fail in
              3–5 years at the
              bottom where they
              are closest to
              grade splash; all
              exterior trim bottom
              ends must be back-primed
              (primer on the
              cut end) before
              installation — this
              is the single most
              important step
              for wood trim longevity.
              A exterior trim
              website that explains
              why fascia fails
              from behind not
              the front, what
              composite trim
              is and how it
              differs from wood,
              and how corner
              boards are back-primed
              earns the homeowner
              who wants trim
              that does not
              rot out in five
              years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before exterior trim installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fascia board failure — rot from behind cause, gutter clog connection, rafter tail rot check, sub-fascia requirement",
                  "Material selection — PVC composite vs. wood, fiber cement corner boards, paint requirement comparison",
                  "Rake board exposure — gable end weather exposure, KC prevailing storm direction, south vs. north face difference",
                  "Back-priming — cut end seal requirement, how skip-priming causes rot, wood vs. composite painting difference",
                  "Nail spacing — wind load requirement, ring shank vs. smooth shank, stainless vs. galvanized for composite",
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
                What your exterior trim installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fascia section — failure cause, gutter removal process, rafter tail inspection, sub-fascia when needed",
                  "Material guide — PVC composite vs. wood vs. fiber cement, painting requirement, KC climate durability",
                  "Rake board section — gable end exposure, KC storm direction, material upgrade recommendation",
                  "Back-priming section — why cut ends must be sealed, how skip-priming causes early rot, application method",
                  "Corner board section — fiber cement options, siding termination detail, bottom clearance from grade",
                  "Quote form with trim type, material preference, existing condition, re-siding or standalone, timeline",
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
                &ldquo;The back-priming section
                alone changed how customers
                talked to me about the job.
                Before, people would call
                and ask why their new fascia
                was already showing paint
                failure at the bottom after
                two years. I knew it was
                never back-primed but couldn&apos;t
                prove it. After the section
                went up explaining that cut
                ends must be sealed before
                installation, customers started
                asking specifically if I
                back-prime. Now that question
                filters out the contractors
                who skip it. The composite
                section also moved several
                Overland Park jobs from wood
                to PVC — once customers
                understood that PVC doesn&apos;t
                need paint and doesn&apos;t rot
                from behind, the upcharge
                was easy to justify.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Lindquist, exterior carpentry and trim, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An exterior trim site with fascia section, material guide,
                and quote form starts at $200. A full site with rake board
                content, back-priming guide, and corner board section is
                $425–$750. One fascia replacement job covers the cost.
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
