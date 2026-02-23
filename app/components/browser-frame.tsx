import { type ReactNode } from "react";

interface BrowserFrameProps {
  url?: string;
  children: ReactNode;
  className?: string;
}

export default function BrowserFrame({
  url = "localhost:3000",
  children,
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40 ${className}`}
    >
      {/* Chrome bar */}
      <div className="bg-[#0f1629] px-4 py-3 flex items-center gap-3 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white/[0.05] rounded-lg px-4 py-1 text-[11px] text-muted/60 font-mono">
            {url}
          </div>
        </div>
        <div className="w-[52px]" /> {/* spacer to center url bar */}
      </div>
      {/* Content */}
      <div className="bg-[#080d1a]">{children}</div>
    </div>
  );
}
