import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Crawl Space Vapor Barrier Companies in Kansas City",
  description:
    "Custom websites for crawl space vapor barrier installation, crawl space moisture barrier, and crawl space plastic sheeting companies in the Kansas City area. Show your 6-mil vs. 20-mil liner comparison, KC clay soil moisture transmission, and vapor barrier overlap and tape method to win crawl space vapor barrier contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/crawl-space-vapor-barrier",
  },
};

export default function CrawlSpaceVaporBarrierPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Crawl Space Vapor Barrier Companies in Kansas City",
    description: "Custom websites for crawl space vapor barrier installation and crawl space moisture control companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Crawl Space Vapor Barrier Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a 6-mil plastic sheet from the hardware store is enough or whether a thicker liner is worth the cost, why their crawl space smells musty every spring, and whether a vapor barrier alone will fix the moisture problem or if they need a dehumidifier too. A website that explains crawl space vapor barrier installation earns the moisture control call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Crawl Space Vapor Barrier in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Crawl Space Vapor Barrier</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Crawl space vapor barrier
              customers are KC homeowners
              whose crawl space inspection
              revealed a bare dirt
              floor with visible
              moisture on the soil
              surface, white efflorescence
              on the foundation walls,
              or wood subfloor joists
              showing dark staining
              or early wood rot from
              sustained moisture
              exposure — homeowners
              who have a 6-mil poly
              sheet installed that
              is torn, displaced,
              has gaps at the walls,
              or was installed without
              seam overlap and tape
              and is providing minimal
              moisture control —
              or homeowners who had
              standing water in their
              crawl space during
              a wet KC spring and
              want to address the
              moisture source before
              it reaches the subfloor
              framing. The central
              education is vapor
              transmission from KC
              clay soil, liner thickness
              and puncture resistance,
              and proper installation
              method — three things
              that determine whether
              a vapor barrier controls
              crawl space moisture
              or is a cosmetic layer
              that fails within two
              seasons. KC clay soil
              moisture: KC sits on
              expansive clay soil
              with high moisture
              retention — clay holds
              water from KC spring
              rains and releases
              it slowly as vapor
              through the summer;
              a bare crawl space
              dirt floor in a KC
              home transmits significant
              moisture upward through
              evaporation — the crawl
              space air becomes humid
              and the moisture migrates
              into the subfloor framing;
              this is why KC homes
              built before 1990 with
              vented crawl spaces
              and no vapor barrier
              frequently show wood
              moisture content above
              nineteen percent in
              the subfloor joists
              by mid-summer, the
              threshold above which
              wood rot fungus can
              establish. Liner thickness:
              a 6-mil polyethylene
              sheet is the IRC minimum
              for a ground vapor
              retarder — it reduces
              vapor transmission
              but punctures easily
              during any foot traffic,
              pipe or HVAC servicing,
              or pest inspector visits;
              once punctured, the
              liner allows concentrated
              moisture transmission
              at the puncture point
              in addition to reduced
              overall vapor control;
              a 12-mil liner is more
              appropriate for crawl
              spaces that require
              any foot traffic access;
              a 20-mil reinforced
              liner (Class I vapor
              barrier) is used in
              encapsulated crawl
              spaces where the liner
              is the finished floor
              surface and must resist
              sustained foot traffic,
              tool dragging, and
              HVAC equipment weight;
              in KC, a 12-mil minimum
              is the practical threshold
              for a crawl space that
              will be accessed for
              HVAC maintenance or
              plumbing service. Installation
              method: a vapor barrier
              without proper installation
              provides significantly
              reduced protection —
              seams must overlap
              a minimum of twelve
              inches and be taped
              with vapor barrier
              tape (not standard
              duct tape, which loses
              adhesion in the crawl
              space environment);
              the liner must run
              up the foundation wall
              six to twelve inches
              and be secured with
              adhesive and mechanical
              fasteners to prevent
              the wall gap that allows
              wall moisture to bypass
              the liner; all pipes,
              columns, and supports
              must be wrapped with
              the liner and taped;
              gaps at any penetration
              defeat the moisture
              control that the field
              coverage provides.
              A crawl space vapor
              barrier website that
              explains KC clay soil
              moisture transmission,
              liner thickness selection,
              and the installation
              method requirements
              earns the homeowner
              who wants moisture
              control that lasts
              through the KC wet
              spring cycle.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before crawl space vapor barrier installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay moisture — clay water retention, evaporation rate into crawl space air, subfloor wood moisture content",
                  "Liner thickness — 6-mil vs. 12-mil vs. 20-mil, puncture resistance, foot traffic threshold",
                  "Installation method — 12-inch seam overlap, vapor barrier tape vs. duct tape, wall run-up requirement",
                  "Penetration sealing — pipe and column wrapping, gap at foundation wall, where the liner fails",
                  "Barrier vs. encapsulation — when vapor barrier alone is enough vs. when full encapsulation is needed",
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
                What your crawl space vapor barrier website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay section — soil moisture retention, evaporation into crawl air, subfloor wood rot threshold",
                  "Liner thickness guide — 6/12/20-mil comparison, puncture scenarios, KC practical recommendation",
                  "Installation method section — seam overlap spec, vapor barrier tape requirement, wall run-up detail",
                  "Penetration section — pipe wrapping, column coverage, foundation wall gap failure mode",
                  "Barrier vs. encapsulation guide — when each is appropriate, cost comparison, humidity control options",
                  "Quote form with crawl space size, existing liner condition, standing water history, access height, timeline",
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
                &ldquo;The installation method
                section is what differentiated
                me from the hardware
                store DIY option. Customers
                in Raytown were buying
                6-mil poly from Lowe&apos;s
                and laying it on the
                dirt without seam overlap
                or tape, and wondering
                why the crawl space
                was still humid. After
                the section went up
                explaining the seam
                overlap requirement,
                why duct tape fails
                in a crawl space environment,
                and the wall run-up
                spec, customers understood
                why professional installation
                matters and stopped
                treating the liner
                as a DIY job. The
                KC clay section also
                helped — homeowners
                didn&apos;t realize their
                soil was actively
                transmitting moisture
                upward in summer and
                that the damp smell
                every spring was predictable
                and preventable.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Barnett, crawl space moisture control and vapor barrier, Raytown, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A crawl space vapor barrier site with liner thickness guide,
                installation method section, and quote form starts at $200.
                A full site with KC clay moisture content, penetration sealing
                guide, and encapsulation comparison is $425–$750. One vapor
                barrier job covers the cost. No contracts, no monthly fees.
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
