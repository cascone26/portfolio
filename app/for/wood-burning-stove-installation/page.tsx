import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Wood Burning Stove Installation Companies in Kansas City",
  description:
    "Custom websites for wood burning stove, pellet stove, and hearth installation companies in the Kansas City area. Show your stove brands, EPA certification, and installation process to win residential wood stove contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/wood-burning-stove-installation",
  },
};

export default function WoodBurningStoveInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Wood Burning Stove Installation Companies in Kansas City",
    description: "Custom websites for wood burning stove installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Wood Burning Stove Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners adding a wood burning stove want to know about EPA Step 2 certification, freestanding vs. insert options, and what the chimney liner and hearth pad requirements look like. A website that answers those questions earns the installation consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Wood Stoves in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Wood Burning Stove Installation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Wood burning stove customers are
              homeowners who want supplemental
              heat that does not depend on
              gas or electricity — or who
              want the ambiance of a real
              wood fire that a gas fireplace
              cannot replicate. The first
              decision is stove type: a
              freestanding wood stove sits
              on a hearth pad and connects
              to an existing or new chimney,
              while a wood stove insert
              fits into an existing masonry
              or zero-clearance fireplace
              opening and uses a stainless
              liner to connect to the
              existing flue. EPA Step 2
              certification is a major
              purchase factor — the EPA
              has required all new wood
              heaters sold after May 2020
              to meet Step 2 emission
              standards, and customers
              researching stoves will
              specifically look for this
              certification. Brands like
              Jøtul, Lopi, Hearthstone,
              Vermont Castings, and
              Quadra-Fire each have loyal
              followings and distinct
              design aesthetics —
              customers research specific
              models and compare BTU
              output, firebox capacity,
              and burn time. The installation
              side requires understanding:
              clearance to combustibles
              (which varies by stove and
              determines placement options),
              hearth pad size requirements,
              whether a new liner is needed
              for the chimney, and whether
              a permit is required in the
              specific KC municipality.
              Kansas City&apos;s winter
              temperatures make wood stoves
              a legitimate primary or backup
              heat source, and the cost
              to install — typically $2,500
              to $6,000 installed depending
              on whether a liner and hearth
              pad are needed — is reasonable
              relative to the heat output.
              A wood stove website that
              shows the stove brands and
              models you install, explains
              freestanding vs. insert,
              and walks through the
              installation requirements
              earns the homeowner who
              has been researching stoves
              for a winter project.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before buying a wood stove
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Freestanding vs. insert — which works for their space, existing fireplace requirements, clearance needs",
                  "EPA Step 2 certification — what it means for emissions, efficiency, and whether older stoves qualify",
                  "Brand comparison — Jøtul, Lopi, Vermont Castings, Hearthstone — BTU output, firebox size, aesthetics",
                  "Chimney liner — whether their existing chimney needs a liner, stainless flexible vs. rigid, cost",
                  "Hearth pad and clearances — what combustible clearance looks like, hearth pad size requirements",
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
                What your wood stove website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Brand showroom — Jøtul, Lopi, Quadra-Fire — models, BTU ratings, firebox capacity, aesthetics",
                  "Freestanding vs. insert guide — when each makes sense, existing fireplace compatibility, clearance requirements",
                  "EPA Step 2 explanation — what certification means, efficiency ratings, KC air quality compliance",
                  "Installation requirements — hearth pad, chimney liner, clearances, permit process in KC municipalities",
                  "Gallery — installed stoves in KC homes — freestanding, inserts, masonry surrounds, custom hearth pads",
                  "Consultation form with room size, existing fireplace, primary or supplemental heat, stove style preference",
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
                &ldquo;Wood stove customers have usually
                been researching for months —
                they know the brand they want,
                they know the BTU output they
                need, and they want to know
                if you carry it and can install
                it correctly. Without a website,
                I had no way to show what I
                actually stock and install.
                Every customer had to start
                the conversation from scratch.
                The new site with our brand
                lineup, the insert vs. freestanding
                guide, and photos of real
                installations in KC homes
                meant customers arrived
                knowing what they wanted
                and already trusting that
                we knew how to do it.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Brennan, hearth and stove installer, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A wood stove site with brand
                lineup, freestanding vs. insert
                guide, and consultation form
                starts at $225. A full site
                with EPA certification section,
                gallery, and permit guide
                is $425–$850. One installation
                with liner and hearth pad
                covers the cost many times over.
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
