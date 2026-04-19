import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Senior Home Care Agencies in Kansas City",
  description:
    "Custom websites for in-home senior care and home health agencies in the Kansas City area. Build trust with families, explain your services clearly, and get more caregiver inquiries.",
  alternates: {
    canonical: "https://builtsimple.dev/for/senior-care",
  },
};

export default function SeniorCarePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Senior Home Care Agencies in Kansas City",
    description: "Custom websites for in-home senior care and home health agencies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Senior Home Care Agencies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Adult children searching for care for a parent are making one of the hardest decisions of their lives. Be the agency that looks trustworthy, answers their questions, and earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Senior Care Agencies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Senior Home Care</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Families searching for in-home care for a parent or grandparent
              aren't impulse buyers. They spend days researching before making a
              call. A home care agency with a website that clearly explains
              services, caregiver background and training, and what to expect
              from day one consistently earns more consultations — because
              families can do their research before reaching out, and they
              arrive ready to say yes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What families check before contacting a home care agency
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services — companion care, personal care, dementia care, post-surgical care, respite care",
                  "Caregiver hiring and training — background checks, CPR, dementia certification, supervision",
                  "Whether they're licensed, bonded, and insured — and how to verify it",
                  "Minimum hours and scheduling flexibility — hourly, overnight, 24/7, live-in options",
                  "How care plans are developed and who they communicate with",
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
                What your home care agency website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services overview — companion care, personal care, Alzheimer's/dementia care, post-hospital care",
                  "Caregiver standards — hiring process, background check, training, supervision model",
                  "Licensing and insurance — credentials clearly stated, trust signals front and center",
                  "Care plan process — how assessments work, who's involved, how plans are updated",
                  "Scheduling options — minimum hours, overnight, live-in, 24/7 availability",
                  "Family testimonials with specific care situation, caregiver name, and outcome",
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
                &ldquo;We were competing with franchise names and regional
                agencies with big marketing budgets. The new website let us
                show our local roots and our caregiver training standards in
                detail — and families started calling us because they felt
                like they knew us before they called. Our consultation rate
                doubled within two months.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Okafor, home care agency owner, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A home care agency site with services, caregiver standards, and
                contact form starts at $250. A full site with care-type pages,
                testimonials, and FAQ for families is $450–$950. Two new
                long-term clients cover the investment. No contracts, no
                monthly fees.
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
