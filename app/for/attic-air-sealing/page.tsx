import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Attic Air Sealing Companies in Kansas City",
  description:
    "Custom websites for attic air sealing, attic bypass sealing, and attic floor air barrier companies in the Kansas City area. Show your top plate bypass sealing, KC stack effect heat loss, and can light and chase penetration sealing to win attic air sealing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/attic-air-sealing",
  },
};

export default function AtticAirSealingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Attic Air Sealing Companies in Kansas City",
    description: "Custom websites for attic air sealing and attic bypass sealing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Attic Air Sealing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why adding more attic insulation didn't lower their heating bills, what an attic bypass is and whether their house has them, and why their recessed lights are cold to the touch in winter. A website that explains attic air sealing earns the energy audit call and the sealing job that follows. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Attic Air Sealing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Attic Air Sealing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Attic air sealing customers
              are KC homeowners who
              added blown-in insulation
              to their attic and saw
              minimal improvement
              in heating bills because
              insulation slows conductive
              heat transfer through
              the attic floor but
              does nothing to stop
              air movement through
              the bypasses under
              the insulation — homeowners
              who feel cold drafts
              near recessed can lights,
              electrical boxes, or
              top-floor interior walls
              in KC winters, or homeowners
              who received an energy
              audit showing a high
              blower door test number
              that indicates significant
              air leakage through
              the building envelope.
              The central education
              is the stack effect
              in KC homes, the five
              major bypass locations
              in a typical attic floor,
              and why air sealing
              before insulation installation
              is the correct sequence —
              three things that determine
              whether an attic improvement
              project delivers measurable
              energy savings or leaves
              the largest losses untouched.
              KC stack effect: in
              KC winters, warm interior
              air rises through the
              house and exits through
              ceiling penetrations
              into the attic — the
              pressure difference
              between the warm interior
              and the cold attic
              drives air through every
              gap in the attic floor;
              as warm air exits through
              the top, cold exterior
              air is drawn in through
              lower penetrations —
              foundation gaps, rim
              joist cracks, electrical
              penetrations; in a KC
              home with significant
              attic bypasses, the
              stack effect moves hundreds
              of cubic feet of conditioned
              air per hour through
              the building envelope
              regardless of insulation
              depth; adding R-38 insulation
              over unsealed bypasses
              is like putting a blanket
              over a open window —
              it reduces conduction
              but does not address
              the air exchange rate.
              Five major bypass locations:
              the most significant
              attic bypasses in a
              typical KC pre-1990
              home are top plates
              (the horizontal framing
              members at the top of
              interior walls that
              connect to the attic
              floor — a gap exists
              between the top plate
              and the attic floor
              drywall that runs the
              full perimeter of every
              interior wall); recessed
              can lights (older non-IC-rated
              can lights are open
              canisters that connect
              directly to the attic
              air space — they are
              the single largest bypass
              in homes with many
              recessed fixtures); electrical
              and plumbing chases
              (vertical pipe and wire
              runs from lower floors
              that open into the
              attic floor); attic
              access hatches (often
              uninsulated and unsealed,
              with gaps around the
              frame that allow direct
              air exchange when the
              hatch is closed); HVAC
              penetrations where duct
              boots and supply plenum
              connections pass through
              the attic floor. Air
              sealing sequence: attic
              air sealing is done
              before insulation is
              installed or, in an
              existing attic, by
              pulling back insulation
              to access the bypasses
              and sealing with fire-rated
              spray foam (Great Stuff
              Pro or equivalent) at
              small gaps, rigid foam
              board plus foam at
              can light boxes, and
              foam backer rod plus
              caulk at top plate
              gaps; after sealing,
              insulation is replaced
              or additional insulation
              blown in to the target
              R-value; the combination
              of sealed bypasses
              and adequate R-value
              produces the energy
              savings that insulation
              alone cannot deliver.
              An attic air sealing
              website that explains
              the KC stack effect,
              the five bypass locations,
              and why sealing before
              insulating is the correct
              order earns the homeowner
              who wonders why their
              insulation upgrade didn&apos;t
              lower their gas bill.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before attic air sealing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Stack effect — how warm air rises and exits through attic, cold air drawn in below, KC winter pressure differential",
                  "Top plate bypass — interior wall top plate gap, full perimeter air leakage, why insulation doesn't stop it",
                  "Can light bypass — open canister connects to attic, non-IC-rated fixtures, how many watts of heat loss per light",
                  "Air sealing vs. insulation — why R-value alone fails without sealed bypasses, correct project sequence",
                  "Blower door test — what the number means, how it measures total air leakage, before/after comparison",
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
                What your attic air sealing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Stack effect section — KC winter pressure differential, warm air exit path, cold air entry below, energy cost",
                  "Five bypass section — top plates, can lights, chases, attic hatch, HVAC penetrations — location and sealing method",
                  "Can light section — non-IC canister problem, site-built cover box method, IC-rated fixture replacement option",
                  "Sealing materials — fire-rated spray foam, rigid foam board, backer rod and caulk — where each is used",
                  "Project sequence guide — why air sealing before insulation, what to expect during an existing attic seal job",
                  "Quote form with home age, insulation status, can light count, known drafts, energy audit history, timeline",
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
                &ldquo;The stack effect section
                is what changed how
                customers understand
                the problem. They&apos;d
                call after adding blown-in
                insulation and being
                disappointed — their
                gas bill hadn&apos;t changed.
                After the section went
                up explaining that
                insulation slows conduction
                but air leakage through
                the bypasses is the
                bigger loss in a KC
                home, customers understood
                why they needed an
                air sealing job, not
                more insulation. The
                can light section also
                converted a lot of
                skeptics — KC homes
                from the 1990s have
                twenty or thirty recessed
                lights that are open
                to the attic. Explaining
                that each can light
                is a direct pipe to
                the cold attic air
                space made the sealing
                job make complete sense
                rather than seeming
                like extra work added
                to an insulation job.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Hoover, attic air sealing and insulation, Kansas City, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An attic air sealing site with stack effect section, bypass
                location guide, and quote form starts at $200. A full site with
                can light sealing content, KC home age context, and project
                sequence guide is $425–$750. One air sealing job covers the
                cost. No contracts, no monthly fees.
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
