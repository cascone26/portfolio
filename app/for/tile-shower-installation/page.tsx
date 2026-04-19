import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tile Shower Installation Companies in Kansas City",
  description:
    "Custom websites for tile shower installation, custom tile shower, and bathroom tile companies in the Kansas City area. Show your waterproofing systems, tile layouts, and finished showers to win tile shower installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tile-shower-installation",
  },
};

export default function TileShowerInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tile Shower Installation Companies in Kansas City",
    description: "Custom websites for tile shower installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tile Shower Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners replacing a fiberglass insert want to understand why a properly waterproofed tile shower outlasts an insert and what the substrate system is — not just the tile they see on top. A website that shows the layers underneath earns the consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tile Showers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tile Shower Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tile shower customers are
              homeowners replacing
              a failing fiberglass
              insert, a cracked
              acrylic surround,
              or an outdated builder-grade
              shower tile with
              a custom tile shower
              that looks the way
              they want their
              bathroom to look.
              The most important
              education is waterproofing:
              a failed shower is
              not a tile problem —
              it is a waterproofing
              failure behind the
              tile. Traditional
              shower construction
              used a mortar bed
              with a PVC liner —
              effective but labor-intensive.
              Modern best practice
              is sheet membrane
              or liquid-applied
              membrane waterproofing
              (Schluter Kerdi,
              RedGard, Laticrete
              Hydro Ban) applied
              over cement board
              or directly to
              the framing (in
              the case of Schluter
              systems). The Schluter
              KERDI-BOARD system
              replaces the cement
              board entirely with
              foam panel that
              is also the waterproofing
              layer — it is thinner,
              lighter, and faster
              to install. Pre-sloped
              foam shower pans
              (Schluter Kerdi-Shower,
              Wedi) eliminate
              mortar-bed floor
              construction. Tile
              selection for showers:
              floor tile must
              have a coefficient
              of friction (COF)
              rating of 0.42
              or higher when
              wet (ANSI A137.1) —
              many large-format
              tiles fail this
              for shower floors
              even if fine for
              walls. Grout selection:
              epoxy grout (Laticrete
              SpectraLOCK) is
              stain-proof and
              maintenance-free
              but harder to install;
              standard cement
              grout (sanded for
              joints over 1/8",
              unsanded for smaller)
              is the norm but
              requires sealing
              and periodic resealing.
              Linear drains have
              replaced traditional
              center drains in
              many custom showers —
              they allow large-format
              tile on the floor
              without cuts and
              slope the entire
              floor in one direction.
              A tile shower website
              that explains the
              waterproofing system,
              shows tile layout
              options, and addresses
              grout maintenance
              earns the homeowner
              replacing their
              cracked fiberglass
              insert.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a custom tile shower
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Waterproofing systems — Schluter Kerdi, RedGard, Hydro Ban — what goes behind the tile that makes it last",
                  "Tile selection — floor COF requirement for wet areas, large format on shower floors, layout options",
                  "Grout types — epoxy vs. cement grout, stain resistance, sealing requirements, maintenance difference",
                  "Linear drains — what they are, why they work with large format tile, cost vs. center drain",
                  "Why inserts fail — what causes fiberglass and acrylic surround failures, how tile done right avoids them",
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
                What your tile shower website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Waterproofing section — what system we use, why it matters, cross-section diagram of layers",
                  "Tile layout gallery — large format, subway, mosaic floor, niche options — photos in finished showers",
                  "Grout guide — epoxy vs. cement grout, what we recommend for different shower applications",
                  "Linear drain options — what they look like, when we recommend them, large format tile compatibility",
                  "Process walkthrough — demo, substrate, waterproofing, pan, tile set, grout, seal — what each step is",
                  "Consultation form with shower size, current material, desired tile style, drain type, timeline",
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
                &ldquo;Customers replacing a
                fiberglass insert assume
                the tile is the important
                decision — they pick
                a tile they like and
                think the job is
                basically done. The
                website explaining
                that the waterproofing
                system behind the
                tile is what determines
                whether the shower
                lasts twenty years
                or develops a water
                damage problem in
                five changed how
                my customers evaluated
                bids. They stopped
                comparing my price
                to the cheapest
                quote and started
                asking about the
                waterproofing system.
                My close rate on
                consultations went
                up significantly
                after the site went
                live.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — O. Petrov, tile installer, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tile shower site with waterproofing
                overview, tile gallery, and consultation
                form starts at $225. A full site with
                grout guide, linear drain section,
                and process walkthrough is $425–$850.
                One custom tile shower covers the
                cost. No contracts, no monthly fees.
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
