import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Power Washing Companies in Kansas City",
  description:
    "Custom websites for power washing and soft washing companies in the Kansas City area. Show your before-and-after results, service packages, and pricing to win more driveway, house, and deck cleaning jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/power-washing",
  },
};

export default function PowerWashingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Power Washing Companies in Kansas City",
    description: "Custom websites for power washing and soft washing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Power Washing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners booking power washing want to see dramatic before-and-after photos and understand the difference between pressure washing and soft washing before they call. A website that shows real results and makes booking easy wins the job. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Power Washing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Power Washing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Power washing is a visual business — the results
              speak for themselves, but only if clients can
              see them before they hire you. Homeowners are
              choosing between several companies and the one
              with the best before-and-after photos wins the
              booking. They also want to know the difference
              between pressure washing and soft washing,
              whether you service their specific surface
              (roof, house siding, concrete, deck), and what
              a job in their area costs. A power washing
              website that leads with dramatic transformation
              photos, explains your methods, and makes
              requesting a quote fast converts browsers into
              booked jobs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners look for when booking power washing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before and after photos — driveways, house siding, roofs, decks — dramatic visual results",
                  "Pressure vs. soft wash — which surfaces need which, why soft washing protects certain materials",
                  "Services — house washing, roof cleaning, driveway, deck, fence, commercial, fleet",
                  "Pricing — per square foot, flat rates by surface type, bundled services",
                  "Availability — same-week scheduling, seasonal demand, how to get on the calendar",
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
                What your power washing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before and after gallery — by surface type, showing the transformation clearly",
                  "Method explainer — pressure washing vs. soft washing, which surfaces get which treatment",
                  "Services — house washing, roof soft wash, driveway, deck restoration, commercial, fleet",
                  "Pricing guide — surface types, square footage ranges, bundled packages",
                  "Service area — Kansas City neighborhoods and suburbs covered",
                  "Quote form with surface types needed, approximate square footage, address, timeline",
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
                &ldquo;Everyone who saw our work loved it
                but we had no way to show it before the job.
                Clients were going with whoever had the most
                reviews. The new site with a big before-and-after
                gallery, our soft wash method explained so
                people understood why we were not just blasting
                their roof with high pressure, and a fast quote
                form changed how we competed. We went from
                being one of five options to being the obvious
                choice for anyone who cared about quality.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Mercer, power washing owner, Raytown, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A power washing site with gallery, services,
                and quote form starts at $250. A full site with
                method explainer, surface-specific pages, and
                commercial section is $475–$950.
                Two jobs cover the cost.
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
