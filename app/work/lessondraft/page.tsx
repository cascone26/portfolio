import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LessonDraft — Case Study",
  description:
    "How I built LessonDraft, an AI-powered lesson plan generator for teachers, using Next.js, Supabase, Stripe, and the Anthropic API.",
};

export default function LessonDraftCaseStudy() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LessonDraft</h1>
          <p className="text-muted text-lg">
            AI-powered lesson plan generator for teachers.
          </p>
          <a
            href="https://lessondraft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-accent hover:underline text-sm"
          >
            Visit lessondraft.com ↗
          </a>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Problem */}
          <div>
            <h2 className="text-2xl font-bold mb-3">The Problem</h2>
            <p className="text-muted leading-relaxed">
              Teachers spend hours every week creating lesson plans from scratch.
              Existing tools are either too rigid (fill-in-the-blank templates)
              or too expensive for individual teachers. There was a gap for a
              tool that could generate high-quality, customizable lesson plans
              using AI — affordably and fast.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-bold mb-3">The Solution</h2>
            <p className="text-muted leading-relaxed">
              LessonDraft lets teachers input their subject, grade level, and
              standards, then generates a complete lesson plan in seconds using
              the Anthropic API. Plans include objectives, activities,
              assessments, and differentiation strategies. Teachers can edit,
              save, and export their plans.
            </p>
          </div>

          {/* Tech stack */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Next.js",
                "TypeScript",
                "Supabase",
                "Stripe",
                "Anthropic API",
                "Clerk Auth",
                "Tailwind CSS",
                "Vercel",
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

          {/* Key features */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Key Features</h2>
            <ul className="space-y-3 text-muted">
              <li className="flex gap-3">
                <span className="text-accent shrink-0">—</span>
                AI-generated lesson plans from minimal input
              </li>
              <li className="flex gap-3">
                <span className="text-accent shrink-0">—</span>
                User authentication and account management via Clerk
              </li>
              <li className="flex gap-3">
                <span className="text-accent shrink-0">—</span>
                Subscription billing with Stripe (free tier + paid plans)
              </li>
              <li className="flex gap-3">
                <span className="text-accent shrink-0">—</span>
                Lesson history saved to Supabase for each user
              </li>
              <li className="flex gap-3">
                <span className="text-accent shrink-0">—</span>
                Responsive design that works on desktop and mobile
              </li>
            </ul>
          </div>

          {/* What I learned */}
          <div>
            <h2 className="text-2xl font-bold mb-3">What I Learned</h2>
            <p className="text-muted leading-relaxed">
              This was my first full SaaS product — authentication, payments,
              database, and AI integration all wired together. I learned how to
              manage API costs with usage limits, handle webhook events from
              Stripe, and build a product that real people use. The biggest
              lesson: ship fast, then iterate based on actual user feedback.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
