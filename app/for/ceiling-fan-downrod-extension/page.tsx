import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Ceiling Fan Downrod Extension Companies in Kansas City",
  description:
    "Custom websites for ceiling fan downrod extension, high ceiling fan, and ceiling fan installation companies in the Kansas City area. Show your blade clearance by ceiling height, downrod length selection, and vaulted ceiling angle canopy to win ceiling fan contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/ceiling-fan-downrod-extension",
  },
};

export default function CeilingFanDownrodExtensionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Ceiling Fan Downrod Extension Companies in Kansas City",
    description: "Custom websites for ceiling fan downrod extension and high ceiling fan installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Ceiling Fan Downrod Extension Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how long a downrod needs to be for their ceiling height, whether a fan can be hung on a vaulted ceiling without a special canopy, and what happens if the blades are too close to the ceiling. A website that explains ceiling fan downrod selection earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Ceiling Fan Downrod Extension in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Ceiling Fan Downrod Extension</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Ceiling fan downrod extension
              customers are KC homeowners
              who bought a fan for a
              room with a 10-foot or
              higher ceiling and discovered
              the included downrod leaves
              the blades too close to
              the ceiling to move effective
              air, homeowners finishing
              a basement with 9-foot
              ceilings who want proper
              fan placement, or homeowners
              in older KC homes with
              vaulted great rooms who
              need an angled ceiling
              canopy and the correct
              downrod length for the
              pitch. The central education
              is blade clearance by
              ceiling height, downrod
              length calculation, and
              vaulted ceiling installation —
              three things that determine
              whether a ceiling fan
              moves air effectively
              or sits too high to
              do anything useful.
              Blade clearance: the standard
              minimum clearance from
              blade tip to floor is
              7 feet — this is the
              safety minimum that
              prevents anyone from
              contacting a moving blade;
              the recommended blade
              height for optimal air
              movement is 8 to 9 feet
              from the floor; at 7
              feet the fan circulates
              air but the zone of
              effective air movement
              is narrow and concentrated;
              at 8 to 9 feet the fan
              moves air across the
              full room cross-section;
              for an 8-foot ceiling,
              a flush mount (hugger)
              fan with no downrod
              achieves 7-foot blade
              clearance with the fan
              body tight to the ceiling;
              for a 9-foot ceiling,
              a 6-inch downrod positions
              blades at approximately
              8 feet; for a 10-foot
              ceiling, a 12-inch downrod
              positions blades at 8.5
              to 9 feet. Downrod length
              calculation: the formula
              is ceiling height minus
              desired blade height
              minus fan body depth
              (typically 10–12 inches)
              equals required downrod
              length; a 12-foot ceiling
              with a target blade height
              of 9 feet and an 11-inch
              fan body needs a 12-inch
              downrod (144 - 108 - 11 = 25,
              minus the canopy and
              ball hardware of about
              10 inches = 15 inches;
              round to the nearest
              standard size, which
              is 18 inches); standard
              downrod sizes are 6,
              12, 18, 24, 36, 48,
              and 72 inches; all
              threaded to a standard
              1/2-inch diameter; extension
              downrods with couplers
              can be joined for great
              rooms with 16-foot or
              higher ceilings. Vaulted
              ceiling: a fan installed
              on a vaulted ceiling
              must use an angled canopy —
              the canopy pivots on
              the mounting ball to
              remain level as the
              ceiling pitches; standard
              canopies cover pitches
              up to 5/12; steep-pitch
              canopies cover up to
              12/12; the downrod must
              be long enough that
              the fan body hangs clear
              of the ceiling plane —
              on a steeply pitched
              ceiling the high side
              of the blade circle
              is much closer to the
              ceiling than the low
              side; KC great rooms
              with 8/12 or steeper
              vaults frequently need
              an 18-inch or 24-inch
              downrod to clear the
              ceiling plane on the
              high side. A ceiling
              fan website that explains
              downrod length by ceiling
              height, how to calculate
              the right size, and
              what vaulted ceilings
              require earns the homeowner
              who wants a fan that
              actually cools the room.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before ceiling fan downrod extension
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Blade clearance — 7-foot safety minimum, 8-9 foot optimal range, ceiling height vs. fan effectiveness",
                  "Downrod calculation — ceiling height minus blade height minus fan body depth, standard size chart",
                  "Flush mount vs. downrod — hugger fan for 8-foot ceilings, when downrod is required",
                  "Vaulted ceiling canopy — angled vs. standard canopy, pitch range limits, high-side blade clearance",
                  "Extension couplers — joining downrods for great rooms, 16+ foot ceiling options, weight rating",
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
                What your ceiling fan downrod extension website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Blade clearance section — 7-foot minimum, 8-9 foot optimal, why too-high fans don't cool rooms",
                  "Downrod calculator guide — step-by-step formula, standard size chart, example calculations by ceiling height",
                  "Hugger vs. downrod section — when flush mount works, when downrod is required, transition point",
                  "Vaulted ceiling section — angled canopy types, pitch limits, high-side clearance calculation",
                  "Extension and coupler guide — joining downrods, great room solutions, load rating for heavy fans",
                  "Quote form with ceiling height, ceiling type (flat/vaulted), room size, existing fan or new install, timeline",
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
                &ldquo;The downrod calculation section
                is the one that closes jobs
                before I even get to the
                house. Customers in Leawood
                with 11-foot ceilings were
                going to Home Depot and
                buying the fan and the
                included 6-inch downrod,
                then calling me after the
                fact wondering why the room
                didn&apos;t feel cooler. After
                the section went up explaining
                that a 6-inch rod on an
                11-foot ceiling leaves the
                blades at 9.5 feet and
                the airflow misses everyone
                in the room, customers started
                calling me first and asking
                me to pull the right rod
                before the install. Fewer
                returns, better results,
                and every customer understood
                why their last fan didn&apos;t work.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Haskell, ceiling fan installation and electrical, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A ceiling fan site with blade clearance section, downrod
                calculator guide, and quote form starts at $200. A full
                site with vaulted ceiling content, hugger vs. downrod
                comparison, and extension guide is $425–$750. One high-ceiling
                fan installation covers the cost. No contracts, no monthly fees.
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
