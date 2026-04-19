import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Chair Rail Installation Companies in Kansas City",
  description:
    "Custom websites for chair rail installation, interior molding, and wall trim companies in the Kansas City area. Show your one-third height rule, coped vs. mitered corner method, and transition at door casings to win chair rail contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/chair-rail-installation",
  },
};

export default function ChairRailInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Chair Rail Installation Companies in Kansas City",
    description: "Custom websites for chair rail installation and interior molding companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Chair Rail Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how high chair rail should be in their specific room, whether the line has to be level even if the floor is not, and how chair rail is handled at a doorway where no casing is present. A website that explains chair rail installation earns the trim call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Chair Rail Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Chair Rail Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Chair rail installation
              customers are KC homeowners
              adding a traditional wall
              break to a dining room
              that feels unfinished,
              homeowners pairing chair
              rail with wainscoting
              panels below and a paint
              color change above to
              give a room definition,
              or homeowners in older
              KC homes restoring period
              detail in a front hallway
              or living room that originally
              had chair rail and has
              since been stripped. The
              central education is the
              one-third height rule,
              running the level line
              correctly around a room
              with KC&apos;s out-of-level
              floors, and how chair
              rail terminates at doorways —
              three things that separate
              a chair rail that looks
              designed from one that
              looks applied.
              Height rule: the traditional
              chair rail height is one-third
              of the total wall height
              measured from the finished
              floor — in a standard 8-foot
              room this is 32 inches;
              the range of 32 to 36
              inches is conventional,
              with the higher end (36
              inches) used in rooms
              with 9-foot ceilings to
              maintain the one-third
              proportion as the ceiling
              rises; chair rail below
              30 inches looks too low
              and loses the wall division
              proportion entirely; in
              rooms with no clear ceiling
              height reference (sloped
              ceiling, vaulted section),
              the chair rail height is
              set by visual proportion —
              the rail should appear
              to divide the wall at
              roughly one-third from
              the floor at the dominant
              viewing angle. Level line:
              chair rail must be installed
              level, not following the
              floor, even in KC homes
              where the floor is 1/4
              to 1/2 inch out of level
              over the length of a room;
              a chair rail that follows
              an out-of-level floor appears
              tilted at every doorway
              and corner; the level line
              is established by snapping
              a chalk line at the target
              height from a level reference
              point (a laser level across
              the room or a water level
              on long walls) — this line
              goes around all four walls
              before any cutting begins;
              at an out-of-level floor,
              the gap between the floor
              and the rail bottom will
              be visible on the low side —
              this gap is smaller than
              the visual problem created
              by tilted rail and is not
              noticed by anyone who is
              not looking for it.
              Doorway termination: chair
              rail that runs up to a
              doorway in a room terminates
              at the door casing — the
              rail butts against the
              door casing face with
              a return cut that wraps
              the end back to the wall;
              in rooms where doorways
              do not have casing (open
              archways or doorways to
              be cased later), the rail
              terminates with a mitered
              return cut — a 45-degree
              miter turned back to the
              wall that wraps the exposed
              end; the return is glued
              and nailed and is nearly
              invisible when painted.
              A chair rail website that
              explains the one-third
              rule by ceiling height,
              why the level line is
              always used even on unlevel
              floors, and how doorway
              terminations are finished
              earns the homeowner who
              wants a result that looks
              considered from every
              angle in the room.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before chair rail installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Height rule — one-third standard by ceiling height, 8-foot vs. 9-foot adjustment, minimum and maximum range",
                  "Level line — level vs. floor-following, chalk line method, laser level approach, floor gap visibility",
                  "Doorway termination — butt against casing, mitered return on open archways, painted return appearance",
                  "Corner joints — coped inside corners, outside corner miter, KC humidity movement at joints",
                  "Profile selection — simple flat cap vs. ogee profile, MDF vs. wood, matching existing trim in room",
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
                What your chair rail installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Height section — one-third rule by ceiling height, 8-foot and 9-foot standards, visual proportion guide",
                  "Level line section — why level not floor, chalk line process, laser level method, floor gap explanation",
                  "Doorway section — butt against casing method, mitered return detail, how return is finished",
                  "Corner joint guide — coped inside corners, outside corner miters, KC seasonal movement handling",
                  "Profile and material section — flat cap vs. profiled rail, MDF painting, wood stain option, matching existing",
                  "Quote form with room dimensions, ceiling height, doorway count, existing trim profile, timeline",
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
                &ldquo;The level line section is
                what I reference most when
                a customer asks why the
                chair rail doesn&apos;t follow
                the floor. KC dining rooms —
                especially in 1960s ranches
                in Leawood and Overland Park —
                almost always have a floor
                that drops toward the exterior
                wall. The section explaining
                that level rail with a floor
                gap looks correct while tilted
                rail looks wrong from every
                doorway is exactly what customers
                need to hear before the job
                starts. After the section
                went up, customers stopped
                asking me to follow the floor
                and started asking me to
                confirm the level line height
                on both sides before I started
                cutting. Better conversations,
                better outcomes.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Morrow, trim carpentry and molding, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A chair rail site with height section, level line guide, and
                quote form starts at $200. A full site with doorway termination
                detail, corner joint handling, and profile selection content
                is $425–$750. One room of chair rail covers the cost.
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
