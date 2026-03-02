import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/fade-in";
import { posts } from "../../posts";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const allTags = new Set<string>();
  for (const post of posts) {
    for (const tag of post.tags) {
      allTags.add(tag.toLowerCase());
    }
  }
  return Array.from(allTags).map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const displayTag = posts
    .flatMap((p) => p.tags)
    .find((t) => t.toLowerCase() === decoded) ?? decoded;
  return {
    title: `Posts tagged "${displayTag}"`,
    description: `All BuiltSimple blog posts tagged with ${displayTag}.`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const filtered = posts.filter((p) =>
    p.tags.some((t) => t.toLowerCase() === decoded)
  );
  const displayTag = posts
    .flatMap((p) => p.tags)
    .find((t) => t.toLowerCase() === decoded) ?? decoded;

  return (
    <>
      <section className="relative pt-12 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-indigo-500/[0.05] blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <Link
              href="/blog"
              className="text-accent-light text-sm link-underline mb-6 inline-block"
            >
              ← All posts
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="gradient-text-blue">{displayTag}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed">
              {filtered.length} post{filtered.length !== 1 ? "s" : ""} tagged with {displayTag}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {filtered.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.06}>
              <div className="group glass rounded-2xl p-6 relative">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <time className="text-xs text-muted" dateTime={post.date}>
                    {new Date(post.date + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </time>
                  <span className="text-muted/30">·</span>
                  <span className="text-xs text-muted">{post.readTime} read</span>
                  <span className="text-muted/30">·</span>
                  <div className="flex gap-2 relative z-10">
                    {post.tags.map((t) => (
                      <Link
                        key={t}
                        href={`/blog/tag/${encodeURIComponent(t.toLowerCase())}`}
                        className={`text-[11px] px-2 py-0.5 rounded-md transition-colors ${
                          t.toLowerCase() === decoded
                            ? "bg-accent/20 text-accent-light"
                            : "bg-accent/10 text-accent-light hover:bg-accent/20"
                        }`}
                      >
                        {t}
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
        </div>
      </section>
    </>
  );
}
