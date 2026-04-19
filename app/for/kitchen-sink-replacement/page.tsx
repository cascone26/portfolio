import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Kitchen Sink Replacement Companies in Kansas City",
  description:
    "Custom websites for kitchen sink replacement, undermount sink installation, and drop-in sink replacement companies in the Kansas City area. Show your sink mount type by countertop material, KC hard water staining pattern, and cutout sizing method to win kitchen sink replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/kitchen-sink-replacement",
  },
};

export default function KitchenSinkReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Kitchen Sink Replacement Companies in Kansas City",
    description: "Custom websites for kitchen sink replacement and undermount sink installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Kitchen Sink Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether they can upgrade from a drop-in to an undermount sink without replacing the countertop, why the seal around their sink is failing, and what gauge stainless actually holds up to KC hard water. A website that explains kitchen sink replacement earns the sink upgrade call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Kitchen Sink Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Kitchen Sink Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Kitchen sink replacement
              customers are KC homeowners
              who want to upgrade
              from the original drop-in
              sink to an undermount
              during a countertop
              remodel, homeowners
              whose existing drop-in
              sink rim seal has failed
              and water is wicking
              under the rim and into
              the cabinet below —
              common in KC kitchens
              built 1985–2000 with
              the original laminate
              countertop and a drop-in
              stainless sink where
              the silicone seal has
              hardened and separated
              over time — or homeowners
              replacing a cast iron
              or porcelain-coated
              steel sink that has
              chipped, rusted at
              the chip, or stained
              permanently from KC
              hard water mineral
              deposits. The central
              education is sink mount
              type by countertop material,
              KC hard water and its
              effect on sink material
              selection, and the rim
              seal failure mechanism —
              three things that determine
              whether a replacement
              sink lasts and whether
              the installation prevents
              the water-under-the-rim
              problem from recurring.
              Mount type by countertop:
              the mount type is determined
              by the countertop material
              and the existing cutout —
              a drop-in sink (also
              called a self-rimming
              or top-mount sink) sits
              in the cutout with the
              rim resting on the countertop
              surface and is compatible
              with any countertop
              material including laminate,
              tile, and stone; an
              undermount sink mounts
              below the countertop
              surface with the rim
              bonded to the underside
              of the countertop —
              this requires a solid
              material (stone, quartz,
              or solid surface) because
              the countertop edge
              is exposed at the cutout
              perimeter; undermounting
              into a laminate countertop
              exposes the particle
              board core at the cutout
              edge, which wicks moisture
              and swells; a farmhouse
              or apron-front sink
              requires the cabinet
              face to be modified
              or replaced because
              the sink face extends
              beyond the cabinet front.
              KC hard water: KC municipal
              water has hardness of
              approximately 150–200
              mg/L (8–12 grains per
              gallon) — in the hard
              to very hard range —
              which deposits calcium
              and magnesium scale
              at any point where
              water evaporates, including
              the sink basin surface,
              the drain basket area,
              and the faucet base
              area; stainless steel
              gauge matters for hard
              water — 16-gauge stainless
              resists denting and
              is heavy enough that
              it does not flex at
              the drain seal area
              when loaded; 20-gauge
              stainless flexes under
              heavy loads and the
              drain basket seal area
              can develop micro-cracks;
              for KC hard water resistance,
              a 16-gauge stainless
              with a satin brushed
              finish shows scale
              deposits less than
              a polished finish. Rim
              seal failure: a drop-in
              sink rim seal fails
              when the silicone caulk
              between the sink rim
              and the countertop surface
              hardens and separates —
              silicone has a service
              life of eight to fifteen
              years at the rim joint
              under kitchen conditions;
              once the seal has separated,
              water from cleaning
              and splashing wicks
              under the rim and into
              the joint between the
              laminate surface and
              the particle board
              substrate; the particle
              board swells, causing
              the laminate to bubble
              at the joint; resealing
              without removing the
              old silicone and cleaning
              the rim surface fails
              quickly — new silicone
              does not bond to old
              silicone. A kitchen
              sink replacement website
              that explains mount
              type by countertop,
              KC hard water and gauge
              selection, and the rim
              seal failure mechanism
              earns the homeowner
              who wants the replacement
              done before the cabinet
              floor is rotted.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before kitchen sink replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Mount type — drop-in vs. undermount vs. farmhouse, countertop material compatibility",
                  "Undermount limitation — why undermount requires stone/quartz, laminate edge moisture wicking",
                  "KC hard water — 150-200 mg/L hardness, scale deposits, stainless gauge selection for hard water",
                  "Rim seal failure — silicone lifespan, water wicking under rim, particle board swelling under laminate",
                  "Gauge selection — 16 vs. 18 vs. 20 gauge stainless, flex at drain area, KC durability recommendation",
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
                What your kitchen sink replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Mount type section — drop-in vs. undermount decision tree by countertop material, farmhouse cabinet modification",
                  "KC hard water section — 150-200 mg/L scale deposits, gauge recommendation, finish type for scale visibility",
                  "Rim seal section — silicone lifespan, failure signs, why resealing over old silicone fails quickly",
                  "Cutout sizing guide — standard drop-in cutout dimensions, undermount template use, measuring existing sink",
                  "Installation sequence — drain removal, silicone removal, prep, mounting, plumbing reconnect",
                  "Quote form with current sink type, countertop material, cabinet condition, desired mount type, timeline",
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
                &ldquo;The rim seal section ended
                the recaulk callbacks. Customers
                in Olathe would call me
                about a leaking sink, I&apos;d
                reseal it, and six months
                later it was leaking in
                the same spot. After I
                understood that new silicone
                over old silicone doesn&apos;t
                bond — and after the section
                went up explaining that —
                customers stopped asking
                me to just recaulk and
                started asking for the
                full removal and replacement.
                The undermount limitation
                section also saved me from
                a job where a customer
                wanted to drop an undermount
                into a laminate counter
                because they saw it on
                a renovation show. That
                job would have been a water
                damage callback in under
                two years.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Estrada, plumbing fixtures and kitchen service, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A kitchen sink replacement site with mount type section, rim
                seal guide, and quote form starts at $200. A full site with KC
                hard water content, gauge selection, and countertop compatibility
                guide is $425–$750. One sink replacement covers the cost.
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
