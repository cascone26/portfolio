import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Door Sweep Installation Companies in Kansas City",
  description:
    "Custom websites for door sweep installation, exterior door draft, and door bottom seal companies in the Kansas City area. Show your sweep type by door bottom, KC draft gap measurement, and threshold-to-sweep fit to win door seal contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/door-sweep-installation",
  },
};

export default function DoorSweepInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Door Sweep Installation Companies in Kansas City",
    description: "Custom websites for door sweep installation and exterior door draft seal companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Door Sweep Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a door sweep attaches to the door face or the door bottom, what gap a sweep can close before the door needs adjustment, and why KC winters make a bad door sweep feel like a window left open. A website that explains door sweep installation earns the draft call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Door Sweep Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Door Sweep Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Door sweep installation
              customers are KC homeowners
              who feel cold air entering
              at the bottom of the
              front or back door during
              winter, homeowners whose
              existing sweep has worn
              flat or torn after years
              of contact with the threshold,
              or homeowners who had
              a new exterior door installed
              and the installer left
              the door without a sweep
              on a threshold that
              has a gap. The central
              education is sweep type
              by door bottom and threshold
              configuration, gap coverage
              limit, and threshold
              coordination — three
              things that determine
              whether a door sweep
              seals the bottom or
              just drags across the
              floor without contacting
              the threshold. Sweep
              type: the two main configurations
              are door-face-mount (also
              called surface-mount
              or automatic door bottom)
              and door-bottom-slot;
              a surface-mount sweep
              screws to the interior
              face of the door near
              the bottom — the seal
              flap hangs below the
              door bottom and contacts
              the floor or threshold
              as the door closes;
              a door-bottom-slot sweep
              slides into a kerf or
              slot cut into the door
              bottom and is captured
              mechanically — this
              is standard on solid
              wood exterior doors
              where the kerf was cut
              at the mill; automatic
              door bottoms are spring-activated
              versions that retract
              when the door opens
              and drop when the door
              closes — these are the
              correct specification
              for a door threshold
              with a raised dam because
              a fixed sweep drags
              and wears on the dam
              edge; on KC exterior
              doors from before 1980,
              many have no kerf and
              no original sweep —
              a surface-mount with
              brush seal or rubber
              flap is the correct
              retrofit. Gap coverage:
              a standard door sweep
              covers a gap of 1/4
              to 1/2 inch between
              the door bottom and
              the threshold or sill —
              this is the normal tolerance
              after door installation;
              a gap larger than 3/4
              inch means either the
              door has sagged at the
              hinge side (common in
              KC homes where the door
              frame has racked slightly
              from seasonal wood movement),
              the threshold has dropped,
              or the door was installed
              short; a sweep cannot
              substitute for door
              adjustment — a 1-inch
              gap at the hinge corner
              and 1/4 inch at the
              latch corner is a hinge
              and door plumb problem,
              not a sweep size problem.
              Threshold coordination:
              the sweep and the threshold
              must work together —
              a threshold with an
              aluminum dam (raised
              seal ridge on top) requires
              a sweep that contacts
              the dam face, not the
              floor; a flat threshold
              requires a sweep that
              contacts the threshold
              surface; the KC standard
              residential configuration
              is a sloped aluminum
              threshold with a vinyl
              insert that the sweep
              presses against — the
              correct sweep for this
              is a door bottom with
              a vinyl or rubber bulb
              that compresses against
              the threshold insert.
              A door sweep website
              that explains sweep
              type by door and threshold,
              gap coverage limit,
              and how sweep and threshold
              work together earns
              the homeowner who wants
              the draft stopped on
              the first visit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before door sweep installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Sweep type — surface-mount vs. door-bottom-slot, automatic door bottom for raised dam threshold",
                  "Gap coverage — 1/4 to 1/2 inch standard, when door adjustment is needed before sweep",
                  "Threshold coordination — dam vs. flat threshold, vinyl insert contact requirement",
                  "KC older door retrofit — pre-1980 no-kerf doors, surface-mount with brush or rubber flap",
                  "Door sag diagnosis — hinge-corner vs. latch-corner gap, racking vs. sweep problem",
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
                What your door sweep installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Sweep type section — surface-mount vs. slot, automatic door bottom, when each is correct",
                  "Gap coverage section — 1/4-1/2 inch limit, how to measure your gap, door adjustment threshold",
                  "Threshold guide — dam vs. flat vs. vinyl-insert identification, sweep-to-threshold matching",
                  "KC retrofit section — older door with no kerf, surface-mount installation method",
                  "Door sag section — how to tell if gap is a sweep problem vs. door adjustment problem",
                  "Quote form with door location, gap measurement, threshold type, door age, timeline",
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
                &ldquo;The threshold coordination
                section is the one that
                saves me the most time.
                Customers in Lee&apos;s Summit
                would buy a sweep at the
                hardware store and call
                me because it wouldn&apos;t
                stop the draft — they had
                a dam threshold and got
                a flat-contact sweep that
                rides over the dam and
                never contacts anything.
                After the section went
                up explaining that the
                sweep has to match the
                threshold type, customers
                stopped buying the wrong
                sweep and started describing
                their threshold when they
                called. The gap coverage
                section also helped —
                I used to show up to installs
                where the gap was 1.5 inches
                because the door had sagged
                and no sweep was going
                to fix that. Now customers
                know to measure first.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Ashby, exterior door and weatherization service, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A door sweep site with sweep type section, gap coverage guide,
                and quote form starts at $200. A full site with threshold coordination,
                automatic door bottom content, and KC retrofit guide is $425–$750.
                One exterior door sweep installation covers the cost.
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
