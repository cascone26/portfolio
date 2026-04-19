import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Real Estate Photographers in Kansas City",
  description:
    "Custom websites for real estate photographers in the Kansas City area. Show your listing photo and video portfolio to win more agent clients and build a consistent booking pipeline.",
  alternates: {
    canonical: "https://builtsimple.dev/for/real-estate-photography",
  },
};

export default function RealEstatePhotographyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Real Estate Photographers in Kansas City",
    description: "Custom websites for real estate photographers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Real Estate Photographers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Real estate agents evaluate photographers by portfolio first — if your listing photos look flat or poorly lit, they move on. A website with sharp portfolio examples, quick turnaround details, and easy booking wins the agents who list frequently. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Real Estate Photography in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Real Estate Photographers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Real estate agents who invest in professional
              photography know it sells homes faster and
              for more money — but they also have high
              standards and a tight timeline when a listing
              goes live. They want to evaluate your portfolio
              quickly, understand your turnaround time, know
              your full service menu (photos, video walkthroughs,
              aerial, 3D tours, floor plans), and see that
              booking is simple. Agents who find a
              photographer they trust become repeat clients
              for every listing. A real estate photography
              website that showcases your best listing work,
              makes your packages and turnaround clear, and
              lets agents book quickly earns those ongoing
              relationships with the top producers in
              the Kansas City market.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What real estate agents look for in a photographer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio — interior photos, natural light handling, small room technique, twilight exteriors",
                  "Turnaround — when photos are delivered (24–48 hours is the industry standard agents expect)",
                  "Services — photos, video walkthrough, aerial, 3D/Matterport tour, floor plan, virtual staging",
                  "Packages and pricing — what's in each tier, add-on pricing, bulk or subscription rates",
                  "Booking — how easy it is to schedule, availability calendar, same-week turnaround",
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
                What your real estate photography website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio gallery — listing photos by property type, interior, exterior, twilight, aerial",
                  "Services — photos, listing video, aerial/drone, 3D Matterport tour, floor plans, virtual staging",
                  "Packages — tiers by home size, what's included, turnaround time, add-on options",
                  "Turnaround promise — specific delivery timeline, rush availability, format and licensing",
                  "For agents — volume pricing, consistency across listings, how to become a regular client",
                  "Booking form with property address, listing date, package needed, and special requirements",
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
                &ldquo;I was getting referrals but agents
                who didn&apos;t know me had no way to
                evaluate my work before reaching out.
                Without a portfolio online, I was losing
                to photographers with weaker work who
                just had a better web presence. The new
                site with my full listing galleries,
                my packages, and my 24-hour turnaround
                policy clearly stated changed how agents
                found me. I started getting inbound
                from agents who had already decided —
                they just needed to book a date.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Kimura, real estate photographer, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A real estate photography site with portfolio,
                packages, and booking form starts at $250.
                A full site with service type galleries,
                agent volume pricing, and aerial section
                is $475–$950. One listing shoot covers
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
