import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Event Venues in Kansas City",
  description:
    "Custom websites for wedding venues, event spaces, and banquet halls in the Kansas City area. Showcase your spaces, capacity, and vendor policies to book more tours and events.",
  alternates: {
    canonical: "https://builtsimple.dev/for/event-venues",
  },
};

export default function EventVenuesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Event Venues in Kansas City",
    description: "Custom websites for event venues and wedding spaces in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Event Venues",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Couples and event planners tour a venue online before they ever visit in person. A website that shows your spaces beautifully, answers every logistical question, and makes booking a tour easy wins the walkthrough. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Event Venues in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Event Venues</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Couples planning a wedding and event planners booking
              corporate or private events narrow their venue list
              online before they ever schedule a tour. What they
              find — or do not find — on your website determines
              whether you make their shortlist. An event venue
              website that showcases each space with real photos,
              answers capacity and catering questions directly,
              explains your vendor policy, and makes booking
              a tour frictionless fills your calendar with the
              right inquiries.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What couples and event planners research before touring a venue
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Space photos — ceremony, reception, cocktail hour, getting-ready rooms — real event photos",
                  "Capacity — seated, cocktail, ceremony — by room, with and without a dance floor",
                  "Catering — in-house vs. preferred vendors, bar packages, outside caterer policy",
                  "Vendor policy — whether they have a required vendor list or allow outside vendors",
                  "Pricing and packages — what is included, what is extra, deposit and payment schedule",
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
                What your event venue website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Gallery — each space with high-quality event photos, styled to show what it looks like full",
                  "Spaces — capacity by configuration, dimensions, features, natural light, AV capabilities",
                  "Packages — what each tier includes, pricing ranges, what add-ons are available",
                  "Catering and bar — in-house menu overview, bar packages, outside vendor policy",
                  "FAQs — vendor policy, parking, accessibility, setup/teardown time, rehearsal availability",
                  "Tour inquiry form with event type, date, guest count, budget range, how they heard about you",
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
                &ldquo;Couples were calling us without knowing
                our capacity or catering policy and then
                eliminating us on the first call because we
                were not the right fit. The new site with our
                capacity by room, our preferred caterer list,
                and a tour form that asked guest count and
                event date upfront meant every inquiry was
                already pre-qualified. We stopped wasting time
                on tours that were never going to convert.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Brennan, venue manager, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An event venue site with spaces, packages, and
                tour form starts at $325. A full site with
                individual space pages, catering detail, and
                FAQ section is $625–$1,250. One booked
                event covers the cost. No contracts, no monthly fees.
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
