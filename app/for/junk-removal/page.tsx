import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Junk Removal Companies in Kansas City",
  description:
    "Custom websites for junk removal businesses in the Kansas City area. Rank for urgent local searches, get more booking calls, and stand out from the guys with a pickup truck and a Facebook page.",
  alternates: {
    canonical: "https://builtsimple.dev/for/junk-removal",
  },
};

export default function JunkRemovalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Junk Removal Companies in Kansas City",
    description: "Custom websites for junk removal businesses in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Junk Removal Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          People searching for junk removal want someone fast, professional, and upfront about pricing. Be that company online. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Junk Removal Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Junk Removal</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Junk removal is an urgent-need business. When someone decides they
              need something hauled, they want it gone — fast. The companies that
              get the call are the ones who show up in local search, look
              professional, and make it clear they can be there quickly. A
              real website separates you from the Craigslist competition before
              the phone rings.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers check before booking junk removal
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pricing — is it by load, by item, or by the hour? Any upfront pricing?",
                  "What you take and what you don't — hazardous materials, appliances, electronics",
                  "How quickly they can get someone out — same-day or next-day availability",
                  "Whether you donate or recycle before hauling to the dump",
                  "Proof of insurance and whether your team is professional (not just a guy with a truck)",
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
                What your junk removal website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service types — household junk, furniture, appliances, estate cleanouts, construction debris",
                  "Pricing guide — load size tiers, item lists, or quote request with job description",
                  "Before/after photos of cleanouts — especially garages, basements, and full rooms",
                  "Availability callout — same-day service highlighted prominently",
                  "What happens to your items — donation, recycling, and responsible disposal",
                  "Fast quote form — address, description, and a photo upload option",
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
                &ldquo;Before the site, people would find us on Craigslist or ask
                a neighbor. Now we rank for junk removal in two KC suburbs and
                the calls come in steady. The before/after garage photos on the
                homepage close more jobs than anything else — people can see exactly
                what we do before they even call.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Johnson, junk removal company, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A junk removal site with services, pricing info, and quote form
                starts at $200. A full site with service-type pages, before/after
                gallery, and same-day availability callout is $400–700. Two
                full-load jobs cover the cost. No contracts, no monthly fees.
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
