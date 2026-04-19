import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Exterior Trim Repair Companies in Kansas City",
  description:
    "Custom websites for exterior trim repair, wood trim rot, and fascia board replacement companies in the Kansas City area. Show your KC wood rot in fascia and rake boards, cellular PVC trim as the rot-proof replacement for KC climate, and proper back-priming before installation to win exterior trim repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/trim-repair",
  },
};

export default function TrimRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Exterior Trim Repair Companies in Kansas City",
    description: "Custom websites for exterior trim repair and fascia board replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Exterior Trim Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their fascia board is soft, whether the rot goes into the rafter tail, and whether cellular PVC trim is actually better than painted wood in KC's wet climate. A website that explains the rot mechanism earns the call before the fascia rot reaches the roof deck. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Exterior Trim Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Exterior Trim Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Exterior trim repair
              customers are KC
              homeowners who noticed
              soft, spongy, or
              visibly darkened
              wood at the fascia
              board — the horizontal
              trim board at the
              roof edge that
              the gutter is
              attached to —
              or at the rake
              board, corner
              boards, window
              casings, or band
              board between
              floors; the rot
              is the result
              of water infiltrating
              behind failed
              paint, failed
              caulk at trim
              joints, or water
              from an overflowing
              gutter that has
              been wetting the
              fascia continuously
              for multiple KC
              rain seasons;
              homeowners who
              had the fascia
              painted without
              addressing the
              rot and now see
              the same dark
              soft areas returning
              within a year;
              or homeowners
              who received
              a home sale inspection
              report identifying
              rotted fascia
              or trim as a
              deficiency requiring
              repair before
              closing. The central
              education is the
              wood rot entry
              mechanism specific
              to KC exterior
              trim —
              fascia board rot
              most commonly
              begins at the
              back face of
              the board where
              it contacts the
              rafter tail end
              grain — end grain
              is highly absorbent
              and draws moisture
              from the rafter
              tail into the
              fascia; a fascia
              installed without
              back-priming
              absorbs moisture
              from the rafter
              tail end grain
              on the back
              face that cannot
              dry because
              it is trapped
              against the framing;
              moisture at the
              gutter attachment
              is the second
              common source —
              a gutter that
              overflows because
              it is clogged
              or undersized
              continuously
              wets the fascia
              top edge and
              the gutter spike
              holes; a gutter
              slope problem
              that allows water
              to pond at a
              low point wets
              the same location
              for hours after
              every rain event;
              cellular PVC
              trim as the
              replacement material
              for KC exterior
              fascia and rake —
              cellular PVC
              (Azek, Versatex,
              Fypon) does not
              absorb water;
              the cellular
              foam structure
              has no end grain
              to draw moisture;
              it will not
              rot regardless
              of moisture contact
              at the rafter
              tail interface;
              it expands and
              contracts with
              temperature —
              approximately
              twice as much
              as wood — requiring
              expansion gaps
              at butt joints
              of one-eighth
              inch per ten
              feet to prevent
              buckling in
              KC summer;
              PVC trim is
              installed with
              stainless or
              hot-dipped galvanized
              fasteners to
              prevent rust
              staining at
              the nail holes.
              KC exterior trim
              rot scope: whether
              the rot has progressed
              from the fascia
              board into the
              rafter tail is
              the structural
              question that
              determines repair
              scope — probe
              the rafter tail
              end grain through
              the fascia removal;
              soft rafter tail
              requires sistering
              a new rafter
              alongside or
              cutting back
              to solid wood
              and installing
              a rafter tail
              extension; the
              gutter must be
              checked for slope,
              clog, and proper
              sizing before
              new fascia is
              installed — reinstalling
              fascia without
              correcting the
              water source
              produces the
              same rot in
              three to five
              years. An exterior
              trim repair website
              that explains
              the fascia rot
              mechanism at
              the rafter tail
              interface, cellular
              PVC as the KC
              climate replacement
              that ends the
              rot cycle, and
              the gutter slope
              and overflow
              check as the
              source correction
              earns the KC
              homeowner who
              found soft wood
              at the roof
              edge and wants
              to understand
              a permanent fix.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before exterior trim repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fascia rot mechanism — rafter tail end grain moisture wicking, back face absorption without back-priming",
                  "Gutter overflow connection — clogged or undersized gutter continuously wetting fascia top edge and spike holes",
                  "Cellular PVC advantages — no water absorption, no end grain, rot-proof in KC climate, expansion gap requirement",
                  "Rafter tail assessment — how to probe for structural damage after fascia removal, sistering process",
                  "Source correction — gutter slope, clog, and sizing check required before installing new fascia",
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
                What your exterior trim repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rot mechanism section — rafter tail end grain, back face absorption, why painting over rot fails",
                  "Gutter source section — overflow and slope check, spike hole wetting, how to identify the source",
                  "PVC trim section — cellular PVC properties, brand comparison, expansion gap spec, fastener type",
                  "Structural scope section — rafter tail probe process, sistering vs. extension, what triggers structural repair",
                  "Scope comparison — fascia-only vs. rake board + corner board + casing full exterior trim replacement",
                  "Quote form with location on house, gutter condition, trim type, home age, siding material",
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
                &ldquo;The gutter connection
                section is what
                separates a permanent
                fix from a temporary
                one. KC homeowners
                whose fascia keeps
                rotting back had
                someone replace
                the board without
                addressing the
                gutter that was
                overflowing over
                it for ten years.
                After the section
                went up explaining
                that the fascia
                and gutter are
                the same system
                and that a clogged
                or sloped gutter
                is the active
                moisture source,
                customers started
                asking us to
                check the gutter
                slope before
                approving the
                trim work. The
                cellular PVC
                section also
                helps — once
                KC homeowners
                understand that
                painted wood
                will repeat the
                same failure
                cycle and that
                PVC simply
                cannot rot at
                the rafter tail
                interface, the
                upgrade to PVC
                is an easy conversation.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Fitzpatrick, exterior trim repair and carpentry, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An exterior trim repair site with rot mechanism section, cellular PVC
                guide, and quote form starts at $200. A full site with gutter source
                correction, rafter tail assessment, and full trim scope content is
                $425–$750. One fascia replacement job covers the cost. No contracts, no monthly fees.
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
