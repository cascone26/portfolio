import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Garage Door Companies in Kansas City",
  description:
    "Custom websites for garage door installation, repair, and replacement companies in the Kansas City area. Show your door brands, explain repair services, and get more installation and service calls.",
  alternates: {
    canonical: "https://builtsimple.dev/for/garage-doors",
  },
};

export default function GarageDoorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Garage Door Companies in Kansas City",
    description: "Custom websites for garage door installation, repair, and replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garage Door Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          When a garage door spring breaks at 7am, homeowners search for whoever can come today. A site that shows your door brands, same-day service, and repair pricing earns the call before they reach out to the next company. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garage Door Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Garage Door</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Garage door companies serve two completely different customers:
              the homeowner whose spring just snapped and needs it fixed today,
              and the homeowner planning a new door or opener upgrade and comparing
              options for weeks. A garage door company website that handles
              both — emergency repair with fast response messaging, plus a full
              door and opener catalog — captures more of every search and converts
              it into a service call or installation quote.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners look for in a garage door company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Same-day and emergency repair — spring replacement, cable repair, off-track doors",
                  "Door brands — LiftMaster, Clopay, Amarr, Wayne Dalton, CHI — and what lines they carry",
                  "Opener brands — LiftMaster, Chamberlain, Genie — and smart opener compatibility",
                  "Repair pricing — spring replacement, cable, panel, roller — homeowners want a ballpark",
                  "Installer credentials — authorized dealer status, years in business, warranty on work",
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
                What your garage door website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Emergency repair callout — same-day service, spring replacement, cables, panels, off-track",
                  "Door gallery — residential steel, carriage house, wood, glass — with styles and pricing tiers",
                  "Opener page — LiftMaster, Genie, Chamberlain with smart home and battery backup options",
                  "Repair services — springs, cables, rollers, panels, weatherstripping — what you fix",
                  "Authorized dealer badges — manufacturer certifications and installer credentials",
                  "Service call request with issue type, door brand, urgency level",
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
                &ldquo;We had a basic site with just a phone number. The new
                site with our door gallery, opener brands, and same-day repair
                callout on every page completely changed how people found us.
                We started getting calls from people who had already picked
                their door style from the gallery — they were ready to buy
                before they even called.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Nguyen, garage door company, Raytown, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garage door site with repair services, door gallery, and
                service request form starts at $225. A full site with door
                catalog, opener options, and repair service pages is $425–$875.
                One spring replacement call covers the starter site. No
                contracts, no monthly fees.
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
