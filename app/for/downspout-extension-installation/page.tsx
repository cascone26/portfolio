import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Downspout Extension Installation Companies in Kansas City",
  description:
    "Custom websites for downspout extension installation, buried downspout drain, and downspout discharge companies in the Kansas City area. Show your KC clay soil surface ponding from short downspout discharge, buried vs. surface extension comparison, and freeze-thaw buried pipe failure to win downspout extension installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/downspout-extension-installation",
  },
};

export default function DownspoutExtensionInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Downspout Extension Installation Companies in Kansas City",
    description: "Custom websites for downspout extension installation and buried downspout drain companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Downspout Extension Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a buried downspout extension is better than a surface flex pipe, what happens when a buried downspout drain freezes in a KC winter, and how far from the house a downspout really needs to discharge to protect the foundation. A website that explains downspout extension installation earns the call from the homeowner whose basement wall is damp every spring. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Downspout Extension Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Downspout Extension Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Downspout extension
              installation customers
              are KC homeowners
              whose basement
              or crawl space
              walls show moisture
              intrusion following
              rain events — a
              pattern that indicates
              roof runoff is
              discharging at
              the foundation
              and saturating
              the clay soil
              adjacent to the
              basement wall
              rather than being
              carried away from
              the house to
              a point where
              it percolates
              or drains without
              reaching the
              foundation; homeowners
              who have a standard
              downspout that
              terminates with
              a splash block
              two feet from
              the foundation
              and want to
              understand why
              that is insufficient
              in KC clay soil;
              or homeowners
              who had a buried
              downspout extension
              installed and
              are now seeing
              water emerge
              from the pop-up
              emitter in winter
              and finding the
              pipe is blocked
              with ice. The
              central education
              is KC clay soil
              ponding behavior
              from short downspout
              discharge, buried
              versus surface
              extension comparison,
              and freeze-thaw
              buried pipe failure
              modes — three
              things that determine
              whether a homeowner
              understands why
              the splash block
              that was adequate
              in a sandy-loam
              yard fails in
              KC clay, and
              what a buried
              extension requires
              to survive KC
              winters. KC clay
              soil and discharge
              distance: a downspout
              discharging onto
              a splash block
              two to three
              feet from the
              foundation releases
              roof runoff directly
              into the saturated
              clay soil adjacent
              to the wall;
              KC clay at field
              capacity absorbs
              additional water
              at less than
              point one inch
              per hour — a
              two-inch storm
              deposits more
              water in ten
              minutes than
              the saturated
              clay can accept
              in twenty hours;
              the excess ponds
              at the foundation
              and migrates
              through hydrostatic
              pressure to
              the lowest point —
              the basement
              floor-wall joint;
              the minimum effective
              discharge distance
              in KC clay is
              six to ten feet
              from the foundation
              wall to move
              the saturation
              zone outside
              the area where
              hydrostatic pressure
              reaches the basement
              wall. Surface
              versus buried
              extension: a
              surface flex
              pipe extension
              — the black corrugated
              tube attached
              to the downspout
              elbow and laid
              across the yard —
              is inexpensive,
              freeze-thaw resistant
              because it is
              above grade,
              and drains completely
              between storms;
              the limitation
              is aesthetic
              and the risk
              of the tube
              being covered
              by soil or mulch
              over time; a
              buried downspout
              drain is a
              four-inch solid
              or perforated
              pipe installed
              at slope from
              the downspout
              connection to
              a pop-up emitter
              or daylight outlet
              at a point ten
              or more feet
              from the foundation;
              a buried extension
              must be installed
              at a minimum
              one-percent slope —
              one inch of
              drop per eight
              feet of run —
              to drain completely
              between rain
              events; a buried
              extension that
              holds standing
              water in the
              pipe will freeze
              in KC winter
              and block at
              the worst possible
              time. Freeze-thaw
              buried pipe failure:
              a buried downspout
              drain that does
              not drain completely
              between events
              retains water
              in the low
              points of the
              pipe; when the
              soil freezes
              to KC frost-line
              depth — thirty
              inches — the
              retained water
              in the pipe
              freezes; the
              ice blocks the
              pipe at the
              same time the
              roof is generating
              runoff from
              late-winter rain
              or ice dam melt;
              the blocked
              pipe backs up
              at the downspout
              connection and
              the water discharges
              at the foundation —
              exactly the
              scenario the
              extension was
              installed to
              prevent; a buried
              extension that
              is correctly
              sloped and terminates
              with a self-draining
              pop-up emitter
              will not freeze
              because no standing
              water remains
              in the pipe
              between events.
              A downspout extension
              installation website
              that explains
              KC clay soil
              ponding and the
              six-to-ten-foot
              effective distance,
              surface versus
              buried extension
              trade-offs, and
              the freeze-thaw
              failure mechanism
              on improperly
              sloped buried
              pipes earns
              the homeowner
              whose buried
              extension backed
              up all winter
              and whose basement
              is wet every
              spring.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before downspout extension installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay discharge distance — clay hydraulic conductivity, ponding at foundation, 6-10 foot effective distance",
                  "Surface vs. buried — flex pipe above grade vs. 4-inch buried pipe, freeze-thaw resistance comparison",
                  "Buried pipe slope — 1% minimum, standing water and freeze risk, pop-up emitter self-draining requirement",
                  "Freeze-thaw failure — retained water blocking at frost depth, backup at foundation during late-winter melt",
                  "Splash block inadequacy — why 2-3 feet is insufficient in KC clay vs. sandy-loam soils",
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
                What your downspout extension installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay section — hydraulic conductivity at field capacity, ponding mechanism, 6-10 foot minimum distance from foundation",
                  "Extension type section — surface flex vs. buried 4-inch pipe, aesthetic vs. freeze-thaw tradeoff",
                  "Slope section — 1% grade requirement, standing water in low spots, pop-up emitter self-drain design",
                  "Freeze-thaw section — frost line depth, standing water freeze timing, backup at foundation during winter",
                  "Installation scope — downspout-to-elbow transition, buried pipe depth, emitter pop-up selection and placement",
                  "Quote form with number of downspouts, discharge distance needed, yard slope, prior buried pipe, winter freeze-up",
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
                &ldquo;The freeze-thaw section
                is what gets calls
                from customers who
                already have a
                buried extension
                that failed. KC
                homeowners who had
                a buried downspout
                drain installed
                and then found
                it backed up every
                winter would call
                saying the pipe
                must be damaged.
                After the section
                went up explaining
                that a buried
                extension without
                adequate slope
                holds water in
                the low sections
                and freezes at
                the KC frost line,
                customers understood
                that the original
                install was done
                without proper
                grade and the
                fix was regrading
                the pipe, not
                replacing it.
                The KC clay section
                also helped with
                the distance conversation —
                customers with
                splash blocks that
                had worked fine
                in a previous
                home in a different
                state understood
                immediately why
                two feet doesn&apos;t
                work in KC clay
                the way it worked
                somewhere with
                better-draining
                soil.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Vogt, drainage and downspout installation, Gladstone, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A downspout extension installation site with KC clay discharge
                distance section, surface vs. buried comparison, and quote form
                starts at $200. A full site with freeze-thaw failure mechanism,
                slope requirement guide, and emitter selection content is $425–$750.
                One downspout extension job covers the cost. No contracts, no
                monthly fees.
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
