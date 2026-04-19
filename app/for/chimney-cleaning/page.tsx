import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Chimney Cleaning Companies in Kansas City",
  description:
    "Custom websites for chimney cleaning, chimney sweep, and fireplace service companies in the Kansas City area. Show your creosote stage classification, NFPA 211 cleaning standard, and chimney cap and liner condition assessment to win chimney cleaning and inspection contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/chimney-cleaning",
  },
};

export default function ChimneyCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Chimney Cleaning Companies in Kansas City",
    description: "Custom websites for chimney cleaning and chimney sweep companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Chimney Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what creosote actually is, why Stage 2 creosote requires chemical treatment before brushing, and what a Level 2 inspection covers versus a standard cleaning. A website that explains the difference between a $99 sweep and a proper inspection earns the annual service call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Chimney Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Chimney Cleaning</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Chimney cleaning customers
              are KC homeowners who
              burn wood in a fireplace
              or wood stove regularly
              and have not had the
              chimney inspected or
              cleaned in one or
              more years; homeowners
              who notice a strong
              smoke smell in the
              house when the fireplace
              is not in use —
              a sign that the chimney
              cap is damaged or
              missing and rain
              is entering the flue
              and activating creosote
              deposits; or homeowners
              who bought a KC home
              with a fireplace and
              do not know the condition
              of the flue, the liner,
              or the firebox. The
              central education
              is creosote classification
              and what it means
              for cleaning approach:
              creosote is the combustion
              byproduct of wood
              smoke that condenses
              on the cooler surfaces
              of a flue — it progresses
              through three stages
              as it accumulates
              and bakes. Stage 1
              creosote: loose,
              flaky deposits —
              dusty or flaky black
              residue that brushes
              out readily with
              a rotary or rod
              brush; this is the
              normal product of
              regular use and is
              what a standard chimney
              sweep removes. Stage 2
              creosote: hardened,
              shiny black deposits —
              a tar-like layer that
              has dried and hardened
              on the flue wall;
              a standard brush
              cannot remove it
              without chemical
              treatment first;
              a chimney sweep
              who quotes Stage 2
              cleaning with brushes
              only is either going
              to leave the Stage 2
              on the flue walls
              or charge additional
              on site when they
              discover the condition;
              chemical treatment
              (Anti-Creo-Soot or
              equivalent) is applied
              and allowed to work
              before a follow-up
              brush cleaning. Stage 3
              creosote: glazed,
              tar-like coating —
              the most concentrated
              form, which has been
              repeatedly heated
              and is extremely
              flammable and extremely
              difficult to remove;
              Stage 3 frequently
              requires professional
              rotary power cleaning
              tools and may require
              multiple treatments;
              Stage 3 is a chimney
              fire risk and in
              severe cases requires
              liner replacement.
              NFPA 211 inspection
              levels: a Level 1
              inspection is a
              visual inspection
              of accessible portions
              of the chimney —
              firebox condition,
              damper operation,
              cap and crown condition,
              flue deposit level;
              NFPA 211 recommends
              a Level 1 inspection
              annually for chimneys
              that have not changed
              use or experienced
              any operational issue;
              a Level 2 inspection
              includes video scanning
              of the flue interior
              and is required when
              a chimney is being
              sold with a house,
              after any chimney
              fire or operational
              event, or when a
              liner defect is
              suspected; a Level 2
              video scan shows
              cracks, spalling,
              and mortar joint
              failures that are
              invisible in a Level 1
              visual check. A chimney
              cleaning website
              that explains the
              three creosote stages,
              what Stage 2 requires
              versus a standard
              brush, and when
              a Level 2 video
              inspection is warranted
              earns the KC homeowner
              who wants to understand
              what they are paying
              for and why a proper
              cleaning is not
              the same as a cheap
              annual sweep.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before chimney cleaning
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Creosote stages — Stage 1 flaky vs. Stage 2 hardened vs. Stage 3 glazed, flammability and removal difficulty",
                  "Stage 2 treatment — chemical treatment requirement before brushing, what happens if skipped",
                  "NFPA 211 inspection levels — Level 1 vs. Level 2, when video scan is required or recommended",
                  "Chimney cap and crown — what they protect, how missing or cracked caps cause moisture and animal entry",
                  "Flue liner condition — clay tile vs. stainless liner, when cracks require relining before safe use",
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
                What your chimney cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Creosote section — three stages with descriptions, formation conditions, flammability, why stage matters",
                  "Stage 2 treatment section — what chemical treatment is, how it works, why brushes alone fail on hardened deposits",
                  "Inspection level guide — Level 1 vs. Level 2, what video scan shows, when KC homebuyers need Level 2",
                  "Cap and crown section — what each is, how damage causes moisture entry, freeze-thaw spalling in KC winters",
                  "Liner section — clay tile vs. stainless steel liner insert, when cracks ground a fireplace, relining context",
                  "Appointment form with fireplace type, last cleaning date, any smoke smell issues, home sale or inspection need",
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
                &ldquo;The creosote stage section
                is what separates my
                calls from the discount
                sweeps. KC homeowners
                comparing a $99 sweep
                to my quote had no
                way to understand that
                the cheap sweep uses
                a brush and calls it
                done — if there&apos;s
                Stage 2 on the flue
                walls, the brush just
                polishes it. After the
                section went up explaining
                that hardened deposits
                require chemical treatment
                before brushing, customers
                started asking whether
                the treatment was included
                or extra. The Level 2
                inspection section also
                converts a lot of home
                sale calls — KC home buyers
                need a Level 2 inspection
                and most real estate agents
                don&apos;t know which sweeps
                perform them.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Farrell, chimney sweep and inspection, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A chimney cleaning site with creosote stage section,
                inspection level guide, and appointment form starts at $200.
                A full site with Stage 2 treatment explanation, cap and crown
                section, and liner condition guide is $425–$750. One Level 2
                inspection and cleaning covers the cost. No contracts, no monthly fees.
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
