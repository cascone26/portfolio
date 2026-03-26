import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Websites for Contractors in Kansas City",
  description:
    "Custom websites for plumbers, electricians, roofers, landscapers, and service businesses in the Kansas City area. Get found by customers who are searching right now.",
  alternates: {
    canonical: "https://builtsimple.dev/for/contractors",
  },
};

export default function ContractorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Websites for Contractors in Kansas City",
    description: "Custom websites for plumbers, electricians, roofers, landscapers, and service businesses in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Contractors",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Limited-time offer banner */}
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          March special: Free site mockup for your business — no cost, no commitment. Just reply to see what your site could look like.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Contractors in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Websites for{" "}
              <span className="gradient-text">Contractors</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              When someone&apos;s pipe bursts or their AC goes out, they Google
              it. 76% of people who search for a local service visit a business
              within 24 hours. If you don&apos;t have a website, you&apos;re
              invisible to those people.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What a good contractor website does
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Shows up when people Google your service in your area",
                  "Lists your services clearly so people know what you do",
                  "Makes it easy to call or request a quote",
                  "Shows reviews and past work so people trust you",
                  "Looks professional on phones — where most people search",
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
                Here&apos;s an example
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                I built this demo site for a local service business — clean
                layout, easy to navigate, works great on phones. Services, quote
                request, reviews, the works.
              </p>
              <a
                href="https://contractor-pearl.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-lg text-sm"
              >
                View demo site
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                Simple pricing
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter site with your services, contact info, and a quote
                form starts at $250. A full site with multiple pages, photo
                galleries, and service area maps is $600-1,200. No contracts, no
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
