import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Solar Installers in Kansas City",
  description:
    "Custom websites for residential and commercial solar installation companies in the Kansas City area. Explain your financing options, installation process, and expected savings to convert more homeowners into solar customers.",
  alternates: {
    canonical: "https://builtsimple.dev/for/solar-installers",
  },
};

export default function SolarInstallersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Solar Installers in Kansas City",
    description: "Custom websites for solar installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Solar Installers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners researching solar want to understand the 30% federal tax credit, net metering in Missouri and Kansas, and what their payback period actually looks like before they talk to anyone. A website that explains this honestly earns the consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Solar Installers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Solar Installers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Homeowners considering solar are doing serious
              research before they agree to a consultation.
              They want to understand the federal investment
              tax credit, how net metering works with their
              utility provider, what their payback period
              would realistically look like, and what the
              installation process involves. They are also
              guarded against high-pressure sales tactics —
              and the installer whose website educates
              honestly rather than pushing a consultation
              earns more trust and more calls. A solar
              installer website that explains incentives
              clearly, shows installed systems on Kansas
              City homes, and makes requesting a free
              energy assessment feel low-pressure converts
              researching homeowners into real leads.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing a solar installer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Federal tax credit — 30% ITC, how to claim it, income requirements, when it applies",
                  "Net metering — MO and KS utility net metering policies, how credits work on the bill",
                  "Payback period — realistic timeline, how it varies by roof, usage, and shading",
                  "Financing options — cash purchase, solar loan, lease vs. purchase — pros and cons of each",
                  "Equipment — panel brands, efficiency ratings, inverter types, warranty coverage",
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
                What your solar installer website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project gallery — installed systems on KC homes, roof types, panel layouts, before/after bills",
                  "Incentives guide — 30% federal ITC explained, MO/KS net metering, utility rebates available",
                  "Financing options — cash, solar loan, lease comparison — honest pros and cons of each",
                  "Equipment — panel brands and efficiency ratings, inverter options, battery storage add-ons",
                  "Installation process — assessment, design, permits, installation timeline, utility interconnection",
                  "Energy assessment form with utility provider, monthly bill amount, roof age, shading concerns",
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
                &ldquo;Homeowners were skeptical because
                they had heard high-pressure pitches and
                vague savings promises from other companies.
                The new site with the ITC explained clearly,
                an honest breakdown of MO net metering, and
                a financing comparison that showed cash vs.
                loan tradeoffs changed who was calling us.
                We started getting inquiries from people who
                had read everything and were calling with
                specific questions — those converted at
                much higher rates.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Satterfield, solar installer, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A solar installer site with incentives guide,
                financing options, and assessment form starts
                at $275. A full site with project gallery,
                equipment detail, and MO/KS utility guide
                is $525–$1,050. One installation covers
                the cost. No contracts, no monthly fees.
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
