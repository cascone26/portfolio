import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Basement Egress Window Installation Companies in Kansas City",
  description:
    "Custom websites for basement egress window installation, egress window well installation, and IRC egress compliance companies in the Kansas City area. Show your KC IRC egress code requirements, window well drainage in KC clay soil, and finished basement permit requirement to win egress window installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/basement-egress-window-installation",
  },
};

export default function BasementEgressWindowInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Basement Egress Window Installation Companies in Kansas City",
    description: "Custom websites for basement egress window installation and egress compliance companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Basement Egress Window Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their basement bedroom is legal without an egress window, what the IRC minimum opening size actually is, and whether the window well needs a drain or just gravel. A website that explains basement egress window installation earns the call from the homeowner who wants to finish the basement the right way before listing the house. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Basement Egress Window Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Basement Egress Window Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Basement egress window
              installation customers
              are KC homeowners
              who are finishing
              a basement bedroom
              and need to bring
              it into compliance
              with the IRC sleeping
              room egress requirements
              before pulling a
              permit; homeowners
              who are selling a
              house with a finished
              basement bedroom
              and were told by
              the buyer&apos;s inspector
              or real estate agent
              that the bedroom
              does not have an
              egress window and
              cannot be listed
              as a bedroom without
              one; or homeowners
              who have a window
              well that floods
              during KC spring
              rains and want to
              understand whether
              the window well
              needs a drain, a
              larger gravel bed,
              or a different well
              size. The central
              education is IRC
              egress opening requirements
              for sleeping rooms,
              window well size
              and drainage in
              KC clay soil, and
              the permit and inspection
              requirement for
              basement bedroom
              finishing — three
              things that determine
              whether a homeowner
              understands that
              egress window installation
              is a code-driven
              project with specific
              measurable requirements
              and not simply a
              matter of adding
              any window. IRC
              egress requirements:
              the International
              Residential Code
              requires sleeping
              rooms below grade
              to have an escape
              and rescue opening
              that meets minimum
              dimensions — five-point-seven
              square feet of net
              clear opening (the
              opening when the
              window is fully
              open), minimum twenty-four
              inches of clear
              height, minimum
              twenty inches of
              clear width, and
              maximum forty-four
              inches from the
              floor to the bottom
              of the opening;
              the net clear opening
              is measured with
              the window fully
              open and accounts
              for the frame, sash,
              and screen — not
              the rough opening
              size; a window that
              meets the rough
              opening size but
              has a divided light
              sash or a casement
              that opens to only
              sixty percent of
              the rough opening
              may not meet the
              five-point-seven
              square foot net
              clear requirement.
              Window well drainage
              in KC clay: a basement
              egress window well
              is a semi-enclosed
              pocket against the
              foundation; KC clay
              at less than zero-point-one
              inch per hour hydraulic
              conductivity drains
              essentially no water
              after saturation;
              a window well without
              a gravel bed and
              drain connection
              to a perimeter drain
              or drywell fills
              during a KC spring
              rain event and the
              water pressure against
              the window exceeds
              the window&apos;s water
              resistance rating;
              the correct KC window
              well installation
              includes a minimum
              twelve-inch gravel
              bed at the well
              base and a drain
              connection to daylight
              or to the interior
              perimeter drain
              tile system; window
              wells that flood
              are a drainage problem,
              not a window problem,
              and the drain must
              be addressed at
              installation time.
              Permit and inspection:
              cutting through a
              poured concrete
              or block foundation
              wall to install
              an egress window
              is structural work —
              it requires a permit
              in all KC area jurisdictions;
              a finished basement
              bedroom with an
              egress window installed
              without a permit
              must be disclosed
              at sale and may
              require retroactive
              inspection; a bedroom
              with no egress window
              at all cannot be
              classified as a
              bedroom on an MLS
              listing under NAR
              guidelines — it
              must be listed as
              a bonus room or
              office regardless
              of how it was marketed
              by the previous
              owner. A basement
              egress window website
              that explains IRC
              net clear opening
              requirements, KC
              clay window well
              drainage requirements,
              and permit necessity
              earns the homeowner
              who wants to finish
              the basement bedroom
              correctly the first
              time and not discover
              the violation at
              closing.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before basement egress window installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "IRC requirements — 5.7 sq ft net clear opening, 24-inch height, 20-inch width, 44-inch sill height, net vs. rough opening",
                  "Window well drainage — KC clay hydraulic conductivity, well flooding, gravel bed + drain connection requirement",
                  "Permit requirement — foundation cutting is structural work, KC area jurisdictions require permit, sale disclosure if unpermitted",
                  "MLS bedroom classification — no egress = no bedroom listing, bonus room disclosure, NAR guidelines",
                  "Foundation cutting method — saw cut through concrete block vs. poured wall, lintel requirement above opening",
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
                What your basement egress window installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "IRC code section — net clear opening dimensions, how to measure correctly, common windows that fail the net test",
                  "Window well section — KC clay drainage problem, gravel bed specification, drain connection options",
                  "Permit section — why foundation cutting requires permit, KC area jurisdiction list, retroactive inspection risk",
                  "MLS value section — bedroom vs. bonus room listing difference, what egress window adds to appraisal",
                  "Foundation type section — concrete block vs. poured concrete wall, saw cut vs. core drill method, lintel installation",
                  "Quote form with foundation type, current window well condition, bedroom count needing egress, permit concern, sale timeline",
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
                &ldquo;The MLS bedroom section
                is what generates
                the pre-sale calls.
                KC homeowners listing
                a house with a finished
                basement start calling
                in the spring when
                the real estate
                agent tells them
                the bedroom in the
                basement can&apos;t be
                listed as a bedroom.
                After the section
                went up explaining
                that a bedroom without
                egress must be listed
                as bonus space and
                what that does to
                the comparable sale
                price, customers
                started calling
                for the egress window
                specifically rather
                than asking whether
                they really need
                it. The window well
                drainage section
                also matters in
                KC — I install the
                drain connection
                as standard and
                customers understand
                why after reading
                about how fast
                a KC clay well
                fills in an April
                storm.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Patel, basement egress window installation, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A basement egress window site with IRC requirement section, window
                well drainage guide, and quote form starts at $200. A full site
                with permit requirement, MLS value section, and foundation type
                content is $425–$750. One egress window installation covers the
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
