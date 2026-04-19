import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Moving Companies in Kansas City",
  description:
    "Custom websites for moving companies in the Kansas City area. Win more estimate requests by building trust before customers call — and convert high-anxiety movers into booked jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/moving",
  },
};

export default function MovingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Moving Companies in Kansas City",
    description: "Custom websites for moving companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Moving Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Moving season peaks April–September. Get your site live before the rush. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Movers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Moving Companies</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Moving customers are anxious and comparison-shopping aggressively.
              They&apos;re trusting strangers with everything they own and making
              a decision fast. A website that addresses their real concerns — damage
              protection, transparent pricing, and reliability — wins more quotes
              before a competitor even gets a chance.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers check before booking a moving company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance coverage — what happens if something breaks during the move",
                  "Pricing structure — any mention of hidden fees or surprise charges at delivery",
                  "Whether the estimate matches the final invoice — this is the #1 review complaint",
                  "How they handle fragile or high-value items",
                  "Local routes and long-distance coverage — do they serve the destination?",
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
                What your moving company website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance and liability coverage displayed clearly — what's protected and how",
                  "Transparent pricing structure or range with no-surprise-charges commitment",
                  "Local KC metro service area + long-distance routes (KC to Chicago, KC to Dallas, etc.)",
                  "Online estimate form directly on the homepage — name, move date, from/to cities",
                  "Reviews specifically mentioning careful handling and accurate pricing",
                  "Services breakdown — local, long-distance, apartment, commercial, packing",
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
                &ldquo;We were competing entirely on price with the big national
                chains. The new site led with our damage protection and no-surprise
                pricing — and our close rate on estimate requests jumped significantly.
                Customers said they called us because the site gave them confidence.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Torres, owner, KC-area moving company
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A moving company site with services, pricing structure, insurance
                details, and estimate form starts at $300. With service area and
                route pages, it&apos;s $600–1,000. One extra booked move covers
                it. No contracts, no monthly fees.
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
