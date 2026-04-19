import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Commercial Cleaning Companies in Kansas City",
  description:
    "Custom websites for commercial and janitorial cleaning companies in the Kansas City area. Win more office, retail, and industrial contracts with a professional online presence.",
  alternates: {
    canonical: "https://builtsimple.dev/for/cleaning-services-commercial",
  },
};

export default function CommercialCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Commercial Cleaning Companies in Kansas City",
    description: "Custom websites for commercial and janitorial cleaning companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Commercial Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Facilities managers and office managers who hire cleaning companies are looking for reliability and professionalism above everything else. Show it before they even call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Commercial Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Commercial Cleaning</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Commercial cleaning contracts are worth thousands of dollars a
              year — and they renew automatically when the client is satisfied.
              The facility managers and business owners who sign those contracts
              are making a trust decision. A professional website that shows
              your bonding and insurance, your service types, and your experience
              with different facility types is how you win that bid over the
              competition that shows up with just a flier.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What facility managers check before hiring a cleaning company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Bonding and insurance — general liability and bonded employees are non-negotiable",
                  "Facility types served — offices, retail, medical, industrial, schools, restaurants",
                  "Service frequency options — nightly, weekly, biweekly, and day porter services",
                  "Staff background checks and training — especially for medical or secure facilities",
                  "Whether you provide supplies and equipment or require facility-supplied",
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
                What your commercial cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance and bonding information prominently displayed — builds immediate trust",
                  "Facility type pages — office, medical, retail, industrial, school, restaurant cleaning",
                  "Service options — nightly janitorial, day porter, periodic deep cleaning, floor care",
                  "Staff vetting and training — background check policy, cleaning certifications",
                  "Free quote form with facility type, square footage, frequency, and special requirements",
                  "Client testimonials from facility managers with facility type and contract length mentioned",
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
                &ldquo;We were doing residential and wanted to break into
                commercial contracts. The new website with our bonding
                certificate, our facility type pages, and our medical cleaning
                experience opened the door. We landed a three-building medical
                office contract within 90 days of the site going live.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Diaz, commercial cleaning company, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A commercial cleaning site with services, insurance info, and
                quote form starts at $225. A full site with facility-type pages,
                staff vetting info, and service area is $450–850. One new
                mid-size office contract covers the cost in the first month.
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
