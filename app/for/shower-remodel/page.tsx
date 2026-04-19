import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Shower Remodel Companies in Kansas City",
  description:
    "Custom websites for shower remodel, tile shower installation, and bathroom renovation companies in the Kansas City area. Show your waterproofing membrane process, niche framing, and valve rough-in to win shower remodel contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/shower-remodel",
  },
};

export default function ShowerRemodelPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Shower Remodel Companies in Kansas City",
    description: "Custom websites for shower remodel and tile shower installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Shower Remodel Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what waterproofing membrane goes behind the tile, how a niche is framed without creating a leak point, and where the valve rough-in should be placed so the shower is actually comfortable to use. A website that explains the shower build process earns the remodel call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Shower Remodel in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Shower Remodel</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Shower remodel customers
              are KC homeowners who
              have a builder-grade
              fiberglass surround
              that is cracking
              or discolored after
              15 years, homeowners
              who want to convert
              a tub-shower combo
              to a walk-in shower,
              or homeowners doing
              a full primary bathroom
              renovation and the
              shower is the centerpiece.
              The central education
              is waterproofing —
              the single thing
              that separates a
              shower that lasts
              20 years from one
              that causes a six-figure
              subfloor replacement
              in five.
              Waterproofing membrane:
              tile and grout are
              not waterproof —
              water moves through
              grout lines and
              tile bodies over
              time; the waterproof
              layer must be applied
              to the substrate
              (backer board or
              mud bed) behind
              the tile; sheet
              membranes (Schluter
              Kerdi, Wedi) bond
              directly to the
              substrate with
              modified thinset
              and cover the entire
              shower footprint
              including the floor
              transition and curb;
              liquid-applied membranes
              (RedGard, Laticrete
              Hydro Ban) are
              rolled or brushed
              on in two coats
              with the second
              coat perpendicular
              to the first —
              minimum 35-mil
              dry film thickness;
              all penetrations
              (drain, valve body
              rough-in, niche
              walls) must be
              membraned and set
              in membrane-compatible
              sealant; the flood
              test (plug drain,
              fill 2 inches of
              water, hold 24
              hours with no drop)
              verifies the assembly
              before tile is set.
              Niche framing: a
              recessed niche requires
              cutting between
              studs and framing
              a box — the back
              wall of the niche
              is the structural
              sheathing; niches
              must not be placed
              on exterior walls
              (insulation cavity
              behind the sheathing
              creates a cold
              surface and condensation
              risk); standard
              niche depth is
              3.5 inches (one
              stud bay); the
              niche framing must
              be covered with
              the same waterproof
              membrane as the
              rest of the shower —
              this is where most
              niche failures
              begin; horizontal
              surfaces inside
              the niche must
              pitch slightly
              (1/8 inch per foot)
              to drain. Valve
              rough-in height:
              the shower valve
              rough-in (center
              of valve body)
              is typically set
              at 48 inches from
              the finished floor —
              this places the
              handle at a comfortable
              reach from inside
              the shower; the
              showerhead rough-in
              is typically 80
              inches from the
              finished floor;
              a hand shower
              slide bar requires
              a second outlet
              rough-in at the
              valve; thermostatic
              valves require
              separate hot and
              cold supplies at
              the valve location —
              the cold supply
              must have a pressure-balancing
              valve per IPC 412.3
              to prevent scalding.
              Bench construction:
              a shower bench
              is typically built
              as a mud-bed curb
              (mortar bed sloped
              toward the shower
              floor) or a built-in
              framed bench (2x4
              or 2x6 PT lumber
              for wet location,
              covered in Hardiebacker
              and membraned before
              tile); bench height
              is typically 17–19
              inches from the
              shower floor; bench
              width 14–16 inches
              minimum for comfortable
              seating. A shower
              remodel website
              that explains what
              waterproofing membrane
              actually does, how
              niches are built
              without becoming
              leak points, and
              where the valve
              is roughed in for
              comfort earns the
              homeowner who is
              serious about doing
              it right.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before a shower remodel
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Waterproofing membrane — sheet vs. liquid-applied, coverage requirements, flood test verification",
                  "Niche framing — interior vs. exterior wall placement, depth limitation, membrane coverage inside niche",
                  "Valve rough-in height — 48-inch standard, showerhead height, thermostatic vs. pressure-balance valve",
                  "Bench construction — mud-bed vs. framed bench, PT lumber requirement, height and width for seating",
                  "Drain installation — linear vs. center drain, mortar bed slope, bonding flange membrane attachment",
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
                What your shower remodel website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Waterproofing section — why tile is not waterproof, sheet vs. liquid membrane, flood test process",
                  "Niche guide — wall selection, framing dimensions, membrane coverage, pitch inside niche",
                  "Valve placement section — rough-in heights, thermostatic vs. pressure-balance, hand shower add-on",
                  "Bench section — framed vs. mud-bed construction, PT lumber requirement, height and pitch",
                  "Drain section — center vs. linear, mortar bed slope requirement, drain bonding flange membrane",
                  "Quote form with shower dimensions, tub removal yes/no, niche count, bench included, timeline",
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
                &ldquo;The waterproofing section
                changed every conversation
                I have with customers. Before,
                they thought tile was
                waterproof and would push
                back on the extra day for
                membrane and flood test.
                After the section went up
                explaining that grout is
                porous and the membrane
                is what protects the framing,
                customers stopped asking
                why it takes longer and
                started asking which membrane
                I use. The niche section
                also saved me from three
                callbacks — two customers
                told me they read about
                exterior wall niches being
                a cold surface risk and
                changed their layout before
                demo started. That&apos;s exactly
                the conversation I want
                to have before tile goes up,
                not after.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Andersen, tile and shower remodel, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A shower remodel site with waterproofing section,
                niche guide, and quote form starts at $200. A full
                site with valve placement, bench construction, and
                drain section content is $425–$750. One shower remodel
                covers the cost. No contracts, no monthly fees.
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
