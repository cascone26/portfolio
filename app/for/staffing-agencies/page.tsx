import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Staffing Agencies in Kansas City",
  description:
    "Custom websites for staffing and temp agencies in the Kansas City area. Attract job seekers and employers with clear information about your specialties, placement process, and industries served.",
  alternates: {
    canonical: "https://builtsimple.dev/for/staffing-agencies",
  },
};

export default function StaffingAgenciesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Staffing Agencies in Kansas City",
    description: "Custom websites for staffing and temp agencies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Staffing Agencies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Both sides of your business — employers and job seekers — visit your website with different questions. Employers want to know your screening process and how fast you can fill a position. Candidates want to know what jobs you have and how the placement process works. A website that speaks to both earns more of each. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Staffing Agencies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Staffing Agencies</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Staffing agencies serve two audiences at
              once — employers who need workers and
              candidates who need jobs — and both need
              clear, specific information before they
              engage. An HR manager evaluating agencies
              wants to know your industry specialties,
              how candidates are screened, your time-to-fill
              track record, and whether you handle temp,
              temp-to-hire, and direct placement. A job
              seeker wants to know what kinds of positions
              you place, what the application process
              involves, and whether you have openings
              in their field right now. A staffing agency
              website that speaks clearly to both audiences,
              explains your process, and makes it easy to
              start from either side fills more orders and
              builds a stronger candidate pipeline.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What employers and job seekers look for in a staffing agency
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Industry specialties — light industrial, clerical, healthcare, IT, skilled trades, professional",
                  "Screening process — background checks, drug testing, skills assessments, reference verification",
                  "Placement types — temporary, temp-to-hire, direct placement, contract-to-hire",
                  "Candidate pool — active job seekers in KC, how quickly positions are typically filled",
                  "For candidates — how to apply, what positions are available, how pay and benefits work",
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
                What your staffing agency website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Industry specialties — sectors you place in, specific roles you fill most, volume capabilities",
                  "Employer section — how you source, screen, and deliver candidates, time-to-fill track record",
                  "Candidate section — how to apply, what to expect, benefits, how pay is handled",
                  "Placement types — temp, temp-to-hire, direct placement — when each makes sense for employers",
                  "Screening standards — background, drug testing, skills testing, reference check process",
                  "Employer inquiry form with industry, position type, headcount, urgency, and contact details",
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
                &ldquo;We were getting employer calls but
                also a lot of questions that our website
                should have been answering — our screening
                process, whether we do temp-to-hire, what
                industries we specialize in. At the same
                time, candidates couldn&apos;t figure out
                how to apply or what kinds of jobs we
                placed. The new site with separate clear
                sections for employers and candidates,
                and a real explanation of our process on
                both sides, cut the back-and-forth in
                half and brought in better leads from
                both directions.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Collins, staffing agency owner, North Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A staffing agency site with services,
                employer and candidate sections, and
                inquiry form starts at $275. A full site
                with industry specialty pages, screening
                process detail, and current openings
                is $525–$1,050. One placement covers
                the cost. No contracts, no monthly fees.
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
