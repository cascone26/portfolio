import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Fence Post Repair Companies in Kansas City",
  description:
    "Custom websites for fence post repair, leaning fence post repair, and fence post replacement companies in the Kansas City area. Show your KC clay soil frost heave on shallow posts, concrete footing vs. gravel drainage at post base, and post base rot mechanism at grade line to win fence post repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/fence-post-repair",
  },
};

export default function FencePostRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Fence Post Repair Companies in Kansas City",
    description: "Custom websites for fence post repair and leaning fence post replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Fence Post Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a leaning fence post can be straightened and re-set or whether it has to come out and start over, why the post that leaned started at a corner or gate rather than in the middle of a run, and whether the rest of the posts will follow. A website that explains fence post repair earns the call before one leaning post becomes a fence replacement. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Fence Post Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Fence Post Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Fence post repair
              customers are KC homeowners
              who see a fence post
              leaning out of plumb —
              typically at a corner,
              gate, or end post
              where lateral load
              is concentrated —
              after a series of
              KC winter freeze-thaw
              cycles or after a
              heavy summer storm;
              homeowners whose
              fence contractor
              set posts at twenty-four
              inches or less —
              the minimum for warm
              climates — and are
              now seeing frost heave
              push posts upward
              in KC's thirty-inch
              frost line zone;
              or homeowners who
              see soft, discolored
              wood at the grade
              line of a post that
              is still vertical
              but flexes at the
              base — an early rot
              indicator that the
              post will eventually
              fail. The central
              education is KC clay
              soil frost heave
              on shallow posts,
              concrete footing
              versus gravel drainage
              at the post base,
              and the grade-line
              rot mechanism —
              three things that
              determine whether
              a homeowner understands
              why KC fences fail
              at the post and not
              the board, and what
              a correct repair
              looks like. KC clay
              frost heave: KC clay
              is expansive when
              saturated and cycles
              through freeze-thaw
              fifty to fifty-five
              times per winter;
              saturated clay expands
              approximately nine
              percent by volume
              when it freezes;
              a post set at twenty-four
              inches in saturated
              KC clay with a frost
              depth of thirty inches
              is in the active
              frost zone — the
              frozen clay grips
              the post and lifts
              it as it expands;
              after three to five
              winter cycles, the
              post has been lifted
              incrementally and
              the footing or backfill
              no longer supports
              it at the correct
              depth; corner and
              gate posts fail
              first because they
              carry lateral load
              from the fence run —
              when the post lifts,
              the lateral load
              tips it; line posts
              in a run stabilize
              each other and lean
              more slowly. Concrete
              versus gravel: standard
              practice is to set
              posts in concrete
              — the concrete is
              poured around the
              post in the hole;
              in KC clay, solid
              concrete around the
              post below grade
              holds water at the
              wood-to-concrete
              interface; the wood
              inside the concrete
              cannot drain or dry;
              grade-line rot begins
              where the post emerges
              from the concrete
              top — wood below
              is sealed by concrete
              and rots from trapped
              moisture; gravel
              backfill at the post
              base allows drainage
              and air circulation
              but provides less
              lateral stability
              than concrete; the
              correct KC approach
              for wood posts is
              concrete to within
              six inches of grade
              then gravel or soil
              to the surface, breaking
              the sealed moisture
              interface; pressure-treated
              posts rated UC-4B
              are required for
              KC in-ground contact.
              Grade-line rot: the
              transition between
              the below-grade environment
              and above-grade environment
              is the highest-moisture
              zone for a fence
              post; below grade
              the wood is anaerobic
              — fungi cannot grow
              without oxygen; above
              grade the wood dries;
              at grade the wood
              wets and dries with
              each rain and dew
              cycle, reaches nineteen
              percent moisture
              content repeatedly,
              and provides exactly
              the wet-dry cycle
              that accelerates
              fungal decay; a
              post that is soft
              at the grade line
              and firm above and
              below is in early
              grade-line rot —
              it will fail at
              that point when
              loaded laterally.
              A fence post repair
              website that explains
              KC clay frost heave
              and thirty-inch frost
              line, concrete footing
              moisture interface
              and grade-line rot
              connection, and how
              to identify a post
              in early failure
              before it tips earns
              the homeowner who
              wants the right repair
              and not a repeat
              of the same failure.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before fence post repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC frost heave — 30-inch frost line, 50-55 freeze-thaw cycles, clay volumetric expansion lifting shallow posts",
                  "Post depth requirement — 24-inch minimum vs. 36-42 inch KC frost line correct depth, corner and gate post loading",
                  "Concrete vs. gravel backfill — moisture interface at concrete top, grade-line rot mechanism, drainage backfill option",
                  "Grade-line rot — wet-dry cycling at grade, 19% moisture threshold, post soft at grade but firm above and below",
                  "Straighten vs. replace — when a leaning post can be re-set vs. when rot at grade requires full replacement",
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
                What your fence post repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Frost heave section — KC 30-inch frost depth, clay expansion coefficient, post lifting mechanism over 3-5 winters",
                  "Post depth guide — correct KC depth by post type (line vs. corner vs. gate), why 24-inch fails in KC",
                  "Backfill section — concrete moisture interface at wood, grade-line rot acceleration, correct backfill transition",
                  "Rot identification — how to probe for grade-line soft spot, early vs. late failure, what can be re-set vs. replaced",
                  "Materials section — UC-4B pressure-treated, steel post options, metal post base hardware for above-grade setups",
                  "Quote form with post material, fence age, post depth estimate, number leaning, corner/gate vs. line post, rot visible",
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
                &ldquo;The grade-line rot
                section is what gets
                customers to approve
                full post replacement
                instead of just re-setting.
                KC homeowners with
                a leaning corner
                post assume the
                post can be pushed
                back in and staked
                in place. After the
                section went up
                explaining that
                posts soft at the
                grade line are in
                active fungal decay
                and that the structural
                strength at the
                critical load point
                is already compromised,
                customers started
                agreeing to replacement
                on the failed posts
                rather than asking
                for a brace. The
                frost heave section
                also helps — once
                KC homeowners understand
                that twenty-four-inch
                posts are being
                lifted by thirty
                inches of frozen
                clay every winter,
                they stop blaming
                the installer and
                start asking for
                the correct depth.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Whitmore, fence repair and installation, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A fence post repair site with frost heave section, grade-line rot
                guide, and quote form starts at $200. A full site with post depth
                requirements, backfill comparison, and material selection content
                is $425–$750. One post repair job covers the cost. No contracts,
                no monthly fees.
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
