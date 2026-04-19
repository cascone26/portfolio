import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Audiologists in Kansas City",
  description:
    "Custom websites for audiology practices and hearing centers in the Kansas City area. Explain your hearing evaluation process, hearing aid brands, and insurance acceptance to get more new patient appointments.",
  alternates: {
    canonical: "https://builtsimple.dev/for/audiologists",
  },
};

export default function AudiologistsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Audiologists in Kansas City",
    description: "Custom websites for audiology practices and hearing centers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Audiology Practices",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Hearing aid patients research their options for weeks before booking — comparing hearing aid brands, technology levels, and whether their insurance covers it. An audiology website that answers all three earns the appointment. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Audiology Practices in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Audiologists</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Hearing loss is a gradual process, and most patients spend
              months or years noticing symptoms before they take action.
              When they finally search for an audiologist, they want
              to understand the evaluation process, know what hearing
              aid brands are available, and find out whether their
              insurance or Medicare covers the cost. The audiology
              practice whose website answers those questions directly
              earns appointments from patients who are finally ready
              to address their hearing.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What hearing patients research before choosing an audiologist
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Hearing evaluation — what the test involves, how long it takes, what the results show",
                  "Hearing aid brands — Phonak, Oticon, Widex, Signia, Starkey, ReSound — technology levels",
                  "Hearing aid styles — behind-the-ear, in-the-ear, receiver-in-canal, completely-in-canal",
                  "Insurance coverage — Medicare Advantage, VSP, Aetna, BlueCross — what is typically covered",
                  "Tinnitus — whether tinnitus evaluation and management is offered alongside hearing loss treatment",
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
                What your audiology website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Hearing evaluation page — comprehensive test walkthrough, what results mean, next steps",
                  "Hearing aids — brands carried, technology levels (basic/mid/premium), rechargeable options",
                  "Hearing aid styles — visual guide to BTE, ITE, RIC, CIC with best use cases for each",
                  "Insurance and financing — accepted plans, Medicare Advantage coverage, CareCredit",
                  "Tinnitus services — evaluation, sound therapy, hearing aid features that help",
                  "Audiologist credentials — Au.D. degree, board certification, years in practice, specialties",
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
                &ldquo;Our patients were mostly Medicare age and had real
                concerns about cost. The new site with our insurance
                guide, the breakdown of technology levels and what
                each costs, and our audiologist credentials made patients
                feel informed before they walked in the door. We saw
                a meaningful increase in new patient appointments from
                people who had been putting off dealing with their
                hearing for years.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — Dr. A. Summers, Au.D., audiology practice, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An audiology site with services, hearing aids, and
                appointment form starts at $300. A full site with brand
                pages, style guide, insurance info, and audiologist
                credentials is $575–$1,150. One hearing aid fitting
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
