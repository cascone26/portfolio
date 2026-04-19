import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Podiatrists in Kansas City",
  description:
    "Custom websites for podiatry practices in the Kansas City area. Explain your services clearly, build patient trust, and get more appointment requests from local foot and ankle patients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/podiatrists",
  },
};

export default function PodiatristsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Podiatrists in Kansas City",
    description: "Custom websites for podiatry practices in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Podiatrists",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Patients searching for a podiatrist in Kansas City are often dealing with plantar fasciitis, bunions, heel pain, or diabetic foot care. Be the practice that shows up, explains your approach, and makes booking easy. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Podiatry Practices in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Podiatrists</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Patients with foot and ankle pain search by condition — plantar
              fasciitis, heel spurs, bunions, ingrown toenails, diabetic foot
              care, sports injuries. They&apos;re looking for a local specialist
              who treats their specific problem. A podiatry practice website
              that explains each condition, describes your treatment approach,
              and makes online booking available consistently wins new patients
              over practices that just list their phone number.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What patients look for when choosing a podiatrist
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Conditions treated — plantar fasciitis, heel pain, bunions, hammertoes, diabetic foot care",
                  "Treatments offered — orthotics, shockwave therapy, laser, surgery, wound care",
                  "Whether they accept their insurance — top plans listed clearly",
                  "Location and hours — office location, parking, telehealth options",
                  "Doctor credentials — DPM, board certification, hospital affiliations, years of experience",
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
                What your podiatry practice website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Condition pages — plantar fasciitis, heel spurs, bunions, neuromas, diabetic foot, ingrown toenails",
                  "Treatment pages — custom orthotics, shockwave therapy, laser treatment, surgical options",
                  "Insurance page — accepted plans listed, how billing works, what to bring to first visit",
                  "Doctor bio — credentials, specialties, hospital affiliations, why patients choose them",
                  "Online appointment request — condition, urgency, insurance, preferred time",
                  "Office info — location with map, hours, parking, telehealth availability",
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
                &ldquo;My old website listed my phone number and that was
                about it. The new site with condition-specific pages for
                plantar fasciitis and diabetic foot care started ranking for
                those searches and my new patient volume went up noticeably
                within the first few months. Patients come in already knowing
                what to expect.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — Dr. A. Patel, DPM, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A podiatry practice site with services, conditions, and
                appointment form starts at $275. A full site with
                condition-specific pages, treatment descriptions, and insurance
                info is $500–$1,050. Three new patients cover the cost.
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
