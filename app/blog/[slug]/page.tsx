import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "../../components/fade-in";
import { posts } from "../posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return (
    <>
      <section className="relative pt-12 pb-8 px-6">
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] rounded-full bg-blue-500/[0.05] blur-[100px] pointer-events-none" />
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
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <time className="text-sm text-muted" dateTime={post.date}>
                {new Date(post.date + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
              <span className="text-muted/30">·</span>
              <span className="text-sm text-muted">{post.readTime} read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent/10 text-accent-light text-xs px-2.5 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <FadeIn>
          <article className="max-w-3xl mx-auto blog-content">
            {post.content
              .trim()
              .split("\n\n")
              .map((block, i) => {
                const trimmed = block.trim();
                if (!trimmed) return null;

                // H2
                if (trimmed.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-xl font-bold mt-10 mb-4 tracking-tight"
                    >
                      {trimmed.replace("## ", "")}
                    </h2>
                  );
                }

                // H3
                if (trimmed.startsWith("### ")) {
                  return (
                    <h3
                      key={i}
                      className="text-lg font-semibold mt-8 mb-3"
                    >
                      {trimmed.replace("### ", "")}
                    </h3>
                  );
                }

                // Unordered list (may have a non-list intro line)
                const lines = trimmed.split("\n").filter((l) => l.trim());
                const firstListIdx = lines.findIndex((l) => l.trim().startsWith("- "));
                if (firstListIdx >= 0) {
                  const introLines = lines.slice(0, firstListIdx);
                  const listLines = lines.slice(firstListIdx);
                  return (
                    <div key={i}>
                      {introLines.length > 0 && (
                        <p
                          className="text-muted leading-relaxed my-4"
                          dangerouslySetInnerHTML={{
                            __html: formatInline(introLines.join(" ")),
                          }}
                        />
                      )}
                      <ul className="space-y-2 my-4">
                        {listLines.map((item, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-muted leading-relaxed"
                          >
                            <span className="text-accent-light shrink-0 mt-1.5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/></svg>
                            </span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: formatInline(item.replace(/^- /, "")),
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                // Ordered list (may have a non-list intro line)
                const firstOlIdx = lines.findIndex((l) => /^\d+\.\s/.test(l.trim()));
                if (firstOlIdx >= 0) {
                  const introLines = lines.slice(0, firstOlIdx);
                  const listLines = lines.slice(firstOlIdx);
                  return (
                    <div key={i}>
                      {introLines.length > 0 && (
                        <p
                          className="text-muted leading-relaxed my-4"
                          dangerouslySetInnerHTML={{
                            __html: formatInline(introLines.join(" ")),
                          }}
                        />
                      )}
                      <ol className="space-y-2 my-4">
                        {listLines.map((item, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-muted leading-relaxed"
                          >
                            <span className="text-accent-light shrink-0 font-semibold text-sm w-5 text-right">
                              {j + 1}.
                            </span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: formatInline(
                                  item.replace(/^\d+\.\s/, "")
                                ),
                              }}
                            />
                          </li>
                        ))}
                      </ol>
                    </div>
                  );
                }

                // Regular paragraph
                return (
                  <p
                    key={i}
                    className="text-muted leading-relaxed my-4"
                    dangerouslySetInnerHTML={{
                      __html: formatInline(trimmed),
                    }}
                  />
                );
              })}
          </article>
        </FadeIn>
      </section>

      {/* Post navigation */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-white/[0.06] pt-10 grid md:grid-cols-2 gap-4">
            {prevPost && (
              <FadeIn>
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="glass rounded-2xl p-5 block group"
                >
                  <p className="text-xs text-muted mb-2">← Previous</p>
                  <p className="font-medium text-sm group-hover:text-accent-light transition-colors">
                    {prevPost.title}
                  </p>
                </Link>
              </FadeIn>
            )}
            {nextPost && (
              <FadeIn delay={0.1}>
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="glass rounded-2xl p-5 block group md:text-right md:ml-auto"
                >
                  <p className="text-xs text-muted mb-2">Next →</p>
                  <p className="font-medium text-sm group-hover:text-accent-light transition-colors">
                    {nextPost.title}
                  </p>
                </Link>
              </FadeIn>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}
