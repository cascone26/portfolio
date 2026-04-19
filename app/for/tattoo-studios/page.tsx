import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tattoo Studios in Kansas City",
  description:
    "Custom websites for tattoo artists and studios in the Kansas City area. Showcase your portfolio, artist styles, and booking process to attract clients who are ready to commit.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tattoo-studios",
  },
};

export default function TattooStudiosPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tattoo Studios in Kansas City",
    description: "Custom websites for tattoo artists and studios in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tattoo Studios",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Tattoo clients spend weeks studying artist portfolios before submitting a deposit. A website that showcases your style, explains your booking process, and makes consultations easy gets you the clients who are serious. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tattoo Studios in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tattoo Studios</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tattoo clients do serious research before they commit.
              They are looking for an artist whose specific style
              matches what they have in mind — traditional, realism,
              fine line, blackwork, neo-trad — and they will spend
              weeks studying portfolios on Instagram, Google, and
              artist websites before they reach out. A tattoo studio
              website that organizes your portfolio by style,
              profiles each artist&apos;s specialty, and explains
              your booking and consultation process converts those
              serious researchers into paid deposits.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What tattoo clients research before booking
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio by style — traditional, realism, fine line, blackwork, watercolor, geometric — each artist",
                  "Artist specialties — who does what best, which styles are their strongest work",
                  "Booking process — how to get on the schedule, deposit requirements, waitlist timing",
                  "Custom vs. flash — whether the artist does custom designs, what the consultation involves",
                  "Pricing — hourly rate vs. flat rate, minimum charge, deposit amount and policy",
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
                What your tattoo studio website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio gallery — organized by artist and style, with clean photo display",
                  "Artist profiles — each artist&apos;s bio, style specialty, availability, social links",
                  "Booking guide — how the process works, deposit policy, what to bring to consultation",
                  "Custom work process — how to submit a concept, design timeline, what to expect",
                  "Aftercare instructions — proper healing, what is normal, when to call",
                  "Booking inquiry form — artist preference, style, placement, size, reference images",
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
                &ldquo;We had four artists and their portfolios
                were scattered across four Instagram accounts.
                Clients could not figure out who did what style
                or how to book. The new site with each artist
                profiled, their portfolio organized by style, and
                a single booking inquiry form that routes to the
                right artist changed everything. Our DMs dropped
                off and our booked deposits went up because clients
                arrived already knowing who they wanted.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Delgado, studio owner, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tattoo studio site with portfolio, artist profiles,
                and booking form starts at $250. A full site with
                artist pages, style gallery, and custom work process
                is $475–$950. Two custom bookings
                cover the cost. No contracts, no monthly fees.
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
