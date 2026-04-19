import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Insurance Agents in Kansas City",
  description:
    "Custom websites for independent insurance agents in the Kansas City area. Build trust before the first call, rank for local searches, and convert comparison shoppers into long-term clients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/insurance",
  },
};

export default function InsurancePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Insurance Agents in Kansas City",
    description: "Custom websites for independent insurance agents in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Insurance Agents",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Every life event — new home, new car, new baby — triggers an insurance search. Make sure you show up. Free mockup, no commitment.
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
              Independent agents have a huge advantage over direct carriers —
              you can shop multiple companies to find the best rate and coverage.
              But that advantage disappears if prospects can&apos;t find you or
              understand what you offer. A website that explains the independent
              advantage and makes getting a quote easy turns searchers into clients.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What prospects check before contacting an insurance agent
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Which lines you write — auto, home, life, commercial, health, or all",
                  "Which carriers you work with — are they getting multiple quotes or just one?",
                  "Whether you handle claims support or just sell the policy",
                  "Your license number and how long you've been in business",
                  "Whether you serve their situation — first-time homeowner, small business, senior, etc.",
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
                  "Lines of insurance with plain-language explanations of each",
                  "Carrier logos — showing you work with 10+ companies builds instant credibility",
                  "The independent advantage clearly explained — why you beat a direct carrier",
                  "Quote request form with coverage type, current situation, and contact info",
                  "License number, years of experience, and client retention stats",
                  "Client reviews that mention savings amounts or claim support experiences",
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
                &ldquo;I was getting all my business through referrals and had no
                online presence. After the website went live, I started getting
                quote requests from people who had never heard of me — just
                found me searching for a local independent agent. My book grew
                30% in the first year.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Schultz, independent insurance agent, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An insurance agent site with lines, carriers, and quote request
                form starts at $250. A full site with product-specific pages,
                life stage targeting (new homeowners, business owners, retirees),
                and a client portal link is $500–900. One new auto/home bundle
                client often recoups the cost in the first year. No contracts,
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
