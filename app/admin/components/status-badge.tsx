import type { ClientStatus } from "../data/clients";

const statusConfig: Record<ClientStatus, { label: string; classes: string }> = {
  lead: { label: "Lead", classes: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  "in-progress": { label: "In Progress", classes: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  delivered: { label: "Delivered", classes: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  paid: { label: "Paid", classes: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
};

export default function StatusBadge({ status }: { status: ClientStatus }) {
  const config = statusConfig[status];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${config.classes}`}>
      {config.label}
    </span>
  );
}
