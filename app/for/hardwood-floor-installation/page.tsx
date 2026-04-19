import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Hardwood Floor Installation Companies in Kansas City",
  description:
    "Custom websites for hardwood floor installation, engineered hardwood, and wood floor companies in the Kansas City area. Show your acclimation process, KC humidity considerations, and installation method options to win hardwood floor installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hardwood-floor-installation",
  },
};

export default function HardwoodFloorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Hardwood Floor Installation Companies in Kansas City",
    description: "Custom websites for hardwood floor installation and engineered wood flooring companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Hardwood Floor Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether solid hardwood or engineered wood is better for KC's humidity swings, how long the floor needs to acclimate before installation, and whether they can install over a concrete slab. A website that explains these decisions earns the hardwood call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Hardwood Floor Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Hardwood Floor Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Hardwood floor installation
              customers are KC homeowners
              replacing carpet with
              something durable
              and real, homeowners
              extending existing
              hardwood from a
              living room into
              an adjacent hallway
              or bedroom, or
              homeowners finishing
              a new build and
              want wood flooring
              that matches what
              they see in design
              magazines. KC&apos;s
              humidity range —
              20% relative humidity
              in January through
              a heated house,
              70%+ in August —
              is the most important
              context for product
              and installation
              decisions. The
              central education
              is solid vs. engineered,
              acclimation, and
              installation method
              by subfloor type.
              Solid vs. engineered:
              solid hardwood is
              a single piece
              of wood milled
              to 3/4-inch thickness —
              it can be sanded
              and refinished
              multiple times
              over its life but
              is dimensionally
              unstable: a 3-inch
              wide solid plank
              can expand or contract
              up to 3/16 inch
              across its width
              between KC&apos;s January
              dry season and
              August humidity;
              engineered hardwood
              has a real wood
              veneer (typically
              1/12 to 3/4 inch)
              bonded to a plywood
              or HDF core —
              the cross-ply construction
              resists dimensional
              movement significantly
              better and is appropriate
              for installation
              over concrete or
              in areas with
              seasonal humidity
              swings above 30%;
              engineered with
              a 2mm or thicker
              veneer can be
              sanded once or
              twice before the
              veneer is exhausted.
              Acclimation: solid
              hardwood must
              acclimate to the
              installation environment
              before being installed —
              typically 3–5 days
              in the room at
              normal living conditions
              (65–75°F, 35–55%
              RH); the flooring
              should be stacked
              in the room with
              spacers between
              bundles to allow
              air circulation;
              KC homes that
              run forced-air
              heat in winter
              may drop to 25–30%
              RH in the installation
              area — acclimating
              during that period
              produces a floor
              that will gap
              in summer when
              the house reaches
              55%; acclimating
              during high-humidity
              months and installing
              with proper expansion
              gaps produces
              better long-term
              results. Installation
              methods: nail-down
              (cleats or staples)
              requires a 3/4-inch
              wood subfloor —
              the most common
              method for solid
              hardwood; nailing
              to oriented strand
              board requires
              confirming panel
              thickness and
              fastener schedule;
              glue-down is used
              over concrete
              or when sound
              control is a goal —
              urethane adhesive
              (Bostik Best, Sika
              T-55) bonds the
              plank directly
              to concrete after
              moisture testing;
              concrete moisture
              test: a calcium
              chloride test
              (ASTM F1869) measures
              moisture vapor
              emission — most
              hardwood adhesives
              allow up to 3 lbs/1,000
              sq ft/24 hours;
              floating (click
              or glue-at-joint)
              engineered floors
              are not fastened
              to the subfloor —
              an expansion gap
              of 1/2 inch at
              all walls allows
              the floor to move
              as a unit. Subfloor
              flatness: all methods
              require a subfloor
              flat to 3/16 inch
              in 10 feet —
              high spots are
              sanded and low
              spots filled with
              floor leveling
              compound before
              installation.
              A hardwood floor
              website that explains
              why KC humidity
              swings make engineered
              a better choice
              in many applications,
              how to acclimate
              correctly, and
              what concrete moisture
              testing actually
              involves earns
              the homeowner who
              knows what they
              want and wants
              to get it right.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hardwood floor installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Solid vs. engineered — KC humidity swing impact, dimensional movement in solid planks, refinish potential",
                  "Acclimation — time required, conditions needed, KC winter RH effect on acclimated floor",
                  "Installation methods — nail-down subfloor requirement, glue-down over concrete, floating expansion gap",
                  "Concrete moisture testing — ASTM F1869 calcium chloride test, acceptable emission rate by adhesive type",
                  "Subfloor flatness — 3/16-inch in 10-foot tolerance, high spot sanding, leveling compound for low spots",
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
                What your hardwood floor installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Solid vs. engineered section — KC humidity range, dimensional movement by plank width, veneer thickness guide",
                  "Acclimation guide — time and conditions required, KC winter RH warning, how to stack for airflow",
                  "Installation method section — nail-down, glue-down, floating — subfloor requirements for each",
                  "Concrete moisture section — calcium chloride test, acceptable limits, what to do if moisture is too high",
                  "Subfloor prep section — flatness tolerance, sanding high spots, leveling compound application",
                  "Quote form with room square footage, subfloor type (wood/concrete), solid or engineered preference, timeline",
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
                &ldquo;The humidity section was
                the thing that changed how
                customers thought about solid
                vs. engineered. Before, everyone
                wanted solid because they
                thought it was &apos;real wood&apos;
                and engineered was fake.
                After the section went up
                explaining what a 40-point
                humidity swing does to a
                3-inch solid plank between
                January and August, customers
                started asking whether their
                house had a humidifier, not
                which product was cheaper.
                Three customers switched
                to engineered after reading
                it and were happier long-term.
                The acclimation section also
                solved the scheduling problem —
                customers understood why I
                needed the materials delivered
                5 days early and stopped
                trying to have me install
                the day the pallet arrived.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Osei, hardwood and engineered floor installation, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A hardwood floor site with solid vs. engineered section,
                acclimation guide, and quote form starts at $200. A
                full site with installation methods, concrete moisture
                testing, and subfloor prep content is $425–$750. One
                room installation covers the cost. No contracts, no monthly fees.
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
