export default function AdminCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-white/[0.06] bg-[rgba(15,23,42,0.6)] backdrop-blur-sm p-5 ${className}`}
    >
      {children}
    </div>
  );
}
