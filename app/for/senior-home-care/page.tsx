import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Senior Home Care Agencies in Kansas City",
  description:
    "Custom websites for in-home senior care agencies in the Kansas City area. Help families understand your caregiver screening, services, and scheduling process when they are looking for help with an aging parent.",
  alternates: {
    canonical: "https://builtsimple.dev/for/senior-home-care",
  },
};

export default function SeniorHomeCare() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Senior Home Care Agencies in Kansas City",
    description: "Custom websites for in-home senior care agencies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Senior Home Care Agencies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Adult children searching for in-home care for a parent are under stress and need to trust the agency immediately — they want to understand caregiver screening, what happens when a caregiver calls out, and how billing works before they call. A website that answers those questions earns the conversation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Senior Home Care in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Senior Home Care</span> Agencies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Families searching for in-home care for an
              aging parent are often in crisis mode — a
              recent fall, a hospital discharge, or the
              gradual realization that mom or dad can no
              longer manage alone. They are scared, they
              feel guilty about needing help, and they
              need to trust the agency before anyone
              enters the home. They want to know how
              caregivers are screened and trained, what
              happens if a caregiver is sick, whether
              you handle Alzheimer&apos;s and dementia,
              how billing and long-term care insurance
              works, and what the process is to get
              started. A senior home care website that
              answers these questions with genuine warmth
              and clarity earns the call from the adult
              child who is ready to get help.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What families research when choosing a home care agency
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Caregiver screening — background checks, training requirements, reference verification",
                  "Backup coverage — what happens when a caregiver is sick or can't make it",
                  "Services — companionship, personal care, dementia care, medication reminders, transportation",
                  "Scheduling — minimum hours, overnight care, 24/7 availability, short-term vs. ongoing",
                  "Billing — hourly rates, long-term care insurance billing, Medicaid waiver participation",
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
                What your senior home care website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Caregiver standards — hiring process, background check depth, training, ongoing supervision",
                  "Services — companionship, personal care, Alzheimer's/dementia, post-hospital recovery, overnight",
                  "How it works — free in-home assessment, care plan creation, caregiver matching, transition",
                  "Backup coverage policy — how the agency handles last-minute changes and emergencies",
                  "Billing and insurance — rates, long-term care insurance assistance, Medicaid waiver information",
                  "Family inquiry form with care recipient name, location, level of care, timeline, insurance type",
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
                &ldquo;Families were calling us but they
                were also calling three or four other
                agencies. The calls were long because
                they had so many questions our website
                never answered. The new site with our
                caregiver hiring process explained,
                a real section on how we handle dementia
                care, and our backup coverage policy
                laid out changed everything. Families
                called us already trusting us — they
                weren&apos;t comparing us anymore, they
                were asking how soon we could start.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Ashworth, home care agency owner, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A senior home care site with services,
                caregiver standards, and inquiry form starts
                at $275. A full site with dementia care guide,
                billing and insurance detail, and process
                walkthrough is $525–$1,050. One ongoing
                care client covers the cost.
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
