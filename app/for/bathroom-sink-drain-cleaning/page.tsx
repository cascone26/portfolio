import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Bathroom Sink Drain Cleaning Companies in Kansas City",
  description:
    "Custom websites for bathroom sink drain cleaning, bathroom sink slow drain repair, and pop-up stopper cleaning companies in the Kansas City area. Show your pop-up stopper hair accumulation, P-trap cleaning method, and drain snake vs. chemical comparison to win bathroom drain cleaning contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/bathroom-sink-drain-cleaning",
  },
};

export default function BathroomSinkDrainCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Bathroom Sink Drain Cleaning Companies in Kansas City",
    description: "Custom websites for bathroom sink drain cleaning and slow drain repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Bathroom Sink Drain Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether liquid drain cleaner actually works, why their bathroom sink slows down every few months after they clear it, and whether the pop-up stopper is part of the problem. A website that explains bathroom sink drain cleaning earns the slow drain call before the homeowner pours another bottle of Drano. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Bathroom Sink Drain Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Bathroom Sink Drain Cleaning</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Bathroom sink drain
              cleaning customers are
              KC homeowners whose
              bathroom sink drains
              slowly — water pools
              in the basin during
              hand washing and takes
              thirty to sixty seconds
              to drain — homeowners
              who have poured liquid
              drain cleaner down the
              drain twice in a month
              and the sink is slow
              again within two weeks,
              or homeowners who never
              realized the pop-up
              stopper lifts out and
              has a hair accumulation
              on the pivot rod mechanism
              that slows the drain
              regardless of what is
              poured down it. The
              central education is
              where bathroom sink
              clogs form, why liquid
              drain cleaner provides
              temporary relief rather
              than permanent clearing,
              and the three-point
              clearing sequence that
              actually resolves a
              slow drain — three things
              that determine whether
              the drain stays clear
              for a year or backs
              up again in six weeks.
              Where clogs form: a
              bathroom sink drain
              has three clog accumulation
              points — the pop-up
              stopper assembly, the
              P-trap, and the drain
              line between the P-trap
              and the wall — the
              pop-up stopper pivot
              rod accumulates hair
              and soap scum at the
              point where the rod
              enters the drain body;
              this accumulation wraps
              around the rod and
              catches new hair strands
              on every drain cycle;
              the stopper itself sits
              above this accumulation
              and may appear clear
              while the pivot rod
              below it is heavily
              matted; the P-trap
              holds a standing water
              seal and accumulates
              hair and soap scum
              along the bottom curve;
              in KC hard water (150–200
              mg/L), soap scum in
              the P-trap includes
              calcium soap deposits
              that cement hair accumulation
              into a near-solid plug;
              the drain line between
              the P-trap and the wall
              accumulates soap film
              and mineral deposits
              that reduce the interior
              diameter over time.
              Drain cleaner limits:
              liquid drain cleaners
              (sodium hydroxide or
              sulfuric acid base)
              dissolve organic material —
              hair and soap; they
              work by chemically
              breaking down the surface
              of the hair clog; the
              limitation is that drain
              cleaner is poured into
              standing water, diluted
              before it reaches the
              clog, and acts on the
              clog surface rather
              than the full mass;
              a dense hair clog at
              the pivot rod survives
              liquid cleaner because
              the chemical cannot
              penetrate the matted
              center; the clog reduces
              in size enough for
              temporarily improved
              drainage, then regrows
              from the undissolved
              core within two to
              six weeks; repeated
              drain cleaner use in
              KC homes with older
              drain lines also degrades
              the rubber P-trap gaskets
              over time. Three-point
              clearing sequence: clearing
              a slow bathroom sink
              drain permanently involves
              removing the pop-up
              stopper, cleaning the
              pivot rod and stopper
              of accumulated hair
              and soap scum, disassembling
              and cleaning the P-trap,
              and using a drain snake
              to clear any accumulation
              between the P-trap
              and the wall — a drain
              snake reaches the full
              drain line length and
              physically removes material
              that drain cleaner cannot
              dissolve; after clearing
              all three points, the
              drain flows at full
              capacity and the recurrence
              timeline extends significantly.
              A bathroom sink drain
              website that explains
              pop-up stopper accumulation,
              why drain cleaner fails
              on dense clogs, and
              the three-point clearing
              method earns the homeowner
              who wants the drain
              cleared once rather
              than treated monthly.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before bathroom sink drain cleaning
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pop-up stopper — pivot rod hair accumulation, how to remove stopper, what to clean below it",
                  "P-trap cleaning — KC hard water calcium soap deposits, disassembly method, what holds the clog in place",
                  "Drain cleaner limits — why it works temporarily, dilution before reaching clog, undissolved core regrowth",
                  "Drain snake vs. chemical — reach to wall connection, physical removal vs. chemical surface attack",
                  "Slow drain vs. full clog — what causes each, when a slow drain becomes a backup risk",
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
                What your bathroom sink drain cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Clog location section — pop-up stopper pivot rod, P-trap curve, wall connection line — three accumulation points",
                  "Drain cleaner section — how it works, dilution problem, undissolved core regrowth timeline, KC hard water compound",
                  "Three-point clearing guide — stopper removal, pivot rod cleaning, P-trap disassembly, drain snake to wall",
                  "P-trap section — KC calcium soap deposit explanation, disassembly without plumber tools, cleaning method",
                  "Recurrence guide — what extends the clear drain period, hair trap installation, monthly maintenance",
                  "Quote form with drain location, drain speed, chemicals tried, time since last professional clear, timeline",
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
                &ldquo;The pop-up stopper section
                is what stopped the
                repeat calls. Customers
                would call every six
                to eight weeks with
                the same slow drain.
                I&apos;d clear it, they&apos;d
                be fine for a few weeks,
                then call again. After
                the section went up
                explaining the pivot
                rod accumulation and
                why drain cleaner only
                reduces the surface
                of the clog rather
                than removing the
                matted core, customers
                started asking for
                the full three-point
                service instead of
                just a quick snake.
                The KC hard water section
                also helped — homeowners
                in Leawood were frustrated
                that their drains slowed
                faster than their friends
                in other cities. Explaining
                that KC water deposits
                calcium soap that cements
                hair accumulation into
                a hard plug made the
                professional clearing
                make sense over repeated
                chemical treatments.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Stanton, drain cleaning and plumbing service, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A bathroom sink drain cleaning site with pop-up stopper section,
                drain cleaner limits guide, and quote form starts at $200. A
                full site with three-point clearing method, KC hard water context,
                and P-trap guide is $425–$750. One full drain clearing job covers
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
