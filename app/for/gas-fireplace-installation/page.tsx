import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Gas Fireplace Installation Companies in Kansas City",
  description:
    "Custom websites for gas fireplace installation, gas log insert, and direct vent fireplace companies in the Kansas City area. Show your KC BTU sizing, direct vent vs. B-vent flue requirements, and millivolt vs. electronic ignition systems to win gas fireplace contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/gas-fireplace-installation",
  },
};

export default function GasFireplaceInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Gas Fireplace Installation Companies in Kansas City",
    description: "Custom websites for gas fireplace installation and direct vent fireplace companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Gas Fireplace Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a gas fireplace insert actually heats a room, what direct vent means and why it doesn&apos;t need a masonry chimney, and whether a gas fireplace will work during a KC power outage. A website that explains BTU output, venting types, and ignition systems earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Gas Fireplace Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Gas Fireplace Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Gas fireplace installation
              customers are KC homeowners
              converting an existing
              wood-burning fireplace
              to a gas log insert
              because they want
              the ambiance without
              the wood storage,
              ash cleanup, and
              creosote buildup
              of wood fires —
              or homeowners adding
              a new gas fireplace
              to a room that
              has no existing
              fireplace and wants
              supplemental heat
              during the KC winter
              heating season that
              runs from November
              through March. The
              central education
              is the venting difference
              between fireplace
              types: a B-vent
              gas fireplace draws
              combustion air from
              the room and vents
              exhaust up an existing
              masonry or factory-built
              chimney — it requires
              a working chimney
              and a damper that
              stays open; a direct-vent
              gas fireplace draws
              combustion air from
              outside through
              a sealed coaxial
              pipe (outside air
              through the outer
              annulus, exhaust
              through the inner
              pipe) and does not
              use the room air
              or an existing chimney —
              it can be installed
              on any exterior
              wall; a vent-free
              gas fireplace has
              no flue at all
              and releases combustion
              products into the
              room — it is allowed
              in some KC rooms
              by code but not
              in bedrooms, bathrooms,
              or rooms under
              a certain cubic
              footage; direct-vent
              is the most common
              new installation
              because it requires
              no chimney and produces
              no indoor air quality
              concern. BTU output:
              a residential gas
              fireplace insert
              ranges from twenty
              thousand to sixty
              thousand BTU input;
              a twenty-to-thirty-thousand-BTU
              unit is appropriate
              for supplemental
              heat in a single
              room; a forty-to-sixty-thousand-BTU
              unit can serve
              as the primary
              heat source for
              an open floor plan
              area in a KC home
              during mild weather;
              BTU output does
              not directly translate
              to the heat actually
              delivered to the
              room — efficiency
              rating (how much
              input BTU becomes
              usable heat) matters
              more for heating
              value. Ignition
              and power outage:
              a millivolt ignition
              system (also called
              a standing pilot)
              maintains a continuous
              small pilot flame
              that generates
              enough electrical
              current to operate
              the gas valve without
              external power —
              millivolt fireplaces
              work during KC
              power outages because
              they have no dependence
              on household current;
              an electronic ignition
              system (intermittent
              pilot or hot surface)
              requires household
              current to light
              the pilot and open
              the main gas valve —
              it will not operate
              during a power
              outage without
              a battery backup;
              for KC homeowners
              who want fireplace
              heat during winter
              storms that knock
              out power, a millivolt
              ignition unit or
              a battery-backup
              electronic system
              is the correct
              specification.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before gas fireplace installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Direct vent vs. B-vent — coaxial sealed pipe vs. chimney-dependent, exterior wall installation without chimney",
                  "BTU sizing — supplemental heat vs. primary zone heat, input vs. output efficiency, KC room size guidance",
                  "Power outage operation — millivolt standing pilot vs. electronic ignition, battery backup options for KC winters",
                  "Gas insert vs. new fireplace — fitting insert into existing firebox, new direct-vent unit in room with no fireplace",
                  "Permit requirement — KC mechanical permit for gas appliance, licensed contractor and inspection requirements",
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
                What your gas fireplace installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Venting type section — direct-vent sealed coaxial, B-vent chimney-dependent, vent-free room size limits in KC",
                  "BTU section — input vs. output efficiency, supplemental vs. primary heat sizing, KC climate heating load",
                  "Ignition section — millivolt standing pilot for power outage operation, electronic ignition with battery backup",
                  "Insert section — existing firebox sizing, surround and facing options, liner requirements for B-vent insert",
                  "Gas line section — new branch from nearest supply, flexible appliance connector, shutoff valve placement",
                  "Quote form with existing fireplace type, room size, desired BTU range, power outage heat priority, gas line present",
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
                &ldquo;The power outage section
                is what sells millivolt
                units over electronic
                ignition in Kansas City.
                After the February ice
                storm a few years back
                knocked out power for
                three days across the
                metro, every KC homeowner
                with a gas fireplace wanted
                to know if it would run
                without electricity. The
                section explaining standing
                pilot ignition generates
                immediate specification
                requests — customers who
                want outage backup ask
                specifically for millivolt
                rather than just asking
                for a gas fireplace. The
                direct-vent section also
                converts homeowners who
                assumed they needed a
                chimney — most of my KC
                new-construction calls
                come from people who didn&apos;t
                know they could put a
                fireplace on an exterior
                wall with just a three-inch
                coaxial pipe through the
                framing.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Holloway, gas appliance and fireplace installation, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A gas fireplace installation site with venting type section,
                BTU sizing guide, and quote form starts at $200. A full site
                with ignition type comparison, insert vs. new unit guide, and
                KC permit section is $425–$750. One direct-vent installation
                covers the cost. No contracts, no monthly fees.
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
