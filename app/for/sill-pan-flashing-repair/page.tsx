import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Sill Pan Flashing Repair Companies in Kansas City",
  description:
    "Custom websites for sill pan flashing repair, window sill leak repair, and window rough opening water damage companies in the Kansas City area. Show your sill pan failure water path, KC wind-driven rain and window installation standard, and sill pan replacement vs. window removal to win sill pan flashing repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/sill-pan-flashing-repair",
  },
};

export default function SillPanFlashingRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Sill Pan Flashing Repair Companies in Kansas City",
    description: "Custom websites for sill pan flashing repair and window rough opening water damage companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Sill Pan Flashing Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why water appears on their interior window sill after heavy rain even though the window itself doesn't leak, whether the rot they found in the framing below the window is from the current caulk failure or from something deeper, and whether replacing the window is necessary to fix the water problem. A website that explains sill pan flashing repair earns the window rough opening repair call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Sill Pan Flashing Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Sill Pan Flashing Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Sill pan flashing repair
              customers are KC homeowners
              who find interior water
              staining on the drywall
              below a window after
              heavy rain events —
              water that appears
              to be entering at the
              window sill or below
              the window unit rather
              than through the glass
              or frame; homeowners
              who discovered rot
              in the rough sill framing
              or the subsill below
              the window unit when
              replacing trim or investigating
              a water stain; or homeowners
              in KC homes built between
              1985 and 2005 whose
              windows were installed
              without a sill pan
              flashing — a common
              omission in that era
              where only a bead of
              exterior caulk was
              applied at the window-to-siding
              joint, and where that
              caulk has since cracked
              or separated and is
              allowing water entry
              into the rough opening.
              The central education
              is the sill pan flashing
              function and how failure
              creates a hidden water
              path, KC wind-driven
              rain and the window
              installation standard
              that addresses it,
              and the distinction
              between sill pan repair
              and full window replacement —
              three things that determine
              whether a homeowner
              understands the water
              source and whether
              the repair requires
              window removal or can
              be addressed from the
              exterior. Sill pan
              flashing function:
              a sill pan flashing
              is a sloped pan installed
              at the rough opening
              sill — the horizontal
              framing member at the
              bottom of the window
              opening — before the
              window unit is set
              in place; the pan
              creates a waterproof
              surface under the window
              unit with end dams
              that prevent water
              from running sideways
              into the rough opening
              framing; any water
              that penetrates behind
              the exterior caulk
              or between the window
              frame and the rough
              opening lands on the
              pan and is directed
              to a weep opening at
              the exterior face
              rather than into the
              framing; without a
              sill pan, water that
              penetrates at the window-to-siding
              joint runs directly
              onto the rough sill
              framing, saturates
              the subsill, and enters
              the wall cavity; this
              water path is hidden
              inside the wall until
              rot or interior staining
              reveals it. KC wind-driven
              rain: KC receives sustained
              southerly wind events
              during spring and summer
              storm systems that
              drive rain horizontally
              against exterior walls
              at angles that test
              window installations
              that would be adequate
              in calmer conditions;
              a window installed
              with only exterior
              caulk at the sill —
              without a back-bedded
              sill pan or self-adhering
              flashing tape — relies
              entirely on the caulk
              remaining intact; caulk
              at the window-to-siding
              joint is exposed to
              full UV and thermal
              cycling and typically
              fails within seven
              to ten years in KC
              conditions; the window
              installation standard
              that addresses KC wind-driven
              rain is AAMA 2400 or
              equivalent — back-bedded
              sill, self-adhering
              flexible flashing tape
              at the sill and jambs,
              sill pan or sloped
              sill pan flashing, and
              face-sealed exterior
              caulk as the final
              layer, not the only
              layer. Sill pan repair
              vs. window removal:
              a sill pan retrofit
              for a window that is
              structurally sound
              and thermally performing
              adequately can sometimes
              be achieved by removing
              the exterior trim, cutting
              back the siding at
              the rough opening,
              applying self-adhering
              flashing tape to the
              rough sill, installing
              a preformed sill pan
              flashing, and reinstalling
              trim and siding — this
              approach preserves
              the existing window
              unit; if the rough
              sill framing has rot
              that extends beyond
              the accessible surface,
              or if the subsill has
              structural damage, the
              window unit must be
              removed to access and
              replace the framing
              before reinstalling
              the window with a correctly
              flashed rough opening.
              A sill pan flashing
              website that explains
              the hidden water path
              when flashing is missing,
              KC wind-driven rain
              and the installation
              standard that addresses
              it, and when sill pan
              repair can preserve
              the window vs. when
              removal is required
              earns the homeowner
              who found rot under
              their window and wants
              to understand the scope
              before committing.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before sill pan flashing repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Sill pan function — pan + end dams under window unit, weep path to exterior, what happens without it",
                  "Hidden water path — water enters at sill, saturates framing inside wall, rot before interior sign appears",
                  "KC wind-driven rain — horizontal rain against windows, caulk-only installation failure timeline (7-10 years)",
                  "AAMA 2400 standard — back-bedded sill, flashing tape, sill pan as layers, caulk as last not only layer",
                  "Repair vs. removal — when exterior trim removal + retrofit pan works, when rot requires window removal",
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
                What your sill pan flashing repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Sill pan section — pan function, end dam purpose, weep design, what a missing pan allows",
                  "Water path section — caulk failure entry, rough sill saturation, hidden damage before interior staining",
                  "KC wind-driven rain — spring storm horizontal rain, why caulk alone fails, AAMA 2400 standard",
                  "Retrofit repair section — exterior trim removal, flashing tape, preformed pan installation process",
                  "Rot assessment section — surface rot vs. structural framing rot, when window removal is required",
                  "Quote form with window age, water sign location (interior/exterior), rot found, window type, how long present, timeline",
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
                &ldquo;The hidden water path
                section is what made
                the sill pan repair
                make sense to customers
                who thought they needed
                a window replacement.
                KC homeowners would
                call after finding
                rot below a window
                and assume the window
                itself was defective
                and needed to come
                out. After the section
                went up explaining
                that the window can
                be perfectly sealed
                but water enters at
                the sill-to-siding
                joint and travels
                inside the wall where
                no one sees it until
                the rot shows, customers
                stopped insisting
                on a new window and
                started asking about
                the sill pan retrofit.
                The KC wind-driven
                rain section also
                helped — explaining
                that spring storm
                systems drive rain
                at angles that a caulk-only
                installation was never
                designed to handle
                made the original
                installation failure
                make sense without
                anyone being blamed.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Calder, window repair and exterior water intrusion, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A sill pan flashing repair site with water path section, sill pan
                guide, and quote form starts at $200. A full site with KC wind-driven
                rain content, AAMA installation standard, and repair vs. removal
                guide is $425–$750. One sill pan retrofit job covers the cost.
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
