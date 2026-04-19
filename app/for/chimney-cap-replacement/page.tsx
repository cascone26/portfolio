import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Chimney Cap Replacement Companies in Kansas City",
  description:
    "Custom websites for chimney cap replacement, chimney crown repair, and chimney waterproofing companies in the Kansas City area. Show your cap sizing, stainless vs. galvanized options, and draft considerations to win chimney cap contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/chimney-cap-replacement",
  },
};

export default function ChimneyCapReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Chimney Cap Replacement Companies in Kansas City",
    description: "Custom websites for chimney cap replacement and chimney waterproofing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Chimney Cap Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their chimney cap rusted out in 5 years, whether stainless is worth the cost difference, and what a chimney cap actually prevents beyond birds. A website that explains moisture and draft together earns the inspection call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Chimney Caps in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Chimney Cap Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Chimney cap customers
              are homeowners who
              have noticed water
              dripping into the
              fireplace after
              rain, found bird
              nests or debris
              in the firebox,
              or had a home
              inspection flag
              a missing, rusted,
              or damaged cap
              as a deficiency.
              The central education
              is what the cap
              protects and why
              material matters:
              a chimney cap
              serves four functions —
              it prevents rain
              from entering the
              flue and saturating
              the firebrick and
              damper (a wet damper
              rusts shut; water
              in the firebox
              degrades the refractory
              mortar over years);
              it blocks birds,
              squirrels, and
              raccoons from nesting
              in the flue; it
              prevents downdrafts
              that push smoke
              back into the living
              space in high-wind
              events; and it
              contains embers
              from escaping and
              landing on the
              roof or nearby
              material. Galvanized
              steel caps (the
              standard builder-grade
              option) last 5–10
              years in KC before
              the zinc coating
              breaks down in
              the acid environment
              created by combustion
              gases — rust failure
              allows water into
              the flue. 304 stainless
              steel caps are
              warranted for 10
              years by most manufacturers
              and typically last
              25+ years in residential
              applications —
              they cost 2–3x
              more than galvanized
              and pay back within
              the second replacement
              cycle. Draft covers
              (Vacu-Stack, Exhausto):
              for chimneys with
              persistent downdraft
              problems, a draft-inducing
              cap uses venturi
              effect to maintain
              positive draft
              regardless of wind
              direction. Sizing:
              chimney caps must
              overlap the flue
              by at least 2"
              on all sides and
              mount at least
              5" above the top
              of the flue to
              allow proper exhaust
              clearance. Multi-flue
              caps span multiple
              flue tiles in a
              single cap — common
              on older KC homes
              with combined fireplace
              and furnace flues.
              A chimney cap website
              that explains why
              galvanized rusts,
              what stainless costs
              long-term, and
              the draft problem
              earns the homeowner
              whose fireplace
              smells musty all
              winter.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before replacing a chimney cap
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Galvanized vs. stainless — why galvanized rusts in the combustion environment, lifespan comparison",
                  "What a cap prevents — rain, animals, downdraft, embers — why each matters for the fireplace system",
                  "Draft problems — what causes smoke backdraft, whether a draft cap fixes it vs. flue liner issues",
                  "Cap sizing — how to measure the flue, what overlap and height clearance is required",
                  "Multi-flue caps — when one cap covers multiple flues, sizing and coverage requirements",
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
                What your chimney cap website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material comparison — galvanized vs. 304 stainless — cost per year over lifespan, combustion environment impact",
                  "Four functions section — rain, animal, downdraft, ember — what each cap type addresses",
                  "Draft cap section — when a standard cap is not enough, how venturi-effect caps maintain draft",
                  "Sizing guide — flue measurement, overlap requirements, height clearance, multi-flue applications",
                  "Chimney crown relationship — what the crown does vs. what the cap does, when both need attention",
                  "Inspection form with chimney type, current cap material and age, problems observed",
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
                &ldquo;My upsell from galvanized
                to stainless was nearly
                impossible until the
                website went up. Customers
                would see the price difference
                and go back to the same
                cheap cap that rotted
                in five years. Once the
                website explained why
                the combustion environment
                destroys galvanized and
                showed them what stainless
                costs per year over its
                lifespan, most of them
                chose stainless on their
                own. The draft section
                also started generating
                calls I would never have
                gotten before — homeowners
                with backdraft problems
                who thought they had a
                flue liner issue and were
                about to spend thousands.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Simmons, chimney service, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A chimney cap site with material
                comparison, cap functions, and inspection
                form starts at $200. A full site with
                draft cap section, sizing guide, and
                crown relationship section is $425–$750.
                One stainless cap installation covers
                the cost. No contracts, no monthly fees.
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
