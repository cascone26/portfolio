import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Radon Mitigation Companies in Kansas City",
  description:
    "Custom websites for radon testing and mitigation contractors in the Kansas City area. Explain the health risks, testing process, and mitigation systems to get more homeowner consultations.",
  alternates: {
    canonical: "https://builtsimple.dev/for/radon-mitigation",
  },
};

export default function RadonMitigationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Radon Mitigation Companies in Kansas City",
    description: "Custom websites for radon testing and mitigation contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Radon Mitigation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Most people searching for radon mitigation were just told by their home inspector that they have a problem. They need education before they trust anyone. A website that explains the risk, the solution, and the process earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Radon Contractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Radon Mitigation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Kansas City sits in a high-radon zone. Homeowners find out
              about their radon problem during a home sale inspection or
              after buying a home test kit — and then they search for
              someone to fix it. Most of them have never dealt with radon
              before and know nothing about mitigation systems. The
              radon contractor whose website educates them — explaining
              what radon is, what a safe level looks like, and how
              sub-slab depressurization works — earns their trust before
              the first conversation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners need to understand before hiring a radon contractor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "What radon is and why it matters — EPA action level of 4 pCi/L, second leading cause of lung cancer",
                  "Testing — short-term vs. long-term tests, where to place them, what results mean",
                  "Mitigation systems — sub-slab depressurization, how the fan and pipe system works",
                  "What to expect — installation time, disruption, where the pipe exits, noise level",
                  "Post-mitigation testing — confirming the system works, ongoing monitoring recommendations",
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
                What your radon mitigation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Radon explainer — what it is, Kansas City risk map, EPA action level, health context",
                  "Testing services — professional test placement, short-term and long-term options, results interpretation",
                  "Mitigation system page — how sub-slab depressurization works with clear diagram or photo",
                  "Installation process — what happens on installation day, time required, what you keep vs. what changes",
                  "Certifications — NRPP/NRSB certification, state licensing, insurance, post-mitigation guarantee",
                  "Quote form with address (for KC radon zone confirmation), basement type, current radon level",
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
                &ldquo;Most of my customers had never heard of radon before
                their home inspection flagged it. Our old site just said
                we install radon systems. The new site with the KC radon
                map, the explainer on what the levels mean, and the
                clear walkthrough of what installation looks like reduced
                the amount of time I spent on the phone educating people
                before they would even agree to a quote. They came in
                already understanding and ready to move.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Reinhart, radon mitigation, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A radon mitigation site with services, process, and quote
                form starts at $225. A full site with the radon explainer,
                KC risk info, certification details, and post-mitigation
                guarantee is $425–$875. Two or three mitigation installs
                cover the cost. No contracts, no monthly fees.
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
