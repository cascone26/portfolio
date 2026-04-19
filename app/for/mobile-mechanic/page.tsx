import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Mobile Mechanics in Kansas City",
  description:
    "Custom websites for mobile mechanics and on-site auto repair services in the Kansas City area. Show your service area, repair capabilities, and booking process to win customers who need repair without the tow.",
  alternates: {
    canonical: "https://builtsimple.dev/for/mobile-mechanic",
  },
};

export default function MobileMechanicPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Mobile Mechanics in Kansas City",
    description: "Custom websites for mobile mechanics in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Mobile Mechanics",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          When someone&apos;s car won&apos;t start or needs repair and they don&apos;t want to pay for a tow, they search for a mobile mechanic. A website that shows your service area, what you can fix on-site, your certifications, and how quickly you can arrive gets you called before anyone else. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Mobile Mechanics in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Mobile Mechanics</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              People searching for a mobile mechanic
              are often in a frustrating situation —
              their car won&apos;t start, they need
              brakes or a battery before work tomorrow,
              or they have a vehicle that needs repair
              but they can&apos;t get it to a shop.
              They have two main questions before they
              call: can you come to my location, and
              can you actually fix my problem on-site?
              They also want to know your certifications,
              roughly what the repair will cost, and
              how fast you can get there. A mobile
              mechanic website that clearly shows your
              service area on a map, lists what you
              can and cannot repair on-site, shows
              your ASE certifications, and makes
              requesting service straightforward
              converts the stressed car owner who
              needs help now into a booking.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers need to know before booking a mobile mechanic
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service area — exactly where you come (cities, zip codes, radius from base)",
                  "What you fix on-site — batteries, brakes, starters, alternators, belts, diagnostics, oil changes",
                  "Certifications — ASE certifications, years of experience, vehicle makes you specialize in",
                  "Response time — how quickly you can arrive after booking, same-day availability",
                  "Pricing — service call fee, labor rates, diagnostic fee, parts markup policy",
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
                What your mobile mechanic website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service area map — visual coverage area, city and zip code list, travel fee structure",
                  "Services — full list of what you repair on-site with honest notes on what requires a shop",
                  "Certifications — ASE credentials, specialties (imports, diesel, fleet), diagnostic equipment",
                  "Fleet and commercial services — business fleet maintenance, company vehicles, recurring agreements",
                  "Pricing guide — service call fee, diagnostic fee, common repair estimates, payment methods",
                  "Service request form with vehicle make/model/year, issue description, location, availability",
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
                &ldquo;My biggest problem was people
                not knowing I exist until they were
                already stuck somewhere and panicking.
                Word of mouth wasn&apos;t enough. The
                new site with my service area map,
                my ASE certifications, a clear list
                of what I can fix on-site, and a
                simple request form changed my entire
                pipeline. People find me through
                Google when they need a mobile mechanic
                and they can see in thirty seconds
                that I cover their area and can
                actually fix their problem. Calls
                went up immediately.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Carver, mobile mechanic, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A mobile mechanic site with services,
                service area, and request form starts
                at $225. A full site with certification
                detail, fleet services section, and
                pricing guide is $425–$850. One
                brake job or battery replacement
                covers the cost. No contracts,
                no monthly fees.
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
