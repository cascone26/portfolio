import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Commercial Photographers in Kansas City",
  description:
    "Custom websites for commercial and product photographers in the Kansas City area. Showcase your portfolio by industry, explain your deliverables, and attract brand and agency clients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/commercial-photography",
  },
};

export default function CommercialPhotographyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Commercial Photographers in Kansas City",
    description: "Custom websites for commercial photographers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Commercial Photographers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Marketing directors and brand managers evaluating commercial photographers want to see your portfolio organized by industry and understand exactly what you deliver. A site that shows both wins the booking. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Commercial Photographers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Commercial Photographers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Marketing directors and creative agencies evaluating
              a commercial photographer are looking for a specific
              combination: a portfolio that shows work similar to
              what they need, a clear understanding of what the
              collaboration process looks like, and confidence that
              deliverables will arrive on brief and on schedule.
              A commercial photography website that organizes your
              work by industry and use case, explains your production
              process, and shows what clients receive earns the
              inquiry from brands and agencies ready to book.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What brand and agency clients evaluate in a commercial photographer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio by use case — product, food, architecture, corporate, lifestyle, editorial",
                  "Client roster — what brands or agencies you have worked with",
                  "Production process — brief intake, pre-production, shoot day, post-processing timeline",
                  "Deliverables — file formats, retouching included, turnaround, licensing terms",
                  "Studio vs. location — whether you have a studio, location shooting capabilities",
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
                What your commercial photography website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio — organized by industry and use case, with context on each project",
                  "Services — product photography, food, architecture, corporate headshots, lifestyle",
                  "Process — from brief to final delivery, what happens at each stage",
                  "Deliverables — retouching included, file formats, turnaround windows, licensing",
                  "Client list — notable brands, agencies, industries served",
                  "Project inquiry form with use case, brand, timeline, budget range, reference examples",
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
                &ldquo;I had done strong food and product work
                but my old site was a generic gallery with no
                context. Marketing directors looking for a
                food photographer did not know I specialized
                in that. The new site with a food portfolio
                section, a product section, and a clear
                page on my production process and deliverables
                brought in three new restaurant and CPG brand
                clients in the first two months who found me
                on Google.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — E. Thornton, commercial photographer, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A commercial photography site with portfolio,
                services, and inquiry form starts at $275. A full
                site with use-case sections, process page, and
                client list is $525–$1,050. One commercial
                shoot covers the cost. No contracts, no monthly fees.
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
