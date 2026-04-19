import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Orthodontists in Kansas City",
  description:
    "Custom websites for orthodontic practices in the Kansas City area. Show your treatment options, before and after results, and consultation process to attract more braces and Invisalign patients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/orthodontists",
  },
};

export default function OrthodontistsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Orthodontists in Kansas City",
    description: "Custom websites for orthodontic practices in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Orthodontists",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Parents researching braces for a child and adults considering Invisalign compare practices online before scheduling a consultation. Before-and-after photos, treatment options, and payment plan details are what drives the decision. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Orthodontists in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Orthodontists</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              A parent whose child just got a referral for
              braces, or an adult who has been thinking about
              Invisalign for years, is going to compare two or
              three practices online before they call anyone.
              What they are looking for is before-and-after
              results, a clear explanation of their treatment
              options and what each involves, honest guidance
              on timing and cost, and whether payment plans
              make the investment manageable. An orthodontic
              practice website that shows real patient results,
              explains your treatment philosophy, and makes
              scheduling a free consultation feel like the
              obvious next step converts researchers into
              booked consultations and consultations into
              treatment starts.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What patients research before choosing an orthodontist
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before and after photos — real patient results by case type (crowding, spacing, overbite, crossbite)",
                  "Treatment options — traditional braces, clear braces, Invisalign, lingual braces — pros and cons",
                  "Treatment time — how long different cases typically take, what accelerates or lengthens treatment",
                  "Cost and payment plans — range for different treatment types, insurance, monthly payment options",
                  "Adult orthodontics — whether adults are common patients, discreet options, life during treatment",
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
                What your orthodontic practice website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before and after gallery — organized by case type, with treatment duration noted",
                  "Treatment options — braces (metal, ceramic), Invisalign, retainers — each explained honestly",
                  "Timing guide — when kids should be evaluated (age 7 recommendation), adult treatment timing",
                  "Cost transparency — ranges by treatment type, insurance handling, in-house financing options",
                  "Adult page — why adults choose orthodontics, what treatment looks like professionally and socially",
                  "Consultation form with patient age, referral source, treatment interest, insurance info",
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
                &ldquo;Adults were our fastest-growing patient
                type but our site looked like it was only for
                kids. The new site with a dedicated adult
                Invisalign section, real before-and-after
                photos organized by case, and a clear payment
                plan explainer changed who was calling us.
                Adult inquiries doubled within two months
                and the consultation-to-start rate went up
                because people were calling already knowing
                what they wanted.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — Dr. N. Park, orthodontist, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An orthodontic site with treatment options,
                results gallery, and consultation form starts
                at $275. A full site with adult page, case
                type gallery, and financing detail is $525–$1,050.
                One treatment start covers the cost.
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
