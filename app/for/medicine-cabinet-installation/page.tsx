import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Medicine Cabinet Installation Companies in Kansas City",
  description:
    "Custom websites for medicine cabinet installation, recessed cabinet, and bathroom cabinet companies in the Kansas City area. Show your recessed vs. surface mount comparison, stud cavity sizing process, and electrical outlet conflict resolution to win medicine cabinet contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/medicine-cabinet-installation",
  },
};

export default function MedicineCabinetInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Medicine Cabinet Installation Companies in Kansas City",
    description: "Custom websites for medicine cabinet installation and recessed cabinet companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Medicine Cabinet Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a recessed medicine cabinet can go in any wall or only where studs allow, what happens if there is an electrical outlet behind the mirror location, and how surface mount cabinets are anchored when studs are not centered. A website that explains medicine cabinet installation earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Medicine Cabinet Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Medicine Cabinet Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Medicine cabinet installation
              customers are KC homeowners
              replacing a flat mirror
              with a recessed cabinet
              to gain bathroom storage
              without adding visual
              bulk, homeowners doing
              a bathroom remodel and
              centering the medicine
              cabinet over a new vanity
              where studs are not conveniently
              located, or homeowners
              in older KC bathrooms
              where the original recessed
              cabinet has rusted or
              the mirror is delaminated
              and needs full replacement.
              The central education
              is recessed vs. surface
              mount decision, stud
              cavity sizing for the
              recessed option, and
              how electrical outlets
              that conflict with the
              cabinet location are
              handled — three things
              that determine whether
              a medicine cabinet installation
              is a half-day job or
              a project that requires
              an electrician. Recessed
              vs. surface mount: a
              recessed medicine cabinet
              sits inside the wall
              cavity — it requires
              cutting an opening between
              two studs and the cabinet
              body slides in flush
              with the wall surface;
              standard recessed cabinet
              width is 14 to 16 inches,
              which fits between studs
              set at 16-inch on center;
              a recessed cabinet that
              is wider than the stud
              bay requires either a
              surface mount installation
              or removing a stud and
              adding a structural header
              to span the opening —
              this is only appropriate
              in non-bearing partition
              walls; surface mount
              cabinets project 4–6
              inches from the wall
              and require no wall
              cutting, but add visual
              depth in small bathrooms;
              in KC bathrooms built
              after 1980 with standard
              2x4 framing at 16 inches
              on center, a 14-inch
              recessed cabinet is straightforward;
              in older KC bathrooms
              with plaster and lath
              walls (common pre-1960),
              the stud cavity is often
              irregular and the plaster
              depth varies — a surface
              mount may be more practical.
              Electrical conflicts:
              bathroom medicine cabinet
              locations are frequently
              above or alongside a GFCI
              outlet rough-in — code
              requires GFCI protection
              within 6 feet of a bathroom
              water source; if the outlet
              is directly behind the
              intended cabinet location,
              it must be relocated before
              the cabinet goes in —
              this requires an electrician
              unless the work is limited
              to surface-mounted boxes;
              if the outlet is adjacent
              to the cabinet location,
              the cabinet may be able
              to be offset slightly to
              clear the outlet box;
              recessed cabinet installation
              always requires checking
              for electrical, plumbing,
              and HVAC inside the cavity
              before cutting. Framing
              the opening: a recessed
              cabinet opening cut between
              two studs requires nailing
              horizontal blocking (header
              and sill) to define the
              top and bottom of the
              rough opening; the blocking
              is sized to the cabinet
              rough opening height plus
              1/2 inch; after the cabinet
              is inserted and shimmed
              plumb, the perimeter trim
              (supplied with the cabinet
              or field-cut) covers the
              rough opening gap. A medicine
              cabinet website that explains
              when recessed fits vs.
              when surface mount is
              the better call, what
              an electrical conflict
              means for scope, and
              how the framing opening
              is prepared earns the
              homeowner who wants to
              know the full job before
              committing.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before medicine cabinet installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Recessed vs. surface mount — stud bay width requirement, wider cabinet options, plaster wall limitation",
                  "Electrical conflict — outlet location check, relocation scope, when an electrician is required",
                  "Stud cavity check — electrical, plumbing, and HVAC in cavity before cutting, KC plaster wall variation",
                  "Opening framing — blocking construction, rough opening sizing, shim and trim process",
                  "Cabinet sizing — standard 14-16 inch vs. wide cabinets, depth options for surface mount, mirror size",
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
                What your medicine cabinet installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Recessed vs. surface mount — stud bay width decision, older KC home plaster consideration, visual depth comparison",
                  "Electrical conflict section — outlet location check, GFCI code context, when electrician is needed",
                  "Cavity inspection guide — what to check before cutting, how to look inside wall without demo",
                  "Opening framing section — blocking construction, rough opening sizing, shim and perimeter trim",
                  "Wide cabinet section — when wider than stud bay, surface mount alternative, structural header requirement",
                  "Quote form with bathroom age, existing outlet location, cabinet size preference, wall type, timeline",
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
                &ldquo;The electrical conflict section
                saved a job from going sideways.
                Customer in Prairie Village
                wanted a recessed cabinet
                exactly centered over the
                vanity — directly behind
                the GFCI outlet. After she
                read the section explaining
                the outlet conflict issue,
                she called me knowing we
                might need to move the outlet.
                We found it was two inches
                outside the cabinet rough
                opening, so we offset the
                cabinet slightly and avoided
                the electrician entirely.
                Without that section, I would
                have arrived at estimate
                and she would have been surprised
                by the outlet scope. Instead
                she was pre-informed and we
                found a solution in ten minutes
                on site.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Schreiber, bathroom carpentry and remodel, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A medicine cabinet site with recessed vs. surface mount
                section, electrical conflict guide, and quote form starts
                at $200. A full site with cavity inspection, opening framing,
                and wide cabinet content is $425–$750. One cabinet
                installation covers the cost. No contracts, no monthly fees.
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
