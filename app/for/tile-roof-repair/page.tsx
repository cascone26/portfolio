import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tile Roof Repair Companies in Kansas City",
  description:
    "Custom websites for tile roof repair, clay tile roof, and concrete tile roof companies in the Kansas City area. Show your tile matching process, underlayment systems, and repair vs. replacement assessments to win tile roof contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tile-roof-repair",
  },
};

export default function TileRoofRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tile Roof Repair Companies in Kansas City",
    description: "Custom websites for tile roof repair and replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tile Roof Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with a tile roof want to know whether broken tiles are the whole problem or whether the underlayment underneath has failed, how to match replacement tiles to an aging roof, and whether repair or full replacement is the right call. A website that explains the underlayment issue earns the inspection. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tile Roofs in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tile Roof Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tile roof repair customers
              are homeowners with
              clay or concrete tile
              roofs experiencing
              cracked or broken
              tiles from hail or
              foot traffic, active
              leaks despite the
              tile appearing intact,
              or a roof that is
              approaching or past
              25–30 years of service
              and showing underlayment
              failure. The most
              important education
              is the two-layer
              system: the tile
              itself lasts 50+
              years (clay) or
              30–50 years (concrete),
              but it is not the
              waterproof layer —
              the tile sheds water
              and the underlayment
              beneath it is the
              actual waterproofing.
              Original tile roofs
              used 30-lb felt
              as underlayment,
              which has a 20–25
              year lifespan. When
              felt underlayment
              fails, water gets
              through even if
              the tile is unbroken.
              A roof that is 25+
              years old and leaking
              almost always needs
              underlayment replacement,
              not just tile repair.
              Modern replacement
              underlayment is
              self-adhering modified
              bitumen (GAF WeatherWatch,
              CertainTeed WinterGuard)
              or synthetic underlayment
              (Owens Corning ProArmor,
              GCP Grace Ice &amp;
              Water Shield) — both
              last significantly
              longer than felt.
              Tile matching is
              a critical service:
              clay tile color
              shifts over decades,
              and concrete tile
              profiles vary by
              manufacturer (Monier,
              Eagle, Ludowici, Boral).
              Mismatched repairs
              are visually obvious
              and reduce home value.
              Repair vs. replace
              decision: isolated
              broken tiles with
              intact underlayment
              and a relatively
              young roof are repair
              candidates. A roof
              with failing underlayment,
              widespread tile
              cracking, or 30+
              years is a replacement
              candidate — continuing
              to repair without
              addressing underlayment
              is throwing money
              at a structural
              problem. A tile
              roof website that
              explains the underlayment
              system, tile matching
              process, and repair
              vs. replacement
              threshold earns
              the homeowner who
              just found a water
              stain on the ceiling.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a tile roof repair company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Tile vs. underlayment — which layer actually keeps water out, why intact tile can still leak",
                  "Underlayment lifespan — when 30-lb felt fails, what modern underlayment replaces it, longevity difference",
                  "Repair vs. replace — how to determine if isolated repair is appropriate or underlayment replacement is needed",
                  "Tile matching — how broken tiles are matched on an aging roof, what makes a mismatch obvious",
                  "Clay vs. concrete tile — lifespan difference, weight difference, why concrete needs recoating",
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
                What your tile roof website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Two-layer system — how tile and underlayment work together, why underlayment is the waterproofing layer",
                  "Underlayment section — felt vs. modern self-adhering membranes, lifespan, when full replacement is needed",
                  "Repair vs. replace guide — the inspection criteria we use, what makes a roof a repair vs. a replacement",
                  "Tile matching process — how we source matching tile, what we check for profile and color compatibility",
                  "Clay vs. concrete section — lifespan, maintenance needs, structural load difference",
                  "Inspection form with tile type, roof age, problem description, leak location, prior repair history",
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
                &ldquo;Tile roof customers almost
                always call thinking
                they have a broken
                tile problem when
                they actually have
                an underlayment failure.
                I used to spend the
                first fifteen minutes
                of every inspection
                explaining the two-layer
                system. The website
                section on underlayment
                changed that — customers
                who found me through
                the site already
                understood why a
                20-year-old roof
                might be leaking
                through intact tile.
                I also stopped losing
                jobs to competitors
                who quoted &ldquo;tile repair&rdquo;
                at half the price
                by ignoring the
                underlayment entirely.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Patel, roofing contractor, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tile roof site with underlayment
                explanation, repair vs. replace guide,
                and inspection form starts at $200. A
                full site with tile matching process,
                clay vs. concrete section, and underlayment
                product details is $425–$750. One
                underlayment replacement covers the
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
