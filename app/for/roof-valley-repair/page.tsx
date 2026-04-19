import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Roof Valley Repair Companies in Kansas City",
  description:
    "Custom websites for roof valley repair, open valley flashing, and closed cut valley companies in the Kansas City area. Show your KC ice dam valley failure, open metal valley vs. closed cut shingle valley, and valley flashing as highest-concentration water zone to win roof valley repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/roof-valley-repair",
  },
};

export default function RoofValleyRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Roof Valley Repair Companies in Kansas City",
    description: "Custom websites for roof valley repair and open valley flashing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Roof Valley Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the leak inside the ceiling below the valley between two roof pitches is a shingle problem or a flashing problem, whether the dark streak running down the valley is normal or a sign of water intrusion, and why a valley that held for fifteen years is suddenly leaking. A website that explains roof valley repair earns the call from the homeowner whose complex roofline is showing water stains at the inside corner. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Roof Valley Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Roof Valley Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Roof valley repair
              customers are KC homeowners
              whose attic framing
              shows water staining
              at the intersection
              of two roof pitches —
              the inside corner
              where two slopes
              meet and all the
              rainfall collected
              by both pitches
              converges into one
              concentrated flow
              channel; homeowners
              whose roofer installed
              a closed-cut valley
              — where shingles
              from one pitch are
              cut and lapped over
              the valley line
              and the metal flashing
              below the shingles
              is not visible —
              and who are now
              seeing granule loss,
              shingle edge erosion,
              or water intrusion
              at that line after
              a hail event or
              after ten to fifteen
              years of KC weather;
              or homeowners with
              an open metal valley
              — where the W-shaped
              or V-shaped metal
              flashing is visible
              running down the
              valley center —
              who see the valley
              metal lifting, buckling,
              or showing rust
              at the lap joints.
              The central education
              is the roof valley
              as the highest water
              concentration zone
              on the roof, the
              open versus closed-cut
              valley failure modes,
              and KC ice dam
              valley interaction —
              three things that
              determine whether
              a homeowner understands
              why their valley
              is the most demanding
              section of the roof
              and why repair
              is different from
              patching a shingle.
              Valley as high-concentration
              zone: a roof valley
              receives runoff
              from two full pitch
              surfaces — on a
              home with a thirty-foot
              ridge and a valley
              on each side, the
              valley handles the
              collected water
              from several hundred
              square feet of roof
              surface; the flow
              velocity through
              the valley during
              a heavy KC rain
              event is significantly
              higher than across
              the open pitch —
              this high-velocity
              flow erodes shingle
              granules and shingle
              mat at the valley
              edges faster than
              anywhere else on
              the roof; an open
              metal valley channels
              this flow along
              the metal surface
              and away from shingle
              edges; a closed-cut
              valley routes the
              flow across the
              top surface of
              the overlapping
              shingle course —
              the shingle edge
              that is cut to
              the valley line
              is continuously
              subject to high-velocity
              water contact. Open
              vs. closed-cut failure
              modes: an open
              metal valley installed
              correctly — ice-and-water
              shield under the
              valley metal, metal
              lapped six inches
              at horizontal seams,
              clipped not nailed
              through the metal
              face — lasts the
              life of the roof
              and is rebuildable
              without disturbing
              shingles; the failure
              mode for open valley
              is lap joint separation
              over time from thermal
              movement, rust on
              galvanized steel
              valley metal after
              the zinc coating
              is depleted, and
              improper nailing
              through the metal
              face that creates
              penetration points;
              a closed-cut valley
              saves installation
              time but routes
              water across shingle
              material — after
              a KC hail event,
              the shingle edge
              at the valley cut
              is the first location
              to show impact damage,
              and hail dents
              in the valley shingles
              accelerate granule
              loss at the high-flow
              zone; NRCA guidelines
              recommend open
              metal valleys in
              high-rainfall and
              high-hail-exposure
              regions — KC qualifies
              on both criteria.
              KC ice dam valley
              interaction: in
              winter, the valley
              is where ice dam
              meltwater from
              two pitch surfaces
              converges — the
              volume is double
              the eave concentration;
              ice-and-water shield
              installed under
              the valley metal
              — minimum eighteen
              to twenty-four inches
              each side of the
              valley center —
              provides the waterproof
              membrane that protects
              the deck when meltwater
              backs up under
              the valley metal
              during a KC ice
              event; a valley
              without ice-and-water
              shield has only
              the metal itself
              between the backed-up
              meltwater and the
              roof deck. A roof
              valley repair website
              that explains the
              valley as the roof&apos;s
              highest water concentration
              zone, open vs.
              closed-cut failure
              modes, and the
              ice-and-water shield
              requirement earns
              the homeowner whose
              complex roofline
              is leaking at the
              inside corner.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before roof valley repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Valley as high-concentration zone — two pitch surfaces converging, high-velocity flow, granule erosion at valley edges",
                  "Open vs. closed-cut — metal valley vs. shingle lap, NRCA recommendation for high-rainfall and hail regions like KC",
                  "Open valley failure modes — lap joint separation, galvanized rust after zinc depletion, nail-through penetration points",
                  "Closed-cut failure after hail — valley shingle edge as first hail damage location, granule loss at high-flow zone",
                  "Ice dam valley interaction — double meltwater volume, ice-and-water shield under metal required, 18-24 inch coverage",
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
                What your roof valley repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "High-concentration section — valley water volume, flow velocity, granule erosion rate vs. open pitch",
                  "Open vs. closed-cut section — installation method, long-term performance comparison, NRCA recommendation for KC exposure",
                  "Open valley repair — lap joint inspection, galvanized vs. aluminum valley metal, clip vs. nail-through installation",
                  "Closed-cut repair after hail — valley shingle assessment, upgrade to open metal option, ice-and-water shield requirement",
                  "Ice dam section — valley meltwater volume, ice-and-water shield coverage standard, failure without membrane",
                  "Quote form with valley type, roof age, leak location, hail history, ice dam history, material preference",
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
                &ldquo;The open versus closed-cut
                section is what gets
                KC homeowners to
                upgrade when we&apos;re
                already on the roof.
                They come in asking
                to patch the closed-cut
                valley that started
                leaking after the
                April hail, and
                they don&apos;t know there&apos;s
                a different valley
                type that doesn&apos;t
                route water across
                shingle material.
                After the section
                went up explaining
                the failure mode
                and the NRCA recommendation
                for high-hail regions,
                a significant portion
                of the closed-cut
                valley repair calls
                became open metal
                valley installs
                instead. Those jobs
                are worth more and
                the customers don&apos;t
                call back with the
                same problem in
                five years.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Yamamoto, roofing and valley flashing repair, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A roof valley repair site with valley concentration section, open vs.
                closed-cut guide, and quote form starts at $200. A full site with
                ice dam interaction, valley metal material comparison, and hail
                damage assessment content is $425–$750. One valley repair job covers
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
