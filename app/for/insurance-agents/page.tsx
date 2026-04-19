import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Insurance Agents in Kansas City",
  description:
    "Custom websites for independent insurance agents and agencies in the Kansas City area. Explain your coverage lines, carrier relationships, and quoting process to earn calls from families and businesses shopping for coverage.",
  alternates: {
    canonical: "https://builtsimple.dev/for/insurance-agents",
  },
};

export default function InsuranceAgentsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Insurance Agents in Kansas City",
    description: "Custom websites for insurance agents and agencies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Insurance Agents",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Families and business owners shopping for insurance compare agents online before they call anyone. A website that explains your coverage lines, carrier relationships, and how the quoting process works earns the call from clients who are ready to switch. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Insurance Agents in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Insurance Agents</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Whether someone is shopping for home and auto
              coverage, looking for a business policy, or
              trying to understand life insurance for the
              first time, they research agents online before
              picking up the phone. As an independent agent,
              your advantage is carrier choice — you can
              shop multiple companies to find the best rate
              and coverage for each client. But that advantage
              only lands if your website explains it. An
              insurance agent website that shows which carriers
              you represent, explains your coverage lines
              clearly, and makes requesting a quote
              straightforward earns the call from clients
              who are ready to switch and just need someone
              they trust to guide them.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients research before choosing an insurance agent
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Coverage lines — auto, home, life, commercial, health, umbrella — what you specialize in",
                  "Carriers — which companies you represent, independent vs. captive agent distinction",
                  "Local knowledge — Kansas City area rates, MO and KS state requirements, local claims experience",
                  "Process — how the quote works, what information is needed, how long it takes",
                  "Claims support — whether you help with claims, not just sales — a key differentiator for retention",
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
                What your insurance agent website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Coverage lines — personal (auto, home, life, umbrella) and commercial (BOP, liability, workers' comp)",
                  "Carriers — logos or names of the companies you represent, independent agency advantage explained",
                  "MO/KS context — state minimum requirements, common coverage gaps in the KC area",
                  "Quote process — what to expect, information needed, turnaround time, no-obligation promise",
                  "Claims support — how you help clients through claims, what makes a local agent worth having",
                  "Quote request form with coverage type, current insurer, property type, vehicles, coverage goals",
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
                &ldquo;Most people called me only after getting
                a renewal increase and they were already
                frustrated. The new site with our carrier
                list, a section explaining why an independent
                agent shops multiple companies for you, and
                a quote form that asked the right questions
                upfront changed the conversation before
                it started. People called already understanding
                the value and ready to let us shop their
                coverage.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Barlow, independent insurance agent, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An insurance agent site with coverage lines,
                carriers, and quote form starts at $275. A full
                site with commercial lines, MO/KS guide, and
                claims support section is $525–$1,050.
                One new policy covers the cost.
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
