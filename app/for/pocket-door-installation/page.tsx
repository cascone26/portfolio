import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pocket Door Installation Companies in Kansas City",
  description:
    "Custom websites for pocket door installation, interior sliding door, and space-saving door companies in the Kansas City area. Show your rough opening requirements, split stud kit installation, and mortise latch hardware process to win pocket door contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pocket-door-installation",
  },
};

export default function PocketDoorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pocket Door Installation Companies in Kansas City",
    description: "Custom websites for pocket door installation and interior sliding door companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pocket Door Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how wide the wall needs to be to fit a pocket door, whether existing plumbing or electrical in the wall rules out installation, and what handles work when the door disappears into the wall. A website that explains pocket door framing and hardware earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pocket Door Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pocket Door Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pocket door installation
              customers are KC homeowners
              replacing a swing
              door in a bathroom
              hallway where the
              arc conflicts with
              a vanity or toilet,
              homeowners converting
              a pantry or closet
              opening to gain
              back the swing radius
              in a tight kitchen,
              or homeowners finishing
              a basement and building
              new partitions where
              a pocket door eliminates
              the swing problem
              before it starts.
              The central education
              is rough opening
              size, what the wall
              cavity must contain
              (or not), and
              how the hardware
              works once the door
              is inside the pocket.
              Rough opening size:
              a pocket door rough
              opening must be
              twice the door width
              plus 1 inch — a
              32-inch door requires
              a 65-inch rough
              opening; the rough
              opening height is
              the door height
              plus 2.5 inches
              minimum to allow
              for the header
              track and door
              suspension hardware;
              the pocket side
              of the wall (the
              side the door slides
              into) must have
              no obstructions
              for the full door
              width depth — no
              plumbing, no electrical
              boxes, no HVAC
              ducts; KC homes
              with bathroom pocket
              doors frequently
              have the toilet
              supply line running
              inside the pocket
              cavity — this must
              be rerouted before
              framing begins.
              Split stud kit:
              pocket door frames
              use a split stud
              kit — a pre-assembled
              steel-reinforced
              frame system with
              a header track,
              two split studs
              at the opening,
              and an end frame
              at the pocket terminus;
              the split studs
              are two pieces
              that sandwich the
              door panel as it
              slides in — they
              are not full solid
              studs and do not
              provide the same
              wall rigidity;
              this is why pocket
              doors should not
              be installed in
              bearing walls without
              a structural header
              above — the split
              stud cavity cannot
              transfer load the
              way a standard
              king-and-jack stud
              assembly does;
              most interior non-bearing
              partitions in KC
              homes are safe
              candidates; bearing
              wall identification
              requires knowing
              the floor joist
              direction and the
              structural plan.
              Hardware and latch:
              pocket door handles
              are flush pulls —
              a recessed cup
              or edge pull mortised
              into the door face
              so the handle does
              not protrude when
              the door is open
              inside the pocket;
              standard mortise
              lock sets for pocket
              doors include a
              privacy latch (turn-button
              on inside for bathrooms)
              and a passage latch
              (no lock, for pantry
              or closet use);
              the track system
              uses a roller hanger
              suspended from
              the header track —
              quality roller hangers
              (Johnson Hardware,
              Stanley) have adjustable
              hangers that correct
              for a door that
              drifts out of plumb
              after installation;
              cheap track systems
              develop rattle and
              jump the track
              over time — the
              track and roller
              quality is the
              most important specification
              in a pocket door
              kit. Drywall around
              the opening: after
              the split stud
              frame is installed,
              the pocket cavity
              walls are drywalled
              separately — the
              drywall must be
              trimmed to the
              exact clearance
              to allow the door
              to slide without
              scraping; the edge
              of the opening
              is cased with a
              pocket door jamb
              and casing that
              returns into the
              pocket wall face.
              A pocket door website
              that explains the
              two-times-door-width
              rule, why the pocket
              cavity must be
              clear of plumbing,
              and how the split
              stud differs from
              a bearing wall
              earns the homeowner
              who wants to solve
              the swing arc problem
              without guessing.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before pocket door installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rough opening size — 2x door width + 1 inch rule, height clearance for track hardware, existing wall width check",
                  "Pocket cavity obstructions — plumbing and electrical rules, supply line rerouting, HVAC duct conflicts",
                  "Bearing wall identification — floor joist direction, split stud load limitation, when structural header is required",
                  "Split stud kit — pre-assembled frame system, track and roller quality differences, Johnson vs. budget hardware",
                  "Mortise hardware — flush pull types, privacy latch for bathroom, passage latch for pantry, adjustable hanger",
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
                What your pocket door installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rough opening section — 2x width rule, height requirement, wall depth check, how to measure existing opening",
                  "Obstruction check guide — plumbing and electrical rules, rerouting process, what requires opening the wall",
                  "Bearing wall section — identification method, split stud limitation, when a structural engineer is needed",
                  "Hardware section — split stud kit options, track and roller quality, adjustable hanger benefit",
                  "Mortise latch guide — flush pull types, privacy vs. passage function, door thickness requirement",
                  "Quote form with door size, opening location, basement or main floor, bearing wall concern, timeline",
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
                &ldquo;The obstruction check section
                saved me from two jobs that
                would have gone badly. KC
                bathrooms — especially in
                1970s ranches — almost always
                have the toilet supply line
                running inside the pocket
                wall. Both customers found
                out from the section before
                calling me, told me upfront
                there was a line in the
                wall, and we budgeted the
                reroute into the estimate.
                No surprises when we opened
                the wall. The bearing wall
                section also filtered out
                one call that I couldn&apos;t
                take — customer read it,
                figured out their wall was
                load-bearing, and went with
                a barn door instead. Better
                outcome for them, no liability
                for me.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Dunning, interior door and framing, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pocket door site with rough opening section, obstruction
                check guide, and quote form starts at $200. A full site
                with bearing wall guidance, hardware selection, and mortise
                latch content is $425–$750. One pocket door installation
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
