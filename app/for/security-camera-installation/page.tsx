import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Security Camera Installation Companies in Kansas City",
  description:
    "Custom websites for security camera installation, home surveillance, and commercial camera system companies in the Kansas City area. Show your wired vs. wireless options, resolution specs, and remote monitoring to win security camera contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/security-camera-installation",
  },
};

export default function SecurityCameraInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Security Camera Installation Companies in Kansas City",
    description: "Custom websites for security camera installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Security Camera Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether wired or wireless cameras are more reliable, what resolution they actually need to identify faces at the driveway, and how long footage is stored. A website that explains the system earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Security Cameras in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Security Camera Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Security camera customers are
              homeowners who have
              had a package theft,
              a break-in attempt,
              or a neighbor incident
              and want a permanent
              recorded system rather
              than a battery-powered
              doorbell camera. The
              central education
              is wired vs. wireless:
              wired PoE (Power over
              Ethernet) systems
              (Reolink, Hikvision,
              Dahua, Lorex) run
              a single CAT5e or
              CAT6 cable to each
              camera — the cable
              carries both power
              and video. No battery
              changes, no Wi-Fi
              dependency, no compression
              artifacts from wireless
              transmission, and
              no monthly cloud
              fee if you use a
              local NVR (Network
              Video Recorder).
              Wireless cameras
              (Ring, Arlo, Wyze)
              are easier to install
              but require Wi-Fi
              signal at every
              camera location,
              batteries or plugged
              power, and most
              require a subscription
              for cloud storage.
              Resolution: 4MP
              (2688x1520) is the
              practical minimum
              for facial identification
              at a driveway; 4K
              (8MP) captures license
              plates at 30–40
              feet. Wide dynamic
              range (WDR) handles
              backlit entry points
              (door facing the
              sun). Night vision:
              infrared (black-and-white
              night footage) is
              standard; color
              night vision cameras
              (Reolink ColorX,
              Hikvision ColorVu)
              use a starlight sensor
              and supplemental
              warm light to capture
              color in low light.
              Storage: local NVR
              with 1–4TB hard
              drive stores 30+
              days of continuous
              footage from 4–8
              cameras at 4MP.
              Camera placement
              strategy: cover
              all entry points
              (front/back/side
              doors, garage), driveway,
              and side gates —
              motion zones reduce
              false alerts from
              trees and street
              traffic. A security
              camera website that
              explains PoE vs.
              wireless, resolution
              at distance, and
              local storage earns
              the homeowner who
              has outgrown a Ring
              doorbell.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing a security camera system
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Wired vs. wireless — PoE reliability vs. Wi-Fi dependency, battery hassle, subscription costs",
                  "Resolution at distance — what 2MP, 4MP, and 4K cameras actually show at driveway and street range",
                  "Local vs. cloud storage — NVR hard drive storage vs. monthly subscription, privacy difference",
                  "Night vision types — infrared black-and-white vs. color night vision, when color matters",
                  "Camera placement — which entry points matter most, how many cameras for full coverage",
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
                What your security camera website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Wired PoE system overview — how CAT5e/CAT6 carries power and video, why no Wi-Fi dependency matters",
                  "Resolution guide — 2MP vs. 4MP vs. 4K with example screenshots at typical driveway distance",
                  "Storage options — local NVR setup, storage capacity by camera count and resolution, no subscription",
                  "Night vision section — IR vs. color night vision cameras, where color makes a real difference",
                  "Placement guide — entry coverage strategy, motion zone setup, how we plan a camera layout",
                  "Consultation form with property type, number of entry points, current system, coverage goals",
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
                &ldquo;My customers used to come
                in having only seen
                Ring and Nest products —
                they thought that was
                what a camera system
                was. The website explaining
                PoE wired systems,
                local NVR storage,
                and no monthly fees
                completely changed
                who I was talking to.
                Customers who found
                me through the site
                were already sold
                on wired and asking
                about camera count
                and resolution. The
                storage section alone
                saved the sale on
                multiple jobs where
                customers had decided
                against cameras because
                they did not want
                another subscription.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Okafor, security systems installer, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A security camera site with wired
                system overview, resolution guide,
                and consultation form starts at $200.
                A full site with storage options,
                night vision section, and placement
                guide is $425–$750. One 4-camera
                PoE system covers the cost. No
                contracts, no monthly fees.
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
