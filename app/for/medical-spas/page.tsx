import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Medical Spas in Kansas City",
  description:
    "Custom websites for medical spas and aesthetic clinics in the Kansas City area. Showcase your treatments, build patient trust with provider credentials, and get more cosmetic consultation bookings.",
  alternates: {
    canonical: "https://builtsimple.dev/for/medical-spas",
  },
};

export default function MedicalSpasPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Medical Spas in Kansas City",
    description: "Custom websites for medical spas and aesthetic clinics in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Medical Spas",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Medical spa patients research treatments and providers carefully before booking. A site that explains your procedures, shows before/after results, and presents your provider credentials closes consultations before the first call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Medical Spas in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Medical Spas</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Medical spa patients are spending real money on their appearance
              and they do extensive research before trusting anyone with it.
              They want to know exactly what each treatment does, who is
              performing it and what their credentials are, what results look
              like, and what the process and recovery involves. The med spa
              with the most informative, professional website earns the
              consultation — and consultations convert at high rates.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What patients research before choosing a medical spa
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Treatments — Botox, fillers, laser, RF microneedling, body contouring, PRP, IV therapy",
                  "Provider credentials — RN, NP, PA, MD — who is injecting and what their training is",
                  "Before/after results — real patient photos for Botox, fillers, laser, body contouring",
                  "Treatment details — how it works, what to expect, downtime, how long results last",
                  "Pricing — whether packages are available, what financing options exist",
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
                What your medical spa website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Treatment pages — dedicated page per service with how it works, timeline, results, candidacy",
                  "Before/after gallery — organized by treatment, real results, consent-compliant",
                  "Provider bios — credentials, certifications, training, philosophy, injector experience",
                  "Pricing and packages — menu format, financing options, membership or loyalty program",
                  "Consultation booking — what to expect at a consult, how to prepare, what to bring",
                  "FAQ by treatment — common questions about pain, bruising, downtime, maintenance",
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
                &ldquo;Our old site had a services list and a phone number.
                The new site with individual treatment pages and our
                before/after gallery completely changed the quality of
                consultations — patients arrive having already read everything,
                they&apos;re educated on the treatment, and they&apos;re
                ready to commit. Our consult-to-booking rate went from
                about half to nearly all of them.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Reyes, NP, medical spa, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A medical spa site with treatment pages, provider bios, and
                consultation form starts at $350. A full site with before/after
                gallery, individual service pages, pricing, and FAQ is $650–$1,300.
                One new Botox patient per month covers the cost in the first
                quarter. No contracts, no monthly fees.
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
