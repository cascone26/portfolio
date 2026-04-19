import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Skylight Installation Companies in Kansas City",
  description:
    "Custom websites for skylight installation, solar tube, and roof window companies in the Kansas City area. Show your Velux and Fakro options, flashing systems, and natural light transformations to win skylight installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/skylight-installation",
  },
};

export default function SkylightInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Skylight Installation Companies in Kansas City",
    description: "Custom websites for skylight installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Skylight Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners are afraid of skylights leaking — the reputation of older skylight installations precedes the modern products. A website that explains integrated flashing systems, low-e glazing, and the difference between a fixed and vented unit earns the consultation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Skylights in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Skylight Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Skylight customers are homeowners
              wanting to bring natural
              light into a dark
              interior space —
              a kitchen, bathroom,
              hallway, or living
              area where a window
              is not possible —
              or replacing a leaking
              older skylight with
              a modern sealed unit.
              The #1 objection is
              leaking: older bubble
              skylights and poorly
              flashed units created
              a generation of
              homeowners who associate
              skylights with water
              damage. Modern systems
              address this through
              integrated flashing
              kits — Velux and
              Fakro both manufacture
              factory-engineered
              flashing systems specific
              to each roof type
              (shingle, tile, metal)
              that eliminate the
              field-fabricated step
              flashing that failed
              in older installations.
              Glazing options: single-pane
              (avoid), dual-pane
              with low-e coating
              (standard — reduces
              heat gain and UV
              transmission), and
              triple-pane (maximum
              performance for north-facing
              applications). Fixed
              vs. venting: fixed
              skylights admit light
              only; venting (manual
              or electric with remote)
              also provides passive
              ventilation and is
              the right choice
              for bathrooms, kitchens,
              and any application
              where moisture or
              heat buildup is
              a concern. Solar
              tube skylights (Solatube,
              Velux Sun Tunnel)
              use a small roof
              penetration and
              a reflective tube
              to deliver daylight
              to spaces where
              a full skylight
              cannot be framed —
              closets, interior
              bathrooms, hallways.
              Shaft type matters:
              a straight shaft
              delivers more light;
              a flexible shaft
              navigates framing.
              A skylight website
              that addresses the
              leak concern directly,
              explains integrated
              flashing, and shows
              fixed vs. venting
              options earns the
              homeowner who has
              wanted a skylight
              for years but has
              been afraid to
              pull the trigger.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a skylight
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Leak risk — why old skylights leaked, how modern integrated flashing systems prevent water intrusion",
                  "Fixed vs. venting — what venting skylights offer, when they are needed, electric vs. manual operation",
                  "Glazing options — low-e dual pane standard, what solar heat gain coefficient means for KC summers",
                  "Solar tubes — what Solatube and Sun Tunnel are, where they work when a full skylight cannot be framed",
                  "Velux vs. Fakro — the two major brands, warranty comparison, what to look for in a quality unit",
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
                What your skylight installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Leak prevention — how integrated flashing works, why modern systems are different from older installations",
                  "Product options — fixed, manual venting, electric venting, solar tubes — photos and use cases for each",
                  "Glazing guide — low-e dual pane standard, solar heat gain for KC climate, condensation control",
                  "Solar tube section — where they work, straight vs. flexible shaft, how much light they deliver",
                  "Installation process — framing, curb or deck-mount, flashing, interior shaft, drywall finishing",
                  "Consultation form with room, roof type, access from above, size interest, venting preference",
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
                &ldquo;The first thing every
                customer says is that
                their neighbor had a
                skylight that leaked
                and they are worried
                about the same thing.
                Before I had a website
                I was walking through
                integrated flashing
                on every single call
                before we could
                even talk about
                the job. The site
                with the flashing
                system explanation,
                the before-and-after
                light photos, and
                the fixed versus
                venting comparison
                meant that customers
                called me having
                already decided
                the leak fear was
                not a dealbreaker.
                My close rate
                on consultations
                went from about
                half to nearly
                all of them.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — H. Callahan, skylight installer, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A skylight site with product options,
                flashing system overview, and
                consultation form starts at $200. A
                full site with solar tube section,
                glazing guide, and installation
                process is $425–$750. One skylight
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
