import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Wood Fence Repair Companies in Kansas City",
  description:
    "Custom websites for wood fence repair, fence post replacement, and wood fence restoration companies in the Kansas City area. Show your KC clay soil frost heave on fence posts, cedar vs. pressure-treated post longevity in KC, and horizontal board failure patterns to win wood fence repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/wood-fence-repair",
  },
};

export default function WoodFenceRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Wood Fence Repair Companies in Kansas City",
    description: "Custom websites for wood fence repair and fence post replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Wood Fence Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a leaning fence post can be straightened and rebraced or whether the post has to come out and be reset, why the fence posts are rotting at the ground line when the boards above look fine, and whether cedar or pressure-treated posts last longer in KC soil. A website that explains wood fence repair earns the call from the homeowner whose fence is leaning after last winter. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Wood Fence Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Wood Fence Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Wood fence repair
              customers are KC
              homeowners whose
              fence posts are
              leaning, cracked
              at the ground line,
              or have rotted
              through at the
              soil contact zone
              while the boards
              above the ground
              still look sound —
              a pattern that
              indicates the post
              failed at the
              most vulnerable
              point, the transition
              between buried
              and exposed wood,
              where moisture
              is trapped by
              the soil contact
              and cannot dry;
              homeowners whose
              fence shifted or
              heaved after a
              KC winter — the
              thirty-inch KC
              frost line and
              fifty to fifty-five
              annual freeze-thaw
              cycles act on
              the clay soil
              surrounding the
              post and can
              push shallow-set
              posts upward out
              of the ground
              or tilt them
              as the freeze-thaw
              movement is uneven
              across the post;
              or homeowners
              who had a fence
              installed ten
              or more years
              ago and are
              seeing individual
              boards splitting,
              cupping, or showing
              gray weathering
              at the top rail
              while the posts
              remain sound.
              The central education
              is KC clay soil
              frost heave on
              fence posts, cedar
              versus pressure-treated
              post longevity
              in KC, and the
              post ground-line
              rot mechanism —
              three things that
              determine whether
              a homeowner understands
              why replacing
              the rotten posts
              is a different
              job than replacing
              the weathered
              boards, and why
              the post failure
              happened at seven
              years instead
              of fifteen. KC
              clay soil frost
              heave: fence posts
              set in KC clay
              soil without adequate
              depth or concrete
              footing are subject
              to frost heave —
              the clay expands
              as it freezes
              and contracts
              as it thaws,
              applying upward
              and lateral force
              on the post
              through fifty-plus
              freeze-thaw cycles
              per winter; a
              post set at
              twenty-four inches
              depth in KC
              clay — above
              the thirty-inch
              frost line —
              will be pushed
              upward over
              three to five
              winters; proper
              KC post depth
              is thirty-six
              to forty-two
              inches — below
              the frost line —
              with a concrete
              footing that
              anchors the
              post base and
              prevents frost
              jacking; leaning
              posts without
              rot and on
              a fence less
              than eight years
              old typically
              indicate frost
              heave from
              insufficient
              depth rather
              than rot failure.
              Cedar versus
              pressure-treated:
              cedar heartwood
              contains natural
              oils — thujaplicins —
              that resist fungal
              decay; in above-ground
              applications,
              cedar heartwood
              is approximately
              equivalent to
              pressure-treated
              pine for rot
              resistance; at
              the ground line
              and below grade,
              cedar heartwood
              durability in
              KC clay soil
              is seven to
              twelve years;
              pressure-treated
              pine at UC-4B
              ground contact
              rating is fifteen
              to twenty-five
              years in the
              same KC soil
              conditions; a
              fence contractor
              who installed
              cedar posts
              instead of pressure-treated
              UC-4B ground
              contact posts
              at a price-competitive
              bid has delivered
              a fence that
              will need post
              replacement in
              half the expected
              service time;
              the difference
              is not visible
              on the installed
              fence and is
              not disclosed
              unless the homeowner
              specifically
              asked. Ground-line
              rot mechanism:
              wood rot is
              caused by fungal
              decay — fungi
              require moisture
              above nineteen
              percent wood
              moisture content
              to activate;
              the ground-line
              zone of a fence
              post — the three
              to six inches
              above and below
              grade — is
              the location
              where the post
              is alternately
              wet from soil
              contact and
              dry from air
              exposure; the
              wet-dry cycling
              at the ground
              line prevents
              the wood from
              drying completely
              and maintains
              moisture content
              in the fungal
              activation range;
              the post above
              grade dries
              between rain
              events and
              stays below
              the fungal
              activation threshold;
              the post below
              grade in saturated
              clay stays
              continuously
              wet but is
              anaerobic — most
              wood-decay fungi
              require oxygen;
              the ground-line
              zone is the
              worst of both
              conditions —
              wet enough for
              fungal growth
              and oxygenated
              by air contact.
              A wood fence
              repair website
              that explains
              KC clay soil
              frost heave
              and proper post
              depth, cedar
              versus pressure-treated
              ground contact
              longevity, and
              the ground-line
              rot mechanism
              earns the homeowner
              whose seven-year
              fence is already
              losing posts.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before wood fence repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Frost heave — KC 30-inch frost line, 50-55 freeze-thaw cycles, post depth requirement below frost line to prevent heaving",
                  "Cedar vs. pressure-treated — thujaplicin decay resistance, UC-4B ground contact rating, 7-12 yr cedar vs. 15-25 yr PT in KC clay",
                  "Ground-line rot — wet-dry cycle at grade, moisture content in fungal activation range, why above-grade boards look fine",
                  "Post reset vs. replace — whether a leaning post can be rebraced or must come out and reset with correct footing depth",
                  "Board weathering — gray UV weathering vs. rot, cupping from uneven moisture, when boards need replacement vs. the posts",
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
                What your wood fence repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Frost heave section — KC frost line depth, proper post setting depth, concrete footing requirement, heave vs. rot diagnosis",
                  "Post material section — cedar heartwood durability, UC-4B vs. UC-4A pressure treatment, what to specify when replacing posts",
                  "Ground-line rot section — wet-dry cycle mechanism, why boards above grade last longer than posts, fungal decay requirements",
                  "Repair vs. replace — post reset and rebracing criteria, when the concrete footing is salvageable, full post pull-and-reset scope",
                  "Board repair section — cupping and splitting, end-grain sealing, UV gray weathering treatment vs. board replacement",
                  "Quote form with fence age, post material (cedar/PT/unknown), post condition, lean/heave/rot, board condition",
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
                &ldquo;The ground-line rot
                section changed
                how customers
                approached the
                repair conversation.
                KC homeowners
                with a seven or
                eight year old
                fence would call
                saying all the
                boards need to
                be replaced —
                the fence looks
                terrible. After
                the section went
                up explaining
                that the boards
                gray and weather
                from UV but stay
                structurally sound
                for fifteen-plus
                years while the
                posts fail at
                the ground line
                from moisture
                cycling, customers
                understood that
                the job was
                post replacement
                and that the
                boards could
                stay. That changed
                a fence replacement
                quote into a
                post repair quote
                for half the
                cost — customers
                appreciated that
                I told them
                they didn&apos;t need
                to replace the
                whole thing.
                Those customers
                call back when
                the boards finally
                do need work.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Tran, fence repair and installation, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A wood fence repair site with frost heave section, post material
                guide, and quote form starts at $200. A full site with ground-line
                rot mechanism, repair vs. replace criteria, and board weathering
                content is $425–$750. One post replacement job covers the cost. No
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
