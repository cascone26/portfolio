import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Accountants & CPA Firms in Kansas City",
  description:
    "Custom websites for accountants and CPA firms in the Kansas City area. Build trust before the first meeting, get found during tax season, and turn Google searches into new clients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/accountants",
  },
};

export default function AccountantsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Accountants & CPA Firms in Kansas City",
    description:
      "Custom websites for accountants and CPA firms in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Accountants and CPA Firms",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Limited-time offer banner */}
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          March special: Free site mockup for your accounting firm — no cost, no commitment. Just reply to see what your site could look like.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Accountants & CPA Firms in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Accountants & CPA Firms</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              People choose their accountant based on trust — and that trust
              starts forming before the first meeting. When a small business
              owner or family is searching for a CPA in Kansas City, your
              website is the thing that convinces them you&apos;re the right
              call to make.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients look for when choosing an accountant
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services offered — tax prep, bookkeeping, payroll, business consulting",
                  "Who you work with — individuals, small businesses, or both",
                  "Credentials — CPA designation, years in practice, professional affiliations",
                  "Pricing transparency or an offer for a free initial consultation",
                  "An easy way to reach you — especially during tax season when timing matters",
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
                What your accounting firm website would include
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Every site is built to your firm&apos;s specific services and
                client base, but here&apos;s what most accounting practices need:
              </p>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Clear services breakdown — personal tax, business tax, bookkeeping, payroll, advisory",
                  "Credentials section — CPA license, designations, years in practice, professional memberships",
                  "Client testimonials — especially from small business owners and long-term clients",
                  "FAQ section covering common tax and filing questions your clients always ask",
                  "Contact form and scheduling link so prospects can book a consultation directly",
                  "Mobile-optimized layout — people are searching on their phones during tax season",
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
                &ldquo;Tax season used to be word-of-mouth only. Now I get new
                clients every February and March from Google — people who found
                me searching for a CPA near them and liked what they saw on the
                site. It&apos;s become my best referral source.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Hartwell, CPA, North KC, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter site with your services, credentials, and contact info
                starts at $250. A full site with services detail, client FAQ,
                testimonials, and a scheduling integration is $600-1,100. No
                contracts, no monthly fees.
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
