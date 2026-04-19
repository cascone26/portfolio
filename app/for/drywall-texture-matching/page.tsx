import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Drywall Texture Matching Companies in Kansas City",
  description:
    "Custom websites for drywall texture matching, ceiling texture repair, and wall texture blending companies in the Kansas City area. Show your KC texture era identification, spray equipment calibration, and feathering technique to win texture matching contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/drywall-texture-matching",
  },
};

export default function DrywallTextureMatchingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Drywall Texture Matching Companies in Kansas City",
    description: "Custom websites for drywall texture matching and ceiling texture repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Drywall Texture Matching Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether orange peel and knockdown texture can actually be matched after a drywall repair, why the patched area still shows after painting, and what makes texture matching different from just spraying new texture over a patch. A website that explains drywall texture matching earns the invisible repair call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Drywall Texture Matching in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Drywall Texture Matching</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Drywall texture matching
              customers are KC homeowners
              who had a water damage
              repair, a door knockthrough,
              or a drywall patch done
              correctly but now have
              a smooth or mismatched
              area that shows through
              two coats of paint,
              homeowners who removed
              popcorn ceiling in part
              of a room and need
              the newly smooth area
              retextured to match
              the orange peel or
              knockdown in the rest
              of the ceiling, or
              homeowners who bought
              a KC home built between
              1985 and 2005 with
              knockdown or orange
              peel ceilings and ceiling
              fans, light fixtures,
              or access panels that
              were patched by the
              previous owner with
              smooth joint compound
              and painted over. The
              central education is
              KC texture era identification,
              spray equipment calibration
              to match existing aggregate
              size, and feathering
              the transition — three
              things that separate
              a texture match that
              disappears from one
              that creates a bulls-eye
              around the patch. Texture
              identification: the
              dominant textures in
              KC homes by era are
              popcorn (acoustic ceiling
              spray with vermiculite
              or polystyrene beads —
              common 1965–1990, now
              often being removed),
              orange peel (light spray
              texture with small uniform
              bumps — dominant 1990–2010),
              and knockdown (heavier
              irregular pattern created
              by applying mud and
              knocking it down with
              a trowel before it
              dries — common 1995–2015
              in KC new construction);
              the texture type determines
              the tool and the mud
              viscosity — a hopper
              gun with a #6 to #8
              nozzle for orange peel,
              a hopper gun with a
              #10 to #12 nozzle and
              a delayed knockdown
              step for knockdown;
              the aggregate size
              (bump size) in existing
              orange peel varies
              by the original applicator&apos;s
              air pressure and mud
              viscosity — two houses
              built in the same year
              in Overland Park may
              have different bump
              sizes from different
              subcontractors. Spray
              calibration: texture
              matching requires test
              sprays on scrap drywall
              held at the same distance
              from the wall as the
              finished surface — the
              pattern is calibrated
              by adjusting air pressure
              and mud viscosity until
              the test sample matches
              the existing texture
              at arm&apos;s length; a
              texture that matches
              in the can but sprays
              with different aggregate
              spacing will look different
              in raking light (light
              hitting the surface
              at a shallow angle)
              even when it matches
              in direct light — raking
              light is the condition
              that reveals mismatches;
              most texture mismatch
              complaints come from
              patches visible in
              morning or evening light
              from a window. Feathering:
              the perimeter of the
              new texture must blend
              into the existing texture
              without a hard edge —
              the technique is to
              reduce the spray density
              progressively as the
              gun moves away from
              the patch center, creating
              a gradient rather than
              a defined boundary;
              on ceilings, the patch
              perimeter is sprayed
              first at the full density
              needed to match, then
              the gun is walked outward
              with decreasing trigger
              pressure for 6 to 12
              inches around the patch;
              on walls, feathering
              follows the same gradient
              but is more visible
              because walls are viewed
              at eye level rather
              than obliquely from
              below. A drywall texture
              matching website that
              explains KC texture
              identification, spray
              calibration in raking
              light, and the feathering
              technique earns the
              homeowner who has already
              had a patch painted
              twice and still sees
              the outline.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before drywall texture matching
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Texture identification — KC era by type (popcorn 1965-1990, orange peel 1990-2010, knockdown 1995-2015)",
                  "Spray calibration — nozzle size by texture type, test spray method, aggregate size matching",
                  "Raking light test — why patches visible in morning/evening light, how to check match before painting",
                  "Feathering technique — gradient at patch perimeter, trigger pressure reduction, ceiling vs. wall method",
                  "Smooth patch visibility — why painting over smooth drywall compound still shows, texture required",
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
                What your drywall texture matching website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Texture ID section — KC era guide with photos, popcorn vs. orange peel vs. knockdown identification",
                  "Calibration section — nozzle selection, mud viscosity, test spray on scrap before applying to wall",
                  "Raking light section — how and when to check the match, why it matters more than direct-light inspection",
                  "Feathering guide — perimeter gradient method, trigger pressure technique, ceiling and wall variations",
                  "Smooth-over failure section — why painting smooth joint compound always shows, texture is required",
                  "Quote form with texture type, patch size and location, ceiling or wall, room lighting direction, timeline",
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
                &ldquo;The raking light section
                is the one that changed
                how I explain my work.
                A homeowner in Shawnee
                kept saying the patch looked
                fine to her and she couldn&apos;t
                understand why I wanted
                to come back and respray.
                I told her to look at the
                ceiling at 7am when the
                east window light was at
                a shallow angle — she called
                me an hour later and said
                she could see the outline
                clearly. After the section
                went up explaining how raking
                light reveals mismatches,
                customers started checking
                their patches at the right
                time and calling me before
                the final paint coat with
                an accurate description
                of what they were seeing.
                The feathering section also
                stopped the callbacks from
                customers whose previous
                contractor sprayed a tight
                texture island right over
                the patch with a hard edge
                all the way around it.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Delgado, drywall repair and texture work, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A texture matching site with texture identification section,
                calibration guide, and quote form starts at $200. A full site
                with raking light content, feathering technique, and KC era
                texture guide is $425–$750. One ceiling texture match covers
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
