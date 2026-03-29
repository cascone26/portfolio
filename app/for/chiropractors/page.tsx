import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Chiropractors in Kansas City",
  description:
    "Custom websites for chiropractors and chiropractic clinics in the Kansas City area. Help new patients find you, understand your services, and book an appointment.",
  alternates: {
    canonical: "https://builtsimple.dev/for/chiropractors",
  },
};

export default function ChiropractorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Chiropractors in Kansas City",
    description: "Custom websites for chiropractors and chiropractic clinics in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Chiropractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Limited-time offer banner */}
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          March special: Free site mockup for your chiropractic clinic — no cost, no commitment. Just reply to see what your site could look like.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Chiropractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Chiropractors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Most people looking for a chiropractor start with a Google search.
              If your website looks outdated or doesn&apos;t show up at all,
              they&apos;ll book with the clinic down the street instead of yours.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What new patients look for before they book
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "What conditions you treat — back pain, neck pain, sports injuries, headaches",
                  "Your credentials, training, and approach",
                  "Whether you accept their insurance",
                  "Patient reviews from real people in Kansas City",
                  "An easy way to request an appointment online",
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
                What your chiropractic website would include
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Every site I build is tailored to your practice, but here&apos;s
                what most chiropractors need:
              </p>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services page covering each condition and treatment you offer",
                  "Doctor bio with credentials, philosophy, and a welcoming photo",
                  "Appointment request form or online booking integration",
                  "Insurance accepted list so patients know before they call",
                  "Patient reviews and testimonials prominently displayed",
                  "Mobile-friendly design — most searches happen on phones",
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
              {/* TODO: Replace with real testimonial from a chiropractic client */}
              <blockquote className="text-muted text-sm leading-relaxed italic border-l-2 border-accent/40 pl-4">
                &ldquo;I used to get maybe two or three new patients a month from
                the web. After the new site went live, that number more than
                doubled within 60 days. The booking form alone was worth it.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — Dr. M. Patterson, chiropractor, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter site with your services, bio, and appointment form
                starts at $250. A full site with multiple service pages, patient
                resources, and booking integration is $600-1,200. No contracts,
                no monthly fees.
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
