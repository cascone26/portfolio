import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Electrical Outlet Installation Companies in Kansas City",
  description:
    "Custom websites for electrical outlet installation, GFCI outlet replacement, and USB outlet installation companies in the Kansas City area. Show your GFCI location requirement, KC aluminum wiring outlet failure, and dedicated circuit outlet installation to win outlet installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/electrical-outlet-installation",
  },
};

export default function ElectricalOutletInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Electrical Outlet Installation Companies in Kansas City",
    description: "Custom websites for electrical outlet installation and GFCI outlet replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Electrical Outlet Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether they can add an outlet to a room without running new wiring through the walls, why a GFCI outlet keeps tripping for no reason, and what KC homes built before 1980 need to be up to code. A website that explains electrical outlet installation earns the home electrical call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Electrical Outlet Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Electrical Outlet Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Electrical outlet installation
              customers are KC homeowners
              who want to add an outlet
              to a room where none
              is within reach — a
              bedroom with only two
              outlets both on one
              wall, a garage with
              no outlet at the workbench
              location, or a finished
              basement that was done
              without enough outlets
              for the current use —
              homeowners replacing
              two-prong ungrounded
              outlets in a KC home
              built before 1965 that
              has never been updated,
              or homeowners replacing
              failed GFCI outlets
              in bathrooms, kitchens,
              and garage that trip
              immediately when reset
              or nuisance-trip without
              a clear cause. The
              central education is
              GFCI location requirements
              by code, the difference
              between adding an outlet
              from an existing circuit
              versus running a new
              circuit, and KC aluminum
              wiring outlet failure —
              three things that determine
              whether a new outlet
              is a simple connection
              job or a panel and
              wiring project. GFCI
              requirements: the National
              Electrical Code requires
              GFCI protection for
              outlets within 6 feet
              of a sink in bathrooms
              and kitchens, all garage
              outlets, all outdoor
              outlets, all crawl space
              outlets, and all unfinished
              basement outlets; KC
              homes built before
              1975 frequently have
              none of these locations
              protected — bathroom
              outlets are standard
              duplex outlets with
              no GFCI protection,
              and garage outlets
              may be on the same
              unprotected circuit
              as workshop lighting;
              replacing a non-GFCI
              outlet with a GFCI
              outlet at the required
              location also provides
              GFCI protection to
              all outlets downstream
              on the same circuit
              when wired correctly —
              the GFCI can protect
              multiple outlets from
              a single installation.
              Adding outlets: adding
              an outlet from an existing
              circuit requires identifying
              a nearby outlet or
              junction box on a circuit
              with adequate capacity —
              a 15-amp circuit has
              a maximum recommended
              load of 12 amps continuous,
              and adding another
              outlet to a circuit
              already serving multiple
              lights and outlets
              may push the load above
              safe limits; the alternative
              is running a new circuit
              from the panel to the
              outlet location — more
              expensive but provides
              the correct dedicated
              capacity; circuits in
              KC homes built before
              1970 are frequently
              15-amp circuits serving
              six to eight outlets
              and light fixtures combined —
              adding another outlet
              to these circuits is
              not recommended without
              a load audit. Aluminum
              wiring: KC homes built
              approximately 1965–1973
              may have aluminum branch
              wiring — the aluminum
              expands and contracts
              at a different rate
              than the steel screws
              in standard outlets
              and switches, causing
              the connection to loosen
              over time; a loose
              aluminum connection
              at an outlet arcs and
              overheats — the CPSC
              estimates aluminum-wired
              homes are 55 times
              more likely to have
              a fire hazard condition
              at outlet connections
              than copper-wired homes;
              standard outlets must
              not be used with aluminum
              wiring — the correct
              specification is a
              CO/ALR rated outlet
              (rated for aluminum
              and copper) or a pigtail
              connection with an
              approved aluminum-to-copper
              connector; an electrician
              installing new outlets
              in a pre-1975 KC home
              must identify the wiring
              type before proceeding.
              An electrical outlet
              website that explains
              GFCI location requirements,
              how to determine if
              an existing circuit
              can handle another
              outlet, and the aluminum
              wiring identification
              and correction process
              earns the homeowner
              who wants it done right
              and permitted.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before electrical outlet installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "GFCI requirements — 6-foot sink rule, garage/outdoor/crawl space code, downstream protection wiring",
                  "Adding to existing circuit — 15-amp capacity limit, load audit, when a new circuit is required",
                  "Aluminum wiring — KC 1965-1973 homes, CO/ALR outlet requirement, arc hazard at loose connections",
                  "Two-prong outlets — grounding upgrade options, GFCI as code-compliant replacement for ungrounded",
                  "New circuit cost — panel run vs. existing circuit tap, permit requirement, dedicated circuit cases",
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
                What your electrical outlet installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "GFCI section — NEC location requirements, downstream protection method, KC pre-1975 bathroom/garage status",
                  "Circuit capacity section — 15-amp load limit, how to check current load, when a new circuit is needed",
                  "Aluminum wiring guide — KC era identification, CO/ALR outlet spec, pigtail connection method",
                  "Two-prong upgrade section — GFCI as ungrounded replacement, grounding options, code compliance",
                  "New outlet process — permit requirement, fishing wire vs. surface raceway, basement vs. finished wall",
                  "Quote form with outlet location, home build era, two-prong or GFCI issue, circuit info, timeline",
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
                &ldquo;The aluminum wiring section
                is the one that protects
                my customers and my license.
                I had two calls in one month
                from homeowners in 1968
                and 1971 KC houses who wanted
                outlets added and neither
                one knew they had aluminum
                wiring. After the section
                went up explaining how to
                identify aluminum wiring
                and why a standard outlet
                is a fire hazard with it,
                customers started telling
                me the wiring type before
                I showed up and asking specifically
                for CO/ALR outlets. The
                GFCI downstream section
                also helped — homeowners
                in Midtown didn&apos;t know that
                one correctly wired GFCI
                can protect three outlets
                downstream. That saves
                them money and they trust
                me for explaining it honestly
                before the job.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Becker, residential electrical, Midtown KC
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An outlet installation site with GFCI section, circuit capacity
                guide, and quote form starts at $200. A full site with aluminum
                wiring content, KC era guide, and two-prong upgrade section is
                $425–$750. One properly permitted outlet job covers the cost.
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
