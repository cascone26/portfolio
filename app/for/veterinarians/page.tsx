import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Veterinarians in Kansas City",
  description:
    "Custom websites for veterinary clinics in the Kansas City area. Get found by pet owners searching for a new vet and convert first-time visitors into loyal long-term clients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/veterinarians",
  },
};

export default function VeterinariansPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Veterinarians in Kansas City",
    description: "Custom websites for veterinary clinics in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Veterinarians",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          New pet owners search for a vet the week they bring their animal home. Make sure your clinic shows up. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Vets in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Veterinarians</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pet owners choose a vet the way they choose a pediatrician — they want
              someone they trust completely. A website that shows your team, explains
              your approach, and makes booking easy wins new clients before they
              ever walk through the door.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What pet owners look for before choosing a vet
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Whether you accept new patients — this is the first thing they check",
                  "Which species and breeds you treat (dogs, cats, exotic/small animals)",
                  "Whether you offer emergency or urgent care after hours",
                  "Doctor bios — they want to know who will actually see their pet",
                  "Online appointment booking — they won't call if they can avoid it",
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
                What your veterinary website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "New patient callout — clearly state you're accepting new clients",
                  "Services list — wellness exams, vaccines, surgery, dental, boarding, emergency",
                  "Doctor and staff bios with photos and credentials",
                  "Online appointment request form or booking integration",
                  "Species and breed specialties prominently displayed",
                  "After-hours and emergency contact information visible on every page",
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
                &ldquo;We were at capacity from referrals but had no way for new
                pet owners to find us online. The new website clearly shows
                we&apos;re accepting new patients and lets people book directly.
                We added 40+ new clients the first three months.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — Dr. R. Patel, veterinary clinic, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A veterinary site with services, team bios, and appointment
                request form starts at $300. A full site with species-specific
                pages, online booking integration, and a client portal link
                is $600–1,100. Two new wellness plan clients cover it.
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
