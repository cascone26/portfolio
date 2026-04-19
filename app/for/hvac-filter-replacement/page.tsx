import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for HVAC Filter Replacement Companies in Kansas City",
  description:
    "Custom websites for HVAC filter replacement, air filter service, and furnace filter replacement companies in the Kansas City area. Show your KC allergy season MERV rating selection, 1-inch vs. 4-inch media filter comparison, and seasonal KC filter change triggers to win HVAC filter replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hvac-filter-replacement",
  },
};

export default function HvacFilterReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for HVAC Filter Replacement Companies in Kansas City",
    description: "Custom websites for HVAC filter replacement and air filter service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for HVAC Filter Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a MERV 13 filter will hurt their furnace, how often to change filters in a KC home with pets and allergies, and whether the cheap 1-inch filters or the thick 4-inch media filters are actually worth the difference. A website that explains HVAC filter replacement earns the call from the KC homeowner whose allergy season starts in March. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For HVAC Filter Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">HVAC Filter Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              HVAC filter replacement
              customers are KC homeowners
              whose energy bills
              are rising without
              a clear cause — a
              pattern that indicates
              the air handler is
              working harder to
              pull air through
              a clogged filter,
              increasing the runtime
              of the blower motor
              and the refrigerant
              cycle; homeowners
              who have allergies
              or asthma that worsen
              during the March
              through May KC allergy
              season — oak and
              maple pollen peak
              in April, elm peaks
              in March, grass
              pollen runs through
              June — and want
              to know whether
              the filter they
              currently have
              is rated to capture
              the pollen particles
              driving their symptoms;
              or homeowners who
              switched from 1-inch
              filters to a 4-inch
              media filter at
              the recommendation
              of an HVAC tech
              and want to understand
              whether the filter
              is hurting their
              system by restricting
              airflow too much.
              The central education
              is KC allergy season
              and MERV rating
              selection for pollen
              and mold spore capture,
              1-inch versus 4-inch
              media filter comparison
              for KC HVAC systems,
              and seasonal KC
              filter change triggers
              rather than calendar
              intervals — three
              things that determine
              whether a homeowner
              understands that
              the same filter
              needs changing every
              thirty days in
              April during peak
              pollen and every
              ninety days in
              October when the
              windows are closed
              and the system
              runs less. KC allergy
              season and MERV
              selection: KC is
              among the top-twenty
              cities for allergy
              severity in the
              United States —
              oak and maple
              pollen particles
              range from ten
              to one hundred
              microns and are
              captured by a
              MERV 8 filter;
              mold spores in
              KC summer — humidity
              running seventy
              to eighty percent
              from June through
              August — range
              from three to
              ten microns and
              require MERV 11
              to capture reliably;
              dust mite allergen
              fragments and pet
              dander range from
              one to five microns
              and require MERV
              13 for meaningful
              capture; a MERV
              8 filter is
              the minimum for
              pollen capture —
              it does nothing
              measurable for
              mold spores or
              pet dander; a
              MERV 13 filter
              captures all three
              KC allergen categories
              but increases static
              pressure in the
              duct system —
              only appropriate
              if the HVAC system
              is rated for
              the higher pressure
              drop. 1-inch versus
              4-inch media filter:
              a standard 1-inch
              filter at MERV
              11 has approximately
              forty-five square
              inches of filter
              media per unit
              of rated airflow;
              a 4-inch media
              filter at the
              same MERV rating
              has four to
              five times the
              filter media area
              — the pressure
              drop per unit
              airflow is significantly
              lower despite
              the same particle
              capture rating;
              a MERV 13 4-inch
              media filter
              typically has
              a lower static
              pressure drop
              than a MERV
              8 1-inch filter
              because of the
              expanded media
              surface; a 4-inch
              media filter
              lasts eight to
              twelve months
              under average
              KC conditions
              versus one to
              three months
              for a 1-inch
              filter — the
              cost per year
              is often lower
              despite the
              higher unit price.
              Seasonal KC change
              triggers: rather
              than the generic
              ninety-day calendar
              recommendation,
              KC filter changes
              should be triggered
              by conditions:
              change at the
              start of March
              — before oak
              pollen peaks —
              to put a fresh
              filter in at
              the highest load
              period; change
              again in June
              as mold spore
              counts rise with
              summer humidity;
              change in September
              as ragweed pollen
              peaks in KC
              — ragweed runs
              August through
              October and
              is the primary
              fall allergen;
              change in November
              before the furnace
              runs continuously
              through winter.
              Four seasonal
              changes at the
              right triggers
              outperforms twelve
              monthly changes
              on a calendar
              that misses the
              April pollen
              peak by two
              weeks. An HVAC
              filter replacement
              website that
              explains KC allergy
              season MERV rating
              selection, 4-inch
              media filter
              pressure drop
              advantage, and
              seasonal KC
              trigger-based
              change schedule
              earns the homeowner
              whose allergies
              worsen every
              spring and who
              doesn&apos;t understand
              why changing
              the filter monthly
              hasn&apos;t helped.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before HVAC filter replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "MERV rating for KC allergens — MERV 8 for pollen, MERV 11 for mold spores, MERV 13 for dander — what each captures",
                  "1-inch vs. 4-inch media — pressure drop comparison, media surface area, cost per year, system compatibility",
                  "KC allergy season timing — March oak/elm, April maple peak, June mold spore rise, August-October ragweed",
                  "Filter change triggers — why seasonal KC timing outperforms generic 90-day calendar intervals",
                  "High MERV airflow restriction — whether MERV 13 hurts the furnace, how to check system CFM rating",
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
                What your HVAC filter replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "MERV section — KC allergen particle sizes, MERV 8/11/13 capture ranges, which KC allergy sources each rating addresses",
                  "Media filter section — 1-inch vs. 4-inch pressure drop, media surface area calculation, cost per year comparison",
                  "KC seasonal schedule — March/June/September/November triggers, pollen calendar, humidity-driven mold spore peak",
                  "System compatibility section — static pressure rating, how to check furnace spec for MERV 13 suitability",
                  "Subscription vs. one-time — filter delivery service comparison, who should use subscriptions vs. seasonal service calls",
                  "Quote form with system age, filter size, current MERV rating, allergy history, pets, 1-inch or media filter",
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
                &ldquo;The KC allergy season
                section is what
                doubled my spring
                calls. I serve
                a lot of Leawood
                and Overland Park
                neighborhoods with
                mature tree canopy —
                heavy oak and
                maple pollen every
                April — and before
                the section went
                up, customers would
                call in May wondering
                why their allergies
                were bad when
                they changed the
                filter in February.
                After explaining
                that a MERV 8
                filter doesn&apos;t
                capture the mold
                spores that peak
                in KC humidity
                from June through
                August, and that
                March and September
                are the two critical
                change triggers
                in KC, customers
                started calling
                for service at
                the right time.
                The 4-inch media
                section also helped
                with the upgrade
                conversation —
                KC homeowners who
                thought a thicker
                filter was always
                worse for the
                furnace understood
                the pressure drop
                math immediately
                once it was written
                out clearly.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Elmore, HVAC service and filter replacement, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An HVAC filter replacement site with MERV rating section, KC allergy
                season timing guide, and quote form starts at $200. A full site with
                1-inch vs. 4-inch media comparison, seasonal trigger schedule, and
                system compatibility content is $425–$750. One filter service call
                covers the cost. No contracts, no monthly fees.
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
