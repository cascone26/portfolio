import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "../../components/fade-in";
import BrowserFrame from "../../components/browser-frame";

export const metadata: Metadata = {
  title: "LessonDraft — Case Study",
  description:
    "How I built LessonDraft, an AI-powered lesson plan generator for teachers, using Next.js, Supabase, Stripe, and the Anthropic API.",
};

export default function LessonDraftCaseStudy() {
  return (
    <>
      <section className="relative pt-24 pb-12 px-6">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full bg-blue-500/[0.05] blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
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
              LessonDraft
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed">
              AI-powered lesson plan generator for teachers.
            </p>
            <a
              href="https://lessondraft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-accent-light link-underline text-sm"
            >
              Visit lessondraft.com
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Screenshot placeholder */}
      <section className="pb-12 px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <BrowserFrame url="lessondraft.com" className="pulse-glow">
              <Image
                src="/screenshots/lessondraft.png"
                alt="LessonDraft homepage — AI-powered lesson plan generator"
                width={1376}
                height={860}
                className="w-full h-auto"
              />
            </BrowserFrame>
          </div>
        </FadeIn>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">
                The Problem
              </h2>
              <p className="text-muted leading-relaxed">
                Teachers spend hours every week creating lesson plans from
                scratch. Existing tools are either too rigid (fill-in-the-blank
                templates) or too expensive for individual teachers. There was a
                gap for a tool that could generate high-quality, customizable
                lesson plans using AI — affordably and fast.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">
                The Solution
              </h2>
              <p className="text-muted leading-relaxed">
                LessonDraft lets teachers input their subject, grade level, and
                standards, then generates a complete lesson plan in seconds using
                the Anthropic API. Plans include objectives, activities,
                assessments, and differentiation strategies. Teachers can edit,
                save, and export their plans.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-5 tracking-tight">
                Tech Stack
              </h2>
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
                Key Features
              </h2>
              <ul className="space-y-3 text-muted">
                {[
                  "AI-generated lesson plans from minimal input",
                  "User authentication and account management via Clerk",
                  "Subscription billing with Stripe (free tier + paid plans)",
                  "Lesson history saved to Supabase for each user",
                  "Responsive design that works on desktop and mobile",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent-light shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">
                What I Learned
              </h2>
              <p className="text-muted leading-relaxed">
                This was my first full SaaS product — authentication, payments,
                database, and AI integration all wired together. I learned how to
                manage API costs with usage limits, handle webhook events from
                Stripe, and build a product that real people use. The biggest
                lesson: ship fast, then iterate based on actual user feedback.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
