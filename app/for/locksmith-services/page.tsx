import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Locksmith Companies in Kansas City",
  description:
    "Custom websites for locksmiths and locksmith companies in the Kansas City area. Show your emergency availability, service types, and response area to win residential, commercial, and automotive locksmith calls.",
  alternates: {
    canonical: "https://builtsimple.dev/for/locksmith-services",
  },
};

export default function LocksmithServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Locksmith Companies in Kansas City",
    description: "Custom websites for locksmith companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Locksmith Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Someone locked out at midnight needs to know two things in under ten seconds: are you available right now, and how fast can you get there. A website with your 24/7 availability and estimated response time front and center gets you the call over every competitor on the page. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Locksmiths in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Locksmith Companies</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Locksmith calls come from two very
              different situations: someone in a
              stressful emergency who needs immediate
              help and will call the first number
              they trust, and a property owner or
              business manager making a deliberate
              decision about rekeying, installing
              commercial hardware, or replacing a
              security system. For emergency callers,
              your website needs to communicate
              your availability, your average response
              time, and your service area within
              the first few seconds of landing on
              the page — anything else they can read
              after they call. For planned work,
              they want to see your commercial
              capabilities: master key systems,
              access control, panic hardware, high
              security cylinders (Medeco, Mul-T-Lock,
              Schlage Primus), and whether you
              service their type of property.
              A locksmith website that serves both
              audiences — immediate trust for the
              emergency caller, detailed capability
              for the commercial decision-maker —
              converts the high-urgency search into
              a call and the deliberate search into
              a quote request.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What people need to know when searching for a locksmith
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Emergency availability — 24/7 or limited hours, average response time, service area",
                  "Lockout services — residential, commercial, automotive, high-security locks",
                  "Rekey vs. replace — when rekeying is sufficient, when lock replacement makes more sense",
                  "Commercial capabilities — master key systems, access control, panic hardware, door closers",
                  "Licensing — Missouri and Kansas locksmith licensing, background check, insurance",
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
                What your locksmith website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Emergency section — 24/7 availability, response time, phone number large and prominent",
                  "Residential services — lockouts, rekey, deadbolt install, lock repair, smart lock installation",
                  "Automotive services — car lockouts, key fob programming, transponder key cutting",
                  "Commercial services — master key systems, access control, panic hardware, high-security cylinders",
                  "Licensing and credentials — state license, insurance, background check policy",
                  "Service area map — neighborhoods and cities covered, response time zones",
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
                &ldquo;I was competing against national
                dispatch services that showed up
                first in Google but charged double
                what I do. Without a website, I
                had no way to establish trust with
                someone who found me in a search
                and had never heard of me before.
                The new site with my licensing
                front and center, my response time
                clear, and my residential and
                commercial services spelled out
                changed the balance. Local customers
                who find my site now call me
                instead of the national services
                because they can see I&apos;m local,
                licensed, and transparent about
                what I charge.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — V. Espinoza, licensed locksmith, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A locksmith site with emergency section,
                services, and service area starts at $200.
                A full site with commercial capabilities,
                automotive services, and licensing detail
                is $375–$750. One commercial rekey job
                covers the cost. No contracts, no monthly fees.
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
