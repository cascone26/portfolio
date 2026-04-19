import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tax Preparers in Kansas City",
  description:
    "Custom websites for independent tax preparers and tax professionals in the Kansas City area. Get found during tax season, build year-round trust, and fill your client list.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tax-prep",
  },
};

export default function TaxPrepPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tax Preparers in Kansas City",
    description: "Custom websites for independent tax preparers and tax professionals in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tax Preparers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Thousands of KC residents search for a local tax preparer every January through April. Get in front of them before the chain stores do. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tax Preparers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tax Preparers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Independent tax preparers offer something the chains can&apos;t:
              a real relationship with someone who knows your situation year after
              year. But that advantage disappears if potential clients can&apos;t
              find you, can&apos;t verify your credentials, and can&apos;t figure
              out how to book an appointment. A professional website fixes all three.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients look for before choosing a tax preparer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Credentials — CPA, EA (Enrolled Agent), AFSP, PTIN registration",
                  "Experience with their specific situation — self-employed, rental income, business owner, multi-state",
                  "Pricing — flat fee vs. hourly, and what's included",
                  "Whether you offer virtual appointments or require in-person",
                  "Year-round availability for IRS notices and amended returns",
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
                What your tax prep website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Credentials prominently displayed — CPA license, EA number, years in practice",
                  "Services by situation — W-2, self-employed, small business, real estate investor, multi-state",
                  "Pricing page or at minimum a 'starting at' range for each service type",
                  "Appointment booking — online scheduler or simple request form",
                  "Secure document upload info — how clients send you their tax documents",
                  "Client testimonials with situation type and outcome (refund received, penalty resolved)",
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
                &ldquo;I&apos;d been doing taxes for 12 years entirely on referrals.
                When I finally got a website up with my credentials and a clear
                focus on self-employed clients and small businesses, I started
                getting inquiries from people in exactly that situation who found
                me searching Google. Three of them became year-round clients.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Nguyen, EA, tax preparer, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tax prep site with credentials, services, and appointment
                booking starts at $225. A full site with situation-specific
                service pages, pricing guide, and secure upload instructions
                is $450–850. Two new self-employed clients covers the cost at
                typical prep fees. No contracts, no monthly fees.
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
