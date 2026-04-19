import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Acupuncturists in Kansas City",
  description:
    "Custom websites for licensed acupuncturists and acupuncture clinics in the Kansas City area. Explain your treatment approach, conditions treated, and what to expect to get more new patient appointments.",
  alternates: {
    canonical: "https://builtsimple.dev/for/acupuncture",
  },
};

export default function AcupuncturePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Acupuncturists in Kansas City",
    description: "Custom websites for licensed acupuncturists and acupuncture clinics in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Acupuncture Clinics",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Most acupuncture patients are first-timers with questions and skepticism. A website that explains what a session actually involves, what conditions respond well, and your practitioner credentials earns the appointment from patients who are ready to try it. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Acupuncturists in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Acupuncturists</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Most people looking for an acupuncturist are doing it
              for the first time — a friend recommended it for back
              pain, their doctor suggested it for migraines, or they
              are at the end of a long list of treatments that have
              not worked. They have questions and some skepticism.
              An acupuncture website that explains what a first
              session involves, what conditions are commonly treated,
              and the training behind your L.Ac. or DAOM credentials
              converts the curious browser into a booked appointment.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What patients research before booking their first acupuncture appointment
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "What to expect — what the first session involves, whether needles hurt, how long it takes",
                  "Conditions treated — pain, headaches, fertility, anxiety, insomnia, digestive, menopause",
                  "Credentials — L.Ac. license, NCCAOM board certification, DAOM or Master's degree, training",
                  "Treatment modalities — acupuncture, cupping, gua sha, moxibustion, herbal medicine",
                  "Insurance — whether any coverage applies, HSA/FSA eligibility, self-pay rates",
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
                What your acupuncture website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "First visit guide — what to expect, intake process, session length, what you wear, aftercare",
                  "Conditions page — pain management, headaches, fertility support, anxiety, insomnia, women's health",
                  "Practitioner credentials — L.Ac., NCCAOM, degree program, years in practice, specializations",
                  "Services — acupuncture, cupping, moxibustion, gua sha, herbal consultations",
                  "Rates and packages — per-session cost, package pricing, HSA/FSA accepted",
                  "Booking form with primary concern, new vs. returning, insurance info, scheduling preference",
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
                &ldquo;People are nervous about acupuncture for the
                first time — they picture something painful and
                strange. The new site with the first-visit walkthrough,
                photos of our calming treatment room, and my credential
                page answered all of that. Patients come in relaxed
                because they already understand what is going to happen.
                Our rebooking rate improved because patients were not
                surprised by anything — they knew what to expect and
                they trusted the process.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Chen, L.Ac., acupuncture clinic, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An acupuncture site with services, conditions, and
                booking form starts at $250. A full site with
                conditions pages, first-visit guide, and practitioner
                credentials is $475–$950. A few new patient series
                covers the cost. No contracts, no monthly fees.
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
