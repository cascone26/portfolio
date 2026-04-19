import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Balance Repair Companies in Kansas City",
  description:
    "Custom websites for window balance repair, double-hung window spring replacement, and window sash repair companies in the Kansas City area. Show your balance type identification, KC wood sash swelling pattern, and spiral vs. block-and-tackle replacement method to win window balance contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-balance-repair",
  },
};

export default function WindowBalanceRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Balance Repair Companies in Kansas City",
    description: "Custom websites for window balance repair and double-hung window spring replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Balance Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why a double-hung window won't stay up when opened, whether the balance spring can be replaced without buying a whole new window, and what causes balances to fail faster in KC homes. A website that explains window balance repair earns the window service call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Balance Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Balance Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window balance repair
              customers are KC homeowners
              whose double-hung windows
              will not stay up when
              opened — the sash drops
              when released because
              the balance spring or
              block-and-tackle mechanism
              has failed, broken, or
              lost tension — homeowners
              who replaced a window
              sash after a crack but
              the replacement sash
              is too heavy for the
              existing balances, or
              homeowners in KC homes
              built between 1950 and
              1985 whose windows still
              use the original knotted-rope-and-sash-weight
              system inside the wall
              cavity, with the rope
              having frayed or broken
              from decades of use.
              The central education
              is balance type identification,
              why KC humidity and temperature
              swing causes accelerated
              balance failure, and
              the correct replacement
              procedure by balance
              type — three things
              that determine whether
              a repaired window stays
              up reliably or fails
              again in the first winter.
              Balance types: modern
              double-hung windows use
              one of three balance
              systems — spiral balances
              (also called tube balances
              or twist-type balances),
              block-and-tackle balances,
              and constant force balances;
              spiral balances are the
              most common in KC vinyl
              replacement windows installed
              1990–2015 — they are
              a coiled spring inside
              a tube that runs in
              the window jamb channel,
              and the tension is set
              by a specific number
              of turns matched to
              the sash weight; a spiral
              balance with the wrong
              tension number (stamped
              on the end cap) will
              either allow the sash
              to drop or make it too
              stiff to open; block-and-tackle
              balances use a pulley
              and spring system and
              are standard in heavier
              wood sash windows and
              some premium vinyl windows;
              constant force balances
              use a flat coil spring
              and are found in tilt-in
              windows with very heavy
              sashes. KC humidity failure:
              the primary failure
              mode for spiral balances
              in KC is spring fatigue
              accelerated by the humidity
              cycle — the balance
              tube sits in a metal
              or vinyl channel that
              expands and contracts
              with KC temperature
              swings, putting side-load
              stress on the spiral
              spring at the attachment
              point; the spring fatigues
              at the attachment tang,
              which is why most failed
              KC balances fail at
              the same location —
              the top or bottom tang
              breaks, releasing all
              tension; wood sash windows
              in KC pre-1980 homes
              have an additional failure
              mode: the sash swells
              from summer humidity
              and binds in the jamb,
              then the homeowner forces
              the window with extra
              pressure that overtensions
              and breaks the balance
              mechanism. Replacement
              procedure: a spiral balance
              replacement requires
              identifying the balance
              length (measured in
              inches), the tension
              number (0–25, stamped
              on the end), and the
              tilt latch type (needed
              to release the sash
              for removal); replacing
              the wrong tension number
              is the most common error —
              a balance labeled "3050"
              means 30-inch length
              and 50 tension, not
              a model number; the
              tension number is matched
              to the sash weight in
              pounds, and a mismatch
              will cause the repaired
              window to drop within
              weeks. A window balance
              website that explains
              how to identify the
              balance type, why KC
              humidity accelerates
              failure, and the tension
              number matching process
              earns the homeowner
              who wants the window
              fixed before winter
              forces them to prop
              it open with a stick.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before window balance repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Balance type — spiral vs. block-and-tackle vs. constant force, identification by window era and weight",
                  "Tension number — length and tension stamp meaning, sash weight matching, why wrong number fails quickly",
                  "KC humidity failure — spring fatigue at tang, metal channel expansion, wood sash swelling and binding",
                  "Rope-and-weight windows — pre-1950 KC homes, frayed rope replacement, sash weight inside wall cavity",
                  "Repair vs. replacement — when balance repair is sufficient vs. when full window replacement is better",
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
                What your window balance repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Balance type section — spiral vs. block-and-tackle identification, photos by window era, KC installation periods",
                  "Tension number guide — stamp location, length/tension format, how to match to sash weight",
                  "KC humidity section — channel expansion failure mode, wood sash swelling, pre-1980 forcing damage",
                  "Rope-and-weight guide — when frayed rope is the cause, wall cavity access, replacement method",
                  "Repair vs. replace section — when balance-only repair is sufficient, window age and energy cost context",
                  "Quote form with window age, balance type if known, sash material, failure description, window count, timeline",
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
                &ldquo;The tension number section
                stopped me from getting
                blamed for repeat failures.
                A customer in Midtown had
                a balance replaced by someone
                else and it failed again
                in three weeks. I replaced
                it correctly with the right
                tension number and it stayed.
                After the section went up
                explaining the stamp format
                and why wrong tension means
                the balance fails again
                immediately, customers started
                asking other contractors
                about tension number matching
                before hiring them. The
                KC humidity section also
                brought in the pre-1980
                wood window calls — homeowners
                in Waldo with original wood
                sash windows that are hard
                to open finally understood
                why the sash was swelling
                and damaging the balance,
                and they started calling
                me in spring before the
                worst of the humidity set
                in rather than in August
                when they couldn&apos;t open
                the window at all.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Langan, window repair and weatherization, Waldo, KC
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window balance repair site with balance type section, tension
                number guide, and quote form starts at $200. A full site with
                KC humidity content, rope-and-weight guide, and repair vs. replace
                section is $425–$750. One window balance job covers the cost.
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
