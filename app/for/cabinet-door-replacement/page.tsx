import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Cabinet Door Replacement Companies in Kansas City",
  description:
    "Custom websites for cabinet door replacement, kitchen cabinet door refacing, and bathroom cabinet door companies in the Kansas City area. Show your door style matching, KC humidity warping pattern, and hinge alignment method to win cabinet door replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/cabinet-door-replacement",
  },
};

export default function CabinetDoorReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Cabinet Door Replacement Companies in Kansas City",
    description: "Custom websites for cabinet door replacement and kitchen cabinet refacing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Cabinet Door Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether cabinet doors can be replaced without replacing the cabinet boxes, what causes doors to warp and gap after a few KC summers, and how to match the door style when only a few doors need replacing. A website that explains cabinet door replacement earns the kitchen refresh call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Cabinet Door Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Cabinet Door Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Cabinet door replacement
              customers are KC homeowners
              who want to update the
              look of a kitchen without
              replacing the cabinet
              boxes — the boxes are
              structurally sound but
              the doors are outdated,
              damaged, or warped —
              homeowners whose solid
              wood doors have cupped
              or twisted from the KC
              humidity swing between
              summer (60–70% relative
              humidity) and winter
              (20–30% RH with forced-air
              heat), which causes wood
              movement that strains
              the door frame joints,
              or homeowners replacing
              a few doors damaged by
              water under the sink
              or near the dishwasher
              who need to match the
              existing style as closely
              as possible. The central
              education is door construction
              type and humidity response,
              hinge boring compatibility,
              and style matching for
              partial replacements —
              three things that determine
              whether new doors fit
              the existing boxes, stay
              flat through a KC humidity
              cycle, and look like
              they belong in the same
              kitchen. Door construction:
              solid wood doors in KC
              are the most vulnerable
              to humidity warping —
              a five-piece door with
              solid wood rails and
              stiles and a solid center
              panel will move seasonally;
              the construction that
              resists KC humidity movement
              is a five-piece door
              with MDF center panel
              — MDF does not expand
              and contract with humidity
              the way solid wood does,
              and the frame rails
              and stiles have room
              to move without forcing
              the panel; thermofoil
              doors (MDF substrate
              wrapped in vinyl film)
              are the most humidity-stable
              option for painted-look
              applications, but the
              film can separate from
              the MDF at edges and
              heat sources — not recommended
              near the oven; shaker-style
              doors with MDF center
              panel are the current
              standard replacement
              for KC kitchens built
              1995–2015 with solid
              wood originals that
              have warped. Hinge boring:
              European-style concealed
              hinges (the standard
              in KC cabinets since
              roughly 1990) require
              a 35mm cup hole bored
              into the back face of
              the door at a specific
              depth — 13mm standard
              depth — and a specific
              distance from the door
              edge, called the boring
              distance or overlay
              distance; the new door
              must be bored to match
              the hinge brand and
              adjustment range of
              the existing hinges,
              or the hinges must be
              replaced simultaneously;
              KC cabinets built before
              1990 often use surface-mount
              or wrap-around hinges
              that require no boring
              — these are easier to
              match but may limit
              door thickness options.
              Style matching: replacing
              a few doors in a kitchen
              with mixed door ages
              is the hardest match
              problem — the original
              profile, finish, and
              wood species or paint
              color must be identified
              before ordering; raised-panel
              profiles are router-cut
              and vary by bit shape
              — a cathedral arch profile
              from a 1998 KC kitchen
              may not be available
              from current stock suppliers
              and may require custom
              routing; paint-grade
              doors can be matched
              by finish after ordering
              — the new doors are
              primed and painted on-site
              to match the existing
              finish. A cabinet door
              website that explains
              construction type by
              humidity resistance,
              hinge boring compatibility,
              and the style-matching
              process earns the homeowner
              who wants the kitchen
              updated without gutting
              the boxes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before cabinet door replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Door construction — solid wood vs. MDF center panel vs. thermofoil, KC humidity movement and warping",
                  "Hinge compatibility — 35mm cup hole, boring distance, European concealed hinge brand matching",
                  "Style matching — profile identification, raised-panel router bit variation, partial replacement approach",
                  "KC humidity swing — summer 60-70% RH vs. winter 20-30% RH, how wood moves across the cycle",
                  "Boxes vs. doors — when box replacement is needed vs. door-only replacement feasibility",
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
                What your cabinet door replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Door construction section — MDF panel vs. solid wood humidity response, thermofoil limitations near heat",
                  "KC humidity guide — RH swing data, why solid wood doors warp, shaker MDF as replacement standard",
                  "Hinge compatibility section — 35mm boring, overlay distance, pre-1990 surface-mount hinge identification",
                  "Style matching guide — profile identification method, painted door matching process, custom routing for older profiles",
                  "Boxes vs. doors section — box inspection checklist, when replacement is the right scope",
                  "Quote form with door count, current hinge type, door style description, finish type, humidity damage, timeline",
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
                &ldquo;The humidity section stopped
                the argument I was having
                about door material. A homeowner
                in Brookside wants solid
                wood because that&apos;s what
                the original kitchen had,
                and I have to explain that
                the original solid wood
                doors are what warped in
                the first place. After the
                section went up explaining
                why MDF center panels stay
                flat through the KC humidity
                swing, customers started
                asking for the MDF construction
                specifically. The hinge
                section also helps because
                customers in older homes
                want to know if they need
                new hinges — now they understand
                the 35mm boring before they
                call and can tell me which
                brand is on their cabinets.
                That saves an hour at every
                estimate where I used to
                have to explain it from
                scratch.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Mendoza, cabinet installation and door replacement, Brookside, KC
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A cabinet door replacement site with door construction section,
                hinge compatibility guide, and quote form starts at $200. A full
                site with KC humidity content, style matching guide, and boxes
                vs. doors section is $425–$750. One kitchen door replacement
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
