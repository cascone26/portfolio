import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Whole House Fan Installation Companies in Kansas City",
  description:
    "Custom websites for whole house fan installation, attic ventilation, and home cooling fan companies in the Kansas City area. Show your KC dew point window, CFM sizing, and attic exhaust requirement to win whole house fan installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/whole-house-fan-installation",
  },
};

export default function WholeHouseFanInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Whole House Fan Installation Companies in Kansas City",
    description: "Custom websites for whole house fan installation and home cooling fan companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Whole House Fan Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a whole house fan actually cools a KC home in summer humidity, when you can run it versus when it makes the house more humid, and how much attic ventilation area is required so the fan does not pressurize the attic. A website that explains the dew point window earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Whole House Fan Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Whole House Fan Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Whole house fan customers
              are KC homeowners whose
              upper floor is ten
              to fifteen degrees
              warmer than the main
              floor on summer evenings
              because heat stratified
              in the house during
              the day has nowhere
              to go — and who want
              to flush that heat
              out overnight when
              KC outdoor temperatures
              drop below the interior
              temperature. The central
              education for KC is
              the dew point window:
              a whole house fan
              works by pulling outdoor
              air through open windows
              and exhausting it
              through attic vents —
              when outdoor air
              is cooler than the
              interior and the dew
              point is below the
              indoor surface temperature,
              running the fan cools
              the house and feels
              comfortable; when
              outdoor humidity is
              high and the dew point
              is above sixty-five
              degrees — a common
              KC condition from
              June through August —
              pulling outdoor air
              in raises the interior
              humidity to uncomfortable
              levels and deposits
              moisture on cooled
              surfaces; in KC the
              effective window for
              whole house fan operation
              is typically late
              spring (May through
              mid-June), early fall
              (mid-September through
              October), and late
              evenings in July
              and August after
              a storm has cleared
              humidity — approximately
              one hundred to one
              hundred twenty usable
              nights per year.
              CFM sizing: a whole
              house fan should
              move enough air
              volume to change
              the air in the
              entire house every
              one to three minutes;
              for a two-thousand-square-foot
              KC home with eight-foot
              ceilings — sixteen
              thousand cubic feet
              of interior volume —
              an air change rate
              of once every two
              minutes requires
              eight thousand CFM;
              undersizing a whole
              house fan reduces
              the cooling effect
              because it cannot
              move the stratified
              hot air out of the
              upper floor fast
              enough; oversizing
              is rarely a problem
              as long as adequate
              attic exhaust area
              is available. Attic
              exhaust requirement:
              this is the installation
              detail that most
              homeowners do not
              know: a whole house
              fan exhausting air
              into the attic requires
              one square foot of
              net free area (NFA)
              in attic vents for
              every one hundred
              fifty CFM the fan
              moves; an eight-thousand-CFM
              fan requires approximately
              fifty-three square
              feet of NFA — significantly
              more than the attic
              venting installed
              in most KC homes;
              an undersized attic
              exhaust area causes
              the fan to pressurize
              the attic, pushing
              conditioned house
              air through ceiling
              bypasses into the
              attic rather than
              exhausting outdoors —
              it also reduces
              fan airflow and
              increases motor
              heat; an installer
              must verify the
              existing NFA of
              soffit, ridge, and
              gable vents before
              sizing the fan
              and add exhaust
              area if required.
              QuietCool and similar
              ducted whole house
              fans exhaust directly
              through a dedicated
              duct to exterior
              louvers — bypassing
              the attic ventilation
              requirement entirely —
              at a higher installation
              cost but with quieter
              operation and no
              attic NFA concern.
              A whole house fan
              website that explains
              the KC dew point
              window for effective
              operation, how to
              size the fan for
              the home volume,
              and the attic exhaust
              requirement earns
              the KC homeowner
              whose upper floor
              is ten degrees hotter
              than the thermostat
              every summer evening.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before whole house fan installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC dew point window — when fan operation is effective vs. when it raises indoor humidity, usable nights per year",
                  "CFM sizing — air changes per minute formula, volume calculation for KC home, undersizing consequence",
                  "Attic exhaust requirement — NFA per 150 CFM rule, 8,000 CFM fan attic vent area required, pressurization failure",
                  "Ducted vs. belt-drive models — QuietCool vs. traditional fan, attic NFA bypass, noise level difference",
                  "Insulated cover requirement — why whole house fans need a sealed insulated cover in winter to prevent heat loss",
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
                What your whole house fan website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC dew point section — when to run, when not to, seasonal usable window, how to tell before opening windows",
                  "Sizing guide — interior volume calculation, CFM formula, what undersized fans fail to accomplish",
                  "Attic exhaust section — NFA requirement, how to check existing vent area, what to add if insufficient",
                  "Model comparison — traditional belt-drive vs. ducted QuietCool, attic NFA requirement, noise, cost",
                  "Winter cover section — insulated magnetic cover, heat loss without it, installation process",
                  "Quote form with home sq ft and ceiling height, attic vent type, current AC costs, preferred operation",
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
                &ldquo;The attic exhaust section
                is what justifies my install
                price over a homeowner
                who buys a box fan
                unit off Amazon and
                cuts a hole in the ceiling.
                KC homeowners who DIY
                a whole house fan without
                verifying their attic NFA
                end up with a fan that
                pressurizes the attic
                and runs hot. After the
                section went up explaining
                the one-square-foot-per-one-fifty-CFM
                rule and showing what
                happens to a fan that
                can&apos;t exhaust properly,
                customers understood
                why the installation
                includes an attic
                ventilation check and
                sometimes adding vents —
                it&apos;s not upselling,
                it&apos;s what makes
                the fan work. The
                dew point section
                also set expectations —
                KC homeowners with
                a wrong mental model
                about humidity were
                the hardest callbacks
                to manage.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Nolan, whole house fan and ventilation, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A whole house fan site with KC dew point section, sizing guide,
                and quote form starts at $200. A full site with attic exhaust
                requirement, model comparison, and winter cover section is
                $425–$750. One whole house fan installation covers the cost.
                No contracts, no monthly fees.
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
