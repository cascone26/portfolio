import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Concrete Contractors in Kansas City",
  description:
    "Custom websites for concrete and driveway contractors in the Kansas City area. Show your finished work, get more estimates, and win the residential and commercial jobs that fill your season.",
  alternates: {
    canonical: "https://builtsimple.dev/for/concrete",
  },
};

export default function ConcretePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Concrete Contractors in Kansas City",
    description: "Custom websites for concrete and driveway contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Concrete Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners replacing a driveway or adding a patio want to see the finished product before they call anyone. Make it easy for them to find you and trust your work. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Concrete Contractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Concrete Contractors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Concrete work is a considered purchase. Whether it&apos;s a
              driveway replacement, a stamped patio, or a commercial pour,
              homeowners and property managers want to see the quality of your
              finished work before they invite you out for an estimate. A website
              with a strong photo gallery, clear service types, and honest pricing
              information wins more of those estimate calls before your competitors
              even get a look.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers check before hiring a concrete contractor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Photos of finished driveways, patios, walkways, and stamped concrete work",
                  "Services — driveways, patios, sidewalks, stamped/colored concrete, foundations, commercial",
                  "Whether you do repairs and resurfacing in addition to full pours",
                  "Licensing and insurance — contractor license and general liability",
                  "Pricing range — square footage estimates and what factors affect the cost",
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
                What your concrete contractor website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Gallery organized by project type — driveways, patios, stamped, walkways, commercial",
                  "Services page — residential concrete, commercial, decorative/stamped, repairs, resurfacing",
                  "Pricing guide — starting-at per square foot for common project types",
                  "Free estimate form with project type, approximate size, and location",
                  "Before/after photos for repair and resurfacing projects",
                  "Testimonials with project type, square footage, and specific notes on finish quality",
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
                &ldquo;We do great work but had almost no online presence — just
                a Facebook page with a handful of photos. Once the site was up
                with our stamped patio gallery and a free estimate form, we
                started getting inquiries from homeowners who had already seen
                our work and knew what they wanted. Closing rate on those calls
                is much higher than the cold leads we used to chase.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Ruiz, concrete contractor, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A concrete contractor site with gallery, services, and estimate
                form starts at $225. A full site with project-type pages, pricing
                guide, and service area is $450–850. One medium driveway
                replacement covers the cost. No contracts, no monthly fees.
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
