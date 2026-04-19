import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Drywall Finishing Companies in Kansas City",
  description:
    "Custom websites for drywall finishing, skim coat, and drywall taping companies in the Kansas City area. Show your tape coat process, feathering technique, and KC humidity considerations to win drywall finishing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/drywall-finishing",
  },
};

export default function DrywallFinishingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Drywall Finishing Companies in Kansas City",
    description: "Custom websites for drywall finishing and skim coat companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Drywall Finishing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how many coats drywall finishing actually requires, why joints crack in KC winters when the heat runs constantly, and what a Level 5 finish means versus what they typically get. A website that explains the finishing process earns the drywall call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Drywall Finishing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Drywall Finishing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Drywall finishing customers
              are KC homeowners who
              hung new drywall
              in a basement or
              addition and need
              it finished before
              paint, homeowners
              who had a water
              leak repair that
              left a patched
              section that doesn&apos;t
              match the rest of
              the wall, or homeowners
              upgrading to a
              smooth finish after
              years of orange-peel
              texture they never
              liked. The central
              education is the
              coating sequence,
              why joints crack,
              and what finish
              levels actually
              mean. Coating sequence:
              a properly finished
              drywall joint requires
              three coats — tape
              coat, second coat,
              finish coat; the
              tape coat embeds
              paper tape in setting-type
              compound (Durabond
              20 or 45) over
              the joint; setting
              compound hardens
              chemically (not
              by drying) and
              will not shrink
              or crack — it
              can be sanded
              after the set
              time and before
              full dry; the
              second coat (all-purpose
              or lightweight
              all-purpose) is
              applied with a
              10-inch knife
              feathered 4–6
              inches beyond
              the tape coat
              edge on each side;
              the finish coat
              is the widest —
              feathered to 12–14
              inches total width —
              and thinnest; each
              coat must be fully
              dry before the
              next coat, which
              in a KC winter
              with forced-air
              heat running at
              25–30% relative
              humidity can be
              4–6 hours; in
              summer at 60–70%
              RH the same coat
              may take 18–24
              hours. Joint cracking:
              KC homes experience
              seasonal humidity
              swings of 40–50
              points between
              January and August;
              wood framing and
              drywall core both
              move with humidity
              change — the joint
              is the weakest
              point; hairline
              cracks along taped
              joints in spring
              after a dry winter
              are common in
              KC homes and are
              not a structural
              issue; the cause
              is typically a
              tape coat that
              was applied over
              all-purpose compound
              instead of setting
              compound (all-purpose
              shrinks as it dries
              and leaves a weak
              bond at the paper
              tape); re-taping
              with setting compound
              is the only permanent
              fix. Finish levels:
              the GA-214 drywall
              finishing standard
              defines five levels;
              Level 3 (tape,
              one coat, primer
              ready for medium
              texture) is typical
              for orange-peel
              or knockdown texture;
              Level 4 (tape,
              two coats, primer
              ready for flat
              paint or light
              texture) is the
              standard for most
              painted walls;
              Level 5 (tape,
              two coats plus
              skim coat over
              entire surface)
              is required for
              gloss or semi-gloss
              paint and for
              walls lit with
              raking light (side-lit
              walls in a room
              with tall windows
              show every trowel
              ridge at Level
              4); a Level 5
              skim coat is 1/32-inch
              joint compound
              applied over the
              entire panel surface
              and troweled smooth —
              it hides panel
              texture, fastener
              crowns, and shadow
              lines. A drywall
              finishing website
              that explains
              why three coats
              matter, why KC
              winters cause
              joint cracking
              in cheaper jobs,
              and what Level
              5 actually changes
              about the final
              result earns the
              homeowner who
              wants the wall
              to look like a
              wall, not a patch.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before drywall finishing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Coating sequence — tape coat compound type, second coat feathering width, finish coat final width",
                  "Drying time — KC humidity effect on drying schedule, forced-air heat in winter, summer high-RH delays",
                  "Joint cracking — seasonal humidity cause, all-purpose vs. setting compound failure mode, permanent fix",
                  "Finish levels — GA-214 standard, Level 3 vs. Level 4 vs. Level 5, when Level 5 is required",
                  "Texture matching — orange-peel spray technique, knockdown timing, matching existing wall texture",
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
                What your drywall finishing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Coating sequence section — tape coat compound selection, feathering widths, finish coat technique",
                  "Drying guide — KC winter vs. summer drying times, how to accelerate safely, signs of underdry",
                  "Joint cracking section — seasonal cause, all-purpose vs. setting compound difference, re-tape process",
                  "Finish level guide — GA-214 levels, what each level looks like in raking light, when Level 5 is worth it",
                  "Texture matching section — orange-peel vs. knockdown, hopper technique, test panel before production",
                  "Quote form with square footage, finish level desired, texture match needed, timeline",
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
                &ldquo;The joint cracking section
                solved the biggest objection
                I faced in KC. Every spring
                I get calls from people
                asking why their joints
                cracked after a winter —
                and half of them blamed
                the last contractor. After
                the section went up explaining
                the humidity swing and the
                difference between setting
                compound and all-purpose,
                customers started telling
                me they wanted the job
                done right instead of cheap.
                Three re-tape jobs became
                new full-room finishing jobs
                because the customer understood
                what was actually wrong.
                The Level 5 section also
                added jobs — customers with
                south-facing rooms with tall
                windows had no idea why
                their walls looked bad in
                afternoon light until I
                could point them to the
                explanation.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Kowalski, drywall finishing and skim coat, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A drywall finishing site with coating sequence section,
                joint cracking guide, and quote form starts at $200. A
                full site with finish level guide, drying timeline, and
                texture matching content is $425–$750. One basement
                finishing job covers the cost. No contracts, no monthly fees.
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
