import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Garage Door Spring Replacement Companies in Kansas City",
  description:
    "Custom websites for garage door spring replacement, torsion spring repair, and garage door spring service companies in the Kansas City area. Show your KC freeze-thaw spring metal fatigue, torsion vs. extension spring comparison, and both-spring replacement timing to win garage door spring replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/garage-door-spring-replacement",
  },
};

export default function GarageDoorSpringReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Garage Door Spring Replacement Companies in Kansas City",
    description: "Custom websites for garage door spring replacement and torsion spring repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garage Door Spring Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether they can open the garage door manually when the spring breaks, why the spring broke without warning, and whether replacing both springs at the same time is necessary or just upselling. A website that explains garage door spring replacement earns the call from the KC homeowner whose door is stuck closed this morning. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garage Door Spring Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Garage Door Spring Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Garage door spring
              replacement customers
              are KC homeowners
              who heard the
              loud snap of
              a torsion spring
              breaking and
              found the garage
              door will not
              open — or will
              open manually
              with great effort
              but won&apos;t stay
              up and the
              opener groans
              under the load
              of a door it
              can no longer
              lift with spring
              counterbalance;
              homeowners who
              notice the garage
              door is slower
              than normal,
              jerks when starting
              to open, or
              the opener strains
              — signs that
              the torsion spring
              is losing tension
              as it approaches
              the end of
              its cycle count;
              or homeowners
              who had one
              spring replaced
              and are being
              told both springs
              need to go and
              want to understand
              whether that
              recommendation
              is legitimate
              or a sales tactic.
              The central education
              is KC temperature
              swing metal fatigue
              on torsion springs,
              torsion versus
              extension spring
              system design,
              and both-spring
              replacement timing —
              three things that
              determine whether
              a homeowner understands
              why garage door
              springs fail
              without visible
              warning, why
              replacing both
              on a dual-spring
              system at the
              same time is
              legitimate, and
              why the spring
              that failed was
              the right one
              to expect to
              fail first. KC
              temperature metal
              fatigue: torsion
              springs are
              rated by cycle
              count — a standard
              residential torsion
              spring is rated
              for ten thousand
              cycles; one
              cycle is one
              open-close; a
              garage used twice
              daily reaches
              ten thousand
              cycles in thirteen-plus
              years; KC temperature
              swing — the
              approximately
              one-hundred-degree
              annual range
              from summer
              high to winter
              low — causes
              the torsion spring
              steel to expand
              and contract
              with each temperature
              change, cycling
              the steel through
              stress independent
              of door use;
              a spring in
              an uninsulated
              KC garage experiences
              rapid temperature
              changes in spring
              and fall when
              daytime and
              nighttime temperatures
              swing forty
              to fifty degrees
              in twenty-four
              hours; KC spring
              and fall account
              for a disproportionate
              share of torsion
              spring failures —
              the spring is
              both near its
              cycle count
              limit and experiencing
              peak thermal
              stress simultaneously.
              Torsion versus
              extension: torsion
              springs run
              along the horizontal
              track above
              the door on
              a metal shaft —
              they store energy
              by twisting
              and release
              it to lift
              the door; extension
              springs run
              parallel to
              the horizontal
              track on each
              side of the
              door and stretch
              to store energy;
              torsion systems
              are the current
              standard for
              residential two-car
              garage doors —
              safer when a
              spring breaks
              because the
              spring is contained
              on the shaft;
              extension springs
              are found on
              older single-car
              garages — they
              snap free when
              they break and
              the broken spring
              can travel across
              the garage under
              tension; both
              are sized by
              door weight
              and height —
              the spring must
              exactly counterbalance
              the door weight
              to allow the
              opener to operate
              within its torque
              rating. Both-spring
              replacement: dual-spring
              torsion systems
              have two springs
              on the shaft
              — each carries
              half the load;
              when one breaks,
              the other has
              accumulated the
              same cycle count
              and thermal
              stress; replacing
              only the broken
              spring leaves
              the second spring
              at the same
              failure point —
              expect the second
              spring to fail
              within weeks
              to months; replacing
              both when one
              breaks is not
              upselling — it
              eliminates the
              second service
              call at the
              same labor cost
              while both springs
              are new; a
              technician recommending
              single-spring
              replacement only
              is providing
              a cheaper quote
              but not a
              better outcome.
              A garage door
              spring replacement
              website that
              explains KC
              temperature fatigue
              and why springs
              fail in spring
              and fall, the
              torsion versus
              extension spring
              difference, and
              why both-spring
              replacement is
              the correct
              recommendation
              on a dual system
              earns the homeowner
              who got three
              quotes and wants
              to understand
              why they&apos;re different.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before garage door spring replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC temperature metal fatigue — 100°F annual swing, spring/fall peak failures, thermal cycling independent of door use",
                  "Torsion vs. extension — shaft-mounted vs. parallel track, safety when broken, current residential standard",
                  "Both springs at once — dual-spring cycle count equivalence, cost of second call vs. simultaneous replacement",
                  "Cycle count rating — 10,000-cycle standard, lifespan by use frequency, high-cycle upgrade springs",
                  "Manual operation — how to open a broken-spring door safely, why the opener won't lift the unbalanced door",
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
                What your garage door spring replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC temperature section — spring/fall failure peak, 40-50°F daily swing, thermal fatigue on top of cycle fatigue",
                  "Spring type section — torsion vs. extension systems, safety comparison, sizing by door weight and height",
                  "Both-spring section — why dual-spring systems require simultaneous replacement, cost per service call math",
                  "Cycle count section — 10,000 vs. 20,000-cycle springs, lifespan by use frequency, upgrade spring pricing",
                  "Emergency service — manual release procedure, why door won't stay open without spring counterbalance",
                  "Quote form with door size (single/double), spring type (torsion/extension), failure symptom, door age",
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
                &ldquo;The both-spring section
                is the reason
                I stopped getting
                price-shopped on
                the dual replacement.
                KC homeowners with
                a dual-spring torsion
                system who got
                a quote from a
                competitor replacing
                only the broken
                spring would call
                me saying I was
                charging twice
                as much. After
                the section went
                up explaining that
                both springs are
                at the same cycle
                count and the
                second one will
                fail within a
                few months, customers
                arrived at the
                quote already
                understanding why
                I was recommending
                both. The KC
                temperature section
                also answered the
                most common question
                I get — why did
                it break without
                warning. After
                explaining that
                spring and fall
                temperature swings
                in KC put extra
                stress on springs
                that are already
                near their cycle
                limit, customers
                understood why
                their twelve-year-old
                garage door spring
                chose April to
                break.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Calloway, garage door service and spring replacement, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garage door spring replacement site with KC temperature fatigue
                section, spring type guide, and quote form starts at $200. A full
                site with both-spring replacement rationale, cycle count upgrade
                options, and emergency service content is $425–$750. One spring
                replacement job covers the cost. No contracts, no monthly fees.
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
