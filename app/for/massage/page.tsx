import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Massage Therapists in Kansas City",
  description:
    "Custom websites for massage therapists and massage studios in the Kansas City area. Rank for the modalities you specialize in and make booking your next appointment effortless.",
  alternates: {
    canonical: "https://builtsimple.dev/for/massage",
  },
};

export default function MassagePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Massage Therapists in Kansas City",
    description: "Custom websites for massage therapists and massage studios in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Massage Therapists",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          People search by need — "deep tissue massage KC," "prenatal massage near me," "sports massage Overland Park." A site built around your specialties shows up for all of them. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Massage Therapists in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Massage Therapists</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Clients looking for massage therapy aren&apos;t just searching
              &ldquo;massage near me&rdquo; — they&apos;re searching for their
              specific need. Deep tissue for chronic back pain. Prenatal massage
              for pregnancy discomfort. Sports massage for injury recovery. A
              website built around your modalities brings in clients who are
              already sold on what you do before they book.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients check before booking a massage therapist
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Which modalities you specialize in — deep tissue, Swedish, prenatal, hot stone, sports",
                  "Your credentials and how many years you've been practicing",
                  "Session lengths and pricing — 60, 90, 120 minutes",
                  "Whether you take insurance or HSA/FSA payments",
                  "Online booking — can they schedule without calling?",
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
                What your massage therapy website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Modality pages — deep tissue, prenatal, sports, Swedish, trigger point, lymphatic",
                  "Bio with license number (LMT), credentials, and years of practice",
                  "Service menu with session lengths, add-ons, and clear pricing",
                  "Online booking button — linked to your scheduling software (MindBody, Jane, etc.)",
                  "Gift certificate page — massage gifts are high-converting, especially near holidays",
                  "Client testimonials that mention specific conditions improved and how many sessions it took",
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
                &ldquo;I&apos;d been in practice for six years entirely on referrals.
                After my site launched with separate pages for prenatal and sports
                massage, I started filling spots from Google searches I never would
                have gotten otherwise. My schedule was full within two months of
                going live.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Kowalski, LMT, massage therapist, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A massage therapy site with service menu, bio, and booking link
                starts at $225. A full site with modality-specific pages, gift
                certificate section, and online scheduling integration is
                $450–850. Three new regular clients and you&apos;ve covered it
                in the first month. No contracts, no monthly fees.
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
