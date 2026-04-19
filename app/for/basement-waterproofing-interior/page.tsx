import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Basement Waterproofing Companies in Kansas City",
  description:
    "Custom websites for interior basement waterproofing, French drain systems, sump pump installation, and wall panel systems in the Kansas City area. Show your drainage systems, warranty terms, and dry basement results to win waterproofing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/basement-waterproofing-interior",
  },
};

export default function BasementWaterproofingInteriorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Basement Waterproofing Companies in Kansas City",
    description: "Custom websites for interior basement waterproofing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Basement Waterproofing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to understand why interior waterproofing works when it does not stop water from coming in, how a drainage system differs from exterior excavation, and what a transferable warranty covers. A website that explains the system earns the inspection call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Basement Waterproofing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Basement Waterproofing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Interior basement waterproofing
              customers are homeowners
              with water intrusion
              through basement walls
              or floor during heavy
              rain, chronic dampness
              and efflorescence
              (white mineral deposits)
              on foundation walls,
              or a wet basement
              that makes the space
              unusable and threatens
              the foundation. The
              most important conceptual
              hurdle is how interior
              waterproofing works:
              it does not stop
              water from entering
              the foundation wall —
              it intercepts the
              water after it enters
              and redirects it
              to a sump system
              before it can spread
              across the floor.
              A perimeter drainage
              channel is cut into
              the concrete floor
              at the base of the
              wall, a perforated
              drainage pipe (or
              proprietary channel
              system like WaterGuard
              by Basement Systems,
              B-Dry, or TerraGuard)
              is installed, the
              trench is filled
              with gravel, and
              a sump pit with
              a primary pump
              and a battery-backup
              pump handles the
              water. Wall panel
              systems (ICS WallGuard,
              DryTrak) attach
              to the foundation
              wall above the
              drain channel —
              they allow water
              seeping through
              the block or poured
              wall to drain behind
              the panel directly
              into the floor channel
              without ever reaching
              the floor. Exterior
              waterproofing (full
              excavation, membrane
              application, and
              exterior drain tile)
              is more thorough
              but costs three
              to five times more
              and is usually not
              necessary unless
              there is structural
              failure or the exterior
              drain tile has collapsed.
              Sump pump selection
              matters: cast iron
              vs. plastic housing,
              horsepower rating
              for the water volume,
              battery backup sizing
              for power outage
              operation. Transferable
              lifetime warranties
              are a key selling
              point in KC where
              home sales are
              common — buyers
              value a dry basement
              with a warranty
              they inherit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing interior waterproofing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "How interior waterproofing works — intercepting water vs. stopping it, why it is still effective",
                  "Interior vs. exterior — cost comparison, when exterior excavation is actually necessary",
                  "Drainage systems — WaterGuard vs. B-Dry vs. generic drain channel — what each system includes",
                  "Sump pump — primary pump sizing, battery backup for power outages, dual-pump systems",
                  "Transferable warranty — what a lifetime transferable warranty covers, how it transfers on home sale",
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
                What your waterproofing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "System diagram — how the perimeter drain, wall panels, and sump work together to keep the basement dry",
                  "Interior vs. exterior section — honest comparison, when we recommend each, typical cost difference",
                  "Drainage products — the systems we install, how each works, what problem each is designed to solve",
                  "Sump pump guide — primary pump sizing, battery backup importance, what we install and why",
                  "Warranty terms — what our transferable lifetime warranty covers, how it works on home sale",
                  "Inspection form with basement type, intrusion location, frequency, sump status, finishing plans",
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
                &ldquo;The hardest part of selling
                waterproofing is that
                customers do not understand
                how interior drainage
                works — they think
                if water is still
                coming through the
                wall, the system
                is not working. The
                website explaining
                that we intercept
                and redirect rather
                than seal the wall
                changed the inspection
                call completely.
                Customers showed
                up understanding
                the system conceptually.
                The transferable warranty
                section also became
                a major selling point —
                three buyers have
                cited our warranty
                as a reason they
                chose the house
                they bought.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Whitfield, waterproofing contractor, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A waterproofing site with system
                diagram, sump pump guide, and
                inspection form starts at $225. A
                full site with interior vs. exterior
                comparison, drainage product section,
                and warranty terms is $425–$850. One
                perimeter drainage installation
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
