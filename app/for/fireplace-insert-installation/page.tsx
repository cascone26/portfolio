import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Fireplace Insert Installation Companies in Kansas City",
  description:
    "Custom websites for fireplace insert installation, gas fireplace, and wood-burning insert companies in the Kansas City area. Show your insert brands, efficiency ratings, and installation process to win residential fireplace upgrade contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/fireplace-insert-installation",
  },
};

export default function FireplaceInsertInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Fireplace Insert Installation Companies in Kansas City",
    description: "Custom websites for fireplace insert installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Fireplace Insert Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners upgrading an open masonry fireplace want to know the efficiency difference, whether gas or wood fits their lifestyle, and what brands you carry. A website that answers those questions earns the in-home consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Fireplace Inserts in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Fireplace Insert Installation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Fireplace insert customers are
              homeowners who have an open masonry
              fireplace that is inefficient,
              drafty, or rarely used and want
              to convert it into something that
              actually heats the room. The insert
              decision starts with fuel type:
              gas inserts (natural gas or propane)
              are the most popular choice in
              Kansas City because they are
              convenient, require no wood storage,
              and can be operated with a remote
              or thermostat — brands like
              Napoleon, Regency, Valor, and
              Heat &amp; Glo have efficiency ratings
              of 70–85% depending on the model.
              Wood-burning inserts — Quadra-Fire,
              Lopi, Osburn — are chosen by
              homeowners who want the real fire
              experience and have access to
              wood, with EPA-certified units
              burning far more efficiently
              than an open fireplace. Pellet
              inserts are a middle option:
              automated fuel delivery, high
              efficiency, but require electricity
              and pellet storage. Customers
              want to understand the liner
              requirement — most inserts need
              a stainless steel flexible liner
              installed through the existing
              chimney — and whether their
              existing chimney structure can
              accommodate the insert they want.
              The federal 25C tax credit covers
              30% of the cost of biomass
              (wood or pellet) inserts up to
              $2,000 per year, which is a
              meaningful incentive. A fireplace
              insert website that explains
              fuel type differences, shows
              the brands you carry with efficiency
              ratings, and makes scheduling
              an in-home measurement visit
              easy earns the homeowner who
              has been putting off the upgrade
              for two winters.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing a fireplace insert
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fuel type — gas vs. wood vs. pellet — convenience, cost, lifestyle fit, efficiency comparison",
                  "Brand and efficiency — Napoleon, Regency, Heat & Glo, Quadra-Fire, Lopi — BTU output and ratings",
                  "Liner requirement — whether a stainless liner is needed, what the installation involves",
                  "Tax credit — federal 25C biomass insert credit, 30% up to $2,000 — eligibility and documentation",
                  "Existing fireplace compatibility — firebox dimensions, chimney condition, gas line availability",
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
                What your fireplace insert website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Fuel type guide — gas, wood, pellet — pros, cons, cost comparison, best fit for different homeowners",
                  "Brand showcase — Napoleon, Regency, Heat & Glo, Quadra-Fire — models, BTU range, efficiency ratings",
                  "Installation process — measurement visit, liner installation, gas line if needed, surround and face options",
                  "Tax credit section — federal 25C biomass credit, how to qualify, documentation for your installer",
                  "Chimney and firebox — what we check, what affects insert selection, what to expect on the estimate visit",
                  "Consultation form with fuel type preference, firebox opening dimensions if known, existing gas line, timeline",
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
                &ldquo;Fireplace inserts are a
                considered purchase — customers
                do weeks of research before
                they call anyone. Without a
                website I had no way to be
                part of that research phase.
                People would research Napoleon
                vs. Regency or gas vs. wood
                online, make up their mind,
                then call whoever showed up
                first in a search. The new
                site with our fuel type
                comparison, our brand lineup
                with real specs, and the
                tax credit section put us
                in front of customers who
                were already educated and
                ready to buy. We also stopped
                losing jobs to the fireplace
                store across town.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Kowalski, fireplace insert installer, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A fireplace insert site with fuel
                guide, brands, and consultation form
                starts at $225. A full site with
                brand showcase, tax credit section,
                and installation walkthrough is
                $425–$850. One insert installation
                covers the cost.
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
