import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Wainscoting Installation Companies in Kansas City",
  description:
    "Custom websites for wainscoting installation, board and batten, and interior trim carpentry companies in the Kansas City area. Show your chair rail height standard, panel layout process, and MDF vs. wood selection to win wainscoting contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/wainscoting-installation",
  },
};

export default function WainscotingInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Wainscoting Installation Companies in Kansas City",
    description: "Custom websites for wainscoting installation and board-and-batten trim carpentry companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Wainscoting Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what height the chair rail should be, whether panels need to be perfectly equal on every wall, and whether MDF or wood holds up better in a KC bathroom where humidity swings are significant. A website that explains the wainscoting layout process earns the trim carpentry call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Wainscoting Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Wainscoting Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Wainscoting installation
              customers are KC homeowners
              upgrading a dining
              room or entryway
              that feels plain
              from ceiling to floor,
              homeowners doing
              a primary bedroom
              or bathroom renovation
              and wanting architectural
              detail on the lower
              wall, or homeowners
              who saw board-and-batten
              in a renovation show
              and want the same
              look in a hallway.
              The central education
              is chair rail height,
              panel layout math,
              and material selection
              — three things that
              determine whether
              the finished result
              looks designed and
              proportional or
              looks like trim
              stuck to a wall.
              Chair rail height:
              the chair rail cap
              is the horizontal
              molding that tops
              the wainscoting
              panel zone; standard
              chair rail height
              is 32–36 inches
              from the finished
              floor — one-third
              of the wall height
              in a standard 8-foot
              room; in rooms
              with 9-foot ceilings
              the proportion shifts
              slightly higher
              (36–40 inches) to
              maintain the one-third
              visual relationship;
              in bathrooms the
              chair rail is typically
              set at 54–60 inches
              to keep the wainscoting
              above the backsplash
              zone around the
              sink; setting the
              chair rail height
              requires snapping
              a level line around
              the entire room
              before any panels
              are cut — an unlevel
              chair rail in a
              room with a level
              floor is one of
              the most visible
              trim errors.
              Panel layout: raised
              panel wainscoting
              uses individual
              frames with a center
              panel floating inside;
              board-and-batten
              uses vertical boards
              (battens) applied
              over a sheet backer
              (1/4-inch MDF or
              plywood) at even
              spacing; the layout
              challenge is distributing
              panels or battens
              so they are visually
              equal on each wall
              without landing
              at an odd width
              at corners; the
              layout starts with
              measuring each wall,
              dividing by the
              target panel count,
              and adjusting slightly
              to avoid a partial
              panel at the corner;
              a 144-inch wall
              divided into 6
              equal panels at
              24-inch spacing
              is simple; a 152-inch
              wall requires either
              7 panels (21.7-inch
              each) or adjusting
              the outside two
              panels slightly
              wider to absorb
              the remainder;
              corners are the
              critical junction —
              in-corner panel
              returns require
              a full panel width
              to avoid a slivered
              strip at the inside
              corner.
              Material selection:
              paint-grade MDF
              wainscoting is
              the most common
              choice for KC
              residential — it
              machines cleanly,
              takes paint without
              grain telegraphing,
              and is dimensionally
              consistent; MDF
              is not moisture-resistant —
              in bathrooms without
              a ventilation fan
              that runs during
              every shower, MDF
              panel edges will
              swell at the floor
              line within two
              years; moisture-resistant
              MDF (MRDF, green-core)
              performs better
              in bathroom installations;
              solid wood (poplar
              for paint, oak or
              maple for stain)
              is more durable
              in wet locations
              but moves more
              with KC humidity
              swings — panel
              frames and boards
              must be given expansion
              gaps or the material
              will buckle during
              summer. A wainscoting
              website that explains
              the one-third height
              rule, how panel
              layout handles
              corner remainders,
              and why bathroom
              MDF selection matters
              earns the homeowner
              who wants a result
              that holds up and
              looks proportional.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before wainscoting installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Chair rail height — one-third wall rule, 9-foot ceiling adjustment, bathroom height standard, level line method",
                  "Panel layout math — equal distribution process, corner remainder handling, partial panel avoidance",
                  "Board-and-batten vs. raised panel — backer sheet vs. individual frames, batten spacing standard",
                  "MDF vs. wood — moisture sensitivity, bathroom ventilation requirement, MRDF option, solid wood expansion",
                  "Finishing — paint-grade primer and fill process, caulk vs. gap at floor, painted vs. stained trim matching",
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
                What your wainscoting installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Chair rail height section — one-third rule by ceiling height, bathroom standard, level line process",
                  "Panel layout guide — equal distribution math, corner handling, raised panel vs. board-and-batten layout",
                  "Style section — raised panel vs. board-and-batten visual comparison, common KC applications by room",
                  "Material section — standard MDF vs. MRDF for bathrooms, solid wood expansion in KC humidity, finishing difference",
                  "Finishing section — primer and fill for MDF, caulk joints before vs. after paint, matching existing trim",
                  "Quote form with room dimensions, ceiling height, style preference, bathroom or dry location, timeline",
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
                &ldquo;The bathroom MDF section
                saved me from a callback
                that would have cost more
                than the original job. I
                had a customer in Prairie
                Village who wanted standard
                MDF board-and-batten in
                a primary bathroom with
                no exhaust fan. After the
                section went up explaining
                the moisture problem with
                MDF edges at the floor line,
                she read it before the install,
                asked about MRDF, and we
                used moisture-resistant
                board throughout. Two years
                later and no swelling. Before
                the section, I would have
                installed standard MDF because
                that&apos;s what was specified,
                and I would have been back
                to replace swollen bottom
                edges within a year.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Kostruba, finish carpentry and trim work, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A wainscoting site with chair rail height section, panel
                layout guide, and quote form starts at $200. A full site
                with material selection, board-and-batten style guide,
                and finishing content is $425–$750. One dining room
                installation covers the cost. No contracts, no monthly fees.
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
