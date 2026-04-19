import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Carpet Installation Companies in Kansas City",
  description:
    "Custom websites for carpet installation, carpet replacement, and carpet flooring companies in the Kansas City area. Show your KC humidity effects on carpet pad moisture retention, carpet fiber type selection for KC seasonal temperature swings, and proper subfloor prep for carpet installation to win carpet installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/carpet-installation",
  },
};

export default function CarpetInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Carpet Installation Companies in Kansas City",
    description: "Custom websites for carpet installation and carpet replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Carpet Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know which carpet fiber holds up to KC humidity and pet traffic, whether they need new pad under new carpet, and why new carpet can develop odor in a KC basement. A website that explains carpet installation earns the call from the homeowner replacing worn or stained carpet and wanting to understand what determines whether new carpet looks the same in five years. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Carpet Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Carpet Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Carpet installation
              customers are
              KC homeowners
              replacing worn,
              stained, or
              outdated carpet
              in bedrooms,
              living rooms,
              or finished
              basements and
              wanting to understand
              which fiber
              type and pile
              construction
              holds up to
              Kansas City&apos;s
              seasonal humidity
              swings — from
              thirty-five percent
              relative humidity
              in winter to
              sixty to seventy
              percent in summer —
              and to pet
              traffic, children,
              and the cleaning
              cycles that
              KC homeowners
              run on carpet
              that shows
              soil quickly
              in high-traffic
              areas; homeowners
              replacing carpet
              after water
              damage who
              want to understand
              whether the
              existing pad
              can be reused
              or must be
              replaced along
              with the carpet,
              and whether
              the subfloor
              beneath needs
              treatment before
              new carpet
              is installed;
              or homeowners
              finishing a
              KC basement
              and wanting
              to understand
              why carpet
              over a concrete
              slab in a
              KC basement
              requires a
              different pad
              and installation
              approach than
              carpet over
              a wood subfloor
              in an above-grade
              room. The central
              education is
              carpet fiber
              type as the
              primary determinant
              of durability
              and soil resistance
              in a KC home —
              nylon versus
              polyester versus
              triexta versus
              wool, and the
              trade-offs in
              resilience,
              stain resistance,
              and cost that
              determine which
              fiber is appropriate
              for which room —
              pad selection
              as the hidden
              variable that
              determines
              how carpet
              feels and
              how long it
              lasts over
              the subfloor
              in a KC home,
              and moisture
              and subfloor
              prep as the
              prerequisite
              that determines
              whether carpet
              installed in
              a KC basement
              or over a
              water-damaged
              subfloor develops
              mold and odor
              within the
              first year —
              three things
              that determine
              whether a homeowner
              understands
              why carpet
              selection and
              prep matter
              as much as
              the color. Carpet
              fiber in KC
              homes: nylon
              is the most
              durable residential
              carpet fiber —
              solution-dyed
              nylon resists
              bleach, UV
              fading, and
              the abrasion
              from KC seasonal
              soil tracked
              onto carpet
              from clay yards;
              polyester is
              softer and
              stain-resistant
              to oil-based
              spills due
              to its hydrophobic
              nature but
              crushes under
              foot traffic
              in high-use
              areas faster
              than nylon —
              appropriate
              for guest bedrooms
              and low-traffic
              rooms in KC
              homes; triexta
              combines polyester
              softness with
              improved resilience
              and is marketed
              as a middle-ground
              option for
              KC families
              with pets and
              children; wool
              is the premium
              natural option —
              durable, naturally
              soil-resistant,
              and hygroscopic,
              absorbing KC
              humidity without
              degrading —
              at a cost
              three to five
              times nylon;
              for KC main
              floor bedrooms
              and living
              areas with
              regular traffic,
              nylon with
              a face weight
              of thirty-five
              to forty ounces
              per square
              yard is the
              standard professional
              recommendation
              for durability
              over five to
              ten years of
              use. Pad and
              subfloor prep:
              carpet pad
              determines
              comfort and
              extends carpet
              life by absorbing
              impact rather
              than transmitting
              it through
              the carpet
              backing; a
              pad thicker
              than seven-sixteenths
              inch under
              Berber or
              loop-pile carpet
              causes the
              loops to flex
              and break at
              the backing —
              the pad thickness
              specification
              matters by
              carpet type;
              pad must always
              be replaced
              with carpet —
              reusing old
              pad under
              new carpet
              compresses
              the new carpet
              unevenly and
              voids most
              manufacturer
              warranties;
              over a KC
              concrete slab
              in a basement,
              a moisture-barrier
              pad is required —
              standard foam
              pad on concrete
              traps moisture
              vapor from
              the slab underneath
              and creates
              mold at the
              pad-concrete
              interface within
              one to two
              KC wet seasons;
              over a water-damaged
              wood subfloor,
              the subfloor
              must dry to
              below twelve
              percent moisture
              content, be
              treated with
              an antimicrobial
              if mold is
              present, and
              have any soft
              or delaminated
              sections replaced
              before carpet
              installation.
              A carpet installation
              website that
              explains KC
              fiber durability
              trade-offs for
              seasonal humidity
              and traffic,
              pad replacement
              as a non-optional
              step and moisture-barrier
              pad for KC
              basement slabs,
              and subfloor
              moisture and
              prep requirements
              earns the homeowner
              replacing carpet
              who wants to
              understand
              what determines
              whether the
              investment lasts.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before carpet installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Carpet fiber comparison — nylon vs. polyester vs. triexta, face weight for durability, KC soil and humidity resistance",
                  "Pad selection — thickness by carpet type, pad replacement with new carpet, moisture-barrier pad for KC basement slabs",
                  "Basement carpet — concrete slab moisture vapor, antimicrobial pad requirement, mold risk without moisture barrier",
                  "Subfloor prep — moisture content threshold, mold treatment, soft section replacement before installation",
                  "Carpet warranty — pad spec requirement, installation method, manufacturer vs. dealer warranty difference",
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
                What your carpet installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fiber guide section — nylon/polyester/triexta/wool trade-offs, face weight explanation, KC humidity and soil performance",
                  "Pad section — pad thickness by carpet type, always-replace rule, moisture-barrier pad for KC slabs",
                  "Basement section — concrete moisture vapor, pad selection, mold risk and antimicrobial treatment",
                  "Prep section — subfloor moisture threshold, replacement criteria, prior water damage treatment",
                  "Room guide section — fiber recommendation by room type and traffic level for KC homes",
                  "Quote form with rooms, current floor condition, basement or above-grade, pets or children, fiber preference",
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
                &ldquo;The basement section
                prevents the
                most expensive
                call-back we
                get. KC homeowners
                who want carpet
                in a finished
                basement sometimes
                want standard
                foam pad because
                it&apos;s softer —
                they don&apos;t know
                that the slab
                is moving moisture
                vapor upward
                year-round.
                After the section
                went up explaining
                that standard
                foam on concrete
                traps vapor
                and creates
                mold at the
                pad-slab interface
                within a KC
                wet season,
                customers stopped
                arguing about
                pad spec and
                started asking
                which moisture
                barrier was
                right for their
                basement. The
                fiber guide
                also converts
                budget shoppers —
                KC homeowners
                who understand
                that polyester
                crushes in
                a hallway in
                three years
                stop asking
                why the nylon
                recommendation
                costs more.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Huang, carpet installation and flooring contractor, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A carpet installation site with KC fiber guide, pad selection section,
                and quote form starts at $200. A full site with basement moisture
                protocol, subfloor prep guide, and room-by-room recommendations is
                $425–$750. One room installation covers the cost. No contracts, no monthly fees.
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
