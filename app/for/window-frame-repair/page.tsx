import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Frame Repair Companies in Kansas City",
  description:
    "Custom websites for window frame repair, wood window frame rot repair, and window frame replacement companies in the Kansas City area. Show your KC moisture cycling on wood frames, wood rot progression from glazing failure, and aluminum vs. wood frame repair approach to win window frame repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-frame-repair",
  },
};

export default function WindowFrameRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Frame Repair Companies in Kansas City",
    description: "Custom websites for window frame repair and wood window rot repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Frame Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the soft spot at the corner of their window frame means the whole window needs to be replaced or just the frame, how far the rot has gone, and whether an epoxy wood filler repair is as durable as replacing the wood. A website that explains window frame repair earns the call from the homeowner who found soft wood at the sill. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Frame Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Frame Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window frame repair
              customers are KC homeowners
              with wood-framed
              windows — most commonly
              in homes built
              before 1970 — whose
              window sills, bottom
              rails, or exterior
              casing members
              have developed
              soft spots indicating
              wood rot; homeowners
              who notice that
              the glazing compound —
              the putty that
              seals the glass
              to the wood sash —
              is cracked, missing
              in sections, or
              has separated from
              the glass edge,
              allowing water
              to enter the sash
              member through
              the gap between
              the glass and
              the wood; or
              homeowners who
              see paint peeling
              at the window
              sill or bottom
              rail specifically —
              a pattern that
              indicates moisture
              is coming from
              inside the wood
              rather than from
              the exterior paint
              surface. The central
              education is KC
              moisture cycling
              and its effect
              on wood window
              frames, glazing
              compound failure
              as the entry
              point for frame
              rot, and epoxy
              consolidant and
              filler as a durable
              repair versus
              section replacement —
              three things that
              determine whether
              a homeowner understands
              that a rotted
              window sill does
              not automatically
              mean the window
              must be replaced
              and what the
              durable path is.
              KC moisture cycling
              on wood frames:
              KC receives approximately
              forty inches of
              annual precipitation
              with peak rainfall
              in April through
              June; wood window
              frames on the
              south and west
              exposures — the
              sun-facing and
              prevailing-storm
              faces — see the
              highest moisture
              load; KC humidity
              ranges from fifty
              percent relative
              humidity in winter
              to seventy-five
              percent in summer —
              this differential
              causes wood to
              expand with moisture
              uptake in summer
              and contract as
              it dries in winter;
              the expansion
              and contraction
              opens and closes
              the paint film
              at the joints
              between the glass,
              glazing compound,
              and wood sash;
              once the paint
              film breaks, water
              enters the wood
              end grain at
              the sash corners
              and the sill
              top — the most
              vulnerable locations
              — and rot begins
              at the wood that
              stays wet longest
              after rain. Glazing
              compound failure
              as entry point:
              oil-based glazing
              compound on windows
              installed before
              1985 has a service
              life of approximately
              twenty to twenty-five
              years under KC
              exposure; the
              compound oxidizes,
              becomes brittle,
              and separates
              from either the
              glass rabbet or
              the wood face;
              a gap as narrow
              as one thirty-second
              of an inch between
              the compound
              and the glass
              allows capillary
              water entry into
              the sash member;
              the water enters
              the bottom rail
              or sill through
              the glazing gap
              and is trapped
              against the wood
              by the paint
              film on the
              face — it cannot
              exit and keeps
              the wood fiber
              at the moisture
              content required
              for rot fungi
              to grow; the
              repair sequence
              is to address
              the glazing compound
              failure first —
              new glazing compound
              applied properly
              and painted stops
              the water entry
              before the rot
              progression continues.
              Epoxy repair versus
              section replacement:
              when rot is limited
              to the surface
              layer of the
              sill or sash
              member — soft
              wood fiber up
              to one inch
              deep with sound
              wood beneath —
              epoxy consolidant
              and filler is
              a durable repair;
              the consolidant
              is a low-viscosity
              liquid that penetrates
              the degraded
              wood fiber and
              hardens it into
              a stable substrate;
              the filler is
              a two-part polyester
              or epoxy putty
              that can be
              shaped to match
              the original
              sill profile;
              the finished
              surface takes
              primer and paint
              and expands and
              contracts at
              a rate close
              to the surrounding
              wood; section
              replacement —
              removing the
              rotted sill
              or bottom rail
              and installing
              a new wood member —
              is appropriate
              when rot extends
              through the full
              thickness of
              the wood or
              when the structural
              joint at the
              sash corner is
              compromised; a
              window frame
              repair contractor
              who can determine
              the rot depth
              and choose between
              epoxy repair
              and section replacement
              provides the
              homeowner with
              a cost-appropriate
              solution rather
              than defaulting
              to full window
              replacement for
              a limited rot
              problem. A window
              frame repair
              website that
              explains KC moisture
              cycling and south-west
              exposure risk,
              glazing compound
              failure as the
              root cause, and
              epoxy consolidant
              as a sound alternative
              to full window
              replacement earns
              the homeowner
              who found soft
              wood and wants
              to know their
              options before
              calling for
              new windows.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before window frame repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC moisture cycling — humidity differential, south/west exposure, paint film failure at glazing joint",
                  "Glazing compound failure — brittle oxidized compound, gap at glass edge, how water enters sash end grain",
                  "Rot depth assessment — surface vs. through-depth rot, probe test, when epoxy repair vs. section replacement",
                  "Epoxy consolidant and filler — consolidant penetration of degraded fiber, filler shaping, paint compatibility",
                  "Repair vs. replacement — cost comparison, when window unit replacement is the right call vs. frame repair",
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
                What your window frame repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Moisture cycling section — KC humidity range, south/west exposure, expansion-contraction paint film failure",
                  "Glazing compound section — oil compound service life, failure signs, repair sequence glazing-before-paint",
                  "Rot assessment section — probe depth test, what surface rot looks like, structural joint compromise indicators",
                  "Epoxy repair section — consolidant and filler system, application process, finish comparability with original wood",
                  "Section replacement section — when to remove and replace sill or rail vs. epoxy, corner joint assessment",
                  "Quote form with window age, exposure direction, soft spots found, glazing condition, paint peeling location",
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
                &ldquo;The glazing compound
                section is what
                gets the older
                KC home customers
                to call me instead
                of a window replacement
                company. Homes
                in Prairie Village
                and Mission built
                in the fifties
                and sixties have
                original wood
                windows that are
                completely restorable —
                the frame is
                solid and the
                rot is only at
                the sill or
                the bottom rail
                where the glazing
                failed. After
                the section went
                up explaining
                that the glazing
                compound is the
                water entry point
                and that epoxy
                repair addresses
                the rot that
                already happened,
                customers stopped
                calling window
                replacement companies
                and started calling
                me. The full
                window cost is
                five to eight
                hundred per
                window. My repair
                is sixty to
                a hundred and
                fifty. When customers
                understand what
                failed and why,
                that comparison
                makes itself.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Okafor, window frame repair and wood restoration, Mission, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window frame repair site with glazing compound failure section,
                epoxy repair guide, and quote form starts at $200. A full site with
                KC moisture cycling context, rot assessment process, and section
                replacement criteria is $425–$750. One window frame repair job
                covers the cost. No contracts, no monthly fees.
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
