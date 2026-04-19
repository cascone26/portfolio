import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Hot Tub Installation Companies in Kansas City",
  description:
    "Custom websites for hot tub installation, spa delivery, and hot tub electrical and pad companies in the Kansas City area. Show your brands, electrical requirements, and pad options to win residential hot tub installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hot-tub-installation",
  },
};

export default function HotTubInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Hot Tub Installation Companies in Kansas City",
    description: "Custom websites for hot tub installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Hot Tub Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Hot tub buyers want to understand the electrical requirements, what pad or base options they have, and how delivery works on a tight backyard access. A website that walks through the installation process and shows real placements earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Hot Tub Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Hot Tub Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Hot tub installation customers
              are buyers who have already
              chosen or are close to choosing
              a hot tub and need the site
              preparation, electrical connection,
              and delivery handled by someone
              who knows what they are doing.
              The two biggest pre-installation
              questions are electrical and
              base: nearly all full-size
              hot tubs require a dedicated
              240V 50-amp GFCI-protected
              circuit — 110V plug-and-play
              spas are an exception but
              are limited to smaller models
              with fewer jets and slower
              heating. A licensed electrician
              must run the circuit from
              the panel to the installation
              location, and the conduit
              run length, panel capacity,
              and whether a subpanel is
              needed all affect cost.
              The base options are
              concrete pad (poured, most
              stable), pavers (easier
              to add and looks better,
              adequate for most spas),
              and reinforced spa pads
              (interlocking composite
              pads designed specifically
              for hot tub loads). The
              delivery question comes
              up with nearly every
              customer — moving a
              hot tub that weighs
              800 to 1,000 pounds
              empty through a yard
              with limited gate access
              requires a crane lift
              or specialized equipment.
              Knowing that the installer
              has handled tight access
              before is a significant
              trust factor. Hot tub
              brands like Jacuzzi,
              Sundance, Hot Spring,
              Bullfrog, and Caldera
              are what customers
              research when buying,
              and knowing the installer
              has experience with
              the specific brand
              matters. A hot tub
              installation website
              that explains electrical
              requirements, base
              options, and the delivery
              and crane lift process
              earns the buyer who
              wants the installation
              done right from day one.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What hot tub buyers research before installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Electrical requirements — 240V 50-amp GFCI circuit, panel capacity, subpanel needs, electrician coordination",
                  "Base options — concrete pad, pavers, composite spa pads — weight requirements, cost, aesthetics",
                  "Delivery and placement — how a 900-pound spa gets through a gate, crane lift, maneuvering tight spaces",
                  "Plug-and-play vs. 240V — what 110V spas are limited to, when a dedicated circuit is required",
                  "Brand experience — whether the installer has worked with Jacuzzi, Hot Spring, Bullfrog, Sundance specifically",
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
                What your hot tub installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Electrical guide — 240V circuit requirements, panel assessment, what a licensed electrician needs to do",
                  "Base options — concrete, pavers, spa pads — weight rating, installation timeline, cost range for each",
                  "Delivery process — how we move spas through tight yards, crane lift availability, access assessment",
                  "Installation steps — site visit, base prep, electrical run, delivery and placement, startup and fill",
                  "Brand experience — hot tub brands we have installed, model-specific knowledge, connection and startup",
                  "Quote form with spa brand and model, installation location, gate width, base preference, timeline",
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
                &ldquo;Hot tub buyers have already
                made the big purchase decision —
                they just need the installation
                done without surprises. The
                biggest questions are always
                about the electrical and about
                getting the tub through the
                yard. Without a website addressing
                both, I was having the same
                education call for every
                new customer. The site with
                our electrical guide, our
                base options, and photos
                of tight-access deliveries
                we have done meant customers
                called knowing what to expect
                and ready to book. The
                installation jobs converted
                immediately.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Lindqvist, hot tub installation specialist, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A hot tub installation site with
                electrical guide, base options, and
                quote form starts at $225. A full
                site with delivery process, brand
                experience section, and installation
                walkthrough is $425–$850. One full
                installation covers the cost.
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
