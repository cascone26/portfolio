import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Basement Egress Window Companies in Kansas City",
  description:
    "Custom websites for basement egress window installation, window well, and basement finishing egress compliance companies in the Kansas City area. Show your IRC code knowledge, window brands, and installation process to win residential egress window contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/basement-egress-windows",
  },
};

export default function BasementEgressWindowsPage() {
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
          Homeowners finishing a basement bedroom need egress windows that meet IRC code or the room cannot legally be called a bedroom. A website that explains the size requirements, permitting process, and waterproofing earns the installation call. Free mockup, no commitment.
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
              <span className="gradient-text">Basement Egress Windows</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Basement egress window customers
              are almost always in one of two
              situations: they are finishing
              a basement and need bedrooms to
              be code-compliant, or they are
              selling a home and an inspector
              flagged the basement bedroom
              as not having a proper egress
              window. The IRC requirement
              for sleeping rooms is specific:
              minimum 5.7 square feet of
              net clear opening, minimum
              20-inch clear width and 24-inch
              clear height, maximum 44-inch
              sill height from the floor —
              customers want to know whether
              their existing window can be
              enlarged to meet code or whether
              a new cut is required. The work
              involves cutting through the
              foundation wall, which requires
              the right equipment and proper
              shoring, installing a window
              well with proper drainage and
              waterproofing at the base,
              and selecting a window that
              meets the egress minimums.
              Brands like Bilco, Shape Products,
              and Rockwell window wells are
              commonly specified. The permit
              process varies by Kansas City
              municipality — contractors who
              handle the permit pull are
              dramatically easier to work
              with than those who leave it
              to the homeowner. Waterproofing
              around the window well is
              critical in Kansas City&apos;s
              wet springs — a well that
              floods defeats the purpose.
              A basement egress website
              that explains the IRC size
              requirements, shows the
              installation process, covers
              the permit question, and
              addresses window well
              waterproofing earns the
              homeowner who just got
              the inspector&apos;s report.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring an egress window installer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "IRC size requirements — 5.7 sq ft net opening, 20\" wide, 24\" high, 44\" max sill — what meets code",
                  "Foundation cutting — how you cut through block or poured concrete, shoring, structural integrity",
                  "Permitting — whether you pull the permit, what municipalities require, what inspections are involved",
                  "Window well waterproofing — drainage at the base, sealant around the well, what prevents flooding",
                  "Window brands — which casement or awning windows meet egress minimums, what they recommend",
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
                  "IRC code guide — exact minimum dimensions, how to measure net clear opening, what passes inspection",
                  "Installation process — foundation cut, shoring, window well installation, window and seal",
                  "Permitting — we pull the permit, what municipalities in KC metro require, inspection schedule",
                  "Window well waterproofing — drainage aggregate, well sealant, cover options, flood prevention",
                  "Foundation types — poured concrete vs. block — how cutting process differs, timeline for each",
                  "Quote form with foundation type, number of windows, basement finish status, permit question",
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
                &ldquo;Most of my egress customers
                find me right after an inspection
                tells them their basement bedroom
                does not meet code — they are
                stressed about the home sale
                and need someone fast who
                knows what they are doing.
                Without a website, every call
                started with me explaining
                what an egress window is,
                what the IRC requires, and
                why the permit matters.
                The new site with the code
                requirements spelled out,
                our permit process explained,
                and photos of the before
                and after of a foundation
                cut brought in buyers who
                already understood what
                the job involved and
                just needed a price.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Fitzgerald, egress window installer, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An egress window site with IRC
                code guide, process, and quote
                form starts at $225. A full site
                with permitting section, waterproofing
                guide, and foundation type breakdown
                is $425–$850. One egress installation
                covers the cost. No contracts,
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
