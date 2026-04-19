import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tile and Grout Cleaning Companies in Kansas City",
  description:
    "Custom websites for tile and grout cleaning, sealing, and restoration companies in the Kansas City area. Show your hot water extraction process, grout sealing, and color restoration to win residential and commercial tile cleaning contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tile-and-grout-cleaning",
  },
};

export default function TileAndGroutCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tile and Grout Cleaning Companies in Kansas City",
    description: "Custom websites for tile and grout cleaning companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tile and Grout Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with tile floors, showers, or backsplashes know grout darkens over time and mopping does not touch it. A website with before-and-after photos, a sealing explanation, and clear service areas earns the cleaning call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tile &amp; Grout Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tile &amp; Grout Cleaning</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tile and grout cleaning customers
              have typically tried everything
              short of professional service —
              steam mops, bleach pens, electric
              scrubbers — and found that
              unsealed grout absorbs dirt,
              soap scum, and mold deep into
              the porous surface that household
              tools cannot reach. The primary
              questions they ask when researching
              a professional are: what method
              do you use — hot water extraction
              with a rotary jet head reaches
              into grout pores in a way that
              mopping cannot, what cleaning
              agents are used and are they
              safe for natural stone like
              travertine or marble that cannot
              take acidic cleaners, whether
              grout sealing is included or
              an add-on, and whether you can
              restore or recolor grout that
              has permanent staining. Shower
              tile is a common specialty —
              soap scum, mold, and hard water
              deposits build up on vertical
              surfaces and in grout joints
              and a professional deep clean
              often makes a shower look
              new without regrouting. Commercial
              customers — restaurants, hotels,
              gyms — have high-traffic tile
              floors that need regular
              maintenance cleaning on a
              schedule. Color sealing or
              grout staining is a service
              that dramatically changes a
              floor appearance and is a
              strong upsell that customers
              who have been disappointed
              by regular cleaning respond
              to. A tile and grout website
              that shows dramatic before-and-after
              photos, explains the hot
              water extraction process, and
              covers grout sealing and
              color restoration earns
              the homeowner who has
              given up on mopping.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a tile and grout cleaner
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cleaning method — hot water extraction vs. scrubbing — what actually gets into grout pores",
                  "Natural stone safety — travertine, marble, slate — pH-neutral products, no acid etching",
                  "Grout sealing — whether it is included, types of sealer, how long it lasts, what it prevents",
                  "Shower tile — soap scum, mold, hard water removal — vertical surface process, caulk inspection",
                  "Color restoration — grout staining or colorsealing — when it is needed vs. standard cleaning",
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
                What your tile and grout cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cleaning process — rotary hot water extraction, pre-treatment, high-pH degreasers, rinse and extract",
                  "Before and after gallery — floors, showers, backsplashes — grout color transformation photos",
                  "Natural stone — travertine, marble, saltillo — safe products, honing and polishing if offered",
                  "Grout sealing — penetrating sealer vs. color sealer, coverage, longevity, reapplication schedule",
                  "Commercial service — restaurants, hotels, gyms — scheduled maintenance, high-traffic floor programs",
                  "Quote form with tile type, surface area, last professional cleaning, specific problem areas, sealing interest",
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
                &ldquo;Tile cleaning sells itself
                with before-and-afters but I
                had no way to show them without
                a website. Customers would call,
                ask if I could make their grout
                lighter, and I would try to
                describe what the machine does
                over the phone. The new site
                with our photo gallery — real
                Kansas City kitchens and showers
                where the grout went from dark
                gray back to its original color —
                brought in customers who already
                knew what to expect and were
                ready to book. Color sealing
                upsells went from rarely to
                almost every job because
                customers saw the gallery
                and asked for it before
                I even brought it up.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Okonkwo, tile and grout cleaning, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tile cleaning site with gallery,
                process, and quote form starts
                at $200. A full site with natural
                stone section, grout sealing guide,
                and commercial program is $425–$850.
                One whole-house tile job covers
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
