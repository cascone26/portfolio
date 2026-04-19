import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Garbage Disposal Installation Companies in Kansas City",
  description:
    "Custom websites for garbage disposal installation, garbage disposal replacement, and garbage disposal repair companies in the Kansas City area. Show your motor size and grinding stage selection, KC chloramine water and seal longevity, and dishwasher drain knockout to win garbage disposal installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/garbage-disposal-installation",
  },
};

export default function GarbageDisposalInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Garbage Disposal Installation Companies in Kansas City",
    description: "Custom websites for garbage disposal installation and garbage disposal replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garbage Disposal Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a humming disposal that won't turn is dead or just jammed, what horsepower they actually need for a household that cooks regularly, and whether replacing a disposal themselves will void a home warranty. A website that explains garbage disposal installation earns the replacement call before a homeowner tries the Allen wrench fix three more times. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garbage Disposal Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Garbage Disposal Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Garbage disposal installation
              customers are KC homeowners
              whose disposal hums
              but does not grind —
              a sign of a seized
              motor or jammed grinding
              plate that will not
              free with the reset
              button and Allen wrench
              jam-clearing procedure;
              homeowners whose disposal
              leaks from the sink
              flange, the side drain
              connection, or the
              bottom of the unit —
              a bottom leak indicates
              internal seal failure
              that is not repairable
              and requires unit
              replacement; or homeowners
              whose disposal runs
              for years without
              adequate grinding
              power — typically
              a one-third or one-half
              horsepower builder-grade
              unit that jams on
              normal food waste
              and requires frequent
              reset. The central
              education is motor
              size and grinding
              stage selection,
              KC chloramine water
              and seal longevity,
              and the dishwasher
              drain knockout —
              three things that
              determine whether
              a disposal installation
              results in a unit
              that performs adequately
              for the household
              or a repeat call
              in three years.
              Motor size and grinding
              stages: a garbage
              disposal motor is
              rated in horsepower —
              one-third HP, one-half
              HP, three-quarter
              HP, and one HP are
              the standard residential
              sizes; the grinding
              stages refer to the
              number of grinding
              rings the food waste
              passes through before
              exiting to the drain —
              a two-stage grind
              (InSinkErator Badger
              series) produces
              larger particles
              that can clog the
              drain line; a three-stage
              grind (InSinkErator
              Evolution series,
              Moen GX series) produces
              finer particles that
              move through the
              drain line without
              settling; in a KC
              household that cooks
              regularly with vegetable
              matter, fruit rinds,
              and moderate bone
              material, a three-quarter
              or one HP three-stage
              unit is the appropriate
              specification — a
              one-third HP two-stage
              builder unit is insufficient
              for regular cooking
              household use and
              is the unit most
              commonly replaced
              before its mechanical
              service life ends.
              KC chloramine water
              and seal longevity:
              KC water is treated
              with chloramines —
              the combination of
              chlorine and ammonia
              used as a disinfectant;
              chloramine is more
              chemically stable
              than chlorine and
              remains in the water
              at the point of use;
              garbage disposal
              internal seals are
              exposed to chloramine
              water continuously
              during use; chloramine
              degrades certain
              rubber seal compounds
              faster than chlorine
              alone — the lower
              seal at the bottom
              of the disposal motor
              housing is the most
              common leak point
              in older units and
              fails faster in
              chloramine-treated
              water systems; units
              with stainless steel
              grinding components
              (InSinkErator Evolution
              Excel, Waste King
              Legend series) are
              more resistant to
              chloramine corrosion
              than units with
              galvanized grinding
              chambers. Dishwasher
              drain knockout:
              a new garbage disposal
              ships with a plug
              installed in the
              dishwasher drain
              inlet — the side
              port on the disposal
              body where a dishwasher
              drain hose connects;
              this plug must be
              knocked out before
              connecting the dishwasher
              drain hose; if the
              knockout plug is
              not removed, the
              dishwasher will
              not drain after
              the new disposal
              is installed; the
              knockout is removed
              by inserting a screwdriver
              into the inlet and
              striking it until
              the plug breaks
              free into the disposal
              chamber — the plug
              fragment must then
              be removed from
              inside the unit
              before it is run.
              A garbage disposal
              installation website
              that explains motor
              size and grinding
              stage for household
              cooking volume,
              KC chloramine water
              and seal longevity
              by unit type, and
              the dishwasher drain
              knockout procedure
              earns the homeowner
              who is done resetting
              a builder-grade unit
              that never worked
              well enough to start
              with.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before garbage disposal installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Motor size — 1/3 vs. 1/2 vs. 3/4 vs. 1 HP, cooking household vs. light use, jam frequency on builder-grade unit",
                  "Grinding stages — 2-stage large particles vs. 3-stage fine grind, drain line clog risk with coarser output",
                  "KC chloramine and seals — rubber seal degradation, bottom seal failure pattern, stainless chamber corrosion resistance",
                  "Failure diagnosis — hum without rotation (seized/jammed), bottom leak (internal seal failure, not repairable), flange leak",
                  "Dishwasher drain knockout — plug removal requirement before connecting dishwasher drain, fragment removal",
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
                What your garbage disposal installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Motor size section — HP ratings, cooking household recommendation (3/4–1 HP), why builder-grade undersizes regularly",
                  "Grinding stage section — 2-stage vs. 3-stage output, drain line implications, InSinkErator Evolution vs. Badger comparison",
                  "KC chloramine section — water treatment impact on seals, stainless chamber advantage, seal failure timeline",
                  "Failure diagnosis section — hum test, bottom vs. flange vs. side leak, when repair makes sense vs. replacement",
                  "Dishwasher connection — knockout plug procedure, what happens if it's missed, proper drain hose connection",
                  "Quote form with current disposal HP, failure type, dishwasher present, cooking volume, desired upgrade level",
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
                &ldquo;The motor size section
                is what moved customers
                from the cheapest
                replacement to the
                right one. KC homeowners
                would call wanting
                the same one-half
                HP unit that kept
                jamming on normal
                cooking waste. After
                the section went
                up explaining that
                a household that
                cooks with vegetables,
                fruit, and occasional
                bone material needs
                three-quarter HP
                and three-stage grinding
                to avoid the same
                jam pattern, customers
                started asking what
                the right unit was
                rather than just
                the cheapest. The
                chloramine section
                also helped justify
                the stainless chamber
                upgrade — KC water
                is harder on rubber
                seals than customers
                realized, and the
                seal failure explanation
                made the better
                unit a ten-year
                investment rather
                than a commodity
                swap.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Nkemdirim, kitchen plumbing and appliance installation, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garbage disposal installation site with motor size section,
                grinding stage guide, and quote form starts at $200. A full site
                with KC chloramine and seal longevity, failure diagnosis, and
                dishwasher connection content is $425–$750. One installation call
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
