import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Reglazing Companies in Kansas City",
  description:
    "Custom websites for window reglazing, window glass replacement, and window putty repair companies in the Kansas City area. Show your single-pane reglaze vs. full replacement comparison, KC freeze-thaw putty failure, and glazing compound selection to win window reglazing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-reglazing",
  },
};

export default function WindowReglazingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Reglazing Companies in Kansas City",
    description: "Custom websites for window reglazing and window glass replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Reglazing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a broken single pane is worth reglazing or if the whole window needs to go, why the putty on their 1960s KC house keeps cracking and falling out every spring, and whether reglazing the glass is something they can DIY. A website that explains window reglazing earns the glass repair call before they replace a perfectly good frame. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Reglazing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Reglazing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window reglazing customers
              are KC homeowners in
              pre-1980 homes with
              single-pane wood-frame
              windows whose glazing
              putty has cracked, shrunk
              away from the glass,
              or fallen out in sections —
              leaving gaps where air,
              water, and insects enter
              between the glass and
              the sash — homeowners
              who broke a single pane
              in a wood-frame window
              and want to replace
              the glass without replacing
              the entire window, or
              homeowners whose storm
              windows have cracked
              glass in the interior
              storm panel and need
              the glass cut and set
              without a full window
              replacement. The central
              education is the reglazing
              process versus full
              window replacement,
              why KC putty fails
              on a predictable cycle,
              and glazing compound
              selection — three things
              that determine whether
              a reglazed window holds
              through KC winters without
              putty failure recurring
              in two seasons. Reglaze
              vs. replace: a wood-frame
              single-pane window in
              good structural condition —
              no rot in the sash or
              frame, functional hardware —
              is worth reglazing rather
              than replacing; a reglazing
              job replaces the glass
              and the putty bed that
              seals the glass to the
              sash; full window replacement
              is warranted when the
              sash is rotted, when
              the homeowner wants
              double-pane insulated
              glass, or when the window
              operates poorly; a reglazing
              job on a sound wood-frame
              window costs a fraction
              of full replacement and
              preserves the original
              window profile in historic
              KC homes where replacement
              windows change the exterior
              character. KC putty failure:
              glazing putty in KC
              fails on a predictable
              five-to-ten-year cycle
              driven by the approximately
              fifty-two freeze-thaw
              cycles per winter season —
              putty that was applied
              oil-based cures to a
              hard, inflexible state
              and cannot flex with
              the glass expansion and
              contraction cycles; at
              around year seven to
              ten, oil-based glazing
              compound shrinks, cracks,
              and separates from the
              glass face and the sash
              rabbet; once separated,
              water enters the sash
              joint and begins rot
              in the wood rabbet below
              the glass; KC homes
              built in the 1950s and
              1960s with original wood
              windows that have never
              been reglazed are past
              the failure window and
              lose putty section by
              section every KC winter.
              Glazing compound selection:
              oil-based glazing compound
              (DAP 1012 or equivalent)
              is the traditional choice —
              flexible when fresh, bonds
              to wood, paintable after
              a seven-to-fourteen-day
              skin cure; latex glazing
              compound (DAP Glazing
              Compound Latex) cures
              faster, remains slightly
              more flexible than oil-based
              when cured, and is easier
              to tool for first-time
              reglazers; in KC conditions,
              oil-based glazing on
              a properly primed sash
              rabbet with a paint
              topcoat is the most
              durable choice — the
              paint topcoat is required
              to prevent UV degradation
              that accelerates oil-based
              putty failure by two
              to three years; unpainted
              glazing fails visibly
              faster in KC sun exposure.
              A window reglazing website
              that explains the reglaze
              versus replacement decision,
              KC putty failure cycle,
              and glazing compound
              durability earns the
              homeowner with a 1960s
              house full of original
              wood windows that need
              reglazing, not replacement.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before window reglazing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Reglaze vs. replace — structural condition check, rot assessment, cost comparison, historic home character",
                  "KC putty failure cycle — 52 freeze-thaw cycles per winter, oil-based hardening, 7-10 year crack timeline",
                  "Glazing compound — oil-based vs. latex, cure time, paint topcoat requirement, UV degradation rate",
                  "Glass cutting — how replacement glass is measured and cut, thickness for single-pane sash",
                  "Priming the rabbet — why bare wood rabbet causes putty adhesion failure within one KC winter",
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
                What your window reglazing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Reglaze vs. replace section — frame condition checklist, when reglazing makes sense, historic home context",
                  "KC putty failure section — freeze-thaw cycle count, shrink and crack timeline, water entry and rot consequence",
                  "Glazing compound guide — oil-based vs. latex comparison, cure requirements, paint topcoat necessity in KC",
                  "Process section — glass removal, rabbet cleaning and priming, compound application, tooling, cure timeline",
                  "Glass cutting guide — measurement method, thickness selection, single vs. storm panel differences",
                  "Quote form with window count, frame material, glass condition, putty state, home age, timeline",
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
                &ldquo;The reglaze versus replace
                section changed my entire
                call conversion rate.
                Customers in Westwood
                and Mission Hills with
                original 1950s wood
                windows were getting
                quotes from replacement
                window companies and
                assuming that was their
                only option. After the
                section went up explaining
                that a sound wood sash
                with failed putty is
                a reglazing job, not
                a window replacement,
                customers started calling
                me before getting the
                big replacement quote.
                The KC freeze-thaw section
                also helped — homeowners
                couldn&apos;t figure out why
                their putty kept failing
                every few years. Explaining
                that fifty-plus freeze-thaw
                cycles a winter crack
                unprotected oil putty
                on a predictable cycle
                and that a paint topcoat
                doubles the lifespan
                made the professional
                job worth the cost.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Novak, window reglazing and glass repair, Mission Hills, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window reglazing site with reglaze vs. replace section, KC
                putty failure guide, and quote form starts at $200. A full site
                with glazing compound comparison, process section, and glass
                cutting guide is $425–$750. One reglazing job on a 1950s KC
                house covers the cost. No contracts, no monthly fees.
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
