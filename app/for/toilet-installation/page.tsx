import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Toilet Installation Companies in Kansas City",
  description:
    "Custom websites for toilet installation, toilet replacement, and plumbing fixture companies in the Kansas City area. Show your rough-in dimension process, wax ring selection, and flange repair options to win toilet installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/toilet-installation",
  },
};

export default function ToiletInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Toilet Installation Companies in Kansas City",
    description: "Custom websites for toilet installation and plumbing fixture companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Toilet Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how to measure their rough-in before buying a toilet, whether a wax ring or wax-free seal is the right choice, and what to do when the toilet flange is below the finished floor. A website that explains the toilet replacement process earns the plumbing call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Toilet Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Toilet Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Toilet installation
              customers are KC homeowners
              replacing a running
              or leaking toilet
              that has failed
              after 15–25 years,
              homeowners doing
              a bathroom renovation
              and upgrading the
              fixture as part
              of the update,
              or homeowners who
              bought a new toilet
              at a home improvement
              store and discovered
              the installation
              is more involved
              than expected.
              The central education
              is rough-in measurement,
              wax ring selection,
              and flange condition —
              three things that
              determine whether
              the toilet seals
              correctly and
              stays sealed.
              Rough-in measurement:
              the rough-in dimension
              is the distance
              from the finished
              wall behind the
              toilet to the
              center of the
              drain flange —
              the standard is
              12 inches; older
              KC homes (pre-1970)
              sometimes have
              10-inch rough-ins
              and less commonly
              14-inch rough-ins;
              a toilet purchased
              for a 12-inch
              rough-in installed
              in a 10-inch space
              will not sit against
              the wall — the
              tank will float
              2 inches out;
              measuring rough-in
              before buying
              requires measuring
              from the wall
              to the center
              of the two closet
              bolts that protrude
              through the flange
              (the bolts are
              the visual indicator
              of flange center).
              Wax ring selection:
              a standard wax
              ring seals the
              toilet horn to
              the flange — the
              wax compresses
              under the weight
              of the toilet;
              a standard wax
              ring is used when
              the flange sits
              at or slightly
              above the finished
              floor level; a
              double-wax ring
              (or wax ring with
              plastic horn extension)
              is used when the
              flange sits below
              the finished floor —
              common in KC homes
              where tile was
              added over original
              vinyl and the
              flange was not
              raised; wax-free
              seals (Fernco
              WaxFree, Sani
              Seal) use a foam
              or rubber gasket
              instead of wax —
              they are reusable
              if the toilet
              is removed and
              reinstalled; wax-free
              seals also work
              on low flanges
              because the rubber
              compresses more
              than wax to span
              the gap. Flange
              repair: a cast
              iron or PVC flange
              that has cracked,
              corroded, or broken
              below the floor
              level must be
              repaired before
              installation —
              a cracked flange
              causes rocking
              and eventual wax
              seal failure;
              repair options
              include a flange
              repair ring (stainless
              steel plate that
              bolts over a
              cracked flange
              to restore the
              bolt slots), a
              new PVC flange
              hub glued inside
              the existing pipe
              (for PVC pipe),
              or a push-in
              replacement flange
              for cast iron
              pipe; a rocking
              toilet that has
              been tightened
              with bolts has
              likely already
              cracked the wax
              seal — leak testing
              after installation
              (dye tablet in
              tank, check floor
              for color after
              6 hours) confirms
              the seal. Supply
              line and shutoff:
              the toilet supply
              line connects
              the shutoff valve
              (angle stop, 3/8-inch
              compression) to
              the fill valve
              on the toilet;
              braided stainless
              supply lines (12-inch
              or 16-inch lengths
              are most common)
              are standard —
              plastic supply
              lines crack in
              KC temperature
              swings and should
              be replaced at
              every toilet replacement;
              if the angle stop
              shows corrosion
              or is original
              to the house,
              replacement at
              the same time
              as the toilet
              prevents an emergency
              shutoff failure
              later. A toilet
              installation website
              that explains
              how to measure
              rough-in before
              buying, when to
              use a double wax
              ring, and what
              a cracked flange
              actually looks
              like earns the
              homeowner who
              wants to understand
              the job before
              the plumber arrives.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before toilet installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rough-in measurement — 10 vs. 12 vs. 14-inch standard, where to measure from, KC older home variation",
                  "Wax ring selection — standard vs. double ring, flange height below floor, wax-free seal alternative",
                  "Flange condition — cracked flange signs, repair ring vs. full replacement, testing after installation",
                  "Supply line replacement — braided stainless standard, plastic supply line failure risk, angle stop check",
                  "Toilet rocking — causes of rocking, closet bolt tightening limit, shim use before caulking base",
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
                What your toilet installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Rough-in section — how to measure, 10/12/14-inch variation in KC homes, tank clearance from wall",
                  "Wax ring guide — standard vs. double ring selection, wax-free seal benefits, flange height measurement",
                  "Flange repair section — crack signs, repair ring vs. replacement, cast iron vs. PVC options",
                  "Supply line section — braided stainless requirement, angle stop inspection, replacement at same time",
                  "Leak testing section — dye tablet test process, how to confirm wax seal, caulking base after seal confirmed",
                  "Quote form with rough-in measurement, current toilet issue, floor type, flange condition if known",
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
                &ldquo;The rough-in section paid
                for the website on the first
                job it helped. A customer
                in Waldo had an older house
                with a 10-inch rough-in —
                they bought a 12-inch toilet
                at the hardware store, couldn&apos;t
                install it, called me. We
                had to return the toilet
                and reorder. After the rough-in
                section went up explaining
                how to measure before buying,
                that conversation stopped
                happening. Customers arrive
                with the measurement and
                the right toilet. The flange
                section also changed my
                estimate conversations —
                customers who read it understood
                why I needed to look at
                the flange before quoting
                a flat install price. No
                more surprises on a cracked
                cast iron flange from 1963.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Ramirez, plumbing and fixture installation, Grandview, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A toilet installation site with rough-in section, wax
                ring guide, and quote form starts at $200. A full site
                with flange repair, supply line, and leak testing content
                is $425–$750. Two toilet replacements cover the cost.
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
