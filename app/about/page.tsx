import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/fade-in";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Jacob Cascone — a 20-year-old web developer and GCU student based in Mission, KS. I build websites and AI tools for small businesses.",
};

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    category: "AI & Automation",
    items: [
      "Anthropic API",
      "AI Chatbots",
      "Email Automation",
      "Social Media Automation",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Vercel",
      "Git/GitHub",
      "Stripe",
      "Clerk",
      "Google Business Profile",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-24 pb-12 px-6">
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] rounded-full bg-blue-500/[0.05] blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              About <span className="gradient-text-blue">Me</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted text-lg leading-relaxed">
              The short version: I build things for the internet and I care about
              doing it well.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">
                Who I Am
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I&apos;m Jacob — 20 years old, based in Mission, KS. I&apos;m
                  currently a student at Grand Canyon University studying
                  elementary education and Christian teaching, graduating in
                  April 2027.
                </p>
                <p>
                  On the side, I build websites and AI tools for small
                  businesses. I taught myself web development and have shipped a
                  live SaaS product (LessonDraft) with real users, real payments,
                  and real AI integration. I&apos;m not an agency — I&apos;m one
                  person who actually builds the thing.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">
                What Drives Me
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I care about education — it&apos;s what I&apos;m studying and
                  it&apos;s why I built LessonDraft. I also care about small
                  businesses. Most local business owners don&apos;t need a $10k
                  agency website. They need something clean, fast, and affordable
                  that actually helps them get customers.
                </p>
                <p>
                  I speak plain English, not tech jargon. I build things that
                  work, not things that impress other developers. And I charge
                  fair prices because I know what it&apos;s like to work within a
                  budget.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-6 tracking-tight">
                Tech Stack
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {skills.map((group) => (
                  <div key={group.category} className="glass rounded-2xl p-6">
                    <h3 className="font-semibold text-sm text-accent-light mb-4">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="bg-accent/10 text-foreground text-xs px-2.5 py-1 rounded-lg"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="relative glass rounded-2xl p-10 text-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] rounded-full bg-accent/[0.06] blur-[60px] pointer-events-none" />
              <h2 className="text-2xl font-bold mb-3 tracking-tight relative">
                Want to work together?
              </h2>
              <p className="text-muted mb-6 relative">
                I&apos;m always open to new projects and conversations.
              </p>
              <Link
                href="/contact"
                className="btn-gradient inline-block text-white font-semibold px-8 py-3.5 rounded-xl relative"
              >
                Get in touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
