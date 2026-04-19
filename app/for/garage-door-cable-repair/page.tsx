import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Garage Door Cable Repair Companies in Kansas City",
  description:
    "Custom websites for garage door cable repair, garage door cable replacement, and broken garage door cable companies in the Kansas City area. Show your cable break causes, drum and cable drum alignment, and why garage door cables always replace in pairs to win garage door cable repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/garage-door-cable-repair",
  },
};

export default function GarageDoorCableRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Garage Door Cable Repair Companies in Kansas City",
    description: "Custom websites for garage door cable repair and broken garage door cable replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garage Door Cable Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their garage door opener runs but the door doesn't move, whether a garage door cable can be reattached without a technician, and whether they need to replace both cables when only one has snapped. A website that explains garage door cable repair earns the call before a homeowner wraps a broken cable around the drum and makes it worse. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garage Door Cable Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Garage Door Cable Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Garage door cable repair
              customers are KC homeowners
              whose garage door has
              one side lower than
              the other, one cable
              hanging loose or piled
              on the floor of the
              garage, or a door that
              the opener motor strains
              to lift but cannot
              move; homeowners who
              pressed the wall button
              or remote and heard
              the opener motor run
              but watched the door
              stay on the ground
              because the cable
              that transfers the
              spring force to the
              door has snapped or
              jumped off the drum;
              or homeowners who
              are aware that a broken
              garage door spring
              also breaks the cable
              system and want to
              understand whether
              spring replacement
              and cable replacement
              are separate jobs
              or part of the same
              service call. The
              central education
              is the cable and spring
              system relationship
              and cable break causes,
              drum and cable wrap
              alignment, and the
              replace-in-pairs requirement —
              three things that determine
              whether a homeowner
              understands why cable
              repair requires specific
              tools and tension
              management, not a
              simple attachment.
              Cable and spring system:
              garage door torsion
              springs store the
              energy required to
              lift the door — a
              standard 16x7 garage
              door weighs approximately
              130 to 200 pounds,
              and the springs are
              wound to counterbalance
              most of that weight;
              the cables transfer
              the spring energy
              to the door — they
              run from the bottom
              corner brackets on
              each side of the door
              up to cable drums
              mounted on the torsion
              bar at the top of
              the door; when the
              spring breaks, it
              releases its stored
              tension suddenly —
              the cable loses its
              load and the drum
              may spin, causing
              the cable to unspool
              or the bottom corner
              bracket to detach
              under the sudden load
              shift; a cable can
              also fail independently
              from fraying at the
              bottom anchor point
              (the most common cable
              failure location from
              metal fatigue and
              corrosion); in KC,
              salt spray on roads
              and driveways that
              enters the garage
              on vehicle undercarriages
              accelerates cable
              corrosion at the bottom
              anchor. Drum and cable
              wrap alignment: a
              cable drum has a spiral
              groove designed to
              wrap the cable in
              precise coils as the
              door closes — each
              wrap sits in the groove
              and the drum maintains
              uniform tension across
              the door width; if
              the cable is reattached
              and wrapped by hand
              without the correct
              tension and groove
              tracking, the cable
              jumps the groove on
              the next cycle, creating
              a loop that jams the
              drum against the bearing
              plate; this is why
              cable reattachment
              requires the spring
              to be in the correct
              tension state before
              the cable is wrapped —
              a task that requires
              a winding bar for
              torsion spring adjustment
              and a second person
              to hold the door at
              the correct height
              during the cable wrap.
              Replace in pairs:
              garage door cables
              always replace in
              pairs regardless of
              which cable failed —
              if one cable has failed
              from fatigue, the
              other cable has accumulated
              the same number of
              open/close cycles
              and is at the same
              wear point; replacing
              only the broken cable
              leaves a new cable
              paired with a cable
              near the end of its
              service life; when
              the second cable fails
              a few months after
              the first, the homeowner
              pays a second service
              call cost and the
              door may fall unevenly
              and damage a vehicle
              or injure someone;
              the additional cost
              of the second cable
              at the first service
              call is minimal compared
              to the cost of a second
              call. A garage door
              cable repair website
              that explains the
              spring-cable system
              relationship, drum
              wrap alignment and
              why hand-reattachment
              fails, and the replace-in-pairs
              standard earns the
              homeowner who is looking
              at a pile of cable
              on the garage floor
              and wondering if it
              can just be retied.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before garage door cable repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Cable system — spring counterbalance, cable transfers energy from drum to bottom bracket, why opener runs but door doesn't move",
                  "Cable break causes — bottom anchor fraying, metal fatigue, KC road salt corrosion on undercarriages",
                  "Drum alignment — spiral groove wrap, cable jump when reattached without spring tension, jam against bearing plate",
                  "Spring and cable relationship — spring break causes cable unspool, whether spring and cable are same service call",
                  "Replace in pairs — same fatigue cycle on both cables, second cable failure within months, service call cost comparison",
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
                What your garage door cable repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "System section — torsion spring counterbalance, cable path from drum to bottom bracket, 130-200 lb door weight",
                  "Cable failure causes — bottom anchor fatigue, KC road salt corrosion, spring break as cable event",
                  "Drum wrap section — spiral groove design, what happens when cable reattached without spring tension",
                  "Replace in pairs — wear cycle logic, cost comparison of one cable vs. recall risk, what pair replacement includes",
                  "Safety section — why DIY cable reattachment with loaded spring is dangerous, winding bar requirement",
                  "Quote form with door side affected, opener runs/door doesn't move, spring broken, door age, timeline",
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
                &ldquo;The replace-in-pairs
                section is what stopped
                the pushback on the
                second cable. Every
                call, customers would
                say only one cable
                broke, why am I paying
                for two. After the
                section went up explaining
                that both cables have
                run the same number
                of cycles and that
                the second one fails
                within weeks to months
                of the first, customers
                stopped arguing and
                started asking whether
                both springs should
                come too. The drum
                wrap section also
                prevented the DIY
                attempts that end
                up as emergency calls —
                KC homeowners in Overland
                Park were finding
                YouTube videos showing
                cable reattachment
                and trying it themselves,
                then calling me when
                the cable jumped the
                drum on the first
                cycle. Explaining
                why the spring tension
                has to be set before
                the cable is wrapped
                made the professional
                service clear.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Beckman, garage door repair and spring service, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garage door cable repair site with spring-cable system section,
                drum wrap guide, and quote form starts at $200. A full site with
                replace-in-pairs content, KC corrosion context, and safety section
                is $425–$750. One cable repair call covers the cost. No contracts,
                no monthly fees.
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
