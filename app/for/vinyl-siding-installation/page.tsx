import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Vinyl Siding Installation Companies in Kansas City",
  description:
    "Custom websites for vinyl siding, fiber cement, and exterior cladding companies in the Kansas City area. Show your panel profiles, insulated siding options, and finished homes to win residential siding installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/vinyl-siding-installation",
  },
};

export default function VinylSidingInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Vinyl Siding Installation Companies in Kansas City",
    description: "Custom websites for vinyl siding installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Vinyl Siding Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners replacing siding want to understand the difference between standard and insulated vinyl, how D4 vs D5 profiles look on a house, and whether fiber cement is worth the price premium. A website with a color and profile gallery earns the quote call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Siding Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Vinyl Siding Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Vinyl siding customers are
              homeowners replacing aged,
              faded, or damaged siding —
              either full replacements
              or re-siding after storm
              damage insurance claims.
              The first decision is
              material: vinyl is the
              dominant choice for
              cost, color retention,
              and no-paint maintenance,
              but fiber cement (James
              Hardie being the dominant
              brand) offers a premium
              wood-grain aesthetic and
              superior impact resistance
              at a meaningfully higher
              price point and more
              demanding installation
              requirements (Hardie
              installers require
              specific certification).
              Within vinyl, the
              key differentiators
              are panel profile (D4
              — four-inch exposure,
              traditional horizontal
              look; D5 — five-inch,
              contemporary; Dutch
              lap — beveled shadow
              line; beaded — rounded
              groove for a cottage look)
              and insulated vs. standard:
              insulated vinyl has a
              foam backing laminated
              to the panel that
              adds R-2 to R-4 insulation,
              reduces denting and
              hollow sound, and
              provides a more
              solid feel. Thickness
              matters: .040 gauge
              is builder grade,
              .044 and .046 are
              better grades, .050
              and above are premium.
              Color selection drives
              most of the buying
              decision — customers
              want to see panels
              on real houses, not
              chips on a board.
              Soffit and fascia
              replacement is typically
              done at the same time.
              A vinyl siding website
              with a profile and
              color gallery, an
              insulated vs. standard
              comparison, and a
              James Hardie vs. vinyl
              breakdown earns the
              homeowner who is making
              a decision that will
              last twenty to forty years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing a siding company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Vinyl vs. fiber cement — James Hardie cost premium, impact resistance, paint requirement, appearance",
                  "Panel profiles — D4 vs. D5 vs. Dutch lap vs. beaded — what each looks like on a finished house",
                  "Insulated vs. standard — foam-backed panels, R-value difference, dent resistance, energy impact",
                  "Thickness and grade — what .040 vs. .046 vs. .050 gauge means for durability and warranty",
                  "Color selection — fade resistance, warranty terms, popular KC neighborhood colors, before and after photos",
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
                What your vinyl siding website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Profile gallery — D4, D5, Dutch lap, beaded, shakes — photos on real KC homes showing each style",
                  "Color selector — full color palette, fade warranty comparison, popular combinations with trim and accents",
                  "Insulated vs. standard — foam backing explained, R-value, dent resistance, when the upgrade is worth it",
                  "Vinyl vs. Hardie — honest comparison, cost difference, when fiber cement is the right choice",
                  "Soffit and fascia — why replacing at the same time makes sense, what seamless aluminum looks like",
                  "Quote form with home size, current siding material, profile preference, color ideas, timeline",
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
                &ldquo;Siding is a twenty-year decision
                and customers want to get it
                right. The hardest part was
                helping people visualize the
                color and profile on their
                actual house — chip boards
                do not do it. The website
                with our gallery of real
                KC homes, the insulated
                vs. standard comparison,
                and photos of different
                profiles side by side
                meant customers came
                to estimates already
                knowing what they
                wanted and why.
                We closed more jobs
                at higher ticket
                sizes because the
                website did the
                education work first.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Sorensen, siding installation contractor, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A siding site with profile gallery,
                color options, and quote form starts
                at $225. A full site with insulated
                vs. standard guide, vinyl vs. fiber
                cement comparison, and soffit and
                fascia section is $425–$850. One
                full siding job covers the cost.
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
