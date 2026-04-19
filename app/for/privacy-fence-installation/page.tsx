import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Privacy Fence Installation Companies in Kansas City",
  description:
    "Custom websites for privacy fence installation, wood privacy fence, and vinyl privacy fence companies in the Kansas City area. Show your KC clay soil post depth requirements, wood vs. vinyl vs. composite privacy fence for KC conditions, and property line setback rules to win privacy fence installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/privacy-fence-installation",
  },
};

export default function PrivacyFenceInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Privacy Fence Installation Companies in Kansas City",
    description: "Custom websites for privacy fence installation and wood privacy fence companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Privacy Fence Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how deep fence posts need to go in Kansas City soil, whether they need a permit for a six-foot privacy fence, and whether vinyl is actually more durable than treated wood in KC weather. A website that explains privacy fence installation earns the call from the homeowner whose neighbor just started a construction project and who needs a fence this spring. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Privacy Fence Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Privacy Fence Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Privacy fence installation
              customers are KC homeowners
              adding a six-foot
              or eight-foot
              privacy fence
              along the rear
              or side yard
              property lines
              for privacy from
              neighboring homes,
              containment for
              children and
              pets, or screening
              of adjacent construction,
              commercial, or
              utility activity;
              homeowners whose
              existing wood
              privacy fence
              is leaning, has
              posts that rotted
              at ground level,
              or has boards
              that are splitting
              or pulling away
              from the rails —
              typical failure
              patterns in KC
              wood fences that
              are eight to
              fifteen years
              old; or homeowners
              who are comparing
              vinyl and wood
              privacy fence
              systems and want
              to understand
              the actual durability
              and maintenance
              differences before
              deciding. The
              central education
              is KC clay soil
              post depth for
              frost stability,
              pressure-treated
              post maintenance
              and service life
              versus vinyl,
              and KC municipal
              permit and setback
              requirements —
              three things that
              determine whether
              a homeowner understands
              why post depth
              is the most
              important installation
              variable and
              what the local
              permitting requirement
              is. KC clay post
              depth for frost
              stability: KC
              posts driven into
              clay soil are
              subject to frost
              heave — the
              same shrink-swell
              clay that moves
              patios moves
              fence posts;
              the frost line
              in KC is approximately
              thirty inches;
              a post must
              be set below
              the frost line
              to prevent heave —
              typical KC fence
              post holes are
              thirty-six to
              forty-two inches
              deep; concrete
              footings for
              fence posts should
              extend below
              the frost line
              with at least
              six to eight
              inches of concrete
              below the frost
              depth; the concrete
              should be crowned
              at grade to
              shed water away
              from the post —
              a flat or low
              concrete surface
              pools water
              against the
              post and is
              the primary driver
              of post base
              rot; posts set
              in clay without
              concrete can
              work in some
              conditions but
              the clay contact
              holds moisture
              against the
              post base in
              a similar pattern
              to the problem
              with direct concrete
              contact. Wood
              versus vinyl:
              pressure-treated
              pine posts in
              KC soil will
              last twelve to
              twenty years
              when set correctly
              — the post is
              rated for ground
              contact at UC4B
              treatment level
              and the preservative
              penetrates the
              end grain sufficiently
              to resist the
              KC soil moisture
              cycle; the above-ground
              pickets and
              rails are typically
              treated at a
              lower level and
              will begin to
              check, gray,
              and show surface
              degradation after
              five to seven
              KC weather cycles
              without staining
              or painting; vinyl
              privacy fence
              panels do not
              rot and require
              no painting but
              are susceptible
              to impact damage —
              a KC hail event
              or a tree branch
              can crack vinyl
              panels that a
              wood fence would
              deflect; vinyl
              is brittle below
              freezing and
              impact damage
              risk is elevated
              in KC winter
              conditions; composite
              fence systems
              use cellular
              PVC or wood-plastic
              composite pickets
              on aluminum posts
              — no rot, no
              painting, and
              better impact
              resistance than
              standard vinyl
              at a premium
              cost. KC permit
              and setback requirements:
              most KC metro
              municipalities
              require a permit
              for privacy fences
              over four feet
              in height; Johnson
              County and most
              KC Kansas municipalities
              require fences
              to be set back
              six inches to
              two feet from
              the property
              line — the specific
              setback depends
              on the municipality
              and the fence
              location relative
              to the front,
              side, and rear
              yard setbacks;
              HOA covenants
              in many KC metro
              subdivisions
              further restrict
              fence height
              and material —
              a homeowner must
              check both the
              municipal permit
              requirement and
              the HOA covenant
              before installation.
              A privacy fence
              installation website
              that explains
              KC clay soil
              post depth for
              frost stability,
              wood versus vinyl
              service life
              comparison, and
              KC permit and
              setback requirements
              earns the homeowner
              who wants to
              install a fence
              that lasts and
              is permitted
              correctly.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before privacy fence installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC post depth — 30-inch frost line, 36-42 inch post hole requirement, concrete footing below frost, water shedding crown",
                  "Wood post service life — UC4B ground contact treatment, 12-20 year range, post base rot from water pooling",
                  "Vinyl vs. wood — no-rot benefit vs. KC hail impact risk, brittleness below freezing, composite as premium alternative",
                  "KC permit requirements — height threshold, Johnson County and KCMO setback rules, HOA covenant restrictions",
                  "Post base rot pattern — moisture at grade, concrete contact water trapping, why old fences lean from post base failure",
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
                What your privacy fence installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Post depth section — KC frost line, hole depth requirement, concrete footing below frost, crowned grade detail",
                  "Material section — pressure-treated pine, vinyl, composite — KC-specific service life and failure mode for each",
                  "Permit section — height permit threshold, KC metro municipality setback variation, HOA covenant check step",
                  "Failure pattern section — how to diagnose whether existing fence failure is post base or panel problem",
                  "Post rot prevention section — concrete crown detail, post base connector as alternative, UC4B treatment rating",
                  "Quote form with fence height, yard linear footage, existing fence condition, material preference, HOA present",
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
                &ldquo;The permit section
                is what prevents
                the expensive
                calls after the
                fact. KC homeowners
                who don&apos;t know
                they need a permit
                install the fence
                and then get
                a notice from
                the city — now
                they need to
                either pull the
                permit retroactively
                or move the fence
                for the setback.
                After the section
                went up explaining
                the height threshold
                and the setback
                variation across
                KC metro municipalities,
                customers started
                asking about permits
                before they started
                the project instead
                of after. The
                post depth section
                also wins the
                bid comparison —
                when customers
                understand that
                a post set above
                the frost line
                will heave in
                three winters,
                the deeper hole
                and the higher
                price make sense
                together.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Brennan, privacy fence installation and repair, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A privacy fence installation site with KC post depth section, material
                comparison guide, and quote form starts at $200. A full site with
                permit requirements, frost heave mechanism, and post rot prevention
                content is $425–$750. One fence installation covers the cost. No
                contracts, no monthly fees.
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
