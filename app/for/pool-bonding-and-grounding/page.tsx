import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pool Bonding and Grounding Companies in Kansas City",
  description:
    "Custom websites for pool bonding and grounding, swimming pool electrical safety, and pool equipment circuit companies in the Kansas City area. Show your KC pool bonding grid requirements, GFCI protection rules, and electric shock drowning prevention to win pool electrical contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pool-bonding-and-grounding",
  },
};

export default function PoolBondingAndGroundingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pool Bonding and Grounding Companies in Kansas City",
    description: "Custom websites for pool bonding and grounding and swimming pool electrical safety companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pool Bonding and Grounding Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what pool bonding is and why it&apos;s required when the pool already has a ground wire, whether their older KC pool has a proper bonding grid, and what electric shock drowning risk means for their family. A website that explains bonding grid requirements and ESD prevention earns the safety call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pool Bonding and Grounding in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pool Bonding and Grounding</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pool bonding and grounding
              customers are KC homeowners
              adding a new pool
              or spa and discovering
              the electrical requirements
              go well beyond running
              a circuit to the pump —
              or homeowners with
              an older in-ground
              pool built in the
              1970s or 1980s whose
              bonding grid was
              never inspected and
              may not meet current
              NEC Article 680 requirements;
              or homeowners whose
              pool was flagged at
              inspection for missing
              or inadequate bonding
              when they tried to
              sell their KC home.
              The central education
              is the difference
              between bonding and
              grounding and why
              both are required
              for pools: grounding
              connects pool equipment
              (pump motor, light
              fixtures, metal
              conduit) to the
              equipment ground
              path so a fault
              trips the circuit
              breaker; bonding
              connects all metal
              parts of the pool
              structure — the
              pool shell reinforcement,
              the pump, the light
              niches, the metal
              handrails, the
              deck drains, any
              metal within five
              feet of the pool
              water edge — to
              a bonding grid
              using a solid
              copper conductor
              (minimum 8 AWG)
              so that all metal
              parts are at the
              same electrical
              potential; when
              all metal parts
              are at the same
              potential, there
              is no voltage gradient
              in the pool water
              between the water
              and any metal surface —
              a voltage gradient
              is what causes
              electric shock drowning
              (ESD): a swimmer
              in water with a
              voltage gradient
              becomes the path
              for current to
              flow between two
              points at different
              potential, experiencing
              paralysis that
              prevents them from
              swimming to safety.
              Bonding grid requirements:
              the current NEC
              requires a continuous
              copper bonding conductor
              connected to all
              metallic parts
              of the pool structure;
              for concrete pools
              with steel rebar,
              the rebar must
              be bonded at regular
              intervals; fiberglass
              pools have no rebar
              but the equipment
              and deck hardware
              must still be bonded;
              vinyl liner pools
              have a metal track
              around the perimeter
              that requires bonding;
              pools built before
              1985 in KC frequently
              have incomplete
              bonding grid — the
              pump is grounded
              but the rebar,
              light niches, and
              deck hardware are
              not continuously
              connected. GFCI
              protection: all
              pool circulation
              pump circuits
              must be GFCI-protected;
              pool lighting circuits
              must be GFCI-protected;
              all receptacle outlets
              within twenty feet
              of the pool water
              edge must be GFCI-protected;
              no outlet within
              six feet of the
              pool water edge
              is permitted.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before pool bonding and grounding
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Bonding vs. grounding — why both are required, what bonding prevents, what grounding does differently",
                  "Electric shock drowning — what causes ESD in pools, how bonding grid prevents voltage gradient",
                  "Older KC pool bonding — pre-1985 pool bonding deficiencies, rebar bonding, inspection failure causes",
                  "GFCI requirements — pump circuit protection, pool light GFCI, 20-foot receptacle rule",
                  "Bonding grid inspection — how to identify missing bonding connections, what failed inspection means",
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
                What your pool bonding and grounding website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Bonding vs. grounding section — equalization vs. fault path, what each prevents, why both required",
                  "ESD section — how voltage gradients form in pool water, swimmer paralysis mechanism, KC fatality data",
                  "Bonding grid section — copper conductor, all metal parts requirement, rebar bonding for concrete pools",
                  "Older pool section — pre-1985 KC pool deficiencies, inspection findings, retrofit bonding options",
                  "GFCI section — pump and light circuit protection, 20-foot receptacle rule, outlet exclusion zone",
                  "Quote form with pool age and type, inspection flag reason, rebar concrete or fiberglass, equipment year",
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
                &ldquo;The ESD section is what
                makes KC pool owners
                treat bonding as a safety
                issue rather than a checkbox.
                Most homeowners with an
                older pool believe it&apos;s
                safe because no one has
                been shocked yet —
                they don&apos;t understand
                that an incomplete bonding
                grid is not detectable
                by feel until someone
                is already in the water
                with current flowing.
                After the section explaining
                how a swimmer becomes
                paralyzed — not jolted,
                but unable to move —
                by low-level alternating
                current through the water,
                parents with kids ask
                for bonding inspection
                immediately rather than
                waiting until home sale.
                The pre-1985 KC pool
                section also generates
                calls from homeowners
                who specifically tell
                me they have a pool from
                the seventies and want
                to know if it&apos;s compliant.
                It usually isn&apos;t.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Carrillo, pool electrical and bonding, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pool bonding and grounding site with bonding vs. grounding
                section, ESD explanation, and quote form starts at $200. A full
                site with bonding grid requirements, older KC pool section, and
                GFCI protection guide is $425–$750. One bonding inspection and
                repair covers the cost. No contracts, no monthly fees.
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
