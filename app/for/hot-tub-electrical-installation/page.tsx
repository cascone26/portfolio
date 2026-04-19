import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Hot Tub Electrical Installation Companies in Kansas City",
  description:
    "Custom websites for hot tub electrical installation, spa wiring, and 240V hot tub circuit companies in the Kansas City area. Show your KC GFCI disconnect requirements, bonding and grounding rules, and 50-amp circuit specifications to win hot tub wiring contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hot-tub-electrical-installation",
  },
};

export default function HotTubElectricalInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Hot Tub Electrical Installation Companies in Kansas City",
    description: "Custom websites for hot tub electrical installation and spa wiring companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Hot Tub Electrical Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what electrical work is required before the hot tub is delivered, why the disconnect panel has to be installed a specific distance from the tub, and what bonding means for a hot tub. A website that explains GFCI disconnect requirements and bonding rules earns the wiring call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Hot Tub Electrical Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Hot Tub Electrical Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Hot tub electrical installation
              customers are KC homeowners
              who purchased or are
              purchasing a hot tub
              and learned from the
              delivery company or
              hot tub retailer that
              the electrical work
              must be completed before
              delivery — or that
              what they thought was
              a simple 240V outlet
              installation is actually
              a code-specific installation
              with specific disconnect,
              conduit, GFCI, and
              bonding requirements.
              The central education
              is the NEC Article
              680 requirements for
              permanently installed
              spas and hot tubs:
              a hot tub requires
              a dedicated 240V circuit
              — typically fifty amps
              for a standard residential
              hot tub; the circuit
              must be run in conduit
              (not direct-buried cable)
              from the panel to
              the disconnect location;
              a GFCI-protected disconnect
              (also called a spa
              panel or load center)
              must be installed within
              sight of the hot tub —
              between five and fifty
              feet from the tub —
              and must be accessible;
              the GFCI disconnect
              provides the manual
              shutoff required to
              de-energize the hot
              tub before anyone
              enters the water for
              service or cleaning.
              Bonding requirement:
              NEC Article 680 requires
              that all metal parts
              of the hot tub structure —
              the shell, frame, any
              metal handrail, adjacent
              metal fixtures within
              five feet, the pump
              motor, and the equipment
              ground — be bonded
              together with a solid
              copper bonding conductor;
              bonding equalizes
              the voltage across
              all metal parts so
              there is no voltage
              gradient in the water
              between the tub and
              a grounded metal surface
              — voltage gradients
              in water cause electric
              shock drowning (ESD),
              which has caused fatalities
              in residential pools
              and hot tubs; bonding
              is separate from grounding —
              grounding provides
              fault current path
              to trip the breaker;
              bonding prevents the
              voltage difference
              across metal surfaces
              that causes current
              through a swimmer&apos;s
              body even when nothing
              has shorted to ground.
              Distance rules: no
              receptacle outlets
              may be installed within
              six feet of the hot
              tub water edge; any
              lighting fixture within
              seven-and-a-half feet
              of the water surface
              must be at least
              five feet above the
              water; these restrictions
              exist because a person
              in or near water who
              contacts or reaches
              toward an energized
              outlet or fixture
              while simultaneously
              touching the tub
              creates a shock path
              through the water
              and their body.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hot tub electrical installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Circuit requirement — dedicated 50-amp 240V circuit, conduit requirement, panel capacity check",
                  "GFCI disconnect — spa panel within sight, 5-50 ft placement, manual shutoff requirement, why required",
                  "Bonding vs. grounding — what bonding equalizes, ESD risk without proper bonding, copper bonding conductor",
                  "Outlet and lighting distances — 6-foot outlet exclusion zone, 7.5-foot lighting height rule, why enforced",
                  "Permit requirement — KC electrical permit for spa wiring, inspection before tub filled, licensed electrician",
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
                What your hot tub electrical installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Circuit section — 50-amp 240V dedicated circuit, conduit vs. cable, panel capacity check before installation",
                  "GFCI disconnect section — spa panel placement rules, within-sight requirement, manual shutoff function",
                  "Bonding section — what bonding equalizes, ESD fatality risk, copper bonding conductor installation",
                  "Distance rules section — outlet exclusion zone, lighting height requirement, patio outlet relocation",
                  "Delivery prep section — what must be done before tub arrives, inspection timeline, KC permit process",
                  "Quote form with hot tub location, panel distance, existing 240V circuit, deck or concrete pad, delivery date",
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
                &ldquo;The bonding section is
                what differentiates my
                installations from the
                handyman who ran a 240V
                circuit and called it
                done. KC customers hear
                &apos;bonding&apos; and assume
                it&apos;s the same as grounding —
                the section explaining
                that bonding prevents
                voltage gradients in water
                and that improperly bonded
                hot tubs have caused
                fatalities gets homeowners
                to ask for the inspection
                rather than just wanting
                the power on. The delivery
                prep section also converts
                every customer who didn&apos;t
                know the electrical had
                to be done before the
                truck showed up — I get
                calls from homeowners
                the day before delivery
                who need everything roughed
                in immediately. That urgency
                premium pays well and
                the website is where they
                find me.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Whitmore, pool and spa electrical, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A hot tub electrical installation site with GFCI disconnect
                section, bonding explanation, and quote form starts at $200.
                A full site with circuit sizing guide, distance rules, and
                KC inspection prep guide is $425–$750. One spa wiring job
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
