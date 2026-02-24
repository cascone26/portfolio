import AdminCard from "../components/admin-card";
import { services, discounts } from "../data/pricing";

export default function PricingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Pricing</h1>

      <AdminCard className="mb-6 overflow-x-auto p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06]">
              <th className="text-left px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider">Service</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider">Price</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.name} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                <td className="px-5 py-3 text-foreground font-medium">{s.name}</td>
                <td className="px-5 py-3 text-accent-light font-medium whitespace-nowrap">{s.price}</td>
                <td className="px-5 py-3 text-muted">{s.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </AdminCard>

      <AdminCard>
        <h2 className="text-sm font-semibold text-foreground mb-4">Discounts</h2>
        <div className="space-y-3">
          {discounts.map((d) => (
            <div key={d.name} className="flex items-start gap-3">
              <span className="text-accent-light text-lg leading-none mt-0.5">%</span>
              <div>
                <p className="text-sm text-foreground font-medium">{d.name}</p>
                <p className="text-sm text-muted">{d.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </AdminCard>
    </div>
  );
}
