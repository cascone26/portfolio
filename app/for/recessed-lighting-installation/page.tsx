import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Recessed Lighting Installation Companies in Kansas City",
  description:
    "Custom websites for recessed lighting installation, can light installation, and LED recessed fixture companies in the Kansas City area. Show your IC rating requirements, box placement, and dimmer compatibility to win recessed lighting contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/recessed-lighting-installation",
  },
};

export default function RecessedLightingInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Recessed Lighting Installation Companies in Kansas City",
    description: "Custom websites for recessed lighting and can light installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Recessed Lighting Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether they need IC-rated fixtures if there's insulation above the ceiling, how to space recessed lights to avoid hot spots and shadows, and what dimmers work with LED fixtures. A website that explains the fixture and placement decisions earns the lighting call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Recessed Lighting Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Recessed Lighting Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Recessed lighting installation
              customers are KC homeowners
              replacing builder-grade
              flush mount fixtures
              with recessed lights
              for a cleaner ceiling
              look, homeowners
              finishing a basement
              and want to light
              it properly, or
              homeowners upgrading
              from fluorescent
              to LED and want
              to rethink the
              whole layout. The
              central education
              is IC rating and
              insulation contact,
              fixture spacing
              for even illumination,
              and LED dimmer
              compatibility —
              three decisions
              that determine
              whether the installed
              fixtures look good
              and last. IC rating:
              IC (insulation contact)
              rated fixtures
              are required by
              NEC section 410.116
              anywhere insulation
              exists in the ceiling
              cavity above the
              fixture — non-IC
              fixtures must maintain
              a 3-inch clearance
              from insulation
              to prevent a fire
              hazard from heat
              buildup; most KC
              home ceilings below
              an insulated attic
              or floor above
              require IC-rated
              fixtures; new construction
              IC housings (pancake
              or standard depth)
              are used with
              new framing or
              during remodel
              when the ceiling
              is open; remodel
              (retrofit) housings
              clip into the existing
              drywall hole from
              below without attic
              access — look for
              the IC-AT (IC and
              airtight) label
              which also meets
              NEC 410.116 air
              barrier requirements
              at the ceiling
              plane. Fixture
              spacing and layout:
              a common rule is
              to space recessed
              lights at a distance
              equal to half
              the ceiling height —
              an 8-foot ceiling
              calls for lights
              spaced 4 feet apart;
              lights should be
              placed 2 feet from
              walls to avoid
              scalloping (semicircular
              shadow arcs on
              the wall from a
              fixture too close
              to the wall);
              beam angle: an
              LED recessed fixture
              with a 40-degree
              beam angle on
              a standard 6-inch
              can produces a
              cone approximately
              5 feet in diameter
              at floor level
              from 8 feet up —
              overlapping cones
              by 50% produces
              even illumination
              without dark spots;
              for task areas
              (kitchen counter,
              bathroom vanity
              top), fixtures
              should be positioned
              directly above
              the work surface,
              not in the center
              of the room.
              Dimmer compatibility:
              LED fixtures require
              an LED-compatible
              dimmer — standard
              incandescent dimmers
              cause LED flicker,
              buzzing, or a limited
              dim range; the
              fixture manufacturer
              typically publishes
              a list of compatible
              dimmers (Lutron
              Caseta, Leviton
              Decora, Cooper
              Wiring); the number
              of fixtures on
              a single dimmer
              is limited by total
              wattage — a 150-watt
              rated Lutron Caseta
              can handle approximately
              twenty 8-watt LED
              fixtures; mixing
              LED and incandescent
              on the same dimmer
              circuit causes
              inconsistent dimming
              behavior. Circuit
              load and box fill:
              recessed LED fixtures
              are typically 8–15
              watts each — twenty
              15-watt fixtures
              is 300 watts, within
              the 1,440-watt
              capacity of a 12-amp
              circuit (80% of
              15-amp breaker);
              a new circuit run
              from the panel
              is required when
              existing circuits
              are at capacity;
              junction box fill
              rules (NEC 314.16)
              limit how many
              wires can terminate
              in a box — daisy-chaining
              fixtures along
              a run is standard,
              but more than three
              fixtures on a single
              daisy chain run
              often requires
              a pull point.
              A recessed lighting
              website that explains
              IC rating requirements,
              how to space lights
              so the ceiling
              looks even, and
              why LED dimmers
              matter earns the
              homeowner who wants
              professional-quality
              lighting, not just
              more holes in
              the ceiling.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before recessed lighting installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "IC rating — when IC is required, IC-AT airtight rating, new construction vs. remodel (retrofit) housing types",
                  "Fixture spacing — half ceiling height rule, 2-foot wall offset, beam angle and cone diameter at floor level",
                  "Dimmer compatibility — LED dimmer requirement, compatible dimmer models, fixture count per dimmer by wattage",
                  "Circuit load — wattage per LED fixture, 80% breaker rule, when a new circuit is needed",
                  "Box fill — NEC 314.16 limits, daisy chain run length, when a pull point is required",
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
                What your recessed lighting installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "IC rating section — NEC requirement, IC vs. IC-AT, new construction vs. retrofit housing, insulation clearance",
                  "Spacing guide — half ceiling height rule, wall offset, beam angle and cone overlap for even illumination",
                  "Dimmer section — LED dimmer compatibility, manufacturer-approved dimmer lists, fixture count per circuit",
                  "Circuit load section — LED wattage, 80% breaker rule, when a new circuit run is required",
                  "Layout planning section — task lighting placement vs. ambient, kitchen and bathroom fixture positioning",
                  "Quote form with room dimensions, ceiling height, insulation above ceiling yes/no, existing circuits",
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
                &ldquo;The IC rating section was
                the thing I needed most.
                Before, customers would buy
                non-IC fixtures at the home
                improvement store and I&apos;d
                show up and have to explain
                why we couldn&apos;t install them.
                They&apos;d get frustrated. After
                the section went up explaining
                why IC-AT was required in
                their attic-below ceiling,
                customers started asking at
                the store before buying.
                The dimmer section also changed
                how many jobs included controls:
                customers who were going to
                just use a regular switch
                started asking about Lutron
                Caseta specifically after
                reading the compatibility
                section. I went from installing
                dimmers on maybe 20% of jobs
                to 70%.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Walters, residential electrical and lighting installation, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A recessed lighting site with IC rating section, spacing
                guide, and quote form starts at $200. A full site with
                dimmer compatibility, circuit load, and layout planning
                content is $425–$750. One multi-room lighting job covers
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
