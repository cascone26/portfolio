import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Florists in Kansas City",
  description:
    "Custom websites for florists and floral designers in the Kansas City area. Showcase your arrangements, drive wedding and event inquiries, and convert walk-in browsers into loyal customers.",
  alternates: {
    canonical: "https://builtsimple.dev/for/florists",
  },
};

export default function FloristsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Florists in Kansas City",
    description: "Custom websites for florists and floral designers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Florists",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Wedding season is here — couples are booking their florists now. Get your portfolio live. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Florists in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Florists</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Couples planning weddings, event planners sourcing centerpieces, and
              customers ordering same-day arrangements all start with a Google search.
              A portfolio-forward website with clear ordering and inquiry options
              turns those searches into booked orders — before they call the next shop.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers look for before choosing a florist
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Photos of your actual arrangements — weddings, events, everyday bouquets",
                  "Whether you do the specific type of event or style they need",
                  "How far in advance to order for weddings and large events",
                  "Pricing range — what to expect for bouquets, centerpieces, and packages",
                  "Whether you deliver to their area or require pickup",
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
                What your florist website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Photo gallery organized by occasion — weddings, sympathy, everyday, events",
                  "Wedding inquiry form with date, venue, and budget fields",
                  "Services list — bridal bouquets, centerpieces, corsages, delivery, subscriptions",
                  "Delivery area coverage map or list of KC-area neighborhoods served",
                  "Pricing structure or starting price points for major categories",
                  "Instagram feed integration to show your most recent work automatically",
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
                &ldquo;We were relying on Instagram and word-of-mouth for wedding
                bookings. After the website launched, brides started finding us
                on Google and submitting inquiry forms directly. Our wedding
                bookings for the season filled up faster than they ever had.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Marchetti, floral designer, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A portfolio site with gallery, services, and inquiry form starts
                at $250. A full site with wedding package pages, delivery zone
                info, and a shop-style layout is $500–900. One mid-size wedding
                contract covers the whole thing. No contracts, no monthly fees.
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
