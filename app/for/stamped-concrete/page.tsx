import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Stamped Concrete Companies in Kansas City",
  description:
    "Custom websites for stamped concrete, decorative concrete, and colored concrete companies in the Kansas City area. Show your pattern options, color integral and release agents, and sealer requirements to win stamped concrete contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/stamped-concrete",
  },
};

export default function StampedConcretePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Stamped Concrete Companies in Kansas City",
    description: "Custom websites for stamped concrete and decorative concrete companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Stamped Concrete Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how stamped concrete compares to pavers in cost and maintenance, whether the color fades over time, and what sealing involves long-term. A website with pattern photos and honest sealer expectations earns the design consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Stamped Concrete in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Stamped Concrete</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Stamped concrete customers
              are homeowners designing
              a new patio, pool
              deck, driveway, or
              walkway and want
              the appearance of
              stone, brick, or
              wood at a lower
              cost than the real
              material — and
              without the joint
              maintenance, settling,
              and weed growth
              that comes with
              pavers. The central
              education is the
              color and sealer
              system: integral
              color (pigment mixed
              into the concrete
              batch, Brickform
              or Davis Colors)
              provides base color
              throughout the
              full depth of the
              slab — it does
              not fade because
              it is not a surface
              treatment. Release
              agent (powder or
              liquid antistick
              applied to the
              stamp before pressing)
              leaves a secondary
              color in the recesses
              of the pattern —
              this creates the
              tonal variation
              that makes stamped
              concrete look like
              stone rather than
              a monochrome texture.
              The sealer is the
              maintenance item:
              high-gloss acrylic
              sealers (Brickform
              Lithi-Tek 9500,
              SureCrete XS-327)
              enhance color depth
              and protect the
              surface but require
              reapplication every
              2–3 years in KC
              because UV and
              freeze-thaw cycles
              degrade acrylic.
              Penetrating sealers
              (silane-siloxane,
              Siloxa-Tek 8500)
              are invisible and
              longer-lasting but
              do not enhance
              color gloss. Stamped
              concrete vs. pavers:
              stamped concrete
              is 25–40% less
              expensive installed,
              has no joint settling
              or shifting, and
              does not grow weeds.
              Pavers can be individually
              replaced if one
              cracks; stamped
              concrete cannot
              be invisibly patched —
              a cracked section
              requires either
              living with it
              or replacing the
              whole pour. Expansion
              joints are critical:
              control joints
              cut at 8–10 ft
              intervals guide
              where cracking
              occurs (along the
              joint) rather than
              randomly across
              a panel. A stamped
              concrete website
              that shows pattern
              and color options,
              explains the sealer
              maintenance honestly,
              and addresses the
              pavers comparison
              earns the homeowner
              who wants the look
              but has questions
              about the long-term.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing stamped concrete
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Stamped concrete vs. pavers — cost, maintenance, crack repair difference, weed and settling comparison",
                  "Color system — integral color vs. release agent, whether color fades, how tonal variation is created",
                  "Sealer maintenance — how often resealing is needed, what happens if skipped, gloss vs. matte options",
                  "Pattern options — ashlar slate, cobblestone, wood plank, flagstone — which patterns work in KC",
                  "Crack risk — how control joints reduce cracking, what happens if a stamped section cracks later",
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
                What your stamped concrete website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pattern gallery — ashlar slate, cobblestone, flagstone, wood plank on KC-area patios and driveways",
                  "Color system explanation — integral color throughout the pour, release agent tonal variation",
                  "Sealer guide — acrylic vs. penetrating, reapplication frequency, KC freeze-thaw impact on acrylic",
                  "Stamped concrete vs. pavers — honest comparison with cost, repair, weed, and settling differences",
                  "Control joint section — where cuts go, how they manage cracking, how we design them into patterns",
                  "Design form with project type (patio/driveway/pool deck), square footage, pattern and color preferences",
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
                &ldquo;The comparison with pavers
                was my hardest conversation —
                customers would get a paver
                quote and a stamped concrete
                quote and not understand
                why they were so different
                in price. The website
                section explaining what
                you can and cannot do
                if a paver cracks vs.
                what you can and cannot
                do if stamped concrete
                cracks gave them an honest
                picture instead of a
                sales pitch. I close
                customers better now
                because they made the
                decision before calling —
                they already chose stamped
                and called me to get
                started, not to compare.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — H. Vasquez, decorative concrete contractor, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A stamped concrete site with pattern
                gallery, color explanation, and design
                form starts at $200. A full site with
                sealer guide, stamped vs. pavers comparison,
                and control joint section is $425–$750.
                One patio pour covers the cost. No
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
