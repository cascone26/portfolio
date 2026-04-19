import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Interior Designers in Kansas City",
  description:
    "Custom websites for interior designers and interior decorators in the Kansas City area. Show your portfolio, define your style, and attract clients who are right for your work.",
  alternates: {
    canonical: "https://builtsimple.dev/for/interior-designers",
  },
};

export default function InteriorDesignersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Interior Designers in Kansas City",
    description: "Custom websites for interior designers and interior decorators in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Interior Designers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Clients hire designers based on portfolio and style fit. Instagram doesn't rank on Google — your website does. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Interior Designers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Interior Designers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Interior design clients are making a high-commitment decision —
              they are inviting someone into their home, spending significant
              money, and trusting your taste over their own. Before they reach
              out, they spend serious time evaluating your portfolio. A website
              that showcases your best projects by room and style, explains your
              process, and makes starting a conversation easy is the difference
              between being a contender and being invisible.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients evaluate before hiring an interior designer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio — projects organized by room (kitchen, living room, primary suite, whole home)",
                  "Your aesthetic style — modern, transitional, traditional, maximalist, farmhouse, organic",
                  "Services offered — full-service design, e-design, decorating-only, staging, consultations",
                  "Process and timeline — what working with you looks like from first call to final install",
                  "Pricing structure — flat fee, hourly, percentage of procurement, or package options",
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
                What your interior design website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio gallery organized by room type and project — with before/after where available",
                  "Services page — full-service, e-design, staging, hourly consultations, and what each includes",
                  "About page with your design background, aesthetic philosophy, and who you work best with",
                  "Process overview — discovery, design development, procurement, and installation phases",
                  "Pricing guide — starting-at ranges and what factors affect the investment",
                  "Inquiry form with project type, room count, timeline, and rough budget",
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
                &ldquo;I was getting clients purely through referrals and a lot
                of them weren't the right fit style-wise. Once the portfolio site
                went up with my projects organized by room and my aesthetic
                clearly visible, I started getting inquiries from people who
                already knew my work and were specifically looking for that look.
                The discovery calls got much shorter.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Fleming, interior designer, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An interior design site with portfolio, services, and inquiry
                form starts at $250. A full site with room-specific galleries,
                process walkthrough, pricing guide, and about page is $500–950.
                One full-service project covers the cost. No contracts, no
                monthly fees.
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
