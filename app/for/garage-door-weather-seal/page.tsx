import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Garage Door Weather Seal Companies in Kansas City",
  description:
    "Custom websites for garage door weather seal, garage door bottom seal replacement, and garage door air sealing companies in the Kansas City area. Show your KC freeze-thaw bottom seal failure, rodent entry at failed side seals, and threshold seal vs. bottom rubber for KC conditions to win garage door weather seal contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/garage-door-weather-seal",
  },
};

export default function GarageDoorWeatherSealPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Garage Door Weather Seal Companies in Kansas City",
    description: "Custom websites for garage door weather seal and bottom seal replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garage Door Weather Seal Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the gap at the bottom of their garage door is causing their energy bill to spike, how to tell if mice are getting in through the seal, and whether a threshold seal or a new bottom rubber is the better fix. A website that explains garage door weather sealing earns the call from the homeowner whose garage drops to 20°F every winter. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garage Door Weather Seal in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Garage Door Weather Seal</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Garage door weather
              seal customers are
              KC homeowners whose
              garage bottom seal —
              the rubber or vinyl
              strip that contacts
              the garage floor
              when the door
              is closed — has
              cracked, compressed
              flat, or torn away
              from the door
              bottom retainer
              channel, leaving
              a visible gap
              between the door
              and the floor;
              homeowners who
              find mouse droppings
              in the garage
              or have seen
              rodents enter
              through the gap
              at the side jamb
              seals or between
              the door panels
              — a condition
              that indicates
              the side stop
              seals or the
              top seal have
              separated from
              the jamb; or
              homeowners whose
              attached garage
              is bringing conditioned
              house air into
              the garage in
              summer or allowing
              cold garage air
              to enter the
              house in winter
              through the door-to-house
              passage — a sign
              that the garage
              envelope is not
              sealed and the
              door weather seal
              is the first
              inspection point.
              The central education
              is KC freeze-thaw
              cycling as the
              primary bottom
              seal failure mechanism,
              the difference
              between threshold
              seal and bottom
              rubber as solutions
              for different
              floor gap conditions,
              and rodent entry
              at side jamb
              seals as a separate
              problem from
              bottom air leakage —
              three things that
              determine whether
              a homeowner understands
              why the seal
              failed in KC
              and what the
              correct durable
              repair is. KC
              freeze-thaw bottom
              seal failure:
              KC experiences
              fifty to fifty-five
              freeze-thaw cycles
              per winter; the
              garage floor at
              the door threshold
              transitions from
              above-freezing
              inside the garage
              to below-freezing
              concrete near
              the door edge
              during cold snaps;
              bottom rubber
              seals — the T-shaped
              or bulb-shaped
              vinyl that slides
              into the retainer
              channel — compress
              against the floor
              when the door
              closes and are
              exposed to temperature
              cycling between
              the compressed
              and relaxed states;
              vinyl bottom seals
              become brittle
              below twenty
              degrees Fahrenheit
              and develop compression
              set — the rubber
              cannot recover
              its original shape
              after being compressed
              cold; after three
              to five KC winters,
              a vinyl bottom
              seal is typically
              flattened and
              no longer contacts
              the floor uniformly;
              the floor at
              the threshold
              is rarely flat —
              settling, heaving,
              and wear create
              a floor profile
              that the original
              seal may not
              match even when
              new; a threshold
              seal — a rubber
              or vinyl strip
              bonded to the
              garage floor
              at the door
              base — raises
              the floor contact
              surface to the
              door bottom and
              can compensate
              for floor irregularities
              that a bottom
              rubber cannot
              seal against.
              Threshold seal
              versus bottom
              rubber: bottom
              rubber replacement
              is the correct
              repair when the
              floor is level
              and the retainer
              channel is undamaged —
              new bottom rubber
              costs eight to
              fifteen dollars
              in material and
              slides into the
              existing retainer;
              when the floor
              has significant
              wave or heave —
              common in KC
              garages built
              in the seventies
              and eighties
              where the floor
              has settled near
              the door —
              a threshold seal
              installed on
              the floor compensates
              for the gap
              by raising the
              contact point;
              the two systems
              can be used
              together — a
              new bottom rubber
              plus a threshold
              seal provides
              redundant sealing
              and handles
              uneven floors
              and door gaps
              simultaneously.
              Rodent entry at
              side seals: mice
              require a gap
              of one-quarter
              inch or less
              to enter; the
              side stop seals —
              the flat rubber
              strips between
              the door edge
              and the jamb —
              compress when
              the door closes
              and are the
              widest gap point
              when they fail;
              the top seal
              spans the horizontal
              gap between the
              door top and
              the header and
              compresses with
              door deflection;
              a garage door
              weather seal
              inspection should
              check all four
              perimeter seals
              — bottom, both
              sides, and top —
              in addition to
              the door-to-floor
              gap. A garage
              door weather seal
              website that
              explains KC freeze-thaw
              bottom seal failure,
              threshold seal
              versus bottom
              rubber selection,
              and rodent entry
              at side jamb
              seals earns the
              homeowner who
              wants to stop
              the cold air
              and the mice
              before next winter.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before garage door weather sealing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC freeze-thaw bottom seal failure — 50-55 cycles, vinyl brittleness below 20°F, compression set, 3-5 year lifespan",
                  "Bottom rubber vs. threshold seal — retainer channel condition, floor profile, heave and settling, redundant system option",
                  "Rodent entry gaps — side stop seal failure, top seal deflection, 1/4-inch entry gap, perimeter seal inspection",
                  "Air infiltration from garage — attached garage envelope, house passage air exchange, energy bill impact in KC winter",
                  "Seal material durability — EPDM vs. vinyl bottom rubber, UV and temperature resistance, expected KC lifespan",
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
                What your garage door weather seal website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Freeze-thaw failure section — KC cycle count, vinyl compression set, how to identify a failed bottom seal",
                  "Bottom rubber section — retainer channel assessment, replacement process, EPDM vs. vinyl selection for KC",
                  "Threshold seal section — floor irregularity cases, bonding process, combined threshold plus bottom rubber system",
                  "Rodent seal section — side stop and top seal inspection, gap measurement, full perimeter seal replacement",
                  "Air sealing section — attached garage envelope, house air exchange path, energy impact of failed garage seals",
                  "Quote form with door age, floor condition, gap visible, rodent evidence, attached vs. detached garage",
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
                &ldquo;The threshold seal
                section is what
                gets the calls
                from KC homeowners
                with older garages.
                Homes in Roeland
                Park and Fairway
                built in the
                sixties and seventies
                have garage floors
                that have settled
                and heaved near
                the door — you
                cannot seal them
                with bottom rubber
                alone. After
                the section went
                up explaining
                that a threshold
                seal compensates
                for floor irregularity
                that a bottom
                rubber cannot
                follow, customers
                stopped trying
                the self-adhesive
                hardware store
                seals that never
                stuck to the
                concrete and
                started calling
                for the proper
                installation.
                The rodent section
                also helps — once
                customers understand
                that the side
                jamb seals are
                the mouse entry
                point, not the
                bottom, they
                stop wondering
                why the bottom
                rubber fix didn&apos;t
                stop the mice.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Sorensen, garage door sealing and weatherproofing, Roeland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garage door weather seal site with KC freeze-thaw failure section,
                threshold vs. bottom rubber guide, and quote form starts at $200. A
                full site with rodent entry context, air sealing impact, and floor
                irregularity assessment content is $425–$750. One full perimeter seal
                job covers the cost. No contracts, no monthly fees.
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
