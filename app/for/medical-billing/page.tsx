import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Medical Billing Companies in Kansas City",
  description:
    "Custom websites for medical billing services and revenue cycle management companies in the Kansas City area. Help healthcare practices understand your credentials, specialty experience, and billing process to earn new contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/medical-billing",
  },
};

export default function MedicalBillingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Medical Billing Companies in Kansas City",
    description: "Custom websites for medical billing services and RCM companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Medical Billing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Medical practices considering outsourced billing want to know your specialty experience, collections rate, HIPAA compliance process, and how the transition works before they agree to a demo. A website that explains all of this earns the evaluation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-user/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Medical Billing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Medical Billing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Medical practices evaluating a billing
              company are making a high-stakes decision
              — their revenue cycle depends on it. Before
              they agree to a conversation, they want to
              know whether you have experience with their
              specialty, what your clean claim rate and
              collections percentage actually look like,
              how you handle denials, whether you are
              HIPAA compliant, and what the transition
              from their current billing looks like. They
              are comparing several services and the
              one that presents the most specific, credible
              information earns the evaluation call. A
              medical billing website that speaks directly
              to the practice administrator&apos;s concerns —
              specialty expertise, compliance, collections
              performance, and a smooth transition —
              generates the quality leads that turn into
              long-term contracts.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What medical practices research before outsourcing billing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Specialty experience — which medical specialties you bill for, payer mix familiarity",
                  "Performance metrics — clean claim rate, first-pass resolution rate, collections percentage",
                  "HIPAA compliance — BAA process, data security, staff training, breach protocols",
                  "Denial management — how denials are worked, appeals process, reporting",
                  "Transition process — how the switch happens, data migration, timeline, service continuity",
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
                What your medical billing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Specialty experience — specific specialties you bill for, payer expertise, EHR familiarity",
                  "Performance metrics — clean claim rate, first-pass resolution, collections rate, denial outcomes",
                  "HIPAA compliance — security practices, BAA process, staff training, audit compliance",
                  "Services — claims submission, denial management, AR follow-up, credentialing, reporting",
                  "Transition process — step-by-step onboarding, data migration, go-live timeline",
                  "Demo request form with specialty, EHR system, current billing setup, biggest challenges",
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
                &ldquo;Practice administrators were skeptical
                because they&apos;d been burned by billing
                companies that overpromised. Our website
                had nothing that differentiated us — no
                performance numbers, no specialty detail,
                no explanation of how we handle denials.
                The new site with our clean claim rate,
                our specialties listed, our HIPAA compliance
                process, and our onboarding timeline
                changed the calls we got. Administrators
                came to the demo already having vetted
                us — they were asking about contract
                terms instead of still deciding if
                we were credible.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — O. Nkosi, medical billing company owner, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A medical billing site with services,
                credentials, and demo request form starts
                at $275. A full site with specialty pages,
                performance metrics, and compliance detail
                is $525–$1,050. One contract covers
                the cost immediately.
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
