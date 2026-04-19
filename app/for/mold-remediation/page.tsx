import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Mold Remediation Companies in Kansas City",
  description:
    "Custom websites for mold remediation and indoor air quality companies in the Kansas City area. Build trust with homeowners and property managers through transparent certification, process detail, and post-remediation testing protocols.",
  alternates: {
    canonical: "https://builtsimple.dev/for/mold-remediation",
  },
};

export default function MoldRemediationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Mold Remediation Companies in Kansas City",
    description: "Custom websites for mold remediation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Mold Remediation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners dealing with mold are anxious and skeptical — they&apos;ve heard horror stories about companies who do poor work or upsell unnecessarily. A website that explains your testing process, certifications, containment protocol, and post-clearance testing earns trust before the first call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Mold Remediation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Mold Remediation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Homeowners researching mold remediation
              are making a health and financial decision
              at the same time — they are worried about
              what the mold is doing to their family
              and equally worried about being overcharged
              or having work done that does not actually
              solve the problem. Before they call, they
              research your certifications, whether you
              do independent testing or test your own
              work, what the containment and removal
              process looks like, and whether you
              provide post-remediation clearance testing.
              They want a company that is transparent
              and thorough, not one that shows up and
              gives an inflated quote. A mold remediation
              website that walks through your process
              honestly, shows your IICRC S520 or CMRS
              credentials, and separates testing from
              remediation builds the trust that gets
              homeowners to call you over every
              competitor they find.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring mold remediation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Certifications — IICRC S520, CMRS, NORMI, state licensing requirements for mold work",
                  "Testing vs. remediation — whether you do independent testing or both (conflict of interest concern)",
                  "Containment process — negative air pressure, plastic sheeting, HEPA filtration during removal",
                  "Post-clearance testing — independent clearance test confirming removal was complete",
                  "Insurance — whether mold remediation is covered, how to work with adjusters, documentation",
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
                What your mold remediation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Certifications — IICRC S520, CMRS, technician credentials, continuing education",
                  "Process walkthrough — assessment, containment setup, removal protocol, HEPA air scrubbing, disposal",
                  "Testing approach — how you handle or refer independent pre- and post-remediation testing",
                  "Mold types — black mold (Stachybotrys), Cladosporium, Aspergillus — what each means for remediation",
                  "Commercial services — rental properties, commercial buildings, real estate transaction mold clearance",
                  "Assessment request form with location, visible area affected, moisture source if known, timeline",
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
                &ldquo;Homeowners were skeptical before
                they ever called us. Mold remediation
                has a bad reputation for overselling
                and our old site did nothing to address
                that. The new site explaining our IICRC
                certification, our containment protocol,
                the fact that we recommend independent
                post-clearance testing, and our honest
                assessment process changed the calls
                completely. People came in already
                trusting us and the conversations
                were about scheduling, not convincing
                them we were legitimate.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Drummond, mold remediation specialist, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A mold remediation site with services,
                certifications, and assessment request
                form starts at $275. A full site with
                process walkthrough, mold type guide,
                and commercial services section is
                $525–$1,050. One remediation job covers
                the cost immediately. No contracts,
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
