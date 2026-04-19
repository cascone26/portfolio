import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Wedding Vendors in Kansas City",
  description:
    "Custom websites for wedding photographers, planners, caterers, and DJs in the Kansas City area. Get found by engaged couples and convert portfolio browsers into booked clients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/wedding",
  },
};

export default function WeddingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Wedding Vendors in Kansas City",
    description: "Custom websites for wedding vendors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Wedding Vendors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Couples book their vendors 12–18 months out. The ones searching right now need to find you. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Wedding Vendors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Wedding Vendors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Engaged couples do months of research before booking any vendor.
              They&apos;re comparing portfolios, reading every review, and checking
              for availability. A polished website that leads with your best work
              and makes inquiring easy puts you in front of couples before
              they ever look at The Knot or WeddingWire.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What couples look for before contacting a wedding vendor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio or gallery — they need to see your style before anything else",
                  "Packages and pricing — even a range helps them decide if you fit their budget",
                  "Whether you're available on their date — an availability checker or fast response promise",
                  "Reviews that mention specific moments or emotions from the day",
                  "What's included — exactly what they get for the price, with no vague language",
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
                What your wedding vendor website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Gallery or portfolio organized by wedding style or venue type",
                  "Packages page with clear inclusions and starting prices",
                  "Inquiry form with date, venue, guest count, and budget fields",
                  "Real couple reviews with wedding details and emotional context",
                  "About section — your story, approach, and why couples choose you",
                  "FAQ section covering what couples ask before booking",
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
                &ldquo;I was spending $150 a month on The Knot listings and
                getting maybe one inquiry a month from it. My website now brings
                in 4-6 qualified inquiries a month from Google — couples who
                have already seen my portfolio and are ready to book.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Reyes, wedding photographer, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A wedding vendor site with gallery, packages, and inquiry form
                starts at $300. A full site with multiple galleries, real wedding
                features, and venue-specific pages is $600–1,000. One booking
                pays for the whole thing. No contracts, no monthly fees.
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
