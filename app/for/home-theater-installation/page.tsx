import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Home Theater Installation Companies in Kansas City",
  description:
    "Custom websites for home theater installation, projector setup, surround sound wiring, and AV integration companies in the Kansas City area. Show your screen size guide, acoustic treatment basics, and 4K HDR calibration to win home theater contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/home-theater-installation",
  },
};

export default function HomeTheaterInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Home Theater Installation Companies in Kansas City",
    description: "Custom websites for home theater installation and AV integration companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Home Theater Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a projector or flat panel is right for their room, how to calculate screen size from viewing distance, and what it actually takes to run in-wall speaker wire in a finished home. A website that explains the real decisions earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Home Theater Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Home Theater Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Home theater installation
              customers are KC homeowners
              finishing a basement
              and wanting a dedicated
              media room, homeowners
              with a living room
              setup that doesn't
              deliver the sound
              they want, or homeowners
              who want to know
              whether a projector
              setup or a large
              flat panel is the
              right choice for
              their space. The
              central education
              is how screen size,
              projector vs. TV,
              room acoustics, and
              in-wall wiring interact —
              each decision affects
              the others, and getting
              them in the right
              order matters. Screen
              size and viewing
              distance: THX recommended
              viewing distance
              is 0.84 times the
              screen diagonal —
              a 120-inch screen
              works best at 8.4
              feet; SMPTE standard
              is 1.2 times the
              diagonal (more conservative) —
              the same 120-inch
              screen at 12 feet;
              for 4K content, closer
              is acceptable because
              pixel density is
              high enough that
              individual pixels
              are not resolved
              at THX distance
              for screens up to
              about 150 inches.
              Projector vs. flat
              panel: projectors
              require controlled
              ambient light for
              acceptable image
              quality — a dedicated
              room with blackout
              capability produces
              the best results;
              ALR (ambient light
              rejecting) screens
              (Elite Screens, Screen
              Innovations) allow
              projector use with
              moderate ambient
              light by reflecting
              light from directly
              in front while absorbing
              light from the sides;
              premium flat panels
              (LG OLED, Samsung
              QD-OLED) in the
              83–97 inch range
              match projector image
              quality in rooms
              with ambient light
              and are simpler
              to install; projectors
              above the 120-inch
              equivalent panel
              size still offer
              significant cost
              savings even at
              4K laser projection.
              Surround sound speaker
              placement: Dolby
              Atmos 5.1.2 layout —
              left/center/right
              at screen level,
              two surround speakers
              at ear height 90–110
              degrees, two overhead
              speakers at 40 degrees
              elevation above
              the primary seating
              position; surround
              and overhead speakers
              can be in-ceiling
              (Polk Audio, Klipsch)
              or on-wall; the
              bass management
              in the AV receiver
              (Denon, Marantz,
              Yamaha) redirects
              bass from all channels
              to the subwoofer(s)
              below 80 Hz. In-wall
              wiring: HDMI 2.1
              in-wall wire (48Gbps,
              required for 4K
              120fps and 8K) must
              be CL2-rated (in-wall
              rated) — standard
              HDMI cables are
              not code-compliant
              in walls; speaker
              wire at 14 or 16
              AWG in-wall requires
              CL2 or CL3 rating;
              fishing wire through
              finished drywall
              requires wall plates
              at both ends and
              either routing through
              stud bays or through
              the attic/crawl space;
              conduit in the wall
              during initial construction
              allows future wire
              pulling without
              patching. Acoustic
              treatment: first
              reflections (side
              walls at the midpoint
              between screen and
              seating, ceiling
              above the primary
              seating position)
              are the highest-priority
              treatment locations —
              2-inch absorption
              panels (Owens Corning
              703 or 705 covered
              in fabric) reduce
              flutter echo and
              improve dialogue
              clarity; bass traps
              (floor-to-ceiling
              corner treatment)
              address low-frequency
              buildup that causes
              boomy, indistinct
              bass; overly dead
              rooms (wall-to-wall
              carpet, heavy drapes,
              many absorption
              panels) sound unnatural —
              a mix of absorption
              and diffusion at
              the rear wall produces
              the most natural
              result. AV receiver
              calibration: modern
              AV receivers (Denon
              AVRDX, Marantz SR)
              include room correction
              software (Audyssey
              MultEQ XT32, Dirac
              Live) that measures
              speaker response
              at the seating position
              and applies EQ corrections —
              this step takes
              15–20 minutes and
              significantly improves
              tonal balance and
              surround coherence
              in treated rooms.
              A home theater website
              that explains screen
              size math, what
              a projector needs
              to deliver good
              image quality, and
              what in-wall wiring
              involves in a finished
              room earns the homeowner
              who has been waiting
              for the right information
              before committing.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before home theater installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Screen size calculation — THX and SMPTE viewing distance formulas, why 4K allows closer seating",
                  "Projector vs. flat panel — ambient light requirement, ALR screens, 120+ inch projector vs. premium TV",
                  "Atmos speaker placement — 5.1.2 layout, in-ceiling vs. on-wall, surround and overhead degrees",
                  "In-wall wiring — CL2-rated HDMI and speaker wire, fishing finished walls, conduit future-proofing",
                  "Acoustic treatment — first reflection panels, bass traps, when a room is over-treated",
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
                What your home theater installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Screen size guide — THX/SMPTE formula, room dimension examples, projector vs. flat panel breakeven",
                  "Projector section — ambient light requirement, ALR screen options, throw ratio and placement",
                  "Surround sound guide — Atmos layout, in-ceiling speaker placement, bass management and subwoofer",
                  "Wiring section — CL2/CL3 requirements, HDMI 2.1 in-wall, fishing finished drywall vs. conduit",
                  "Acoustic treatment section — first reflection points, absorption panels, bass traps, treatment balance",
                  "Consultation form with room dimensions, ambient light control, preferred display type, wiring existing or new build",
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
                &ldquo;The screen size calculator
                section changed how customers
                arrived at the consultation.
                Before, everyone came in
                saying 'I want the biggest
                screen possible' without
                any reference to their room.
                After I added the THX distance
                formula with a table showing
                optimal screen size for 10,
                12, and 15-foot viewing distances,
                customers arrived having
                already measured their room
                and picked a size range.
                The in-wall wiring section
                also helped significantly:
                two customers who were doing
                basement finishes read the
                conduit section and called
                me before drywall went up,
                which turned a wall-fishing
                job into a 20-minute conduit
                pull. Those two jobs paid
                for the website twice over
                in labor savings alone.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Fitzgerald, AV integration and home theater, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A home theater site with screen size guide, projector
                vs. panel section, and consultation form starts at
                $200. A full site with Atmos placement guide, in-wall
                wiring section, and acoustic treatment content is
                $425–$750. One basement theater installation covers
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
