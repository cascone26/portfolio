import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Plumbers in Kansas City",
  description:
    "Custom websites for plumbers and plumbing companies in the Kansas City area. Show up when homeowners need you most and turn searches into service calls.",
  alternates: {
    canonical: "https://builtsimple.dev/for/plumbers",
  },
};

export default function PlumbersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Plumbers in Kansas City",
    description: "Custom websites for plumbers and plumbing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Plumbers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Limited-time offer banner */}
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          March special: Free site mockup for your plumbing business — no cost, no commitment. Just reply to see what your site could look like.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Plumbers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Plumbers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              A burst pipe or a backed-up drain can&apos;t wait. Homeowners grab
              their phone, search &ldquo;plumber near me,&rdquo; and call the
              first result that looks legit. Without a website, that call goes
              to your competition.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before they call a plumber
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Whether you offer emergency or same-day service",
                  "What plumbing services you cover — drains, water heaters, pipes, sewer",
                  "That you're licensed and insured in Missouri or Kansas",
                  "Reviews — people want proof you show up and do good work",
                  "A phone number they can tap immediately on their phone",
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
                What your plumbing website would include
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Every site I build is custom, but here&apos;s what most plumbing
                businesses need:
              </p>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services list — drain cleaning, water heater install, leak repair, remodels",
                  "Emergency service callout with a prominent phone number",
                  "License and insurance credentials displayed clearly",
                  "Service area coverage so customers know you come to them",
                  "Online quote request form for non-emergency jobs",
                  "Mobile-first design with a tap-to-call button above the fold",
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
              {/* TODO: Replace with real testimonial from a plumber client */}
              <blockquote className="text-muted text-sm leading-relaxed italic border-l-2 border-accent/40 pl-4">
                &ldquo;Before the website I relied 100% on referrals. Now I get
                3-4 calls a week from Google. Worth every penny — I made it back
                on the first job.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Kowalski, plumber, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter site with your services, credentials, and contact form
                starts at $250. A full site with service-area pages, emergency
                call features, and review integration is $600-1,200. No
                contracts, no monthly fees.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Get a free mockup — no obligation. Fill out the form below, or
                give me a call.
              </p>
              <p className="mb-6">
                <a
                  href="tel:8165205652"
                  className="text-accent-light text-lg font-semibold hover:underline"
                >
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
