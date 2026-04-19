import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Screen Enclosure Companies in Kansas City",
  description:
    "Custom websites for screen enclosure installation, screened porch, and patio screen room companies in the Kansas City area. Show your frame material options, screen mesh types, and foundation requirements to win screen enclosure contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/screen-enclosure-installation",
  },
};

export default function ScreenEnclosureInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Screen Enclosure Companies in Kansas City",
    description: "Custom websites for screen enclosure and screened porch companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Screen Enclosure Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether aluminum or wood framing holds up better in KC weather, what screen mesh blocks mosquitoes vs. no-see-ums, and whether a screened porch adds value when selling. A website that explains frame and mesh options earns the design consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Screen Enclosures in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Screen Enclosure Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Screen enclosure customers
              are homeowners who
              want to use their
              patio or deck through
              the entire KC outdoor
              season without insects,
              or who are converting
              an open porch into
              a usable living
              space without the
              cost of a full
              addition. The central
              education is frame
              material, mesh type,
              and what the structure
              attaches to: aluminum
              frame (extruded aluminum
              tube, 1" or 1.5"
              profiles in white,
              bronze, or painted
              finishes) is the
              dominant material
              for screen enclosures —
              it does not rot,
              warp, or need painting,
              and the interlocking
              spline system makes
              screen replacement
              straightforward.
              Pressure-treated
              wood frame is lower
              initial cost but
              requires periodic
              staining and checking
              for rot at post
              bases. Screen mesh:
              fiberglass 18x16
              mesh (the standard)
              blocks mosquitoes
              at 1.2mm openings —
              no-see-ums require
              20x20 or 20x30
              mesh (smaller openings,
              slightly less airflow).
              Pet-resistant screen
              (aluminum or polyester
              reinforced, 3–4x
              thicker) resists
              dogs and cats pushing
              or scratching through
              the panels. Solar
              screen mesh (80%
              shade cloth) reduces
              heat gain on south-
              and west-facing
              enclosures. Foundation
              and permit requirements
              in KC: most screen
              enclosures require
              a permit if they
              are attached to
              the house — a concrete
              slab or existing
              deck provides the
              floor; posts anchor
              to footings or
              post bases set
              in concrete. Attachment
              point: an enclosure
              attached to the
              house requires
              a ledger board
              fastened through
              the siding and
              into the rim joist
              with lag bolts —
              improper attachment
              is the primary
              failure point in
              high wind. A screen
              enclosure website
              that explains aluminum
              vs. wood framing,
              mesh options by
              insect type, and
              the permit and
              attachment requirements
              earns the homeowner
              who has been sitting
              inside watching
              their deck go unused
              all summer.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a screen enclosure
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Aluminum vs. wood framing — maintenance, longevity, appearance, cost difference",
                  "Screen mesh types — 18x16 vs. no-see-um mesh, pet screen, solar screen — airflow trade-offs",
                  "Permit requirements — when a permit is required, what drawings or site plans are needed",
                  "Attachment to house — how the enclosure connects to the rim joist, what the ledger requires",
                  "Added value — whether a screened porch affects appraisal and resale in KC",
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
                What your screen enclosure website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Frame material guide — aluminum profiles, finishes, and longevity vs. wood cost and maintenance",
                  "Mesh options — standard, no-see-um, pet screen, solar screen — when to use each",
                  "Attachment and foundation section — ledger bolt pattern, footing requirements, slab vs. deck floor",
                  "Permit guide — KC-area permit requirements for attached porch enclosures",
                  "Before and after gallery — open patios and decks converted to screened living spaces",
                  "Design form with patio dimensions, attachment type, frame preference, mesh priorities",
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
                &ldquo;My biggest problem was
                customers who got a quote
                for aluminum framing
                and then found a handyman
                offering wood for half
                the price. The website
                explaining why aluminum
                does not rot at post
                bases and does not need
                staining every three
                years addressed that
                comparison before the
                customer could even
                bring it up. The mesh
                section also differentiated
                my quotes — I started
                offering no-see-um
                mesh as a standard
                upgrade and customers
                who read the site already
                knew they wanted it.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Callahan, screen enclosure contractor, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A screen enclosure site with frame
                guide, mesh options, and design form
                starts at $200. A full site with
                attachment and permit section, gallery,
                and aluminum vs. wood comparison
                is $425–$750. One enclosure installation
                covers the cost. No contracts,
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
