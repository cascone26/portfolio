import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Soffit Vent Installation Companies in Kansas City",
  description:
    "Custom websites for soffit vent installation, attic ventilation soffit vent companies, and continuous soffit vent installation companies in the Kansas City area. Show your net free area calculation, KC attic temperature reduction, and continuous vs. individual soffit vent comparison to win soffit vent contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/soffit-vent-installation",
  },
};

export default function SoffitVentInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Soffit Vent Installation Companies in Kansas City",
    description: "Custom websites for soffit vent installation and attic ventilation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Soffit Vent Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their attic is 30 degrees hotter than their neighbors' in a KC August, whether adding soffit vents will actually lower the attic temperature, and how many soffit vents are needed to match the ridge vent they already have. A website that explains soffit vent installation earns the attic ventilation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Soffit Vent Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Soffit Vent Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Soffit vent installation
              customers are KC homeowners
              whose attic ventilation
              inspection revealed
              that the ridge vent
              or gable vents are present
              but the soffit vents
              are blocked, insufficient,
              or absent — without
              adequate intake ventilation
              at the soffit, the
              ridge vent cannot draw
              cool air through the
              attic and the attic
              temperature rises to
              140–160°F on a KC summer
              day; homeowners whose
              roofing contractor discovered
              during a replacement
              that the soffit baffles
              had never been installed,
              allowing attic insulation
              to cover the rafter
              bays and block any soffit
              airflow, or homeowners
              who had continuous soffit
              vinyl installed during
              a siding job and the
              installer covered the
              original individual
              soffit vents without
              adding new ones. The
              central education is
              the intake-to-exhaust
              ventilation balance
              requirement, net free
              area calculation, and
              continuous versus individual
              soffit vent tradeoffs —
              three things that determine
              whether new soffit vents
              actually lower the attic
              temperature or just
              add holes that produce
              no airflow. Intake-exhaust
              balance: attic ventilation
              requires a matched intake
              and exhaust — cool air
              enters through soffit
              vents at the eave,
              rises through the attic
              as it heats, and exits
              through ridge or gable
              vents at the peak;
              the system only works
              as a convective loop
              when the intake area
              (soffit) matches or
              slightly exceeds the
              exhaust area (ridge/gable);
              the IRC minimum is
              1 square foot of net
              free ventilation area
              per 150 square feet
              of attic floor area,
              split 50/50 between
              intake and exhaust;
              a KC home with 1,200
              square feet of attic
              floor needs 8 square
              feet of net free area —
              4 square feet of soffit
              intake and 4 square
              feet of ridge exhaust;
              most KC homes built
              before 1990 are significantly
              underventilated by this
              calculation. Net free
              area: the net free area
              of a soffit vent is
              the actual open area
              that allows airflow —
              a 16x8-inch individual
              soffit vent has an NFA
              of 55–65 square inches
              depending on the screen
              and louver design; a
              continuous soffit vent
              strip running the full
              perimeter provides much
              higher total NFA —
              a standard 2-3/4-inch
              continuous vent strip
              provides approximately
              9 square inches of
              NFA per linear foot;
              homeowners often confuse
              the hole cut in the
              soffit for the vent
              with the actual NFA —
              the screen and louver
              restrict airflow to
              a fraction of the opening
              area. Soffit material:
              vinyl soffit panels
              with built-in perforations
              (vented vinyl soffit)
              provide continuous
              low-profile ventilation
              without individual vent
              cutouts — the perforated
              pattern provides approximately
              3–5 square inches of
              NFA per square foot
              of panel; in KC, this
              is often the correct
              solution when replacing
              a covered solid soffit
              because it avoids cutting
              individual vent holes
              in new material; the
              limitation is that
              the vented panel NFA
              must be calculated for
              the actual linear feet
              installed — a 40-foot
              eave of vented vinyl
              soffit at 3 NFA per
              square foot provides
              adequate intake for
              most single-story KC
              homes. A soffit vent
              website that explains
              the intake-exhaust balance
              requirement, NFA calculation
              method, and continuous
              vs. individual vent
              comparison earns the
              homeowner whose attic
              is overheating and
              whose shingles are
              showing premature aging
              from below.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before soffit vent installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Intake-exhaust balance — IRC 1/150 rule, 50/50 intake vs. exhaust split, KC underventilation pattern",
                  "Net free area — NFA vs. hole size, screen/louver restriction factor, individual vent NFA by model",
                  "Continuous vs. individual — perforated vinyl soffit NFA per linear foot, when each is correct",
                  "Soffit baffle — rafter bay blocking by insulation, baffle installation requirement with new vents",
                  "KC attic temperature — 140-160°F without soffit vents, impact on shingle life and AC load",
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
                What your soffit vent installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Intake-exhaust section — convective loop explanation, IRC ratio, how to calculate need for your KC home",
                  "NFA calculator — individual vent NFA specs, continuous vent linear foot calculation, total NFA worksheet",
                  "Continuous vs. individual guide — perforated vinyl vs. cut-in vents, when each fits the existing soffit",
                  "Soffit baffle section — why vents without baffles don't work, insulation blocking, baffle installation with job",
                  "KC summer attic heat section — 140-160°F attic temps, shingle warranty impact, AC cost connection",
                  "Quote form with soffit material, eave length, existing ridge vent, attic size estimate, timeline",
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
                &ldquo;The soffit baffle section
                is what I needed. I was
                installing soffit vents
                correctly but the attic
                temperature wasn&apos;t dropping
                because the insulation
                had collapsed over the
                rafter bays and the new
                vents weren&apos;t connected
                to any airflow path. After
                the section went up explaining
                that soffit vents without
                baffles are holes that
                go nowhere, customers
                started asking about baffles
                as part of the quote rather
                than treating it as an
                upsell. The intake-exhaust
                balance section also helped —
                homeowners in Shawnee whose
                roofer installed a ridge
                vent without adding soffit
                vents started calling me
                to add the intake side.
                A ridge vent with no soffit
                intake is just a gap in
                the roof.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Drummond, attic ventilation and soffit service, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A soffit vent site with intake-exhaust section, NFA calculation
                guide, and quote form starts at $200. A full site with KC attic
                temperature content, soffit baffle guide, and continuous vs.
                individual comparison is $425–$750. One attic ventilation job
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
