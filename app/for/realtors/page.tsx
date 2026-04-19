import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Realtors in Kansas City",
  description:
    "Custom websites for real estate agents and brokers in the Kansas City area. Build your personal brand, showcase your listings, and generate buyer and seller leads with a site built around how KC buyers search.",
  alternates: {
    canonical: "https://builtsimple.dev/for/realtors",
  },
};

export default function RealtorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Realtors in Kansas City",
    description: "Custom websites for real estate agents and brokers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Realtors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Buyers and sellers research agents before they reach out to anyone. A personal real estate website with your sales history, KC neighborhood expertise, and a clear value proposition builds the trust that makes someone choose you over a referral. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Realtors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Realtors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Most buyers and sellers look up their agent online
              before they commit — even referrals. What they find
              (or do not find) influences whether they move forward
              with you or keep looking. A personal real estate
              website that shows your production history, your
              neighborhood expertise in the specific KC suburbs
              you work, and your process for buyers and sellers
              builds credibility that a profile page on your
              broker&apos;s site simply cannot.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What buyers and sellers look for when choosing a realtor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Production history — how many homes sold, average days on market, list-to-sale ratio",
                  "Neighborhood expertise — specific KC communities (Brookside, Waldo, Leawood, Olathe, Liberty)",
                  "Buyer process — pre-approval guidance, search strategy, offer process, what you do differently",
                  "Seller services — listing prep, staging guidance, marketing plan, professional photography",
                  "Testimonials — past client reviews from recognizable KC neighborhoods and price points",
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
                What your realtor website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "About page — your KC background, why you are in real estate, neighborhood expertise",
                  "Recent sales — homes you have sold with neighborhoods and price ranges shown",
                  "Buyer guide — your process from pre-approval to closing, what you do to win offers in KC",
                  "Seller guide — your listing process, marketing approach, how you price homes",
                  "Neighborhood pages — areas you specialize in with market context",
                  "Contact form with buyer vs. seller, price range, timeline, neighborhoods of interest",
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
                &ldquo;Referrals would Google me before calling
                and if they did not find anything compelling they
                would keep looking. The new site with my sales
                history, the Brookside and Waldo neighborhood pages,
                and my buyer guide meant referrals arrived already
                convinced. I also started getting organic leads from
                people specifically searching for an agent who
                knows those neighborhoods.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Gallagher, realtor, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A realtor site with about page, recent sales, and
                contact form starts at $275. A full site with buyer
                and seller guides, neighborhood pages, and
                testimonials is $525–$1,050. One closed
                transaction covers the cost.
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
