import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pressure Washing Companies in Kansas City",
  description:
    "Custom websites for pressure washing, driveway cleaning, house washing, and soft washing companies in the Kansas City area. Show your PSI specifications, surface treatment differences, and soft wash process to win pressure washing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pressure-washing-driveway",
  },
};

export default function PressureWashingDrivewayPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pressure Washing Companies in Kansas City",
    description: "Custom websites for pressure washing and soft washing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pressure Washing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their driveway needs pressure washing or soft washing, what PSI is safe on concrete vs. siding, and whether the black streaks on the roof are mold that can be removed. A website that explains surface-specific treatment earns the quote call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pressure Washing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pressure Washing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pressure washing customers
              are homeowners whose
              driveway has turned
              grey-green with algae
              and embedded tire
              marks, whose house
              siding has black
              streaks from mold
              and oxidation, or
              who are preparing
              a surface for paint,
              stain, or sealer
              and need it clean
              to manufacturer
              spec. The central
              education is surface-appropriate
              pressure: concrete
              driveways and sidewalks
              handle 3,000–4,000
              PSI with a rotating
              turbo nozzle — this
              cuts through embedded
              oil and algae without
              surface damage. Vinyl
              siding, stucco, and
              painted wood require
              soft washing: low
              pressure (under 500
              PSI) combined with
              a sodium hypochlorite
              solution (typically
              2–3% concentration)
              that kills the biological
              source of the staining
              rather than just
              blasting it off.
              High pressure on
              vinyl siding drives
              water behind the
              panels and into
              the wall cavity —
              the leading cause
              of mold inside exterior
              walls after a DIY
              pressure washing
              job. Roof soft washing:
              black streaks on
              asphalt shingles
              are Gloeocapsa magma,
              a cyanobacteria —
              a diluted bleach
              solution applied
              at low pressure
              kills it without
              voiding the shingle
              warranty (manufacturer
              warranty language
              often prohibits
              high-pressure roof
              washing). Deck and
              fence washing: treated
              wood and composite
              decking use 500–1,200
              PSI depending on
              the wood density —
              cedar and pine are
              soft and strip
              easily at high pressure.
              Concrete sealing:
              a freshly cleaned
              and dried driveway
              is the ideal time
              to apply a penetrating
              concrete sealer
              (Siloxa-Tek 8500,
              RadonSeal) — it
              stops future oil
              absorption and reduces
              freeze-thaw spalling.
              A pressure washing
              website that explains
              soft washing vs.
              high pressure, surface
              limits, and the
              roof algae question
              earns the homeowner
              who searched after
              noticing the black
              stripes running
              down every gable.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a pressure washing company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Soft washing vs. pressure washing — what surface types require which method, why siding needs low pressure",
                  "Roof washing — what the black streaks are, whether they can be safely removed, warranty implications",
                  "Concrete cleaning — PSI for driveways, how oil stains and algae respond, concrete sealing after cleaning",
                  "Deck and fence — safe PSI range for treated wood, cedar, composite, and painted surfaces",
                  "DIY risks — what happens when pressure washing is done wrong on siding or softer surfaces",
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
                What your pressure washing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Surface guide — concrete, siding, roof, deck, fence — PSI range and method for each",
                  "Soft washing section — what it is, why it kills mold at the source, when we use it instead of pressure",
                  "Roof cleaning — what Gloeocapsa magma is, how soft wash removes it, warranty-safe process",
                  "Concrete sealing option — what sealing after cleaning prevents, product types, how long it lasts",
                  "Before and after photos — driveways, siding, roofs, and decks in KC before and after treatment",
                  "Quote form with surface types, approximate square footage, last cleaned date, specific concerns",
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
                &ldquo;Every homeowner who called
                about siding had already
                tried DIY with a rented
                machine and made it
                worse, or was afraid
                to try because they
                heard it ruins siding.
                The soft washing explanation
                on the website converted
                both groups — the
                ones who damaged their
                siding understood why
                it happened, and the
                ones who were afraid
                understood why our
                method was safe. The
                roof section generated
                a whole new service
                line I was barely
                advertising before —
                customers who searched
                black streaks on roof
                started finding us
                and calling for just
                that.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Fitzgerald, exterior cleaning, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pressure washing site with surface
                guide, soft washing explanation, and
                quote form starts at $200. A full site
                with roof cleaning section, concrete
                sealing option, and before-and-after
                gallery is $425–$750. One driveway
                and house wash covers the cost. No
                contracts, no monthly fees.
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
