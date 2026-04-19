import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Physical Therapists in Kansas City",
  description:
    "Custom websites for physical therapy clinics in the Kansas City area. Get found by patients searching for condition-specific care and convert those searches into booked evaluations.",
  alternates: {
    canonical: "https://builtsimple.dev/for/physical-therapy",
  },
};

export default function PhysicalTherapyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Physical Therapists in Kansas City",
    description: "Custom websites for physical therapy clinics in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Physical Therapists",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Patients search by condition — "PT for rotator cuff," "knee replacement recovery KC." A site built around your specialties shows up for all of them. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For PT Clinics in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Physical Therapists</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Patients recovering from surgery, managing chronic pain, or returning
              to sport don&apos;t search for &ldquo;physical therapy.&rdquo; They
              search for their condition. A website built around your specific
              specialties — orthopedic rehab, sports injuries, post-op recovery —
              shows up when those patients are actively looking for exactly what you offer.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What patients look for before choosing a PT clinic
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Whether you specialize in their specific condition or injury type",
                  "Whether you accept their insurance — this is often the first filter",
                  "Your therapists' credentials (DPT, OCS, SCS, CSCS, specialty certs)",
                  "Online scheduling or at least an easy way to request an evaluation",
                  "Average wait time for a new patient appointment",
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
                What your PT clinic website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Condition and specialty pages — orthopedic, sports, post-surgical, vestibular, pediatric",
                  "Therapist bios with clinical credentials, certifications, and specialties",
                  "Insurance accepted list with a clear contact prompt for verification",
                  "Online evaluation request form with condition and referred-by fields",
                  "Patient success stories focused on return to activity and pain resolution",
                  "FAQ covering what to expect on the first visit and how long treatment typically takes",
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
                &ldquo;Our referral-only model was starting to slow down. After
                the new site launched with separate pages for each specialty,
                we started getting 8-10 self-referred patients a month from
                Google — patients we never would have reached through our
                physician relationships alone.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Barnes, DPT, physical therapy clinic, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A PT clinic site with specialties, team bios, and evaluation
                request form starts at $300. A full site with condition-specific
                pages, insurance list, and online scheduling integration is
                $600–1,100. One new long-term patient covers it. No contracts,
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
