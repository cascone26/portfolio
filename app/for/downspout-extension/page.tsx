import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Downspout Extension and Drainage Companies in Kansas City",
  description:
    "Custom websites for downspout extension, underground drainage, and yard drainage companies in the Kansas City area. Show your buried drain pipe options, outlet placement requirements, and foundation protection work to win drainage contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/downspout-extension",
  },
};

export default function DownspoutExtensionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Downspout Extension Companies in Kansas City",
    description: "Custom websites for downspout extension and drainage companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Drainage Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how far a downspout needs to discharge from the foundation, whether a buried drain pipe will clog, and whether a pop-up emitter or dry creek bed is the right outlet. A website that explains foundation clearance earns the drainage call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Drainage in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Downspout Extension</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Downspout extension customers
              are homeowners whose
              downspouts terminate
              at splash blocks
              directly against
              the foundation,
              whose basement takes
              on water after
              heavy rain, or
              who have erosion
              channels in the
              yard directly below
              the downspout discharge.
              The central education
              is foundation clearance
              and slope: the
              IRC and most KC-area
              codes require that
              roof drainage be
              directed away from
              the foundation —
              the general standard
              is at least 6 ft
              of clearance from
              the building, though
              10 ft is preferable
              in clay soil where
              water spreads slowly.
              A splash block that
              ends 18" from the
              foundation puts
              the entire roof
              drainage load into
              the backfill zone
              directly beside
              the footing — this
              is a primary cause
              of basement water
              intrusion that
              homeowners attribute
              to a waterproofing
              problem rather
              than a drainage
              problem. Surface
              extensions: flexible
              downspout extensions
              (roll-out Dex-O-Tex
              style) are the
              cheapest solution
              but create trip
              hazards and are
              frequently rolled
              back into the gutter
              by mowing. Underground
              drainage: 4" corrugated
              or SDR-35 PVC pipe
              buried at minimum
              1% slope (1" drop
              per 8 ft of run)
              from the downspout
              adapter to a pop-up
              emitter at the
              discharge point —
              pop-up emitters
              (Flo-Well, NDS)
              open under flow
              pressure and close
              to prevent animal
              entry when dry.
              Corrugated pipe
              disadvantage: perforations
              intended for absorption
              trench applications
              are sometimes incorrectly
              used in solid-pipe
              drainage runs —
              perforated corrugated
              pipe in clay soil
              accepts water that
              then saturates
              the burial trench
              and the soil immediately
              adjacent to the
              house. Solid pipe
              is correct for
              discharge applications.
              Outlet options:
              pop-up emitter
              (most common, low
              maintenance), dry
              creek bed (decorative,
              disperses flow),
              drywell/French drain
              terminus (for sites
              with no grade slope
              to discharge), or
              tie-in to storm
              sewer if permitted
              by municipality.
              A downspout extension
              website that explains
              the foundation clearance
              requirement, underground
              pipe options, and
              outlet types earns
              the homeowner whose
              basement floods
              after every KC
              thunderstorm and
              does not know why.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before extending downspouts
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Foundation clearance — how far downspout discharge needs to be from the building, why 6–10 ft matters",
                  "Underground vs. surface extensions — buried drain pipe vs. roll-out extensions, longevity difference",
                  "Perforated vs. solid pipe — why perforated corrugated is wrong for discharge runs in KC clay",
                  "Pop-up emitters — how they work, maintenance requirements, alternatives for flat yards",
                  "Basement water connection — why drainage problems look like waterproofing problems",
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
                What your drainage website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Foundation clearance section — IRC standard, KC clay soil behavior, why splash blocks fail",
                  "Underground pipe guide — solid vs. perforated corrugated, SDR-35 PVC, minimum slope requirement",
                  "Outlet options — pop-up emitter, dry creek bed, drywell, storm tie-in — when each is right",
                  "Basement connection section — how undersized or mislocated drainage causes basement flooding",
                  "Site assessment — what we look for when evaluating slope, soil type, and discharge options",
                  "Quote form with number of downspouts, yard slope, basement water history, outlet preference",
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
                &ldquo;My best calls came from
                homeowners who had already
                spent money on interior
                waterproofing and still
                had a wet basement. The
                website section connecting
                downspout discharge directly
                to foundation water intrusion
                changed who was calling
                me — customers came in
                already asking whether
                drainage was their real
                problem instead of assuming
                they needed another sump
                pump. The pipe type section
                also helped me explain
                to customers why I was
                not using the corrugated
                perforated pipe they saw
                at the hardware store —
                they already understood
                why before I got to the
                job.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Mendez, drainage and grading, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A drainage site with foundation clearance
                section, pipe guide, and quote form
                starts at $200. A full site with outlet
                options, basement connection section,
                and site assessment guide is $425–$750.
                One underground downspout run covers
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
