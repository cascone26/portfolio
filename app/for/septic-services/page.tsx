import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Septic Service Companies in Kansas City",
  description:
    "Custom websites for septic pumping, inspection, and installation companies in the Kansas City area. Help homeowners understand your services, scheduling process, and maintenance recommendations to win pumping and inspection contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/septic-services",
  },
};

export default function SepticServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Septic Service Companies in Kansas City",
    description: "Custom websites for septic service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Septic Service Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners searching for septic services often don&apos;t know what they need — they just know something is wrong or it&apos;s been a while since their last pump. A website that explains when to pump, what inspections cover, and how to schedule gets you the call before any uncertainty paralyzes them. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Septic Services in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Septic Service</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Homeowners and property owners with
              septic systems often operate in the
              dark — they know they need periodic
              pumping but are not sure how often,
              they notice warning signs but are
              not sure what they mean, or they
              are selling a home and need an
              inspection for the transaction.
              Before they call, they want to
              understand what a pumping or
              inspection service involves, how
              you locate a septic system on an
              unfamiliar property, what the
              inspection report covers for real
              estate transactions, and whether
              you handle repairs like distribution
              box replacement, baffle replacement,
              or drain field issues. A septic
              service website that educates homeowners
              on maintenance timing, explains what
              each service includes, and makes
              scheduling a routine pump or an
              emergency call easy earns both the
              maintenance customer and the urgent
              repair job.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners want to know before scheduling septic service
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pumping frequency — how often tanks need to be pumped based on household size and tank size",
                  "What pumping includes — full pump vs. partial, inspection during service, what the technician checks",
                  "Inspection scope — what a real estate inspection report covers, how long it takes, documentation",
                  "Warning signs — slow drains, odors, wet spots in yard, gurgling — what each means",
                  "Repairs — distribution box, baffles, risers, lids, drain field assessment and options",
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
                What your septic service website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services — pumping, inspection, real estate inspection, repairs, new system installation",
                  "Pumping guide — recommended frequency by household size and tank size, what happens during service",
                  "Inspection report — what it covers, timeline, real estate transaction process, report format",
                  "Warning signs guide — symptoms of septic problems, when to call immediately vs. schedule routine",
                  "Repair services — baffles, lids, risers, distribution boxes, drain field evaluation and options",
                  "Scheduling form with service type, property address, system age if known, urgency level",
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
                &ldquo;Most of our calls were from
                homeowners who already had an
                obvious problem — by then they
                were panicking and often needed
                expensive repairs. We wanted
                more routine maintenance customers,
                but without a website explaining
                when to pump and what to look for,
                people just didn&apos;t call until
                it was an emergency. The new site
                with our pumping frequency guide,
                warning signs explained, and an
                easy scheduling form brought in
                maintenance calls from homeowners
                who just needed someone to
                explain it clearly.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Garrison, septic service owner, Harrisonville, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A septic service site with services,
                maintenance guide, and scheduling
                form starts at $225. A full site
                with inspection detail, repair
                services, and warning signs guide
                is $425–$850. One inspection job
                covers the cost. No contracts,
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
