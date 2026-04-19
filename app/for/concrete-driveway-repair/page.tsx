import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Concrete Driveway Repair Companies in Kansas City",
  description:
    "Custom websites for concrete driveway repair, concrete lifting, and slab replacement companies in the Kansas City area. Show your mudjacking vs. polyurethane foam lifting, crack repair methods, and partial replacement process to win residential concrete repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/concrete-driveway-repair",
  },
};

export default function ConcreteDrivewayRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Concrete Driveway Repair Companies in Kansas City",
    description: "Custom websites for concrete driveway repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Concrete Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with sunken or cracked concrete want to know whether mudjacking or polyurethane foam lifting is the right choice for their slab, and whether a partial section replacement can match their existing driveway. A website that explains the repair options honestly earns the inspection call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Concrete Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Concrete Driveway Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Concrete driveway repair customers
              are homeowners dealing with
              sunken slabs, settled sections
              at the apron or garage approach,
              cracks from tree root heaving
              or KC freeze-thaw cycles,
              or spalling surfaces from
              road salt and deicing
              chemical damage. The
              two main services with
              significant customer
              education needs are
              slab lifting and
              crack repair. Slab
              lifting — also called
              concrete leveling —
              addresses sunken sections
              that have settled because
              the soil underneath
              has compacted, eroded,
              or washed away. Two
              methods compete:
              mudjacking (pumping
              a cement-sand-water
              slurry under the slab
              through drilled holes
              to fill the void and
              float the slab up)
              and polyurethane foam
              injection (injecting
              expanding closed-cell
              foam that fills voids,
              cures rigid, is
              waterproof, and weighs
              far less than the
              mudjacking material
              — important when soil
              compaction is the
              cause of the settlement).
              Poly foam costs more
              per square foot but
              has a faster cure
              time (often drive-ready
              within an hour) and
              a longer expected
              service life. Both
              are dramatically cheaper
              than full slab removal
              and replacement. Crack
              repair options depend
              on crack width and
              activity: hairline
              cracks can be filled
              with polyurethane
              or epoxy injection;
              wider cracks or cracks
              with vertical displacement
              (trip hazards) need
              different treatment.
              Spalling — surface
              deterioration from
              freeze-thaw and
              deicers — is cosmetic
              on shallow damage
              but structural when
              deep. Partial section
              replacement requires
              cutting clean saw
              joints so the new
              pour meets the
              existing concrete
              at a defined edge.
              A concrete repair
              website that explains
              mudjacking vs. polyurethane,
              when lifting works
              vs. when replacement
              is needed, and
              shows before-and-after
              leveling results
              earns the homeowner
              who is watching
              a tripping hazard
              get worse every winter.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a concrete repair company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Mudjacking vs. polyurethane foam — cost difference, cure time, weight, lifespan, which is better for KC soil",
                  "Lifting vs. replacement — when a sunken slab can be lifted vs. when the concrete needs to come out",
                  "Crack types — what hairline vs. wide vs. displaced cracks mean, which can be filled vs. which need cutting",
                  "Spalling repair — surface restoration options, when spalling is cosmetic vs. structural",
                  "Partial replacement — how new concrete sections are cut in and poured to meet existing driveway",
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
                What your concrete repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Mudjacking vs. poly foam — honest comparison, cost, cure time, when each is the better choice",
                  "Slab lifting gallery — before and after photos of leveled driveways, aprons, sidewalks, and patios",
                  "Crack repair guide — crack types, filling methods, when epoxy injection works, when cuts are needed",
                  "Repair vs. replace — when lifting works, when the slab is too far gone, what drives that assessment",
                  "Partial replacement — saw cutting process, new pour, cure time, color matching expectation",
                  "Quote form with problem type, slab location, approximate size, how long issue has been present",
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
                &ldquo;KC freeze-thaw is brutal
                on concrete and my phone
                is busy every spring with
                homeowners who watched
                their garage apron sink
                all winter. The question
                is always whether to
                lift it or replace it —
                and customers had no
                way to understand the
                difference before calling.
                The website with our
                mudjacking vs. poly foam
                comparison, the repair
                vs. replace guide, and
                before-and-after leveling
                photos meant customers
                arrived to the estimate
                already understanding
                that lifting is probably
                the answer and why it
                is worth the cost.
                It shortened every
                sales conversation
                by half.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Kowalski, concrete repair specialist, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A concrete repair site with lifting
                options, crack repair guide, and
                quote form starts at $200. A full
                site with mudjacking vs. poly foam
                comparison, gallery, and repair vs.
                replace guide is $425–$750. One
                full driveway lifting job covers
                the cost. No contracts, no monthly fees.
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
