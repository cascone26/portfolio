import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tree Service Companies in Kansas City",
  description:
    "Custom websites for tree service and arborist companies in the Kansas City area. Rank for emergency tree removal, get more estimates, and build the credibility that justifies your prices.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tree-services",
  },
};

export default function TreeServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tree Service Companies in Kansas City",
    description: "Custom websites for tree service and arborist companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tree Service Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          After every storm, Kansas City homeowners search for emergency tree removal. Be the company that shows up — with proof of insurance and real photos. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tree Service Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tree Service</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tree work is a high-ticket, high-trust purchase. Homeowners with a
              dangerous tree or storm damage are under pressure to act fast —
              but they also need to know you&apos;re licensed, insured, and
              won&apos;t damage their property. A website that shows your work,
              proves your credentials, and makes requesting an estimate easy
              wins that job before your competitors answer the phone.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before hiring a tree service
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Proof of insurance — general liability and workers' comp are non-negotiable for most homeowners",
                  "Whether you have ISA Certified Arborist credentials",
                  "Photos of completed work — removals, trimming, stump grinding",
                  "Emergency availability — same-day or next-day for hazardous situations",
                  "Service area and whether they serve both Missouri and Kansas sides of KC",
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
                What your tree service website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance certificate information and arborist credentials prominently displayed",
                  "Before/after photo gallery by service — removals, trimming, storm damage, stump grinding",
                  "Services page covering tree removal, trimming, stump grinding, emergency service, cabling",
                  "Fast quote request form — address, service needed, and best way to reach them",
                  "Emergency callout with phone number prominent and 24/7 availability clearly stated",
                  "Service area map covering Johnson County, Jackson County, and surrounding areas",
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
                &ldquo;After a bad ice storm we were swamped with calls, but I
                knew we were losing jobs to competitors with better online
                presence. The new site with our insurance info front and center
                and a fast quote form made a real difference — we started winning
                more of the emergency calls that came through Google.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Owens, ISA Certified Arborist, tree service, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tree service site with gallery, services, and quote form starts
                at $250. A full site with service-specific pages, emergency
                callout section, and service area coverage is $500–950. One
                large removal job covers the cost. No contracts, no monthly fees.
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
