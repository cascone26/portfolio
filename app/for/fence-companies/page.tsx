import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Fence Companies in Kansas City",
  description:
    "Custom websites for fence installation companies in the Kansas City area. Show your material options, get more quote requests, and rank for the searches that bring in your best jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/fence-companies",
  },
};

export default function FenceCompaniesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Fence Companies in Kansas City",
    description: "Custom websites for fence installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Fence Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners comparing fence quotes want to see the materials and finished work before they call. Be the company they call first. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Fence Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Fence Companies</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Fence jobs are planned purchases. Homeowners spend time comparing
              materials, looking at finished work, and getting multiple estimates
              before they commit. A website that shows your work by material type,
              explains the process, and makes requesting an estimate fast will
              win more of those comparisons than a company with nothing to show.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before getting a fence quote
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Materials you install — wood, vinyl, chain link, aluminum, ornamental iron, split rail",
                  "Photos of finished fences organized by material and style",
                  "Whether you handle permits and HOA coordination",
                  "Typical timeline from quote to installation",
                  "Warranty coverage on materials and installation workmanship",
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
                What your fence company website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Gallery organized by material — wood privacy, vinyl, chain link, ornamental, split rail",
                  "Material comparison page — pros, cons, and price ranges for each option",
                  "Services: residential, commercial, repair, gate installation",
                  "Free estimate request form with property address, linear footage estimate, and material interest",
                  "Process section — quote, permit, install, cleanup — what to expect and how long",
                  "Testimonials with fence type, property size, and specific compliments on crew",
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
                &ldquo;We were getting all our leads from yard signs and word of
                mouth. The new site with our project gallery organized by material
                changed our lead quality completely — people calling us had already
                seen our work and usually knew what material they wanted before
                we came out to quote.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Simmons, fence company owner, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A fence company site with gallery, services, and estimate form
                starts at $250. A full site with material-specific pages,
                comparison guide, and service area coverage is $500–950. One
                privacy fence job covers the cost. No contracts, no monthly fees.
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
