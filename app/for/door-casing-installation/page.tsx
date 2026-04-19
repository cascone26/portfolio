import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Door Casing Installation Companies in Kansas City",
  description:
    "Custom websites for door casing installation, interior trim carpentry, and door finish carpentry companies in the Kansas City area. Show your 3/8-inch reveal standard, back-bevel process on out-of-plumb door frames, and mitered vs. square-cut options to win door trim contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/door-casing-installation",
  },
};

export default function DoorCasingInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Door Casing Installation Companies in Kansas City",
    description: "Custom websites for door casing installation and interior trim carpentry companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Door Casing Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why door casing miters open at the top corners over time, what the reveal is and how it is set, and whether a door frame that is out of plumb has to be fixed before casing can go on. A website that explains door casing earns the trim call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Door Casing Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Door Casing Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Door casing installation
              customers are KC homeowners
              replacing old casing
              after a door replacement
              changed the jamb dimensions,
              homeowners renovating
              a room and upgrading
              from 2-inch colonial
              to a wider or more
              architectural profile,
              or homeowners finishing
              a basement and casing
              the new interior
              doors for the first
              time. The central
              education is the
              3/8-inch reveal standard,
              how out-of-plumb
              door frames are
              handled without
              shimming the frame,
              and why top-corner
              miters open seasonally —
              three things that
              homeowners notice
              after the work
              is done and have
              questions about
              before they commit
              to a contractor.
              Reveal: door casing
              reveal is the setback
              distance from the
              interior edge of
              the door jamb to
              the inside edge
              of the casing —
              standard is 3/8
              inch on all three
              sides (two legs
              and the head);
              the reveal is marked
              with a combination
              square set to 3/8
              inch, run continuously
              around the jamb
              before any piece
              is cut; the reveal
              must be identical
              on both legs or
              the head miter
              will be cut at
              the wrong angle
              on one side; in
              KC homes where
              jambs are shimmed
              and plumbed but
              not perfectly consistent
              in depth, running
              the reveal line
              also shows where
              the jamb surface
              is recessed from
              the drywall — this
              requires either
              adding a jamb extension
              or scribing the
              casing to span
              the gap. Out-of-plumb
              door frames: KC
              homes built between
              1950 and 1985 frequently
              have interior doors
              that have racked
              out of plumb as
              the structure settled —
              a door frame that
              is 1/4 inch out
              of plumb over its
              height is common
              and not a structural
              concern; the casing
              can be installed
              on an out-of-plumb
              frame by scribing
              the leg pieces
              to follow the reveal
              line, cutting a
              slight back-bevel
              on the face of
              each piece so the
              front contacts
              the wall cleanly,
              and scribing the
              head miter to the
              actual angle of
              the top of the
              frame rather than
              assuming 90 degrees;
              a 45-degree miter
              cut on a frame
              that is 1/4 inch
              out of plumb will
              leave a visible
              gap at the outside
              of the head miter
              on one side. Corner
              miter opening: door
              casing head miters
              open seasonally
              in KC homes because
              wood expands and
              contracts with
              KC&apos;s humidity cycle —
              20% relative humidity
              in January heat
              versus 70% in July;
              the miter opens
              because the head
              piece and leg pieces
              expand and contract
              at different rates
              relative to the
              corner angle; gluing
              the miter joint
              with wood glue
              and clamping before
              nailing significantly
              reduces seasonal
              movement — the
              glue bond holds
              the joint flat
              through multiple
              cycles; MDF casing
              moves less than
              solid wood but
              is more prone to
              edge damage if
              the door is used
              heavily; for high-traffic
              doors (front entry,
              garage entry), finger-jointed
              pine or solid poplar
              is more durable.
              A door casing website
              that explains the
              3/8-inch reveal
              standard, how out-of-plumb
              frames are handled
              without demo, and
              what keeps head
              miters from opening
              in winter earns
              the homeowner who
              wants casing that
              looks right from
              day one.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before door casing installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Reveal standard — 3/8 inch setback, how it is marked, why both legs must match for head miter to close",
                  "Out-of-plumb frames — scribing process, back-bevel technique, head miter angle adjustment",
                  "Corner miter opening — seasonal wood movement in KC humidity, glue-and-clamp prevention, when miters fail",
                  "Jamb extension — when the jamb is recessed from drywall, how a jamb extension fills the gap before casing",
                  "Material — MDF vs. finger-jointed pine vs. solid poplar, high-traffic door durability, paint vs. stain",
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
                What your door casing installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Reveal section — 3/8-inch standard, combination square method, consistent leg reveal requirement",
                  "Out-of-plumb section — scribing process, back-bevel approach, when the frame needs shimming vs. when casing handles it",
                  "Corner miter guide — seasonal movement cause, glue-and-clamp technique, MDF vs. wood for stability",
                  "Jamb extension section — when it is needed, how it is fitted, paint-grade options",
                  "Material section — MDF vs. pine vs. poplar by application, high-traffic door recommendation, finishing process",
                  "Quote form with door count, existing casing profile, frame condition, material preference, timeline",
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
                &ldquo;The miter opening section
                saved me from one of my
                biggest callback risks. KC
                winters are dry — 20% humidity
                in some houses — and every
                spring I was getting calls
                about head miters that opened
                over winter. All of them were
                glued but not clamped. After
                the section went up explaining
                glue and clamp before nail,
                I started doing it on every
                job, and I started getting
                customers who specifically
                asked about it. Zero callbacks
                for miter gaps since. The
                jamb extension section also
                brought in two jobs from
                customers who had new doors
                installed by others and couldn&apos;t
                figure out why there was
                a gap between the jamb and
                drywall — they found the
                section, understood the problem,
                and called me to fix it.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Castellano, interior door and trim installation, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A door casing site with reveal section, miter guide, and
                quote form starts at $200. A full site with out-of-plumb
                frame handling, jamb extension content, and material
                comparison is $425–$750. One set of door casing covers
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
