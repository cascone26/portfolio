import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Concrete Patio Installation Companies in Kansas City",
  description:
    "Custom websites for concrete patio installation, poured concrete patio, and decorative concrete companies in the Kansas City area. Show your control joint spacing, KC freeze-thaw mix design, and finish options to win concrete patio contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/concrete-patio-installation",
  },
};

export default function ConcretePatiInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Concrete Patio Installation Companies in Kansas City",
    description: "Custom websites for concrete patio installation and decorative concrete companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Concrete Patio Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their neighbor's patio cracked after two winters, what concrete mix handles KC's freeze-thaw cycles, and whether broom finish or exposed aggregate looks better long-term. A website that explains the installation decisions earns the patio call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Concrete Patio Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Concrete Patio Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Concrete patio installation
              customers are KC homeowners
              replacing a cracked
              or sunken slab,
              homeowners adding
              a patio where there
              is currently just
              grass, or homeowners
              upgrading from
              a temporary gravel
              pad to a finished
              surface. The central
              education is why
              concrete patios
              fail in KC and
              what decisions
              determine whether
              a slab lasts 30
              years or 10. KC&apos;s
              freeze-thaw cycle
              is the primary
              enemy — water enters
              surface pores,
              freezes, expands,
              and fractures the
              concrete from within;
              a proper patio
              slab survives this
              through mix design,
              air entrainment,
              adequate thickness,
              and correct control
              joint placement.
              Mix design and
              air entrainment:
              residential patio
              concrete should
              be a minimum 4,000
              PSI mix for KC
              exterior use —
              higher strength
              means lower water-to-cement
              ratio, which means
              fewer pores for
              water infiltration;
              air entrainment
              (5–7% air by volume
              introduced at the
              batch plant) creates
              microscopic bubbles
              that give expanding
              ice somewhere to
              go without breaking
              the paste matrix —
              non-air-entrained
              concrete spalls
              and scales badly
              in KC winters;
              water-to-cement
              ratio should be
              0.45 or lower —
              adding water at
              the job site to
              make the mix more
              workable reduces
              strength and freeze-thaw
              durability significantly.
              Slab thickness
              and base preparation:
              residential patio
              slabs should be
              a minimum 4 inches
              thick — 4 inches
              is the standard,
              5–6 inches for
              a patio that will
              see vehicle traffic
              (RV pad, boat storage);
              base preparation:
              6 inches of compacted
              crushed stone (Class
              6 base, 3/4-inch
              minus) under the
              slab provides drainage
              and a stable bearing
              surface; KC clay
              soil expands when
              wet and contracts
              when dry —
              compacted crushed
              stone breaks the
              clay contact and
              reduces differential
              movement that causes
              cracking. Control
              joint spacing:
              control joints
              are saw-cut or
              tooled grooves
              that predetermine
              where the slab
              cracks as it cures
              and thermally moves —
              without them, the
              slab cracks randomly;
              standard spacing
              is no more than
              2–3 times the slab
              thickness in feet,
              meaning a 4-inch
              slab needs joints
              every 8–12 feet;
              joints must be
              at least 1/4 of
              the slab depth
              (1 inch for a
              4-inch slab); L-shaped
              patios and irregular
              shapes need diagonal
              joints at re-entrant
              corners to prevent
              stress cracking
              at the inside angles.
              Finish options:
              broom finish is
              the standard —
              a stiff-bristle
              broom dragged across
              the surface before
              final set creates
              a slip-resistant
              texture that hides
              minor surface wear;
              exposed aggregate
              finish (seeded
              or washed) removes
              the surface cement
              paste before full
              set to expose the
              aggregate — attractive
              but requires timing
              and hosing at
              the right stage;
              salt finish creates
              a pitted texture
              by pressing rock
              salt into the surface
              and removing it
              after set —
              aesthetically popular
              in KC but the pits
              collect water and
              require sealing
              to resist KC freeze-thaw
              spalling; stamped
              concrete requires
              a color hardener
              and release agent
              before stamping —
              adds cost but
              allows stone or
              brick pattern appearance.
              A concrete patio
              website that explains
              why KC freeze-thaw
              demands air-entrained
              concrete, what
              control joint spacing
              prevents random
              cracking, and what
              each finish option
              means for maintenance
              earns the homeowner
              who has watched
              a neighbor&apos;s unloved
              slab deteriorate.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before concrete patio installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Mix design — PSI rating for KC exterior, air entrainment for freeze-thaw, water-to-cement ratio at the site",
                  "Slab thickness — 4-inch minimum, 5-6 inch for vehicle load, base preparation with compacted crushed stone",
                  "Control joint spacing — 2-3x slab thickness in feet, depth requirement, diagonal joints at re-entrant corners",
                  "Finish options — broom, exposed aggregate, salt finish freeze-thaw risk, stamped concrete color hardener",
                  "Base preparation — crushed stone depth, compaction requirement, why KC clay soil requires stone break layer",
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
                What your concrete patio installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Mix design section — 4,000 PSI minimum, air entrainment percentage, why site-added water reduces durability",
                  "Base guide — crushed stone depth and compaction, clay soil movement, drainage before slab",
                  "Control joint section — spacing formula, depth requirement, where to place joints in irregular shapes",
                  "Finish guide — broom vs. exposed aggregate vs. salt finish, KC freeze-thaw performance by finish type",
                  "Curing section — curing compound or wet cure blanket, why early drying causes surface cracking",
                  "Quote form with patio dimensions, current surface condition, preferred finish, vehicle use yes/no",
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
                &ldquo;The air entrainment section
                was what I needed to separate
                myself from every low-bid
                contractor in the area.
                Customers had no idea there
                was a difference between
                4,000 PSI air-entrained and
                the cheaper mix — they just
                saw a lower number on another
                quote and called to ask why
                mine was higher. After I
                published the section showing
                what happens to non-air-entrained
                concrete in KC winters, customers
                started asking competitors
                about air content before signing.
                I also got calls specifically
                from people who had a five-year-old
                slab already spalling who
                read the section and realized
                why. The control joint section
                did the same thing — customers
                arrived already knowing their
                old contractor hadn&apos;t cut
                joints and that&apos;s why the
                slab cracked.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Brauer, concrete flatwork and patio installation, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A concrete patio site with mix design section, control
                joint guide, and quote form starts at $200. A full site
                with base preparation guide, finish options, and curing
                content is $425–$750. One patio installation covers
                the cost. No contracts, no monthly fees.
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
