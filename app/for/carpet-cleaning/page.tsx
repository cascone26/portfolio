import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Carpet Cleaning Companies in Kansas City",
  description:
    "Custom websites for carpet and upholstery cleaning companies in the Kansas City area. Show your results, get more recurring bookings, and build the customer base that fills your schedule year-round.",
  alternates: {
    canonical: "https://builtsimple.dev/for/carpet-cleaning",
  },
};

export default function CarpetCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Carpet Cleaning Companies in Kansas City",
    description: "Custom websites for carpet and upholstery cleaning companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Carpet Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners search for carpet cleaning a couple times a year. Make sure they find your company — and see your before/after results — before they call the franchise. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Carpet Cleaning Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Carpet Cleaning</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Carpet cleaning is a recurring service — the same homeowner will
              book you every year if they had a good experience. The hard part
              is getting that first booking. A local carpet cleaning company
              with a website showing real before/after results, clear pricing,
              and an easy booking link consistently beats the franchise name
              they see on TV, because it looks local, looks real, and answers
              their questions before they have to ask.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before booking carpet cleaning
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after photos — stain removal, high-traffic areas, pet odor treatment",
                  "Services offered — carpet, upholstery, area rugs, tile and grout, hardwood, water damage",
                  "Pricing — per room, per square foot, or package pricing for whole-home",
                  "Methods — hot water extraction vs dry cleaning vs steam cleaning and why it matters",
                  "Whether they use truck-mounted or portable equipment",
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
                What your carpet cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after gallery — stain removal, pet odor, high-traffic areas, upholstery",
                  "Services page — carpet, tile/grout, upholstery, area rugs, commercial carpet cleaning",
                  "Pricing guide — per room pricing, add-ons, and what affects cost (heavy soil, pet treatment)",
                  "Method explanation — why truck-mounted hot water extraction gets deeper results",
                  "Online booking or instant quote form — room count, carpet type, and add-on services",
                  "Testimonials with specific stain or odor issues resolved and rooms or square footage",
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
                &ldquo;People kept choosing the franchise name they recognized
                and I couldn&apos;t compete on brand awareness. The new site
                with my before/after stain removal photos changed the
                conversation — people could see the actual results I get vs
                the generic franchise promise. I doubled my monthly bookings
                in the first quarter after launch.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Martinez, carpet cleaning company, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A carpet cleaning site with services, before/after photos, and
                booking form starts at $200. A full site with service-type pages,
                pricing guide, and testimonials is $400–750. Ten whole-home
                carpet cleaning jobs cover the cost. No contracts, no monthly fees.
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
