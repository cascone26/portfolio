import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Wood Rot Repair Companies in Kansas City",
  description:
    "Custom websites for wood rot repair, epoxy wood consolidant, and rot-resistant replacement companies in the Kansas City area. Show your rot types, moisture source identification, and repair vs. replacement decision to win wood rot contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/wood-rot-repair",
  },
};

export default function WoodRotRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Wood Rot Repair Companies in Kansas City",
    description: "Custom websites for wood rot repair and wood replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Wood Rot Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether soft window trim or a spongy porch post can be repaired with epoxy or needs full replacement, what caused the rot in the first place, and whether rot-resistant materials prevent it from coming back. A website that explains moisture sources and epoxy consolidant earns the repair call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Wood Rot Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Wood Rot Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Wood rot repair
              customers are homeowners
              who discovered
              soft, spongy wood
              when painting
              window trim or
              porch columns,
              noticed paint
              bubbling and
              peeling in the
              same location
              year after year,
              found a rotten
              sill plate or
              rim joist during
              a basement inspection,
              or had a home
              inspector flag
              rotted fascia
              or rake boards
              at the roofline.
              The central education
              is that wood
              rot is a fungal
              infection that
              requires sustained
              moisture above
              19% wood moisture
              content to grow —
              repairing the
              rot without eliminating
              the moisture source
              produces a temporary
              fix that rots
              again. Brown
              rot (cubical cracking,
              wood crumbles
              when dry): attacks
              cellulose and
              leaves lignin —
              the wood loses
              structural strength
              completely and
              must be removed;
              epoxy consolidant
              can stabilize
              early brown rot
              but fully decayed
              brown rot sections
              require full replacement.
              White rot (spongy,
              bleached appearance):
              attacks both cellulose
              and lignin —
              the wood softens
              evenly and becomes
              stringy; less
              common on residential
              trim than brown
              rot. Epoxy consolidant
              (Abatron LiquidWood,
              PC-Petrifier):
              a penetrating
              epoxy resin that
              wicks into degraded
              wood fibers and
              cures rigid —
              re-hardens wood
              that retains
              some fiber structure
              but has lost
              strength. Epoxy
              wood filler (Abatron
              WoodEpox, PC-Woody):
              a two-part paste
              filler that bonds
              to consolidant-treated
              wood and can
              be shaped, sanded,
              and painted —
              correct for trim
              repairs where
              the substrate
              retains structure.
              When epoxy repair
              is not appropriate:
              structural members
              (sill plates,
              posts, beams,
              joists) with
              significant section
              loss require
              replacement with
              pressure-treated
              lumber (ACQ,
              CA-B, or CCA
              rated for ground
              contact) or
              composite alternatives
              (Azek, TimberTech
              for exterior
              trim). Moisture
              sources in KC
              homes: overflowing
              gutters saturating
              fascia, missing
              or damaged drip
              edge allowing
              water behind
              trim, window
              sill without
              proper slope
              pooling water
              at the frame
              base, and grade
              against the
              house directing
              runoff into the
              rim joist area.
              A wood rot repair
              website that
              explains the
              moisture-first
              diagnostic, when
              epoxy consolidant
              restores damaged
              trim vs. when
              structural members
              need full replacement,
              and what KC moisture
              patterns cause
              recurrence earns
              the homeowner
              who painted over
              the same soft
              trim three times.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before repairing wood rot
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rot types — brown rot vs. white rot, what each looks like, when wood fiber structure is gone",
                  "Epoxy consolidant — what it does, when it works, when the wood is too far gone for epoxy",
                  "Repair vs. replacement — trim repair with epoxy filler vs. structural member full replacement",
                  "Moisture sources — where recurrent rot at the same location is coming from",
                  "Rot-resistant materials — pressure-treated lumber grades, Azek/composite for exterior trim replacement",
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
                What your wood rot repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rot type guide — brown rot cubical cracking vs. white rot stringy softening, structural implications",
                  "Epoxy consolidant section — how LiquidWood/PC-Petrifier works, fiber structure requirement, limits",
                  "Repair vs. replacement decision — when epoxy filler is correct vs. when full removal is required",
                  "Moisture source diagnostic — common KC moisture entry points causing recurrent rot",
                  "Material selection — PT lumber grades for structural replacement, composite trim for fascia/window",
                  "Assessment form with location, rot type description, member size, moisture source suspected",
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
                &ldquo;I was replacing the
                same window trim on the
                same houses every three
                years — new wood going
                soft in the same spot
                because nobody had addressed
                the drip edge or the gutter
                overflow above it. The
                website section on moisture
                source identification changed
                the scope of every job:
                customers who read it arrived
                asking about the gutter
                and the drip edge, not
                just the trim. My jobs
                got larger and my callbacks
                dropped significantly.
                The epoxy consolidant section
                also opened a whole category
                of smaller repairs that
                customers had assumed required
                full replacement.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Garrison, exterior carpentry, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A wood rot repair site with rot type guide,
                epoxy consolidant section, and assessment
                form starts at $200. A full site with moisture
                source diagnostic, repair vs. replacement
                guide, and material selection section is
                $425–$750. One trim restoration job covers
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
