import type { Metadata } from "next";
import { Geist } from "next/font/google";
import LayoutShell from "./components/layout-shell";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jacob Cascone | Web & AI Solutions",
    template: "%s | Jacob Cascone",
  },
  description:
    "I build websites and AI tools for small businesses in Kansas City. Fast, affordable, no tech jargon.",
  keywords:
    "web developer Kansas City, small business website KC, AI automation Kansas City, website design Mission KS",
  openGraph: {
    title: "Jacob Cascone | Web & AI Solutions",
    description:
      "I build websites and AI tools for small businesses in Kansas City.",
    type: "website",
    url: "https://portfolio-nine-sable-45.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} font-[family-name:var(--font-geist-sans)] antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {/* Global background effects */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0b1121]" />
          <div className="glow-orb w-[600px] h-[600px] bg-blue-500/30 -top-[200px] -left-[200px]" />
          <div className="glow-orb w-[500px] h-[500px] bg-indigo-500/20 top-[40%] -right-[150px]" />
          <div className="glow-orb w-[400px] h-[400px] bg-blue-600/15 bottom-[10%] left-[20%]" />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
