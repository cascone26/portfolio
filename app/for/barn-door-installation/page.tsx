import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Barn Door Installation Companies in Kansas City",
  description:
    "Custom websites for barn door installation, sliding barn door, and interior sliding door companies in the Kansas City area. Show your header board mounting, bypass hardware options, and door sizing to win barn door installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/barn-door-installation",
  },
};

export default function BarnDoorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Barn Door Installation Companies in Kansas City",
    description: "Custom websites for barn door and sliding interior door installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Barn Door Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how the track mounts to the wall when there are no studs at the right spacing, how wide the door needs to be to cover a standard opening with overlap, and whether a bypass door works when there is only wall space on one side. A website that explains barn door sizing and mounting earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Barn Door Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Barn Door Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Barn door installation
              customers are KC homeowners
              replacing a swing
              door in a tight
              hallway where the
              door arc conflicts
              with furniture
              or an adjacent
              door, homeowners
              who want a decorative
              statement piece
              for a pantry, laundry,
              or office opening,
              or homeowners doing
              a renovation and
              want sliding hardware
              as part of the
              design. The central
              education is header
              board mounting,
              door sizing for
              overlap, and the
              single vs. bypass
              hardware decision.
              Header board mounting:
              barn door track
              hardware is typically
              sold for installation
              into a 2x6, 2x8,
              or 2x10 header
              board — the board
              is fastened to
              the wall and the
              track is then
              bolted to the
              board; the header
              board must be
              fastened into
              wall studs — lag
              bolts (3-inch minimum)
              into studs every
              16 inches along
              the board length;
              KC homes with
              walls that don&apos;t
              have studs at
              the required spacing
              for the track
              length need horizontal
              blocking added
              between studs
              inside the wall
              cavity, or a
              full-width plywood
              panel (3/4-inch)
              over the existing
              wall surface sized
              to cover the entire
              track span — the
              plywood panel
              approach is common
              for retrofit installation
              where wall opening
              is not practical.
              Door sizing: a
              barn door must
              be wider than
              the opening it
              covers — the standard
              overlap is 2
              inches on each
              side of the opening
              (a 32-inch wide
              opening requires
              a 36-inch wide
              door); door height
              is the rough opening
              height plus 1
              inch for floor
              clearance adjustment;
              floor guide placement
              is critical —
              the bottom guide
              keeps the door
              plumb to the wall
              and prevents swing
              when bumped; most
              floor guides use
              a channel that
              the door bottom
              edge rides in
              or a pin that
              rides in a slot
              routed into the
              door bottom edge.
              Single vs. bypass:
              a single barn
              door slides to
              one side — it
              requires wall
              space equal to
              the door width
              plus 4–6 inches
              on the side it
              opens to; a bypass
              door (two doors
              on two tracks,
              one in front of
              the other) is
              used when wall
              space is limited
              on one side —
              each door is
              roughly the opening
              width (they overlap
              each other when
              open); bypass
              doors require
              a deeper header
              board to accommodate
              the two-track
              hardware and the
              two doors sitting
              at different distances
              from the wall.
              Weight rating:
              standard residential
              barn door hardware
              is rated for 200–300
              lb doors; a hollow-core
              door panel is
              25–35 lbs; a solid-core
              door panel is
              80–100 lbs; reclaimed
              wood or custom
              plank barn doors
              can easily exceed
              100 lbs — verify
              the hardware rating
              before ordering.
              A barn door website
              that explains
              header board mounting
              for homes where
              studs are in the
              wrong place, how
              to size the door
              for proper overlap,
              and when bypass
              hardware solves
              the space problem
              earns the homeowner
              who is ready to
              pull the trigger.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before barn door installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Header board mounting — stud spacing requirement, lag bolt size, plywood panel alternative for no-stud spans",
                  "Door sizing — overlap formula, height adjustment for floor clearance, floor guide placement and type",
                  "Single vs. bypass — wall space requirement for single, bypass hardware for limited wall space",
                  "Weight rating — hollow-core vs. solid-core vs. reclaimed wood weight, hardware rating verification",
                  "Privacy gap — barn door gap at wall edge and top, seal strip options for bathroom and bedroom use",
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
                What your barn door installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Header board section — lag bolt requirement, stud-spacing problem solutions, plywood panel approach",
                  "Door sizing guide — overlap formula by opening width, height calculation, floor guide selection",
                  "Hardware selection section — single vs. bypass decision, wall space measurement, two-track depth requirement",
                  "Weight section — door panel weight by type, hardware rating verification, max door size by hardware model",
                  "Privacy section — gap at wall edge and top, brush seal and wall stop options, bedroom vs. pantry use",
                  "Quote form with opening width and height, door style preference, single or bypass, wall space measurement",
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
                &ldquo;The header board section
                was the thing that killed
                the most jobs before I
                had the website. Customers
                would buy the hardware
                kit from a big-box store,
                try to install it, find
                out there were no studs
                where they needed them,
                and call me in frustration.
                Half of them had already
                punched holes in the drywall.
                After the section went up
                explaining the plywood panel
                approach and why the stud
                layout matters before you
                order anything, customers
                called before buying and
                the conversation started
                in the right place. The
                bypass section also got
                me jobs I would have missed —
                customers who thought they
                didn&apos;t have enough wall space
                found out bypass hardware
                solved their layout problem.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Holloway, interior door and hardware installation, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A barn door site with header mounting section, door
                sizing guide, and quote form starts at $200. A full
                site with hardware selection, weight guide, and privacy
                section content is $425–$750. One bypass door installation
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
