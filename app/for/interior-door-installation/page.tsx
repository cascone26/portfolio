import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Interior Door Installation Companies in Kansas City",
  description:
    "Custom websites for interior door installation, pre-hung door replacement, and door frame repair companies in the Kansas City area. Show your KC home settling and shimming for plumb, pre-hung door rough opening dimensions, and solid-core vs. hollow-core for KC bonus rooms to win interior door installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/interior-door-installation",
  },
};

export default function InteriorDoorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Interior Door Installation Companies in Kansas City",
    description: "Custom websites for interior door installation and pre-hung door replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Interior Door Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether they need a pre-hung door or just a slab, why the door rubs on one side, and whether the problem is the door or the frame. A website that explains KC settling and shimming earns the call before a homeowner buys the wrong door at the hardware store. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Interior Door Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Interior Door Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Interior door
              installation
              customers are
              KC homeowners
              whose doors
              rub at the
              top corner,
              latch only
              when lifted,
              or have a
              gap at the
              bottom that
              has widened
              over five
              to ten years —
              the result
              of KC clay
              soil with
              plasticity
              index between
              thirty and
              fifty that
              shrinks during
              summer drought
              and expands
              during spring
              rain, producing
              seasonal foundation
              movement that
              racks the
              door frames
              in the upper
              floors of
              KC homes built
              between nineteen-sixty
              and nineteen-ninety;
              homeowners
              finishing a
              basement or
              adding a bonus
              room above
              a garage who
              need new doors
              hung in new
              framing; homeowners
              replacing hollow-core
              doors throughout
              a KC ranch
              home with
              solid-core
              doors for
              sound attenuation
              between a
              home office
              and living
              space; or
              homeowners
              whose existing
              door frames
              have swollen
              or split casing
              at the jamb
              and need the
              entire pre-hung
              unit replaced
              rather than
              just the slab.
              The central
              education is
              pre-hung door
              rough opening
              sizing as
              the dimension
              that determines
              whether the
              installation
              goes smoothly —
              a pre-hung
              door for a
              standard thirty-two-inch
              opening requires
              a rough opening
              of thirty-four
              inches wide
              and eighty-two
              and one-half
              inches tall:
              door width
              plus one-half
              inch for each
              jamb leg plus
              three-quarter
              inch for shimming
              each side;
              door height
              plus one and
              one-half inches
              for the head
              jamb and one-half
              inch of clearance
              at the bottom;
              a rough opening
              that is one
              inch too narrow
              cannot be
              shimmed into
              plumb — the
              frame will
              bind; a rough
              opening that
              is two inches
              too wide requires
              sistering
              the king stud
              to narrow
              the opening
              or the door
              will not latch
              correctly.
              KC settling
              and shimming
              for plumb —
              a KC home
              built in the
              nineteen-seventies
              on clay soil
              has floor
              framing that
              may be out
              of level by
              three-eighths
              to three-quarters
              inch across
              a thirty-two-inch
              opening due
              to differential
              seasonal movement;
              the door jamb
              must be shimmed
              plumb independent
              of the rough
              opening framing;
              shims at
              the hinge
              locations
              and at the
              strike plate
              location carry
              the load and
              hold the jamb
              in position;
              a door hung
              in an out-of-plumb
              jamb will
              drift open
              or closed
              under gravity
              and the latch
              bolt will
              miss the strike
              plate; solid-core
              versus hollow-core
              for KC applications:
              a solid-core
              door weighs
              twenty-five
              to thirty
              pounds more
              than a hollow-core
              slab of the
              same size
              and requires
              three hinges
              instead of
              two; solid-core
              provides an
              STC rating
              of thirty-two
              to thirty-seven
              versus twenty-eight
              to thirty-two
              for hollow-core —
              the difference
              is audible
              in a KC bonus
              room above
              a garage used
              as a home
              office or
              music room;
              door swing
              planning in
              KC homes —
              the door must
              swing away
              from the closet,
              into the room,
              and not block
              a light switch
              or an outlet
              when fully
              open. An interior
              door installation
              website that
              explains rough
              opening sizing,
              KC clay soil
              settling and
              shimming for
              plumb, and
              solid-core
              selection for
              sound attenuation
              earns the KC
              homeowner who
              needs doors
              that actually
              latch and
              wants to understand
              why the last
              one did not.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before interior door installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pre-hung vs. slab — when to replace the entire unit vs. just the door, jamb condition as the deciding factor",
                  "Rough opening dimensions — door width + 2 in wide, door height + 2 in tall, shimming allowance per side",
                  "KC settling and shimming — clay soil seasonal movement, plumb independent of rough opening, shim locations",
                  "Solid-core vs. hollow-core — STC rating difference, weight and hinge count, bonus room and home office use",
                  "Door swing — swing direction planning, clearance from switches and outlets, hand (left vs. right) selection",
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
                What your interior door installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rough opening section — standard sizing formula, what happens when opening is too narrow or too wide",
                  "Shimming section — KC clay soil settling, plumb process, hinge and strike plate shim locations",
                  "Pre-hung vs. slab section — jamb condition checklist, when casing damage requires full unit replacement",
                  "Material section — solid-core STC advantage, three-hinge requirement, hollow-core appropriate uses",
                  "Settling section — KC seasonal movement patterns, why doors that latched in spring bind in summer",
                  "Quote form with door count, hollow vs. solid preference, current problem (rubs, drifts, gaps), home age",
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
                &ldquo;The settling
                section explains
                something I
                used to spend
                ten minutes
                on every call.
                KC homeowners
                in older ranch
                homes are convinced
                the door they
                just bought
                is defective
                because it
                rubs at the
                top corner —
                they don&apos;t
                connect it
                to the clay
                soil that
                moves the
                house three-eighths
                of an inch
                every summer.
                After the section
                went up explaining
                that a KC
                home on clay
                sits on a
                living substrate
                and that the
                door frame
                moves with
                it, customers
                understood
                why shimming
                for plumb
                is a skill
                and not just
                screwing in
                hinges. The
                solid-core
                section also
                converts customers —
                once KC homeowners
                see the STC
                number difference
                and hear that
                their bonus
                room door
                will actually
                block sound
                to the hallway,
                the upgrade
                is an easy
                yes.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Caldwell, interior door installation and finish carpentry, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An interior door installation site with rough opening guide, KC
                settling section, and quote form starts at $200. A full site with
                shimming process, solid-core comparison, and pre-hung vs. slab
                content is $425–$750. One door installation covers the cost. No contracts, no monthly fees.
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
