import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Whole House Generator Companies in Kansas City",
  description:
    "Custom websites for whole house generator installation, standby generator, and automatic transfer switch companies in the Kansas City area. Show your Generac and Kohler options, sizing calculations, and automatic operation to win generator installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/whole-house-generator",
  },
};

export default function WholeHouseGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Whole House Generator Companies in Kansas City",
    description: "Custom websites for whole house generator installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Generator Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to understand how a standby generator automatically starts during a power outage, what size they need for their home, and why a natural gas or propane system is different from a portable. A website with sizing guidance earns the quote call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Generators in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Whole House Generator</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Whole house generator customers
              are homeowners who experienced
              a multi-day power outage —
              from an ice storm,
              derecho, or tornado
              (all common in KC)
              — and lost refrigerator
              contents, sump pump
              function, HVAC, or
              medical equipment
              operation. The distinction
              that requires the
              most explanation is
              standby vs. portable:
              a standby generator
              (also called a whole-home
              or automatic standby
              generator) is permanently
              installed on a concrete
              pad outside the home,
              connected to the home&apos;s
              natural gas or propane
              supply, and wired
              through an automatic
              transfer switch (ATS)
              to the main electrical
              panel. When utility
              power fails, the
              ATS detects the
              loss within seconds,
              the generator starts
              automatically, and
              the home runs normally —
              the homeowner does
              not need to be home.
              Generac and Kohler
              are the dominant
              residential brands;
              Cummins and Briggs
              &amp; Stratton (now
              Generac) are also
              common. Sizing is
              by load calculation:
              a 10–13kW generator
              covers essential
              circuits (lights,
              refrigerator, well pump,
              HVAC blower, outlets);
              a 16–20kW covers
              most of the home
              including central
              AC; a 22–26kW+ covers
              a full home including
              electric range, electric
              dryer, and EV charger.
              Installation requires
              a licensed electrician
              for ATS wiring, a
              gas plumber for
              the fuel line (natural
              gas requires a dedicated
              larger-diameter supply
              line in many cases),
              and a concrete pad.
              Permits are required.
              Annual exercise cycles
              and oil changes are
              the maintenance requirement.
              A generator website
              that explains automatic
              operation, sizing
              by load, and the
              gas/electrical coordination
              earns the homeowner
              who is shopping
              after their last
              outage.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before buying a standby generator
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Standby vs. portable — automatic operation, no intervention needed, permanent installation advantages",
                  "Sizing — 10kW vs. 16kW vs. 22kW — what loads each size covers, how a load calculation works",
                  "Automatic transfer switch — how it detects outages, how fast it switches, whole-home vs. essential circuits",
                  "Generac vs. Kohler — brand comparison, warranty, what dealers and service networks cover KC",
                  "Installation requirements — concrete pad, gas line sizing, permit, electrician coordination, timeline",
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
                What your generator installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "How standby works — automatic startup, transfer switch operation, how long before power is restored",
                  "Sizing guide — load calculator walkthrough, what each kW range covers, essential vs. whole-home options",
                  "Generac and Kohler options — product lines we install, warranty terms, service and maintenance plans",
                  "Installation process — site assessment, pad, gas line, ATS wiring, permit, inspection, startup testing",
                  "Fuel options — natural gas vs. propane, line sizing for natural gas, propane tank sizing for standby use",
                  "Quote form with home size, fuel type, priority circuits, timeline, current panel amperage",
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
                &ldquo;Every customer who calls
                me has already Googled
                portable generators and
                is confused about why
                they cost $10,000 more
                to go standby. The
                website explaining the
                automatic transfer switch,
                the no-intervention
                operation, and the
                load sizing simplified
                every initial conversation.
                Customers were not
                calling to understand
                the basics — they were
                calling to schedule
                a site visit. After
                an ice storm we had
                forty inquiries in
                three days and the
                website handled all
                the first-level education.
                We booked out six
                weeks in a week.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Jennings, generator installer, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A generator site with how-it-works
                overview, sizing guide, and quote
                form starts at $225. A full site
                with brand comparison, fuel options,
                and installation process is $425–$850.
                One generator installation covers
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
