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

export const clients: Client[] = [
  // Example clients — edit this file and redeploy to update
  // {
  //   id: "1",
  //   name: "KC Coffee Co",
  //   project: "Business website",
  //   status: "paid",
  //   amount: 800,
  //   paid: true,
  //   notes: "5-page site with contact form. Referred by mom.",
  //   date: "2026-02-01",
  // },
];
