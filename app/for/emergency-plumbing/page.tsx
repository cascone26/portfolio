import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Emergency Plumbers in Kansas City",
  description:
    "Custom websites for 24-hour emergency plumbing companies in the Kansas City area. Rank for urgent plumbing searches, show your response time, and get more same-day and emergency calls.",
  alternates: {
    canonical: "https://builtsimple.dev/for/emergency-plumbing",
  },
};

export default function EmergencyPlumbingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Emergency Plumbers in Kansas City",
    description: "Custom websites for 24-hour emergency plumbing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Emergency Plumbing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          When a pipe bursts at 11pm, the homeowner calls whoever shows up first in search. Your website needs to say "24/7, fast response, real people" in the first five seconds. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Emergency Plumbers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Emergency Plumbers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Emergency plumbing is the most urgent search a homeowner ever
              does. Water is coming through the ceiling. The toilet is overflowing.
              A pipe froze and burst. They open their phone and call whoever
              looks most legitimate in search — and they make that decision
              in under ten seconds. Your website needs to immediately communicate
              that you answer 24/7, respond fast, and are a real licensed
              local company — not someone&apos;s side operation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners need to see in an emergency plumbing search
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "24/7 availability — that you actually answer the phone at 2am, not an answering service",
                  "Response time — how fast you can be there, specific to time of day",
                  "What you handle — burst pipes, sewer backup, water heater failure, gas leaks, overflows",
                  "Licensing and insurance — they're letting you in their house in an emergency",
                  "Service area — that you actually cover their zip code",
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
                What your emergency plumbing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "24/7 callout with phone number in massive type — the first thing anyone sees",
                  "Emergency services list — burst pipes, sewer backup, water heater, gas leak, flooding",
                  "Response time commitment — average arrival time, how dispatch works",
                  "Regular services too — drain cleaning, water heater installation, fixture replacement, repiping",
                  "Licensing and insurance — state license number, bonded, insured, years in business",
                  "Service area with cities and zip codes — confirms coverage before they call",
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
                &ldquo;We were doing 24/7 service but nobody knew it. The
                website with our response time guarantee and 24/7 phone
                callout on every page immediately increased our late-night
                and weekend calls. People search at 11pm when a pipe bursts —
                we needed to be the obvious choice and now we are.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Torres, emergency plumbing company, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An emergency plumber site with 24/7 callout, services, and
                service area starts at $200. A full site with emergency and
                regular service pages, response time commitment, and licensing
                info is $400–$750. One emergency call covers the cost.
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
