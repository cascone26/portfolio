import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Bathroom Grab Bar Installation Companies in Kansas City",
  description:
    "Custom websites for bathroom grab bar installation, ADA grab bar, and safety bar companies in the Kansas City area. Show your ADA positioning by toilet and shower location, stud vs. blocking anchor method, and tiled wall installation to win grab bar contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/bathroom-grab-bar-installation",
  },
};

export default function BathroomGrabBarInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Bathroom Grab Bar Installation Companies in Kansas City",
    description: "Custom websites for bathroom grab bar installation and ADA safety bar companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Bathroom Grab Bar Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know where grab bars should be positioned at a toilet, whether a grab bar can be anchored into tile without hitting a stud, and what load a properly installed bar actually supports. A website that explains grab bar installation earns the safety call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Bathroom Grab Bar Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Bathroom Grab Bar Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Bathroom grab bar installation
              customers are KC homeowners
              whose parent is recovering
              from a hip replacement
              and needs toilet and shower
              support before coming
              home from rehab, homeowners
              aging in place who have
              had a fall or near-fall
              in the bathroom and recognize
              the risk, or homeowners
              remodeling a bathroom
              to accommodate a family
              member with a mobility
              limitation and want permanent
              ADA-compliant placement.
              The central education
              is ADA positioning standards
              by fixture type, stud
              vs. blocking anchor method,
              and tiled wall installation —
              three things that determine
              whether a grab bar
              provides genuine safety
              support or pulls out
              of the wall under load.
              ADA positioning: at
              a toilet, the standard
              ADA placement is a
              42-inch horizontal bar
              on the side wall at
              33–36 inches above the
              floor — the bar should
              extend from 12 inches
              in front of the toilet
              to 54 inches from the
              rear wall; a rear wall
              bar (24–36 inches, centered
              over the toilet) provides
              additional back support;
              in KC homes where the
              toilet is not on a
              side wall, a swing-down
              bar mounted to the floor
              flange provides equivalent
              support without wall
              anchoring; in a shower
              or tub, the horizontal
              bar on the control wall
              is placed at 33–36
              inches for standing
              support and at 33–38
              inches on the back wall
              for seated support; an
              angled bar (135 degrees)
              at the shower entry
              provides both standing
              and seated grip through
              one bar. Anchor method:
              a grab bar rated for
              250 pounds of load
              must be anchored to
              framing — the ADA standard
              requires the bar and
              fastening to withstand
              250 pounds of downward
              and outward force; mounting
              into drywall with toggle
              bolts does not meet
              this standard regardless
              of the toggle bolt&apos;s
              rated load — the drywall
              itself fails before
              the toggle; stud mounting
              (two lag screws or 3-inch
              #10 wood screws into
              each stud) meets the
              load requirement; when
              studs are not in the
              right position, blocking
              must be added — this
              means opening the wall,
              installing horizontal
              2x blocking between
              the two nearest studs
              at the correct bar
              height, closing the
              wall, and mounting
              the bar into the blocking.
              Tiled walls: installing
              a grab bar through
              tile requires drilling
              the tile with a diamond
              hole saw, setting the
              bar flange over the
              tile, and anchoring
              through the tile and
              drywall or backer board
              into the framing —
              the tile itself carries
              no load; in older KC
              bathrooms with ceramic
              tile set in mortar
              bed (common in pre-1960
              bathrooms), the mortar
              bed adds 1–2 inches
              of depth and the screw
              length must account
              for this; a grab bar
              website that explains
              where bars go, why
              stud anchoring is non-negotiable,
              and how tiled walls
              are handled earns the
              homeowner who needs
              this done right before
              a family member comes
              home.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before bathroom grab bar installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "ADA toilet positioning — 42-inch side bar height, front-to-rear placement, rear wall bar option",
                  "Shower bar placement — 33-36 inch standing height, seated back wall height, angled entry bar",
                  "Stud vs. toggle anchor — 250-pound load standard, why toggle bolts don't meet ADA, stud mount requirement",
                  "Blocking installation — when to add blocking, wall opening process, blocking height for bar position",
                  "Tiled wall drilling — diamond hole saw method, mortar bed depth in older KC bathrooms, load path",
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
                What your bathroom grab bar installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Toilet bar section — ADA placement diagram, 33-36 inch height standard, rear wall and side wall bars",
                  "Shower bar section — horizontal, angled, and vertical bar placement, seated vs. standing height",
                  "Anchor load section — 250-pound ADA standard, why toggles fail, stud mount vs. blocking requirement",
                  "Blocking guide — how blocking is added, wall patch process, no-stud solutions",
                  "Tiled wall section — diamond bit drilling, mortar bed depth in KC older bathrooms, flange sealing",
                  "Quote form with fixture location, wall material, stud availability, mobility need, timeline",
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
                &ldquo;The toggle bolt section
                stopped the argument before
                it started. Every single
                customer who had tried to
                install grab bars themselves
                had used toggle bolts —
                and every single one of
                those bars would have failed
                under actual load. The section
                explaining that the drywall
                fails before the toggle
                at 250 pounds, and that
                stud or blocking anchoring
                is the only acceptable method,
                changed how customers came
                to me. They stopped trying
                to do it themselves and called
                me instead. The blocking
                section also opened up a
                lot of jobs — customers
                who assumed it couldn&apos;t
                be done without studs in
                the right place understood
                that blocking is the standard
                solution, not a workaround.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Oconnell, aging-in-place carpentry and bathroom safety, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A grab bar site with ADA positioning section, anchor load guide,
                and quote form starts at $200. A full site with tiled wall content,
                blocking guide, and shower bar placement is $425–$750. One
                properly installed grab bar covers the cost. No contracts,
                no monthly fees.
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
