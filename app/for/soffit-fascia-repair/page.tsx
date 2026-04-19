import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Soffit and Fascia Repair Companies in Kansas City",
  description:
    "Custom websites for soffit and fascia repair, replacement, and installation companies in the Kansas City area. Show your vinyl vs. aluminum options, animal damage repair, and ventilation requirements to win soffit and fascia contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/soffit-fascia-repair",
  },
};

export default function SoffitFasciaRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Soffit and Fascia Repair Companies in Kansas City",
    description: "Custom websites for soffit and fascia repair and replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Soffit and Fascia Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether rotted wood soffit needs full replacement or can be patched, what ventilation is lost when soffit is damaged, and whether squirrel entry points in the soffit require pest service first. A website that explains the attic ventilation connection earns the inspection. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Soffit &amp; Fascia in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Soffit and Fascia Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Soffit and fascia customers
              are homeowners with
              sagging, rotted,
              or animal-damaged
              soffit panels, a
              fascia board that
              has swelled and
              split behind the
              gutter, or a full-perimeter
              replacement that
              is part of a roofing
              or siding project.
              The central education
              is what soffit
              does beyond aesthetics:
              soffit is the ventilated
              underside of the
              roof overhang —
              vented soffit panels
              (typically 1" or
              2" vent openings
              every 12") provide
              the intake air
              for the attic ventilation
              system. The IRC
              requires 1 sq ft
              of net free ventilation
              area per 150 sq
              ft of attic floor
              area (1:150 ratio,
              or 1:300 with vapor
              barrier) — soffit
              vents supply approximately
              50–60% of that
              ventilation. Damaged
              or blocked soffit
              panels that reduce
              intake airflow
              cause heat and
              moisture to build
              up in the attic,
              accelerating shingle
              degradation and
              potentially voiding
              the roofing warranty.
              Material options:
              wood soffit (original
              on homes built
              before 1990) is
              subject to rot
              when the paint
              seal fails —
              replacement with
              aluminum (vented
              coil aluminum wrap,
              painted to match)
              or vinyl eliminates
              the rot cycle.
              Vinyl soffit panels
              (Kaycan, CertainTeed,
              Ply Gem) are the
              dominant replacement
              material — they
              do not rot, are
              available in vented
              and non-vented
              profiles, and
              come in standard
              colors that match
              most existing trim.
              Fascia: the fascia
              board runs horizontally
              along the roof
              edge behind the
              gutter — gutter
              spikes driven directly
              into the fascia
              (rather than into
              rafter tails with
              hidden hangers)
              cause the fascia
              to crack and allow
              water behind the
              gutter mount point.
              Animal entry: squirrels
              and birds enter
              through damaged
              or warped soffit —
              pest removal first,
              then repair and
              seal with aluminum
              coil stock to
              prevent re-entry.
              A soffit and fascia
              website that explains
              the attic ventilation
              role, material
              options, and the
              animal entry sequence
              earns the homeowner
              whose gutter installer
              pointed up at
              the sagging overhang.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before repairing soffit and fascia
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Attic ventilation role — what vented soffit does, what blocked or missing soffit does to attic heat and moisture",
                  "Wood vs. vinyl/aluminum — why wood rots, what replacement materials eliminate the rot cycle",
                  "Fascia rot causes — gutter spike failure, water infiltration behind the gutter mount",
                  "Animal damage — sequence of pest removal before closing entry points, how we seal after repair",
                  "Partial vs. full replacement — when a section is repaired vs. when full-perimeter replacement makes sense",
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
                What your soffit and fascia website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Attic ventilation section — what vented soffit provides, IRC ventilation ratios, what damage disrupts",
                  "Material guide — wood vs. vinyl vs. aluminum coil wrap — rot risk, longevity, color matching",
                  "Fascia repair — why gutter spikes cause fascia failure, hidden hanger conversion during repair",
                  "Animal damage sequence — pest removal first, then repair and aluminum seal-out",
                  "Full vs. partial replacement — when matching is possible, when full perimeter is cleaner",
                  "Inspection form with damage type, animal activity, approximate linear footage, material preference",
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
                &ldquo;Most of my soffit calls
                came from people whose
                gutter company pointed
                up at the damage —
                they arrived not knowing
                what soffit even was
                or why it mattered.
                The attic ventilation
                section on the website
                changed that completely:
                customers called already
                understanding why
                blocked soffit was
                a roofing and HVAC
                problem, not just
                an appearance problem.
                The animal damage
                section also helped —
                customers who had squirrels
                stopped expecting me
                to do the repair without
                pest removal first,
                because the website
                explained the sequence
                before I had to.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Whitfield, exterior trim contractor, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A soffit and fascia site with ventilation
                section, material guide, and inspection
                form starts at $200. A full site with
                animal damage sequence, fascia repair
                section, and before-and-after gallery
                is $425–$750. One perimeter repair
                covers the cost. No contracts,
                no monthly fees.
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
