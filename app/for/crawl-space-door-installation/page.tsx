import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Crawl Space Door Installation Companies in Kansas City",
  description:
    "Custom websites for crawl space door installation, crawl space access panel, and crawl space entry replacement companies in the Kansas City area. Show your pest and moisture entry through open crawl space, KC frost line and access door insulation, and code-compliant egress size to win crawl space door installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/crawl-space-door-installation",
  },
};

export default function CrawlSpaceDoorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Crawl Space Door Installation Companies in Kansas City",
    description: "Custom websites for crawl space door installation and access panel replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Crawl Space Door Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a missing or broken crawl space door is letting animals inside, what happens to their pipes when the crawl space is exposed to KC winter temperatures, and whether a crawl space door needs to meet any code requirements. A website that explains crawl space door installation earns the access panel call before a cold snap freezes the pipes. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Crawl Space Door Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Crawl Space Door Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Crawl space door installation
              customers are KC homeowners
              whose crawl space access
              opening — the entry
              point cut through the
              foundation wall or
              the floor of a closet
              or exterior panel —
              has a damaged, missing,
              or non-existent door
              or panel; homeowners
              who discovered a rodent,
              raccoon, opossum, or
              snake inside the crawl
              space that entered
              through an open or
              deteriorated access
              opening; or homeowners
              who were told by a
              plumber or inspector
              that their pipes or
              ductwork in the crawl
              space showed freeze
              damage and learned
              that the uninsulated
              access opening had
              been exposing the
              crawl space to exterior
              temperatures throughout
              KC winters. The central
              education is pest and
              moisture entry through
              an open crawl space
              access, KC frost line
              depth and what crawl
              space temperature exposure
              means for pipes and
              ductwork, and the
              code-compliant access
              size and insulation
              requirement — three
              things that determine
              whether a homeowner
              understands why a
              crawl space door is
              a functional component
              and not just a cosmetic
              panel. Pest and moisture
              entry: a crawl space
              without a properly
              sealed access door
              is an open environment
              for any pest or wildlife
              that can fit through
              the opening; KC crawl
              spaces attract raccoons,
              opossums, groundhogs,
              and rats looking for
              shelter in fall and
              winter — these animals
              damage vapor barriers,
              insulation batts,
              ductwork, and wiring
              inside the crawl space;
              an open or deteriorated
              crawl space access
              also allows exterior
              humidity to freely
              enter the crawl space —
              in KC summer, warm
              humid exterior air
              entering a cooler crawl
              space creates condensation
              on the joists and vapor
              barrier, accelerating
              mold growth and wood
              deterioration. KC frost
              exposure: KC frost
              line depth is approximately
              thirty inches — the
              depth below grade
              at which the soil temperature
              remains above freezing
              through typical KC
              winters; a crawl space
              enclosed by a foundation
              wall sits between grade
              and the floor system —
              if the access opening
              is uninsulated or missing
              its door, exterior
              air at sub-zero temperatures
              during polar vortex
              events reaches the
              pipes and ductwork
              inside; supply and
              return ducts that run
              through an open crawl
              space lose significant
              heat to the cold crawl
              space air; water supply
              pipes on the exterior
              walls of the crawl
              space or in the first
              joist bay are vulnerable
              to freezing when the
              crawl space temperature
              drops below 32°F during
              sustained cold events.
              Code requirements:
              the IRC requires a
              minimum eighteen-by-twenty-four
              inch access opening
              to allow a person
              to enter the crawl
              space for maintenance
              — this is the minimum
              that permits full-body
              entry; an insulated
              crawl space door should
              have an R-value appropriate
              to the climate zone —
              KC is in Climate Zone
              4A, which calls for
              R-13 minimum at the
              crawl space access
              panel in a conditioned
              crawl space design;
              a crawl space access
              panel should seal
              against air infiltration
              at the perimeter —
              a door that closes
              but gaps around the
              frame provides minimal
              pest and thermal protection.
              A crawl space door
              website that explains
              pest and moisture entry
              from open access panels,
              KC frost line exposure
              risk to pipes and
              ducts, and the code-compliant
              size and insulation
              requirement earns
              the homeowner who
              found evidence of
              animal activity in
              their crawl space
              and wants to seal
              it before winter.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before crawl space door installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pest entry — raccoon, opossum, rodent access, damage to vapor barrier, insulation, ductwork, wiring",
                  "KC frost exposure — 30-inch frost line, polar vortex events below -15°F, pipe and duct freeze risk",
                  "Condensation from open access — warm humid exterior air, cooler crawl space, joist and vapor barrier condensation",
                  "Code size — IRC 18x24 inch minimum, full-body entry requirement, conditioned crawl insulation standard",
                  "Panel types — insulated vs. uninsulated, air seal at perimeter, interior vs. exterior mount",
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
                What your crawl space door installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pest entry section — KC wildlife species, what damage they cause inside crawl space, moisture from open entry",
                  "Frost exposure section — KC frost line depth, polar vortex pipe freeze, duct heat loss through uninsulated crawl",
                  "Code section — 18x24 minimum, Climate Zone 4A R-13 insulation standard, air seal perimeter requirement",
                  "Door types — insulated foam core panel, EZ-Access style, interior vs. exterior mount for different foundation types",
                  "Conditioned vs. vented crawl — door insulation level differs by crawl space design type",
                  "Quote form with access opening size, current door condition, evidence of pests, pipe history, timeline",
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
                &ldquo;The pest entry section
                is what converts the
                calls. KC homeowners
                hear &lsquo;crawl space door&rsquo;
                and think it&apos;s optional —
                just a cosmetic cover
                over a hole in the
                foundation. After the
                section went up explaining
                that raccoons actively
                seek the warmth of
                a crawl space in fall
                and that an open access
                is an invitation, and
                that they destroy vapor
                barriers and chew
                ductwork tape and
                build nests on top
                of the insulation,
                customers stopped thinking
                of the door as optional.
                The frost section helped
                with urgency timing —
                KC gets polar vortex
                events every two or
                three years that push
                temperatures below
                -10°F. Customers who
                had exposed supply
                pipes in the crawl
                space started calling
                in September after
                reading that section
                instead of waiting
                until after the first
                freeze.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Ihejirika, crawl space encapsulation and access panel installation, Kansas City, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A crawl space door installation site with pest entry section,
                KC frost exposure guide, and quote form starts at $200. A full
                site with code size requirements, door type comparison, and
                conditioned crawl insulation standard is $425–$750. One door
                installation job covers the cost. No contracts, no monthly fees.
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
