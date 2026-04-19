import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Sprinkler Repair Companies in Kansas City",
  description:
    "Custom websites for sprinkler repair, irrigation repair, and lawn irrigation companies in the Kansas City area. Show your KC freeze-thaw damage to irrigation lines and heads, backflow preventer winterization for KC frost line, and KC clay soil rotor head spacing requirements to win sprinkler repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/sprinkler-repair",
  },
};

export default function SprinklerRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Sprinkler Repair Companies in Kansas City",
    description: "Custom websites for sprinkler repair and irrigation repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Sprinkler Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their sprinkler heads are cracked every spring, whether they need a backflow preventer, and why parts of their lawn are dry despite running the system. A website that explains sprinkler repair earns the call from the homeowner whose irrigation system has freeze damage and who wants to understand what professional spring startup includes. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Sprinkler Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Sprinkler Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Sprinkler repair
              customers are
              KC homeowners
              whose irrigation
              system emerges
              from winter
              with cracked
              or broken heads —
              the result
              of water remaining
              in the lateral
              lines after
              the system
              was shut off
              without a
              compressed-air
              winterization
              blow-out in
              a region with
              a thirty-to-thirty-six
              inch frost
              line that
              reaches below
              the irrigation
              laterals installed
              at six to
              eight inches
              depth in a
              KC yard; homeowners
              who are seeing
              dry or wet
              spots in their
              lawn in summer
              and want to
              understand
              whether the
              symptom is
              from a broken
              rotor or spray
              head, a clogged
              nozzle from
              KC hard water
              mineral deposits,
              a zone that
              is not firing
              from a failed
              solenoid valve,
              or coverage
              gaps from
              heads that
              have settled
              below grade
              in KC clay
              soil that
              heaves in
              freeze-thaw
              cycles; or
              homeowners
              who received
              a notice from
              KC Water or
              Johnson County
              WPCC that
              their irrigation
              system must
              have a testable
              backflow preventer
              installed before
              the next irrigation
              season. The
              central education
              is KC freeze-thaw
              cycles as
              the primary
              cause of irrigation
              damage — Kansas
              City experiences
              fifty to fifty-five
              freeze-thaw
              cycles per
              winter, and
              any water
              remaining
              in irrigation
              laterals when
              temperature
              drops below
              thirty-two
              degrees expands
              as ice and
              splits the
              PVC lateral
              line or cracks
              the plastic
              body of rotor
              and spray
              heads — proper
              compressed-air
              blow-out as
              the winterization
              method that
              removes water
              from every
              zone of the
              lateral network,
              and backflow
              prevention
              as the code
              requirement
              that protects
              the KC municipal
              water supply
              from irrigation
              water siphoning
              back into
              the supply
              line during
              a pressure
              drop event —
              three things
              that determine
              whether a homeowner
              understands
              why a KC sprinkler
              system needs
              professional
              winterization
              and backflow
              compliance.
              KC freeze damage
              and winterization:
              Kansas City
              irrigation
              laterals are
              installed at
              six to eight
              inches below
              grade — shallower
              than the thirty-to-thirty-six
              inch KC frost
              line; the
              main supply
              line from
              the meter
              to the manifold
              is typically
              buried below
              frost depth,
              but the zone
              laterals are
              not; after
              system shutdown,
              the zone valves
              hold pressure
              and trap water
              in the laterals;
              gravity drain
              valves at
              low points
              drain some
              of this water
              but do not
              remove all
              of it from
              the complete
              lateral network;
              compressed-air
              blow-out using
              a fifty-to-one-hundred
              CFM compressor
              at forty-to-fifty
              PSI is the
              method that
              removes water
              from all lateral
              zones by operating
              each zone
              valve sequentially
              until only
              mist comes
              from the heads;
              a system that
              was not blown
              out in fall
              or was blown
              out inadequately
              will typically
              show cracked
              heads and
              split lateral
              sections at
              the first
              spring startup
              in a KC winter
              with sustained
              sub-freezing
              temperatures.
              Backflow prevention:
              the Kansas
              City Water
              Department
              and Johnson
              County require
              irrigation
              systems to
              have a testable
              backflow preventer —
              a pressure
              vacuum breaker
              or reduced
              pressure zone
              device — installed
              on the irrigation
              supply line
              between the
              meter and
              the zone manifold;
              a backflow
              preventer prevents
              irrigation
              water from
              being drawn
              back into
              the potable
              water supply
              during a
              water main
              break or
              pressure drop
              event — the
              irrigation
              water is not
              potable and
              contains fertilizer
              and pesticide
              residue; an
              RPZ device
              also requires
              annual testing
              by a licensed
              KC tester
              to verify
              that the check
              valves are
              closing properly;
              a system installed
              without a
              backflow preventer
              is not code-compliant
              in KC and
              creates liability
              for the homeowner
              if a contamination
              event occurs.
              A sprinkler
              repair website
              that explains
              KC freeze-thaw
              damage and
              compressed-air
              winterization
              requirements,
              common coverage
              failure causes —
              broken heads,
              clogged nozzles,
              failed solenoids,
              settled grade —
              and backflow
              preventer code
              requirements
              for KC irrigation
              earns the homeowner
              with a broken
              system who
              wants to understand
              what professional
              spring startup
              includes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before sprinkler repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC freeze damage — 50-55 freeze-thaw cycles, 6-8 inch lateral depth vs. 30-36 inch frost line, water remaining in lines",
                  "Winterization blow-out — 50-100 CFM compressor, 40-50 PSI, sequential zone operation, mist-only endpoint",
                  "Coverage failure diagnosis — broken head vs. clogged nozzle vs. failed solenoid vs. settled head grade",
                  "Backflow preventer — KC Water and JCWPCC requirement, PVB vs. RPZ device, annual testing requirement",
                  "Hard water nozzle clogging — KC 100-150 mg/L calcium in spray nozzle orifices, cleaning vs. replacement",
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
                What your sprinkler repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC freeze section — frost line vs. lateral depth, freeze damage types, why gravity drain isn't enough",
                  "Winterization section — compressed-air blow-out process, compressor sizing, zone sequence, what's included in professional winterization",
                  "Backflow section — KC code requirement, device types, annual testing process and cost",
                  "Spring startup section — what's checked, head adjustment, solenoid test, coverage audit",
                  "Coverage repair section — head replacement, solenoid diagnosis, hard water nozzle cleaning, settled head adjustment",
                  "Quote form with zone count, last winterization, backflow preventer present, dry/wet spots location",
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
                &ldquo;The winterization section
                books the fall
                jobs before
                homeowners
                skip it. KC
                homeowners
                who turned
                the system
                off themselves
                think they&apos;re
                done for the
                season — they
                don&apos;t know
                the zone valves
                are holding
                water in every
                lateral. After
                the section
                went up explaining
                that KC gets
                fifty freeze-thaw
                cycles and
                that gravity
                drain leaves
                water in the
                lines that
                splits PVC
                in a hard
                freeze, customers
                started booking
                blow-outs
                before the
                first frost
                instead of
                calling in
                spring with
                a list of
                cracked heads.
                The backflow
                section also
                brings in
                compliance
                jobs — KC homeowners
                who got a
                notice from
                the water
                department
                about an unregistered
                system call
                us because
                the page explains
                exactly what
                they need.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Gutierrez, sprinkler repair and irrigation services, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A sprinkler repair site with KC freeze damage section, winterization
                guide, and quote form starts at $200. A full site with backflow
                preventer compliance, spring startup checklist, and coverage repair
                content is $425–$750. One service call covers the cost. No contracts, no monthly fees.
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
