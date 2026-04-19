import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Fire Damage Restoration Companies in Kansas City",
  description:
    "Custom websites for fire and smoke damage restoration companies in the Kansas City area. Help homeowners and property managers navigate the restoration process with a credible, informative website that earns their trust after a traumatic event.",
  alternates: {
    canonical: "https://builtsimple.dev/for/fire-damage-restoration",
  },
};

export default function FireDamageRestorationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Fire Damage Restoration Companies in Kansas City",
    description: "Custom websites for fire damage restoration companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Fire Damage Restoration Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          After a fire, homeowners and insurance adjusters both need to find a restoration company they can trust immediately. A website with your certifications, your smoke and soot removal process, your contents restoration capabilities, and your insurance claim support earns the contract before a competitor does. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Fire Damage Restoration in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Fire Damage Restoration</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Homeowners dealing with fire and smoke
              damage are in crisis — the event was
              traumatic, their home may be uninhabitable,
              and they are simultaneously dealing with
              insurance adjusters, temporary housing,
              and the overwhelming task of figuring
              out what can be restored. They need
              a restoration company that appears
              credible, experienced, and capable
              of navigating the insurance process
              with them. Before they call, they
              check your IICRC certifications,
              your process for smoke and soot
              removal, whether you handle contents
              restoration and pack-out, and whether
              you work directly with insurance
              adjusters. A fire damage restoration
              website that demonstrates deep expertise,
              explains the restoration timeline
              honestly, and positions your team
              as a steady hand through a difficult
              process earns the contract from families
              who desperately need someone they
              can trust.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners and adjusters need to know after a fire
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "IICRC certifications — FSRT (Fire and Smoke Restoration), AMRT (Applied Microbial), technician credentials",
                  "Smoke and soot removal — process for structure, contents, HVAC, odor elimination",
                  "Contents restoration — pack-out, cleaning, storage, what can and cannot be restored",
                  "Insurance process — how you work with adjusters, Xactimate documentation, scope of loss",
                  "Timeline — what happens in the first 24 hours, phases of restoration, what drives the schedule",
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
                What your fire damage restoration website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "IICRC certifications — FSRT, AMRT, WRT credentials, technician training standards",
                  "Process walkthrough — board-up/securing, smoke removal, soot cleaning, odor treatment, rebuild",
                  "Contents restoration — pack-out process, cleaning methods, electronic and textile restoration",
                  "Smoke damage — structural, HVAC, hidden damage in walls and attic, odor sealing",
                  "Insurance assistance — adjuster coordination, Xactimate documentation, supplement process",
                  "Emergency contact form with property type, fire extent, insurance carrier, current status",
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
                &ldquo;When families are searching
                after a fire, they are overwhelmed
                and they call the first company
                that looks like it knows what
                it&apos;s doing. Our old website
                had nothing — no certifications,
                no process, no explanation of how
                we work with insurance. We were
                losing contracts to companies
                that showed up faster online.
                The new site with our FSRT
                certification, our process timeline,
                our contents restoration detail,
                and our insurance support explained
                changed how families found us.
                We get calls from people who have
                already decided we&apos;re the
                company they want.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Parrish, restoration company owner, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A fire damage restoration site with
                services, certifications, and emergency
                contact form starts at $275. A full
                site with process walkthrough, contents
                restoration detail, and insurance
                documentation guide is $525–$1,050.
                One mid-size restoration job covers
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
