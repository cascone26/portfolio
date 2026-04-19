import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Sign Companies in Kansas City",
  description:
    "Custom websites for commercial sign companies in the Kansas City area. Show your sign portfolio, explain your capabilities, and get more quotes for channel letters, monument signs, vehicle wraps, and interior signage.",
  alternates: {
    canonical: "https://builtsimple.dev/for/sign-companies",
  },
};

export default function SignCompaniesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Sign Companies in Kansas City",
    description: "Custom websites for commercial sign companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Sign Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Business owners searching for a sign company are comparing work quality and product range before they call. A portfolio-forward website that shows every sign type you produce earns the quote before your competitors do. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Sign Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Sign Companies</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Sign buyers are visual. They know what they want or they
              are still figuring it out — either way, they want to browse
              completed work before they call anyone. The sign company
              whose website shows their full range of capabilities —
              exterior monument signs, channel letters, vehicle wraps,
              trade show displays, window graphics — earns more quotes
              from businesses across every industry that needs signage.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What businesses look for in a commercial sign company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Product range — exterior building signs, monument signs, vehicle wraps, interior, wayfinding",
                  "Completed work photos — organized by sign type so buyers can find what they are looking for",
                  "Design capabilities — whether design is in-house or requires client-supplied artwork",
                  "Permitting — whether the sign company handles city permits and inspections",
                  "Materials and construction — aluminum, acrylic, LED illumination, vinyl, fabric, dimensional letters",
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
                What your sign company website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio by sign type — channel letters, monument, pylon, vehicle wraps, window graphics, interior",
                  "Products page — each sign category with materials, options, and example photos",
                  "Design services — in-house design process, file requirements, proofing and approval process",
                  "Permitting — what permits are required in KC, who handles them, typical timeline",
                  "Industries served — retail, restaurants, healthcare, auto dealers, office, real estate",
                  "Quote form with sign type, quantity, approximate size, location (interior/exterior), timeline",
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
                &ldquo;Our old website had maybe a dozen sign photos and no
                organization. Customers would call asking what we could
                do. The new site with our portfolio broken out by sign
                type — channel letters, vehicle wraps, monument signs,
                trade show — let businesses find exactly what they needed
                and come to us already knowing we could do it. Our
                quote volume went up significantly and so did our
                average project size.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — E. Christensen, sign company, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A sign company site with portfolio, products, and quote
                form starts at $275. A full site with sign type pages,
                design process, permitting info, and industry galleries
                is $525–$1,050. One mid-range exterior sign covers the cost.
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
