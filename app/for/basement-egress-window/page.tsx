import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Basement Egress Window Companies in Kansas City",
  description:
    "Custom websites for basement egress window installation, window well, and basement bedroom code compliance companies in the Kansas City area. Show your IRC code requirements, well liner options, and finished installations to win egress window contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/basement-egress-window",
  },
};

export default function BasementEgressWindowPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Basement Egress Window Companies in Kansas City",
    description: "Custom websites for basement egress window installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Egress Window Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners finishing a basement bedroom need to know exactly what the IRC egress code requires, whether they need a permit, and how the concrete cutting process works. A website that explains the code requirements and shows finished installations earns the quote call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Egress Windows in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Basement Egress Window</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Basement egress window customers
              are homeowners finishing
              a basement and converting
              a storage or utility space
              into a legal bedroom —
              a bedroom requires an
              egress opening for fire
              escape, and an existing
              small hopper window
              almost never meets
              code. The IRC (International
              Residential Code) egress
              requirements that most
              KC jurisdictions adopt
              specify a minimum clear
              opening of 5.7 square
              feet (or 5.0 sq ft at
              grade level), minimum
              opening height of 24
              inches, minimum opening
              width of 20 inches,
              and a maximum sill
              height of 44 inches
              above the finished
              floor. The installation
              process involves cutting
              the concrete foundation
              wall (saw cutting or
              core drilling), excavating
              the soil outside to
              create a window well,
              installing a window
              well liner (galvanized
              steel or poly — Bilco
              and Shape Products
              are common brands),
              installing the window
              unit (typically casement
              or sliding), and
              waterproofing and
              backfilling. Permits
              are required in
              virtually all KC
              area jurisdictions —
              the permit also means
              inspection, which
              is what makes the
              bedroom legally
              habitable for a
              future home sale.
              Window well covers
              (clear polycarbonate
              or metal grate)
              keep water and
              debris out of the
              well. Deep wells
              may require a
              window well ladder
              to meet egress
              requirements.
              A basement egress
              website that explains
              the IRC size requirements,
              the cut-and-install
              process, permit
              necessity, and
              shows finished
              installations earns
              the homeowner who
              is mid-basement-finish
              and just found
              out their existing
              window does not
              qualify.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a basement egress window
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "IRC egress requirements — 5.7 sq ft minimum, 24-inch height, 20-inch width, 44-inch max sill height",
                  "Concrete cutting process — how the foundation wall is cut, what it looks like, how long it takes",
                  "Permit requirement — why a permit is needed, what happens without one, inspection process",
                  "Window well options — galvanized steel vs. poly liner, well cover types, drainage requirements",
                  "Bedroom legality — why egress compliance matters for legally calling a space a bedroom on a listing",
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
                What your egress window website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "IRC code explained — exact dimensions required, how to measure if existing window qualifies",
                  "Installation process — concrete cutting, excavation, well installation, window unit, waterproofing",
                  "Permit guide — what permits are required in KC area jurisdictions, inspection steps, timeline",
                  "Window well options — steel vs. poly liner, cover types, drainage gravel, ladder for deep wells",
                  "Legal bedroom value — how egress compliance adds a bedroom to the listing, home value impact",
                  "Quote form with foundation wall type, exterior grade, window location, target bedroom size, timeline",
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
                &ldquo;Egress window customers always
                come to me partway through
                a basement finish when they
                find out their window does
                not meet code. They are
                stressed and want to
                understand what the
                cutting process is,
                whether they need a permit,
                and how long it takes.
                The website with the IRC
                dimensions, the process
                walkthrough, and the
                permit explanation
                meant customers arrived
                calm and informed.
                I stopped spending
                the first thirty
                minutes of every call
                on the same code
                education. We book
                faster and the jobs
                go smoother.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Kowalczyk, egress window installer, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An egress window site with IRC code
                guide, installation process, and
                quote form starts at $200. A full
                site with permit guide, window well
                options, and legal bedroom value
                section is $425–$750. One egress
                installation covers the cost.
                No contracts, no monthly fees.
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
