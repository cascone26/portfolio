import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Basement Waterproofing Companies in Kansas City",
  description:
    "Custom websites for basement waterproofing, interior drain tile, and foundation crack injection companies in the Kansas City area. Show your KC clay hydrostatic pressure, interior vs. exterior waterproofing trade-offs, and crack injection vs. drain tile for water source type to win basement waterproofing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/basement-waterproofing",
  },
};

export default function BasementWaterproofingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Basement Waterproofing Companies in Kansas City",
    description: "Custom websites for basement waterproofing and interior drain tile companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Basement Waterproofing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the water on their basement floor is coming through the wall or through the floor-wall joint, whether interior waterproofing just moves the water rather than stopping it, and whether the $15,000 exterior excavation quote is really necessary. A website that explains basement waterproofing earns the call from the homeowner who wants to finish their basement but can't until the water problem is resolved. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Basement Waterproofing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Basement Waterproofing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Basement waterproofing
              customers are KC homeowners
              who see water on
              the basement floor
              after heavy rain —
              water that appears
              at the base of the
              wall, along the
              floor-wall joint,
              or through cracks
              in the poured concrete
              or block wall; homeowners
              who want to finish
              their basement but
              have been told by
              a contractor or
              real estate inspector
              that the water
              problem must be
              addressed before
              insulation and drywall
              go in; or homeowners
              who received a quote
              for exterior waterproofing
              that involves excavating
              the entire perimeter
              of the foundation
              and want to understand
              whether an interior
              system achieves
              the same result
              at lower cost.
              The central education
              is KC clay hydrostatic
              pressure as the
              water source, the
              difference between
              interior drain
              tile and exterior
              membrane waterproofing
              and which problem
              each solves, and
              crack injection
              as the targeted
              solution for specific
              wall cracks —
              three things that
              determine whether
              a homeowner understands
              the relationship
              between their water
              entry point and
              the correct solution.
              KC clay hydrostatic
              pressure: Kansas
              City clay soil
              holds water in
              the soil profile
              long after a rain
              event — the hydraulic
              conductivity of
              less than 0.1 inches
              per hour means
              water in the soil
              adjacent to the
              foundation takes
              days to migrate
              away; the sustained
              saturation of the
              soil creates hydrostatic
              pressure — water
              weight pressure
              against the below-grade
              wall surface; this
              pressure is highest
              at the base of
              the wall where
              the soil column
              height is greatest;
              concrete block
              walls are permeable —
              water migrates through
              the block cores
              and mortar joints
              under this pressure;
              poured concrete
              walls resist hydrostatic
              pressure better
              but water enters
              through shrinkage
              cracks, cold joints,
              and rod holes.
              Interior vs. exterior:
              exterior waterproofing
              involves excavating
              the soil from the
              foundation wall,
              applying a waterproof
              membrane or drainage
              board to the exterior
              wall surface, and
              installing new drain
              tile at the footing;
              this addresses the
              water at the source —
              outside the wall —
              but requires full
              excavation at cost
              of $15,000 to $40,000
              for a typical KC
              home; interior drain
              tile installs a
              perforated pipe
              channel along the
              interior perimeter
              of the basement
              floor, cut below
              the slab, that
              collects water
              that enters through
              the wall base and
              floor-wall joint
              and routes it to
              the sump pit; interior
              drain tile does
              not prevent water
              from entering the
              wall — it manages
              it after entry;
              for most KC homes
              with block or poured
              concrete walls
              where the water
              entry is at the
              floor-wall joint
              or block core weep,
              interior drain
              tile provides equivalent
              dry-floor results
              at thirty to fifty
              percent of exterior
              cost. Crack injection:
              poured concrete
              walls with visible
              cracks that allow
              water entry can
              be sealed at the
              crack point with
              polyurethane or
              epoxy injection —
              a non-excavation
              repair that fills
              the crack through
              the full depth
              of the wall from
              the interior; polyurethane
              foam injection
              expands to fill
              voids and remains
              flexible — appropriate
              for cracks subject
              to minor movement;
              epoxy injection
              fills the crack
              structurally and
              bonds the concrete —
              appropriate for
              cracks that are
              stable and not
              actively moving;
              crack injection
              is appropriate
              when water enters
              specifically at
              a discrete crack
              location — it is
              not a substitute
              for drain tile
              when the entry
              is at the floor-wall
              joint or through
              block cores across
              a wide area. A
              basement waterproofing
              website that explains
              KC clay hydrostatic
              pressure, interior
              drain tile as the
              cost-effective
              floor-wall joint
              solution, and crack
              injection for discrete
              wall cracks earns
              the homeowner who
              wants to finish
              their basement
              and needs a clear
              answer on what
              solution fits their
              water entry pattern.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before basement waterproofing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay hydrostatic pressure — slow drainage, sustained soil saturation, pressure highest at wall base",
                  "Interior drain tile function — perimeter channel below slab, collects floor-wall joint entry, routes to sump",
                  "Interior vs. exterior trade-off — exterior addresses source, interior manages after entry, cost difference, when each is right",
                  "Crack injection — polyurethane vs. epoxy, appropriate for discrete cracks, not a substitute for drain tile",
                  "Block vs. poured concrete water entry — block core weep vs. poured wall shrinkage cracks, different solutions",
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
                What your basement waterproofing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay section — hydraulic conductivity, hydrostatic pressure mechanism, sustained saturation after rain",
                  "Interior drain tile section — installation method, floor-wall joint collection, sump pit routing",
                  "Interior vs. exterior section — honest cost and effectiveness comparison, when exterior is actually required",
                  "Crack injection section — polyurethane vs. epoxy, depth-through injection, appropriate water entry type",
                  "Diagnosis section — block core weep vs. floor-wall joint vs. discrete crack, what each pattern indicates",
                  "Quote form with water entry location, wall type, flooding frequency, basement finish status, prior repair",
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
                &ldquo;The interior versus
                exterior comparison
                section generates
                the most calls of
                anything on the
                site. KC homeowners
                who got a $20,000
                exterior excavation
                quote call me wanting
                to know if there&apos;s
                a less expensive
                option that works.
                After the section
                went up explaining
                that interior drain
                tile produces equivalent
                dry-floor results
                for floor-wall
                joint water entry
                at thirty to fifty
                percent of exterior
                cost, those calls
                converted at a
                very high rate.
                The crack injection
                section also helped —
                customers who had
                a single visible
                crack in their poured
                concrete wall understood
                that their situation
                didn&apos;t require drain
                tile at all, and
                the targeted injection
                repair is a four-hour
                job instead of a
                two-day system
                install.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Patterson, basement waterproofing and foundation repair, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A basement waterproofing site with KC clay hydrostatic section,
                interior drain tile guide, and quote form starts at $200. A full
                site with interior vs. exterior comparison, crack injection content,
                and diagnosis guide is $425–$750. One waterproofing job covers the
                cost. No contracts, no monthly fees.
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
