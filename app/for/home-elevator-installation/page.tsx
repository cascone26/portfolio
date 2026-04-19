import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Home Elevator Installation Companies in Kansas City",
  description:
    "Custom websites for home elevator, residential lift, and vertical platform lift installation companies in the Kansas City area. Show your elevator styles, drive system options, and installation process to win residential elevator contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/home-elevator-installation",
  },
};

export default function HomeElevatorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Home Elevator Installation Companies in Kansas City",
    description: "Custom websites for home elevator installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Home Elevator Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners planning a residential elevator want to understand pneumatic vs. cable drive systems, shaft requirements, and what the installation involves structurally. A website that explains those differences and shows real installations earns the design consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Home Elevators in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Home Elevator Installation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Home elevator customers are
              typically planning a new custom
              home build or a major renovation,
              homeowners aging in place who
              want to remain in a multi-story
              home long-term, or buyers of
              luxury properties who consider
              a residential elevator a standard
              feature. The primary decision
              is drive system: hydraulic
              elevators use a piston and
              fluid system and require a
              machine room, typically in
              an adjacent closet — they
              are smooth, quiet, and handle
              heavier loads. Cable-driven
              elevators use a counterweight
              system and need less floor
              space but require overhead
              clearance. Pneumatic vacuum
              elevators — brands like PVE
              (Pneumatic Vacuum Elevators)
              are the most recognized —
              use air pressure differentials
              to move the cab and require
              no shaft construction,
              no machine room, and no
              pit — just a round tube
              that runs through floors.
              They are a popular choice
              for retrofits in existing
              homes because the structural
              modification is minimal.
              Traditional shafted elevators
              require framing a shaft
              through each floor, which
              works best in new construction
              or major renovations where
              walls can be opened. Brands
              like Savaria, Inclinator,
              and Nationwide Lifts offer
              full custom cab finishes —
              wood, metal, glass panels,
              gate styles — and the
              interior finish package
              is a significant part
              of the buying decision.
              Vertical platform lifts
              are a separate product
              category — open platforms
              without a cab that serve
              accessibility needs at
              a lower price point,
              typically $5,000 to $15,000
              installed versus $20,000
              to $50,000+ for a full
              residential elevator.
              A home elevator website
              that explains the drive
              system options with real
              photos, shows the cab
              finish options, and
              addresses the structural
              requirements honestly
              earns the homeowner
              or builder who is
              planning the installation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners and builders research before choosing a home elevator
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Drive system — hydraulic, cable, pneumatic — how each works, space requirements, retrofit vs. new build",
                  "Shaft requirements — framed shaft vs. pneumatic tube — structural modification, existing home feasibility",
                  "Cab finish options — wood, metal, glass panels, gate types — how to match existing home aesthetics",
                  "Vertical platform lifts — open platform alternative — cost comparison, when it makes sense vs. full elevator",
                  "Permitting and inspection — what local codes require, elevator inspection on installation, annual inspections",
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
                What your home elevator website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Drive system guide — hydraulic, cable, pneumatic vacuum — how each works, pros and cons, space requirements",
                  "Brand lineup — Savaria, PVE, Inclinator — cab styles, weight capacity, floor count, drive options",
                  "Cab finish gallery — wood panels, metal, glass, gate styles — custom finish packages we offer",
                  "Vertical platform lifts — open platform accessibility option, cost range, indoor and outdoor models",
                  "Installation process — structural requirements, shaft framing, machine room, timeline, permit process",
                  "Consultation form with home type (new build/retrofit), floor count, drive preference, style notes, timeline",
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
                &ldquo;Home elevator customers do months
                of research before they call
                anyone — they know the brands,
                they know they want hydraulic
                or pneumatic, and they have
                a budget range in mind before
                the first conversation. Without
                a website, I was invisible
                to that research phase. Builders
                and homeowners who were planning
                an elevator were looking at
                everyone online who had photos,
                specifications, and a real
                explanation of the options.
                The new site brought in qualified
                buyers who had already decided
                they wanted an elevator —
                they were just choosing
                the installer.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Callahan, residential elevator installer, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A home elevator site with drive
                system guide, brand lineup, and
                consultation form starts at $225.
                A full site with cab finish gallery,
                platform lift section, and installation
                walkthrough is $425–$850. One
                residential elevator installation
                covers the cost many times over.
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
