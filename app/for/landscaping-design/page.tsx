import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Landscape Design Companies in Kansas City",
  description:
    "Custom websites for landscape design and outdoor living contractors in the Kansas City area. Show your design portfolio, explain your process, and get more consultation requests for patios, planting plans, and outdoor spaces.",
  alternates: {
    canonical: "https://builtsimple.dev/for/landscaping-design",
  },
};

export default function LandscapingDesignPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Landscape Design Companies in Kansas City",
    description: "Custom websites for landscape design and outdoor living contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Landscape Design Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Landscape design clients are investing $10,000 to $100,000+ in their outdoor space. They choose designers based on portfolio quality and process clarity. Show them your best work and earn the design consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Landscape Designers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Landscape Design</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Landscape design is a visual, high-investment service where
              the portfolio is everything. Homeowners planning a major
              outdoor project spend hours looking at completed work before
              they reach out to anyone. The landscape design firm with a
              website organized around stunning before/after photos,
              clear service categories, and an honest design process earns
              the consultation appointment from clients ready to invest seriously.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners look for in a landscape designer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio quality — completed outdoor living spaces, hardscape, planting design, water features",
                  "Services — landscape design, patio and hardscape, planting plans, outdoor kitchens, lighting",
                  "Design process — site analysis, concept development, planting plans, 3D renderings",
                  "Installation vs. design-only — whether they install or partner with contractors",
                  "Maintenance — whether ongoing care is offered for planted landscapes",
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
                What your landscape design website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project portfolio — organized by project type: patio, planting, outdoor kitchen, full yard",
                  "Services — landscape design, planting plans, hardscape design, outdoor lighting, water features",
                  "Design process — discovery, site analysis, concept, design development, installation coordination",
                  "3D rendering examples — if offered, show what clients get before breaking ground",
                  "About and credentials — education, certifications, design philosophy, years in KC",
                  "Consultation request with project type, property size, budget range, timeline",
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
                &ldquo;I had years of beautiful work and no way to show
                it online. The new site with my portfolio organized by
                project type and my design process explained step by step
                attracted clients who already had a serious budget in mind.
                The consultation requests went from tire-kickers to homeowners
                ready to invest in a real design.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — O. Brennan, landscape designer, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A landscape design site with portfolio, services, and
                consultation form starts at $275. A full site with project
                categories, design process, and 3D rendering examples
                is $525–$1,050. One mid-range landscape project covers
                the cost. No contracts, no monthly fees.
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
