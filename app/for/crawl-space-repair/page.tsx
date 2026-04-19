import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Crawl Space Repair Companies in Kansas City",
  description:
    "Custom websites for crawl space repair, encapsulation, and vapor barrier companies in the Kansas City area. Show your encapsulation vs. ventilation options, moisture control, and structural beam repair to win crawl space contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/crawl-space-repair",
  },
};

export default function CrawlSpaceRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Crawl Space Repair Companies in Kansas City",
    description: "Custom websites for crawl space repair and encapsulation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Crawl Space Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their crawl space is wet despite vents, what encapsulation actually does vs. a vapor barrier, and whether their sagging floor joists are a structural problem. A website that explains the stack effect earns the inspection call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Crawl Space in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Crawl Space Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Crawl space repair
              customers are homeowners
              with musty odors
              in the living space,
              floors that feel
              soft or springy,
              high humidity in
              the house during
              summer, or pest
              evidence in the
              crawl — and many
              have vented crawl
              spaces that are
              wet despite the
              vents. The central
              education is why
              vented crawl spaces
              fail in humid climates
              and what encapsulation
              actually does:
              the stack effect
              drives air upward
              through a house —
              air enters at
              the crawl space
              and exits at the
              attic. In a vented
              crawl, humid outdoor
              air (KC summer
              humidity regularly
              exceeds 70%) enters
              through foundation
              vents, contacts
              cooler crawl surfaces,
              and condenses —
              moisture then
              enters the wood
              structure. In high-humidity
              climates, the Building
              Science Corporation
              and IRC recommend
              sealed (encapsulated)
              crawl spaces rather
              than vented. Encapsulation:
              a 20-mil polyethylene
              vapor barrier (CleanSpace,
              SilverGlo, or similar)
              is sealed to the
              walls and piers,
              covering the full
              floor area and
              lapping up the
              foundation walls
              — seams are overlapped
              12" and taped
              with compatible
              tape. Foundation
              vents are sealed.
              A dehumidifier
              sized for the
              crawl space (SaniDry
              Sedona, Santa Fe
              Compact70) maintains
              relative humidity
              below 60% — the
              threshold above
              which wood decay
              fungi can colonize.
              Vapor barriers
              (6 mil polyethylene):
              a vapor barrier
              laid loose on
              the floor without
              wall sealing reduces
              ground moisture
              but does not address
              humid air entering
              through vents —
              encapsulation seals
              both paths. Structural
              concerns: wood
              decay in floor
              joists (soft spots,
              discoloration, joist
              sag) from prolonged
              moisture exposure
              requires sister
              joist installation
              (attaching a new
              joist beside the
              damaged one) or
              beam replacement.
              Post and beam
              height adjustment
              (screw jacks or
              LVL replacement
              on steel column)
              corrects settled
              supports. A crawl
              space website that
              explains why vented
              crawls fail in
              KC humidity, what
              encapsulation seals,
              and when floor
              joist damage requires
              structural repair
              earns the homeowner
              whose musty odor
              has been getting
              worse every summer.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before repairing a crawl space
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why vented crawls fail — stack effect, how humid outdoor air enters and condenses on cooler surfaces",
                  "Encapsulation vs. vapor barrier — what each seals, why vapor barrier alone does not address vent humidity",
                  "Dehumidifier necessity — why sealing without a dehumidifier can trap moisture, proper sizing for crawl volume",
                  "Wood decay risk — what humidity level allows fungal colonization, how to assess existing joist damage",
                  "Structural repair — sister joists, beam replacement, post height adjustment — what each addresses",
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
                What your crawl space website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Stack effect section — how air moves through the house, why vents introduce moisture in KC summers",
                  "Encapsulation guide — 20-mil barrier, wall sealing, vent sealing, seam overlap and taping requirements",
                  "Vapor barrier vs. encapsulation — what the 6-mil loose barrier does and does not seal",
                  "Dehumidifier section — why sealed crawls need mechanical dehumidification, sizing for typical KC crawl spaces",
                  "Structural assessment — joist decay indicators, sister joist process, post height correction",
                  "Inspection form with square footage, existing barrier type, signs of moisture or soft flooring observed",
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
                &ldquo;My customers were always
                confused about why their
                crawl was wet when it
                had vents — they thought
                vents were the solution.
                The stack effect section
                explaining that humid
                outdoor air through the
                vents is the problem,
                not the solution, changed
                every call. Customers
                arrived already understanding
                why we seal the vents
                instead of adding more.
                The dehumidifier section
                also closed a lot of
                jobs I would have lost
                to people who thought
                a vapor barrier alone
                was enough — they already
                knew the barrier without
                the dehumidifier was
                incomplete.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Ellison, crawl space specialist, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A crawl space site with stack effect
                explanation, encapsulation guide, and
                inspection form starts at $200. A full
                site with structural section, dehumidifier
                guide, and vapor barrier comparison
                is $425–$750. One encapsulation job
                covers the cost. No contracts,
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
