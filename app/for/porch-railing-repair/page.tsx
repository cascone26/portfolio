import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Porch Railing Repair Companies in Kansas City",
  description:
    "Custom websites for porch railing repair, wood porch railing replacement, and exterior railing companies in the Kansas City area. Show your KC wood post base rot at concrete contact, code height and baluster spacing requirements, and wood vs. composite vs. aluminum railing options to win porch railing repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/porch-railing-repair",
  },
};

export default function PorchRailingRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Porch Railing Repair Companies in Kansas City",
    description: "Custom websites for porch railing repair and exterior railing replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Porch Railing Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their wobbly porch railing is a code violation, whether the rot at the post base means the whole railing needs to come out, and whether composite railing is actually worth the premium over wood. A website that explains porch railing repair earns the call from the homeowner whose home inspector flagged the railing as a fall hazard. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Porch Railing Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Porch Railing Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Porch railing repair
              customers are KC homeowners
              whose porch railing —
              on a front porch,
              deck, or elevated
              landing — is
              wobbly, has posts
              with soft wood
              at the base
              where the post
              contacts the
              porch floor or
              concrete, or
              whose home inspector
              flagged the railing
              as inadequate
              for height or
              baluster spacing
              requirements in
              the inspection
              report; homeowners
              who want to
              replace an existing
              wood railing
              and want to understand
              the material
              options — pressure-treated
              pine, cedar,
              composite, aluminum —
              and the maintenance
              requirements and
              lifespan differences
              before choosing;
              or homeowners
              whose porch railing
              was damaged in
              a storm or by
              a vehicle and
              needs a section
              replacement that
              matches the existing
              style. The central
              education is
              KC wood post
              base rot from
              moisture accumulation
              at the post-to-floor
              joint, building
              code railing height
              and baluster spacing
              requirements, and
              the maintenance
              profile difference
              between wood and
              no-maintenance
              railing materials —
              three things that
              determine whether
              a homeowner understands
              why the railing
              failed and what
              the durable replacement
              option is. KC
              wood post base
              rot: porch posts
              on KC homes
              are most commonly
              pressure-treated
              pine — a treatment
              level rated for
              ground contact
              (UC4B) or above-ground
              contact (UC3B)
              depending on
              the original
              installation;
              the post-to-floor
              joint is the
              highest moisture
              risk point —
              rain splash,
              snow accumulation,
              and surface drainage
              pool water against
              the post base;
              when the post
              is set directly
              on concrete —
              as is common
              in older KC
              porch construction —
              water is trapped
              between the post
              and the concrete
              in a capillary
              gap that never
              fully dries;
              even UC4B pressure-treated
              pine will begin
              to rot at this
              joint within
              ten to twenty
              years under
              persistent moisture
              contact; the
              correct installation
              for a replacement
              post uses a
              post base connector
              that elevates
              the post one
              inch above the
              porch surface,
              allowing the
              joint to dry
              after rain; KC
              freeze-thaw cycling
              accelerates concrete
              spalling at
              the post anchor
              bolt location
              if the anchor
              is not installed
              in sound concrete.
              Code height and
              baluster spacing:
              the International
              Residential Code
              requires a railing
              on any open
              side of a walking
              surface that
              is thirty inches
              or more above
              the floor or
              grade below;
              the minimum railing
              height is thirty-six
              inches for surfaces
              less than thirty
              feet above grade
              and forty-two
              inches above
              that height;
              balusters must
              be spaced so
              that a four-inch
              sphere cannot
              pass between
              them — the standard
              that prevents
              young children
              from getting
              their head through;
              many KC homes
              built before
              1985 have railings
              that do not
              meet these requirements —
              particularly the
              baluster spacing
              on older Victorian
              and craftsman-style
              porches where
              wide spindle
              spacing was common;
              a home inspection
              flagging railing
              height or spacing
              is a code compliance
              finding that
              will appear in
              the buyer&apos;s inspection
              report and may
              require repair
              before the sale
              closes. Wood
              versus no-maintenance
              materials: pressure-treated
              pine railing
              requires painting
              or staining every
              three to five
              years in KC
              weather to maintain
              appearance and
              prevent surface
              checking; cedar
              railing has better
              natural rot resistance
              but is more
              expensive and
              still requires
              a finish for
              long-term appearance;
              composite railing
              systems — PVC
              or composite
              balusters and
              rails — have
              no painting requirement
              and are resistant
              to moisture and
              insect damage
              at a price point
              two to three
              times that of
              pressure-treated
              pine; aluminum
              powder-coat railing
              is the lowest
              maintenance option
              and is appropriate
              for contemporary-style
              porches. A porch
              railing repair
              website that
              explains KC post
              base moisture
              contact, code
              height and baluster
              spacing requirements,
              and no-maintenance
              material options
              earns the homeowner
              who wants to
              fix the railing
              once and not
              maintain it
              for twenty years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before porch railing repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC post base rot — moisture trapping at concrete contact, UC4B vs. UC3B treatment rating, post base connector solution",
                  "Code railing height — 36-inch minimum under 30 feet, 42-inch above, IRC requirements vs. older KC porch standards",
                  "Baluster spacing — 4-inch sphere standard, older wide-spindle porches that fail code, inspection report implications",
                  "Material comparison — pressure-treated pine, cedar, composite PVC, aluminum powder-coat — maintenance and lifespan",
                  "Home sale repair — inspection findings, buyer repair request, code compliance before closing",
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
                What your porch railing repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Post base section — KC moisture contact mechanism, post base connector installation, correct concrete anchoring",
                  "Code section — IRC height requirements, baluster spacing standard, when older railings require upgrade",
                  "Material section — wood vs. composite vs. aluminum, KC maintenance cycle, cost comparison and lifespan",
                  "Rot assessment section — how to probe post base, partial replacement vs. full railing replacement criteria",
                  "Home sale section — inspection finding urgency, what buyer repair requests look like, before-closing timeline",
                  "Quote form with porch height, material preference, inspection finding, wobbly posts, baluster spacing issue",
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
                &ldquo;The home sale section
                is what gets
                the urgent calls.
                KC homeowners
                who are listing
                their house get
                the inspection
                report and it
                says railing
                height non-compliant
                or baluster spacing
                fails code —
                and they need
                it fixed before
                the buyer&apos;s
                second walkthrough.
                After the section
                went up explaining
                what the code
                requirements
                are and what
                a compliant railing
                looks like, customers
                stopped calling
                generic carpenters
                and started calling
                me because I
                could speak to
                the inspection
                language. The
                post base section
                also gets calls
                from Prairie
                Village and
                Mission Hills
                where the older
                porches have
                posts set directly
                on the concrete —
                that&apos;s the typical
                KC rot pattern
                and customers
                recognize it
                immediately.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Hendricks, porch railing repair and carpentry, Mission Hills, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A porch railing repair site with KC post rot section, code compliance
                guide, and quote form starts at $200. A full site with material
                comparison, home sale urgency context, and baluster spacing code
                content is $425–$750. One railing replacement covers the cost. No
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
