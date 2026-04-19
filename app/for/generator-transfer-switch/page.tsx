import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Generator Transfer Switch Companies in Kansas City",
  description:
    "Custom websites for generator transfer switch installation, interlock kit, and standby generator connection companies in the Kansas City area. Show your KC manual vs. automatic transfer switch options, interlock kit code compliance, and generator sizing for KC homes to win transfer switch contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/generator-transfer-switch",
  },
};

export default function GeneratorTransferSwitchPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Generator Transfer Switch Companies in Kansas City",
    description: "Custom websites for generator transfer switch installation and interlock kit companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Generator Transfer Switch Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether an interlock kit is as safe as a transfer switch, why running a generator without a transfer switch is dangerous, and how many circuits a portable generator can actually power. A website that explains backfeed danger and transfer switch options earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Generator Transfer Switch Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Generator Transfer Switch</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Generator transfer switch
              customers are KC homeowners
              who already own
              a portable generator
              and learned — usually
              after a winter ice
              storm or summer
              derecho knocked
              out power across
              the metro — that
              plugging a generator
              directly into a
              dryer outlet or
              using extension
              cords throughout
              the house is not
              a real solution;
              or homeowners installing
              a new standby generator
              who need a code-compliant
              automatic transfer
              switch so the generator
              can start and connect
              automatically when
              utility power fails.
              The central education
              is backfeed danger:
              when a generator
              is connected to
              the house wiring
              without a transfer
              switch that first
              disconnects from
              the utility, generator
              power flows back
              through the meter
              and onto the utility
              lines — this can
              electrocute a KC
              utility lineworker
              who is working
              on a line they
              believe is de-energized;
              it also damages
              the generator when
              utility power returns
              and the two sources
              try to sync; this
              is why KC code
              requires a transfer
              mechanism that
              prevents simultaneous
              connection to both
              utility and generator.
              Transfer switch options:
              an interlock kit
              is a mechanical
              device installed
              on the existing
              main panel that
              physically prevents
              the main breaker
              and the generator
              input breaker from
              both being on simultaneously —
              it is code-compliant
              in Kansas City
              when the kit is
              listed for the
              specific panel model;
              a manual transfer
              switch (six-to-ten-circuit
              subpanel) is a
              dedicated subpanel
              where selected
              critical circuits
              are moved — furnace,
              refrigerator, sump
              pump, lighting —
              and connected to
              the generator input;
              an automatic transfer
              switch (ATS) monitors
              utility power and
              automatically transfers
              to the standby
              generator within
              seconds of an outage —
              required for whole-house
              standby generators
              because the generator
              starts and connects
              without manual
              intervention. Generator
              sizing for KC homes:
              a whole-house standby
              generator for a
              typical two-thousand-to-three-thousand-square-foot
              KC home with gas
              furnace, central
              air, and standard
              appliances requires
              a twenty-to-twenty-two
              kilowatt unit;
              a portable generator
              used with a transfer
              switch for critical
              circuits only —
              furnace, refrigerator,
              sump pump, some
              lighting — can
              manage with five
              to seven kilowatts;
              attempting to run
              central air conditioning
              from a portable
              generator requires
              a minimum of five
              to seven kilowatts
              for the AC alone
              and is not practical
              for most portable
              units used simultaneously
              with other loads.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before generator transfer switch installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Backfeed danger — why generator without transfer switch can kill utility workers, why it's illegal in KC",
                  "Interlock kit vs. transfer switch — mechanical interlock on existing panel, code compliance by panel model",
                  "Manual vs. automatic transfer switch — critical circuit subpanel vs. ATS for standby whole-house generator",
                  "Generator sizing — portable vs. standby, what critical circuits require, AC load reality for portable units",
                  "Permit requirement — KC electrical permit for transfer switch, inspection, utility notification for standby",
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
                What your generator transfer switch website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Backfeed section — what happens when generator feeds the utility grid, why KC requires transfer disconnection",
                  "Interlock kit section — how mechanical interlock works, which KC panel brands are listed, permit requirements",
                  "Manual transfer switch section — critical circuit selection, subpanel installation, portable generator connection",
                  "ATS section — automatic standby generator connection, transfer time, utility notification in KC",
                  "Generator sizing section — critical load calculation, portable limits, standby sizing for KC climate",
                  "Quote form with generator type and kW, panel brand and age, critical circuits needed, existing generator present",
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
                &ldquo;The backfeed section is
                what converts homeowners
                who think they already
                solved the problem by
                plugging a generator into
                their dryer outlet with
                a suicide cord. In KC
                after every major ice
                storm, I get calls from
                homeowners who rigged
                something up during the
                outage and want to do
                it properly before next
                winter. The section explaining
                that their improvised connection
                was pushing power onto
                the utility line — and
                could have killed a lineman
                trying to restore their
                power — lands differently
                than just saying it&apos;s
                against code. The interlock
                kit section converts the
                price-sensitive customers
                who want a whole-house
                solution but balk at a
                six-circuit transfer subpanel
                — an interlock kit on
                their Square D or Siemens
                panel is half the cost
                and fully code-compliant
                in KC.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Hennessy, electrical panel and generator work, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A generator transfer switch site with backfeed danger section,
                interlock vs. transfer switch comparison, and quote form starts
                at $200. A full site with generator sizing guide, ATS section,
                and KC permit information is $425–$750. One transfer switch
                installation covers the cost. No contracts, no monthly fees.
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
