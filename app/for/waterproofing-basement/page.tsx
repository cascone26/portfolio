import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Basement Waterproofing Companies in Kansas City",
  description:
    "Custom websites for basement waterproofing, interior drainage systems, and exterior waterproofing companies in the Kansas City area. Show your interior vs. exterior options, sump pump systems, and hydrostatic pressure solutions to win waterproofing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/waterproofing-basement",
  },
};

export default function WaterproofingBasementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Basement Waterproofing Companies in Kansas City",
    description: "Custom websites for basement waterproofing and drainage companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Waterproofing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their wet basement requires interior drainage or exterior excavation, what a sump pump system actually solves, and why waterproofing paint fails. A website that explains hydrostatic pressure and the interior vs. exterior decision earns the assessment call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Waterproofing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Basement Waterproofing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Basement waterproofing
              customers are homeowners
              with water appearing
              at the base of
              the foundation wall,
              seeping through
              wall cracks, or
              pooling on the
              floor after heavy
              rain or spring
              snowmelt — and
              many have already
              spent money on
              waterproofing paint
              or crack injections
              that did not solve
              the problem. The
              central education
              is the source of
              the water and why
              the solution differs:
              water enters basements
              through three paths —
              hydrostatic pressure
              (water-saturated
              soil pressing against
              the foundation wall),
              surface water (grading
              and drainage directing
              water toward the
              house), or window
              well overflow. KC
              clay soil is particularly
              problematic because
              it does not drain
              quickly — after
              a heavy rain, the
              clay immediately
              adjacent to the
              foundation remains
              saturated for days,
              maintaining lateral
              pressure against
              the wall. Waterproofing
              paint (DryLok,
              Drylok Extreme)
              fails because it
              addresses the symptom
              not the cause —
              paint cannot withstand
              sustained hydrostatic
              pressure and eventually
              peels or blows
              through. Interior
              drainage systems
              (WaterGuard, BasementGutter):
              a perforated channel
              is installed at
              the perimeter of
              the basement floor
              at the footing,
              collecting water
              that enters through
              the wall-floor
              joint or wall seepage
              and directing it
              to a sump pit.
              A sump pump (1/2
              HP submersible,
              cast iron preferred
              over thermoplastic
              for longevity) with
              a battery backup
              removes water when
              the primary pump
              fails or power
              is lost during
              storms. Interior
              drainage does not
              stop water from
              entering — it
              manages water that
              has entered. Exterior
              waterproofing: excavation
              to the footing,
              parging any cracks
              in the block or
              concrete, applying
              a waterproofing
              membrane (Polyguard
              Delta-MS dimple
              mat or spray-applied
              polymer membrane),
              and installing
              drainage board
              plus perforated
              pipe at the footing
              to intercept water
              before it reaches
              the wall. Exterior
              is the permanent
              solution but costs
              2–4x more than
              interior drainage.
              A basement waterproofing
              website that explains
              why paint fails,
              what interior drainage
              actually does vs.
              exterior waterproofing,
              and what KC clay
              soil contributes
              earns the homeowner
              who has already
              tried the hardware
              store solution.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before waterproofing a basement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why waterproofing paint fails — hydrostatic pressure explanation, why paint cannot withstand sustained water pressure",
                  "Interior vs. exterior — what each system actually does, when interior drainage is the right choice vs. excavation",
                  "Sump pump systems — primary pump sizing, battery backup necessity, what happens during power outage",
                  "Where water enters — wall-floor joint, wall cracks, window wells — what each entry path indicates",
                  "KC clay soil — why clay holds water longer after rain, how it maintains pressure against the foundation",
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
                What your waterproofing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why paint fails section — hydrostatic pressure mechanism, what DryLok and similar products cannot stop",
                  "Water entry paths — wall-floor joint, cracks, window wells — what each tells us about the source",
                  "Interior drainage guide — how the channel and sump system works, what it manages vs. what it solves",
                  "Exterior waterproofing section — excavation process, membrane types, drainage board, when it is worth the cost",
                  "Sump pump section — 1/2 HP sizing for typical KC basements, battery backup necessity, maintenance interval",
                  "Assessment form with water location, when it appears (during rain vs. after), paint attempts, crack locations",
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
                &ldquo;My hardest calls were
                from homeowners who had
                already spent $500 on
                DryLok and called me
                angry when it peeled
                in six months. The website
                explaining why paint
                physically cannot stop
                hydrostatic pressure
                changed that — customers
                called already knowing
                the paint was not a solution
                and were ready to hear
                about real drainage. I
                also stopped losing jobs
                to the cheapest quote
                because the interior
                vs. exterior section
                explained what each system
                actually does, and customers
                arrived with realistic
                expectations instead
                of assuming the $800
                guy could do what the
                $4,000 job required.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Griffith, basement waterproofing, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A waterproofing site with why-paint-fails
                section, interior drainage guide, and
                assessment form starts at $200. A full
                site with exterior waterproofing section,
                sump pump guide, and KC clay soil context
                is $425–$750. One interior drainage
                install covers the cost. No contracts,
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
