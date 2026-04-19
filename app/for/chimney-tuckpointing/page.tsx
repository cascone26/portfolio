import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Chimney Tuckpointing Companies in Kansas City",
  description:
    "Custom websites for chimney tuckpointing, mortar repointing, and masonry repair companies in the Kansas City area. Show your mortar joint deterioration stages, spalling brick causes, and chimney cap function to win tuckpointing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/chimney-tuckpointing",
  },
};

export default function ChimneyTuckpointingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Chimney Tuckpointing Companies in Kansas City",
    description: "Custom websites for chimney tuckpointing and masonry repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Chimney Tuckpointing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why mortar deteriorates faster than brick, when deteriorating mortar joints need tuckpointing vs. when the chimney needs rebuilding, and how long tuckpointing lasts in KC winters. A website that explains the mortar sacrifice principle and freeze-thaw damage earns the inspection call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tuckpointing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Chimney Tuckpointing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Chimney tuckpointing
              customers are homeowners
              who noticed crumbling
              or missing mortar
              joints during a
              home inspection,
              observed white
              staining (efflorescence)
              on brick, found
              mortar dust or
              small pieces of
              brick in the
              fireplace or on
              the roof, or
              had a chimney
              inspector recommend
              tuckpointing before
              the next season.
              The central education
              is why mortar
              fails before brick
              and what happens
              when it is left
              untreated: mortar
              is intentionally
              softer than the
              brick it bonds —
              the mortar is
              designed to be
              the sacrificial
              element that absorbs
              movement and
              moisture cycling,
              failing first
              to protect the
              more expensive
              brick. Standard
              Portland cement
              mortar (Type S
              or N) has a
              lifespan of 25–30
              years; the brick
              itself typically
              lasts 100+ years.
              When mortar is
              recessed more
              than 1/4" from
              the brick face,
              water pools in
              the joint and
              accelerates freeze-thaw
              damage — each
              KC winter forces
              water in the
              joint to expand
              9% as it freezes,
              widening the
              joint further.
              Tuckpointing: cut
              out the deteriorated
              mortar to a minimum
              3/4" depth with
              an angle grinder
              or oscillating
              tool, blow out
              the joint with
              compressed air,
              dampen the brick,
              and pack new
              mortar in two
              layers (scratch
              coat + finish
              coat) matching
              the original mortar
              composition —
              using a harder
              Portland cement
              mix than the
              original mortar
              causes stress
              concentration
              at the brick
              face and can
              spall the brick
              face. Spalling
              brick (surface
              of the brick
              face flaking off):
              indicates water
              has penetrated
              the brick and
              freeze-thaw has
              delaminated the
              face — spalled
              brick cannot
              be repaired, only
              replaced. When
              more than 20%
              of the chimney
              brick is spalled
              or cracked through,
              rebuilding above
              the roofline is
              more cost-effective
              than tuckpointing
              individual sections.
              Chimney cap: a
              concrete or metal
              cap over the
              flue protects
              the crown and
              prevents direct
              water entry —
              a missing or
              cracked cap accelerates
              interior mortar
              deterioration
              significantly.
              Efflorescence
              (white crystalline
              deposits): soluble
              salts carried
              by water migrating
              through the masonry —
              indicates active
              water infiltration
              path but the
              salts themselves
              are not structurally
              damaging. A chimney
              tuckpointing website
              that explains
              why mortar is
              designed to fail
              first, what recessed
              joints allow,
              and when spalling
              brick changes
              the repair scope
              earns the homeowner
              who has seen
              the mortar crumbling
              and does not
              know whether
              to call a chimney
              company or a
              mason.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before tuckpointing a chimney
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why mortar fails first — the sacrificial mortar principle, mortar lifespan vs. brick lifespan",
                  "Tuckpointing vs. rebuilding — when recessed joints are repairable vs. when spalling requires replacement",
                  "Mortar hardness — why using harder mortar than original causes brick spalling",
                  "KC freeze-thaw damage — how water in joints expands, accelerated deterioration timeline",
                  "Chimney cap — how a missing or cracked cap accelerates interior mortar failure",
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
                What your tuckpointing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Mortar sacrifice section — why mortar is softer than brick by design, what mortar failure is protecting",
                  "Joint depth guide — 1/4\" recession threshold, what pooled water does in joints over KC winters",
                  "Tuckpointing process — cut depth, compressed air prep, two-coat application, mortar match importance",
                  "Spalling brick section — what causes face delamination, when spalling changes the repair scope",
                  "Chimney cap guide — crown protection, water entry prevention, cap material comparison",
                  "Inspection form with chimney age, joint recession estimate, spalling observed, cap condition",
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
                &ldquo;Homeowners would call
                and say the previous mason
                had used a hard Portland
                mix and spalled the brick
                face trying to fix the
                mortar joints — then ask
                me why. The website section
                explaining mortar hardness
                and the sacrificial design
                ended that conversation
                before the call. Customers
                arrived already understanding
                why mortar match matters
                and they stopped shopping
                on price alone. The cap
                section also led to chimney
                cap replacements being
                added to nearly every job —
                customers who read about
                the water entry path asked
                for it without me having
                to bring it up.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Kowalski, masonry and tuckpointing, Kansas City, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tuckpointing site with mortar sacrifice
                section, joint depth guide, and inspection
                form starts at $200. A full site with
                spalling brick section, mortar hardness
                guide, and chimney cap content is $425–$750.
                One chimney tuckpointing job covers the
                cost. No contracts, no monthly fees.
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
