import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Concrete Contractors in Kansas City",
  description:
    "Custom websites for concrete contractors and flatwork companies in the Kansas City area. Show your project gallery, mix types, and estimate process to win driveway, patio, and commercial pour jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/concrete-contractors",
  },
};

export default function ConcreteContractorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Concrete Contractors in Kansas City",
    description: "Custom websites for concrete contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Concrete Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners and developers comparing concrete bids want to see your project photos, understand your mix specs and finishing options, and know how the estimate process works. A strong website wins more bids. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Concrete Contractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Concrete Contractors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Concrete work — driveways, patios, flatwork, and
              commercial pours — is a significant investment and
              homeowners and developers want confidence before
              they accept a bid. They are comparing photos of
              finished work, looking for signs of quality like
              proper expansion joints and finishing technique,
              and checking whether a contractor has experience
              with their specific project type. A concrete
              contractor website that shows strong project photos,
              explains your mix specs and finishing options, and
              makes requesting an estimate easy wins bids
              against competitors who have only a logo and a
              phone number.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What property owners evaluate when choosing a concrete contractor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project photos — driveways, patios, flatwork, commercial — showing finish quality",
                  "Services — residential flatwork, commercial concrete, stamped, exposed aggregate, staining",
                  "Mix and finish options — PSI ratings, finishing textures, stamped patterns, color options",
                  "Expansion joints and control joints — signs of quality work that prevent cracking",
                  "Timeline and process — how long projects take, prep work, curing time, when it can be used",
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
                What your concrete contractor website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project gallery — driveways, patios, commercial pours, stamped — organized by project type",
                  "Services — flatwork, stamped concrete, exposed aggregate, staining, demo and removal",
                  "Finish options — broom, trowel, exposed aggregate, stamped patterns — with photos of each",
                  "Commercial services — parking lots, warehouse floors, tilt-wall, site concrete",
                  "Process and timeline — excavation, forming, pour, finishing, curing, load timelines",
                  "Estimate form with project type, square footage, location, timeline, scope details",
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
                &ldquo;We were doing quality work but losing
                bids to guys with worse portfolios because
                they had better websites. We had photos on
                our phone and no way to show them online.
                The new site with a gallery organized by
                project type, a breakdown of our finishing
                options with photos, and an estimate form
                that captured the right info upfront changed
                our win rate. We started getting called back
                after estimates because we looked like the
                professional choice.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Schultz, concrete contractor, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A concrete contractor site with services, project
                gallery, and estimate form starts at $250. A full
                site with finish option pages, commercial section,
                and process guide is $475–$950. One driveway
                replacement covers the cost.
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
