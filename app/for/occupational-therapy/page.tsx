import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Occupational Therapists in Kansas City",
  description:
    "Custom websites for occupational therapy practices in the Kansas City area. Explain your specialties, treatment approaches, and insurance coverage to attract pediatric and adult referrals.",
  alternates: {
    canonical: "https://builtsimple.dev/for/occupational-therapy",
  },
};

export default function OccupationalTherapyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Occupational Therapists in Kansas City",
    description: "Custom websites for occupational therapy practices in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Occupational Therapy Practices",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Parents searching for a pediatric OT and adults recovering from injury or illness want to understand your specialties, what sessions look like, and whether you take their insurance. A clear website earns the referral. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Occupational Therapists in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Occupational Therapists</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Occupational therapy is often poorly understood by
              the people who need it most. Parents searching for
              sensory processing help for their child or adults
              managing a new disability frequently do not know
              exactly what OT does until they find a website that
              explains it clearly. A practice website that describes
              your specialties, explains what sessions involve,
              lists accepted insurance, and shows what the evaluation
              process looks like earns the call from families and
              patients who are ready to start.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What patients and families research before choosing an OT
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Specialties — pediatric sensory processing, fine motor, ADLs, hand therapy, cognitive rehab",
                  "What OT actually does — explained in plain language for families unfamiliar with the field",
                  "Insurance — accepted plans, out-of-pocket rates, whether physician referral is needed",
                  "Evaluation process — what the initial evaluation involves, how long, what the report looks like",
                  "Session format — what a typical session looks like, frequency, goals-based progress",
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
                What your OT practice website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "What is OT — plain-language explanation for families and patients new to the field",
                  "Specialties — pediatric sensory, fine motor development, hand therapy, ADL training, cognitive",
                  "Therapist profiles — OTR/L credentials, certifications, specialty training, years in practice",
                  "Insurance and fees — accepted plans, self-pay rates, referral requirements",
                  "Evaluation process — what the intake and initial evaluation involves, timeline to start",
                  "Referral form with patient age, presenting concern, insurance, referral source",
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
                &ldquo;Parents were getting physician referrals
                for OT and then spending an hour searching
                online trying to figure out who to call and
                what OT even was. Our old site assumed they
                already knew. The new site with a plain-language
                explainer, our pediatric sensory specialty
                described in terms parents recognized, and our
                insurance list front and center meant families
                arrived for evaluations already informed and
                ready to start.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Torres OTR/L, occupational therapy, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An OT practice site with specialties, insurance,
                and referral form starts at $250. A full site with
                specialty pages, therapist profiles, and evaluation
                process guide is $475–$950. Two new
                evaluation referrals cover the cost.
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
