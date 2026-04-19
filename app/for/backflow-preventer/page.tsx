import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Backflow Preventer Companies in Kansas City",
  description:
    "Custom websites for backflow preventer installation, testing, and repair companies in the Kansas City area. Show your testable vs. non-testable device types, annual testing requirements, and cross-connection hazards to win backflow contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/backflow-preventer",
  },
};

export default function BackflowPreventerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Backflow Preventer Companies in Kansas City",
    description: "Custom websites for backflow preventer installation and testing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Backflow Preventer Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners and property managers want to know why the city requires annual backflow testing, what the difference is between a pressure vacuum breaker and a reduced pressure zone device, and what happens if they miss the testing deadline. A website that explains cross-connection hazards and device types earns the installation and testing call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Backflow Prevention in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Backflow Preventer</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Backflow preventer
              customers are homeowners
              and property managers
              who received a
              notice from Kansas
              City Water Services
              requiring annual
              testing of an
              installed device,
              irrigation system
              owners who need
              a pressure vacuum
              breaker installed
              to protect the
              potable water
              supply, or commercial
              properties with
              a reduced pressure
              zone assembly
              that failed its
              annual test. The
              central education
              is what backflow
              is and why it
              is a genuine
              public health
              hazard: backflow
              occurs when a
              pressure drop
              in the public
              water main (from
              a water main
              break, firefighting
              drawdown, or
              distribution surge)
              creates negative
              pressure that
              can draw water
              backward from
              a private system
              into the public
              supply — water
              that may contain
              fertilizers, pesticides,
              pool chemicals,
              or industrial
              fluids. Cross-connection:
              any physical
              link between
              the potable water
              supply and a
              non-potable source —
              an irrigation
              head sitting
              in standing water
              is a cross-connection;
              a chemical injector
              on a boiler
              loop tied to
              the domestic
              supply is a
              cross-connection.
              Device types:
              pressure vacuum
              breaker (PVB) —
              a spring-loaded
              check valve with
              an air inlet
              that opens on
              pressure loss,
              preventing siphonage —
              correct for
              irrigation systems
              where the device
              is always installed
              above the highest
              downstream outlet
              (at least 12"
              above grade);
              PVBs are not
              rated for backpressure
              conditions. Double
              check valve assembly
              (DCVA): two independent
              check valves
              in series —
              rated for low-hazard
              cross-connections
              where backpressure
              is possible (boiler
              makeup water,
              fire suppression
              connections at
              low hazard); not
              rated for high-hazard
              applications.
              Reduced pressure
              zone device (RPZ):
              two check valves
              with a pressure-differential
              relief valve
              between them —
              the relief zone
              is maintained
              at lower pressure
              than the supply,
              so any backflow
              event is discharged
              to atmosphere
              rather than
              entering the
              supply — required
              for high-hazard
              applications (chemical
              injection, irrigation
              with fertilizer
              injection, pools,
              industrial processes).
              Kansas City Water
              Services and
              most Missouri
              municipalities
              require annual
              testing of all
              testable assemblies
              (DCVA and RPZ);
              PVBs are inspected
              visually but
              typically not
              annually tested.
              Failed test consequences:
              the water utility
              notifies the
              property owner
              and can discontinue
              water service
              for unresolved
              non-compliance.
              A backflow website
              that explains
              the cross-connection
              hazard, which
              device type is
              required for
              irrigation vs.
              high-hazard vs.
              fire suppression,
              and what an
              annual test
              actually checks
              earns the property
              manager who
              received a city
              notice and does
              not know what
              they have installed.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What property owners research before backflow testing or installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why testing is required — cross-connection hazard, negative pressure events, potable supply protection",
                  "Device type differences — PVB vs. DCVA vs. RPZ, which application each device is rated for",
                  "Annual test process — what the test checks, what a failure means, how repair vs. replacement is decided",
                  "Irrigation system requirements — PVB above grade requirement, why siphonage is the primary risk",
                  "Compliance consequences — city notice timeline, service discontinuation risk, test report submission",
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
                What your backflow preventer website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cross-connection explainer — what backflow is, how pressure drops create hazard, real contamination examples",
                  "Device type guide — PVB vs. DCVA vs. RPZ, hazard rating, installation requirements for each",
                  "Annual testing section — what a certified tester checks, pass/fail criteria, test report submission to utility",
                  "Irrigation system section — PVB height requirement, fertilizer injection triggers RPZ requirement",
                  "Compliance section — KC Water Services notice process, timeline, service risk, repair vs. replacement decision",
                  "Service request form with property type, device type if known, city notice received, installation or test needed",
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
                &ldquo;Most of my calls were
                people who got a city
                notice, had no idea what
                a backflow preventer was,
                and were worried they were
                going to lose water service.
                The website section on
                what cross-connections actually
                are and why the city requires
                testing changed those calls
                entirely — customers arrived
                understanding the public
                health basis, not just
                trying to clear a compliance
                notice. The device type
                section also reduced the
                time I spent on the phone
                explaining why an irrigation
                PVB cannot be used on
                a pool connection.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Nunez, backflow testing and installation, Merriam, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A backflow preventer site with cross-connection
                explainer, device type guide, and service form
                starts at $200. A full site with annual testing
                section, irrigation requirements, and compliance
                content is $425–$750. One RPZ installation covers
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
