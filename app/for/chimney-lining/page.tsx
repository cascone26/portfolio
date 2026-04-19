import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Chimney Lining Companies in Kansas City",
  description:
    "Custom websites for chimney lining, stainless liner installation, and chimney relining companies in the Kansas City area. Show your liner types, NFPA compliance, and installation process to win residential and commercial chimney relining contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/chimney-lining",
  },
};

export default function ChimneyLiningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Chimney Lining Companies in Kansas City",
    description: "Custom websites for chimney lining companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Chimney Lining Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners who got a chimney inspection and were told the liner is cracked or deteriorated want to understand their options — stainless flex liner, cast-in-place, or HeatShield — and what the repair prevents. A website that explains the stakes earns the relining call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Chimney Lining in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Chimney Lining</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Chimney lining customers have almost
              always just had a Level 2 chimney
              inspection — either from a home
              sale, an insurance requirement,
              or after a cleaning revealed a
              problem — and been told their
              clay tile liner is cracked,
              spalled, or missing sections.
              The job of the website is to
              explain why the liner matters
              before the homeowner dismisses
              the recommendation: the liner
              contains combustion gases including
              carbon monoxide, protects the
              masonry from acidic flue gases,
              and prevents house fires from
              direct heat transfer to combustibles.
              The three relining methods each
              have a use case: stainless steel
              flexible liner is the most common
              solution for wood-burning fireplaces
              and is required when adding a
              gas insert — it is pulled through
              the existing flue and connects
              the appliance to the top of
              the chimney. Cast-in-place liner
              systems like RetroFlex or
              SmoothWall are poured into
              the flue and are ideal for
              irregular-shaped or oversized
              flues where a round flex liner
              will not fit well. HeatShield
              cerfractory resurfacing is
              appropriate when the existing
              liner has minor gaps and
              deterioration but the structure
              is intact enough to seal rather
              than replace. CSIA-certified
              technicians are the credential
              homeowners should ask for.
              A chimney lining website that
              explains the three methods,
              names the CSIA certification,
              and makes scheduling a camera
              inspection easy earns the
              homeowner who got the inspection
              report and is now trying to
              understand what to do next.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research after getting a chimney relining recommendation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why the liner matters — carbon monoxide containment, fire prevention, masonry protection from acid",
                  "Liner types — stainless flex liner, cast-in-place, HeatShield resurfacing — when each is used",
                  "CSIA certification — what it means, how to verify, why it matters for the work quality",
                  "Camera inspection — whether a video inspection is included, what it shows, why it is necessary",
                  "Gas appliance liner — whether a gas furnace or water heater flue needs lining and what type",
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
                What your chimney lining website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why liner failure is serious — CO risk, fire risk, masonry damage — what an unlined flue does",
                  "Liner options — stainless flex, cast-in-place, HeatShield — method, application, cost range",
                  "CSIA certification — credential display, what the exam covers, why certified vs. non-certified matters",
                  "Camera inspection — how we assess liner condition, what the video shows, what determines the solution",
                  "Gas appliance flues — furnace and water heater liner requirements, B-vent vs. liner inside masonry",
                  "Quote form with chimney type, appliance type, last inspection, specific problem if known",
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
                &ldquo;Chimney relining is a job
                that homeowners delay because
                it sounds expensive and scary
                and they do not understand
                why it matters. Without a
                website, I was losing half
                my estimate visits because
                people would shop around
                and pick whoever seemed
                cheapest without understanding
                the difference between
                the methods. The new site
                explaining why the liner
                is critical, showing the
                three options with honest
                when-each-is-used guidance,
                and displaying our CSIA
                credential brought in customers
                who understood the stakes
                and were not shopping on
                price alone.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Harrington, CSIA-certified chimney specialist, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A chimney lining site with liner
                types, CSIA credential, and quote
                form starts at $225. A full site
                with camera inspection section,
                gas appliance liner guide, and
                relining process walkthrough is
                $425–$850. One liner installation
                covers the cost. No contracts,
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
