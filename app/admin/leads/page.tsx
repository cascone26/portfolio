import AdminCard from "../components/admin-card";

export default function LeadsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Leads</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <AdminCard>
          <h2 className="text-sm font-semibold text-foreground mb-3">Contact Form Submissions</h2>
          <p className="text-sm text-muted mb-4">
            Form submissions from the BuiltSimple contact page come through Formspree and land in your Gmail.
          </p>
          <div className="space-y-2">
            <a
              href="https://formspree.io/forms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent-light hover:underline"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Formspree Dashboard
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#search/from%3Aformspree"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent-light hover:underline"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Gmail — Formspree submissions
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent-light hover:underline"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Gmail Inbox
            </a>
          </div>
        </AdminCard>

        <AdminCard>
          <h2 className="text-sm font-semibold text-foreground mb-3">Current Setup</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex items-start gap-2">
              <span className="text-accent-light mt-0.5">&#8226;</span>
              Contact form on /contact posts to Formspree
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-light mt-0.5">&#8226;</span>
              Submissions forwarded to cobo.cascone@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-light mt-0.5">&#8226;</span>
              Phone number and email listed on site for direct contact
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-light mt-0.5">&#8226;</span>
              No CRM — track leads manually in clients.ts
            </li>
          </ul>
        </AdminCard>
      </div>
    </div>
  );
}
