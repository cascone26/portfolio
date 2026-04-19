import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Attic Access Panel Installation Companies in Kansas City",
  description:
    "Custom websites for attic access panel installation, attic hatch, and pull-down stair companies in the Kansas City area. Show your rough opening framing, insulation above panel, and drywall finishing around the hatch to win attic access contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/attic-access-panel-installation",
  },
};

export default function AtticAccessPanelInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Attic Access Panel Installation Companies in Kansas City",
    description: "Custom websites for attic access panel installation and attic hatch companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Attic Access Panel Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what size attic hatch is required to fit an HVAC technician, how insulation above the hatch is handled so it doesn&apos;t fall out when opened, and whether a new hatch needs a framed rough opening or can be cut between existing joists. A website that explains attic access installation earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Attic Access Panel Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Attic Access Panel Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Attic access panel installation
              customers are KC homeowners
              whose only existing attic
              access is a 14x24-inch
              scuttle hole in a closet
              that no HVAC technician
              can fit through, homeowners
              whose insulation contractor
              recommends adding a second
              access point on the opposite
              side of the house to
              allow blown-in work without
              crossing the entire attic,
              or homeowners finishing
              a room addition where
              the new ceiling section
              has no attic access at
              all. The central education
              is rough opening sizing,
              insulation management
              above the panel, and
              finishing the opening
              in drywall — three things
              that make the difference
              between an access hatch
              that functions properly
              and one that dumps insulation
              into the room every
              time it is opened.
              Rough opening sizing:
              the minimum access opening
              that allows a person
              to pass through comfortably
              is 22x30 inches — this
              accommodates a technician
              with tools and is the
              IRC code minimum for
              attic access; the standard
              manufactured attic access
              frame is designed for
              a rough opening of 22.5x30.5
              inches between existing
              framing or added headers;
              if ceiling joists are
              16 inches on center,
              a 22.5-inch wide opening
              spans one joist bay
              and requires cutting
              one joist and installing
              headers between the
              two adjacent uncut joists;
              if joists are 24 inches
              on center, the opening
              fits in a single bay
              with no joist cutting;
              in KC homes with original
              2x6 ceiling joists at
              16 inches on center,
              doubling the headers
              at the cut joist is
              required to transfer
              the load. Insulation
              management: blown-in
              insulation in KC attics
              is typically 10–14 inches
              of cellulose or fiberglass
              — it must not fall into
              the opening when the
              hatch is removed; the
              standard solution is
              an insulation dam — a
              frame of rigid foam
              board or plywood erected
              around the attic hatch
              perimeter inside the
              attic, tall enough to
              contain the insulation
              above the hatch panel;
              the dam height equals
              the insulation depth;
              the hatch panel itself
              must also be insulated —
              the panel top face gets
              rigid foam board glued
              to it, r-value matching
              the surrounding insulation,
              to prevent a cold ceiling
              spot at the hatch location
              in KC winters. Drywall
              finishing: the attic
              access frame sits in
              the rough opening and
              is shimmed flush with
              the ceiling drywall
              face; the gap between
              the frame and the drywall
              cut edge is covered
              by the factory flange
              on most standard frames;
              the flange is taped
              and skimmed before painting
              to produce a flush finish
              with no visible frame
              edge. A website that
              explains opening sizing,
              why insulation management
              matters in KC, and
              how the ceiling is
              finished earns the homeowner
              who knows their existing
              hatch is too small and
              wants it done right.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before attic access panel installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Minimum size — 22x30 inch IRC code minimum, technician clearance requirement, standard frame dimensions",
                  "Joist spacing — 16 vs. 24 inch OC, when a joist must be cut, doubled header requirement",
                  "Insulation dam — how to prevent blown-in insulation from falling through, dam height by insulation depth",
                  "Panel insulation — why the hatch panel itself must be insulated, rigid foam board R-value matching",
                  "Drywall finishing — frame flange, shimming flush, tape and skim for seamless ceiling appearance",
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
                What your attic access panel installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Opening size section — 22x30 minimum, standard frame rough opening, joist spacing guide",
                  "Framing guide — single bay vs. cut joist, doubled header construction, load transfer",
                  "Insulation dam section — dam construction, height calculation, why it matters in KC blown-in attics",
                  "Panel insulation guide — rigid foam attachment, R-value matching, cold ceiling spot prevention",
                  "Ceiling finish section — frame shimming, flange coverage, tape and skim process",
                  "Quote form with ceiling joist spacing, insulation type, existing hatch size, location, timeline",
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
                &ldquo;The insulation dam section
                is the one that surprises
                every customer. Nobody thinks
                about what happens to 12
                inches of blown-in cellulose
                the first time they open
                the new hatch. After the
                section went up explaining
                that the dam is part of
                the installation, not an
                add-on, customers stopped
                asking why it costs more
                than they expected. The
                panel insulation section
                also helped — customers
                in Prairie Village with
                new hatches were calling
                me in January because there
                was a cold rectangle on
                the ceiling. The section
                explaining that the panel
                itself must be insulated
                cut those callbacks to zero.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Granger, attic and ceiling work, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An attic access site with opening size section, insulation
                management guide, and quote form starts at $200. A full site
                with framing guide, panel insulation, and ceiling finish content
                is $425–$750. One properly installed hatch covers the cost.
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
