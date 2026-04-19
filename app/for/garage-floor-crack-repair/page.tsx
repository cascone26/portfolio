import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Garage Floor Crack Repair Companies in Kansas City",
  description:
    "Custom websites for garage floor crack repair, concrete garage slab crack filling, and garage floor resurfacing companies in the Kansas City area. Show your crack type diagnosis, KC freeze-thaw crack expansion pattern, and polyurea vs. epoxy filler selection to win garage floor crack repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/garage-floor-crack-repair",
  },
};

export default function GarageFloorCrackRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Garage Floor Crack Repair Companies in Kansas City",
    description: "Custom websites for garage floor crack repair and concrete slab crack filling companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garage Floor Crack Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a garage floor crack is cosmetic or structural, why cracks appear in KC garages after a few winters, and whether filling the crack will hold before they apply epoxy coating. A website that explains garage floor crack repair earns the slab service call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garage Floor Crack Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Garage Floor Crack Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Garage floor crack repair
              customers are KC homeowners
              who see cracks in their
              garage slab ranging
              from hairline surface
              cracks to 1/4-inch gaps
              with vertical displacement,
              homeowners planning
              to apply an epoxy or
              polyurea coating who
              know that coating over
              an unsealed crack will
              cause the crack to telegraph
              through the coating
              within one season, or
              homeowners whose garage
              slab has a single wide
              crack running from wall
              to wall that appeared
              after the first hard
              KC winter following
              construction. The central
              education is crack type
              diagnosis, why KC clay
              soil and freeze-thaw
              cycling drive garage
              slab cracking, and filler
              material selection by
              crack type — three things
              that determine whether
              a repair holds through
              the next KC freeze cycle
              or re-opens by spring.
              Crack types: garage
              floor cracks fall into
              three categories by
              cause and appearance —
              shrinkage cracks, settlement
              cracks, and heave cracks;
              shrinkage cracks are
              hairline to 1/8-inch
              random surface cracks
              that form as the concrete
              cures and loses moisture —
              these are cosmetic and
              stable; settlement cracks
              have one side lower
              than the other (vertical
              displacement) and indicate
              the subbase has settled
              or washed out under
              one side of the crack —
              common in KC garages
              built on clay-fill subgrade
              that has compressed
              over time; heave cracks
              run straight across
              the slab and both sides
              are at equal height
              but the crack is wide —
              caused by frost heave
              in KC winters when water
              in the subbase freezes
              and expands, lifting
              one panel of the slab;
              settlement and heave
              cracks can reopen after
              filling if the underlying
              cause is not addressed.
              KC clay and freeze-thaw:
              KC sits on expansive
              clay soil that shrinks
              and cracks when dry,
              swells when wet, and
              heaves when frozen;
              a garage slab poured
              on a subbase of clay-fill
              without adequate gravel
              drainage will move seasonally —
              wet KC springs cause
              the clay to swell under
              the slab, dry KC summers
              cause it to shrink and
              leave voids, and frozen
              KC winters cause the
              saturated clay to expand
              upward; the 52 freeze-thaw
              cycles per KC winter
              apply this stress repeatedly
              — a hairline shrinkage
              crack becomes a 1/4-inch
              freeze-thaw crack within
              three to five years
              in a KC garage with
              no crack sealing. Filler
              selection: hairline
              and 1/8-inch cracks
              without displacement
              are filled with a polyurea
              joint filler (two-part,
              rigid after cure) or
              an epoxy crack filler —
              both bond well to concrete
              and are hard enough
              to take traffic; cracks
              wider than 1/4 inch
              or with displacement
              require a flexible polyurea
              or polyurethane filler
              that can accommodate
              continued movement without
              re-cracking — a rigid
              epoxy filler in a moving
              crack will re-crack
              at the filler/concrete
              interface within one
              freeze cycle; cracks
              wider than 1/2 inch
              with significant displacement
              indicate a subbase problem
              that requires mudjacking
              or slab replacement
              before surface-level
              crack filling makes
              sense. A garage floor
              crack repair website
              that explains crack
              type diagnosis, why
              KC clay and freeze-thaw
              drive cracking, and
              the filler selection
              by crack width earns
              the homeowner who wants
              the repair done right
              before the epoxy coating.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before garage floor crack repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Crack type — shrinkage vs. settlement vs. heave, vertical displacement test, cosmetic vs. structural",
                  "KC clay soil — expansive clay movement cycle, spring swelling, summer void, winter frost heave",
                  "Filler selection — polyurea vs. epoxy, rigid vs. flexible, when each is correct by crack width",
                  "Freeze-thaw expansion — 52 cycles per KC winter, how hairline becomes 1/4-inch gap over 3-5 years",
                  "Coating prep — why filling before epoxy is required, crack telegraphing through coating",
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
                What your garage floor crack repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Crack type section — shrinkage vs. settlement vs. heave identification guide, displacement measurement",
                  "KC clay guide — soil movement cycle, subbase drainage problem in KC clay-fill construction",
                  "Filler selection section — polyurea vs. epoxy, rigid vs. flexible, width threshold chart",
                  "Freeze-thaw section — 52 cycles, crack progression rate, why sealing early saves the slab",
                  "Coating prep guide — crack repair before epoxy/polyurea coating, telegraphing failure explanation",
                  "Quote form with crack width, displacement, crack pattern (random vs. straight), coating plans, timeline",
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
                &ldquo;The filler selection section
                saved me from the most common
                callback. I used to fill
                settlement cracks with a
                rigid epoxy because that&apos;s
                what the kit at the hardware
                store came with. The crack
                re-opened at the epoxy
                edge after the first hard
                freeze. After the section
                went up explaining why
                a moving crack needs flexible
                polyurea and rigid epoxy
                re-cracks at the interface,
                customers started asking
                about the filler type before
                the job rather than calling
                back after. The KC clay
                section also helped — homeowners
                in Blue Springs whose garages
                were built on clay fill
                started understanding why
                their cracks came back
                every spring and what was
                actually happening under
                the slab.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Kowalski, concrete repair and garage floor service, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garage floor crack repair site with crack type section, filler
                selection guide, and quote form starts at $200. A full site with
                KC clay soil content, freeze-thaw guide, and coating prep section
                is $425–$750. One crack repair before coating covers the cost.
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
