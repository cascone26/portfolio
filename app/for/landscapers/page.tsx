import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Landscaping Companies in Kansas City",
  description:
    "Custom websites for landscaping and lawn care businesses in the Kansas City area. Get found by homeowners searching for estimates, and turn browsers into booked jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/landscapers",
  },
};

export default function LandscapersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Landscaping Companies in Kansas City",
    description: "Custom websites for landscaping and lawn care businesses in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Landscaping Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Limited-time offer banner */}
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          March special: Free site mockup for your landscaping business — no cost, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Landscaping Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Landscaping Companies</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Homeowners search before they ever call. By the time someone
              reaches out for an estimate, they&apos;ve already looked at your
              photos, checked your service area, and compared you to two other
              companies. Your website is the first quote comparison they
              make — and most landscapers are losing that comparison without
              knowing it.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners look for before requesting an estimate
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "What services you offer — mowing, design, mulching, snow removal, irrigation",
                  "Whether you actually serve their neighborhood or zip code",
                  "Before/after photos — this is how you prove the work before anyone meets you",
                  "A way to request an estimate without playing phone tag",
                  "Reviews from people in the same area",
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
                What your landscaping website would include
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Every site is custom, but here&apos;s what most landscaping
                businesses actually need:
              </p>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services list broken out clearly — residential, commercial, seasonal, one-time",
                  "Before/after photo gallery organized by project type",
                  "Service area map or list of cities and neighborhoods you cover",
                  "Estimate request form that works on mobile — that&apos;s how most people will find you",
                  "Seasonal promotions section for spring cleanups, fall prep, snow contracts",
                  "Google Reviews integration to show your reputation at a glance",
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
                &ldquo;Spring is when we live or die and last year was the first
                time we went into it with a real website. We basically doubled
                our leads compared to the year before. A lot of people said they
                found us on Google and liked what they saw before they even
                called.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Trevino, landscaping company owner, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter site with your services, service area, and contact
                info starts at $250. A full site with a photo gallery, estimate
                request form, seasonal offers, and review integration runs
                $500-1,000. No contracts, no monthly fees.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Get a free mockup — no obligation. Fill out the form below, or
                give me a call.
              </p>
              <p className="mb-6">
                <a
                  href="tel:8165205652"
                  className="text-accent-light text-lg font-semibold hover:underline"
                >
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
