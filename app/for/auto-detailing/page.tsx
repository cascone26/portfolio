import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Auto Detailing Shops in Kansas City",
  description:
    "Custom websites for auto detailing businesses in the Kansas City area. Show your service packages, before and after photos, and booking process to win more paint correction, ceramic coating, and detail clients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/auto-detailing",
  },
};

export default function AutoDetailingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Auto Detailing Shops in Kansas City",
    description: "Custom websites for auto detailing businesses in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Auto Detailing Shops",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Clients looking for ceramic coating, paint correction, or a full detail compare your before-and-after photos and service packages before they call anyone. A website that shows your work and makes booking easy wins the job. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Auto Detailing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Auto Detailing</span> Shops in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Car enthusiasts researching ceramic coating,
              paint correction, or full interior restoration
              are comparing quality before they compare price.
              They want to see close-up photos of your paint
              work, understand the difference between your
              service tiers, and know what the results will
              actually look like on their car. Clients who
              want a quick wash-and-wax want easy online
              booking. High-ticket coating and correction
              clients want confidence that you know what
              you are doing before they hand over a $50,000
              vehicle. A detailing website that shows your
              work in detail, explains your products and
              process, and makes booking easy serves both
              types of clients well.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients evaluate when choosing a detailer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before and after photos — paint correction, ceramic coating, interior restoration — real results",
                  "Services — wash, full detail, paint decontamination, paint correction, ceramic coating, PPF",
                  "Products — coating brands (Gtechniq, Ceramic Pro, IGL), polish brands, protection longevity",
                  "Process — how many stages, what tools, how long, whether the car can be driven same day",
                  "Packages and pricing — what each tier includes, add-ons, how to choose the right level",
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
                What your auto detailing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before and after gallery — organized by service type, with vehicle make and condition noted",
                  "Services — exterior detail, interior detail, paint correction (1/2/3-stage), ceramic coating, PPF",
                  "Coating page — products used, longevity, what it protects against, maintenance requirements",
                  "Paint correction page — what swirl marks and scratches look like before vs. after, stages explained",
                  "Packages — tiered options with what each includes, time estimate, price range per category",
                  "Booking form with vehicle type, service interest, current condition, timeline",
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
                &ldquo;People were calling asking &lsquo;how much
                for a detail?&rsquo; with no idea what they
                needed. The new site with packages explained,
                a paint correction page that showed what swirl
                marks actually look like, and a ceramic coating
                section with our product list changed the
                conversations completely. Clients started
                calling asking for specific services because
                they understood what they were buying before
                they picked up the phone.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Nguyen, auto detailer, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An auto detailing site with packages, gallery,
                and booking form starts at $250. A full site
                with paint correction and ceramic coating
                pages, product detail, and service tiers
                is $475–$950. One ceramic coating job
                covers the cost. No contracts, no monthly fees.
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
