import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pergola Building Companies in Kansas City",
  description:
    "Custom websites for pergola installation, custom pergola building, and outdoor structure companies in the Kansas City area. Show your pergola styles, material options, and louvered roof systems to win residential and commercial pergola contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pergola-building",
  },
};

export default function PergolaBuilding() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pergola Building Companies in Kansas City",
    description: "Custom websites for pergola building companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pergola Building Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners planning an outdoor living space want to see material options, louvered roof systems, and how a pergola connects to the house. A website with a portfolio and clear material comparisons earns the design consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pergola Building in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pergola Building</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pergola customers are homeowners
              who want to extend their outdoor
              living space into something usable
              for more of the Kansas City season —
              shade in summer, weather protection
              for a grill or dining area,
              or a defined outdoor room that
              feels intentional. The material
              decision is the first major choice:
              pressure-treated pine is the
              entry-level option and stains
              well but requires ongoing maintenance.
              Western red cedar is the premium
              natural wood choice — naturally
              rot-resistant, beautiful grain,
              but more expensive. Aluminum and
              vinyl pergola kits from brands
              like Stratco, Palram, or Yardistry
              are maintenance-free but look
              different from custom wood.
              Louvered roof pergolas — systems
              like Equinox, Azenco, or Struxure —
              have adjustable aluminum louvers
              that can be opened for sun or
              closed for rain, turning an
              outdoor space into a four-season
              room. These are a premium product
              with prices starting around
              $10,000 for a basic system and
              running much higher for larger
              covered areas with integrated
              lighting and heating. Homeowners
              also want to know attachment
              options — ledger-attached to
              the house versus freestanding —
              and whether a permit is required
              (in most KC municipalities a
              pergola over a certain size
              requires a permit). A pergola
              website that shows the material
              options with real project photos,
              explains louvered systems, and
              makes scheduling a design
              consultation easy earns the
              homeowner who has been
              planning the backyard project
              for two summers.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before building a pergola
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material options — pressure-treated pine, cedar, aluminum, vinyl — maintenance, appearance, longevity",
                  "Louvered roof systems — Equinox, Struxure, Azenco — how they work, cost range, weather protection",
                  "Attached vs. freestanding — ledger attachment to house, post-set freestanding, pros and cons of each",
                  "Permitting — whether a permit is required in their municipality, what the inspection covers",
                  "Additions — integrated lighting, ceiling fans, outdoor speakers, shade sails, privacy screens",
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
                What your pergola building website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material guide — cedar vs. pressure-treated vs. aluminum — maintenance, appearance, cost comparison",
                  "Portfolio — attached pergolas, freestanding, louvered roof — real KC backyard projects",
                  "Louvered roof systems — how adjustable louvers work, season extension, brands we install",
                  "Custom features — integrated lighting, ceiling fans, privacy screens, outdoor kitchen integration",
                  "Permitting — KC metro municipality requirements, how we handle permit process",
                  "Design form with yard dimensions, attachment preference, material interest, feature wishlist, timeline",
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
                &ldquo;Pergola customers have been
                thinking about the project for
                months and they do all their
                research online before they
                call anyone. Without a website
                I was invisible to that research
                phase. By the time they called
                a contractor, they had already
                picked a material and had a
                rough idea of what they wanted —
                and they called whoever had
                shown them the most useful
                information. The new site
                with our material comparison,
                our louvered roof section,
                and a real portfolio brought
                in customers who already knew
                what they wanted and were
                ready to get a quote.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — E. Vasquez, custom pergola builder, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pergola site with portfolio,
                material guide, and design form
                starts at $225. A full site with
                louvered roof section, custom
                features, and permitting guide
                is $425–$850. One mid-size
                pergola project covers the cost.
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
