import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Sump Pump Repair Companies in Kansas City",
  description:
    "Custom websites for sump pump repair, sump pump replacement, and battery backup installation companies in the Kansas City area. Show your pump types, float switch failure signs, and backup system options to win sump pump contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/sump-pump-repair",
  },
};

export default function SumpPumpRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Sump Pump Repair Companies in Kansas City",
    description: "Custom websites for sump pump repair and backup system companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Sump Pump Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their sump pump failed during the last storm, whether a battery backup is worth the cost, and what the difference is between a $100 pump and a $400 cast iron model. A website that explains float switch failure, pump types, and backup systems earns the replacement call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Sump Pump Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Sump Pump Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Sump pump repair
              and replacement
              customers are homeowners
              who found water
              in the basement
              after a storm,
              noticed the pump
              running continuously
              without shutting
              off, heard the
              pump cycling rapidly
              on and off (short-cycling),
              or discovered
              the pump is dead
              in the pit during
              a routine check.
              The central education
              is how sump pumps
              fail and what
              determines whether
              repair or replacement
              is correct: the
              most common failure
              mode is float
              switch failure —
              the float rises
              with water level
              to trigger the
              pump, and vertical
              float switches
              (tethered to the
              pump housing)
              can become tangled
              or stuck against
              the pit wall;
              wide-angle tethered
              floats require
              a pit diameter
              of at least 18"
              to swing freely.
              Continuous running
              without shutting
              off: either the
              float is stuck
              in the up position
              (triggering constantly),
              the check valve
              has failed (allowing
              discharged water
              to return to
              the pit and re-trigger
              the pump), or
              the pump capacity
              is undersized
              for the groundwater
              inflow rate. Short-cycling:
              the pump reaches
              shut-off water
              level and shuts
              off, water returns
              through a failed
              check valve immediately,
              pump re-triggers —
              rapid cycling
              burns motor windings.
              Submersible pumps:
              motor and pump
              are sealed in
              the same housing,
              submerged in the
              pit — thermoplastic
              housing (Harbor
              Freight tier)
              degrades under
              continuous use;
              cast iron housing
              (Zoeller M53,
              Liberty 257) dissipates
              heat into the
              surrounding water,
              dramatically extending
              motor life under
              continuous operation.
              Battery backup
              systems (Basement
              Watchdog, Glentronics):
              a 12V deep-cycle
              marine battery
              powers a DC pump
              that activates
              when the primary
              pump fails or
              when utility
              power is out —
              KC severe storm
              seasons with
              frequent power
              outages make
              battery backup
              the single highest-value
              addition for
              homes with finished
              basements. Water-powered
              backup (Basepump):
              uses municipal
              water pressure
              to create suction
              via Venturi effect —
              no battery maintenance,
              but requires
              at least 40 PSI
              water pressure
              and discharges
              2 gallons of
              municipal water
              for every gallon
              pumped. A sump
              pump website
              that explains
              float switch failure
              modes, why cast
              iron outperforms
              thermoplastic
              under continuous
              use, and why
              battery backup
              matters specifically
              in KC's storm
              season earns
              the homeowner
              who found 3 inches
              of water in the
              basement during
              the last tornado
              warning.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before replacing a sump pump
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Float switch failure — tethered vs. vertical float, pit size requirement, how floats get stuck",
                  "Continuous running causes — stuck float, failed check valve, undersized pump for inflow rate",
                  "Cast iron vs. thermoplastic — heat dissipation, motor lifespan under continuous operation",
                  "Battery backup systems — how they activate, battery maintenance, what power outages mean in KC storm season",
                  "Check valve function — why a failed check valve causes short-cycling and motor burnout",
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
                What your sump pump repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Float switch guide — tethered vs. vertical, pit diameter requirements, stuck float diagnosis",
                  "Failure mode section — continuous running, short-cycling, silent failure — causes and indicators",
                  "Pump material comparison — cast iron vs. thermoplastic housing, heat dissipation, lifespan data",
                  "Battery backup section — DC backup pump, battery maintenance, why KC storm seasons make it worth it",
                  "Check valve section — function, failure signs, role in continuous running and short-cycling",
                  "Service form with pump brand, age, failure symptoms, pit size, basement finish level",
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
                &ldquo;Customers kept buying
                the $89 pump from the
                hardware store and calling
                me eighteen months later
                when it burned out. The
                website section on cast
                iron vs. thermoplastic housing
                and heat dissipation changed
                that — customers arrived
                understanding why continuous
                use kills cheap pumps. The
                battery backup section was
                the biggest revenue change:
                after the derecho two summers
                ago, every customer who
                had read about KC storm
                season and power outages
                was asking for the backup
                system without prompting.
                I installed more backup
                systems in one month than
                the previous two years combined.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Winters, basement waterproofing, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A sump pump site with float switch guide,
                pump material comparison, and service form
                starts at $200. A full site with failure
                mode section, battery backup guide, and
                check valve content is $425–$750. One
                pump replacement with battery backup covers
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
