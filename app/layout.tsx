import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Nav from "./components/nav";
import Footer from "./components/footer";
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
        className={`${geist.variable} font-[family-name:var(--font-geist-sans)] antialiased bg-background text-foreground`}
      >
        <Nav />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
