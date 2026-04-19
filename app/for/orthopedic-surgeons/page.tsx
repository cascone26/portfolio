import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Orthopedic Surgeons in Kansas City",
  description:
    "Custom websites for orthopedic surgery practices in the Kansas City area. Explain your specialty areas, surgical and non-surgical options, and insurance acceptance to get more new patient consultations.",
  alternates: {
    canonical: "https://builtsimple.dev/for/orthopedic-surgeons",
  },
};

export default function OrthopedicSurgeonsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Orthopedic Surgeons in Kansas City",
    description: "Custom websites for orthopedic surgery practices in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Orthopedic Surgery Practices",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Orthopedic patients research their condition and their surgeon before booking. A practice website that explains your specialties, treatment options, and surgical outcomes earns referrals and direct appointments. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Orthopedic Practices in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Orthopedic Surgeons</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Orthopedic patients come from two directions: physician referrals
              and self-referrals from patients who researched their own
              condition. Both types look up the surgeon or practice before
              their first appointment. A practice website that explains
              your specialty areas, your surgical and non-surgical approaches,
              and your physician credentials builds confidence before the
              first visit and earns more direct appointment requests.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What patients research when choosing an orthopedic surgeon
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Specialty areas — knee, hip, shoulder, spine, sports medicine, hand and wrist, foot and ankle",
                  "Surgical vs. non-surgical — when surgery is recommended vs. PT, injections, or bracing",
                  "Procedures — total knee/hip replacement, ACL reconstruction, rotator cuff, spinal fusion",
                  "Surgeon credentials — fellowship training, board certification, volume of procedures",
                  "Insurance — accepted plans, out-of-pocket costs for common procedures",
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
                What your orthopedic practice website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Specialty pages — knee, hip, shoulder, spine with conditions treated and procedures offered",
                  "Procedure pages — knee replacement, ACL, rotator cuff, spinal fusion — what to expect",
                  "Non-surgical options — physical therapy, injections, bracing — when surgery isn't the first answer",
                  "Surgeon bios — fellowship training, board certifications, procedure volume, philosophy",
                  "Insurance and new patient info — accepted plans, referral requirements, telehealth",
                  "Appointment request with body part, condition, referral source, insurance",
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
                &ldquo;Patients were looking us up after a referral and
                finding almost nothing. The new site with our specialty
                pages, procedure descriptions, and surgeon credentials
                made patients feel confident before their first visit.
                We also started seeing more direct appointment requests
                from patients who found us in search rather than waiting
                on a referral.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — Dr. R. Kaminsky, MD, orthopedic surgery, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An orthopedic practice site with specialties, surgeon bios,
                and appointment form starts at $325. A full site with
                procedure pages, non-surgical options, and insurance info
                is $600–$1,200. One new surgical case covers the cost.
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
