import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Crawl Space Encapsulation Companies in Kansas City",
  description:
    "Custom websites for crawl space encapsulation, vapor barrier installation, and crawl space moisture control companies in the Kansas City area. Show your KC humidity infiltration, stack effect moisture migration, and 20-mil liner vs. 6-mil poly to win crawl space encapsulation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/crawl-space-encapsulation",
  },
};

export default function CrawlSpaceEncapsulationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Crawl Space Encapsulation Companies in Kansas City",
    description: "Custom websites for crawl space encapsulation and vapor barrier installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Crawl Space Encapsulation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the musty smell coming up through the floor registers is from the crawl space, whether the fiberglass batt insulation hanging from the floor joists is doing anything useful, and whether crawl space encapsulation is necessary or just a contractor upsell. A website that explains crawl space encapsulation earns the call from the homeowner whose wood floors are buckling and whose utility bills have no explanation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Crawl Space Encapsulation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Crawl Space Encapsulation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Crawl space encapsulation
              customers are KC homeowners
              who notice a musty
              or earthy smell migrating
              from below the first
              floor — a smell
              that indicates elevated
              humidity and possible
              mold growth on the
              wood framing, floor
              joists, or subfloor
              in the crawl space;
              homeowners whose
              hardwood floors
              on the first floor
              are cupping, buckling,
              or showing gaps
              in winter and swelling
              at seams in summer —
              a pattern that indicates
              the wood flooring
              is absorbing moisture
              migrating upward
              from the crawl
              space through the
              subfloor; or homeowners
              whose home inspector
              noted high crawl
              space humidity readings,
              mold on floor joists,
              or fiberglass batt
              insulation sagging
              and falling from
              the floor joist
              cavities. The central
              education is KC
              humidity infiltration
              into vented crawl
              spaces, the stack
              effect mechanism
              that drives crawl
              space air into
              the living space,
              and why the 20-mil
              liner over 6-mil
              poly matters for
              long-term performance —
              three things that
              determine whether
              a homeowner understands
              that a vented crawl
              space in KC is
              a humidity source
              rather than a ventilation
              solution. KC humidity
              and vented crawl
              spaces: the traditional
              building practice
              of venting crawl
              spaces was intended
              to allow outdoor
              air to dilute moisture
              rising from the
              ground; in KC Climate
              Zone 4A, outdoor
              summer air at 75
              to 85 degrees dew
              point enters the
              crawl space through
              foundation vents
              and contacts the
              cooler ground and
              foundation surfaces;
              when warm humid
              outdoor air contacts
              a cooler surface,
              it releases moisture —
              the crawl space
              vents that were
              designed to remove
              moisture are in
              summer conditions
              introducing it;
              studies by the
              Building Science
              Corporation and
              DOE show that vented
              crawl spaces in
              Climate Zone 4A
              and humid climates
              have higher average
              humidity than sealed
              and conditioned
              crawl spaces; wood
              framing and floor
              joists in a crawl
              space with sustained
              humidity above
              70 percent relative
              humidity begin
              mold growth within
              two to three weeks.
              Stack effect moisture
              migration: the stack
              effect describes
              the tendency of
              warm air to rise
              through a structure
              and exit at the
              top — in winter,
              warm living space
              air rises and exits
              at the attic; to
              replace it, air
              is drawn in at
              the bottom of the
              structure from
              the crawl space
              through subfloor
              penetrations, floor
              register gaps, and
              floor joist bay
              openings; a homeowner
              who smells the
              crawl space through
              the floor registers
              is experiencing
              the stack effect —
              crawl space air
              at sixty to seventy
              percent relative
              humidity and carrying
              mold spores is
              being drawn into
              the living space
              through the HVAC
              distribution system;
              encapsulation stops
              the moisture source
              and the air pathway
              simultaneously.
              Liner specification:
              a 6-mil polyethylene
              vapor barrier stapled
              to floor joists
              and laid on the
              crawl space floor
              is the minimum
              code requirement
              in many jurisdictions
              — but it does not
              encapsulate; it
              reduces evaporation
              from the ground
              surface but leaves
              the walls open,
              the vents open,
              and the vapor pathways
              through wall penetrations
              active; a 20-mil
              reinforced liner
              covering the floor
              and walls, sealed
              to the foundation
              wall with tape
              or mastic, and
              with vents closed
              and sealed creates
              a conditioned crawl
              space that the
              HVAC system includes
              in the thermal
              envelope — humidity
              is controlled to
              the same level
              as the living space;
              the 20-mil material
              resists puncture
              from the debris
              and foot traffic
              that 6-mil does
              not survive. A crawl
              space encapsulation
              website that explains
              KC humidity infiltration
              through vented crawl
              spaces, the stack
              effect moisture
              migration pathway,
              and why liner thickness
              is the difference
              between a vapor
              retarder and a
              sealed system earns
              the homeowner whose
              hardwood floors
              are telling them
              something is wrong
              below.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before crawl space encapsulation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC vented crawl space failure — summer humidity infiltration, outdoor air depositing moisture on cooler crawl surfaces",
                  "Stack effect — crawl space air drawn into living space through subfloor penetrations, register gaps, floor joist bays",
                  "Mold growth threshold — 70% RH sustained for 2-3 weeks triggers mold on framing and floor joists",
                  "20-mil vs. 6-mil liner — vapor retarder vs. sealed system, wall coverage, puncture resistance, vent sealing requirement",
                  "Fiberglass batt failure — batt insulation in floor joist bays sagging from moisture absorption, falls and loses R-value",
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
                What your crawl space encapsulation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC humidity section — Climate Zone 4A summer dew point, vented crawl moisture introduction mechanism",
                  "Stack effect section — winter air draw from crawl through subfloor, mold spore pathway into HVAC system",
                  "Liner specification section — 20-mil vs. 6-mil, floor + wall coverage, vent sealing, tape/mastic seams",
                  "Conditioned crawl section — HVAC thermal envelope inclusion, humidity control to living space level",
                  "Before/after scope — insulation removal, mold treatment, liner installation, dehumidifier sizing",
                  "Quote form with crawl space height, musty smell, floor buckling, humidity readings, insulation type, prior work",
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
                &ldquo;The stack effect section
                is what makes KC
                homeowners understand
                why they smell the
                crawl space inside
                their house. Before
                the section went
                up, customers thought
                the musty smell
                was coming from
                a drain or the
                HVAC itself. After
                the section explained
                that winter stack
                effect draws crawl
                space air up through
                every gap in the
                subfloor and into
                the living space,
                they understood
                immediately why
                sealing the crawl
                space fixed the
                smell and why cleaning
                the HVAC ducts
                doesn&apos;t. The vented
                crawl humidity
                section also helped —
                KC homeowners who
                had been told to
                keep the vents
                open in summer
                understood why
                that advice is
                wrong in a humid
                climate once they
                saw the dew point
                math.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Fitzgerald, crawl space encapsulation and basement moisture control, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A crawl space encapsulation site with KC humidity section, stack
                effect guide, and quote form starts at $200. A full site with liner
                specification, conditioned crawl explanation, and mold treatment
                content is $425–$750. One encapsulation job covers the cost. No
                contracts, no monthly fees.
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
