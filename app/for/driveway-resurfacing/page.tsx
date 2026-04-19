import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Driveway Resurfacing Companies in Kansas City",
  description:
    "Custom websites for driveway resurfacing, asphalt patching, and concrete overlay companies in the Kansas City area. Show your crack types, base failure signs, and resurfacing vs. replacement decision to win driveway contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/driveway-resurfacing",
  },
};

export default function DrivewayResurfacingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Driveway Resurfacing Companies in Kansas City",
    description: "Custom websites for driveway resurfacing and asphalt repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Driveway Resurfacing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether cracks in their driveway mean it needs full replacement or just resurfacing, why sealcoating alone never fixed the cracks, and how long a resurfaced driveway lasts in KC winters. A website that explains base failure vs. surface wear earns the estimate call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Driveway Resurfacing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Driveway Resurfacing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Driveway resurfacing
              customers are homeowners
              with an asphalt
              driveway that has
              surface cracking,
              fading, and minor
              pitting after 10–15
              years, or a concrete
              driveway with surface
              spalling and scaling
              from freeze-thaw
              cycles and road
              salt carried in
              on vehicles. The
              central education
              is the difference
              between surface
              wear (which resurfacing
              addresses) and
              base failure (which
              requires full replacement):
              asphalt resurfacing
              (milling the top
              1.5–2" and laying
              new hot-mix asphalt,
              or applying a
              bonded overlay)
              is effective when
              the base course
              and subgrade are
              stable — the
              new surface bonds
              to the existing
              structure and
              resets the clock
              for 10–15 years.
              Alligator cracking
              (interconnected
              cracks resembling
              alligator hide)
              indicates base
              failure from water
              intrusion or subgrade
              movement — resurfacing
              over alligator
              cracks pushes
              the problem down
              and the new surface
              develops the same
              pattern within
              2–3 years. Soft
              spots in the
              driveway surface
              (the asphalt deflects
              slightly under
              foot pressure)
              also indicate
              compromised base.
              Full replacement
              (remove and haul
              existing material,
              regrade subbase,
              compact new limestone
              base 4–6", new
              hot-mix asphalt
              3–4" compacted)
              is required for
              base failure.
              Concrete overlays
              (SpecChem, Quikrete
              FastSet Repair
              Mortar, polymer-modified
              concrete): bond
              to existing concrete
              with a bonding
              agent — correct
              for surface spalling
              and scaling where
              the slab is otherwise
              structurally sound.
              Concrete that
              has heaved, settled,
              or cracked through
              full depth needs
              removal and replacement.
              KC freeze-thaw
              cycles: water
              infiltrates cracks,
              freezes and expands,
              widens the crack
              — the critical
              repair window
              is sealing cracks
              while they are
              narrow (under
              1/2") before
              freeze-thaw accelerates
              them. Sealcoating
              (coal tar or
              asphalt-based
              emulsion): protects
              the asphalt binder
              from UV oxidation
              and water penetration
              — a cosmetic and
              protective treatment
              that does not
              fill structural
              cracks. A driveway
              resurfacing website
              that explains
              alligator cracking
              as a base failure
              sign, the freeze-thaw
              damage cycle,
              and when resurfacing
              extends driveway
              life vs. when
              full replacement
              is the only real
              option earns
              the homeowner
              who has been
              sealcoating the
              same cracked driveway
              for five years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before resurfacing a driveway
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Resurfacing vs. replacement — what surface wear looks like vs. base failure signs that require full removal",
                  "Alligator cracking — what it means, why it indicates base failure, why resurfacing over it fails quickly",
                  "Soft spots — what they indicate about subgrade and base course integrity",
                  "KC freeze-thaw damage — how water in cracks accelerates damage, optimal repair window",
                  "Sealcoating vs. resurfacing — what sealcoating does and does not fix, when each is appropriate",
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
                What your driveway resurfacing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Crack type guide — hairline oxidation cracks vs. alligator cracking, what each indicates about base",
                  "Resurfacing process — milling depth, overlay bonding, expected lifespan when base is sound",
                  "Base failure section — soft spots, alligator patterns, why replacement is the only durable fix",
                  "KC freeze-thaw context — how the annual freeze-thaw cycle attacks unrepaired cracks",
                  "Sealcoating timeline — when to sealcoat new asphalt, how often, what it protects vs. what it cannot fix",
                  "Estimate form with driveway age, crack type and pattern, soft spots, previous sealcoating history",
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
                &ldquo;I was losing estimates
                to competitors who quoted
                resurfacing on driveways
                that needed replacement
                — customers got a lower
                number, went with the other
                company, and called me two
                years later after the new
                surface cracked in the same
                spots. The website section
                on alligator cracking stopped
                that cycle. Customers who
                had that pattern arrived
                already understanding why
                a full replacement was the
                honest answer, and they
                trusted me more for saying
                it upfront. My average ticket
                went up and my callbacks
                dropped.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Decker, asphalt and concrete, Grandview, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A driveway resurfacing site with crack
                type guide, resurfacing vs. replacement
                section, and estimate form starts at $200.
                A full site with base failure signs, KC
                freeze-thaw context, and sealcoating guide
                is $425–$750. One resurfacing job covers
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
