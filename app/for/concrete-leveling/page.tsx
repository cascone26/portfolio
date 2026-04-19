import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Concrete Leveling Companies in Kansas City",
  description:
    "Custom websites for concrete leveling, mudjacking, polyurethane foam lifting, and sunken concrete repair companies in the Kansas City area. Show your mudjacking vs. foam comparison, cause of sinking, and permanent repair results to win concrete leveling contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/concrete-leveling",
  },
};

export default function ConcreteLevelingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Concrete Leveling Companies in Kansas City",
    description: "Custom websites for concrete leveling and mudjacking companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Concrete Leveling Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether mudjacking or foam lifting is better, whether their sunken slab will sink again after lifting, and whether lifting is cheaper than replacement. A website that explains why slabs sink earns the inspection call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Concrete Leveling in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Concrete Leveling</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Concrete leveling customers
              are homeowners with
              a sunken driveway
              apron, uneven sidewalk
              panel creating a
              trip hazard, settled
              patio slab, or garage
              floor that has dropped
              away from the wall.
              The central education
              is why concrete
              sinks and whether
              lifting holds: slabs
              sink because the
              soil beneath them
              compresses, washes
              away through erosion
              (often from a broken
              downspout or improper
              grading), or was
              never properly compacted
              during original
              construction. In
              KC, heavy clay soil
              shrinks significantly
              during droughts
              and expands when
              wet — seasonal movement
              causes gradual slab
              settlement. Mudjacking
              (slabjacking): a
              slurry of Portland
              cement, water, and
              soil is pumped through
              1.5"–2" holes drilled
              in the slab — hydraulic
              pressure lifts the
              slab. Lower material
              cost, heavier fill
              (which can cause
              slab to re-settle
              if the underlying
              soil is still unstable),
              holes are larger
              and more visible.
              Polyurethane foam
              lifting (PolyLevel,
              Terene): two-part
              expanding foam injected
              through 5/8" holes —
              expands to fill
              voids and lifts
              the slab. Lighter
              than mudjacking
              slurry (reduces
              re-settlement risk),
              smaller holes (less
              visible repair),
              waterproof (no
              future washout),
              more expensive.
              Foam is preferred
              for driveways and
              pool decks where
              water exposure is
              high. Repair vs.
              replace: concrete
              leveling costs 25–50%
              of slab replacement
              and is same-day
              driveable. If the
              slab is cracked
              through in multiple
              sections, severely
              deteriorated, or
              the underlying soil
              problem cannot be
              addressed, replacement
              may be necessary.
              A concrete leveling
              website that explains
              why slabs sink,
              mudjacking vs. foam,
              and when replacement
              is the better call
              earns the homeowner
              with a driveway
              apron that drops
              3" from the garage
              floor.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a concrete leveling company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why slabs sink — soil compression, erosion, clay shrinkage in KC droughts — root cause vs. symptoms",
                  "Mudjacking vs. foam — material weight difference, hole size, waterproofing, cost comparison",
                  "Will it sink again — what determines longevity of the lift, soil stabilization, drainage correction",
                  "Leveling vs. replacement — cost comparison, when each is the right answer, how to assess the slab",
                  "Driveway apron repair — specific challenges lifting concrete adjacent to the garage floor",
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
                What your concrete leveling website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why slabs sink section — soil and drainage causes, KC clay shrink-swell behavior, erosion patterns",
                  "Mudjacking vs. foam comparison — process, hole size, weight, waterproofing, cost, longevity difference",
                  "Process walkthrough — hole drilling, injection, lifting, grouting holes, same-day driveable",
                  "Leveling vs. replacement — candidacy criteria, what crack patterns indicate each option",
                  "Before and after photos — sunken driveways, sidewalks, and patios restored to level",
                  "Quote form with slab type, settlement amount, crack description, drainage issue, square footage",
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
                &ldquo;The biggest conversion
                problem I had was customers
                who were ready to
                replace the whole
                driveway apron for
                $4,000 because they
                did not know lifting
                was a thing. The other
                problem was customers
                who had mudjacking
                done before and had
                it sink again — they
                were skeptical that
                anything would hold.
                The website section
                on why slabs sink
                and what determines
                longevity, plus the
                mudjacking vs. foam
                comparison, handled
                both. I close more
                jobs now and I close
                them without a lengthy
                education call first.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Barnes, concrete leveling specialist, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A concrete leveling site with why
                slabs sink, mudjacking vs. foam
                comparison, and quote form starts
                at $200. A full site with process
                walkthrough, before-and-after gallery,
                and leveling vs. replacement guide
                is $425–$750. One driveway apron
                lift covers the cost. No contracts,
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
