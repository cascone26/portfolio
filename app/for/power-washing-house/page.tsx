import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for House Power Washing Companies in Kansas City",
  description:
    "Custom websites for house washing, soft washing, and exterior cleaning companies in the Kansas City area. Show your soft wash process, safe siding and roof cleaning, and before-and-after results to win residential exterior cleaning contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/power-washing-house",
  },
};

export default function PowerWashingHousePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for House Power Washing Companies in Kansas City",
    description: "Custom websites for house power washing and soft washing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for House Washing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know if soft washing is safe for their vinyl siding, whether high pressure can damage wood or paint, and what the difference actually is between a $150 quote and a $400 quote. A website that explains your process and shows real before-and-afters earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For House Washing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">House Power Washing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              House washing customers are
              homeowners preparing for a
              paint job, listing the house
              for sale, or simply tired
              of green algae and mildew
              on their siding, driveway,
              and deck. The most important
              education for a professional
              exterior cleaning company
              is the soft wash vs. pressure
              wash distinction: high-pressure
              washing on vinyl siding
              can force water behind
              panels and cause moisture
              damage, strip paint, or
              etch wood surfaces —
              soft washing uses low
              pressure with a surfactant
              and sodium hypochlorite
              solution that kills the
              biological growth (algae,
              mold, mildew, lichen)
              at the source rather
              than just blasting it
              off. Kansas City&apos;s
              humidity and the shaded
              north sides of homes
              create significant algae
              and mildew growth,
              particularly on vinyl
              siding and roof shingles.
              Roof washing is a
              specialty service —
              the standard industry
              method (ARMA-recommended)
              is soft washing with
              sodium hypochlorite,
              not pressure washing,
              which can void shingle
              warranties. Services
              typically offered include
              house washing (siding,
              fascia, soffits), driveway
              and walkway cleaning,
              deck and fence washing,
              roof soft washing, and
              window washing as an
              add-on. Commercial
              properties — parking
              lots, building exteriors,
              warehouse floors —
              are a separate segment.
              A house washing website
              that explains soft wash
              vs. pressure wash
              clearly, addresses
              the siding safety
              question, shows
              dramatic before-and-afters,
              and makes booking easy
              earns the homeowner
              who is comparing
              multiple quote requests.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a house washing company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Soft wash vs. pressure wash — what the difference is, which is safe for vinyl, wood, and painted surfaces",
                  "Roof washing — whether pressure washing is safe for shingles, what soft washing does to kill algae",
                  "Chemicals used — sodium hypochlorite dilution, plant and landscape protection, safety for pets",
                  "What is included — house siding, driveway, deck, windows, gutters — service scope and upsells",
                  "Before and after — what the results actually look like on KC homes with algae and mildew growth",
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
                What your house washing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Soft wash explained — low-pressure application, sodium hypochlorite, why it is better than high pressure",
                  "Service menu — house siding, driveway, deck, roof, fence, gutters — what each service includes",
                  "Before and after gallery — KC homes transformed, algae and mildew removed, driveways and decks restored",
                  "Roof soft washing — ARMA-recommended method, shingle warranty compliance, algae stain removal",
                  "Chemical safety — plant protection, pet safety, how we protect landscaping during washing",
                  "Quote form with property size, services needed, siding material, roof wash interest, timeline",
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
                &ldquo;Every year after summer the
                north side of houses in KC
                turns green. Homeowners know
                they need washing but they
                worry about the pressure
                damaging their siding or
                voiding their roof warranty.
                Without a website explaining
                soft wash I had to have that
                conversation with every lead.
                The website with the soft
                wash explanation, the chemical
                safety info, and the before-and-afters
                meant customers called already
                understanding why soft wash
                costs more than the guy
                with a pressure washer from
                Home Depot. We book better
                jobs at better margins now.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Osei, exterior cleaning specialist, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A house washing site with soft wash
                explanation, before-and-afters, and
                quote form starts at $200. A full
                site with roof washing, service menu,
                and chemical safety section is $425–$750.
                One full-house soft wash job covers
                the cost. No contracts, no monthly fees.
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
