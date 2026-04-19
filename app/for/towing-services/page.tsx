import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Towing Companies in Kansas City",
  description:
    "Custom websites for towing and roadside assistance companies in the Kansas City area. Show your services, service area, and response times to get more calls from stranded drivers and auto shops.",
  alternates: {
    canonical: "https://builtsimple.dev/for/towing-services",
  },
};

export default function TowingServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Towing Companies in Kansas City",
    description: "Custom websites for towing and roadside assistance companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Towing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Someone searching for a tow truck is stranded right now. They need your phone number, service area, and ETA in under 10 seconds. A fast, mobile-optimized website that answers those three things wins the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Towing Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Towing Services</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Towing is one of the most urgent local searches online.
              When someone is broken down on I-435 at night or their
              car won&apos;t start in a parking lot, they search for the
              nearest towing company and call the first result that
              answers their three questions: Do you cover this area?
              How fast can you get here? How much will it cost? A
              website built around those answers wins the call before
              your competitors even load.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What stranded drivers and fleet managers look for
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service area — cities and highways covered in KC Metro, Missouri and Kansas sides",
                  "Response time — average arrival time, 24/7 availability, after-hours and holiday coverage",
                  "Services — light duty tow, flatbed, motorcycle, heavy duty, winch-out, accident recovery",
                  "Roadside assistance — lockout, jump start, tire change, fuel delivery, battery replacement",
                  "Pricing — flat rates, per-mile fees, after-hours surcharges — be upfront to earn trust",
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
                What your towing company website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Phone number — large, tap-to-call on every page, especially above the fold on mobile",
                  "Service area map or list — exact cities, zip codes, and major highways covered",
                  "Services page — light/medium/heavy tow, flatbed, motorcycle, accident recovery, impound",
                  "Roadside assistance — lockout, jump start, tire change, fuel delivery with pricing",
                  "Fleet and dealership accounts — ongoing towing contracts for businesses with vehicles",
                  "Storage and impound info — daily rates, release process, payment methods",
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
                &ldquo;Our old site took forever to load on a phone and the
                number wasn&apos;t even prominent. Most people in an
                emergency gave up before they could call. The new mobile-first
                site with our service area listed clearly and the number
                front and center got us significantly more calls from
                people who found us in Google when they were actually
                broken down and needed help fast.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Kowalski, towing company, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A towing site with services, service area, and click-to-call
                starts at $200. A full site with roadside services,
                fleet accounts, pricing guide, and storage info
                is $400–$800. One flatbed tow covers the cost.
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
