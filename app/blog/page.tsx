import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/fade-in";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical advice on websites, AI tools, SEO, and growing your small business online — by Jacob Cascone.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-24 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-indigo-500/[0.05] blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="gradient-text-blue">Blog</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted text-lg leading-relaxed">
              Practical advice on websites, AI, and growing your small business
              online. No jargon, no fluff.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="group glass rounded-2xl p-6 block"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <time className="text-xs text-muted">{post.date}</time>
                  <span className="text-muted/30">·</span>
                  <span className="text-xs text-muted">{post.readTime} read</span>
                  <span className="text-muted/30">·</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-accent/10 text-accent-light text-[11px] px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="font-semibold text-lg mb-2 group-hover:text-accent-light transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  {post.description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
