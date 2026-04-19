import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Rain Gutter Cleaning Companies in Kansas City",
  description:
    "Custom websites for rain gutter cleaning, gutter flushing, and downspout clearing companies in the Kansas City area. Show your debris types, cleaning frequency, and fascia damage prevention to win gutter cleaning contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/rain-gutter-cleaning",
  },
};

export default function RainGutterCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Rain Gutter Cleaning Companies in Kansas City",
    description: "Custom websites for rain gutter cleaning and downspout service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Gutter Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how often gutters need cleaning, what overflowing gutters actually damage, and whether gutter guards eliminate cleaning or just change it. A website that explains fascia rot and foundation water connection earns the cleaning call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Gutter Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Rain Gutter Cleaning</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Gutter cleaning customers
              are homeowners who
              have noticed water
              pouring over the
              front of the gutter
              during rain, have
              seen plants growing
              from the gutter
              channel, or received
              a recommendation
              from a roofer or
              siding contractor
              who noticed overflowing
              gutters causing
              damage. The central
              education is what
              clogged gutters
              actually damage
              and why the damage
              compounds over
              time: a gutter
              that overflows
              at the front edge
              sends water sheeting
              down the fascia
              board and behind
              the gutter mounting
              — water behind
              the fascia saturates
              the rafter tail
              and causes wood
              rot within 1–2
              seasons of continued
              overflow. Water
              that pools at
              the base of the
              house from overflowing
              gutters is a primary
              cause of basement
              water intrusion
              that homeowners
              attribute to a
              waterproofing problem.
              KC has mature tree
              cover (silver maple,
              oak, cottonwood,
              sycamore) that
              deposits leaf debris
              heavily in fall —
              typical cleaning
              frequency is twice
              per year (after
              spring seeding
              and after fall
              leaf drop), though
              homes directly
              under large maples
              may need 3–4 cleanings
              per year. Downspout
              flushing: gutter
              cleaning without
              flushing the downspouts
              leaves compacted
              debris at the
              downspout inlet
              and elbow — the
              gutter runs free
              but the downspout
              backs up in the
              next heavy rain.
              The complete service
              includes hand-clearing
              the channel, bagging
              debris, and high-pressure
              flushing of all
              downspout runs
              from top to bottom.
              Gutter guards:
              micro-mesh guards
              (LeafFilter, MasterShield)
              block most debris
              from entering the
              channel but require
              periodic brushing
              of the mesh surface
              as fine debris
              accumulates —
              they do not eliminate
              maintenance, they
              reduce it. Surface-tension
              (reverse-curve)
              guards (LeafGuard,
              Gutter Helmet)
              redirect water
              into the channel
              but can miss heavy
              rainfall events
              that exceed the
              surface tension
              capacity. A gutter
              cleaning website
              that explains
              fascia rot from
              overflow, downspout
              flushing as part
              of the full service,
              and the honest
              assessment of
              what gutter guards
              actually do earns
              the homeowner
              who has seen plants
              growing from the
              channel for two
              years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before cleaning gutters
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "What clogged gutters damage — fascia rot from overflow, water at foundation, rafter tail deterioration",
                  "Cleaning frequency — twice per year standard, why KC tree cover may require more, trigger signs",
                  "Downspout flushing — why gutter cleaning without downspout flush leaves the job incomplete",
                  "Gutter guards — what micro-mesh and reverse-curve do, what they cannot eliminate, maintenance requirements",
                  "How to identify fascia damage — what to look for behind the gutter, when overflow has already caused rot",
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
                What your gutter cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "What overflow damages section — fascia rot mechanism, rafter tail exposure, foundation water connection",
                  "Frequency guide — KC tree species and debris load, twice-per-year standard, high-tree-cover exception",
                  "Full service walkthrough — hand clearing, debris bagging, downspout flushing from top to bottom",
                  "Gutter guard section — honest comparison of micro-mesh vs. reverse-curve, what each reduces vs. eliminates",
                  "Fascia inspection — what we check during service, when overflow damage has already begun",
                  "Service form with number of stories, tree coverage, last cleaning date, guard type if any",
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
                &ldquo;My hardest job was convincing
                homeowners that gutter
                cleaning was worth more
                than the $75 cash guy
                with a ladder. The website
                section showing what overflow
                does to fascia and rafter
                tails changed the conversation —
                customers arrived already
                understanding what they
                were protecting, not just
                paying for cleaning. The
                downspout flush section
                also helped: I stopped
                having customers call back
                a week later saying the
                downspout was still backing
                up because a previous
                company had not flushed
                it.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Brandt, exterior cleaning, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A gutter cleaning site with what-overflow-damages
                section, service walkthrough, and booking
                form starts at $200. A full site with
                gutter guard comparison, fascia inspection
                section, and frequency guide is $425–$750.
                One recurring customer covers the cost.
                No contracts, no monthly fees.
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
