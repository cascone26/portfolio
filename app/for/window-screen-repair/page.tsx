import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Screen Repair Companies in Kansas City",
  description:
    "Custom websites for window screen repair, screen replacement, and screen re-screening companies in the Kansas City area. Show your KC spring storm screen damage patterns, fiberglass vs. aluminum screen mesh for KC sun exposure, and full-frame vs. re-screening decisions to win window screen repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-screen-repair",
  },
};

export default function WindowScreenRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Screen Repair Companies in Kansas City",
    description: "Custom websites for window screen repair and screen replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Screen Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a torn screen can be patched or needs full replacement, whether the aluminum frame is reusable or needs to be replaced with the mesh, and whether there is a screen mesh that holds up better to Kansas City hail and sun. A website that explains window screen repair earns the call from the homeowner who lost six screens in one storm. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Screen Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Screen Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window screen repair
              customers are KC homeowners
              who lose multiple
              screens to a single
              storm event — hail
              that punches through
              fiberglass mesh at
              any stone size above
              three-quarters inch,
              or wind that drives
              debris into screens
              on the south and
              southwest KC storm
              exposure; homeowners
              whose screens have
              degraded from extended
              KC sun exposure —
              fiberglass mesh that
              has chalked, become
              brittle, and begun
              to fray at the corners
              and spline groove —
              typically within
              eight to twelve years
              on south-facing KC
              windows; or homeowners
              who want all screens
              replaced at once
              and want to understand
              whether the aluminum
              frames are reusable
              or should be replaced
              at the same time.
              The central education
              is KC storm damage
              patterns on standard
              fiberglass mesh, fiberglass
              versus aluminum versus
              solar screen mesh
              options, and re-screening
              versus full-frame
              replacement decision —
              three things that
              determine whether
              a homeowner understands
              their options when
              screens fail from
              weather rather than
              age alone. KC storm
              damage patterns:
              KC is in the secondary
              hail belt — a persistent
              hail corridor covering
              eastern Kansas and
              western Missouri;
              hail events producing
              stones above three-quarters
              inch diameter punch
              through standard
              eighteen-by-sixteen-mesh
              fiberglass screen
              and bend aluminum
              frames if stones
              are one inch or larger;
              standard fiberglass
              screen has essentially
              no hail resistance —
              a single KC storm
              event in May or June
              can damage all south
              and west facing screens
              simultaneously; solar
              screen mesh — sixty-percent
              shade cloth, tightly
              woven polyester —
              has significantly
              higher puncture resistance
              than fiberglass and
              can survive hail
              events that destroy
              standard mesh; the
              tradeoff is visible
              light reduction and
              outward view restriction
              from the room side.
              Mesh options: standard
              fiberglass mesh is
              the most common and
              least expensive;
              aluminum screen mesh
              is more durable than
              fiberglass, does
              not fray or chalk,
              and has better resistance
              to mechanical damage —
              pet scratches, debris
              contact — but dents
              and does not recover
              from hail deformation;
              solar screen at sixty
              percent is the KC
              upgrade for south
              and west windows —
              it reduces solar
              heat gain through
              the window glass,
              lowers cooling load
              in KC summer, and
              withstands most hail
              events that destroy
              standard mesh; solar
              screen mesh also
              reduces glare from
              the interior perspective
              at windows facing
              the afternoon sun.
              Re-screening versus
              full-frame replacement:
              aluminum screen frames
              are extruded sections
              with mitered corners
              — they can be re-screened
              as long as the corners
              are square and the
              frame is not bent
              or bowed; a frame
              that was bowed by
              hail impact or bent
              during handling cannot
              be re-screened flat
              — the spline will
              not hold the mesh
              under tension against
              a curved frame; a
              KC screen repair
              company that assesses
              frame condition before
              re-screening avoids
              callbacks from screens
              that fall loose from
              a bent frame after
              the first warm-weather
              opening; full frame
              replacement with
              new mesh is appropriate
              when the frame corners
              have separated, the
              frame has visible
              bends, or the original
              frame is steel rather
              than aluminum and
              has begun to rust
              at the corner joints.
              A window screen repair
              website that explains
              KC hail damage patterns
              on standard fiberglass
              mesh, solar screen
              upgrade for KC south
              and west exposures,
              and frame condition
              assessment before
              re-screening earns
              the homeowner who
              loses six screens
              in a May storm and
              wants someone who
              knows what they are
              doing before the
              June storm arrives.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before window screen repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC hail damage — secondary hail belt, 3/4-inch threshold for standard fiberglass puncture, south/west exposure storm direction",
                  "Mesh options — standard fiberglass vs. aluminum vs. 60% solar screen, hail resistance, sun exposure longevity",
                  "Solar screen benefits — heat gain reduction, KC summer cooling load, glare reduction vs. view restriction tradeoff",
                  "Re-screen vs. full frame — frame condition assessment, bent/bowed frames, corner separation, steel vs. aluminum",
                  "Fiberglass degradation — 8-12 year KC sun exposure chalking, brittleness, fraying at spline groove",
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
                What your window screen repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Storm damage section — KC hail belt, standard mesh hail threshold, why south/west screens go first",
                  "Mesh guide — fiberglass vs. aluminum vs. solar screen, durability comparison, KC exposure recommendation",
                  "Solar screen section — 60% shade cloth spec, summer cooling load reduction, view and light tradeoff",
                  "Frame assessment section — what makes a frame re-screenable vs. needs replacement, bent frame failure mode",
                  "Full-house service — batch re-screening pricing, frame condition report included, solar screen upgrade option",
                  "Quote form with screen count, home age, last replacement, storm damage, south/west exposure, solar screen interest",
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
                &ldquo;The solar screen section
                doubled my average
                job ticket. KC homeowners
                who called after
                a hail event replacing
                six or eight standard
                fiberglass screens
                started asking about
                solar screen on
                the south and west
                windows after reading
                about the hail resistance
                and the cooling
                load reduction. Half
                of them upgrade two
                or four windows
                to solar screen
                as part of the repair
                job. The frame assessment
                section also reduced
                my callbacks — before
                it was up I occasionally
                re-screened a bent
                frame and had the
                mesh fall loose
                within a month.
                Now customers understand
                why I quote frame
                replacement on bent
                frames instead of
                just re-screening
                and trying to make
                it work.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Hollis, window screen repair and solar screen installation, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window screen repair site with storm damage section, mesh options
                guide, and quote form starts at $200. A full site with solar screen
                upgrade, frame assessment guide, and full-house service content is
                $425–$750. One storm repair job covers the cost. No contracts, no
                monthly fees.
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
