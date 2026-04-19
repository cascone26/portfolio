import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Dryer Vent Cleaning Companies in Kansas City",
  description:
    "Custom websites for dryer vent cleaning, dryer vent repair, and dryer vent rerouting companies in the Kansas City area. Show your lint blockage signs, fire statistics, and vent inspection process to win dryer vent cleaning contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/dryer-vent-cleaning",
  },
};

export default function DryerVentCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Dryer Vent Cleaning Companies in Kansas City",
    description: "Custom websites for dryer vent cleaning companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Dryer Vent Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how to tell if their dryer vent is blocked, whether long vent runs with multiple elbows are a problem, and why professional cleaning is different from pulling the trap out themselves. A website that explains the fire risk clearly earns the cleaning call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Dryer Vents in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Dryer Vent Cleaning</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Dryer vent cleaning customers
              are homeowners whose
              dryer takes multiple
              cycles to dry a
              load, whose dryer
              runs hot and shuts
              off on thermal overload,
              or who have not
              had the vent cleaned
              in years and are
              aware of the fire
              risk. The NFPA reports
              that clothes dryers
              cause approximately
              14,630 home fires
              annually — lint
              buildup in the vent
              is the leading cause.
              The central education
              is what lint does
              and where it accumulates:
              the lint trap catches
              approximately 75%
              of lint — the rest
              passes through and
              coats the interior
              of the duct run.
              Over time this coating
              restricts airflow,
              causes the dryer
              to overheat, and
              creates a combustible
              buildup. Signs of
              a blocked vent:
              clothes take 2+
              cycles to dry, dryer
              is hot to the touch
              during operation,
              the outdoor vent
              flap does not open
              fully when the
              dryer runs, or
              a burning smell
              during operation.
              Vent design problems:
              UL 2158A requires
              smooth rigid metal
              duct (aluminum or
              galvanized steel)
              for dryer exhaust —
              flexible foil duct
              (the most common
              dryer connection
              type) should only
              be used for the
              short transition
              section between
              the dryer and the
              wall. Long vent
              runs: maximum allowed
              duct length is
              typically 25 feet
              (IRC M1502) with
              reductions for
              each 90° elbow
              (5 ft equivalent).
              Many homes exceed
              this with no modification —
              a booster fan can
              extend allowable
              run length. Bird
              nests and pest
              entry through a
              broken or missing
              vent cap are common
              causes of full
              blockage. A dryer
              vent cleaning website
              that explains the
              fire risk clearly,
              shows blockage signs,
              and addresses long
              vent runs earns
              the homeowner whose
              dryer has been
              slow for two years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a dryer vent cleaning company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Signs of blockage — what slow drying, hot dryer, and poor flap opening actually indicate",
                  "Fire risk — NFPA statistics, how lint buildup causes fires, what temperature lint ignites",
                  "Duct material — why rigid metal duct is required, why flexible foil is a code and safety issue",
                  "Long vent runs — maximum duct length, how elbows reduce allowed length, booster fan option",
                  "Frequency — how often dryer vents need cleaning, what determines the interval",
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
                What your dryer vent cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fire risk section — NFPA statistics, how lint accumulates past the trap, what makes it combustible",
                  "Blockage signs — slow drying, hot dryer, flap test, burning smell — when to call immediately",
                  "Duct inspection — rigid vs. flexible duct, what we look for, code requirements we address",
                  "Long vent run section — maximum length calculation, elbow reduction, booster fan option",
                  "Cleaning process — brush and vacuum system, what comes out, what the vent looks like after",
                  "Quote form with approximate vent run length, number of elbows, last cleaning date, symptoms",
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
                &ldquo;People either call immediately
                because they are already
                scared about the fire
                risk, or they have
                no idea it is even
                a service that exists.
                The website explained
                both — the fire statistics
                converted the &apos;I should
                probably do this&apos; people
                into calls, and the
                blockage signs section
                caught the people
                who did not know
                a slow dryer was
                a vent problem. The
                duct material section
                also added repair
                upsells — I started
                finding flexible foil
                duct in the wall
                on almost every job
                and customers already
                understood why it
                needed to be replaced
                when they read the
                site first.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Petersen, dryer vent and chimney service, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A dryer vent site with fire risk
                section, blockage signs, and quote
                form starts at $200. A full site with
                duct inspection guide, long vent run
                section, and cleaning process walkthrough
                is $425–$750. A week of dryer vent
                jobs covers the cost. No contracts,
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
