import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import LayoutShell from "./components/layout-shell";
import OneSignalProvider from "./components/OneSignalProvider";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://builtsimple.dev"),
  title: {
    default: "BuiltSimple | Web & AI Solutions",
    template: "%s | BuiltSimple",
  },
  description:
    "We build websites and AI tools for small businesses in the Kansas City area. Fast, affordable, no tech jargon.",
  keywords:
    "web developer Kansas City, small business website KC, AI automation Kansas City, BuiltSimple, website design Mission KS",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "BuiltSimple | Web & AI Solutions",
    description:
      "We build websites and AI tools for small businesses in Kansas City.",
    type: "website",
    url: "https://builtsimple.dev",
    siteName: "BuiltSimple",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuiltSimple | Web & AI Solutions",
    description:
      "We build websites and AI tools for small businesses in Kansas City.",
  },
  alternates: {
    canonical: "https://builtsimple.dev",
    types: {
      "application/rss+xml": "https://builtsimple.dev/feed.xml",
    },
  },
  manifest: "/manifest.json",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "BuiltSimple",
                  url: "https://builtsimple.dev",
                  founder: {
                    "@type": "Person",
                    name: "Jacob Cascone",
                  },
                },
                {
                  "@type": "LocalBusiness",
                  name: "BuiltSimple",
                  url: "https://builtsimple.dev",
                  description:
                    "Web development and AI automation for small businesses in Kansas City.",
                  areaServed: {
                    "@type": "City",
                    name: "Kansas City",
                    containedInPlace: {
                      "@type": "State",
                      name: "Missouri",
                    },
                  },
                  founder: {
                    "@type": "Person",
                    name: "Jacob Cascone",
                  },
                  priceRange: "$$",
                  serviceType: [
                    "Web Development",
                    "AI Automation",
                    "Website Design",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "BuiltSimple",
                  url: "https://builtsimple.dev",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://builtsimple.dev/blog?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
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

        <OneSignalProvider>
          <LayoutShell>{children}</LayoutShell>
        </OneSignalProvider>
        <Analytics />
      </body>
    </html>
  );
}
