import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Asphalt Driveway Sealing Companies in Kansas City",
  description:
    "Custom websites for asphalt sealing, driveway crack filling, and pavement maintenance companies in the Kansas City area. Show your sealer types, crack repair process, and before-and-after results to win residential and commercial driveway sealing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/asphalt-driveway-sealing",
  },
};

export default function AsphaltDrivewaySealing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Asphalt Driveway Sealing Companies in Kansas City",
    description: "Custom websites for asphalt driveway sealing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Asphalt Sealing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know the difference between coal tar and asphalt-based sealers, whether their cracks need to be filled first, and how long to stay off the driveway after sealing. A website that explains the process and shows real results earns the quote call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Driveway Sealing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Asphalt Driveway Sealing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Asphalt driveway sealing customers
              are homeowners who want to
              protect a driveway investment
              and maintain curb appeal,
              and commercial property
              owners managing parking
              lot maintenance budgets.
              The most important education
              is crack filling before
              sealing: applying sealer
              over unfilled cracks does
              not stop water infiltration —
              water freezes in KC winters,
              expands the crack, and
              accelerates failure. Cracks
              under a quarter inch wide
              can be routed and filled
              with hot-pour or cold-pour
              crack filler before sealing.
              Alligator cracking (a web
              pattern indicating base
              failure) cannot be fixed
              by sealing alone and needs
              a different conversation
              about repair vs. replacement.
              The sealer type question
              matters: coal tar emulsion
              sealers (the traditional
              commercial standard) are
              more durable and chemical-
              resistant but have VOC
              and environmental concerns —
              some municipalities have
              restricted or banned them.
              Asphalt-based (petroleum
              emulsion) sealers are the
              compliant alternative,
              widely used for residential
              driveways, with similar
              appearance and adequate
              protection for most
              applications. Application
              method — squeegee vs. spray —
              affects coverage rate and
              uniformity; two coats is
              the professional standard.
              New asphalt needs to cure
              six months to a year before
              sealing — sealing too early
              traps oils and prevents
              proper hardening. Resealing
              frequency is every two
              to three years for
              residential driveways.
              Commercial properties
              add parking lot line
              striping after sealing.
              A driveway sealing website
              that explains crack filling,
              sealer types, and the
              new-asphalt waiting period
              earns the homeowner
              who is comparing
              low-ball quotes that
              skip prep work.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a driveway sealing company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Crack filling first — whether cracks need to be repaired before sealing, what happens if they are not",
                  "Sealer types — coal tar vs. asphalt-based, what the difference is, which is used and why",
                  "Application method — squeegee vs. spray, how many coats, cure time before driving on the surface",
                  "New asphalt timing — how long to wait before sealing a new driveway, what happens if sealed too early",
                  "Reseal frequency — how often a sealed driveway should be resealed, signs it is time to reseal",
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
                What your driveway sealing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Crack filling explained — routing and filling process, hot-pour vs. cold-pour, when alligator cracking means replacement",
                  "Sealer comparison — asphalt-based vs. coal tar, what we use and why, VOC and municipality compliance",
                  "Application process — surface cleaning, crack repair, two-coat squeegee application, cure time",
                  "New asphalt guide — curing period before sealing, what to look for, why waiting protects the investment",
                  "Commercial services — parking lot sealing, line striping, maintenance programs, property manager scheduling",
                  "Quote form with driveway size, condition, last seal date, crack count, commercial or residential",
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
                &ldquo;The cheap guys in KC skip
                crack filling entirely —
                they just spray sealer
                over everything and call
                it done. Customers do not
                know the difference until
                the cracks come back
                worse the next spring.
                The website explaining
                our crack fill process
                and why it matters
                meant customers could
                see what they were
                actually paying for.
                We stopped losing
                bids to guys who
                skip the prep —
                customers who read
                our site understand
                why the price is
                higher and book
                us anyway.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Vasquez, pavement maintenance specialist, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A driveway sealing site with
                crack fill explanation, process
                overview, and quote form starts
                at $200. A full site with sealer
                comparison, new asphalt guide,
                and commercial section is
                $425–$750. One commercial
                parking lot sealing job covers
                the cost. No contracts, no
                monthly fees.
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
