import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Dog Trainers in Kansas City",
  description:
    "Custom websites for dog trainers and obedience schools in the Kansas City area. Show your training methods, credentials, and results — and fill your class and private lesson schedule.",
  alternates: {
    canonical: "https://builtsimple.dev/for/dog-trainers",
  },
};

export default function DogTrainersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Dog Trainers in Kansas City",
    description: "Custom websites for dog trainers and obedience schools in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Dog Trainers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          New puppy owners and frustrated dog owners search for local trainers the same day they decide they need help. Make sure your methods, credentials, and results are the first thing they see. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Dog Trainers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Dog Trainers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Dog training is a crowded market — big-box pet stores, YouTube
              self-help channels, and Craigslist trainers all compete for the
              same dog owner. What separates the trainers who fill their
              schedule is a clear explanation of their methods, visible proof
              of results, and credentials that make a nervous owner feel safe
              handing their dog over. A website that shows all three builds
              that trust before the first call.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What dog owners check before booking a trainer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Training methods — positive reinforcement, balanced, board and train, group classes",
                  "What problems you solve — leash pulling, aggression, reactivity, separation anxiety, basic obedience",
                  "Certifications — CPDT-KA, AKC Canine Good Citizen, Karen Pryor Academy, etc.",
                  "Format — group classes, private in-home, board and train, puppy kindergarten",
                  "Before/after results — video or photo evidence of real dogs you've trained",
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
                What your dog training website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Services page — group classes, private lessons, board and train, puppy programs, behavior modification",
                  "Method explanation — your training philosophy and why it works for specific problems",
                  "Problem-specific pages — leash reactivity, separation anxiety, aggression, puppy basics",
                  "Credentials and bio — certifications, years of experience, breeds you specialize in",
                  "Results gallery — before/after descriptions or video embeds from client dogs",
                  "Class schedule with registration or inquiry form",
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
                &ldquo;I was losing clients to Petco group classes because
                people didn&apos;t know I existed. The website let me explain
                my balanced training approach and show real before/after
                results from reactive dogs I&apos;ve worked with. Now I turn
                people away because I&apos;m booked out six weeks.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Morrison, dog trainer, Lee's Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A dog trainer site with services, methods, and booking form
                starts at $200. A full site with problem-specific pages,
                credentials, and class schedule is $400–$750. Five private
                lessons cover the cost. No contracts, no monthly fees.
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
