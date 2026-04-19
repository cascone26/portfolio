import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Vehicle Wrap Shops in Kansas City",
  description:
    "Custom websites for vehicle wrap shops and fleet graphics companies in the Kansas City area. Show your portfolio by vehicle type, vinyl brands, and design capabilities to win commercial fleet and personal wrap projects.",
  alternates: {
    canonical: "https://builtsimple.dev/for/vehicle-wraps",
  },
};

export default function VehicleWrapsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Vehicle Wrap Shops in Kansas City",
    description: "Custom websites for vehicle wrap shops in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Vehicle Wrap Shops",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Business owners and car enthusiasts evaluating a wrap shop judge you entirely by your portfolio. Clean installs with no bubbles, proper panel alignment, and sharp edges on complex curves are what they look for. A website that shows your best work organized by vehicle type wins both commercial and personal clients. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Vehicle Wraps in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Vehicle Wrap Shops</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Vehicle wrap customers come in two
              main categories: businesses wanting
              fleet graphics and brand visibility
              on their vehicles, and car enthusiasts
              wanting color changes, partial wraps,
              or paint protection film on personal
              vehicles. Both judge your shop almost
              entirely on the quality of your
              portfolio. Business clients want to
              see consistent branding across multiple
              vehicle types — vans, trucks, box
              trucks — and a clear process for
              providing design and installation
              services as a package. Car enthusiasts
              want to see clean color-change installs
              on complex bodywork, challenging panel
              transitions, and examples of the
              specific vinyl brands you use (3M,
              Avery, Hexis, Oracal). A vehicle
              wrap website that organizes your
              portfolio by project type, shows
              your vinyl brand options, and explains
              your design-to-installation process
              earns both the fleet contract and
              the enthusiast looking for
              the best installer in the market.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What wrap customers evaluate before choosing a shop
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio quality — clean installs, panel alignment, complex curve handling, edge and seam work",
                  "Vinyl brands — 3M, Avery Dennison, Hexis, Oracal — quality tiers and what each is best for",
                  "Design services — whether you provide design in-house or require a print-ready file",
                  "Fleet capabilities — multiple vehicles, consistent branding, turnaround time, fleet pricing",
                  "Warranty and care — vinyl manufacturer warranty, installer workmanship guarantee, aftercare",
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
                What your vehicle wrap website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio gallery — full wraps, partial wraps, color changes, fleet graphics organized by type",
                  "Vinyl options — 3M, Avery, Hexis options with color/finish samples and application use cases",
                  "Services — full color change, partial wrap, fleet graphics, paint protection film, chrome delete",
                  "Fleet program — multi-vehicle pricing, design services, turnaround, brand consistency across fleet",
                  "Process — consultation, design proof, installation timeline, aftercare instructions",
                  "Quote form with vehicle type, project type, design need, timeline, contact info",
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
                &ldquo;We were doing great work but
                losing quotes to shops with more
                photos online. Our portfolio was
                scattered across Instagram with
                no organization by vehicle type.
                Business clients especially had
                no way to see our fleet work
                separately from personal wraps.
                The new site with our portfolio
                organized by project type, our
                vinyl brand options, our fleet
                program section, and a proper
                quote form changed how we
                competed. We started getting
                fleet inquiries from businesses
                we never would have reached
                through Instagram alone.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Reyes, wrap shop owner, Kansas City, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A vehicle wrap site with portfolio,
                vinyl options, and quote form starts
                at $250. A full site with fleet program,
                vinyl brand comparison, and design
                service detail is $475–$950. One
                fleet contract covers the cost
                immediately. No contracts,
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
