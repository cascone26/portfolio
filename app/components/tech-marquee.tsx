"use client";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Stripe",
  "Vercel",
  "Anthropic API",
  "Clerk",
  "Git",
  "Framer Motion",
  "REST APIs",
  "HTML / CSS",
];

export default function TechMarquee() {
  return (
    <div className="overflow-hidden py-4 relative select-none">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0b1121] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0b1121] to-transparent z-10 pointer-events-none" />

      {/* Track */}
      <div className="marquee-track flex gap-3">
        {[...tech, ...tech].map((name, i) => (
          <span
            key={i}
            className="marquee-pill shrink-0 px-5 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-sm text-muted whitespace-nowrap transition-colors duration-300 hover:border-accent/30 hover:text-accent-light"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
