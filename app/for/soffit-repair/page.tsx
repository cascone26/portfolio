import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Soffit Repair Companies in Kansas City",
  description:
    "Custom websites for soffit repair, soffit replacement, and fascia and soffit repair companies in the Kansas City area. Show your KC wind-driven rain soffit damage, pest and bird entry through damaged soffit, and vinyl vs. aluminum replacement decision to win soffit repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/soffit-repair",
  },
};

export default function SoffitRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Soffit Repair Companies in Kansas City",
    description: "Custom websites for soffit repair and fascia and soffit replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Soffit Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether sagging or stained soffit is a cosmetic issue or a sign of water damage to the roof framing above it, whether animals living in the soffit void require pest control before soffit repair, and whether vinyl or aluminum soffit holds up better in KC weather. A website that explains soffit repair earns the eave service call before starlings finish their nest. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Soffit Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Soffit Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Soffit repair customers
              are KC homeowners who
              see a section of soffit —
              the horizontal panel
              that covers the underside
              of the roof overhang
              between the fascia
              board and the exterior
              wall — that is sagging,
              has pulled away from
              the fascia or J-channel,
              shows water staining
              or soft spots that
              indicate moisture
              intrusion from the
              roof deck above;
              homeowners who hear
              scratching, chirping,
              or movement in the
              soffit void or attic
              space and find a
              gap or hole in the
              soffit panel where
              birds, squirrels,
              or bats have entered;
              or homeowners whose
              painted wood soffit
              is showing peeling,
              rot at the panel
              edges, or fiber separation
              from years of KC
              weather exposure
              and want to replace
              it with low-maintenance
              material before
              the deterioration
              reaches the rafter
              tails behind it.
              The central education
              is KC wind-driven
              rain and soffit
              water damage, pest
              and bird entry through
              damaged soffit panels,
              and vinyl versus
              aluminum soffit
              replacement — three
              things that determine
              whether a soffit
              repair is a surface
              fix or requires
              inspection of the
              roof framing above
              it. KC wind-driven
              rain and soffit
              damage: KC spring
              storm systems arrive
              from the south and
              southwest — the
              prevailing storm
              wind direction drives
              rain horizontally
              into the overhang
              space; soffit panels
              on the south and
              southwest exposures
              of a KC home receive
              the most direct
              rain impact; a soffit
              panel that has pulled
              away from the J-channel
              at one edge or that
              has lost the fastener
              holding it at the
              rafter tail allows
              wind-driven rain
              to enter the overhang
              cavity and contact
              the roof sheathing
              at the eave edge —
              the lowest point
              of the roof where
              ice dams form in
              KC winters and where
              water from both
              wind-driven rain
              and ice dam melt
              accumulates; the
              rafter tail behind
              a compromised soffit
              panel on the south
              exposure of a KC
              home commonly shows
              rot within two to
              three years of soffit
              failure. Pest and
              bird entry: a gap
              in the soffit panel
              of one inch or more
              is sufficient entry
              for house sparrows,
              European starlings,
              and squirrels —
              all of which actively
              seek attic and soffit
              void spaces for
              nesting; KC starlings
              begin nesting in
              late February to
              early March — a
              soffit gap that
              exists entering
              February will have
              nesting material
              inside within three
              to four weeks;
              a squirrel entry
              point in the soffit
              void allows the
              squirrel access
              to the attic floor
              insulation and
              wiring — squirrel
              nesting in attic
              insulation and
              gnawing on wiring
              are fire hazards
              that compound the
              soffit repair scope;
              pest control must
              address the active
              infestation before
              soffit panels are
              closed. Vinyl versus
              aluminum soffit:
              vinyl soffit panel
              is the standard
              residential replacement
              material — it is
              less expensive,
              lighter, and available
              in the perforated
              ventilation pattern
              required by most
              residential eave
              designs; vinyl
              expands and contracts
              significantly in
              KC&apos;s one-hundred-degree
              annual temperature
              swing — improperly
              installed vinyl
              soffit buckles or
              gaps at panel joints
              in extreme cold
              and heat; aluminum
              soffit panel has
              lower thermal expansion
              and does not support
              mold growth in humid
              eave conditions —
              it is the correct
              material at south
              and west exposures
              in KC where thermal
              cycling stress is
              highest. A soffit
              repair website that
              explains KC wind-driven
              rain and rafter
              tail rot from soffit
              failure, pest and
              bird nesting entry
              through soffit gaps,
              and the vinyl versus
              aluminum replacement
              decision for KC
              exposure conditions
              earns the homeowner
              who noticed a sagging
              panel and wants
              to know what is
              behind it.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before soffit repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Wind-driven rain damage — KC south/southwest storm exposure, eave entry path, rafter tail rot within 2-3 years",
                  "Pest entry — starling and sparrow nesting February-March, squirrel attic access, fire hazard from wiring damage",
                  "Pest control before repair — active infestation must be addressed before panels are closed",
                  "Vinyl vs. aluminum — KC 100-degree temperature swing, vinyl buckling/gapping, aluminum for south/west exposure",
                  "Rafter tail inspection — whether soffit removal reveals rot in framing that changes the scope",
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
                What your soffit repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Wind-driven rain section — KC storm direction, south/southwest exposure, eave cavity water path to rafter tail",
                  "Pest entry section — species that use soffit gaps, KC nesting season timing, squirrel wiring hazard",
                  "Pest control sequence — why closure before pest removal traps animals, coordination with pest control",
                  "Material section — vinyl thermal expansion limits, aluminum for high-exposure eaves, ventilation pattern options",
                  "Rafter tail section — what the inspection reveals, when framing rot changes repair scope",
                  "Quote form with soffit location/exposure, panel condition, pest activity, rafter visible, material preference, timeline",
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
                is what gets customers
                to call in January
                instead of June.
                KC homeowners in
                Brookside and Waldo
                see a loose soffit
                panel in fall and
                put it on the spring
                project list. After
                the section went
                up explaining that
                KC starlings start
                nesting in late
                February and that
                a one-inch gap is
                enough to have
                nesting material
                in the soffit by
                March, customers
                started booking
                in January. The
                rafter tail section
                also changed the
                conversation on
                scope — homeowners
                who pushed back
                on the price for
                a south-facing
                soffit section
                understood why
                I pulled one panel
                first to inspect
                the rafter tail
                before quoting
                the whole run.
                Explaining that
                wind-driven rain
                sits on the eave
                sheathing for two
                to three years
                before the rot
                is visible from
                below prepared
                them for the framing
                repair finding.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Olawale, exterior carpentry and soffit repair, Waldo, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A soffit repair site with wind-driven rain section, pest entry
                guide, and quote form starts at $200. A full site with vinyl vs.
                aluminum material comparison, rafter tail inspection content, and
                pest control sequencing is $425–$750. One soffit repair job covers
                the cost. No contracts, no monthly fees.
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
