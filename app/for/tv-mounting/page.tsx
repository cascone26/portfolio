import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for TV Mounting Companies in Kansas City",
  description:
    "Custom websites for TV mounting, wall-mounted TV, and home theater installation companies in the Kansas City area. Show your KC wood-frame stud spacing for TV mount anchoring, in-wall power kit cord management for KC homes, and tilt vs. full-motion mount selection for KC living room layouts to win TV mounting contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tv-mounting",
  },
};

export default function TvMountingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for TV Mounting Companies in Kansas City",
    description: "Custom websites for TV mounting and home theater installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for TV Mounting Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their wall can support a 75-inch TV, how to hide the cords behind the drywall legally, and whether a tilt or full-motion mount is right for their room. A website that explains TV mounting earns the call from the homeowner who wants a clean, professional installation and doesn&apos;t want to put holes in the wrong place. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For TV Mounting in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">TV Mounting</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              TV mounting customers
              are KC homeowners
              who bought a
              sixty-five-inch
              or larger television
              and want it
              mounted on
              the wall rather
              than placed
              on furniture —
              for the clean
              look, the viewing
              angle, and
              the floor space —
              but who are
              uncertain about
              whether their
              wall can support
              the weight,
              how to locate
              studs in a
              standard KC
              wood-frame
              home where
              sixteen-inch
              on-center framing
              may land between
              the VESA bolt
              pattern of
              their mount,
              and how to
              handle the
              power cord
              and HDMI cables
              that hang
              visibly from
              a wall-mounted
              TV when the
              outlet is
              at baseboard
              height; homeowners
              mounting above
              a fireplace
              who want to
              understand
              the heat exposure
              concern and
              mounting height
              trade-offs
              for viewing
              angle comfort;
              or homeowners
              who attempted
              a DIY mount
              and found
              the studs did
              not align with
              the mount&apos;s
              bolt holes
              and want a
              professional
              to solve the
              anchor problem.
              The central
              education is
              stud location
              and anchor
              method as
              the structural
              decision that
              determines
              whether a
              wall-mounted
              TV is safe —
              a sixty-five-inch
              TV weighing
              sixty to eighty
              pounds on
              a full-motion
              arm exerts
              significant
              lever force
              on mount bolts;
              bolts into
              wood studs
              at standard
              one-and-five-eighths-inch
              lag screws
              into sixteen-inch
              on-center KC
              wood framing
              provide three
              hundred to
              five hundred
              pounds shear
              strength per
              bolt; toggle
              bolts or drywall
              anchors in
              gypsum alone
              are not rated
              for TV mounting
              loads above
              thirty to
              forty pounds
              and will pull
              through under
              dynamic load;
              the in-wall
              power kit as
              the code-compliant
              cord management
              solution that
              routes power
              and AV cables
              inside the
              wall cavity
              between an
              outlet behind
              the TV and
              a new outlet
              at baseboard —
              NEC Article
              725 allows
              Class 2 rated
              AV cables to
              run inside
              wall cavities;
              a standard
              extension cord
              or power strip
              run inside
              a wall is
              a code violation
              that voids
              homeowner&apos;s
              insurance
              in a fire
              claim — an
              in-wall power
              kit uses a
              listed in-wall
              power supply
              that is rated
              for this application —
              and mount
              type selection
              as the combination
              of viewing
              angle flexibility
              and wall extension
              that determines
              whether a
              fixed flat,
              tilting, or
              full-motion
              articulating
              arm mount
              is right for
              a specific
              room geometry.
              Stud and anchor
              selection:
              most KC residential
              walls are
              framed with
              two-by-four
              studs sixteen
              inches on
              center; a
              magnetic or
              electronic
              stud finder
              locates studs
              reliably, but
              VESA bolt
              patterns on
              large TVs
              commonly fall
              between studs
              — a mount
              with a wide
              horizontal
              rail bridges
              the VESA
              width to stud
              spacing; lag
              screws into
              two-by-four
              framing require
              pre-drilling
              a pilot hole
              to prevent
              stud splitting;
              for walls
              without stud
              access at
              the mount
              location —
              concrete block,
              metal framing,
              or solid masonry
              in older KC
              homes — masonry
              anchors or
              toggle bolts
              in the appropriate
              substrate provide
              equivalent
              load rating;
              above-fireplace
              mounting places
              the TV at
              eye level when
              standing but
              above comfortable
              seated viewing
              angle — tilt
              mounts that
              allow fifteen
              to twenty
              degrees downward
              tilt are
              the correct
              solution for
              above-mantle
              placement; heat
              rising from
              a wood-burning
              KC fireplace
              can exceed
              the operating
              temperature
              range of most
              LCD and OLED
              panels — gas
              fireplaces
              with sealed
              glass fronts
              produce less
              radiant heat
              than wood-burning
              and are less
              of a concern
              if the TV
              is mounted
              above the
              mantle. A TV
              mounting website
              that explains
              stud location
              and load-rated
              anchor requirements
              for KC wood-frame
              walls, in-wall
              power kit
              as the code-compliant
              cord management
              solution, and
              mount type
              selection for
              room geometry
              and fireplace
              placement earns
              the homeowner
              who wants
              a professional
              installation
              and wants to
              understand
              what a correct
              TV mount involves.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before TV mounting
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Stud vs. drywall anchor — 300-500 lb shear per stud bolt vs. 30-40 lb drywall anchor limit, VESA pattern vs. 16\" stud spacing",
                  "In-wall power kit — NEC Article 725, Class 2 rated in-wall cable, listed in-wall power supply, code violation risk of standard extension cords",
                  "Mount type — fixed flat vs. tilt (15-20°) vs. full-motion articulating arm, extension depth, weight rating",
                  "Above-fireplace — viewing angle vs. eye-level trade-off, heat exposure risk by fireplace type, tilt mount requirement",
                  "HDMI and AV cable routing — in-wall vs. cable raceway, HDMI cable length limit, AV receiver placement",
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
                What your TV mounting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Anchor section — stud framing in KC homes, VESA-to-stud alignment, load ratings by anchor type",
                  "Cord management section — in-wall power kit vs. raceway, NEC compliance, why extension cords inside walls are a fire claim issue",
                  "Mount selection section — fixed vs. tilt vs. full-motion, room depth and corner placement, weight rating by TV size",
                  "Fireplace section — heat exposure by fireplace type, mounting height guide, tilt mount for downward viewing",
                  "TV size section — viewing distance guide by screen size, optimal mounting height for seated viewing",
                  "Quote form with TV size, wall type, cord management preference, fireplace location, number of TVs",
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
                &ldquo;The in-wall power
                section converts
                every job from
                a forty-dollar
                mount to a
                two-hundred-dollar
                clean install.
                KC homeowners
                who just want
                the TV on
                the wall don&apos;t
                know the difference
                between a
                listed in-wall
                power kit
                and running
                an extension
                cord inside
                the wall —
                until we explain
                that the cord
                in the wall
                is a fire
                code violation.
                After the section
                went up explaining
                NEC compliance
                and why the
                in-wall kit
                exists, customers
                stopped asking
                if we could
                just hide the
                cord another
                way and started
                asking what
                the kit installation
                included. The
                fireplace section
                also handles
                the &apos;but everyone
                mounts above
                the fireplace&apos;
                conversation —
                KC homeowners
                understand
                after reading
                it why the
                neck-strain
                viewing angle
                matters and
                what a tilt
                mount does
                to solve it.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Thompson, TV mounting and home theater installation, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A TV mounting site with anchor guide, cord management section, and
                quote form starts at $200. A full site with mount selection guide,
                fireplace placement, and multi-room content is $425–$750. One
                clean install covers the cost. No contracts, no monthly fees.
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
