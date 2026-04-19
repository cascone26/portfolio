import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Roofing Companies in Kansas City",
  description:
    "Custom websites for roofing contractors in the Kansas City area. Get found after the next storm and turn insurance claim searches into signed estimates.",
  alternates: {
    canonical: "https://builtsimple.dev/for/roofing",
  },
};

export default function RoofingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Roofing Companies in Kansas City",
    description: "Custom websites for roofing contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Roofing Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Limited-time offer banner */}
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Storm season is here — get your roofing site live before the next hail event. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Roofers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Roofing Companies</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              After a hailstorm, every homeowner in your ZIP code opens Google
              and searches &ldquo;roofing company near me.&rdquo; The crews that
              land those calls aren&apos;t necessarily the best — they&apos;re
              the ones with a website that shows up and looks trustworthy. If
              you&apos;re not there, someone else is taking your jobs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before they call a roofer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Whether you handle insurance claims — this is the #1 question after a storm",
                  "Photos of past jobs — real before-and-after work on Kansas City homes",
                  "That you're licensed, bonded, and carry liability + workers comp insurance",
                  "How long you've been in business locally — fly-by-night crews are a real concern",
                  "Reviews from actual homeowners in their neighborhood",
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
                What your roofing website would include
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Every site I build is custom, but here&apos;s what most roofing
                companies need:
              </p>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services page — roof replacement, repair, gutters, storm damage, insurance claims",
                  "Insurance claim process — walk homeowners through how it works with your company",
                  "Photo gallery — real project photos from KC-area roofs you've replaced",
                  "License, bond, and insurance credentials displayed prominently",
                  "Free inspection or estimate offer with a clear call-to-action",
                  "Service area map so homeowners know you cover their neighborhood",
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
                &ldquo;We&apos;d been relying on door-knocking and yard signs
                for years. After the site launched, we started getting calls
                from people who found us on Google after the April storms. We
                booked six roofs in one week from search alone.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Harmon, roofing contractor, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter site with your services, credentials, and a free
                inspection offer starts at $250. A full site with insurance
                claim walkthrough, photo gallery, and service area pages is
                $600–1,200. One average roof replacement pays for the site many
                times over. No contracts, no monthly fees.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Get a free mockup — no obligation. Fill out the form below, or
                give me a call.
              </p>
              <p className="mb-6">
                <a
                  href="tel:8165205652"
                  className="text-accent-light text-lg font-semibold hover:underline"
                >
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
