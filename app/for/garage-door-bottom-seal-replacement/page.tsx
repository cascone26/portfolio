import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Garage Door Bottom Seal Replacement Companies in Kansas City",
  description:
    "Custom websites for garage door bottom seal replacement, garage door weatherseal, and garage door draft companies in the Kansas City area. Show your T-slot vs. nail-on seal type, floor gap measurement, and KC winter seal material selection to win garage seal contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/garage-door-bottom-seal-replacement",
  },
};

export default function GarageDoorBottomSealReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Garage Door Bottom Seal Replacement Companies in Kansas City",
    description: "Custom websites for garage door bottom seal replacement and weatherseal companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garage Door Bottom Seal Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their garage door seal slides into a channel or nails to the door, how wide a gap the seal can cover before the door needs adjustment, and why rubber seals crack in KC winters. A website that explains garage door bottom seal replacement earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garage Door Bottom Seal Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Garage Door Bottom Seal Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Garage door bottom seal
              replacement customers
              are KC homeowners who
              see daylight under
              the garage door in
              winter and feel cold
              air in the attached
              garage, homeowners
              whose existing rubber
              seal has cracked, stiffened,
              and torn after KC winters
              and is no longer contacting
              the floor across the
              full door width, or
              homeowners who had
              a concrete apron leveled
              or the garage floor
              resurfaced and the
              existing seal no longer
              fits the new floor height.
              The central education
              is seal type by door
              bottom design, gap
              coverage limit, and
              material selection
              for KC temperature
              range — three things
              that determine whether
              a bottom seal lasts
              one KC winter or ten.
              Seal type: the two
              main types are T-slot
              (also called T-end)
              and nail-on; T-slot
              seals have a T-shaped
              top edge that slides
              into a metal retainer
              channel bolted to the
              door bottom — the seal
              is replaced by sliding
              the old one out and
              the new one in from
              the side of the door;
              this is the standard
              on most residential
              sectional doors manufactured
              after 2000; nail-on
              seals (also called
              flat seals or bulb seals)
              are stapled or nailed
              directly to the door
              bottom wood retainer —
              common on older KC
              doors with wood bottom
              sections and on one-piece
              tilt-up doors; to identify
              the type, examine the
              door bottom — if there
              is a metal channel,
              it is T-slot; if the
              seal is attached directly
              to wood or a flat aluminum
              extrusion with visible
              fasteners, it is nail-on.
              Gap coverage: a standard
              garage door bottom
              seal covers gaps of
              3/4 to 1 inch between
              the door bottom and
              the floor — this accommodates
              normal floor variation
              across the 16-foot
              width of a two-car
              door; a gap larger
              than 1 inch at the
              center or sides means
              either the door is
              out of adjustment (the
              low-end spring tension
              is too low and the
              door is not coming
              down far enough at
              the corners) or the
              floor has a high point
              or depression that
              the seal cannot bridge;
              a door adjustment by
              the operator technician
              should precede seal
              replacement if the
              gap exceeds 1.5 inches
              at any point. Material:
              standard garage door
              seals are EPDM rubber —
              EPDM stiffens significantly
              below 20°F and becomes
              brittle at -10°F, temperatures
              that KC experiences
              several times per winter;
              a stiff EPDM seal in
              January does not compress
              and conform to floor
              variation and allows
              cold air through even
              when new; thermoplastic
              rubber (TPR) or silicone-blend
              seals remain flexible
              at -30°F and outlast
              EPDM 2-to-1 in KC
              temperature cycling;
              the cost difference
              is $15–$25 for a 16-foot
              door seal. A garage
              door seal website that
              explains T-slot vs.
              nail-on identification,
              gap coverage limits,
              and why EPDM fails
              in KC winters earns
              the homeowner who wants
              the right seal installed
              once.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before garage door bottom seal replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Seal type — T-slot vs. nail-on identification, metal channel vs. fastened direct, replacement method",
                  "Gap coverage — 3/4 to 1 inch standard capacity, when door adjustment is needed first",
                  "Material choice — EPDM failure temperature, TPR/silicone blend performance in KC cold, cost difference",
                  "T-slot replacement — slide-out procedure, matching T-width to retainer, door width measurement",
                  "One-piece tilt-up seals — older KC door bottom styles, nail-on installation method",
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
                What your garage door bottom seal replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Seal type section — T-slot vs. nail-on identification guide, metal channel vs. fastened visual",
                  "Gap coverage section — 3/4-1 inch limit, how to measure your gap, when adjustment must come first",
                  "Material section — EPDM brittleness in KC cold, TPR/silicone blend advantage, cost comparison",
                  "T-slot replacement guide — slide-out process, matching T-width, door width measurement method",
                  "Nail-on guide — older KC door application, staple vs. nail, trim to length process",
                  "Quote form with door type, gap size, existing seal condition, door age, timeline",
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
                &ldquo;The material section explains
                the exact conversation I
                have at every estimate.
                Customer sees a $12 EPDM
                seal at the hardware store
                and a $27 TPR seal from
                me and wants to know what
                the difference is. After
                the section went up explaining
                that EPDM goes brittle at
                temperatures KC hits every
                January and doesn&apos;t compress
                against the floor when stiff,
                customers stopped buying
                the hardware store seal
                and bringing it to me to
                install. Two winters ago
                I had six callbacks in one
                week from customers with
                cracked EPDM seals — every
                one of them was less than
                a year old. Since the material
                section went up I haven&apos;t
                had a single callback for
                a seal that failed before
                the second winter.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Quentin, garage door service and weatherization, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garage door seal site with seal type section, material comparison,
                and quote form starts at $200. A full site with gap coverage guide,
                T-slot replacement, and nail-on content is $425–$750. One door
                seal replacement covers the cost. No contracts, no monthly fees.
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
