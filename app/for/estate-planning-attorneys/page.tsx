import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Estate Planning Attorneys in Kansas City",
  description:
    "Custom websites for estate planning and probate attorneys in the Kansas City area. Explain your documents, MO and KS law differences, and consultation process to earn calls from families planning ahead.",
  alternates: {
    canonical: "https://builtsimple.dev/for/estate-planning-attorneys",
  },
};

export default function EstatePlanningAttorneysPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Estate Planning Attorneys in Kansas City",
    description: "Custom websites for estate planning and probate attorneys in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Estate Planning Attorneys",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Families searching for estate planning help want to understand which documents they need, what working with an attorney involves, and how Missouri and Kansas law applies to their situation. A website that explains this earns the consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Estate Planning Attorneys in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Estate Planning Attorneys</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Most people who need estate planning have been
              putting it off for years. When a life event finally
              prompts them to act — a new child, a health scare,
              a parent who died without a will — they search for
              an attorney who can explain what they actually
              need and make the process feel manageable. An
              estate planning website that explains wills vs.
              trusts in plain language, addresses MO and KS
              state-specific rules for KC families, and
              describes what the consultation and drafting
              process looks like earns the call from families
              who are finally ready to get this done.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What families research when looking for estate planning help
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Documents explained — will vs. trust, power of attorney, healthcare directive — what each does",
                  "MO vs. KS — state-specific differences for KC families who live near the state line",
                  "What triggers planning — new child, remarriage, business ownership, first home, aging parents",
                  "Process — how many meetings, what to bring, how long drafting takes, what signing involves",
                  "Probate — what happens without a plan, how long probate takes, what it costs",
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
                What your estate planning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Document guide — will, revocable trust, power of attorney, healthcare directive — explained plainly",
                  "MO/KS context — state-specific rules, spousal rights, probate thresholds for KC families",
                  "Life stages — young families, retirement planning, blended families, business owners",
                  "Probate explainer — what it is, how long it takes, what a plan avoids",
                  "Process page — consultation to signing, what to bring, how long the engagement takes",
                  "Consultation form with family situation, documents needed, assets, urgency",
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
                &ldquo;People would search for estate planning
                attorneys and find us, but they were intimidated
                and would not call. They did not understand what
                they needed or how the process worked. The new
                site with the document explainer, a section on
                what happens without a plan, and a simple
                consultation form asking the right questions
                changed that. Consultations started coming in
                from people who had already decided to hire
                us before they even spoke to anyone.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Adkins, estate planning attorney, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An estate planning site with documents explained,
                process overview, and consultation form starts at
                $275. A full site with life-stage pages, MO/KS
                guide, and probate explainer is $525–$1,050.
                One estate plan covers the cost.
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
