import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Epoxy Flooring Companies in Kansas City",
  description:
    "Custom websites for epoxy and garage floor coating companies in the Kansas City area. Show your before/after transformations, get more quote requests, and book out your season.",
  alternates: {
    canonical: "https://builtsimple.dev/for/epoxy-flooring",
  },
};

export default function EpoxyFlooringPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Epoxy Flooring Companies in Kansas City",
    description: "Custom websites for epoxy and garage floor coating companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Epoxy Flooring Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          A garage floor transformation sells itself — but only if people can see it. A site with your before/after photos ranks on Google. Instagram doesn&apos;t. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Epoxy Flooring Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Epoxy Flooring</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Epoxy flooring is a visual product — the before/after photos do
              the selling. Homeowners searching for garage floor coatings are
              already sold on the concept; they just need to see your quality
              and trust your company enough to call. A website that showcases
              your best transformations, explains the different coating systems,
              and makes getting a quote simple will get you more of those calls
              than a Facebook post that disappears in two days.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before booking an epoxy installer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after photos — full garage transformations are the most persuasive content you have",
                  "Coating system options — flake/chip, solid color, metallic, polyaspartic vs epoxy",
                  "Surface prep method — diamond grinding vs shot blasting vs acid etching",
                  "Residential vs commercial — garage floors, basement floors, shop floors, showroom",
                  "Warranty — how long the coating is guaranteed and what voids it",
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
                What your epoxy flooring website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before/after gallery — full garage floors, basement conversions, commercial shop floors",
                  "Coating systems page — chip/flake, metallic, solid, polyaspartic with pros and look of each",
                  "Residential and commercial pages with project photos by application",
                  "Surface prep explanation — why diamond grinding matters for a lasting bond",
                  "Pricing guide — starting-at ranges for typical 2-car and 3-car garages",
                  "Free quote form with garage size, current floor condition, and preferred style",
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
                &ldquo;I was relying entirely on Nextdoor and Facebook
                recommendations. Once the website went up with a gallery of our
                metallic floor work, we started getting calls from homeowners
                who found us searching for epoxy garage floors in Overland Park
                and Lee&apos;s Summit. The photos do the selling — we just
                needed them to be findable.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Brooks, epoxy flooring company, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An epoxy flooring site with gallery, services, and quote form
                starts at $225. A full site with coating system pages, before/after
                gallery, and residential and commercial sections is $450–850. One
                3-car garage job covers the cost. No contracts, no monthly fees.
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
