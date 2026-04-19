import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Treatment and Blind Companies in Kansas City",
  description:
    "Custom websites for window treatment dealers, blind installation companies, and custom drapery workrooms in the Kansas City area. Show your product lines, motorization options, and in-home consultation process to grow your client base.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-treatments-blinds",
  },
};

export default function WindowTreatmentsBlindsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Treatment and Blind Companies in Kansas City",
    description: "Custom websites for window treatment companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Treatment Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners shopping for window treatments want to understand the difference between cellular shades, Roman shades, shutters, and drapery before a salesperson arrives. A website with a visual product guide and an easy way to schedule an in-home consultation converts online researchers into showroom-quality clients. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Treatments in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Treatment</span> &amp; Blind Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Homeowners shopping for window treatments
              are making a decision that involves
              aesthetics, light control, privacy,
              energy efficiency, and budget —
              all at once. Before they schedule
              a consultation with anyone, they
              research the product categories:
              cellular shades for insulation,
              roller shades for modern clean lines,
              Roman shades for texture and warmth,
              plantation shutters for classic light
              control, and drapery panels for
              softness and drama. They also want
              to understand motorization — whether
              Hunter Douglas PowerView, Lutron
              Serena, or similar systems integrate
              with their smart home setup. Interior
              designers and contractors specifying
              treatments for new construction or
              renovation want to know your trade
              program, your lead times, and whether
              you handle commercial and hospitality
              installs. A window treatment website
              that visually organizes your product
              categories, communicates your brand
              lines and motorization options,
              and makes scheduling a free in-home
              consultation easy converts the
              homeowner who has been researching
              for a month into an appointment that
              closes as a whole-home project.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before scheduling a window treatment consultation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Product categories — cellular, roller, Roman, wood blinds, shutters, drapery — what each offers",
                  "Light control levels — blackout, room darkening, light filtering, sheer — differences and use cases",
                  "Motorization — Hunter Douglas PowerView, Lutron Serena, smart home integration, battery vs. hardwired",
                  "Brand lines — Hunter Douglas, Norman, Springs, custom workroom — quality tiers and lead times",
                  "Consultation process — who comes, what to expect, how long it takes, obligation level",
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
                What your window treatment website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Product guide — cellular, roller, Roman, wood, shutters, drapery with photos and use cases",
                  "Light control guide — blackout to sheer options, privacy levels, room-specific recommendations",
                  "Motorization — PowerView, Lutron, battery vs. hardwired, smart home integration capability",
                  "Brand lines — Hunter Douglas, Norman, custom workroom — quality positioning and lead times",
                  "Trade program — designer and contractor pricing, referral program, commercial and hospitality work",
                  "Consultation form with number of windows, room types, style direction, timeline, address",
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
                &ldquo;We were competing against
                big box stores and customers
                had no way to understand the
                difference between what we offered
                and what they could order online.
                Our Hunter Douglas line, our
                motorization capability, and
                our professional measure-and-install
                service are real advantages —
                but without a website, none of
                that came across until we were
                in their home. The new site with
                our product guide, our motorization
                section, and a consultation form
                brought in customers who already
                understood the value of professional
                service and arrived ready to
                discuss whole-home projects.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Tran, window treatment dealer, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window treatment site with product guide,
                motorization section, and consultation form
                starts at $225. A full site with light
                control guide, brand detail, and trade
                program is $425–$850. One whole-home
                project covers the cost many times over.
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
