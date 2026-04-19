import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Drone Services in Kansas City",
  description:
    "Custom websites for drone photography, videography, and inspection companies in the Kansas City area. Showcase your aerial portfolio, FAA credentials, and service capabilities to win commercial and real estate clients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/drone-services",
  },
};

export default function DroneServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Drone Services in Kansas City",
    description: "Custom websites for drone photography and aerial services in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Drone Services",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Real estate agents, developers, and commercial clients hiring a drone operator want to see your aerial portfolio, confirm your FAA Part 107 certification, and understand your turnaround and deliverable process. A strong website closes the deal. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Drone Services in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Drone Services</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Clients hiring a drone operator — whether a real estate
              agent needing listing photos, a developer documenting
              construction progress, or a commercial company ordering
              a roof or cell tower inspection — make their decision
              almost entirely based on what they see online. They
              want to know you are FAA certified, insured, and
              capable of delivering broadcast-quality footage or
              detailed inspection data on deadline. A drone services
              website that leads with your aerial portfolio, shows
              your certification and insurance credentials upfront,
              and explains your turnaround time and deliverable
              formats earns the booking over competitors who just
              post a cell number.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients look for when hiring a drone operator
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Aerial portfolio — real estate, construction, commercial, events, inspections — by project type",
                  "FAA Part 107 certification and liability insurance — required before any serious client hires",
                  "Services — photography, video, inspection, mapping, 3D modeling, thermal imaging",
                  "Turnaround time — when they get edited files, what format, how many deliverables",
                  "Equipment — drone models, camera specs, resolution, stabilization capabilities",
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
                What your drone services website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Aerial portfolio — real estate listings, construction sites, commercial properties, event coverage",
                  "Services — real estate photography, construction documentation, roof inspection, mapping, events",
                  "Credentials — FAA Part 107 license number, liability insurance, LAANC airspace authorization",
                  "Equipment specs — drone models, camera resolution, stabilization, thermal imaging capability",
                  "Deliverables — file formats, resolution options, turnaround time, cloud delivery method",
                  "Booking form with project type, location, date, property size, specific shot requirements",
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
                &ldquo;Real estate agents were booking whoever
                they found first because they all looked the
                same. The new site with my actual portfolio
                organized by listing type, my Part 107 cert
                displayed upfront, and a booking form that
                asked for property address and shoot date
                immediately changed how agents treated me.
                I went from quoting people cold to having
                agents come in already knowing my rates
                and ready to book the next listing.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Fitzgerald, drone operator, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A drone services site with portfolio, credentials,
                and booking form starts at $250. A full site with
                service-specific pages, equipment specs, and
                inspection or mapping detail is $475–$950.
                Two real estate shoots cover the cost.
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
