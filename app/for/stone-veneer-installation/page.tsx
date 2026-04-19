import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Stone Veneer Installation Companies in Kansas City",
  description:
    "Custom websites for stone veneer, manufactured stone, and natural thin stone installation companies in the Kansas City area. Show your stone profiles, substrate requirements, and finished exterior transformations to win stone veneer contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/stone-veneer-installation",
  },
};

export default function StoneVeneerInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Stone Veneer Installation Companies in Kansas City",
    description: "Custom websites for stone veneer installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Stone Veneer Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know the difference between manufactured stone and natural thin stone, whether their existing substrate can support it, and how exterior stone holds up to KC freeze-thaw cycles. A website with profile photos and installation detail earns the estimate call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Stone Veneer in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Stone Veneer Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Stone veneer customers are
              homeowners wanting to
              transform the exterior
              of their home — typically
              the front facade, a
              gable end, a fireplace
              surround, or a basement
              entry wall — with the
              look of natural stone
              without the structural
              requirements of full
              stone masonry. There
              are two main categories:
              manufactured stone veneer
              (MSV), which is cast
              concrete colored and
              textured to replicate
              fieldstone, limestone,
              ledge stone, river
              rock, or brick profiles
              (Eldorado Stone, Cultured
              Stone by Boral, and
              ProVia are major brands),
              and natural thin stone,
              which is real quarried
              stone sliced to 3/4"–1.5"
              thickness for lightweight
              application. MSV
              typically weighs 10–14
              lbs/sq ft and does
              not require a footing —
              it can be installed
              over properly prepared
              wood frame or masonry
              substrates. Natural
              thin stone runs 13–18
              lbs/sq ft. Installation
              requires a weather-resistant
              barrier (house wrap),
              a metal lath mechanically
              fastened through to
              studs (or direct
              mortar application
              on CMU or concrete),
              a scratch coat of
              mortar, and individual
              stone units set with
              full-coverage mortar
              back-butter. Corner
              units are critical —
              they wrap the substrate
              edge and determine
              the finished corner
              quality. Joint width
              and grouting style
              (tight dry-stack vs.
              mortared joints)
              determine the visual
              character. KC freeze-thaw
              durability matters:
              quality MSV is tested
              to ASTM C1670 for
              exterior use. A stone
              veneer website that
              shows profile options,
              explains the installation
              system, and addresses
              freeze-thaw longevity
              earns the homeowner
              who wants curb appeal
              without a full masonry
              bid.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing stone veneer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Manufactured vs. natural thin stone — what each is, cost difference, appearance differences",
                  "Stone profiles — fieldstone, ledge, river rock, limestone — what each looks like on a KC home",
                  "Substrate requirements — what surfaces can support veneer, what needs preparation first",
                  "Freeze-thaw durability — how exterior stone holds up in KC winters, ASTM testing standards",
                  "Installation process — scratch coat, lath, mortar, corner units — how long a facade takes",
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
                What your stone veneer website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Profile gallery — fieldstone, ledge, river rock, limestone, brick profiles on KC home exteriors",
                  "MSV vs. natural thin stone — brand comparison, weight, cost, where each is the better choice",
                  "Installation system — WRB, lath, scratch coat, mortar set — photos of each stage",
                  "Substrate guide — wood frame, CMU, concrete, existing siding — what preparation each requires",
                  "Freeze-thaw performance — ASTM C1670 rating explained, how quality products are specified",
                  "Quote form with application area, substrate type, stone profile interest, square footage, timeline",
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
                &ldquo;Stone veneer is a hard
                product to sell without
                visuals. Customers have
                a vague idea of what
                they want but cannot
                name the profile and
                do not understand
                why it matters whether
                they pick a ASTM-rated
                product or what the
                scratch coat is for.
                The website with our
                profile gallery, the
                installation process
                walkthrough, and the
                freeze-thaw explanation
                built enough understanding
                that customers arrived
                at estimates with
                a profile in mind.
                The jobs went faster
                and the change orders
                went down significantly.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Okonkwo, stone veneer installer, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A stone veneer site with profile
                gallery, installation overview, and
                quote form starts at $225. A full
                site with substrate guide, MSV vs.
                natural stone comparison, and freeze-thaw
                section is $425–$850. One mid-size
                facade installation covers the cost.
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
