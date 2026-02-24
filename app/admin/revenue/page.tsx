import AdminCard from "../components/admin-card";
import { clients } from "../data/clients";

export default function RevenuePage() {
  const totalEarned = clients.filter((c) => c.paid).reduce((sum, c) => sum + c.amount, 0);
  const pending = clients.filter((c) => c.status === "delivered" && !c.paid).reduce((sum, c) => sum + c.amount, 0);
  const inProgress = clients.filter((c) => c.status === "in-progress").reduce((sum, c) => sum + c.amount, 0);
  const pipeline = clients.filter((c) => c.status === "lead").reduce((sum, c) => sum + c.amount, 0);
  const totalValue = totalEarned + pending + inProgress + pipeline;

  const stats = [
    { label: "Total Earned", value: totalEarned, color: "text-emerald-400" },
    { label: "Pending Payment", value: pending, color: "text-yellow-400" },
    { label: "In-Progress Value", value: inProgress, color: "text-blue-400" },
    { label: "Pipeline (Leads)", value: pipeline, color: "text-purple-400" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Revenue</h1>

      {/* Big number */}
      <AdminCard className="mb-6">
        <p className="text-xs text-muted uppercase tracking-wider mb-1">Total Pipeline Value</p>
        <p className="text-4xl font-bold text-foreground">${totalValue.toLocaleString()}</p>
      </AdminCard>

      {/* Breakdown */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <AdminCard key={s.label}>
            <p className="text-xs text-muted uppercase tracking-wider mb-1">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>${s.value.toLocaleString()}</p>
          </AdminCard>
        ))}
      </div>

      {/* Revenue by client */}
      {clients.length > 0 && (
        <AdminCard className="overflow-x-auto p-0">
          <h2 className="text-sm font-semibold text-foreground px-5 pt-4 pb-2">By Client</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider">Client</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider">Project</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider">Amount</th>
                <th className="text-center px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider">Paid</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-3 text-foreground font-medium">{c.name}</td>
                  <td className="px-5 py-3 text-muted">{c.project}</td>
                  <td className="px-5 py-3 text-right text-foreground">${c.amount.toLocaleString()}</td>
                  <td className="px-5 py-3 text-center">{c.paid ? <span className="text-emerald-400">Yes</span> : <span className="text-muted">No</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminCard>
      )}

      {clients.length === 0 && (
        <AdminCard>
          <p className="text-sm text-muted">No clients yet. Revenue data is computed from data/clients.ts</p>
        </AdminCard>
      )}
    </div>
  );
}
