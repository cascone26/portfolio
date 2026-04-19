import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Concrete Leveling and Mudjacking Companies in Kansas City",
  description:
    "Custom websites for concrete leveling, mudjacking, and polyurethane foam lifting companies in the Kansas City area. Show your leveling methods, before-and-after results, and warranty to win residential and commercial concrete repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/concrete-leveling-mudjacking",
  },
};

export default function ConcreteLevelingMudjackingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Concrete Leveling and Mudjacking Companies in Kansas City",
    description: "Custom websites for concrete leveling and mudjacking companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Concrete Leveling Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with a sunken driveway, sidewalk trip hazard, or settled patio want to know if mudjacking or polyurethane foam is the right fix for their situation and what it costs versus replacement. A website that answers those questions earns the estimate call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Concrete Leveling in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Concrete Leveling &amp; Mudjacking</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Concrete leveling customers are
              looking at a sunken driveway slab,
              a sidewalk panel that became a
              trip hazard, a settled front stoop,
              or a patio that has dropped away
              from the house. The first question
              is always replacement versus
              leveling: concrete leveling
              typically costs 25 to 50 percent
              of replacement, avoids the
              waste and inconvenience of
              demolition, and can be done
              in a few hours with the surface
              ready for use the same day.
              The second question is method:
              traditional mudjacking pumps
              a cement-soil slurry under
              the slab through 1.5 to 2 inch
              holes and is the long-established
              method — economical and proven
              but heavier material. Polyurethane
              foam injection (PolyLevel,
              Terralift, and other brand names)
              uses smaller holes (5/8 inch),
              cures faster, is waterproof,
              and will not erode or wash away —
              it costs more but has performance
              advantages in wet conditions
              or when weight is a concern.
              Kansas City&apos;s freeze-thaw cycles
              are hard on concrete — the clay
              soil under slabs expands and
              contracts seasonally, which
              is the primary cause of settling.
              Customers want to understand
              why their slab sank, whether
              it will continue to settle after
              leveling, and what the warranty
              covers. Commercial applications —
              warehouse floors, loading docks,
              parking lots, airport aprons —
              are a significant market with
              larger project values. A concrete
              leveling website that compares
              the two methods honestly,
              explains replacement versus
              leveling, and shows before-and-after
              results earns the homeowner
              who is getting quotes for
              both options.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing concrete leveling
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Leveling vs. replacement — cost comparison, timeline, when leveling is the right choice vs. tear-out",
                  "Mudjacking vs. polyurethane foam — method differences, hole size, curing time, cost, longevity",
                  "Why it sank — soil erosion, freeze-thaw cycles, tree roots, poor compaction — understanding the cause",
                  "Will it settle again — whether the underlying problem is addressed, what warranty covers",
                  "Same-day use — whether the driveway or walkway is usable after the work is done",
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
                What your concrete leveling website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Method comparison — mudjacking vs. polyurethane foam — honest pros and cons, when each makes sense",
                  "Leveling vs. replacement — cost comparison, environmental impact, timeline, when each is right",
                  "Before and after gallery — driveways, sidewalks, stoops, patios, pool decks — real KC projects",
                  "Why concrete settles — KC clay soil, freeze-thaw cycles, erosion — what causes it and what fixes it",
                  "Commercial applications — warehouse floors, loading docks, parking lots, airport aprons",
                  "Estimate form with surface type, settlement amount, location, years since installation",
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
                &ldquo;Most of my customers are comparing
                us against replacement — someone
                got a $8,000 quote to replace
                their driveway and then found
                out leveling was an option.
                Without a website, I had no
                way to get in front of that
                conversation before the replacement
                contractor got there first.
                The new site with our honest
                comparison of the two options,
                our before-and-afters showing
                driveways that looked great
                after leveling, and our same-day
                use explanation brought in
                customers who were genuinely
                shopping both options and
                gave us the chance to
                make our case.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Kowalski, concrete leveling contractor, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A concrete leveling site with
                method comparison, gallery, and
                estimate form starts at $225.
                A full site with commercial section,
                cause-of-settling guide, and
                replacement comparison is $425–$850.
                One driveway job covers the cost.
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
