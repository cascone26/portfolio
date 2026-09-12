import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacob Cascone — AI Engineer",
  description:
    "AI Engineer who ships production products end-to-end — LessonDraft (live SaaS, real subscribers), Meta Tutor, and a multi-agent QA pipeline.",
  openGraph: {
    title: "Jacob Cascone — AI Engineer",
    description:
      "AI Engineer who ships production products end-to-end — LessonDraft (live SaaS, real subscribers), Meta Tutor, and a multi-agent QA pipeline.",
    type: "profile",
  },
  robots: { index: true, follow: true },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <h2 className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}

function ProjectCard({
  title,
  meta,
  href,
  bullets,
  video,
}: {
  title: string;
  meta: string;
  href?: string;
  bullets: string[];
  video?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 mb-6 backdrop-blur-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
        <h3 className="text-lg font-semibold text-white">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              {title} <span className="text-blue-400 text-sm align-middle">↗</span>
            </a>
          ) : (
            title
          )}
        </h3>
      </div>
      <p className="text-sm text-slate-400 italic mb-4">{meta}</p>
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-lg border border-white/10 mb-4"
        />
      )}
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-slate-300 leading-relaxed flex gap-2">
            <span className="text-blue-400 shrink-0">›</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function JacobCasconePage() {
  return (
    <main className="min-h-screen px-6 py-20 md:py-28 max-w-3xl mx-auto">
      {/* Hero */}
      <header className="mb-20">
        <p className="text-sm font-medium text-blue-400 tracking-wide mb-3">
          AI Engineer
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
          Jacob Cascone
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
          I ship production AI products end-to-end by directing AI-assisted development
          at speed — full stack, solo. LessonDraft is a live SaaS with real paying
          subscribers that I built and operate alone: Stripe billing, a multi-provider
          LLM pipeline with automatic failover, and 40+ AI-generated tools. I&rsquo;m also a
          working 6th grade teacher, which means the tools I build solve problems I
          actually have.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://lessondraft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-500 hover:bg-blue-400 transition-colors px-5 py-2.5 text-sm font-semibold text-white"
          >
            See LessonDraft live ↗
          </a>
          <a
            href="/jacob-cascone-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 hover:border-white/30 transition-colors px-5 py-2.5 text-sm font-semibold text-white"
          >
            Download résumé
          </a>
          <a
            href="https://github.com/cascone26"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 hover:border-white/30 transition-colors px-5 py-2.5 text-sm font-semibold text-white"
          >
            GitHub
          </a>
          <a
            href="mailto:cobo.cascone@gmail.com"
            className="rounded-lg border border-white/15 hover:border-white/30 transition-colors px-5 py-2.5 text-sm font-semibold text-white"
          >
            Email
          </a>
        </div>
      </header>

      <Section title="Stack">
        <div className="flex flex-wrap gap-2">
          {[
            "Claude API",
            "Multi-provider LLM failover",
            "Agent orchestration",
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Postgres / Supabase",
            "Stripe billing & webhooks",
            "Vercel",
            "Production monitoring",
          ].map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      </Section>

      <Section title="Featured Work">
        <ProjectCard
          title="LessonDraft"
          meta="AI lesson-planning platform for K-12 teachers · lessondraft.com · Solo builder & operator · Live, real paying subscribers"
          href="https://lessondraft.com"
          video="/demos/lessondraft-demo.mp4"
          bullets={[
            "Full production SaaS built solo: Next.js frontend, Stripe subscription billing across 3 tiers, Supabase-backed accounts, and 40+ AI-generated tools (lesson plans, worksheets, rubrics, IEP goals, report-card comments) — no signup required to try the core generator.",
            "Designed a multi-provider AI generation pipeline with automatic failover across free-tier, self-hosted, and premium models, with self-healing health checks that route around a dead provider automatically — keeps marginal AI cost near zero without sacrificing uptime.",
            "Audited the full Stripe billing surface end-to-end against live checkout data and found four independent revenue-blocking bugs in one pass — including a mispriced plan that had silently overcharged for five months and a webhook gap that would have let failed-payment customers keep paid access indefinitely. All four fixed and re-verified live.",
            "Built custom production monitoring (synthetic customer-journey canaries, health checks) and a cross-machine backup path for the AI generation layer.",
          ]}
        />
        <ProjectCard
          title="llm-ladder"
          meta="Open-source npm package · github.com/cascone26/llm-ladder · Zero runtime dependencies"
          href="https://github.com/cascone26/llm-ladder"
          bullets={[
            "Extracted and generalized LessonDraft's production provider-failover system into a standalone, documented library: multi-provider LLM failover with circuit breaking and proactive budget-aware standdown.",
            "Built a chaos-test suite that injects real failure modes (timeouts, 429 rate limits, malformed responses) and asserts on actual failover behavior — not just happy-path success. Verifies a dead provider gets skipped after its circuit opens, a circuit re-closes after its window, a canary-confirmed failure opens a circuit on the first strike instead of waiting for three, and a budget guard stands a provider down using its real check-then-record ordering.",
            "10/10 tests passing, deterministic (injectable clock, no real sleeps, full suite runs in under 100ms). The budget-guard test initially had wrong math and failed on its first run — left that in the README as the honest story, not smoothed over.",
          ]}
        />
        <ProjectCard
          title="Meta Tutor"
          meta="Multi-subject AI learning platform · Solo builder & operator"
          bullets={[
            "Refactored a single-subject study tool into a subject-agnostic architecture — one shared AI-chat layer, progress-tracking interface, and content-grounding registry, with each new subject (8 real classes, chess, trivia) plugging in as an adapter instead of duplicated code.",
            "Built a chess module integrating a real chess engine client-side with zero server cost, with move-quality analysis wired into the same cross-subject progress system.",
            "Found and fixed two silent production incidents via direct live investigation — a corrupted environment variable that silently broke every database-backed feature app-wide, and a stale auth-token sync gap breaking every AI route.",
          ]}
        />
        <ProjectCard
          title="Multi-Round AI Verification Pipeline for a 36K-Asset Catalog"
          meta="Personal game-asset project"
          bullets={[
            "Designed a multi-round verification pipeline — a 31-agent contact-sheet review, then an adversarial \"skeptic\" AI pass, then personal human spot-check at full resolution — to QA a 36,000+ sprite catalog against intended name/appearance. Found that even the adversarial AI layer had real error rates in both directions, closed only by human-in-the-loop review; the final verified set is hard-blocked in the generation pipeline.",
          ]}
        />
      </Section>

      <Section title="Open Source">
        <div className="grid sm:grid-cols-3 gap-3">
          <a
            href="https://github.com/cascone26/deal-scout"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-blue-400/40 transition-colors"
          >
            <p className="font-semibold text-white text-sm mb-1">deal-scout ↗</p>
            <p className="text-xs text-slate-400">
              34-source deal-aggregation bot, $0 cost via pure heuristic scoring
            </p>
          </a>
          <a
            href="https://github.com/cascone26/deep-down"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-blue-400/40 transition-colors"
          >
            <p className="font-semibold text-white text-sm mb-1">deep-down ↗</p>
            <p className="text-xs text-slate-400">
              6-phase Roblox game, engine-verified via automated headless testing
            </p>
          </a>
          <a
            href="https://github.com/cascone26/claude-usage-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-blue-400/40 transition-colors"
          >
            <p className="font-semibold text-white text-sm mb-1">
              claude-usage-tracker ↗
            </p>
            <p className="text-xs text-slate-400">Tooling built around Claude itself</p>
          </a>
        </div>
      </Section>

      <Section title="Background">
        <div className="text-sm text-slate-300 leading-relaxed space-y-3">
          <p>
            <span className="text-white font-semibold">6th Grade Lead Teacher</span> —
            Regina Caeli Academy, Lenexa, KS (2024–Present). Teach core subjects while
            building the AI tools above, directly informed by real classroom needs.
          </p>
          <p>
            <span className="text-white font-semibold">Education</span> — B.A. in
            Education, Grand Canyon University (in progress). High School Diploma, St.
            James Academy, 2023.
          </p>
        </div>
      </Section>

      <footer className="pt-10 border-t border-white/10 text-sm text-slate-500">
        Mission, KS (Remote) · cobo.cascone@gmail.com
      </footer>
    </main>
  );
}
