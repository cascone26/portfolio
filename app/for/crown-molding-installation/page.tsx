import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Crown Molding Installation Companies in Kansas City",
  description:
    "Custom websites for crown molding installation, trim carpentry, and interior finish carpentry companies in the Kansas City area. Show your coping vs. mitering process, spring angle selection, and out-of-plumb wall solutions to win crown molding contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/crown-molding-installation",
  },
};

export default function CrownMoldingInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Crown Molding Installation Companies in Kansas City",
    description: "Custom websites for crown molding installation and trim carpentry companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Crown Molding Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why inside corners look gapped after a few months, how crown molding is handled when the ceiling isn&apos;t flat, and what spring angle means when they&apos;re trying to order the right profile. A website that explains the crown molding process earns the trim carpentry call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Crown Molding Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Crown Molding Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Crown molding installation
              customers are KC homeowners
              adding trim to a finished
              room that feels unfinished,
              homeowners doing a
              renovation and upgrading
              from builder-grade 2-inch
              casing to something with
              architectural presence,
              or homeowners repainting
              a room and finally
              addressing the gap
              at the ceiling line.
              The central education
              is coping vs. mitering
              inside corners, spring
              angle, and how out-of-plumb
              walls are handled —
              three things that
              separate a crown
              installation that
              looks professional
              for ten years from
              one that opens at
              every corner by
              spring.
              Coping vs. mitering:
              a mitered inside corner
              joins two pieces of
              crown at a 45-degree
              cut — it works perfectly
              only when the corner
              is exactly 90 degrees
              and the room is at
              a constant temperature;
              KC homes with wood
              framing and seasonal
              humidity swings between
              20% in January and
              70% in July cause
              mitered inside corners
              to open as the molding
              expands and contracts;
              coping is the professional
              approach — one piece
              runs wall-to-wall,
              the second piece
              has its face profile
              cut with a coping
              saw to overlap the
              first piece; a coped
              joint can move with
              wood expansion and
              the overlap keeps
              the seam tight year-round;
              outside corners
              are always mitered
              — there is no coped
              alternative for
              an outside corner.
              Spring angle: crown
              molding is not flat
              against the wall —
              it sits at an angle
              between the wall
              and ceiling called
              the spring angle;
              the two standard
              spring angles are
              38 degrees (common
              for smaller profiles,
              paint-grade MDF
              crown) and 45 degrees
              (larger architectural
              profiles, stain-grade
              wood);
              the spring angle
              determines both
              the compound miter
              angles on the saw
              and how the molding
              sits in the miter
              saw for a flat
              cut; mixing profiles
              with different spring
              angles in the same
              room creates visible
              inconsistency at
              corners — all molding
              in a room should
              be the same spring
              angle; identifying
              the spring angle
              before ordering
              replacement pieces
              for a repair requires
              holding the molding
              against a flat surface
              and measuring the
              triangle at the
              back. Out-of-plumb
              walls: KC homes
              built before 1960
              frequently have
              walls that are
              not 90 degrees
              to the ceiling —
              plaster walls in
              particular develop
              waves over decades;
              out-of-plumb walls
              require shimming
              the molding off
              the wall at the
              high point or back-cutting
              the spring angle
              slightly so the
              molding holds tight
              at both the wall
              and ceiling contact
              line; a crown molding
              installation that
              follows a wavy wall
              exactly will have
              visible light gaps
              at the ceiling line
              — the correct approach
              is to find the
              high point, set
              to that, and caulk
              the tight-contact
              wall line. Blocking:
              large crown profiles
              (4.5-inch and above)
              in KC homes with
              standard 2x4 framing
              benefit from a
              triangular blocking
              strip nailed at
              the wall-ceiling
              junction — the
              blocking provides
              a continuous nailer
              and eliminates
              spring tension
              over long spans,
              preventing sag
              between studs on
              wide walls.
              A crown molding
              website that explains
              why coped corners
              outlast mitered
              ones in KC&apos;s climate,
              how spring angle
              affects the order,
              and how wavy old
              walls are handled
              earns the homeowner
              who wants a result
              that looks professional
              from the day it
              goes up.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before crown molding installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Coping vs. mitering — inside corner joint method, why miters open in KC humidity swings, coped overlap benefit",
                  "Spring angle — 38 vs. 45-degree standard, how spring angle affects saw angles, mixing profiles in same room",
                  "Out-of-plumb walls — old plaster wave handling, shimming vs. back-cutting, caulk line at ceiling",
                  "Blocking — triangular backing strip benefit, large profile sag prevention, nailer over empty stud bays",
                  "Profile selection — paint-grade MDF vs. stain-grade wood, size relative to room height, matching existing",
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
                What your crown molding installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Corner joint section — coping process, why miters fail in KC seasons, outside corner miter standard",
                  "Spring angle guide — 38 vs. 45 degree profiles, how to identify existing molding angle, saw setup",
                  "Wall condition section — plumb check, shimming technique, back-cut approach for wavy plaster walls",
                  "Blocking section — when blocking is needed, triangular backer installation, long-span sag prevention",
                  "Profile selection guide — MDF vs. wood, height-appropriate sizing, matching existing trim in older KC homes",
                  "Quote form with room dimensions, ceiling height, existing trim style, out-of-square wall concern",
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
                &ldquo;The coping section solved
                my biggest recurring problem.
                Every spring I&apos;d get calls
                from customers whose inside
                corners opened up over
                winter — always the same
                story, always mitered joints
                from a different contractor.
                After the section went up
                explaining that miters open
                with wood movement and coping
                is what holds year-round,
                customers started asking
                specifically for coped corners.
                They came in knowing what
                they wanted. The spring angle
                section also saved two customers
                from ordering the wrong replacement
                pieces — they found out
                how to identify the spring
                angle before they called
                a supplier, matched it correctly,
                and the repair was seamless.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Fitch, finish carpentry and trim installation, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A crown molding site with coping section, spring angle
                guide, and quote form starts at $200. A full site with
                out-of-plumb wall handling, blocking guide, and profile
                selection content is $425–$750. One room of crown covers
                the cost. No contracts, no monthly fees.
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
