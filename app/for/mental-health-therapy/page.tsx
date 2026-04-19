import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Mental Health Therapists in Kansas City",
  description:
    "Custom websites for therapists, counselors, and psychologists in the Kansas City area. Explain your specialties, therapy approaches, and insurance to help clients take the first step.",
  alternates: {
    canonical: "https://builtsimple.dev/for/mental-health-therapy",
  },
};

export default function MentalHealthTherapyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Mental Health Therapists in Kansas City",
    description: "Custom websites for therapists and counselors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Mental Health Practices",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Finding a therapist is already hard. Clients searching online need to feel safe before they reach out. A website that explains your approach, specialties, and what the first session looks like removes the barrier and earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Therapists in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Mental Health Therapists</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              People searching for a therapist are often in a
              vulnerable place, and many of them will visit several
              websites before they contact anyone. They are looking
              for a therapist whose approach and personality feel
              like a fit before they ever pick up the phone. A
              therapy website that explains your specialties
              plainly — anxiety, trauma, relationships, grief,
              ADHD — along with your therapy style and what the
              intake process looks like makes the decision to
              reach out feel safer for the people who need you most.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What therapy clients research before reaching out
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Specialties — anxiety, depression, trauma/PTSD, relationship issues, grief, ADHD, life transitions",
                  "Therapy approach — CBT, EMDR, DBT, psychodynamic, somatic — explained in plain language",
                  "Insurance and fees — accepted insurers, out-of-pocket rates, sliding scale availability",
                  "First session — what intake looks like, what to expect, how long, whether it feels like an interview",
                  "Therapist background — education, licensure (LPC, LCSW, PhD), years in practice, personal warmth",
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
                What your therapy website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Therapist profile — your background, training, licensure, and what drew you to this work",
                  "Specialties — each area of focus explained without clinical jargon",
                  "Therapy approaches — CBT, EMDR, DBT, somatic — what each involves and who it helps",
                  "Insurance and fees — accepted plans, self-pay rates, sliding scale policy",
                  "New client process — what the intake call or form looks like, what to expect at first session",
                  "Contact form — new client inquiry with presenting concerns, insurance, preferred schedule",
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
                &ldquo;I had a Psychology Today profile and a
                generic directory page, but clients who were
                clearly a good fit for EMDR trauma work were
                choosing other therapists because they did not
                understand what EMDR was or how I worked. The
                new site with a plain-language EMDR explainer
                and my intake process described step by step
                changed that. I filled my caseload within
                six weeks and had a waitlist for the first
                time.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Nolan LPC, therapist, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A therapy site with therapist profile, specialties,
                and new client form starts at $250. A full site with
                approach pages, insurance guide, and intake process
                detail is $475–$950. Two new clients
                cover the cost. No contracts, no monthly fees.
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
