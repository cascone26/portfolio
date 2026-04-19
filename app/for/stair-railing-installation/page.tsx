import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Stair Railing Installation Companies in Kansas City",
  description:
    "Custom websites for stair railing installation, deck railing, and interior stair rail companies in the Kansas City area. Show your cable railing, aluminum, wood, and wrought iron options to win stair railing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/stair-railing-installation",
  },
};

export default function StairRailingInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Stair Railing Installation Companies in Kansas City",
    description: "Custom websites for stair railing installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Stair Railing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what cable railing actually looks like on a deck, whether aluminum needs painting, and what the code requirements are for baluster spacing and rail height. A website with material photos and code basics earns the consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Stair Railings in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Stair Railing Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Stair railing customers are
              homeowners replacing
              a wobbly builder-grade
              wood rail, adding
              a railing to an
              open deck edge,
              or updating interior
              stairs with a modern
              look. The central
              education is material
              selection and code:
              IRC requires guardrails
              on any walking surface
              more than 30" above
              grade — top rail
              height 36"–42" depending
              on jurisdiction (42"
              for decks over 30"
              high in many KC
              codes), baluster
              spacing max 4" clear
              (a 4" sphere cannot
              pass through), and
              graspable handrail
              on all stairways.
              Material options:
              pressure-treated
              wood with painted
              or stained balusters
              is the lowest cost
              option but requires
              periodic maintenance.
              Powder-coated aluminum
              (Fortress, Trex,
              TimberTech) is maintenance-free,
              will not rust or
              rot, and comes in
              black, bronze, and
              white — it is the
              dominant deck railing
              material in new
              construction. Wrought
              iron (custom fabricated
              or pre-made sections)
              is traditional for
              interior stairs —
              heavier and more
              ornate, requires
              occasional repainting
              exterior but holds
              up long-term. Cable
              railing (stainless
              steel 1x19 or 7x7
              strand, 1/8" or
              3/16" diameter) runs
              horizontally between
              posts — it provides
              a modern, open look
              and unobstructed
              view. Cable must
              be tensioned to
              resist 200 lb lateral
              force (IRC R507.3)
              and tested to not
              deflect more than
              4" under that load —
              improper post spacing
              or cable tension
              is the primary code
              failure point. Glass
              panel railings (tempered
              glass infill in
              metal frame) are
              the premium option
              for pool decks and
              view-oriented applications.
              Interior vs. exterior
              material overlap:
              aluminum and cable
              are used both inside
              and outside; wrought
              iron is primarily
              interior. A stair
              railing website that
              shows all material
              options, addresses
              the cable tension
              question, and explains
              code basics earns
              the homeowner with
              a 20-year-old builder
              rail they want to
              replace.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing stair railings
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material options — wood vs. aluminum vs. cable vs. glass — maintenance, appearance, longevity comparison",
                  "Cable railing details — how horizontal cables provide safety, tension requirements, post spacing limits",
                  "Code requirements — rail height, baluster spacing, graspable handrail rules for stairs",
                  "Aluminum powder coat — whether it needs painting, color options, how it holds up outdoors in KC",
                  "Interior vs. exterior — which materials work for indoor stairs vs. deck and porch applications",
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
                What your stair railing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material guide — wood, aluminum, cable, wrought iron, glass — cost range, maintenance, best applications",
                  "Cable railing section — how cable systems work, post spacing, tension testing, modern look examples",
                  "Code basics — IRC rail height and baluster spacing explained simply, what we check on every job",
                  "Gallery — interior and exterior railings in each material on KC-area homes",
                  "Aluminum and wrought iron comparison — maintenance difference, color options, price range",
                  "Consultation form with stair type (interior/exterior/deck), material preference, linear footage, timeline",
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
                &ldquo;Cable railing is the thing
                customers see on Pinterest
                and want without understanding
                how it actually works.
                The website explaining
                the tension requirements,
                the post spacing, and
                why cable has to be
                tensioned properly
                for code stopped the
                &apos;can I just buy the
                cables and have you
                install them&apos; calls.
                I also started getting
                better deck railing
                leads once the aluminum
                powder coat section
                went up — customers
                stopped assuming they
                needed wood and asking
                me to match it. The
                material comparison
                page moved people
                toward aluminum on
                their own before they
                even called.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Kowalski, railing and deck contractor, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A stair railing site with material
                guide, code basics, and consultation
                form starts at $200. A full site
                with cable railing section, gallery,
                and interior vs. exterior comparison
                is $425–$750. One railing installation
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
