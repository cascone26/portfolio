import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Attic Insulation Installation Companies in Kansas City",
  description:
    "Custom websites for attic insulation installation, attic air sealing, and blown-in insulation companies in the Kansas City area. Show your KC Climate Zone 4A R-49 standard, attic bypass air sealing, and ice dam prevention through insulation to win attic insulation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/attic-insulation-installation",
  },
};

export default function AtticInsulationInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Attic Insulation Installation Companies in Kansas City",
    description: "Custom websites for attic insulation installation and attic air sealing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Attic Insulation Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what R-value their attic actually has versus what KC requires, whether blown-in insulation on top of old batts is the right approach or whether the old insulation should come out first, and whether air sealing matters more than the R-value number. A website that explains attic insulation earns the call from the homeowner whose energy bills are high and whose neighbor&apos;s roof loses snow faster than theirs. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Attic Insulation Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Attic Insulation Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Attic insulation installation
              customers are KC homeowners
              whose energy bills
              are consistently higher
              than neighbors with
              similar square footage
              — a pattern that indicates
              conditioned air is
              escaping through the
              attic floor into the
              unconditioned attic
              space rather than
              staying in the living
              area; homeowners who
              experienced an ice
              dam event and want
              to address the root
              cause — the interior
              heat loss through
              the attic floor that
              warms the roof deck
              and causes snow melt
              at the roof surface
              while the eave stays
              cold; or homeowners
              who had a home energy
              audit and were told
              their attic insulation
              is at R-11 or R-19
              when Energy Star and
              the KC Climate Zone
              4A standard recommends
              R-49 to R-60. The
              central education
              is KC Climate Zone
              4A R-value standard,
              attic bypass air
              sealing as the prerequisite
              step, and blown-in
              versus batt installation
              method — three things
              that determine whether
              a homeowner understands
              that adding insulation
              on top of compromised
              air sealing is half
              a job. KC Climate
              Zone 4A standard:
              KC is classified as
              Climate Zone 4A —
              mixed-humid — by
              the DOE; Energy Star
              recommends R-49 to
              R-60 attic insulation
              for Zone 4A; the
              current International
              Energy Conservation
              Code requires R-49
              for KC area new construction;
              homes built before
              1980 were constructed
              under codes that
              required R-11 to
              R-19 — a deficit
              of thirty to forty-eight
              R-value units relative
              to current standard;
              homes built between
              1980 and 2000 often
              have R-30 batts installed
              at the attic floor
              — adequate at construction
              but subject to settling
              and compression that
              reduces effective
              R-value over twenty-five
              years of service;
              the attic floor is
              the boundary between
              conditioned and unconditioned
              space — every R-value
              unit below standard
              represents heat that
              leaves the living
              space and must be
              replaced by the furnace
              or AC, directly increasing
              the utility bill.
              Attic bypass air
              sealing: heat rises
              into the attic not
              only through the
              insulation itself
              but through penetrations
              in the attic floor
              called bypasses —
              open top plates
              where interior partition
              walls meet the attic
              floor framing, recessed
              light can housings
              that allow warm air
              to rise directly
              into the attic from
              the room below, attic
              hatch gaps, and bathroom
              fan duct penetrations;
              bypasses allow warm
              air to bypass the
              insulation layer
              entirely — no R-value
              stops convective
              air movement; air
              sealing closes these
              bypasses with canned
              foam or rigid blocking
              before insulation
              is installed; a
              blower door test
              measures the current
              air leakage rate
              and confirms whether
              bypasses have been
              successfully sealed;
              adding R-30 of blown
              insulation over unsealed
              bypasses recovers
              less than half the
              theoretical R-value
              gain — the bypasses
              continue to transfer
              heat through open
              air movement. Blown-in
              versus batt: blown-in
              cellulose or fiberglass
              installed by a machine-blown
              process fills irregular
              joist cavities and
              achieves consistent
              depth without gaps
              or compression — batts
              cut to fit around
              obstructions frequently
              leave gaps at the
              cut edges and compress
              against pipes or
              framing members,
              reducing effective
              R-value in those
              locations; blown-in
              on top of existing
              batts is acceptable
              when the existing
              batts are dry, not
              compressed, and laid
              flat — the blown-in
              adds to the existing
              R-value directly;
              blown-in at the required
              depth for R-49 to
              R-60 in KC typically
              requires fourteen
              to eighteen inches
              of settled depth
              depending on the
              material. An attic
              insulation installation
              website that explains
              KC Zone 4A R-49
              standard, air sealing
              as the prerequisite
              job, and the blown-in
              method that fills
              irregular attic floors
              earns the homeowner
              whose furnace runs
              longer than the neighbors&apos;.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before attic insulation installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC Climate Zone 4A standard — R-49 to R-60 Energy Star, pre-1980 homes at R-11-19, 2000s homes at R-30 with settling",
                  "Air sealing first — top plate bypasses, can light penetrations, attic hatch, why insulation on unsealed bypasses underperforms",
                  "Blown-in vs. batt — consistent depth, irregular cavity fill, adding on top of existing batts when dry and flat",
                  "Ice dam connection — attic heat loss warms roof deck, insufficient insulation is the root cause of ice dam formation",
                  "Energy bill correlation — R-value deficit directly increases furnace and AC runtime, payback calculation",
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
                What your attic insulation installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Zone 4A section — R-49-60 standard, pre-1980 and 1980-2000 era actual R-value, settling and compression over time",
                  "Air sealing section — bypass types, can light and top plate penetrations, why sealing before insulating is required",
                  "Method section — blown-in cellulose vs. fiberglass, adding on top of existing batts, 14-18 inch depth at R-49",
                  "Ice dam section — roof deck warming from attic heat loss, how insulation upgrade prevents recurrence",
                  "Rebate section — KCPL and Evergy rebate programs for insulation upgrades, federal tax credit eligibility",
                  "Quote form with home age, current attic depth estimate, ice dam history, energy bill concern, blower door test done",
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
                &ldquo;The air sealing section
                doubled my average
                job size. KC homeowners
                called wanting blown-in
                on top of their old
                batts and expected
                a one-day job at
                a low price. After
                the section went
                up explaining that
                unsealed bypasses
                move as much heat
                as the insulation
                deficit itself and
                that air sealing
                is done first while
                the floor is accessible,
                customers started
                approving both the
                sealing and the insulation
                together. The ice
                dam section also
                drove calls I wasn&apos;t
                getting before —
                KC homeowners who
                had ice damage two
                winters in a row
                started calling for
                the insulation upgrade
                specifically after
                reading that their
                house produces ice
                dams because heat
                escapes through the
                attic floor. Those
                customers are pre-sold
                on the full job.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Beaumont, attic insulation and air sealing, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An attic insulation site with Climate Zone 4A standard section,
                air sealing prerequisite guide, and quote form starts at $200. A
                full site with ice dam prevention connection, blown-in method, and
                rebate program content is $425–$750. One attic insulation job
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
