import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Exterior Caulking Companies in Kansas City",
  description:
    "Custom websites for exterior caulking, house caulking, and siding caulk replacement companies in the Kansas City area. Show your KC temperature swing caulk cycling failure, siliconized latex vs. polyurethane for KC joints, and caulk as primary air and water barrier at penetrations to win exterior caulking contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/exterior-caulking",
  },
};

export default function ExteriorCaulkingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Exterior Caulking Companies in Kansas City",
    description: "Custom websites for exterior caulking and siding caulk replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Exterior Caulking Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the cracked caulk at their window frames is causing water damage inside the wall, which caulk product actually lasts in KC weather, and whether a caulking job is something they should hire out or do themselves. A website that explains exterior caulking earns the call from the homeowner whose painter flagged ten problem joints on the last exterior paint job. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Exterior Caulking in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Exterior Caulking</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Exterior caulking
              customers are KC homeowners
              who are having
              the exterior of
              their house painted
              and whose painter
              identified failing
              or missing caulk
              at window frame-to-siding
              joints, door frame-to-siding
              joints, penetrations
              where utility
              lines enter the
              house, or at
              the joints between
              trim boards and
              siding panels;
              homeowners who
              notice that the
              caulk at their
              window corners
              or door frames
              has cracked, pulled
              away from one
              substrate, or
              has gaps where
              the joint has
              moved; or homeowners
              who have had
              water entry in
              a wall cavity
              that a home inspector
              or contractor
              traced to a
              failed caulk
              joint at a penetration
              or frame-to-siding
              transition. The
              central education
              is KC temperature
              swing as the
              primary caulk
              failure mechanism,
              siliconized latex
              versus polyurethane
              caulk selection
              for KC joint
              types, and caulk
              as the primary
              air and water
              barrier at all
              penetrations
              and transitions —
              three things that
              determine whether
              a homeowner understands
              why caulk fails
              in KC specifically
              and what the
              durable product
              and joint prep
              are. KC temperature
              swing failure:
              KC experiences
              an annual temperature
              range from approximately
              negative ten
              degrees Fahrenheit
              in winter to
              one hundred degrees
              in summer —
              a swing of one
              hundred ten degrees;
              exterior caulk
              joints between
              dissimilar materials —
              vinyl siding and
              wood window frames,
              brick and wood
              trim, aluminum
              flashing and
              wood fascia —
              experience differential
              thermal movement
              because each
              material expands
              and contracts
              at a different
              rate; a caulk
              joint that is
              three-eighths
              inch wide when
              applied in mild
              spring weather
              may be one-quarter
              inch wide in
              summer heat and
              one-half inch
              wide in winter
              cold; the caulk
              must accommodate
              this movement
              in tension and
              compression each
              year; standard
              acrylic latex
              caulk has a
              movement accommodation
              of approximately
              plus or minus
              seven percent
              of joint width —
              insufficient for
              KC temperature
              swing at wider
              joints; a caulk
              that cannot accommodate
              the movement
              cracks in tension
              during winter
              cold and debonds
              from one substrate
              as the joint
              closes in summer.
              Siliconized latex
              versus polyurethane:
              siliconized acrylic
              latex — latex
              caulk with silicone
              added — improves
              the movement
              accommodation
              to plus or minus
              twenty-five to
              fifty percent
              and maintains
              adhesion to
              painted surfaces;
              it accepts paint
              after cure, which
              is required for
              all caulk joints
              visible under
              the finished
              paint; polyurethane
              caulk has superior
              movement accommodation —
              plus or minus
              fifty percent
              or more — and
              is the correct
              product for
              horizontal joints
              where water sits,
              for joints between
              wood and masonry,
              and for unpainted
              joints where
              the maximum movement
              accommodation
              is needed; polyurethane
              is difficult
              to tool neatly
              and is not paintable
              in the same
              way as siliconized
              latex; silicone
              caulk provides
              the highest movement
              accommodation
              and water resistance
              but does not
              accept paint
              and is appropriate
              only for joints
              that will not
              be painted. Caulk
              at penetrations
              and transitions:
              the highest-risk
              caulk joints
              on a KC home
              are at penetrations —
              where pipes, conduits,
              cables, and HVAC
              lines enter the
              building envelope —
              because these
              joints are rarely
              inspected or
              maintained; water
              entering through
              a penetration
              caulk failure
              runs down the
              exterior wall
              inside the insulation
              cavity and does
              not appear as
              a stain until
              a significant
              volume has accumulated;
              the second highest-risk
              joints are at
              the window and
              door frame perimeters
              where the frame
              meets the siding —
              both because
              these joints
              are large and
              because the
              differential movement
              between the
              frame and siding
              materials is
              large. An exterior
              caulking website
              that explains
              KC temperature
              swing as the
              failure mechanism,
              product selection
              for joint type
              and movement,
              and penetration
              joints as the
              highest-risk
              locations earns
              the homeowner
              who wants caulk
              that will last
              more than three
              years in KC
              weather.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before exterior caulking
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC temperature swing — 110-degree annual range, differential movement between dissimilar materials, winter tension cracking",
                  "Caulk product selection — siliconized latex vs. polyurethane vs. silicone, movement accommodation percentage, paintability",
                  "Joint type matching — horizontal sitting-water joints, frame-to-siding joints, penetrations, masonry-to-wood",
                  "Penetration risk — utility entry points, wall cavity water entry without visible staining until damage accumulates",
                  "Paint compatibility — which products accept paint, why unpainted silicone is not a substitute for paintable caulk",
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
                What your exterior caulking website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Temperature swing section — KC range, differential material expansion, standard acrylic failure at KC movement levels",
                  "Product section — siliconized latex, polyurethane, silicone — properties, applications, KC joint type matching",
                  "Penetration section — highest-risk joints, wall cavity entry without visible staining, inspection and maintenance interval",
                  "Frame joint section — window and door perimeter joint prep, old caulk removal, backer rod for wide joints",
                  "Paint cycle integration — when to caulk before and after exterior painting, caulk lead time before primer",
                  "Quote form with siding type, joint locations identified, age of caulk, exterior paint cycle timing, painter flag",
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
                &ldquo;The temperature swing
                section explains
                what no caulk
                label explains.
                KC homeowners
                who bought the
                fifty-year caulk
                at the hardware
                store and watched
                it crack in three
                winters didn&apos;t
                know why. After
                the section went
                up explaining
                that a hundred-and-ten-degree
                annual temperature
                swing in KC requires
                a caulk with
                a movement accommodation
                of at least
                plus or minus
                twenty-five percent
                and that the
                basic acrylic
                caulk is rated
                for seven percent,
                customers stopped
                asking why it
                failed and started
                asking what the
                right product
                was. That question
                leads to the
                conversation about
                joint prep and
                product selection,
                which is where
                the job value
                comes from.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Thornton, exterior caulking and weatherproofing, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An exterior caulking site with KC temperature swing section,
                product selection guide, and quote form starts at $200. A full site
                with penetration joint risk, paint cycle integration, and backer rod
                prep content is $425–$750. One whole-house caulking job covers the
                cost. No contracts, no monthly fees.
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
