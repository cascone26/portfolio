import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Shower Door Installation Companies in Kansas City",
  description:
    "Custom websites for shower door installation, frameless shower door, semi-frameless shower enclosure, and custom glass companies in the Kansas City area. Show your glass thickness options, out-of-plumb tolerance, and hardware finishes to win shower door contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/shower-door-installation",
  },
};

export default function ShowerDoorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Shower Door Installation Companies in Kansas City",
    description: "Custom websites for shower door installation and glass enclosure companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Shower Door Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their shower opening is square enough for frameless glass, what the difference is between 3/8-inch and 1/2-inch glass, and how shower doors are kept watertight without a frame. A website that explains the installation reality earns the quote call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Shower Door Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Shower Door Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Shower door installation
              customers are KC homeowners
              remodeling a bathroom
              and replacing a shower
              curtain with glass,
              homeowners upgrading
              from a framed aluminum
              shower door to frameless
              glass, or homeowners
              in new construction
              who want to understand
              the options before
              the tile contractor
              finishes. The central
              education is the
              difference between
              shower door types
              and what determines
              whether a frameless
              installation is
              viable in a given
              opening. Framed vs.
              semi-frameless vs.
              frameless: framed
              shower doors have
              aluminum channels
              on all four sides
              of the glass — the
              channel covers wall
              irregularities and
              tolerates out-of-plumb
              walls up to 3/4
              inch; lowest glass
              cost, most tolerant
              of imperfect openings,
              but channels collect
              soap scum and are
              more visible. Semi-frameless
              have channels on
              the header and sill
              but exposed glass
              edges on the jambs —
              cleaner look than
              framed with more
              tolerance than fully
              frameless. Frameless
              shower doors use
              no continuous channel —
              hardware (hinges,
              clamps, header bar)
              attach directly
              to the glass; requires
              thicker glass (3/8
              inch minimum, 1/2
              inch preferred for
              large panels); walls
              must be within 1/4
              inch of plumb and
              square for frameless
              to fit correctly
              without visible
              gaps; a tilted wall
              that is out of plumb
              more than 3/8 inch
              over the door height
              may require shimming
              or trim strips to
              seal the gap. Glass
              thickness: 3/8-inch
              tempered glass is
              standard for most
              frameless installations —
              adequate stiffness
              for panels up to
              36 inches wide;
              1/2-inch glass is
              preferred for panels
              over 36 inches,
              fixed panels, and
              walk-in configurations
              where no swinging
              hardware provides
              rigidity; 1/4-inch
              glass is used in
              framed doors where
              the aluminum channel
              provides structural
              support. Water containment
              in frameless designs:
              frameless glass relies
              on a small L-shaped
              vinyl sweep at the
              door bottom and
              a brush or magnetic
              seal at the jamb —
              frameless installations
              are not as watertight
              as framed doors
              with full perimeter
              channel seals; the
              shower threshold,
              pan slope (minimum
              1/4 inch per foot
              toward drain), and
              correct shower head
              placement (aimed
              away from the door
              side) are all necessary
              for a frameless
              door to contain
              water adequately.
              Hardware finish selection:
              chrome, brushed nickel,
              matte black, and
              oil-rubbed bronze
              are the primary
              finish options —
              matte black and
              brushed nickel are
              currently most popular
              in KC renovations;
              hardware finish
              should coordinate
              with the plumbing
              trim and any accessory
              fixtures in the
              bathroom; a finish
              change on existing
              hardware (replacing
              hinges and handle)
              is possible if the
              glass panels remain.
              A shower door installation
              website that explains
              what makes a frameless
              installation viable,
              what glass thickness
              means for different
              opening widths,
              and how frameless
              doors contain water
              earns the homeowner
              who has been looking
              at frameless glass
              photos and wondering
              if their bathroom
              qualifies.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a shower door
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Framed vs. frameless — wall plumb tolerance, aluminum channel coverage, visual and maintenance differences",
                  "Glass thickness — 3/8 vs. 1/2 inch, when thicker glass is needed, panel width and rigidity",
                  "Water containment — how frameless doors seal at the bottom and jamb, shower pan slope requirement",
                  "Out-of-plumb walls — maximum tolerance for frameless, when shimming or trim strips are needed",
                  "Hardware finishes — matte black vs. brushed nickel, coordinating with plumbing trim, replacement options",
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
                What your shower door installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Door type guide — framed vs. semi-frameless vs. frameless, tolerance requirements, maintenance comparison",
                  "Glass thickness section — 3/8 vs. 1/2 inch by panel width, structural purpose of thickness",
                  "Water containment section — sweep and brush seals, shower pan slope, shower head direction",
                  "Wall plumb guide — how to check plumb, when an opening qualifies for frameless, what happens if it doesn't",
                  "Hardware section — finish options, what coordinates with KC renovation trends, changing hardware on existing glass",
                  "Quote form with shower opening width and height, wall material (tile/acrylic/fiberglass), preferred finish, photos",
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
                &ldquo;The wall plumb section
                saved my business from a
                bad situation. A customer
                called saying their new frameless
                door leaked from day one.
                When I arrived, the shower
                wall was 5/8 of an inch
                out of plumb — the tile
                contractor had installed
                the pan and tile without
                verifying plumb, and the
                frameless door physically
                couldn't seal against it.
                After that, I added the
                section explaining the plumb
                tolerance requirement and
                what to verify before installation.
                Now customers check their
                walls themselves or ask the
                tile contractor to verify
                before I'm even called. I've
                had zero leaks attributable
                to installation since, and
                customers who read the section
                arrive with photos of their
                opening and the plumb measurement
                already done.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — V. Park, shower door and glass installation, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A shower door site with door type guide, glass thickness
                section, and quote form starts at $200. A full site
                with water containment section, plumb guide, and
                hardware options is $425–$750. One frameless shower
                door installation covers the cost. No contracts,
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
