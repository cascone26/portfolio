import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Concrete Step Repair Companies in Kansas City",
  description:
    "Custom websites for concrete step repair, spalled concrete porch steps, and concrete step resurfacing companies in the Kansas City area. Show your KC freeze-thaw spalling mechanism, bonding agent requirement for concrete repair, and step edge rebuild method to win concrete step repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/concrete-step-repair",
  },
};

export default function ConcreteStepRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Concrete Step Repair Companies in Kansas City",
    description: "Custom websites for concrete step repair and spalled concrete porch steps companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Concrete Step Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why they can't just use regular concrete mix to repair a broken step nose, why the patch they applied last spring popped off by December, and whether a spalled step face means the whole step needs to be replaced. A website that explains concrete step repair earns the porch step call before they buy a bag of Quikrete and make it worse. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Concrete Step Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Concrete Step Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Concrete step repair
              customers are KC homeowners
              with front porch or
              back entry steps that
              have spalled surfaces
              — the top layer of
              concrete has flaked
              off in pieces revealing
              the aggregate below —
              or broken step noses
              where the front edge
              of a tread has fractured
              and fallen away, creating
              a trip hazard and an
              exposed rough edge
              that continues to deteriorate
              each winter; homeowners
              who applied ready-mix
              concrete to a broken
              step nose and watched
              the repair crack and
              pop off within one
              KC winter because concrete
              does not bond to concrete
              without a bonding agent
              and because a thin
              repair layer has insufficient
              mass to resist freeze-thaw
              stress; or homeowners
              who want to know whether
              surface spalling requires
              full step demolition
              and replacement or
              whether a resurfacing
              repair can restore
              the appearance and
              function. The central
              education is KC freeze-thaw
              spalling mechanism,
              why concrete-to-concrete
              bond fails without
              preparation, and the
              step nose rebuild method —
              three things that determine
              whether a concrete step
              repair lasts through
              KC winters or fails
              by March. KC freeze-thaw
              spalling: KC averages
              approximately fifty-two
              freeze-thaw cycles per
              winter — days when
              the temperature crosses
              the thirty-two-degree
              threshold from above
              to below and back; water
              penetrates the surface
              pores of concrete through
              rain, snowmelt, and
              morning condensation;
              when the water in the
              pores freezes, it expands
              by approximately nine
              percent; this expansion
              stress fractures the
              concrete at the surface
              layer; deicing salt
              (rock salt) accelerates
              spalling significantly —
              salt lowers the freezing
              point of water but
              creates a more aggressive
              freeze-thaw cycle at
              slightly lower temperatures
              and draws additional
              moisture into the concrete
              by osmosis; KC porch
              steps that receive
              rock salt applications
              each winter show surface
              spalling within five
              to seven years of the
              original pour; sealing
              the concrete surface
              after repair blocks
              water penetration and
              significantly extends
              the repair lifespan
              in KC conditions. Bonding
              agent requirement: new
              concrete does not bond
              to old concrete without
              mechanical preparation
              and a bonding agent —
              a repair mix troweled
              over a broken step
              without preparation
              creates a cold joint
              that separates when
              the two materials expand
              and contract at different
              rates through KC temperature
              cycling; concrete bonding
              adhesive (Quikrete
              Concrete Bonding Adhesive
              or equivalent) is applied
              to the prepared substrate
              and allowed to become
              tacky before the repair
              mix is applied — the
              bonding agent chemically
              bridges the old and
              new concrete surfaces;
              polymer-modified repair
              mortars (QUIKRETE Concrete
              Resurfacer, SAKRETE
              Top n Bond) include
              polymer additives that
              improve adhesion and
              flexibility compared
              to standard concrete
              mix — these are the
              correct product for
              thin step repairs;
              standard bag concrete
              mixed thin and troweled
              over a broken step
              has no polymer content
              and no bonding agent
              and fails reliably
              within one KC winter.
              Step nose rebuild: rebuilding
              a broken step nose
              requires chipping back
              the broken area to
              a sound concrete edge —
              not a feather edge
              but a square or slightly
              undercut profile that
              gives the repair mass
              and mechanical lock;
              the substrate is dampened,
              bonding agent is applied,
              and a form board is
              clamped to the step
              face to contain the
              repair mix at the correct
              nose profile; polymer-modified
              repair mortar is packed
              into the form and tooled
              to match the step tread
              profile; after cure,
              a penetrating concrete
              sealer is applied to
              protect the repair
              and the surrounding
              step surface from further
              freeze-thaw damage.
              A concrete step repair
              website that explains
              KC freeze-thaw spalling
              and deicing salt damage,
              the bonding agent requirement,
              and the step nose rebuild
              method earns the homeowner
              who wants a repair
              that lasts rather than
              a patch that pops off
              by December.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before concrete step repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC freeze-thaw spalling — 52 annual cycles, water pore penetration, 9% ice expansion, salt acceleration",
                  "Why repairs fail — no bonding agent, cold joint formation, thin layer freeze-thaw stress failure by March",
                  "Bonding agent — concrete bonding adhesive application, tacky stage timing, polymer-modified mortar vs. standard mix",
                  "Step nose rebuild — chipping to sound edge, form board method, repair mix packing, profile match",
                  "Resurfacing vs. replacement — when spalling depth allows resurfacing, when full step demo is needed",
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
                What your concrete step repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC spalling section — freeze-thaw cycle count, water penetration mechanism, salt damage acceleration",
                  "Bonding agent section — why concrete doesn't bond to concrete, cold joint failure mode, correct product selection",
                  "Step nose rebuild guide — substrate prep, bonding agent timing, form board method, polymer mortar selection",
                  "Resurfacing section — when surface spalling can be resurfaced, depth limit, sealer requirement after repair",
                  "Salt damage section — deicing salt mechanism, KC step damage pattern, alternatives for winter traction",
                  "Quote form with step count, damage type (spalling/nose/crack), existing DIY attempts, step age, timeline",
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
                &ldquo;The bonding agent section
                alone stopped the failed
                DIY callbacks. KC homeowners
                would buy a bag of
                Quikrete, mix it thick,
                trowel it over the
                broken nose, and call
                me in April when it
                had popped off in one
                piece. After the section
                went up explaining
                that concrete doesn&apos;t
                bond to concrete without
                a chemical bridge and
                that a thin repair
                layer can&apos;t survive
                fifty-plus freeze-thaw
                cycles, customers stopped
                attempting it themselves.
                The salt damage section
                also brought in a lot
                of calls I wasn&apos;t getting
                before — homeowners
                who used rock salt
                every winter and couldn&apos;t
                figure out why their
                ten-year-old steps
                looked thirty years
                old. Explaining that
                salt accelerates freeze-thaw
                spalling and that sand
                or calcium chloride
                is a better KC alternative
                started conversations
                about sealing and resurfacing
                before the steps reached
                full replacement territory.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Nakamura, concrete repair and step resurfacing, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A concrete step repair site with KC spalling section, bonding
                agent guide, and quote form starts at $200. A full site with
                step nose rebuild method, salt damage context, and resurfacing
                vs. replacement guide is $425–$750. One porch step repair job
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
