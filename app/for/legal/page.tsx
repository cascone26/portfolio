import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Law Firms and Attorneys in Kansas City",
  description:
    "Custom websites for law firms, solo attorneys, and legal practices in the Kansas City area. Build trust, rank for practice-area searches, and turn visitors into consultation requests.",
  alternates: {
    canonical: "https://builtsimple.dev/for/legal",
  },
};

export default function LegalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Law Firms and Attorneys in Kansas City",
    description:
      "Custom websites for law firms, solo attorneys, and legal practices in the Kansas City area.",
    provider: {
      "@type": "LocalBusiness",
      name: "BuiltSimple",
      url: "https://builtsimple.dev",
    },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Law Firms and Attorneys",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Limited-time offer banner */}
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          March special: Free site mockup for your law firm — no cost, no
          commitment. See what your site could look like before you commit.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Law Firms and Attorneys in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Websites for{" "}
              <span className="gradient-text">Law Firms</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              People searching for an attorney are in a stressful situation and
              evaluating whether they can trust you — before they ever pick up
              the phone. Your website is where that trust is built or lost. Most
              law firm websites lose it.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What your law firm website needs to do
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rank for practice-area searches — Kansas City divorce attorney, Overland Park personal injury lawyer",
                  "Establish credibility immediately — bar memberships, years of experience, notable results",
                  "Make consultation requests effortless — CTA in the header, not buried in a contact page",
                  "Show your actual attorneys — bios with personality, not just credential lists",
                  "Load fast on phones — where most urgent legal searches happen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent-light mt-0.5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
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
                What your site would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Dedicated page for each practice area — each one can rank independently in search",
                  "Attorney bio pages built to build trust, not just list credentials",
                  "Consultation request form with minimal friction — name, phone, practice area, brief description",
                  "Prominent phone number on every page — for clients who need to talk now",
                  "FAQ sections per practice area to capture question-based searches",
                  "Trust signals: bar memberships, years in practice, results where ethically permissible",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent-light mt-0.5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">What you don&apos;t need</h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Stock photos of gavels and scales of justice — they signal generic, not trustworthy",
                  "Dense walls of legal text in the hero section",
                  "A complex multi-step intake form that reduces completions",
                  "A legal template that looks identical to 200 other firms in the area",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter site with your practice areas, attorney bio, and
                consultation form starts at $300. A full firm site with
                dedicated practice area pages, FAQ sections, attorney bios, and
                trust signals runs $800–1,400 depending on how many pages are
                involved. No contracts, no monthly fees — you own it outright.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Get a free mockup — no obligation. Fill out the form below, or
                give me a call.
              </p>
              <p className="mb-6">
                <a
                  href="tel:8165205652"
                  className="text-accent-light text-lg font-semibold hover:underline"
                >
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
