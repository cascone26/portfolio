import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Barbershops in Kansas City",
  description:
    "Custom websites for barbershops in the Kansas City area. Show your work, fill your chair, and make it easy for new clients to book — without relying on social media alone.",
  alternates: {
    canonical: "https://builtsimple.dev/for/barbershops",
  },
};

export default function BarbershopsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Barbershops in Kansas City",
    description: "Custom websites for barbershops in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Barbershops",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Instagram gets you likes. A website gets you booked. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Barbershops in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Barbershops</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Most barbershops live on Instagram and Google Maps — and leave every
              client who finds them on Google with no way to book, no price list,
              and no reason to choose you over the shop down the street. A simple
              website changes that: show your cuts, list your barbers, make booking
              frictionless.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What new clients look for before booking a barbershop
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Photos of actual cuts — fades, tapers, skin fades, beard work, line-ups",
                  "Which barbers specialize in what — texture, fades, kid cuts, beards",
                  "Pricing — base cut, beard trim, combos, add-ons",
                  "Whether you take walk-ins, appointments, or both",
                  "Hours and how long the wait typically is",
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
                What your barbershop website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Gallery of cuts organized by style — fades, tapers, beards, textured hair",
                  "Barber profiles with specialty, experience, and booking link",
                  "Service menu with prices and clear descriptions of each service",
                  "Online booking button — linked to your existing booking system (Square, Booksy, etc.)",
                  "Walk-in policy, hours, and location with embedded map",
                  "Client reviews with specific barber and cut type mentions",
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
                &ldquo;We were doing all our marketing on Instagram but people kept
                asking us for a booking link or a price list. Once the site went
                up with the gallery and service menu, we started seeing new clients
                come in who found us on Google and actually knew what they wanted
                before they sat down.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Williams, barbershop owner, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A barbershop site with gallery, service menu, and booking link
                starts at $200. A full site with barber profiles, online booking
                integration, and Google Maps optimization is $400–750. Five new
                regulars and you&apos;ve covered it in the first month. No contracts,
                no monthly fees.
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
