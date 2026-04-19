import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Casing Installation Companies in Kansas City",
  description:
    "Custom websites for window casing installation, interior trim carpentry, and window finish carpentry companies in the Kansas City area. Show your reveal measurement, back-bevel technique on out-of-plumb frames, and mitered vs. butt-cap head casing to win window trim contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-casing-installation",
  },
};

export default function WindowCasingInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Casing Installation Companies in Kansas City",
    description: "Custom websites for window casing installation and interior trim carpentry companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Casing Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what the reveal is and why it matters, whether window casing requires mitered corners or can use a butt-cap head, and how trim is fitted when the window frame is out of plumb. A website that explains window casing earns the trim carpentry call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Casing Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Casing Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window casing installation
              customers are KC homeowners
              replacing builder-grade
              casing after new windows
              went in and the old
              trim no longer fits,
              homeowners doing
              a room renovation
              and upgrading the
              window trim to match
              new baseboard and
              door casing they
              are installing throughout,
              or homeowners finishing
              a basement and casing
              the egress windows
              and basement windows
              for a clean finished
              look. The central
              education is reveal
              measurement, back-bevel
              technique for out-of-plumb
              frames, and the
              choice between mitered
              corners and the
              traditional butt-cap
              head — three things
              that separate window
              casing that looks
              professionally fitted
              from casing that
              looks like trim
              forced onto a wall.
              Reveal: the reveal
              is the setback of
              the casing edge
              from the interior
              edge of the window
              jamb — standard
              reveal is 3/16
              to 1/4 inch, creating
              a small step between
              the jamb face and
              the casing face;
              the reveal must
              be consistent on
              all four sides of
              the window — an
              inconsistent reveal
              telegraphs immediately
              at the corner miters
              where any variation
              in the reveal distance
              creates a miter
              that does not close
              flat; reveal is
              marked by running
              a combination square
              set to 3/16 inch
              around the entire
              jamb before any
              casing is cut or
              nailed; in KC homes
              built before 1970,
              window jambs are
              frequently not square
              or level — running
              the reveal line
              exposes any jamb
              irregularities before
              they become a trim
              problem. Back-bevel:
              when a window frame
              is out of plumb
              or out of level
              (common in KC homes
              from 1950–1980 where
              wood framing has
              racked or settled),
              a casing piece cut
              at 90 degrees will
              not lie flat against
              the wall — there
              will be a gap at
              the back edge;
              back-beveling is
              cutting a 1–2 degree
              angle on the back
              face of the casing
              so the front face
              contacts the wall
              cleanly while the
              back edge clears
              the irregular frame;
              this is cut on
              the table saw by
              tilting the fence
              slightly — it takes
              30 seconds per piece
              and eliminates the
              gapped-back look
              that occurs when
              flat-cut casing
              is forced against
              a bowed frame.
              Head casing options:
              mitered corners
              on window casing
              join the head casing
              and side legs at
              45 degrees — this
              works well when
              the window frame
              is square and the
              casing profile
              is symmetrical;
              the butt-cap head
              is the traditional
              alternative — the
              side legs terminate
              at a square shoulder
              cut and the head
              casing (often a
              wider or thicker
              piece) butts on
              top, extending
              past the legs by
              1/4 to 1/2 inch
              on each side as
              a visual cap; in
              pre-1960 KC homes
              with Colonial and
              craftsman trim
              profiles, the butt-cap
              head is the period-appropriate
              detail and easier
              to fit on frames
              that are not perfectly
              square; in contemporary
              KC renovations using
              flat casing profiles,
              mitered corners
              are standard. A
              window casing website
              that explains what
              the reveal is and
              why it must be
              consistent, how
              back-bevel handles
              out-of-plumb frames
              without shimming,
              and when to use
              a butt-cap head
              earns the homeowner
              who wants trim
              that looks fitted
              rather than forced.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before window casing installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Reveal measurement — standard 3/16 to 1/4 inch setback, consistency requirement, combination square method",
                  "Back-bevel technique — out-of-plumb frame handling, table saw tilt method, when flat-cut fails",
                  "Head casing style — mitered corners vs. butt-cap head, craftsman vs. contemporary profiles, period-appropriate detail",
                  "Nailing pattern — jamb nail vs. wall stud nail, 15-gauge finish nail size, nail hole fill before paint",
                  "Profile matching — matching existing casing in older KC homes, paint-grade MDF vs. finger-jointed pine, stain-grade options",
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
                What your window casing installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Reveal section — standard measurement, consistency check method, how irregular jambs are found before cutting",
                  "Back-bevel guide — when it is needed, table saw method, difference between back-bevel and shimming",
                  "Head casing section — mitered vs. butt-cap comparison, craftsman and colonial profile applications, KC home style match",
                  "Nailing section — two-point nail pattern, 15-gauge finish nail, hole fill and caulk before paint",
                  "Profile matching guide — measuring existing casing profile for replacement, MDF vs. pine options, stain-grade sourcing",
                  "Quote form with window count, existing trim style, wall condition concern, material preference, timeline",
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
                &ldquo;The reveal section is the
                one I get the most questions
                about. People buying older
                KC homes — anything in Waldo
                or Brookside built in the
                50s — had no idea what the
                reveal was or why their
                previous trim looked uneven
                at the corners. After the
                section went up explaining
                the 3/16-inch standard and
                why consistency is everything,
                customers started sending
                me photos of their existing
                trim pointing at inconsistent
                reveals and asking if that
                was the problem. Nine times
                out of ten it was. The
                back-bevel section also
                helped with Waldo jobs where
                the frames are never square
                — customers stopped assuming
                the trim would just sit flat
                and started asking about
                it upfront.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Harrington, interior trim carpentry, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window casing site with reveal section, back-bevel guide,
                and quote form starts at $200. A full site with head casing
                comparison, profile matching guide, and nailing content is
                $425–$750. One room of window casing covers the cost.
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
