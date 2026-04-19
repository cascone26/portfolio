import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Whole House Fan Companies in Kansas City",
  description:
    "Custom websites for whole house fan installation, attic fan, and QuietCool ventilation companies in the Kansas City area. Show your CFM sizing, attic ventilation requirements, and when whole house fans work best in KC to win installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/whole-house-fan",
  },
};

export default function WholeHouseFanPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Whole House Fan Companies in Kansas City",
    description: "Custom websites for whole house fan installation and attic ventilation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Whole House Fan Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a whole house fan actually works in KC's climate, how many CFM they need, and whether it requires additional attic ventilation. A website that explains the KC spring and fall cooling window earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Whole House Fans in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Whole House Fan</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Whole house fan customers
              are KC homeowners who
              want to cool the house
              on spring and fall
              evenings when outdoor
              temperatures drop below
              65–70°F and running
              the AC feels wasteful,
              homeowners whose upstairs
              is uncomfortably hot
              after a sunny day
              and who want to flush
              accumulated heat before
              bedtime, or homeowners
              who want to reduce
              AC runtime during
              the shoulder seasons
              when KC nights are
              cool but afternoons
              are warm. The central
              education is what
              a whole house fan
              does and what conditions
              it requires: a whole
              house fan mounts in
              the ceiling at the
              top of the stairwell
              or a central hallway,
              pulls air through
              open windows from
              ground level, and
              exhausts it into
              the attic — the air
              exchange rate flushes
              house volume 15–20
              times per hour;
              the attic must have
              adequate exhaust ventilation
              (net free area) to
              accept the airflow
              without pressurizing.
              CFM sizing: the rule
              of thumb is 2–3 CFM
              per square foot of
              living area — a 1,800
              sq ft KC home needs
              3,600–5,400 CFM; a
              properly sized unit
              achieves 15–20 air
              changes per hour
              at this flow; undersizing
              reduces flush speed
              and effectiveness.
              Attic ventilation
              requirement: IRC
              requires 1 sq ft
              of net free vent
              area per 150 sq
              ft of attic floor
              (or 1:300 with vapor
              barrier) — a whole
              house fan adds a
              significant exhaust
              load that may require
              adding gable vents
              or larger ridge/soffit
              ventilation before
              or during installation.
              KC climate window:
              KC has approximately
              80–100 days per year
              where overnight lows
              drop below 65°F while
              afternoon highs were
              above 75°F — this
              is the whole house
              fan window; from
              June through August,
              overnight lows often
              remain in the mid-70s,
              limiting effective
              use to shoulder seasons.
              Quiet ducted models
              vs. traditional belt-drive:
              traditional whole
              house fans (large
              belt-drive, Tamarack,
              Triangle Engineering)
              — high CFM, some
              noise at ceiling,
              require large shutter
              opening; quiet ducted
              models (QuietCool,
              Tamarack HV2000) —
              motor in attic, insulated
              duct to ceiling register,
              significantly quieter,
              easier to insulate
              in winter to prevent
              cold air infiltration.
              A whole house fan
              website that explains
              the KC shoulder-season
              window, CFM sizing,
              and attic ventilation
              requirements earns
              the homeowner who
              wants to reduce AC
              costs but isn't sure
              whether the climate
              makes it worth it.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a whole house fan
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC climate window — how many days per year the fan is actually usable, shoulder season vs. midsummer",
                  "CFM sizing — square footage calculation, why 2–3 CFM per sq ft, what happens if undersized",
                  "Attic ventilation requirement — net free area calculation, whether existing vents are sufficient",
                  "Quiet ducted vs. belt-drive — noise comparison, insulation for winter, motor location differences",
                  "Energy savings — AC runtime reduction during shoulder season, how to estimate annual savings",
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
                  "KC climate section — shoulder season dates, overnight low frequency, when fan use makes sense",
                  "CFM sizing guide — square footage calculation, air change rate, undersizing consequences",
                  "Attic ventilation section — IRC requirement, net free area calculation, when additional venting is needed",
                  "Product comparison — belt-drive vs. quiet ducted models, noise levels, winter insulation options",
                  "Installation section — ceiling opening, shutter vs. register, what a professional installation includes",
                  "Quote form with home square footage, attic access, existing ventilation, desired CFM capacity",
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
                &ldquo;The most common question
                I got was whether a whole
                house fan works in Kansas
                City, since people think
                it's too hot. The website
                section on the KC shoulder
                season — the specific window
                in May, June, September,
                and October when the fan
                actually does its job —
                answered that with real
                data rather than a vague
                'yes it works.' The attic
                ventilation section also
                prevented two callbacks:
                customers who read it asked
                about their existing vents
                before the install date,
                which let me add gable vent
                work to the quote instead
                of discovering the issue
                on-site and having to
                schedule a second trip.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — H. Croft, attic ventilation and fan installation, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A whole house fan site with CFM sizing guide,
                KC climate section, and quote form starts at $200.
                A full site with attic ventilation section, product
                comparison, and energy savings content is $425–$750.
                One fan installation covers the cost. No contracts,
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
