import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Storm Door Installation Companies in Kansas City",
  description:
    "Custom websites for storm door installation, full-view and ventilating storm door companies in the Kansas City area. Show your glass options, frame material, and heat trap risk to win storm door contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/storm-door-installation",
  },
};

export default function StormDoorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Storm Door Installation Companies in Kansas City",
    description: "Custom websites for storm door installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Storm Door Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a storm door actually reduces drafts, whether it traps heat and damages the primary door, and what the difference is between full-view and ventilating models. A website that explains the heat trap problem and glass options earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Storm Door Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Storm Door Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Storm door installation
              customers are homeowners
              who want to reduce
              drafts at a primary
              door, add a screen
              option for spring
              ventilation without
              opening the main
              door, protect
              a wood entry
              door from direct
              weathering, or
              improve the energy
              performance of
              an older entry
              door without
              full replacement.
              The central education
              is what a storm
              door actually
              does and the
              conditions where
              it creates problems:
              a storm door
              adds an air
              gap between the
              two doors — the
              trapped air acts
              as a thermal
              buffer in winter,
              reducing conductive
              heat loss through
              the primary door.
              Heat trap risk:
              when a storm
              door with full-view
              glass is installed
              in front of a
              dark-colored primary
              door or a door
              in direct sun,
              solar gain can
              heat the trapped
              air to 140–190°F
              on summer afternoons —
              this temperature
              can warp fiberglass
              and wood primary
              doors and can
              degrade weatherstripping.
              Storm door manufacturers
              (Larson, Andersen,
              Emco) specify
              heat trap risk
              guidelines: dark
              doors in south-
              or west-facing
              openings with
              full sun exposure
              should use a
              ventilating storm
              door (with an
              operable panel
              that vents the
              air gap) rather
              than a sealed
              full-view unit.
              Full-view storm
              doors: single-lite
              tempered glass
              pane, no panel
              change, maximum
              light transmission —
              best for north-
              or east-facing
              doors or light-colored
              primary doors
              with limited
              direct sun. Ventilating
              storm doors:
              interchangeable
              glass and screen
              panels, or a
              retractable screen
              — can vent the
              air gap to prevent
              heat buildup
              while still providing
              a screen. Self-storing
              storm doors:
              upper and lower
              glass panels
              with a built-in
              screen section
              — a compromise
              between full-view
              and ventilating.
              Frame material:
              extruded aluminum
              frames (Larson
              aluminum series)
              are the most
              durable and
              longest-lived;
              vinyl-clad frames
              reduce cost but
              can fade and
              crack at UV-exposed
              door frames in
              KC's sun. Installation
              fit: storm doors
              are sold in standard
              32", 34", and
              36" widths —
              doors installed
              in non-standard
              openings need
              a rough opening
              measurement before
              ordering. A storm
              door website
              that explains
              the heat trap
              risk by door
              color and sun
              exposure, ventilating
              vs. full-view
              selection, and
              what aluminum
              vs. vinyl frames
              mean over 20
              years earns
              the homeowner
              shopping for
              a storm door
              without knowing
              which type is
              right for their
              dark southwest-facing
              entry.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a storm door
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Heat trap risk — when full-view glass creates dangerous air gap temperatures, which doors are at risk",
                  "Full-view vs. ventilating — when each type is specified, how ventilating models prevent heat buildup",
                  "Self-storing vs. panel-change — convenience vs. full ventilation control, season change process",
                  "Frame material — extruded aluminum vs. vinyl-clad longevity, UV exposure in KC",
                  "Size and fit — standard widths, how non-standard openings are handled, measurement process",
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
                What your storm door installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Heat trap section — temperature range in trapped air gap, door colors and sun exposure at risk",
                  "Door type selection guide — full-view vs. ventilating vs. self-storing, when each is specified",
                  "Frame material comparison — extruded aluminum vs. vinyl-clad, longevity in KC sun exposure",
                  "Brand section — Larson, Andersen, Emco — product lines, warranty coverage, hardware quality",
                  "Measurement guide — how to measure rough opening, standard vs. non-standard sizing",
                  "Quote form with door size, primary door color, sun exposure direction, current issues",
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
                &ldquo;I had customers who bought
                a full-view storm door
                at the home center, installed
                it themselves on a dark
                door facing west, and warped
                their fiberglass entry door
                by August. The heat trap
                section on the website stopped
                that mistake before it
                started — customers with
                dark doors in direct sun
                called asking specifically
                for the ventilating model.
                The frame material section
                also helped: I stopped
                selling vinyl-clad doors
                to south-facing openings
                because customers understood
                why aluminum held up better
                in KC sun before I had
                to explain it.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Simmons, door installation, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A storm door site with heat trap section,
                door type selection guide, and quote form
                starts at $200. A full site with frame
                material comparison, brand section, and
                measurement guide is $425–$750. One storm
                door installation covers the cost. No
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
