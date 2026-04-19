import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Personal Injury Attorneys in Kansas City",
  description:
    "Custom websites for personal injury and accident attorneys in the Kansas City area. Explain your case types, fee structure, and process to earn calls from injured clients searching for representation.",
  alternates: {
    canonical: "https://builtsimple.dev/for/personal-injury-attorneys",
  },
};

export default function PersonalInjuryAttorneysPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Personal Injury Attorneys in Kansas City",
    description: "Custom websites for personal injury attorneys in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Personal Injury Attorneys",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Injured clients searching for a personal injury attorney are comparing several options before calling anyone. A website that explains your case results, no-fee-unless-you-win structure, and what the process looks like earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Personal Injury Attorneys in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Personal Injury Attorneys</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Someone who was just injured and is searching for an
              attorney is overwhelmed, in pain, and unsure what
              their case is worth or how the process works.
              They are comparing several attorneys&apos; websites
              before they pick up the phone — and the one they
              call is the one that made them feel like their
              specific situation was understood. A personal injury
              website that shows your case results, explains the
              contingency fee structure clearly, and walks through
              what happens from call to settlement earns the call
              from clients who are ready to hire.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What injured clients look for when searching for an attorney
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Case types — car accidents, truck accidents, slip and fall, workplace injury, medical malpractice",
                  "Fee structure — contingency fee explained, what percentage, what costs are deducted",
                  "Case results — settlements and verdicts, similar cases to theirs",
                  "Process — what happens from first call to resolution, how long cases typically take",
                  "Statute of limitations — MO and KS filing deadlines, why acting quickly matters",
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
                What your personal injury website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Case types — auto, truck, motorcycle, premises liability, wrongful death, medical malpractice",
                  "Fee explainer — contingency fee, no upfront cost, what percentage and when it applies",
                  "Case results — notable verdicts and settlements with case context",
                  "MO/KS guide — filing deadlines, comparative fault rules, insurance requirements",
                  "Process page — intake call, investigation, demand letter, negotiation, trial if needed",
                  "Case evaluation form with injury type, date, insurance situation, medical treatment status",
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
                &ldquo;We were getting calls from people who
                did not understand contingency fees and thought
                they needed money upfront. The new site with
                a clear explainer, our case results organized
                by case type, and a form that asked the right
                questions upfront changed the quality of our
                intake calls entirely. People called already
                understanding the process and ready to move
                forward.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Washington, personal injury attorney, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A personal injury site with case types, fee explainer,
                and intake form starts at $275. A full site with
                case results, MO/KS law guide, and practice area
                pages is $525–$1,050. One auto accident case
                covers the cost. No contracts, no monthly fees.
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
