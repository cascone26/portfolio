import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Soffit and Fascia Replacement Companies in Kansas City",
  description:
    "Custom websites for soffit and fascia replacement, fascia board repair, and eave restoration companies in the Kansas City area. Show your KC fascia rot from missing drip edge and gutter overflow, aluminum wrap vs. wood fascia replacement, and squirrel and bird entry through damaged soffit to win soffit and fascia replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/soffit-fascia-replacement",
  },
};

export default function SoffitFasciaReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Soffit and Fascia Replacement Companies in Kansas City",
    description: "Custom websites for soffit and fascia replacement and eave restoration companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Soffit and Fascia Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the soft fascia board behind their gutter needs to come out or can be wrapped in aluminum, whether the wood behind the existing aluminum soffit is also rotted, and what is getting into the attic through the damaged area. A website that explains soffit and fascia replacement earns the call from the homeowner who found squirrel damage at the eave. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Soffit and Fascia Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Soffit and Fascia Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Soffit and fascia
              replacement customers
              are KC homeowners
              who see soft, discolored,
              or physically damaged
              wood at the eave —
              the fascia board
              behind the gutter
              that has been repeatedly
              wetted from gutter
              overflow, missing
              drip edge, or missing
              gutter apron and
              has rotted to the
              point where it is
              soft to the touch,
              is pulling away
              from the rafter
              tail ends, or has
              been physically
              damaged by squirrels
              or woodpeckers exploiting
              the soft wood as
              an entry point into
              the attic; homeowners
              who see the vinyl
              or aluminum soffit
              panels sagging, cracked,
              or missing sections —
              leaving the attic
              exposed to the exterior —
              and want the soffit
              system restored
              to prevent pest
              entry and protect
              attic ventilation
              intake; or homeowners
              who are replacing
              gutters and were
              told by the gutter
              contractor that
              the fascia is too
              soft to hold the
              gutter hanger screws.
              The central education
              is fascia rot cause
              and the water source
              that must be corrected,
              aluminum wrap versus
              wood fascia board
              replacement, and
              soffit damage as
              an attic pest entry
              point — three things
              that determine whether
              a homeowner understands
              that fascia replacement
              without correcting
              the water source
              will rot again and
              that soffit repair
              has a wildlife exclusion
              urgency. Fascia
              rot cause: the most
              common KC fascia
              rot mechanisms are
              gutter overflow
              from clogged gutters
              saturating the fascia
              top, missing drip
              edge allowing capillary
              water contact at
              the shingle-to-fascia
              interface, and missing
              gutter apron allowing
              water to run behind
              the gutter and contact
              the fascia rear;
              replacing the fascia
              board without correcting
              the water source
              starts the rot cycle
              on the new board
              immediately; the
              correct sequence
              is source correction
              first — clean gutters,
              add drip edge and
              apron if missing —
              then fascia replacement;
              a homeowner who has
              had fascia replaced
              twice in seven years
              has a source problem,
              not a wood problem.
              Aluminum wrap versus
              board replacement:
              aluminum coil-wrapped
              fascia consists of
              formed aluminum
              stock bent to the
              fascia profile and
              nailed over the
              existing wood board;
              it is appropriate
              when the existing
              wood board is structurally
              sound and the damage
              is cosmetic or surface;
              when the existing
              board is soft — wood
              moisture above nineteen
              percent and fungal
              decay active — aluminum
              wrapping over it
              seals moisture in
              and accelerates
              the decay beneath;
              a soft board must
              be replaced with
              new substrate before
              wrapping or with
              PVC trim board that
              does not rot. Soffit
              pest entry: KC squirrels —
              eastern gray squirrel
              year-round and fox
              squirrel — gnaw
              soft wood actively;
              a fascia or soffit
              with decay-softened
              wood is exploited
              within one to two
              nesting seasons
              once softness is
              accessible; the
              attic entry point
              is used for nesting,
              and the insulation
              disturbed by nesting
              activity creates
              paths for air leakage
              from the living
              space into the attic;
              soffit repair that
              restores a solid
              substrate and seals
              the entry point
              eliminates the access —
              damaged soffit left
              open through a Kansas
              City spring nesting
              season typically
              results in active
              occupancy. A soffit
              and fascia replacement
              website that explains
              the water source
              causing the rot,
              the aluminum wrap
              versus board replacement
              decision, and the
              pest entry urgency
              from open soffit
              damage earns the
              homeowner who wants
              to solve the eave
              problem fully and
              not just cosmetically.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before soffit and fascia replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fascia rot cause — gutter overflow, missing drip edge, missing gutter apron — why source must be fixed before replacement",
                  "Aluminum wrap vs. board replacement — when wrapping is appropriate vs. when soft board requires full substrate replacement",
                  "PVC vs. wood fascia — moisture resistance, paint adhesion, service life in KC wet-dry climate",
                  "Soffit pest entry — KC squirrel activity at soft wood, attic entry timeline, nesting season urgency",
                  "Soffit ventilation — perforated soffit for attic intake air, NFA per linear foot, why replacing solid soffit requires maintaining NFA",
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
                What your soffit and fascia replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Water source section — three KC fascia rot mechanisms, why source correction is required before replacement",
                  "Material section — aluminum wrap conditions, PVC board replacement for soft substrate, wood board with painting",
                  "Assessment section — probe test for soft wood, wet-dry damage assessment, what must be replaced vs. can be wrapped",
                  "Pest section — KC squirrel entry behavior, soft wood exploitation timeline, nesting season open soffit risk",
                  "Ventilation section — perforated vs. solid soffit, NFA maintenance during replacement, vented J-channel options",
                  "Quote form with soffit and fascia material, rot location, gutter condition, drip edge present, pest activity, urgency",
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
                &ldquo;The water source section
                is what prevents
                the repeat job call.
                KC homeowners who
                had fascia replaced
                by a gutter crew
                and watched it rot
                again in four years
                would call angry.
                After the section
                went up explaining
                that aluminum wrapping
                over a soft board
                traps moisture and
                accelerates the
                decay underneath,
                and that fascia
                rot without source
                correction restarts
                immediately, customers
                started asking me
                to assess the drip
                edge and gutter
                apron as part of
                the fascia estimate.
                The squirrel entry
                section also generates
                urgent calls in
                February and March —
                KC homeowners who
                see a squirrel go
                into the soffit
                on a Monday call
                me on Tuesday. They
                don&apos;t wait on that
                one.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Stanton, siding, soffit, and fascia replacement, Lee's Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A soffit and fascia replacement site with water source section,
                material comparison, and quote form starts at $200. A full site
                with pest entry urgency, ventilation guide, and assessment section
                is $425–$750. One fascia replacement job covers the cost. No
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
