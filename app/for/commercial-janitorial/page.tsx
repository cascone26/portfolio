import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Commercial Janitorial Companies in Kansas City",
  description:
    "Custom websites for commercial cleaning and janitorial service companies in the Kansas City area. Win office, medical, and industrial cleaning contracts with a professional website that shows your certifications and service capabilities.",
  alternates: {
    canonical: "https://builtsimple.dev/for/commercial-janitorial",
  },
};

export default function CommercialJanitorialPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Commercial Janitorial Companies in Kansas City",
    description: "Custom websites for commercial cleaning and janitorial service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Commercial Janitorial Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Facility managers evaluating janitorial companies need to see your certifications, liability coverage, employee vetting process, and experience with their building type before they consider switching. A professional website that answers all of this wins the proposal request. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Commercial Janitorial in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Commercial Janitorial</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Facility managers and property managers
              evaluating commercial cleaning companies
              are making a significant decision —
              they are putting the cleanliness and
              presentation of their building in someone
              else&apos;s hands, often with after-hours
              access. They need a company that is
              professional, reliable, and clearly
              vetted. Before they request a proposal,
              they research your insurance coverage,
              employee screening process, cleaning
              certifications, what facility types you
              have experience with, and whether you
              have references from buildings like
              theirs. A commercial janitorial website
              that establishes your credentials,
              describes your quality control process,
              and makes requesting a walkthrough and
              proposal straightforward positions you
              as the professional choice when contracts
              come up for renewal.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What facility managers look for in a janitorial company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance and bonding — general liability, workers comp, employee dishonesty coverage limits",
                  "Employee screening — background checks, drug testing, how cleaners are vetted and supervised",
                  "Facility types — offices, medical, industrial, retail, schools, government — what you specialize in",
                  "Certifications — ISSA CIMS, green cleaning certifications, OSHA compliance, equipment training",
                  "Quality control — inspection process, communication system, how issues are handled and tracked",
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
                What your commercial janitorial website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance and credentials — coverage amounts, bonding, certifications, compliance standards",
                  "Employee vetting — hiring process, background checks, training program, supervisor structure",
                  "Facility specialties — office, medical/healthcare, industrial, retail, schools, multi-tenant",
                  "Services — nightly cleaning, day porter, floor care, window cleaning, pressure washing, restroom",
                  "Quality control — inspection schedules, client portal or reporting, issue escalation process",
                  "Proposal form with facility type, square footage, frequency, current challenges, timeline",
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
                &ldquo;We were losing bids to companies
                that looked more established online even
                though our work and our operation were
                superior. Facility managers would look
                us up before agreeing to a walkthrough
                and our old site didn&apos;t give them
                confidence. The new site with our
                insurance coverage laid out, our
                employee screening process explained,
                our certifications listed, and our
                quality control system described
                changed how we entered every proposal.
                We started getting more walkthroughs
                and converting more of them.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Whitaker, janitorial company owner, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A commercial janitorial site with services,
                credentials, and proposal form starts at
                $275. A full site with facility type pages,
                quality control system, and insurance
                detail is $525–$1,050. One mid-size
                contract covers the cost immediately.
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
