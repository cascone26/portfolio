import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Custom Home Builders in Kansas City",
  description:
    "Custom websites for custom home builders and luxury home construction companies in the Kansas City area. Showcase your floor plans, build process, and finished homes to attract qualified buyers.",
  alternates: {
    canonical: "https://builtsimple.dev/for/custom-home-builders",
  },
};

export default function CustomHomeBuildersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Custom Home Builders in Kansas City",
    description: "Custom websites for custom home builders in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Custom Home Builders",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Custom home buyers are spending $500K–$1.5M+ and vetting every builder carefully. A website that shows completed homes, your design-build process, and what sets your finishes apart earns the consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Custom Home Builders in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Custom Home Builders</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Custom home buyers are making the largest purchase of their
              lives and spend months researching builders before they reach
              out to anyone. They want to see completed homes that match
              their taste, understand the design-build process from lot
              to certificate of occupancy, and know how you handle
              selections, change orders, and communication during the
              build. The custom builder whose website answers all of
              this — with photos, process, and real KC neighborhoods —
              gets the consultation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What custom home buyers research when choosing a builder
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Completed home gallery — architectural styles, interior finishes, exterior materials, lot photos",
                  "Build process — design phase, permits, framing, mechanicals, selections, walkthrough, timeline",
                  "Lot availability — whether the builder has lots in specific KC communities or builds on buyer lots",
                  "Floor plans — available plans, customization options, square footage ranges, ceiling heights",
                  "Allowances and specifications — what standard finishes include and what upgrades look like",
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
                What your custom home builder website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Completed homes gallery — interior and exterior photos organized by community and style",
                  "Build process page — step-by-step from initial meeting through final walkthrough",
                  "Available communities — lots in development, nearby KC areas served, on-your-lot builds",
                  "Floor plan library — base plans with photos, customizable features, pricing ranges",
                  "Design center overview — what selections you help clients make, vendor relationships",
                  "Consultation form with budget range, timeline, community preference, lot status",
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
                &ldquo;Our referral business was strong but we had no
                way to show new buyers what we built. The new site
                with the completed homes gallery organized by
                community, our step-by-step build process, and
                the floor plan library meant buyers came to the
                first meeting already knowing our work and excited
                about it. It shortened our sales cycle significantly
                and attracted buyers with bigger budgets who wanted
                what they saw.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Callahan, custom home builder, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A custom home builder site with gallery, process,
                and consultation form starts at $375. A full site
                with community pages, floor plan library, and
                design center overview is $700–$1,400. A fraction
                of one build margin covers the cost.
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
