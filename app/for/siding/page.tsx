import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Siding Contractors in Kansas City",
  description:
    "Custom websites for siding installation and replacement companies in the Kansas City area. Show your materials, past projects, and financing options — and get more storm damage and replacement quotes.",
  alternates: {
    canonical: "https://builtsimple.dev/for/siding",
  },
};

export default function SidingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Siding Contractors in Kansas City",
    description: "Custom websites for siding installation and replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Siding Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          After a hail storm, homeowners search for siding contractors immediately. Be the local company they find with a real portfolio and clear process — before the out-of-town storm chasers show up. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Siding Contractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Siding Contractors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              KC gets its share of hail and wind storms, and after each one
              the phones start ringing. But homeowners also search for siding
              replacement when their house just looks old or they&apos;re getting
              ready to sell. Either way, they&apos;re choosing between three to
              five companies — and the one with the clearest material options,
              best before/after photos, and most straightforward process earns
              the estimate appointment.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before choosing a siding contractor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Siding materials — vinyl, fiber cement, engineered wood, steel, wood — with pros and cons",
                  "Brands they install — James Hardie, LP SmartSide, CertainTeed, Mastic, Alside",
                  "Before/after photos of actual local jobs — color options, styles, curb appeal transformation",
                  "Insurance work — whether they work with insurance claims for hail and wind damage",
                  "Financing options — monthly payment options for larger jobs",
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
                What your siding contractor website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Materials guide — vinyl, fiber cement, engineered wood, steel with comparison and photos",
                  "Brands page — James Hardie, LP SmartSide, CertainTeed — with certifications and warranties",
                  "Project gallery — before/after photos organized by material and neighborhood",
                  "Insurance claims page — how the process works, what documentation you help with",
                  "Financing page — payment options, how to apply, what jobs qualify",
                  "Quote form with house size, material interest, storm damage yes/no",
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
                &ldquo;Storm chasers used to take a big chunk of our business
                because they had polished marketing and we had nothing. The
                new site with our James Hardie portfolio and insurance claims
                process made us look like the established local company we
                are. We got more storm calls last season than the previous
                two combined.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Stratton, siding contractor, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A siding contractor site with materials, gallery, and quote
                form starts at $275. A full site with brand pages, insurance
                claims process, and financing is $500–$1,050. One mid-size
                job covers the cost. No contracts, no monthly fees.
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
