import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Cleaning Companies in Kansas City",
  description:
    "Custom websites for window washing and window cleaning businesses in the Kansas City area. Show your results, get more quote requests, and build the recurring client base that pays the bills.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-cleaning",
  },
};

export default function WindowCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Cleaning Companies in Kansas City",
    description: "Custom websites for window washing and window cleaning businesses in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners and property managers search for window cleaners before every season. Make sure they find you — and can get a quote in 60 seconds. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Cleaning Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Cleaning</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window cleaning clients — especially commercial and recurring
              residential — are loyal once they find someone reliable. The
              challenge is getting that first job. A professional website that
              shows your residential and commercial work, lists pricing or a
              quote range, and makes scheduling easy wins more of those first
              calls than a competitor with nothing to show online.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers check before booking window cleaning
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Whether you do residential, commercial, or both",
                  "Before/after photos or videos of finished windows",
                  "Pricing structure — per window, per pane, per square foot, or by job size",
                  "Insurance and bonding (especially for commercial clients)",
                  "Recurring service options — quarterly, biannual, or annual schedule",
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
                What your window cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after photo gallery — interior, exterior, high-rise, screens, tracks",
                  "Residential and commercial service pages with what each includes",
                  "Pricing guide or quote request form with home size or window count",
                  "Recurring service packages — how clients set up a regular schedule and what they save",
                  "Insurance and bonding information for commercial decision-makers",
                  "Reviews from both homeowners and property/facility managers",
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
                &ldquo;I had a solid residential base from referrals but wanted to
                break into commercial. The new website with a dedicated commercial
                page showing our high-rise work and our insurance info opened that
                door — we landed our first office building contract within two
                months of launch.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Hoffman, window cleaning company, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window cleaning site with services, photos, and quote form
                starts at $200. A full site with residential and commercial
                pages, recurring service packages, and service area coverage
                is $400–750. One commercial contract covers the cost. No
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
