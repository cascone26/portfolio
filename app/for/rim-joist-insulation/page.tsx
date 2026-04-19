import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Rim Joist Insulation Companies in Kansas City",
  description:
    "Custom websites for rim joist insulation, band joist air sealing, and basement rim joist companies in the Kansas City area. Show your KC rim joist as the largest uninsulated air bypass in older homes, spray foam vs. cut-and-cobble rigid foam for rim joist sealing, and energy impact of uninsulated rim joists to win rim joist insulation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/rim-joist-insulation",
  },
};

export default function RimJoistInsulationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Rim Joist Insulation Companies in Kansas City",
    description: "Custom websites for rim joist insulation and band joist air sealing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Rim Joist Insulation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their basement floor is cold even though they have attic insulation, whether the rim joist is what their energy auditor was talking about, and whether spray foam or rigid foam is the right approach. A website that explains rim joist insulation earns the call from the homeowner whose energy audit flagged the basement perimeter as the biggest heat loss location. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Rim Joist Insulation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Rim Joist Insulation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Rim joist insulation
              customers are KC homeowners
              who received a
              home energy audit
              that identified
              the rim joist —
              the vertical band
              of wood at the
              perimeter of
              the floor framing
              where the floor
              joists meet the
              foundation wall —
              as an uninsulated
              or under-insulated
              air bypass location;
              homeowners who
              notice that the
              first floor of
              their home is
              significantly
              colder than the
              second floor
              in winter and
              whose basement
              is not conditioned —
              a temperature
              differential that
              typically traces
              to air infiltration
              through the rim
              joist cavity;
              or homeowners
              who are having
              basement waterproofing,
              basement finishing,
              or foundation
              work done and
              want to insulate
              and air seal
              the rim joist
              as part of the
              project while
              the basement
              perimeter is
              accessible. The
              central education
              is why the rim
              joist is a larger
              air infiltration
              source than most
              homeowners expect,
              the difference
              between spray
              foam and rigid
              foam for rim
              joist sealing,
              and the combined
              air sealing and
              insulation requirement
              for the rim
              joist to deliver
              the energy benefit —
              three things that
              determine whether
              a homeowner understands
              that insulating
              the rim joist
              without air sealing
              it first captures
              only a fraction
              of the available
              savings. KC rim
              joist as primary
              air bypass: the
              rim joist in
              a KC home built
              before 1990 is
              typically bare
              wood on the
              exterior face
              of the foundation
              wall — no vapor
              barrier, no insulation,
              and significant
              gaps at the joist
              pocket ends where
              the floor joist
              sits on the
              sill plate; the
              joist pocket —
              the open cavity
              at each floor
              joist end where
              the joist rests
              on the sill —
              is typically
              unblocked and
              allows cold outside
              air to flow
              directly up
              into the floor
              cavity from the
              foundation wall
              gap; the total
              perimeter of
              a typical KC
              ranch house is
              one hundred sixty
              to two hundred
              feet — with a
              rim joist height
              of nine to twelve
              inches, that
              is twelve to
              sixteen square
              feet of uninsulated
              wood facing the
              outside; energy
              modeling consistently
              identifies the
              rim joist as
              one of the top
              three air infiltration
              locations in
              older KC homes,
              alongside the
              attic access
              hatch and recessed
              ceiling fixtures.
              Spray foam versus
              rigid foam: spray
              closed-cell foam
              applied directly
              to the rim joist
              interior face
              and joist pocket
              ends creates
              an air seal and
              insulation layer
              simultaneously —
              two inches of
              closed-cell spray
              foam delivers
              R-12 and an air
              permeability
              of less than
              0.02 perms; it
              is the fastest
              installation
              approach and
              fills irregular
              gaps that rigid
              foam cannot
              seal; cut-and-cobble
              rigid foam —
              two-inch polyisocyanurate
              cut to fit each
              joist bay and
              the joist pocket
              ends, sealed
              at the perimeter
              with spray foam
              or acoustical
              sealant — delivers
              comparable R-value
              at lower material
              cost but requires
              more labor per
              linear foot;
              the critical
              requirement for
              either approach
              is that the
              air seal be
              continuous —
              a rigid foam
              panel installed
              without perimeter
              sealing allows
              air to bypass
              the insulation
              at every edge
              and captures
              minimal energy
              savings. An rim
              joist insulation
              website that
              explains KC rim
              joist as the
              primary first-floor
              air bypass, spray
              foam versus rigid
              foam selection,
              and why air sealing
              is required alongside
              insulation earns
              the homeowner
              who wants to
              understand what
              the energy auditor
              found and what
              the correct fix
              is.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before rim joist insulation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC rim joist as air bypass — joist pocket end gaps, 160-200 foot perimeter, top 3 infiltration location in older homes",
                  "Why first floor is cold — air flow from foundation gap into floor cavity, unblocked joist pocket mechanism",
                  "Spray foam approach — 2-inch closed-cell, R-12, simultaneous air seal and insulation, irregular gap filling",
                  "Cut-and-cobble rigid foam — polyisocyanurate R-value, perimeter sealing requirement, labor vs. material tradeoff",
                  "Air seal requirement — why insulation without air sealing captures minimal savings, continuous seal standard",
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
                What your rim joist insulation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rim joist anatomy section — what it is, where it is, why joist pockets are the primary gap, KC older home prevalence",
                  "Air bypass section — how cold air enters, first floor temperature differential, energy modeling findings",
                  "Spray foam section — closed-cell installation, R-value per inch, air permeability, application process",
                  "Rigid foam section — cut-and-cobble method, sealing requirement, when it is the better choice",
                  "Project bundling section — basement waterproofing, finishing, or foundation work as the right time to do rim joist",
                  "Quote form with basement type, home age, energy audit finding, floor cold spots, current rim joist condition",
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
                &ldquo;The air seal section
                is what separates
                my jobs from
                the insulation
                installers who
                just stuff fiberglass
                batts in the
                joist bays. KC
                homeowners who
                had someone do
                the rim joist
                before — batts
                in the bays,
                no perimeter
                seal — still
                have the cold
                floor problem
                and want to
                know why. After
                the section went
                up explaining
                that insulation
                without air sealing
                captures almost
                nothing because
                air bypasses
                the batt at
                every edge,
                customers understood
                why the prior
                job didn&apos;t work
                and what the
                correct installation
                is. Energy audit
                customers are
                the best lead —
                they&apos;ve already
                been told the
                rim joist is
                the problem and
                they just need
                someone who
                explains the
                solution correctly.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Fitzgerald, rim joist insulation and air sealing, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A rim joist insulation site with KC air bypass section, spray foam
                vs. rigid foam guide, and quote form starts at $200. A full site with
                air seal requirement context, energy audit integration, and project
                bundling content is $425–$750. One rim joist job covers the cost. No
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
