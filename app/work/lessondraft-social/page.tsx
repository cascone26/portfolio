import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LessonDraft Social Autoposter — Case Study",
  description:
    "How I built an automated social media content pipeline for LessonDraft using AI to generate and schedule educational content.",
};

export default function LessonDraftSocialCaseStudy() {
  return (
    <>
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/work"
            className="text-accent text-sm hover:underline mb-6 inline-block"
          >
            ← Back to Work
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            LessonDraft Social Autoposter
          </h1>
          <p className="text-muted text-lg">
            Automated social media content pipeline for LessonDraft.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Problem */}
          <div>
            <h2 className="text-2xl font-bold mb-3">The Problem</h2>
            <p className="text-muted leading-relaxed">
              LessonDraft needed consistent social media presence to drive
              organic traffic, but manually creating and posting content across
              multiple platforms was time-consuming and unsustainable as a solo
              developer.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-bold mb-3">The Solution</h2>
            <p className="text-muted leading-relaxed">
              I built an automated content pipeline that uses AI to generate
              educational social media posts — teaching tips, lesson plan ideas,
              and classroom strategies — tailored for each platform. The system
              generates content in batches, schedules posts, and maintains a
              consistent brand voice without manual intervention.
            </p>
          </div>

          {/* How it works */}
          <div>
            <h2 className="text-2xl font-bold mb-3">How It Works</h2>
            <ul className="space-y-3 text-muted">
              <li className="flex gap-3">
                <span className="text-accent shrink-0">1.</span>
                AI generates educational content topics based on trending
                teaching themes and LessonDraft&apos;s value proposition
              </li>
              <li className="flex gap-3">
                <span className="text-accent shrink-0">2.</span>
                Content is adapted for each platform&apos;s format and audience
                expectations
              </li>
              <li className="flex gap-3">
                <span className="text-accent shrink-0">3.</span>
                Posts are queued and scheduled for optimal engagement times
              </li>
              <li className="flex gap-3">
                <span className="text-accent shrink-0">4.</span>
                Performance is tracked to refine content strategy over time
              </li>
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
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
                  className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-3">What I Learned</h2>
            <p className="text-muted leading-relaxed">
              Building this taught me how to think about content as a system
              rather than individual posts. The key insight was that AI-generated
              content works best when you give it strong constraints — a clear
              brand voice, specific audience, and defined content pillars. The
              automation freed up time to focus on actually building LessonDraft
              instead of marketing it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
