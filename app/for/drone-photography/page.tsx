import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Drone Photographers and Videographers in Kansas City",
  description:
    "Custom websites for drone photographers and videographers in the Kansas City area. Show your portfolio by project type, FAA certifications, and service capabilities to win real estate, construction, and event contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/drone-photography",
  },
};

export default function DronePhotographyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Drone Photographers and Videographers in Kansas City",
    description: "Custom websites for drone photographers and videographers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Drone Photographers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Real estate agents, contractors, and event planners hiring a drone operator want to see your FAA Part 107 certification, your portfolio organized by project type, and whether you carry liability insurance. A website that answers those questions and shows your best work wins the contract before anyone else gets a call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Drone Photography in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Drone Photographers</span> &amp; Videographers in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Drone operators serving commercial clients
              face a specific credentialing hurdle before
              any conversation about creative work can
              happen: clients want to know you are FAA
              Part 107 certified, that you carry liability
              insurance, and that you have filed for any
              required airspace authorizations before
              the shoot date. Real estate photographers
              need to show listing-quality aerial images
              of residential and commercial properties
              at various price points. Construction and
              infrastructure clients want to see progress
              documentation, inspection footage, and
              orthomosaic mapping capabilities. Event
              and marketing clients want to see cinematic
              video and the camera equipment you fly
              (DJI Mavic 3 Pro, Autel EVO II, Inspire
              series). A drone photography website that
              leads with your credentials and insurance,
              organizes your portfolio by client type,
              and makes getting a quote fast earns the
              commercial contracts that fill a full
              schedule year-round.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients check before hiring a drone operator
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "FAA Part 107 certification — commercial drone operations require it, clients check",
                  "Liability insurance — most commercial clients require certificate of insurance before booking",
                  "Portfolio by type — real estate, construction progress, events, mapping, inspections",
                  "Equipment — camera resolution, sensor size, stabilization, flight time, redundancy",
                  "Airspace experience — LAANC authorization, controlled airspace, urban operation experience",
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
                What your drone photography website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Credentials — FAA Part 107 certificate number, liability insurance carrier and limits",
                  "Portfolio gallery — real estate, construction, events, mapping, inspection organized by industry",
                  "Equipment — camera specs, drone models, gimbal stabilization, raw/edited delivery formats",
                  "Services — stills, video, 4K/6K resolution, 360 panoramas, orthomosaic maps, thermal imaging",
                  "Airspace process — how you handle controlled airspace authorization before every shoot",
                  "Quote form with project type, location, date, deliverables needed, turnaround requirement",
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
                &ldquo;Real estate agents kept asking
                me if I was Part 107 certified and
                insured before we could even talk
                about price. I was both, but I had
                nowhere to show it. My Instagram had
                great footage but no credentials,
                no service breakdown, no way to
                request a quote. The new site with
                my certification front and center,
                my portfolio organized by listing
                type, and a quote form that captures
                exactly what I need changed the
                entire conversation. Agents send
                me listings now — I don&apos;t
                chase them.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Okafor, drone operator, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A drone photography site with credentials,
                portfolio, and quote form starts at $225.
                A full site with industry-specific galleries,
                equipment detail, and service breakdowns
                is $425–$850. Two listing shoots cover
                the cost. No contracts, no monthly fees.
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
