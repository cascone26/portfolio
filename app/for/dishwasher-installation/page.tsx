import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Dishwasher Installation Companies in Kansas City",
  description:
    "Custom websites for dishwasher installation, dishwasher replacement, and dishwasher hookup companies in the Kansas City area. Show your KC water supply line requirements, drain loop and air gap code, and electrical circuit requirement to win dishwasher installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/dishwasher-installation",
  },
};

export default function DishwasherInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Dishwasher Installation Companies in Kansas City",
    description: "Custom websites for dishwasher installation and dishwasher replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Dishwasher Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether dishwasher installation requires a permit, why their new dishwasher drains into the sink instead of directly out, and whether a 15-amp circuit is enough or if they need a 20-amp dedicated circuit. A website that explains dishwasher installation earns the hookup call before a homeowner tries to DIY the drain connection. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Dishwasher Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Dishwasher Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Dishwasher installation
              customers are KC homeowners
              who purchased a new
              dishwasher and need
              it connected to existing
              water supply, drain,
              and electrical service
              under the counter;
              homeowners replacing
              an old dishwasher
              that has leaked, stopped
              cycling, or failed
              to drain — and who
              want the old unit
              disconnected and
              the new unit installed
              on the same day;
              or homeowners in
              a kitchen that did
              not previously have
              a dishwasher who
              want to add one and
              need to know whether
              the existing plumbing
              and electrical can
              support it or whether
              new rough-in work
              is required. The
              central education
              is the water supply
              line requirement,
              drain loop and air
              gap code, and the
              dedicated electrical
              circuit requirement —
              three things that
              determine whether
              a dishwasher installation
              is a straightforward
              swap or requires
              additional plumbing
              or electrical work
              before the unit
              can operate safely.
              Water supply line:
              a dishwasher connects
              to the hot water
              supply under the
              sink — typically
              a three-eighth-inch
              compression fitting
              on the hot supply
              valve or a dedicated
              dishwasher supply
              valve tee&apos;d off
              the hot supply before
              the faucet supply
              line; the supply
              line runs from the
              valve through the
              cabinet wall or
              floor into the dishwasher
              connection behind
              the kickplate; the
              correct supply line
              is braided stainless
              steel rated for
              dishwasher use —
              not a standard compression
              sink supply line;
              in KC homes built
              before 1990, the
              hot supply valve
              under the sink may
              not have a spare
              port for a dishwasher
              supply line — adding
              a tee valve or replacing
              the shut-off with
              a dual-outlet valve
              is required before
              connection. Drain
              loop and air gap:
              a dishwasher drain
              hose must include
              a high loop — the
              hose rises to the
              top of the cabinet
              interior before
              dropping to the
              drain connection —
              or an air gap device
              mounted at the sink
              deck; the high loop
              or air gap prevents
              backflow of sink
              water or garbage
              disposal contents
              into the dishwasher;
              some KC jurisdictions
              require an air gap
              device at the sink
              deck as the code-compliant
              backflow prevention
              method — a high
              loop is permitted
              by the IPC but not
              universally accepted
              by local jurisdictions;
              the drain hose connects
              to the garbage disposal
              inlet or to a wye
              fitting on the sink
              drain tailpiece —
              the connection must
              be above the disposal
              or drain trap. Electrical
              circuit requirement:
              a dishwasher requires
              a dedicated 120-volt,
              15-amp or 20-amp
              circuit — it cannot
              share a circuit
              with another appliance;
              NEC requires the
              circuit to be GFCI
              protected; in KC
              homes built before
              1980, the dishwasher
              may be on a shared
              kitchen circuit
              that does not meet
              current code — a
              licensed electrician
              must run a dedicated
              circuit before a
              new dishwasher can
              be installed to
              code. A dishwasher
              installation website
              that explains water
              supply line and
              valve requirements,
              the drain loop and
              air gap code standard,
              and the dedicated
              GFCI circuit requirement
              earns the homeowner
              who bought a new
              dishwasher and needs
              a professional hookup
              to know it is done
              correctly.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before dishwasher installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Supply line — 3/8-inch compression, braided stainless, dual-outlet valve tee requirement in older KC kitchens",
                  "Drain loop vs. air gap — high loop permitted by IPC, air gap required by some KC jurisdictions, backflow prevention function",
                  "Electrical circuit — dedicated 120V 15 or 20-amp, GFCI protection required, shared circuit in pre-1980 KC homes",
                  "New dishwasher add (no prior unit) — whether existing rough-in can support it, what new work is needed",
                  "Same-day swap — old unit disconnect and new unit installation in one visit, what to do with old unit",
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
                What your dishwasher installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Supply line section — valve types, braided stainless requirement, pre-1990 KC kitchen valve upgrade",
                  "Drain section — high loop vs. air gap, jurisdiction variation in KC metro, disposal inlet vs. tailpiece wye connection",
                  "Electrical section — dedicated circuit requirement, GFCI, what a shared circuit means for older KC homes",
                  "New installation scope — what rough-in exists vs. what needs to be added for a first-time dishwasher",
                  "Swap service — what the technician checks before hooking up the new unit, haul-away of old unit",
                  "Quote form with kitchen age, existing dishwasher, supply valve type, circuit status, new unit purchased or need recommendation",
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
                &ldquo;The drain section is
                what stopped the
                callbacks. KC homeowners
                who tried to install
                their own dishwasher
                would call me after
                the sink started
                backing up into
                the dishwasher tub.
                After the section
                went up explaining
                that the drain hose
                has to have a high
                loop and connect
                above the trap,
                customers who were
                thinking about DIY
                started calling
                for professional
                installation instead.
                The electrical section
                also opened up scope —
                older Westwood and
                Brookside homes
                with 1970s kitchens
                often don&apos;t have
                a dedicated circuit,
                and customers found
                the page while researching
                dishwasher installation
                permits. Explaining
                the GFCI dedicated
                circuit requirement
                before the site
                visit meant the
                electrician call
                was already part
                of their plan.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Mercer, appliance installation and kitchen plumbing, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A dishwasher installation site with supply line section, drain
                loop guide, and quote form starts at $200. A full site with
                electrical circuit requirements, new installation scope, and
                older KC kitchen valve content is $425–$750. One installation
                call covers the cost. No contracts, no monthly fees.
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
