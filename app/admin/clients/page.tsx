import { clients } from "../data/clients";
import ClientFilter from "./client-filter";

export default function ClientsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Clients</h1>
      <ClientFilter clients={clients} />
    </div>
  );
}
