import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Light Switch Replacement Companies in Kansas City",
  description:
    "Custom websites for light switch replacement, dimmer switch installation, and 3-way switch wiring companies in the Kansas City area. Show your 3-way switch traveler wire identification, dimmer switch load compatibility, and neutral wire requirement for smart switches to win light switch replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/light-switch-replacement",
  },
};

export default function LightSwitchReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Light Switch Replacement Companies in Kansas City",
    description: "Custom websites for light switch replacement and dimmer switch installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Light Switch Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their new dimmer switch buzzes on certain bulbs, how a 3-way switch works when one already failed, and whether a smart switch requires a neutral wire their older KC home may not have. A website that explains light switch replacement earns the wiring call before they try to DIY it and wire it backwards. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Light Switch Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Light Switch Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Light switch replacement
              customers are KC homeowners
              who want to upgrade
              a standard toggle switch
              to a dimmer or smart
              switch and discover
              the wiring is more complex
              than swapping one switch
              for another — homeowners
              with 3-way switch circuits
              (two switches controlling
              one light) where one
              switch failed and need
              the circuit rewired
              correctly, or homeowners
              in KC homes built before
              1985 who want to install
              a smart switch and find
              their switch boxes have
              no neutral wire, which
              most smart switches
              require to power the
              wireless radio when
              the switch is off. The
              central education is
              3-way switch wiring
              logic, dimmer load compatibility,
              and the neutral wire
              requirement — three
              things that determine
              whether a switch replacement
              works correctly on the
              first install or requires
              a service call to fix
              a buzzing light, a switch
              that doesn&apos;t work from
              both ends, or a smart
              switch that never connects.
              3-way switch wiring:
              a 3-way circuit uses
              two switches to control
              one fixture — each switch
              has three terminals:
              a common terminal and
              two traveler terminals;
              the hot wire from the
              panel connects to the
              common terminal of the
              first switch; the two
              traveler wires run between
              the traveler terminals
              of both switches in
              a 3-wire cable; the
              common terminal of the
              second switch connects
              to the fixture; when
              one 3-way switch fails
              and is replaced without
              correctly identifying
              the common terminal
              — which is marked on
              the switch body and
              is often a different
              color screw — the circuit
              fails entirely or works
              from only one switch;
              identifying the common
              wire in the existing
              wiring before replacing
              the switch is the critical
              step that prevents incorrect
              installation. Dimmer
              compatibility: a dimmer
              switch controls light
              level by rapidly interrupting
              the electrical circuit —
              older dimmers designed
              for incandescent bulbs
              interrupt at a frequency
              that causes buzzing
              in LED bulbs; LED-compatible
              dimmers (Lutron Diva
              LED+, Leviton Decora
              Smart) are designed
              for the lower wattage
              and different load characteristics
              of LED bulbs; a dimmer
              installed with a bulb
              wattage below the dimmer&apos;s
              minimum load (many dimmers
              require a minimum of
              40–60 watts to operate
              smoothly) causes buzzing,
              flickering, or failure
              to dim to low levels;
              checking both the dimmer&apos;s
              listed minimum load
              and the fixture&apos;s total
              wattage before purchase
              prevents the most common
              dimmer installation complaint.
              Neutral wire requirement:
              most smart switches
              require a neutral wire
              to power the device&apos;s
              internal electronics
              when the switch is off;
              KC homes built before
              1985 were commonly wired
              with switch loops —
              only two wires in the
              switch box, hot and
              switched hot, with no
              neutral; a smart switch
              requiring a neutral
              in a switch loop box
              cannot be installed
              without running a new
              cable; some smart switches
              (Lutron Caseta, Leviton
              Decora No-Neutral) are
              designed to operate
              without a neutral wire
              using a small bypass
              current through the
              light fixture — these
              are the correct choice
              for older KC homes without
              neutral at the switch.
              A light switch website
              that explains 3-way
              wiring logic, dimmer
              load compatibility,
              and the neutral wire
              situation in older KC
              homes earns the homeowner
              who wants to upgrade
              but is unsure their
              wiring supports it.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before light switch replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "3-way switch wiring — common terminal identification, traveler wire function, why one replacement breaks both switches",
                  "Dimmer compatibility — LED vs. incandescent load, minimum wattage requirement, buzzing cause and fix",
                  "Smart switch neutral — why neutral is needed, switch loop wiring in pre-1985 KC homes, no-neutral smart switch options",
                  "Dimmer switch brands — Lutron Diva vs. Leviton, LED+ rating, what the compatibility list means",
                  "Switch box wiring — how to identify common wire, line vs. load, safe switch replacement sequence",
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
                What your light switch replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "3-way switch section — circuit logic, common terminal identification, traveler wire function, failure modes",
                  "Dimmer section — LED load compatibility, minimum wattage, buzzing cause, recommended brands for KC homes",
                  "Neutral wire section — switch loop wiring in pre-1985 homes, neutral requirement, no-neutral switch options",
                  "Smart switch guide — Lutron Caseta vs. others, neutral vs. no-neutral models, compatibility check",
                  "Switch replacement process — breaker off, wire documentation, terminal identification, safe installation sequence",
                  "Quote form with switch type (single/3-way/smart), home age, current symptoms, fixture type, timeline",
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
                &ldquo;The neutral wire section
                alone is responsible
                for at least three
                calls a month. KC has
                a lot of homes from
                the 1960s and 1970s
                with switch loops,
                and smart switches
                are popular right now.
                Homeowners would buy
                a Kasa or Wyze smart
                switch, open the box,
                find only two wires
                in their switch box,
                and panic-call me.
                After the section went
                up explaining switch
                loop wiring and the
                no-neutral smart switch
                options, customers
                started calling before
                buying so I could
                confirm what wiring
                they have. The dimmer
                buzzing section also
                helped — homeowners
                with LED bulbs and
                cheap dimmers were
                calling about buzzing
                lights that wouldn&apos;t
                go away. Explaining
                the minimum load issue
                and recommending LED-rated
                dimmers stopped the
                repeat calls completely.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Fitzpatrick, electrical repair and switch installation, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A light switch replacement site with 3-way section, dimmer
                compatibility guide, and quote form starts at $200. A full site
                with smart switch neutral content, KC home age context, and
                switch brand guide is $425–$750. One switch upgrade call covers
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
