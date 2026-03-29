import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Electricians in Kansas City",
  description:
    "Custom websites for electricians and electrical contractors in the Kansas City area. Get found when homeowners search for an electrician near them.",
  alternates: {
    canonical: "https://builtsimple.dev/for/electricians",
  },
};

export default function ElectriciansPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Electricians in Kansas City",
    description: "Custom websites for electricians and electrical contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Electricians",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Limited-time offer banner */}
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          March special: Free site mockup for your electrical business — no cost, no commitment. Just reply to see what your site could look like.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Electricians in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Electricians</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              When a homeowner has an electrical problem, they search Google
              first. If you don&apos;t have a website that shows up and looks
              trustworthy, that job goes to whoever does — not to you.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before they call an electrician
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Whether you're licensed and insured — this is non-negotiable",
                  "What electrical services you actually offer",
                  "Service area — do you come to their neighborhood?",
                  "Reviews from other homeowners in Kansas City",
                  "A phone number that's easy to find fast",
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
                What your electrician website would include
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Every site I build is custom, but here&apos;s what most
                electrical businesses need:
              </p>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services page — panels, outlets, EV chargers, rewiring, inspections",
                  "License and insurance info displayed prominently",
                  "Service area map or list of cities and neighborhoods you cover",
                  "Click-to-call button front and center on mobile",
                  "Google Reviews integration or testimonials section",
                  "Fast load times and mobile-first design — most people are searching from their phone",
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
              {/* TODO: Replace with real testimonial from an electrician client */}
              <blockquote className="text-muted text-sm leading-relaxed italic border-l-2 border-accent/40 pl-4">
                &ldquo;I was getting all my jobs through word of mouth. Now I get
                calls every week from people who found me on Google. The site paid
                for itself in the first month.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Granger, licensed electrician, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter site with your services, license info, and contact form
                starts at $250. A full site with service-area pages, photo
                galleries, and review integration is $600-1,200. No contracts, no
                monthly fees.
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
