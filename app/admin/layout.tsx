import type { Metadata } from "next";
import AdminShell from "./components/admin-shell";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: "noindex, nofollow",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
