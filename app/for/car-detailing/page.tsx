import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Car Detailing Businesses in Kansas City",
  description:
    "Custom websites for auto detailing businesses in the Kansas City area. Show your work, list your packages, and make it easy for car owners to book — without relying on word of mouth.",
  alternates: {
    canonical: "https://builtsimple.dev/for/car-detailing",
  },
};

export default function CarDetailingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Car Detailing Businesses in Kansas City",
    description: "Custom websites for auto detailing businesses in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Car Detailing Businesses",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Before/after photos close more bookings than any ad. Get them on a site that ranks for &ldquo;car detailing KC&rdquo; and watch the phone ring. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Auto Detailers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Car Detailing</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Car detailing is a visual business. The best marketing you have is
              a before/after photo gallery and a clear list of what each package
              covers. Most detailing businesses bury that on Instagram — where it
              disappears in 24 hours and doesn&apos;t rank on Google. A website
              puts your best work in front of buyers who are actively looking.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What car owners look for before booking a detailer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after photos — real results on real cars, not stock images",
                  "What each package includes — wash, clay bar, polish, wax, ceramic coating, interior",
                  "Pricing — exact or range, not 'call for a quote'",
                  "Whether you come to them (mobile) or they bring the car to you",
                  "Turnaround time — how long does a full detail take?",
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
                What your detailing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after gallery organized by service type — exteriors, interiors, paint correction, ceramic",
                  "Packages page with clear inclusions and pricing for each tier",
                  "Service area map — especially important for mobile detailers",
                  "Online booking form with vehicle type, service requested, and preferred date",
                  "Ceramic coating or paint protection pages — higher ticket services that justify the time",
                  "Google reviews embedded or quoted prominently — social proof closes hesitant buyers",
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
                &ldquo;I had a solid Instagram following but no way to rank on
                Google. Once the site launched with my gallery and ceramic coating
                page, I started getting calls from people who found me searching
                for ceramic coating in KC specifically — those jobs are three to
                four times what a basic detail pays.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Henderson, mobile detailer, Kansas City, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A car detailing site with gallery, packages, and booking form
                starts at $200. A full site with service-specific pages, mobile
                service area, and ceramic coating landing page is $400–750.
                One ceramic coating job covers the cost. No contracts, no
                monthly fees.
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
