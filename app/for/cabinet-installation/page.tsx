import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Cabinet Installation Companies in Kansas City",
  description:
    "Custom websites for cabinet installation, kitchen cabinet installation, and bathroom cabinet companies in the Kansas City area. Show your hanging rail anchoring, shimming for plumb, and scribe molding process to win cabinet installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/cabinet-installation",
  },
};

export default function CabinetInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Cabinet Installation Companies in Kansas City",
    description: "Custom websites for kitchen and bathroom cabinet installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Cabinet Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how upper cabinets are anchored securely, what happens when the wall isn't plumb or the floor isn't level, and how scribe molding covers the gap where cabinets meet an uneven wall. A website that explains the installation process earns the cabinet call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Cabinet Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Cabinet Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Cabinet installation
              customers are KC homeowners
              remodeling a kitchen
              with new cabinet
              boxes they purchased
              from a cabinet
              dealer or warehouse,
              homeowners replacing
              builder-grade stock
              cabinets with semi-custom
              or custom boxes,
              or homeowners finishing
              a basement with
              a wet bar or
              laundry area and
              needing upper and
              lower cabinets
              installed. The
              central education
              is how upper cabinets
              are safely anchored,
              how to handle
              a floor or wall
              that is not level
              or plumb, and
              how scribe molding
              covers the inevitable
              gap where cabinet
              meets wall. Upper
              cabinet anchoring:
              upper kitchen cabinets
              must be screwed
              into wall studs —
              cabinet screws
              (typically 2.5–3
              inch) go through
              the mounting rail
              (the horizontal
              wood or metal
              rail inside the
              cabinet at the
              top and bottom
              of the back) and
              into the stud;
              a minimum of two
              screws per stud
              intersection is
              standard; the
              layout line for
              upper cabinets
              is typically drawn
              at 54 inches from
              the finished floor
              (18 inches above
              the 36-inch countertop
              standard) — the
              bottom of the
              upper cabinet
              sits on this line;
              if studs are not
              at the right spacing
              for the cabinet
              width, horizontal
              blocking (3/4
              plywood strip)
              between studs
              can be installed
              first to provide
              continuous anchoring.
              Shimming for level
              and plumb: base
              cabinets sit on
              the floor and
              must be leveled —
              KC homes settle
              unevenly and a
              floor that is
              1/2 inch out of
              level over 10
              feet is common;
              a long level confirms
              the high point
              in the run; shims
              under the base
              cabinet feet at
              the low end bring
              the run level —
              the toe kick covers
              the shims; upper
              cabinets must
              be plumb (vertical
              front-to-back
              and side-to-side) —
              a plumb cabinet
              allows doors to
              hang properly
              and stay open
              or closed; out-of-plumb
              walls push the
              top of the cabinet
              in or out — shimming
              between the cabinet
              back and the wall
              at the top or
              bottom corrects
              this. Scribe molding:
              a scribe is a
              thin strip of
              matching wood
              molding that is
              cut to conform
              to the wall irregularity
              and covers the
              gap between the
              cabinet and the
              wall; the scribe
              is ripped to the
              maximum gap width
              then scribed (pencil
              traced along the
              wall contour) and
              cut with a jigsaw
              or coping saw
              to follow the
              contour; scribes
              are common at
              the side of a
              run where the
              cabinet meets
              a wall and at
              the top of upper
              cabinets where
              the ceiling is
              not level. Filler
              strips: when the
              cabinet run is
              shorter than the
              wall-to-wall span,
              a filler strip
              (typically 1.5–3
              inch wide piece
              of cabinet material)
              is added at one
              or both ends to
              fill the gap —
              fillers allow
              drawer and door
              hardware to clear
              the wall when
              fully open.
              A cabinet installation
              website that explains
              how upper cabinets
              are anchored, what
              shimming accomplishes
              in an uneven room,
              and how scribe
              molding finishes
              the gap where
              cabinets meet
              walls earns the
              homeowner who
              bought the cabinets
              and now wants
              them installed
              correctly.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before cabinet installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Upper cabinet anchoring — stud requirement, mounting rail screws, blocking for continuous anchoring",
                  "Layout line height — 54-inch standard, 18 inches above countertop, what changes with non-standard heights",
                  "Shimming for level — finding high point in floor run, shim placement, toe kick coverage of shims",
                  "Scribe molding — when scribing is needed, how to mark and cut contour, matching wood material",
                  "Filler strips — when fillers are needed, sizing, how they allow door and drawer clearance at wall",
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
                What your cabinet installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Anchoring section — stud-finding, mounting rail screws, blocking installation for no-stud spans",
                  "Layout guide — layout line heights, finding the high point, leveling the run before first cabinet goes in",
                  "Shimming section — base cabinet level shimming, upper cabinet plumb shimming, toe kick and filler coverage",
                  "Scribe molding section — when scribing is required, marking technique, cutting contour, glue and nail attachment",
                  "Filler strip section — sizing fillers, drawer and door clearance requirement, matching finish",
                  "Quote form with kitchen dimensions, upper and lower cabinet count, cabinet brand or style, timeline",
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
                &ldquo;The shimming section was
                what I needed for older KC
                kitchens where the floor
                drops an inch from one end
                to the other. Before, customers
                would watch me shim and think
                I was making up for a mistake.
                After the section explained
                that shimming is what a professional
                installer does on every job
                in every house, they understood
                it was part of the process
                and not a workaround. The
                scribe molding section also
                changed quote conversations —
                customers who had seen the
                gap between their old cabinet
                and the wall started asking
                about scribing before they
                even got to the contact form,
                and by the time they called
                they already knew that gap
                was going to be covered.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Espinoza, kitchen and bathroom cabinet installation, Raytown, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A cabinet installation site with anchoring section,
                shimming guide, and quote form starts at $200. A full
                site with scribe molding, filler strips, and layout
                content is $425–$750. One kitchen cabinet installation
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
