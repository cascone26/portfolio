import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Bathroom Remodeling Contractors in Kansas City",
  description:
    "Custom websites for bathroom remodeling contractors in the Kansas City area. Show your completed projects, tile and fixture options, and process to win more master bath and guest bath renovation jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/bathroom-remodeling",
  },
};

export default function BathroomRemodelingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Bathroom Remodeling Contractors in Kansas City",
    description: "Custom websites for bathroom remodeling contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Bathroom Remodeling Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners planning a bathroom renovation want to see finished tile work, walk-in shower conversions, and vanity upgrades before they choose a contractor. A website that shows your best work by bathroom type wins the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Bathroom Remodeling in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Bathroom Remodeling</span> Contractors in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Homeowners considering a bathroom remodel
              spend significant time looking at finished
              projects before they decide who to call.
              They are imagining their own master bath
              transformed — the outdated builder tile
              replaced, a walk-in shower where the tub
              used to be, a floating vanity with modern
              fixtures — and they want to see the
              contractor who can actually deliver that
              result. They also want to understand the
              process, know what will and won&apos;t be
              disrupted, and have a realistic sense of
              cost before they invite anyone over.
              A bathroom remodeling website that leads
              with a strong portfolio organized by project
              type, explains your process, and makes
              requesting a quote easy earns calls from
              homeowners who are ready to commit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before booking a bathroom contractor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio by type — master bath, walk-in shower, tub conversion, guest bath, full gut renovation",
                  "Tile and materials — tile brands, grout, fixtures, vanities, shower systems, accessibility options",
                  "Process — demolition, waterproofing, tile, plumbing, electrical, fixture install, timeline",
                  "Pricing — range by project scope (cosmetic refresh vs. full gut), what drives cost",
                  "Licenses — plumbing and electrical permits, GC license, insurance, warranty",
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
                What your bathroom remodeling website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before and after gallery — organized by bathroom type with feature callouts on each project",
                  "Services — tub to shower conversion, custom tile, vanity and fixture upgrades, full renovation",
                  "Process walkthrough — consultation, design, demo, waterproofing, tile, plumbing, finish work",
                  "Materials — tile sourcing, fixture brands, custom vs. prefab shower systems, accessibility",
                  "Investment guide — price ranges by project scope, what drives the cost up or down",
                  "Quote form with bathroom type, scope, timeline, existing bathroom photos, and contact info",
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
                &ldquo;We were doing master bath and
                walk-in shower work that looked incredible
                but our only presence was a few Google
                reviews. People would ask if we had a
                portfolio and we would text photos —
                which never landed the same way. The
                new site with full bathroom galleries,
                the before and afters organized by type,
                and a real explanation of our waterproofing
                process and timeline completely changed
                how homeowners found and hired us.
                Inquiries started coming with photos
                of their bathroom already attached.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Flanagan, bathroom remodeling contractor, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A bathroom remodeling site with portfolio,
                services, and quote form starts at $275.
                A full site with materials guide, investment
                ranges, and before/after galleries by type
                is $525–$1,050. One master bath project
                covers the cost many times over.
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
