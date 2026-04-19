import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Landscape Lighting Installation Companies in Kansas City",
  description:
    "Custom websites for landscape lighting, outdoor lighting design, and low-voltage lighting companies in the Kansas City area. Show your design process, fixture brands, and smart control options to win residential and commercial outdoor lighting contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/landscape-lighting-installation",
  },
};

export default function LandscapeLightingInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Landscape Lighting Installation Companies in Kansas City",
    description: "Custom websites for landscape lighting installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Landscape Lighting Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners who want outdoor lighting want to see what their yard could look like at night before they commit. A website with nighttime photos, design approach, and smart control options earns the design consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Landscape Lighting in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Landscape Lighting</span> Installation in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Landscape lighting customers are
              making an aesthetic investment —
              they have seen a neighbor&apos;s yard
              lit up at night or a professionally
              photographed landscape and want
              that for their own property.
              Low-voltage LED landscape lighting
              is the standard: 12-volt systems
              are safe enough to bury in
              the yard without conduit in
              most applications, and LED
              fixtures from brands like
              VOLT, Kichler, Unique Lighting
              Systems, and FX Luminaire
              use a fraction of the energy
              of the halogen systems they
              replaced. The design questions
              homeowners ask are about
              lighting techniques — uplighting
              trees and architectural features,
              path lighting for walkways,
              moonlighting from trees downward,
              well lights for accent features —
              and how to get the warm but
              not orange look they see in
              photos (typically 2700K to
              3000K color temperature).
              Smart control is a growing
              expectation: Bluetooth or
              WiFi transformer controls
              from brands like VOLT Smart
              or FX Luminaire allow zone
              control, scheduling, and
              dimming from a phone app.
              Holiday and architectural
              lighting using permanent
              systems like Trimlight or
              RGB fixtures is a growing
              add-on market. Commercial
              customers — office parks,
              HOAs, hotels — want consistent
              professional-grade fixtures
              and a maintenance contract.
              A landscape lighting website
              with a nighttime portfolio,
              technique descriptions, and
              a free design consultation
              offer earns the homeowner
              who has been thinking about
              this for two summers.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a landscape lighting company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio — nighttime photos of completed projects, tree uplighting, path lighting, architectural features",
                  "Fixture brands — VOLT, Kichler, FX Luminaire — quality tiers, warranty, LED vs. halogen",
                  "Lighting techniques — uplighting, moonlighting, path lighting, silhouetting — what each achieves",
                  "Smart controls — app control, zone scheduling, dimming — what systems you use and how they work",
                  "Color temperature — 2700K vs. 3000K — how to get the warm look without orange-yellow",
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
                What your landscape lighting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Nighttime portfolio — uplighting, path lighting, moonlighting, holiday — real KC projects",
                  "Lighting techniques — what each technique achieves, when it is used, sample photos for each",
                  "Fixture brands — VOLT, Kichler, Unique, FX Luminaire — why professional-grade vs. hardware store",
                  "Smart controls — app-controlled transformer, zone scheduling, dimming, app walkthrough",
                  "Commercial and HOA — office parks, common areas, maintenance contracts, consistent specification",
                  "Design consultation form with yard description, features to light, budget range, smart control interest",
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
                &ldquo;Landscape lighting is an
                impulse buy for the homeowner
                who sees our work at a neighbor&apos;s
                house at night — but without
                a website, they could not
                find us. The new site with
                our nighttime portfolio,
                our technique descriptions
                so people know what moonlighting
                and uplighting mean, and
                our smart control section
                turned impulse into inquiry.
                We also started getting
                commercial calls from HOA
                boards looking at our
                residential portfolio and
                asking if we did common
                areas. One HOA contract
                changed our whole season.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Morales, landscape lighting designer, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A landscape lighting site with
                portfolio, techniques, and design
                form starts at $225. A full site
                with brand showcase, smart controls,
                and commercial section is $425–$850.
                One mid-size residential install
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
