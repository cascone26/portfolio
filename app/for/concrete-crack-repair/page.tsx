import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Concrete Crack Repair Companies in Kansas City",
  description:
    "Custom websites for concrete crack repair, driveway crack repair, and sidewalk crack repair companies in the Kansas City area. Show your KC freeze-thaw crack propagation, structural vs. cosmetic crack diagnosis, and routing and sealing vs. injection for concrete crack types to win concrete crack repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/concrete-crack-repair",
  },
};

export default function ConcreteCrackRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Concrete Crack Repair Companies in Kansas City",
    description: "Custom websites for concrete crack repair and driveway crack repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Concrete Crack Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the crack in their driveway or basement floor is something to fix now or something that will grow and cost more later, whether filling it with silicone caulk from a hardware store works, and what the difference is between a crack that needs sealing and one that needs structural repair. A website that explains concrete crack repair earns the call from the homeowner who wants a real answer before the freeze cycle makes it worse. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Concrete Crack Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Concrete Crack Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Concrete crack repair
              customers are KC homeowners
              who notice a crack
              in their driveway,
              patio, garage floor,
              or basement floor —
              a crack that was
              not there last spring
              or that appears
              to have widened
              since they first
              noticed it; homeowners
              who tried to fill
              a concrete crack
              with a hardware-store
              crack filler or
              silicone caulk and
              found that the
              repair popped out
              or debonded within
              one KC freeze cycle;
              or homeowners whose
              basement floor crack
              is accompanied by
              slight differential
              height between the
              two sides of the
              crack — a vertical
              offset that indicates
              the crack is structural
              rather than cosmetic.
              The central education
              is KC freeze-thaw
              crack propagation
              mechanism, the
              difference between
              cosmetic shrinkage
              cracks and structural
              cracks with vertical
              offset, and the
              correct repair
              method for each
              type — three things
              that determine whether
              a homeowner understands
              why the filler
              they bought failed,
              and why the diagnosis
              determines the
              repair rather than
              the crack width.
              KC freeze-thaw
              propagation: water
              that enters a concrete
              crack and freezes
              expands approximately
              nine percent by
              volume — the expansion
              generates pressure
              against the crack
              walls and forces
              them apart; in
              KC, this cycle
              repeats fifty to
              fifty-five times
              per winter; a hairline
              crack that allows
              water infiltration
              but is otherwise
              stable propagates
              measurably across
              one KC winter;
              a crack that was
              one-eighth inch
              wide in October
              is commonly one-quarter
              inch wide by March;
              hardware-store crack
              fillers are typically
              cement-based compounds
              that do not bond
              to the existing
              concrete under
              freeze-thaw movement —
              the filler cracks
              at the bond line
              within one cycle
              because the filler
              is rigid and the
              concrete moves;
              a correct repair
              uses a flexible
              polyurethane or
              epoxy material
              at a width-to-depth
              ratio that accommodates
              freeze-thaw movement
              without bond failure.
              Structural vs.
              cosmetic diagnosis:
              a cosmetic concrete
              crack has no vertical
              offset between
              the two sides —
              both sides are
              level with each
              other; the crack
              is the result of
              concrete shrinkage
              during cure or
              thermal movement
              over years; it
              does not indicate
              sub-base failure
              or soil movement
              below the slab;
              the repair objective
              is sealing against
              water infiltration
              and freeze-thaw
              propagation; a
              structural crack
              has a vertical
              offset — one side
              is higher than
              the other — indicating
              that the sub-base
              below one side
              has settled or
              washed away while
              the other side
              remains supported;
              filling the crack
              does not restore
              the sub-base support
              and the differential
              offset continues
              to grow; structural
              cracks require
              mud-jacking or
              slab lifting to
              restore support,
              followed by crack
              sealing. Repair
              methods: routing
              and sealing — enlarging
              the crack with
              a crack chaser
              blade to a consistent
              quarter-inch width
              and filling with
              a flexible polyurethane
              sealant — is appropriate
              for cosmetic cracks
              in driveways, patios,
              and garage floors;
              the routed profile
              provides a consistent
              depth-to-width ratio
              for the sealant
              bead and ensures
              bonding surface
              contact; epoxy
              injection — injecting
              a structural epoxy
              under pressure
              to fill the crack
              through the full
              slab depth — is
              appropriate for
              structural cracks
              in basement walls
              and floors where
              the crack is stable
              and sub-base support
              is confirmed; epoxy
              bonds the crack
              face-to-face and
              restores tensile
              strength across
              the repair. A concrete
              crack repair website
              that explains KC
              freeze-thaw propagation,
              the cosmetic vs.
              structural diagnosis
              method, and the
              routing-and-sealing
              versus injection
              repair options
              earns the homeowner
              who wants a durable
              fix before the
              next winter cycle.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before concrete crack repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC freeze-thaw propagation — 9% expansion in crack, 50-55 cycles, 1/8 inch to 1/4 inch in one KC winter",
                  "Hardware store filler failure — cement-based filler rigid, debonds from moving concrete in first freeze cycle",
                  "Cosmetic vs. structural — vertical offset as structural indicator, sub-base settlement vs. shrinkage crack",
                  "Routing and sealing — crack chaser blade, polyurethane sealant, flexible bond that survives freeze-thaw movement",
                  "Epoxy injection — structural repair, through-depth fill, when appropriate vs. routing and sealing",
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
                What your concrete crack repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC freeze-thaw section — expansion mechanism, 50-55 cycle count, propagation rate, hardware filler failure explanation",
                  "Diagnosis section — cosmetic vs. structural, vertical offset test, sub-base assessment",
                  "Routing and sealing section — crack chaser process, polyurethane sealant, width-to-depth ratio, appropriate crack types",
                  "Epoxy injection section — structural crack application, pressure injection, full-depth fill, stability requirement",
                  "Mud-jacking context — when structural offset requires slab lifting before crack repair",
                  "Quote form with crack location, width estimate, vertical offset present, prior repair attempted, surface type",
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
                &ldquo;The freeze-thaw section
                closes the call on
                timing. KC homeowners
                who find a crack
                in October and think
                about getting it
                fixed this winter
                change their mind
                once they read that
                a crack with water
                in it expands nine
                percent every freeze
                cycle and KC gets
                fifty of those per
                winter. They call
                in October and November
                now instead of waiting
                until March when
                the crack has doubled.
                The cosmetic versus
                structural diagnosis
                section also helps —
                homeowners who were
                quoted a full slab
                replacement by another
                contractor for a
                crack with no offset
                understand why I&apos;m
                recommending routing
                and sealing instead,
                and the ones with
                actual vertical offset
                understand why the
                crack sealing alone
                won&apos;t fix the problem.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — V. Kowalski, concrete repair and driveway restoration, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A concrete crack repair site with KC freeze-thaw section, diagnosis
                guide, and quote form starts at $200. A full site with routing and
                sealing method, epoxy injection content, and structural offset
                explanation is $425–$750. One crack repair job covers the cost. No
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
