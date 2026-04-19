import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for IT Managed Service Providers in Kansas City",
  description:
    "Custom websites for IT managed service providers and MSPs in the Kansas City area. Explain your service tiers, response times, and industry specialties to win small and mid-size business contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/it-managed-services",
  },
};

export default function ITManagedServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for IT Managed Service Providers in Kansas City",
    description: "Custom websites for IT MSPs in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for IT Managed Service Providers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Business owners comparing IT providers want to know your response time guarantees, what your service plans cover, and whether you understand their industry. A website that answers these wins the contract. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For IT MSPs in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">IT Managed Services</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Small and mid-size businesses shopping for an MSP
              are making a long-term trust decision. They want to
              know what is actually included in your managed plan,
              what happens when something breaks at 2am, and
              whether you have experience with their industry&apos;s
              compliance requirements. An MSP website that clearly
              explains your service tiers, SLA guarantees, and
              industry specialties turns a competitive RFP into
              a clear choice.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What businesses evaluate when choosing an MSP
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service plan inclusions — what is covered, what costs extra, help desk scope",
                  "Response time SLA — what the guarantee is, how after-hours emergencies are handled",
                  "Industry experience — healthcare (HIPAA), legal, accounting, manufacturing compliance",
                  "Security stack — endpoint protection, backup, patch management, email filtering",
                  "Onboarding process — how the transition works, how long it takes, disruption level",
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
                What your MSP website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service plans — clearly defined tiers with what is included at each level",
                  "SLA and response times — guaranteed response windows, after-hours support policy",
                  "Industry specialties — healthcare, legal, financial, manufacturing — specific compliance knowledge",
                  "Security services — endpoint protection, backup and DR, email security, patch management",
                  "Onboarding process — how the switch works, what you handle, timeline",
                  "Assessment request form with company size, industry, current setup, pain points",
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
                &ldquo;We were losing proposals to larger MSPs
                because our old site did not explain what was
                actually in our managed plan or how we handled
                after-hours emergencies. The new site with our
                service tiers spelled out, our 4-hour SLA
                guarantee front and center, and a section on
                our HIPAA experience for healthcare clients
                changed our close rate dramatically. We started
                winning contracts against firms with bigger
                marketing budgets.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Bowman, MSP owner, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An MSP site with service plans, SLA summary, and
                assessment form starts at $275. A full site with
                industry specialty pages, security stack detail,
                and onboarding guide is $525–$1,050. One new
                managed contract covers the cost.
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
