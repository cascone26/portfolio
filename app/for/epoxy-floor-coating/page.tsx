import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Epoxy Floor Coating Companies in Kansas City",
  description:
    "Custom websites for epoxy floor coating, garage floor coating, and polyaspartic flooring companies in the Kansas City area. Show your color flake systems, polyaspartic vs. epoxy comparison, and garage transformations to win residential and commercial floor coating contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/epoxy-floor-coating",
  },
};

export default function EpoxyFloorCoatingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Epoxy Floor Coating Companies in Kansas City",
    description: "Custom websites for epoxy floor coating companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Epoxy Floor Coating Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners comparing garage floor coatings want to know the real difference between epoxy and polyaspartic, why big-box DIY kits fail, and what color flake systems look like in real garages. A website with a color gallery and honest comparison earns the quote call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Epoxy Floors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Epoxy Floor Coating</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Epoxy floor coating customers are
              primarily homeowners transforming
              a garage into a finished functional
              space — a clean, durable surface
              that handles car tires, tools,
              and KC temperature swings without
              peeling or chipping. Many arrive
              having already tried a big-box
              store kit that peeled within
              a year, which creates both
              frustration and an educated
              buyer who wants to understand
              why professional coatings
              perform differently. The
              chemistry answer is important:
              consumer epoxy kits are
              water-based with low solids
              content and minimal surface
              preparation — professional
              installations use 100%
              solids epoxy or polyaspartic
              coatings with diamond grinding
              of the concrete surface
              to create a mechanical
              bond that does not peel.
              Polyaspartic coatings have
              largely replaced traditional
              epoxy as the premium
              professional standard —
              they cure faster (some
              systems allow return to
              use same day), handle
              UV exposure without
              yellowing, and are more
              flexible than epoxy
              which makes them more
              resistant to KC&apos;s
              temperature-change-induced
              concrete movement. The
              color flake system is
              what most customers
              want to see: vinyl
              color chips broadcast
              across the base coat
              create a terrazzo-like
              appearance with hundreds
              of color combinations.
              Metallic epoxy floors
              are a premium aesthetic
              option with a poured
              pigment-swirl look.
              Commercial applications —
              warehouses, auto shops,
              retail floors —
              are a different segment
              with different thickness
              and durability requirements.
              A floor coating website
              with a color flake
              gallery, an honest
              epoxy vs. polyaspartic
              comparison, and
              garage transformation
              photos earns the
              homeowner who is
              ready to do this
              correctly this time.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing a floor coating company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Epoxy vs. polyaspartic — cure time, UV resistance, flexibility, why polyaspartic is the current standard",
                  "Why DIY kits fail — water-based low-solids content, inadequate surface prep, peeling within a year",
                  "Color options — flake colors and sizes, metallic swirl, solid color, how to choose what works in a garage",
                  "Surface preparation — diamond grinding process, why it matters for adhesion, moisture testing",
                  "Commercial vs. residential — thickness differences, slip resistance, chemical resistance for shop use",
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
                What your epoxy floor coating website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Color flake gallery — full chip palette, popular color combinations on real KC garage floors",
                  "Garage transformations — before and after photos — bare, stained, or DIY-failed floors to finished",
                  "Epoxy vs. polyaspartic — why we use polyaspartic, cure time, UV stability, KC temperature performance",
                  "Why DIY kits fail — honest explanation of chemistry difference, surface prep requirement",
                  "Commercial coatings — warehouse floors, auto shops, retail — higher build thickness, chemical resistance",
                  "Quote form with garage size, current floor condition, previous coating, color preference, timeline",
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
                &ldquo;Most of my customers had
                already tried the Rust-Oleum
                kit from Home Depot and watched
                it peel in six months. They
                came in frustrated and skeptical.
                The website with our explanation
                of why DIY kits fail, our
                surface prep process, and
                our gallery of real garage
                floors was what converted
                skeptical leads into booked
                jobs. They could see the
                difference between what
                they got before and what
                a professional polyaspartic
                floor actually looks like.
                It made the pricing easy
                to justify.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Reyes, floor coating specialist, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An epoxy floor site with color gallery,
                garage transformations, and quote
                form starts at $200. A full site
                with epoxy vs. polyaspartic guide,
                DIY comparison, and commercial
                section is $425–$750. One two-car
                garage coating covers the cost.
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
