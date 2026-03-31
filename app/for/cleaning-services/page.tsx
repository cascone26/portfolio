import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Cleaning Services in Kansas City",
  description:
    "Custom websites for residential and commercial cleaning companies in the Kansas City area. Rank locally, earn client trust, and turn visitors into recurring bookings.",
  alternates: {
    canonical: "https://builtsimple.dev/for/cleaning-services",
  },
};

export default function CleaningServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Cleaning Services in Kansas City",
    description: "Custom websites for residential and commercial cleaning companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Cleaning Services",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Cleaning Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Cleaning Services</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Cleaning is a trust business. Your clients are letting someone
              into their home or office. A professional website shows them
              you&apos;re background-checked, insured, and worth trusting —
              before they ever pick up the phone.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What prospective clients need to see
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "That you're bonded and insured — say it clearly, above the fold",
                  "That your team is background-checked",
                  "What&apos;s included in each service tier (recurring vs. deep clean vs. move-out)",
                  "Pricing range or a quick quote form — clients who can&apos;t self-qualify often don&apos;t reach out",
                  "Google reviews from real clients — this closes more bookings than anything else",
                  "Service areas: Overland Park, Lenexa, Shawnee, Prairie Village, and wherever you cover",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent-light mt-0.5 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What your cleaning service website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Homepage with trust signals (insured, background-checked) and primary CTA",
                  "Residential cleaning page with service tiers and pricing range",
                  "Commercial cleaning page (if applicable) with industries you serve",
                  "Service areas page naming every KC neighborhood and suburb you cover",
                  "Before/after photo gallery from real jobs",
                  "Google reviews section embedded or quoted",
                  "Quote request form — short, mobile-friendly, with fast response promise",
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

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter site with your services and contact info starts at
                $250. A full site with service pages, service areas, photo
                gallery, and quote form is $600–1,000. One-time cost, no
                monthly fees, no contracts.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Fill out the form below or give me a call. I&apos;ll send you a
                free mockup — no obligation.
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
