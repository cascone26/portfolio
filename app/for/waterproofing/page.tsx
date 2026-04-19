import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Waterproofing and Foundation Repair in Kansas City",
  description:
    "Custom websites for basement waterproofing and foundation repair companies in the Kansas City area. Explain your methods and warranties, build homeowner trust, and get more inspection requests.",
  alternates: {
    canonical: "https://builtsimple.dev/for/waterproofing",
  },
};

export default function WaterproofingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Waterproofing and Foundation Repair in Kansas City",
    description: "Custom websites for basement waterproofing and foundation repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Waterproofing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Kansas City homeowners dealing with a wet basement or foundation cracks are scared and looking for a trustworthy expert — not just the cheapest bid. A site that explains your methods, warranties, and process earns the inspection call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Waterproofing Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Waterproofing</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Basement waterproofing and foundation repair are high-stakes,
              high-cost decisions. Homeowners are scared — they just found
              water in their basement or cracks in their foundation and they
              have no idea what it means or how much it will cost. The
              contractor who explains the problem clearly, shows how they
              fix it, and backs it with a real warranty earns far more
              inspections than the one with just a phone number on a generic page.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners need to understand before calling
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "What type of problem they have — seepage, hydrostatic pressure, crack injection, sump pump",
                  "Interior vs. exterior waterproofing — cost difference, when each is appropriate",
                  "Foundation issues — bowing walls, horizontal cracks, settlement, pier systems",
                  "Warranty — lifetime transferable warranties are a major differentiator in this industry",
                  "Process — what the inspection looks like, what the fix involves, timeline and disruption",
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
                What your waterproofing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Problem identifier — seepage, cracks, bowing walls, sump pump failure — helps them name their issue",
                  "Interior waterproofing — drain tile, sump pump, vapor barrier — with diagrams and process",
                  "Foundation repair — wall anchors, carbon fiber straps, helical piers, crack injection",
                  "Warranty page — what your transferable warranty covers and why it matters at resale",
                  "Before/after project photos — real Kansas City basements, clearly labeled work",
                  "Free inspection form with problem description, home age, square footage, urgency",
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
                &ldquo;The national waterproofing companies dominate because
                they have huge budgets and detailed educational content.
                Our new site with the problem identifier, interior vs.
                exterior comparison, and our warranty details put us in
                the conversation. Homeowners now call us because they read
                our content and trusted us before we ever stepped foot
                in their house.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Beaumont, waterproofing company, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A waterproofing site with services, warranty info, and
                inspection form starts at $275. A full site with problem
                identifier, interior/exterior pages, foundation repair,
                and before/after gallery is $525–$1,050. One drain tile
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
