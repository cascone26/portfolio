import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Screen Door and Window Screen Repair Companies in Kansas City",
  description:
    "Custom websites for screen door repair, window screen replacement, and retractable screen installation companies in the Kansas City area. Show your screen options, mobile service area, and turnaround to win residential and commercial screen work.",
  alternates: {
    canonical: "https://builtsimple.dev/for/screen-door-repair",
  },
};

export default function ScreenDoorRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Screen Door and Window Screen Repair Companies in Kansas City",
    description: "Custom websites for screen door and window screen repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Screen Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with a torn screen or a screen door that won't close right want someone who can come to them, match the screen mesh, and finish the job the same day. A website that shows your service area and mobile capability gets you the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Screen Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Screen Door &amp; Window Screen</span> Repair in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Screen repair customers want a
              fast, convenient service — they
              have a torn screen, a screen door
              that has come off its track, a
              frame that is bent, or a retractable
              screen that will not retract —
              and the most important thing to
              them is whether you come to them
              with a mobile unit and can match
              their existing mesh and frame
              color on the spot. The variety
              of screen types matters: standard
              fiberglass mesh for windows,
              charcoal solar mesh that reduces
              glare, pet-resistant screens for
              homes with dogs and cats, no-see-um
              mesh for fine insect prevention,
              and retractable door screens from
              brands like Phantom, Larson, and
              Andersen that require specific
              repair expertise. Homeowners also
              want to understand whether you
              rescreen existing frames or
              replace the entire unit, and
              what the price difference is.
              Property managers and HOAs dealing
              with multiple units want a company
              that can batch repairs across
              buildings efficiently and provide
              consistent pricing. A screen
              repair website that shows your
              mobile service, lists the screen
              types and brands you work with,
              and makes booking a visit fast
              earns the customer who wants
              it done this week.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers want to know before booking a screen repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Mobile service — do you come to them with a van unit, or do they bring screens to a shop",
                  "Screen types — fiberglass, solar, pet-resistant, no-see-um mesh — what you carry and can match",
                  "Retractable screens — Phantom, Larson, Andersen — whether you repair or replace them",
                  "Frame work — bent frame repair, replacement frames, color matching to existing doors and windows",
                  "Same-day availability — how quickly you can come, whether you carry common sizes in the van",
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
                What your screen repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Mobile service area — map or city list, what the van carries, same-day and next-day availability",
                  "Screen mesh guide — fiberglass, solar, pet-resistant, no-see-um — what each offers, when to use it",
                  "Retractable screens — brands serviced (Phantom, Larson, Andersen), repair vs. replacement",
                  "Frame repair — bent frame straightening, replacement frames, color matching, track realignment",
                  "Commercial and multi-family — batch repair pricing, HOA and property management service agreements",
                  "Booking form with screen type, location (door, window, patio), issue description, address, timing",
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
                &ldquo;Screen repair is a
                convenience service — people
                want it fast and they don&apos;t
                want to load up their screens
                and drive somewhere. We have
                a fully stocked van that can
                rescreen on the spot in almost
                any mesh type, but without
                a website showing that, people
                assumed they had to come to
                us. The new site with our
                mobile service area mapped,
                our screen types explained,
                and our retractable screen
                brands listed changed everything.
                Calls doubled by the end of
                spring and we started getting
                apartment complex managers
                who needed twenty screens
                done at once.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — O. Vasquez, mobile screen repair, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A screen repair site with service area,
                screen types, and booking form starts at
                $200. A full site with retractable screen
                guide, frame repair, and commercial section
                is $375–$750. One multi-unit property job
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
