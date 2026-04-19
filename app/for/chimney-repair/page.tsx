import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Chimney Repair Companies in Kansas City",
  description:
    "Custom websites for chimney repair, tuckpointing, chimney relining, and masonry restoration companies in the Kansas City area. Show your tuckpointing process, liner installation, and chimney inspection service to win residential chimney repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/chimney-repair",
  },
};

export default function ChimneyRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Chimney Repair Companies in Kansas City",
    description: "Custom websites for chimney repair and tuckpointing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Chimney Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners who have been told they need chimney work want to understand what tuckpointing actually fixes, whether they need a liner replacement or just a reseal, and what a Level 2 inspection shows that a basic visual does not. A website that explains the services and their purpose earns the inspection call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Chimney Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Chimney Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Chimney repair customers are
              homeowners who have received
              a report from a home
              inspector or chimney sweep
              identifying issues, have
              noticed water intrusion
              around the chimney, have
              an older home with a
              deteriorating masonry
              chimney, or are installing
              a new gas appliance
              and need a liner
              evaluation. The services
              require explanation
              because most homeowners
              do not know what
              tuckpointing or relining
              means. Tuckpointing
              is the process of
              removing deteriorated
              mortar joints between
              bricks to a depth
              of three-quarters
              of an inch and
              repointing with fresh
              mortar — it is not
              the same as painting
              or patching. When
              mortar joints fail,
              water enters the
              brick structure and
              freeze-thaw cycles
              accelerate spalling
              and structural failure.
              KC&apos;s winters make
              this a particularly
              active problem.
              Chimney relining
              addresses the flue:
              the clay tile liner
              in an older chimney
              may be cracked from
              thermal cycling —
              a cracked liner is
              a fire and carbon
              monoxide hazard.
              Stainless steel
              liner systems (flexible
              or rigid) are installed
              inside the existing
              flue. Thermocrete
              (pumice/cement spray)
              is another relining
              option that seals
              and resizes irregular
              flue passages. The
              NFPA 211 and CSIA
              (Chimney Safety Institute
              of America) inspection
              levels matter: Level 1
              is visual, Level 2
              includes camera
              inspection of the
              liner, Level 3 is
              destructive access.
              A CSIA-certified
              sweep credential
              is the industry
              trust mark. Crown
              repair (the concrete
              cap at the chimney
              top), flashing
              replacement (the
              primary source of
              water intrusion),
              and chimney caps
              (spark arrestors
              that also keep
              animals out) round
              out the service
              menu. A chimney
              repair website
              that explains
              tuckpointing vs.
              relining, the
              inspection levels,
              and the CSIA
              credential earns
              the homeowner
              who is facing
              a repair recommendation
              and needs to understand
              what they are actually
              being told.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a chimney repair company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Tuckpointing explained — what it actually is, why deteriorated mortar joints let water destroy brick",
                  "Liner types — clay tile vs. stainless steel flex liner vs. Thermocrete, when each is used",
                  "Inspection levels — Level 1 vs. Level 2 camera inspection, what each finds, when Level 2 is needed",
                  "CSIA certification — what the credential means, why it matters when choosing a chimney company",
                  "Flashing vs. crown — which is the most common source of water leaks, how each is repaired",
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
                What your chimney repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Tuckpointing guide — what it is, what failed mortar looks like, why it matters in KC freeze-thaw",
                  "Relining options — stainless flex liner, rigid liner, Thermocrete — when each is appropriate",
                  "Inspection services — Level 1 and Level 2 camera inspection, what we look for, what reports include",
                  "CSIA credential — certification explained, what it means for the quality of the inspection and repair",
                  "Water intrusion services — flashing repair, crown repair, waterproofing, chimney cap installation",
                  "Quote form with chimney type, age of home, issue noticed, last inspection date, appliance type",
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
                &ldquo;Most customers call after
                a home inspector flags
                the chimney and they
                have no idea what
                tuckpointing means
                or why they need
                a Level 2 inspection.
                Without a website I
                was educating from
                scratch on every call.
                The site explaining
                what tuckpointing
                actually does, what
                a cracked liner means
                for safety, and what
                my CSIA certification
                means built credibility
                before I ever showed
                up. Customers arrived
                understanding the
                problem and ready
                to authorize the work.
                The inspection-to-repair
                conversion rate is
                completely different now.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — V. Harrington, CSIA-certified chimney specialist, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A chimney repair site with service
                guide, inspection levels, and quote
                form starts at $200. A full site
                with tuckpointing explanation, relining
                options, and CSIA credential section
                is $425–$750. One tuckpointing or
                relining job covers the cost.
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
