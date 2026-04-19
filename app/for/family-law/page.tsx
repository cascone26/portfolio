import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Family Law Attorneys in Kansas City",
  description:
    "Custom websites for family law attorneys and divorce lawyers in the Kansas City area. Explain your divorce, custody, and support services to clients navigating difficult family legal matters.",
  alternates: {
    canonical: "https://builtsimple.dev/for/family-law",
  },
};

export default function FamilyLawPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Family Law Attorneys in Kansas City",
    description: "Custom websites for family law attorneys and divorce lawyers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Family Law Attorneys",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          People going through divorce or custody disputes research attorneys during one of the most difficult periods of their lives. A website that clearly explains your approach, what to expect, and how you protect your clients earns the consultation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Family Law Attorneys in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Family Law Attorneys</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Family law clients are often making the first call to an
              attorney during the worst period of their lives. They
              research quietly, late at night, comparing attorneys
              before they trust anyone with their case. A family law
              website that explains the divorce and custody process
              in plain terms, communicates your approach — whether
              collaborative or aggressive — and makes it easy to
              take the first step earns the consultation from clients
              who are finally ready to move forward.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients research when choosing a family law attorney
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Practice areas — divorce, contested vs. uncontested, custody, child support, modification, protection orders",
                  "Approach — litigation vs. mediation vs. collaborative divorce — which they specialize in",
                  "Attorney background — years in family law, KC courts experience, credentials",
                  "Process — what divorce or custody proceedings look like step by step in Missouri and Kansas",
                  "Cost — retainer amounts, hourly rates, what drives up cost vs. what keeps it contained",
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
                What your family law website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Practice areas — divorce, legal separation, custody, support, modifications, domestic violence",
                  "MO vs. KS law overview — key differences in divorce and custody law across state lines",
                  "Process page — what to expect from first consultation through final decree",
                  "Attorney profile — credentials, family law focus, years in KC courts, approach",
                  "Mediation services — whether you offer it, when it works, how it reduces cost and conflict",
                  "Consultation form with situation type, children involved, preferred timeline, urgency",
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
                &ldquo;People going through divorce are scared and
                doing research late at night when they finally decide
                to do something about it. Our old site gave them
                nothing to go on. The new site explained the process,
                what mediation looks like, and what to bring to the
                first meeting. Potential clients came in already trusting
                us and prepared. Our consultation close rate went up
                and the cases we got were better fits for how we work.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Hensley, family law attorney, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A family law site with services, attorney profile,
                and consultation form starts at $275. A full site
                with practice area pages, MO/KS law overview, and
                process guide is $525–$1,050. One contested divorce
                retainer covers the cost. No contracts, no monthly fees.
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
