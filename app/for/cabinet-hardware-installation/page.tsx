import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Cabinet Hardware Installation Companies in Kansas City",
  description:
    "Custom websites for cabinet hardware installation, drawer pull installation, and cabinet hinge companies in the Kansas City area. Show your hinge cup drilling process, drawer slide alignment method, and soft-close adjustment technique to win cabinet hardware contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/cabinet-hardware-installation",
  },
};

export default function CabinetHardwareInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Cabinet Hardware Installation Companies in Kansas City",
    description: "Custom websites for cabinet hardware installation and drawer pull installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Cabinet Hardware Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how hinges are positioned so cabinet doors hang evenly, what the 35mm cup drill is and whether they can do it themselves, and how soft-close is adjusted when it slams or won&apos;t latch. A website that explains cabinet hardware earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Cabinet Hardware Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Cabinet Hardware Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Cabinet hardware installation
              customers are KC homeowners
              upgrading a kitchen with
              new pulls and knobs after
              a paint or refacing project,
              homeowners replacing old
              hinges after a cabinet
              reface and needing the
              new European cup hinges
              installed and adjusted,
              or homeowners adding soft-close
              drawer slides to existing
              cabinet boxes to reduce
              noise in an open kitchen.
              The central education is
              cup hinge drilling, drawer
              slide alignment, and soft-close
              adjustment — three things
              that require jigs and calibration
              to do quickly and correctly
              across a full kitchen of
              32 or more door and drawer
              openings. Cup hinge drilling:
              European-style concealed
              hinges use a 35mm cup hole
              drilled into the door face
              — the hinge arm mounts
              in the cup; the cup must
              be drilled at the correct
              depth (typically 13mm) and
              at the correct setback from
              the door edge (standard
              is 22mm from the edge to
              the center of the cup)
              — incorrect setback or depth
              causes the hinge arm to
              bind or the door to sit
              at the wrong reveal distance
              from the cabinet face frame;
              production-rate hinge installation
              uses a dedicated drill jig
              (Blum Minipress or manual
              jig) to drill every cup
              at the same position without
              measuring each one — drilling
              freehand across 20 doors
              accumulates error; hinge
              position from the top and
              bottom of the door (hinge
              spacing) is set by the
              cabinet manufacturer standard —
              typically 3–4 inches from
              the door corner; three hinges
              per door are standard for
              doors taller than 36 inches.
              Drawer slides: undermount
              drawer slides (Blum Tandem,
              Grass Dynapro) require the
              drawer box to be sized
              to the slide specification —
              drawer box width must be
              1 inch narrower than the
              cabinet opening; the slides
              mount to the bottom of the
              cabinet sides at a precise
              height (typically centered
              on the bottom rail) so
              the drawer front aligns
              with adjacent doors and
              drawers; side-mount slides
              require the drawer box
              width to be exactly 1/2
              inch narrower on each side;
              all drawer slides require
              a level and square cabinet
              box — a cabinet box that
              is out of square by even
              1/8 inch causes the slide
              to bind at full extension.
              Soft-close adjustment: soft-close
              hinges and drawer slides
              have adjustment screws that
              control the damping speed —
              if the door or drawer slams,
              the damping force is too
              low; if it moves too slowly
              and does not fully close,
              the damping is too aggressive;
              Blum hinges have a soft-close
              tension wheel on the clip
              body — rotating it adjusts
              the closing force without
              removing the hinge; drawer
              slide damping cartridges
              are replaced rather than
              adjusted if they fail to
              close; a full kitchen of
              soft-close hardware needs
              one calibration pass after
              initial installation as
              the damping settles into
              consistent operation.
              A cabinet hardware website
              that explains the 35mm cup
              standard, why drawer slides
              require precise box sizing,
              and how soft-close is adjusted
              earns the homeowner who
              wants hardware that works
              the same on every door and
              drawer from day one.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before cabinet hardware installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cup hinge drilling — 35mm cup standard, 22mm setback from edge, depth requirement, jig vs. freehand",
                  "Hinge spacing — position from door corner, three hinges for tall doors, cup position effect on door reveal",
                  "Drawer slide sizing — 1-inch narrower box rule for undermount, side-mount clearance, square box requirement",
                  "Soft-close adjustment — damping tension wheel, slam vs. won&apos;t-close diagnosis, cartridge replacement",
                  "Pull and knob placement — center of rail standard, consistent placement template, boring jig method",
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
                What your cabinet hardware installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cup hinge section — 35mm drill standard, setback and depth specs, jig method vs. freehand error accumulation",
                  "Hinge spacing guide — top and bottom position from corner, three-hinge rule, reveal distance adjustment",
                  "Drawer slide section — undermount vs. side-mount sizing, box width rule, square box requirement",
                  "Soft-close guide — adjustment method, slam vs. no-close diagnosis, cartridge vs. adjustment fix",
                  "Pull placement section — center-of-rail standard, template method for consistent placement across full kitchen",
                  "Quote form with door count, drawer count, existing hardware type, soft-close upgrade, timeline",
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
                &ldquo;The soft-close adjustment
                section turned service calls
                into upsells. Before, customers
                who had soft-close that wasn&apos;t
                working would call and I&apos;d
                come out for a callback.
                After the section went up
                explaining what the adjustment
                wheel does and when the cartridge
                needs replacing, customers
                came in knowing the difference
                between an adjustment job
                and a parts job. Two of them
                decided to upgrade all their
                slides to current Blum Tandem
                while I was there — that&apos;s
                a $600 job from a section
                that explained the difference
                between a $40 fix and a real
                upgrade. The cup hinge section
                also filtered out DIY customers
                who thought they could do
                it without a jig — they read
                the error accumulation part
                and called me instead.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Navarro, cabinet installation and hardware, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A cabinet hardware site with cup hinge section, soft-close
                guide, and quote form starts at $200. A full site with
                drawer slide sizing, pull placement template, and adjustment
                content is $425–$750. One kitchen hardware installation
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
