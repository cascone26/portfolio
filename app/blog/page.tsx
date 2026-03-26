import type { Metadata } from "next";
import FadeIn from "../components/fade-in";
import { posts } from "./posts";
import BlogList from "../components/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical advice on websites, AI tools, SEO, and growing your small business online — by BuiltSimple.",
  alternates: {
    canonical: "https://builtsimple.dev/blog",
  },
};

// Only send metadata to the client, not full post content
const postSummaries = posts.map(({ slug, title, description, date, readTime, tags }) => ({
  slug,
  title,
  description,
  date,
  readTime,
  tags,
}));

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-12 pb-12 px-6">
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
        <BlogList posts={postSummaries} />
      </section>
    </>
  );
}
