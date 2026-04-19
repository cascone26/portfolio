import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Transmission Repair Shops in Kansas City",
  description:
    "Custom websites for transmission repair and rebuild shops in the Kansas City area. Build trust with worried car owners, explain your diagnostic process, and get more transmission service appointments.",
  alternates: {
    canonical: "https://builtsimple.dev/for/transmission-repair",
  },
};

export default function TransmissionRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Transmission Repair Shops in Kansas City",
    description: "Custom websites for transmission repair and rebuild shops in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Transmission Repair Shops",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Transmission problems are among the most stressful repairs a car owner faces. The shop that explains their diagnostic process and stands behind their work with a real warranty earns the appointment over every competitor. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Transmission Shops in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Transmission Repair</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              When a car owner hears &quot;your transmission is slipping,&quot;
              they immediately search for a specialist — not a general mechanic.
              They want to find a shop that focuses on transmissions, explains
              what the problem likely is, tells them what a repair vs. rebuild
              vs. replacement involves, and backs the work with a warranty.
              That information on your website is what earns the diagnostic
              appointment before they call anyone else.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What car owners look for in a transmission shop
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Specialization — a shop focused on transmissions, not a general mechanic doing everything",
                  "Repair vs. rebuild vs. replacement — honest explanation of the options and when each makes sense",
                  "Symptoms guide — slipping, shuddering, hard shifts, no reverse, fluid leak — helps them self-diagnose",
                  "Warranty — 12/12, 24/24, nationwide warranty through ATRA or similar",
                  "Transmission types — automatic, manual, CVT, DSG — do they work on their vehicle",
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
                What your transmission shop website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services — repair, rebuild, replacement, fluid service, solenoid replacement, TCM",
                  "Symptoms guide — what each warning sign might mean, when to bring it in",
                  "Repair vs. rebuild vs. replacement — decision guide with honest cost comparisons",
                  "Transmission types — automatic, manual, CVT, AWD/4WD transfer case",
                  "Warranty page — what your warranty covers, ATRA membership if applicable",
                  "Appointment form with vehicle info, symptoms, mileage, urgency",
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
                &ldquo;People were calling the chain shops first because
                they showed up in search and had polished websites. Our
                new site with the symptoms guide and the repair vs. rebuild
                comparison completely changed who called us — customers
                who had done their research, understood what they needed,
                and chose us because we explained it better than anyone
                else in town.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Holloway, transmission specialist, Independence, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A transmission shop site with services, symptoms guide,
                and appointment form starts at $225. A full site with
                repair vs. rebuild comparison, transmission types, and
                warranty page is $425–$875. One rebuild job covers the
                full site. No contracts, no monthly fees.
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
