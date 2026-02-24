export type ClientStatus = "lead" | "in-progress" | "delivered" | "paid";

export interface Client {
  id: string;
  name: string;
  project: string;
  status: ClientStatus;
  amount: number;
  paid: boolean;
  notes: string;
  date: string; // YYYY-MM-DD
}

// Edit this array and redeploy to update. Example:
// { id: "1", name: "KC Coffee Co", project: "Business website", status: "paid", amount: 800, paid: true, notes: "5-page site. Referred by mom.", date: "2026-02-01" },

export const clients: Client[] = [];
