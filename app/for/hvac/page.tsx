import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for HVAC Companies in Kansas City",
  description:
    "Custom websites for HVAC contractors in the Kansas City area. Show up when the AC breaks down and convert emergency calls into maintenance plan customers.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hvac",
  },
};

export default function HvacPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for HVAC Companies in Kansas City",
    description: "Custom websites for HVAC contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for HVAC Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Storm season brings equipment failures. Get your HVAC site ready before the next heat wave. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For HVAC Contractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">HVAC Companies</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              A broken AC in August or a dead furnace in January means a homeowner
              is searching right now — and calling the first company that looks
              trustworthy and answers the phone. Without a website built for
              emergency calls, that job goes to a competitor who has one.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners look for before calling an HVAC company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Whether you offer emergency or same-day service — this is the first question",
                  "NATE certification or manufacturer certifications (Carrier, Trane, Lennox)",
                  "Whether you service their system brand",
                  "Service area — do you cover their ZIP code?",
                  "Maintenance plan options — they want to prevent the next breakdown",
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
                What your HVAC website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Emergency service callout with tap-to-call phone number above the fold",
                  "Service pages — AC repair, furnace, heat pump, mini-split, indoor air quality",
                  "Maintenance plan details — what's covered, cost, and how to sign up",
                  "NATE certification, EPA 608, and manufacturer credentials displayed prominently",
                  "Service area coverage for every city in your KC metro territory",
                  "Online service request form that captures after-hours leads",
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
                &ldquo;We were getting maybe 2-3 calls a week from Google before.
                After the new site launched we went to 12-15. The emergency
                service callout at the top of the page alone has paid for itself
                ten times over.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Caldwell, HVAC contractor, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter HVAC site with emergency callout, services, and contact
                form starts at $250. A full site with service area pages,
                maintenance plan signup, and equipment brand pages is $600–1,200.
                One furnace replacement job more than covers the site. No
                contracts, no monthly fees.
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
