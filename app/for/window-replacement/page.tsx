import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Replacement Companies in Kansas City",
  description:
    "Custom websites for window replacement and installation companies in the Kansas City area. Show your brands and products, explain your installation process, and get more in-home estimate requests.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-replacement",
  },
};

export default function WindowReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Replacement Companies in Kansas City",
    description: "Custom websites for window replacement and installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners comparing window replacement companies spend weeks researching brands, energy ratings, and warranties before requesting an estimate. Be the local company they trust enough to invite in. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Replacement</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window replacement is a multi-thousand-dollar decision that
              homeowners research heavily before calling anyone. They want to
              know what brands you carry, what energy ratings those windows
              have, what the installation looks like, and what the warranty
              covers. The local window company that answers all of those
              questions clearly on their website earns more estimate
              appointments — and more installs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing a window company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Window brands — Andersen, Pella, Marvin, Simonton, Alside, Milgard, Sunrise",
                  "Energy ratings — U-factor, SHGC, ENERGY STAR certification, Low-E glass options",
                  "Window types — double-hung, casement, bay, bow, awning, slider, picture",
                  "Installation process — how long it takes, what to expect, cleanup, disposal of old windows",
                  "Warranty — product warranty vs. installation workmanship warranty, what's covered",
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
                What your window replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Brands page — every brand you carry with specs, energy ratings, and product line overview",
                  "Window styles — double-hung, casement, bay/bow, slider with photos and use cases",
                  "Energy efficiency page — U-factor, Low-E, ENERGY STAR, and KC climate considerations",
                  "Installation process — what to expect from estimate through completion",
                  "Warranty page — manufacturer warranty vs. labor warranty, what each covers",
                  "Estimate request form — window count, style interest, current window issues, timeline",
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
                &ldquo;National window companies were getting most of the
                online leads because they had detailed product pages and we
                had nothing. The new site with our Andersen and Pella brand
                pages and energy efficiency information put us on equal footing
                in search results — and homeowners specifically said they chose
                us because our site was more informative than the bigger
                companies.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Johansson, window replacement company, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window replacement site with brands, styles, and estimate
                form starts at $275. A full site with brand pages, energy
                efficiency information, and installation process is $500–$1,050.
                Two whole-home jobs cover the cost. No contracts, no monthly fees.
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
