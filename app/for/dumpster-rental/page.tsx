import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Dumpster Rental Companies in Kansas City",
  description:
    "Custom websites for dumpster rental companies in the Kansas City area. Show your sizes and pricing, rank for local searches, and get more same-day and next-day rental requests.",
  alternates: {
    canonical: "https://builtsimple.dev/for/dumpster-rental",
  },
};

export default function DumpsterRentalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Dumpster Rental Companies in Kansas City",
    description: "Custom websites for dumpster rental companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Dumpster Rental Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Someone starting a cleanout, renovation, or roofing job searches "dumpster rental near me" and calls whoever shows up first with a real price. Be that company. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Dumpster Rental in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Dumpster Rental</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Dumpster rental is a transactional search — someone needs a
              dumpster now and they&apos;re comparing three tabs at once.
              The company that wins is the one with clear sizing, upfront
              pricing, same-day or next-day availability, and a phone number
              that&apos;s easy to find. A website that answers every question
              before they ask it gets the call before the bigger national
              companies do.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers check before renting a dumpster
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Dumpster sizes — 10, 15, 20, 30, 40 yard options with visual size comparison",
                  "Pricing — flat rate vs. weight-based, rental period, overage charges, delivery fee",
                  "What can and can't go in — prohibited items, hazmat, tires, appliances, concrete",
                  "How quickly they can deliver — same-day, next-day, weekend availability",
                  "Service area — specific cities and zip codes covered",
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
                What your dumpster rental website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Size guide — each container size with dimensions, cubic yards, typical use case, and photo",
                  "Pricing page — flat rates, rental period, overage policy, and what affects cost",
                  "Prohibited items list — clear, scannable table so customers know what they can toss",
                  "Booking form or instant quote — size, address, dates, debris type",
                  "Same-day availability callout with prominent phone number",
                  "Service area with cities and zip codes covered",
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
                &ldquo;We were losing to national chains because we had no web
                presence and people assumed we were less reliable. The site
                with our size guide and upfront flat-rate pricing changed
                everything — customers stopped negotiating because they already
                knew the price, and we started ranking above the national
                companies for local searches.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — V. Hanson, dumpster rental company, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A dumpster rental site with size guide, pricing, and booking
                form starts at $200. A full site with container pages, service
                area, and same-day callout is $400–$750. Two rentals cover the
                cost. No contracts, no monthly fees.
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
