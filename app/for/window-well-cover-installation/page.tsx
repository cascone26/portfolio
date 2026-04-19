import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Well Cover Companies in Kansas City",
  description:
    "Custom websites for window well cover installation, window well drainage, and basement window companies in the Kansas City area. Show your polycarbonate and metal cover options, drainage systems, and egress window well sizing to win window well contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-well-cover-installation",
  },
};

export default function WindowWellCoverInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Well Cover Companies in Kansas City",
    description: "Custom websites for window well cover installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Well Cover Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a cover will keep water out entirely or just reduce it, what polycarbonate vs. metal covers actually look like on the house, and whether egress window wells require a cover at all. A website that explains drainage and cover options earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Wells in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Well Cover</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window well cover customers
              are homeowners whose
              basement window wells
              fill with water during
              heavy KC rain, collect
              leaves and debris
              that block drainage,
              or have become a
              safety hazard for
              children and pets.
              The central education
              is drainage first:
              a window well cover
              reduces water intrusion
              significantly but
              is not a substitute
              for proper drainage
              at the well bottom.
              A gravel bed 6–12"
              deep at the base
              of the well allows
              water to percolate
              away — without it,
              even a covered well
              can back up and
              leak into the basement.
              If the well fills
              consistently, a
              drain tile or perforated
              pipe connected to
              the foundation drain
              system is the permanent
              fix. Cover types:
              polycarbonate (clear
              or tinted acrylic)
              lets light into
              the basement and
              is the most popular
              residential choice —
              UV-stabilized polycarbonate
              resists yellowing
              and cracking. Metal
              grate covers (galvanized
              steel or aluminum)
              are more durable
              and allow air circulation
              but do not block
              rain. Bubble/dome
              covers are contoured
              polycarbonate that
              sheds water away
              from the well center.
              Sizing: covers must
              be measured to the
              window well opening —
              standard wells are
              24"–48" wide; egress
              window wells (IRC
              requires minimum
              9 sq ft of clear
              opening, minimum
              36" wide x 36"
              deep for egress
              windows) are larger
              and require covers
              that can be opened
              from the inside
              in an emergency —
              a cover that locks
              from outside only
              is a code violation
              on an egress well.
              Anchoring: covers
              attach with masonry
              anchors to the
              foundation wall
              or sit in a channel
              bracket at the
              well rim. A window
              well cover website
              that addresses the
              drainage question,
              shows polycarbonate
              vs. metal options,
              and explains egress
              requirements earns
              the homeowner whose
              window well fills
              every spring.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing window well covers
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cover vs. drainage — whether a cover alone stops water or whether gravel and drain tile are also needed",
                  "Polycarbonate vs. metal — light transmission, durability, appearance, cost difference between types",
                  "Egress well requirements — IRC egress dimensions, why egress covers must open from inside",
                  "Sizing — how to measure a window well opening correctly, what standard and non-standard sizes look like",
                  "Installation method — how covers anchor to the foundation or well rim, whether DIY is realistic",
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
                What your window well cover website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Drainage first section — gravel bed sizing, drain tile option, why drainage determines cover effectiveness",
                  "Cover types — polycarbonate clear/tinted, dome/bubble, metal grate — photos, pros, cons for each",
                  "Egress compliance — IRC egress well dimensions, why egress covers require interior release",
                  "Sizing guide — how we measure, standard vs. custom sizing, what to do with non-standard wells",
                  "Before and after photos — filled wells restored with cover and drainage, finished appearance",
                  "Quote form with well dimensions, current drainage status, well type (standard/egress), water problem",
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
                &ldquo;Window well calls were
                always small jobs that
                turned into arguments —
                the customer bought
                a cover at the hardware
                store, it still leaked,
                and now they wanted
                someone to blame.
                The website explaining
                that drainage at the
                well bottom has to
                be right first, and
                that a cover reduces
                but does not eliminate
                water without that
                drainage, completely
                changed the conversations.
                I also stopped getting
                calls from people
                who put a locking
                cover on an egress
                well — the egress
                section on the site
                explains the code
                requirement before
                they ever call me.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Harmon, waterproofing and drainage contractor, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window well cover site with
                drainage section, cover types,
                and quote form starts at $200. A
                full site with egress compliance
                guide, sizing instructions, and
                before-and-after photos is $425–$750.
                One window well drainage and cover
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
