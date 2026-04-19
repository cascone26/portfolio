import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Piano Tuners and Technicians in Kansas City",
  description:
    "Custom websites for piano tuners, technicians, and restoration specialists in the Kansas City area. Show your credentials, service capabilities, and scheduling process to build a consistent client base.",
  alternates: {
    canonical: "https://builtsimple.dev/for/piano-tuning",
  },
};

export default function PianoTuningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Piano Tuners and Technicians in Kansas City",
    description: "Custom websites for piano tuners and technicians in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Piano Tuners",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Piano owners looking for a tuner want to know your RPT credentials, your experience with their piano type, and how far out you&apos;re booked. Churches, schools, and music studios need reliable recurring service. A website that communicates your qualifications and makes scheduling easy wins both. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Piano Tuning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Piano Tuners</span> &amp; Technicians in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Piano owners and music program administrators
              searching for a tuner are looking for
              credentials and reliability above all
              else. They want to know whether you
              are a Registered Piano Technician
              through the Piano Technicians Guild,
              how long you have been tuning, what
              types and brands of pianos you work
              on, and whether you offer services
              beyond tuning — regulation, voicing,
              action repair, and restoration. For
              churches, schools, and music studios
              with multiple pianos and regular
              tuning needs, they want to know
              whether you offer recurring service
              agreements and how reliable your
              scheduling is. A piano tuning website
              that shows your PTG credentials,
              describes the services you offer
              beyond basic tuning, and makes
              booking a service appointment
              straightforward earns the recurring
              institutional clients that fill
              your schedule year-round.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What piano owners and music programs look for in a technician
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Credentials — RPT (Registered Piano Technician) through PTG, years of experience, continuing education",
                  "Piano types — grands, uprights, spinets, digital hybrids, player piano systems",
                  "Brand experience — Steinway, Yamaha, Kawai, Baldwin, Bösendorfer — any specializations",
                  "Services beyond tuning — pitch raise, regulation, voicing, action repair, string replacement",
                  "Institutional service — churches, schools, studios — multi-piano accounts, recurring schedule",
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
                What your piano tuning website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Credentials — RPT status, PTG membership, years of experience, training background",
                  "Services — tuning, pitch raise, regulation, voicing, action repair, string replacement, restoration",
                  "Piano types — grands, uprights, player pianos, digital hybrids, specialty instruments",
                  "Institutional program — churches, schools, studios — recurring service agreements, multi-piano pricing",
                  "Tuning frequency guide — how often different piano types and use cases need service",
                  "Appointment form with piano brand, type, last tuned, service needed, location",
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
                &ldquo;Most of my work was word of
                mouth from music teachers and
                church musicians. Without a website,
                I had no way to reach piano owners
                who were just searching online
                or schools looking for a reliable
                technician for their program.
                The new site with my RPT
                credentials, my full service
                list, and my institutional
                program explained brought me
                two school music departments
                in the first month — that&apos;s
                recurring service on six pianos
                twice a year. The site paid
                for itself in one contract.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — H. Brinkmann, RPT, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A piano tuning site with credentials,
                services, and appointment form starts
                at $200. A full site with institutional
                program, service detail, and tuning
                frequency guide is $375–$750. One
                school contract covers the cost.
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
