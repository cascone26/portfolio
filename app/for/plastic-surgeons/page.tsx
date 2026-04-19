import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Plastic Surgeons in Kansas City",
  description:
    "Custom websites for plastic surgeons and cosmetic surgery practices in the Kansas City area. Showcase your procedures, board certifications, and before/after results to attract consultation requests.",
  alternates: {
    canonical: "https://builtsimple.dev/for/plastic-surgeons",
  },
};

export default function PlasticSurgeonsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Plastic Surgeons in Kansas City",
    description: "Custom websites for plastic surgeons and cosmetic surgery practices in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Plastic Surgery Practices",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Plastic surgery patients research their surgeon for months, studying before/after galleries and credentials before they book a consultation. A website that builds trust through results and board certification earns the consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Plastic Surgeons in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Plastic Surgeons</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Plastic surgery patients make their decisions slowly
              and deliberately. They study before-and-after photos
              for months, compare surgeon credentials, and look for
              signs of a natural aesthetic versus an overdone result.
              Before they call, they have already formed an opinion
              about whether your work matches what they are looking for.
              A plastic surgery website that features your best results,
              explains your board certification and training, and
              clearly describes what each procedure involves earns
              the consultation from patients who are ready to commit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What patients research before choosing a plastic surgeon
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after gallery — organized by procedure, showing realistic natural-looking results",
                  "Board certification — ABPS vs. other certifications, fellowship training, hospital privileges",
                  "Procedure details — what each surgery involves, recovery timeline, expected results",
                  "Aesthetic philosophy — the surgeon's approach and what makes their results distinctive",
                  "Consultation process — what happens at the consultation, cost, how long, what to bring",
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
                What your plastic surgery website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after gallery — organized by procedure with patient photos and natural result examples",
                  "Surgeon profile — ABPS board certification, fellowship, hospital affiliations, aesthetic philosophy",
                  "Procedure pages — breast augmentation, rhinoplasty, facelift, liposuction, tummy tuck, non-surgical",
                  "Recovery guides — what each recovery involves, what is normal, when to expect final results",
                  "Non-surgical services — Botox, fillers, laser, skin treatments — offered alongside surgery",
                  "Consultation form with procedure interest, timeline, questions you want answered",
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
                &ldquo;Patients were driving to larger cities for
                consultations because they assumed the best surgeons
                were not in KC. The new site with our ABPS credentials,
                fellowship training, and before/after gallery organized
                by procedure changed that. Patients started reaching
                out who had done extensive research and specifically
                chose us for our results. Our consultation quality
                improved because patients arrived informed and ready
                to move forward.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — Dr. M. Ashford, MD FACS, plastic surgery, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A plastic surgery site with procedures, surgeon
                profile, and consultation form starts at $375. A
                full site with procedure pages, before/after gallery,
                and recovery guides is $700–$1,400. One
                consultation-to-surgery conversion covers the cost.
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
