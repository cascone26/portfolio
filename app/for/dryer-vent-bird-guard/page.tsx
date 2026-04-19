import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Dryer Vent Bird Guard Companies in Kansas City",
  description:
    "Custom websites for dryer vent bird guard installation, dryer vent animal nesting removal, and dryer vent cap replacement companies in the Kansas City area. Show your nesting blockage fire risk, KC starling and sparrow nesting season, and louvered vs. cage guard selection to win dryer vent bird guard contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/dryer-vent-bird-guard",
  },
};

export default function DryerVentBirdGuardPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Dryer Vent Bird Guard Companies in Kansas City",
    description: "Custom websites for dryer vent bird guard installation and animal nesting removal companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Dryer Vent Bird Guard Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their dryer takes two cycles to dry a load, whether the bird nest they found in the vent cap is a fire hazard, and what kind of guard will keep birds out without restricting airflow. A website that explains dryer vent bird guard installation earns the nesting removal and cap replacement call before spring nesting season peaks. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Dryer Vent Bird Guard in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Dryer Vent Bird Guard</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Dryer vent bird guard
              customers are KC homeowners
              whose dryer takes two
              or three cycles to dry
              a normal load — reduced
              airflow from a partial
              or complete vent blockage
              extending drying time
              and increasing energy
              cost; homeowners who
              notice the plastic louvered
              cap on their exterior
              dryer vent has been
              pushed open, has nesting
              material visible in
              or around the opening,
              or has stopped opening
              and closing with airflow;
              or homeowners who had
              a dryer vent cleaning
              performed and were told
              that a bird nest was
              found inside the duct
              run and that the existing
              cap provides no barrier
              against re-entry. The
              central education is
              the nesting blockage
              fire risk, KC bird species
              and nesting season timing,
              and louvered versus
              cage guard selection —
              three things that determine
              whether a homeowner
              understands the urgency
              of a blocked dryer vent
              and what guard type
              will actually prevent
              re-entry. Nesting blockage
              fire risk: a dryer vent
              duct is a warm, enclosed
              tube that exhausts humid
              hot air — conditions
              that make it attractive
              to nesting birds; a
              nest inside a dryer
              vent duct reduces or
              eliminates airflow;
              when airflow is restricted,
              the dryer heating element
              cannot exhaust heat
              efficiently — the dryer
              runs longer, the duct
              temperature rises, and
              lint that has accumulated
              on the nest material
              or duct walls is exposed
              to sustained elevated
              heat; the NFPA reports
              that failure to clean
              dryer vents is the leading
              cause of residential
              dryer fires — a nest
              blockage combines the
              two primary conditions
              (restricted airflow
              and combustible material
              inside a hot duct);
              a dryer vent that takes
              more than 45 minutes
              to dry a normal load
              should be inspected
              for blockage before
              the next use. KC bird
              nesting season: the
              two primary nesting
              species in KC dryer
              vents are European starlings
              and house sparrows —
              both are cavity-nesting
              species that actively
              seek enclosed openings
              in buildings; KC starlings
              begin nest site selection
              in late February and
              early March — well before
              most homeowners notice
              the problem; house sparrows
              nest April through August
              with multiple clutches
              per season; both species
              return to the same
              site in subsequent
              years if the opening
              remains accessible;
              the critical intervention
              window is late January
              through mid-February —
              before nest construction
              begins; once eggs are
              present, nest removal
              is subject to the Migratory
              Bird Treaty Act for
              native species (starlings
              and sparrows are exempted
              as invasive, but a
              homeowner may not be
              able to identify the
              species without getting
              close to the nest).
              Guard selection: standard
              plastic louvered dryer
              vent caps have louvers
              that are light enough
              for dryer airflow to
              open but that birds
              can push open with
              their beaks — they
              provide no effective
              bird barrier; a four-inch
              round pest-resistant
              dryer vent cover with
              a bird guard cage (Heartland
              Industries, Duraflo,
              or equivalent) has
              an internal cage screen
              with openings large
              enough for lint to
              pass but too small
              for a bird to enter —
              these are the correct
              replacement for plastic
              louvered caps in KC;
              cage guards must be
              cleaned annually because
              lint accumulates on
              the screen and can
              restrict airflow over
              time — the same restricted
              airflow problem that
              the guard is intended
              to prevent from nesting.
              A dryer vent bird guard
              website that explains
              the nesting blockage
              fire risk, KC starling
              and sparrow nesting
              timing, and the cage
              guard versus louvered
              cap distinction earns
              the homeowner who found
              a bird nest in their
              vent cap and wants
              it fixed before next
              spring.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before dryer vent bird guard installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Nesting fire risk — lint accumulation in nest material, restricted airflow, elevated duct temperature, NFPA dryer fire data",
                  "KC nesting season — starling nest site selection in February, sparrow April-August, return to same site next year",
                  "Dryer performance signs — two-cycle drying, long dry time, exterior cap not opening, hot dryer exterior",
                  "Guard types — plastic louvered cap failure mode vs. cage guard with lint-pass screen, Heartland/Duraflo brands",
                  "Migratory Bird Act — which species are exempted (starlings/sparrows), when nest removal timing matters",
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
                What your dryer vent bird guard website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fire risk section — nesting blockage + lint = fire conditions, NFPA data, 45-minute dry time warning sign",
                  "KC nesting season — starling February timeline, sparrow multiple clutches, return-to-site behavior, intervention window",
                  "Guard comparison — plastic louvered cap failure, cage guard internal screen, lint maintenance requirement",
                  "Nesting removal section — nest material removal before guard install, duct inspection after removal",
                  "Brand section — Heartland Industries, Duraflo, screen opening spec for lint pass vs. bird exclusion",
                  "Quote form with vent location, current cap type, dryer performance issue, whether nest found, timeline",
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
                &ldquo;The nesting season
                section doubled my
                February bookings.
                I&apos;d been doing dryer
                vent cleaning year-round
                but losing February
                to customers who didn&apos;t
                know nesting season
                had already started.
                After the section went
                up explaining that
                KC starlings start
                scouting nest sites
                in late February and
                that a plastic louvered
                cap does nothing to
                stop them, I started
                getting calls in January
                and February from
                homeowners who wanted
                the guard installed
                before the birds showed
                up. The fire risk section
                also made the cage
                guard upsell obvious —
                customers who came
                in for a vent cleaning
                and saw that their
                cap was a plastic
                louver that birds
                push open freely stopped
                saying &apos;I&apos;ll just get
                a cleaning&apos; and started
                asking about the guard
                at the same visit.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Svensson, dryer vent cleaning and bird guard installation, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A dryer vent bird guard site with nesting fire risk section,
                KC season timing guide, and quote form starts at $200. A full
                site with guard comparison, nest removal content, and brand
                guide is $425–$750. One bird guard install and cleaning call
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
