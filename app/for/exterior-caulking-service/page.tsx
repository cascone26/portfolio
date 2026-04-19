import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Exterior Caulking Service Companies in Kansas City",
  description:
    "Custom websites for exterior caulking service, window caulking replacement, and door caulking companies in the Kansas City area. Show your KC annual temperature swing caulk failure, silicone vs. polyurethane vs. latex performance, and south/west exposure service life to win exterior caulking contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/exterior-caulking-service",
  },
};

export default function ExteriorCaulkingServicePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Exterior Caulking Service Companies in Kansas City",
    description: "Custom websites for exterior caulking service and window caulking replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Exterior Caulking Service Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the caulk around their windows is still doing anything, why caulk that was applied two years ago is already cracking, and whether they need a caulking company or a window replacement company. A website that explains exterior caulking earns the call before a failed joint becomes a rot problem. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Exterior Caulking Service in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Exterior Caulking Service</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Exterior caulking service
              customers are KC homeowners
              who see cracked, shrunken,
              or missing caulk at
              window and door frames,
              at the joint between
              siding and trim boards,
              or at the base of
              masonry — gaps that
              allow wind-driven rain
              entry, cold air infiltration
              in winter, and a direct
              moisture path into
              the rough opening framing
              behind the siding;
              homeowners who had
              caulk applied two or
              three years ago and
              are already seeing
              failure — cracking,
              pulling away from
              one substrate, or
              chalking — and want
              to understand whether
              the product was wrong,
              the installation was
              wrong, or whether
              KC conditions simply
              degrade caulk that
              fast; or homeowners
              who are repainting
              the exterior and want
              to recaulk the full
              window and door inventory
              before the paint goes
              on. The central education
              is KC annual temperature
              swing and caulk service
              life, silicone versus
              polyurethane versus
              latex caulk performance
              in KC exposure conditions,
              and south and west
              exposure versus north
              exposure service life —
              three things that
              determine whether
              a homeowner understands
              why a five-dollar
              tube of paintable
              latex on a south-facing
              KC window joint fails
              in eighteen months
              and what product
              actually belongs there.
              KC annual temperature
              swing: KC experiences
              approximately one
              hundred degrees Fahrenheit
              of annual temperature
              range — from minus
              ten to minus twenty
              Fahrenheit during
              polar vortex events
              to one hundred to
              one hundred five Fahrenheit
              in July; the joint
              between a vinyl window
              frame and a wood
              trim board cycles
              through this range
              annually; vinyl expands
              and contracts at
              approximately twice
              the rate of wood;
              a caulk joint at
              this interface must
              accommodate the differential
              movement between
              two substrates expanding
              at different rates;
              a rigid caulk — dried
              latex or oil-based —
              bonds to both surfaces
              and cannot flex with
              the differential;
              it pulls away from
              the faster-moving
              substrate, typically
              the vinyl, within
              two to five cycles;
              a flexible caulk —
              silicone or polyurethane —
              maintains adhesion
              to both surfaces
              through repeated
              thermal cycling.
              Caulk product selection:
              paintable latex acrylic
              caulk is the most
              commonly applied
              exterior caulk — it
              is inexpensive, easy
              to tool, and accepts
              paint; its elongation
              at break is ten to
              twenty-five percent,
              which is insufficient
              for joints that move
              more than one-eighth
              inch seasonally —
              most KC window-to-trim
              joints exceed this;
              silicone caulk has
              four hundred to six
              hundred percent elongation,
              bonds to glass, vinyl,
              and metal, and has
              a service life of
              twenty or more years
              in KC conditions;
              it cannot be painted,
              which makes it unsuitable
              at painted wood trim
              joints; siliconized
              latex or polyurethane
              caulk is the middle
              option — paintable,
              higher elongation
              than plain latex,
              ten to fifteen year
              service life on a
              north-facing joint,
              seven to ten years
              on a south-facing
              joint at KC sun
              exposure levels.
              Exposure and service
              life: south and west
              facing joints receive
              direct UV radiation
              for the majority
              of the KC day; UV
              degrades caulk polymer
              chains the same way
              it degrades rubber
              pipe boots; polyurethane
              on a south KC wall
              has an effective
              service life of five
              to eight years; the
              same product on a
              north or east wall
              lasts eight to twelve
              years; backer rod
              installation — closed-cell
              foam rod inserted
              into joints wider
              than three-eighths
              inch before caulk
              application — controls
              joint depth to the
              standard two-to-one
              width-to-depth ratio,
              prevents three-sided
              adhesion failure,
              and extends caulk
              service life in wide
              joints that would
              otherwise stretch
              the caulk past its
              elongation limit
              during the first winter.
              An exterior caulking
              website that explains
              KC temperature swing
              and differential
              movement at dissimilar
              substrates, correct
              product selection
              for each joint type,
              and UV service life
              by exposure direction
              earns the homeowner
              who wants caulking
              that lasts more than
              two seasons before
              failing again.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before exterior caulking service
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC temperature swing failure — 100°F annual range, vinyl vs. wood differential expansion, why latex pulls away from vinyl",
                  "Product selection — latex vs. siliconized latex vs. polyurethane vs. silicone, what each does at each joint type",
                  "Exposure service life — south/west 5-8 years vs. north/east 8-12 years for same product in KC conditions",
                  "Backer rod use — 3/8-inch joint threshold, two-to-one width-to-depth ratio, three-sided adhesion failure prevention",
                  "Recaulk vs. window replacement — when joint failure is caulk age vs. when it indicates frame or rough opening failure",
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
                What your exterior caulking service website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Temperature swing section — KC 100°F annual range, differential movement at vinyl-to-wood joints, elongation requirements",
                  "Product guide — latex, siliconized latex, polyurethane, silicone — which joint gets which product and why",
                  "Exposure section — UV degradation by wall direction, KC annual sunlight, service life estimates by product and exposure",
                  "Backer rod section — when required, installation method, joint depth control, three-sided adhesion failure explanation",
                  "Inspection section — what failed caulk looks like (pulling from substrate, cracking, chalking, gap formation)",
                  "Quote form with window count, siding type, substrate types at joints, last recaulk date, painting planned",
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
                &ldquo;The product selection
                section is what separates
                my calls from the
                handyman who charges
                less. KC homeowners
                who had latex applied
                on vinyl windows
                and watched it fail
                in eighteen months
                now understand why
                when they read that
                latex elongation
                can&apos;t keep up with
                vinyl differential
                movement through
                a KC winter. They
                call asking specifically
                for polyurethane
                or silicone at the
                window joints and
                are not surprised
                when the estimate
                is higher than the
                last job. The exposure
                section also matters —
                customers with south-facing
                windows understand
                they are on a five-to-eight-year
                cycle, not a fifteen-year
                cycle, and they budget
                for it rather than
                being surprised
                when it fails early.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Greer, exterior caulking and weatherization, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An exterior caulking site with temperature swing section, product
                selection guide, and quote form starts at $200. A full site with
                exposure service life, backer rod guide, and inspection checklist
                is $425–$750. One full exterior recaulk job covers the cost. No
                contracts, no monthly fees.
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
