import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Event Planners in Kansas City",
  description:
    "Custom websites for event planners and wedding coordinators in the Kansas City area. Show your portfolio, communicate your process, and convert inquiries into booked events.",
  alternates: {
    canonical: "https://builtsimple.dev/for/event-planners",
  },
};

export default function EventPlannersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Event Planners in Kansas City",
    description: "Custom websites for event planners and wedding coordinators in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Event Planners",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Couples and corporate clients spend hours researching before reaching out. A portfolio site that shows your work and explains your process converts that research into real inquiries. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Event Planners &amp; Coordinators in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Event Planners</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Event planning is a high-trust hire. Clients are handing you
              responsibility for one of the most important days of their lives —
              or their most important corporate event of the year. A website
              that shows real events you&apos;ve planned, explains how you work,
              and makes the inquiry process easy builds that trust before you
              ever pick up the phone.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients check before hiring an event planner
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio — photos from real events you've planned, not generic stock images",
                  "Types of events you specialize in — weddings, corporate, social, galas",
                  "Your planning process — what do they get from you and when?",
                  "Pricing structure — full-service, day-of coordination, partial planning",
                  "Venue relationships and preferred vendor lists in the KC area",
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
                What your event planning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio gallery organized by event type — weddings, corporate, nonprofit, social",
                  "Services page with full-service, partial, and day-of coordination clearly explained",
                  "About section with your background, credentials, and how many events you've planned",
                  "Inquiry form with event type, date, guest count, and budget range",
                  "Process overview — what working with you looks like from first call to event day",
                  "Client testimonials with event type, guest count, and specific praise",
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
                &ldquo;I was getting most of my business through The Knot and
                wedding wire. After my own site launched with a full portfolio
                and a clear process page, I started getting direct inquiries —
                people who had already decided they wanted to work with me before
                we even talked. The quality of leads got noticeably better.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Castillo, wedding &amp; event planner, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An event planner site with portfolio, services, and inquiry form
                starts at $275. A full site with event-type portfolio sections,
                process page, and preferred vendors list is $550–1,000. One
                full-service event booking covers the cost many times over. No
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
