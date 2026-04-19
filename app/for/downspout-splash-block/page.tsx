import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Downspout Splash Block Companies in Kansas City",
  description:
    "Custom websites for downspout splash block installation, downspout drainage correction, and foundation drainage companies in the Kansas City area. Show your KC clay soil water pooling at foundation, splash block vs. downspout extension decision, and negative grade correction to win downspout splash block contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/downspout-splash-block",
  },
};

export default function DownspoutSplashBlockPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Downspout Splash Block Companies in Kansas City",
    description: "Custom websites for downspout splash block installation and foundation drainage correction companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Downspout Splash Block Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether water pooling at their foundation after a rain is coming from a missing splash block or from something else, how far water needs to be directed away from the house, and whether a splash block or a longer downspout extension is the right solution for their yard. A website that explains downspout splash block service earns the drainage correction call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Downspout Splash Block in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Downspout Splash Block</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Downspout splash block
              customers are KC homeowners
              who notice water pooling
              at the foundation
              wall during or after
              rain events — water
              that collects in the
              zone immediately adjacent
              to the foundation
              where the ground has
              settled toward the
              house or where the
              downspout discharges
              directly onto bare
              soil without direction
              away from the foundation;
              homeowners who had
              a basement waterproofing
              company or home inspector
              identify the downspout
              discharge point as
              a contributing factor
              to their wet basement
              problem; or homeowners
              who are aware that
              their existing splash
              block has settled
              into a reverse slope
              that now directs water
              toward the foundation
              instead of away from
              it. The central education
              is KC clay soil water
              pooling at foundations,
              the splash block versus
              downspout extension
              decision, and negative
              grade correction —
              three things that determine
              whether a drainage
              correction job addresses
              the actual water source
              or just moves the
              problem. KC clay soil
              water pooling: KC
              residential lots are
              built on clay or heavy-clay
              loam with extremely
              low drainage rate;
              during a 1-inch rain
              event, a typical KC
              residential roof drains
              approximately 600
              gallons of water per
              1,000 square feet
              of roof area — that
              volume exits through
              four to six downspouts;
              each downspout discharge
              point receives a concentrated
              burst of water during
              the rain event; when
              a downspout terminates
              at grade without a
              splash block or extension,
              that concentrated
              water volume falls
              directly onto the
              soil at the foundation
              corner — the splash
              energy erodes the
              soil away from the
              discharge point, and
              the standing water
              saturates the backfill
              immediately adjacent
              to the foundation
              wall; in KC clay,
              this saturated zone
              holds water against
              the foundation for
              hours to days, creating
              sustained hydrostatic
              pressure. Splash block
              vs. extension: a concrete
              or plastic splash
              block receives the
              downspout discharge
              and breaks the drop
              energy — the sloped
              block surface directs
              water away from the
              foundation at grade
              level; a splash block
              is effective when
              the ground slope is
              adequate to carry
              the water away (positive
              grade — ground slopes
              away from the foundation);
              when the ground slope
              is inadequate or negative
              (ground slopes toward
              the foundation), a
              splash block terminates
              the water near the
              foundation without
              moving it away from
              the building — a downspout
              extension that carries
              the water six to ten
              feet from the foundation
              before terminating
              is the correct solution
              when grade is insufficient;
              a buried drain extension
              that terminates at
              a pop-up emitter six
              or more feet from
              the foundation is
              the most reliable
              solution when surface
              extension is not possible
              due to walkways, planting
              beds, or lawn area.
              Negative grade correction:
              the IRC drainage standard
              requires six inches
              of drop in the first
              ten feet from the
              foundation — a six
              percent minimum slope
              away from the house;
              KC homes built with
              inadequate initial
              grading or that have
              settled over time
              may have zero or negative
              slope at the foundation
              perimeter; adding
              topsoil and regrading
              the first six to ten
              feet of the foundation
              perimeter to restore
              positive drainage
              is the underlying
              fix when splash block
              or extension placement
              alone does not keep
              water away from the
              building. A downspout
              splash block website
              that explains KC clay
              soil water volume
              at downspout discharge
              points, the splash
              block versus extension
              decision based on
              grade adequacy, and
              the IRC grade standard
              earns the homeowner
              who noticed water
              pooling at the foundation
              corner after every
              KC rain.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before downspout splash block service
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "KC clay pooling — 600 gal per 1,000 sq ft per inch of rain, concentrated downspout discharge, clay holds water for hours",
                  "Grade check — IRC 6 inches in 10 feet standard, how to tell if slope is positive or negative at foundation",
                  "Splash block vs. extension — when grade is adequate for splash block, when extension is needed",
                  "Extension options — surface fold-down extension, buried drain to pop-up emitter, 6-foot minimum distance",
                  "Settled splash blocks — block that has sunk and reversed slope now directing water toward foundation",
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
                What your downspout splash block website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Clay soil section — KC downspout water volume, soil saturation adjacent to foundation, hydrostatic pressure buildup",
                  "Grade check section — IRC standard, how to measure slope with a level, positive vs. negative grade signs",
                  "Decision guide — splash block appropriate conditions, when extension is needed, when buried drain is best",
                  "Extension types — surface accordion extension, rigid buried drain to pop-up emitter, 6-10 foot minimum distance",
                  "Negative grade correction — topsoil and regrading process, when this is required before other drainage work",
                  "Quote form with downspout count, pooling location, current splash block status, grade assessment, timeline",
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
                &ldquo;The grade check section
                changed the whole conversation.
                KC homeowners would
                show me their splash
                block and say it was
                just installed, why
                does water still pool
                there. After the section
                went up explaining
                that a splash block
                only works when the
                ground slopes away —
                and that a lot of
                KC homes have settled
                to zero or negative
                slope at the foundation —
                customers started
                checking the grade
                before calling. The
                ones with negative
                grade understood why
                I was recommending
                an extension to the
                pop-up emitter six
                feet out instead of
                just resetting the
                splash block. The
                clay soil section
                also helped with urgency —
                explaining that KC
                clay holds 600 gallons
                of water per rain
                event right against
                the foundation wall
                for hours made basement
                water problems make
                sense in a way that
                &lsquo;wet basement&rsquo; alone
                didn&apos;t.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — O. Reyes, drainage and grading service, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A downspout splash block site with KC clay soil section,
                grade check guide, and quote form starts at $200. A full site
                with splash block vs. extension decision, buried drain content,
                and negative grade correction is $425–$750. One drainage
                correction job covers the cost. No contracts, no monthly fees.
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
