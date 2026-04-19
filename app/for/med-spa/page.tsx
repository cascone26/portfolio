import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Med Spas in Kansas City",
  description:
    "Custom websites for medical spas and aesthetic practices in the Kansas City area. Showcase your treatments, provider credentials, and before/after results to book more consultations.",
  alternates: {
    canonical: "https://builtsimple.dev/for/med-spa",
  },
};

export default function MedSpaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Med Spas in Kansas City",
    description: "Custom websites for medical spas and aesthetic practices in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Medical Spas",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Med spa clients research treatments and providers heavily before booking — they want proof of results, medical oversight, and a clear treatment menu. A website that delivers all three books more consultations. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Med Spas in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Med Spas</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Med spa clients are investing real money in their
              appearance and they want to feel confident about
              where they go. Before booking, they are comparing
              before/after galleries, checking that a licensed
              medical provider oversees the treatments, and
              understanding exactly what each procedure involves
              and how long results last. A med spa website that
              showcases your best results, credentials your
              providers, and explains each treatment clearly
              earns the consultation from clients who are ready
              to commit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients research before booking a med spa
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after gallery — results by treatment type, realistic expectations, natural-looking outcomes",
                  "Provider credentials — MD/NP/PA medical oversight, injector training, years of experience",
                  "Treatment menu — Botox, fillers, laser, body contouring, skin rejuvenation — what each does",
                  "Results and longevity — how long each treatment lasts, maintenance schedule, what to expect",
                  "Consultation process — what happens at consultation, whether it is free, what to bring",
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
                What your med spa website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after gallery — organized by treatment with realistic result photos",
                  "Provider profiles — credentials, training, injector certifications, aesthetic philosophy",
                  "Treatment pages — injectables, laser treatments, body contouring, skin care — each explained",
                  "Results guide — what to expect, timeline, longevity, maintenance for each treatment",
                  "Membership and packages — loyalty pricing, bundled services, referral program",
                  "Consultation booking form with treatment interest, concerns, timeline, skin type",
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
                &ldquo;We were competing with national chains and
                losing because our old site looked dated next to
                theirs. The new site with our before/after gallery
                organized by treatment, our NP&apos;s credentials
                and injector training front and center, and a clear
                breakdown of what each treatment does changed how
                clients perceived us. Our consultation bookings
                doubled and clients arrived already knowing what
                they wanted.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Harrington NP, med spa owner, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A med spa site with treatment menu, provider profiles,
                and booking form starts at $325. A full site with
                treatment pages, before/after gallery, and membership
                program is $625–$1,250. Two consultation bookings
                cover the cost. No contracts, no monthly fees.
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
