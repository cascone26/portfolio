import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Home Cleaning Services in Kansas City",
  description:
    "Custom websites for residential house cleaning and maid services in the Kansas City area. Show your team credentials, service packages, and booking process to win more recurring cleaning clients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/home-cleaning-services",
  },
};

export default function HomeCleaningServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Home Cleaning Services in Kansas City",
    description: "Custom websites for residential house cleaning and maid services in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Home Cleaning Services",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners searching for a cleaning service are letting strangers into their home — they want to know your team is background-checked, insured, and trained before they hand over a key. A website that establishes that trust earns the recurring client. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Home Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Home Cleaning Services</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Homeowners hiring a cleaning service are
              making a trust decision first and a price
              decision second. They are inviting people
              into their home, often when they are not
              there, and they need to feel certain about
              who those people are. They want to know
              whether cleaners are employees or
              subcontractors, whether they are background-
              checked, whether the company is bonded and
              insured, what products are used, and whether
              they can accommodate pets, specific areas,
              or green cleaning preferences. They also
              want to understand the pricing structure —
              first-time clean vs. recurring, what each
              package covers — before they book. A home
              cleaning website that answers these questions
              confidently and makes scheduling easy wins
              the recurring client who stays for years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a cleaning service
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Staff credentials — background checks, employment status (employees vs. contractors), training",
                  "Insurance and bonding — what happens if something is broken or damaged",
                  "Cleaning products — standard vs. green/eco-friendly, pet-safe options, fragrance-free",
                  "Packages — standard clean, deep clean, move-in/move-out, recurring vs. one-time",
                  "Pricing — how pricing is structured, first-time vs. recurring rate, what's included",
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
                What your home cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Team standards — background checks, bonded and insured, employee status, training process",
                  "Service packages — standard clean, deep clean, move-in/out, recurring schedule options",
                  "Products — what you use, green/eco-friendly options, pet-safe, fragrance-free availability",
                  "What's included — room-by-room checklist for each package so expectations are clear",
                  "Pricing — how it's calculated, first clean rate, recurring discounts, add-on services",
                  "Booking form with home size, frequency, package interest, special requests, availability",
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
                &ldquo;We were competing on price because
                homeowners couldn&apos;t tell us apart from
                every other cleaning company. We do things
                differently — all employees, not contractors,
                all background-checked, all trained on our
                system — but none of that came through
                before the new site. The website with
                our standards explained, our packages and
                checklists laid out clearly, and a simple
                booking form changed who was calling us.
                We stopped getting price shoppers and
                started getting people who had already
                decided they wanted a reliable team.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Harmon, cleaning service owner, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A home cleaning site with packages,
                team standards, and booking form starts
                at $225. A full site with service
                checklists, pricing guide, and recurring
                client section is $425–$850. Two
                recurring clients cover the cost in
                one month. No contracts, no monthly fees.
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
