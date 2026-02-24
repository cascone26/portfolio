import AdminCard from "../components/admin-card";
import { notes } from "../data/notes";

export default function NotesPage() {
  const open = notes.filter((n) => !n.done);
  const done = notes.filter((n) => n.done);

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Notes</h1>

      <AdminCard className="mb-6">
        <h2 className="text-sm font-semibold text-foreground mb-4">To-Do</h2>
        {open.length === 0 ? (
          <p className="text-sm text-muted">All caught up. Add items in data/notes.ts</p>
        ) : (
          <ul className="space-y-3">
            {open.map((n) => (
              <li key={n.id} className="flex items-start gap-3 text-sm">
                <span className="w-4 h-4 mt-0.5 rounded border border-white/[0.15] shrink-0" />
                <span className="text-foreground">{n.text}</span>
              </li>
            ))}
          </ul>
        )}
      </AdminCard>

      {done.length > 0 && (
        <AdminCard>
          <h2 className="text-sm font-semibold text-foreground mb-4">Done</h2>
          <ul className="space-y-3">
            {done.map((n) => (
              <li key={n.id} className="flex items-start gap-3 text-sm">
                <span className="w-4 h-4 mt-0.5 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-muted line-through">{n.text}</span>
              </li>
            ))}
          </ul>
        </AdminCard>
      )}

      <p className="text-xs text-muted mt-6">Edit app/admin/data/notes.ts and redeploy to update this list.</p>
    </div>
  );
}
