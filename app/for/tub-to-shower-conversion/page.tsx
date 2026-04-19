import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tub-to-Shower Conversion Companies in Kansas City",
  description:
    "Custom websites for tub-to-shower conversion, walk-in shower installation, and bathroom remodel companies in the Kansas City area. Show your drain relocation process, mortar bed construction, and waterproofing system to win tub conversion contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tub-to-shower-conversion",
  },
};

export default function TubToShowerConversionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tub-to-Shower Conversion Companies in Kansas City",
    description: "Custom websites for tub-to-shower conversion and walk-in shower installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tub-to-Shower Conversion Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the tub drain location works for a shower pan, how much floor work the conversion actually requires, and what happens to the plumbing rough-in when the tub comes out. A website that explains the conversion process earns the bathroom call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tub-to-Shower Conversion in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tub-to-Shower Conversion</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tub-to-shower conversion
              customers are KC homeowners
              who stopped using the
              tub years ago and want
              the bathroom space used
              differently, homeowners
              who are aging in place
              and need a zero-threshold
              entry shower for accessibility,
              or homeowners doing a
              primary bathroom remodel
              and choosing a walk-in
              shower as the centerpiece.
              The central education
              is what happens to the
              drain, how the floor
              is built, and how
              the waterproofing is
              done — three things
              that differ completely
              from a standard shower
              remodel because the
              tub alcove dimensions
              and existing rough-in
              create constraints
              that don&apos;t exist in
              a new build.
              Drain relocation:
              a standard tub drain
              is located at one
              end of the tub —
              typically 12–16 inches
              from the wall at
              the faucet end; a
              shower drain is centered
              or placed toward
              the back of the
              shower footprint;
              relocating the drain
              requires cutting the
              subfloor, extending
              the P-trap and drain
              line to the new
              center position,
              and re-supporting
              the drain pipe before
              the floor is rebuilt;
              in KC homes with
              a basement directly
              below the bathroom,
              drain relocation
              is a half-day plumbing
              job from below;
              in a slab-on-grade
              bathroom the concrete
              must be saw-cut
              and the drain trench
              dug — this adds
              significant scope;
              some conversions
              use a linear drain
              at the original
              drain end wall to
              avoid relocation
              entirely — this
              works if the floor
              slopes correctly.
              Mortar bed construction:
              a shower floor requires
              a sloped mortar
              bed — 1/4 inch per
              foot slope toward
              the drain on all
              sides; the mortar
              bed is built over
              a sheet membrane
              (CPE liner or hot-mop
              asphalt) that is
              the primary waterproof
              layer under the
              tile; the mortar
              bed is a Portland
              cement and sand
              mix (floor mud),
              tamped and screeded
              to slope; the liner
              is then dressed
              up the walls 3
              inches minimum and
              clamped at the
              drain ring; a second
              waterproof membrane
              (Schluter Kerdi,
              RedGard) is applied
              over the backer
              board walls; the
              two-membrane approach
              (liner under mud
              bed, topical membrane
              on walls) is the
              standard for a long-lasting
              shower floor. Valve
              and surround changes:
              the tub faucet rough-in
              is typically 28
              inches from the
              floor (center of
              valve body) —
              a shower valve
              rough-in is 48
              inches; the supply
              stubs at the old
              tub location must
              be capped or extended
              to the new shower
              valve location;
              the tub spout
              port is eliminated;
              the surround walls
              above the tub deck
              height are typically
              only tiled to 60
              inches in a tub
              surround — a shower
              conversion requires
              tile to the ceiling
              or at minimum to
              84 inches to prevent
              water from hitting
              an untiled surface.
              A tub-to-shower
              website that explains
              what the drain
              relocation actually
              involves, why the
              mortar bed is built
              in layers, and
              how the valve rough-in
              changes earns the
              homeowner who is
              ready to commit
              to the project.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before a tub-to-shower conversion
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Drain relocation — tub vs. shower drain position, subfloor cutting, slab vs. basement access difference",
                  "Mortar bed construction — CPE liner placement, floor mud slope requirement, drain clamping ring detail",
                  "Valve rough-in change — tub valve height vs. shower height, supply stub rerouting, spout port elimination",
                  "Surround tile height — tub surround 60-inch limit vs. shower full height, water splash zone coverage",
                  "Zero-threshold option — curbless entry construction, linear drain placement, accessibility code requirements",
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
                What your tub-to-shower conversion website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Drain relocation section — tub vs. shower drain position, basement vs. slab access, linear drain alternative",
                  "Floor construction guide — CPE liner placement, mortar bed layering, slope requirement, drain ring clamping",
                  "Plumbing section — valve height change, supply stub rerouting, tub spout elimination, new showerhead rough-in",
                  "Surround section — tile height requirement, backer board installation above old tub deck, ceiling option",
                  "Zero-threshold section — curbless construction, linear drain details, ADA compliance for aging in place",
                  "Quote form with bathroom dimensions, basement or slab foundation, accessibility needs, timeline",
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
                &ldquo;The drain relocation section
                is the one that sets expectations
                before anyone even calls me.
                Customers in KC with basements
                always assumed it was simple
                work from below. The slab
                customers were a different
                story — they didn&apos;t know
                concrete needed to be cut
                until I told them at the
                estimate. After that section
                went up explaining both
                scenarios, slab customers
                came pre-informed and had
                already added the saw-cut
                cost into what they expected.
                The linear drain section
                also got me two jobs where
                customers thought conversion
                wasn&apos;t possible — they had
                the original drain right
                at the wall and didn&apos;t know
                that was exactly where a
                linear drain goes.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Malone, bathroom tile and shower conversion, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tub-to-shower conversion site with drain relocation
                section, floor construction guide, and quote form starts
                at $200. A full site with plumbing rough-in, surround
                tile height, and zero-threshold content is $425–$750.
                One conversion covers the cost. No contracts, no monthly fees.
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
