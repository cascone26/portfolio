import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Roof Moss Removal Companies in Kansas City",
  description:
    "Custom websites for roof moss removal, roof algae treatment, and roof cleaning companies in the Kansas City area. Show your KC north-facing shingle moss growth pattern, zinc sulfate vs. copper treatment for KC moss, and moss root damage to shingle tabs to win roof moss removal contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/roof-moss-removal",
  },
};

export default function RoofMossRemovalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Roof Moss Removal Companies in Kansas City",
    description: "Custom websites for roof moss removal and roof algae treatment companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Roof Moss Removal Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether the green growth on their roof is moss or algae, whether pressure washing will damage the shingles, and whether moss is actually hurting the roof or just looks bad. A website that explains roof moss removal earns the call from the homeowner whose north-facing roof is covered in green every spring. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Roof Moss Removal in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Roof Moss Removal</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Roof moss removal
              customers are KC homeowners
              whose north-facing
              or shade-covered
              roof sections
              have developed
              visible moss growth —
              the green to
              dark-green cushion-like
              plant that establishes
              on asphalt shingles
              in areas of
              sustained moisture
              and limited direct
              sunlight; homeowners
              whose inspector
              or roofer noted
              moss or algae
              growth on the
              roof and indicated
              it should be
              treated before
              the next roof
              replacement estimate;
              or homeowners
              who noticed green
              staining running
              down from the
              roof onto the
              fascia, gutters,
              or siding — a
              sign that moss
              or algae is
              releasing spores
              or pigment that
              travels with
              water flow. The
              central education
              is why moss
              grows on KC
              north-facing roofs
              specifically,
              how moss root
              rhizoids damage
              shingle granules,
              and the correct
              moss removal
              and prevention
              treatment for
              KC conditions —
              three things that
              determine whether
              a homeowner understands
              that moss is
              an active shingle
              damage mechanism
              and not just
              an aesthetic
              issue. KC north-facing
              moss pattern:
              moss requires
              sustained moisture
              and shade to
              establish and
              grow — it cannot
              survive the direct
              UV exposure and
              rapid drying
              that south-facing
              KC roofs experience
              in summer; north-facing
              roof sections
              in KC receive
              limited direct
              sunlight from
              October through
              March and may
              stay damp for
              twenty-four to
              forty-eight hours
              after rain during
              the shoulder
              seasons — sufficient
              moisture for
              moss establishment;
              homes with mature
              tree canopy overhanging
              the roof — common
              in KC&apos;s older
              suburbs of Prairie
              Village, Mission
              Hills, and Westwood —
              see moss establishment
              on any pitch
              under continuous
              leaf shade regardless
              of compass orientation;
              algae — black
              or dark green
              streaking — is
              a different organism
              and is more common
              on south-facing
              sections where
              the limestone-fed
              limestone dust
              on asphalt shingles
              feeds the algae
              growth; moss
              and algae require
              different treatment
              products and
              approaches. Moss
              rhizoid damage:
              moss attaches
              to the shingle
              surface through
              rhizoids — root-like
              structures that
              penetrate the
              shingle surface
              between granules
              and anchor the
              moss mat to
              the asphalt layer;
              the rhizoids
              physically lift
              granules from
              the shingle face
              as the moss
              mat expands and
              contracts with
              moisture and
              drying; granule
              loss accelerates
              UV exposure to
              the asphalt beneath —
              the granules
              are the UV
              protection layer
              for asphalt shingles;
              a shingle with
              moss-induced granule
              loss ages at
              an accelerated
              rate in that
              location; at
              the shingle tab
              edges, the moss
              mat holds moisture
              against the
              edge and drives
              moisture under
              the overlapping
              tab — the same
              mechanism as
              ice dam water
              backup. Treatment
              approach for KC:
              pressure washing
              moss from an
              asphalt shingle
              roof further
              accelerates granule
              loss — the force
              required to remove
              the attached
              moss mat removes
              granules with
              it; the correct
              approach is
              a chemical treatment —
              zinc sulfate
              solution applied
              to the dry shingle
              surface kills
              the moss without
              mechanical granule
              loss; zinc strips
              installed at
              the roof ridge
              release zinc
              sulfate with
              each rain event
              and prevent
              re-establishment
              for five to
              ten years; copper
              sulfate solution
              is more aggressive
              and more effective
              on heavy moss
              but can cause
              staining on
              metal gutters
              and downspouts
              and requires
              care in application
              near planted areas;
              dead moss releases
              from the shingle
              surface over
              one to three
              months after
              treatment as
              it dries and
              is carried off
              by rain and
              wind — no mechanical
              removal is required.
              A roof moss removal
              website that
              explains KC north-facing
              moss establishment,
              rhizoid granule
              damage mechanism,
              and zinc sulfate
              treatment versus
              pressure washing
              earns the homeowner
              who can see
              the green on
              the north roof
              and wants to
              understand whether
              it is hurting
              the shingles.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before roof moss removal
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC north-facing pattern — limited winter sun, 24-48 hour damp after rain, shade from mature tree canopy",
                  "Moss vs. algae — moss is cushion-like green plant, algae is dark streak, different treatment products",
                  "Rhizoid granule damage — moss root penetration between granules, lifting and loss, accelerated asphalt UV exposure",
                  "Pressure washing risk — granule removal from mechanical force, why soft wash chemical treatment is correct",
                  "Zinc sulfate prevention — ridge strip release with rain, 5-10 year re-establishment prevention, copper alternative",
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
                What your roof moss removal website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Growth pattern section — KC north-facing shingles, shade canopy, moisture dwell time vs. south-facing",
                  "Damage section — rhizoid granule mechanism, tab edge moisture retention, how moss ages shingles",
                  "Moss vs. algae section — identification guide, treatment difference, streaking vs. mat growth",
                  "Treatment section — zinc sulfate soft wash, dead moss release timeline, copper option and plant precautions",
                  "Prevention section — ridge zinc strips, how they work with rain, KC re-establishment interval",
                  "Quote form with roof pitch, north-facing coverage, shade present, algae or moss, pressure wash history",
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
                &ldquo;The pressure washing
                section is what
                gets customers
                to call me instead
                of renting a pressure
                washer. KC homeowners
                in older neighborhoods
                with tree canopy —
                Prairie Village,
                Mission Hills,
                Westwood — see
                green on the
                north roof and
                assume pressure
                washing is the
                fix. After the
                section went up
                explaining that
                pressure washing
                removes granules
                and the correct
                treatment is zinc
                sulfate soft wash,
                customers stopped
                trying to DIY
                it and started
                calling. The
                rhizoid damage
                section also helped —
                once customers
                understood that
                moss roots are
                physically lifting
                granules off
                the shingle and
                that granule loss
                accelerates the
                replacement timeline,
                the treatment
                cost made sense
                relative to early
                roof replacement.
                That&apos;s the conversation
                that closes the
                job.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Callahan, roof moss removal and soft wash, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A roof moss removal site with KC north-facing growth section, rhizoid
                damage guide, and quote form starts at $200. A full site with zinc
                sulfate treatment process, prevention strips, and moss vs. algae
                identification content is $425–$750. One moss treatment job covers
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
