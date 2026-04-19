import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Home Security Companies in Kansas City",
  description:
    "Custom websites for local home security installation and monitoring companies in the Kansas City area. Build trust with homeowners, explain your monitoring options, and compete with the national brands.",
  alternates: {
    canonical: "https://builtsimple.dev/for/security-systems",
  },
};

export default function SecuritySystemsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Home Security Companies in Kansas City",
    description: "Custom websites for local home security installation and monitoring companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Home Security Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners comparing security systems do their research online before signing anything. A local company that explains its equipment, monitoring, and contract terms clearly wins customers from ADT and Ring every day. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Home Security Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Home Security</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Local security installers have a real advantage over the national
              brands — faster response, local technicians, and no pressure
              sales tactics. But that advantage is invisible if you don&apos;t
              have a website to communicate it. A local security company site
              that explains what equipment you install, how monitoring works,
              and what contracts (or lack of contracts) look like earns the
              customer who just got burned by a national company or is
              comparing their options for the first time.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check before choosing a security company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Equipment — cameras, sensors, smart locks, video doorbells, panels, brands used",
                  "Monitoring — 24/7 professional monitoring, self-monitoring, cellular backup, response time",
                  "Contracts — length, cancellation terms, equipment ownership vs. lease",
                  "Smart home integration — works with Alexa, Google Home, Apple HomeKit, Z-Wave",
                  "Local vs. national — response time advantage, local installer, local monitoring station",
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
                What your home security website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Equipment page — cameras, sensors, locks, video doorbell, panels — brands and specs",
                  "Monitoring options — professional monitoring plans, self-monitoring, cellular vs. broadband",
                  "No-contract vs. contract comparison — honest breakdown of how your terms work",
                  "Smart home integration — compatible devices and ecosystems",
                  "Why local page — response time, local technicians, local accountability vs. national chains",
                  "Free quote form with home size, current security setup, and priorities",
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
                &ldquo;ADT and Vivint had all the search visibility because
                they spend millions on SEO. After the website went up with
                our no-contract monitoring comparison and local technician
                page, we started showing up for local searches and customers
                found us specifically because they wanted a local company
                with no long-term contract. That&apos;s our whole pitch and
                the site makes it loud.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Osei, home security company, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A home security site with equipment, monitoring options, and
                free quote form starts at $250. A full site with product pages,
                monitoring plan comparison, and why-local content is $450–$950.
                One new monitoring customer covers the first year. No contracts,
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
