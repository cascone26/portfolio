import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Janitorial Services in Kansas City",
  description:
    "Custom websites for janitorial and commercial cleaning companies in the Kansas City area. Explain your service frequencies, bonded crew, and specialty cleaning to win office and facility contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/commercial-cleaning-franchise",
  },
};

export default function CommercialCleaningFranchisePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Janitorial Services in Kansas City",
    description: "Custom websites for janitorial and commercial cleaning companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Janitorial Services",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Facility managers and office managers comparing janitorial bids want to know your bonding and insurance, your service frequency options, and whether you can handle their specific facility type. A website that answers these wins the RFP. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Janitorial Services in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Janitorial Services</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Commercial cleaning contracts are won on trust and
              professionalism — facility managers are giving your
              crew unsupervised after-hours access to their building.
              Before they call anyone, they are checking that the
              company is bonded and insured, that the crews are
              trained, and that the service scope covers their
              facility type. A janitorial services website that
              leads with your credentials, explains your crew
              vetting process, and makes requesting a bid simple
              wins the recurring contracts that build a real business.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What facility managers look for in a janitorial service
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Bonding and insurance — fully bonded, liability and workers comp — proof they will not have a problem",
                  "Crew vetting — background checks, training certifications, turnover management",
                  "Facility types — office, medical, retail, industrial, school, religious — experience with each",
                  "Service frequency — nightly, weekly, monthly, day porter — what each includes",
                  "Specialty services — floor care (strip and wax), carpet extraction, window cleaning, disinfection",
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
                What your janitorial services website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Credentials — bonded, insured, background-checked crews, certifications, years in business",
                  "Facility types served — office, medical, retail, warehouse, school, religious facilities",
                  "Service frequencies — nightly, weekly, monthly programs — what each includes",
                  "Specialty services — floor care, carpet extraction, disinfection protocols, window cleaning",
                  "Quality control — inspection system, supervisor oversight, how issues are resolved",
                  "Bid request form with facility type, square footage, frequency needed, current situation",
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
                &ldquo;We were getting turned down for medical
                facility bids because nothing on our old site proved
                we understood healthcare cleaning protocols. The new
                site with our medical-grade disinfection process,
                our background check policy, and our facility-type
                experience sections changed that. We landed two
                medical office contracts in the first quarter after
                launching and they are our best accounts.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Johnson, janitorial services, Kansas City, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A janitorial services site with credentials, services,
                and bid form starts at $250. A full site with
                facility-type pages, service frequency guide, and
                specialty services is $475–$950. One medium
                office contract covers the cost.
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
