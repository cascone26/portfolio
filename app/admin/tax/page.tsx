import AdminCard from "../components/admin-card";

const quarters = [
  { q: "Q1 2026", period: "Jan 1 – Mar 31", due: "April 15, 2026", status: "upcoming" },
  { q: "Q2 2026", period: "Apr 1 – May 31", due: "June 16, 2026", status: "upcoming" },
  { q: "Q3 2026", period: "Jun 1 – Aug 31", due: "September 15, 2026", status: "upcoming" },
  { q: "Q4 2026", period: "Sep 1 – Dec 31", due: "January 15, 2027", status: "upcoming" },
];

const expenses = [
  "Software subscriptions (Vercel, GitHub, design tools, etc.)",
  "Domain names and hosting",
  "Equipment (computer, monitor, peripherals — pro-rated %)",
  "Home office (pro-rated % of rent/mortgage and utilities)",
  "Phone bill (pro-rated %)",
  "Professional development (courses, books)",
  "Advertising and marketing spend",
  "Contractor payments (if you hire someone)",
  "Bank and payment processing fees (Stripe, Venmo, etc.)",
  "Business meals with clients (50% deductible)",
];

export default function TaxPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-2">Tax</h1>
      <p className="text-sm text-muted mb-6">Sole proprietor / self-employed reference. Not tax advice — consult a CPA if needed.</p>

      {/* Quarterly deadlines */}
      <AdminCard className="mb-6">
        <h2 className="text-sm font-semibold text-foreground mb-4">2026 Estimated Tax Deadlines</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left py-2 pr-6 text-xs font-medium text-muted uppercase tracking-wider">Quarter</th>
                <th className="text-left py-2 pr-6 text-xs font-medium text-muted uppercase tracking-wider">Income Period</th>
                <th className="text-left py-2 text-xs font-medium text-muted uppercase tracking-wider">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {quarters.map((q) => (
                <tr key={q.q} className="border-b border-white/[0.03]">
                  <td className="py-3 pr-6 text-foreground font-medium">{q.q}</td>
                  <td className="py-3 pr-6 text-muted">{q.period}</td>
                  <td className="py-3 text-yellow-400 font-medium">{q.due}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-4">Pay at <span className="text-foreground">irs.gov/payments</span> using IRS Direct Pay (free). Select "Estimated Tax" → Form 1040-ES.</p>
      </AdminCard>

      {/* How much to set aside */}
      <AdminCard className="mb-6">
        <h2 className="text-sm font-semibold text-foreground mb-4">How Much to Set Aside</h2>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
            <span className="text-muted">Self-employment tax (Social Security + Medicare)</span>
            <span className="text-foreground font-medium">~15.3%</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
            <span className="text-muted">Federal income tax (rough estimate, varies by bracket)</span>
            <span className="text-foreground font-medium">~10–22%</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
            <span className="text-muted">Missouri state income tax</span>
            <span className="text-foreground font-medium">~4.7%</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-foreground font-semibold">Safe estimate to set aside</span>
            <span className="text-emerald-400 font-bold text-base">25–30% of every payment</span>
          </div>
        </div>
        <p className="text-xs text-muted mt-4">Half of SE tax is deductible from income. A CPA can give you exact numbers — worth it once you're earning consistently.</p>
      </AdminCard>

      {/* Deductible expenses */}
      <AdminCard className="mb-6">
        <h2 className="text-sm font-semibold text-foreground mb-4">Deductible Business Expenses</h2>
        <p className="text-xs text-muted mb-3">Track these. They reduce your taxable income directly.</p>
        <ul className="space-y-2">
          {expenses.map((e) => (
            <li key={e} className="flex items-start gap-2 text-sm text-muted">
              <span className="text-accent-light mt-0.5 shrink-0">–</span>
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </AdminCard>

      {/* Income tracking note */}
      <AdminCard>
        <h2 className="text-sm font-semibold text-foreground mb-2">Income Tracking</h2>
        <p className="text-sm text-muted leading-relaxed">
          Your income is tracked on the{" "}
          <a href="/admin/revenue" className="text-accent-light hover:underline">Revenue page</a>.
          {" "}For tax purposes, record the date and amount of each payment received (not invoiced).
          Keep receipts for all business expenses — a folder in Google Drive works fine.
          At year end, you&apos;ll report net profit (income minus expenses) on Schedule C with your 1040.
        </p>
        <div className="mt-4 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
          <p className="text-xs text-yellow-400">You&apos;ll receive a 1099-NEC from any client who pays you $600+ in a year. Stripe and other payment processors may also issue a 1099-K. Report all income regardless of whether you receive a form.</p>
        </div>
      </AdminCard>
    </div>
  );
}
