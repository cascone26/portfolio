import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Closet Organization Companies in Kansas City",
  description:
    "Custom websites for custom closet, closet organizer, and built-in storage companies in the Kansas City area. Show your reach-in and walk-in designs, material options, and accessories to win residential closet organization contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/closet-organization-systems",
  },
};

export default function ClosetOrganizationSystemsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Closet Organization Companies in Kansas City",
    description: "Custom websites for closet organization and custom closet companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Closet Organization Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners comparing closet systems want to know the real difference between wire shelving, laminate-faced panels, and a fully custom build — and whether the price is justified for their space. A website with real before-and-afters and material comparisons earns the design consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Closet Organization in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Closet Organization Systems</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Closet organization customers are
              homeowners who have outgrown
              a builder-grade single rod and
              shelf and want a system that
              actually uses the full cubic
              footage of the space. The
              most common decision point
              is material tier: wire
              shelving (the most affordable,
              easy to adjust, poor for
              folded items that sag through
              the grid) versus laminate-faced
              panels (the standard for
              custom closet companies —
              furniture-grade particleboard
              with a melamine or thermally
              fused laminate face in white,
              grey, espresso, or wood-look
              finishes) versus solid wood
              or plywood construction
              (premium, heavier, better
              for built-in looks that match
              cabinetry). National franchise
              names — California Closets,
              Closets by Design — operate
              in KC and set customer
              expectations for price and
              finish quality. IKEA PAX
              is a self-install alternative
              customers compare against.
              The system configuration
              matters as much as the
              material: reach-in closets
              (shallow, under 24 inches
              deep) benefit from double-hang
              sections for short items,
              full-height sections for
              dresses and coats, and
              pull-out drawers or
              baskets for folded items.
              Walk-in closets allow
              island or peninsula
              features and dedicated
              accessory storage. The
              accessories category
              is where customization
              earns its value: pull-out
              belt and tie racks,
              velvet-lined jewelry
              drawers, pull-out hampers,
              shoe cubbies and slanted
              shoe shelves, valet rods,
              and LED lighting transform
              a functional closet into
              a finished room. A closet
              organization website
              that shows real KC
              closet transformations,
              explains the material
              tiers honestly, and
              makes it easy to
              book a free design
              consultation earns
              the homeowner who
              is ready to stop
              living with the
              builder shelf.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing a closet organization company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material options — wire shelving vs. laminate panels vs. solid wood — durability, adjustability, aesthetics",
                  "Reach-in vs. walk-in design — how to maximize every inch, double-hang zones, drawer placement",
                  "Accessories — pull-out drawers, jewelry inserts, belt racks, hampers, valet rods, LED lighting options",
                  "Brand comparison — California Closets, Closets by Design, IKEA PAX — what custom offers vs. franchise",
                  "Before and after — what a cluttered builder-grade closet looks like transformed into a finished system",
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
                What your closet organization website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material comparison — wire shelving, laminate panels, solid wood — cost, durability, finish options",
                  "Closet gallery — reach-in transformations, walk-in designs, master closets, pantries, laundry rooms",
                  "Configuration guide — double-hang zones, drawer placement, shoe storage, island options for walk-ins",
                  "Accessories showcase — pull-out drawers, jewelry inserts, LED lighting, valet rods, hamper pullouts",
                  "Design process — free in-home measurement, 3D design rendering, installation timeline, warranty",
                  "Consultation form with closet type, current setup, dimensions, material preference, timeline",
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
                &ldquo;Closet customers always ask
                why they should pay more
                than the IKEA option. They
                need to see the material
                quality, the accessories,
                and what a finished
                walk-in actually looks
                like before they understand
                the difference. Without
                a website showing real
                closet transformations
                and explaining our laminate
                panel quality, I was
                losing leads to DIY
                before the conversation
                started. The site with
                our gallery, material
                comparison, and the
                free design consultation
                offer meant customers
                came in already convinced
                they wanted custom.
                Consultations convert
                at a much higher rate now.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Nwosu, closet design specialist, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A closet organization site with
                gallery, material comparison, and
                consultation form starts at $225.
                A full site with configuration
                guide, accessories showcase, and
                design process walkthrough is
                $425–$850. One master closet
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
