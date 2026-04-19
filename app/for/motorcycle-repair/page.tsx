import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Motorcycle Repair Shops in Kansas City",
  description:
    "Custom websites for motorcycle repair, service, and customization shops in the Kansas City area. Show your work, explain your services, and get more maintenance and repair appointments from KC riders.",
  alternates: {
    canonical: "https://builtsimple.dev/for/motorcycle-repair",
  },
};

export default function MotorcycleRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Motorcycle Repair Shops in Kansas City",
    description: "Custom websites for motorcycle repair, service, and customization shops in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Motorcycle Repair Shops",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          KC riders are loyal to shops that know their bikes. A website that shows the brands you specialize in, your work quality, and your turnaround time builds that trust before they drop their bike off. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Motorcycle Shops in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Motorcycle Repair</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Motorcycle riders care deeply about who works on their bike.
              They want to know that your shop has worked on their specific
              make and model, that your techs are certified or experienced
              with it, and that you do quality work. A motorcycle shop website
              that speaks the language of riders — showing the makes you
              service, the work you have done, and your custom and restoration
              capabilities — earns more service appointments and loyal customers.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What riders look for when choosing a motorcycle shop
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Makes and models serviced — Harley-Davidson, Honda, Kawasaki, Yamaha, BMW, Ducati, KTM",
                  "Services — oil changes, tire mounting, brake service, carb rebuild, electrical, engine work",
                  "Custom and performance work — exhaust, suspension, engine builds, paint",
                  "Certifications — Harley certified, Honda certified, IMST training",
                  "Turnaround time — especially during riding season when they don't want their bike sitting",
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
                What your motorcycle shop website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Makes serviced — Harley, Honda, Kawasaki, Yamaha, BMW, Ducati — with model-specific experience",
                  "Services list — maintenance, tires, brakes, electrical, engine, suspension, inspection",
                  "Custom and performance work — builds, modifications, restorations, paint and bodywork",
                  "Shop photos — completed builds, custom work, before/after restorations",
                  "Tech credentials — certifications, training, years of experience with each brand",
                  "Service appointment form with make, model, year, mileage, service needed",
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
                &ldquo;Riders in KC are particular. They want to know you
                understand their specific bike. The new site showing our
                Harley and BMW experience, our custom build gallery, and
                our turnaround time during riding season brought in riders
                who specifically said they found us and chose us because
                we clearly knew what we were doing with their brand.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Vasquez, motorcycle shop, Kansas City, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A motorcycle shop site with services, makes serviced, and
                appointment form starts at $225. A full site with custom
                build gallery, certifications, and brand-specific pages
                is $425–$875. One engine rebuild covers the cost. No
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
