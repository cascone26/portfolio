import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Music Teachers in Kansas City",
  description:
    "Custom websites for private music teachers and music schools in the Kansas City area. Get found by parents searching for lessons, communicate your teaching approach, and fill your studio.",
  alternates: {
    canonical: "https://builtsimple.dev/for/music-lessons",
  },
};

export default function MusicLessonsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Music Teachers in Kansas City",
    description: "Custom websites for private music teachers and music schools in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Music Teachers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Parents searching for music lessons want a teacher, not a franchise. A personal site that shows your credentials and teaching style wins that trust. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Music Teachers &amp; Studios in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Music Lessons</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Private music teachers compete against apps, YouTube, and music
              schools every time a parent searches for lessons. The teachers who
              fill their studios are the ones who show up in local search with
              a clear, personal website — one that explains their teaching
              approach, lists their credentials, and makes registering for a
              trial lesson simple.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What parents check when looking for a music teacher
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Instruments taught and age groups served — beginners, kids, teens, adults",
                  "Your musical background, education, and performance experience",
                  "Teaching philosophy — structured method, play-by-ear, music theory emphasis",
                  "Lesson format — in-person, virtual, or hybrid; location or travel",
                  "Pricing per lesson and whether trial lessons are available",
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
                What your music lesson website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Instrument and age group pages — piano for kids, guitar for teens, adult beginners, voice",
                  "About page with your degree, performance background, and years of teaching",
                  "Teaching approach section — what the first few lessons look like and how progress is measured",
                  "Rates and lesson length options — 30, 45, and 60-minute formats",
                  "Trial lesson signup form — low-friction first step for hesitant families",
                  "Student testimonials from parents and adult students with specific progress mentioned",
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
                &ldquo;I taught piano out of my home for years entirely through
                referrals. Once I had a website with my background, a page for
                beginners, and a trial lesson form, I started getting inquiries
                from families in my neighborhood who had no idea I existed. I
                filled my remaining open slots in about six weeks.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — H. Morales, piano and voice teacher, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A music teacher site with bio, lesson info, and trial lesson
                form starts at $200. A full site with instrument-specific pages,
                teaching philosophy section, and scheduling integration is
                $400–700. Five new regular students covers the cost in the first
                few months. No contracts, no monthly fees.
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
