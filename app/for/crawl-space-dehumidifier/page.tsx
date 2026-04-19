import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Crawl Space Dehumidifier Companies in Kansas City",
  description:
    "Custom websites for crawl space dehumidifier installation, crawl space moisture control, and encapsulation companies in the Kansas City area. Show your grains per pound measurement, drainage routing, and mold prevention to win crawl space contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/crawl-space-dehumidifier",
  },
};

export default function CrawlSpaceDehumidifierPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Crawl Space Dehumidifier Companies in Kansas City",
    description: "Custom websites for crawl space dehumidifier and moisture control companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Crawl Space Dehumidifier Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with crawl spaces want to know why their floors feel cold and soft, whether standing water or high humidity is the bigger problem, and what a crawl space dehumidifier actually needs to drain. A website that explains moisture control and encapsulation earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Crawl Space Dehumidifiers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Crawl Space Dehumidifier</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Crawl space dehumidifier
              customers are KC homeowners
              who noticed a musty
              smell in the first
              floor, found mold
              on crawl space joists
              during an inspection,
              have wood rot or
              soft spots in the
              subfloor, or had
              a home inspector
              recommend crawl
              space remediation.
              KC's clay soil and
              wet springs create
              persistent crawl
              space moisture problems
              in homes with vented
              crawl spaces — the
              standard vented crawl
              space design is counterproductive
              in KC's humid summers:
              opening vents to
              "ventilate" introduces
              warm humid outdoor
              air into a cool
              crawl space, where
              it condenses on cold
              surfaces and raises
              relative humidity
              above the 60% threshold
              where mold grows.
              Dehumidifier sizing:
              crawl space dehumidifiers
              are sized in pints
              per day at specific
              temperature and
              humidity conditions
              (AHAM standard: 80°F,
              60% RH); a unit rated
              at 70 pints/day at
              AHAM conditions may
              produce 40–50 pints/day
              in a 55°F crawl space —
              oversizing is preferred
              since the unit cycles
              less. Drainage: a
              crawl space dehumidifier
              must drain continuously —
              gravity drain to a
              sump pit or floor
              drain, or condensate
              pump to exterior;
              a unit that requires
              manual emptying in
              a crawl space is
              not serviced reliably.
              Encapsulation vs.
              dehumidifier only:
              a vapor barrier alone
              (6-mil poly on the
              ground) reduces evaporation
              from soil but does
              not address humid
              air entering through
              vents; full encapsulation
              (20-mil reinforced
              liner sealed to walls
              and piers, vents
              sealed closed, dehumidifier
              installed) converts
              the crawl to a semi-conditioned
              space and eliminates
              the summer condensation
              cycle; Building Science
              Corporation research
              shows encapsulated
              crawl spaces consistently
              perform better than
              vented in humid climates
              like KC. Mold remediation
              threshold: surface
              mold on wood joists
              at less than 10%
              coverage is typically
              addressable with
              antimicrobial treatment
              and moisture control;
              mold with structural
              wood decay requires
              joist sister or replacement
              before liner installation.
              A crawl space website
              that explains why
              vented crawl spaces
              fail in KC summers,
              what drainage a dehumidifier
              requires, and when
              full encapsulation
              is the right answer
              earns the homeowner
              who found mold and
              doesn't know where
              to start.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a crawl space dehumidifier
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why vented crawl spaces fail in KC — summer condensation cycle, outdoor humidity vs. cool crawl space",
                  "Dehumidifier sizing — AHAM pint rating vs. actual performance at crawl space temperatures",
                  "Drainage requirement — gravity drain vs. condensate pump, why manual emptying doesn't work",
                  "Encapsulation vs. dehumidifier — when vapor barrier alone is insufficient, full encapsulation benefits",
                  "Mold assessment — surface mold vs. structural decay, antimicrobial treatment threshold",
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
                What your crawl space dehumidifier website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC moisture problem section — vented crawl condensation cycle, summer humidity, why standard venting fails here",
                  "Dehumidifier sizing guide — AHAM rating vs. crawl space temp, oversizing rationale, brand examples",
                  "Drainage section — gravity drain routing, condensate pump options, why continuous drain is required",
                  "Encapsulation comparison — vapor barrier only vs. full encapsulation, liner specs, vent sealing",
                  "Mold assessment section — coverage threshold for treatment vs. wood replacement, antimicrobial process",
                  "Assessment form with crawl access, existing vapor barrier, musty smell location, visible mold or rot",
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
                &ldquo;The hardest objection
                was homeowners who had just
                had their crawl vents opened
                by another contractor — who
                told them ventilation was
                the fix. The website section
                on why vented crawl spaces
                are counterproductive in
                KC's humidity — the condensation
                cycle that forms when warm
                humid air hits a cool surface —
                was the only thing that
                actually shifted that belief.
                Customers who read it arrived
                ready to discuss encapsulation
                instead of arguing about
                whether to open or close
                the vents. The drainage
                section also set expectations
                on both sides: customers
                knew a condensate pump
                might be needed before
                the job, and I stopped
                getting called back to
                add one as an afterthought.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Donahue, crawl space moisture control, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A crawl space dehumidifier site with KC moisture
                section, sizing guide, and assessment form starts
                at $200. A full site with encapsulation comparison,
                drainage section, and mold assessment content is
                $425–$750. One dehumidifier installation covers
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
