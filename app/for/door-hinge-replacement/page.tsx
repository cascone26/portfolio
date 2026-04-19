import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Door Hinge Replacement Companies in Kansas City",
  description:
    "Custom websites for door hinge replacement, door hinge repair, and door adjustment companies in the Kansas City area. Show your stripped screw repair, hinge size matching by door weight, and hinge mortise depth to win door hinge contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/door-hinge-replacement",
  },
};

export default function DoorHingeReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Door Hinge Replacement Companies in Kansas City",
    description: "Custom websites for door hinge replacement and door repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Door Hinge Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a door that sags and rubs at the top is a hinge problem or a frame problem, how to fix screw holes that spin without holding, and whether hinge size matters when replacing old brass hinges with new ones. A website that explains door hinge replacement earns the repair call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Door Hinge Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Door Hinge Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Door hinge replacement customers
              are KC homeowners with
              a heavy solid-core door
              that sags until the
              top corner rubs the frame,
              homeowners who painted
              over the hinges during
              a room repaint and now
              the door sticks and
              squeals, or homeowners
              in older KC homes replacing
              original 3-inch loose-pin
              hinges with modern ball-bearing
              hinges because the pins
              have worn oval and the
              door rattles. The central
              education is stripped
              screw repair, hinge
              sizing by door weight
              and width, and mortise
              depth — three things
              that determine whether
              a hinge replacement
              fixes the sagging door
              or introduces new problems.
              Stripped screw repair:
              the most common cause
              of a sagging door in
              KC homes is not worn
              hinges but stripped
              screw holes in the
              door jamb — the hinge
              screws have pulled
              out of the soft pine
              or poplar jamb over
              years of heavy use;
              the fix is not longer
              screws (which do not
              reach framing) but
              gluing wooden toothpicks
              or a cut wooden dowel
              into the stripped hole,
              letting it dry, and
              re-driving the original
              screw into the filled
              hole; the more effective
              repair for a hinge
              that will be under
              constant load is replacing
              the standard 3/4-inch
              hinge screw with a
              3-inch screw that reaches
              from the hinge through
              the jamb and into the
              door frame stud — one
              3-inch screw per hinge
              in the top hole closest
              to the door stop eliminates
              the stripped jamb problem
              permanently. Hinge sizing:
              standard interior door
              hinges are 3.5 x 3.5
              inches for doors up
              to 80 pounds; heavy
              solid-core interior
              doors or exterior doors
              require 4 x 4 inch
              hinges; a door that
              uses 3.5-inch hinges
              but weighs over 80
              pounds will eventually
              sag even with new hinges
              because the leaf area
              is insufficient for
              the load; a solid-core
              door is recognizable
              by its weight — 80+
              pounds vs. 25–35 pounds
              for hollow core; KC
              homes with solid-core
              interior doors in main
              hallways and master
              bedrooms often have
              undersized hinges from
              original construction.
              Mortise depth: a hinge
              mortise that is cut
              too shallow leaves
              the hinge leaf proud
              of the jamb surface —
              the door does not close
              flat against the stop;
              a mortise cut too deep
              causes a hinge-bound
              door that is hard to
              close and springs open;
              correct mortise depth
              equals the hinge leaf
              thickness, typically
              0.093 inches for standard
              hinges; when replacing
              hinges with a different
              leaf thickness (upgrading
              from stamped steel to
              solid brass), the mortise
              may need to be deepened
              with a sharp chisel
              or shimmed with cardboard
              if the new leaf is
              thinner. A door hinge
              website that explains
              why doors sag, how
              stripped holes are
              fixed permanently,
              and what hinge size
              is needed earns the
              homeowner who has already
              tried the hardware
              store fix and it didn&apos;t hold.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before door hinge replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Sagging cause — stripped screw holes vs. worn hinge vs. frame problem, diagnosis by door gap pattern",
                  "Stripped hole repair — toothpick/dowel fill method, 3-inch stud screw method, which repair lasts",
                  "Hinge sizing — 3.5 vs. 4 inch by door weight, solid-core door weight recognition, undersized hinge failure",
                  "Ball-bearing vs. plain bearing — noise difference, load rating, when upgrade is worth it",
                  "Mortise depth — flush vs. proud vs. recessed leaf, chisel deepening, cardboard shimming",
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
                What your door hinge replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Sag diagnosis section — gap pattern test, stripped hole vs. worn hinge vs. frame rack cause",
                  "Stripped hole guide — toothpick fill, 3-inch screw method, permanent vs. temporary fix comparison",
                  "Hinge sizing section — weight table, solid-core recognition, when 4-inch hinges are required",
                  "Ball-bearing upgrade — when to upgrade, noise reduction, load improvement for heavy doors",
                  "Mortise depth section — flush installation standard, chisel deepening, shim approach for thin leaves",
                  "Quote form with door type, sag direction, existing hinge size, number of doors, timeline",
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
                &ldquo;The 3-inch screw section
                changed how customers think
                about the repair. Every
                customer who called me had
                already tried the toothpick
                fix from a YouTube video —
                and it held for six months,
                then the door sagged again.
                After the section went up
                explaining that a 3-inch
                screw through the jamb into
                the stud is the permanent
                solution, customers stopped
                calling it a temporary fix
                and started asking for the
                right repair the first time.
                The hinge sizing section
                also saved me a callback —
                I had a customer with a
                solid mahogany door in Brookside
                and 3.5-inch hinges from
                original construction. After
                the section explained why
                undersized hinges fail on
                heavy doors, she approved
                the 4-inch replacement without
                question.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Dunbar, door repair and carpentry, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A door hinge site with sag diagnosis section, stripped hole
                repair guide, and quote form starts at $200. A full site with
                hinge sizing, mortise depth, and ball-bearing upgrade content
                is $425–$750. One solid-core door repair covers the cost.
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
