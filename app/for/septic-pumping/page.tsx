import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Septic Pumping and Service Companies in Kansas City",
  description:
    "Custom websites for septic pumping, septic inspection, and drain field service companies in the Kansas City area. Show your service schedule, inspection process, and system expertise to win residential and commercial septic contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/septic-pumping",
  },
};

export default function SepticPumpingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Septic Pumping and Service Companies in Kansas City",
    description: "Custom websites for septic pumping and service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Septic Service Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with a septic system often do not know when it was last pumped, what size their tank is, or what signs of failure to watch for. A website that educates them and makes scheduling easy earns the routine pumping call before it becomes an emergency. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Septic Service in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Septic Pumping</span> &amp; Service Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Septic service customers come in
              two modes. Routine maintenance
              customers know they should pump
              every three to five years but have
              put it off and need to schedule
              before the system backs up. Emergency
              customers have sewage surfacing in
              the yard, slow drains in every
              fixture, or a tank alarm going
              off — and they need someone today.
              Both audiences want the same
              basic information: what the service
              includes (pump only vs. pump and
              inspect), whether you locate the
              lid if it is buried and what that
              costs, what the pumping price
              range is for their tank size,
              and whether you service aerobic
              systems and alternative systems
              in addition to conventional
              gravity tanks. Real estate
              transactions require septic
              inspections with written reports
              and dye testing in many cases —
              a separate service that needs
              to be clearly offered. Customers
              buying rural properties want
              to know whether you do system
              design and installation for
              new construction. A septic
              service website that explains
              the pumping process, shows
              the service scope, and makes
              scheduling fast earns both
              the routine pump customer
              and the emergency call before
              they have a real problem.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners want to know before calling a septic company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service scope — pump only, or pump plus inspection, riser installation, lid locate, filter cleaning",
                  "Pricing — what affects the cost, tank size tiers, lid locate fee, after-hours or emergency rate",
                  "System types — conventional gravity, aerobic, mound, drip — whether you service all of them",
                  "Inspection services — real estate inspection, dye test, written report for buyers and lenders",
                  "Failure signs — slow drains, wet spots in yard, odor, alarm — what to watch for between pumps",
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
                What your septic service website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Pumping service — what is included, how often needed, tank size guide, what happens during the visit",
                  "System types — conventional, aerobic, mound, chamber — what each is, which you service",
                  "Real estate inspections — buyer and seller inspection, dye test, written report, timeline for closings",
                  "Repair services — drain field issues, baffle replacement, riser installation, distribution box repair",
                  "Emergency service — backup or overflow, after-hours availability, what to do before we arrive",
                  "Scheduling form with tank size if known, system type, last pumped date, address, urgency level",
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
                &ldquo;Most customers call us
                when something is already wrong —
                they have a wet spot in the
                yard or slow drains everywhere
                and they are panicking. Without
                a website, we could not reach
                the homeowners who would have
                scheduled a routine pump before
                it became an emergency. The
                new site with our failure signs
                explained, our system types
                listed, and our real estate
                inspection section clearly
                written brought in both the
                routine pumping calls we
                could not reach before and
                a steady stream of real estate
                referrals from agents who
                now send buyers and sellers
                our way for every rural
                property closing.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Hutchinson, septic service owner, Harrisonville, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A septic service site with services,
                system types, and scheduling form
                starts at $200. A full site with
                real estate inspection section,
                repair services, and system guide
                is $425–$850. One real estate
                inspection referral network covers
                the cost in a month.
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
