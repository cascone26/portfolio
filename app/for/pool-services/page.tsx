import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pool Service Companies in Kansas City",
  description:
    "Custom websites for pool cleaning, maintenance, and repair companies in the Kansas City area. Get found at the start of pool season and lock in recurring service contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pool-services",
  },
};

export default function PoolServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pool Service Companies in Kansas City",
    description: "Custom websites for pool cleaning, maintenance, and repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pool Service Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Pool owners search for service at the start of every season. Make sure they find you before your competitors lock up their calendars. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pool Service Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pool Services</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pool service is a recurring revenue business — once a homeowner
              finds a company they trust, they stick with them season after
              season. The companies that fill their routes are the ones who show
              up when someone searches in March or April, before the season
              starts. A clear website that explains what weekly service includes,
              what opening and closing costs, and how to get on the schedule
              makes it easy for that homeowner to commit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What pool owners check before hiring a service company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Weekly service — what's included (chemicals, skimming, vacuuming, filter cleaning)",
                  "Opening and closing services — what's done and approximate cost",
                  "Repair capabilities — equipment, pumps, heaters, liners, automation",
                  "Whether you service their pool type — above ground, in-ground, fiberglass, vinyl",
                  "Service area and whether they're currently taking new clients",
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
                What your pool service website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Weekly service packages — what each visit includes, frequency options, pricing tiers",
                  "Opening and closing service pages — checklist of what's done, seasonal pricing",
                  "Repair services — equipment brands serviced, types of repairs, diagnostic process",
                  "Pool type coverage — above ground, in-ground, fiberglass, salt, chlorine",
                  "Service area map with zip codes covered",
                  "Quote request form with pool type, size estimate, and current issues",
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
                &ldquo;We used to scramble every spring to fill our route for the
                season. After the website went up with our weekly service page and
                an early-season signup form, we started getting inquiries in
                February and March before the snow was gone. Last spring we were
                full before April.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Patterson, pool service company, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pool service site with services, pricing, and quote form starts
                at $225. A full site with service package pages, repair info,
                pool type coverage, and service area is $450–850. Two new
                full-season service contracts cover the cost. No contracts, no
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
