"use client";

import { useState } from "react";
import type { Client, ClientStatus } from "../data/clients";
import StatusBadge from "../components/status-badge";
import AdminCard from "../components/admin-card";

const statuses: (ClientStatus | "all")[] = ["all", "lead", "in-progress", "delivered", "paid"];

export default function ClientFilter({ clients }: { clients: Client[] }) {
  const [filter, setFilter] = useState<ClientStatus | "all">("all");

  const filtered = filter === "all" ? clients : clients.filter((c) => c.status === filter);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === s
                ? "bg-accent/15 text-accent-light border border-accent/30"
                : "text-muted border border-white/[0.06] hover:border-white/[0.12] hover:text-foreground"
            }`}
          >
            {s === "all" ? "All" : s === "in-progress" ? "In Progress" : s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* Client table */}
      {filtered.length === 0 ? (
        <AdminCard>
          <p className="text-sm text-muted">No clients{filter !== "all" ? ` with status "${filter}"` : ""}. Add them in data/clients.ts</p>
        </AdminCard>
      ) : (
        <AdminCard className="overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider">Client</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider">Project</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider">Status</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider">Amount</th>
                <th className="text-center px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider">Paid</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider">Notes</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-3 text-foreground font-medium">{c.name}</td>
                  <td className="px-5 py-3 text-muted">{c.project}</td>
                  <td className="px-5 py-3"><StatusBadge status={c.status} /></td>
                  <td className="px-5 py-3 text-right text-foreground">${c.amount.toLocaleString()}</td>
                  <td className="px-5 py-3 text-center">{c.paid ? <span className="text-emerald-400">Yes</span> : <span className="text-muted">No</span>}</td>
                  <td className="px-5 py-3 text-muted max-w-[200px] truncate">{c.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminCard>
      )}
    </div>
  );
}
