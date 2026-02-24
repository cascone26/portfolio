"use client";

import { usePathname } from "next/navigation";
import Nav from "./nav";
import Footer from "./footer";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-20 relative">{children}</main>
      <Footer />
    </>
  );
}
