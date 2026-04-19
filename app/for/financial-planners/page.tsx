import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Financial Planners in Kansas City",
  description:
    "Custom websites for financial planners and wealth advisors in the Kansas City area. Explain your planning approach, fee structure, and client types to earn calls from families and business owners ready to invest.",
  alternates: {
    canonical: "https://builtsimple.dev/for/financial-planners",
  },
};

export default function FinancialPlannersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Financial Planners in Kansas City",
    description: "Custom websites for financial planners and wealth advisors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Financial Planners",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Families and business owners researching a financial planner want to understand your fee structure, who you work with, and what the planning process actually involves before they trust you with their finances. A website that explains all of this earns the introductory call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Financial Planners in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Financial Planners</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              People searching for a financial planner are
              often making a decision they have been putting
              off for years — they just got a raise, received
              an inheritance, are approaching retirement, or
              realized they have no plan. When they finally
              search, they compare several advisors and make
              their choice based almost entirely on trust
              and clarity. They want to know how you are
              compensated (fee-only vs. commission vs. AUM),
              who your typical client is, what the planning
              process actually involves, and whether you can
              help with their specific situation. A financial
              planner website that answers those questions
              honestly, explains your philosophy, and makes
              scheduling an introductory call feel safe earns
              the client who is ready to start.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What families research before choosing a financial planner
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fee structure — fee-only, AUM percentage, flat fee, commission — how you are compensated",
                  "Credentials — CFP, CPA/PFS, ChFC — what the designations mean and what they require",
                  "Client types — who you typically work with, minimum asset levels, life stages you specialize in",
                  "Services — retirement planning, investment management, tax planning, estate planning, college",
                  "Process — how the relationship works, how often you meet, what a financial plan looks like",
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
                What your financial planning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fee transparency — how you charge, why it matters, fiduciary obligation explained plainly",
                  "Credentials — CFP designation, what it requires, fiduciary standard, regulatory oversight",
                  "Who you serve — client profile, life stages, minimum asset level if any, ideal client description",
                  "Services — retirement, investment management, tax strategy, estate coordination, college planning",
                  "Process — initial consultation, data gathering, plan presentation, implementation, ongoing reviews",
                  "Intro call form with life stage, primary concern, assets range, what prompted the search",
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
                &ldquo;People were hesitant to call because
                they did not understand how I charged and
                were afraid they would be sold something.
                The new site with a clear fee-only explainer,
                a section on fiduciary duty, and a description
                of who I typically work with completely
                changed the quality of introductory calls.
                Prospects came in already trusting the
                model and asking the right questions instead
                of testing whether I was going to try to
                sell them a product.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Whitfield CFP, financial planner, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A financial planner site with services,
                fee explainer, and consultation form starts
                at $275. A full site with client profile,
                process walkthrough, and credential detail
                is $525–$1,050. One new client
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
