import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for RV Repair Shops in Kansas City",
  description:
    "Custom websites for RV repair and service shops in the Kansas City area. Show your technician certifications, service capabilities, and parts inventory to earn more jobs from RV owners in KC.",
  alternates: {
    canonical: "https://builtsimple.dev/for/rv-repair",
  },
};

export default function RvRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for RV Repair Shops in Kansas City",
    description: "Custom websites for RV repair and service shops in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for RV Repair Shops",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          RV owners need a repair shop they can trust with a vehicle that is also their home — they want to see your technician certifications, brands you service, and whether you can handle their specific problem before they tow in. A website that shows all of that earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For RV Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">RV Repair</span> Shops in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              RV owners are highly invested in their
              vehicles — many are full-timers who live
              in their rig or families who plan vacations
              around it. When something breaks, they
              need a shop they can trust with something
              they care about deeply. Before they call,
              they want to know whether you are RVIA
              certified, which brands and systems you
              service (slide-outs, solar, propane,
              generators, roof, plumbing, HVAC),
              whether you have parts in stock or can
              get them quickly, and whether you do
              mobile service or require tow-in. An
              RV repair website that establishes your
              credentials, lists your service capabilities
              clearly, and makes scheduling easy earns
              the job from the RV owner who needs
              someone they can rely on before their
              next trip.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What RV owners look for when choosing a repair shop
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Certifications — RVIA/RVDA technician certification, manufacturer authorizations, years of experience",
                  "Brands serviced — Class A/B/C, fifth wheels, travel trailers, toy haulers — which they handle",
                  "Systems expertise — slide-outs, propane, generator, solar, roof, plumbing, HVAC, electrical",
                  "Mobile service — whether they come to your campsite or you need to bring the RV in",
                  "Parts — whether they stock common parts or can order quickly, turnaround time on repairs",
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
                What your RV repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Credentials — RVIA certifications, manufacturer authorizations, technician bios and experience",
                  "Services — slide-out repair, roof seal/replacement, generator, propane, solar, HVAC, water systems",
                  "RV types — Class A motorhomes, Class B/C, fifth wheels, travel trailers, toy haulers",
                  "Mobile service — service area, when they come to you vs. shop-only, campground calls",
                  "Parts and turnaround — parts sourcing, typical repair timelines, warranty on parts and labor",
                  "Service request form with RV type, brand/model, year, problem description, and location",
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
                &ldquo;RV owners were calling us but they
                often didn&apos;t know if we could handle
                their specific rig or problem. We had a
                lot of phone conversations just to establish
                that yes, we service their brand and yes,
                we can fix that specific system. The new
                site with our certifications listed, our
                services broken down by system, and the
                brands we work on laid out clearly brought
                in much better calls. People called
                already knowing we could help them —
                the conversation went straight to
                scheduling.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Grimes, RV repair shop owner, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An RV repair site with services, credentials,
                and service request form starts at $250. A
                full site with system-specific service pages,
                parts information, and mobile service coverage
                is $475–$950. One generator or slide-out
                repair covers the cost.
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
