import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Spray Foam Insulation Companies in Kansas City",
  description:
    "Custom websites for spray foam insulation, open-cell vs. closed-cell foam, and air sealing companies in the Kansas City area. Show your R-value comparison, air barrier function, and moisture management to win insulation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/spray-foam-insulation",
  },
};

export default function SprayFoamInsulationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Spray Foam Insulation Companies in Kansas City",
    description: "Custom websites for spray foam insulation and air sealing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Spray Foam Insulation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether open-cell or closed-cell foam is right for their application, why spray foam outperforms fiberglass batts even at lower R-values, and whether spray foam in a crawl space actually solves moisture. A website that explains air sealing and vapor control earns the insulation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Spray Foam Insulation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Spray Foam Insulation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Spray foam insulation
              customers are homeowners
              with high utility
              bills despite existing
              insulation, persistent
              cold floors or
              drafty rooms in
              winter, moisture
              or condensation
              issues in a crawl
              space or basement,
              or ice dams forming
              at the eaves —
              all of which point
              to air leakage
              as the root cause,
              not just inadequate
              R-value. The central
              education is that
              spray foam is
              primarily an air
              barrier, not just
              insulation: the
              Department of Energy
              estimates 25–40%
              of home energy
              loss is due to
              air infiltration
              through gaps and
              penetrations —
              fiberglass batts
              fill the cavity
              but do not seal
              the air path,
              so even R-38
              attic insulation
              underperforms
              in a leaky assembly.
              Open-cell spray
              foam (Icynene,
              Lapolla): 0.5
              pcf density, R-3.7
              per inch, vapor
              permeable — allows
              moisture to pass
              through, which
              is appropriate
              for interior walls
              and unvented attics
              in dry climates
              but requires a
              vapor retarder
              in KC's mixed-humid
              climate (Climate
              Zone 4A) when
              used in roof
              assemblies. Closed-cell
              spray foam (Icynene
              MD-R-200, Lapolla
              4LB): 2 pcf density,
              R-6.5 per inch,
              Class II vapor
              retarder at 2"
              thickness — the
              correct specification
              for crawl space
              walls and rim
              joists where
              moisture control
              is the primary
              goal alongside
              thermal performance.
              Crawl space application:
              spray foam on
              the interior of
              the foundation
              walls and rim
              joists (not on
              the ground —
              that goes to
              the encapsulation
              membrane) creates
              a conditioned
              crawl that eliminates
              the stack effect
              moisture problem.
              Rim joist sealing:
              the rim joist
              assembly (where
              the floor framing
              meets the foundation
              wall) is the
              single largest
              air infiltration
              point in most
              KC homes built
              before 1990 —
              2" of closed-cell
              foam at the rim
              joist addresses
              both air sealing
              and the cold-floor
              thermal bridge.
              A spray foam
              website that
              explains why
              air sealing outperforms
              R-value alone,
              open-cell vs.
              closed-cell moisture
              behavior in KC's
              mixed-humid climate,
              and why crawl
              space rim joists
              are the highest-return
              air sealing target
              earns the homeowner
              whose utility
              bills have not
              dropped despite
              adding attic insulation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing spray foam insulation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Open-cell vs. closed-cell — R-value per inch, vapor permeability, when each is specified",
                  "Air sealing vs. R-value — why air infiltration causes energy loss even with high-R insulation",
                  "Crawl space application — wall and rim joist foam vs. encapsulation, what each addresses",
                  "KC climate zone 4A — why moisture management in mixed-humid climate affects foam specification",
                  "Rim joist sealing — why it is the highest-return air sealing target in older KC homes",
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
                What your spray foam insulation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Air sealing section — why gaps and penetrations drive energy loss, how foam seals where batts cannot",
                  "Open-cell vs. closed-cell guide — density, R-value, vapor profile, correct application for each",
                  "Crawl space section — conditioned crawl stack effect elimination, wall vs. rim joist foam placement",
                  "Rim joist guide — why it is the largest air infiltration point in pre-1990 KC homes",
                  "KC climate zone context — mixed-humid Climate Zone 4A, vapor retarder requirements for roof assemblies",
                  "Assessment form with home age, current insulation type, specific problem areas, utility bill history",
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
                &ldquo;My hardest sale was
                convincing homeowners who
                had just added R-38 attic
                insulation and still had
                high bills that air sealing
                was the missing piece —
                they thought I was just
                upselling. The website section
                on why air infiltration
                bypasses R-value changed
                that conversation before
                I arrived. Customers arrived
                understanding why the fiberglass
                did not help, and the rim
                joist section specifically
                led to customers requesting
                that as a targeted upgrade
                without the full attic quote.
                My crawl space jobs more
                than doubled in one season.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Malone, insulation contractor, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A spray foam site with open-cell vs.
                closed-cell guide, air sealing section,
                and assessment form starts at $200. A
                full site with crawl space application
                guide, rim joist section, and KC climate
                context is $425–$750. One rim joist job
                covers the cost. No contracts, no monthly
                fees.
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
