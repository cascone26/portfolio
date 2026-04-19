import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Party Rental Companies in Kansas City",
  description:
    "Custom websites for bounce house, tent, table, and event rental companies in the Kansas City area. Show your inventory, explain your process, and fill your weekend rental calendar.",
  alternates: {
    canonical: "https://builtsimple.dev/for/party-rentals",
  },
};

export default function PartyRentalsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Party Rental Companies in Kansas City",
    description: "Custom websites for bounce house, tent, table, and event rental companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Party Rental Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Parents planning birthday parties and backyard events search for rentals a few weeks out. Be the local company they find with a clear inventory, easy pricing, and a simple booking process. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Party Rental Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Party Rental</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Party rental is a weekend-driven, repeat-customer business.
              Parents who booked a bounce house for one birthday party will
              call you again next year — but first they have to find you.
              A rental company website that shows your full inventory with
              photos, explains what&apos;s included in delivery and setup, and
              makes booking easy wins the search before the bigger national
              companies or bare-bones local competitors do.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers check before booking a party rental
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Inventory — bounce houses, combo units, water slides, tents, tables, chairs, concessions",
                  "Pricing — rental fee, delivery fee, setup and teardown included or extra",
                  "Delivery area — what zip codes and how far they deliver",
                  "Setup requirements — power, space needed, ground surface requirements",
                  "Availability — whether weekends are open, how far in advance to book",
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
                What your party rental website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Inventory catalog — each item with photo, dimensions, capacity, and daily rental rate",
                  "Packages — bundled options for backyard parties, school events, company picnics",
                  "Delivery and setup info — how delivery works, what's included, timeframes",
                  "FAQ — power requirements, space needed, rain policy, cancellation terms",
                  "Service area — delivery zone map or zip code list with any mileage fees",
                  "Online booking request or reservation form with date, item, and location",
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
                &ldquo;I was running the business through Facebook Marketplace
                and word of mouth. The website with our full bounce house
                inventory and online booking form changed everything — we went
                from scrambling for weekend bookings to being fully booked
                most weekends from April through October.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Simmons, party rental company, Grandview, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A party rental site with inventory, pricing, and booking form
                starts at $200. A full site with item catalog, packages, FAQ,
                and service area is $400–$750. Three weekend rentals cover
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
