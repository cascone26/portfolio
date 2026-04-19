import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Auto Body Shops in Kansas City",
  description:
    "Custom websites for auto body and collision repair shops in the Kansas City area. Show your paint work, certifications, and insurance process to earn more collision repair customers.",
  alternates: {
    canonical: "https://builtsimple.dev/for/auto-body",
  },
};

export default function AutoBodyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Auto Body Shops in Kansas City",
    description: "Custom websites for auto body and collision repair shops in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Auto Body Shops",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Collision repair customers are dealing with insurance claims and picking a shop under stress. A website that shows your certifications, insurance relationships, and before/after work builds trust before they drop off their car. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Auto Body Shops in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Auto Body Shops</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Auto body customers arrive stressed — they just had an
              accident, they are dealing with an insurance claim, and
              they need to trust whoever is going to fix their car
              quickly. Most are choosing between shops their insurance
              recommends and shops they find on their own. An auto
              body website that shows your certifications, explains
              the insurance claim process, and features before-and-after
              photos of your paint and bodywork earns the customers
              who want quality — not just whoever State Farm suggested.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What collision repair customers look for in a body shop
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Certifications — I-CAR Gold, OEM certifications (Ford, GM, Honda, Toyota, etc.)",
                  "Insurance relationships — which insurers you work with directly, direct repair programs",
                  "Services — collision repair, paintless dent repair, frame straightening, paint matching, detailing",
                  "Rental car coordination — whether you help arrange a rental while the car is being repaired",
                  "Warranty — what is guaranteed on paint and bodywork, how long",
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
                What your auto body shop website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after gallery — collision repairs, paint work, PDR, frame repair, hail damage",
                  "Insurance process guide — how to file a claim, your role in the process, supplement handling",
                  "Certifications — I-CAR, OEM brand certifications prominently displayed",
                  "Services — collision, PDR, paint, frame, glass, hail, custom paint",
                  "Insurance partners — insurers you work with, direct repair program participation",
                  "Estimate form with vehicle info, damage description, insurance carrier",
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
                &ldquo;People with luxury cars were going to the
                dealer body shop because they thought we were just
                a regular shop. The new site showing our OEM
                certifications, our computerized frame straightening
                equipment, and our paint matching work changed that.
                We started getting BMWs and trucks that owners cared
                about — customers who wanted quality and were willing
                to wait for us specifically.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Kowalczyk, auto body shop, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An auto body site with services, certifications,
                and estimate form starts at $250. A full site with
                before/after gallery, insurance process guide, and
                OEM certification pages is $475–$950. One
                insurance repair job covers the cost.
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
