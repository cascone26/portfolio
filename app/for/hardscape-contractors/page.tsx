import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Hardscape Contractors in Kansas City",
  description:
    "Custom websites for patio, retaining wall, and hardscape contractors in the Kansas City area. Show your project portfolio, explain your materials, and get more consultation requests for outdoor living projects.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hardscape-contractors",
  },
};

export default function HardscapeContractorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Hardscape Contractors in Kansas City",
    description: "Custom websites for patio, retaining wall, and hardscape contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Hardscape Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners planning a patio or retaining wall spend weeks looking at project photos before they call anyone. The hardscape contractor with the best portfolio and clearest explanation of materials earns the consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Hardscape Contractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Hardscape Contractors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Hardscape is one of the most visually-driven services a
              homeowner can hire. Patios, fire pits, retaining walls,
              outdoor kitchens, and walkways are decided based almost
              entirely on photos of completed work. The hardscape
              contractor with a portfolio organized by project type —
              showing the best paver patio, the cleanest retaining wall,
              the most impressive outdoor kitchen — earns the consultation
              from homeowners who have already spent time dreaming about
              their backyard transformation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners look for in a hardscape contractor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio — completed patios, retaining walls, fire pits, outdoor kitchens, walkways, steps",
                  "Materials — natural stone, concrete pavers, flagstone, brick, outcropping, poured concrete",
                  "Design capabilities — whether they design in-house or require a separate landscape designer",
                  "Drainage and grading — how they handle water management for patios and retaining walls",
                  "ICPI certification — Interlocking Concrete Pavement Institute installer certification",
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
                What your hardscape website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project portfolio — organized by type: patio, retaining wall, fire pit, outdoor kitchen, walkway",
                  "Materials — concrete pavers, natural stone, flagstone, brick — with photos showing each in finished projects",
                  "Services — patio installation, retaining walls, fire pits, outdoor kitchens, steps and walkways",
                  "Design process — consultation, design concept, material selection, installation timeline",
                  "Drainage and base prep — how proper base and drainage prevents settling and failure",
                  "Consultation request with project type, property size, preferred materials, budget range",
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
                &ldquo;We do beautiful work but nobody could find us online.
                Our old site had a few photos and a contact form — that
                was it. The new site with our patio portfolio, our fire
                pit gallery, and a page explaining the difference between
                concrete pavers and natural stone brought in homeowners
                who were genuinely excited about their project and already
                had a strong sense of what they wanted. These are the
                clients you want.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — V. Molina, hardscape contractor, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A hardscape site with project portfolio, services, and
                consultation form starts at $275. A full site with
                material comparisons, project type galleries, and
                design process is $525–$1,050. One mid-range patio
                project covers the cost. No contracts, no monthly fees.
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
