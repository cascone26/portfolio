import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Hot Tub Repair and Service Companies in Kansas City",
  description:
    "Custom websites for hot tub repair, maintenance, and service companies in the Kansas City area. Show your service capabilities, brands you work on, and scheduling process to win repair and maintenance contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hot-tub-service",
  },
};

export default function HotTubServicePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Hot Tub Repair and Service Companies in Kansas City",
    description: "Custom websites for hot tub repair and service companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Hot Tub Service Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Hot tub owners dealing with a broken heater, pump failure, or water chemistry problem want to know you service their brand, can diagnose the problem quickly, and can get parts. A website that shows your experience with major brands and your service process earns the service call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Hot Tub Service in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Hot Tub Service</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Hot tub owners searching for repair or
              maintenance service have a specific
              concern first: do you work on my brand?
              Hot tubs vary significantly in their
              electrical systems, jets, controls,
              and proprietary parts — a technician
              unfamiliar with a specific make can
              cause more problems than they solve.
              They also want to know whether you
              stock common parts, how long diagnostics
              and repairs typically take, whether
              you offer recurring maintenance plans,
              and how to schedule service. For
              owners with newer tubs under manufacturer
              warranty or service agreements, they
              want to know whether you are an
              authorized service provider. A hot
              tub service website that lists the
              brands you specialize in, explains
              your diagnostic process, and makes
              scheduling easy earns the service
              call from owners who need a technician
              they can trust.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What hot tub owners look for in a service company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Brand experience — which makes you service (Jacuzzi, Hot Spring, Sundance, Bullfrog, Caldera)",
                  "Service capabilities — heater repair, pump replacement, jet repair, control panel, cover replacement",
                  "Parts availability — whether you stock common parts or have fast supplier access",
                  "Maintenance plans — regular water care, chemical service, quarterly inspections, drain-and-fill",
                  "Response time — how quickly you can schedule a diagnostic or repair visit",
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
                What your hot tub service website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Brand specialties — specific makes serviced, authorized service status if applicable",
                  "Repair services — heater, pump, jets, plumbing, control systems, covers, electrical",
                  "Maintenance plans — weekly/monthly chemical service, quarterly inspection, annual drain-and-fill",
                  "Water chemistry — balancing, sanitizer systems (chlorine, bromine, salt, ozone, UV)",
                  "Diagnostics process — what happens on a service call, typical repair timelines, parts sourcing",
                  "Service request form with hot tub brand, age, issue description, preferred service window",
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
                &ldquo;Hot tub owners would call
                generic pool companies who would
                show up, not know our specific
                control system, and give up. We
                specialize in the brands that are
                actually common in this area —
                Jacuzzi, Hot Spring, Sundance —
                but our old site gave no indication
                of that. The new site listing our
                brand experience, our maintenance
                plans, and our diagnostic process
                changed who calls us. We now get
                calls from owners specifically
                looking for someone who knows
                their tub, and we close almost
                all of them.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Tanner, hot tub service technician, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A hot tub service site with brands
                serviced, repair list, and scheduling
                form starts at $225. A full site
                with maintenance plan detail, water
                chemistry guide, and brand-specific
                sections is $425–$850. One heater
                replacement covers the cost.
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
