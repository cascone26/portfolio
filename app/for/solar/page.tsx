import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Solar Installers in Kansas City",
  description:
    "Custom websites for residential and commercial solar installation companies in the Kansas City area. Educate homeowners, build trust, and get more qualified solar quote requests.",
  alternates: {
    canonical: "https://builtsimple.dev/for/solar",
  },
};

export default function SolarPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Solar Installers in Kansas City",
    description: "Custom websites for residential and commercial solar installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Solar Installers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners researching solar spend weeks comparing companies before requesting a quote. The installer with the clearest education, local track record, and real project photos gets the appointment. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Solar Installers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Solar Installers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Solar is a high-consideration purchase — homeowners are comparing
              multiple installers, checking reviews, and reading about panels
              and financing for weeks before requesting a quote. The installers
              who win are the ones who educate clearly, show real local
              installations, explain federal and state incentives honestly, and
              look more trustworthy than the national door-knockers who show
              up uninvited.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing a solar installer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Panel brands and efficiency ratings — LG, SunPower, Panasonic, REC, Q Cells, Canadian Solar",
                  "Financing options — cash, loan, lease, PPA — and how each affects ownership and savings",
                  "Federal tax credit and Missouri/Kansas state incentives — what they qualify for",
                  "How long installation takes and what the process looks like start to finish",
                  "Warranty — panel performance warranty, inverter warranty, workmanship warranty",
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
                What your solar company website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Panel brands and products — what you install, why, and how they compare",
                  "Incentives page — federal ITC, Missouri and Kansas state programs, utility rebates",
                  "Financing explainer — cash vs. loan vs. lease, what each means for ownership and savings",
                  "Installation process — assessment, design, permitting, installation, inspection, activation",
                  "Project gallery — local installs with system size, roof type, and estimated savings",
                  "Quote form with home size, electric bill, and roof type to pre-qualify leads",
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
                &ldquo;We were getting outcompeted by the national door-to-door
                companies on SEO because they have massive sites. The new
                website with our local installations, honest incentive
                breakdown, and financing comparison started ranking for KC
                solar searches and we saw qualified lead volume increase
                significantly — people calling us already knew what they
                wanted.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — E. Blackwell, solar installation company, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A solar installer site with products, incentives, and quote
                form starts at $300. A full site with financing explainer,
                project gallery, and local incentive detail is $500–$1,100.
                One install covers the investment. No contracts, no monthly
                fees.
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
