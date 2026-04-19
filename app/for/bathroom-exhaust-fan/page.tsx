import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Bathroom Exhaust Fan Companies in Kansas City",
  description:
    "Custom websites for bathroom exhaust fan installation, bathroom ventilation, and bathroom fan replacement companies in the Kansas City area. Show your CFM ratings, humidity sensing options, and quiet fan models to win bathroom ventilation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/bathroom-exhaust-fan",
  },
};

export default function BathroomExhaustFanPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Bathroom Exhaust Fan Companies in Kansas City",
    description: "Custom websites for bathroom exhaust fan installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Bathroom Exhaust Fan Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what CFM rating their bathroom needs, whether humidity-sensing fans are worth the extra cost, and how quiet a bathroom fan can actually be. A website that explains sone ratings and sizing earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Bathroom Fans in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Bathroom Exhaust Fan</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Bathroom exhaust fan customers
              are homeowners with
              a bathroom that fogs
              up completely after
              a shower, paint or
              drywall that shows
              moisture damage, persistent
              mildew smell, or
              an original builder-grade
              fan that sounds like
              a helicopter and
              moves almost no air.
              The central education
              is CFM sizing: the
              Home Ventilating Institute
              recommends 1 CFM per
              square foot for bathrooms
              up to 100 sq ft —
              a standard 50 CFM
              fan is undersized
              for most modern bathrooms.
              For bathrooms over
              100 sq ft, add 50
              CFM per toilet, shower,
              and tub separately.
              Sone rating measures
              acoustic output: 1.0
              sone is roughly the
              sound of a quiet
              refrigerator; 0.3
              sone fans (Panasonic
              WhisperCeiling, Broan
              ULTRA) are nearly
              silent. Most builder-grade
              fans are 3.0–4.0
              sones. Humidity-sensing
              fans (Panasonic WhisperSense,
              Delta Breez) detect
              moisture automatically
              and run until humidity
              drops — they prevent
              forgetting to turn
              on the fan and are
              the best solution
              for mold-prone bathrooms.
              Motion-sensing models
              are useful for guest
              bathrooms and kids&apos;
              bathrooms. DC motor
              fans (Panasonic, Delta)
              use 60–70% less energy
              than AC motor fans.
              Duct routing is the
              installation variable:
              bathroom fan must
              exhaust to the exterior
              — attic dumping causes
              moisture damage and
              mold in the attic
              deck. Common issues:
              existing duct is
              undersized (3" instead
              of 4"), duct runs
              too long, or the
              original fan is
              capped and not actually
              venting outside.
              A bathroom fan website
              that explains CFM
              sizing, humidity-sensing
              options, and sone
              ratings earns the
              homeowner whose fan
              is louder than the
              shower itself.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before replacing a bathroom exhaust fan
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "CFM sizing — how to calculate the right airflow for bathroom square footage, toilet, shower, tub",
                  "Sone ratings — what sone numbers mean, how quiet 0.3 sone actually is vs. builder-grade fans",
                  "Humidity-sensing fans — how they work, why auto-sensing beats manual switching for mold prevention",
                  "DC motor efficiency — energy savings vs. standard AC motor fans, payback on premium models",
                  "Duct routing — why attic dumping causes mold, what proper exterior venting looks like",
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
                What your bathroom fan website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "CFM sizing guide — HVI formula for bathroom size, toilet, shower, tub — what the right fan looks like",
                  "Fan options — quiet DC models, humidity-sensing, motion-sensing, combination light/fan/heat units",
                  "Sone comparison — acoustic ratings explained, what each level sounds like in a real bathroom",
                  "Duct inspection — what we check, why exterior venting matters, how we fix undersized or improperly routed duct",
                  "Brands we install — Panasonic WhisperCeiling, Broan ULTRA, Delta Breez — efficiency and noise ratings",
                  "Quote form with bathroom size, current fan condition, moisture problems, feature preferences",
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
                &ldquo;Most of my bathroom fan
                calls start with the
                customer telling me
                the old fan is loud
                and the bathroom still
                fogs up. When they
                find the website first,
                they already know
                what CFM they need,
                they have looked at
                the humidity-sensing
                option, and half
                of them specifically
                ask for the Panasonic
                WhisperSense by name.
                The sone rating section
                also helped — customers
                stopped being surprised
                by how quiet the
                new fan is and started
                expecting it. I get
                fewer price objections
                on the premium models
                now because the value
                was already explained.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Nguyen, electrical contractor, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A bathroom fan site with CFM sizing
                guide, fan options, and quote form
                starts at $200. A full site with sone
                comparison, humidity-sensing section,
                and duct inspection guide is $425–$750.
                One bathroom fan installation covers
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
