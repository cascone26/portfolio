import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Yoga Studios in Kansas City",
  description:
    "Custom websites for yoga studios and pilates studios in the Kansas City area. Fill your class schedule, grow memberships, and reach students searching for the style you teach.",
  alternates: {
    canonical: "https://builtsimple.dev/for/yoga",
  },
};

export default function YogaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Yoga Studios in Kansas City",
    description: "Custom websites for yoga studios and pilates studios in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Yoga Studios",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Students search by style — "hot yoga KC," "prenatal yoga Overland Park," "beginner pilates near me." Show up where they&apos;re looking. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Yoga &amp; Pilates Studios in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Yoga Studios</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              New students don&apos;t pick the closest studio — they pick the one
              that matches their practice. A site built around your specific
              styles, instructors, and class schedule gives searchers exactly what
              they need to walk through your door instead of a competitor&apos;s.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What new students check before trying a studio
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Which styles you offer — vinyasa, yin, hot, restorative, pilates, barre",
                  "Whether you have beginner-friendly or intro classes",
                  "Your class schedule and whether drop-ins are welcome",
                  "Pricing — drop-in rate, class packs, unlimited memberships",
                  "Instructor bios and their training/certifications",
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
                What your yoga studio website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Style pages — hot yoga, vinyasa, yin, prenatal, beginner — each optimized for local search",
                  "Live or embedded class schedule with drop-in and membership options",
                  "Instructor bios with certifications (RYT-200, RYT-500, CPYT, etc.) and teaching focus",
                  "Intro offer landing page — first class free, intro week, new student special",
                  "Membership and pricing page with clear tier breakdown",
                  "Student testimonials focused on transformation, community, and specific instructors",
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
                &ldquo;We had a website but it was basically a calendar and a phone
                number. After the redesign with separate pages for each style and
                an intro offer section, our new student sign-ups went up noticeably
                in the first couple months — people were finding us specifically
                because of our hot yoga and prenatal classes.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Morrison, yoga studio owner, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A yoga studio site with class schedule, instructor bios, and
                pricing starts at $275. A full site with style-specific pages,
                intro offer landing page, and booking integration is $550–1,000.
                Two new monthly members cover the cost in the first month. No
                contracts, no monthly fees.
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
