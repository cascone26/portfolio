import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Ceiling Medallion Installation Companies in Kansas City",
  description:
    "Custom websites for ceiling medallion installation, decorative ceiling trim, and ceiling rose companies in the Kansas City area. Show your medallion sizing by fixture and room, adhesive vs. screw method, and older KC home ceiling texture matching to win medallion installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/ceiling-medallion-installation",
  },
};

export default function CeilingMedallionInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Ceiling Medallion Installation Companies in Kansas City",
    description: "Custom websites for ceiling medallion installation and decorative ceiling trim companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Ceiling Medallion Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what size ceiling medallion looks right for their dining room chandelier, whether a medallion can go on a textured ceiling without looking uneven, and how a two-piece medallion is installed around an existing light fixture without removing it. A website that explains ceiling medallion installation earns the trim call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Ceiling Medallion Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Ceiling Medallion Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Ceiling medallion installation
              customers are KC homeowners
              adding a decorative focal
              point to a dining room
              chandelier in a 1920s
              or 1930s Brookside or
              Waldo bungalow that originally
              had ornate ceiling plaster
              details since removed,
              homeowners in newer
              KC homes who want to
              dress a plain ceiling
              around a pendant fixture
              or ceiling fan, or
              homeowners refinishing
              a parlor or living
              room and wanting period-appropriate
              detail that matches
              the existing crown molding
              profile. The central
              education is medallion
              sizing by fixture and
              room, two-piece installation
              for existing fixtures,
              and texture matching
              under the medallion —
              three things that separate
              a medallion that looks
              considered from one
              that looks pasted on.
              Medallion sizing: the
              medallion diameter
              should be 1 inch for
              every foot of room
              width — a 12-foot wide
              dining room calls for
              a 12-inch medallion
              as a minimum; for a
              chandelier with a canopy
              less than 6 inches
              in diameter, a 12–16
              inch medallion creates
              proper visual weight;
              for a chandelier with
              a larger canopy (8+
              inches), a medallion
              20–24 inches adds definition
              without competing with
              the fixture; the medallion
              center hole must be
              larger than the canopy
              diameter — typically
              the medallion center
              is 3.5 inches to fit
              over standard 4-inch
              round ceiling boxes;
              medallions are available
              in polyurethane (paintable,
              lightweight, does not
              crack with KC humidity
              swings), plaster (period-appropriate
              for pre-1940 KC homes,
              heavy, fragile), and
              PVC (extremely durable,
              paintable, but profiles
              are simpler). Two-piece
              installation: a two-piece
              or split medallion installs
              around an existing
              fixture without removing
              the fixture — each
              half slides behind
              the canopy from opposite
              sides and joins at
              the center line; the
              joint is caulked, filled,
              and sanded before painting;
              the finished joint
              is invisible after
              painting on a smooth
              ceiling; on a textured
              ceiling (orange peel
              or knockdown, common
              in KC homes from 1985–2005),
              the area under the
              medallion must be scraped
              smooth before installation —
              the medallion will
              not sit flat on texture
              and the adhesive will
              not bond to the raised
              aggregate. Texture matching:
              after installation,
              the transition between
              the smooth ceiling
              under the medallion
              perimeter and the surrounding
              textured ceiling is
              visible — the smooth
              ring shows the medallion
              footprint; the correction
              is to feather texture
              from the medallion
              edge outward with a
              spray texture gun or
              texture sponge to
              blend the transition;
              this is the detail
              that makes the medallion
              look original rather
              than retrofitted. A
              ceiling medallion website
              that explains sizing
              by room and fixture,
              two-piece installation,
              and texture transition
              earns the homeowner
              who wants the result
              to look like it was
              always there.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before ceiling medallion installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Sizing — 1-inch per room-foot rule, chandelier canopy relationship, center hole diameter requirement",
                  "Material — polyurethane vs. plaster vs. PVC, KC humidity stability, period-appropriate for pre-1940 homes",
                  "Two-piece installation — how split medallion installs without removing fixture, joint finishing",
                  "Textured ceiling — why medallion won't sit flat on texture, scraping and smoothing requirement",
                  "Texture matching — feathering transition at medallion perimeter, spray vs. sponge texture application",
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
                What your ceiling medallion installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Sizing section — room-width rule, chandelier canopy guide, center hole dimension, visual proportion",
                  "Material section — polyurethane humidity stability, plaster for pre-1940 KC bungalows, PVC option",
                  "Two-piece guide — split medallion procedure, joint fill and sand, finished joint appearance",
                  "Textured ceiling section — why scraping is required, smooth patch under medallion footprint",
                  "Texture match section — feathering method, spray vs. sponge, seamless transition approach",
                  "Quote form with room size, fixture canopy size, ceiling texture, existing detail in room, timeline",
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
                &ldquo;The texture transition section
                is the one thing DIYers
                miss every time. I get calls
                from homeowners in Waldo
                who installed a medallion
                themselves and now there&apos;s
                a smooth white ring around
                it where the texture was
                scraped off. The section
                explaining that the feathering
                step is part of the installation,
                not optional, stopped that
                entirely. Customers in Brookside
                bungalows with original plaster
                ceilings are another group —
                the two-piece section helped
                them understand they didn&apos;t
                have to take down the chandelier
                to add a medallion, which
                was the reason most of them
                hadn&apos;t done it yet.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Forrest, interior trim and decorative installation, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A ceiling medallion site with sizing section, two-piece installation
                guide, and quote form starts at $200. A full site with material
                comparison, textured ceiling content, and texture match guide
                is $425–$750. One dining room chandelier medallion covers the
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
