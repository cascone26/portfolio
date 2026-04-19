import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Fence Installation Companies in Kansas City",
  description:
    "Custom websites for fence installation and fencing contractors in the Kansas City area. Show your material options, project portfolio, and quote process to win residential and commercial fencing projects.",
  alternates: {
    canonical: "https://builtsimple.dev/for/fence-installation",
  },
};

export default function FenceInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Fence Installation Companies in Kansas City",
    description: "Custom websites for fence installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Fence Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners planning a fence project want to compare wood, vinyl, aluminum, and chain link options with real pricing ranges before they request quotes. A website that helps them understand their options and shows completed projects in their neighborhood converts browsers into buyers. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Fence Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Fence Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Homeowners planning a fence project are
              in the research phase for weeks before
              they request a single quote. They are
              comparing materials — wood, vinyl, aluminum,
              chain link, ornamental steel — on cost,
              maintenance, privacy level, HOA compliance,
              and longevity in the Kansas City climate.
              They are looking at neighborhoods similar
              to theirs to see what looks right on
              a typical lot. They want to understand
              the difference between 4-foot and 6-foot
              privacy fence, whether gates need to
              be custom-ordered, whether you handle
              permit applications, and how long a
              project typically takes from signing
              to completion. Commercial clients —
              businesses, schools, contractors —
              want to see chain link, ornamental,
              or security fencing at scale. A fence
              installation website that compares
              materials visually, shows completed
              residential and commercial projects,
              and makes requesting a free measure
              and quote easy earns the project when
              the homeowner is finally ready to commit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before requesting a fence quote
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material comparison — wood, vinyl, aluminum, chain link, ornamental — cost, maintenance, lifespan",
                  "Privacy vs. decorative — height options, picket spacing, solid panel vs. open designs",
                  "HOA compliance — common HOA fence rules, how to verify what is allowed before ordering",
                  "Permits — whether installation requires a permit, who files it, how long it adds to the timeline",
                  "Project photos — completed fences on similar lots, backyard and front yard applications",
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
                What your fence installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material guide — wood, vinyl, aluminum, chain link, ornamental with photos and honest trade-offs",
                  "Project gallery — residential privacy fences, decorative fencing, commercial and security fencing",
                  "Process — free measure and quote, permit handling, material lead time, installation timeline",
                  "Commercial fencing — chain link, ornamental, security panels, access gates, large-scale projects",
                  "Gate options — walk gates, double drive gates, automated gate capability, hardware options",
                  "Quote form with fence type, linear footage estimate, gate count, material preference, address",
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
                &ldquo;We were getting most of our
                leads from yard signs and Angi,
                but Angi was expensive and the
                leads were low quality. Without
                a website showing our actual work
                and our material options, we had
                no way to reach homeowners who
                were still deciding what they
                wanted. The new site with our
                material guide, our project gallery
                by fence type, and a simple quote
                form brought in better leads than
                anything we had tried. Customers
                show up to the measure already
                knowing what material they want —
                the sale is easier and the
                projects are more profitable.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Kowalski, fence contractor, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A fence installation site with material
                options, project gallery, and quote form
                starts at $225. A full site with commercial
                fencing section, material comparison guide,
                and process detail is $425–$850. One
                average residential fence covers the cost.
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
