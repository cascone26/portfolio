import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Speech Therapy Practices in Kansas City",
  description:
    "Custom websites for speech-language pathologists and speech therapy practices in the Kansas City area. Explain your services, populations served, and evaluation process to get more referrals and self-referral appointments.",
  alternates: {
    canonical: "https://builtsimple.dev/for/speech-therapy",
  },
};

export default function SpeechTherapyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Speech Therapy Practices in Kansas City",
    description: "Custom websites for speech-language pathologists and speech therapy practices in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Speech Therapy Practices",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Parents searching for a speech therapist for their child and adults seeking help after a stroke or diagnosis are both making high-stakes decisions. A practice website that explains your approach and populations served builds trust before the first call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Speech Therapy Practices in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Speech Therapy</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Speech therapy clients come from two directions: parents
              researching help for a child with articulation, language,
              or fluency concerns, and adults seeking rehabilitation
              after a stroke, brain injury, or new diagnosis like
              Parkinson&apos;s. Both groups research their options carefully
              before they call or fill out any form. A speech therapy
              practice website that clearly explains who you help,
              what your evaluation looks like, and what treatment
              involves earns more appointments from both pediatric
              and adult referrals.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What families and patients research when choosing a speech therapist
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Ages served — pediatric (infant, toddler, school-age) vs. adult vs. both",
                  "Conditions treated — articulation, language delay, stuttering, voice, AAC, dysphagia, aphasia",
                  "Evaluation process — what the initial evaluation includes, how long it takes, what is assessed",
                  "Approach — play-based for children, evidence-based approaches (PROMPT, Lidcombe, LSVT, VitalStim)",
                  "Insurance — accepted plans, out-of-pocket estimates, school vs. private therapy differences",
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
                What your speech therapy website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pediatric services — articulation, language development, stuttering, literacy, feeding, AAC",
                  "Adult services — aphasia, dysarthria, dysphagia, voice, cognitive-communication, Parkinson's",
                  "Evaluation process — what to expect at the first appointment, how long, what reports parents receive",
                  "Therapist credentials — CCC-SLP certification, specializations, continuing education, experience",
                  "Insurance and rates — accepted plans, self-pay rates, superbill for out-of-network reimbursement",
                  "Intake form with patient age, primary concern, referral source, insurance",
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
                &ldquo;Parents searching for help for their child are
                nervous and doing a lot of research. Our old site was
                just a contact page. The new site with our pediatric
                services page, the evaluation explainer, and our
                therapist credentials helped parents feel confident
                they were in the right place before they even called.
                Our new evaluation waitlist filled faster than it ever
                had before.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Fitzgerald, CCC-SLP, speech therapy practice, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A speech therapy site with services, credentials, and
                intake form starts at $275. A full site with pediatric
                and adult pages, evaluation process, and insurance
                guide is $525–$1,050. A few months of new patient
                evaluations covers the cost. No contracts, no monthly fees.
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
