import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Kitchen Cabinet Companies in Kansas City",
  description:
    "Custom websites for kitchen cabinet dealers, designers, and installers in the Kansas City area. Show your cabinet lines, finish options, and completed kitchens to get more design consultations.",
  alternates: {
    canonical: "https://builtsimple.dev/for/kitchen-cabinets",
  },
};

export default function KitchenCabinetsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Kitchen Cabinet Companies in Kansas City",
    description: "Custom websites for kitchen cabinet dealers, designers, and installers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Kitchen Cabinet Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners planning a kitchen remodel spend weeks looking at cabinet styles, finishes, and completed kitchens before reaching out to anyone. The cabinet company with the best portfolio and clearest process earns the design consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Cabinet Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Kitchen Cabinets</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              A kitchen cabinet project is one of the largest investments
              a homeowner makes in their home. They research styles,
              compare box construction and drawer hardware, and look
              at dozens of completed kitchens before they call a single
              company. The cabinet dealer or installer with a website
              that shows real completed kitchens, explains the difference
              between stock, semi-custom, and custom cabinetry, and
              makes it easy to book a design consultation earns the sale.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners look for in a kitchen cabinet company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Completed kitchen photos — organized by style: shaker, inset, flat-panel, raised-panel, painted",
                  "Cabinet lines carried — brands, construction quality, box material, dovetail vs. staple joints",
                  "Stock vs. semi-custom vs. custom — the difference in price, lead time, and fit",
                  "Finish and door style options — wood species, paint colors, stain samples, hardware pairings",
                  "Installation — whether they install or coordinate with a general contractor",
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
                What your cabinet company website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Kitchen portfolio — completed projects organized by style and finish with before/after where available",
                  "Cabinet lines — brands carried, construction details, box and door quality comparison",
                  "Style guide — shaker, inset, flat-panel, raised-panel with photo examples and popular pairings",
                  "Finish samples — wood species, paint colors, stains, glazes — what they look like in kitchens",
                  "Process — design consultation, layout, selection, lead time, delivery, installation coordination",
                  "Consultation request with kitchen size, style preference, timeline, budget range",
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
                &ldquo;We carry premium semi-custom lines but our website
                had no photos and no way to show what we actually do.
                The new site with our kitchen portfolio organized by style,
                the cabinet brand comparison, and the finish sample gallery
                brought in homeowners who came to the consultation already
                knowing which direction they wanted to go. Closing became
                much easier.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Nakamura, kitchen cabinet dealer, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A cabinet site with kitchen portfolio, style guide, and
                consultation form starts at $275. A full site with cabinet
                line comparisons, finish gallery, and design process
                is $525–$1,050. One kitchen project covers the cost.
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
