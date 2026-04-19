import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Cabinet Drawer Repair Companies in Kansas City",
  description:
    "Custom websites for cabinet drawer repair, drawer slide replacement, and soft-close drawer upgrade companies in the Kansas City area. Show your side-mount vs. undermount slide comparison, KC humidity wood swell drawer binding, and soft-close conversion method to win cabinet drawer repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/cabinet-drawer-repair",
  },
};

export default function CabinetDrawerRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Cabinet Drawer Repair Companies in Kansas City",
    description: "Custom websites for cabinet drawer repair and drawer slide replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Cabinet Drawer Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a drawer that falls off its tracks needs new slides or just adjustment, why their kitchen drawers bind every summer when the humidity rises in KC, and whether they can upgrade to soft-close without replacing the whole cabinet. A website that explains cabinet drawer repair earns the slide replacement call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Cabinet Drawer Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Cabinet Drawer Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Cabinet drawer repair
              customers are KC homeowners
              whose kitchen or bathroom
              cabinet drawers have
              failed slides — a drawer
              that falls off its
              tracks, a drawer that
              requires two hands
              and a specific angle
              to open, or a drawer
              that binds and requires
              force to open and close
              — homeowners whose
              older side-mount slides
              have bent or worn ball
              bearings that allow
              the drawer to rack
              side to side rather
              than rolling smoothly,
              or homeowners who want
              to convert their existing
              drawers to soft-close
              undermount slides as
              part of a kitchen refresh
              without replacing cabinet
              boxes. The central
              education is the three
              slide types and their
              failure modes, KC humidity
              and wood movement in
              drawer boxes, and the
              soft-close conversion
              process — three things
              that determine whether
              a drawer repair holds
              and whether a soft-close
              upgrade is compatible
              with existing cabinets.
              Three slide types: the
              three common cabinet
              drawer slide systems
              are side-mount epoxy-coated
              slides (the most common
              in pre-2000 KC kitchen
              cabinets — a pair of
              metal tracks, one mounted
              to each cabinet wall
              side and one to each
              drawer box side, with
              roller or ball-bearing
              carriages); center-mount
              slides (a single slide
              under the drawer center —
              common in older bathroom
              vanity drawers — low
              load capacity, no soft-close
              option); and undermount
              full-extension soft-close
              slides (the current
              standard in new kitchen
              cabinet installations —
              hidden under the drawer
              box, full extension
              allows access to the
              full drawer depth, integrated
              soft-close dampener);
              side-mount slides fail
              when the nylon rollers
              crack or the ball bearing
              carriage wears and develops
              lateral play — the drawer
              rests unevenly and
              binds; center-mount
              slides fail when the
              plastic glide or track
              breaks — the drawer
              drops in the front.
              KC humidity and wood
              movement: KC summer
              relative humidity averages
              seventy to eighty percent;
              solid wood and plywood
              drawer boxes absorb
              moisture from the summer
              air and expand across
              the grain — a drawer
              box that fits correctly
              in the cabinet opening
              in February may bind
              against the cabinet
              sides in July; this
              is not a slide failure
              but a drawer box dimension
              change; a binding drawer
              that opens freely in
              winter and binds in
              summer is a humidity-related
              wood movement issue —
              the drawer box sides
              can be lightly planed
              or sanded on the binding
              edges to restore clearance
              while leaving enough
              material to accommodate
              winter contraction;
              drawers that bind year-round
              have a different cause —
              slide wear, rail misalignment,
              or drawer box joint
              failure. Soft-close
              conversion: most side-mount
              slides in existing KC
              cabinets can be replaced
              with undermount soft-close
              slides if the drawer
              box has a solid bottom
              and the cabinet opening
              depth is at least twenty
              inches; the drawer box
              face frame must accommodate
              the undermount slide
              mounting flange; conversion
              requires removing the
              existing drawer box,
              mounting the undermount
              rail to the cabinet
              floor at the correct
              height, attaching the
              drawer component to
              the drawer box bottom,
              and verifying the alignment
              adjustment; Blum Tandem
              Plus Blumotion and Grass
              Dynapro are the two
              most common undermount
              soft-close systems installed
              in KC cabinet work.
              A cabinet drawer website
              that explains slide
              type differences, KC
              humidity wood movement,
              and the soft-close conversion
              process earns the homeowner
              who wants functional
              drawers and a kitchen
              upgrade without a full
              cabinet replacement.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before cabinet drawer repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Slide types — side-mount vs. center-mount vs. undermount, which fails in which way, what's in their cabinets",
                  "KC humidity binding — summer vs. winter fit difference, wood expansion across grain, planing fix",
                  "Slide wear diagnosis — lateral play test, roller crack check, ball bearing carriage failure signs",
                  "Soft-close conversion — undermount slide compatibility, drawer box bottom requirement, cabinet depth check",
                  "Blum vs. Grass — undermount soft-close brand comparison, adjustment range, KC installer availability",
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
                What your cabinet drawer repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Slide type section — side-mount vs. center-mount vs. undermount, failure modes of each, what to look for",
                  "KC humidity section — summer expansion cause, year-round bind vs. seasonal bind distinction, planing fix",
                  "Slide replacement guide — side-mount to undermount conversion requirements, drawer box compatibility",
                  "Soft-close section — Blum Tandem Plus vs. Grass Dynapro, installation process, adjustment after mount",
                  "Repair vs. upgrade — when slide repair is enough, when soft-close conversion makes sense",
                  "Quote form with cabinet age, drawer count, current slide type, binding pattern (seasonal/year-round), timeline",
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
                &ldquo;The humidity section
                alone saved me countless
                wasted trips. KC summer
                brings a lot of calls
                about drawers that
                suddenly stopped working —
                the homeowner thinks
                the slides failed but
                it&apos;s just the drawer
                box swelling. After
                the section went up
                explaining seasonal
                wood movement versus
                slide wear and how
                to tell the difference,
                customers started diagnosing
                themselves before calling.
                If it binds in summer
                and works fine in winter,
                they know it&apos;s humidity.
                If it binds year-round,
                they call me for slide
                replacement. The soft-close
                conversion section also
                brought in a whole
                new segment — homeowners
                who knew about soft-close
                from watching kitchen
                renovation shows and
                wanted it without a
                full cabinet replacement.
                Explaining the conversion
                process made it feel
                achievable.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Watkins, cabinet repair and kitchen hardware, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A cabinet drawer repair site with slide type section, KC humidity
                guide, and quote form starts at $200. A full site with soft-close
                conversion content, brand comparison, and repair vs. upgrade guide
                is $425–$750. One drawer slide replacement job covers the cost.
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
