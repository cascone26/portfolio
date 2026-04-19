import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Kitchen Exhaust and Hood Cleaning Companies in Kansas City",
  description:
    "Custom websites for commercial kitchen exhaust hood cleaning, grease trap service, and fire code compliance companies in the Kansas City area. Show your IKECA certification, service frequency, and inspection report process to win restaurant and commercial kitchen contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/kitchen-exhaust-cleaning",
  },
};

export default function KitchenExhaustCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Kitchen Exhaust and Hood Cleaning Companies in Kansas City",
    description: "Custom websites for kitchen exhaust hood cleaning companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Hood Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Restaurant owners and kitchen managers need hood cleaning done to NFPA 96 code with a dated inspection sticker and a report they can show their fire marshal. A website with your IKECA cert, service schedule, and report process earns the compliance call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Hood Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Kitchen Exhaust &amp; Hood Cleaning</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Kitchen exhaust cleaning is a
              compliance-driven service. Restaurant
              owners and facilities managers do
              not hire a hood cleaning company
              because they want to — they hire
              because NFPA 96 requires it,
              their fire marshal or insurance
              carrier has asked for documentation,
              or they are opening a new location
              and need to establish a service
              schedule. The questions they ask
              are: are you IKECA (International
              Kitchen Exhaust Cleaning Association)
              certified, do you provide an
              inspection report with before-and-after
              photos and a service sticker,
              what service frequency is appropriate
              for their volume and cooking type
              (NFPA 96 requires quarterly for
              high-volume operations, annually
              for low-volume), do you clean the
              hood, filters, plenum, ductwork,
              and fan, and whether you handle
              the grease trap service as well.
              Multi-location operators — restaurant
              groups, hotel food service, hospital
              kitchens, school cafeterias — want
              a vendor who can service all
              their locations on a consistent
              schedule and provide centralized
              documentation. A hood cleaning
              website that leads with IKECA
              certification, explains the service
              scope, shows the documentation
              you provide, and makes scheduling
              a service visit or consultation
              fast earns the compliance call
              and the multi-location contract.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What restaurant operators check before hiring a hood cleaning company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Certifications — IKECA, NFPA 96 compliance — the credentials their fire marshal looks for",
                  "Service scope — hood, filters, plenum, ductwork, fan, grease containment — what is cleaned",
                  "Documentation — inspection report, before-and-after photos, service sticker, certificate of service",
                  "Frequency schedule — quarterly, semi-annual, annual — what volume and cooking type requires what",
                  "After-hours service — whether you work overnight or early morning to avoid kitchen downtime",
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
                What your hood cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Certifications — IKECA number, NFPA 96 compliance statement, insurance coverage",
                  "Service scope — full system cleaning: hood, filters, plenum, duct, fan — what each step involves",
                  "Documentation — inspection report format, photo documentation, service sticker, compliance certificate",
                  "Service schedule — NFPA 96 frequency guide by cooking type and volume, annual vs. quarterly",
                  "Multi-location — restaurant groups, hotel kitchens, schools, hospitals — centralized scheduling",
                  "Service request form with kitchen type, cooking volume, last service date, number of locations",
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
                &ldquo;Restaurant owners call us
                when the fire marshal has flagged
                them or when they are opening
                a new location. Either way they
                need documentation — a service
                report, a sticker, something
                to show that the work was done
                to code. Without a website, I
                had to explain our IKECA cert,
                our documentation process,
                and our service scope on every
                call. The new site with our
                certification front and center,
                our service report sample,
                and our multi-location scheduling
                section brought in a restaurant
                group that now puts us on all
                twelve of their kitchens.
                That one contract was worth
                more than a year of one-off
                jobs.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Osei, IKECA-certified hood cleaning, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A hood cleaning site with certifications,
                service scope, and scheduling form starts
                at $225. A full site with documentation
                samples, frequency guide, and multi-location
                section is $425–$850. One restaurant group
                contract covers the cost many times over.
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
