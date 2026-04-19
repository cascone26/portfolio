import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Gas Fireplace Cleaning Companies in Kansas City",
  description:
    "Custom websites for gas fireplace cleaning, gas fireplace service, and gas log cleaning companies in the Kansas City area. Show your thermocouple vs. thermopile distinction, KC dust accumulation on gas logs, and pilot light failure diagnosis to win gas fireplace cleaning contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/gas-fireplace-cleaning",
  },
};

export default function GasFireplaceCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Gas Fireplace Cleaning Companies in Kansas City",
    description: "Custom websites for gas fireplace cleaning and gas log service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Gas Fireplace Cleaning Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their gas fireplace pilot light won&apos;t stay lit after summer, whether the white dust on their gas logs is a problem, and what actually needs to be cleaned versus replaced. A website that explains gas fireplace cleaning earns the fall service call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Gas Fireplace Cleaning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Gas Fireplace Cleaning</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Gas fireplace cleaning
              customers are KC homeowners
              who turn on the fireplace
              in October and find
              the pilot light goes
              out within thirty seconds,
              the burner flame is
              uneven or orange instead
              of blue, or white dust
              has accumulated on the
              ceramic gas logs after
              a summer of sitting
              unused — homeowners
              who installed a gas
              insert into a wood-burning
              fireplace in the 1990s
              and have never had
              the burner assembly,
              thermocouple, or thermopile
              cleaned or tested, or
              homeowners whose gas
              log set is twenty-plus
              years old and losing
              its ember glow because
              the vermiculite and
              glowing media has been
              displaced or degraded.
              The central education
              is thermocouple versus
              thermopile function
              and failure, what the
              white deposit on gas
              logs actually is, and
              the annual cleaning
              sequence for a gas
              fireplace — three things
              that determine whether
              the fireplace lights
              reliably and burns
              cleanly through a KC
              heating season. Thermocouple
              vs. thermopile: the
              thermocouple is a safety
              device in a standing
              pilot system — it generates
              a small millivolt signal
              when heated by the
              pilot flame, and that
              signal holds the gas
              valve open; if the
              pilot flame is weak,
              misaligned, or dirty,
              the thermocouple cools
              and closes the valve —
              the pilot goes out
              when the button is
              released; thermopiles
              are used in electronic
              ignition systems that
              power the remote, wall
              switch, or thermostat
              control — a thermopile
              generates 250–750 millivolts
              from the pilot flame
              to power the valve
              and receiver; a weak
              thermopile in a KC
              gas insert produces
              intermittent ignition
              failures, remote control
              dropouts, and failure
              to light in cold weather
              when the thermopile
              output drops below
              the valve minimum operating
              voltage; cleaning the
              pilot assembly, thermocouple
              tip, and thermopile
              probe restores full
              output before replacement
              is needed. Gas log deposits:
              the white powder on
              gas logs is calcium
              and mineral deposits
              from combustion byproducts —
              natural gas burns to
              water vapor and carbon
              dioxide; the water
              vapor condenses on
              the cool log surface
              before the fireplace
              warms and deposits
              minerals from the gas
              supply; in KC, the
              municipal gas supply
              carries enough sulfur
              compounds that the
              deposit on logs also
              includes sulfate residue —
              a yellow-white crust
              at the burner orifice
              area; these deposits
              restrict gas flow through
              the burner ports and
              cause the uneven orange
              flame pattern homeowners
              notice; cleaning the
              burner ports, wiping
              the log surfaces, and
              vacuuming the firebox
              floor restores the
              blue flame pattern.
              Annual cleaning sequence:
              a complete gas fireplace
              service includes removing
              the logs and media,
              vacuuming the firebox
              floor and burner tray,
              cleaning the burner
              ports with a soft brush
              and compressed air,
              cleaning the thermocouple
              and thermopile probes,
              testing the pilot flame
              height and alignment,
              inspecting the gas
              valve and flex line
              for corrosion, and
              replacing media and
              logs in the correct
              pattern — the log placement
              pattern in a vented
              gas log set is designed
              to direct flame across
              the logs in a specific
              way; replacing logs
              out of order changes
              the flame pattern and
              can cause carbon deposit
              on the firebox glass.
              A gas fireplace cleaning
              website that explains
              thermocouple and thermopile
              function, what the
              white deposit means,
              and the annual service
              sequence earns the
              homeowner who wants
              the fireplace working
              before the first cold
              KC weekend.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before gas fireplace cleaning
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Thermocouple failure — pilot won't stay lit, millivolt output, cleaning vs. replacement threshold",
                  "Thermopile output — remote dropouts, cold weather failures, minimum valve voltage, cleaning procedure",
                  "White log deposits — mineral and sulfate crust from KC gas supply, burner port restriction, flame pattern change",
                  "Burner port cleaning — compressed air method, port restriction signs, orange flame cause",
                  "Annual service — what's included, log placement pattern, firebox glass carbon deposit from wrong log order",
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
                What your gas fireplace cleaning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Thermocouple section — standing pilot system, millivolt function, why pilot drops out, cleaning vs. replacement",
                  "Thermopile section — electronic ignition systems, remote control power, cold weather output drop, cleaning procedure",
                  "Deposit section — KC gas supply mineral content, white powder on logs, orange flame from blocked ports",
                  "Burner cleaning guide — port cleaning method, burner tray vacuum, compressed air sequence",
                  "Annual service checklist — full service scope, log placement pattern, glass inspection, flex line check",
                  "Quote form with fireplace type (insert vs. zero-clearance), ignition type, last service date, specific symptoms",
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
                &ldquo;The thermocouple section
                alone converted three
                October service calls
                per week. Every fall
                KC homeowners call
                asking why the pilot
                won&apos;t stay lit. Before
                the section went up,
                I&apos;d quote a thermocouple
                replacement and they&apos;d
                say they needed to
                think about it because
                they didn&apos;t know what
                a thermocouple was.
                After the section explained
                what it does, why
                it fails after a summer
                of disuse, and the
                difference between
                cleaning it versus
                replacing it, customers
                started booking immediately.
                The log deposit section
                also helped — homeowners
                thought the white powder
                was a gas leak or
                some kind of hazard.
                Explaining it as mineral
                buildup from combustion
                and the burner port
                restriction it causes
                made the full cleaning
                make sense rather
                than just wiping the
                logs.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Kearney, gas fireplace service and repair, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A gas fireplace cleaning site with thermocouple section, deposit
                guide, and quote form starts at $200. A full site with thermopile
                content, annual service checklist, and KC gas supply context
                is $425–$750. One fall fireplace service call covers the cost.
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
