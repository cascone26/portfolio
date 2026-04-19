import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pediatricians in Kansas City",
  description:
    "Custom websites for pediatric primary care practices in the Kansas City area. Help new parents find and choose your practice with information about your philosophy, services, insurance, and new patient process.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pediatricians",
  },
};

export default function PediatriciansPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pediatricians in Kansas City",
    description: "Custom websites for pediatric primary care practices in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pediatricians",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          New parents choosing a pediatrician for their first child research providers carefully — they want to understand your philosophy, confirm you accept their insurance, and know whether you're accepting new patients before they call. A website that answers all of this earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pediatricians in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pediatricians</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              New parents searching for a pediatrician — often
              while still pregnant — are making one of the most
              important healthcare choices they will make for
              their family. They want to understand your
              practice philosophy on topics they care about,
              see photos of your office, read provider bios,
              confirm you accept their insurance, and know
              whether you are accepting new patients before
              they invest time in a prenatal meet-and-greet.
              A pediatric practice website that communicates
              your approach clearly, introduces your providers
              as real people, and makes starting the new
              patient process straightforward helps families
              find you and choose you with confidence.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What new parents research when choosing a pediatrician
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Practice philosophy — communication style, vaccine schedule approach, after-hours availability",
                  "Provider bios — training, experience, special interests, whether they have children of their own",
                  "Services — well visits, sick care, developmental screening, sports physicals, telehealth",
                  "Insurance — accepted plans, Medicaid/CHIP participation, self-pay options",
                  "New patients — whether accepting, prenatal meet-and-greet availability, how to enroll",
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
                What your pediatric practice website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Practice philosophy — communication approach, sick visit same-day access, after-hours policy",
                  "Provider bios — photos, training, board certifications, personal details that build connection",
                  "Services — well-child visits by age, sick care, developmental screenings, telehealth, physicals",
                  "Well-visit schedule — what happens at each age (newborn through teen), why each visit matters",
                  "Insurance and billing — accepted insurers, Medicaid participation, new patient enrollment steps",
                  "New patient form with expecting or current parent, child age, insurance, what brought them here",
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
                &ldquo;Expecting parents were choosing our
                practice based on insurance and proximity
                alone because our website told them nothing
                else. The new site with our provider bios,
                our approach to same-day sick visits, and
                a prenatal consultation form changed who
                was reaching out. Parents started calling
                because they connected with our philosophy
                and wanted to meet us before the birth —
                and almost all of them became patients.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — Dr. S. Okonkwo, pediatrician, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pediatric practice site with provider bios,
                services, and new patient form starts at $275.
                A full site with age-specific well-visit guide,
                philosophy pages, and insurance detail is
                $525–$1,050. One new patient family
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
