import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Attic Insulation Removal Companies in Kansas City",
  description:
    "Custom websites for attic insulation removal, rodent contamination cleanup, and attic re-insulation companies in the Kansas City area. Show your vacuuming process, contamination remediation, and blown-in insulation installation to win attic insulation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/attic-insulation-removal",
  },
};

export default function AtticInsulationRemovalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Attic Insulation Removal Companies in Kansas City",
    description: "Custom websites for attic insulation removal companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Attic Insulation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners dealing with rodent contamination or old wet and compressed insulation want to understand what the removal process looks like, whether the old material is hazardous, and what R-value they should target when re-insulating. A website that explains the full process earns the inspection call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Attic Insulation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Attic Insulation Removal</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Attic insulation removal customers
              are homeowners who have
              discovered rodent activity
              in the attic (mice or
              squirrels nesting in and
              contaminating blown-in
              fiberglass or cellulose),
              have old vermiculite
              or batt insulation
              that may contain asbestos
              and needs testing or
              abatement, or have
              wet and compressed
              insulation from a
              roof leak that has
              lost all thermal
              value. The removal
              process involves
              a commercial vacuum
              and hose system that
              removes old loose-fill
              material from the
              attic and transfers
              it directly into
              disposal bags outside —
              the process typically
              takes one to two days
              for a standard attic.
              Rodent contamination
              jobs require protective
              gear, sanitizing the
              attic deck after
              removal (antimicrobial
              spray), and sealing
              entry points before
              re-insulating. Hazardous
              material concerns:
              fiberglass and cellulose
              are not hazardous
              and can be vacuumed
              without special disposal;
              vermiculite from
              certain mines (particularly
              pre-1990 product)
              may contain asbestiform
              minerals and requires
              testing before removal.
              Re-insulation after
              removal is the second
              service: blown-in
              fiberglass (Owens
              Corning AttiCat,
              CertainTeed) or
              cellulose are both
              common — cellulose
              has higher recycled
              content and better
              air sealing ability
              when dense-packed,
              fiberglass does not
              settle over time.
              The Department of
              Energy recommends
              R-49 to R-60 for
              KC attics (Climate
              Zone 4). Air sealing
              before re-insulation —
              foam-sealing penetrations
              around light fixtures,
              plumbing and electrical
              penetrations, and
              the attic hatch —
              doubles the energy
              performance of the
              new insulation.
              A website that explains
              the vacuum removal
              process, the contamination
              cleanup steps, and
              re-insulation R-value
              targets earns the
              homeowner who has
              just found the
              problem and needs
              to understand what
              comes next.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring an attic insulation company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Removal process — how the vacuum system works, how long it takes, what happens to the old material",
                  "Rodent contamination — what needs to be done after rodents in the attic, sanitizing, entry point sealing",
                  "Hazardous material — whether old insulation is dangerous, when asbestos testing is required",
                  "R-value targets — what R-49 to R-60 means for KC, how much insulation depth is needed to achieve it",
                  "Air sealing — why sealing penetrations before blowing insulation matters, what gets sealed",
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
                What your attic insulation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Removal process — vacuum system explanation, disposal method, typical timeline for standard attics",
                  "Contamination cleanup — rodent remediation steps, antimicrobial treatment, exclusion work, re-sealing",
                  "Hazardous materials guide — what is and is not hazardous, when to test, vermiculite asbestos risk",
                  "R-value guide — KC recommendation R-49 to R-60, current depth assessment, target depth for re-insulation",
                  "Air sealing — what we seal before blowing, why it matters, energy performance impact",
                  "Quote form with attic size, reason for removal, contamination type, current insulation, timeline",
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
                &ldquo;Rodent contamination calls
                are the most urgent jobs
                I get — homeowners are
                disturbed and they want
                it handled fast. But they
                also have a lot of questions
                about what the process
                looks like and whether
                the old material is
                dangerous. Without a
                website I was giving
                the full explanation
                on every emergency call.
                The site with the removal
                process walkthrough, the
                contamination cleanup
                steps, and the re-insulation
                R-value guide meant
                customers understood
                the full scope before
                they called. They
                were calling to book,
                not to get educated.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Nakamura, attic insulation specialist, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An attic insulation site with removal
                process, contamination guide, and
                quote form starts at $200. A full
                site with hazardous materials section,
                air sealing guide, and R-value page
                is $425–$750. One full removal and
                re-insulation job covers the cost.
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
