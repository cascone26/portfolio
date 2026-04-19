import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Kitchen Circuit Upgrade Companies in Kansas City",
  description:
    "Custom websites for kitchen circuit upgrade, small appliance circuit addition, and kitchen electrical update companies in the Kansas City area. Show your KC two-circuit small appliance requirement, GFCI counter outlet rules, and range circuit sizing to win kitchen electrical contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/kitchen-circuit-upgrade",
  },
};

export default function KitchenCircuitUpgradePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Kitchen Circuit Upgrade Companies in Kansas City",
    description: "Custom websites for kitchen circuit upgrade and small appliance circuit addition companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Kitchen Circuit Upgrade Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their kitchen keeps tripping breakers when they run the microwave and coffee maker at the same time, what the KC code requires for counter outlets, and whether adding a kitchen island requires new circuits. A website that explains small appliance circuit requirements earns the upgrade call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Kitchen Circuit Upgrades in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Kitchen Circuit Upgrade</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Kitchen circuit upgrade
              customers are KC homeowners
              whose kitchen trips
              breakers regularly
              when multiple small
              appliances run simultaneously —
              a microwave, a toaster,
              a coffee maker, and
              a blender on the same
              circuit will exceed
              a fifteen-or-twenty-amp
              breaker when more
              than two operate
              at once; or homeowners
              doing a kitchen renovation
              who learn during
              permitting that their
              pre-1980 KC home
              kitchen does not
              meet current NEC
              requirements and
              requires circuit upgrades
              as part of the remodel;
              or homeowners adding
              a kitchen island
              and needing outlets
              at the island that
              require a new circuit
              because the existing
              counter circuits
              are already fully
              loaded. The central
              education is the
              NEC small appliance
              circuit requirement:
              the NEC requires
              a minimum of two
              dedicated twenty-amp
              small appliance circuits
              for kitchen counter
              outlets — these two
              circuits serve only
              the counter receptacles
              and may not serve
              the refrigerator,
              dishwasher, microwave,
              range, or disposal;
              each of these fixed
              appliances requires
              its own dedicated
              circuit; a kitchen
              in a pre-1980s KC
              home with a single
              fifteen-amp circuit
              serving all counter
              outlets plus the
              refrigerator is
              not only a nuisance —
              it is a fire hazard
              because the circuit
              is chronically overloaded.
              GFCI counter requirement:
              all counter outlets
              within six feet
              of a kitchen sink
              must be GFCI-protected —
              this includes all
              counter receptacles
              in a standard kitchen
              layout because virtually
              every outlet is
              within six feet
              of at least one
              sink; the exception
              is outlets that
              are not accessible
              from the countertop
              (behind appliances);
              a kitchen without
              GFCI protection
              on counter outlets
              fails every KC
              home inspection
              and permit inspection
              for new work. Island
              circuit: a kitchen
              island with a countertop
              requires at least
              two outlets on
              the island and
              those outlets must
              be GFCI-protected;
              the island outlets
              may share one of
              the small appliance
              circuits if the
              circuit capacity
              allows — but in
              practice most KC
              kitchen renovations
              with an island
              add a third twenty-amp
              small appliance
              circuit to avoid
              loading the existing
              two circuits further.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before kitchen circuit upgrades
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Small appliance circuits — NEC two-circuit 20-amp requirement, why single circuit causes tripping and fire risk",
                  "Dedicated appliance circuits — refrigerator, microwave, dishwasher, disposal all require separate circuits",
                  "GFCI counter requirement — 6-foot sink rule, all counter outlets in KC kitchens, permit inspection failure",
                  "Island circuits — minimum two outlets, GFCI protection, whether third small appliance circuit is needed",
                  "Permit requirement — KC electrical permit for kitchen circuit work, inspection during renovation",
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
                What your kitchen circuit upgrade website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Small appliance circuit section — NEC two-circuit rule, 20-amp dedicated countertop circuits, overload fire risk",
                  "Dedicated appliance section — refrigerator circuit, microwave circuit, dishwasher and disposal wiring",
                  "GFCI section — counter outlet protection requirement, inspection failure without it, upgrade for home sale",
                  "Island section — outlet count minimum, GFCI protection, circuit capacity for added island load",
                  "Pre-1980 KC home section — common deficiencies, what brings kitchen to code, renovation trigger requirements",
                  "Quote form with home age, current circuit count, tripping frequency, renovation planned, island or not",
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
                &ldquo;The small appliance
                circuit section converts
                homeowners who think
                their breaker trips because
                the breaker is bad. In
                KC homes built before
                1970, the entire kitchen
                is on one fifteen-amp
                circuit. Homeowners buy
                a new microwave thinking
                the old one was drawing
                too much power, and nothing
                changes. After the section
                explaining that a single
                fifteen-amp circuit shared
                between all counter appliances
                is the root cause —
                not the appliances —
                they understand why two
                dedicated twenty-amp circuits
                are the fix. The GFCI
                section also prevents
                the inspection failure
                surprise for KC home
                sellers who list a pre-1980
                home without updating
                the kitchen circuits and
                get a buyer who requires
                code compliance as a
                condition of sale.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Osgood, residential electrical, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A kitchen circuit upgrade site with small appliance circuit
                section, GFCI counter requirement, and quote form starts at
                $200. A full site with dedicated appliance circuit guide,
                island wiring section, and pre-1980 KC home upgrade guide
                is $425–$750. One two-circuit kitchen upgrade covers the
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
