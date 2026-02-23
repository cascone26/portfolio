import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/fade-in";

export const metadata: Metadata = {
  title: "LessonDraft Social Autoposter — Case Study",
  description:
    "How I built an automated social media content pipeline for LessonDraft using AI to generate and schedule educational content.",
};

export default function LessonDraftSocialCaseStudy() {
  return (
    <>
      <section className="relative pt-24 pb-12 px-6">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] rounded-full bg-indigo-500/[0.05] blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <Link
              href="/work"
              className="text-accent-light text-sm link-underline mb-6 inline-block"
            >
              ← Back to Work
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Social Autoposter
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed">
              Automated social media content pipeline for LessonDraft.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">
                The Problem
              </h2>
              <p className="text-muted leading-relaxed">
                LessonDraft needed consistent social media presence to drive
                organic traffic, but manually creating and posting content across
                multiple platforms was time-consuming and unsustainable as a solo
                developer.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">
                The Solution
              </h2>
              <p className="text-muted leading-relaxed">
                I built an automated content pipeline that uses AI to generate
                educational social media posts — teaching tips, lesson plan
                ideas, and classroom strategies — tailored for each platform. The
                system generates content in batches, schedules posts, and
                maintains a consistent brand voice without manual intervention.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  "AI generates educational content topics based on trending teaching themes and LessonDraft's value proposition",
                  "Content is adapted for each platform's format and audience expectations",
                  "Posts are queued and scheduled for optimal engagement times",
                  "Performance is tracked to refine content strategy over time",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-7 h-7 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light text-xs font-semibold">
                      {i + 1}
                    </span>
                    <p className="text-muted leading-relaxed pt-0.5">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-5 tracking-tight">
                Tech Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Anthropic API",
                  "Node.js",
                  "Scheduling APIs",
                  "Social Platform APIs",
                  "Content Templates",
                  "Analytics",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="glass rounded-xl px-4 py-3 text-sm text-center"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">
                What I Learned
              </h2>
              <p className="text-muted leading-relaxed">
                Building this taught me how to think about content as a system
                rather than individual posts. The key insight was that
                AI-generated content works best when you give it strong
                constraints — a clear brand voice, specific audience, and defined
                content pillars. The automation freed up time to focus on
                actually building LessonDraft instead of marketing it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
