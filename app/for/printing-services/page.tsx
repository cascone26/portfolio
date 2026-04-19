import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Print Shops in Kansas City",
  description:
    "Custom websites for commercial printing and print shops in the Kansas City area. Show your products, turnaround times, and file specs to get more orders from businesses and organizations.",
  alternates: {
    canonical: "https://builtsimple.dev/for/printing-services",
  },
};

export default function PrintingServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Print Shops in Kansas City",
    description: "Custom websites for commercial printing and print shops in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Print Shops",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Businesses ordering print materials want to know turnaround times, file specs, and what finishes are available before they call. A website that answers all of this and makes quoting easy earns the account. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Print Shops in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Print Shops</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Print customers — marketing coordinators ordering
              business cards and brochures, event organizers needing
              banners and signage, nonprofits producing fundraising
              materials — want to know exactly what you offer,
              what your turnaround looks like, and how to get a
              quote fast. A print shop website that lists your products
              with paper stock and finish options, explains rush
              turnaround availability, and makes requesting a quote
              frictionless earns the repeat business account.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What businesses look for in a local print shop
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Products — business cards, flyers, brochures, postcards, banners, booklets, labels, apparel",
                  "Turnaround times — standard lead time, rush options, same-day availability for simple jobs",
                  "File specs — bleed, resolution, color mode, preferred file formats (PDF, AI, print-ready)",
                  "Finishes — gloss vs. matte laminate, UV coating, foil, spot UV, soft-touch options",
                  "Design services — whether you offer layout or design help for customers without print-ready files",
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
                What your print shop website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Product catalog — business cards, flyers, brochures, postcards, banners, booklets, labels",
                  "Turnaround options — standard, expedited, rush — pricing difference explained",
                  "Paper and finish options — stocks, weights, laminate, coating, specialty finishes",
                  "File submission guide — bleed setup, color mode, resolution, preferred formats",
                  "Design services — template library, in-house design, what to expect if you need help",
                  "Quote form with product type, quantity, size, finish, turnaround, file status",
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
                &ldquo;We were losing business to online printers
                because people did not know what we offered or
                that they could walk in and get same-day on certain
                jobs. The new site with our product pages, turnaround
                matrix, and a clear quote form brought in new
                corporate accounts who needed a reliable local vendor
                and just needed to find us. We now have several
                businesses that order from us every month.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Farrell, print shop, North Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A print shop site with products, turnaround, and
                quote form starts at $225. A full site with product
                catalog pages, file spec guide, and design services
                is $425–$875. One corporate account covers the cost.
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
