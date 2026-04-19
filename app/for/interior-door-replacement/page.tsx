import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Interior Door Replacement Companies in Kansas City",
  description:
    "Custom websites for interior door replacement, prehung door installation, and door hardware companies in the Kansas City area. Show your rough opening sizing, shimming process, and hinge mortise approach to win interior door replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/interior-door-replacement",
  },
};

export default function InteriorDoorReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Interior Door Replacement Companies in Kansas City",
    description: "Custom websites for interior door replacement and prehung door installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Interior Door Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether they need a prehung door or just a slab, how to handle an out-of-plumb opening, and what happens when the rough opening is the wrong size. A website that explains the measurement and installation process earns the door call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Interior Door Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Interior Door Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Interior door replacement
              customers are KC homeowners
              with hollow-core
              builder-grade doors
              they want to upgrade
              to solid-core for
              sound and feel,
              homeowners dealing
              with warped or
              sticking doors
              after a wet KC
              spring, or homeowners
              remodeling a hallway
              or bedroom and
              want consistent
              door hardware and
              style. The central
              education is prehung
              vs. slab, rough
              opening vs. door
              size, and what
              actually causes
              doors to stick,
              bind, or fail
              to latch. Prehung
              vs. slab: a prehung
              door comes with
              the door already
              attached to a
              frame, hinges mortised,
              and bore hole
              drilled — the entire
              unit is installed
              as one piece and
              requires removing
              the existing frame;
              a slab door is
              just the door
              panel — it replaces
              the door leaf in
              an existing frame
              that is still plumb
              and sound; slab
              replacement is
              faster and less
              expensive when
              the existing frame
              is in good condition;
              prehung is required
              when the frame
              is damaged, the
              opening was enlarged
              or reduced, or
              the door size is
              changing. Rough
              opening sizing:
              the rough opening
              (RO) is the framed
              opening in the
              wall before the
              frame is installed —
              standard RO for
              a 2/8 (32-inch)
              prehung door is
              34 inches wide
              by 82 inches tall;
              the frame and
              shims take up
              2 inches in width
              and 1.5 inches
              in height from
              the RO; the gap
              between the frame
              and the RO (typically
              3/8 to 1/2 inch
              on each side) is
              filled with shims
              and covered by
              casing; if the
              RO is too wide
              by more than 1
              inch per side,
              the king stud must
              be shimmed or
              the jack stud repositioned.
              Shimming for plumb
              and level: shims
              go at the hinge
              locations (typically
              3 hinge locations
              for a standard
              door — top, middle,
              bottom), at the
              latch side at
              the strike location,
              and at the head
              jamb; shims must
              be paired (tapered
              shims driven from
              opposite sides)
              to create a flat
              bearing surface;
              a 4-foot level
              on the hinge jamb
              and the head jamb
              confirms plumb
              and level before
              fastening; out-of-plumb
              openings (common
              in KC homes that
              have settled) require
              planing the hinge
              mortises to a
              new depth or using
              adjustable hinges
              to compensate for
              up to 1/8-inch
              out-of-plumb. Hinge
              mortising: standard
              interior door hinges
              are 3.5x3.5 inch
              for doors up to
              1-3/8 inch thick,
              4x4 inch for 1-3/4
              inch solid-core
              doors; mortise
              depth equals the
              hinge leaf thickness
              (typically 0.09
              inch) — shallow
              mortises cause
              the door to bind
              on the hinge side;
              deep mortises cause
              the door to gap
              on the latch side;
              a sharp 1-inch
              chisel and a router
              with a hinge template
              produces consistent
              mortise depth.
              Door height trimming:
              a prehung door
              may need to be
              trimmed at the
              bottom for floor
              clearance — 1/2
              inch under carpet,
              3/4 inch under
              hardwood; a circular
              saw with a fine-tooth
              blade (60 tooth
              minimum for hollow-core,
              80 tooth for solid-core)
              prevents tearout
              at the cut edge.
              A door replacement
              website that explains
              prehung vs. slab
              clearly, what rough
              opening tolerance
              is acceptable, and
              what causes binding
              and sticking earns
              the homeowner who
              has been fighting
              the same door for
              two years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before interior door replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Prehung vs. slab — when each is appropriate, frame condition assessment, what changes when swapping slab only",
                  "Rough opening sizing — standard RO dimensions, shim gap allowance, too-wide RO correction",
                  "Shimming for plumb — shim placement at hinges and strike, paired taper shims, out-of-plumb compensation",
                  "Hinge mortising — standard hinge sizes by door thickness, mortise depth tolerance, binding vs. gap causes",
                  "Door height trimming — clearance by floor type, blade tooth count by door material, tearout prevention",
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
                What your interior door replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Prehung vs. slab section — when to use each, frame inspection checklist, existing bore hole compatibility",
                  "Rough opening guide — standard RO by door size, shim gap, what to do when the opening is over-wide",
                  "Shimming section — hinge and strike placement, paired shim technique, checking plumb, settlement compensation",
                  "Hinge mortise section — size by door thickness, depth tolerance, chisel vs. router template approach",
                  "Trim and hardware section — height trimming by floor type, blade selection, bore hole sizing for hardware",
                  "Quote form with door size, current frame condition, door count, hardware preference, floor type",
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
                &ldquo;The prehung vs. slab section
                made the biggest difference
                in pre-qualifying jobs. Before,
                customers would call asking
                for a door replacement and
                mean different things — some
                wanted just the slab swapped,
                some needed the whole frame
                replaced. After the section
                went up, customers would
                call and say &apos;the frame is
                still square, I just need
                a slab&apos; or &apos;the frame is
                out of plumb and the old
                door didn&apos;t close right either.&apos;
                I knew exactly what I was
                walking into. The shimming
                section also helped with
                customers in older KC homes
                that had settled — they understood
                why their 1978 house needed
                more labor than a newer
                house, which meant no arguments
                about pricing.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Medina, interior trim and door installation, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An interior door site with prehung vs. slab section,
                rough opening guide, and quote form starts at $200.
                A full site with shimming guide, hinge mortise section,
                and trim content is $425–$750. One door replacement
                job covers the cost. No contracts, no monthly fees.
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
