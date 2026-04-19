import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Financial Advisors in Kansas City",
  description:
    "Custom websites for financial advisors and financial planners in the Kansas City area. Build the credibility to attract clients who are ready to get serious about their money.",
  alternates: {
    canonical: "https://builtsimple.dev/for/financial-advisors",
  },
};

export default function FinancialAdvisorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Financial Advisors in Kansas City",
    description: "Custom websites for financial advisors and financial planners in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Financial Advisors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          People searching for a financial advisor are ready to act — they just need to trust you enough to share their financial life. A professional website makes that possible. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Financial Advisors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Financial Advisors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Choosing a financial advisor is one of the highest-trust decisions
              a person makes. Before they book a consultation, they will spend
              time reading about you — your credentials, your planning philosophy,
              who you typically work with, and whether your fee structure makes
              sense. An advisor with a clear, professional website that answers
              all of those questions wins more consultations than one who relies
              entirely on referrals.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What people check before choosing a financial advisor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Credentials — CFP, CFA, CPA, ChFC, and fiduciary status",
                  "Services offered — retirement planning, investment management, tax planning, estate, insurance",
                  "Who you work with — retirees, business owners, young professionals, high earners",
                  "Fee structure — fee-only, AUM percentage, flat fee, or commission-based",
                  "Investment philosophy — passive/index, active management, values-based investing",
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
                What your financial advisor website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "CFP/fiduciary credentials prominently displayed with license number",
                  "Services pages — retirement planning, investment management, tax, estate, business planning",
                  "Ideal client section — who you work best with and minimum asset thresholds if applicable",
                  "Fee structure page — transparent explanation of how you are compensated",
                  "About page with your philosophy, background, and personal connection to financial planning",
                  "Free consultation form — low-commitment first contact with a few qualifying questions",
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
                &ldquo;My practice grew almost entirely through referrals for
                twelve years. The website changed that — I started getting
                inquiries from people who found me searching for fee-only
                advisors in KC. They came in already knowing my fee structure
                and my philosophy, which made the consultation so much more
                productive. I converted two new clients in the first month.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Chen CFP, financial advisor, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A financial advisor site with services, bio, and consultation
                form starts at $275. A full site with service-specific pages,
                fee structure explanation, and ideal client section is $550–1,050.
                One new ongoing client relationship covers the cost. No contracts,
                no monthly fees.
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
