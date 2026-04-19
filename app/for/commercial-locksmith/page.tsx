import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Commercial Locksmiths in Kansas City",
  description:
    "Custom websites for commercial locksmith companies in the Kansas City area. Explain your access control, master key systems, and commercial lockout services to property managers and businesses.",
  alternates: {
    canonical: "https://builtsimple.dev/for/commercial-locksmith",
  },
};

export default function CommercialLocksmithPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Commercial Locksmiths in Kansas City",
    description: "Custom websites for commercial locksmith companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Commercial Locksmiths",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Property managers and business owners searching for a commercial locksmith need someone who understands access control, master key systems, and commercial hardware — not just residential lockouts. A website that speaks their language earns the account. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Commercial Locksmiths in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Commercial Locksmiths</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Commercial locksmith work is a different category
              from residential — property managers maintaining
              apartment complexes, facility managers at office
              buildings, and business owners securing retail
              locations all need a locksmith who understands
              commercial-grade hardware, master key hierarchies,
              and electronic access control systems. A commercial
              locksmith website that demonstrates your access
              control capabilities and speaks the language of
              facility management earns the ongoing service
              relationship, not just the one-time call.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What property managers and businesses look for in a commercial locksmith
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Access control systems — key fob, card reader, keypad, mobile credential installation and service",
                  "Master key systems — grand master, master, sub-master hierarchies for multi-tenant properties",
                  "Commercial hardware — Schlage, Corbin Russwin, Sargent, Von Duprin — brands and service",
                  "Emergency response — commercial lockout response time, after-hours availability",
                  "Service agreements — ongoing maintenance contracts, scheduled rekeying, key control programs",
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
                What your commercial locksmith website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Access control — brands installed (LiftMaster, HID, Lenel), system types, maintenance",
                  "Master key systems — how hierarchies work, why they matter for multi-tenant properties",
                  "Commercial hardware — brands serviced, door closer installation, panic hardware, exit devices",
                  "Emergency services — commercial lockouts, 24/7 response, typical response time in KC metro",
                  "Service contracts — what recurring maintenance includes, key control program overview",
                  "Service request form with property type, number of doors/units, current system, urgency",
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
                &ldquo;Property managers would find us through a
                lockout and then figure out we did commercial
                hardware and access control. The new site made
                that clear upfront — our master key expertise,
                our access control brands, our service agreement
                program. We started getting called to bid on new
                construction projects and full property conversions,
                not just lockouts. That is where the real revenue is.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Strickland, commercial locksmith, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A commercial locksmith site with services, brands,
                and service request form starts at $250. A full site
                with access control, master key, and service
                agreement pages is $475–$950. One property
                management account covers the cost.
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
