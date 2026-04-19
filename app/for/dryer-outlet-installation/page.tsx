import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Dryer Outlet Installation Companies in Kansas City",
  description:
    "Custom websites for dryer outlet installation, 240V dryer circuit, and laundry room electrical companies in the Kansas City area. Show your KC 30-amp vs. 50-amp outlet differences, three-prong vs. four-prong dryer cord requirements, and permit rules to win dryer outlet contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/dryer-outlet-installation",
  },
};

export default function DryerOutletInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Dryer Outlet Installation Companies in Kansas City",
    description: "Custom websites for dryer outlet installation and 240V dryer circuit companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Dryer Outlet Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their new dryer came with a four-prong cord but their wall has a three-prong outlet, whether they need a permit to add a dryer circuit, and what the actual amperage difference is between a dryer and a range outlet. A website that explains the three-to-four-prong change earns the outlet call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Dryer Outlet Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Dryer Outlet Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Dryer outlet installation
              customers are KC homeowners
              who moved into a
              house that has no
              dryer outlet in the
              laundry room — or
              who are converting
              an unfinished basement
              or spare room into
              a laundry space and
              need the outlet added;
              or homeowners who
              bought a new dryer
              with a four-prong
              cord and found their
              wall has a three-prong
              outlet and are trying
              to understand whether
              they need to replace
              the outlet, replace
              the cord, or both.
              The central education
              is the three-to-four-prong
              code change: prior
              to the 1996 NEC,
              electric dryers
              were allowed to
              use a three-wire
              connection (two hot
              legs and a combined
              neutral-ground wire)
              using a NEMA 10-30
              outlet; the 1996
              NEC required new
              dryer installations
              to use a four-wire
              connection (two hot
              legs, a neutral wire,
              and a separate equipment
              ground) using a
              NEMA 14-30 outlet —
              this change was made
              because the combined
              neutral-ground path
              on the three-wire
              system allowed the
              dryer frame to carry
              current if the neutral
              was broken, creating
              a shock hazard;
              KC homes built or
              renovated before
              1996 typically have
              the three-prong
              (NEMA 10-30) outlet —
              new dryers ship with
              a four-prong cord
              because manufacturers
              comply with the
              current NEC; the
              homeowner can replace
              the cord with a
              three-prong cord
              if they have a code-compliant
              existing three-prong
              outlet — but upgrading
              the outlet to four-prong
              requires a permit
              and a new wire run
              if the existing circuit
              does not include
              a ground wire. Dryer
              vs. range outlet:
              a dryer outlet is
              NEMA 14-30 (thirty
              amps, 240V) — a
              range outlet is
              NEMA 14-50 (fifty
              amps, 240V); they
              use the same four-wire
              configuration but
              different amperage
              and plug shapes —
              a dryer cannot be
              plugged into a range
              outlet and vice
              versa; the circuit
              wire gauge differs:
              a thirty-amp dryer
              circuit uses ten-gauge
              wire; a fifty-amp
              range circuit uses
              six-gauge wire. Adding
              a new dryer outlet
              in KC requires a
              dedicated thirty-amp
              240V circuit run
              from the panel to
              the laundry location —
              typically twenty-five
              to fifty feet in
              most KC home layouts
              — a NEMA 14-30 outlet
              in a dryer box, and
              a thirty-amp double-pole
              breaker at the panel;
              the work requires
              a permit and inspection
              in Kansas City.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before dryer outlet installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Three-prong vs. four-prong — NEMA 10-30 vs. 14-30, why new dryers ship with four-prong cord, KC home age",
                  "Cord replacement option — when three-prong cord is allowed on existing outlet, why outlet upgrade is safer",
                  "Dryer vs. range outlet — NEMA 14-30 vs. 14-50, amperage difference, incompatible plug shapes",
                  "Adding new dryer circuit — 30-amp dedicated circuit, wire gauge, dryer box, KC permit requirement",
                  "Permit requirement — when replacing outlet needs permit vs. just replacing cord, inspection for new circuit",
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
                What your dryer outlet installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Three-to-four-prong section — 1996 NEC change, why combined neutral-ground is hazardous, what to check at wall",
                  "Cord vs. outlet section — when cord replacement is permitted, why outlet upgrade is the better long-term fix",
                  "Circuit specs section — 30-amp 240V dedicated, 10-gauge wire, dryer box, double-pole breaker at panel",
                  "Dryer vs. range comparison — NEMA 14-30 vs. 14-50, amperage, plug incompatibility, which KC homes have which",
                  "New laundry space section — basement or room conversion, circuit run distance, permit timeline",
                  "Quote form with home age, current outlet type, outlet location, new space or existing laundry room",
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
                &ldquo;The three-to-four-prong
                section converts the homeowner
                who calls asking to replace
                a dryer cord into a homeowner
                who asks to upgrade the
                outlet. KC homes built
                before 1996 have the old
                three-prong outlet, and
                appliance stores usually
                tell customers just to
                buy the matching cord
                and leave the outlet alone.
                After the section explaining
                why the three-wire connection
                was changed — that the
                combined neutral-ground
                wire put shock voltage
                on the dryer frame if
                the neutral opened —
                customers understand why
                spending another hundred
                dollars to upgrade the
                outlet is worth it. I
                also get a lot of calls
                from people finishing
                a basement laundry and
                having no idea they need
                a dedicated circuit pulled
                from the panel — the new
                circuit section sets the
                right expectation before
                I arrive.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Bauer, residential electrical, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A dryer outlet installation site with three-to-four-prong
                section, circuit specs, and quote form starts at $200. A full
                site with cord vs. outlet guide, new laundry space section,
                and KC permit information is $425–$750. One new dryer circuit
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
