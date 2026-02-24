import AdminCard from "../components/admin-card";
import { scripts } from "../data/scripts";

export default function ScriptsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Sales Scripts</h1>

      <div className="space-y-6">
        {scripts.map((script) => (
          <AdminCard key={script.slug}>
            <h2 className="text-base font-semibold text-foreground mb-4">{script.title}</h2>
            <ol className="space-y-3">
              {script.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-accent-light font-medium shrink-0 mt-0.5">{i + 1}.</span>
                  <span className="text-foreground/90 leading-relaxed">{point}</span>
                </li>
              ))}
            </ol>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}
