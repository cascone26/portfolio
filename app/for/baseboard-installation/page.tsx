import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Baseboard Installation Companies in Kansas City",
  description:
    "Custom websites for baseboard installation, trim carpentry, and interior finish carpentry companies in the Kansas City area. Show your scarf joint process, coped inside corners, and out-of-level floor solutions to win baseboard installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/baseboard-installation",
  },
};

export default function BaseboardInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Baseboard Installation Companies in Kansas City",
    description: "Custom websites for baseboard installation and trim carpentry companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Baseboard Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why baseboards gap at inside corners after a season, how long runs are joined in the middle of a wall without a visible seam, and whether the floor being out of level has to be fixed before trim goes on. A website that explains the baseboard process earns the trim call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Baseboard Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Baseboard Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Baseboard installation
              customers are KC homeowners
              replacing builder-grade
              2-inch colonial base
              after a flooring install,
              homeowners finishing
              a basement and trimming
              out the space before
              paint, or homeowners
              remodeling a room
              and installing new
              trim as part of
              the complete update.
              The central education
              is scarf joints on
              long runs, coped inside
              corners, and scribing
              to an out-of-level
              floor — three things
              that determine whether
              baseboard looks installed
              by a professional
              or installed by a
              homeowner who watched
              a video.
              Scarf joints: a standard
              sheet of baseboard
              is 8 or 12 feet
              long — most KC living
              rooms and bedrooms
              have at least one
              wall longer than
              a single piece;
              joining two pieces
              on a long run requires
              a scarf joint —
              a 45-degree overlap
              where both pieces
              taper into each
              other over a stud;
              the scarf must land
              on a stud so both
              pieces can be nailed
              into solid backing;
              the overlap direction
              should face away
              from the primary
              view angle of the
              room — entering
              a room, the taper
              should open away
              from you so the
              shadow line is not
              visible; scarf joints
              glued with construction
              adhesive and nailed
              at the stud are
              invisible after
              paint — butt joints
              without a stud
              will gap as the
              wood moves.
              Coped inside corners:
              baseboard inside
              corners are handled
              the same as crown —
              one piece runs wall-to-wall,
              the second piece
              is coped (the face
              profile cut with
              a coping saw) to
              overlap the first;
              KC homes built before
              1970 rarely have
              true 90-degree inside
              corners — the plaster
              and lath wall system
              creates rounded
              or irregular corner
              returns; coping
              handles irregular
              corner geometry
              without requiring
              an exact angle
              measurement; mitered
              inside corners on
              baseboard open within
              one heating season
              in KC as the MDF
              or wood absorbs
              and releases moisture.
              Out-of-level floors:
              KC homes — particularly
              those built 1950–1980
              with post-and-beam
              basements — frequently
              have floors that
              are 1/4 to 1/2
              inch out of level
              over a 10-foot
              run; baseboard installed
              level will gap at
              the floor on one
              end; baseboard installed
              following the floor
              will have a visible
              tilt visible at
              door casings; the
              correct approach
              is to scribe the
              bottom edge — scribing
              means transferring
              the floor contour
              to the baseboard
              bottom edge with
              a compass and cutting
              the irregular line
              so the top of the
              baseboard runs level
              while the bottom
              follows the floor;
              scribing takes longer
              but produces a
              result that looks
              correct from both
              the floor and the
              door opening view.
              A baseboard website
              that explains scarf
              joint placement,
              why coped corners
              outlast mitered
              ones in KC homes,
              and how out-of-level
              floors are handled
              without shimming
              earns the homeowner
              who has been putting
              off the trim work
              because they weren&apos;t
              sure it could be
              done right.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before baseboard installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Scarf joints — stud landing requirement, overlap direction, glue and nail process for invisible seam",
                  "Coped inside corners — profile cut process, irregular corner handling, why miters open in KC humidity",
                  "Out-of-level floors — scribe technique, compass transfer process, top level vs. bottom follow decision",
                  "Nail gun vs. hand nail — 15 or 16-gauge finish nail standard, nail hole size by gauge, filler before paint",
                  "MDF vs. wood baseboard — moisture sensitivity difference, painting vs. staining, KC humidity considerations",
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
                What your baseboard installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Scarf joint section — stud requirement, angle and direction, glue and nail process, when butt joints fail",
                  "Corner joint guide — coped vs. mitered inside corner, KC irregular corner handling, outside corner miter",
                  "Floor level section — out-of-level KC home common causes, scribe technique, compass transfer process",
                  "Material section — MDF vs. wood tradeoffs, paint-grade vs. stain-grade, moisture expansion in basements",
                  "Nailing section — 15 vs. 16-gauge finish nail, stud location, hole filler before paint, caulk at ceiling line",
                  "Quote form with linear footage, material preference, floor level concern, basement or above-grade",
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
                &ldquo;The out-of-level floor
                section is the one that
                gets referenced most by
                people calling me. KC homes
                are old and they move —
                everyone who has lived in
                a 1960s KC ranch has seen
                the marble roll. After the
                section went up explaining
                the scribe technique, customers
                stopped asking &apos;can the floor
                be fixed first&apos; and started
                asking &apos;can you scribe to
                the floor.&apos; Those are completely
                different conversations.
                The scarf joint section
                also helped on basements —
                customers doing long basement
                walls in Overland Park
                had no idea you needed
                a stud at the joint. Two
                of them caught it in time
                and I didn&apos;t have to redo
                work.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Guerrero, trim carpentry and finish work, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A baseboard site with scarf joint section, coped corner
                guide, and quote form starts at $200. A full site with
                out-of-level floor handling, material comparison, and
                nailing guide is $425–$750. One room of baseboard covers
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
