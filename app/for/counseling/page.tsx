import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Therapists and Counselors in Kansas City",
  description:
    "Custom websites for therapists, counselors, and mental health practices in the Kansas City area. Get found by people ready to start therapy, communicate your approach, and fill your caseload.",
  alternates: {
    canonical: "https://builtsimple.dev/for/counseling",
  },
};

export default function CounselingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Therapists and Counselors in Kansas City",
    description: "Custom websites for therapists, counselors, and mental health practices in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Therapists and Counselors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          People searching for a therapist are already ready — they just need to trust you enough to call. A clear, personal website makes that easier. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Therapists &amp; Counselors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Therapists &amp; Counselors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Finding a therapist is an anxious process. People searching online
              are often doing it for the first time, unsure what to expect, and
              trying to figure out if you are someone they can trust. A website
              that honestly describes your approach, the issues you work with, and
              what the first session looks like turns those uncertain searchers
              into scheduled clients.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What people check before reaching out to a therapist
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Specialties — anxiety, depression, trauma, couples, grief, ADHD, OCD, LGBTQ+ affirming",
                  "Your therapeutic approach — CBT, EMDR, ACT, somatic, psychodynamic, integrative",
                  "Practical info — insurance accepted, session cost, in-person vs telehealth",
                  "What you as a person are like — your bio, photo, and how you describe your work",
                  "How to get started — is there a consultation call, waitlist, or direct booking?",
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
                What your therapy practice website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "About page with your photo, credentials (LPC/LCSW/LMFT/PhD), and honest bio",
                  "Specialty pages — anxiety, trauma, couples counseling, adolescents, grief, life transitions",
                  "Approach section — how therapy with you actually works, what to expect in a first session",
                  "Insurance and fees — accepted plans, self-pay rates, sliding scale if offered",
                  "New client form or consultation booking — low barrier first contact",
                  "Telehealth availability clearly stated — platform used, states you can serve",
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
                &ldquo;I was on Psychology Today but getting almost no inquiries.
                The new site with my specialty pages for anxiety and trauma, and
                my photo and bio front and center, made a real difference —
                people come in already knowing a bit about me, which makes the
                first session so much easier. I filled my open slots in about
                six weeks.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Stevenson LPC, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A therapy practice site with bio, specialties, and new client
                form starts at $225. A full site with specialty pages, telehealth
                info, insurance details, and consultation booking is $450–850.
                Three new regular clients covers the cost. No contracts, no
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
