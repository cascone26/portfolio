import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Ductless Mini-Split Companies in Kansas City",
  description:
    "Custom websites for ductless mini-split installation, mini-split HVAC, and zoned heating and cooling companies in the Kansas City area. Show your single-zone and multi-zone systems, SEER ratings, and heating down to low temperatures to win mini-split contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/ductless-mini-split",
  },
};

export default function DuctlessMiniSplitPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Ductless Mini-Split Companies in Kansas City",
    description: "Custom websites for ductless mini-split installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Mini-Split HVAC Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a mini-split can actually heat in Kansas City winters, what SEER ratings mean for energy savings, and how a multi-zone system handles the whole house. A website that explains cold-climate heating performance earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Mini-Splits in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Ductless Mini-Split</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Ductless mini-split customers
              are homeowners adding
              climate control to
              a garage, sunroom,
              addition, or finished
              basement that lacks
              ductwork, or replacing
              window units in
              older homes where
              duct installation
              would be destructive
              and expensive. The
              central education
              is cold-climate heating
              performance: early
              mini-splits lost
              efficiency below
              freezing — modern
              hyper-heat units
              (Mitsubishi H2i,
              Daikin Aurora, Bosch
              IDS Ultra) maintain
              full rated capacity
              down to 5°F and
              operate as low as
              -13°F to -22°F,
              which covers KC
              winters completely.
              SEER (Seasonal Energy
              Efficiency Ratio)
              measures cooling
              efficiency — the
              federal minimum is
              13–14 SEER; premium
              units reach 20–30
              SEER. HSPF (Heating
              Seasonal Performance
              Factor) measures
              heating efficiency —
              above 9.0 is high
              efficiency. Single-zone
              vs. multi-zone: a
              single-zone system
              (one outdoor condenser,
              one indoor air handler)
              serves one room
              or space. A multi-zone
              system connects
              multiple indoor
              heads (2–5 typically)
              to one outdoor
              unit — each zone
              is independently
              controlled. Multi-zone
              is more efficient
              than separate single-zone
              units because the
              outdoor compressor
              is shared. Indoor
              head types: wall-mounted
              (most common), ceiling
              cassette (four-way
              air distribution,
              flush-mounted), and
              floor console (for
              rooms with limited
              wall space). Installation
              requires a refrigerant
              line set (typically
              1/4" and 3/8" copper
              tubing in an insulated
              sleeve) run from
              the outdoor unit
              to each indoor head —
              through an exterior
              wall penetration
              or a conduit sleeve.
              Line set length
              affects efficiency
              and must stay within
              manufacturer limits
              (typically 25–50
              ft per zone, up
              to 100 ft+ with
              optional line set
              extenders). A mini-split
              website that addresses
              KC winter performance,
              explains SEER and
              HSPF, and shows
              multi-zone system
              options earns the
              homeowner finishing
              their basement this
              fall.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a ductless mini-split
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cold-climate heating — whether hyper-heat units work in KC winters, minimum operating temperature",
                  "SEER and HSPF ratings — what efficiency ratings mean, how they translate to energy cost savings",
                  "Single-zone vs. multi-zone — when to use each, how multi-zone shares one outdoor unit",
                  "Indoor head types — wall-mounted vs. ceiling cassette vs. floor console, which fits their space",
                  "Line set routing — how refrigerant lines are run, what the wall penetration looks like, distance limits",
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
                What your mini-split website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cold-climate heating section — hyper-heat units, how they perform in KC winters, minimum temp ratings",
                  "Efficiency guide — SEER and HSPF explained, what premium ratings cost vs. save over time",
                  "Single vs. multi-zone — how each system is configured, when one outdoor unit can serve multiple rooms",
                  "Indoor head options — wall mount, ceiling cassette, floor console — photos, use cases, dimensions",
                  "Brands we install — Mitsubishi, Daikin, Bosch, Fujitsu — efficiency tiers, warranty terms",
                  "Consultation form with space type, square footage, current heating/cooling, number of zones needed",
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
                &ldquo;The biggest objection I
                heard before the website
                was &apos;does it actually
                heat in winter.&apos; People
                had a mental model
                of mini-splits from
                ten years ago when
                they really did drop
                off below 35 degrees.
                The website section
                on hyper-heat performance
                down to 5°F completely
                eliminated that objection
                — customers came in
                asking about the Mitsubishi
                H2i by name. My
                multi-zone jobs also
                increased because
                the shared outdoor
                unit explanation made
                the economics click
                for people doing
                additions and basement
                finishes at the same
                time.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Thornton, HVAC contractor, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A mini-split site with cold-climate
                heating section, efficiency guide,
                and consultation form starts at $225.
                A full site with single vs. multi-zone
                comparison, indoor head options, and
                brand details is $425–$850. One
                multi-zone installation covers the
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
