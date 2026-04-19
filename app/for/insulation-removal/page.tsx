import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Insulation Removal Companies in Kansas City",
  description:
    "Custom websites for insulation removal, blown insulation removal, and attic insulation removal companies in the Kansas City area. Show your KC rodent-contaminated insulation health risk, vermiculite and older blown insulation identification, and blown vs. batt removal process differences to win insulation removal contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/insulation-removal",
  },
};

export default function InsulationRemovalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Insulation Removal Companies in Kansas City",
    description: "Custom websites for insulation removal and attic insulation removal companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Insulation Removal Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the insulation in their attic is safe to leave or needs to come out, whether old blown insulation might contain asbestos, and how much old insulation needs to be removed before new insulation can be installed. A website that explains insulation removal earns the call from the homeowner whose pest control company found evidence of a rodent colony in the attic. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Insulation Removal in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Insulation Removal</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Insulation removal
              customers are KC homeowners
              whose pest control
              company or attic
              inspection identified
              rodent contamination —
              droppings, urine
              saturation, nesting
              material, or carcasses —
              in the blown
              or batt insulation
              in the attic
              or crawl space,
              making the insulation
              a biohazard that
              must be removed
              and replaced
              before the space
              can be safely
              accessed or the
              rodent exclusion
              work completed;
              homeowners who
              discovered water
              damage in the
              attic from a
              roof leak or
              ice dam event
              that saturated
              the insulation —
              wet cellulose
              or fiberglass
              insulation compresses,
              loses R-value,
              and supports
              mold growth if
              not removed and
              replaced; or
              homeowners who
              are upgrading
              their attic insulation
              and whose existing
              blown insulation
              is too shallow
              to bury with
              a new layer —
              or whose contractor
              identified that
              the existing
              material is
              vermiculite or
              another legacy
              product that
              should not remain.
              The central education
              is rodent contamination
              as a health
              and exclusion
              issue that requires
              complete removal,
              how to identify
              whether blown
              insulation is
              a legacy material
              versus modern
              cellulose or
              fiberglass, and
              the blown insulation
              vacuum removal
              process versus
              batt removal —
              three things that
              determine whether
              a homeowner understands
              why insulation
              removal is necessary
              before exclusion
              and re-insulation
              can proceed.
              Rodent contamination
              and health risk:
              KC has a high
              rodent pressure
              from Norway rats
              and house mice —
              both species
              use attic insulation
              as nesting habitat;
              mouse urine contains
              proteins that
              become airborne
              as the urine
              dries and the
              insulation is
              disturbed — the
              dried protein
              particles are
              the primary allergen
              and the vector
              for hantavirus
              in high-prevalence
              rodent populations;
              in KC, house
              mouse populations
              are high enough
              that the hantavirus
              risk is low compared
              to the Southwest,
              but the allergen
              load from dried
              urine in attic
              insulation is
              a real air quality
              concern in homes
              with rodent access
              between the attic
              and living space;
              contaminated insulation
              cannot be simply
              covered with
              new material —
              the rodent exclusion
              contractor who
              sealed the entry
              points did not
              address the contamination
              already in the
              insulation; HEPA
              vacuum removal
              of the contaminated
              material is the
              only way to
              eliminate the
              protein load
              before new insulation
              is installed.
              Legacy and hazardous
              insulation identification:
              vermiculite insulation —
              a gray-brown
              granular material
              installed in
              KC attics from
              approximately
              1940 through
              1990 — may contain
              asbestos from
              the Libby, Montana
              mine that supplied
              most of the
              US market; the
              EPA recommends
              that vermiculite
              insulation be
              treated as potentially
              asbestos-containing
              and not disturbed
              without testing;
              the material
              is visually distinct —
              accordion-folded
              granular particles,
              typically gray
              to golden-brown,
              poured loose
              in the attic
              floor; older
              blown fiberglass
              in KC attics
              from pre-1990
              installations
              is typically
              pink or yellow
              and is not hazardous
              but may be compressed
              to R-8 or less —
              far below the
              R-49 to R-60
              recommended for
              KC Climate Zone
              4A attics; cellulose
              insulation — the
              gray paper-based
              blown material —
              is the most common
              modern product
              and is not hazardous
              unless contaminated.
              Blown versus batt
              removal process:
              blown insulation —
              cellulose or
              fiberglass —
              is removed by
              HEPA vacuum
              truck with a
              large-diameter
              hose deployed
              through the attic
              access; an average
              KC ranch house
              attic takes four
              to six hours
              to vacuum clean;
              fiberglass batts
              between joists
              are manually
              removed into
              bags — a slower
              process but
              required when
              the batts are
              between structural
              members or above
              a finished ceiling;
              in either case,
              after removal
              the joist bays
              and deck surface
              should be HEPA-vacuumed
              before new insulation
              is installed.
              An insulation
              removal website
              that explains
              KC rodent contamination
              as a health
              and exclusion
              requirement, vermiculite
              identification
              and asbestos
              risk, and HEPA
              vacuum removal
              process earns
              the homeowner
              whose pest company
              found a nest
              and told them
              the insulation
              needs to come
              out.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before insulation removal
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC rodent contamination — Norway rat and house mouse attic colonization, dried urine protein allergen, air quality impact",
                  "Why cover isn't enough — contamination stays in old material, exclusion doesn't address existing droppings and urine",
                  "Vermiculite identification — gray-brown granular material, Libby mine asbestos link, EPA do-not-disturb recommendation",
                  "Blown vs. batt removal — HEPA vacuum truck process for cellulose and fiberglass, batt manual removal, time estimate",
                  "R-value of old insulation — compressed fiberglass at R-8 vs. R-49 KC Zone 4A recommendation, case for full replacement",
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
                What your insulation removal website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Contamination section — KC rodent pressure, urine protein allergen mechanism, health case for removal vs. covering",
                  "Identification section — vermiculite visual guide, cellulose vs. fiberglass vs. legacy materials, what to look for",
                  "Asbestos section — vermiculite EPA recommendation, when testing is warranted, how to handle before removal",
                  "Removal process section — HEPA vacuum truck, hose access through attic opening, ranch house timing estimate",
                  "Re-insulation section — KC Zone 4A R-value requirement, why removal enables proper new install, contamination elimination",
                  "Quote form with attic access, rodent evidence found, insulation type if known, pest control completion status",
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
                &ldquo;The contamination
                section is what
                gets the pest
                control referral
                calls. KC pest
                companies seal
                the entry points
                and tell the
                homeowner the
                insulation needs
                to come out —
                but they don&apos;t
                explain why,
                and the homeowner
                thinks they can
                just add new
                insulation on
                top. After the
                section went
                up explaining
                that the dried
                urine protein
                load stays in
                the old material
                and continues
                to affect air
                quality even
                after the rodents
                are gone, customers
                stopped asking
                whether they
                really needed
                removal. The
                vermiculite section
                also helps —
                KC homes built
                before 1980 in
                Overland Park
                and Prairie Village
                commonly have
                it, and once
                customers understand
                the asbestos
                connection, they
                call immediately.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Watkins, insulation removal and re-insulation, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An insulation removal site with KC rodent contamination section,
                legacy material identification guide, and quote form starts at $200.
                A full site with HEPA vacuum process, vermiculite asbestos context,
                and re-insulation R-value content is $425–$750. One attic removal
                job covers the cost. No contracts, no monthly fees.
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
