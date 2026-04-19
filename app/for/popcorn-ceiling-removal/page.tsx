import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Popcorn Ceiling Removal Companies in Kansas City",
  description:
    "Custom websites for popcorn ceiling removal, acoustic ceiling removal, and ceiling retexture companies in the Kansas City area. Show your asbestos testing process, wet scraping method, and KC pre-1978 home considerations to win popcorn ceiling removal contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/popcorn-ceiling-removal",
  },
};

export default function PopcornCeilingRemovalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Popcorn Ceiling Removal Companies in Kansas City",
    description: "Custom websites for popcorn ceiling removal and ceiling retexture companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Popcorn Ceiling Removal Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their popcorn ceiling contains asbestos, how to find out without tearing the house apart, and what happens to the ceiling surface after the texture is removed. A website that explains the testing and removal process earns the ceiling call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Popcorn Ceiling Removal in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Popcorn Ceiling Removal</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Popcorn ceiling removal
              customers are KC homeowners
              selling a house and
              know buyers won&apos;t
              overlook the dated
              texture, homeowners
              refinishing a room
              who want a smooth
              or knockdown ceiling
              that matches their
              renovation level,
              or homeowners who
              have noticed the
              texture yellowing
              or crumbling and
              want it gone. KC
              has a significant
              stock of pre-1978
              homes — Westwood,
              Fairway, Mission,
              Roeland Park, and
              Brookside neighborhoods
              include many ranch
              and split-level
              homes built when
              asbestos-containing
              textured coating
              was standard. The
              central education
              is asbestos risk
              assessment, testing
              before work begins,
              and what the ceiling
              looks like after
              removal. Asbestos
              risk: popcorn texture
              applied before
              1978 may contain
              chrysotile asbestos
              at 1–5% by weight —
              asbestos was phased
              out of residential
              textures after
              the 1977 EPA ban
              on spray-applied
              asbestos products;
              homes built before
              1978 should be
              tested before any
              scraping; homes
              built after 1980
              are very unlikely
              to contain asbestos
              texture (1978–1980
              is a transition
              period — some older
              product may have
              still been in inventory);
              painted popcorn
              is harder to test
              and harder to remove
              (paint seals the
              texture, requiring
              more wetting time).
              Testing process:
              a bulk sample is
              collected by a
              licensed asbestos
              inspector or a
              homeowner using
              an EPA-compliant
              sample kit —
              a 1-inch square
              of texture is removed
              while wet and
              sealed in a container;
              samples are sent
              to an accredited
              lab (NVLAP accredited)
              for PLM analysis;
              turnaround is typically
              3–5 business days;
              if asbestos is
              present above 1%,
              removal requires
              a licensed asbestos
              abatement contractor
              with containment,
              negative air,
              and state EPA notification
              in Missouri (MDNR)
              or Kansas (KDHE).
              Removal method:
              non-asbestos popcorn
              texture is removed
              by wetting the
              surface with a
              pump sprayer (1/4
              inch of water applied
              and allowed to
              soak 15 minutes)
              then scraping with
              a 6-inch or 10-inch
              drywall knife held
              nearly flat;
              over-wetting damages
              the drywall paper
              facing and causes
              bubbling — the
              goal is damp, not
              wet; plastic sheeting
              must cover the
              floor and all furniture
              before scraping;
              a coat of paint
              applied before
              1978 can seal
              the texture and
              require scored
              sections and longer
              wet soak time.
              After removal:
              the ceiling surface
              after scraping
              shows every imperfection —
              drywall seams,
              screw dimples, and
              surface tears from
              the scraping process;
              a skim coat of
              lightweight joint
              compound feathered
              across the entire
              ceiling is required
              before painting
              for a smooth finish;
              knockdown texture
              is an alternative —
              a thinned joint
              compound splattered
              with a hopper
              gun and then lightly
              flattened with
              a trowel creates
              a low-profile texture
              that hides surface
              irregularities
              better than smooth.
              A popcorn ceiling
              website that explains
              when to test, what
              asbestos testing
              actually involves,
              and what the ceiling
              needs after the
              texture is off
              earns the homeowner
              who has been afraid
              to start.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before popcorn ceiling removal
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Asbestos risk — pre-1978 homes in KC neighborhoods, 1977 EPA ban, painted vs. unpainted texture testing",
                  "Testing process — bulk sample collection, NVLAP accredited lab, PLM analysis, turnaround time",
                  "Abatement requirements — when licensed abatement is required, MO/KS state notification agencies",
                  "Removal method — wetting time, scraper angle, over-wetting drywall damage, plastic sheeting prep",
                  "After removal — skim coat requirement, knockdown texture as alternative, painting timeline",
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
                What your popcorn ceiling removal website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Asbestos risk section — pre-1978 KC homes, which neighborhoods are most affected, painted texture complication",
                  "Testing guide — how to collect a sample, NVLAP lab options, turnaround time, cost of testing",
                  "Abatement section — what happens if asbestos is found, licensed contractor requirement, state notification",
                  "Removal guide — wetting technique, scraper hold angle, over-wetting signs, prep and protection",
                  "After removal section — skim coat vs. knockdown texture, skim coat process, painting timeline",
                  "Quote form with room count, ceiling height, house built before/after 1978, desired finish type",
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
                &ldquo;The asbestos section was
                the thing every customer
                in Brookside and Fairway
                needed before they could
                move forward. They were frozen —
                they didn&apos;t know if they
                had a $400 job or a $4,000
                abatement. After the section
                went up explaining the 1977
                ban, the testing process,
                and what the lab result actually
                meant, customers could take
                the first step: get the sample.
                Two of them got tests that
                came back negative and called
                me the same day. The after-removal
                section also set expectations
                correctly — nobody was surprised
                when I told them the ceiling
                needed a skim coat after
                scraping. They&apos;d already read
                why.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Nakagawa, interior ceiling and drywall finishing, Mission, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A popcorn ceiling site with asbestos risk section,
                testing guide, and quote form starts at $200. A full
                site with abatement section, removal guide, and after-removal
                content is $425–$750. One multi-room ceiling job covers
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
