import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Range Outlet Installation Companies in Kansas City",
  description:
    "Custom websites for range outlet installation, 50-amp stove circuit, and electric range wiring companies in the Kansas City area. Show your KC NEMA 14-50 requirements, anti-tip bracket code, and freestanding vs. slide-in range circuit differences to win range outlet contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/range-outlet-installation",
  },
};

export default function RangeOutletInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Range Outlet Installation Companies in Kansas City",
    description: "Custom websites for range outlet installation and electric range wiring companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Range Outlet Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether they need a 50-amp or 40-amp outlet for their new range, why the range outlet and dryer outlet look similar but aren&apos;t interchangeable, and whether converting from gas to electric range requires a new circuit. A website that explains range circuit requirements earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Range Outlet Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Range Outlet Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Range outlet installation
              customers are KC homeowners
              converting from a
              gas range to an electric
              range — an increasingly
              common transition as
              KC homeowners replace
              aging gas ranges with
              induction cooktops
              or standard electric
              ranges — and discovering
              they have no 240V
              outlet behind the
              range; or homeowners
              replacing an existing
              electric range and
              learning the old
              three-prong range
              outlet does not match
              the four-prong cord
              that comes with the
              new appliance; or
              homeowners installing
              a new electric range
              in a kitchen that
              never had one. The
              central education
              is range circuit sizing:
              an electric range
              requires a dedicated
              240V circuit —
              most residential
              electric ranges
              require a fifty-amp
              circuit (NEMA 14-50,
              six-gauge wire)
              though some smaller
              ranges or cooktops
              are rated for forty
              amps (NEMA 14-30,
              ten-gauge wire)
              — the nameplate
              on the range specifies
              the circuit amperage
              required; a range
              outlet and a dryer
              outlet use the
              same four-wire
              NEMA 14 configuration
              but different amperage
              ratings and plug
              shapes — a fifty-amp
              NEMA 14-50 outlet
              has a T-shaped neutral
              prong; a thirty-amp
              NEMA 14-30 dryer
              outlet has an L-shaped
              neutral prong; they
              are not interchangeable
              and a range will
              not plug into a
              dryer outlet. Gas-to-electric
              conversion: converting
              a gas range location
              to electric in a
              KC home requires
              a fifty-amp 240V
              circuit run from
              the panel — which
              may be twenty-five
              to seventy-five
              feet depending on
              the kitchen layout
              and panel location
              in the house; the
              existing gas line
              must be capped at
              the appliance location
              or removed; both
              the electrical work
              and the gas line
              capping require
              permits in Kansas
              City — the electrical
              permit for the circuit
              and outlet, the
              mechanical permit
              for capping the
              gas line. Induction
              cooktop wiring:
              an induction cooktop
              installed in a
              countertop cutout
              is a separate appliance
              from the wall oven —
              it requires its
              own dedicated circuit
              (typically forty
              to fifty amps for
              a full-size four-burner
              induction cooktop)
              separate from the
              wall oven circuit —
              this is a common
              surprise for KC
              homeowners planning
              a kitchen renovation
              who assume the
              induction cooktop
              and oven share
              a single circuit
              as a range does.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before range outlet installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Circuit amperage — 50-amp vs. 40-amp, NEMA 14-50 vs. 14-30, nameplate rating, wire gauge difference",
                  "Range vs. dryer outlet — why they look similar but aren't interchangeable, T-shaped vs. L-shaped neutral",
                  "Gas-to-electric conversion — new 50-amp circuit required, gas line capping permit, KC combined permit process",
                  "Induction cooktop separate circuit — cooktop and wall oven require separate circuits, not shared like a range",
                  "Three-prong legacy outlet — NEMA 10-50 in KC homes before 1996, code-compliant upgrade to four-prong",
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
                What your range outlet installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Circuit sizing section — 50-amp vs. 40-amp, NEMA 14-50 vs. 14-30, nameplate amperage requirement",
                  "Range vs. dryer comparison — why they aren't interchangeable, plug shape difference, wiring gauge",
                  "Gas-to-electric section — KC panel capacity check, circuit run distance, gas capping, permit requirements",
                  "Induction section — separate cooktop circuit, wall oven separate circuit, renovation circuit planning",
                  "Three-prong upgrade section — legacy NEMA 10-50, why upgrade to four-prong improves safety",
                  "Quote form with current fuel type, range location, panel distance, induction or standard, outlet already present",
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
                &ldquo;The gas-to-electric section
                is what generates the
                most qualified calls in
                KC right now. Homeowners
                are switching from gas
                ranges to induction and
                they call appliance stores
                who tell them they just
                need an outlet — they
                don&apos;t know there&apos;s
                no 240V circuit at the
                range location at all
                in a gas kitchen. The
                section explaining that
                a gas kitchen needs a
                new circuit pulled from
                the panel — not just an
                outlet swap — and that
                the gas line needs to
                be capped by a licensed
                plumber converts the
                &apos;just put in an outlet&apos;
                call into the right-sized
                job with the right expectations.
                The induction cooktop
                section also prevents
                the renovation surprise
                — KC homeowners planning
                a cooktop and wall oven
                combo don&apos;t know they&apos;re
                looking at two separate
                fifty-amp circuits until
                the section explains it.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Brennan, kitchen electrical and appliance circuits, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A range outlet installation site with circuit sizing section,
                gas-to-electric conversion guide, and quote form starts at $200.
                A full site with range vs. dryer comparison, induction cooktop
                wiring section, and KC permit guide is $425–$750. One range
                circuit run covers the cost. No contracts, no monthly fees.
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
