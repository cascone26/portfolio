import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Remodeling Contractors in Kansas City",
  description:
    "Custom websites for kitchen, bathroom, and home remodeling contractors in the Kansas City area. Show your portfolio, build trust with homeowners, and get more quote requests.",
  alternates: {
    canonical: "https://builtsimple.dev/for/remodeling",
  },
};

export default function RemodelingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Remodeling Contractors in Kansas City",
    description: "Custom websites for kitchen, bathroom, and home remodeling contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Remodeling Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners planning a kitchen or bathroom remodel spend months looking at portfolios before choosing a contractor. Make sure yours is one they find — and one that earns their trust. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Remodeling Contractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Remodeling Contractors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Remodeling is the highest-consideration home service there is —
              homeowners are spending $15,000 to $80,000 and living in the
              mess for weeks. They&apos;re not going to call the first company
              they see. They&apos;re going to find three or four contractors,
              study their portfolios, read every review, and pick the one who
              looks most capable and professional. That decision happens on
              your website.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners look for in a remodeling contractor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio — kitchen, bathroom, basement, whole-home projects with before/after photos",
                  "Specialties — what types of remodels you do best and most often",
                  "Process — how projects are managed, timeline expectations, communication style",
                  "Licensing and insurance — contractor license, liability, workers comp",
                  "References and reviews — what past clients say about quality, timeline, and communication",
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
                What your remodeling contractor website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project gallery — kitchen, bathroom, basement, addition — before and after with project details",
                  "Services page — kitchen remodel, bathroom remodel, basement finish, additions, whole-home",
                  "Process page — how projects work from estimate to final walkthrough",
                  "Licensing, insurance, and affiliations — contractor license number, NARI, BBB, manufacturer certs",
                  "Testimonials with project type, neighborhood, and specific praise for quality and communication",
                  "Quote request form with project type, scope, timeline, and budget range",
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
                &ldquo;Word of mouth was keeping us busy but I had no way to
                compete for new homeowners who didn&apos;t know anyone who used
                us. The portfolio site changed that — people find us on Google,
                browse the before/after photos, and call ready to move forward.
                We turned down six jobs last quarter because we were booked.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Kowalski, remodeling contractor, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A remodeling contractor site with portfolio, services, and
                contact form starts at $300. A full site with project-type
                pages, process walkthrough, and testimonials is $500–$1,100.
                One bathroom job covers the cost. No contracts, no monthly fees.
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
