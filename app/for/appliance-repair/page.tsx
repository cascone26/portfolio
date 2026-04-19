import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Appliance Repair Companies in Kansas City",
  description:
    "Custom websites for appliance repair businesses in the Kansas City area. Rank for urgent appliance searches, show your brands and pricing, and get more same-day service calls.",
  alternates: {
    canonical: "https://builtsimple.dev/for/appliance-repair",
  },
};

export default function ApplianceRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Appliance Repair Companies in Kansas City",
    description: "Custom websites for appliance repair businesses in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Appliance Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          When someone&apos;s refrigerator stops working, they search immediately and call whoever looks most legitimate. Be that company. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Appliance Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Appliance Repair</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Appliance repair is an urgent-need business. The refrigerator
              stops cooling, the dryer stops heating, the dishwasher is leaking —
              and the homeowner opens Google and calls one of the first three
              results that look real. The companies that get those calls have a
              website that names the brands they service, states a service call
              fee upfront, and makes scheduling same-day service easy.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before calling an appliance repair company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Brands serviced — GE, Samsung, LG, Whirlpool, Maytag, Bosch, Sub-Zero, Viking",
                  "Appliances repaired — refrigerators, washers, dryers, dishwashers, ovens, stoves",
                  "Service call fee and diagnostic process — what they charge just to show up",
                  "Same-day or next-day availability — timing matters more than price for urgent repairs",
                  "Whether parts are stocked or ordered — how long the actual repair takes",
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
                What your appliance repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Brands page — every brand serviced listed clearly, especially luxury brands (Sub-Zero, Miele)",
                  "Appliance type pages — refrigerator repair, washer/dryer, dishwasher, oven, cooktop",
                  "Service fee and pricing transparency — diagnostic fee and how parts and labor are charged",
                  "Same-day scheduling callout with phone number prominent on every page",
                  "Service area with specific cities and zip codes covered",
                  "Reviews with appliance type, brand, and fast turnaround mentioned",
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
                &ldquo;I had a Google My Business listing but no website, and
                I was losing calls to guys who had a real site. Added the
                website with my brands list and same-day scheduling and
                immediately started getting more calls, especially for Samsung
                and LG refrigerators where people specifically search for
                someone who does that brand.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — H. Park, appliance repair technician, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An appliance repair site with brands, appliance types, and
                scheduling info starts at $200. A full site with brand-specific
                pages, pricing transparency, and service area is $400–750.
                Five service calls cover the cost. No contracts, no monthly fees.
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
