import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Mortgage Lenders in Kansas City",
  description:
    "Custom websites for mortgage lenders, loan officers, and mortgage brokers in the Kansas City area. Explain your loan programs, rate transparency, and pre-approval process to win more purchase and refinance clients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/mortgage-lenders",
  },
};

export default function MortgageLendersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Mortgage Lenders in Kansas City",
    description: "Custom websites for mortgage lenders and loan officers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Mortgage Lenders",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Home buyers comparing lenders want to understand your loan programs, how fast you can close, and what the pre-approval process involves before they call anyone. A website that answers those questions earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Mortgage Lenders in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Mortgage Lenders</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              First-time buyers are intimidated and confused.
              Move-up buyers want competitive rates and a fast
              close. Refinance clients want to know if it actually
              pencils out. In every case, they research lenders
              online before they talk to anyone — and they are
              comparing loan programs, closing timelines, and
              whether you seem like someone they can trust with
              the biggest transaction of their life. A mortgage
              lender website that explains your loan products
              clearly, addresses first-time buyer programs,
              and makes starting a pre-approval feel simple
              and safe wins the client before a competitor
              even gets a call.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What home buyers research when choosing a lender
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Loan programs — conventional, FHA, VA, USDA, jumbo — which they qualify for and what it means",
                  "First-time buyer programs — down payment assistance, MO and KS state programs, FHA benefits",
                  "Closing timeline — how fast can you close, what that means in a competitive offer situation",
                  "Pre-approval process — what's required, how long it takes, hard vs. soft pull, what comes next",
                  "Rates and fees — transparency about origination fees, points, APR vs. rate distinction",
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
                What your mortgage lender website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Loan programs — conventional, FHA, VA, USDA — each explained with who it&apos;s best for",
                  "First-time buyer page — down payment options, MO/KS assistance programs, step-by-step process",
                  "VA loan page — eligibility, zero down, funding fee, how to use your benefit in Kansas City",
                  "Refinance guide — when it makes sense, break-even calculator concept, cash-out vs. rate-term",
                  "Pre-approval process — what to expect, documents needed, timeline, hard pull explanation",
                  "Pre-approval form with purchase price range, down payment, credit score range, timeline",
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
                &ldquo;First-time buyers were calling in
                overwhelmed and not knowing what loan they
                needed or what the process looked like. The
                new site with a first-time buyer page that
                walked through every step, explained FHA vs.
                conventional in plain English, and included
                a pre-approval form that collected the right
                info upfront changed the quality of those
                first conversations completely. Buyers called
                knowing their options and ready to move.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Lindquist, loan officer, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A mortgage lender site with loan programs,
                pre-approval process, and application form
                starts at $275. A full site with program-specific
                pages, first-time buyer guide, and VA or
                USDA section is $525–$1,050. One closed
                loan covers the cost. No contracts, no monthly fees.
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
