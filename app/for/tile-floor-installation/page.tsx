import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tile Floor Installation Companies in Kansas City",
  description:
    "Custom websites for tile floor installation, ceramic and porcelain tile, and large format floor tile companies in the Kansas City area. Show your KC subfloor deflection standard, mortar type selection, and large format tile installation requirements to win tile floor contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tile-floor-installation",
  },
};

export default function TileFloorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tile Floor Installation Companies in Kansas City",
    description: "Custom websites for tile floor installation and ceramic and porcelain tile companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tile Floor Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their tile is cracking along grout lines, whether their subfloor needs to be reinforced before large-format tile, and what the difference is between ceramic and porcelain for a KC bathroom or mudroom floor. A website that explains subfloor deflection earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tile Floor Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tile Floor Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tile floor installation
              customers are KC homeowners
              replacing vinyl sheet,
              old ceramic tile, or
              laminate in a bathroom,
              kitchen, mudroom, or
              entryway with ceramic
              or porcelain tile —
              a material that lasts
              decades in wet and
              high-traffic areas
              where other flooring
              fails. The central
              education is subfloor
              deflection: tile is
              a rigid material that
              cannot flex — when
              the subfloor deflects
              under load, the grout
              joints crack first
              and the tile cracks
              second; the Tile Council
              of North America (TCNA)
              standard for tile
              subfloor deflection
              is L/360 — that is,
              the floor span can
              deflect no more than
              one inch per three
              hundred sixty inches
              of span under a three-hundred-pound
              concentrated load;
              most Kansas City homes
              built before 1990
              have three-quarter-inch
              OSB or plywood subfloors
              over sixteen-inch
              joist spacing —
              adequate for the
              L/360 standard at
              typical residential
              spans when the subfloor
              is in good condition;
              a subfloor with soft
              spots, bounce, or
              damaged sheathing
              must be repaired
              or reinforced before
              tile — adding a second
              layer of half-inch
              cement board brings
              the assembly into
              specification; on
              concrete subfloors —
              common in KC basements
              and main-level slab
              construction — crack
              isolation membrane
              (Schluter Ditra, LATICRETE
              Strata-Mat) decouples
              the tile assembly
              from the concrete
              slab and prevents
              concrete crack transmission
              into the tile. Ceramic
              vs. porcelain: ceramic
              tile has a higher
              water absorption rate
              than porcelain —
              ceramic above three
              percent absorption
              is rated for interior
              dry or limited wet
              use; porcelain has
              a water absorption
              rate below zero-point-five
              percent and is rated
              for wet areas, freeze-thaw
              cycling, and exterior
              use; for a KC bathroom
              floor or shower floor
              where water contact
              is regular, porcelain
              is the appropriate
              choice; for a dry
              interior floor with
              no moisture exposure,
              ceramic is suitable
              and lower in cost;
              large-format porcelain
              tile — twenty-four
              by twenty-four inches
              and larger — requires
              a large-format mortar
              (medium-bed or large-and-heavy-tile
              mortar rated for low-lippage
              installation) and
              back-buttering to
              achieve full mortar
              coverage. A tile
              floor website that
              explains the L/360
              deflection standard,
              why subfloor condition
              determines tile longevity,
              and the ceramic versus
              porcelain distinction
              for wet areas earns
              the KC homeowner
              who wants tile that
              does not crack in
              the first three winters.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before tile floor installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Subfloor deflection — L/360 standard, what causes grout and tile cracking, how to test for subfloor bounce",
                  "Ceramic vs. porcelain — water absorption rating, wet area suitability, freeze-thaw performance difference",
                  "Large format tile — what makes LFT harder to install, mortar type required, back-buttering requirement",
                  "Crack isolation membrane — what Schluter Ditra does, when it's needed on concrete, how it protects tile",
                  "Grout selection — sanded vs. unsanded, epoxy grout for wet areas, joint width and grout type relationship",
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
                What your tile floor installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Subfloor section — L/360 standard explained, how we assess deflection, repair and reinforcement options",
                  "Tile selection guide — ceramic vs. porcelain absorption ratings, when each is appropriate, size considerations",
                  "Large format section — what changes at 18x18 and larger, mortar type, leveling clip system",
                  "Crack isolation section — concrete slab crack transmission, Ditra and Strata-Mat function, when required",
                  "Grout section — sanded vs. unsanded, epoxy option for wet areas, sealing schedule for cement grout",
                  "Quote form with room size, current floor material, subfloor type, tile size and style preference",
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
                &ldquo;The subfloor section
                stopped a whole category
                of callback. KC homeowners
                who had tile crack along
                the grout lines after
                one winter blamed the tile
                or the grout — they didn&apos;t
                know their subfloor was
                bouncing under load.
                After the section went
                up explaining the L/360
                standard and what a soft
                spot in the subfloor does
                to tile over time, customers
                started asking whether
                I would check the subfloor
                before quoting. That question
                alone tells me they understand
                why preparation matters
                and they&apos;re not shopping
                on price only.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Kowalczyk, tile installation, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tile floor site with subfloor deflection section, ceramic vs.
                porcelain guide, and quote form starts at $200. A full site with
                large format tile section, crack isolation membrane content, and
                grout guide is $425–$750. One bathroom floor covers the cost.
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
