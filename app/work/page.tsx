import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Portfolio of web and AI projects by Jacob Cascone, including LessonDraft — an AI-powered lesson plan generator.",
};

const projects = [
  {
    name: "LessonDraft",
    description:
      "AI-powered lesson plan generator for teachers. Built with Next.js, Supabase, Stripe, and Anthropic API. Handles user auth, subscriptions, and AI generation at scale.",
    tags: ["Next.js", "AI", "SaaS", "Stripe", "Supabase"],
    url: "https://lessondraft.com",
    caseStudy: "/work/lessondraft",
  },
  {
    name: "LessonDraft Social Autoposter",
    description:
      "Automated social media content pipeline for LessonDraft. Generates and schedules educational content across platforms to drive organic traffic.",
    tags: ["Automation", "AI", "Social Media", "Marketing"],
    url: null,
    caseStudy: "/work/lessondraft-social",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="relative pt-24 pb-12 px-6">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] rounded-full bg-indigo-500/[0.05] blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="gradient-text-blue">Work</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Real products I&apos;ve shipped. Each one solves a real problem.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className="glass rounded-2xl p-7 transition-all duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="font-semibold text-xl">{p.name}</h2>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent-light transition-colors text-sm shrink-0 ml-3"
                  >
                    Visit site ↗
                  </a>
                )}
              </div>
              <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent/10 text-accent-light text-xs px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={p.caseStudy}
                className="text-accent-light text-sm hover:underline"
              >
                Read case study →
              </Link>
            </div>
          ))}

          {/* Placeholder */}
          <div className="glass rounded-2xl p-7 flex items-center justify-center border-dashed !border-white/[0.06]" style={{ background: "rgba(15,23,42,0.3)" }}>
            <div className="text-center">
              <p className="text-muted/60 text-sm mb-3">Your project here</p>
              <Link
                href="/contact"
                className="text-accent-light text-sm hover:underline"
              >
                Let&apos;s build something →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
