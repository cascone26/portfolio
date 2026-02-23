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
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Work</h1>
          <p className="text-muted text-lg max-w-2xl">
            Real products I&apos;ve shipped. Each one solves a real problem.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-all flex flex-col"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="font-semibold text-xl">{p.name}</h2>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors text-sm"
                  >
                    Visit site ↗
                  </a>
                )}
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent/10 text-accent text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={p.caseStudy}
                className="text-accent text-sm hover:underline"
              >
                Read case study →
              </Link>
            </div>
          ))}

          {/* Placeholder */}
          <div className="bg-card/30 border border-border border-dashed rounded-xl p-6 flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted/50 text-sm mb-2">Your project here</p>
              <Link
                href="/contact"
                className="text-accent text-sm hover:underline"
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
