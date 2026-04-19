import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pergola Installation Companies in Kansas City",
  description:
    "Custom websites for pergola installation, shade structure, and outdoor living companies in the Kansas City area. Show your cedar, vinyl, and aluminum pergola options, louvered roof systems, and finished outdoor spaces to win pergola installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pergola-installation",
  },
};

export default function PergolaInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pergola Installation Companies in Kansas City",
    description: "Custom websites for pergola installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pergola Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to understand the difference between a standard open pergola and a louvered roof system, whether cedar or aluminum holds up better in KC weather, and whether a permit is required for their deck attachment. A website with material comparisons earns the design consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pergolas in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pergola Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pergola customers are homeowners
              wanting to define and
              extend their outdoor
              living space — over
              a patio, deck, or
              pool area — with
              a shade structure
              that provides partial
              protection from sun
              while maintaining
              an open-air feel.
              The most important
              education is material
              selection: cedar
              (or pressure-treated
              pine) is the traditional
              choice — natural wood
              appearance, stainable,
              lower upfront cost,
              but requires periodic
              sealing or staining
              to maintain and
              will check and gray
              without maintenance.
              Cellular PVC/vinyl
              pergolas (AZEK,
              Fiberon) are maintenance-free,
              won&apos;t rot or
              check, and hold
              color, but are
              more expensive.
              Powder-coated aluminum
              (Palram, Palermo,
              Equinox) is the
              structural choice
              for louvered and
              motorized systems —
              the frames are
              extremely durable
              but have an industrial
              profile some homeowners
              dislike for residential
              settings. The big
              category differentiation
              is open-top pergola
              vs. louvered roof:
              a traditional pergola
              has fixed rafters
              and provides filtered
              shade — rain passes
              through. A louvered
              roof system (Equinox,
              StruXure, Pergola
              Kits USA) has adjustable
              aluminum louvers
              that can be opened
              for sun and closed
              for rain and wind
              protection. Some
              louvered systems
              integrate LED lighting,
              heating elements,
              and retractable
              privacy screens.
              Freestanding vs.
              attached: attached
              pergolas connect
              to the house with
              a ledger board —
              in many KC jurisdictions
              this triggers a
              permit (same as
              a deck addition).
              Freestanding pergolas
              typically fall below
              permit thresholds.
              A pergola website
              with material comparisons,
              louvered system
              options, and permit
              guidance earns the
              homeowner who has
              been staring at
              their bare patio
              slab all summer.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing a pergola
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material options — cedar vs. vinyl vs. aluminum — maintenance needs, appearance, longevity comparison",
                  "Open top vs. louvered — what a louvered roof system provides, how louvers work, rain protection",
                  "Attached vs. freestanding — ledger attachment to house, permit implications, structural requirements",
                  "Louvered system features — adjustable louvers, integrated lighting, heaters, screens — brand options",
                  "KC weather durability — how each material handles summer heat, freeze-thaw, hail, and humidity",
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
                What your pergola installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material guide — cedar, vinyl, aluminum — cost, maintenance, lifespan, appearance trade-offs",
                  "Open pergola vs. louvered roof — how each looks, what each provides, photos of both on KC homes",
                  "Louvered systems — Equinox, StruXure options, motorized louvers, screens, lighting, heater add-ons",
                  "Attached vs. freestanding — how each is built, permit requirements for KC area jurisdictions",
                  "Gallery — finished pergolas over patios, decks, and pools on KC-area homes in each material",
                  "Consultation form with location, surface type, size needed, material preference, louvered interest",
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
                &ldquo;Pergola customers either
                have a clear idea of
                what they want or
                no idea at all — almost
                nothing in between.
                The ones who had done
                no research wanted
                a full education on
                cedar versus aluminum
                and what a louvered
                roof even is. The
                website with the material
                comparison, the louvered
                system photos, and
                the attached versus
                freestanding permit
                note handled that
                first layer for me.
                Consultations started
                at the space design
                level instead of the
                what-is-a-pergola
                level, and my average
                job size went up
                because customers
                understood the full
                range of options.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Tran, outdoor living contractor, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pergola site with material guide,
                open vs. louvered comparison, and
                consultation form starts at $225. A
                full site with louvered system options,
                photo gallery, and permit guide is
                $425–$850. One pergola installation
                covers the cost. No contracts,
                no monthly fees.
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
