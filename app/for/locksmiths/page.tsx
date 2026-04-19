import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Locksmiths in Kansas City",
  description:
    "Custom websites for locksmith businesses in the Kansas City area. Rank for emergency lockout searches, show your services and pricing, and build the trust that wins over national chains.",
  alternates: {
    canonical: "https://builtsimple.dev/for/locksmiths",
  },
};

export default function LocksmithsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Locksmiths in Kansas City",
    description: "Custom websites for locksmith businesses in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Locksmiths",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          When someone searches for a locksmith, they need help right now. Make sure your phone number and service area are the first thing they see. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Locksmiths in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Locksmiths</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Locksmith searches happen in high-stress moments — someone is
              locked out of their car at night, locked out of their house, or
              needs a rekeyed lock after a breakup or move. They search, they
              scan the results fast, and they call whoever looks most legitimate
              and local. A real website with your phone number prominent, your
              service area clear, and your services and pricing explained is
              how you beat the fake listing farms that dominate this category.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What people check before calling a locksmith
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Phone number and response time — can you be there in the next 30 minutes?",
                  "Service area — do you cover their city or neighborhood?",
                  "Services — car lockout, home lockout, rekey, lock installation, safe opening",
                  "Pricing transparency — at least a range, not blank estimates with hidden fees",
                  "Whether they are a real local business vs a national call center",
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
                What your locksmith website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Phone number in large text at the top of every page — tap to call on mobile",
                  "Emergency lockout page with response time guarantee and service area",
                  "Services page — residential, commercial, automotive, rekey, lock installation, safes",
                  "Pricing guide — starting rates for common services with no hidden fee promise",
                  "Service area — cities and zip codes covered in Johnson County and Jackson County",
                  "Reviews emphasizing response time, honesty, and fair pricing vs fake national listings",
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
                &ldquo;The locksmith market in KC is full of fake listings and
                bait-and-switch operators. Once I had a real website showing my
                face, my license, and honest pricing, people started calling me
                specifically because they didn&apos;t trust the other results.
                I get a steady stream of calls from people who say they chose me
                because I looked like a real local business.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Washington, locksmith, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A locksmith site with services, pricing, and service area starts
                at $200. A full site with service-type pages, emergency callout,
                and review integration is $400–750. Ten car lockout jobs cover
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
