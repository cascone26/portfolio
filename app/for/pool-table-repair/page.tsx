import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pool Table Repair and Refelting Services in Kansas City",
  description:
    "Custom websites for pool table repair, refelting, and moving services in the Kansas City area. Show your cloth options, level guarantee, and service process to win customers with quality tables they want to protect.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pool-table-repair",
  },
};

export default function PoolTableRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pool Table Repair and Refelting Services in Kansas City",
    description: "Custom websites for pool table repair and refelting services in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pool Table Repair Services",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          People with quality pool tables want a technician who knows what they&apos;re doing — proper leveling, the right felt for their table and play style, and clean pocket and cushion work. A website that shows your cloth options, your leveling process, and your experience with name-brand tables earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pool Table Service in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pool Table Repair</span> &amp; Refelting in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pool table owners looking for service
              — refelting, leveling, moving, or
              cushion replacement — have a quality
              table they care about. They are not
              looking for the cheapest option; they
              want someone who knows what proper
              leveling looks like, understands the
              difference between Simonis, Teflon,
              and tournament-grade cloth, and can
              properly disassemble and reassemble
              a slate table without damaging it.
              They want to see what cloth colors
              and brands you offer, whether you
              work on their table brand (Brunswick,
              Diamond, Olhausen, Valley), and what
              the service process looks like from
              booking to final level check. A pool
              table service website that shows your
              cloth options, explains your leveling
              and reassembly process, and makes
              scheduling a service call easy earns
              the customers who would otherwise
              just call a name they saw on Yelp.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What pool table owners want to know before scheduling service
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cloth brands and options — Simonis, Championship, Teflon blend; colors available; price difference",
                  "Table brands you service — Brunswick, Diamond, Olhausen, Valley, American Heritage, Connelly",
                  "Leveling process — how slate is leveled, shimmed, and verified after reassembly",
                  "Moving service — disassembly, transport, reassembly process for 1-piece vs. 3-piece slate",
                  "Additional repairs — cushion rubber replacement, pocket leather, leg repair, light installation",
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
                What your pool table service website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cloth gallery — Simonis, Championship, and other brands with color swatches and play characteristics",
                  "Services — refelting, leveling, moving/installation, cushion replacement, pocket restoration",
                  "Table brands — specific makes you work on and your experience with each",
                  "Process — what happens during a refelt or move, slate handling, leveling method, time on-site",
                  "Pricing guide — refelting by table size, move rates, cushion replacement, add-ons",
                  "Service request form with table brand, service needed, table size, location, preferred timing",
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
                &ldquo;My customers have nice tables
                and they want someone they can
                trust with them. Without a website
                showing my cloth options, my
                process, and my experience with
                name-brand tables, I was just
                another name in a list. The new
                site with my Simonis cloth color
                gallery, my leveling process
                explained step by step, and the
                brands I specialize in changed
                how people approached me. They
                call knowing they want Simonis
                860HR in Tournament Green and
                they&apos;re already sold.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Caldwell, pool table technician, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pool table service site with cloth
                options, services, and booking form
                starts at $200. A full site with
                cloth gallery, brand experience
                detail, and moving service section
                is $375–$750. One refelt job covers
                the cost. No contracts,
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
