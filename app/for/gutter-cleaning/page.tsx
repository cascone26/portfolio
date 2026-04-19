import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Gutter Cleaning Companies in Kansas City",
  description:
    "Custom websites for gutter cleaning, gutter guard installation, and downspout repair companies in the Kansas City area. Show your service process, seasonal availability, and gutter protection options to win residential and commercial contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/gutter-cleaning",
  },
};

export default function GutterCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Gutter Cleaning Companies in Kansas City",
    description: "Custom websites for gutter cleaning companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Gutter Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners who have water pouring over the side of their gutters or who need to schedule their fall clean before the first freeze want to book fast. A website with clear pricing, seasonal availability, and a simple booking form gets you the call before they move on. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Gutter Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Gutter Cleaning</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Gutter cleaning customers are not
              doing comparison shopping the way
              homeowners do for a kitchen remodel —
              they need the gutters cleaned before
              it rains again or before winter arrives,
              and they want to book it now. The
              questions they have are simple: do
              you service their area, what does
              it cost for a single-story vs.
              two-story home with their linear
              footage, are you available before
              the first freeze, and do you flush
              the downspouts and check for clogs
              or just remove the debris from the
              troughs. Gutter guard customers
              are doing more research — they
              want to know whether micro-mesh,
              reverse curve, or foam inserts
              actually work as advertised, what
              brands you install, whether the
              warranty is with the manufacturer
              or with you, and whether guards
              are compatible with their existing
              gutter profile. Commercial property
              managers and HOAs want a company
              that can handle multi-building
              properties with ladders or lift
              equipment, work around tenants,
              and provide before-and-after photos
              for the service record. A gutter
              cleaning website with clear service
              scope, pricing guidance, and a
              fast booking form earns both the
              urgent homeowner and the
              property manager looking for
              a reliable annual vendor.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners want to know before booking gutter cleaning
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service area and availability — when you can come, same-week scheduling, seasonal rush timing",
                  "Pricing — single-story vs. two-story, linear footage tiers, downspout flush included or separate",
                  "What is included — debris removal only, or downspout flush, minor repair, and before-after photos",
                  "Gutter guards — micro-mesh vs. reverse curve vs. foam, brands installed, warranty coverage",
                  "Repairs — fascia board damage, spike and ferrule replacement, sag correction, downspout reattachment",
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
                What your gutter cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service overview — what is included in a standard clean, downspout flush, inspection, photo report",
                  "Pricing guide — single and two-story tiers, square footage ranges, what affects the price",
                  "Gutter guard options — micro-mesh, reverse curve, foam inserts — how each works, what you install",
                  "Repair services — spike and ferrule, sag and slope correction, downspout reattachment, fascia repair",
                  "Commercial and multi-family — property managers, HOAs, lift equipment for tall buildings",
                  "Booking form with stories, approximate linear footage, service type, preferred date, property address",
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
                &ldquo;We were getting calls in
                fall that we couldn&apos;t keep
                up with and nothing in spring
                because people forget. Without
                a website, we had no way to
                reach homeowners who wanted
                to schedule in advance or
                sign up for a twice-a-year
                plan. The new site with our
                pricing ranges visible, our
                service scope explained, and
                our gutter guard section
                showing what we install
                brought in year-round bookings
                instead of just the October
                rush. We also started getting
                property manager inquiries
                that we never had before
                because we had nowhere to
                show we could handle
                commercial properties.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — H. Nwachukwu, gutter service owner, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A gutter cleaning site with services,
                pricing guide, and booking form starts
                at $200. A full site with gutter guard
                options, repair services, and commercial
                section is $425–$750. One guard installation
                job covers the cost. No contracts,
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
