import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Concrete Patio Resurfacing Companies in Kansas City",
  description:
    "Custom websites for concrete patio resurfacing, concrete overlay, and patio refinishing companies in the Kansas City area. Show your KC freeze-thaw spalling on unprotected concrete, microtopping vs. overlay thickness selection, and when resurfacing is viable vs. full replacement to win concrete patio resurfacing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/concrete-patio-resurfacing",
  },
};

export default function ConcretePatioResurfacingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Concrete Patio Resurfacing Companies in Kansas City",
    description: "Custom websites for concrete patio resurfacing and concrete overlay companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Concrete Patio Resurfacing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a pitted, scaling concrete patio can be resurfaced or needs to come out, what a concrete overlay actually is and whether it will hold up in Kansas City winters, and whether the finished result looks like new concrete. A website that explains concrete patio resurfacing earns the call from the homeowner who wants a result better than cracked gray concrete without the cost of removal. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Concrete Patio Resurfacing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Concrete Patio Resurfacing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Concrete patio resurfacing
              customers are KC homeowners
              whose concrete patio,
              driveway apron, or
              walkway surface is
              scaling — the top
              layer of the concrete
              paste has delaminated
              from the aggregate
              below and is coming
              off in thin flakes —
              or pitting, where
              surface voids have
              opened in the concrete
              paste layer; homeowners
              who had ice melt
              or rock salt applied
              to their concrete
              during KC ice events
              and are seeing accelerated
              surface scaling
              from the salt-accelerated
              freeze-thaw damage;
              or homeowners who
              want to update the
              appearance of a structurally
              sound concrete patio
              — adding color, texture,
              or a decorative finish —
              without the cost
              and demolition of
              removal and replacement.
              The central education
              is KC freeze-thaw
              spalling mechanism
              on unprotected concrete,
              overlay and microtopping
              thickness selection
              for KC thermal cycling,
              and when resurfacing
              is a viable long-term
              repair versus when
              structural concrete
              failure requires
              full replacement —
              three things that
              determine whether
              a homeowner understands
              what resurfacing
              can and cannot do
              for their specific
              patio. KC freeze-thaw
              spalling: concrete
              is porous — it absorbs
              water; at KC's fifty
              to fifty-five freeze-thaw
              cycles per winter,
              water absorbed in
              the near-surface
              zone freezes and
              expands, exerting
              outward pressure
              against the concrete
              paste at the surface;
              the paste layer
              — the cement and
              fine aggregate matrix
              at the top — is
              weaker than the
              aggregate beneath
              and delaminates
              first; deicing salt
              amplifies the cycle
              by lowering the
              freezing point and
              allowing more freeze-thaw
              events per winter
              and by creating
              osmotic pressure
              that drives more
              water into the surface
              pores; a concrete
              patio with no sealer
              in KC typically
              shows surface scaling
              within ten to fifteen
              years; salt-treated
              concrete may scale
              within five. Overlay
              thickness and bond:
              a concrete overlay
              — polymer-modified
              cement material
              applied to the existing
              concrete surface —
              bonds to the existing
              concrete by mechanical
              adhesion and cures
              as a new surface
              layer; minimum viable
              thickness is typically
              three-eighths to
              one-half inch for
              a walking surface
              overlay — thinner
              applications are
              microtoppings for
              decorative applications
              on sound concrete;
              the KC freeze-thaw
              requirement is that
              the overlay bond
              to the existing
              concrete must withstand
              differential thermal
              movement — an overlay
              applied over a surface
              with active delamination
              or over a slab with
              structural cracks
              will reflect the
              existing defects
              through the overlay
              within one to two
              winters; substrate
              preparation — shot
              blasting or scarifying
              the existing surface
              to open the concrete
              pores and remove
              weak paste — is
              required for overlay
              bond. Resurfacing
              versus replacement:
              resurfacing is viable
              when the existing
              slab is structurally
              sound — no heaved
              sections, no full-depth
              cracks with differential
              movement, no soft
              spots from subbase
              failure; a slab
              with surface scaling
              only, no structural
              failure, no differential
              settlement, and
              adequate thickness
              at three-and-a-half
              inches or more is
              a good resurfacing
              candidate; a slab
              that has heaved
              from KC clay freeze-thaw
              pressure, has soft
              sections from subbase
              washout, or has
              cracks where one
              section sits higher
              than the adjacent
              section will not
              be corrected by
              resurfacing — the
              overlay will crack
              at the same locations.
              A concrete patio
              resurfacing website
              that explains KC
              freeze-thaw surface
              spalling, overlay
              bond requirements
              in KC thermal cycling,
              and the structural
              sound slab prerequisite
              for successful resurfacing
              earns the homeowner
              who wants a durable
              result and not a
              resurfaced slab
              that cracks through
              the first winter.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before concrete patio resurfacing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC freeze-thaw spalling — 50-55 cycles, near-surface water expansion, deicing salt amplification, 10-15 year unprotected timeline",
                  "Overlay bond requirements — polymer-modified cement, substrate prep (shot blast/scarify), KC thermal differential adhesion",
                  "Resurfacing vs. replacement — structural sound slab criteria, heave and differential settlement as disqualifiers",
                  "Thickness selection — 3/8-1/2 inch minimum for walking surface, microtopping for decorative on sound concrete only",
                  "Sealer maintenance — what sealer does on KC concrete, penetrating vs. film-forming, annual reapplication for scale prevention",
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
                What your concrete patio resurfacing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Spalling section — freeze-thaw surface mechanism, salt damage amplification, timeline on KC unprotected concrete",
                  "Overlay section — polymer-modified cement, thickness by application, what shot blasting does for bond",
                  "Viability assessment — structural sound criteria, what disqualifies a slab from resurfacing, inspection checklist",
                  "Finish options — broom finish, exposed aggregate, stamped overlay, color options, what each looks like after one KC winter",
                  "Sealer section — post-resurfacing sealer requirement, reapplication schedule, salt use prohibition after overlay",
                  "Quote form with patio age, surface condition, crack type, salt history, appearance goal, replacement budget comparison",
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
                &ldquo;The viability section
                is what prevents
                the callbacks. KC
                homeowners who get
                the cheapest resurfacing
                quote and approve
                it without the substrate
                assessment call
                back the next spring
                with overlay cracks.
                After the section
                went up explaining
                that overlay applied
                over structurally
                cracked concrete
                reflects the cracks
                through within
                one to two winters,
                customers started
                asking for the
                substrate assessment
                before approving
                the scope. I lost
                three jobs to lower-price
                competitors who
                skipped the assessment.
                All three called
                me the following
                spring after the
                overlay failed.
                They paid more in
                the end than my
                original quote.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Okafor, concrete resurfacing and decorative concrete, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A concrete patio resurfacing site with freeze-thaw spalling section,
                overlay bond guide, and quote form starts at $200. A full site with
                viability assessment, finish options, and salt damage content is
                $425–$750. One resurfacing job covers the cost. No contracts, no
                monthly fees.
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
