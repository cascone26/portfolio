import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Bathroom Faucet Cartridge Replacement Companies in Kansas City",
  description:
    "Custom websites for bathroom faucet cartridge replacement, dripping faucet repair, and faucet valve companies in the Kansas City area. Show your cartridge identification by brand, hard water scale removal, and single vs. double handle diagnosis to win faucet repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/bathroom-faucet-cartridge-replacement",
  },
};

export default function BathroomFaucetCartridgeReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Bathroom Faucet Cartridge Replacement Companies in Kansas City",
    description: "Custom websites for bathroom faucet cartridge replacement and dripping faucet repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Bathroom Faucet Cartridge Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a dripping faucet needs a new cartridge or a new faucet, how the cartridge is identified by brand, and why KC hard water causes cartridges to fail faster than the manufacturer estimates. A website that explains cartridge replacement earns the repair call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Bathroom Faucet Cartridge Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Bathroom Faucet Cartridge Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Bathroom faucet cartridge
              replacement customers
              are KC homeowners with
              a single-handle faucet
              that drips from the
              spout when the handle
              is closed, homeowners
              whose faucet handle
              has become difficult
              to turn or requires
              excessive force to
              stop the flow, or
              homeowners who replaced
              the cartridge themselves
              once, it worked for
              a year, and it is dripping
              again — often because
              KC&apos;s hard water
              deposits calcium on
              the cartridge seat
              and accelerates wear.
              The central education
              is cartridge identification
              by brand and handle
              type, hard water scale
              removal during replacement,
              and single vs. double
              handle diagnosis — three
              things that determine
              whether the repair
              lasts or needs to be
              done again next year.
              Cartridge identification:
              faucet manufacturers
              use proprietary cartridges —
              a Moen single-handle
              uses a Moen 1225 or
              1222 series cartridge,
              a Delta uses a Delta
              RP19804, a Kohler uses
              a Kohler GP30413; the
              cartridge model is
              determined by the faucet
              series, not just the
              brand; the faucet series
              is typically stamped
              on the faucet body
              under the base plate
              or on the cartridge
              retainer clip itself;
              bringing the old cartridge
              to the hardware store
              is more reliable than
              guessing from the faucet
              exterior alone; faucet
              brands that have been
              through multiple ownership
              transfers (American
              Standard in particular)
              have cartridges that
              are no longer stocked
              by the original manufacturer
              and must be sourced
              from aftermarket suppliers.
              Hard water scale: Kansas
              City water has a hardness
              of 150–200 mg/L (calcium
              carbonate) — this is
              classified as very
              hard; calcium deposits
              accumulate on the cartridge
              ceramic discs and rubber
              O-rings at the rate
              of approximately 1/16
              inch per year of continuous
              use; a cartridge that
              has been in a KC faucet
              for 5+ years will have
              visible white scale
              on the seat surface
              that prevents the ceramic
              disc from sealing fully —
              cleaning the scale
              from the seat with
              a white vinegar soak
              before installing the
              new cartridge extends
              the replacement interval
              significantly; homeowners
              who replace the cartridge
              without cleaning the
              seat will often have
              the same drip within
              6–12 months. Single
              vs. double handle: a
              single-handle faucet
              dripping from the spout
              has a failed cartridge
              — the ceramic disc
              that stops flow when
              the handle is closed
              is the failure point;
              a double-handle faucet
              dripping from the spout
              has a failed seat
              washer or ceramic disc
              in the cold or hot
              side — the dripping
              side is identified
              by whether the drip
              produces cold or warm
              water; a double-handle
              faucet leaking from
              the base of the handle
              has a failed O-ring
              on the stem, not a
              seat problem. A faucet
              cartridge website that
              explains how to identify
              the right cartridge,
              why KC hard water accelerates
              failure, and what single
              vs. double handle diagnosis
              involves earns the
              homeowner who wants
              the right repair on
              the first call.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before bathroom faucet cartridge replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cartridge identification — brand lookup, faucet series stamping, old cartridge as reference",
                  "KC hard water — 150-200 mg/L hardness classification, calcium deposit rate, why KC cartridges fail faster",
                  "Seat cleaning — vinegar soak process, why skipping it causes repeat failure within a year",
                  "Single handle diagnosis — ceramic disc failure, spout drip as indicator of cartridge not O-ring",
                  "Double handle diagnosis — which side drips hot vs. cold, base leak as O-ring vs. seat problem",
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
                What your bathroom faucet cartridge replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cartridge ID section — brand lookup by series, where to find faucet series number, sourcing discontinued brands",
                  "KC hard water section — hardness rating, calcium deposit rate, why repair interval is shorter in KC",
                  "Seat cleaning guide — vinegar soak method, white scale identification, how to prevent repeat failure",
                  "Single handle section — ceramic disc failure, spout drip diagnosis, cartridge vs. O-ring distinction",
                  "Double handle section — hot vs. cold side test, base leak vs. spout drip as different failure types",
                  "Quote form with faucet brand, handle count, drip location, handle effort required, timeline",
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
                &ldquo;The hard water section explains
                exactly why I get repeat
                customers from the same
                address. A family in Leawood
                replaced their Moen cartridge
                at the hardware store, it
                dripped again in eight months,
                and they came to me. After
                the section explaining KC
                water hardness and the calcium
                seat deposit went up, customers
                understood why I clean the
                seat with vinegar before installing
                the new cartridge. The family
                in Leawood booked again and
                this time the repair held
                for two years because I cleaned
                the seat. The seat cleaning
                section alone saves me from
                callbacks that were never
                really my fault — just KC
                water doing what KC water does.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Caldwell, plumbing repair and faucet service, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A faucet cartridge site with identification section, KC hard
                water guide, and quote form starts at $200. A full site with
                seat cleaning content, single vs. double handle diagnosis, and
                discontinued brand sourcing is $425–$750. One cartridge
                replacement covers the cost. No contracts, no monthly fees.
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
