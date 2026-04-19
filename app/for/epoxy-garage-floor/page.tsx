import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Epoxy Garage Floor Companies in Kansas City",
  description:
    "Custom websites for epoxy garage floor coating, polyurea floor coating, and garage floor resurfacing companies in the Kansas City area. Show your surface prep process, epoxy vs. polyurea comparison, and flake systems to win garage floor contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/epoxy-garage-floor",
  },
};

export default function EpoxyGarageFloorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Epoxy Garage Floor Companies in Kansas City",
    description: "Custom websites for epoxy and polyurea garage floor coating companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garage Floor Coating Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their last epoxy coating peeled, whether polyurea is actually better, and how a diamond grind differs from acid etching for prep. A website that explains why prep determines everything earns the quote call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garage Floors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Epoxy Garage Floor</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Epoxy garage floor customers
              are homeowners with
              a bare concrete
              floor that is staining
              from oil drips and
              difficult to clean,
              a previous coating
              that has peeled
              in patches, or
              a remodel that
              includes the garage
              and demands a finished
              floor surface. The
              central education
              is surface preparation:
              the #1 reason epoxy
              coatings fail is
              inadequate surface
              prep — not the
              coating itself.
              Acid etching (muriatic
              acid wash) opens
              the concrete surface
              to approximately
              a 100 grit profile —
              adequate for water-based
              epoxy only. Diamond
              grinding (concrete
              grinder with diamond-segment
              tooling) achieves
              a 100–120 CSP (concrete
              surface profile)
              and removes all
              existing coatings,
              sealers, oil contamination,
              and surface laitance —
              required for 100%
              solids epoxy and
              polyurea coatings.
              Any existing sealer,
              curing compound,
              or oil contamination
              not removed will
              cause delamination.
              Epoxy vs. polyurea:
              100% solids epoxy
              (Rust-Oleum EpoxyShield
              Professional, ArmorPoxy)
              is a thermosetting
              polymer with 4–6
              hour pot life —
              it can be applied
              thicker, accepts
              color flake well,
              and is lower cost.
              Polyurea (Penntek,
              Florock) cures
              in 1–3 seconds,
              operates in temperatures
              down to -30°F and
              up to 140°F (important
              in KC summer garages),
              and is more flexible
              than epoxy (reduces
              cracking as the
              slab moves seasonally).
              Polyurea topcoat
              over an epoxy base
              is a common hybrid:
              epoxy for build
              and adhesion, polyurea
              for UV resistance
              and durability.
              UV yellowing: standard
              epoxy yellows under
              UV exposure within
              2–3 years — aliphatic
              polyurethane or
              polyurea topcoat
              prevents yellowing.
              Color flake broadcast:
              vinyl color chips
              broadcast into
              the wet basecoat
              add texture (anti-slip),
              hide minor concrete
              imperfections, and
              provide the speckled
              finish most customers
              are looking for.
              An epoxy garage
              floor website that
              explains why the
              DIY kit peeled,
              why diamond grinding
              matters, and the
              epoxy vs. polyurea
              comparison earns
              the homeowner who
              has tried twice
              and is now ready
              to pay for it done
              right.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before coating a garage floor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why coatings peel — what surface prep failures cause delamination, why DIY kits underperform",
                  "Acid etch vs. diamond grind — concrete surface profile difference, when each is adequate",
                  "Epoxy vs. polyurea — cure time, temperature range, UV yellowing, flexibility, cost comparison",
                  "Color flake systems — how chips are broadcast, texture and anti-slip benefit, coverage patterns",
                  "Slab moisture — how to test for vapor transmission, what moisture does to coating adhesion",
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
                What your garage floor coating website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Surface prep section — why diamond grinding is required, what acid etching misses, oil contamination removal",
                  "Epoxy vs. polyurea comparison — durability, UV resistance, temperature range, cost, hybrid system option",
                  "Color flake gallery — chip sizes, broadcast densities, color combinations on KC-area garage floors",
                  "Coating system breakdown — base coat, broadcast, topcoat — what each layer does",
                  "Moisture testing — what we check before quoting, vapor barrier options for high-moisture slabs",
                  "Quote form with garage size, current floor condition, previous coating history, color preferences",
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
                &ldquo;Half my customers had already
                tried the big box store
                kit and had it peel within
                a year. Without the website
                I had to spend 10 minutes
                explaining why that happened
                on every single call.
                Now they call already
                knowing: the kit failed
                because of prep, not
                the coating. The website
                also moved customers
                toward polyurea on their
                own — the UV and temperature
                section converted most
                people away from standard
                epoxy once they understood
                that KC summer garages
                get hot enough to soften
                it. I upgraded more
                customers to full polyurea
                systems after the site
                went up than in the
                whole year before.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Torres, garage floor coating, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garage floor site with prep explanation,
                epoxy vs. polyurea comparison, and quote
                form starts at $200. A full site with
                color flake gallery, coating system
                breakdown, and moisture testing section
                is $425–$750. One two-car garage job
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
