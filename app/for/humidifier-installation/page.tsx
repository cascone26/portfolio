import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Whole-Home Humidifier Companies in Kansas City",
  description:
    "Custom websites for whole-home humidifier installation, bypass humidifier, powered humidifier, and steam humidifier companies in the Kansas City area. Show your grains per pound sizing, duct static requirements, and KC winter dry air data to win humidifier contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/humidifier-installation",
  },
};

export default function HumidifierInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Whole-Home Humidifier Companies in Kansas City",
    description: "Custom websites for whole-home humidifier installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Whole-Home Humidifier Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their skin is dry and floors are cracking every KC winter, whether a bypass or powered humidifier is right for their system, and what humidity level their home should actually be at. A website that explains the difference earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Humidifier Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Whole-Home Humidifier</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Whole-home humidifier
              customers are KC homeowners
              whose hardwood floors
              are gapping and cupping
              every winter, who
              have nosebleeds and
              dry skin from October
              through March, or
              who are running multiple
              portable humidifiers
              and still not reaching
              comfortable humidity
              levels throughout
              the house. KC winters
              are dry: outdoor air
              at 30°F holds very
              little moisture; when
              that air is heated
              to 70°F inside the
              house, relative humidity
              drops to 10–15% —
              well below the 35–45%
              comfort range recommended
              by ASHRAE. The central
              education is humidifier
              types and what determines
              the right choice.
              Bypass humidifiers
              (Aprilaire 400, Honeywell
              HE360): mounted on
              the supply or return
              plenum, use a bypass
              duct that pulls hot
              supply air across
              a water panel and
              returns it to the
              return side — only
              operate when the
              furnace blower is
              running; require
              a minimum of 0.01
              inches of static
              pressure differential
              between supply and
              return (most gas
              furnaces provide
              this, variable-speed
              blowers at low speed
              may not); water panel
              requires annual replacement;
              output: 17–18 gallons/day
              at rated conditions.
              Powered humidifiers
              (Aprilaire 600, Honeywell
              HE365): have their
              own evaporator fan,
              operate independently
              of furnace blower
              call — can humidify
              without a heat call;
              higher output (17–23
              gallons/day) and
              more consistent performance
              with variable-speed
              systems. Steam humidifiers
              (Aprilaire 800, Nortec):
              heat water electrically
              to generate steam,
              independent of HVAC
              airflow — highest
              output (up to 34
              gallons/day), not
              affected by duct
              static pressure;
              appropriate for very
              large homes, homes
              with tight air sealing
              where evaporative
              units can't keep
              up, or homes with
              heat pumps that run
              cooler supply air.
              Sizing: Manual J
              moisture load calculation
              — home volume times
              air changes per hour
              times moisture required
              per air change; simplified
              rule of thumb is
              12–18 gallons/day
              per 1,000 sq ft
              in a moderately sealed
              KC home. Humidistat
              location: indoor
              humidistat measures
              relative humidity
              at the sensor location
              — for accurate whole-house
              control, humidistat
              should be in the
              return air duct or
              in the main living
              area, not in the
              mechanical room;
              outdoor reset humidistats
              (Aprilaire 62) lower
              the setpoint automatically
              as outdoor temperature
              drops to prevent
              window condensation
              at setback temperatures.
              A whole-home humidifier
              website that explains
              why KC winters drive
              relative humidity
              to 10–15%, what the
              difference is between
              bypass and powered
              units, and how to
              size for the home
              earns the homeowner
              whose floors are
              already shrinking.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a whole-home humidifier
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC winter dry air — why heating outdoor air to 70°F drops RH to 10–15%, ASHRAE comfort range",
                  "Bypass vs. powered — static pressure requirement for bypass, when powered is better for variable-speed systems",
                  "Steam humidifiers — when evaporative units can't keep up, heat pump compatibility, output comparison",
                  "Sizing — gallon-per-day output needed for home square footage, manual J moisture load basics",
                  "Humidistat placement — return duct vs. living area, outdoor reset control for window condensation prevention",
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
                What your humidifier installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC winter humidity section — outdoor air moisture content, heating effect on RH, comfort range and health effects",
                  "Humidifier type guide — bypass vs. powered vs. steam, when each is appropriate, compatibility with variable-speed",
                  "Sizing section — gallon-per-day output, home volume calculation, moderately vs. tightly sealed homes",
                  "Humidistat guide — sensor location, outdoor reset control, setpoint recommendations by outdoor temperature",
                  "Maintenance section — water panel replacement schedule, mineral scale, drain line cleaning",
                  "Quote form with home square footage, current system type, whether variable-speed blower, humidity symptoms",
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
                &ldquo;The customers who called
                me had usually already bought
                two or three portable units
                and were still complaining
                about dry air. The website
                section on why bypass humidifiers
                don't work well with variable-speed
                blowers at low speed — and
                when a powered unit is the
                right choice — eliminated
                an entire category of post-installation
                complaints. I used to get
                calls in January from customers
                saying the humidifier wasn't
                working, and it turned out
                to be a static pressure problem
                with the bypass design on
                a two-stage furnace. The
                outdoor reset humidistat
                section also set expectations
                on window condensation: customers
                who read it arrived understanding
                why we don't run 45% RH when
                it's 10°F outside, and stopped
                asking why I lowered their
                setpoint during cold snaps.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Torres, HVAC and whole-home humidification, Lee's Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A humidifier site with KC dry air section, humidifier
                type guide, and quote form starts at $200. A full
                site with sizing section, steam humidifier comparison,
                and humidistat guide is $425–$750. One whole-home
                humidifier installation covers the cost. No contracts,
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
