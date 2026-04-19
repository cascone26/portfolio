import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Lead Paint Testing Companies in Kansas City",
  description:
    "Custom websites for lead paint testing, lead paint inspection, and lead hazard assessment companies in the Kansas City area. Show your KC pre-1978 housing stock lead risk, EPA RRP rule for contractors doing renovation work, and XRF testing vs. paint chip sampling to win lead paint testing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/lead-paint-testing",
  },
};

export default function LeadPaintTestingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Lead Paint Testing Companies in Kansas City",
    description: "Custom websites for lead paint testing and lead hazard assessment companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Lead Paint Testing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their pre-1978 home has lead paint, whether they need testing before starting a renovation, and what the difference is between a lead inspection and a risk assessment. A website that explains lead paint testing earns the call from the homeowner buying an older Brookside or Waldo home who wants to know what they&apos;re getting into. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Lead Paint Testing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Lead Paint Testing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Lead paint testing
              customers are KC homeowners
              purchasing or
              renovating a home
              built before 1978 —
              the year the
              Consumer Product
              Safety Commission
              banned residential
              use of lead-based
              paint; buyers
              of older KC
              homes in neighborhoods
              like Brookside,
              Waldo, Hyde Park,
              Westport, and
              Northeast Kansas
              City where the
              majority of the
              housing stock
              was built before
              1978 and may
              contain lead
              paint in multiple
              layers of the
              existing finish;
              homeowners whose
              contractor told
              them that EPA
              Renovation, Repair,
              and Painting Rule —
              RRP — requires
              lead-safe work
              practices if
              the work disturbs
              painted surfaces
              in a pre-1978
              home, and who
              want to test
              first to determine
              whether the specific
              surfaces being
              disturbed contain
              lead; or parents
              whose children
              were found to
              have elevated
              blood lead levels
              and whose pediatrician
              recommended a
              lead hazard assessment
              of the home
              to identify the
              source. The central
              education is
              KC pre-1978 housing
              stock as a lead
              paint prevalence
              context, the
              difference between
              XRF testing and
              paint chip sampling
              as the two testing
              methods, and
              the EPA RRP
              rule as the
              regulatory driver
              that makes testing
              relevant to renovation
              contractors and
              homeowners —
              three things that
              determine whether
              a homeowner understands
              what lead paint
              testing is, what
              it finds, and
              when they need
              it. KC pre-1978
              housing prevalence:
              Kansas City proper
              and the inner-ring
              suburbs — Overland
              Park east of
              Metcalf, Prairie
              Village, Mission,
              Roeland Park,
              and Fairway —
              have significant
              concentrations
              of housing built
              between 1920
              and 1978; homes
              built before
              1940 have the
              highest probability
              of containing
              lead-based paint
              on interior trim,
              window sills,
              doors, and exterior
              surfaces; homes
              built between
              1940 and 1978
              have lower but
              still elevated
              prevalence as
              lead was the
              dominant pigment
              for oil-based
              paints used on
              high-wear surfaces
              like window sashes,
              door frames,
              and baseboards;
              intact lead paint
              that is not
              disturbed or
              deteriorating
              is not an immediate
              hazard — the
              hazard is created
              when the paint
              is disturbed
              through sanding,
              cutting, abrasion,
              or deterioration
              that generates
              lead dust or
              chips. XRF versus
              paint chip sampling:
              X-ray fluorescence
              testing uses
              a handheld device
              to measure the
              lead content
              of painted surfaces
              non-destructively —
              the inspector
              holds the device
              against the
              painted surface
              and receives
              a reading in
              milligrams per
              square centimeter
              within seconds;
              XRF testing identifies
              lead in all
              layers of the
              paint system
              simultaneously
              without removing
              material; paint
              chip sampling
              involves removing
              a small sample
              of paint down
              to bare substrate
              and sending
              it to a laboratory
              for atomic absorption
              analysis; chip
              sampling is
              less expensive
              per test but
              destroys a small
              area of the
              painted surface
              and is less
              comprehensive
              than XRF for
              identifying lead
              at specific locations
              throughout the
              home; EPA recognizes
              both methods
              for lead inspections
              and risk assessments.
              EPA RRP rule:
              the Renovation,
              Repair, and Painting
              Rule requires
              contractors to
              use lead-safe
              work practices
              when working
              on surfaces in
              pre-1978 homes —
              including proper
              containment, HEPA
              vacuuming, and
              wet wiping of
              work areas —
              unless a test
              by a certified
              inspector confirms
              the specific
              surfaces being
              disturbed do
              not contain
              lead; a homeowner
              who tests the
              surfaces before
              the renovation
              and receives
              a negative result
              can allow the
              contractor to
              use standard
              work practices;
              a lead inspection
              report from a
              certified inspector
              also protects
              the contractor
              from liability
              for lead dust
              exposure during
              the work. A
              lead paint testing
              website that
              explains KC pre-1978
              housing stock
              prevalence, XRF
              versus chip sampling
              methods, and
              EPA RRP rule
              as the renovation
              driver earns
              the homeowner
              buying an older
              KC neighborhood
              home or planning
              a renovation
              who wants to
              know what testing
              is, when it
              is required,
              and what it
              costs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before lead paint testing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC pre-1978 stock — Brookside, Waldo, Hyde Park, Northeast KC concentration, pre-1940 highest prevalence surfaces",
                  "XRF vs. chip sampling — non-destructive measurement, all layers simultaneously, lab analysis alternative",
                  "EPA RRP rule — contractor lead-safe work practice requirement, testing exemption for confirmed negative surfaces",
                  "Intact vs. disturbed lead — when intact paint is not a hazard, what creates lead dust and chip hazard",
                  "Lead inspection vs. risk assessment — what each covers, when each is appropriate, certified inspector requirement",
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
                What your lead paint testing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC housing stock section — pre-1978 neighborhood map, highest-risk surfaces by home age, intact vs. disturbed hazard",
                  "Testing methods section — XRF device operation, chip sampling process, cost and comprehensiveness comparison",
                  "RRP rule section — what the rule requires, when testing exempts contractor from lead-safe practices, liability protection",
                  "Lead inspection section — what a certified inspection covers, report format, how to use results for renovation planning",
                  "Risk assessment section — clearance testing after abatement, blood lead level follow-up, hazard source identification",
                  "Quote form with home age, renovation scope, surfaces to be disturbed, children in home, prior testing",
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
                &ldquo;The RRP section
                is what gets
                the contractor
                referrals. KC
                renovation contractors
                who are doing
                window replacements,
                kitchen remodels,
                and trim painting
                in pre-1978 homes
                are supposed to
                use lead-safe
                work practices —
                but many of them
                tell their customers
                to get a lead
                test first so
                they can proceed
                without the extra
                containment cost
                if the surfaces
                are negative.
                After the section
                went up explaining
                what the RRP
                rule requires
                and how a certified
                inspection report
                exempts specific
                surfaces, contractors
                started sending
                me their customers
                before every
                pre-1978 renovation
                job in Brookside
                and Waldo. The
                homeowner call
                volume from buyers
                purchasing older
                homes also increased —
                that buyer wants
                a full inspection
                before the sale
                closes.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Chambers, lead paint inspection and risk assessment, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A lead paint testing site with KC pre-1978 housing section, XRF vs.
                chip sampling guide, and quote form starts at $200. A full site with
                EPA RRP rule context, inspection vs. risk assessment, and contractor
                referral content is $425–$750. One inspection job covers the cost.
                No contracts, no monthly fees.
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
