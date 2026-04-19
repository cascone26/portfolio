import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Dog Trainers and Board and Train Programs in Kansas City",
  description:
    "Custom websites for dog trainers, board and train facilities, and obedience programs in the Kansas City area. Show your training philosophy, results, and program structure to attract owners ready to invest in their dog.",
  alternates: {
    canonical: "https://builtsimple.dev/for/dog-training-board-and-train",
  },
};

export default function DogTrainingBoardAndTrainPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Dog Trainers and Board and Train Programs in Kansas City",
    description: "Custom websites for dog trainers and board and train programs in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Dog Trainers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Dog owners researching board and train programs want to understand your training methods, see before-and-after videos of real dogs, and know exactly what behaviors their dog will have when they come home. A website that shows transformation results and explains the process earns the enrollment. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Dog Training in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Dog Trainers</span> &amp; Board and Train Programs in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Dog owners considering a board and train
              program are making a significant decision —
              they are handing over their dog for two
              to four weeks and paying $1,500 to $4,000
              or more for the outcome. Before they
              commit, they research intensely: your
              training philosophy (balanced, positive
              reinforcement, e-collar, relationship-based),
              what specific behaviors the program
              addresses (recall, leash reactivity,
              aggression, basic obedience), what
              a day looks like for their dog in your
              facility, what happens during the owner
              handoff at the end of the program, and
              whether you offer follow-up support
              so the training holds at home. They
              want to see real results on real dogs —
              before-and-after videos of dogs similar
              to theirs — not generic marketing language.
              A dog training website that is transparent
              about your methods, shows documented
              results on real client dogs, explains
              the program structure day by day, and
              addresses the handoff process earns
              the consultation call from the dog
              owner who is serious about solving
              a real problem.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What dog owners research before enrolling in board and train
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Training methods — balanced, positive reinforcement, e-collar, relationship-based — your philosophy",
                  "Program structure — what a training day looks like, hours worked, socialization, sleep arrangement",
                  "Behavior specialties — reactivity, aggression, recall, leash manners, separation anxiety",
                  "Handoff process — how you teach owners what the dog learned, follow-up support after pickup",
                  "Results — before and after videos or photos of real client dogs with similar issues",
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
                  "Training philosophy — your method, why you use it, what results it produces, who it is best for",
                  "Program breakdown — board and train duration, daily schedule, what behaviors are addressed",
                  "Results gallery — before and after videos or photos organized by behavior issue",
                  "Handoff process — what owners learn at pickup, follow-up sessions, maintenance training",
                  "Day training and lessons — in-home, group class, and private lesson options beyond board and train",
                  "Intake form with dog breed, age, problem behaviors, history, training goals, timeline",
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
                &ldquo;I was getting inquiries from
                people who had no idea what board
                and train involved — they thought
                it was boarding with some basic
                commands mixed in. Explaining the
                program, the handoff, and the
                follow-up support from scratch
                in every phone call was exhausting.
                The new site with my training
                philosophy explained, my program
                structure laid out day by day,
                and my before-and-after videos
                of real client dogs changed everything.
                People who call now already understand
                what they&apos;re getting. The intake
                form gets me exactly the information
                I need to know whether the dog is
                a good fit before we even talk.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Hendricks, certified dog trainer, Belton, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A dog training site with program breakdown,
                methods, and intake form starts at $225.
                A full site with results gallery, handoff
                process, and lesson options is $425–$850.
                One board and train enrollment covers
                the cost. No contracts, no monthly fees.
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
