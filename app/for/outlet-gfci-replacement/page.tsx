import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for GFCI Outlet Replacement Companies in Kansas City",
  description:
    "Custom websites for GFCI outlet replacement, GFCI outlet installation, and tripped GFCI diagnosis companies in the Kansas City area. Show your GFCI vs. AFCI distinction, KC code requirement by location, and downstream outlet protection to win GFCI outlet replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/outlet-gfci-replacement",
  },
};

export default function OutletGfciReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for GFCI Outlet Replacement Companies in Kansas City",
    description: "Custom websites for GFCI outlet replacement and installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for GFCI Outlet Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why the outlet in their bathroom or garage stopped working even though the breaker isn't tripped, why pressing the reset button on one outlet brings back power to three other outlets, and whether a GFCI outlet in a wet location is different from a regular outlet with a weatherproof cover. A website that explains GFCI outlet replacement earns the tripped outlet call before they assume the wiring is broken. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For GFCI Outlet Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">GFCI Outlet Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              GFCI outlet replacement
              customers are KC homeowners
              who have a dead outlet
              in a bathroom, kitchen,
              garage, or exterior
              location and discover
              on investigation that
              the outlet does not
              have a tripped breaker
              at the panel — the
              outlet is dead because
              a GFCI outlet somewhere
              in the circuit has
              tripped and cut power
              to all downstream outlets;
              homeowners who replace
              a GFCI outlet themselves
              and find the new outlet
              does not reset because
              the line and load wires
              were connected to the
              wrong terminals —
              a wiring mistake that
              leaves the outlet dead
              after replacement; or
              homeowners in KC homes
              built in the 1970s
              and 1980s that have
              two-prong outlets in
              bathrooms and garages
              that need to be upgraded
              to three-prong GFCI
              outlets for code compliance
              and safety. The central
              education is how GFCI
              protection works and
              why one outlet controls
              others, GFCI versus
              AFCI distinction, and
              the line-and-load wiring
              terminals — three things
              that determine whether
              a homeowner understands
              what they are buying
              and whether a new GFCI
              outlet is installed
              correctly. How GFCI
              works: a GFCI outlet
              monitors the current
              difference between
              the hot and neutral
              conductors — in a properly
              functioning circuit,
              the current flowing
              out on the hot wire
              equals the current
              returning on the neutral;
              if the difference exceeds
              five milliamps, a ground
              fault is detected —
              current is flowing through
              an unintended path,
              which may include a
              person — and the GFCI
              opens within one-fortieth
              of a second; a GFCI
              has two sets of terminals:
              line (the incoming power
              from the panel) and
              load (the outgoing power
              to additional outlets
              downstream in the circuit);
              wiring downstream outlets
              to the load terminals
              of a GFCI places them
              under GFCI protection —
              the GFCI controls power
              to all of them when
              it trips; this is why
              one tripped GFCI can
              kill power to multiple
              outlets in the same
              room or adjacent rooms;
              finding the master GFCI
              in the circuit requires
              checking all GFCI outlets
              in the kitchen, bathrooms,
              garage, and exterior
              locations for a tripped
              reset button. GFCI vs.
              AFCI: GFCI (ground fault
              circuit interrupter)
              protects against current
              flowing through a person
              — required in wet locations
              by KC electrical code;
              AFCI (arc fault circuit
              interrupter) protects
              against arcing faults
              in wiring — required
              in bedrooms and most
              living spaces by current
              KC code; these are different
              devices addressing different
              hazards; a homeowner
              who needs a GFCI for
              a bathroom outlet is
              not adding an AFCI;
              some locations require
              dual-function GFCI/AFCI
              outlets that provide
              both protections in
              one device. Line and
              load terminals: a GFCI
              outlet has clearly labeled
              LINE and LOAD terminals;
              the LINE side connects
              to the incoming power
              from the panel; the
              LOAD side connects to
              any outlets downstream
              that should be protected
              by this GFCI; if the
              incoming power wires
              are connected to the
              LOAD terminals, the
              GFCI cannot function
              correctly and will
              not reset; if no downstream
              outlets need GFCI protection,
              the LOAD terminals
              are capped with the
              provided tape and the
              GFCI protects only
              its own receptacle.
              A GFCI outlet website
              that explains downstream
              protection and how
              to find the master
              GFCI, the GFCI versus
              AFCI distinction, and
              the line-load terminal
              wiring earns the homeowner
              who is confused about
              why multiple outlets
              are dead and a breaker
              is not tripped.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before GFCI outlet replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Dead outlet no tripped breaker — GFCI downstream protection, how one tripped GFCI kills multiple outlets",
                  "Finding master GFCI — where to check in KC home (bathrooms, kitchen, garage, exterior), reset button location",
                  "GFCI vs. AFCI — different hazards, different required locations, dual-function outlet for newer code",
                  "Line vs. load terminals — why wiring to wrong terminal leaves outlet dead, tape over unused LOAD",
                  "Two-prong upgrade — GFCI protection for ungrounded circuits, code compliance method for older KC homes",
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
                What your GFCI outlet replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "GFCI function section — 5mA threshold, how current imbalance is detected, how fast it trips",
                  "Downstream protection section — line vs. load terminals, how one GFCI controls multiple outlets, finding the master",
                  "GFCI vs. AFCI section — hazard type difference, required locations in KC homes, dual-function option",
                  "Wiring guide — line/load terminal identification, common wiring mistakes, what happens when wired wrong",
                  "Two-prong upgrade section — ungrounded circuit GFCI method, code compliance for older KC homes",
                  "Quote form with outlet location, home age, number of dead outlets, whether reset was tried, timeline",
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
                &ldquo;The downstream protection
                section cut my diagnosis
                calls in half. Homeowners
                in Lenexa would call
                with three dead bathroom
                outlets and assume
                the wiring had failed.
                After the section went
                up explaining that
                one tripped GFCI can
                kill all downstream
                outlets and where to
                look for the master
                GFCI, customers started
                checking before calling.
                A lot of them found
                a tripped GFCI in
                the garage or near
                the utility sink, reset
                it, and everything
                came back. For the
                ones who still needed
                a service call, they
                already understood
                the system so the
                diagnosis was faster.
                The line-load terminal
                section also helped —
                DIY replacements that
                got wired backwards
                stopped being a mystery
                to the homeowner when
                I showed up to fix
                a GFCI that wouldn&apos;t
                reset.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Morrow, electrical repair and outlet installation, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A GFCI outlet replacement site with downstream protection section,
                find-the-master guide, and quote form starts at $200. A full site
                with GFCI vs. AFCI content, line-load wiring guide, and two-prong
                upgrade section is $425–$750. One GFCI outlet service call covers
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
