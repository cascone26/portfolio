import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Commercial Window Washing Companies in Kansas City",
  description:
    "Custom websites for commercial window cleaning and high-rise window washing companies in the Kansas City area. Win building management contracts by showing your equipment, safety certifications, and recurring service capabilities.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-washing-commercial",
  },
};

export default function WindowWashingCommercialPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Commercial Window Washing Companies in Kansas City",
    description: "Custom websites for commercial window washing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Commercial Window Washing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Property managers and building owners evaluating commercial window cleaning need to see your insurance coverage, fall protection certifications, equipment for their building type, and recurring service options before they request a quote. A professional website that covers all of this wins the contract. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Commercial Window Washing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Commercial Window Washing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Property managers and building owners
              making decisions about commercial window
              cleaning are thinking about liability
              first. Window washing — particularly
              on multi-story buildings — involves
              fall protection equipment, rope descent
              systems, and OSHA compliance that
              requires proof before anyone goes to
              height on their property. They need
              to see your insurance coverage, your
              IWCA membership and certifications,
              your fall protection training, and
              what equipment you use for different
              building heights and types. They also
              want to understand your recurring
              service schedule — most commercial
              contracts are quarterly or monthly
              maintenance agreements, not one-time
              jobs. A commercial window washing
              website that establishes your safety
              credentials, shows your equipment
              capabilities, and explains your
              recurring service structure earns
              the walkthrough and bid that turns
              into a long-term maintenance contract.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What property managers look for in a window washing company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance — general liability limits, workers comp, umbrella coverage for high-rise work",
                  "Safety certifications — IWCA membership, OSHA 10/30, fall protection training, equipment inspection",
                  "Equipment capabilities — rope descent, swing stage, boom lift, water-fed pole for building height",
                  "Building types — office towers, retail strip, medical buildings, multi-tenant, glass curtain wall",
                  "Recurring agreements — service frequency options, what each visit includes, contract terms",
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
                What your commercial window washing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance and safety — coverage amounts, OSHA compliance, fall protection systems, IWCA credentials",
                  "Equipment — rope descent, swing stage, boom lift, pure water system, building height capabilities",
                  "Building types served — office, retail, medical, industrial, curtain wall, storefront",
                  "Recurring service plans — quarterly, monthly, bi-annual — what each visit covers, scheduling",
                  "Additional services — pressure washing, screen cleaning, hard water stain removal, frame cleaning",
                  "Quote form with building type, floors/height, frequency needed, current service provider",
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
                &ldquo;Property managers were going
                with national companies because
                they could verify insurance and
                certifications online immediately.
                Our old site had nothing about
                our coverage, our OSHA training,
                or our equipment for multi-story
                work. The new site with our liability
                limits stated, our fall protection
                certifications listed, our equipment
                photos, and our recurring service
                plans described changed how we
                entered bids. We started winning
                contracts we used to lose on
                the credibility check alone.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Hennessy, window washing company owner, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A commercial window washing site with
                services, insurance detail, and quote
                form starts at $275. A full site with
                equipment capabilities, building type
                sections, and recurring service plans
                is $525–$1,050. One quarterly contract
                covers the cost immediately.
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
