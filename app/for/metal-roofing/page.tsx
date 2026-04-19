import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Metal Roofing Companies in Kansas City",
  description:
    "Custom websites for metal roofing installers in the Kansas City area. Explain metal roofing benefits, panel systems, and cost vs. longevity to get more quotes from homeowners replacing aging asphalt roofs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/metal-roofing",
  },
};

export default function MetalRoofingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Metal Roofing Companies in Kansas City",
    description: "Custom websites for metal roofing installers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Metal Roofing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Metal roofing customers are making a 50-year decision and will spend hours researching before calling anyone. A website that explains metal roofing systems, addresses the cost question honestly, and shows completed KC homes earns the consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Metal Roofing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Metal Roofing</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Metal roofing customers are a specific kind of buyer: they
              have done research, they know metal costs more upfront,
              and they want to understand exactly what they are getting
              for that premium. Kansas City homeowners replacing an
              aging asphalt roof want to see completed metal roofs on
              real KC homes, understand the panel systems and why
              they perform differently, and know whether the cost
              advantage over a lifetime actually adds up. The metal
              roofer whose website answers all of this earns the customer
              who is ready to invest.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing metal roofing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Panel systems — standing seam vs. exposed fastener (R-panel, corrugated) — differences and best uses",
                  "Materials — steel gauge, Galvalume, aluminum, copper — longevity and corrosion resistance",
                  "Cost vs. lifespan — metal cost vs. replacing asphalt twice over 50 years",
                  "Energy savings — cool roof reflectivity, KC summer cooling savings, potential insurance discounts",
                  "Noise and hail — common concerns addressed honestly — performance in KC weather",
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
                What your metal roofing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Completed project gallery — residential homes in KC with system type and color shown",
                  "Panel systems page — standing seam, R-panel, corrugated — when each is right",
                  "Metal vs. asphalt comparison — 50-year cost, maintenance, insurance, energy savings",
                  "Energy and insurance benefits — cool roof ratings, impact resistance class, potential savings",
                  "Warranty info — manufacturer material warranty, contractor workmanship warranty",
                  "Quote form with roof pitch, square footage estimate, panel preference, current material",
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
                &ldquo;Metal roofing customers are the best customers — they
                have already decided they want metal, they just need to
                pick a contractor. Our old site had no education, no
                comparison, no reason to choose us specifically. The new
                site with the 50-year cost comparison, our KC project
                gallery, and the standing seam explainer brought in
                exactly the homeowners we want — informed, ready to invest,
                and not shopping on price alone.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Brauer, metal roofing, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A metal roofing site with project gallery, panel systems,
                and quote form starts at $275. A full site with
                metal vs. asphalt comparison, energy savings, and
                warranty details is $525–$1,050. One residential metal
                roof installation covers the cost. No contracts, no monthly fees.
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
