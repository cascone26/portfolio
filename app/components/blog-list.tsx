"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "./fade-in";

interface PostSummary {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

const POSTS_PER_PAGE = 20;

export default function BlogList({ posts }: { posts: PostSummary[] }) {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const visible = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {visible.map((post, i) => (
        <FadeIn key={post.slug} delay={Math.min(i * 0.06, 0.6)}>
          <div className="group glass rounded-2xl p-6 relative">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <time className="text-xs text-muted" dateTime={post.date}>
                {new Date(post.date + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </time>
              <span className="text-muted/30">&middot;</span>
              <span className="text-xs text-muted">{post.readTime} read</span>
              <span className="text-muted/30">&middot;</span>
              <div className="flex gap-2 relative z-10">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                    className="bg-accent/10 text-accent-light text-[11px] px-2 py-0.5 rounded-md hover:bg-accent/20 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="font-semibold text-lg mb-2 group-hover:text-accent-light transition-colors">
                {post.title}
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                {post.description}
              </p>
            </Link>
          </div>
        </FadeIn>
      ))}

      {hasMore && (
        <div className="text-center pt-6">
          <button
            onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
            className="px-6 py-2.5 glass rounded-xl text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            Load more ({posts.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
