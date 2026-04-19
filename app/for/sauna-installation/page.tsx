import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Sauna Installation Companies in Kansas City",
  description:
    "Custom websites for sauna installation, home sauna builders, and infrared sauna dealers in the Kansas City area. Show your sauna types, electrical and ventilation requirements, and installation process to win residential and commercial sauna projects.",
  alternates: {
    canonical: "https://builtsimple.dev/for/sauna-installation",
  },
};

export default function SaunaInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Sauna Installation Companies in Kansas City",
    description: "Custom websites for sauna installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Sauna Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners researching a home sauna want to understand the difference between traditional, infrared, and steam before they call anyone. A website that guides them through the decision and shows your finished installations earns the consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Sauna Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Sauna Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Sauna installation customers are
              typically homeowners who have decided
              they want a sauna and are now trying
              to understand their options before
              they commit to a budget. The first
              decision is sauna type: traditional
              Finnish rock sauna with a wood-burning
              or electric kiuas running 160–195°F,
              infrared sauna using carbon or ceramic
              panels at 120–150°F with lower power
              draw and faster heat-up time, or a
              steam room with a steam generator
              and fully waterproof construction.
              Each type has different electrical
              requirements — 240V 30–60A for
              traditional, 120V or 240V for infrared,
              240V with GFCI protection for steam —
              and different construction requirements
              for walls, ceiling height, vapor
              barriers, and ventilation. Customers
              also want to understand wood species:
              western red cedar for its aroma and
              natural oils, Nordic spruce for
              a clean and traditional look, thermally
              modified aspen for low allergy and
              heat stability. Commercial clients —
              gyms, spas, hotels, and athletic
              facilities — need to understand
              your capacity for large multi-bench
              rooms, ADA compliance, tile integration,
              and commercial-grade heater brands.
              A sauna installation website that
              educates customers on the decision,
              shows your finished project gallery,
              and makes scheduling a design
              consultation easy earns the client
              who is ready to invest.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers research before hiring a sauna installer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Sauna type — traditional Finnish, infrared (carbon vs. ceramic), steam room — differences and benefits",
                  "Electrical requirements — 120V vs. 240V, amperage, panel upgrade, GFCI — what each type needs",
                  "Wood species — cedar, spruce, aspen, hemlock — aroma, durability, allergy considerations",
                  "Space requirements — minimum room size, ceiling height, bench layout, ventilation needs",
                  "Cost ranges — kit vs. custom build, pre-cut sauna package vs. site-built, heater brand options",
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
                What your sauna installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Sauna type guide — traditional, infrared, steam — how each works, what it feels like, who it suits",
                  "Project gallery — finished saunas organized by type, wood species, room size, and location",
                  "Wood and material options — cedar, spruce, aspen — appearance, aroma, longevity comparison",
                  "Electrical and construction — what prep is needed before installation, permit requirements",
                  "Commercial saunas — gym, spa, hotel — multi-bench rooms, ADA, commercial heater brands",
                  "Consultation form with sauna type preference, location, room dimensions, budget range, timeline",
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
                &ldquo;Every customer I talked
                to had done research online
                and was confused — they had
                read about infrared saunas
                but weren&apos;t sure if
                traditional was better for
                them, or whether their basement
                had the right electrical for
                what they wanted. Without a
                website, I was starting every
                conversation from zero. The
                new site with my sauna type
                comparison, my wood options
                shown in real installations,
                and an electrical requirements
                section meant customers came
                in already knowing what they
                wanted. The consultation
                became about design instead
                of basics. First big commercial
                gym job came through the
                website within a month.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Lindqvist, sauna installer, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A sauna installation site with type guide,
                gallery, and consultation form starts at
                $225. A full site with wood options, commercial
                section, and electrical guide is $425–$850.
                One custom sauna build covers the cost many
                times over. No contracts, no monthly fees.
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
