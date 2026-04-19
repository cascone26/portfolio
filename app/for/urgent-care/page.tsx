import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Urgent Care Clinics in Kansas City",
  description:
    "Custom websites for independent urgent care clinics in the Kansas City area. Show your wait times, services, and insurance acceptance to drive more walk-in and online-check-in patients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/urgent-care",
  },
};

export default function UrgentCarePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Urgent Care Clinics in Kansas City",
    description: "Custom websites for independent urgent care clinics in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Urgent Care Clinics",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Patients searching for urgent care are deciding in under 60 seconds — based on wait time, services, and insurance. Your website needs to show all three instantly to beat the hospital system clinics nearby. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Urgent Care Clinics in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Urgent Care</span> Clinics in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Urgent care decisions happen fast. Someone has a sick kid, a sprained
              ankle, or a fever and they search for the closest place that takes
              their insurance and won&apos;t make them wait two hours. The independent
              urgent care clinic that shows current wait times, lists every accepted
              insurance plan, and offers online check-in gets the walk-in patient
              before they settle for the hospital system clinic down the street.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What patients check before choosing an urgent care clinic
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Wait times — current or estimated wait time is often the first thing patients look for",
                  "Insurance — they need to know their plan is accepted before driving there",
                  "Services — what you treat: illness, injuries, X-ray, lab work, stitches, physicals",
                  "Hours — evenings and weekends are critical for urgent care — show them prominently",
                  "Online check-in — save their spot before they arrive to reduce wait time anxiety",
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
                What your urgent care website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Wait time display — current or estimated wait, updated regularly or via integration",
                  "Insurance page — every accepted plan listed clearly, self-pay pricing transparency",
                  "Services — illness, injury, sports physicals, X-ray, labs, COVID testing, occupational health",
                  "Hours and location — displayed prominently, with holiday hours, directions, parking",
                  "Online check-in button — prominent on every page, links to your check-in system",
                  "ER vs. urgent care guide — helps patients determine whether they need you or the ER",
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
                &ldquo;The hospital system clinics near us have massive
                marketing budgets and we are an independent clinic. The
                new site with our insurance list, hours, and online
                check-in completely leveled the playing field. Patients
                started choosing us specifically because our site was
                clearer about what we accept and how to save a spot
                before arriving.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — Dr. N. Park, MD, urgent care clinic, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An urgent care site with services, insurance, and hours
                starts at $275. A full site with wait time display, online
                check-in integration, and ER vs. urgent care guide is
                $525–$1,050. Ten new patient visits cover the cost. No
                contracts, no monthly fees.
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
