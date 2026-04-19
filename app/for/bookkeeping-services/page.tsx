import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Bookkeeping Services in Kansas City",
  description:
    "Custom websites for bookkeepers and accounting firms in the Kansas City area. Explain your services, software expertise, and onboarding process to win small business clients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/bookkeeping-services",
  },
};

export default function BookkeepingServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Bookkeeping Services in Kansas City",
    description: "Custom websites for bookkeepers and accounting firms in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Bookkeeping Services",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Small business owners searching for a bookkeeper want to know what software you use, what is included monthly, and how the onboarding works. A website that answers these wins the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Bookkeeping Services in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Bookkeeping Services</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Small business owners who are drowning in receipts
              and unprepared for tax season know they need help.
              When they search for a bookkeeper, they are comparing
              a handful of providers — and what they find online
              determines who they call. A bookkeeping website
              that explains what is included in your monthly
              service, what software you use, how the handoff
              works at tax time, and what the onboarding process
              looks like converts those searches into long-term
              retainer clients.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What small business owners want to know before hiring a bookkeeper
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "What is included — monthly reconciliations, categorization, P&L, balance sheet, payroll",
                  "Software — QuickBooks, Xero, FreshBooks — which you use and whether they need to change",
                  "Tax prep coordination — whether you work with their CPA, how you handle year-end",
                  "Pricing — flat monthly rate vs. hourly, what tier fits their transaction volume",
                  "Onboarding — how long it takes, what they need to provide, how the transition works",
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
                What your bookkeeping website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service tiers — what is included at each monthly level, who each tier fits",
                  "Software — QuickBooks/Xero setup, migration help, ongoing management",
                  "Tax coordination — how you work with CPAs, what you deliver at year-end",
                  "Catch-up bookkeeping — for businesses behind on their books",
                  "Industries served — contractors, restaurants, medical, retail — industry-specific context",
                  "Onboarding form with business type, transaction volume, current software, biggest pain point",
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
                &ldquo;Every client I was getting came from a
                referral, and even referrals were Googling me
                before they called. My old site was three pages
                of nothing. The new site with my service tiers,
                a clear breakdown of what is included at each
                level, and my QuickBooks certification front and
                center made prospects feel like they were choosing
                a professional instead of hoping they found the
                right person. My retainer base grew 40 percent
                in four months.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Nguyen, bookkeeper, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A bookkeeping site with services, software, and
                onboarding form starts at $250. A full site with
                service tiers, industry pages, and catch-up
                bookkeeping section is $475–$950. One new
                retainer client covers the cost in two months.
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
