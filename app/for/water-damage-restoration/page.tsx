import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Water Damage Restoration Companies in Kansas City",
  description:
    "Custom websites for water damage restoration and mitigation companies in the Kansas City area. Help homeowners and property managers find you fast after a flood or leak and trust your emergency response process.",
  alternates: {
    canonical: "https://builtsimple.dev/for/water-damage-restoration",
  },
};

export default function WaterDamageRestorationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Water Damage Restoration Companies in Kansas City",
    description: "Custom websites for water damage restoration companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Water Damage Restoration Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          When water damage happens, homeowners search immediately and call whoever looks credible and available. A website with your 24/7 emergency response, response time, IICRC certifications, and insurance billing process wins that call before your competitors answer. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Water Damage Restoration in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Water Damage Restoration</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Water damage is an emergency — homeowners
              and property managers search immediately,
              often in a panic, and they call within
              minutes of finding a company that looks
              credible. They need to know you answer
              24/7, how fast your crew can arrive,
              what the drying and mitigation process
              looks like, whether you handle insurance
              billing directly, and whether you are
              IICRC certified. The company with the
              clearest, most professional web presence
              gets called first. A water damage
              restoration website that establishes
              your emergency availability, explains
              the restoration process step by step,
              and makes calling or submitting an
              emergency request effortless captures
              the jobs that go to whoever a stressed
              homeowner finds first.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners and property managers need to know immediately
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "24/7 emergency availability — whether you answer nights, weekends, and holidays",
                  "Response time — how fast a crew can be on site after the initial call",
                  "IICRC certification — S500 water damage, S520 mold remediation, technician credentials",
                  "Insurance billing — whether you work directly with insurance adjusters and handle documentation",
                  "Process — water extraction, drying, dehumidification, monitoring, content pack-out, reconstruction",
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
                What your water damage restoration website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Emergency call-to-action — 24/7 phone number prominent on every page, response time guarantee",
                  "Services — water extraction, structural drying, sewage cleanup, mold prevention, contents restoration",
                  "Process walkthrough — step-by-step from emergency call through final clearance, timeline expectations",
                  "IICRC certifications — technician credentials, training standards, equipment used",
                  "Insurance assistance — how you work with adjusters, documentation provided, direct billing explained",
                  "Emergency request form with property type, damage source, affected area, preferred contact time",
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
                &ldquo;We were losing emergency calls to
                national franchises that came up first
                online even though we&apos;re local,
                faster, and IICRC certified. Our old
                site had nothing — no certifications,
                no process explanation, no clear
                emergency number. The new site with
                our 24/7 availability front and center,
                our IICRC credentials, our insurance
                process explained, and our step-by-step
                restoration timeline changed how people
                found us. We started getting called
                first instead of as a backup when the
                national company had a long wait.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Hartley, restoration company owner, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A water damage restoration site with
                services, certifications, and emergency
                contact form starts at $275. A full
                site with process walkthrough, insurance
                billing detail, and commercial property
                section is $525–$1,050. One job covers
                the cost immediately. No contracts,
                no monthly fees.
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
