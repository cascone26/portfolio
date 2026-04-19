import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Dermatologists in Kansas City",
  description:
    "Custom websites for dermatology practices in the Kansas City area. Explain your medical and cosmetic services, build patient trust, and get more new patient appointments.",
  alternates: {
    canonical: "https://builtsimple.dev/for/dermatologists",
  },
};

export default function DermatologistsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Dermatologists in Kansas City",
    description: "Custom websites for dermatology practices in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Dermatologists",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Patients searching for a dermatologist in Kansas City look at multiple practices before booking. The one with the clearest service list, doctor credentials, and insurance info gets the appointment. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Dermatology Practices in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Dermatologists</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Dermatology patients range from someone with a suspicious mole
              to someone researching Botox to a teenager with severe acne.
              Each of those patients searches differently and needs different
              information. A dermatology practice website that addresses
              medical skin care, cosmetic procedures, and skin cancer screening
              separately — with clear insurance acceptance and booking — serves
              all of them and converts more of them into patients.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What patients look for when choosing a dermatologist
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services — medical dermatology, cosmetic procedures, skin cancer screening, pediatric derm",
                  "Cosmetic treatments — Botox, fillers, laser, microneedling, chemical peels, CoolSculpting",
                  "Insurance accepted — especially for medical vs. cosmetic — patients need this before calling",
                  "Doctor credentials — board certification, fellowship training, years of practice, areas of focus",
                  "New patient availability — wait times are a real concern for dermatology",
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
                What your dermatology practice website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Medical services — acne, eczema, psoriasis, rosacea, skin cancer screening, mole removal",
                  "Cosmetic services — Botox, fillers, laser resurfacing, microneedling, peels, body contouring",
                  "Insurance page — accepted plans for medical visits, payment options for cosmetic",
                  "Provider bios — board certification, training, specialties, approach to patient care",
                  "Before/after gallery for cosmetic procedures — Botox, filler, laser results",
                  "Appointment request with service type, insurance, and urgency",
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
                &ldquo;We had a generic practice website that listed our phone
                number and a few conditions. The new site with separate medical
                and cosmetic sections, insurance information, and a before/after
                gallery for our laser treatments brought in a completely
                different caliber of cosmetic patient — people who were already
                educated and ready to book.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — Dr. L. Chen, MD, dermatology practice, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A dermatology practice site with services, insurance, and
                appointment form starts at $300. A full site with medical
                and cosmetic sections, provider bios, and before/after gallery
                is $550–$1,150. Two new cosmetic patients cover the cost.
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
