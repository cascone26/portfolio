import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Martial Arts Schools in Kansas City",
  description:
    "Custom websites for martial arts schools, dojos, and MMA gyms in the Kansas City area. Explain your programs, belt system, and trial class offer to get more student enrollments.",
  alternates: {
    canonical: "https://builtsimple.dev/for/martial-arts",
  },
};

export default function MartialArtsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Martial Arts Schools in Kansas City",
    description: "Custom websites for martial arts schools, dojos, and MMA gyms in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Martial Arts Schools",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Parents looking for kids martial arts and adults searching for self-defense or fitness both need to understand your programs, schedule, and instructor background before they visit. A website that answers these earns the trial class. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Martial Arts Schools in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Martial Arts Schools</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Martial arts schools serve two distinct audiences:
              parents researching programs for kids — looking for
              discipline, confidence, and safety — and adults
              searching for fitness, self-defense skills, or
              competition training. Both groups want to understand
              your curriculum and belt system, see your instructor
              credentials, and know what the first class looks
              like. A martial arts school website that speaks
              to both audiences and makes signing up for a trial
              class frictionless fills your roster.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What parents and adult students research when choosing a martial arts school
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Programs — kids (ages, belt levels), adult (fitness, self-defense, competition), family classes",
                  "Style — karate, taekwondo, jiu-jitsu, Muay Thai, MMA, kickboxing — what each emphasizes",
                  "Instructor credentials — black belt rank, years teaching, competition background, certifications",
                  "Schedule — class times for kids and adults, how often to attend to progress",
                  "Atmosphere — competitive vs. recreational — whether tournaments are expected or optional",
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
                What your martial arts school website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Kids programs — age groups, what each level learns, belt advancement, parent expectations",
                  "Adult programs — fitness martial arts, self-defense focus, competition team, beginner welcome",
                  "Instructor profiles — rank, years teaching, competition history, teaching philosophy",
                  "Schedule — weekly class times by program with level requirements",
                  "Trial class offer — what the first visit looks like, what to wear, what to expect",
                  "Enrollment form with age, program interest, experience level, schedule preference",
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
                &ldquo;Parents would call and ask the same five
                questions every time — what ages do you take, how
                often do kids need to come, how long to black belt,
                is it competitive. The new site answered all of that
                before they called. We stopped getting tire-kickers
                and started getting families who were already sold
                and just wanted to schedule their trial class.
                Our conversion from inquiry to enrollment went up
                noticeably in the first month.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — Sensei J. Park, martial arts school, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A martial arts school site with programs, schedule,
                and trial class form starts at $225. A full site
                with kids and adult program pages, instructor
                profiles, and enrollment system is $425–$875.
                A few new memberships covers the cost.
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
