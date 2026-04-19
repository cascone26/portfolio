import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Roof Coating Companies in Kansas City",
  description:
    "Custom websites for roof coating, elastomeric roof coating, and flat roof restoration companies in the Kansas City area. Show your silicone and acrylic coating systems, flat roof restoration process, and energy savings to win commercial and residential roof coating contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/roof-coating",
  },
};

export default function RoofCoatingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Roof Coating Companies in Kansas City",
    description: "Custom websites for roof coating and flat roof restoration companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Roof Coating Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Commercial building owners with aging flat or low-slope roofs want to know if coating is a viable alternative to full replacement, what silicone vs. acrylic coating means, and whether a coating warranty is real. A website that explains the restoration process and shows commercial results earns the inspection call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Roof Coating in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Roof Coating</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Roof coating customers are primarily
              commercial building owners —
              warehouse operators, retail
              property managers, church
              facility directors, industrial
              facility owners — facing
              the decision between
              a $50,000–$200,000+ full
              TPO or EPDM replacement
              and a coating restoration
              system that costs thirty
              to fifty percent less.
              The core education is
              candidacy: a roof coating
              is appropriate when the
              existing membrane is
              structurally sound
              but has surface
              deterioration, seam
              lifting, minor ponding,
              or reflectivity loss —
              a roof with wet insulation,
              structural deck damage,
              or widespread membrane
              failure is a replacement
              candidate, not a coating
              candidate. Coating types
              matter: silicone coatings
              are the current commercial
              standard for ponding
              water resistance — silicone
              does not absorb water,
              does not degrade under
              standing water the way
              acrylic coatings do.
              Acrylic elastomeric coatings
              are water-based, low-VOC,
              easier to apply, appropriate
              for metal roofs and
              roofs with good drainage,
              but they soften under
              standing water. Polyurethane
              coatings (base and topcoat
              systems) are used for
              high-traffic roof surfaces
              and where impact
              resistance is needed.
              Energy savings are a
              real secondary benefit:
              a white reflective
              coating on a dark
              TPO or modified bitumen
              surface in a KC summer
              measurably reduces
              cooling load. Warranty
              terms matter — a
              manufacturer-backed
              warranty on a coating
              system (Conklin, GE,
              Sherwin-Williams,
              Henry) provides real
              coverage. A roof coating
              website that explains
              candidacy assessment,
              coating types, warranty
              terms, and commercial
              case studies earns
              the facility manager
              who is trying to
              defer or eliminate
              a major capital expense.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What building owners research before choosing a roof coating company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Coating vs. replacement — when a roof is a coating candidate vs. when replacement is the only option",
                  "Silicone vs. acrylic — ponding water performance, UV resistance, recoatability, application conditions",
                  "Warranty terms — manufacturer-backed warranty, what it covers, how long, re-inspection requirements",
                  "Energy savings — cool roof reflectivity, estimated cooling load reduction, utility incentive programs",
                  "Commercial case studies — warehouse, retail, church, industrial — before and after photos and cost savings",
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
                What your roof coating website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Candidacy guide — what makes a roof coatable vs. needing replacement, inspection process, core sampling",
                  "Coating systems — silicone, acrylic, polyurethane — what each is best for, brand systems we install",
                  "Commercial gallery — warehouse, retail, industrial, church roofs before and after coating restoration",
                  "Warranty section — manufacturer-backed coverage terms, what is included, re-coat maintenance schedule",
                  "Energy savings — cool roof reflectivity data, cooling load reduction, potential utility incentives in KC",
                  "Quote form with roof type, square footage, roof age, current membrane, known problem areas, timeline",
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
                &ldquo;Commercial clients are comparing
                a $60,000 coating quote
                against a $180,000 replacement
                quote and they are skeptical —
                they want to know the coating
                is real, the warranty is real,
                and I know what I am doing.
                Without a website the conversation
                started from zero credibility.
                The site with our candidacy
                assessment process, our
                silicone system explanation,
                the manufacturer warranty
                terms, and our commercial
                project photos changed
                that completely. Clients
                arrive to the inspection
                already trusting the
                process. The close
                rate is completely
                different now.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Drummond, commercial roof coating specialist, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A roof coating site with candidacy
                guide, coating types, and quote form
                starts at $225. A full site with
                commercial gallery, warranty section,
                and energy savings page is $425–$850.
                One commercial coating job covers
                the cost several times over.
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
