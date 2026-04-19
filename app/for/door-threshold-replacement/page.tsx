import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Door Threshold Replacement Companies in Kansas City",
  description:
    "Custom websites for door threshold replacement, exterior door threshold, and door weather seal companies in the Kansas City area. Show your threshold height adjustment for new flooring, threshold types by application, and KC winter draft seal selection to win threshold contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/door-threshold-replacement",
  },
};

export default function DoorThresholdReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Door Threshold Replacement Companies in Kansas City",
    description: "Custom websites for door threshold replacement and exterior door weather seal companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Door Threshold Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a new threshold can be added without replacing the door frame, how a threshold is adjusted when new flooring raises the floor height, and which threshold type actually seals against KC winter drafts. A website that explains door thresholds earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Door Threshold Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Door Threshold Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Door threshold replacement
              customers are KC homeowners
              whose exterior door threshold
              has corroded, split, or
              warped and is now letting
              cold air in at floor level,
              homeowners who installed
              new flooring that raised
              the floor height and the
              existing threshold no
              longer contacts the door
              bottom seal, or homeowners
              replacing an exterior door
              and needing the threshold
              cut and fitted to the
              existing door frame width.
              The central education is
              threshold types and their
              sealing function, height
              adjustment for new flooring,
              and how a threshold is
              cut and fitted to a non-standard
              frame width — three things
              that determine whether
              a threshold replacement
              solves the draft problem
              or just delays it. Threshold
              types: an exterior door
              threshold is a composite
              piece — typically an aluminum
              or solid wood saddle with
              a vinyl, silicone, or rubber
              insert that contacts the
              door bottom; the insert
              is the primary seal; an
              adjustable threshold (screws
              on the top face raise or
              lower the center fin height)
              is the most versatile type —
              it accommodates slight
              floor height variation
              without replacement; a
              non-adjustable threshold
              is a fixed height — if
              the floor height changes
              or the door sags slightly,
              the seal no longer contacts
              the door bottom and air
              passes through; in KC homes
              where wood floors expand
              and contract seasonally,
              an adjustable threshold
              is better than a fixed
              one because the floor height
              at the threshold location
              can vary up to 1/8 inch
              between winter and summer;
              saddle thresholds for transition
              between two interior floor
              heights are not weather
              seals — they are cosmetic
              transitions and should
              not be confused with exterior
              door thresholds. Height
              after new flooring: new
              hardwood or tile flooring
              raises the floor height
              by 3/8 to 3/4 inch — a
              threshold sized to the
              original floor height no
              longer makes contact with
              the door bottom seal; the
              adjustment options are:
              (1) install an adjustable
              threshold and raise the
              center fin to the new floor
              height; (2) install a taller
              threshold that bridges
              the old subfloor height
              to the new finish floor
              height; (3) cut and reinstall
              the existing door to a
              lower height — this is
              the most labor-intensive
              option and only needed
              if the door no longer
              clears the new flooring
              by less than 1/8 inch.
              Fitting to frame: exterior
              door frames are rarely
              exactly standard widths —
              trim, plinth blocks, and
              previous threshold installations
              affect the exact measurement;
              a threshold is cut to the
              door frame width between
              the interior casing legs
              minus the projection of
              any door stop on each
              side; threshold end cuts
              on aluminum thresholds
              require a metal-cutting
              blade; the ends are often
              caulked at installation
              to prevent water intrusion
              at the side-to-frame junction.
              A door threshold website
              that explains the adjustable
              vs. fixed type decision,
              what new flooring does
              to seal contact, and how
              a threshold is fitted to
              an actual frame earns the
              homeowner who has been
              feeling the draft all winter.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before door threshold replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Threshold types — adjustable vs. fixed, vinyl insert function, saddle vs. weather seal distinction",
                  "Height after new flooring — how much floor raise affects seal, adjustment vs. replacement decision",
                  "KC seasonal floor movement — hardwood expansion range, why adjustable is better than fixed in KC",
                  "Fitting process — frame width measurement, door stop subtraction, metal blade requirement for aluminum",
                  "Draft diagnosis — where air actually enters, threshold vs. door sweep vs. side seal source",
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
                What your door threshold replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Threshold type section — adjustable vs. fixed comparison, insert material options, KC seasonal floor movement",
                  "New flooring height section — how much raise affects contact, three adjustment options, when door must be cut",
                  "Fitting guide — frame width measurement, door stop deduction, caulk at ends for water seal",
                  "Draft diagnosis section — how to identify threshold vs. sweep vs. side seal as draft source",
                  "Material section — aluminum vs. wood saddle, vinyl vs. silicone insert durability, KC temperature range",
                  "Quote form with door type, existing threshold condition, new flooring concern, draft description, timeline",
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
                &ldquo;The flooring height section
                brought in three jobs I wouldn&apos;t
                have gotten otherwise. Customers
                who had just had hardwood
                installed were calling me
                about cold air and assumed
                the door was the problem.
                After reading the section
                explaining how new flooring
                raises the floor height and
                the existing threshold no
                longer contacts the door
                sweep, they came to the estimate
                already knowing what happened.
                All three needed adjustable
                thresholds — quick jobs,
                good margin, and every customer
                was relieved because the fix
                was simpler than a door replacement.
                The draft diagnosis section
                also saved one customer from
                replacing a threshold that
                was fine — the problem was
                the side seal, not the bottom.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Brennan, door service and weatherproofing, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A door threshold site with threshold type section, height
                adjustment guide, and quote form starts at $200. A full
                site with new flooring content, draft diagnosis, and
                fitting guide is $425–$750. One threshold replacement
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
