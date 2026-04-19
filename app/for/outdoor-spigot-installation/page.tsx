import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Outdoor Spigot Installation Companies in Kansas City",
  description:
    "Custom websites for outdoor spigot installation, frost-free hose bib, and exterior faucet replacement companies in the Kansas City area. Show your KC freeze depth requirements, frost-free bib standpipe length, and vacuum breaker requirement to win spigot installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/outdoor-spigot-installation",
  },
};

export default function OutdoorSpigotInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Outdoor Spigot Installation Companies in Kansas City",
    description: "Custom websites for outdoor spigot and frost-free hose bib installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Outdoor Spigot Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their outdoor faucet cracked last winter, what a frost-free hose bib actually does differently, and whether they need a permit to add a spigot on the back of the house. A website that explains KC freeze depth and vacuum breaker requirements earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Outdoor Spigot Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Outdoor Spigot Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Outdoor spigot installation
              customers are KC homeowners
              replacing a cracked
              or failed exterior
              faucet after a freeze —
              the most common single-winter
              plumbing failure in
              Kansas City — or
              homeowners adding
              a second hose bib
              on the back or side
              of the house to
              avoid dragging a
              hose from the front;
              or homeowners whose
              existing spigot
              leaks at the packing
              nut or drips continuously
              and needs replacement.
              The central education
              is why outdoor faucets
              crack in KC winters:
              a standard non-frost-free
              hose bib holds water
              in the faucet body
              and the short section
              of pipe inside the
              wall between the
              shutoff valve and
              the exterior wall
              penetration; when
              KC temperatures drop
              below freezing for
              multiple consecutive
              days — which occurs
              fifteen to twenty-five
              times per winter —
              that trapped water
              freezes, expands
              approximately nine
              percent by volume,
              and splits the faucet
              body or the adjoining
              copper pipe; the
              failure often does
              not become apparent
              until spring when
              the homeowner turns
              the water back on
              and water runs into
              the wall instead
              of out the spigot.
              How a frost-free
              hose bib prevents
              this: a frost-free
              hose bib (also called
              an anti-siphon frost-free
              sillcock) has a
              valve stem that
              extends eight to
              twelve inches inside
              the wall — the
              actual shutoff point
              is inside the conditioned
              space of the house
              where the temperature
              stays above freezing;
              when the handle
              is turned off,
              the water shuts
              off at the indoor
              valve seat and
              the water between
              the valve and the
              faucet head drains
              out through the
              spout; for the
              frost-free design
              to work, the faucet
              must be installed
              with a slight downward
              pitch toward the
              exterior so the
              water drains completely —
              a frost-free faucet
              installed level
              or sloping back
              toward the house
              holds water in
              the standpipe and
              can still freeze.
              Vacuum breaker
              requirement: Kansas
              City plumbing code
              requires an integral
              vacuum breaker on
              outdoor hose bibs —
              the vacuum breaker
              prevents backflow
              from a garden hose
              left submerged
              in a bucket or
              pool from being
              siphoned back into
              the potable water
              supply; most frost-free
              hose bibs manufactured
              after 2000 have
              an integral vacuum
              breaker built into
              the head; replacing
              an older non-anti-siphon
              spigot requires
              a vacuum-breaker-equipped
              replacement to
              meet current code.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before outdoor spigot installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why faucets crack — KC freeze cycle frequency, water expansion in faucet body, common failure timing",
                  "Frost-free hose bib — how the extended valve stem works, drain-back mechanism, pitch requirement",
                  "Vacuum breaker requirement — KC code requirement, what backflow prevention does, integral vs. add-on",
                  "Adding a new spigot — tapping into existing supply line, permit requirement in KC, wall penetration location",
                  "Shutoff valve — dedicated shutoff for each outdoor hose bib, location inside wall, freeze damage insurance",
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
                What your outdoor spigot website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Freeze damage section — KC winter freeze frequency, why standard hose bibs fail, spring discovery timing",
                  "Frost-free bib section — valve stem length, drain-back mechanism, correct installation pitch",
                  "Vacuum breaker section — KC code requirement, backflow prevention purpose, code-compliant replacement",
                  "New spigot addition section — supply line tap, permit requirement, ideal locations for KC yard use",
                  "Dedicated shutoff section — why every outdoor bib needs an interior shutoff for winter emergencies",
                  "Quote form with current faucet condition, freeze damage present, location (front/back/side), new or replacement",
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
                &ldquo;Every February I get
                a wave of KC homeowners
                who turned the outdoor
                spigot back on after
                winter and flooded their
                basement wall. The freeze
                damage section explains
                exactly what happened
                and why — they left
                a hose attached all
                winter, which prevents
                the drain-back from working
                even on frost-free bibs.
                That single piece of
                education — remove the
                hose before the first
                freeze — saves people
                from a repeat call.
                The vacuum breaker section
                also helps because homeowners
                buying their own replacement
                at the hardware store
                don&apos;t know they
                need the anti-siphon
                version and then call
                me to fix a failed
                inspection.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Prescott, plumbing repair and outdoor fixture installation, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An outdoor spigot site with frost-free bib explanation, vacuum
                breaker section, and quote form starts at $200. A full site with
                freeze damage guide, new spigot addition section, and shutoff
                valve guide is $425–$750. Two spigot replacements cover the cost.
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
