import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Irrigation and Sprinkler Companies in Kansas City",
  description:
    "Custom websites for sprinkler system installation, repair, and winterization companies in the Kansas City area. Rank for seasonal searches and fill your spring installation and fall blowout schedule.",
  alternates: {
    canonical: "https://builtsimple.dev/for/irrigation",
  },
};

export default function IrrigationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Irrigation and Sprinkler Companies in Kansas City",
    description: "Custom websites for sprinkler system installation, repair, and winterization companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Irrigation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners search for sprinkler blowouts every October and new system installs every spring. Be the local company they find — and book — before the season rush. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Irrigation Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Irrigation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Sprinkler and irrigation work is deeply seasonal in KC —
              winterization blowouts stack up every fall, spring startups and
              new installations run through April and May, and repair calls
              come in all summer. Irrigation companies that get booked out
              solid in all three seasons have a website that ranks for those
              searches and makes it easy to schedule the specific service
              the homeowner needs right now.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before hiring an irrigation company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services — blowout/winterization, spring startup, new system installation, repairs, upgrades",
                  "Pricing for blowout — most homeowners search knowing the price range, want confirmation",
                  "System types and brands — Hunter, Rain Bird, Toro — and whether they service what's installed",
                  "Whether they do same-season installs or are booked out through the summer",
                  "Service area — homeowners want to confirm coverage before calling",
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
                What your irrigation company website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services page — blowout, spring startup, installation, repair, smart controller upgrades",
                  "Winterization pricing guide — flat rate or by zone count, what the service includes",
                  "Installation overview — design, zone planning, brands used, what new systems include",
                  "Seasonal callout — fall blowout availability, spring scheduling open/closed",
                  "Brands serviced — Hunter, Rain Bird, Toro, Orbit, Rachio, RainMachine",
                  "Scheduling form with service type, zone count, and preferred dates",
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
                &ldquo;Blowout season used to be chaotic — calls coming in
                late, schedule gaps, customers who found us too late. Since
                the website went up with our blowout pricing and online
                scheduling, we start getting bookings in September and we
                are completely booked by mid-October. The spring startup page
                filled our April schedule, too.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Larson, irrigation company, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An irrigation company site with services, pricing, and
                scheduling form starts at $200. A full site with seasonal
                pages, brands serviced, and installation overview is $400–$750.
                Five blowouts cover the cost. No contracts, no monthly fees.
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
