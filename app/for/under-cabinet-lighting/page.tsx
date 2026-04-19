import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Under Cabinet Lighting Companies in Kansas City",
  description:
    "Custom websites for under cabinet lighting installation, hardwired LED strip lights, and kitchen task lighting companies in the Kansas City area. Show your KC puck vs. strip light comparison, hardwired vs. plug-in installation options, and dimmer compatibility to win under cabinet lighting contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/under-cabinet-lighting",
  },
};

export default function UnderCabinetLightingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Under Cabinet Lighting Companies in Kansas City",
    description: "Custom websites for under cabinet lighting installation and hardwired LED kitchen task lighting companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Under Cabinet Lighting Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether hardwired under cabinet lights are worth it compared to plug-in strips, what the difference is between puck lights and LED strips, and whether their current dimmer switch will work with LED under cabinet lights. A website that explains hardwired vs. plug-in and dimmer compatibility earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Under Cabinet Lighting in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Under Cabinet Lighting</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Under cabinet lighting
              installation customers
              are KC homeowners
              remodeling or updating
              their kitchen who
              want task lighting
              that illuminates
              the counter surface
              directly rather
              than relying on
              overhead fixtures
              that cast shadow
              from the homeowner&apos;s
              own body while
              working at the
              counter — under
              cabinet lighting
              eliminates counter
              shadows and is
              the single most
              functional lighting
              upgrade in a kitchen;
              or homeowners building
              a new kitchen or
              updating cabinets
              who want to decide
              between hardwired
              and plug-in systems
              before the cabinets
              are installed. The
              central education
              is the hardwired
              vs. plug-in distinction:
              plug-in LED strip
              lights connect
              to an outlet inside
              the cabinet or
              behind the cabinet
              with a visible
              cord; they are
              inexpensive and
              easy to install
              but leave visible
              cords and transformer
              adapters, and they
              require an outlet
              to be present inside
              or near the cabinet;
              hardwired under
              cabinet lights
              run low-voltage
              wire from a driver
              (transformer) mounted
              inside a cabinet
              to each light fixture —
              no visible cords,
              clean installation,
              controlled by
              a wall switch or
              dimmer rather than
              a cord; the driver
              is connected to
              a dedicated 120V
              circuit or tapped
              from an existing
              circuit inside
              the cabinet; hardwired
              systems require
              an electrician
              to run the 120V
              feed to the cabinet
              location and connect
              the driver. Puck
              lights vs. LED
              strips: puck lights
              are circular individual
              fixtures spaced
              at regular intervals
              under the cabinet —
              they create pools
              of light that may
              not fully illuminate
              the entire counter
              surface; LED strip
              lights run continuously
              from end to end
              of the cabinet
              and produce uniform
              light across the
              full counter length —
              most professional
              under cabinet installations
              in KC use LED strip
              lights for uniform
              coverage; warm
              white (2700K-3000K)
              matches most KC
              kitchen finishes
              better than cool
              white (4000K+).
              Dimmer compatibility:
              not all LED drivers
              and strip lights
              are dimmable —
              and dimming LED
              under cabinet lights
              requires a dimmer
              switch rated for
              LED loads (not
              a standard incandescent
              dimmer) or a driver
              with its own dimming
              control; the common
              failure in KC under
              cabinet installations
              is connecting a
              dimmable LED system
              to a standard incandescent
              dimmer — the lights
              flicker, buzz,
              or only dim in
              a narrow range;
              specifying the
              correct dimmer
              is part of the
              installation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before under cabinet lighting installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Hardwired vs. plug-in — cord visibility, switch control, outlet requirement, professional installation value",
                  "Puck lights vs. LED strips — uniform vs. pooled light, why strips produce better counter coverage",
                  "Color temperature — warm white 2700K-3000K vs. cool white, how to match KC kitchen finishes",
                  "Dimmer compatibility — LED dimmer vs. incandescent dimmer, flickering and buzzing failure mode",
                  "Cabinet outlet requirement — where to tap 120V feed, dedicated circuit vs. existing circuit inside cabinet",
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
                What your under cabinet lighting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Hardwired vs. plug-in section — cord visibility comparison, switch control, professional installation detail",
                  "Strip vs. puck section — coverage uniformity, why strips are preferred, spacing calculation for pucks",
                  "Color temperature section — 2700K vs. 3000K vs. 4000K, KC kitchen finish matching guide",
                  "Dimmer section — LED dimmer requirement, driver compatibility, how to avoid flickering KC installs",
                  "Installation process section — driver location, wire routing inside cabinets, 120V feed point options",
                  "Quote form with cabinet linear footage, existing outlet inside cabinet, dimmer desired, color preference",
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
                &ldquo;The dimmer section prevents
                the callback that used
                to happen on every KC
                install where the homeowner
                already had a dimmer
                switch they wanted to
                keep. Standard incandescent
                dimmers on LED under cabinet
                lights flicker at low
                levels, buzz, or only
                work at full brightness
                — the homeowner thinks
                the lights are defective.
                After the section explaining
                that the dimmer is the
                issue and why LED drivers
                need an LED-rated dimmer
                or their own built-in
                control, customers accept
                the dimmer upgrade as
                part of the quote rather
                than disputing it after
                the install. The strip
                vs. puck section also
                upgrades most jobs —
                KC homeowners who called
                asking for puck lights
                because they saw them
                in a showroom change to
                strips after the section
                showing the shadow gaps
                between pucks on a long
                countertop run.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Alderman, kitchen lighting and electrical, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An under cabinet lighting site with hardwired vs. plug-in
                section, strip vs. puck comparison, and quote form starts at
                $200. A full site with color temperature guide, dimmer
                compatibility section, and installation process is $425–$750.
                One full kitchen under cabinet run covers the cost. No
                contracts, no monthly fees.
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
