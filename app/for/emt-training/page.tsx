import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for EMT and First Aid Training Schools in Kansas City",
  description:
    "Custom websites for EMT certification programs, first aid training, and CPR certification schools in the Kansas City area. Show your course catalog, certification outcomes, and scheduling to enroll more students.",
  alternates: {
    canonical: "https://builtsimple.dev/for/emt-training",
  },
};

export default function EmtTrainingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for EMT and First Aid Training Schools in Kansas City",
    description: "Custom websites for EMT certification and first aid training programs in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for EMT Training Schools",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          People looking for EMT certification or first aid training want to know the schedule, cost, certification outcome, and pass rate before they enroll. A website that makes that information easy to find fills your classes. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For EMT Training in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">EMT Training</span> Schools in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              People searching for EMT certification or
              first aid training have specific, practical
              questions: What is the course schedule?
              How long does it take? What certification
              will I hold when I finish? What does it
              cost? What is your first-time pass rate
              on the NREMT exam? For CPR and first aid,
              businesses and HR managers want to know
              whether you come to their location for
              group certification, the class sizes you
              accommodate, and whether your cards are
              AHA or Red Cross certified. An EMT and
              first aid training website that answers
              these questions directly, shows upcoming
              class schedules, and makes enrollment or
              booking a group class easy fills seats
              consistently with both individuals and
              corporate clients.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What students and businesses look for in a training program
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Course schedule — upcoming class dates, part-time vs. full-time options, online/hybrid availability",
                  "Certification outcome — which certifications are earned (NREMT, AHA BLS, ACLS, PALS)",
                  "Pass rate — first-time NREMT pass rate, exam prep support, remediation policy",
                  "Cost and financial aid — tuition, payment plans, employer tuition reimbursement help",
                  "For businesses — on-site CPR/AED training, group pricing, AHA vs. Red Cross certification",
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
                What your EMT training website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Course catalog — EMT Basic, AEMT, Paramedic, BLS, ACLS, PALS, CPR/AED, first aid",
                  "Upcoming schedule — class dates, times, location, seats remaining, enrollment link",
                  "Certifications earned — exact certification names, issuing body, renewal timeline",
                  "Pass rate and outcomes — NREMT first-time pass rate, job placement support",
                  "Corporate training — on-site CPR/AED, group pricing, compliance certification for employers",
                  "Enrollment form with course interest, schedule preference, employment goal, contact info",
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
                &ldquo;Students were choosing other programs
                because they could find schedule and pricing
                information there and not here. And businesses
                looking for CPR training didn&apos;t even know
                we did on-site group classes. The new site
                with our upcoming class calendar, our pass
                rate, all the certifications listed clearly,
                and a separate section for corporate clients
                made a massive difference. Enrollment went
                up and we started getting regular calls
                from HR managers who book us for their
                whole team every year.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Oduya, EMT training director, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An EMT training site with course catalog,
                schedule, and enrollment form starts at
                $250. A full site with corporate training
                section, pass rate detail, and instructor
                bios is $475–$950. Five students enrolled
                cover the cost. No contracts, no monthly fees.
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
