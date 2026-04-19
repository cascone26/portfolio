import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pressure Washing Businesses in Kansas City",
  description:
    "Custom websites for pressure washing and soft wash companies in the Kansas City area. Show your results, fill your schedule, and rank for local searches before your competition does.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pressure-washing",
  },
};

export default function PressureWashingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pressure Washing Businesses in Kansas City",
    description: "Custom websites for pressure washing and soft wash companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pressure Washing Businesses",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Before/after photos of clean driveways and roofs close jobs faster than any ad. Get them on a site that ranks. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pressure Washing Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pressure Washing</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pressure washing is one of the most visual services there is — a
              dirty driveway becomes spotless in an hour. The businesses that
              dominate local search aren&apos;t necessarily the best operators;
              they&apos;re the ones with a fast website, real before/after photos,
              and a quote form that takes 30 seconds to fill out.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before booking a pressure wash
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after photos — the more specific the surface type, the better",
                  "Whether you do soft wash (low pressure for roofs and siding) vs. pressure wash",
                  "What surfaces you clean — driveway, deck, roof, siding, fence, patio, gutters",
                  "Pricing — ballpark per linear foot or by surface type",
                  "Service area and how quickly they can get on the schedule",
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
                What your pressure washing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after gallery organized by surface — driveways, roofs, decks, siding, fences",
                  "Services page with soft wash vs. pressure wash explained clearly",
                  "Pricing guide or quote request form with surface type and approximate square footage",
                  "Service area map — especially valuable if you cover multiple suburbs",
                  "Seasonal promotion section — spring driveway special, fall deck prep",
                  "Reviews mentioning before/after results and booking experience",
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
                &ldquo;I was getting jobs through Nextdoor and Facebook but nothing
                from Google. Once I had a real site with a before/after gallery
                and service pages for driveways, decks, and roofs, I started
                getting calls from people searching specifically for soft wash roof
                cleaning — which is my highest-margin service.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Walsh, pressure washing owner, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pressure washing site with gallery, services, and quote form
                starts at $200. A full site with surface-specific pages, service
                area coverage, and seasonal promotions section is $400–750.
                Two driveway/deck combos covers the cost in the first week. No
                contracts, no monthly fees.
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
