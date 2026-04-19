import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tutoring Centers in Kansas City",
  description:
    "Custom websites for tutors and tutoring centers in the Kansas City area. Get found by parents searching for subject-specific help and convert those searches into enrolled students.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tutoring",
  },
};

export default function TutoringPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tutoring Centers in Kansas City",
    description: "Custom websites for tutors and tutoring centers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tutoring Centers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Back-to-school season brings a wave of parents searching for tutors. Get your site live before they look. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tutors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tutoring Centers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Parents searching for help don&apos;t look up &ldquo;tutors.&rdquo; They
              search &ldquo;algebra tutor Overland Park,&rdquo; &ldquo;ACT prep Lee&apos;s
              Summit,&rdquo; &ldquo;reading specialist for 3rd grader KC.&rdquo; A website
              built around the specific subjects and grade levels you serve shows
              up for all of those searches and converts anxious parents into enrolled students.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What parents look for before choosing a tutor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Whether you tutor the specific subject and grade level their child needs",
                  "Your qualifications — degree, certifications, years of experience",
                  "Session format — in-person, online, or both — and where you're located",
                  "Pricing per session or monthly package options",
                  "Results — what kind of grade improvements or test score gains past students saw",
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
                What your tutoring website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Subject and grade level pages — math, reading, SAT/ACT, AP courses, etc.",
                  "Tutor bio with credentials, teaching background, and specialties",
                  "Session pricing — per hour, packages, and what's included",
                  "Online scheduling or consultation request form",
                  "Parent testimonials with subject and improvement context",
                  "Service area — in-person locations or online availability across KC",
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
                &ldquo;I was fully booked through referrals but had no way to grow.
                After the website launched with pages for each subject I teach,
                I started getting 6-8 parent inquiries a month from Google.
                I filled a waitlist for the first time ever.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Nguyen, math and SAT tutor, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tutoring site with subject pages, bio, and contact form starts
                at $200. With separate grade-level pages, test prep sections, and
                online scheduling, it&apos;s $400–700. Three new students cover
                it in a month. No contracts, no monthly fees.
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
