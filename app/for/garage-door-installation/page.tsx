import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Garage Door Installation Companies in Kansas City",
  description:
    "Custom websites for garage door installation, new garage door, and garage door replacement companies in the Kansas City area. Show your KC temperature effects on torsion spring tension, insulated garage door R-value for attached KC garages, and door size and track selection for KC two-car garages to win garage door installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/garage-door-installation",
  },
};

export default function GarageDoorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Garage Door Installation Companies in Kansas City",
    description: "Custom websites for garage door installation and replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garage Door Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what insulation value they need in a KC attached garage, whether a new door will fix the cold air problem in winter, and how to choose between steel and carriage-style doors for their home. A website that explains garage door installation earns the call from the KC homeowner replacing a twenty-year-old door who wants to understand what a proper installation involves. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garage Door Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Garage Door Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Garage door installation
              customers are
              KC homeowners
              whose existing
              garage door
              is at end of
              life — the
              springs have
              broken, the
              panels are
              damaged from
              impact or rust,
              or the door
              is original
              to a home built
              in the nineteen-eighties
              or nineteen-nineties
              and has no
              insulation
              and a single-layer
              steel construction
              that transmits
              Kansas City
              winter cold
              directly into
              the garage
              space; homeowners
              with an attached
              garage who
              want to understand
              whether upgrading
              from a non-insulated
              door to an
              insulated door
              with an R-value
              of twelve to
              eighteen will
              meaningfully
              reduce the
              heat loss through
              the garage-to-home
              wall and improve
              the comfort
              of the room
              above or adjacent
              to the attached
              garage in a
              KC winter where
              outdoor temperatures
              reach negative
              ten degrees
              Fahrenheit;
              or homeowners
              selecting a
              new door style
              and wanting
              to understand
              the trade-offs
              between single-layer
              steel, double-layer
              steel-with-polystyrene,
              and triple-layer
              steel-with-polyurethane
              construction
              in terms of
              insulation,
              dent resistance,
              and noise reduction
              for a KC home.
              The central
              education is
              insulation
              value as the
              performance
              specification
              for a KC attached
              garage door —
              a non-insulated
              single-layer
              steel door
              has an R-value
              of approximately
              two; a double-layer
              door with polystyrene
              backer achieves
              R-six to R-nine;
              a triple-layer
              door with injected
              polyurethane
              achieves R-twelve
              to R-eighteen;
              in a KC winter
              where the garage
              temperature
              without a heated
              door can drop
              to within five
              to ten degrees
              of outdoor
              temperature,
              the conductive
              heat loss through
              a non-insulated
              door is the
              primary heat
              pathway from
              an attached
              garage into
              the outdoor
              environment;
              an insulated
              door on an
              attached KC
              garage reduces
              the work the
              home HVAC system
              does to maintain
              the room above
              or adjacent
              to the garage;
              torsion spring
              adjustment
              for KC temperature
              as the installation
              detail that
              determines
              whether a garage
              door operates
              correctly at
              negative ten
              degrees Fahrenheit —
              torsion spring
              steel becomes
              stiffer in
              extreme cold,
              and a spring
              sized and wound
              for room-temperature
              operation may
              produce excessive
              closing force
              in KC January
              cold snaps
              that causes
              the opener
              to work harder
              and shorten
              motor life;
              a professional
              installation
              that accounts
              for the seasonal
              temperature
              range in door
              balance and
              opener force
              settings will
              perform correctly
              across the
              full KC annual
              cycle — and
              door size and
              track configuration
              as the structural
              decision that
              determines
              whether a new
              door fits the
              existing rough
              opening and
              overhead clearance
              in a standard
              KC two-car
              garage with
              nine or ten
              foot ceiling
              height. KC
              garage door
              selection and
              installation:
              standard residential
              garage door
              widths in KC
              are eight feet
              for single
              and sixteen
              feet for double;
              nine-foot-tall
              doors are more
              common in KC
              homes built
              after two
              thousand; the
              required overhead
              clearance for
              a standard
              extension spring
              or torsion
              spring system
              is twelve to
              fifteen inches
              above the door
              height; low-headroom
              track hardware
              is available
              for garages
              with less clearance;
              steel garage
              doors with
              twenty-four
              to twenty-seven
              gauge steel
              face panels
              resist dent
              and impact
              better than
              thinner twenty-nine
              gauge; carriage-house
              style doors
              with flush
              panel or raised
              panel sections
              provide architectural
              match for
              KC homes with
              craftsman or
              colonial exteriors;
              insulated door
              sections with
              thermal break
              at the top
              and bottom
              seals prevent
              cold air infiltration
              at the floor
              and header;
              a properly
              balanced door
              should stay
              in place when
              manually held
              at mid-travel —
              a door that
              rises or falls
              when released
              is not balanced
              and will wear
              the opener
              prematurely. A
              garage door
              installation
              website that
              explains KC
              attached garage
              insulation
              value selection
              and the R-value
              difference between
              door construction
              types, torsion
              spring temperature
              sensitivity
              for KC cold
              weather operation,
              and door size
              and track clearance
              requirements
              earns the homeowner
              who wants to
              understand
              what a proper
              garage door
              replacement
              in Kansas City
              involves.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before garage door installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "R-value selection — R-2 single-layer vs. R-6-9 double-layer vs. R-12-18 triple-layer polyurethane, attached KC garage heat loss",
                  "KC cold weather springs — steel stiffness at -10°F, opener force setting for seasonal temperature range",
                  "Door construction — 24-27 gauge vs. 29 gauge dent resistance, polyurethane vs. polystyrene insulation density",
                  "Size and clearance — 8-ft single / 16-ft double standard, 9-10 ft height, 12-15 in overhead clearance requirement",
                  "Balance check — mid-travel hold test, opener wear from unbalanced door, spring winding after installation",
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
                What your garage door installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insulation section — KC attached garage heat loss, R-value by construction type, room-above comfort improvement",
                  "Door construction section — layer count comparison, gauge thickness, polyurethane vs. polystyrene, noise difference",
                  "Spring section — torsion vs. extension, KC temperature effect on spring tension, balance check after installation",
                  "Size and clearance section — standard KC dimensions, low-headroom hardware option, rough opening measurement",
                  "Style section — flush vs. raised panel, carriage-house overlay, steel vs. fiberglass vs. wood composite",
                  "Quote form with door width/height, current spring type, opener brand, insulation priority, style preference",
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
                &ldquo;The insulation section
                justifies the
                upgrade every
                time. KC homeowners
                who call for
                a door replacement
                start by asking
                for the cheapest
                option — they
                don&apos;t connect
                the non-insulated
                door to why
                their kitchen
                floor is cold
                in January.
                After the section
                went up explaining
                the R-value
                difference between
                a single-layer
                and triple-layer
                door on an
                attached garage,
                customers started
                asking which
                tier was right
                for their situation
                instead of
                just asking
                for the base
                model. The
                spring temperature
                section also
                closes the
                &apos;my opener
                struggles in
                winter&apos; callback —
                KC homeowners
                who had a
                door installed
                elsewhere understand
                after reading
                it why the
                force settings
                need to account
                for KC January
                cold, not just
                fall installation
                temperature.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Williamson, garage door installation and replacement, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garage door installation site with KC insulation section, door
                construction guide, and quote form starts at $200. A full site
                with spring temperature, size selection, and style guide content
                is $425–$750. One door installation covers the cost. No contracts, no monthly fees.
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
