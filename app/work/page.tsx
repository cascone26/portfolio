import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/fade-in";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Portfolio of web and AI projects by BuiltSimple, including LessonDraft — an AI-powered lesson plan generator.",
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
      <section className="relative pt-12 pb-12 px-6">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] rounded-full bg-indigo-500/[0.05] blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="gradient-text-blue">Work</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted text-lg max-w-2xl leading-relaxed">
              Real products I&apos;ve shipped. Each one solves a real problem.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div className="glass rounded-2xl p-7 h-full flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="font-semibold text-xl">{p.name}</h2>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted hover:text-accent-light transition-colors text-sm shrink-0 ml-3 link-underline"
                    >
                      Visit site
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
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
                  className="text-accent-light text-sm link-underline inline-block"
                >
                  Read case study →
                </Link>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.2}>
            <Link
              href="/contact"
              className="glass rounded-2xl p-7 flex items-center justify-center h-full group"
              style={{ background: "rgba(15,23,42,0.3)" }}
            >
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>
                <p className="text-foreground font-medium text-sm mb-1 group-hover:text-accent-light transition-colors">Start a project</p>
                <p className="text-muted text-xs">Get a free audit for your business</p>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
