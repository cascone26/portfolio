import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Mobile Notaries in Kansas City",
  description:
    "Custom websites for mobile notary publics and loan signing agents in the Kansas City area. Show your availability, document types, and service area to book more signings from individuals, attorneys, and title companies.",
  alternates: {
    canonical: "https://builtsimple.dev/for/notary-services",
  },
};

export default function NotaryServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Mobile Notaries in Kansas City",
    description: "Custom websites for mobile notary publics and loan signing agents in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Mobile Notaries",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          People needing a notary are often on a deadline — closing on a house, executing a power of attorney, or notarizing business documents — and they need someone fast, professional, and reliable. A website that shows your availability, service area, and document expertise earns the booking. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Mobile Notaries in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Mobile Notaries</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              People searching for a mobile notary
              usually need one quickly — they are
              closing on a home, finalizing estate
              documents, executing a power of attorney,
              or handling business contracts, and they
              cannot afford a delay. They want to know
              whether you service their area, whether
              you are available today or this week,
              what documents you handle, and whether
              you are a certified loan signing agent
              for real estate closings. Title companies
              and attorneys looking for a reliable
              notary to send their clients want the
              same information plus professional
              presentation they can feel confident
              referring. A mobile notary website that
              shows your credentials, availability,
              service area, and document specialties
              books more signings from individuals
              and professional referral sources alike.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients look for when hiring a mobile notary
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service area — specific KC neighborhoods, suburbs, counties covered for mobile signings",
                  "Availability — same-day, evening, weekend availability — how quickly they can come out",
                  "Document types — real estate closings, POA, estate documents, business contracts, Apostille",
                  "Loan signing agent — NNA certified LSA for real estate closings, experience with lender packages",
                  "Fees — travel fee structure, per-signature fees, minimum charge, volume pricing for title companies",
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
                What your mobile notary website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services — loan signings, POA, wills and estate, business documents, DMV, Apostille",
                  "Credentials — NNA certified signing agent, state commission, E&O insurance, background check",
                  "Service area — KC metro coverage map, counties served in MO and KS, travel fee structure",
                  "Availability — hours, same-day/evening/weekend capability, how to schedule quickly",
                  "For title companies — professional service level, experience with lender-specific packages",
                  "Booking form with document type, signing location, date and time needed, number of signers",
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
                &ldquo;I was getting signing jobs through
                the NNA directory but title companies
                who wanted to use me regularly had no
                way to evaluate me ahead of time. The
                new site with my credentials, the document
                types I handle, my service area, and a
                simple booking form changed how I got
                work. Title companies started reaching
                out directly, clients called already
                knowing I could handle their documents,
                and I stopped explaining what I do from
                scratch on every call.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — V. Stephens, NNA certified signing agent, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A mobile notary site with services,
                credentials, and booking form starts
                at $200. A full site with document type
                guide, title company section, and
                service area is $375–$750.
                Five signings cover the cost.
                No contracts, no monthly fees.
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
