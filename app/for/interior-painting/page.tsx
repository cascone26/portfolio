import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Interior Painting Companies in Kansas City",
  description:
    "Custom websites for interior painting, house painting, and residential painting companies in the Kansas City area. Show your KC humidity effects on paint adhesion and dry time, latex vs. oil-based primer for KC drywall and wood trim, and proper surface prep sequence to win interior painting contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/interior-painting",
  },
};

export default function InteriorPaintingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Interior Painting Companies in Kansas City",
    description: "Custom websites for interior painting and residential painting companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Interior Painting Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their bathroom paint is peeling within a year, whether they need oil or latex primer on their wood trim, and what sheen level holds up to KC humidity in kitchens and bathrooms. A website that explains interior painting earns the call from the homeowner whose builder-grade flat paint is scuffing and who wants a professional result that lasts. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Interior Painting in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Interior Painting</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Interior painting
              customers are
              KC homeowners
              whose bathroom
              or kitchen paint
              is peeling —
              the delamination
              that occurs
              when latex paint
              is applied over
              an unprepared
              or contaminated
              surface in
              a high-humidity
              KC bathroom
              without a moisture-resistant
              primer; homeowners
              who want to
              repaint after
              water damage
              or a bathroom
              renovation and
              want to understand
              why preparation
              determines
              whether the
              new paint lasts
              two years or
              ten; or homeowners
              repainting wood
              trim, doors,
              and cabinets
              and wanting
              to understand
              whether to
              use oil-based
              or water-based
              primer and
              which sheen
              levels hold
              up to KC humidity
              and cleaning.
              The central
              education is
              KC indoor humidity
              — from forty
              to eighty percent
              relative humidity
              depending on
              season and
              bathroom ventilation —
              as the variable
              that determines
              paint product
              selection and
              application
              conditions,
              the difference
              between latex
              and oil-based
              primer for
              different substrate
              types in a
              KC home, and
              sheen level
              selection for
              rooms with
              cleaning, moisture,
              or traffic —
              three things
              that determine
              whether a homeowner
              understands
              why paint selection
              and prep, not
              just the color
              choice, produce
              a result that
              holds up in
              a KC home.
              KC humidity
              and paint adhesion:
              Kansas City
              interior relative
              humidity ranges
              from thirty-five
              to fifty percent
              in winter with
              the furnace
              running to
              sixty to eighty
              percent in
              bathroom and
              kitchen spaces
              during summer;
              latex paint
              applied when
              indoor relative
              humidity exceeds
              fifty to sixty
              percent dries
              slowly and
              can sag or
              develop surface
              defects; paint
              applied over
              grease, soap
              film, or moisture-damaged
              drywall without
              priming will
              peel at the
              contamination
              zone regardless
              of paint quality;
              bathroom paint
              peeling in
              KC homes is
              most commonly
              caused by condensation
              from shower
              steam cycling
              against a
              surface that
              was not primed
              with a moisture-resistant
              primer before
              painting; premium
              latex with
              a mildewcide
              additive and
              a moisture-resistant
              primer on the
              substrate prevents
              the peeling
              cycle that
              causes KC homeowners
              to repaint
              bathrooms every
              two to three
              years. Oil vs.
              latex primer:
              oil-based primer
              is the correct
              choice for
              bare wood trim,
              cabinet faces,
              and doors —
              it penetrates
              the wood grain,
              seals knots
              and tannin-bleeding
              wood species,
              and provides
              a hard foundation
              for topcoat
              adhesion in
              a KC home where
              wood trim expands
              and contracts
              with the one-hundred-ten
              degree annual
              temperature
              swing; latex
              primer is appropriate
              for drywall,
              previously painted
              surfaces in
              good condition,
              and fast-turnaround
              work where
              oil dry time
              is a constraint;
              shellac-based
              primer is required
              for stain blocking —
              water stains,
              smoke damage,
              and severe
              tannin bleeding
              that a latex
              or oil primer
              will not adequately
              block; the
              primer type
              is not optional —
              applying premium
              topcoat over
              the wrong primer
              or no primer
              produces the
              same failure
              as applying
              budget paint
              over correct
              prep. Sheen
              selection: flat
              and matte finishes
              hide surface
              imperfections
              but cannot
              be scrubbed
              without burnishing —
              appropriate
              for ceilings
              and low-traffic
              bedroom walls
              in KC homes;
              eggshell and
              satin provide
              light sheen,
              cleanability,
              and moisture
              resistance —
              the standard
              for KC living
              rooms, hallways,
              and bedrooms;
              semi-gloss
              and gloss are
              appropriate
              for trim, doors,
              cabinets, bathrooms,
              and kitchens —
              the sheen level
              that withstands
              repeated cleaning
              without surface
              degradation
              and resists
              moisture absorption
              in high-humidity
              KC spaces; builder-grade
              flat paint
              on kitchen
              and bathroom
              walls is the
              most common
              source of dissatisfaction —
              it shows every
              fingerprint
              and cannot
              be cleaned
              without leaving
              a mark. An
              interior painting
              website that
              explains KC
              humidity effects
              on paint product
              selection and
              dry conditions,
              oil vs. latex
              primer for
              wood trim and
              drywall, and
              sheen level
              for moisture-prone
              KC rooms earns
              the homeowner
              whose bathroom
              paint is peeling
              and who wants
              to understand
              what a professional
              application
              does differently.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before interior painting
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC humidity and paint — 60-80% bathroom RH, slow dry time, peeling from condensation without moisture-resistant primer",
                  "Oil vs. latex primer — bare wood knot sealing, tannin bleed blocking, drywall vs. wood substrate selection",
                  "Sheen level guide — flat/matte ceiling, eggshell/satin walls, semi-gloss trim and wet areas, cleanability",
                  "Bathroom paint peeling — steam condensation cycle, primer type required, mildewcide additive selection",
                  "Two-coat vs. one-coat — coverage by color change magnitude, primer coat vs. paint coat, hide rating",
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
                What your interior painting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC humidity section — seasonal RH range, bathroom steam cycle, application condition requirements",
                  "Primer section — oil vs. latex vs. shellac, substrate selection, stain and tannin blocking applications",
                  "Sheen guide section — room-by-room sheen selection, cleanability trade-off, KC high-traffic and moisture zones",
                  "Prep section — surface cleaning, patching, sanding, contamination removal before primer",
                  "Product section — paint grade comparison, premium latex with mildewcide, KC humidity-appropriate formulas",
                  "Quote form with rooms, current paint condition, sheen preference, trim included, water damage or stains present",
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
                &ldquo;The primer section
                is what converts
                the bathroom
                repaint into
                a full prep
                and product
                upgrade. KC
                homeowners who
                call about peeling
                bathroom paint
                have usually
                had a painter
                roll latex
                directly over
                the existing
                surface without
                a moisture-resistant
                primer. After
                the section
                went up explaining
                that shower
                steam condensing
                on a wall
                without a proper
                moisture barrier
                pushes any
                latex coating
                off in one
                to two years,
                customers stopped
                asking for
                the cheapest
                re-coat and
                started asking
                what primer
                would stop
                the cycle.
                The sheen guide
                also upgrades
                every room —
                KC homeowners
                who understand
                that builder-grade
                flat on a
                kitchen wall
                cannot be
                cleaned stop
                wondering why
                the professional
                recommendation
                is a satin
                or eggshell
                finish.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Marsh, interior painting and residential paint contractor, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An interior painting site with KC humidity section, primer type guide,
                sheen selection, and quote form starts at $200. A full site with prep
                sequence, product comparison, and bathroom-specific moisture protocol
                is $425–$750. One room repaint covers the cost. No contracts, no monthly fees.
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
