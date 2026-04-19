import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Outdoor Lighting Installation Companies in Kansas City",
  description:
    "Custom websites for landscape lighting, pathway lighting, and outdoor LED lighting companies in the Kansas City area. Show your low-voltage systems, fixture styles, and nighttime transformations to win residential outdoor lighting contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/outdoor-lighting-installation",
  },
};

export default function OutdoorLightingInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Outdoor Lighting Installation Companies in Kansas City",
    description: "Custom websites for outdoor lighting installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Outdoor Lighting Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners considering landscape lighting want to see what their house actually looks like lit up at night, understand the difference between low-voltage and line-voltage systems, and know how smart lighting control works. A website with nighttime photography earns the design consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Outdoor Lighting in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Outdoor Lighting Installation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Outdoor lighting customers are
              homeowners who want to extend
              the visual appeal of their
              landscaping into the evening
              hours, improve security and
              safety on pathways and
              entry points, or create
              an outdoor entertainment
              environment that is usable
              after dark. The majority
              of residential landscape
              lighting is low-voltage
              (12V) LED — a transformer
              plugged into a standard
              outdoor outlet steps down
              line voltage, and direct-burial
              cable runs to fixture
              locations without any
              conduit requirement or
              electrician coordination
              for the fixture runs.
              Line-voltage (120V) systems
              are used for high-lumen
              applications (large trees,
              commercial facades, flagpoles)
              and require a licensed
              electrician. Fixture
              technique is what creates
              the visual result: uplighting
              (fixtures at grade aimed
              up at trees, architectural
              features, or walls creates
              dramatic shadows and
              depth), downlighting
              (fixtures mounted high
              in trees creating moonlight
              effect), path lights
              (low fixtures illuminating
              walkways and beds without
              glare), well lights (flush-mount
              in ground for driveways
              and hardscape edges),
              and step lights (recessed
              into retaining walls and
              risers). Warm white (2700K–3000K)
              is the standard for
              residential landscapes —
              it renders plant material
              naturally and creates
              a welcoming atmosphere.
              Smart integration (Kichler
              Connect, FX Luminaire,
              VOLT Lighting) allows
              smartphone scheduling,
              zone control, and
              dimming. Nighttime
              photography is critical
              for marketing — customers
              cannot visualize the
              result from daytime
              photos of fixtures.
              A landscape lighting
              website with strong
              nighttime portfolio
              photography, technique
              explanations, and
              smart control options
              earns the homeowner
              who has admired
              their neighbor&apos;s
              lighting for years
              and is finally ready
              to call.
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
                  "Low-voltage vs. line-voltage — what requires an electrician, what a landscape lighter installs independently",
                  "Lighting techniques — uplighting vs. downlighting vs. path lighting vs. well lights — what each does",
                  "Color temperature — warm white vs. cool white, what 2700K vs. 4000K looks like on a house at night",
                  "Smart control — zone control, scheduling, dimming, phone app options, smart home integration",
                  "Nighttime portfolio — what finished systems actually look like on KC homes after dark",
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
                What your outdoor lighting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Nighttime gallery — front facades, backyard environments, tree lighting, pathway systems on KC homes",
                  "Technique guide — uplighting, moonlighting, path, well, and step light — photos of each technique in use",
                  "Low-voltage explained — how the 12V system works, transformer sizing, no electrician needed for most installs",
                  "Smart control options — zone scheduling, smartphone app, dimming capabilities, smart home compatibility",
                  "Fixture quality — commercial-grade brass and copper fixtures vs. big-box aluminum, longevity comparison",
                  "Consultation form with home style, areas to light, current lighting if any, smart control interest, budget",
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
                &ldquo;Landscape lighting is entirely
                sold by the portfolio —
                customers need to see
                what their house could
                look like lit up at
                night before they can
                decide they want it.
                Without a website
                showing real nighttime
                photos I was trying
                to sell a feeling
                from a blank canvas.
                The site with our
                nighttime gallery,
                the technique explanations,
                and the smart control
                section converted
                inquiries into consultations
                at a completely different
                rate. People would
                show up and say
                &lsquo;I want what that
                house has&rsquo; pointing
                at a photo.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — E. Thornton, landscape lighting designer, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An outdoor lighting site with
                nighttime gallery, technique guide,
                and consultation form starts at $225.
                A full site with smart control section,
                fixture quality comparison, and
                full portfolio is $425–$850. One
                full front-yard lighting system
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
