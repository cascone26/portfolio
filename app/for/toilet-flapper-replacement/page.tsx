import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Toilet Flapper Replacement Companies in Kansas City",
  description:
    "Custom websites for toilet flapper replacement, toilet fill valve repair, and running toilet repair companies in the Kansas City area. Show your flapper seat corrosion from KC chloramine water, adjustable flapper vs. fixed flapper selection, and fill valve float adjustment method to win toilet repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/toilet-flapper-replacement",
  },
};

export default function ToiletFlapperReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Toilet Flapper Replacement Companies in Kansas City",
    description: "Custom websites for toilet flapper replacement and running toilet repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Toilet Flapper Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their toilet runs every fifteen minutes even after replacing the flapper, whether the problem is the flapper or the fill valve, and why flappers in KC homes fail faster than the box says they should. A website that explains toilet flapper replacement earns the running toilet call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Toilet Flapper Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Toilet Flapper Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Toilet flapper replacement
              customers are KC homeowners
              who hear the toilet
              refilling every fifteen
              to thirty minutes without
              being flushed — a
              phantom flush cycle
              that indicates water
              is leaking through
              the flapper into the
              bowl — homeowners who
              replaced the flapper
              themselves and the
              running toilet resumed
              within three to four
              months because the
              replacement flapper
              was the wrong size
              for their flush valve
              seat or because the
              flush valve seat itself
              is pitted and corroded
              and will not seal
              regardless of which
              flapper is installed,
              or homeowners whose
              toilet runs continuously
              rather than intermittently
              because the fill valve
              float is set too high
              and water is running
              into the overflow tube
              rather than through
              the flapper. The central
              education is flapper
              versus fill valve diagnosis,
              KC chloramine water
              and its effect on rubber
              flapper lifespan, and
              flush valve seat corrosion —
              three things that determine
              whether a flapper replacement
              solves the running
              toilet permanently
              or fails again within
              a season. Flapper vs.
              fill valve: a running
              toilet has two failure
              modes with different
              sounds and patterns —
              flapper leak: water
              silently drains from
              the tank into the bowl
              through a failed flapper
              seal, the tank drops
              below the fill line,
              and the fill valve
              refills the tank; the
              toilet cycles without
              any flush; the fill
              valve makes the refill
              sound for thirty to
              sixty seconds every
              fifteen to thirty minutes;
              fill valve float set
              too high: water rises
              above the overflow
              tube opening and continuously
              drains into the bowl
              through the tube —
              the toilet runs constantly
              rather than intermittently
              and the fill valve
              never shuts off; the
              distinction matters
              because the repair
              is different — a flapper
              leak requires a new
              flapper or seat repair,
              a float problem requires
              fill valve adjustment
              or replacement. KC
              chloramine water: KC
              Water Services treats
              municipal water with
              chloramine (a chlorine-ammonia
              compound) rather than
              free chlorine — chloramine
              is more stable, maintains
              residual further from
              the treatment plant,
              and does not form certain
              disinfection byproducts;
              however, chloramine
              is more aggressive
              toward rubber compounds
              than free chlorine —
              standard rubber flappers
              degrade faster in chloramine-treated
              water; a standard rubber
              flapper rated for five
              years may fail in eighteen
              to twenty-four months
              in KC chloramine water;
              chloramine-resistant
              flappers (Korky chloramine-resistant,
              Fluidmaster PerforMAX)
              use a different rubber
              compound that resists
              chloramine degradation
              and last significantly
              longer in KC water.
              Flush valve seat: if
              the flush valve seat
              (the ring the flapper
              seals against) is
              pitted, corroded, or
              has a mineral deposit
              ring from KC hard water,
              no flapper will seal
              against it regardless
              of material; a toilet
              seat repair kit (Korky
              Korky Plus or Fluidmaster
              400A) can resurface
              the seat with a replacement
              seat ring without
              replacing the entire
              flush valve; full flush
              valve replacement
              requires draining and
              disconnecting the tank
              but provides a new
              seat; a homeowner who
              replaces the flapper
              three times and it
              still runs has a seat
              problem, not a flapper
              problem. A toilet flapper
              website that explains
              flapper versus fill
              valve diagnosis, KC
              chloramine water and
              chloramine-resistant
              flapper selection, and
              the flush valve seat
              corrosion failure mode
              earns the homeowner
              who has replaced the
              flapper twice and wants
              it fixed for good.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before toilet flapper replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Flapper vs. fill valve — phantom flush (intermittent) vs. continuous running, different repair for each",
                  "KC chloramine water — chloramine vs. free chlorine, rubber degradation rate, chloramine-resistant flapper brands",
                  "Flush valve seat — pitting and mineral deposit ring, why no flapper seals on a corroded seat",
                  "Float adjustment — overflow tube water level, fill valve float screw, continuous run diagnosis",
                  "Flapper sizing — 2-inch vs. 3-inch flush valve, canister flush valve types, universal vs. brand-specific",
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
                What your toilet flapper replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Diagnosis section — flapper vs. fill valve test, intermittent vs. continuous run pattern, dye test method",
                  "KC chloramine section — KC Water Services treatment, rubber degradation rate, chloramine-resistant brand comparison",
                  "Flush valve seat section — corrosion causes, mineral deposit ring, seat repair kit vs. full flush valve replacement",
                  "Float adjustment guide — overflow tube water level, adjustment screw location, continuous run fix",
                  "Flapper sizing guide — 2-inch vs. 3-inch valve, canister types, how to measure existing flush valve",
                  "Quote form with toilet brand, running pattern (intermittent vs. continuous), flapper replacement history, timeline",
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
                &ldquo;The flush valve seat
                section is the one that
                turned callbacks into
                full repairs. Customers
                would replace a flapper
                from the hardware store,
                it would run again in
                three months, and they&apos;d
                call me frustrated. After
                the section went up explaining
                that a pitted seat lets
                water past any flapper
                regardless of quality,
                customers stopped expecting
                a five-dollar fix to
                solve the problem permanently.
                The KC chloramine section
                also brought in calls
                from homeowners who had
                replaced their flapper
                twice in two years and
                couldn&apos;t figure out why —
                they were buying standard
                rubber flappers at Menards
                and putting them in chloramine
                water. Explaining the
                KC-specific water chemistry
                and pointing them to the
                chloramine-resistant option
                made the service visit
                make complete sense.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Sorensen, plumbing repair and toilet service, Grandview, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A toilet flapper replacement site with diagnosis section, KC
                chloramine guide, and quote form starts at $200. A full site
                with flush valve seat content, float adjustment guide, and
                flapper sizing chart is $425–$750. One toilet service call
                covers the cost. No contracts, no monthly fees.
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
