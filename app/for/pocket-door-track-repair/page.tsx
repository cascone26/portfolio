import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pocket Door Track Repair Companies in Kansas City",
  description:
    "Custom websites for pocket door track repair, pocket door roller, and pocket door adjustment companies in the Kansas City area. Show your roller replacement process, track realignment, and jamb clearance adjustment to win pocket door repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pocket-door-track-repair",
  },
};

export default function PocketDoorTrackRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pocket Door Track Repair Companies in Kansas City",
    description: "Custom websites for pocket door track repair and roller replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pocket Door Track Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a pocket door that jumps off the track needs a new track or just a roller adjustment, how the door is removed from the pocket without tearing out drywall, and what causes a pocket door to drag at the bottom. A website that explains pocket door track repair earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pocket Door Track Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pocket Door Track Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pocket door track repair
              customers are KC homeowners
              whose bathroom or closet
              pocket door has jumped
              off the overhead track
              and will not slide smoothly
              or stay aligned, homeowners
              whose door has developed
              a bottom drag that leaves
              a scuff mark on the
              floor as the door travels,
              or homeowners in older
              KC homes from the 1970s
              and 1980s where the
              original nylon rollers
              have worn flat or cracked
              and the door drops off-track
              every time it is opened.
              The central education
              is roller replacement
              vs. track repair, door
              removal without wall
              damage, and bottom drag
              diagnosis — three things
              that separate a half-hour
              roller swap from a full
              pocket door frame rebuild.
              Roller vs. track: a
              pocket door that jumps
              off track or rolls
              with resistance is
              almost always a roller
              problem, not a track
              problem — the overhead
              track itself rarely
              fails; the rollers
              (also called hangers)
              are plastic or steel
              wheels that ride in
              the channel; nylon
              rollers in KC homes
              built before 1990 commonly
              fail after 30–40 years —
              the wheel cracks or
              wears flat; a worn
              flat roller still rolls
              but creates resistance
              and causes the door
              to shimmy and drop;
              replacement rollers
              are available for most
              track systems and cost
              under $20 per pair;
              the track may need
              cleaning and lubrication
              (silicone spray, not
              WD-40 which collects
              dust) before the new
              rollers are installed.
              Door removal: removing
              a pocket door from
              its track does not
              require opening the
              wall — most pocket
              door systems allow
              the door to be tilted
              and lifted off the
              hanger brackets when
              the door is fully in
              the pocket; the procedure
              is: slide door fully
              open into the pocket,
              lift the door slightly
              to release the anti-jump
              bracket at the bottom
              of the door header,
              tilt the bottom of
              the door toward you,
              and lower the door
              off the hanger wheel
              studs; this requires
              access inside the pocket
              opening which is present
              when the door is fully
              retracted; in older
              KC pocket door frames
              with no anti-jump bracket,
              the door lifts straight
              out of the track channel
              from the same fully-open
              position. Bottom drag:
              a pocket door that
              drags the floor is
              caused by either a
              worn roller that has
              dropped the door height,
              a hanger bracket that
              has slipped on the
              door top edge, or a
              floor that has risen
              at the threshold due
              to settling — in KC
              homes where the basement
              slab has settled, the
              main floor can pitch
              slightly and the pocket
              door opening now has
              a height difference
              between the pocket
              end and the latch
              end; the adjustment
              screw on most hangers
              raises or lowers the
              door height at that
              hanger point by 1/4
              to 3/8 inch — sufficient
              for most KC floor
              movement. A pocket
              door website that explains
              why rollers fail, how
              the door comes out
              without wall damage,
              and how bottom drag
              is diagnosed earns
              the homeowner who has
              been putting up with
              a stuck pocket door
              for two years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before pocket door track repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Roller vs. track — when the roller is the problem vs. the track, nylon wheel failure timeline",
                  "Roller replacement — hanger types by manufacturer, sourcing replacements, silicone vs. WD-40 lubrication",
                  "Door removal — tilting procedure from fully-open position, anti-jump bracket release, no-wall-damage method",
                  "Bottom drag — hanger height adjustment, screw access location, KC floor settling cause",
                  "Track cleaning — dust buildup in channel, cleaning before new roller install, lubricant type",
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
                What your pocket door track repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Roller failure section — nylon wheel wear pattern, flat roller behavior, KC pre-1990 home timeline",
                  "Replacement guide — hanger types, sourcing by track system, silicone spray lubrication",
                  "Door removal section — fully-open tilt procedure, anti-jump bracket, older frame no-bracket method",
                  "Bottom drag section — height adjustment screw location, range of correction, KC floor settling context",
                  "Track cleaning guide — dust buildup removal, lubricant choice, cleaning before new roller install",
                  "Quote form with door age, symptom description, track style if known, access from pocket side, timeline",
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
                &ldquo;The no-wall-damage section
                is the one that sells the
                job. Every customer assumes
                that fixing a pocket door
                means opening the wall —
                they&apos;ve avoided fixing it
                for years because they don&apos;t
                want the drywall work. After
                the section explaining the
                tilt-out removal procedure
                went up, customers called
                knowing the door comes out
                from the pocket side without
                touching the wall. Two
                customers in Waldo with
                1970s ranch homes booked
                the same week — both had
                flat nylon rollers, both
                were fixed with a $16 pair
                of replacement hangers and
                an hour of work. The roller
                failure section also helped —
                customers in older KC homes
                stopped expecting the track
                to be the problem and started
                describing the roller symptoms
                accurately on the first call.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Peterman, interior door and pocket door repair, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pocket door site with roller failure section, removal guide,
                and quote form starts at $200. A full site with bottom drag
                diagnosis, track cleaning, and sourcing guide is $425–$750.
                One roller replacement covers the cost. No contracts, no monthly fees.
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
