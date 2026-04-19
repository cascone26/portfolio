import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Estate Planning Attorneys in Kansas City",
  description:
    "Custom websites for estate planning and elder law attorneys in the Kansas City area. Explain your planning services, build client trust, and get more will, trust, and estate consultation requests.",
  alternates: {
    canonical: "https://builtsimple.dev/for/estate-planning",
  },
};

export default function EstatePlanningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Estate Planning Attorneys in Kansas City",
    description: "Custom websites for estate planning and elder law attorneys in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Estate Planning Attorneys",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          People searching for an estate planning attorney are making one of the most important decisions of their lives. A clear, trustworthy website that explains your services and attorney background gets the consultation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Estate Planning Attorneys in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Estate Planning</span> Attorneys in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Estate planning clients are often triggered by a major life
              event — a new baby, a health scare, a parent dying without
              a will. They search with urgency, but they choose carefully.
              They want to understand what they actually need (will vs. trust,
              basic vs. comprehensive), what the process looks like, and
              whether the attorney they are considering is someone they can
              trust with their family&apos;s most important documents.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients look for in an estate planning attorney
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services — wills, trusts, powers of attorney, healthcare directives, probate, Medicaid planning",
                  "Will vs. trust explanation — when a trust is worth it, what probate avoidance actually means",
                  "Attorney credentials — years in practice, estate planning focus, board certification if applicable",
                  "Process — how long it takes, what they need to bring, number of meetings, turnaround",
                  "Flat fee vs. hourly — clients want predictable pricing for standard estate documents",
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
                What your estate planning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services — wills, revocable living trusts, POA, healthcare directive, probate, elder law",
                  "Will vs. trust guide — plain-language explanation for non-attorneys, who needs what",
                  "Attorney bio — credentials, experience, why you focus on estate planning, approachable tone",
                  "Process page — initial consultation, information gathering, drafting, signing, funding",
                  "Pricing overview — flat fee packages for basic and comprehensive estate plans",
                  "Consultation request with family situation, what documents they need, urgency",
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
                &ldquo;Our consultations used to start with twenty minutes
                of explaining the difference between a will and a trust.
                The new site with the will vs. trust guide and our process
                page means clients arrive already understanding the basics.
                Consultations are more efficient and clients are more
                confident in their decisions from the start.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Whitfield, JD, estate planning attorney, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An estate planning attorney site with services, attorney
                bio, and consultation form starts at $275. A full site
                with will vs. trust guide, process page, and pricing
                overview is $525–$1,050. One trust package covers the cost.
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
