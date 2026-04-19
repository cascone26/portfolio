import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Bankruptcy Attorneys in Kansas City",
  description:
    "Custom websites for Chapter 7 and Chapter 13 bankruptcy attorneys in the Kansas City area. Explain the process, address fears, and get more consultations from people searching for debt relief.",
  alternates: {
    canonical: "https://builtsimple.dev/for/bankruptcy-attorneys",
  },
};

export default function BankruptcyAttorneysPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Bankruptcy Attorneys in Kansas City",
    description: "Custom websites for Chapter 7 and Chapter 13 bankruptcy attorneys in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Bankruptcy Attorneys",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          People searching for bankruptcy attorneys are scared, overwhelmed, and need reassurance before they call anyone. A website that explains the process clearly, addresses the fear, and answers common questions gets the consultation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Bankruptcy Attorneys in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Bankruptcy Attorneys</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              People researching bankruptcy are in crisis. They are behind
              on bills, dodging collector calls, and terrified of what
              bankruptcy means for their future. The bankruptcy attorney
              whose website addresses those fears directly — explaining
              what Chapter 7 and Chapter 13 actually do, what they protect,
              and what life looks like after — earns the consultation call
              from people who would otherwise keep searching out of fear.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What people need to know before calling a bankruptcy attorney
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Chapter 7 vs. Chapter 13 — what each one does, who qualifies, and what gets discharged",
                  "What bankruptcy protects — stopping wage garnishment, foreclosure, repossession, collector calls",
                  "What you keep — exemptions for home equity, car, retirement accounts, personal property",
                  "How long it takes — Chapter 7 typically 3-6 months; Chapter 13 is a 3-5 year repayment plan",
                  "Credit impact — how long it stays on your report, how quickly people rebuild afterward",
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
                What your bankruptcy law website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Chapter 7 page — who qualifies (means test), what gets discharged, what you keep, timeline",
                  "Chapter 13 page — repayment plan structure, how it stops foreclosure, what it costs monthly",
                  "Automatic stay explainer — what it stops immediately: garnishment, calls, repossession, foreclosure",
                  "Exemptions guide — Missouri and Kansas homestead, vehicle, retirement, and wage exemptions",
                  "Free consultation offer — prominently placed, low barrier, no obligation framing",
                  "FAQ page — answers the 10 most common questions people search before calling",
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
                &ldquo;Most people who found us were so anxious they had been
                putting off calling for months. The new site with our Chapter 7
                explainer, the automatic stay breakdown, and the FAQ answering
                exactly what they feared gave them enough confidence to actually
                pick up the phone. Our consultation requests doubled in the
                first two months.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Patel, JD, bankruptcy attorney, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A bankruptcy law site with Chapter 7, Chapter 13, and
                consultation form starts at $275. A full site with exemptions
                guide, automatic stay explainer, and FAQ page is $525–$1,050.
                Two Chapter 7 cases cover the cost. No contracts, no monthly fees.
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
