import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Personal Trainers in Kansas City",
  description:
    "Custom websites for personal trainers and fitness coaches in the Kansas City area. Build credibility, show your results, and convert serious prospects into long-term clients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/personal-trainers",
  },
};

export default function PersonalTrainersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Personal Trainers in Kansas City",
    description: "Custom websites for personal trainers and fitness coaches in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Personal Trainers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Serious clients Google their trainer before they commit. A professional site that shows your results and philosophy closes that gap. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Personal Trainers &amp; Fitness Coaches in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Personal Trainers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Independent trainers compete against big gyms, apps, and YouTube
              channels every time someone searches for fitness help. The ones who
              win that search have a real website that proves expertise, shows
              client results, and makes booking a consultation simple. Instagram
              alone isn&apos;t enough to land the serious, paying clients.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What serious clients check before hiring a personal trainer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Your certifications — NASM, ACE, NSCA, CSCS, specialties",
                  "Your training philosophy and the types of clients you work best with",
                  "Before/after results and client success stories with specifics",
                  "Packages and pricing — in-person, virtual, or hybrid",
                  "How to start — a clear first step, not a confusing form",
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
                What your personal training website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "About page with certifications, training background, and who you work best with",
                  "Specialty pages — weight loss, strength, athletic performance, post-rehab, seniors",
                  "Client results with specifics — pounds lost, lifts hit, races completed",
                  "Program and pricing page — sessions, packages, virtual options",
                  "Free consultation booking — low-friction entry point for serious prospects",
                  "FAQ covering location, commitment required, and what a typical session looks like",
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
                &ldquo;I was getting all my clients through the gym I worked at.
                When I went independent, I needed something that could stand on its
                own. The website made me look like a real business — within two
                months I had three online clients I never would have found otherwise,
                and they found me by searching for a trainer who specializes in
                post-injury rehab.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Torres, NASM-CPT, CSCS, personal trainer, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A personal trainer site with bio, packages, and consultation
                booking starts at $225. A full site with specialty pages, client
                results gallery, and virtual program landing page is $450–850.
                One new long-term client covers the cost in the first month. No
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
