import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Floating Shelf Installation Companies in Kansas City",
  description:
    "Custom websites for floating shelf installation, wall shelf, and built-in shelf companies in the Kansas City area. Show your stud vs. anchor selection, load capacity by bracket type, and level method on wavy plaster walls to win floating shelf contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/floating-shelf-installation",
  },
};

export default function FloatingShelfInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Floating Shelf Installation Companies in Kansas City",
    description: "Custom websites for floating shelf installation and wall shelf companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Floating Shelf Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know if a floating shelf can hold books, how anchors work when studs are not where they need them, and how shelves are leveled on KC plaster walls that are not flat. A website that explains floating shelf installation earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Floating Shelf Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Floating Shelf Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Floating shelf installation
              customers are KC homeowners
              adding display shelving
              in a living room where
              the studs do not line
              up with the shelf spacing
              they want, homeowners
              creating a reading nook
              or office wall with
              book-loaded shelves that
              must actually hold weight,
              or homeowners finishing
              a basement and adding
              utility shelves to storage
              rooms and laundry areas.
              The central education
              is stud vs. anchor selection
              for the load, bracket
              type by weight requirement,
              and how level is achieved
              on KC plaster walls that
              are not flat — three
              things that determine
              whether a shelf holds
              and looks right or pulls
              out of the wall in six
              months.
              Stud vs. anchor: a shelf
              that carries books or
              meaningful weight must
              be anchored to studs —
              the standard drywall
              anchor (toggle bolt,
              molly bolt) rated for
              50 pounds is a static
              rating; books loaded to
              the edge of a shelf create
              leverage on the anchor
              that multiplies the effective
              pull-out load by the
              lever arm length — a
              36-inch shelf loaded with
              25 pounds of books at
              the outer edge creates
              significantly more pull-out
              force at the near bracket
              than the book weight suggests;
              stud-mounted brackets
              (lag screws or 3-inch
              wood screws into the stud)
              carry much higher load
              without fail; when studs
              are not in the right position
              for the shelf layout,
              a French cleat system
              (a horizontal ledger
              board screwed to multiple
              studs across the span)
              distributes load across
              all studs regardless of
              where individual brackets
              land; KC pre-1970 plaster
              walls have metal lath
              behind them — standard
              stud finders often give
              false readings through
              lath; probing with a
              finish nail to find solid
              framing is more reliable
              in older KC homes.
              Bracket type: standard
              L-brackets are rated
              by the manufacturer but
              the shelf bracket length
              (the horizontal arm supporting
              the shelf) must be at
              least 2/3 of the shelf
              depth for adequate support;
              a 10-inch deep shelf needs
              a bracket arm at least
              6.5 inches long — shorter
              arms create a fulcrum
              point and the shelf tips
              under load; floating shelf
              systems that hide the
              bracket entirely (IKEA
              LACK style) use blind
              shelf supports — horizontal
              rods embedded in the
              shelf that insert into
              drilled holes in a mounting
              plate — these have a lower
              weight limit than exposed
              brackets and are not suitable
              for books or heavy items;
              heavy-duty decorative brackets
              (powder-coated steel, cast
              iron) mounted into studs
              are the correct choice
              for loaded shelving.
              Leveling on plaster: KC
              homes built before 1960
              with plaster walls are
              rarely flat — the plaster
              coat follows the lath
              and framing which has
              moved over decades; a
              shelf mounted flush to
              a bowed plaster wall
              will appear tilted because
              the visible shelf edge
              diverges from a true
              level line; the correct
              approach is to level
              the brackets from a laser
              level or long spirit level
              set to true level, then
              shim each bracket off
              the wall as needed to
              meet the mounting plate
              at a consistent height
              — the gap between bracket
              and wall surface is hidden
              behind the shelf. A floating
              shelf website that explains
              why stud mounting matters
              for book weight, how
              French cleats solve off-stud
              positioning, and how plaster
              walls are leveled earns
              the homeowner who wants
              shelves that hold and
              look intentional.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before floating shelf installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Stud vs. anchor — load calculation with leverage, stud-mount requirement for books, toggle bolt limitations",
                  "French cleat — how it distributes load across multiple studs, when to use vs. individual brackets",
                  "Bracket length — 2/3 depth rule, fulcrum failure from short arms, hidden vs. exposed bracket limits",
                  "Plaster wall stud finding — metal lath interference, nail probe method for older KC homes",
                  "Leveling on wavy walls — laser level method, shimming brackets, shelf edge vs. plaster surface",
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
                What your floating shelf installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Load section — stud mount requirement, lever arm load math, anchor rating vs. real-world book load",
                  "French cleat guide — construction and installation, load distribution across studs, weight capacity",
                  "Bracket selection — arm length rule, exposed vs. hidden bracket limits, heavy-duty option for books",
                  "Plaster wall section — lath interference with stud finders, nail probe method, older KC home considerations",
                  "Leveling section — laser vs. spirit level method, shimming process, plaster wave handling",
                  "Quote form with shelf dimensions, wall type, intended use, stud location concern, timeline",
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
                &ldquo;The lever arm section stopped
                customers from calling me
                after anchor failures. Before,
                I&apos;d get calls where customers
                had tried anchors from the
                hardware store and the shelf
                pulled out in a month. After
                the section went up explaining
                that books on a long shelf
                create leverage that multiplies
                the pull-out force, customers
                started asking specifically
                for stud mounting. The French
                cleat section brought in two
                jobs where customers wanted
                gallery walls in Waldo Victorians —
                old plaster, studs spaced
                irregularly, no way to line
                up individual brackets. Both
                of them read the French cleat
                section and called me to do
                it right instead of trying
                with anchors.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Reyes, interior shelving and carpentry, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A floating shelf site with load section, French cleat guide,
                and quote form starts at $200. A full site with bracket
                selection, plaster wall content, and leveling guide is
                $425–$750. One shelf installation covers the cost.
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
