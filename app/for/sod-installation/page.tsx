import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Sod Installation Companies in Kansas City",
  description:
    "Custom websites for sod installation, lawn installation, and sod laying companies in the Kansas City area. Show your KC clay soil prep requirements for sod establishment, cool-season vs. warm-season grass selection for KC summers, and watering schedule for sod rooting in KC heat to win sod installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/sod-installation",
  },
};

export default function SodInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Sod Installation Companies in Kansas City",
    description: "Custom websites for sod installation and lawn installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Sod Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether to choose tall fescue or zoysia for a KC lawn, why sod dies in the first summer if watering is wrong, and whether the clay soil needs amendment before sod is laid. A website that explains sod installation earns the call from the homeowner replacing a dead lawn after a KC drought and wanting to understand what determines whether new sod establishes or fails. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Sod Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Sod Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Sod installation
              customers are
              KC homeowners
              whose lawn
              has died from
              summer drought
              stress, grub
              damage, or
              disease, and
              who want to
              understand
              the grass species
              selection and
              establishment
              protocol that
              determines
              whether new
              sod roots and
              survives the
              Kansas City
              summer heat —
              where July
              and August
              temperatures
              regularly reach
              ninety-five
              to one hundred
              degrees Fahrenheit
              and the transition
              zone climate
              that sits on
              the boundary
              between warm-season
              and cool-season
              grass regions
              creates a selection
              decision that
              affects whether
              the lawn is
              green in July
              or dormant
              and brown;
              homeowners building
              a new home
              in KC who
              want to understand
              soil preparation
              requirements
              before sod
              is laid over
              the disturbed
              clay fill that
              KC builders
              leave after
              construction —
              a compacted,
              low-organic-matter
              substrate that
              fails sod without
              soil amendment
              and grading;
              or homeowners
              wanting to
              understand
              the watering
              schedule for
              new sod in
              KC summer heat
              and how long
              before the
              sod is established
              enough to
              reduce irrigation
              frequency.
              The central
              education is
              the KC transition
              zone as the
              climate variable
              that makes
              grass species
              selection non-obvious —
              Kansas City
              sits at the
              boundary of
              the cool-season
              and warm-season
              grass regions,
              and both tall
              fescue and
              zoysia are
              viable depending
              on the homeowner&apos;s
              priorities —
              KC clay soil
              preparation
              as the foundation
              prerequisite
              that determines
              whether roots
              can establish
              in the dense,
              low-permeability
              clay that
              comprises most
              KC residential
              lots, and
              the establishment
              watering protocol
              for the first
              twenty-one
              days that
              determines
              whether sod
              roots into
              the soil or
              desiccates
              before contact
              is made —
              three things
              that determine
              whether a homeowner
              understands
              why new sod
              dies in KC
              and what a
              professional
              installation
              does differently.
              KC grass species:
              tall fescue
              is the primary
              cool-season
              grass used
              in KC residential
              lawns — it
              tolerates KC
              winter cold,
              stays green
              ten to eleven
              months per
              year, and
              handles shade
              from KC tree
              cover; it
              goes dormant
              or dies in
              extended drought
              above ninety-five
              degrees without
              irrigation —
              a KC summer
              without watering
              will brown
              tall fescue
              by mid-July;
              zoysia is
              a warm-season
              grass that
              thrives in
              KC summer heat,
              has aggressive
              lateral growth
              that resists
              weeds, and
              requires less
              irrigation
              than tall fescue
              once established —
              the trade-off
              is that zoysia
              goes dormant
              brown from
              first frost
              through April,
              which some
              KC homeowners
              find unacceptable
              for five to
              six months;
              Bermuda grass
              is a warm-season
              alternative
              with similar
              properties
              to zoysia but
              less shade
              tolerance —
              not recommended
              for KC yards
              with tree
              cover; Kentucky
              bluegrass is
              used in blended
              mixes and
              produces a
              dense fine-blade
              lawn but is
              less heat-tolerant
              than tall fescue
              for KC summers.
              KC clay prep
              and establishment:
              KC residential
              lots consist
              largely of
              Grundy and
              Wabash soil
              series — heavy
              clay with
              plasticity
              index thirty
              to fifty and
              permeability
              under one inch
              per hour; before
              sod, the soil
              must be tilled
              to four to
              six inches,
              amended with
              compost or
              topsoil at
              three to four
              cubic yards
              per one thousand
              square feet
              to improve
              drainage and
              root penetration,
              and graded
              to drain away
              from the foundation
              at one inch
              per ten feet;
              new sod installed
              on compacted
              KC clay fill
              without amendment
              will fail
              to root past
              the sod mat
              level within
              two to three
              months; watering
              for the first
              three to four
              weeks is one
              to two inches
              daily — the
              soil must
              stay moist
              to the base
              of the sod
              mat to encourage
              root extension
              into the substrate;
              in KC July
              or August
              heat above
              ninety-five
              degrees, twice-daily
              watering may
              be required
              during the
              first two
              weeks after
              installation.
              A sod installation
              website that
              explains KC
              transition zone
              grass species
              trade-offs for
              summer heat
              and winter
              dormancy, KC
              clay prep and
              compost amendment
              before installation,
              and the watering
              schedule for
              sod rooting
              in KC summer
              heat earns
              the homeowner
              replacing a
              failed lawn
              who wants to
              understand
              what determines
              whether the
              new sod establishes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before sod installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC grass species — tall fescue (cool-season, stays green) vs. zoysia (warm-season, dormant in winter) for KC transition zone",
                  "Clay soil prep — tilling depth, compost amendment rate, grading away from foundation before sod",
                  "Watering schedule — 1-2 inches daily for first 3-4 weeks, twice-daily in KC summer above 95°F",
                  "New construction lots — compacted clay fill, amendment required, grade correction before sod fails",
                  "Sod establishment timeline — root contact in 10-14 days, reduce watering at 21+ days, first mow timing",
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
                What your sod installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Species section — tall fescue vs. zoysia KC trade-offs, Bermuda and KBG options, shade tolerance, dormancy calendar",
                  "Clay prep section — tilling depth, compost amendment rate, grading slope, compacted fill correction",
                  "Watering section — establishment schedule by week, KC summer heat adjustments, irrigation system recommendation",
                  "New construction section — post-build compaction, grade evaluation, amendment before sod for KC fill lots",
                  "Timing section — best installation months for KC (spring/fall), summer cautions, dormant sod options",
                  "Quote form with lawn sq ft, sun/shade, current lawn condition, irrigation present, new construction or replacement",
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
                &ldquo;The watering section
                prevents every
                summer failure
                call. KC homeowners
                who install
                sod in July
                think watering
                once a day
                in the evening
                is enough —
                they find out
                in week two
                when the sod
                turns yellow
                that it was
                drying out
                during the
                day in ninety-five
                degree heat.
                After the section
                went up explaining
                that KC summer
                sod needs
                twice-daily
                water in the
                first two
                weeks and
                that the soil
                must stay
                moist six
                inches down,
                customers started
                asking how
                to set up
                their irrigation
                controller
                before installation
                day. The clay
                prep section
                also stops
                the new construction
                failures —
                KC homeowners
                who just built
                and want sod
                over the fill
                dirt understand
                after the page
                why the amendment
                step is what
                determines
                whether the
                lawn survives
                the first summer.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Kowalski, sod installation and lawn services, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A sod installation site with KC species guide, clay prep section,
                and quote form starts at $200. A full site with watering schedule,
                new construction protocol, and timing guide is $425–$750. One average
                lawn installation covers the cost. No contracts, no monthly fees.
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
