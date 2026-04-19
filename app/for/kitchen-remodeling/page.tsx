import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Kitchen Remodeling Contractors in Kansas City",
  description:
    "Custom websites for kitchen remodeling contractors in the Kansas City area. Show your completed projects, process, and material options to convert homeowners researching a kitchen renovation.",
  alternates: {
    canonical: "https://builtsimple.dev/for/kitchen-remodeling",
  },
};

export default function KitchenRemodelingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Kitchen Remodeling Contractors in Kansas City",
    description: "Custom websites for kitchen remodeling contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Kitchen Remodeling Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners planning a kitchen remodel spend months researching before they request a single quote. They want to see completed projects like theirs, understand your process, and know your price range before they invite you into their home. A website that shows your work earns the consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Kitchen Remodeling in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Kitchen Remodeling</span> Contractors in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Kitchen remodels are among the largest
              investments a homeowner makes — often
              $20,000–$80,000 — and the research phase
              can last months or years. Homeowners are
              saving inspiration images, studying before
              and after transformations, comparing material
              options like quartz vs. granite and cabinet
              styles, and trying to understand what a
              project like theirs actually costs. When they
              finally request quotes, they contact the
              contractors whose work they have been
              admiring. A kitchen remodeling website that
              shows a strong portfolio organized by style
              and budget, explains your process from design
              to completion, and gives homeowners a realistic
              sense of investment earns the first call from
              the most serious buyers.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing a kitchen contractor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project portfolio — completed kitchens at different budget levels, styles, and home types",
                  "Process — design consultation, material selection, demolition, installation, timeline",
                  "Materials — cabinet brands and construction, countertop options, backsplash, flooring",
                  "Pricing — budget ranges by project scope, what's included, what drives cost up or down",
                  "Licenses and insurance — general contractor license, liability coverage, warranty on work",
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
                What your kitchen remodeling website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project gallery — completed kitchens with before/after, budget range, and feature callouts",
                  "Process walkthrough — consultation, design, material selections, demo, build, punch list",
                  "Materials guide — cabinet construction, countertop comparison, hardware, appliance considerations",
                  "Investment guide — typical ranges by scope (facelift vs. full remodel vs. layout change)",
                  "Credentials — GC license, insurance, warranties, years in business, KC references",
                  "Quote form with home age, current kitchen scope, desired style, timeline, rough budget",
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
                &ldquo;We were doing great work but the
                only way people could see it was to ask
                us to email photos, which most didn&apos;t
                bother doing. The new site with our
                portfolio organized by style and budget,
                a real process page so homeowners knew
                what to expect, and an investment guide
                that was honest about price ranges changed
                the quality of our leads completely. The
                homeowners calling us had already seen
                five of our kitchens and were calling
                because they wanted that — not because
                we were just available.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Dolan, kitchen remodeling contractor, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A kitchen remodeling site with portfolio,
                process, and quote form starts at $275.
                A full site with materials guide, investment
                ranges, and before/after galleries is
                $525–$1,050. One project covers the cost
                many times over. No contracts, no monthly fees.
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
