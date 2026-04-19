import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Exterior Painting Companies in Kansas City",
  description:
    "Custom websites for exterior painting, house painting, and commercial painting companies in the Kansas City area. Show your prep process, paint brand, and color consultation process to win residential and commercial exterior painting contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/exterior-painting",
  },
};

export default function ExteriorPaintingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Exterior Painting Companies in Kansas City",
    description: "Custom websites for exterior painting companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Exterior Painting Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners getting quotes for exterior painting want to know what prep work is included, what brand of paint you use, and whether the price includes primer. A website that answers these questions upfront earns the quote visit. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Exterior Painting in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Exterior Painting</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Exterior painting customers are
              comparing multiple quotes and they
              know from experience — or from
              reading reviews — that the cheapest
              bid almost always means inadequate
              prep. The questions they are asking
              when they research are: what does
              your prep process include (power
              washing, scraping loose paint,
              caulking gaps, priming bare wood),
              what paint brand and product line
              do you use (Sherwin-Williams
              Emerald, Duration, or SuperPaint;
              Benjamin Moore Aura or Regal Select;
              Behr Premium), how many coats,
              and whether trim is included or
              priced separately. Homeowners
              also want to understand the siding
              material consideration — wood,
              Hardie board, vinyl, aluminum,
              stucco, and brick all need different
              prep and product approaches.
              Color selection assistance —
              whether you offer a color consultation,
              can pull sample colors digitally
              onto their house photo, or have
              an in-person color review process —
              is a differentiator that makes
              a homeowner feel confident about
              committing. Commercial customers
              need insurance certificates,
              crew size information, and ability
              to work around occupied buildings.
              A well-built exterior painting
              website that shows the prep process,
              names the paint products, includes
              a before-and-after gallery, and
              makes scheduling a free estimate
              easy earns the customer who
              wants quality over the lowest bid.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before getting exterior painting quotes
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Prep process — power wash, scraping, caulking, priming bare wood — what is done before any paint",
                  "Paint brand — Sherwin-Williams, Benjamin Moore, Behr — product line and quality tier used",
                  "What is included — trim, garage doors, gutters, shutters — what is in the price and what is separate",
                  "Siding material — wood, Hardie board, vinyl, stucco — whether you specialize in their siding type",
                  "Color selection — whether you offer a color consultation, digital preview, or in-home color review",
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
                What your exterior painting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Prep process — step-by-step what you do before painting, why it matters, what cutting corners causes",
                  "Paint products — brand, product line, why you chose it, warranty, coverage and longevity",
                  "Before and after gallery — full house transformations, trim work, garage doors, color changes",
                  "Color selection — how you help homeowners choose, digital preview, sample process",
                  "Siding types — wood, Hardie board, vinyl, stucco, brick — prep and product approach for each",
                  "Free estimate form with siding type, approximate square footage, color change or same color, timeline",
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
                &ldquo;Exterior painting is a
                competitive market and the biggest
                objection was always price —
                customers could find someone
                cheaper and they did not know
                what they were giving up for
                the savings. Our prep is the
                difference. We caulk every gap,
                prime every bare spot, and use
                Sherwin-Williams Duration on
                every job. Without a website,
                none of that came across in
                a phone call. The new site
                with our prep process explained
                step by step, our product named,
                and our before-and-afters showing
                the transformation completely
                changed the quality of quote
                requests. People arrive to
                meet us already knowing what
                makes us worth the price.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Kowalczyk, exterior painting contractor, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An exterior painting site with gallery,
                prep process, and estimate form starts
                at $225. A full site with product guide,
                color consultation section, and siding
                type breakdown is $425–$850. One full
                exterior job covers the cost.
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
