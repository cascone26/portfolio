import AdminCard from "./components/admin-card";
import StatusBadge from "./components/status-badge";
import { clients } from "./data/clients";
import { quickLinks } from "./data/links";
import { notes } from "./data/notes";

export default function AdminOverview() {
  const totalClients = clients.length;
  const activeProjects = clients.filter((c) => c.status === "in-progress").length;
  const totalEarned = clients.filter((c) => c.paid).reduce((sum, c) => sum + c.amount, 0);
  const pending = clients.filter((c) => c.status === "delivered" && !c.paid).reduce((sum, c) => sum + c.amount, 0);
  const recentClients = clients.slice(-5).reverse();
  const openNotes = notes.filter((n) => !n.done).slice(0, 5);

  const stats = [
    { label: "Total Clients", value: totalClients },
    { label: "Active Projects", value: activeProjects },
    { label: "Revenue Earned", value: `$${totalEarned.toLocaleString()}` },
    { label: "Pending Payment", value: `$${pending.toLocaleString()}` },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Overview</h1>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <AdminCard key={s.label}>
            <p className="text-xs text-muted uppercase tracking-wider mb-1">{s.label}</p>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
          </AdminCard>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent clients */}
        <AdminCard>
          <h2 className="text-sm font-semibold text-foreground mb-4">Recent Clients</h2>
          {recentClients.length === 0 ? (
            <p className="text-sm text-muted">No clients yet. Add them in data/clients.ts</p>
          ) : (
            <div className="space-y-3">
              {recentClients.map((c) => (
                <div key={c.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground">{c.name}</p>
                    <p className="text-xs text-muted">{c.project}</p>
                  </div>
                  <StatusBadge status={c.status} />
                </div>
              ))}
            </div>
          )}
        </AdminCard>

        {/* To-do */}
        <AdminCard>
          <h2 className="text-sm font-semibold text-foreground mb-4">To-Do</h2>
          {openNotes.length === 0 ? (
            <p className="text-sm text-muted">All caught up.</p>
          ) : (
            <ul className="space-y-2">
              {openNotes.map((n) => (
                <li key={n.id} className="flex items-start gap-2 text-sm">
                  <span className="text-muted mt-0.5">&#9633;</span>
                  <span className="text-foreground">{n.text}</span>
                </li>
              ))}
            </ul>
          )}
        </AdminCard>

        {/* Quick links */}
        <AdminCard className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-foreground mb-4">Quick Links</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-white/[0.06] hover:border-accent/20 hover:bg-accent/5 transition-all"
              >
                <svg className="w-4 h-4 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <div>
                  <p className="text-sm text-foreground">{link.label}</p>
                  <p className="text-xs text-muted">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </AdminCard>
      </div>
    </div>
  );
}
