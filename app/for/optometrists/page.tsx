import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Optometrists in Kansas City",
  description:
    "Custom websites for eye doctors and optometry practices in the Kansas City area. Rank for local eye care searches, fill your schedule, and make it easy for patients to book an exam.",
  alternates: {
    canonical: "https://builtsimple.dev/for/optometrists",
  },
};

export default function OptometristsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Optometrists in Kansas City",
    description: "Custom websites for eye doctors and optometry practices in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Optometrists",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          &ldquo;Eye doctor near me&rdquo; gets searched thousands of times a month in KC. Show up, stand out, and make booking easy. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Eye Doctors &amp; Optometrists in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Optometrists</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Most patients choose an eye doctor based on three things: insurance
              accepted, location, and whether the website looks like a real practice.
              A clean, professional site that answers those questions instantly —
              and makes scheduling an exam frictionless — converts searchers into
              patients before they click to the next result.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What patients check before choosing an eye doctor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Whether you accept their vision insurance (VSP, EyeMed, Spectera, Davis Vision)",
                  "Services offered — routine exams, contact lens fittings, dry eye treatment, pediatric eye care",
                  "Whether you have an optical dispensary with frames on-site",
                  "Doctor credentials and years of experience",
                  "Online scheduling — most patients won't call if they can book online",
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
                What your optometry website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance accepted — clearly listed, with a contact prompt for verification",
                  "Service pages — comprehensive exams, contact lens fittings, pediatric, dry eye, specialty lenses",
                  "Doctor bio with OD credentials, clinical interests, and years of practice",
                  "Online appointment request linked to your scheduling system",
                  "Optical gallery or frames collection preview to drive in-person traffic",
                  "Patient portal link and new patient forms for a smooth first visit",
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
                &ldquo;We were relying on our health system listing and word of mouth.
                The new site with our insurance list front and center and an online
                scheduling button made a real difference — we started getting new
                patient calls from people who said they chose us because our site
                made it easiest to book.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — Dr. J. Park, OD, optometry practice, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An optometry site with services, insurance, and scheduling starts
                at $275. A full site with service-specific pages, optical gallery,
                and patient portal integration is $550–1,050. One new patient
                family covers the cost. No contracts, no monthly fees.
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
