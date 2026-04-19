import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Immigration Attorneys in Kansas City",
  description:
    "Custom websites for immigration lawyers and law firms in the Kansas City area. Explain your visa, green card, and citizenship services to families and employers seeking qualified legal representation.",
  alternates: {
    canonical: "https://builtsimple.dev/for/immigration-attorneys",
  },
};

export default function ImmigrationAttorneysPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Immigration Attorneys in Kansas City",
    description: "Custom websites for immigration lawyers and law firms in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Immigration Attorneys",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Immigration clients are navigating one of the most consequential processes of their lives and research attorneys carefully before trusting anyone with their case. A website that clearly explains your services, languages spoken, and consultation process earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Immigration Attorneys in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Immigration Attorneys</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Immigration clients — families petitioning for relatives,
              employees needing work authorization, and individuals
              facing removal — are making decisions about their futures
              and they research their attorney options carefully. They
              want to know what types of cases you handle, whether
              you speak their language, and what the consultation
              and case process looks like. An immigration attorney
              website that answers these questions in plain language,
              including the languages your clients speak, earns the
              cases that matter most.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What immigration clients research when choosing an attorney
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Case types — family petitions, employment visas, green cards, naturalization, DACA, asylum",
                  "Languages spoken — Spanish, Vietnamese, Somali, Arabic, and others common in KC communities",
                  "Attorney credentials — bar admission, immigration law experience, cases handled",
                  "Consultation process — what to expect, cost, documents to bring, how long it takes",
                  "Case timeline — realistic processing times for different case types, USCIS backlog context",
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
                What your immigration law website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Practice areas — family-based, employment-based, removal defense, DACA, asylum, naturalization",
                  "Languages spoken — prominently listed, multilingual page options if applicable",
                  "Attorney profile — credentials, bar admission, immigration focus, languages, years of practice",
                  "Consultation process — what to expect at initial meeting, cost, documents needed, next steps",
                  "Case types explained — plain-language explanations of visa categories and what each requires",
                  "Contact form with case type, country of origin, current status, urgency",
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
                &ldquo;Most of our clients come from Spanish-speaking
                communities and they were finding us through referrals
                only because our old website looked like it was built
                in 2005. The new site with our services listed in
                plain terms, our Spanish-language sections, and a
                clear explanation of what the consultation looks like
                made a real difference. We get calls now from people
                who found us searching — not just word of mouth.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Fuentes, immigration attorney, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An immigration law site with services, attorney
                profile, and consultation form starts at $275. A
                full site with practice area pages, multilingual
                content, and case process guides is $525–$1,050.
                One family petition retainer covers the cost.
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
