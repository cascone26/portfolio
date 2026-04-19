import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Ceiling Fan Installation Companies in Kansas City",
  description:
    "Custom websites for ceiling fan installation, ceiling fan replacement, and electrical companies in the Kansas City area. Show your fan sizing guide, box support requirements, and wiring expertise to win ceiling fan installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/ceiling-fan-installation",
  },
};

export default function CeilingFanInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Ceiling Fan Installation Companies in Kansas City",
    description: "Custom websites for ceiling fan installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Ceiling Fan Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what size fan their room needs, whether their existing electrical box can support a fan, and how to wire a fan where there's currently only a light. A website that explains the sizing and box requirements earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Ceiling Fan Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Ceiling Fan Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Ceiling fan installation
              customers are KC homeowners
              adding fans in bedrooms
              or living rooms to
              reduce AC runtime
              in summer and improve
              circulation in winter,
              homeowners replacing
              old fans that wobble
              or have failing motors,
              or homeowners who
              want fans in rooms
              that currently have
              only a light fixture
              and need to understand
              whether wiring allows
              it. The central education
              is fan sizing, electrical
              box requirements,
              and wiring options —
              three separate questions
              that each require
              a real answer before
              the job can be scoped.
              Fan sizing by room:
              blade span determines
              airflow coverage —
              rooms up to 75 sq
              ft (small bedroom):
              42–44 inch; 76–144
              sq ft (standard bedroom):
              44–50 inch; 145–225
              sq ft (large bedroom,
              small living room):
              52–56 inch; over
              225 sq ft or great
              rooms: 60–72 inch
              or multiple fans;
              blade pitch of 12–15
              degrees produces
              adequate airflow
              — fans with shallower
              pitch move less
              air at the same
              motor speed. Ceiling
              height: standard
              8-foot ceilings require
              a flush-mount (hugger)
              fan with less than
              6 inches of clearance —
              non-hugger fans on
              8-foot ceilings put
              blade tips at 6.5–7
              feet, which is below
              the 7-foot NEC clearance
              requirement; 9-foot
              ceilings use a standard
              downrod (3–6 inch);
              vaulted ceilings
              require a sloped
              ceiling adapter and
              an extended downrod
              to maintain 8–9
              feet of blade clearance
              from the floor. Electrical
              box requirement:
              a standard ceiling
              light box is rated
              for 35 lbs of lighting
              fixtures — ceiling
              fans weigh 15–50
              lbs and produce
              dynamic load when
              spinning; NEC requires
              a fan-rated box
              (marked "Suitable
              for Fan Support");
              fan-rated plastic
              boxes are rated
              to 35 lbs, fan-rated
              metal boxes to 70
              lbs; if the existing
              box is not fan-rated,
              it must be replaced
              with a brace kit
              (Westinghouse, National
              Hardware) that installs
              from below without
              attic access. Wiring
              options: single-switch
              with pull chains —
              one wire controls
              both fan and light
              from the wall switch,
              fan and light operated
              separately by pull
              chain; dual-switch —
              two separate conductors
              run from a dual
              switch plate, fan
              and light on independent
              switches; wireless
              receiver kit (Hunter,
              Hampton Bay) — installs
              in the canopy, converts
              a single-switch circuit
              to independent fan
              and light control
              via remote or smart
              home; adding a second
              switch requires
              either running a
              new wire (fishing
              through walls) or
              installing a wireless
              receiver — the receiver
              approach avoids
              patching drywall.
              Energy savings: a
              ceiling fan uses
              60–75 watts; running
              a fan in conjunction
              with AC allows the
              thermostat setpoint
              to be raised 4°F
              with the same perceived
              comfort — at KC's
              summer utility rates,
              a 4°F thermostat
              raise reduces AC
              energy use by approximately
              8% on a central
              system; winter operation
              (reverse direction,
              low speed) redistributes
              warm air that stratifies
              at the ceiling.
              A ceiling fan website
              that explains the
              box support requirement,
              sizing guide, and
              wiring options earns
              the homeowner who
              wants to know what
              the job actually
              involves before
              calling.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before ceiling fan installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fan sizing — blade span by room size, pitch and airflow, hugger vs. standard for 8-foot ceilings",
                  "Fan-rated box — why light fixture boxes fail under fan load, brace kit installation from below",
                  "Wiring options — single-switch pull chain vs. dual switch vs. wireless receiver, when new wire is needed",
                  "Vaulted ceiling fans — sloped adapter, downrod length, blade clearance from floor",
                  "Energy savings — 4°F thermostat offset, summer and winter direction benefits, wattage comparison",
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
                What your ceiling fan installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Room sizing guide — blade span table by square footage, ceiling height considerations, hugger fan requirements",
                  "Box support section — fan-rated vs. light-rated box, brace kit installation, weight limits",
                  "Wiring options section — pull chain, dual switch, wireless receiver, when wall fishing is required",
                  "Vaulted ceiling guide — sloped adapter, downrod sizing, minimum floor clearance",
                  "Energy section — thermostat offset, summer and winter operation, wattage vs. AC runtime savings",
                  "Quote form with room size, ceiling height, current fixture type, preferred control method",
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
                &ldquo;The box support section
                completely changed my quote
                conversations. Before, customers
                would say the light was already
                there so installation should
                be simple — and then be surprised
                when I said the box needed
                to be replaced. After I added
                the section explaining that
                a light-rated box fails under
                a spinning fan load and what
                a brace kit installation involves,
                that expectation was set before
                the call. The wiring section
                also helped: customers who
                wanted independent fan and
                light switches arrived knowing
                whether they had two-wire
                or three-wire circuits, which
                cut my assessment time in
                half and let me give accurate
                quotes over the phone instead
                of on-site.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Osei, electrician and ceiling fan installation, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A ceiling fan installation site with sizing guide,
                box support section, and quote form starts at $200.
                A full site with wiring options, vaulted ceiling
                guide, and energy savings content is $425–$750.
                Five fan installations cover the cost. No contracts,
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
