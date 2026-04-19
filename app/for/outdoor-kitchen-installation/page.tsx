import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Outdoor Kitchen Installation Companies in Kansas City",
  description:
    "Custom websites for outdoor kitchen installation, built-in grill, and outdoor living companies in the Kansas City area. Show your countertop materials, appliance brands, and design process to win residential outdoor kitchen contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/outdoor-kitchen-installation",
  },
};

export default function OutdoorKitchenInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Outdoor Kitchen Installation Companies in Kansas City",
    description: "Custom websites for outdoor kitchen installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Outdoor Kitchen Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners planning an outdoor kitchen want to see countertop and frame material options, appliance brands, and real project photos before they talk to anyone. A website that shows your design process and portfolio earns the design consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Outdoor Kitchens in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Outdoor Kitchen Installation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Outdoor kitchen customers are making
              a significant investment —
              a fully built outdoor kitchen with
              grill, side burners, refrigerator,
              and counters typically runs $15,000
              to $40,000 installed — and they
              have done substantial research
              before contacting anyone. The
              structural questions they have:
              framing material options —
              aluminum stud frames are the
              premium choice because they
              will not rot or rust, while
              treated wood frames are common
              in lower-cost builds — and
              whether the frame is covered
              in cement board, stone veneer,
              stucco, or tile. Countertop
              material for outdoor use requires
              something that handles temperature
              swings and UV — granite, porcelain
              tile, quartzite, and concrete
              are all used, each with different
              price points and maintenance
              needs. The appliance side: grill
              brands like Weber Summit, Lynx,
              Blaze, or Napoleon are what
              customers research, and they
              want to know what you spec
              and why. Utility connections —
              natural gas plumbing, electrical
              for refrigerators and lighting,
              water for a sink — involve
              licensed trades that the outdoor
              kitchen contractor may or may
              not coordinate. Permitting
              is required in most KC municipalities
              for permanent outdoor kitchens.
              A portfolio of completed KC
              outdoor kitchen projects with
              material callouts, appliance
              specs, and a clear design
              consultation process builds
              the trust needed for a
              high-ticket purchase decision.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before planning an outdoor kitchen
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Frame material — aluminum stud vs. treated wood — rot and rust resistance, structural longevity",
                  "Countertop options — granite, porcelain, quartzite, concrete — durability, maintenance, cost",
                  "Grill brands — Weber Summit, Lynx, Blaze, Napoleon — BTU output, burner quality, warranty",
                  "Utility connections — gas plumbing, electrical, water — who handles the trades, permit requirements",
                  "Finishing materials — stone veneer, stucco, tile, brick — appearance options and durability outdoors",
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
                What your outdoor kitchen website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio — completed KC outdoor kitchens with material callouts, appliance specs, price range",
                  "Frame and finish guide — aluminum vs. wood frame, countertop options, veneer and finishing materials",
                  "Appliance brands — grills, side burners, refrigerators, pizza ovens — what we specify and why",
                  "Utility coordination — how we handle gas, electrical, and water connections, licensed trade partners",
                  "Design process — how consultations work, what we measure and plan, 3D rendering if offered",
                  "Design form with patio size, budget range, appliances wanted, covering or pergola, gas or propane",
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
                &ldquo;Outdoor kitchen is a dream
                purchase — people have been
                thinking about it for years
                and they research everything
                before they call. Without a
                website, I was invisible to
                that research phase entirely.
                The homeowners who found me
                through referrals arrived
                already having looked at
                five other contractors online
                who had portfolios and brand
                information. The new site
                with our portfolio, our
                material breakdown, and our
                appliance brands we actually
                install put us in the same
                conversation. Our average
                project value went up because
                customers came in knowing
                they wanted aluminum framing
                and a premium grill instead
                of asking for the cheapest option.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Thornton, outdoor kitchen builder, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An outdoor kitchen site with
                portfolio, materials, and design
                form starts at $225. A full site
                with appliance guide, utility
                coordination section, and
                design process walkthrough
                is $425–$850. One project
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
