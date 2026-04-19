import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Catering Companies in Kansas City",
  description:
    "Custom websites for catering businesses in the Kansas City area. Show your menus, get more event inquiries, and build the reputation that fills your calendar year-round.",
  alternates: {
    canonical: "https://builtsimple.dev/for/catering",
  },
};

export default function CateringPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Catering Companies in Kansas City",
    description: "Custom websites for catering businesses in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Catering Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Event planners and couples searching for a caterer want to see the food and know what events you handle. Be the first result that shows them both. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Catering Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Catering Companies</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Catering clients — whether it&apos;s a couple planning a wedding
              or an HR manager booking a corporate lunch — want to see the food
              before they reach out. They want to know what events you handle,
              what cuisine you specialize in, and roughly what to budget. A
              website with a real photo gallery, sample menus, and a clear
              inquiry process converts those searches into conversations.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients check before reaching out to a caterer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Event types you handle — weddings, corporate, social events, galas, intimate dinners",
                  "Food photos — the actual dishes, presentation, and spread quality",
                  "Sample menus — plated dinners, buffets, passed appetizers, stations, BBQ, brunch",
                  "Guest count range — minimums, maximums, what size events you can accommodate",
                  "Pricing structure — per person, flat fee, packages, and whether staffing is included",
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
                What your catering website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Food and event photo gallery — beautifully displayed dishes, setups, and real events",
                  "Event type pages — weddings, corporate catering, social events, private dinners",
                  "Sample menus by style — plated, buffet, stations, passed apps, brunch, BBQ",
                  "Pricing guide — per-person starting points, what's included, add-ons like staffing and rentals",
                  "Inquiry form with event date, guest count, event type, and cuisine preferences",
                  "Testimonials from both event planners and couples with specific dishes and event details",
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
                &ldquo;Most of our corporate business came through personal
                connections — we had no searchable presence at all. The new site
                with our corporate lunch and office event pages changed that
                completely. We started getting inquiries from companies in
                KC we&apos;d never heard of who found us on Google. Corporate
                events are now a third of our revenue.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Okafor, catering company owner, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A catering site with gallery, sample menus, and inquiry form
                starts at $250. A full site with event-type pages, menu PDFs,
                pricing guide, and testimonials is $500–950. One mid-size event
                booking covers the cost. No contracts, no monthly fees.
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
