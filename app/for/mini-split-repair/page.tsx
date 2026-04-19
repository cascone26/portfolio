import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Mini-Split Repair Companies in Kansas City",
  description:
    "Custom websites for mini-split repair, ductless AC repair, and inverter heat pump service companies in the Kansas City area. Show your refrigerant leak diagnosis, inverter board repair, and error code troubleshooting to win mini-split service contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/mini-split-repair",
  },
};

export default function MiniSplitRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Mini-Split Repair Companies in Kansas City",
    description: "Custom websites for mini-split repair and ductless HVAC service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Mini-Split Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Mini-split owners want to know what their error code means, why the unit blows warm air on heat mode in KC winter, and whether a refrigerant leak can be repaired or requires coil replacement. A website that explains inverter diagnostics and common failure modes earns the repair call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Mini-Split Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Mini-Split Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Mini-split repair customers
              are homeowners whose
              ductless unit stopped
              cooling or heating,
              is displaying an
              error code they
              cannot decode, is
              leaking water from
              the indoor head
              unit, or is running
              constantly without
              reaching setpoint
              — common KC summer
              complaints when
              outdoor temps push
              95–100°F and the
              unit struggles to
              reject heat through
              the outdoor coil.
              The central education
              is how inverter-driven
              mini-splits differ
              from single-stage
              equipment and what
              that means for diagnosis:
              a mini-split uses
              a variable-speed
              inverter compressor
              that modulates output
              from 15–100% capacity —
              fault codes reflect
              inverter board failures,
              thermistor failures,
              and refrigerant charge
              errors differently
              than a fixed-speed
              system. Error codes:
              manufacturer-specific
              but patterns are
              consistent — Mitsubishi
              E6 = communication
              fault between indoor
              and outdoor unit
              (wiring or control
              board); Daikin U4 =
              outdoor unit communication
              loss; LG CH10 = indoor
              thermistor failure;
              Fujitsu error blink
              sequences identify
              zone (one blink
              = outdoor fan motor,
              two blinks = indoor
              fan motor, etc.).
              Refrigerant undercharge:
              mini-splits are factory-charged
              for a specific line
              set length — an
              installation with
              a longer line set
              requires additional
              refrigerant per
              manufacturer specification
              (typically 0.2 oz/ft
              for R-410A over
              25 feet); undercharge
              from an improper
              installation causes
              low suction pressure,
              ice formation on
              the indoor coil,
              and reduced capacity.
              Refrigerant leak:
              Schrader valve core
              leaks and flare fitting
              leaks are repairable;
              pinhole leaks in
              the evaporator or
              condenser coil require
              coil replacement —
              coil repair brazing
              on aluminum evaporators
              is not recommended
              due to porosity.
              Indoor drain pan
              overflow: the drain
              pan beneath the
              evaporator coil overflows
              when the condensate
              drain is clogged
              with mold or algae —
              a common KC humid-summer
              failure; some units
              have a float switch
              that shuts down
              the unit on pan
              overflow; others
              drip water onto
              the wall. Dirty
              indoor coil: a
              coated evaporator
              coil reduces heat
              transfer, drops
              static pressure
              across the coil,
              and causes the
              unit to run at
              high capacity longer —
              coil cleaning with
              no-rinse foam coil
              cleaner restores
              rated capacity.
              A mini-split website
              that explains error
              code categories,
              why refrigerant
              charge depends on
              line set length,
              and what drain pan
              overflow means for
              indoor damage earns
              the homeowner staring
              at a blinking fault
              light.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before calling a mini-split repair company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Error code meaning — manufacturer-specific fault codes, communication errors vs. sensor vs. refrigerant faults",
                  "Refrigerant undercharge — line set length effect, factory charge specification, symptoms of low charge",
                  "Drain pan overflow — condensate drain clog, mold growth, float switch shutdown vs. wall drip",
                  "Dirty coil diagnosis — reduced capacity symptoms, how coil coating restricts heat transfer",
                  "Repair vs. replace coil — when coil repair is viable vs. when coil replacement is the right call",
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
                What your mini-split repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Error code guide — major brand fault codes, communication vs. thermistor vs. refrigerant error categories",
                  "Inverter system explainer — how variable-speed compressors differ from single-stage, what that means for diagnosis",
                  "Refrigerant charge section — line set length effect, R-410A add rate, undercharge vs. overcharge symptoms",
                  "Drain system section — condensate pan, drain line routing, clog prevention, float switch function",
                  "Coil cleaning section — no-rinse foam process, capacity restoration, how often to service in KC humidity",
                  "Service form with brand, model, error code displayed, symptoms, line set length if known",
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
                &ldquo;Most of my mini-split
                calls started with a homeowner
                reading the error code off
                their Mitsubishi remote and
                having no idea what it meant.
                The website section on communication
                faults vs. refrigerant faults
                vs. sensor codes — with the
                actual codes for the brands
                I service — cut the diagnostic
                conversation in half. The
                drain pan section also stopped
                two emergency calls: customers
                who read it cleared their
                own condensate line before
                the water hit the floor and
                called me for a proper cleaning
                instead of an emergency.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Nguyen, ductless HVAC service, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A mini-split repair site with error code guide,
                refrigerant charge section, and service form starts
                at $200. A full site with inverter system explainer,
                drain section, and coil cleaning content is $425–$750.
                One mini-split repair call covers the cost. No contracts,
                no monthly fees.
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
