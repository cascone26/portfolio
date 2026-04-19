import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Chimney Sweep and Chimney Repair Companies in Kansas City",
  description:
    "Custom websites for chimney sweeps and chimney repair companies in the Kansas City area. Show your CSIA certifications, inspection process, and repair capabilities to win annual cleaning and inspection contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/chimney-sweep",
  },
};

export default function ChimneySweepPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Chimney Sweep and Chimney Repair Companies in Kansas City",
    description: "Custom websites for chimney sweep companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Chimney Sweep Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners scheduling chimney service want to know your CSIA certification, whether your inspection includes a camera scan, and what the Level 1/2/3 inspection designations mean. A website that explains the process earns the annual contract from homeowners who want to do things right. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Chimney Sweep in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Chimney Sweeps</span> &amp; Chimney Repair Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Homeowners searching for chimney services
              fall into three groups: those who haven&apos;t
              had their chimney serviced in years and
              know they should, those who are buying
              or selling a home and need a chimney
              inspection for the transaction, and
              those who have noticed something wrong —
              a smell, draft issue, visible damage,
              or animal in the flue. All three groups
              want the same core credential before
              they book: CSIA (Chimney Safety Institute
              of America) certification, which tells
              them you are trained and current on
              industry standards. They also want to
              understand the difference between a
              Level 1, Level 2, and Level 3 inspection
              so they know what they are buying.
              Chimney repair customers — cracked
              crowns, spalling brick, damaged flashing,
              liner relining — want to see photos
              of similar repair work and understand
              what caused the problem. A chimney
              sweep website that explains the
              inspection levels, shows your CSIA
              credentials, and covers your repair
              capabilities earns both the annual
              cleaning customer and the homeowner
              facing a real repair.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners look for before booking chimney service
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "CSIA certification — Chimney Safety Institute of America — the primary industry credential",
                  "Inspection levels — Level 1, 2, and 3 — what each covers and when each is needed",
                  "Camera inspection — whether your Level 2 includes a video scan, what it shows",
                  "Cleaning frequency — how often wood-burning, gas, and pellet fireplaces need service",
                  "Repair capabilities — crown, cap, flashing, liner, tuckpointing, smoke chamber parging",
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
                What your chimney sweep website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Credentials — CSIA certification, NFI (National Fireplace Institute) if applicable, years in service",
                  "Inspection guide — Level 1, 2, 3 explained clearly — when each is needed and what it includes",
                  "Cleaning services — wood-burning, gas fireplace, insert, pellet stove — frequency recommendations",
                  "Repair services — crown repair, cap installation, flashing, liner relining, tuckpointing, rebuilds",
                  "Real estate inspections — what the report covers, turnaround time, documentation format",
                  "Appointment form with fireplace type, last service date, concern or reason for calling, address",
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
                &ldquo;Most of my calls came in October
                and November from people who wanted
                their chimney cleaned before the season.
                The rest of the year was quiet even
                though people use gas fireplaces year-round
                and repairs don&apos;t wait for fall.
                The new site explaining my CSIA
                credentials, what each inspection
                level covers, and my full repair
                services brought in calls throughout
                the year — real estate inspections
                in spring and summer, repair work
                when people noticed problems, not
                just the seasonal cleaning rush.
                The site paid for itself in
                the first slow month it converted.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — E. Callahan, CSIA-certified sweep, Gladstone, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A chimney sweep site with credentials,
                inspection levels, and appointment form
                starts at $200. A full site with repair
                services, real estate inspection detail,
                and cleaning guide is $375–$750. One
                repair job covers the cost. No contracts,
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
