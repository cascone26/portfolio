import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Storage Unit Facilities in Kansas City",
  description:
    "Custom websites for self-storage and mini-storage facilities in the Kansas City area. Show your unit sizes and availability, explain your access and security features, and drive more online reservations.",
  alternates: {
    canonical: "https://builtsimple.dev/for/storage-units",
  },
};

export default function StorageUnitsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Storage Unit Facilities in Kansas City",
    description: "Custom websites for self-storage and mini-storage facilities in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Storage Facilities",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Storage customers compare facilities online before driving to any of them. A site with a clear unit size guide, your features, and easy online reservation converts more drive-by traffic into paying tenants. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Storage Facilities in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Storage Units</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Storage customers are often in the middle of a move, a
              downsizing, a renovation, or a life transition. They need
              to find the right unit size at the right price with the
              right access hours — and they want to reserve it online,
              not call during business hours. A storage facility website
              that makes size selection easy, shows your security and
              amenities clearly, and allows online reservations wins
              tenants from facilities that make them guess or call.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers check before choosing a storage facility
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Unit sizes and pricing — 5x5 through 10x30, what fits what, price per size",
                  "Climate controlled vs. standard — when climate control is worth it, what it actually does",
                  "Access hours — 24-hour access is a major differentiator for many customers",
                  "Security — gated access, surveillance cameras, individual door alarms, on-site manager",
                  "Special features — drive-up units, indoor loading, RV and boat storage, moving supplies",
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
                What your storage facility website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Unit size guide — visual comparison of unit dimensions with what they hold",
                  "Pricing page — current rates by size, climate vs. standard, available units",
                  "Features — climate control, 24-hour access, drive-up, indoor, security system",
                  "RV and boat storage — if you offer it, dedicated page with size specs and rates",
                  "Location and access — hours, gate code info, how autopay works",
                  "Online reservation form or booking link to your management software",
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
                &ldquo;Extra Space and CubeSmart dominate search because
                they have millions for advertising. The new site with our
                size guide, our 24-hour access feature, and online
                reservation link brought in a completely different volume
                of customers who found us in local search and chose us
                over the national chains because our prices and access
                hours were clearly better.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Chambers, storage facility, Gladstone, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A storage facility site with unit sizes, pricing, and
                reservation form starts at $225. A full site with size
                guide, features, RV storage, and location info is
                $425–$875. One month of new rentals covers the cost.
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
