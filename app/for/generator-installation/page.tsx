import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Generator Installation Companies in Kansas City",
  description:
    "Custom websites for standby generator installation and service companies in the Kansas City area. Educate homeowners about whole-home backup power and get more Generac and Kohler installation quotes.",
  alternates: {
    canonical: "https://builtsimple.dev/for/generator-installation",
  },
};

export default function GeneratorInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Generator Installation Companies in Kansas City",
    description: "Custom websites for standby generator installation and service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Generator Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          After every major power outage, Kansas City homeowners search for standby generator installers. Be the local authorized dealer they find first — with clear sizing guides and honest pricing. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Generator Installers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Generator Installation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Standby generator installation is a high-consideration purchase
              that homeowners research carefully — what size they need, what
              brand to choose, what the installation involves, and whether
              natural gas or propane makes more sense. The installers who
              get the most leads are authorized dealers who explain all of
              this clearly on their website and make it easy to request a
              load assessment and quote.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before buying a standby generator
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Brands — Generac, Kohler, Briggs and Stratton, Cummins — and which is most reliable",
                  "Generator sizing — how many kilowatts to power their home, essential circuits vs. whole-home",
                  "Fuel type — natural gas vs. propane, which is better for KC, tank requirements",
                  "Installation process — permit, utility coordination, transfer switch, concrete pad, timeline",
                  "Annual maintenance — what's required, whether the installer offers service plans",
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
                What your generator installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Brands page — Generac, Kohler, Cummins with product lines, kW ranges, and certifications",
                  "Sizing guide — essential circuits vs. whole-home, kW calculator, what affects sizing",
                  "Fuel type explainer — natural gas vs. propane for KC homeowners",
                  "Installation process — site assessment, permitting, utility coordination, timeline",
                  "Maintenance and service — annual maintenance plans, what's included, why it matters",
                  "Quote form with home size, fuel type, what they want to power, urgency",
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
                &ldquo;Most of our leads used to come from the manufacturer
                dealer locator, which showed us next to every other installer
                in the area with no differentiation. Our own website with
                the sizing guide and fuel type comparison page now drives
                more quote requests than the manufacturer referrals — and
                those leads are much better qualified.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Fitzgerald, generator installation company, Lee's Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A generator installer site with brands, sizing guide, and
                quote form starts at $300. A full site with product pages,
                fuel comparison, installation process, and service plans is
                $550–$1,100. One installation covers the cost. No contracts,
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
