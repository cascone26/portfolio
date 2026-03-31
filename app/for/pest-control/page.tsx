import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pest Control Companies in Kansas City",
  description:
    "Custom websites for pest control companies in the Kansas City area. Rank for pest-specific and emergency searches, build homeowner trust, and turn visitors into booked jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pest-control",
  },
};

export default function PestControlPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pest Control Companies in Kansas City",
    description: "Custom websites for pest control companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pest Control Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pest Control Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pest Control</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pest control is an urgency business. Someone finds a mouse, a
              wasp nest, or signs of termites — and they&apos;re Googling and
              calling within the hour. Your website needs to show up, earn
              trust fast, and make calling or booking easy.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners need before they call
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pest-specific pages — ant, mouse, termite, bed bug, wasp — each one is a separate search",
                  "Your phone number in large text in the header — pest calls are often urgent",
                  "Same-day or emergency service availability, stated clearly if you offer it",
                  "Licensing and certification info — parents with kids and pets want to know you&apos;re legitimate",
                  "Google reviews: 50+ reviews at 4.8+ is a major trust signal in this industry",
                  "Service areas covering the full KC metro — both Missouri and Kansas sides",
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
                What your pest control website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Homepage with pest icons, trust signals, and prominent phone number CTA",
                  "Individual pages for each major pest you treat",
                  "Residential and commercial service pages",
                  "Storm/seasonal pest landing pages (termite season, fall mice, mosquitoes)",
                  "Service areas page naming every KC suburb and neighborhood you cover",
                  "About page with licensing, certifications, and team photos",
                  "Contact form with pest type and urgency fields",
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
                $250. A full site with individual pest pages, service areas,
                and seasonal landing pages is $600–1,000. One-time cost, no
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
