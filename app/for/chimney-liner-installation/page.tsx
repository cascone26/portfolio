import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Chimney Liner Installation Companies in Kansas City",
  description:
    "Custom websites for chimney liner installation, chimney relining, and stainless steel liner companies in the Kansas City area. Show your KC clay tile liner spalling from freeze-thaw cycling, stainless steel liner sizing for gas vs. wood appliances, and carbon monoxide risk from deteriorated chimney liners to win chimney liner installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/chimney-liner-installation",
  },
};

export default function ChimneyLinerInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Chimney Liner Installation Companies in Kansas City",
    description: "Custom websites for chimney liner installation and chimney relining companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Chimney Liner Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their chimney liner is safe to use, what the inspector found when he wrote "deteriorated liner" on the report, and whether a stainless steel liner insert or full reline is the correct repair for their fireplace or gas appliance. A website that explains chimney liner installation earns the call from the homeowner who received a level two inspection report and doesn't know what to do with it. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Chimney Liner Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Chimney Liner Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Chimney liner
              installation customers
              are KC homeowners
              who received
              a level two
              chimney inspection
              report — typically
              triggered by
              a home sale,
              a chimney fire,
              or an insurance
              policy renewal —
              that identified
              deteriorated
              clay tile liner
              sections, spalling,
              offset joints,
              or missing mortar
              between liner
              sections; homeowners
              who converted
              from oil to
              gas heating
              and were told
              the existing
              clay tile liner
              is not sized
              correctly for
              the gas appliance
              flue gases —
              gas appliances
              produce cooler,
              wetter exhaust
              than oil or
              wood and require
              a smaller diameter
              liner to maintain
              the draft velocity
              that prevents
              condensation
              and corrosion
              inside the liner;
              or homeowners
              who want to
              add a wood-burning
              insert to an
              existing fireplace
              and need to
              understand whether
              the existing
              liner meets
              the insert manufacturer's
              requirements
              or requires
              a new stainless
              steel liner
              to the insert
              collar. The
              central education
              is KC freeze-thaw
              cycling as
              the primary
              clay tile liner
              deterioration
              mechanism, the
              liner sizing
              difference between
              gas and wood-burning
              appliances,
              and carbon
              monoxide risk
              as the safety
              consequence
              of using an
              appliance vented
              through a deteriorated
              liner — three
              things that
              determine whether
              a homeowner
              understands
              why a level
              two inspection
              finding of deteriorated
              liner is not
              a cosmetic issue
              but a venting
              safety requirement.
              KC freeze-thaw
              liner deterioration:
              clay tile chimney
              liner sections
              are approximately
              two feet long
              and are mortared
              together at
              the joints inside
              the chimney
              structure; KC's
              fifty to fifty-five
              annual freeze-thaw
              cycles cause
              moisture that
              has infiltrated
              the mortar joints
              to expand and
              contract — a
              process that
              works the mortar
              out of the
              joints over
              ten to twenty
              years; a chimney
              on a KC home
              built before
              nineteen ninety
              has clay tile
              liner that
              has experienced
              over five hundred
              freeze-thaw
              cycles and
              may have joint
              deterioration
              that is not
              visible from
              a level one
              inspection;
              spalling —
              where the clay
              tile surface
              flakes and
              pieces fall
              into the firebox —
              is the visible
              sign of advanced
              liner deterioration
              and indicates
              that the structural
              integrity of
              the liner sections
              is compromised.
              Gas appliance
              liner sizing:
              gas appliances —
              furnaces, boilers,
              and water heaters
              vented to a
              chimney — produce
              exhaust at
              a lower temperature
              than oil or
              wood combustion;
              cooler exhaust
              condenses on
              the inside
              of an oversized
              clay tile liner
              before it exits —
              the condensate
              is acidic and
              corrodes clay
              tile and mortar
              rapidly; the
              NFPA 211 standard
              requires that
              gas appliance
              venting be
              sized to the
              appliance BTU
              output using
              the gas vent
              sizing tables —
              most KC homes
              with a gas
              furnace vented
              to a clay tile
              chimney sized
              for oil require
              a stainless
              steel liner
              insert sized
              correctly for
              the gas output;
              a type B
              gas vent liner
              — double-wall
              aluminum — is
              appropriate
              for category
              one gas appliances;
              a stainless
              steel liner
              is required
              for category
              three and four
              appliances and
              for all wood-burning
              inserts. Carbon
              monoxide risk:
              a deteriorated
              clay tile liner
              with offset
              joints or spalling
              sections allows
              flue gases
              to exit through
              the chimney
              masonry into
              the living
              space; carbon
              monoxide from
              gas appliance
              combustion
              gases that
              bypass the
              liner is the
              primary cause
              of residential
              CO poisoning
              events associated
              with furnace
              and water heater
              operation;
              a level two
              inspection
              finding of
              deteriorated
              liner in a
              home with gas
              appliances
              vented to that
              chimney is
              a safety finding,
              not a maintenance
              finding — the
              appliance should
              not be operated
              until the liner
              is repaired
              or replaced.
              A chimney liner
              installation
              website that
              explains KC
              freeze-thaw
              liner deterioration,
              gas appliance
              liner sizing
              requirements,
              and carbon
              monoxide risk
              from deteriorated
              liners earns
              the homeowner
              who received
              a level two
              inspection report
              and needs to
              understand the
              urgency.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before chimney liner installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC freeze-thaw liner damage — 50-55 cycles/year, mortar joint working, 500+ cycles on pre-1990 chimneys",
                  "Gas vs. wood liner sizing — NFPA 211 BTU sizing tables, condensate from oversized liner, Type B vs. stainless steel",
                  "Carbon monoxide risk — gas appliance CO from liner bypass, level two inspection urgency, appliance shutdown protocol",
                  "Level two inspection findings — what deteriorated liner means, offset joints, spalling tile, mortar missing",
                  "Stainless steel liner types — flexible 316L for wood, rigid for straight runs, flexible aluminum for gas category 1",
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
                What your chimney liner installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Freeze-thaw section — KC cycle count, mortar joint moisture expansion, spalling as advanced deterioration indicator",
                  "Gas sizing section — BTU output to liner diameter tables, condensate from oversized clay tile, Type B vs. stainless criteria",
                  "CO risk section — deteriorated liner flue bypass, safety finding vs. maintenance finding, appliance shutdown requirement",
                  "Liner type section — flexible 316L stainless for wood insert, Type B aluminum for gas, HeatFab vs. flexible options",
                  "Level two inspection section — what triggered inspection, what finding means, required repair timeline and urgency",
                  "Quote form with chimney age, appliance type vented (gas/oil/wood), inspection finding, number of flues, liner access",
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
                &ldquo;The carbon monoxide
                section is what
                makes the inspection
                report actionable.
                KC homeowners
                who get a level
                two inspection
                at closing see
                &apos;deteriorated liner&apos;
                and think it&apos;s
                a cosmetic issue
                they can defer.
                After the section
                went up explaining
                that a deteriorated
                liner on a gas
                furnace flue
                allows carbon
                monoxide to
                exit into the
                living space,
                customers stopped
                treating it
                as a negotiating
                point and started
                treating it
                as a safety
                repair. The gas
                sizing section
                also wins the
                oil-to-gas conversion
                jobs — KC homeowners
                who converted
                from oil and
                were never told
                the existing
                liner is oversized
                for gas understand
                after reading
                the page why
                the furnace
                efficiency is
                lower than it
                should be and
                why the liner
                is corroding
                faster than expected.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — V. Kowalski, chimney liner installation and chimney relining, Kansas City, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A chimney liner installation site with KC freeze-thaw deterioration
                section, liner sizing guide, and quote form starts at $200. A full site
                with carbon monoxide risk explanation, gas appliance sizing tables, and
                level two inspection content is $425–$750. One liner installation job
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
