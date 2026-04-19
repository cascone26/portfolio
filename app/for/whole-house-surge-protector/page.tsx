import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Whole House Surge Protector Companies in Kansas City",
  description:
    "Custom websites for whole house surge protection, panel-mounted surge protector installation, and electrical surge protection companies in the Kansas City area. Show your KC lightning risk, joule rating vs. MOV technology, and UL 1449 listing requirements to win surge protection contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/whole-house-surge-protector",
  },
};

export default function WholeHouseSurgeProtectorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Whole House Surge Protector Companies in Kansas City",
    description: "Custom websites for whole house surge protection and panel-mounted surge protector installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Whole House Surge Protector Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a whole-house surge protector at the panel actually protects against lightning, how it differs from a power strip surge protector, and what joule rating means for their HVAC and appliances. A website that explains MOV technology and UL 1449 listing earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Whole House Surge Protection in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Whole House Surge Protector</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Whole-house surge protector
              customers are KC homeowners
              who lost an HVAC
              system, refrigerator,
              or television to
              a power surge during
              a thunderstorm —
              Kansas City is located
              in a region with
              above-average lightning
              ground strike frequency
              due to its position
              on the edge of
              the Great Plains
              where warm Gulf
              moisture meets
              cold fronts —
              or homeowners who
              recently had a
              new HVAC system,
              variable-speed
              pool pump, or smart
              appliances installed
              and were advised
              by the installer
              to add surge protection
              for the electronics-heavy
              equipment. The central
              education is why
              a panel-mounted
              whole-house surge
              protector is different
              from a power strip:
              a power strip surge
              protector contains
              metal oxide varistors
              (MOVs) that clamp
              voltage spikes
              at the individual
              outlet — it protects
              only what is plugged
              into it and cannot
              handle a large
              direct surge before
              failing; a whole-house
              surge protector
              (also called a
              Type 1 or Type 2
              SPD — Surge Protective
              Device) is installed
              at the main electrical
              panel and clamps
              voltage surges
              on all circuits
              in the house simultaneously
              before the surge
              energy reaches
              any connected load;
              it is rated in
              kiloamperes (kA)
              of surge current
              it can handle —
              a residential whole-house
              SPD is typically
              rated at forty
              to one hundred
              kA; the joule
              rating on power
              strips is not
              the correct comparison
              metric for panel-mounted
              SPDs — the kA
              rating and UL 1449
              listing are the
              relevant performance
              indicators. Internal
              vs. external surges:
              approximately eighty
              percent of surge
              damage in homes
              comes not from
              lightning but from
              internal surges —
              voltage spikes
              caused by large
              motors starting
              (HVAC compressors,
              refrigerators,
              pool pumps) creating
              transient voltage
              on the same circuits
              as sensitive electronics;
              a whole-house SPD
              at the panel catches
              both external surges
              from the utility
              and internal surges
              from motor loads.
              Layered protection:
              a whole-house SPD
              at the panel does
              not eliminate the
              value of a point-of-use
              surge protector
              at expensive electronics —
              the panel device
              handles the bulk
              of the surge energy
              but may not reduce
              voltage spikes
              to safe levels
              for microprocessor-based
              equipment; the
              recommended approach
              is panel SPD plus
              point-of-use protection
              at televisions,
              computers, and
              the HVAC control
              board. A KC whole-house
              surge protection
              website that explains
              why the Great Plains
              lightning risk
              is real, what MOV
              technology actually
              clamps, and why
              panel installation
              covers circuits
              a power strip
              never will earns
              the homeowner
              replacing their
              second HVAC board
              in five years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before whole-house surge protector installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Panel SPD vs. power strip — how panel-mounted SPD covers all circuits, why kA rating matters over joule rating",
                  "KC lightning risk — Great Plains storm frequency, utility surge entry point, why KC homes have above-average exposure",
                  "Internal surge sources — HVAC compressor startup transients, refrigerator motor surges, 80% of damage is internal",
                  "UL 1449 listing — what the listing requires, why unlisted surge devices fail silently without protection",
                  "Layered protection — panel SPD plus point-of-use for sensitive electronics, HVAC board protection strategy",
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
                What your whole-house surge protection website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC lightning section — Great Plains storm frequency, typical annual ground strike density, utility surge entry",
                  "Panel SPD explanation — MOV clamping technology, kA rating, Type 1 vs. Type 2 classification",
                  "Internal surge section — compressor and motor startup transients, why HVAC boards fail without protection",
                  "UL 1449 section — what the listing tests for, how to identify a compliant device vs. generic strip",
                  "Layered protection section — panel + point-of-use combination, where to add secondary protection",
                  "Quote form with panel size and age, recent surge damage, HVAC system age, electronics value in home",
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
                &ldquo;The internal surge section
                converts homeowners who
                think surge protection
                is only for lightning.
                KC HVAC installers tell
                customers to get panel
                protection but don&apos;t
                explain why — after the
                section explaining that
                their own compressor
                creates transient voltage
                spikes that kill the control
                board over time, customers
                stop treating it as optional.
                I also get calls specifically
                from homeowners who just
                replaced a variable-speed
                HVAC board for twelve
                hundred dollars and want
                to make sure it doesn&apos;t
                happen again. The UL 1449
                section also prevents
                the &apos;I already have
                surge protectors on my
                power strips&apos; objection
                — homeowners understand
                the distinction after
                reading it.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Wallace, electrical panel work and surge protection, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A whole-house surge protection site with KC lightning section,
                panel SPD explanation, and quote form starts at $200. A full
                site with internal surge guide, UL 1449 section, and layered
                protection plan is $425–$750. One HVAC board replacement would
                have paid for the site twice over. No contracts, no monthly fees.
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
