import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Irrigation and Sprinkler System Companies in Kansas City",
  description:
    "Custom websites for irrigation installation, repair, and winterization companies in the Kansas City area. Show your system capabilities, service plans, and seasonal process to win new installations and recurring maintenance contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/irrigation-sprinkler",
  },
};

export default function IrrigationSprinklerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Irrigation and Sprinkler System Companies in Kansas City",
    description: "Custom websites for irrigation and sprinkler system companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Irrigation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners getting their first irrigation system want to understand zone planning, head types, and smart controller options before they request a quote. Existing system owners need a reliable company for spring startup, fall winterization, and repairs. A website that serves both earns both. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Irrigation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Irrigation &amp; Sprinkler</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Irrigation companies serve two audiences
              with very different needs. New installation
              customers are evaluating their first
              system and want to understand what
              they are buying: how zone planning works
              for their lawn layout, the difference
              between rotary and spray heads, whether
              a smart controller (Rachio, Hunter HC,
              Rain Bird) is worth the premium, and
              what the installation process looks
              like from design to final walkthrough.
              Existing system owners who already
              have irrigation are looking for a
              reliable company to handle the
              seasonal service cycle — spring startup
              with head adjustment and controller
              programming, summer repairs when
              heads are struck or zones stop working,
              and fall blowout to prevent freeze
              damage. For them, the decision comes
              down to availability and trust:
              will you show up when you say you
              will and do the job right. An irrigation
              website that explains system design
              for new customers, communicates your
              seasonal service program for existing
              customers, and makes booking either
              type of appointment fast earns both
              revenue streams year-round.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What irrigation customers want to know before hiring
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "System design — zone planning, head types, coverage patterns, water pressure requirements",
                  "Smart controllers — Rachio, Hunter, Rain Bird — what they offer, weather adjustment, app control",
                  "Installation process — design consultation, permit if required, installation timeline, walkthrough",
                  "Seasonal service — spring startup checklist, fall blowout process, repair service availability",
                  "Service plans — annual startup and blowout package pricing, what is included in each visit",
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
                What your irrigation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "New installation guide — zone design, head options, smart controller comparison, process",
                  "Seasonal service plan — spring startup and fall blowout package, what each includes, pricing",
                  "Repair services — head replacement, valve repair, controller troubleshooting, leak detection",
                  "Smart controller options — Rachio, Hunter, Rain Bird — benefits and what you install",
                  "Commercial irrigation — commercial properties, HOAs, athletic fields, drip systems",
                  "Quote form with service type, property size, system age if known, preferred schedule",
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
                &ldquo;We installed new systems and
                did seasonal service but the seasonal
                customers were hard to reach because
                they only thought of us in spring
                and fall — and by then they had
                already called someone else. Without
                a website, we had no way to stay
                in front of them year-round or
                attract new installation customers
                who were researching their options.
                The new site with our seasonal
                service plan explained, our smart
                controller options shown, and an
                easy booking form brought in both
                new installation leads and existing
                system owners who signed up for
                our annual package. That recurring
                service revenue changed our whole
                business model.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Nakamura, irrigation contractor, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An irrigation site with services, seasonal
                plan, and quote form starts at $225. A
                full site with installation guide, smart
                controller comparison, and commercial
                section is $425–$850. One installation
                job covers the cost. No contracts,
                no monthly fees.
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
