import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Garage Door Repair Companies in Kansas City",
  description:
    "Custom websites for garage door repair, spring replacement, and opener installation companies in the Kansas City area. Show your spring types, opener technology, and safety sensor requirements to win garage door repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/garage-door-repair",
  },
};

export default function GarageDoorRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Garage Door Repair Companies in Kansas City",
    description: "Custom websites for garage door repair and spring replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garage Door Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a broken spring means a full door replacement, why torsion springs are safer than extension springs, and whether a new opener is worth it when the spring breaks. A website that explains spring types and opener compatibility earns the repair call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garage Door Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Garage Door Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Garage door repair
              customers are homeowners
              who woke up to
              a door that will
              not open, heard
              a loud bang from
              the garage (broken
              spring), or have
              a door that moves
              unevenly, reverses
              without obstruction,
              or makes grinding
              noises during operation.
              The central education
              is spring types
              and why broken
              springs are the
              most common failure:
              torsion springs
              (mounted on a
              horizontal shaft
              above the door
              opening) wind and
              unwind to counterbalance
              the door weight
              — a single torsion
              spring rated for
              10,000 cycles (standard)
              fails after 7–10
              years of daily
              use; high-cycle
              springs (25,000–100,000
              cycles, heavier
              wire gauge) cost
              more but last
              2–4x longer. Extension
              springs (mounted
              on horizontal
              tracks on each
              side of the door)
              stretch and contract
              — they must have
              safety cables
              threaded through
              them because a
              broken extension
              spring under tension
              becomes a projectile.
              Most residential
              doors installed
              before 2000 use
              extension springs;
              most after 2000
              use torsion. Replacing
              both springs at
              the same time
              is standard practice
              when one fails —
              if both springs
              are the same age,
              the second is
              weeks away from
              the same failure.
              Opener compatibility:
              belt drive openers
              (quieter, recommended
              for attached garages)
              vs. chain drive
              (louder, lower
              cost, reliable);
              modern openers
              with DC motors
              have battery backup
              for power outages
              — a feature KC
              homeowners value
              after severe storm
              seasons; MyQ
              (Chamberlain) and
              similar smart openers
              add phone app
              monitoring and
              remote close.
              Safety sensors
              (photo-eye sensors
              at 4–6" above
              the floor) are
              required by UL
              325 on all openers
              manufactured after
              1993 — a door
              that reverses
              immediately after
              closing often
              has misaligned
              or dirty sensors,
              not a failed
              opener. Panel
              damage: cracked
              or dented panels
              can be replaced
              individually if
              the damage is
              limited to one
              or two sections
              and the door
              frame and hardware
              are straight —
              full door replacement
              is warranted when
              multiple panels
              are damaged or
              the door has
              warped. A garage
              door repair website
              that explains
              torsion vs. extension
              springs, why
              both springs should
              be replaced together,
              and when a smart
              opener upgrade
              makes sense earns
              the homeowner
              stranded in the
              driveway after
              the loud bang.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before repairing a garage door
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Spring types — torsion vs. extension, why each fails, safety cable requirement for extension springs",
                  "Spring cycle ratings — standard 10,000-cycle vs. high-cycle springs, real-world lifespan difference",
                  "Replace one or both springs — why replacing only the broken spring is often a mistake",
                  "Opener technology — belt vs. chain drive, battery backup, smart opener app monitoring",
                  "Safety sensor issues — why a door that reverses immediately is usually a sensor problem not an opener failure",
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
                What your garage door repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Spring type guide — torsion vs. extension, how each works, safety difference, which is on your door",
                  "High-cycle spring section — wire gauge, cycle ratings, cost vs. longevity, who should upgrade",
                  "Both-spring replacement rationale — matched age, failure timeline, why it saves a second service call",
                  "Opener comparison — belt vs. chain drive, DC motor battery backup, MyQ smart monitoring",
                  "Safety sensor troubleshooting — alignment check, cleaning, what misaligned sensors cause",
                  "Service form with door type, spring type if known, opener brand, issue description",
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
                &ldquo;My biggest frustration
                was customers who called
                three companies and went
                with whoever was cheapest,
                then called me six months
                later when the other spring
                broke. The website explaining
                why matched-age springs
                fail together changed the
                conversation — customers
                arrived already understanding
                why replacing both was
                the right call, not just
                an upsell. The high-cycle
                spring section also opened
                a category I was barely
                selling: customers with
                teenagers using the door
                twenty times a day started
                asking for the upgrade.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Harrington, garage door service, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garage door repair site with spring
                type guide, replace-both rationale, and
                service form starts at $200. A full site
                with high-cycle spring section, opener
                comparison, and safety sensor guide is
                $425–$750. One spring replacement job
                covers the cost. No contracts, no monthly
                fees.
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
