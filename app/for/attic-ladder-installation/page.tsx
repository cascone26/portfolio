import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Attic Ladder Installation Companies in Kansas City",
  description:
    "Custom websites for attic ladder installation, pull-down attic stair, and attic access companies in the Kansas City area. Show your rough opening sizing, energy seal requirements, and KC energy code compliance to win attic ladder installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/attic-ladder-installation",
  },
};

export default function AtticLadderInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Attic Ladder Installation Companies in Kansas City",
    description: "Custom websites for attic ladder and pull-down stair installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Attic Ladder Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what rough opening size their attic ladder requires, whether the door panel needs insulation, and how to keep conditioned air from escaping through the attic access in KC winters. A website that explains the installation and energy seal requirements earns the attic ladder call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Attic Ladder Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Attic Ladder Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Attic ladder installation
              customers are KC homeowners
              adding attic access
              where there is currently
              a hatch or none
              at all, homeowners
              replacing a deteriorated
              fold-down ladder
              that wobbles or
              has broken hinges,
              or homeowners improving
              attic access for
              HVAC maintenance
              or seasonal storage.
              The central education
              is rough opening
              sizing, which ladder
              length fits which
              floor-to-ceiling
              height, and the
              energy loss through
              an attic access
              that KC&apos;s energy
              code now requires
              to be addressed.
              Rough opening sizing:
              attic ladders come
              in standard rough
              opening sizes —
              the most common
              is 22.5x54 inches
              (fits between
              ceiling joists
              at 24-inch OC
              with no framing
              modification) and
              25x54 inches (requires
              a header between
              two 16-inch OC
              joists); wider
              units (30-inch
              width) require
              cutting a joist
              and installing
              a double header —
              the load path
              must be maintained
              with a tail joist
              on each side;
              the rough opening
              must be framed
              square and level
              for the door panel
              to sit flush with
              the ceiling.
              Ladder length and
              floor height: a
              standard attic
              ladder is designed
              for 8–10 foot
              ceiling heights;
              taller ceilings
              (10–12 feet) require
              an extended ladder
              (Werner AA6-6)
              — installing a
              standard ladder
              in a 10-foot ceiling
              results in the
              bottom rail not
              reaching the floor;
              the adjustment
              should be made
              at the lower section
              (cut the legs,
              not the upper
              section, to maintain
              the hinge geometry).
              Energy sealing
              requirements: KC
              is in IECC climate
              zone 4A — the
              energy code requires
              that attic access
              hatches and pull-down
              stairs have an
              insulation cover
              with R-value equal
              to the surrounding
              attic insulation
              (R-49 for new construction,
              R-38 minimum for
              existing homes);
              most pull-down
              ladders ship with
              an R-3 to R-4
              door panel —
              this falls far
              short of the code
              requirement; an
              attic tent or
              cover (Energy
              Seal, Battic Door,
              Fakro LTK) installs
              from inside the
              attic and brings
              the assembly to
              R-38 or higher;
              air sealing: the
              gap between the
              frame and the
              rough opening must
              be sealed with
              low-expansion foam
              before insulation —
              air infiltration
              through an unsealed
              attic stair opening
              causes more heat
              loss than the
              missing insulation
              alone. Load rating:
              residential attic
              ladders are rated
              at 250–375 lbs —
              Werner, Louisville,
              and Fakro all
              publish load ratings;
              heavy use (frequent
              trips with HVAC
              parts or holiday
              bins) warrants
              a 375-lb rating
              with steel hardware;
              the ladder must
              be fully extended
              and adjusted so
              all feet contact
              the floor before
              any load is applied —
              most ladder failures
              occur when the
              feet are not touching
              level.
              An attic ladder
              website that explains
              rough opening sizing
              by joist spacing,
              which ladder fits
              which floor height,
              and what KC energy
              code requires for
              attic access insulation
              earns the homeowner
              who wants to stop
              using a step stool
              on a chair.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before attic ladder installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rough opening sizing — standard sizes by joist spacing, header requirement for joist cutting, level frame importance",
                  "Ladder length selection — ceiling height range by model, extended ladder for 10-12 foot ceilings, leg adjustment",
                  "Energy code requirement — IECC zone 4A R-value, attic tent cover options, air sealing before insulation",
                  "Load rating — 250 vs. 375 lb capacity, steel vs. wood hardware, proper foot contact before loading",
                  "Door panel R-value — typical factory value vs. KC code minimum, cover types and installation from attic side",
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
                What your attic ladder installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rough opening section — sizing by joist OC spacing, header installation for joist cut, squaring the frame",
                  "Ladder selection guide — ceiling height vs. model selection, leg adjustment process, extended ladder options",
                  "Energy seal section — KC zone 4A R-requirement, attic tent brands, air sealing foam before cover install",
                  "Load rating section — residential ratings, when to upgrade to steel hardware, foot contact checklist",
                  "Framing section — joist header sizing, tail joist requirement, load path maintenance after joist cut",
                  "Quote form with ceiling height, joist spacing, existing hatch or new opening, insulation cover needed",
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
                &ldquo;The energy seal section
                changed the conversation completely.
                Before, I installed the ladder
                and that was the job. After
                I added the section showing
                what an unsealed R-3 attic
                door meant for KC heating
                bills, every customer asked
                about the attic tent. I went
                from selling a $200 ladder
                install to a $350 job that
                included the seal cover.
                The rough opening section
                also saved time at the estimate —
                customers had measured their
                joist spacing before I arrived
                and already knew whether
                they needed a header or not.
                No surprises on site.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Dupont, attic access and insulation work, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An attic ladder site with rough opening section, ladder
                selection guide, and quote form starts at $200. A full
                site with energy seal section, load rating guide, and
                framing content is $425–$750. One ladder installation
                with energy seal covers the cost. No contracts, no monthly fees.
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
