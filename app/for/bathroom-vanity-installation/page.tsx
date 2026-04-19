import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Bathroom Vanity Installation Companies in Kansas City",
  description:
    "Custom websites for bathroom vanity installation, vanity replacement, and bathroom fixture companies in the Kansas City area. Show your rough-in measurement guide, drain offset tolerance, and sink type options to win vanity installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/bathroom-vanity-installation",
  },
};

export default function BathroomVanityInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Bathroom Vanity Installation Companies in Kansas City",
    description: "Custom websites for bathroom vanity installation and fixture replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Bathroom Vanity Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their existing drain location will work with a new vanity, what the difference is between undermount and drop-in sinks, and how to handle a drain offset that doesn't line up. A website that explains the measurement reality earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Bathroom Vanity Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Bathroom Vanity Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Bathroom vanity installation
              customers are KC homeowners
              replacing a builder-grade
              vanity with something
              they chose themselves,
              homeowners remodeling
              a bathroom and want
              to understand whether
              the plumbing lines
              up with the new
              vanity, or homeowners
              who bought a vanity
              online and discovered
              the drain doesn't
              land where it should.
              The central education
              is the three measurements
              that determine whether
              a vanity swap is
              simple or complicated:
              the drain rough-in
              from the wall, the
              supply line spacing,
              and the vanity width
              vs. the opening.
              Drain rough-in measurement:
              the drain center
              distance from the
              finished wall is
              the most critical
              measurement — standard
              rough-in is 15–16
              inches from the
              side wall for a
              single-sink vanity;
              the drain center
              from the back wall
              (for a floor drain)
              is typically 12–15
              inches; a new vanity
              cabinet must position
              the sink hole within
              3–4 inches horizontally
              of the drain stub-out
              for a P-trap to
              connect without
              an extension or
              offset fitting;
              drain offsets over
              4 inches from center
              may require an
              offset drain assembly
              (Westbrass, Brass
              Craft) or a drain
              relocation. Supply
              line spacing: hot
              and cold supply
              valves are typically
              4 inches apart for
              a single-hole faucet,
              8 inches apart for
              a widespread faucet —
              supply valve spacing
              must match the faucet
              type; supply valves
              should be within
              the cabinet interior
              accessible for shutoff;
              supply lines (braided
              stainless, 12–20
              inches) connect
              valve to faucet
              tailpiece. Sink types:
              drop-in (self-rimming)
              sinks sit in a
              cutout with the
              rim resting on
              the countertop —
              easiest to install
              but rim collects
              water and grime;
              undermount sinks
              mount below the
              countertop cutout
              with clips and
              silicone — cleaner
              look, requires
              a solid surface
              countertop (quartz,
              marble, granite,
              or solid surface)
              that can support
              the weight at the
              edge; vessel sinks
              sit entirely on
              top of the countertop
              with a drain through
              the surface — requires
              a taller faucet
              (vessel faucet,
              8–12 inches high)
              and countertop height
              adjusted down 4–6
              inches from standard
              34 inches to keep
              the sink rim at
              usable height. Vanity
              height: standard
              bathroom vanity
              height is 32 inches
              (traditional) or
              34–36 inches (comfort
              height, matches
              kitchen countertop) —
              KC homeowners over
              35 increasingly
              prefer 36-inch
              height for reduced
              back strain; replacing
              a 32-inch vanity
              with a 36-inch
              requires adjusting
              supply and drain
              rough-ins or using
              extension fittings.
              Wall anchoring: vanity
              cabinets must be
              anchored to wall
              studs at the hanging
              rail — standard
              stud spacing is
              16 inches OC, but
              tile or wainscoting
              over drywall requires
              locating studs
              before drilling;
              floating vanities
              (wall-mount, no
              floor contact) require
              additional blocking
              in the wall (2x6
              or 3/4 plywood
              behind drywall)
              to support the
              full vanity weight
              with contents.
              A bathroom vanity
              website that explains
              the drain rough-in
              measurement, when
              a drain offset is
              manageable vs. requires
              relocation, and
              what undermount
              vs. drop-in means
              for countertop selection
              earns the homeowner
              who already bought
              the vanity and
              is now measuring.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before bathroom vanity installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Drain rough-in measurement — distance from wall, horizontal offset tolerance for P-trap, when relocation is needed",
                  "Supply line spacing — hot/cold valve spacing by faucet type, supply line length, valve shutoff access",
                  "Sink types — drop-in vs. undermount vs. vessel, countertop requirements, height considerations for vessel",
                  "Vanity height — standard vs. comfort height, supply and drain adjustment for taller vanity",
                  "Wall anchoring — stud location through tile, blocking requirements for floating wall-mount vanities",
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
                What your bathroom vanity installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rough-in guide — how to measure drain center, supply spacing, what to record before buying a vanity",
                  "Drain offset section — tolerance for P-trap connection, offset drain assemblies, when relocation is required",
                  "Sink type section — drop-in vs. undermount vs. vessel, countertop material compatibility, faucet height pairing",
                  "Height guide — standard vs. comfort height, effect on existing rough-in, floating vanity blocking requirements",
                  "Wall anchoring section — locating studs through tile, blocking for floating vanities, weight capacity",
                  "Quote form with vanity width, drain rough-in distance, existing countertop material, sink type preference",
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
                &ldquo;The rough-in measurement
                section saved me from a dozen
                bad surprises. Before I added
                it, about one in three vanity
                jobs had a drain that was
                3–5 inches off from where
                the new cabinet expected it.
                Customers were frustrated because
                nobody told them to measure
                before buying. After I put
                up the section showing exactly
                what to measure and what the
                tolerance was, customers arrived
                with the numbers. Two of them
                caught drain offsets that would
                have required a plumber and
                ordered a different vanity
                before we ever scheduled.
                The floating vanity section
                also opened a new conversation:
                customers who wanted wall-mount
                started asking about blocking
                requirements before they bought,
                and I added three floating
                vanity installs that month
                alone.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Dumont, bathroom renovation and vanity installation, Lee's Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A bathroom vanity site with rough-in guide, sink type
                section, and quote form starts at $200. A full site
                with drain offset section, floating vanity guide, and
                height content is $425–$750. One vanity installation
                covers the cost. No contracts, no monthly fees.
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
