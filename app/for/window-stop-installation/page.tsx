import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Stop Installation Companies in Kansas City",
  description:
    "Custom websites for window stop installation, child safety window stop, and window restrictor companies in the Kansas City area. Show your 4-inch opening limit, double-hung sash channel installation, and casement operator stop to win window safety contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-stop-installation",
  },
};

export default function WindowStopInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Stop Installation Companies in Kansas City",
    description: "Custom websites for window stop installation and child safety window restrictor companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Stop Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know how window stops are installed in double-hung windows vs. casement windows, whether a window stop can be defeated by a child, and what the code limit for window opening height is in rooms where children sleep. A website that explains window stop installation earns the safety call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Stop Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Stop Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window stop installation
              customers are KC homeowners
              with young children in
              bedrooms above the first
              floor who need to ventilate
              in summer without the
              window opening far enough
              to be a fall hazard,
              homeowners who have
              received a home inspection
              report noting that bedroom
              windows on upper floors
              do not meet the 4-inch
              opening limit code requirement,
              or homeowners managing
              a rental property that
              must meet Kansas City
              habitability codes for
              windows in sleeping rooms
              above grade. The central
              education is the 4-inch
              opening limit, double-hung
              sash stop installation,
              and the releasable stop
              requirement for egress —
              three things that determine
              whether a window stop
              is code-compliant and
              actually protects a child.
              The 4-inch limit: the
              IRC and Kansas City
              residential code both
              require that operable
              windows in sleeping
              rooms located more than
              72 inches above the
              finished grade outside
              must not open more
              than 4 inches unless
              the window is protected
              by a guard or the window
              stop is releasable for
              egress — a stop that
              can only be released
              by a key or a two-step
              operation that a young
              child cannot complete;
              the 4-inch limit is
              measured at the bottom
              of the lower sash opening,
              not the frame — a window
              that opens 4 inches
              from the sill allows
              ventilation while preventing
              a child from passing
              through; many double-hung
              windows in KC homes
              have no stop at all
              and will open fully.
              Double-hung installation:
              a sash stop for a double-hung
              window is a pin or
              cam-lock device installed
              in the sash channel —
              it limits how far the
              lower sash can travel
              up the channel; the
              most common type is
              a keyed sash pin that
              installs in a drilled
              hole in the sash channel
              track; the pin position
              is set by measuring
              4 inches from the sill
              with the window closed,
              then drilling the channel
              at that measurement;
              when pinned, the sash
              cannot travel past
              the pin; to open fully
              for egress, the key
              is used to retract
              the pin; in windows
              with vinyl jamb liners
              from KC window replacements
              in the 1990s and 2000s,
              the liner material is
              softer and the pin
              installation requires
              a specific size to
              hold without pulling
              through. Releasable
              requirement: a stop
              that cannot be released
              for egress is a code
              violation in a sleeping
              room — a fire escape
              requires a window that
              can open fully; the
              solution is a keyed
              stop, a thumb-turn
              stop that a child cannot
              operate but an adult
              can open in seconds,
              or a two-step release
              mechanism; a fixed
              screw-type stop with
              no release is not code-compliant
              in any sleeping room
              window. A window stop
              website that explains
              the 4-inch code requirement,
              how double-hung stops
              are installed, and
              what releasable means
              for egress earns the
              parent who knows the
              window is a risk and
              wants it handled correctly.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before window stop installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "4-inch code limit — IRC and KC requirement for sleeping rooms, measured from sill, 72-inch grade height trigger",
                  "Double-hung installation — sash pin method, channel drilling, 4-inch measurement from sill closed position",
                  "Releasable requirement — why fixed stops fail code in sleeping rooms, keyed vs. thumb-turn options",
                  "Casement stop — operator travel limit vs. sash pin approach, crank stop adjustment",
                  "Vinyl liner compatibility — 1990s-2000s KC window replacement liner material, pin size for soft vinyl",
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
                What your window stop installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Code section — 4-inch IRC requirement, sleeping room definition, 72-inch grade height trigger, KC enforcement",
                  "Double-hung guide — sash pin installation, channel drilling method, 4-inch measurement process",
                  "Releasable stop section — keyed and thumb-turn options, why fixed stops fail code, egress requirement",
                  "Casement stop section — operator travel limit, crank stop adjustment, casement vs. double-hung approach",
                  "Vinyl liner section — KC window replacement liner compatibility, correct pin sizing for soft liner",
                  "Quote form with window type, floor level, room use, current opening limit, window brand if known, timeline",
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
                &ldquo;The releasable section is
                the most important one I
                have. Before it went up,
                every third customer had
                bought a fixed screw-type
                stop from the hardware store
                and installed it themselves.
                Non-releasable stop in a
                sleeping room is a code
                violation — it traps someone
                in a fire. After the section
                explaining that any sleeping
                room stop must have a keyed
                or thumb-turn release for
                egress, customers stopped
                buying fixed hardware and
                started calling me. I also
                got three rental property
                jobs in one month from landlords
                who had been flagged by KC
                code enforcement — they found
                the site, understood the
                requirement, and called for
                all their units at once.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Vance, window safety and handyman services, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window stop site with code requirement section, double-hung
                installation guide, and quote form starts at $200. A full site
                with releasable stop content, casement guide, and vinyl liner
                compatibility is $425–$750. One floor of windows covers the cost.
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
