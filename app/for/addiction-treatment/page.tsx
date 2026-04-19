import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Addiction Treatment Centers in Kansas City",
  description:
    "Custom websites for drug and alcohol treatment centers, detox programs, and recovery services in the Kansas City area. Help families and individuals find the right level of care and take the first step.",
  alternates: {
    canonical: "https://builtsimple.dev/for/addiction-treatment",
  },
};

export default function AddictionTreatmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Addiction Treatment Centers in Kansas City",
    description: "Custom websites for addiction treatment centers and recovery programs in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Addiction Treatment Centers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Families and individuals searching for addiction treatment are often in crisis and need to understand your programs, insurance acceptance, and admissions process before they can take the first step. A clear, compassionate website removes the barrier. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Addiction Treatment in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Addiction Treatment</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              People searching for addiction treatment — or family
              members searching on behalf of someone they love —
              are often in crisis, overwhelmed, and uncertain
              whether treatment will actually work. They are
              comparing programs, trying to understand levels of
              care, and looking for any sign that your facility
              is compassionate, qualified, and accessible through
              their insurance. A treatment center website that
              clearly explains your programs, your clinical approach,
              and the admissions process can be the difference
              between someone calling or giving up.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What families and individuals research when choosing a treatment program
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Level of care — detox, residential, PHP, IOP, outpatient — what each involves and who it is for",
                  "Substances treated — alcohol, opioids, meth, cocaine, benzodiazepines, dual diagnosis",
                  "Clinical approach — 12-step, evidence-based (CBT, DBT, MAT), trauma-informed care",
                  "Insurance — Medicaid, BCBS, Aetna, Cigna, United — what is typically covered in Missouri and Kansas",
                  "Admissions — what the intake process looks like, how quickly someone can be admitted",
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
                What your treatment center website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Programs page — detox, residential, PHP, IOP, outpatient — what each level includes",
                  "Substances treated — specific program details for alcohol, opioids, stimulants, dual diagnosis",
                  "Clinical team — credentials, licenses, years of experience, treatment philosophy",
                  "Insurance verification — accepted plans, Medicaid, self-pay options, financing",
                  "Admissions process — what to expect from first call through intake, what to bring",
                  "Contact form with substance concern, level of care interest, insurance, urgency",
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
                &ldquo;Families were calling us late at night scared
                and desperate, but our old website gave them nothing
                to trust us on. The new site with our program
                descriptions, our clinical team credentials, a clear
                insurance guide, and exactly what happens on the
                first call made people feel like we were organized
                and ready to help them. Our admissions calls became
                warmer and our conversion from call to admission went
                up meaningfully.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Merritt, LCPC, treatment center director, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A treatment center site with programs, insurance,
                and admissions form starts at $325. A full site
                with level-of-care pages, clinical team profiles,
                substance-specific content, and insurance guide
                is $625–$1,250. One admission covers the cost.
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
