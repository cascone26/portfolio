import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Boat Detailing Companies in Kansas City",
  description:
    "Custom websites for boat detailing and marine cleaning companies in the Kansas City area. Show your before-and-after results and service packages to book more detailing jobs at Lake of the Ozarks, Smithville, and Jacomo.",
  alternates: {
    canonical: "https://builtsimple.dev/for/boat-detailing",
  },
};

export default function BoatDetailingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Boat Detailing Companies in Kansas City",
    description: "Custom websites for boat detailing and marine cleaning companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Boat Detailing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Boat owners want to see dramatic oxidation removal and hull restoration results before they trust anyone with their boat. A website with real before-and-after photos and clear packages wins the job at Lake of the Ozarks, Smithville, and Jacomo. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Boat Detailing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Boat Detailing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Boat owners in the Kansas City area —
              whether they dock at Smithville Lake,
              Lake Jacomo, or make the run down to
              Lake of the Ozarks — take their vessels
              seriously and want them looking sharp.
              When they are searching for a detailer,
              they want to see before-and-after photos
              of oxidation removal, hull polishing,
              interior cleaning, and canvas restoration
              before they pick up the phone. They also
              want to know whether you come to the
              marina or require them to bring the boat
              in, what products you use, and what
              your packages include. A boat detailing
              website that leads with dramatic results,
              explains your process, and makes getting
              a quote easy books more jobs with the
              boat owners who care about their investment.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What boat owners look for when choosing a detailer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before and after photos — oxidation removal, hull restoration, interior detail results",
                  "Services — hull polish, oxidation removal, interior, canvas/upholstery, engine compartment",
                  "Products — marine waxes, ceramic coating, UV protectant — what and why",
                  "Mobile vs. shop — whether they come to the marina, storage facility, or drive to you",
                  "Pricing — packages by boat length, hull condition, what's included in each tier",
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
                What your boat detailing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before and after gallery — organized by service type (oxidation, interior, canvas, full detail)",
                  "Services — hull polish, oxidation removal, wax, ceramic coating, interior, canvas, engine bay",
                  "Products — marine-grade products used, why they outperform consumer-grade options",
                  "Mobile service — marinas and storage facilities served (Smithville, Jacomo, Lake Ozarks trips)",
                  "Packages — by boat length and scope, what each tier includes, ceramic coating add-on",
                  "Quote form with boat type, length, current condition, location, services needed, timeline",
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
                &ldquo;Boat owners were skeptical about
                paying what good detailing costs until
                they could actually see the results.
                We had incredible before-and-afters on
                our phones but no way to show them
                before the call. The new site with
                the oxidation removal gallery, our
                service packages with what is included,
                and a map of the marinas we service
                changed everything. Owners started
                calling already sold on the idea —
                they had seen the transformation and
                just wanted to book a date.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Eastman, boat detailer, Smithville, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A boat detailing site with gallery,
                packages, and quote form starts at $250.
                A full site with service type galleries,
                product explainer, and mobile service
                area is $475–$950. One full detail
                covers the cost. No contracts, no monthly fees.
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
