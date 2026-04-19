import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Foundation Crack Repair Companies in Kansas City",
  description:
    "Custom websites for foundation crack repair, epoxy injection, and foundation waterproofing companies in the Kansas City area. Show your crack type diagnosis, epoxy vs. polyurethane options, and structural vs. non-structural distinction to win foundation repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/foundation-crack-repair",
  },
};

export default function FoundationCrackRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Foundation Crack Repair Companies in Kansas City",
    description: "Custom websites for foundation crack repair and waterproofing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Foundation Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a foundation crack is structural or cosmetic, why cracks appear in a certain pattern, and whether epoxy injection lasts or just seals the leak temporarily. A website that explains crack types and repair methods earns the inspection call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Foundation Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Foundation Crack Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Foundation crack repair
              customers are homeowners
              who discovered a
              crack during a
              home inspection
              or basement finishing
              project, noticed
              water seeping through
              a crack after
              rain, or observed
              a crack that appears
              to be growing
              over months. The
              central education
              is the difference
              between crack types
              and what each indicates:
              poured concrete
              foundations develop
              three primary crack
              types — shrinkage
              cracks, settlement
              cracks, and structural
              cracks — and the
              repair method and
              urgency differ
              significantly between
              them. Shrinkage
              cracks: vertical
              or slightly diagonal
              hairline cracks
              (under 1/8" wide)
              that typically
              appear within
              the first 5 years
              of the home as
              concrete cures
              and loses moisture —
              these are cosmetic
              and do not affect
              structural integrity
              but do allow water
              infiltration if
              not sealed. Settlement
              cracks: diagonal
              cracks at corners
              of windows and
              doors in poured
              walls, or diagonal
              cracks at the
              corner of the
              foundation wall —
              indicate differential
              settlement (one
              part of the foundation
              has dropped relative
              to another). Horizontal
              cracks in block
              or poured walls
              at mid-wall height:
              indicate lateral
              soil pressure exceeding
              the wall's bending
              capacity — this
              is a structural
              crack requiring
              immediate assessment
              (carbon fiber straps
              or wall anchors
              to stabilize lateral
              movement). Epoxy
              injection (SikaFlex,
              Sika Crack Fix):
              rigid epoxy fills
              the crack under
              pressure and bonds
              to concrete — restores
              structural integrity
              in tension but
              is inflexible,
              so any continued
              movement re-cracks
              the repair. Polyurethane
              injection (Sika
              MultiSeal): flexible
              foam expands in
              the crack and
              cures waterproof —
              stops water infiltration
              but does not restore
              structural strength.
              For cracks where
              movement has stopped
              and the goal is
              waterproofing,
              polyurethane is
              appropriate; for
              cracks in tension
              zones where structural
              strength is needed,
              epoxy is specified.
              KC clay soil undergoes
              significant shrink-swell
              cycles (wet winter
              and spring expand
              the clay; dry summer
              contracts it) —
              this seasonal movement
              is a primary cause
              of crack propagation
              in KC foundations.
              A foundation crack
              website that explains
              the three crack
              types, horizontal
              as a structural
              warning, and epoxy
              vs. polyurethane
              for the right
              goal earns the
              homeowner who
              just found a crack
              during a basement
              remodel and does
              not know whether
              to panic.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before repairing a foundation crack
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Crack type diagnosis — vertical/hairline vs. diagonal corner vs. horizontal mid-wall, what each means",
                  "Structural vs. cosmetic — what indicates structural concern vs. normal shrinkage, when to call immediately",
                  "Horizontal cracks — why mid-wall horizontal cracks in block or poured walls require immediate attention",
                  "Epoxy vs. polyurethane — what each repairs, when each is specified, why choosing wrong one fails",
                  "KC clay soil movement — seasonal shrink-swell cycles, how they cause crack propagation over time",
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
                What your foundation crack repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Crack type guide — shrinkage, settlement, structural — with visual description of each pattern",
                  "Horizontal crack section — lateral soil pressure cause, why it is always a structural concern, stabilization options",
                  "Epoxy vs. polyurethane — structural restoration vs. waterproofing, when each is the correct specification",
                  "KC clay soil context — shrink-swell cycle explanation, how seasonal movement drives crack propagation",
                  "Active vs. dormant cracks — how to identify whether movement is ongoing, why it changes the repair approach",
                  "Assessment form with crack location, orientation, width, water seepage, known age of crack",
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
                &ldquo;Foundation cracks scare
                homeowners — they either
                panic and think the house
                is falling down, or ignore
                a horizontal crack that
                actually needs attention.
                The crack type guide on
                the website put homeowners
                in the right category
                before they called me.
                Customers with vertical
                hairline cracks stopped
                calling in crisis mode,
                and customers with horizontal
                mid-wall cracks called
                immediately instead of
                waiting six months. The
                epoxy vs. polyurethane
                section also ended the
                call where someone had
                a previous company inject
                epoxy into a wet crack
                that failed in one season.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Thornton, foundation repair, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A foundation crack site with crack
                type guide, epoxy vs. polyurethane
                section, and assessment form starts
                at $200. A full site with horizontal
                crack urgency section, KC clay soil
                context, and active vs. dormant guide
                is $425–$750. One epoxy injection
                job covers the cost. No contracts,
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
