import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Exterior Door Installation Companies in Kansas City",
  description:
    "Custom websites for exterior door installation, entry door replacement, and steel vs. fiberglass door companies in the Kansas City area. Show your KC freeze-thaw weatherstrip requirements, door unit construction, and energy performance ratings to win exterior door contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/exterior-door-installation",
  },
};

export default function ExteriorDoorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Exterior Door Installation Companies in Kansas City",
    description: "Custom websites for exterior door installation and entry door replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Exterior Door Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners replacing an entry door want to know whether steel or fiberglass holds up better in KC weather, what the U-factor on an insulated door unit actually means for winter heating costs, and whether a pre-hung unit in a KC colonial with a settled frame can be shimmed level. A website that explains door construction earns the measurement call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Exterior Door Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Exterior Door Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Exterior door installation
              customers are KC homeowners
              whose original entry
              door is a hollow-core
              steel unit from
              the nineteen-seventies
              or eighties with
              a worn-out magnetic
              weatherstrip that
              lets cold air in
              along the bottom
              rail and both sides
              in a KC January;
              homeowners whose
              fiberglass door
              has delaminated
              at the bottom
              rail from water
              intrusion that
              occurred when
              the door pan flashing
              was not installed
              correctly; or homeowners
              who want to replace
              an original wood
              entry door that
              has swelled and
              no longer latches
              cleanly after
              years of KC moisture
              cycling. The central
              education is door
              unit construction —
              the difference
              between a prehung
              unit and a slab
              replacement, the
              material comparison
              between steel and
              fiberglass for
              KC conditions,
              and the weatherstrip
              system that determines
              air sealing performance.
              Prehung vs. slab:
              a prehung door
              unit includes
              the door slab,
              the frame, the
              threshold, and
              the weatherstrip —
              the entire assembly
              is removed and
              replaced as a
              unit; a slab replacement
              removes only the
              door panel and
              reuses the existing
              frame; a slab
              replacement is
              only appropriate
              when the existing
              frame is plumb,
              square, and undamaged —
              a settled KC colonial
              frame that is
              out of square
              will bind a new
              slab the same
              way it bound
              the old one;
              prehung replacement
              allows the installer
              to shim the new
              unit plumb and
              square independent
              of the rough
              opening framing,
              which is the
              correct approach
              in most KC pre-1990
              homes where framing
              has settled. Steel
              vs. fiberglass:
              steel door slabs
              are more dent-resistant
              and less expensive
              than fiberglass —
              they are the
              standard choice
              for a basic exterior
              door with no
              decorative requirements;
              steel doors in
              KC are subject
              to rust at the
              bottom rail if
              the factory primer
              is chipped and
              water contacts
              the bare metal;
              fiberglass door
              slabs do not
              rust, accept
              stain finish
              to resemble wood
              grain, and resist
              denting from
              impact — they
              are the appropriate
              choice for a
              KC homeowner
              who wants a
              wood-look door
              without the maintenance
              of solid wood;
              fiberglass doors
              are available
              in smooth and
              textured surface
              profiles — textured
              profiles accept
              gel stain for
              a convincing
              wood appearance;
              both steel and
              fiberglass units
              from Therma-Tru,
              Masonite, and
              Provia are available
              with foam-core
              insulation that
              produces a U-factor
              of 0.17–0.20,
              compared to
              a solid wood
              door at approximately
              0.40 — a meaningful
              improvement in
              heat transfer
              through the
              door panel itself.
              Weatherstrip system:
              the air sealing
              performance of
              an exterior door
              is determined
              more by the
              weatherstrip
              condition than
              by the door
              panel U-factor —
              a foam-core
              steel door with
              failed weatherstrip
              loses more energy
              to air infiltration
              than a solid
              wood door with
              an intact magnetic
              triple-seal weatherstrip;
              compression bulb
              weatherstrip on
              the head and
              jambs compresses
              when the door
              is closed —
              it should compress
              evenly along
              the full length
              without gaps
              or bypasses;
              the door sweep
              at the bottom
              rail seals against
              the threshold —
              a worn sweep
              is the most
              common air infiltration
              point on a KC
              entry door. An
              exterior door
              website that
              explains prehung
              versus slab replacement
              in settled KC
              frames, steel
              versus fiberglass
              for KC rust and
              maintenance conditions,
              and weatherstrip
              system as the
              primary air sealing
              factor earns
              the homeowner
              who wants to
              understand what
              a quality exterior
              door installation
              actually requires.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before exterior door installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Prehung vs. slab — when KC settled frames require full unit replacement vs. slab-only swap",
                  "Steel vs. fiberglass — rust risk at bottom rail, stain finish for wood look, dent resistance, U-factor comparison",
                  "Weatherstrip types — compression bulb on jamb, sweep at threshold, magnetic seal — where each is used",
                  "U-factor and energy performance — foam-core door panel vs. solid wood, what the number means for heating bills",
                  "Pan flashing — how water enters at door bottom, what proper flashing prevents, failure mode without it",
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
                What your exterior door installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Prehung section — unit components, shimming process, when slab-only replacement is appropriate vs. not",
                  "Material comparison — steel vs. fiberglass, rust risk, stain finish option, foam-core U-factor numbers",
                  "Weatherstrip section — head/jamb compression bulb, threshold sweep, magnetic seal — air sealing performance",
                  "Energy section — U-factor explained, door panel vs. glass sidelite heat loss, KC winter impact",
                  "Pan flashing section — how it's installed, what fails without it, fiberglass bottom rail delamination cause",
                  "Quote form with door size, frame condition, material preference, glass sidelite or transoms, timeline",
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
                &ldquo;The prehung versus slab
                section stopped a recurring
                problem. KC colonials from
                the eighties have settled
                frames and homeowners
                were calling expecting
                a slab swap because
                they saw a YouTube video
                about slab replacement.
                After the section went
                up explaining that a
                slab swap in an out-of-square
                KC frame just transfers
                the same binding problem
                to a new door, customers
                arrived to estimates
                already expecting a
                prehung unit and not
                questioning the price
                difference. The steel
                versus fiberglass section
                also helped — I stopped
                having customers who
                chose steel doors on
                south-facing openings
                and then called about
                surface rust two years
                later.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Brandt, entry door installation, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An exterior door site with material comparison,
                prehung vs. slab guide, and quote form starts
                at $200. A full site with weatherstrip section,
                energy performance, and pan flashing content
                is $425–$750. One entry door installation
                covers the cost. No contracts, no monthly fees.
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
