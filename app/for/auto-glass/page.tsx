import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Auto Glass Companies in Kansas City",
  description:
    "Custom websites for windshield repair and replacement companies in the Kansas City area. Show your mobile service, insurance direct billing, and same-day availability to get more windshield replacement bookings.",
  alternates: {
    canonical: "https://builtsimple.dev/for/auto-glass",
  },
};

export default function AutoGlassPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Auto Glass Companies in Kansas City",
    description: "Custom websites for windshield repair and replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Auto Glass Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Most auto glass customers search from their car right after a rock hits their windshield. Mobile service, insurance billing, and same-day availability on your website gets the booking before they reach Safelite. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Auto Glass Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Auto Glass</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Auto glass is one of the most competitive local searches in Kansas
              City — Safelite spends millions to be at the top. Local shops
              win by being faster, cheaper, and coming to the customer. A local
              auto glass website that leads with mobile service, same-day
              availability, and direct insurance billing can beat the national
              chains for local searches every single day.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers check when searching for auto glass
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Mobile service — whether you come to their home, office, or parking lot",
                  "Same-day availability — for most chips and cracks, they don't want to wait",
                  "Insurance billing — direct billing to State Farm, Progressive, Geico, Allstate",
                  "Repair vs. replacement — when a chip can be repaired vs. when the windshield needs replacing",
                  "ADAS recalibration — advanced driver assistance systems need recalibration after OEM glass install",
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
                What your auto glass website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Mobile service callout — we come to you, home/work/parking lot, KC metro coverage",
                  "Same-day booking with available time slots or response time promise",
                  "Insurance page — direct billing, zero deductible options, accepted carriers",
                  "Repair vs. replacement guide — size chart, what affects the decision, chip repair benefits",
                  "ADAS recalibration — what it is, when it's required, whether you do it in-shop",
                  "Windshield quote form — year/make/model, damage description, location, insurance carrier",
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
                &ldquo;Safelite was getting every search because they had
                a slick site and we had nothing worth looking at. The new
                site with our mobile service area map and direct insurance
                billing page turned things around. We now show up for local
                searches and customers choose us specifically because we
                come to them and bill their insurance directly — that&apos;s
                our whole advantage, and the site makes it obvious.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Okonkwo, auto glass company, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An auto glass site with mobile service, insurance billing,
                and quote form starts at $200. A full site with repair vs.
                replacement guide, ADAS info, and service area map is $375–$800.
                Two windshield replacements cover the cost. No contracts,
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
