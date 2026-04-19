import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Tinting Companies in Kansas City",
  description:
    "Custom websites for auto, residential, and commercial window tinting companies in the Kansas City area. Explain your film options, heat rejection, and UV protection to get more quotes from car owners and homeowners.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-tinting",
  },
};

export default function WindowTintingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Tinting Companies in Kansas City",
    description: "Custom websites for window tinting companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Tinting Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Window tinting customers want to know your film options, what percentages are legal in Missouri and Kansas, and what heat rejection they can actually expect. A website that answers these before they call earns the appointment. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Tinting in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Tinting</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window tinting customers — car owners wanting heat
              rejection on KC summer drives, homeowners protecting
              furniture and flooring from UV, and commercial
              property managers managing glare and energy costs —
              all do their research before choosing. They want to
              compare film types, understand the MO and KS legal
              limits, and see examples of completed work. A window
              tinting website that explains your film lineup with
              real performance specs earns the customer who wants
              quality over whoever is cheapest on Google.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What tinting customers research before choosing a shop
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Film types — dyed vs. carbon vs. ceramic — heat rejection, clarity, longevity differences",
                  "Legal limits — MO and KS tint laws by window position, what percent is street-legal",
                  "Heat rejection specs — TSER, IRR percentages — what they mean in real summer heat",
                  "UV protection — UVA vs. UVB rejection, protection for skin and interior",
                  "Warranty — film manufacturer warranty, lifetime warranties, what is covered",
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
                What your window tinting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Film comparison — dyed, carbon, ceramic — heat rejection specs, price range, best use",
                  "Auto tinting — car, truck, SUV — legal limits by window, ceramic options",
                  "Residential tinting — heat rejection, UV protection, glare reduction, privacy film",
                  "Commercial tinting — office buildings, storefronts, energy savings, security film",
                  "MO/KS legal guide — tint percentages by window, front vs. rear rules",
                  "Quote form with vehicle or property type, windows needed, film preference",
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
                &ldquo;We were competing against shops charging $99
                for tint from China. The new site with our ceramic
                film specs, our side-by-side comparison showing why
                ceramic costs more, and our KC legal guide for what
                you can actually put on front windows changed the
                type of customer who called us. We stopped getting
                price shoppers and started getting people who wanted
                ceramic and already understood why.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Dominguez, window tinting, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window tinting site with film options, services,
                and quote form starts at $225. A full site with
                auto and residential pages, film comparison, and
                MO/KS legal guide is $425–$875. A few ceramic
                installs covers the cost. No contracts, no monthly fees.
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
