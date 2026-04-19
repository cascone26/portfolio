import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Mortgage Brokers in Kansas City",
  description:
    "Custom websites for mortgage brokers and loan officers in the Kansas City area. Build trust with first-time buyers, explain your loan options, and get more applications started online.",
  alternates: {
    canonical: "https://builtsimple.dev/for/mortgage-brokers",
  },
};

export default function MortgageBrokersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Mortgage Brokers in Kansas City",
    description: "Custom websites for mortgage brokers and loan officers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Mortgage Brokers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          First-time buyers search for a mortgage broker before they search for a house. Be the one they find — and trust — before they even start looking. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Mortgage Brokers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Mortgage Brokers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Most people buying a home have never done it before. They are
              searching online trying to understand what a mortgage broker does,
              what loan types they qualify for, and who to trust with the biggest
              financial decision of their life. A website that explains your loan
              options clearly, tells your story honestly, and makes getting
              pre-qualified simple will win more of those first-time buyers than
              a big bank&apos;s generic landing page ever could.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homebuyers check before choosing a mortgage broker
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Loan types available — conventional, FHA, VA, USDA, jumbo, first-time buyer programs",
                  "NMLS number and licensing — MO and KS licensing clearly shown",
                  "Experience with their situation — first-time buyers, self-employed, investor properties",
                  "How fast you can close and whether you can help with tight timelines",
                  "Reviews from past clients — specifically mentioning communication and rate competitiveness",
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
                What your mortgage broker website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Loan type pages — FHA, VA, conventional, USDA, first-time buyer, investment property",
                  "NMLS number and licensing displayed prominently with MO + KS coverage",
                  "About page with years of experience, loan volume, and the kind of clients you specialize in",
                  "Pre-qualification form — simple, not overwhelming, just enough to start the conversation",
                  "Homebuyer education content — what to expect from the process, timeline, and cost estimates",
                  "Client testimonials with loan type, timeline, and what made working with you different",
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
                &ldquo;I was getting referrals from one real estate agent and
                that was basically it. The new site with my FHA and first-time
                buyer pages showed up when people searched and they came in
                already knowing their situation qualified. Getting referrals from
                Google is completely different from getting them from one agent
                relationship.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Harrington, mortgage broker, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A mortgage broker site with loan types, bio, and pre-qual form
                starts at $250. A full site with loan-specific pages, homebuyer
                guide, and NMLS compliance formatting is $500–950. One closed
                loan covers the cost multiple times over. No contracts, no
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
