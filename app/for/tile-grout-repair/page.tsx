import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tile and Grout Repair Companies in Kansas City",
  description:
    "Custom websites for tile and grout repair, grout recoloring, and tile replacement companies in the Kansas City area. Show your grout types, crack causes, and regrout vs. replacement options to win tile repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tile-grout-repair",
  },
};

export default function TileGroutRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tile and Grout Repair Companies in Kansas City",
    description: "Custom websites for tile and grout repair and replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tile Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether cracked grout means the tile is failing or just needs regrout, what causes grout to crack in a shower vs. a floor, and whether recoloring grout actually lasts. A website that explains movement joints and substrate causes earns the repair call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tile Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tile and Grout Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tile and grout repair
              customers are homeowners
              with cracked or
              missing grout in
              a shower, bathroom
              floor, or kitchen
              backsplash — often
              accompanied by
              discolored or stained
              grout that cleaning
              has not improved,
              or a tile that
              has cracked or
              come loose. The
              central education
              is what causes
              grout to fail
              and when failure
              indicates a substrate
              problem vs. a
              grout problem:
              grout in showers
              and wet areas
              cracks primarily
              because of movement —
              the substrate (cement
              board, Schluter
              KERDI membrane,
              or traditional
              mud bed) deflects
              slightly under
              foot load, thermal
              expansion, or
              building movement,
              and rigid grout
              cracks at the
              weakest joint.
              Grout cracking
              at corners (where
              wall meets floor,
              wall meets wall)
              is especially common
              because these are
              natural movement
              planes — the TCNA
              (Tile Council of
              North America)
              specifies that
              all interior corners
              in tile installations
              should be caulked
              with flexible sealant
              rather than grouted.
              When grout is consistently
              regrout and cracking
              in the same locations,
              the substrate is
              moving — regrout
              will fail again
              in the same timeline.
              Loose tiles (hollow
              sound when tapped,
              movement under
              foot) indicate
              thinset bond failure —
              often because the
              original thinset
              was applied to
              a contaminated
              or improperly prepared
              surface, or because
              the tile was installed
              over a substrate
              with too much flex
              (OSB subfloor without
              cement board). Grout
              types: sanded grout
              for joints over
              1/8" wide (standard
              floor grout); unsanded
              for joints under
              1/8" (wall tile,
              polished stone
              that sanded would
              scratch); epoxy
              grout (Laticrete
              Spectralock, Mapei
              Kerapoxy) is stain-impermeable
              and does not require
              sealing — the
              correct choice
              for kitchen and
              heavily used areas.
              Grout recoloring
              (Polyblend Grout
              Renew, Rust-Oleum
              Grout Colorant):
              a penetrating colorant
              stains and seals
              existing grout —
              effective when
              the grout is intact
              but discolored;
              does not repair
              cracked or missing
              grout. A tile
              repair website
              that explains
              corner movement
              joints, when regrout
              will fail again,
              and what loose
              tiles indicate
              about the substrate
              earns the homeowner
              whose shower grout
              has been cracking
              every year since
              the house was built.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before repairing tile and grout
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why grout cracks — movement in the substrate, corner planes, why rigid grout fails at expansion joints",
                  "Regrout vs. substrate repair — when cracking in the same spot means regrout will fail again",
                  "Loose tile causes — thinset bond failure, substrate flex, what tapping reveals about adhesion",
                  "Grout types — sanded vs. unsanded vs. epoxy — when each is specified, stain resistance difference",
                  "Grout recoloring — what it does and does not fix, how long colorant lasts vs. full regrout",
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
                What your tile repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why grout cracks section — substrate movement, corner plane movement, TCNA corner caulk specification",
                  "Regrout vs. substrate repair — when repeated cracking in the same location means deeper work is needed",
                  "Loose tile section — thinset bond failure indicators, substrate flex causes, what hollow sound means",
                  "Grout types guide — sanded, unsanded, epoxy — specifications, scratch risk, stain resistance",
                  "Grout recoloring section — what colorant does, integrity requirement, how to evaluate if grout qualifies",
                  "Assessment form with location, grout age, cracking pattern, tiles loose or solid, staining observed",
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
                &ldquo;I was losing jobs to
                homeowners who would
                just buy a grout tube
                from the hardware store
                and do it themselves —
                then call me six months
                later when it cracked
                in the same spot. The
                website section explaining
                why corner cracking is
                a movement plane issue
                and why rigid grout in
                corners always fails
                changed who was calling
                me. Customers arrived
                already knowing regrout
                alone might not be enough
                and open to the substrate
                conversation. My callback
                rate for regrout jobs
                dropped significantly.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Nguyen, tile contractor, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tile repair site with grout crack
                cause section, regrout vs. substrate
                guide, and assessment form starts
                at $200. A full site with grout types
                comparison, loose tile section, and
                recoloring guide is $425–$750. One
                shower regrout covers the cost. No
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
