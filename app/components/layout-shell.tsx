"use client";

import { usePathname } from "next/navigation";
import Nav from "./nav";
import Footer from "./footer";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isStandalone = pathname.startsWith("/jacob-cascone");

  if (isAdmin || isStandalone) {
    return <>{children}</>;
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen relative">{children}</main>
      <Footer />
    </>
  );
}
