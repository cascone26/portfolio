import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Wood Fence Staining Companies in Kansas City",
  description:
    "Custom websites for wood fence staining, fence sealing, and deck and fence restoration companies in the Kansas City area. Show your KC 110°F temperature swing wood moisture cycling and gray oxidation timeline, oil-based vs. water-based stain penetration for KC pressure-treated pine, and proper prep sequence to win wood fence staining contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/wood-fence-staining",
  },
};

export default function WoodFenceStainingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Wood Fence Staining Companies in Kansas City",
    description: "Custom websites for wood fence staining and fence restoration companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Wood Fence Staining Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their fence needs staining or full replacement, whether to use a solid stain or a semi-transparent, and why the stain they applied two years ago is already peeling. A website that explains wood fence staining earns the call from the homeowner whose cedar fence has gone gray and whose neighbor's fence looks new after a professional application. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Wood Fence Staining in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Wood Fence Staining</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Wood fence staining
              customers are KC
              homeowners whose
              pressure-treated
              or cedar fence
              has turned gray —
              the UV oxidation
              and surface
              weathering that
              develops within
              one to three
              years on an
              unstained KC
              fence exposed
              to direct sun —
              and who want
              to restore the
              wood to a natural
              or toned color
              before the
              graying becomes
              irreversible
              surface damage;
              homeowners whose
              previous fence
              stain is peeling,
              flaking, or
              showing lap
              marks — the
              failure pattern
              of a film-forming
              stain applied
              to wood that
              was not adequately
              prepared or
              dried before
              application;
              or homeowners
              who want to
              understand the
              difference between
              a solid stain
              that hides the
              wood grain
              and a semi-transparent
              penetrating
              stain that
              enhances it —
              and which type
              performs longer
              in KC conditions.
              The central
              education is
              KC's one-hundred-ten
              degree annual
              temperature
              swing as the
              primary moisture
              cycling driver
              in wood fence
              boards, the
              difference between
              penetrating
              and film-forming
              stain and which
              fails first
              in KC conditions,
              and the prep
              sequence —
              cleaning, brightening,
              and drying —
              that determines
              whether a stain
              application
              lasts two years
              or seven — three
              things that
              determine whether
              a homeowner
              understands
              why a professional
              application
              on a properly
              prepped fence
              produces a
              result that
              a homeowner
              brushing stain
              onto a gray
              surface cannot.
              KC temperature
              swing and wood
              movement: KC
              pressure-treated
              pine and cedar
              fence boards
              expand and
              contract with
              temperature
              and moisture
              — a board that
              is dry and
              contracted
              in a KC January
              is saturated
              and swollen
              in a KC May
              after spring
              rain; the wood
              surface opens
              micro-checks
              and grain separation
              through repeated
              dry-wet cycles;
              a film-forming
              stain — a product
              that sits on
              the wood surface
              rather than
              penetrating
              into the wood
              fiber — does
              not flex with
              the wood movement
              and begins
              to crack and
              peel within
              two KC seasonal
              cycles; a penetrating
              oil-based stain
              or water-based
              penetrating
              stain bonds
              to the wood
              fiber and moves
              with the board
              through temperature
              and moisture
              cycles, extending
              the service
              life to three
              to five years
              on a KC fence
              with correct
              prep. Penetrating
              vs. film-forming:
              solid stain
              and deck paint
              are film-forming
              products that
              build a surface
              layer over
              the wood —
              they require
              full stripping
              and sanding
              when they fail
              because the
              new coat cannot
              bond to a
              partially peeled
              film; semi-transparent
              and semi-solid
              penetrating
              stains enter
              the wood fiber,
              do not build
              a surface film,
              and when they
              fade they fade
              evenly — the
              surface can
              be cleaned
              and re-stained
              without stripping;
              pressure-treated
              pine fence
              boards resist
              penetrating
              stain until
              the preservative
              treatment dries
              from the wood
              surface — new
              pressure-treated
              boards installed
              within the
              last six months
              often require
              a waiting period
              or a water
              repellent primer
              before stain
              penetrates
              correctly. Prep
              sequence: a
              fence that
              has been weathered
              or previously
              stained requires
              cleaning with
              a wood cleaner
              to remove dirt,
              mildew, and
              extractive
              bleeding before
              new stain is
              applied; a
              gray, oxidized
              surface requires
              a wood brightener —
              an oxalic acid
              solution — after
              cleaning to
              open the wood
              grain and
              restore the
              natural wood
              pH that allows
              stain penetration;
              the fence must
              be dry to a
              moisture content
              below fifteen
              to eighteen
              percent before
              stain is applied —
              a wet board
              will not accept
              penetrating
              stain and the
              moisture barrier
              will cause
              the stain to
              peel in the
              first KC winter;
              application
              in direct KC
              summer sun
              above ninety
              degrees is
              not recommended
              — the solvent
              evaporates
              before the
              stain penetrates,
              leaving a surface
              deposit that
              behaves like
              a film. A wood
              fence staining
              website that
              explains KC
              temperature
              swing and wood
              moisture cycling,
              penetrating
              vs. film-forming
              stain failure
              comparison,
              and the prep
              sequence that
              determines
              stain longevity
              earns the homeowner
              who wants to
              understand why
              a professional
              application
              lasts five times
              as long as
              their previous
              DIY attempt.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before wood fence staining
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC temperature swing — 110°F annual range, moisture cycling in boards, micro-check and grain separation timeline",
                  "Penetrating vs. film-forming — peeling failure on solid stain, even fade on penetrating, re-stain without stripping",
                  "New PT board waiting period — preservative treatment drying, water repellent primer, when to apply first stain",
                  "Prep sequence — wood cleaner, oxalic acid brightener, moisture content below 15-18%, application temp limits",
                  "Gray fence restoration — UV oxidation vs. mold growth, brightener vs. cleaner, whether gray is reversible",
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
                What your wood fence staining website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC climate section — 110°F swing, board moisture cycling, why film-forming stains fail faster in KC than other climates",
                  "Stain type section — solid vs. semi-transparent vs. semi-solid, peeling failure mechanism, re-application without stripping",
                  "New wood section — PT preservative drying period, primer options, cedar and redwood extractive bleeding",
                  "Prep section — cleaning product type, brightener application, moisture meter check, temperature and sun exposure limits",
                  "Restoration section — gray fence before/after, UV oxidation vs. biological growth, when replacement is better than staining",
                  "Quote form with fence age, wood type, current color, last stain date, peeling present, sun exposure (full/partial/shade)",
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
                &ldquo;The peeling stain
                section is what
                wins the jobs
                that start as
                a re-stain call.
                KC homeowners
                who tried a
                big box solid
                stain two years
                ago and are
                now calling
                with peeling
                stain don&apos;t always
                understand that
                the peeling
                is caused by
                the product
                type, not the
                application.
                After the section
                went up explaining
                that film-forming
                stain on a
                KC fence board
                that expands
                and contracts
                one hundred
                ten degrees
                per year will
                crack and peel
                no matter how
                well it was
                applied, customers
                stopped asking
                for the same
                solid stain
                and started
                asking for a
                penetrating
                product on
                a properly
                prepped surface.
                The brightener
                section also
                upgrades the
                scope — homeowners
                with a gray
                fence understand
                after reading
                the page that
                cleaning alone
                doesn&apos;t open
                the grain back
                up, and the
                brightener step
                is the one
                that produces
                the result they
                want.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Sutherland, wood fence staining and deck restoration, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A wood fence staining site with KC climate section, penetrating vs.
                film-forming comparison, and quote form starts at $200. A full site
                with prep sequence, new wood protocol, and gray fence restoration
                content is $425–$750. One fence staining job covers the cost.
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
