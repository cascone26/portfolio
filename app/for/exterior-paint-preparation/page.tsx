import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Exterior Paint Preparation Companies in Kansas City",
  description:
    "Custom websites for exterior paint preparation, house washing before paint, and siding prep companies in the Kansas City area. Show your KC chalking paint failure, pressure washing timing before paint, and wood vs. masonry surface prep differences to win exterior paint preparation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/exterior-paint-preparation",
  },
};

export default function ExteriorPaintPreparationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Exterior Paint Preparation Companies in Kansas City",
    description: "Custom websites for exterior paint preparation and house washing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Exterior Paint Preparation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether they need to pressure wash before painting, how long to wait after washing before the painter can start, and whether the chalky residue on their old paint means the surface isn&apos;t ready. A website that explains exterior paint preparation earns the call from the homeowner whose last paint job started peeling in two years. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Exterior Paint Preparation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Exterior Paint Preparation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Exterior paint preparation
              customers are KC homeowners
              who are scheduling
              an exterior repaint
              and whose current
              paint is showing
              chalking — the
              powdery white residue
              on the paint surface
              that transfers
              to your hand when
              you wipe it —
              peeling at the
              edges or nail
              heads, mold or
              algae staining
              in shaded areas,
              or gloss loss
              that indicates
              the topcoat UV
              protection has
              been depleted;
              homeowners whose
              painter quoted
              the job and included
              a surface preparation
              line item they
              do not understand —
              what the prep
              work entails,
              why it takes
              as long as it
              does, and what
              happens to the
              paint life if
              it is skipped
              or done incompletely;
              or homeowners
              who had an exterior
              paint job fail
              prematurely —
              peeling within
              two to three
              years — and want
              to understand
              whether the failure
              was a prep failure
              or a paint quality
              failure. The central
              education is KC
              chalking and
              oxidation as
              the primary prep
              challenge, the
              correct pressure
              wash timing before
              paint application,
              and wood versus
              masonry surface
              prep differences —
              three things that
              determine whether
              a homeowner understands
              that paint life
              is determined
              at prep, not
              at application.
              KC chalking and
              oxidation: acrylic
              exterior paint
              on a KC home
              receives approximately
              two thousand three
              hundred hours
              of direct UV
              exposure per year —
              the UV radiation
              breaks the polymer
              binder in the
              paint film and
              releases titanium
              dioxide and other
              pigment particles
              as a white powder
              on the surface;
              chalking is normal
              and begins after
              four to seven
              years on a quality
              paint job; a
              surface with
              heavy chalking
              is not a stable
              substrate for
              new paint — the
              new paint bonds
              to the chalk
              layer, not to
              the underlying
              paint, and the
              chalk layer releases
              from the substrate
              and pulls the
              new paint with
              it; the chalk
              must be removed
              mechanically
              before primer
              application — pressure
              washing at fifteen
              hundred to two
              thousand PSI
              removes chalk
              effectively without
              damaging the
              substrate on
              properly prepared
              surfaces; after
              washing, the
              surface must
              dry to below
              fifteen percent
              moisture content
              before primer
              is applied — in
              KC humidity conditions
              during spring,
              this means a
              minimum of forty-eight
              hours after
              washing before
              the painter
              can prime; painting
              over a wet or
              damp surface
              traps moisture
              under the film
              and causes blistering
              within the first
              heat cycle after
              application.
              Wash timing and
              drying window:
              pressure washing
              in April and
              May in KC carries
              risk because
              spring humidity
              and cooler temperatures
              extend the drying
              window beyond
              forty-eight hours —
              a surface washed
              in the morning
              may still be
              above fifteen
              percent moisture
              in a shaded
              north-facing section
              forty-eight hours
              later; washing
              in June through
              August allows
              faster drying
              because KC summer
              temperatures
              accelerate evaporation
              and the longer
              daylight hours
              extend the drying
              window per day;
              a painter who
              washes and primes
              on the same
              day or the next
              morning in cool
              spring conditions
              is building a
              moisture trap
              under the primer
              that will release
              as blisters in
              the first summer
              heat. Wood versus
              masonry prep:
              wood surfaces —
              LP siding, cedar,
              pine trim —
              require all loose
              and peeling paint
              to be scraped
              and sanded before
              primer; bare
              wood exposed
              during prep
              must be spot-primed
              within twenty-four
              hours to prevent
              UV tannin bleed
              through the topcoat;
              masonry surfaces —
              brick, stucco,
              concrete block —
              are alkaline when
              new and must
              be allowed to
              cure for at
              least six months
              before paint
              or primed with
              an alkali-resistant
              primer; previously
              painted masonry
              in KC commonly
              has efflorescence —
              white salt deposits
              from moisture
              migrating through
              the masonry —
              that must be
              wire-brushed before
              primer or the
              new paint will
              bubble over
              the efflorescence
              deposit. An exterior
              paint preparation
              website that
              explains KC chalking
              and UV oxidation,
              wash timing and
              spring humidity
              drying window,
              and wood versus
              masonry prep
              requirements earns
              the homeowner
              who wants to
              understand why
              paint fails and
              what prep actually
              costs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before exterior paint preparation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC chalking and oxidation — 2,300 annual UV hours, chalk layer as unstable substrate, bond failure mechanism",
                  "Pressure wash PSI and timing — 1,500-2,000 PSI for chalk removal, 48-hour drying minimum, spring humidity extension",
                  "Moisture content before primer — 15% threshold, blistering from trapped moisture, summer vs. spring drying window",
                  "Wood prep requirements — scraping, sanding, spot prime bare wood within 24 hours, tannin bleed prevention",
                  "Masonry prep — efflorescence removal, alkali-resistant primer, cure time for new masonry before paint",
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
                What your exterior paint preparation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Chalking section — UV bond degradation, chalk layer failure mechanism, how to test your surface before scheduling",
                  "Wash section — pressure wash PSI selection, chalk removal technique, KC spring vs. summer drying window",
                  "Drying section — 48-hour minimum, moisture content check, what happens when painters prime too soon",
                  "Wood prep section — peeling paint removal, bare wood spot prime, tannin bleed and why it matters",
                  "Masonry section — efflorescence identification and removal, alkali primer, new vs. old masonry paint readiness",
                  "Quote form with siding material, paint age, chalking present, shaded areas, previous paint failure history",
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
                &ldquo;The drying window
                section is what
                protects me from
                comebacks. KC painters
                who wash and
                prime the same
                day in April
                are building blisters
                into the job —
                and the homeowner
                calls the prep
                contractor, not
                the painter. After
                the section went
                up explaining
                that spring humidity
                in KC extends
                the drying window
                and that I
                wait forty-eight
                hours minimum
                before priming,
                customers stopped
                asking why prep
                takes three days
                instead of one.
                The chalk section
                also helped —
                once customers
                understood that
                new paint over
                chalk bonds to
                the chalk layer
                and peels with
                it, the prep
                cost made sense
                as the investment
                that actually
                determines whether
                a ten-year paint
                life is possible.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Nguyen, exterior paint preparation and house washing, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An exterior paint preparation site with KC chalking section, wash
                timing guide, and quote form starts at $200. A full site with wood
                and masonry prep requirements, drying window context, and failure
                mechanism content is $425–$750. One full prep job covers the cost.
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
