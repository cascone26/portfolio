import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Exterior Lighting Installation Companies in Kansas City",
  description:
    "Custom websites for exterior lighting, landscape lighting, and outdoor electrical companies in the Kansas City area. Show your KC voltage drop calculations, transformer sizing, and low-voltage vs. line-voltage fixture selection to win exterior lighting installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/exterior-lighting-installation",
  },
};

export default function ExteriorLightingInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Exterior Lighting Installation Companies in Kansas City",
    description: "Custom websites for exterior lighting and landscape lighting companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Exterior Lighting Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their DIY landscape lighting looks dim at the end of the run, whether they need a permit for outdoor lighting, and what the difference is between low-voltage and line-voltage fixtures for a KC yard. A website that explains voltage drop and transformer sizing earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Exterior Lighting Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Exterior Lighting Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Exterior lighting
              installation customers
              are KC homeowners
              who want path lighting,
              uplighting on trees
              or architectural
              features, step and
              deck lighting, or
              security lighting
              on their property —
              and who either tried
              a DIY low-voltage
              system from a home
              center and found
              that the fixtures
              at the end of the
              cable run were noticeably
              dimmer than those
              at the transformer,
              or who want a professionally
              designed system
              that integrates with
              a smart home controller
              or Wi-Fi timer.
              The central education
              is voltage drop:
              twelve-volt landscape
              lighting systems
              are the standard
              for residential
              exterior lighting
              because the low
              voltage is safe
              to work with and
              does not require
              conduit burial
              in most jurisdictions —
              but twelve-volt
              systems are subject
              to voltage drop
              across the cable
              run; the formula
              is Ohm&apos;s Law applied
              to wire resistance:
              voltage drop equals
              current (amps)
              multiplied by
              wire resistance
              (ohms per foot
              times run length);
              a twelve-gauge
              wire running two
              hundred feet with
              a total load of
              one amp drops
              approximately
              zero-point-four
              volts — acceptable;
              that same run
              at five amps drops
              two volts — the
              fixtures at the
              end of the run
              receive ten volts
              instead of twelve,
              which produces
              visibly lower
              light output and
              reduces LED driver
              life; professional
              design solutions
              are to either
              use a heavier
              gauge wire (ten
              gauge instead
              of twelve), split
              the run into two
              shorter runs from
              the transformer
              using a hub-and-spoke
              layout, or use
              a multi-tap transformer
              that outputs thirteen
              or fourteen volts
              to compensate
              for drop on long
              runs. Transformer
              sizing: the transformer
              wattage must exceed
              the total fixture
              wattage on the
              system by twenty
              percent — a transformer
              running at or
              above its rated
              capacity runs
              hot and degrades
              prematurely; a
              one-hundred-fifty-watt
              transformer should
              carry no more
              than one hundred
              twenty-five watts
              of fixture load;
              LED landscape
              fixtures have
              dramatically reduced
              system wattage
              compared to halogen —
              a typical KC front-yard
              path and uplighting
              system with twelve
              to sixteen LED
              fixtures runs
              forty to eighty
              watts, fitting
              easily on a one-hundred-fifty-watt
              transformer with
              room to expand.
              Line-voltage vs.
              low-voltage: line-voltage
              (one hundred twenty
              volt) exterior
              fixtures — wall
              sconces, garage
              lights, flood
              lights on a dedicated
              circuit — require
              an electrical permit
              in Kansas City
              because they connect
              to the home&apos;s
              branch circuit
              wiring; low-voltage
              twelve-volt landscape
              fixtures generally
              do not require
              a permit because
              they operate below
              the voltage threshold
              requiring permitting
              in Missouri and
              Kansas; the distinction
              matters when a
              customer asks whether
              they need an electrician
              for their landscape
              lighting project —
              the answer depends
              on what type of
              fixture and how
              it is powered.
              A KC exterior
              lighting website
              that explains
              voltage drop, transformer
              sizing, and the
              permit distinction
              earns the homeowner
              who wants a system
              that is bright
              at the end of
              the run and expandable
              without a new
              transformer.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before exterior lighting installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Voltage drop — why end-of-run fixtures are dim, Ohm's Law for landscape cable, gauge and run length trade-offs",
                  "Transformer sizing — wattage headroom requirement, multi-tap voltage compensation, smart timer integration",
                  "Low-voltage vs. line-voltage — what requires a permit in KC, when an electrician is needed vs. not",
                  "Hub-and-spoke wiring — why single-run homerun designs cause drop, how to rewire an existing dim system",
                  "LED vs. halogen — system wattage comparison, color temperature selection for landscape, driver life",
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
                What your exterior lighting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Voltage drop section — Ohm's Law explained for homeowners, wire gauge guide, when hub-and-spoke is required",
                  "Transformer section — sizing rule, multi-tap output, smart timer and app integration options",
                  "Permit section — what requires a permit in KC vs. what doesn't, when to involve a licensed electrician",
                  "Fixture type guide — path vs. uplighting vs. well lights, beam angle selection, color temp for KC landscaping",
                  "System expansion section — how a properly sized transformer allows future fixture adds without rewire",
                  "Quote form with yard size, fixture type goals, existing system condition, smart home integration interest",
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
                &ldquo;The voltage drop section
                converts every DIY repair
                call into a full redesign.
                KC homeowners who installed
                their own landscape
                lighting two or three
                years ago all have the
                same problem — the fixtures
                at the end of the homerun
                are dim and they&apos;ve
                been adding fixtures
                to a system that was
                already at the edge
                of its transformer capacity.
                After the voltage drop
                section explained what
                was happening electrically,
                customers stopped asking
                me to just replace the
                dim fixtures and started
                asking about a full
                hub-and-spoke rewire.
                The transformer sizing
                section also helps —
                homeowners understand
                why buying a bigger
                transformer upfront
                is cheaper than adding
                one later when they
                want to expand.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Whitfield, landscape lighting design and installation, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An exterior lighting site with voltage drop section, transformer
                sizing guide, and quote form starts at $200. A full site with
                hub-and-spoke wiring explanation, fixture type guide, and
                smart controller integration section is $425–$750. One full
                front-yard system install covers the cost. No contracts, no monthly fees.
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
