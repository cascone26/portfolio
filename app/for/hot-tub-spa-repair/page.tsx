import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Hot Tub and Spa Repair Companies in Kansas City",
  description:
    "Custom websites for hot tub repair, spa service, and swim spa maintenance companies in the Kansas City area. Show your brand coverage, repair capabilities, and service plans to win recurring maintenance and emergency repair calls.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hot-tub-spa-repair",
  },
};

export default function HotTubSpaRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Hot Tub and Spa Repair Companies in Kansas City",
    description: "Custom websites for hot tub and spa repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Hot Tub Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Hot tub owners with an error code, a jet that stopped working, or a heater that won't fire want to know if you service their brand before they call. A website that lists brand coverage and common repairs converts panicked owners into booked service calls. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Hot Tub Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Hot Tub &amp; Spa Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Hot tub repair customers come in
              two situations. Emergency callers
              have a tub that is not heating,
              showing an error code, leaking
              under the cabinet, or has a pump
              or blower that stopped working —
              and they want to know who can come
              out fast and whether you service
              their brand. Caltech, Jacuzzi,
              Hot Spring, Sundance, Marquis,
              Master Spa, and Bullfrog all use
              different control systems, jets,
              and replacement parts, and a
              service company that does not
              stock or source parts for a
              specific brand cannot do the
              repair. Maintenance customers
              own a working tub but do not
              want to manage water chemistry
              themselves — they want a service
              company that handles quarterly
              drain-and-refills, filter changes,
              and water balance visits so the
              tub is always ready to use.
              They also want to know whether
              you handle cover replacement,
              shell refinishing, and cabinet
              panel work, since those are
              the cosmetic repairs that come
              up after a few years. A hot tub
              service website that lists the
              brands you service, explains
              your repair capabilities,
              and offers a clear maintenance
              plan earns both the emergency
              call and the ongoing service
              contract.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What hot tub owners check before calling a repair company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Brand coverage — Jacuzzi, Hot Spring, Sundance, Marquis, Master Spa, Bullfrog — do you service theirs",
                  "Common repairs — heater, pump, control board, jets, blower, air lock, error codes explained",
                  "Emergency availability — same-day or next-day service, after-hours calls, response time",
                  "Maintenance plans — water balance, filter service, quarterly drain-and-refill — what is included",
                  "Parts — whether you stock common parts or have to order them and how that affects repair time",
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
                What your hot tub repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Brand list — every make and model you service, clearly visible — this is the first filter customers use",
                  "Repair guide — heater, pump, jets, blower, control board, error codes — what symptoms mean what",
                  "Maintenance plan — quarterly service, water chemistry, filter replacement, drain-and-refill pricing",
                  "Emergency service — response time, after-hours availability, what to do while waiting",
                  "Cosmetic services — cover replacement, shell refinishing, cabinet panel repair, pillow replacement",
                  "Service request form with brand, model, age, symptoms or error codes, preferred schedule",
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
                &ldquo;Hot tub owners call in a
                panic — their heater is out in
                January or they have an error
                code they can not interpret —
                and the first thing they want
                to know is whether you service
                their brand. I was losing calls
                before they even talked to me
                because I had no website listing
                what I work on. The new site
                with my brand coverage front
                and center, my common repair
                guide explaining what error
                codes mean, and my maintenance
                plan outlined brought in both
                emergency repair calls and
                owners who signed up for
                quarterly service. The recurring
                maintenance revenue alone
                changed my business.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Johansson, hot tub service technician, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A hot tub repair site with brand coverage,
                services, and contact form starts at $200.
                A full site with repair guide, maintenance
                plan, and cosmetic services is $425–$850.
                One heater replacement covers the cost.
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
