import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Gutter Companies in Kansas City",
  description:
    "Custom websites for gutter installation and gutter cleaning companies in the Kansas City area. Rank for seasonal searches, get more quote requests, and fill your fall and spring schedule.",
  alternates: {
    canonical: "https://builtsimple.dev/for/gutter-services",
  },
};

export default function GutterServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Gutter Companies in Kansas City",
    description: "Custom websites for gutter installation and gutter cleaning companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Gutter Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners search for gutter cleaning every fall and gutter replacement after every big storm. Be the local company they find first. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Gutter Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Gutter Services</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Gutter work has two distinct seasons — the cleaning rush in fall
              and the installation and replacement demand after spring storms.
              Both drive homeowners to search for local companies. A website
              that ranks for those searches, explains your services and pricing,
              and makes scheduling a cleaning or a quote quick will keep your
              crew busy through both seasons without relying on door hangers
              and Nextdoor posts alone.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before hiring a gutter company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services — cleaning, installation, replacement, gutter guards, fascia and soffit repair",
                  "Gutter types and materials — aluminum, seamless, copper, K-style, half-round, leaf guard brands",
                  "Whether cleaning includes downspout flushing and minor repairs",
                  "Pricing for cleaning by home size and installation by linear foot",
                  "How quickly they can schedule and whether they do same-season work",
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
                What your gutter company website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services page — cleaning, installation, replacement, gutter guards, and fascia repair",
                  "Gutter materials and styles — seamless aluminum, copper, half-round, K-style, with photos",
                  "Cleaning pricing guide — by home size and story count",
                  "Installation pricing — per linear foot with material options",
                  "Seasonal callout — fall cleaning availability and storm-damage response",
                  "Quote form with home size, service type, and current gutter issues",
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
                &ldquo;Fall is our busiest season and we used to scramble to
                fill the schedule. Once the website was up and ranking for
                gutter cleaning in our area, we started getting booked out
                two weeks in advance through October. We also added seamless
                gutter installation as a service on the site and that&apos;s
                grown into a quarter of our revenue.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Reynolds, gutter company, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A gutter company site with services, pricing, and quote form
                starts at $200. A full site with cleaning and installation pages,
                gutter material options, and seasonal promotions is $400–750.
                Five gutter cleaning jobs cover the cost. No contracts, no
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
