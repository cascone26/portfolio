import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Bathroom Exhaust Fan Replacement Companies in Kansas City",
  description:
    "Custom websites for bathroom exhaust fan replacement, bathroom fan motor replacement, and bathroom fan upgrade companies in the Kansas City area. Show your CFM sizing requirement, KC humidity mold from undersized fan, and ENERGY STAR fan vs. builder-grade to win bathroom exhaust fan replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/bathroom-exhaust-fan-replacement",
  },
};

export default function BathroomExhaustFanReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Bathroom Exhaust Fan Replacement Companies in Kansas City",
    description: "Custom websites for bathroom exhaust fan replacement and fan upgrade companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Bathroom Exhaust Fan Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their bathroom fan is actually moving enough air to prevent mold, why their bathroom still fogs up after a shower even with the fan running, and whether an ENERGY STAR fan is worth the cost difference over a builder-grade replacement. A website that explains bathroom exhaust fan replacement earns the motor upgrade call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Bathroom Exhaust Fan Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Bathroom Exhaust Fan Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Bathroom exhaust fan
              replacement customers
              are KC homeowners whose
              bathroom fan has stopped
              running, runs with
              significantly less
              airflow than it once
              did, or makes a grinding
              or rattling noise
              that indicates bearing
              or motor failure;
              homeowners who notice
              moisture staining on
              the ceiling above
              the shower or on the
              wall adjacent to the
              shower despite running
              the fan during and
              after every shower —
              a sign that the installed
              fan is too small for
              the bathroom volume
              or that the fan duct
              has become restricted
              or disconnected; or
              homeowners who want
              to replace an aging
              and loud builder-grade
              fan with a quiet ENERGY
              STAR rated unit while
              the duct connection
              is already open. The
              central education
              is CFM sizing for
              bathroom volume, KC
              humidity and mold
              from inadequate exhaust,
              and ENERGY STAR versus
              builder-grade comparison —
              three things that determine
              whether a fan replacement
              actually solves the
              moisture problem or
              just replaces a failed
              unit with an equally
              inadequate one. CFM
              sizing: a bathroom
              exhaust fan is rated
              in cubic feet per
              minute (CFM) — the
              volume of air it moves
              in one minute; the
              HVI standard recommends
              one CFM per square
              foot of floor area
              for bathrooms up to
              100 square feet; a
              50 square foot bathroom
              requires at minimum
              a 50 CFM fan; however,
              in KC bathrooms with
              shower enclosures or
              spa-style fixtures
              that generate large
              volumes of steam,
              the HVI recommends
              upgrading to higher
              CFM — a 70 CFM fan
              in a 50 square foot
              bathroom provides
              better humidity control
              and faster moisture
              clearance; builder-grade
              fans installed in
              new KC construction
              are often the minimum
              code-compliant CFM
              for the bathroom size —
              they meet code but
              do not provide the
              additional capacity
              needed for a household
              that takes long showers
              or that leaves the
              fan off during showering.
              KC humidity and mold:
              KC summer relative
              humidity averages seventy
              to eighty percent;
              a bathroom that exhausts
              inadequately adds
              shower steam to an
              already humid environment —
              the moisture remains
              in the bathroom air
              longer, condenses
              on the cooler ceiling
              and exterior walls,
              and creates persistent
              wet surfaces that
              support mold growth;
              the standard failure
              pattern in KC bathrooms
              with undersized fans
              is mold on the ceiling
              above the shower head
              and on the caulk joint
              at the tub or shower
              walls — not because
              the shower gets those
              surfaces wet directly
              but because they never
              fully dry between
              uses; a fan with adequate
              CFM that is run for
              at least fifteen minutes
              after showering removes
              the moisture before
              it condenses on surfaces.
              ENERGY STAR vs. builder-grade:
              a builder-grade 50
              CFM bath fan uses
              approximately 2.0
              to 2.5 sones of sound
              — clearly audible
              and often perceived
              as loud; an ENERGY
              STAR rated fan (Panasonic
              WhisperCeiling, Broan-NuTone
              ULTRA series) uses
              0.3 to 0.8 sones —
              nearly silent at the
              same or higher CFM;
              ENERGY STAR fans use
              less than 1.4 watts
              per CFM versus the
              3+ watts of a builder-grade
              unit; over ten years
              of daily use, an ENERGY
              STAR fan saves approximately
              fifty to seventy kilowatt-hours
              per year compared
              to a builder-grade
              fan. A bathroom exhaust
              fan replacement website
              that explains CFM
              sizing for KC bathroom
              volume and use patterns,
              KC humidity and mold
              from inadequate exhaust,
              and the ENERGY STAR
              efficiency and sone
              comparison earns
              the homeowner who
              wants a fan that actually
              works rather than
              just a working fan.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before bathroom exhaust fan replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "CFM sizing — 1 CFM per square foot HVI standard, shower volume upgrade, builder-grade minimum vs. adequate",
                  "KC humidity and mold — summer 70-80% RH, ceiling and caulk mold from inadequate exhaust, 15-minute post-shower runtime",
                  "ENERGY STAR comparison — sone rating (0.3-0.8 vs. 2.0-2.5), watts per CFM, 10-year energy savings",
                  "Fan failure signs — reduced airflow, grinding or rattling bearing, moisture still present after running fan",
                  "Duct inspection — disconnected or kinked duct as airflow restriction, duct check at same time as fan replacement",
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
                What your bathroom exhaust fan replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "CFM section — HVI standard, square footage formula, shower volume upgrade recommendation for KC use patterns",
                  "Mold section — KC summer humidity, ceiling and caulk mold pattern, 15-minute post-shower runtime guidance",
                  "ENERGY STAR section — sone comparison chart, watts per CFM, Panasonic WhisperCeiling and Broan ULTRA models",
                  "Duct inspection — checking for disconnection or kinking, why new fan with bad duct still doesn't clear moisture",
                  "Builder-grade vs. upgrade cost — fan cost difference vs. energy savings and noise quality over 10 years",
                  "Quote form with bathroom size, current fan age/model, mold present, moisture issue after running fan, timeline",
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
                &ldquo;The CFM sizing section
                converted the calls
                from dead fan replacement
                to fan upgrade. Before,
                customers just wanted
                the same fan that
                stopped working put
                back in. After the
                section went up explaining
                that a builder-grade
                50 CFM fan in a KC
                bathroom with a walk-in
                shower barely meets
                code and doesn&apos;t actually
                clear steam fast enough
                to prevent ceiling
                mold, customers started
                asking whether they
                should upsize to 70
                or 90 CFM. The mold
                section helped close
                the ENERGY STAR upsell —
                customers who had ceiling
                staining above the
                shower understood
                that a louder builder-grade
                unit running longer
                and less efficiently
                was the reason they
                had mold. The quiet
                Panasonic option at
                0.3 sones became an
                easy yes once they
                saw the comparison.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Ashworth, electrical and bathroom fan installation, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A bathroom exhaust fan replacement site with CFM sizing section,
                KC mold guide, and quote form starts at $200. A full site with
                ENERGY STAR comparison, duct inspection content, and builder-grade
                vs. upgrade analysis is $425–$750. One fan upgrade call covers
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
