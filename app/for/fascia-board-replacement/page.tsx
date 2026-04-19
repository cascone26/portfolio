import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Fascia Board Replacement Companies in Kansas City",
  description:
    "Custom websites for fascia board replacement, rotted fascia repair, and fascia and gutter board companies in the Kansas City area. Show your KC gutter overflow and fascia rot cycle, gutter removal and rehang required, and PVC vs. wood fascia replacement to win fascia board replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/fascia-board-replacement",
  },
};

export default function FasciaBoardReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Fascia Board Replacement Companies in Kansas City",
    description: "Custom websites for fascia board replacement and rotted fascia repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Fascia Board Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the rotted wood behind their gutter means the gutter has to come down before the fascia can be repaired, how long rotted fascia can go before it affects the roof deck above it, and whether PVC fascia wrap is actually more durable than replacing with new painted wood. A website that explains fascia board replacement earns the eave repair call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Fascia Board Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Fascia Board Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Fascia board replacement
              customers are KC homeowners
              who see paint peeling,
              soft or spongy wood,
              or visible rot at
              the board that runs
              horizontally at the
              roofline behind the
              gutter — the fascia
              is the vertical trim
              board that the gutter
              is mounted to and
              that covers the
              ends of the rafter
              tails at the eave;
              homeowners whose
              gutter has pulled
              away from the fascia
              or is sagging between
              hangers — a common
              sign that the fascia
              wood has softened
              from rot and no longer
              holds the gutter
              spike or hanger screw
              in solid material;
              or homeowners who
              were told by a roofer
              or gutter company
              that the fascia board
              must be replaced
              before new gutters
              can be installed
              because the existing
              fascia will not support
              gutter hangers. The
              central education
              is KC gutter overflow
              and the fascia rot
              cycle, gutter removal
              and rehang as required
              scope, and PVC wrap
              versus wood fascia
              board replacement —
              three things that
              determine whether
              a homeowner understands
              why fascia rot is
              a downstream consequence
              of gutter condition
              and why the repair
              scope includes more
              than just the board.
              KC gutter overflow
              and fascia rot: KC
              spring storms deliver
              high-intensity rainfall —
              two-inch-per-hour
              or greater events
              that overwhelm gutters
              clogged with leaf
              and seed debris from
              KC oak, maple, and
              sweet gum tree canopy;
              when a gutter overflows
              over its back edge —
              the edge against
              the fascia — water
              runs between the
              gutter back and the
              fascia face and sits
              in the joint between
              the fascia and the
              drip edge; the fascia
              is painted wood that
              absorbs the water
              held in that joint
              during every overflow
              event; over three
              to five KC springs
              of regular overflow,
              the fascia behind
              the gutter at the
              overflow point softens
              and begins to rot;
              the gutter hanger
              screws fail to hold
              in the softened wood,
              the gutter sags,
              and overflow increases —
              accelerating the
              rot. Gutter removal
              and rehang: because
              the gutter is mounted
              directly to the fascia,
              the gutter must be
              removed from the
              fascia section before
              the fascia board
              can be replaced;
              gutter removal requires
              cutting the gutter
              caulk at the end
              caps and at the
              downspout drops,
              removing the hanger
              screws, and lowering
              the gutter run without
              bending it out of
              shape; after the
              new fascia board
              is installed and
              painted or wrapped,
              the gutter must
              be rehung and resloped
              at the correct pitch
              — a quarter inch
              of drop per ten
              feet toward the
              downspout; the cost
              of fascia board replacement
              includes the gutter
              removal and rehang
              labor — a homeowner
              who receives only
              the board cost without
              the gutter scope
              will find the quote
              to be incomplete.
              PVC versus wood:
              PVC cellular trim
              board used as a
              fascia replacement
              does not absorb
              water and does not
              rot regardless of
              gutter condition —
              gutter overflow against
              a PVC fascia does
              not produce the
              rot cycle; PVC fascia
              is available in
              the same dimensions
              as painted wood
              fascia boards (one-by-six,
              one-by-eight) and
              accepts gutter hanger
              screws the same
              way; the material
              cost premium over
              painted wood is
              recovered in the
              labor cost of not
              replacing the fascia
              again in ten years.
              A fascia board replacement
              website that explains
              KC gutter overflow
              and the fascia rot
              mechanism, the gutter
              removal and rehang
              scope, and the PVC
              versus wood decision
              earns the homeowner
              whose gutter is
              pulling away from
              the house and wants
              to know why.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before fascia board replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Gutter overflow rot cycle — clogged gutter back-overflow against fascia joint, 3-5 KC springs to visible rot",
                  "Gutter hanger failure — hanger screw loses hold in softened fascia, gutter sags, overflow increases",
                  "Gutter removal scope — why gutter must come down before fascia can be replaced, rehang and reslope required",
                  "PVC vs. painted wood — no-rot benefit, gutter overflow tolerance, same dimensions as wood, hanger screw acceptance",
                  "Rafter tail condition — whether rot has extended from fascia face into rafter tail behind it",
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
                What your fascia board replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Overflow rot section — KC 2-inch/hour storms, gutter clog and back-overflow mechanism, joint water absorption",
                  "Rot progression section — gutter hanger failure pattern, sagging accelerates overflow, visual indicators",
                  "Scope section — gutter removal, new fascia installation, rehang and reslope at correct pitch, full job content",
                  "Material section — PVC vs. painted wood cost and service life, why PVC breaks the rot cycle",
                  "Rafter tail section — when fascia rot extends to structural framing and changes the job scope",
                  "Quote form with gutter sag, fascia condition, gutter style, PVC interest, rafter access, timeline",
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
                &ldquo;The gutter scope section
                stopped the surprise
                on the quote. KC homeowners
                would see rotted fascia
                and expect a carpenter
                to swap a board in
                an hour. After the
                section went up explaining
                that the gutter has
                to come down and be
                relung at the right
                pitch before the job
                is complete, customers
                arrived at the site
                visit knowing that
                the estimate included
                gutter labor. The
                overflow rot explanation
                also helped with
                the PVC sell — once
                customers understood
                that the fascia rotted
                because the gutter
                overflowed its back
                edge during KC spring
                storms, they asked
                whether PVC would
                prevent the repeat
                failure. Every customer
                who understood the
                rot cycle chose PVC.
                The wood ones were
                the customers who
                hadn&apos;t read the
                section.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Castellanos, fascia and gutter service, Gladstone, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A fascia board replacement site with gutter overflow rot section,
                removal and rehang scope guide, and quote form starts at $200. A
                full site with PVC vs. wood comparison, rafter tail inspection
                content, and KC storm overflow mechanism is $425–$750. One fascia
                replacement job covers the cost. No contracts, no monthly fees.
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
