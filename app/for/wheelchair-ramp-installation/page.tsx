import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Wheelchair Ramp Installation Companies in Kansas City",
  description:
    "Custom websites for wheelchair ramp, accessibility ramp, and modular ramp companies in the Kansas City area. Show your aluminum modular systems, ADA slope requirements, and residential accessibility solutions to win ramp installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/wheelchair-ramp-installation",
  },
};

export default function WheelchairRampInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Wheelchair Ramp Installation Companies in Kansas City",
    description: "Custom websites for wheelchair ramp installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Wheelchair Ramp Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Families making a home accessible for a wheelchair user or recovering surgery patient want to know how much ramp length they need, whether modular ramps can be removed when no longer needed, and what the installation timeline looks like. A website that explains the options and shows real installations earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Accessibility Ramps in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Wheelchair Ramp Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Wheelchair ramp customers are
              families with a member who
              has a permanent disability,
              homeowners preparing for
              a post-surgical recovery
              period, or adult children
              making a parent&apos;s home
              accessible as mobility
              declines. The decision
              is driven by urgency —
              a hospital discharge date
              or a fall that has
              already happened — and
              the primary questions
              are how much ramp,
              how quickly, and
              whether it is permanent.
              The slope requirement
              drives everything:
              ADA guidelines specify
              a 1:12 rise-to-run ratio
              — one inch of rise requires
              twelve inches of ramp
              length — so a twenty-four
              inch step height requires
              a twenty-four-foot ramp
              run. This surprises many
              families who expected
              a six-foot ramp to cover
              a two-foot rise. The
              modular aluminum ramp
              is the dominant residential
              solution: aluminum sections
              (EZ-Access, Prairie View,
              National Ramp, Amramp
              are the major manufacturers)
              bolt together without
              permanent attachment
              to the structure,
              can be configured
              as straight runs,
              switchbacks, or
              L-shapes to fit
              constrained spaces,
              and can be fully
              removed when no
              longer needed —
              the system can
              even be sold back
              or rented. Wooden
              ramps are built-in,
              lower cost if lumber
              prices are favorable,
              but permanent and
              require ongoing
              maintenance. Rental
              programs are available
              for temporary needs
              (post-surgical recovery
              of six to twelve months).
              Vertical platform lifts
              are an alternative where
              yard space does not
              allow a ramp run. A
              wheelchair ramp website
              that explains the
              slope calculation,
              shows modular vs.
              wood options, and
              offers emergency
              fast-install booking
              earns families who
              need a solution
              this week.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What families research before installing a wheelchair ramp
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "How much ramp — the 1:12 ADA slope rule, calculating ramp length needed for a specific rise height",
                  "Modular vs. permanent — aluminum modular ramps that can be removed vs. built wood ramps",
                  "Rental vs. purchase — when renting makes sense, what happens when the ramp is no longer needed",
                  "Installation timeline — how quickly a ramp can be installed, same-week or next-day availability",
                  "Platform lifts — when there is not enough yard for a ramp run, vertical platform lift as an alternative",
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
                What your wheelchair ramp website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Slope calculator — simple tool or explanation of the 1:12 rule, how to estimate ramp length needed",
                  "Modular aluminum ramps — configuration options (straight, L-shape, switchback), brands, removable design",
                  "Rental program — how ramp rental works, monthly cost, pickup and return process, who it is right for",
                  "Wood ramps — when a built-in ramp makes more sense, construction timeline, material comparison",
                  "Platform lifts — vertical lifts for tight spaces, indoor stair lifts, what each application requires",
                  "Quote form with rise height, doorway location, entry type, timeline urgency, rental or purchase",
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
                &ldquo;Most of my calls come from
                families with a parent being
                discharged from the hospital
                and they need a ramp in three
                days. They are stressed and
                just want to know it can
                be done. Without a website
                they found me through a
                referral and still had a
                hundred questions about
                length, cost, and whether
                the ramp could come out
                later. The site with
                the slope explanation,
                the modular system
                photos, and the rental
                option meant families
                called already knowing
                it would work and
                ready to book.
                Emergency installs
                are our best margin jobs.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Bergman, accessibility ramp installer, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A wheelchair ramp site with slope
                guide, modular system options, and
                quote form starts at $200. A full
                site with rental program, platform
                lift section, and configuration
                gallery is $425–$750. One modular
                ramp installation covers the cost.
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
