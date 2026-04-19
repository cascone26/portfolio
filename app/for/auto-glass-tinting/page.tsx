import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Auto Glass and Window Tinting Shops in Kansas City",
  description:
    "Custom websites for auto glass repair, windshield replacement, and window tinting shops in the Kansas City area. Show your tint options, glass certifications, and insurance billing process to win more customers.",
  alternates: {
    canonical: "https://builtsimple.dev/for/auto-glass-tinting",
  },
};

export default function AutoGlassTintingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Auto Glass and Window Tinting Shops in Kansas City",
    description: "Custom websites for auto glass and window tinting shops in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Auto Glass and Window Tinting Shops",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Customers getting a windshield replaced want to know you work with their insurance and use OEM-quality glass. Customers getting window tint want to see shade options, VLT percentages, and film brands before they commit. A website that answers both earns both types of customers. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Auto Glass &amp; Tinting in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Auto Glass &amp; Window Tinting</span> Shops in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Auto glass and window tinting serve
              two distinct types of customers, each
              with their own set of questions. Glass
              customers — windshield chips, cracks,
              or full replacement — want to know
              whether you work directly with their
              insurance, whether you use OEM or
              OEE quality glass, how long the job
              takes, and whether you offer mobile
              service so they do not have to miss
              work. Tint customers want to see
              examples of different VLT percentages
              on actual vehicles, understand the
              legal limits in Missouri and Kansas,
              compare film brands and warranty
              coverage, and know the typical
              installation time. A website that
              serves both audiences clearly —
              with insurance billing for glass
              customers and a tint shade guide
              with film brand comparison for
              tint customers — converts the search
              into a booking without a phone
              call just to answer basic questions.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers research before choosing a shop
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Glass quality — OEM vs. OEE glass, AGRSS certification, adhesive cure time before driving",
                  "Insurance billing — which insurers you work with, zero-deductible windshield states, process",
                  "Mobile service — whether you come to home or office for glass replacement",
                  "Tint options — VLT percentages, film brands (LLumar, 3M, Suntek), ceramic vs. dyed vs. carbon",
                  "Legal limits — MO and KS tint laws by window, what is enforceable vs. common practice",
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
                What your auto glass and tinting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Glass services — windshield chip repair, full replacement, side glass, rear glass, ADAS recalibration",
                  "Insurance billing — accepted insurers, direct billing process, deductible handling, claim assistance",
                  "Tint gallery — photos of different VLT percentages on real vehicles, interior heat comparison",
                  "Film options — ceramic, carbon, dyed tint comparison with warranty, brand, and performance data",
                  "MO/KS tint law guide — legal limits by window, what enforcement looks like, medical exemptions",
                  "Quote form with service type, vehicle make/model/year, insurance carrier if applicable",
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
                &ldquo;We do both glass and tint but
                our old site made it hard to tell.
                Glass customers couldn&apos;t see
                our insurance billing process and
                kept calling to ask basic questions.
                Tint customers had no way to see
                VLT examples or compare our film
                options. The new site with separate
                sections for each service, our
                insurance guide, and our tint
                gallery with real vehicle photos
                cut the back-and-forth calls in
                half and our booked appointments
                went up in both categories.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Moreno, shop owner, Gladstone, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An auto glass and tinting site with
                services, insurance info, and quote
                form starts at $225. A full site with
                tint gallery, film comparison, MO/KS
                law guide, and mobile service section
                is $425–$850. One windshield job
                covers the cost. No contracts,
                no monthly fees.
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
