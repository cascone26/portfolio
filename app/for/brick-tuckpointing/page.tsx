import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Brick Tuckpointing Companies in Kansas City",
  description:
    "Custom websites for brick tuckpointing, mortar joint repointing, and masonry repair companies in the Kansas City area. Show your KC freeze-thaw mortar deterioration timeline, Type S vs. Type N mortar for KC exposure, and soft mortar water absorption damage cycle to win tuckpointing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/brick-tuckpointing",
  },
};

export default function BrickTuckpointingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Brick Tuckpointing Companies in Kansas City",
    description: "Custom websites for brick tuckpointing and mortar joint repointing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Brick Tuckpointing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the crumbling mortar between their bricks is a cosmetic problem or a structural one, how deep the mortar has to be eroded before it needs to be addressed, and whether they can have a contractor color-match the existing mortar. A website that explains brick tuckpointing earns the call from the homeowner who can see daylight between the mortar and the brick on a sixty-year-old chimney. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Brick Tuckpointing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Brick Tuckpointing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Brick tuckpointing
              customers are KC homeowners
              with brick chimneys,
              brick exterior walls,
              or brick retaining
              walls where the mortar
              joints have eroded,
              cracked, or crumbled
              to the point where
              the mortar is recessed
              more than three-eighths
              inch from the face
              of the brick — the
              threshold at which
              water infiltration
              into the joint becomes
              significant; homeowners
              who see white staining
              or efflorescence
              on the brick face —
              dissolved mineral
              salts driven out
              of the brick and
              mortar by water
              moving through deteriorated
              joints; or homeowners
              whose home inspector
              identified mortar
              joint deterioration
              as a maintenance
              item on a pre-sale
              or pre-purchase inspection.
              The central education
              is KC freeze-thaw
              mortar deterioration
              timeline, Type S
              versus Type N mortar
              selection for KC
              exposure conditions,
              and the soft mortar
              water absorption
              cycle — three things
              that determine whether
              a homeowner understands
              why KC brick assemblies
              need repointing
              every twenty to
              thirty years and
              what happens to
              the brick itself
              if the mortar failure
              is left to progress.
              KC freeze-thaw deterioration:
              mortar joints are
              intentionally softer
              than the brick they
              bond — mortar is
              the sacrificial
              element in a masonry
              assembly, designed
              to absorb seasonal
              movement and allow
              moisture-driven expansion
              to be expressed
              at the joint rather
              than cracking the
              brick; KC freeze-thaw
              cycling at fifty
              to fifty-five cycles
              per winter accelerates
              this sacrifice;
              original mortar
              from pre-1970 KC
              homes is often lime-based
              with low compressive
              strength — it is
              intentionally softer
              than modern Portland
              cement mortar; using
              high-strength Portland
              cement mortar for
              tuckpointing on
              older softer brick
              transfers the movement
              stress from the
              mortar to the brick,
              causing brick face
              spalling — the correct
              replacement mortar
              must match or slightly
              underperform the
              original mortar
              strength. Type S
              versus Type N: Type
              N mortar is medium
              strength and is
              appropriate for
              above-grade exterior
              masonry on KC homes
              where the brick
              was laid with a
              similar-strength
              original mortar;
              Type S mortar is
              higher-strength
              and appropriate
              for chimneys, parapets,
              and below-grade
              masonry where higher
              compressive strength
              is required; a tuckpointing
              contractor who uses
              Type S on the face
              of a pre-1950 KC
              brick home is likely
              applying mortar
              stronger than the
              original brick —
              the brick will eventually
              spall at the joint
              faces rather than
              the mortar failing
              as designed. Soft
              mortar water cycle:
              when mortar is eroded
              to more than three-eighths
              inch depth, rain
              enters the joint
              and contacts the
              back face of both
              adjacent bricks;
              the water saturates
              the inner face of
              the brick — a zone
              that was previously
              protected by the
              mortar — and moves
              inward through the
              brick by capillary
              action; in winter,
              the saturated brick
              freezes from the
              exterior inward
              while the interior
              remains unfrozen;
              the ice front is
              at the mid-depth
              of the brick, and
              the freezing pressure
              is exerted outward
              against the brick
              face — spalling
              results within three
              to five winter cycles
              after the joint
              has been open to
              this depth. A brick
              tuckpointing website
              that explains KC
              freeze-thaw mortar
              sacrifice, mortar
              strength matching
              for older brick,
              and the water absorption
              cycle that leads
              from joint erosion
              to brick spalling
              earns the homeowner
              who wants to protect
              the brick before
              the tuckpointing
              job becomes a brick
              replacement job.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before brick tuckpointing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC freeze-thaw mortar sacrifice — 50-55 cycles, mortar as intentional sacrificial element, 20-30 year maintenance cycle",
                  "Mortar strength matching — Type N vs. Type S, pre-1970 lime mortar vs. Portland, brick spalling from too-strong replacement",
                  "3/8-inch depth threshold — when joint erosion becomes a water infiltration problem vs. cosmetic maintenance",
                  "Soft mortar water absorption — mid-brick ice front, 3-5 winter cycles from open joint to brick face spalling",
                  "Efflorescence — mineral salt migration through deteriorated joints, what white staining means about joint condition",
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
                What your brick tuckpointing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Freeze-thaw section — KC cycle count, mortar sacrifice design, 20-30 year maintenance cycle for KC climate",
                  "Mortar selection section — Type N vs. Type S, matching original mortar strength, lime mortar matching for pre-1970 homes",
                  "Depth assessment — 3/8-inch threshold, probe test method, what cosmetic vs. functional joint erosion looks like",
                  "Water damage section — open joint to brick saturation, mid-brick ice front, spalling timeline without repair",
                  "Efflorescence section — what white mineral staining means, whether brick is already damaged, cleaning vs. repointing",
                  "Quote form with brick type, home age, joint condition estimate, chimney vs. wall vs. retaining, efflorescence present",
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
                &ldquo;The mortar strength
                section earns the
                trust before I arrive.
                KC homeowners who
                got quotes from
                contractors offering
                Type S on their
                1940s brick homes
                would ask me why
                I specified something
                different. After
                the section went
                up explaining that
                pre-1950 KC brick
                is often softer
                than modern Portland
                cement mortar and
                that using Type
                S transfers the
                stress to the brick
                and causes spalling,
                customers started
                calling specifically
                because my site
                addressed something
                the other quotes
                didn&apos;t. The spalling
                timeline section
                also gets approvals
                fast — once KC
                homeowners understand
                that three to five
                more winters on
                an open joint means
                brick replacement
                rather than tuckpointing,
                they schedule the
                repair rather than
                waiting another
                year.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — O. Brennan, masonry repair and tuckpointing, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A brick tuckpointing site with freeze-thaw deterioration section,
                mortar selection guide, and quote form starts at $200. A full site
                with spalling timeline, depth assessment, and efflorescence content
                is $425–$750. One chimney repointing job covers the cost. No
                contracts, no monthly fees.
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
