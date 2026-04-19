import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Paving Contractors in Kansas City",
  description:
    "Custom websites for asphalt paving and sealcoating companies in the Kansas City area. Show your commercial and residential paving work, explain your process, and get more driveway and parking lot quotes.",
  alternates: {
    canonical: "https://builtsimple.dev/for/paving-contractors",
  },
};

export default function PavingContractorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Paving Contractors in Kansas City",
    description: "Custom websites for asphalt paving and sealcoating companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Paving Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Property managers and homeowners getting paving quotes are comparing local contractors on experience and process. A website that shows completed driveways and parking lots alongside a clear explanation of your work earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Paving Contractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Paving Contractors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Asphalt paving and sealcoating customers — from homeowners
              replacing a cracked driveway to property managers maintaining
              a commercial parking lot — are making decisions based on
              who looks like they do quality work and have done projects
              similar to theirs. A paving website that shows residential
              driveways alongside commercial parking lots, explains
              the difference between repair and full replacement, and
              mentions proper base preparation builds credibility before
              the first estimate call.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners and property managers look for in a paving contractor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Residential vs. commercial — whether the company does both driveways and parking lots",
                  "Services — new installation, replacement, repair, sealcoating, crack filling, striping",
                  "Process — subbase prep, thickness, compaction, cure time — signals quality vs. shortcuts",
                  "Warranties — what is guaranteed and for how long on new installation vs. sealcoating",
                  "Commercial capabilities — parking lot striping, ADA compliance, lot maintenance contracts",
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
                What your paving company website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project gallery — residential driveways, commercial lots, before/after photos",
                  "Residential services — new driveway, replacement, repair, sealcoating, crack filling",
                  "Commercial services — parking lot installation, resurfacing, sealcoating, striping, ADA",
                  "Process page — subbase grading, base depth, asphalt thickness, compaction, cure time",
                  "Sealcoating maintenance — why and how often, what it prevents, KC freeze/thaw cycle",
                  "Quote form with project type, approximate size, current condition, preferred timing",
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
                &ldquo;Property managers would ask me about my process
                to filter out the fly-by-night guys. The new site
                explaining our 8-inch base compaction, our 4-inch
                surface thickness, and our cure time let our quality
                speak before the estimate. We stopped competing against
                whoever bid lowest and started getting called specifically
                for our process. Our average job value went up.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Santos, paving contractor, Raytown, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A paving site with services, project gallery, and quote
                form starts at $250. A full site with residential and
                commercial pages, process details, and sealcoating guide
                is $475–$950. One commercial lot contract covers the cost.
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
