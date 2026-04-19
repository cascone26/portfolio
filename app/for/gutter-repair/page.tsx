import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Gutter Repair Companies in Kansas City",
  description:
    "Custom websites for gutter repair, gutter leak repair, and seamless gutter companies in the Kansas City area. Show your KC spring storm gutter joint failure from freeze-thaw expansion, aluminum vs. galvanized gutter service life in KC humidity, and improper pitch causing standing water and overflow to win gutter repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/gutter-repair",
  },
};

export default function GutterRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Gutter Repair Companies in Kansas City",
    description: "Custom websites for gutter repair and seamless gutter companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Gutter Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their gutters are pulling away from the fascia, whether a leaking gutter joint can be repaired or needs full replacement, and whether K-style or half-round gutters are more durable in Kansas City weather. A website that explains gutter repair earns the call from the homeowner who sees water staining on the soffit every spring after a storm. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Gutter Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Gutter Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Gutter repair customers
              are KC homeowners
              whose gutters
              are leaking at
              the joints after
              KC spring storms —
              a joint failure
              pattern that
              accelerates after
              multiple years
              of freeze-thaw
              cycling that
              expands and
              contracts the
              gutter metal
              at each lap
              joint in sectional
              gutter systems;
              homeowners whose
              gutters have
              pulled away
              from the fascia
              at one or more
              hanger locations —
              a failure caused
              by ice dam
              weight in KC
              winters, hanger
              spacing that
              was insufficient
              for the gutter
              span, or fascia
              wood rot at
              the hanger
              attachment point
              that no longer
              holds the screw;
              or homeowners
              who notice water
              overflowing the
              front of the
              gutter during
              a rainstorm
              rather than
              flowing to the
              downspout —
              a pitch problem
              that creates
              standing water
              and accelerates
              joint and hanger
              failure. The
              central education
              is sectional
              gutter joint
              failure mechanism
              from KC freeze-thaw
              cycling, the
              difference between
              sectional and
              seamless gutter
              systems and
              what it means
              for long-term
              maintenance,
              and gutter pitch
              as the operational
              factor that
              determines whether
              the gutter moves
              water or holds
              it — three things
              that determine
              whether a homeowner
              understands
              why resealing
              the same joints
              every two years
              is a symptom
              of a sectional
              gutter system
              nearing replacement.
              KC freeze-thaw
              joint failure:
              standard sectional
              gutters are
              installed in
              ten-foot sections
              with lap joints
              sealed with
              butyl gutter
              sealant or
              riveted connections;
              KC's fifty to
              fifty-five freeze-thaw
              cycles per winter
              cause the aluminum
              metal to expand
              and contract
              at each joint
              — a dimensional
              change that
              works the sealant
              bond over multiple
              seasons; a
              sectional gutter
              on a KC home
              that is ten
              to fifteen years
              old will have
              at least two
              to four joints
              per side that
              are leaking
              or near failure;
              the water that
              exits at a
              gutter joint
              runs behind
              the gutter
              and wets the
              fascia and soffit
              — the water
              staining on
              the soffit
              that is visible
              from below
              is the indicator;
              joint repair
              extends the
              system life
              by two to
              four years
              but the same
              joints will
              fail again
              in the next
              freeze-thaw
              cycle. Seamless
              vs. sectional:
              seamless gutters
              are formed on-site
              from a coil
              of aluminum
              in a continuous
              run from corner
              to corner —
              there are no
              lap joints
              along the gutter
              run, only at
              the miters at
              inside and
              outside corners
              and at the
              downspout outlets;
              a seamless aluminum
              gutter eliminates
              the primary
              failure point
              of sectional
              systems; KC
              standard seamless
              gutter is K-style
              five-inch aluminum
              with hidden
              hanger fasteners
              spaced at twenty-four
              to thirty-six
              inches — hidden
              hangers screw
              through the
              gutter front
              lip into the
              fascia and
              do not loosen
              the way spike-and-ferrule
              hangers do.
              Gutter pitch:
              the correct
              pitch for a
              KC gutter run
              is one-quarter
              inch of drop
              per ten feet
              toward the
              downspout; a
              gutter installed
              level or with
              reverse pitch
              holds standing
              water after
              every rain
              event; standing
              water accelerates
              joint sealant
              deterioration,
              deposits sediment
              and debris
              at the low
              point, and
              in winter
              becomes ice
              that adds weight
              and stress
              to the hanger
              attachment;
              a homeowner
              can diagnose
              pitch by looking
              at the gutter
              from the end
              — there should
              be a visible
              downward slope
              toward the
              downspout; standing
              water in the
              gutter after
              a day without
              rain is confirmation
              of insufficient
              pitch. A gutter
              repair website
              that explains
              KC freeze-thaw
              joint failure
              in sectional
              systems, seamless
              gutter as the
              long-term alternative,
              and gutter pitch
              as the operational
              variable earns
              the homeowner
              with leaking
              joints and
              soffit staining
              who wants to
              understand whether
              repair or replacement
              is the right
              decision.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before gutter repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC freeze-thaw joint failure — 50-55 cycles, aluminum expansion at lap joints, sealant bond deterioration timeline",
                  "Sectional vs. seamless — lap joint count, corner miter as only seam, on-site formed continuous run, hanger type difference",
                  "Gutter pitch — 1/4 inch per 10 feet, standing water symptoms, ice weight accumulation in KC winters",
                  "Fascia rot at hangers — water behind gutter wets fascia, hanger screw pull-out, rot diagnosis before re-hanging",
                  "Repair vs. replacement decision — when joint resealing is appropriate vs. when sectional system is at end of life",
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
                What your gutter repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Joint failure section — KC freeze-thaw expansion, sealant bond working, soffit staining indicator, repair vs. replacement threshold",
                  "Seamless gutter section — continuous run from corner to corner, hidden hanger vs. spike-and-ferrule, seam location only at miters",
                  "Pitch section — correct slope specification, standing water diagnosis, ice weight and hanger stress in KC winters",
                  "Fascia section — water behind gutter path, soffit and fascia rot pattern, rot assessment before re-hanging",
                  "Hanger spacing section — 24-36 inch interval, ice dam weight requirement, hidden hanger retention vs. spike pullout",
                  "Quote form with gutter age, joint leak count, soffit staining present, hanger separation, downspout count and location",
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
                &ldquo;The repair vs.
                replacement section
                is what stops
                the one-joint
                reseal call
                from becoming
                a six-joint
                reseal call
                next year.
                KC homeowners
                with fifteen-year-old
                sectional gutters
                call for one
                leaking joint
                and don&apos;t understand
                that the other
                five joints
                on that side
                are failing
                on the same
                cycle. After
                the section
                went up explaining
                the freeze-thaw
                mechanism and
                the two-to-four-year
                repair extension
                from joint
                resealing, customers
                started asking
                for the full
                assessment before
                deciding between
                repair and
                replacement —
                and when they
                saw five joints
                needing work,
                the seamless
                replacement
                was the obvious
                call. The soffit
                staining explanation
                also wins the
                bid — homeowners
                who see the
                staining and
                understand that
                water is running
                behind the gutter
                onto the fascia
                are motivated
                to fix it
                before the
                rot spreads.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Carmichael, gutter repair and seamless gutter installation, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A gutter repair site with KC freeze-thaw joint section, seamless vs.
                sectional guide, and quote form starts at $200. A full site with pitch
                diagnosis, fascia rot assessment, and repair vs. replacement decision
                content is $425–$750. One gutter replacement job covers the cost.
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
