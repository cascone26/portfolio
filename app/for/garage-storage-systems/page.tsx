import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Garage Storage System Companies in Kansas City",
  description:
    "Custom websites for garage storage system installation, overhead ceiling storage, wall-mount track systems, and garage cabinet companies in the Kansas City area. Show your weight capacity guide, stud anchoring process, and ceiling joist assessment to win garage storage contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/garage-storage-systems",
  },
};

export default function GarageStorageSystemsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Garage Storage System Companies in Kansas City",
    description: "Custom websites for garage storage system installation and organization companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garage Storage System Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their ceiling joists can support an overhead storage platform, how wall-mount track systems handle weight, and whether garage cabinets need to be anchored to studs. A website that explains the structural reality earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garage Storage Systems in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Garage Storage Systems</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Garage storage system
              customers are KC homeowners
              who can no longer
              park in their garage,
              homeowners preparing
              to sell who want
              organized storage
              to show during listing,
              or homeowners who
              have accumulated
              seasonal gear, tools,
              and bins and want
              to reclaim the floor.
              The central education
              is the structural
              reality of each
              storage type —
              overhead platforms,
              wall-mount systems,
              and floor cabinets
              each have specific
              requirements that
              determine where
              they can go and
              how much they hold.
              Overhead ceiling
              storage: ceiling-mounted
              storage platforms
              (Fleximounts, Racor,
              SafeRacks) attach
              to ceiling joists
              with lag screws —
              2x6 ceiling joists
              at 16-inch OC can
              support platforms
              rated 600 lbs distributed
              load (100 lbs per
              square foot is the
              structural floor
              loading requirement,
              well above platform
              ratings); 2x4 ceiling
              joists (common in
              older KC tract homes
              with unfinished garages)
              support less load
              and require confirmation
              of joist grade;
              clearance: NEC
              requires 7.5 feet
              of headroom below
              the main service
              panel — nothing
              can be mounted
              below or in front
              of the panel; minimum
              ceiling height for
              an overhead platform
              with 18-inch depth
              is typically 8 feet
              to maintain vehicle
              clearance. Wall-mount
              track systems: slatwall
              (polymer or MDF
              with horizontal
              channels) attaches
              to wall studs with
              3-inch screws —
              garage drywall
              is typically 5/8
              inch, so screws
              must penetrate
              at least 1.5 inches
              into the stud;
              modular track systems
              (Gladiator GearTrack,
              Rubbermaid FastTrack)
              use horizontal rails
              attached at studs
              and support 50–75
              lbs per hook or
              bracket; weight
              is distributed across
              the wall when multiple
              tracks and hooks
              are used; masonry
              walls (poured concrete
              or CMU — common
              in KC walk-out
              basements) require
              concrete anchors
              (Tapcon, Hilti)
              instead of wood
              screws. Cabinet
              anchoring: freestanding
              metal cabinets
              do not require
              wall anchoring
              unless they will
              hold heavy items
              at height or are
              in an area where
              a child could climb;
              upper wall cabinets
              must be screwed
              into studs at the
              top rail — 3/4-inch
              plywood or solid
              blocking between
              studs provides
              continuous anchoring;
              stud spacing in
              garage walls is
              typically 16 or
              24 inches OC (24
              is common in garages
              built after 1985
              in KC suburbs).
              Floor considerations:
              KC garages with
              a floor drain have
              a slope toward
              the drain — cabinets
              on sloped floors
              require leveling
              feet or shims;
              epoxy-coated floors
              affect anchor decisions
              since post-coat
              drilling chips
              the coating at
              the anchor point;
              most freestanding
              cabinet systems
              (Husky, Kobalt,
              Gladiator) have
              adjustable leveling
              feet that accommodate
              1.5 inches of slope.
              A garage storage
              website that explains
              how overhead platforms
              attach to ceiling
              joists, what wall-mount
              systems can actually
              hold, and what
              the anchoring requirements
              are for upper cabinets
              earns the homeowner
              who wants to do
              this right and
              not pull it all
              down in a year.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a garage storage system
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Overhead platform load — ceiling joist size and spacing, distributed weight rating, vehicle clearance requirements",
                  "Wall track systems — stud anchoring depth, per-hook weight capacity, masonry wall anchor alternatives",
                  "Cabinet anchoring — upper cabinet stud requirement, blocking for continuous anchoring, freestanding stability",
                  "Floor slope — leveling feet range, sloped drain floor accommodation, epoxy coating and post-install drilling",
                  "Electrical panel clearance — NEC 7.5-foot headroom requirement, what can't go near the panel",
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
                What your garage storage system website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Overhead platform guide — joist size assessment, platform weight ratings, clearance requirements for vehicles and panel",
                  "Wall track section — slatwall vs. modular track, stud anchoring depth, masonry wall options",
                  "Cabinet section — upper cabinet stud requirements, blocking installation, leveling for sloped floors",
                  "Weight capacity guide — per-hook and total wall load, overhead distributed load, what each system handles",
                  "Floor and panel section — NEC panel clearance, drain slope accommodation, epoxy flooring considerations",
                  "Quote form with garage dimensions, ceiling height, floor type (concrete/epoxy), items to store",
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
                &ldquo;The ceiling joist section
                was the thing that separated
                me from every other garage
                storage installer in my area.
                Before, homeowners would call
                saying they wanted an overhead
                platform and I'd show up to
                find 2x4 joists on 24-inch
                centers that needed assessment
                before I could quote anything.
                After I added the guide explaining
                what to look for and what
                the load ratings meant, customers
                took photos of their joists
                before calling. I stopped
                showing up blind. The panel
                clearance section also saved
                a job: a customer had planned
                the layout with overhead
                storage directly above the
                panel and the section made
                them realize the problem before
                I even arrived.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Morrison, garage organization and storage systems, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garage storage site with overhead platform guide,
                wall track section, and quote form starts at $200.
                A full site with cabinet anchoring, weight capacity
                guide, and floor considerations is $425–$750. One
                full garage organization install covers the cost.
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
