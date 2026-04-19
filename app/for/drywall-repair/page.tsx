import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Drywall Repair Companies in Kansas City",
  description:
    "Custom websites for drywall repair and finishing contractors in the Kansas City area. Show your patch quality, texture matching, and water damage restoration work to win residential and commercial repair jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/drywall-repair",
  },
};

export default function DrywallRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Drywall Repair Companies in Kansas City",
    description: "Custom websites for drywall repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Drywall Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with a hole in the wall, water stain, or ceiling crack want to see your texture matching work before they call. A website with a photo gallery organized by repair type and damage size converts online searches into booked jobs. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Drywall Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Drywall Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Drywall repair customers range from
              homeowners with a doorknob hole or
              a nail-pop ceiling to property managers
              dealing with water damage across
              multiple units to contractors needing
              a reliable finish carpenter for new
              construction punch lists. What all
              of them care about most is texture
              matching: anyone can patch a hole,
              but making it invisible on knock-down,
              orange peel, skip-trowel, or smooth
              walls is a skill. They also want to
              know whether you handle the full
              scope — tape, mud, prime, and paint
              — or only the drywall phase. Water
              damage jobs require knowing whether
              you assess the source, handle mold
              remediation referrals, and work
              with insurance adjusters. Commercial
              and multi-family customers want to
              know your crew size, your capacity
              for tenant-occupied buildings, and
              your turnaround on occupied-unit
              repairs. A drywall repair website
              that shows your texture matching
              results, communicates your repair
              scope, and makes booking a quick
              estimate visit easy converts both
              the homeowner with one bad patch
              and the property manager with
              ongoing turn work.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers look for before hiring a drywall repair contractor
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Texture matching — knock-down, orange peel, skip trowel, smooth — how well repairs blend in",
                  "Repair scope — patch only, or full tape, mud, prime, and paint to completion",
                  "Water damage — source assessment, mold check, insurance claim process, full restoration",
                  "Ceiling work — popcorn removal or repair, smooth finish, sagging repair, large area cracks",
                  "Turnaround — how long the job takes, whether staging or painting crew needs to wait",
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
                What your drywall repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before and after gallery — small patches to full room repairs, organized by damage and texture type",
                  "Texture guide — knock-down, orange peel, skip trowel, smooth — what each looks like, how you match it",
                  "Water damage repair — assessment, remediation referrals, insurance process, full scope restoration",
                  "Commercial and multi-family — crew size, tenant-occupied work, property manager pricing",
                  "Full-scope option — patch, tape, mud, sand, prime, and paint-ready vs. paint-ready finish",
                  "Estimate request form with damage description, room type, texture style, size estimate, timeline",
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
                &ldquo;Texture matching is the hardest
                part of this work and it is what
                separates us from the guys who just
                slap mud on a hole. We had no way
                to show that skill to anyone unless
                they were already in the room with
                us. The new site with our before
                and after gallery organized by
                texture type, our water damage
                restoration section, and a simple
                estimate form changed how customers
                talk to us when they call. They
                already know we do quality work
                before we answer the phone. We
                also started getting property
                manager inquiries for ongoing
                turn work, which we never had
                before.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — P. Morales, drywall contractor, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A drywall site with gallery, services,
                and estimate form starts at $200. A full
                site with texture guide, water damage
                section, and commercial page is $425–$850.
                One water damage restoration job covers
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
