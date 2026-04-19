import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Aerial Yoga and Aerial Arts Studios in Kansas City",
  description:
    "Custom websites for aerial yoga, aerial silks, and aerial arts studios in the Kansas City area. Show your class schedule, skill levels, instructor credentials, and booking process to fill your classes.",
  alternates: {
    canonical: "https://builtsimple.dev/for/aerial-yoga",
  },
};

export default function AerialYogaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Aerial Yoga and Aerial Arts Studios in Kansas City",
    description: "Custom websites for aerial yoga and aerial arts studios in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Aerial Yoga Studios",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          People curious about aerial yoga want to know if they need prior experience, what the first class looks like, and whether it&apos;s appropriate for their fitness level. A website that answers those questions with class descriptions and honest beginner guidance gets more first-timers to book. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Aerial Yoga in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Aerial Yoga</span> &amp; Aerial Arts Studios in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              People searching for aerial yoga or
              aerial arts classes are often a mix
              of the curious, the adventurous, and
              the intimidated. The biggest barrier
              to a first booking is uncertainty —
              do I need prior experience, can I do
              this at my fitness level, what does
              a first class actually look like,
              and what do I need to wear? Instructors
              who address these questions directly
              and enthusiastically remove the
              hesitation that keeps interested
              people from booking. Beyond first-timers,
              experienced students look for class
              levels, which apparatuses you offer
              (hammock, silks, hoop, trapeze),
              instructor credentials, and whether
              you offer private lessons or
              performance training. A studio
              website that speaks warmly to
              beginners, shows the progression
              path for committed students, and
              makes the class schedule and
              booking process clear converts
              curiosity into a full roster.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What prospective students want to know before their first class
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Experience required — whether absolute beginners are welcome and what the first class involves",
                  "Fitness level — weight limits, physical requirements, what modifications are available",
                  "Class levels — intro, beginner, intermediate, advanced — how progression works",
                  "Apparatus options — hammock, silks, lyra/hoop, trapeze, aerial straps — what each class uses",
                  "Instructor credentials — aerial certifications, performance background, teaching experience",
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
                What your aerial yoga studio website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Beginner guide — what to expect in the first class, what to wear, what modifications are offered",
                  "Class schedule — current week and recurring schedule, levels, apparatus, instructor, available spots",
                  "Class descriptions — what happens in each level, skills covered, progression requirements",
                  "Apparatus offered — hammock, silks, lyra, trapeze, straps — beginner accessibility of each",
                  "Instructors — certification, performance background, teaching style, private lesson availability",
                  "Booking form or link with class interest, experience level, physical considerations, preferred time",
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
                &ldquo;So many people were interested
                but hesitated to book because they
                didn&apos;t know if they were
                strong enough or experienced enough.
                They would message me the same
                questions over and over. The new
                site with our beginner guide, our
                class levels explained, and honest
                answers to the &apos;do I need
                experience&apos; question removed
                that barrier. I started getting
                bookings from people who had been
                following our Instagram for months
                without committing — they just
                needed a website that told them
                clearly: yes, you can do this.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — I. Santos, aerial studio owner, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An aerial yoga site with class schedule,
                beginner guide, and booking form starts
                at $225. A full site with instructor
                bios, apparatus descriptions, and class
                level detail is $425–$850. Five class
                bookings cover the cost. No contracts,
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
