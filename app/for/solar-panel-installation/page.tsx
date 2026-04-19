import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Solar Panel Installation Companies in Kansas City",
  description:
    "Custom websites for solar panel installation, residential solar, and solar energy companies in the Kansas City area. Show your system sizing, net metering, and payback calculation to win solar installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/solar-panel-installation",
  },
};

export default function SolarPanelInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Solar Panel Installation Companies in Kansas City",
    description: "Custom websites for solar panel installation and residential solar companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Solar Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how to size a solar system for their actual usage, what net metering pays back in Kansas City, and whether a lease or purchase makes more sense. A website that explains the payback calculation earns the site assessment call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Solar in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Solar Panel Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Solar installation
              customers are homeowners
              who have gotten
              a large electric
              bill, seen solar
              panels on a neighbor's
              roof, or received
              a door-knock from
              a solar company —
              and are trying
              to figure out
              whether the numbers
              actually work before
              sitting through
              a sales presentation.
              The central education
              is how system sizing
              and payback work
              in concrete terms:
              a typical KC home
              uses 1,000–1,200
              kWh per month (KCPL/Evergy
              average). A 7–8 kW
              system (20–22 panels
              at 400W each) generates
              approximately 850–1,000
              kWh per month in
              KC's 4.5 peak sun
              hours per day —
              sized to offset
              roughly 80–90%
              of typical usage.
              Net metering: Evergy
              in Kansas credits
              excess generation
              at the retail rate
              (approximately
              $0.10–$0.12/kWh
              in 2024) applied
              against future
              bills — in Missouri,
              net metering policy
              has historically
              been less favorable,
              so the financial
              case differs by
              state. System cost:
              a 7 kW system installed
              averages $18,000–$24,000
              before incentives.
              The federal Investment
              Tax Credit (ITC)
              provides a 30%
              credit on installation
              cost ($5,400–$7,200
              on a $18,000–$24,000
              install) — reduces
              the effective cost
              to $12,600–$16,800.
              Payback period:
              at $0.12/kWh and
              $100–$130/month
              savings, payback
              is typically 9–13
              years on the ITC-adjusted
              cost. Panels carry
              25-year production
              warranties (LG,
              REC, Q CELLS,
              Panasonic Evervolt).
              Lease vs. purchase:
              purchased systems
              generate all financial
              benefit for the
              homeowner and transfer
              with the home;
              leased systems
              create a payment
              obligation that
              can complicate
              home sales. A
              solar website that
              shows the actual
              KC payback calculation,
              how net metering
              works by utility,
              and why purchase
              outperforms lease
              over 25 years
              earns the homeowner
              who is ready to
              do the math before
              scheduling a demo.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing solar panels
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "System sizing — kWh usage to system size relationship, how roof orientation affects output in KC",
                  "Payback period — ITC credit, net metering rate, actual savings per month, 10–13 year payback math",
                  "Net metering — how Evergy credits work, Kansas vs. Missouri policy difference, how excess is credited",
                  "Lease vs. purchase — who owns the system, how a lease complicates home sale, 25-year ROI comparison",
                  "Panel quality — tier-1 vs. budget panels, 25-year production warranty, degradation rate per year",
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
                What your solar installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC-specific sizing section — average usage, 4.5 peak sun hours, typical 7–8 kW system for standard home",
                  "Payback calculator section — ITC reduction, monthly savings at KC rates, year-by-year offset math",
                  "Net metering guide — how Evergy credits excess, Kansas vs. Missouri difference, bill impact",
                  "Lease vs. purchase comparison — ownership, home sale implications, 25-year financial difference",
                  "Panel quality section — tier-1 manufacturer comparison, production warranty, degradation rates",
                  "Site assessment form with monthly kWh usage, roof age, roof orientation, utility provider",
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
                &ldquo;Solar is a hard sell when
                people do not trust the
                numbers — every competitor
                is showing rosy 7-year
                paybacks that do not
                hold up to scrutiny.
                The website section walking
                through the real KC math —
                ITC credit, actual Evergy
                net metering rate, realistic
                9–12 year payback — brought
                in customers who had already
                done their homework and
                trusted us before we met.
                The lease vs. purchase
                section also started generating
                calls from people who
                had been quoted leases
                by the door-to-door companies
                and wanted to understand
                what they were actually
                signing.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Chambers, solar installer, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A solar site with KC payback math,
                net metering guide, and site assessment
                form starts at $200. A full site with
                lease vs. purchase comparison, panel
                quality section, and sizing calculator
                is $425–$750. One install covers the
                cost many times over. No contracts,
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
