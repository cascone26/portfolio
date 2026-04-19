import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Well Drainage Companies in Kansas City",
  description:
    "Custom websites for window well drainage, window well liner replacement, and egress window drainage companies in the Kansas City area. Show your French drain connection, liner sizing, and KC clay soil considerations to win window well drainage contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-well-drainage",
  },
};

export default function WindowWellDrainagePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Well Drainage Companies in Kansas City",
    description: "Custom websites for window well drainage and liner installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Well Drainage Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why water pools in their window well, whether a gravel bed or French drain is the right fix, and how deep the drainage needs to go below KC's clay soil. A website that explains the drainage mechanics earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Well Drainage in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Well Drainage</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window well drainage
              customers are KC homeowners
              with a basement egress
              window that fills
              with water during
              heavy rain, homeowners
              who found water
              seeping through
              the window frame
              after a storm,
              or homeowners replacing
              a basement window
              and discovering
              the original well
              has no drainage
              at all. KC&apos;s clay-heavy
              soil is the underlying
              problem — clay
              does not drain
              freely; water that
              enters a window
              well has nowhere
              to go unless a
              drainage path was
              deliberately installed.
              The central education
              is why window wells
              flood, what the
              correct drainage
              solution is, and
              what cover options
              prevent water entry
              in the first place.
              Why window wells
              flood: the most
              common cause is
              absent or clogged
              drainage at the
              bottom of the well —
              a standard window
              well installation
              requires at least
              12 inches of clean
              gravel (3/4-inch
              washed stone) at
              the base to allow
              water to dissipate
              slowly into the
              surrounding soil;
              KC clay soil dissipates
              slowly, so even
              proper gravel can
              saturate during
              a heavy rain event;
              if the gravel was
              never installed
              or has silted over
              (fine soil particles
              filling the voids),
              water pools immediately.
              French drain connection:
              the correct solution
              for a window well
              that floods repeatedly
              is a French drain
              connected to the
              base of the well —
              a 4-inch perforated
              PVC pipe set in
              gravel, wrapped
              in filter fabric
              to prevent silt
              infiltration, running
              from the window
              well to daylight
              or to the footing
              drain system; the
              pipe must slope
              a minimum of 1/8
              inch per foot toward
              the outlet; connecting
              to the footing
              drain requires
              confirming the
              footing drain is
              functional and
              not already backing
              up. Liner sizing
              and installation:
              window well liners
              (corrugated metal,
              polyethylene, composite)
              must extend at
              least 4 inches
              above grade to
              prevent surface
              water runoff from
              entering the well;
              the liner must
              be a minimum of
              6 inches wider
              than the window
              frame on each side —
              a 36x24 inch window
              needs at least
              a 48x36 inch well;
              liner depth: for
              an egress window,
              the well must allow
              the window to open
              fully and provide
              9 square feet of
              clear floor area
              (IRC egress requirement);
              liner anchoring:
              plastic or metal
              anchors through
              the liner into
              the foundation
              wall at each corrugation
              or every 12 inches.
              Cover options: window
              well covers (polycarbonate,
              wire, hinged) prevent
              most surface water
              and debris from
              entering the well —
              a flat polycarbonate
              cover rated for
              400 lbs snow load
              is the standard
              KC recommendation
              (250 lbs/sq ft
              design snow load
              in Johnson County);
              hinged covers allow
              egress — IRC requires
              that any cover
              on an egress window
              well be openable
              from inside without
              a key or tool;
              grate-style covers
              allow some water
              through and do
              not fully eliminate
              the drainage need.
              A window well drainage
              website that explains
              why KC clay soil
              causes pooling,
              what a French drain
              connection actually
              involves, and what
              cover is required
              for an egress window
              earns the homeowner
              who has watched
              the well fill up
              for three years
              and is finally
              ready to fix it.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before window well drainage installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why window wells flood — clay soil drainage rate, gravel bed depth and silt clogging, absent drainage at base",
                  "French drain connection — perforated pipe sizing, filter fabric, slope requirement, outlet to daylight or footing drain",
                  "Liner sizing — minimum width and depth, egress floor area requirement, liner anchoring into foundation wall",
                  "Cover types — polycarbonate load rating, KC snow load, egress cover opening requirement, grate vs. solid covers",
                  "Gravel replacement — when gravel is silted and must be removed, clean stone specification, drainage restoration",
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
                What your window well drainage website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay soil section — why clay doesn't drain, gravel bed requirements, silt infiltration and repack timeline",
                  "French drain guide — pipe sizing, slope, filter fabric, connecting to footing drain vs. daylight outlet",
                  "Liner sizing section — width and depth minimums, egress clearance requirements, anchoring method",
                  "Cover guide — polycarbonate vs. grate, snow load rating, egress openability requirement under IRC",
                  "Inspection section — how to check if existing drainage is silted, signs of liner failure, gravel condition",
                  "Quote form with window well dimensions, current liner condition, flooding frequency, egress or non-egress",
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
                &ldquo;The clay soil section
                was the thing that made
                customers understand why
                their well flooded even
                after I&apos;d been there before.
                They thought gravel was gravel —
                they didn&apos;t know it silts
                over in two or three years
                in KC clay. After I published
                the explanation, customers
                would call and already say
                &apos;I think my gravel is silted&apos;
                and we could just schedule.
                The French drain section
                changed the scope of jobs
                too — customers who had
                been told a cover was the
                fix started asking about
                the drainage pipe because
                they read that a cover doesn&apos;t
                solve the underlying problem.
                I got two full drainage
                installs out of customers
                who initially just called
                about a cover.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Hartmann, basement drainage and window well installation, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window well drainage site with clay soil section,
                gravel guide, and quote form starts at $200. A full
                site with French drain guide, liner sizing, and cover
                content is $425–$750. One drainage installation covers
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
