import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pediatric Dentists in Kansas City",
  description:
    "Custom websites for pediatric dental practices in the Kansas City area. Show your child-friendly office, services, and new patient process to help parents choose you for their kids' dental care.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pediatric-dentists",
  },
};

export default function PediatricDentistsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pediatric Dentists in Kansas City",
    description: "Custom websites for pediatric dental practices in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pediatric Dentists",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Parents choosing a pediatric dentist want to see your office environment, understand how you handle anxious kids, and know what the first visit looks like before they book. A website that shows all of that wins new patients. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pediatric Dentists in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pediatric Dentists</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Parents choosing a dentist for their children
              are not just looking for clinical credentials —
              they are evaluating whether their child will be
              comfortable and whether the practice is designed
              to reduce anxiety and make dental visits
              something kids are willing to do. They want to
              see the office, understand how you approach
              nervous patients, know what happens at the first
              visit, and confirm that you accept their
              insurance. A pediatric dental website that
              shows a warm, child-friendly environment,
              explains your approach to anxious kids, and
              makes scheduling a first visit easy converts
              parents who are searching into families who
              become loyal patients.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What parents evaluate when choosing a pediatric dentist
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Office environment — child-friendly, colorful, welcoming — photos of the actual space",
                  "Approach to anxiety — sedation options, tell-show-do technique, how they handle tearful toddlers",
                  "Services — cleanings, sealants, fluoride, fillings, extractions, orthodontic referrals, emergency",
                  "First visit — what happens, how long, what to bring, how to prepare your child",
                  "Insurance — accepted plans, Medicaid/CHIP, payment options for uninsured families",
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
                What your pediatric dental website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Office photos — waiting room, treatment rooms, staff with young patients, themed decor",
                  "Anxiety approach — sedation options (nitrous, oral sedation), distraction techniques, team training",
                  "Services — preventive (cleanings, sealants), restorative (fillings, crowns), ortho screening",
                  "First visit guide — what to expect at every age, how to prepare your child, duration, what we check",
                  "Insurance and payment — accepted insurers, Medicaid/CHIP participation, self-pay options",
                  "New patient form with child&apos;s age, last dental visit, specific concerns, insurance info",
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
                &ldquo;Parents were calling with anxious kids
                and no idea what to expect, which made the
                first visit harder than it needed to be.
                The new site with office photos, our anxiety
                approach explained, and a first-visit guide
                for each age group changed that. Parents
                came in having already read what to expect
                and their kids were calmer because the
                parents were calmer. It changed the whole
                experience from the moment they walked in.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — Dr. C. Reyes, pediatric dentist, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pediatric dental site with services, first
                visit guide, and new patient form starts at
                $275. A full site with age-specific pages,
                anxiety approach section, and insurance guide
                is $525–$1,050. One family of patients
                covers the cost. No contracts, no monthly fees.
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
