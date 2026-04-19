import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Doorbell Wiring Replacement Companies in Kansas City",
  description:
    "Custom websites for doorbell wiring replacement, doorbell transformer replacement, and low-voltage doorbell repair companies in the Kansas City area. Show your transformer voltage matching, KC aluminum wiring doorbell failure, and video doorbell wiring upgrade to win doorbell wiring contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/doorbell-wiring-replacement",
  },
};

export default function DoorbellWiringReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Doorbell Wiring Replacement Companies in Kansas City",
    description: "Custom websites for doorbell wiring replacement and low-voltage doorbell transformer companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Doorbell Wiring Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why the doorbell stopped working after installing a video doorbell, whether the transformer needs to be replaced or just the button, and why a new video doorbell won't stay connected even when the wiring looks fine. A website that explains doorbell wiring replacement earns the low-voltage service call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Doorbell Wiring Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Doorbell Wiring Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Doorbell wiring replacement
              customers are KC homeowners
              who installed a video
              doorbell (Ring, Nest,
              Arlo) and the unit works
              intermittently or not
              at all because the existing
              transformer does not
              provide enough voltage
              or current for the video
              doorbell&apos;s continuous
              power draw, homeowners
              whose existing mechanical
              chime doorbell stopped
              working and the button,
              chime, wiring, and transformer
              are all potentially
              failed, or homeowners
              in KC homes built 1960–1980
              where the doorbell wiring
              was run in aluminum wire
              instead of copper, and
              the aluminum-to-copper
              connections at the transformer
              terminals have corroded.
              The central education
              is transformer voltage
              and VA rating by doorbell
              type, wire continuity
              testing sequence, and
              the aluminum wiring
              corrosion failure pattern —
              three things that determine
              whether a doorbell repair
              requires only a button
              replacement or a full
              transformer and wiring
              overhaul. Transformer
              rating: a traditional
              mechanical doorbell uses
              a transformer rated
              at 16 volts AC and 5–10
              VA (volt-amps); most
              video doorbells require
              16–24 volts AC and 30–40
              VA minimum — Ring Video
              Doorbell 4 requires
              16–24V at 40 VA, Nest
              Hello requires 16–24V
              at 50 VA; a KC home
              with an original 10-VA
              transformer will power
              a video doorbell erratically —
              the doorbell may connect
              when the internal battery
              is fresh but lose connection
              as the battery depletes
              because the transformer
              cannot provide enough
              current to simultaneously
              power the device and
              charge the battery;
              the fix is a transformer
              replacement to a 24V/40VA
              or 24V/50VA unit — these
              are $20–$40 parts but
              require locating the
              existing transformer,
              which in KC homes is
              often mounted in the
              furnace room on the
              HVAC air handler, behind
              the chime box, or inside
              the breaker panel area.
              Wire continuity: a doorbell
              circuit has three components
              — transformer, chime,
              and button — connected
              in a low-voltage loop;
              a failure anywhere in
              the loop stops the circuit;
              the diagnostic sequence
              is to test each component
              individually rather
              than replacing all three;
              testing the transformer
              output voltage with
              a multimeter at the
              chime terminals isolates
              the transformer; jumping
              the two screw terminals
              on the chime box with
              a short wire tests the
              chime unit; jumping
              the button terminals
              at the button housing
              tests the button; the
              most common KC failure
              is the button — outdoor
              buttons in KC corrode
              at the spring contacts
              from freeze-thaw cycling
              and become intermittent
              or fully open circuit.
              Aluminum wiring: KC
              homes built in the mid-1960s
              to mid-1970s sometimes
              used aluminum wire for
              the low-voltage doorbell
              run because aluminum
              was cheaper; aluminum
              oxidizes at exposed
              terminals, forming a
              resistive layer that
              reduces voltage at the
              button and chime; the
              doorbell works intermittently
              or weakly, and cleaning
              the terminals restores
              it temporarily; the
              long-term fix is running
              new 18-gauge copper
              bell wire alongside
              or replacing the aluminum
              run. A doorbell wiring
              website that explains
              transformer VA matching
              for video doorbells,
              the wire continuity
              diagnostic sequence,
              and aluminum wiring
              corrosion earns the
              homeowner who bought
              a Ring and can&apos;t figure
              out why it keeps going
              offline.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before doorbell wiring replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Transformer VA rating — traditional 10VA vs. video doorbell 40-50VA requirement, Ring/Nest voltage specs",
                  "Transformer location — furnace room, chime box, breaker panel area in KC homes by era",
                  "Wire continuity testing — button, chime, transformer isolation sequence, multimeter test method",
                  "Aluminum wiring — KC 1960-1975 homes, terminal oxidation, resistance buildup, copper replacement",
                  "Button corrosion — freeze-thaw contact failure, intermittent vs. dead button, replacement vs. repair",
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
                What your doorbell wiring replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Transformer section — VA rating by doorbell type, Ring/Nest requirements, 24V/40VA+ replacement spec",
                  "Transformer location guide — furnace room vs. chime box vs. panel area in KC home by build era",
                  "Continuity testing section — three-component loop, isolation test sequence, multimeter instructions",
                  "Aluminum wiring guide — KC era identification, oxidation failure pattern, copper replacement method",
                  "Button failure section — freeze-thaw corrosion, intermittent contact, visual inspection checklist",
                  "Quote form with doorbell type (traditional vs. video), home build era, failure description, transformer location, timeline",
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
                &ldquo;The transformer VA section
                is the one that made me
                money immediately. Half
                my calls were homeowners
                who bought a Ring or Nest
                and it kept going offline.
                They&apos;d already been to three
                different forums and tried
                resetting the device. I
                showed up and the transformer
                was the original 10VA unit
                from 1985. After the section
                went up explaining why a
                10VA transformer can&apos;t power
                a 40VA video doorbell, customers
                started calling me before
                they spent three hours on
                Ring support. The aluminum
                wiring section also brought
                in a job in a 1971 house
                in Westwood where the doorbell
                had been intermittent for
                fifteen years — cleaned
                the terminals once a year
                and it would work for a
                month. New copper run fixed
                it permanently.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Ogburn, low-voltage and doorbell service, Westwood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A doorbell wiring site with transformer VA section, continuity
                testing guide, and quote form starts at $200. A full site with
                aluminum wiring content, video doorbell upgrade guide, and KC
                era transformer location content is $425–$750. One transformer
                upgrade covers the cost. No contracts, no monthly fees.
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
