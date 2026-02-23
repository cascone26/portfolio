import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on web development, AI tools, and building for small businesses — by Jacob Cascone.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-24 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-indigo-500/[0.05] blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="gradient-text-blue">Blog</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Thoughts on web development, AI, and building for small businesses.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-14 text-center border-dashed !border-white/[0.06]" style={{ background: "rgba(15,23,42,0.3)" }}>
            <div className="text-muted/20 mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Coming Soon</h2>
            <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
              I&apos;m working on some posts about web development for small
              businesses, practical AI tools, and lessons from building
              LessonDraft. Check back soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
