import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Painting Contractors in Kansas City",
  description:
    "Custom websites for residential and commercial painting companies in the Kansas City area. Show your project photos, paint brands, and estimate process to win more interior and exterior jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/painting-contractors",
  },
};

export default function PaintingContractorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Painting Contractors in Kansas City",
    description: "Custom websites for painting contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Painting Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners getting multiple painting quotes compare your photos, your prep process, and whether you use quality paint brands before they decide who to call. A website that answers those questions wins the estimate. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Painting Contractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Painting Contractors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              When a homeowner is ready to repaint their house or
              a business manager is sourcing bids for a commercial
              repaint, they pull up several contractors and make
              quick judgments based on what they see. Before
              requesting an estimate, they want to see photos
              of finished work, know what paint brands you use,
              understand how you handle prep — scraping, priming,
              caulking — and get a sense of how long the job will
              take and how disruptive it will be. A painting
              contractor website that shows clean, detailed
              before-and-after photos, explains your prep
              process, and makes requesting a free estimate
              frictionless wins more bids against competitors
              who have only a name and a phone number.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners and property managers evaluate when choosing a painter
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project photos — interior, exterior, cabinet painting — before and after by project type",
                  "Paint brands — Sherwin-Williams, Benjamin Moore, Behr — quality indicators for discerning clients",
                  "Prep work — scraping, sanding, caulking, priming — what separates quality work from cheap work",
                  "Services — interior, exterior, cabinets, commercial, deck staining, epoxy floors",
                  "Timeline — how long a typical job takes, whether they work weekends, crew size",
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
                What your painting contractor website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project gallery — interior, exterior, cabinet repaints, commercial — with before and after photos",
                  "Services — residential interior, exterior, cabinet painting, commercial, deck staining, epoxy",
                  "Paint brands — partners with Sherwin-Williams and Benjamin Moore, finish options explained",
                  "Prep process — what you do before the first coat: scraping, sanding, priming, caulking, masking",
                  "Service area — Kansas City neighborhoods and suburbs you serve",
                  "Estimate form with property type, interior or exterior, room count or square footage, timeline",
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
                &ldquo;We were doing quality work — Sherwin-Williams
                Duration, full prep every time — but losing bids
                to operations who were cheaper and looked just as
                good online because neither of us had photos. The
                new site with a real before-and-after gallery,
                our prep process explained, and a form that asked
                what kind of job they needed changed how clients
                talked to us. They called knowing we were the
                quality choice and the price conversation was
                completely different.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Hernandez, painting contractor, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A painting contractor site with gallery, services,
                and estimate form starts at $250. A full site with
                service-specific pages, prep process detail, and
                commercial section is $475–$950. One exterior
                house repaint covers the cost.
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
